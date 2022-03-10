jQuery(document).ready(function() {

	/*
	 * "Tabulations"
	 */
	jQuery(document).on("click", ".js-AstrologyLinks-item button[data-astrologylinksclass]", function(){

		var linksContainer = jQuery(this).parents(".js-AstrologyLinks").eq(0);
		jQuery(".js-AstrologyLinks-item", linksContainer).removeClass("is-active");
		jQuery(this).parent().addClass('is-active');
		jQuery(".js-AstrologySelect-content", linksContainer).removeClass("is-visible");
		jQuery(".js-AstrologySelect-content." + jQuery(this).data("astrologylinksclass"), linksContainer).addClass("is-visible");
	});

	/*
	 * Comportement des "fausses" listes déroulantes
	 */
	jQuery(document).on("click", ".js-AstrologySelect-toggle", function() {

		var itemsList = jQuery(this).parent().next(".AstrologySelect-items").eq(0);
		itemsList.toggleClass('is-open');
		jQuery(this).toggleClass('is-toggled');
	});

	jQuery(document).on("click", ".js-AstrologySelect-item", function(){

		var itemsList = jQuery(this).parents(".AstrologySelect-items").eq(0);
		var currentItem = itemsList.prev(".js-AstrologySelect").eq(0);
		jQuery('.js-AstrologySelect-current', currentItem).html(jQuery(this).text());
		jQuery('.js-AstrologySelect-toggle', currentItem).removeClass('is-toggled');
		itemsList.removeClass('is-open');
	});

});
/**
 * Gestion du tarot
 */
var Tarot = new function()
{
	var self = this;

	var choosenCards = [];
	var configuration = {};
	var tarotElement;
	var selectableCards;
	var selectedCards;
	var shownCards = [];
	var result;

	this.chooseCard = function(index)
	{
		if (choosenCards.length < self.configuration['selectableCardsCount'])
		{
			choosenCards.push(index);
			jQuery(".TarotCardsList-item", self.selectableCards).eq(index).removeClass("TarotCardsList-item--selectable");

			// Remplissage carte selon ordre
			jQuery(".TarotCardsList-item", self.selectedCards).eq((self.configuration['selectOrder'][choosenCards.length - 1]) - 1).addClass("TarotCardsList-item--selected");
		}

		if (choosenCards.length == self.configuration['selectableCardsCount'])
		{
			jQuery(self.tarotElement).addClass('Tarot--selected');
		}
	}

	this.getResult = function()
	{
		jQuery(self.selectableCards).remove();
		jQuery(self.tarotElement).addClass('Tarot--loading');
		jQuery("input", self.selectedCards).val("");
		jQuery.ajax({
			url: '/direct/astrology/tarot',
			type: 'POST',
			data: {
				tarot : self.configuration['tarot'],
				selectedCards : choosenCards
			},
			dataType: "json",
			success: function(response)
			{
				self.result = response.data;
				jQuery(self.tarotElement).removeClass('Tarot--loading');
				jQuery(self.tarotElement).addClass('Tarot--resultsLoaded');
				jQuery("input", self.selectedCards).remove();

				self.disableSelectedCards();
				self.enableNextSelectedCard();
			}
		});
	}

	this.disableSelectedCards = function()
	{
		jQuery(".TarotCardsList-item", self.selectedCards).addClass("TarotCardsList-item--disabled");
	}

	this.enableNextSelectedCard = function()
	{
		var cardIndex = self.configuration['selectOrder'][shownCards.length] - 1;
		var enabledCard = jQuery(".TarotCardsList-item", self.selectedCards).eq(cardIndex);
		enabledCard.removeClass("TarotCardsList-item--disabled");
		enabledCard.data('position', cardIndex);
		enabledCard.attr('data-position', cardIndex);
	}

	this.showCardContent = function(position)
	{
		var shownCard = jQuery(".TarotCardsList-item", self.selectedCards).eq(position);

		var data = self.result['cards'][shownCards.length + 1];
		var title = data.title;
		if (data.label != null)
		{
			title = '<span class="tarotResultItem-label">' + data.label + ' : </span>' + title;
		}

		if (typeof(data.text) == "object")
		{
			var text = '';
			jQuery(data.text).each(function(index, subText){
				text += '<div class="tarotResultItem-subText"><span class="tarotResultItem-subTextTitle">' + subText.title + ' : </span>' + subText.text + '</div>';
			});
		}
		else
		{
			var text = data.text;
		}
		shownCard.css("background-image", "url(https://www.cosmopolitan.fr/image/picto/astro/tarots/" + self.configuration['tarot'] + "/" + data.image + "?4)");

		var contentHTML = '<div class="tarotResultItem"> \
			<div class="tarotResultItem-title">' + title + '</div> \
			<div class="tarotResultItem-text">' + text + '</div> \
		</div>';

		jQuery('.TarotResult', self.tarotElement).append(contentHTML);

		shownCard.addClass("TarotCardsList-item--shown");
		shownCards.push(position);
		this.enableNextSelectedCard();

		// Scroll to content
		var headerHeight = jQuery('#header').outerHeight();
		var windowHeight = jQuery(window).height();
		var resultHeight = jQuery('.TarotResult .tarotResultItem:eq('+position+')').outerHeight();
		var resultHeightWithMargin = jQuery('.TarotResult .tarotResultItem:eq('+position+')').outerHeight(true);
		var resultTopOffset = jQuery('.TarotResult .tarotResultItem:eq('+position+')').offset().top;
		var distanceToScroll = resultTopOffset - (windowHeight - resultHeightWithMargin);
		if(resultHeight > (jQuery(window).height() - headerHeight))
		{
			var distanceToScroll = resultTopOffset - headerHeight - 15; // 15 = marge entre le header et l'affichage du texte
		}
		jQuery("html, body").animate(
			{
				scrollTop: distanceToScroll
			},
			250
		);

		// Affichage du bouton pour afficher la synthèse
		if (shownCards.length == self.configuration['selectableCardsCount'])
		{
			if (self.result.synthesis)
			{
				this.enableSynthesis();
			}
			else
			{
				jQuery(self.tarotElement).addClass('Tarot--completed');
			}
		}
	}

	this.enableSynthesis = function()
	{
		jQuery(".TarotSynthesis", self.tarotElement).show();
	}

	this.showSynthesis = function()
	{
		jQuery(".TarotSynthesis", self.tarotElement).addClass('TarotSynthesis--text').html(self.result.synthesis);
		jQuery(self.tarotElement).addClass('Tarot--completed');
	}

	this.setConfiguration = function(configuration)
	{
		this.configuration = configuration;
	}

}

// Si on est en affichage "mobile", on choisit les cartes automatiquement
jQuery(document).available(
	".Tarot",
	function()
	{

		tarotElement = jQuery(".Tarot");
		Tarot.tarotElement = tarotElement;
		Tarot.selectedCards = jQuery(".TarotCardsList-selected", tarotElement);
		Tarot.selectableCards = jQuery(".TarotCardsList-selectable", tarotElement);

		/*
		 * Branchement des mécanismes
		 */
		tarotElement
			.on("chooseCard", function(event, index)
			{
				Tarot.chooseCard(index);
			})
			.on("getResult", function(event)
			{
				Tarot.getResult();
			})
			.on("showCardContent", function(event, position)
			{
				Tarot.showCardContent(position);
			})
			.on("showSynthesis", function(event)
			{
				Tarot.showSynthesis();
			})
			.on("restart", function(event)
			{
				jQuery('html, body').scrollTop(0);
				location.reload();
			});


		jQuery(document).on(
			"click",
			".TarotCardsList-selectable .TarotCardsList-item--selectable",
			function(event)
			{
				var cardElement = jQuery(this);
				tarotElement.trigger("chooseCard", [cardElement.index()]);
			}
		);

		jQuery(document).on(
			"click",
			".TarotCardsList-selected input",
			function(event)
			{
				tarotElement.trigger("getResult");
			}
		);

		jQuery(document).on(
			"click",
			".Tarot--resultsLoaded .TarotCardsList-selected .TarotCardsList-item:not(.TarotCardsList-item--disabled):not(.TarotCardsList-item--shown)",
			function(event)
			{
				tarotElement.trigger("showCardContent", [jQuery(this).data('position')]);
			}
		);

		jQuery(document).on(
			"click",
			".Tarot--resultsLoaded .TarotSynthesis input",
			function(event)
			{
				tarotElement.trigger("showSynthesis");
			}
		);

		jQuery(document).on(
			"click",
			".Tarot--completed .TarotRestart input",
			function(event)
			{
				tarotElement.trigger("restart");
			}
		);



		var chooseTarotCards = function()
		{
			Tarot.getResult();
		}

		// Dès que l'élément est présent dans la page, évaluation à chaque fois que la page passe en déclinaison "mobile"
		//runOnPageDeclination("small", chooseTarotCards);
		chooseTarotCards();
	},
	{limit: 1, endsOnDOMReady: true}
);
/**
 * Gestion des compatibilités
 */
var Compatibilite = new function()
{
	var self = this;

	var choosenItems = {};
	var configuration = {};
	var compatibiliteElement;

	this.chooseItem = function(item)
	{
		var compatibiliteList = jQuery(item).parents(".AstrologySigns-select").eq(0);
		var listIndex = jQuery(compatibiliteList, ".Compatibilite-items").index();

		if(item.data('qname')!='') {
			choosenItems[listIndex] = item.data('qname');
		}

		if(choosenItems[0] && choosenItems[1])
		{
			this.compatibiliteElement.off("chooseItem");
			this.goToResultPage();
		}
	}

	this.goToResultPage = function()
	{
		jQuery(".Compatibilite-items", this.compatibiliteElement).height(jQuery(".Compatibilite-items", this.compatibiliteElement).height());
		this.compatibiliteElement.addClass('is-loading');

		var resultPageURL = this.configuration['URLPattern'].replace('[item1]', choosenItems[0]);
		resultPageURL = resultPageURL.replace('[item2]', choosenItems[1]);
		document.location.href = resultPageURL;
	}

	this.setConfiguration = function(configuration)
	{
		this.configuration = configuration;
	}

}

jQuery(document).ready(function()
{
	compatibiliteElement = jQuery(".Compatibilite");
	Compatibilite.compatibiliteElement = compatibiliteElement;

	/*
	 * Branchement des mécanismes
	 */
	compatibiliteElement
		.on("chooseItem", function(event, item)
		{
			Compatibilite.chooseItem(item);
		});

	jQuery(document).on(
		"change",
		".Compatibilite .AstrologySigns-select",
		function(event)
		{
			compatibiliteElement.trigger("chooseItem", [jQuery(this).find(':selected')]);
		}
	);

});
jQuery(document).available(
	".js-astrologyCalculs",
	function()
	{
		var container = jQuery(this);
		var configuration = container.data("configuration");
		if (typeof(configuration) == "string")
		{
			configuration = JSON.parse(configuration);
		}

		var form = jQuery(".js-astrologyCalculs-form", this);
		var formContainer = form.parents(".AstrologyCalculs-formContainer").eq(0);

		var resultsContainer = jQuery(".js-AstrologyCalculs-results", this);

		function fillValues(values)
		{
			var sign = values.results.signeZodiaque.qName;

			jQuery(".js-AstrologyCalculs-firstName").text(values.firstName);

			var elementCount = configuration.length;

			for (var index = 0; index < elementCount; ++index)
			{
				var value = values.results[configuration[index].calcul];
				var label = configuration[index].label;
				var URL = configuration[index].URL;

				var textValue = "";

				switch (configuration[index].calcul)
				{
					case "ascendant":
						URL = URL.replace("[sign]", sign).replace("[ascendant]", value.qName);
						textValue = value.label;
						break;

					default:
						if (value && value.qName)
						{
							URL = URL.replace("[sign]", value.qName);
							textValue = value.label;
						}
						else if (typeof(value) == "number")
						{
							URL = URL.replace("[number]", value);
							textValue = value;
						}
				}

				if (textValue != "")
				{
					jQuery(".js-AstrologyCalculs-" + configuration[index].calcul)
						.attr("href", URL)
						.text(textValue)
						.removeClass("is-hidden");
				}
				else
				{
					jQuery(".js-AstrologyCalculs-" + configuration[index].calcul).addClass("is-hidden");
				}
			}

			formContainer.addClass("is-hidden");
			resultsContainer.removeClass("is-hidden");
		}

		var storedValues = localStorage.getItem("astrologicalProfile");
		if (storedValues != null)
		{
			fillValues(JSON.parse(storedValues));
		}

		form.on(
			"submit",
			function(event)
			{
				event.preventDefault();

				container.addClass("is-loading");

				jQuery.ajax({
					url: form.attr("action"),
					type: form.attr("method"),
					data: form.serialize(),
					dataType: "json",
					success: function(response)
					{
						var values = response.data;
						fillValues(values);
						container.removeClass("is-loading");

						if (typeof(localStorage) != "undefined")
						{
							localStorage.setItem("astrologicalProfile", JSON.stringify(values));
						}
					}
				});
			}
		);

		jQuery(".js-clearResults").on(
			"click",
			function()
			{
				formContainer.removeClass("is-hidden");
				resultsContainer.addClass("is-hidden");
			}
		);
	},
	{endsOnDOMReady: true}
);
function keepElementVisible(e,t){"object"!=typeof t&&(t={})
var i
if(t.activePageDeclinations)if(t.activePageDeclinations instanceof Object)i=t.activePageDeclinations
else if(i={},t.activePageDeclinations instanceof Array)for(var n=0;n<t.activePageDeclinations.length;++n)i[t.activePageDeclinations[n]]=!0
else i[t.activePageDeclinations]=!0
var o=function(){try{if(e=jQuery(e),!e.length)throw"Invalid element specified"
var n,o,a,r,s=e.outerHeight(!0),c=0,l=!0
if(t.scrollingElement?(l=!1,r=jQuery(t.scrollingElement)):r=jQuery(window),!r.length)throw"Invalid scrolling element"
if(n=jQuery(t.container),n.length)"static"===n.css("position")&&n.css("position","relative")
else{n=void 0
var u=e
do u=u.parent(),!u||"static"===u.css("position")&&"body"!==u.get(0).nodeName.toLowerCase()||(n=u)
while(u&&!n)}var d=function(e,t){return position=parseInt(e),isNaN(position)&&(("object"!=typeof e||"function"!=typeof e.offset)&&(e=jQuery(e),e.length||(e=void 0)),e&&(position=parseInt(e.offset().top+(t?e.outerHeight()+(parseInt(e.css("marginBottom"))||0):0)))),isNaN(position)&&(position=void 0),position},g=function(){if(s=e.outerHeight(!0),o=d(t.areaTop)||d(t.area)||e.offset().top,a=d(t.areaBottom)||d(t.area,!0)||n.offset().top+n.outerHeight(),t.keepParentMargin){var i=e.parent()
c=parseFloat(i.css("margin-top"))||parseFloat(i.prev().css("margin-bottom"))}elementMaximumTop=a-s}
if(g(),o+s>=a)throw"Invalid area size"
var f
if(t.mutationObservedElements&&(t.mutationObservedElements=jQuery(t.mutationObservedElements),t.mutationObservedElements.length&&"function"==typeof MutationObserver)){f=new MutationObserver(function(){setTimeout(function(){g(),Q()},10)})
var m={childList:!0,attributes:!0,characterData:!0,subtree:!0}}var y=e.offset().left,p=jQuery(document).width(),v=y-n.offset().left,h=n.width(),j=function(){var t=""
switch(e.css("position")){case"absolute":t=v-(h-n.width())/2
break
case"fixed":t=y-(p-jQuery(document).width())/2}e.css("left",t)},Q=function(){var t=getVirtualPageScrollTop()
t>elementMaximumTop-c?(e.css({position:"absolute",top:elementMaximumTop-n.offset().top}),j()):t>o-c?(e.css({position:"fixed",top:(l?getVirtualPageTop():r.offset().top)+c,"margin-top":"15px"}),j()):(e.css({left:"",position:"",top:"","margin-top":""}),jQuery(window).off("resize",j)),"static"!==e.css("position")&&jQuery(window).on("resize",j)},A=1e4
void 0!==t.autoRecalculationOnScrollDuration&&(A=t.autoRecalculationOnScrollDuration)
var C,b=(new Date).getTime()+A,D=function(){g(),(new Date).getTime()>b&&r.off("scroll",D)},w=function(){getPageDeclinationName()
!i||i[getPageDeclinationName()]?(g(),f&&t.mutationObservedElements.each(function(){f.observe(this,m)}),t.recalculationDelay&&(C=setInterval(g,t.recalculationDelay)),r.on("scroll",Q),(new Date).getTime()<b&&r.on("scroll",D)):(f&&f.disconnect(),clearInterval(C),e.css({left:"",position:"",top:""}),r.off("scroll",Q),r.off("scroll",D))}
w(),jQuery(document).ready(function(){r.trigger("scroll")}),i&&jQuery(document).on("pageDeclinationChange",w)}catch(O){t.debug&&console.log("keepElementVisible(): "+O)}}
!i||i[getPageDeclinationName()]?o():jQuery(document).on("pageDeclinationChange",function(e){i[e.name]&&o()})}function scrollHandlerForAsideAdvertising(){var e=0
if(jQuery(".ArticleContent-aside:not(.ArticleContent-advertising)").each(function(){e+=jQuery(this).outerHeight(!0)}),jQuery(".ArticleContent-aside.ArticleContent-advertising--secondary").css({bottom:e+"px"}),jQuery(".ArticleContent-aside.ArticleContent-advertising--secondary .External").hasClass("is-empty")===!1){var t=jQuery(".ArticleContent").outerHeight()
jQuery(".ArticleContent-aside.ArticleContent-lastArticles").each(function(){t-=jQuery(this).outerHeight()}),t-=parseInt(jQuery(".ArticleContent-aside.ArticleContent-advertising .External").eq(0).css("marginBottom")),jQuery(".ArticleContent-aside.ArticleContent-advertising--secondary").css({height:t/2+"px"}),jQuery(".ArticleContent-aside.ArticleContent-advertising--secondary .External").attr("style",["position: -webkit-sticky;position: sticky","top: "+(jQuery(".SiteHeader-contentContainer").height()+15)+"px"].join(";"))}}jQuery(document).available(".ArticleContent",function(){var e=jQuery(".ArticleContent"),t=function(){asideHeight=0,jQuery(".ArticleContent-aside").each(function(){asideHeight+=jQuery(this).outerHeight(!0)}),e.css("min-height",asideHeight)},i=function(){e.css("min-height","")}
runOnPageDeclination("large",t,i)
var n
"function"==typeof MutationObserver&&(n=new MutationObserver(t)),jQuery(this).available(".ArticleContent-advertising .External[rel] > *",function(){if("large"===getPageDeclinationName()&&t(),n){var e=jQuery(this).parent().get(0)
runOnPageDeclination("large",function(){n.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})},function(){n.disconnect()})}else setTimeout(t,1e3),setTimeout(t,5e3)},{limit:1,endsOnDOMReady:!0}),jQuery(document).ready(function(){"large"===getPageDeclinationName()&&t()})},{limit:1,endsOnDOMReady:!0}),runOnPageDeclination("large",function(){scrollHandlerForAsideAdvertising(),jQuery(window).on("scroll",scrollHandlerForAsideAdvertising)},function(){jQuery(window).off("scroll",scrollHandlerForAsideAdvertising),jQuery(".ArticleContent-aside.ArticleContent-advertising--secondary").attr("style","height: auto")}),jQuery(document).available(".ArticleContent-advertising--primary .External[rel]",function(){keepElementVisible(jQuery(this).parents(".ArticleContent-advertising").eq(0),{areaTop:".ArticleContent",areaBottom:".ArticleContent-advertising--secondary",activePageDeclinations:"large",mutationObservedElements:jQuery(this).add(".Article"),recalculationDelay:1e4,keepParentMargin:!0})},{limit:1,endsOnDOMReady:!0}),jQuery(document).on("mouseout",".ArticleHeader-copyrightContainer",function(){jQuery(this).removeClass("is-deployed")}),jQuery(document).on("click",".ArticleHeader-copyrightContainer",function(){jQuery(this).toggleClass("is-deployed")}),jQuery(document).on("click",".js-refreshPage",function(){document.location.reload()})


var setParentCollectionsReducedHeight = function()
{
	jQuery(".js-ParentCollectionLinks").has(".js-ParentCollectionLinks-toggle").each(function(index, element){
		var firstTenChildsHeight = (jQuery(".ParentCollectionLinks-link:eq(9)", element).offset().top + jQuery(".ParentCollectionLinks-link:eq(9)", element).outerHeight()) - jQuery(".ParentCollectionLinks-link:eq(0)", element).offset().top;
		jQuery(".ParentCollectionLinks-list", element).data('retracted-height', Math.round(firstTenChildsHeight));
		jQuery(".ParentCollectionLinks-list", element).height(firstTenChildsHeight);
	});
}

jQuery(document).ready(function(){

	jQuery(document).on("click", ".js-ParentCollectionLinks-toggleButton", function()
	{
		var childsContainerElement = jQuery(this).parents(".js-ParentCollectionLinks");
		var isRetracted = childsContainerElement.toggleClass('is-retracted').hasClass('is-retracted');
		if(isRetracted === true)
		{
			jQuery(this).text(jQuery(this).data('reduced-text'));
			jQuery(".ParentCollectionLinks-list", childsContainerElement).css('height', jQuery(".ParentCollectionLinks-list", childsContainerElement).data('retracted-height') + 'px');
		}
		else
		{
			jQuery(this).text(jQuery(this).data('text'));
			jQuery(".ParentCollectionLinks-list", childsContainerElement).css('height', 'auto');
		}
	});

});

jQuery(window).bind("load", function() {

	setParentCollectionsReducedHeight();

});
(function()
{
	jQuery(".js-toggleArticleSummary").on("click", function(event) {
		event.stopPropagation();
		jQuery(".ArticleSummary").toggleClass("is-deployed");
	});

	
	function open()
	{
		jQuery(".ArticleSummary").addClass("is-deployed");
	}

	runOnPageDeclination(
		"small",
		function()
		{
			jQuery(".ArticleSummary").on("click", open);
		},
		function()
		{
			jQuery(".ArticleSummary").off("click", open);
		}
	);

	jQuery(".js-goToArticleSection").on(
		"click",
		function()
		{
			event.preventDefault();
			var target = this.href.replace(/^.*#/, "");
			if(document.getElementById(target)) 
			{
				scrollToElement(document.getElementById(target));
			}
			else
			{
				scrollToElement(jQuery(".js-QiotaPaywall").get());
			}
		}
	);
})();
jQuery(document).on("mouseout", ".Image-copyrightContainer", function()
{
	jQuery(this).removeClass("is-deployed");
});
jQuery(document).on("click", ".Image-copyrightContainer", function()
{
	jQuery(this).toggleClass("is-deployed");
});

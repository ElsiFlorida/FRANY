!function(){var e=function(){var e=jQuery('<nav id="RetractableMenu" class="is-hidden"></nav>'),t=jQuery(".Menu .Menu-wrapper"),n=t.clone(),i=!1,r=function(){e.append('<a class="Menu-logo" href="'+jQuery(".SiteHeader-logo").attr("href")+'">Cosmopolitan.fr</a>'),e.append('<button class="Menu-close js-hideRetractableMenu"></button>')
var t=jQuery(".SiteHeader-authenticationLink")
if(t.length){var r=jQuery('<div class="Menu-authentication"></div>')
e.append(r),t.each(function(){r.append(jQuery('<div class="Menu-authenticationLinkContainer"></div>').append(jQuery("<div></div>").append(jQuery(this).clone()).html().replace(/SiteHeader/g,"Menu")))})}
var a=n.find(".Menu-item[data-reorder-priority]").get()
if(a.length){a.sort(function(e,t){var n=jQuery(e).data("reorderPriority"),i=jQuery(t).data("reorderPriority"),r=0
return n>i?r=1:i>n&&(r=-1),r})
for(var s=n.find(".Menu-list"),o=a.length;o--;)jQuery(a[o]).detach().prependTo(s)}if(jQuery(".MagazineSubscription-popup").length){var u=jQuery(".MagazineSubscription-popup").clone()
if(jQuery(".MagazineSubscription-popup--subtitle",u).remove(),jQuery(".MagazineSubscription-popup").hasClass("MagazineSubscription-popup--withSecondaryMagazine")){var c=211
jQuery(".MagazineSubscription-popup--subscriptionLink",u).attr("href",jQuery(".MagazineSubscription-popup--subscriptionLink").attr("data-burger-url")).addClass("MagazineSubscription-burger--subscriptionLink").removeClass("MagazineSubscription-popup--subscriptionLink"),jQuery(".MagazineSubscription-popup--secondarySubscriptionLink",u).attr("href",jQuery(".MagazineSubscription-popup--secondarySubscriptionLink").attr("data-burger-url")).addClass("MagazineSubscription-burger--subscriptionLink").removeClass("MagazineSubscription-popup--secondarySubscriptionLink")}else{var c=332
u.attr("href",u.attr("data-burger-url")),jQuery(".MagazineSubscription-popup--image",u).attr("src",jQuery(".MagazineSubscription-popup--imageContainer",u).attr("data-burger-src")),jQuery(".MagazineSubscription-popup--links",u).remove(),jQuery(u).addClass("MagazineSubscription-burger--subscriptionLink").removeClass("MagazineSubscription-popup--subscriptionLink")}jQuery(".MagazineSubscription-popup--imageContainer",u).css("height",c+"px"),n.append(u)}n.appendTo(e),e.prependTo("body")
var l=e.outerWidth(),d=l-Math.floor(e.get(0).getBoundingClientRect().width)
l-=d,e.width(e.width()-d),jQuery(".Menu-item:has(.Menu-sectionList), .Menu-sectionItem:has(.Menu-subSectionList)",e).each(function(){var e=jQuery(this),t=e.hasClass("Menu-item")?"item":"section"
jQuery('<button class="Menu-showChildren Menu-showChildren--'+t+' js-toggleMenuItemChildren"></button>').appendTo(this),e.addClass("Menu-parentItem--"+t)}),e.removeClass("is-hidden"),n.jScrollPane({clickOnTrack:!1,verticalGutter:0})
var p=n.data("jsp"),h=function(e){p.reinitialise(),"number"==typeof e&&p.scrollToY(e)},g=function(e,t){e.one("transitionend",function(){e.css("height","")}),e.height(e.height()+t.outerHeight(!0)),e.addClass("is-opened")},f=function(e){e.height(e.height()),e.removeClass("is-opened"),setTimeout(function(){e.css("height","")},1)},m=function(e,t){if(e.length){var i,r,a
e.hasClass("Menu-item")?(i=e.parents(".Menu-list").eq(0),r=".Menu-item.is-opened",a=".Menu-sectionList"):(i=e.parents(".Menu-sectionList").eq(0),r=".Menu-sectionItem.is-opened",a=".Menu-subSectionList")
var s,o=e.hasClass("is-opened"),u=n.find(".jspContainer"),c=u.offset().top,l=u.height(),d=c+l,p=n.find(".jspPane"),m=p.height(),M=parseInt(p.css("top")),v=m,y=M
s=o?e:i.find(r)
var j=0
if(s.length){var b=s.find(a).outerHeight(!0)
v-=b,!o&&s.offset().top<e.offset().top&&(j=b,y+=b)}y=Math.min(y,0)
var Q=M-y
if(!o){var C=e.offset().top-c-y-Q-j,S=e.find(a)
if(S.length){var w=S.outerHeight(!0),k=S.offset().top-c-y-Q-j+w
v+=w,k-C>l?y=-1*C:k+y>d&&(y=-1*k+l)}}y=v>l?Math.max(y,l-v):Math.max(y,0),s.length&&f(s),o||g(e,S),p.addClass("is-transitioning")
var I=function(){p.removeClass("is-transitioning"),h(Math.abs(y))}
p.one("transitionend",I)
var L=parseFloat(p.css("transition-duration"))
1>L&&(L*=1e3),setTimeout(I,L),"function"==typeof t&&setTimeout(function(){t(e)},L)}}
if(e.on("click",".js-toggleMenuItemChildren",function(){var e=jQuery(this).parents(".Menu-item, .Menu-sectionItem").eq(0)
m(e)}),pageEnvironment=pageEnvironment||{},pageEnvironment.context=pageEnvironment.context||{},pageEnvironment.context.entryId){var M=!1
pageEnvironment.context.thematicId&&(M=function(){m(jQuery("#RetractableMenu .Menu-sectionItem--"+pageEnvironment.context.thematicId))}),m(jQuery("#RetractableMenu .Menu-item--section-"+pageEnvironment.context.entryId),M)}e.on("toggle show hide",function(t){var n
switch(t.type){case"show":n="addClass"
break
case"hide":n="removeClass"
break
default:n="toggleClass"}jQuery("#RetractableMenu .js-MagazineSubscription-popup--image").each(function(){replaceElementWithImage(this)}),e[n]("is-deployed"),e.hasClass("is-deployed")?(h(),jQuery(window).on("resize",h)):jQuery(window).off("resize",h)}),e.on({mousewheel:function(e){e.preventDefault()},swipeleft:function(t){e.trigger("hide"),t.preventDefault(),t.stopPropagation()},touchstart:function(){jQuery("body").css("overflow","hidden")},touchend:function(){setTimeout(function(){jQuery("body").css("overflow","")},50)}}),i=!0}
jQuery(document).on("click",".js-toggleRetractableMenu, .js-showRetractableMenu, .js-hideRetractableMenu",function(t){t.preventDefault(),i||r()
var n=jQuery(this),a="toggle"
n.hasClass("js-showRetractableMenu")?a="show":n.hasClass("js-hideRetractableMenu")&&(a="hide"),e.trigger(a)})},t=function(){function e(e){var e=jQuery("#RetractableMenu ."+e.attr("class").replace(/^.*\s(Menu-(?:item--section-|sectionItem--)[0-9]+)(?:\s.*)$/,"$1")),t=e.filter(":not(.is-opened)").find("> .js-toggleMenuItemChildren"),n=e.parents(".Menu-item:not(.is-opened)").eq(0).find("> .js-toggleMenuItemChildren")
n.length&&n.trigger("click"),t.trigger("click")}var t=jQuery(".Menu"),n=jQuery(".Menu-wrapper",t)
n.removeClass("is-static")
var i=jQuery(".Menu-item.is-hidden",n),r=i.length>0
i.remove()
var a=jQuery('<button class="Menu-moreLinks js-toggleRetractableMenu"></button>')
n.append(a)
var s=jQuery(".Menu-item",t).get()
s.sort(function(e,t){var e=jQuery(e),t=jQuery(t),n=parseInt(e.data("weight")),i=parseInt(t.data("weight")),r=e.find(".Menu-link").outerWidth(),a=t.find(".Menu-link").outerWidth(),s=0
return n>i?s=1:n===i?r>a?s=-1:a>r&&(s=1):s=-1,s}),s=jQuery(s),s.on("mouseenter",function(){var e=jQuery(this),t=e.find(".Menu-sectionList")
if(t.length){var n=jQuery(document).width(),i=t.outerWidth(),r=0
jQuery(".Menu-sectionItem",t).each(function(){var e=jQuery(this),n=jQuery(".Menu-subSectionList",this)
if(n.length){e.addClass("Menu-parentItem")
var i=n.outerWidth()
i>r&&(r=i),e.on("mouseenter",function(){t.css("min-height",""),n.css("min-height",t.height()),t.css("min-height",n.height())})}else e.on("mouseenter",function(){t.css("min-height","")})}),i+=r,e.offset().left+i>n?t.addClass("is-reversed"):t.removeClass("is-reversed")}})
var o,u=Math.ceil(a.outerWidth(!0)),c=jQuery(".SiteHeader"),l=jQuery(".SiteHeader-content",c),d=function(e){var i=Math.floor(t.width()),o=0
s.each(function(){o+=Math.ceil(jQuery(this).outerWidth())}),(o>i||r)&&(i-=u)
for(var p=0,h=!1;p<s.length;){var g=s.eq(p),f=g.is(":visible")
o>=i?(o-=Math.ceil(g.outerWidth()),h=!0,f&&g.addClass("is-hidden")):f?p=s.length:g.removeClass("is-hidden"),++p}o=0,s.filter(":not(.is-hidden)").each(function(){o+=Math.ceil(jQuery(this).outerWidth())}),r&&(h=!0),h?(c.removeClass("SiteHeader--complete"),a.addClass("is-visible"),o+=u):(c.addClass("SiteHeader--complete"),a.removeClass("is-visible")),o+=1,n.css("width",o),o>parseInt(c.css("min-width"))?(c.removeClass("SiteHeader--minimal").css("width",o),l.css("width",o)):(c.addClass("SiteHeader--minimal").css("width",""),l.css("width","")),"boolean"==typeof e&&e||setTimeout(function(){d(!0)},1)}
runOnPageDeclination("large",function(){d(),jQuery(window).on("resize",d),"complete"!==document.readyState&&(clearInterval(o),o=setInterval(function(){"complete"===document.readyState&&clearInterval(o),d()},1e3))},function(){jQuery(window).off("resize",d),jQuery(".Header").css("width",""),clearInterval(o)}),jQuery(document).ready(function(){runOnPageDeclination("large",d,{trackEvent:!1})})
var p=10
t.one("mouseenter",function(){s.each(function(){var t=jQuery(this),n=jQuery(".Menu-sectionList",this),i=jQuery(".Menu-sectionItem",n)
if(i.length>p){i.slice(p-1).remove()
var r=jQuery('<button class="Menu-sectionLink Menu-sectionLink--more js-showRetractableMenu">Voir plus&hellip;</button>')
r.on("click",function(){e(t)}),jQuery('<li class="Menu-sectionItem"></li>').append(r).appendTo(n),i=jQuery(".Menu-sectionItem",n)}i.each(function(){var t=jQuery(this),n=jQuery(".Menu-subSectionList",this),i=jQuery(".Menu-subSectionItem",n)
if(i.length>p){i.slice(p-1).remove()
var r=jQuery('<button class="Menu-subSectionLink Menu-subSectionLink--more js-showRetractableMenu">Voir plus&hellip;</button>')
r.on("click",function(){e(t)}),jQuery('<li class="Menu-subSectionItem"></li>').append(r).appendTo(n)}})})})}
jQuery(document).on("menuAvailable",function n(){e(),t(),jQuery(document).off("menuAvailable",n)})}()


window.gdprAppliesGlobally=true;(function(){function a(e){if(!window.frames[e]){if(document.body&&document.body.firstChild){var t=document.body;var n=document.createElement("iframe");n.style.display="none";n.name=e;n.title=e;t.insertBefore(n,t.firstChild)}
else{setTimeout(function(){a(e)},5)}}}function e(n,r,o,c,s){function e(e,t,n,a){if(typeof n!=="function"){return}if(!window[r]){window[r]=[]}var i=false;if(s){i=s(e,t,n)}if(!i){window[r].push({command:e,parameter:t,callback:n,version:a})}}e.stub=true;function t(a){if(!window[n]||window[n].stub!==true){return}if(!a.data){return}
var i=typeof a.data==="string";var e;try{e=i?JSON.parse(a.data):a.data}catch(t){return}if(e[o]){var r=e[o];window[n](r.command,r.parameter,function(e,t){var n={};n[c]={returnValue:e,success:t,callId:r.callId};a.source.postMessage(i?JSON.stringify(n):n,"*")},r.version)}}
if(typeof window[n]!=="function"){window[n]=e;if(window.addEventListener){window.addEventListener("message",t,false)}else{window.attachEvent("onmessage",t)}}}e("__tcfapi","__tcfapiBuffer","__tcfapiCall","__tcfapiReturn");a("__tcfapiLocator");(function(e){
  var t=document.createElement("script");t.id="spcloader";t.type="text/javascript";t.async=true;t.src="https://sdk.privacy-center.org/"+e+"/loader.js?target="+document.location.hostname;t.charset="utf-8";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)})("a5e06fe3-f415-475b-9377-da8964411bc3")})();

!function(){jQuery(document).on("click",".js-openConsentManagementModal",function(){return Didomi&&Didomi.preferences?(Didomi.preferences.show(),!1):void 0});var e,n=!1;window.didomiOnReady=window.didomiOnReady||[],window.didomiOnReady.push(function(){clearTimeout(e);var t=function(e,o){!o||"useractioncomplete"!=e.eventStatus&&"tcloaded"!=e.eventStatus||(window.__tcfapi("removeEventListener",2,t),jQuery(document).trigger(jQuery.Event("userConsentAvailable",{tcData:e})),n=!0,jQuery(document).trigger(jQuery.Event("userConsentProcessEnded",{tcData:e,isTimeout:!1})))};window.__tcfapi("addEventListener",2,t)}),e=setTimeout(function(){n=!0,jQuery(document).trigger(jQuery.Event("userConsentProcessEnded",{isTimeout:!0}))},window.__tcfapi?15e3:0),window.runOnUserConsent=function(e){n?__tcfapi("getTCData",2,function(n){e(n)}):jQuery(document).on("userConsentProcessEnded",function(n){e(n.tcData)})}}();
jQuery(document).ready(function (){

	jQuery(document).on("mouseenter", ".js-MagazineSubscription--header", function(){
		if (jQuery(".js-MagazineSubscription--header .js-MagazineSubscription-popup--image").length > 0)
		{
			jQuery(".js-MagazineSubscription--header .js-MagazineSubscription-popup--image").each(function(){
				replaceElementWithImage(this);
			});
		}
	});

});
jQuery(document).available(
	".js-magazineSubscriptionPopin",
	function()
	{
		if (jQuery.cookie("magazinepopin-closed"))
		{
			jQuery('.js-magazineSubscriptionPopin').remove();
		}
		else
		{
			runOnPageDeclination(
				"large",
				function()
				{
					jQuery(window).on("scroll", function showPopin()
					{
						if (jQuery(document).scrollTop() > (jQuery(window).height() / 4))
						{
							replaceElementWithImage(jQuery(".js-MagazineSubscription-popin--image"));

							jQuery('.js-hideMagazineSubscriptionPopin').click(function() {
								jQuery.cookie("magazinepopin-closed", "1", { expires: 15, path: "/" });
								jQuery('.js-magazineSubscriptionPopin').removeClass('is-visible');
							});
							jQuery('.js-magazineSubscriptionPopin').addClass('is-visible');

							jQuery(window).off("scroll", showPopin);
						}
					});
				},
				{once: true}
			);
		}
	},
	{limit: 1}
);
jQuery(document).on("loadFailure",".MediaPlayer",function(){jQuery('<div class="MediaPlayer-message"><div class="MediaPlayer-messageTitle">Contenu vid&eacute;o bloqu&eacute; par un bloqueur publicitaire</div><div class="MediaPlayer-messageText">Il semblerait que vous utilisiez un bloqueur de publicit&eacute;s. La publicit&eacute; permet de financer nos &eacute;quipes r&eacute;dactionnelles et techniques afin de vous offrir un service gratuit et de qualit&eacute;.<br /><a target="_blank" class="MediaPlayer-messageLink" href="https://www.cosmopolitan.fr/,comment-desactiver-adblock,1962083.asp">Cliquez-ci</a> pour d&eacute;sactiver votre bloqueur publicitaire</div></div>').appendTo(this)})
jQuery(document).on("submit",".js-NewsletterSubscriptionForm",function(e){var t=jQuery("input[name=emailAddress]",this),s=!1;if(jQuery(".Newsletter-formError").removeClass("is-visible"),isEmailAddress(t.val())||jQuery("body").hasClass("is-loggedIn")||(jQuery(".js-NewsletterErrorEmailAddress").addClass("is-visible"),s=!0),jQuery(".js-Newsletter-additionalFields").hasClass("is-visible")){var r=jQuery("input[name=name]",this),i=jQuery("select[id=dateOfBirthDay]",this),a=jQuery("select[id=dateOfBirthMonth]",this),l=jQuery("select[id=dateOfBirthYear]",this);r.val()||(jQuery(".js-NewsletterErrorName").addClass("is-visible"),s=!0),0!=i.val()&&0!=a.val()&&0!=l.val()||(jQuery(".js-NewsletterErrorDateOfBirth").addClass("is-visible"),s=!0)}for(var d=jQuery(".js-NewsletterChoice",this),o=0,n=!1;o<d.length&&!n;){var c=d.eq(o);(c.is("[type=hidden]")||c.is("[type=checkbox]:checked"))&&(n=!0),++o}(o=0,n||(jQuery(".js-NewsletterErrorChoice").addClass("is-visible"),s=!0),s)||(jQuery("body").hasClass("is-loggedIn")?jQuery(".js-NewsletterSubscriptionForm").submit():jQuery.ajax({method:"get",url:"/direct/membre/verifier",data:{values:{emailAddress:{type:"emailAddress",value:t.val()}}},dataType:"json",success:function(e){if(e.emailAddress.status){var s=jQuery(".js-NewsletterSubscriptionForm");jQuery.ajax({url:s.attr("action"),type:s.attr("method"),data:new FormData(document.getElementById("Newsletter-form")),processData:!1,contentType:!1,dataType:"json",success:function(e){if(e.success){for(;o<d.length;){if((r=d.eq(o)).is("[type=hidden]")||r.is("[type=checkbox]:checked")){var t=jQuery(r).attr("name");triggerAnalyticsEvent("Action Page","Newsletter Inscription",t)}++o}jQuery.cookie("hasSubscribedNewsletter","true"),console.log(s.parents(".Newsletter")),s.parents(".Newsletter").addClass("is-validated"),jQuery(".Newsletter-footer").hide(),jQuery(window).scrollTop(0)}if(0!=e.redirect){for(;o<d.length;){var r;if((r=d.eq(o)).is("[type=hidden]")||r.is("[type=checkbox]:checked")){t=jQuery(r).attr("name");triggerAnalyticsEvent("Action Page","Newsletter Inscription",t)}++o}document.location.href=e.redirect}else jQuery(".js-NewsletterErrorFailure",s).addClass("is-visible")}})}else{for(var r="";o<d.length;){var i=d.eq(o);if(i.is("[type=hidden]")||i.is("[type=checkbox]:checked"))r+="&"+jQuery(i).attr("name")+"=1";++o}"logIn";var a=new Object;a.redirectURL="/direct/membre/newsletter?emailAddress="+t.val()+r,a.description="Pour finaliser votre demande, vous devez vous identifier à votre compte.",showAuthenticationModal("logIn",a)}}}));e.preventDefault()}),jQuery(document).on("click",".js-Newsletter-listItem",function(e){jQuery(this).toggleClass("Newsletter-listItem--selected"),jQuery("input[type=checkbox]",this).prop("checked",jQuery(this).hasClass("Newsletter-listItem--selected")),jQuery(this).hasClass("js-linkedToAdditionalFields")&&jQuery(".js-Newsletter-additionalFields")[jQuery(".js-linkedToAdditionalFields:has(:checked)").length?"addClass":"removeClass"]("is-visible")}),jQuery(document).on("submit",".js-NewsletterSectionSubscriptionForm",function(e){var t=!1,s=jQuery("input[name=emailAddress]",this),r=jQuery(".js-NewsletterChoice",this).attr("name");isEmailAddress(s.val())||jQuery("body").hasClass("is-loggedIn")||(t=!0),t||(r?jQuery.ajax({method:"get",url:"/direct/membre/verifier",data:{values:{emailAddress:{type:"emailAddress",value:s.val()}}},dataType:"json",success:function(e){if(e.emailAddress.status){var t=jQuery(".js-NewsletterSectionSubscriptionForm");jQuery.ajax({url:t.attr("action"),type:"post",data:new FormData(document.getElementById("Newsletter-form")),processData:!1,contentType:!1,dataType:"json",success:function(e){0!=e.redirect&&(triggerAnalyticsEvent("Action Page","Newsletter Inscription",r),document.location.href=e.redirect)}})}else{"logIn";var i=new Object;i.redirectURL="/direct/membre/newsletter?emailAddress="+s.val()+"&"+r+"=1",i.description="Pour finaliser votre demande, vous devez vous identifier à votre compte.",showAuthenticationModal("logIn",i)}}}):this.submit()),e.preventDefault()}),function(){var e=document.location.getSearchParameter("emailAddress");e&&(Base64.isEncoded(e)&&(e=Base64.decode(e)),jQuery(document).available(".js-NewsletterSubscriptionForm",function(){var t=jQuery(".js-NewsletterEmailAddressField",this);t.val().length||t.val(e)},{limit:1,endsOnDOMReady:!0}))}();
jQuery(document).available(".SiteHeader",function(){var e,t,n=jQuery("body"),r=jQuery(".SiteHeader-container",this),i=jQuery(".SiteHeader-contentContainer",this),a=jQuery('<div class="SiteHeader-additionalContent">'),s=jQuery(".SiteHeader-magazineSubscription")
n.addClass("is-scrolled")
var o=i.height()
n.removeClass("is-scrolled")
var c=function(){var e=jQuery(document).scrollTop(),a=r.offset().top,c=a+r.height()
if(a>=e)n.removeClass("is-scrolled"),i.css("height",""),s.css("marginRight","")
else if(e>c-o)n.addClass("is-scrolled"),i.css("height",""),"small"!=getPageDeclinationName()&&s.css("marginRight",t)
else if(n.hasClass("is-scrolled")){var u=c-e
u>o?i.css("height",u):i.css("height","")}}
jQuery(window).on("scroll",c)
var u=function(){if(e){var r,i=0,s=0,o=n.hasClass("is-scrolled")
a.css("width",""),e.css("width",""),n.addClass("is-scrolled")
var i=e.get(0).getBoundingClientRect().width,s=e.height()
o||n.removeClass("is-scrolled")
var c=0,u=0
jQuery("> *",e).each(function(){var e=jQuery(this)
c+=e.outerWidth(!0)
var t=e.outerHeight(!0)
t>u&&(u=t)}),i>c?(t=i,r=s):(t=c,r=u)
var l=-1*r/2
"small"===getPageDeclinationName()?(t=getViewportWidth(t)+"vw",l=getViewportWidth(l)+"vw",a.addClass("is-static")):a.removeClass("is-static"),e.css("width",t),a.css("margin-top",l),a.css("width",t)}}
jQuery(document).available(".ArticleHeader",function(){var t=jQuery(".ArticleHeader .js-SocialNetworkLink").slice(0,2).add(".ArticleHeader .js-SocialNetworkLink[data-type=email]")
t.length&&(e=t.parents(".SocialNetwork").eq(0).clone().html(""),e.addClass("SocialNetwork--light SocialNetwork--header"),e.append(t.clone())),e&&(a.append(e).appendTo(jQuery(".SiteHeader-content",i)),u())},{limit:1,endsOnDOMReady:!0}),u(),jQuery(document).on("pageDeclinationChange",function(){u(),setTimeout(u,100)})
var l=jQuery(".SiteHeader-search",this)
jQuery(document).on("click",".js-toggleSearchOverlay, .js-showSearchOverlay, .js-hideSearchOverlay",function(e){e.preventDefault()
var t=jQuery(this)
t.hasClass("js-showSearchOverlay")||t.hasClass("js-toggleSearchOverlay")&&!l.hasClass("is-visible")?showOverlay(l,{show:function(){jQuery(".js-searchQueryField",l).focus()}}):t.hasClass("js-hideSearchOverlay")&&hideOverlay(l)})},{limit:1})

jQuery(document).on("click",".js-SocialNetworkLink",function(){function e(e,t,r){var a=Math.max(Math.floor((window.screen.width-e)/2),0),n=Math.max(Math.floor((window.screen.height-t)/2),0)
return r?"width="+e+",height="+t+",left="+a+",top="+n:{left:a,top:n}}try{if("undefined"!=typeof pageEnvironment&&pageEnvironment.isPreview)throw"Share disabled on preview page"
var t=jQuery(this),r=t.parents(".SocialNetwork").eq(0),a=t.data("url")||r.data("url")||getDocumentURL(),n=encodeURIComponent(a),i=t.data("title")||r.data("title")||document.title,o=encodeURIComponent(i)
switch(t.data("type")){case"facebook":window.open("https://www.facebook.com/sharer/sharer.php?u="+n,"Partager sur Facebook",e(560,200,!0))
break
case"twitter":var s=t.data("account")||"Cosmopolitan_fr",d="https://twitter.com/intent/tweet?url="+n+"&lang=fr"
s&&(o=encodeURIComponent(i+" (via @"+s+")"),d+="&related="+s),d+="&text="+o,window.open(d,"Partager un lien sur Twitter",e(550,520,!0)+",personalbar=0,toolbar=0,location=1,scrollbars=1,resizable=1")
break
case"pinterest":var l=t.data("image-url")||jQuery("meta[property='og:image']").attr("content")||jQuery("meta[property='twitter:image']").attr("content")
if(!l||!l.length)throw"No image URL specified"
window.open("https://www.pinterest.com/pin/create/link/?url="+n+"&media="+l+"&description="+o,"Pin it!",e(766,200,!0))
break
case"sms":var c="sms:"
c+=/iPad|iPhone|iPode/i.test(navigator.userAgent)?"&":"?",c+="body="+encodeURIComponent('Je te conseille la lecture de cet article : "'+i+'". '+a),document.location.href=c
break
case"whatsapp":document.location.href="whatsapp://send?text="+encodeURIComponent('Je te conseille la lecture de cet article : "'+i+'". '+a)
break
case"email":showModal(".js-SendEmail")}}catch(u){console.log(u)}}),jQuery(document).on("click",".js-SocialNetworkShowMoreServices",function(){jQuery(this).parents(".SocialNetwork").eq(0).addClass("is-deployed")}),jQuery(document).on("click",".js-SendEmailAddRecipient",function(e){var t=jQuery(this).parents(".SendEmail").eq(0)
if(t.length){var r=jQuery(".js-SendEmailRecipientList",t),a=jQuery(".js-SendEmailRecipient").clone()
a.removeClass("js-SendEmailRecipient").addClass("js-SendEmailRecipientClone"),a.appendTo(r).find("input[type=text]").val("").eq(0).focus()}}),jQuery(document).on("submit",".js-SendEmailForm",function(e){e.preventDefault()
var t=[]
jQuery("#SendEmailFirstNameField").val().length||t.push("Vous devez renseigner votre pr&eacute;nom"),isEmailAddress(jQuery("#SendEmailEmailAddressField").val())||t.push("Vous devez indiquer votre adresse e-mail valide")
var r=!1,a=!1
if(jQuery(".SendEmail-recipientField").each(function(){var e=this.value
e.length&&(isEmailAddress(e)?a=!0:r=!0)}),r?t.push("Vous avez indiqu&eacute; une adresse e-mail de destinataire invalide"):a||t.push("Vous devez indiquer une adresse e-mail de destinataire"),jQuery(document.getElementsByName("emailToFriendcontrol[]")).filter(":checked").length||t.push("Vous devez certifier ne pas envoyer d'e-mail ind&eacute;sirable"),t.length)showAlertMessage(t.join(".<br />")+".")
else{"object"==typeof _gaq&&_gaq.push(["_trackEvent","Social","Envoi de page par e-mail",void 0,void 0,!0])
var n=jQuery(this)
jQuery.ajax({url:n.attr("action"),method:n.attr("method")||"post",data:new FormData(this),processData:!1,contentType:!1,dataType:"json",success:function(e){e.success?showAlertMessage("Votre message a bien &eacute;t&eacute; envoy&eacute;.",{hide:function(){jQuery(".js-SendEmailRecipientClone",n).remove(),jQuery(".js-SendEmailRecipient input[type=text]",n).val(""),n.parents(".Modal").eq(0).trigger("hide")}}):showAlertMessage("Une erreur s'est produite. Veuillez r&eacute;essayer.")}})}}),jQuery(document).ready(function(){if(jQuery("[data-pin-do]").length){var e,t=window,r=document,a=r.getElementsByTagName("SCRIPT")[0]
go=function(){e=r.createElement("SCRIPT"),e.type="text/javascript",e.async=!0,e.src="//assets.pinterest.com/js/pinit.js",a.parentNode.insertBefore(e,a)},t.attachEvent?t.attachEvent("onload",go):t.addEventListener("load",go,!1)}})

var sas=sas||{};sas.cmd=sas.cmd||[],sas.cmd.push(function(){if(sas.siteId&&sas.pageId){if(sas.environment=sas.environment||{},!sas.isSetup){var s={domain:"https://ww50.smartadserver.com",async:!0};sas.headerBiddingUrl&&(s.renderMode=sas.renderMode.ON_DEMAND),sas.setup(s),sas.isSetup=!0}for(var e=[],a=function(s){var e=jQuery(document.getElementById(s.tagId));if(!e.is(":visible"))return!0;var a=e.parents("[data-hidden-declinations]").data("hiddenDeclinations");return!(!a||-1==(a=a.replace(/\s/g,"").split(",")).indexOf(getPageDeclinationName()))},n=sas.formats.length,r=0;r<n;)a(sas.formats[r])||e.push(sas.formats[r]),++r;sas.prerequisites=sas.prerequisites||[];var t=new jQuery.Deferred,i=!1,o=jQuery.when.apply(jQuery,sas.prerequisites);function d(){if(i||console.log("SAS prerequisites loading timed out."),options={},"function"==typeof sas.onNoad&&(options.onNoad=sas.onNoad),sas.call("onecall",{siteId:sas.siteId,pageId:sas.pageId,target:sas.target,formats:e},options),"undefined"==typeof sas_myPreview)for(var s in e)sas.render(e[s].tagId)}setTimeout(function(){t.resolve()},2e3),o.done(function(){i=!0,t.resolve()}),t.done(function(){"undefined"!=typeof Hubvisor?Hubvisor("ready",null,function(){d()}):d()})}}),mc2m.push(function(){if(sas.siteId&&sas.pageId){var s=[[{url:"//ced.sascdn.com/tag/50/smart.js",attributes:{async:!0}}]];sas.headerBiddingUrl&&(s[0].push({url:sas.headerBiddingUrl,attributes:{async:!0}}),sas.useGeoEdge&&(window.grumi={key:"f798cdf3-e207-455e-b46e-0211e149c913"},s.unshift("//rumcdn.geoedge.be/pbjs-wrapper.js"))),sas.loadBeforeConsent?mc2m.loadResources.apply(null,s):runOnUserConsent(function(){mc2m.loadResources.apply(null,s)})}});
var _nAdzq=_nAdzq||[];(function(){
_nAdzq.push(["setIds","a271ec75a4590dc5"]);
_nAdzq.push(["setPk","BAi7jteyZSp_LX7kBmCxlgAZZnjCGvDqMOlWLBPpAOEATtVOGhrbYtafYYBKx9s5f6b9y8QlC2j3pbozaN1Tnl0"]);
_nAdzq.push(["setDomain","notifpush.com"]);
_nAdzq.push(["setSwName","service-worker.js"]);
_nAdzq.push(["setNativDomain",true]);
_nAdzq.push(["setSubscriptionNotif",false]);
_nAdzq.push(["setTemplateId","optinboxperso"]);
_nAdzq.push(["setEnv"]);
var e="https://notifpush.com/scripts/";
var t=document.createElement("script");
t.type="text/javascript";
t.defer=true;
t.async=true;
t.src=e+"nadz-sdk.js";
var s=document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(t,s)})();
window.no_mobile="0";

function loadAuthentication(o){window.showAuthenticationModal=function(n,t){var a=[]
o.forEach(function(o){document.querySelector('script[src="'+o+'"], link[href="'+o+'"]')||a.push(o)}),mc2m.loadResources(a).then(function(){showAuthenticationModal(n,t)})},jQuery(document).on("click",".js-showAuthenticationModal, .js-showLogInModal, .js-showSignUpModal",function(o){var n,t=jQuery(this)
t.hasClass("js-showLogInModal")?n="logIn":t.hasClass("js-showSignUpModal")&&(n="signUp")
var a=t.data("target")
showAuthenticationModal(n,a),o.preventDefault()}),window.loadAuthentication=function(){}}
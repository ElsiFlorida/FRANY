(()=>{"use strict";function e(e){var i,d,n,o="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var i=16*Math.random()|0;return("x"==e?i:3&i|8).toString(16)}));if(i=window.ID5&&!0===window.ID5.initialized&&window.ID5.userId?"&dsp=id5&dsp_uid="+ID5.userId:window.pbjs&&window.pbjs.getUserIds&&window.pbjs.getUserIds().id5id&&window.pbjs.getUserIds().id5id.uid?"&dsp=id5&dsp_uid="+window.pbjs.getUserIds().id5id.uid:"",d=window.localStorage&&window.localStorage._pubcid?"&dsp=pub_common&dsp_uid="+window.localStorage._pubcid:window.pbjs&&window.pbjs.getUserIds&&window.pbjs.getUserIds().pubcid?"&dsp=pub_common&dsp_uid="+window.pbjs.getUserIds().pubcid:"",window.__uid2&&window.__uid2.getAdvertisingTokenAsync)window.__uid2.getAdvertisingTokenAsync().then((function(e){e&&((new Image).src="https://s.cpx.to/sync?dsp=uid2&dsp_uid="+e+"&fid="+o)})),n="";else if(window.__uid2&&window.__uid2.getAdvertisingToken){var t=window.__uid2.getAdvertisingToken();t&&(n="&dsp=uid2&dsp_uid="+t)}else n="";var s=encodeURIComponent(document.referrer),w=encodeURIComponent(document.URL),r=window.captify_kw_query_12848?"&kw="+encodeURIComponent(captify_kw_query_12848):"",p="pid=12848&ref="+s+"&url="+w+"&hn_ver=40&fid="+o+r+(e?"&gcv="+e:"")+i+d+n;window.ats&&window.ats.retrieveEnvelope&&window.ats.retrieveEnvelope((function(e){var i;e&&(i=e.envelope?e.envelope:e),i&&((new Image).src="https://s.cpx.to/sync?dsp=live_ramp&dsp_uid="+i+"&fid="+o)}));var c=document.createElement("script");c.src="https://s.cpx.to/fire.js?"+p,document.head.appendChild(c)}!function(){if(window.__tcfapi)window.__tcfapi("getTCData",2,(function(i,d){e(i.tcString)}));else if(window.__cmp)window.__cmp("getConsentData",null,(function(i,d){e(i&&i.consentData||"")}));else{for(var i="euconsent",d=document.cookie.split(";"),n="",o=0;o<d.length;o++)d[o].trim().substring(0,i.length)===i&&(n=d[o]);e(n.split("euconsent=")[1]||"")}}()})();
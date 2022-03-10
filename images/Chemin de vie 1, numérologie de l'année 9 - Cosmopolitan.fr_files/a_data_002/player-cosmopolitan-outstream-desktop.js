(function (w) {
/*tagconfig*/

var a = {
		publisherId: "5e844815a325844c53671a7a",
		channelId: "5e844bd20e3f6e4441792815",
		width: 100,
		height: 0,
		aniBoxCSS: "overflow:hidden;opacity:0;",
		errorLimit: 2,
		lastFrame: false,
		HD: !0,
		autoPlay: false,
		Preroll: 1,
		midrolltime: 0,
		vastRetry: 2,
		loop: true,
		logo: false,
		timelineMode: "bottom",
		soundButton: true,
		pauseButton: true,
		maximp: 2,
		maxrun: 9999,
 		preloader: {
			type: "Image",
			link: "https://cdn.viewdeos.com/logo/gmc/logo-cosmopolitan-d.jpg",
			clickthrough: "",
			closeButton: false  
		},
		playOnView: true,
		pauseOnBlur: false,
		openAnim: true,
		hideInitPreloader: true,
		unMuteOnMouseEnter: false,
		pauseOnUnseen: false,
		closeButton: true,
		skipTimer: 0,
		skip: false,
		skipText: "",
		scriptId: "vd349965793",
		posId: "",
		posTag: "",
		posClass: "",
		posSelector: "",
		posDfp1x1: true,
		maxWidth: "640",
		templateType: "1",
		adServerDomain : 'go1.viewdeos.com',
		trackDomain : 'track.viewdeos.com',
		baseJsUrl : 'https://player.viewdeos.com/script/6.1/',
		customCSS: "#av-container #av-inner #slot #preloader{ width:100%; height:100%; background:url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2050%2050%22%20style%3D%22fill%3Awhite%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cpath%20d%3D%22M8%2C24.8h4.7c0.1-6.7%2C5.6-12.1%2C12.3-12.1c6.8%2C0%2C12.3%2C5.5%2C12.3%2C12.4c0%2C6.8-5.5%2C12.4-12.3%2C12.4%20c-0.1%2C0-0.2%2C0-0.2%2C0V42c0.1%2C0%2C0.2%2C0%2C0.2%2C0c9.4%2C0%2C17-7.6%2C17-17c0-9.4-7.6-17-17-17C15.7%2C8%2C8.1%2C15.5%2C8%2C24.8z%20M35%2C25%20c0-5.5-4.5-10-10-10c-5.5%2C0-10%2C4.5-10%2C10c0%2C5.5%2C4.5%2C10%2C10%2C10C30.5%2C35%2C35%2C30.5%2C35%2C25z%20M21.7%2C20.2l8.7%2C4.8l-8.7%2C4.8V20.2z%20M49%2C24.8%20h-4.7c0%2C0.1%2C0%2C0.2%2C0%2C0.2c0%2C10.7-8.7%2C19.4-19.3%2C19.4C14.3%2C44.4%2C5.7%2C35.7%2C5.7%2C25c0-10.6%2C8.6-19.2%2C19.1-19.3V1C11.6%2C1.1%2C1%2C11.8%2C1%2C25%20c0%2C13.3%2C10.7%2C24%2C24%2C24c13.3%2C0%2C24-10.8%2C24-24C49%2C24.9%2C49%2C24.8%2C49%2C24.8z%22%2F%3E%0A%3C%2Fsvg%3E') no-repeat center/56px; } #av-container #av-inner #slot #preloader svg.icon{ display:none; } #av-container #av-inner #slot #preloader svg.circle{ stroke-width:4px; } #av-container #av-inner #slot #preloader svg.circle.active{ color:#F77036; }  #aniBox { margin:15px 0 15px; }",
		position: "vdplayer_vd349965793"
};

/*tagconfig*/

var st = {
	unique: function(){
        if(!w.aniplayerPos)
            w.aniplayerPos = {};
        if(w.aniplayerPos[a.position])
            return false;
        w.aniplayerPos[a.position] = true;
        return true;
    },
    findWin: function() {
        try {
            if(( !a.posDfp1x1 && !a.posClass && !a.posSelector && !a.posId && !a.posTag) || (w === top) || !w.frameElement) {
            	this.doc = document;
            	this.win = w;
			} else if(a.posDfp1x1 && w.frameElement) {
            	this.win = parent;
            	this.doc = parent.document;
			} else {
                this.win = top;
                this.doc = top.document;
			}
        } catch (f) {
            this.doc = document;
            this.win = w;
        }
    },
	postCreate: function(){},
	retry: function(){
        if(this.retry++ > a.timeout)
        	return;
		var that = this;
        setTimeout(function() {
            that.position();
        }, 250);
	},
	create: function(p, n) {
        var d1 = document.createElement("div");
        d1.style.width = "100%";
        d1.style.margin = "0 auto";
        d1.style.maxWidth = "" + a.maxWidth + "px";

        var d2 = document.createElement("div");
        d2.id = "aniBox";
        d2.style.height = "1px";

        var d3 = document.createElement("div");
        d3.id = ""+a.position;
        if(p === this.doc || p===this.doc.head)
            p = this.doc.body;
        if(n)
            p.insertBefore(d1, n);
        else
            p.appendChild(d1);
        d1.appendChild(d2);
        d2.appendChild(d3);
        this.postCreate(d1);
	},
    position: function() {
        var p = this.doc;
        var isScp = false;
        if(a.posSelector) {
            p = this.doc.querySelector(a.posSelector);
            if(!p) {
                this.retry();
                return;
            }
        }
        if(a.posId) {
            p = this.doc.getElementById(a.posId);
            if(!p) {
                this.retry();
                return;
            }
        }
        if(a.posTag) {
            var c = a.posTag.split("#");
            if(c && c.length == 2) {
                var e = p.getElementsByTagName(c[0]);
                if(e.length == 0) {
                    this.retry();
                    return;
                }
                p = e[Math.min(c[1] - 1, e.length-1)];
            }
        }
        if(a.posClass) {
            var c = a.posClass.split("#");
            var e = 1;
            if(c.length == 2)
                e = c[1];
            var f = p.getElementsByClassName(c[0]);
            if(f.length > 0)
                p = f[Math.min(e-1, f.length-1)];
            if(!p) {
                this.retry();
                return;
			}
        }
        if(a.posDfp1x1 && window.frameElement) {
            n = window.frameElement.parentNode.parentNode;
            p = n.parentNode;
        }
        var n;
        if(p === this.doc) {
            n = this.doc.getElementById(a.scriptId);
            if(n)
                p = n.parentNode;
        }
        if(p === this.doc.head) {
            n = null;
            p = this.doc;
        }
        if(a.posType && a.posType !== "in" && !n) {
            if(a.posType === "after" && p.nextSibling)
                p = p.nextSibling;
            n = p;
            p = n.parentNode;
        }
        this.create(p, n);
        this.load();
    },
	load: function(){
		var that = this;
        var scp = this.doc.createElement("script");
        scp.src = (a.baseJsUrl || "https://player.viewdeos.com/script/6.1/") + "player.js";
        scp.onload = function(){
        	that.start();
		};
        scp.async = true;
        this.doc.body.appendChild(scp)
	},
	postStart: function(){
	},
    getAttr: function(){
        if(a.scriptId) {
            var s = document.getElementById(a.scriptId);
            if(s) {
                for (var i = 0, t = s.attributes; i < s.attributes.length; i++){
                    if(t[i].nodeName && t[i].nodeName.indexOf("data-") == 0) {
                        var n = t[i].nodeName.replace("data-", "");
                        a[n] = t[i].nodeValue;
                    }
                }
                if(s.src) {
                    var p = s.src.indexOf("?");
                    if(p > 10) {
                        var r = (s.src.substring(p+1, s.src.length));
                        a.ref1 = (a.ref1 || "") + "&" + (r || "");
                    }
                }
            }
        }
	},
	start: function(){
        var b;
        this.getAttr();
        try{
            if (this.win.avPlayer)
                b = new this.win.avPlayer(a);
            else
            if(window.avPlayer)
                b = new avPlayer(a);
            else
                b = top.avPlayer(a);
        } catch(exp) {
            b = new avPlayer(a);
        }
        if(this.pbjs)
            this.pbjs.preparePlayer(b);

        if(a.templateType != 0)
            b.startTemplate(this.doc.getElementById(a.position).parentNode);
        b.play(a);
        this.postStart(b);
	},
	preRun: function(){},
	run: function(){
		this.preRun();
        this.findWin();
        if(!this.doc.body) {
            this.doc.addEventListener('DOMContentLoaded', function () {
                st.run();
            });
            return;
        }
		if(this.unique()) {
            (new Image).src = "https://"+(a.trackDomain ||"track1.viewdeos.com")+"/track?pid=" + a.publisherId + "&cid=" + a.channelId + "&e=playerLoaded&cb=" + Date.now();
            this.retry = 0;
            this.timeout = a.posTimeout || 40;

            var AV_topElement;
            this.pbjs = window.aniviewRenderer && window.aniviewRenderer.units && window.aniviewRenderer.units[a.scriptId];
            if(this.pbjs)
                this.pbjs.prepareConfig(a);
            this.position();
		}
	}
};
st.run();

})(window);
var nextFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(b, a) {
        return setTimeout(b, a || 1)
    }
})();
Page.$ = (function() {
    var a = {};
    a.id = function(b) {
        return document.getElementById(b)
    };
    a.tag = function(b, c) {
        return [].slice.call((c || document).getElementsByTagName(b) || [], 0)
    };
    a.cls = function(b, c) {
        return [].slice.call((c || document).getElementsByClassName(b) || [], 0)
    };
    a.each = function(c, b) {
        var d, e = (c || []).length;
        for (d = 0; d < e; d++) {
            b(d, c[d])
        }
    };
    a.removeClass = function(d, b, c) {
        if (!d) {
            return
        }
        c = c || RegExp("\\s*\\b" + b + "\\b\\s*", "g");
        if (Object.prototype.toString.call(d) == "[object Array]") {
            a.each(d,
            function(e, f) {
                a.removeClass(f, b, c)
            });
            d = null;
            return
        }
        if (d.classList) {
            d.classList.remove(b);
            return
        }
        d.className = d.className.replace(c, " ")
    };
    a.hasClass = function(c, b) {
        if (c.classList) {
            return c.classList.contains(b)
        }
        if (!c) {
            return false
        }
        return RegExp("\\b" + b + "\\b").test(c.className)
    };
    a.addClass = function(c, b) {
        if (!c) {
            return
        }
        if (Object.prototype.toString.call(c) == "[object Array]") {
            a.each(c,
            function(d, e) {
                a.addClass(e, b)
            });
            c = null;
            return
        }
        if (c.classList) {
            c.classList.add(b);
            return
        } ! a.hasClass(c, b) && (c.className = c.className + " " + b)
    };
    a.loadCss = function(c, b, e) {
        var d = document.createElement("link");
        d.rel = "stylesheet";
        d.type = "text/css";
        d.href = c;
        if ("onload" in d) {
            d.onload = b;
            d.onerror = function() {
                alert("login css err")
            }
        } else {
            setTimeout(function() {
                b.call(d)
            },
            1000)
        }
        d.id = e;
        d.binded = true;
        document.body.appendChild(d)
    };
    a.loadJs = loadScript;
    a.cookie = function(d, i, k) {
        var e = "";
        var f, j, g, b, h;
        if (typeof i != "undefined") {
            k = k || {};
            if (i === null) {
                i = "";
                k.expires = -1
            }
            if (k.expires && (typeof k.expires == "number" || k.expires.toUTCString)) {
                if (typeof k.expires == "number") {
                    f = new Date((new Date()).getTime() + (k.expires * 24 * 60 * 60 * 1000))
                } else {
                    f = k.expires
                }
                e = "; expires=" + f.toUTCString()
            }
            j = k.path ? "; path=" + (k.path) : "";
            g = k.domain ? "; domain=" + (k.domain) : "";
            b = k.secure ? "; secure": "";
            document.cookie = [d, "=", encodeURIComponent(i), e, g, j, b].join("")
        } else {
            if (d) {
                h = (RegExp(d + "=([^;]*)").exec(document.cookie) || [])[1]
            }
            return h
        }
    };
    a.domready = function(b) {
        if (document.readyState != "loading" && document.body) {
            b.call(document)
        } else {
            document.addEventListener("DOMContentLoaded", b, false)
        }
    };
    a.loadImg = function(b) {
        a.each(b,
        function(e, d) {
            var c = d.getAttribute("orgsrc");
            if (c) {
                nextFrame(function() {
                    d.src = c;
                    d.removeAttribute("orgsrc")
                })
            }
        })
    };
    return a
})();
asyncCall.call("runindex");
Page.$.domready(function() {
    Page.main = (function(m) {
        var C = Page.conf;
        var D = document;
        var b = (function() {
            var G = document.createElement("div");
            //G.innerHTML = '<div id="tips" class="switch-tips" style="height:34px;line-height:34px;top:-34px;-webkit-transition-property: top;-webkit-transition-duration: 0.4s;-webkit-transition-timing-function: linear;"></div>';
            var F;
            //D.body.appendChild(G.children[0]);
            F = m.id("tips");
            return {
                show: function(H) {
                    F.style.webkitTransitionDuration = 0;
                    F.innerHTML = H;
                    F.style.webkitTransitionDuration = "400ms";
                    F.style.top = "0"
                },
                hide: function() {
                    setTimeout(function() {
                        F.style.top = "-34px"
                    },
                    1800)
                }
            }
        })();
        var y = function() {
            h();
            u();
            //s();
            //E();
            //d();
            i();
            k();
            j();
            a();
            f();
            m.cookie("v4", "1", {
                path: "/",
                domain: ".3g.qq.com",
                expires: 365
            });
            /*if (m.id("wb-mod").children[0].children.length > 0) {
                m.id("wb-mod").style.display = "block"
            }*/
        };
        var f = function() {
            if (document.body.scrollTop == 0) {
                window.scrollTo(0, 0)
            }
        };
        var l = function() {
            setTimeout(function() {
                console.log(Page.swipeMgr.get("imgslide"));
                Page.swipeMgr && m.removeClass(Page.swipeMgr.get("imgslide").container, "unactive")
            },
            200);
            setTimeout(function() {
                return;
                if (Page.swipeMgr) {
                    m.each(Page.swipeMgr.arr,
                    function(F, G) {
                        nextFrame(function() {
                            m.removeClass(G.container, "unactive")
                        },
                        2)
                    })
                }
            },
            1000);
            window.removeEventListener("pageshow", l, false)
        };
        var j = function() {
            if (/android/i.test(navigator.userAgent)) {
                return
            }
            if ("onpagehide" in window) {
                window.addEventListener("pagehide",
                function() {
                    var H = document.body.scrollTop;
                    var G = H + window.innerHeight;
                    var F = [];
                    if (Page.swipeMgr) {
                        m.each(Page.swipeMgr.arr,
                        function(I, J) {
                            var K = J;
                            if (K.bottom < H || K.top > G) {
                                m.addClass(J.container, "unactive");
                                m.removeClass(J.container, "has3d")
                            } else {
                                m.addClass(J.container, "unactive");
                                m.removeClass(J.container, "has3d")
                            }
                        })
                    }
                    window.addEventListener("pageshow", l, false)
                },
                false)
            }
        };
        var B = function(F) {
            var G = document.createElement("IFRAME");
            G.id = "ifr01";
            G.name = "ifr01";
            G.style.position = "absolute";
            G.style.top = "-9999px";
            G.style.left = "-9999px";
            G.style.display = "none";
            G.src = "http://pt.3g.qq.com/s?aid=nLogout&sid=" + sid + "&redir_url=" + F;
            document.body.appendChild(G);
            setTimeout(function() {
                window.location.href = F
            },
            1000)
        };
        var k = function() {
            m.id("login").addEventListener("click",
            function() {
                var F = this;
                if (!window.islogin) {
                    m.loadJs(Page.conf.login.js,
                    function() {
                        Mqq.util.commLogin.init({
                            callback: function(I) {
                                if (I.result == 0) {
                                    console.log(I.info);
                                    window.sid = I.info.sid;
                                    window.islogin = true;
                                    F.innerHTML = "退出";
                                    var H = /sid=[^&]*/g;
                                    var G = /^http:\/\/qzone2.z.qq.com\/login\.jsp/;
                                    m.each(m.tag("a"),
                                    function(K, L) {
                                        var J = L.getAttribute("href");
                                        if (J) {
                                            if (G.test(J)) {
                                                L.href = "http://info.z.qq.com/infocenter_v2.jsp?B_UID=" + I.info.qqNo + "&sid=" + window.sid + "&amp;g_f=275"
                                            } else {
                                                L.href = J.replace(H, "sid=" + window.sid)
                                            }
                                        }
                                    })
                                } else {}
                            },
                            accountHolder: "请输入QQ号",
                            pwdHolder: "请输入密码"
                        })
                    })
                } else {
                    B(location.href.replace(/#.*$/, "").replace(/sid=[^&]*/g, "sid="))
                }
            },
            false)
        };
        var i = function() {
            var J = i.imgs || m.tag("img");
            var F = [];
            var H = [];
            m.each(J,
            function(L, K) {
                if (K.getAttribute("orgsrc")) {
                    if (K.getAttribute("pl") == "1") {
                        F.push(K)
                    } else {
                        H.push(K)
                    }
                }
            });
            var I = function() {
                m.loadImg(F);
                document.removeEventListener("touchstart", I, false)
            };
            var G = function() {
                if (Page.conf.current == "full") {
                    m.loadImg(H);
                    document.removeEventListener("touchstart", G, false);
                    document.removeEventListener("click", G, false)
                }
            };
            document.addEventListener("touchstart", I, false);
            document.addEventListener("touchstart", G, false);
            document.addEventListener("click", G, false);
            if (document.body.scrollTop > 200) {
                I();
                G()
            }
        };
        var A = function(F) {
            location.href = F
        };
        var r = function(G) {
            G.preventDefault();
            var F = this.getAttribute("data-url");
            A(F)
        };
        
        /*var d = function() {
            m.id("weather").addEventListener("click", r, false);
            m.id("stock").addEventListener("click", r, false);
            m.id("stocknum").addEventListener("click", r, false)
        };*/
        
        /*var E = function() {
            var F = m.id("openprolist");
            var G = m.id("product-list");
            G.style.display = "block";
            F.addEventListener("click",
            function() {
                if (m.hasClass(this, "open")) {
                    m.removeClass(this, "open");
                    m.addClass(G, "open");
                    Page.swipeMgr && Page.swipeMgr.get("prolist").active()
                } else {
                    m.addClass(this, "open");
                    m.removeClass(G, "open")
                }
            })
        };*/
        var a = function() {
            if (!m.cookie("isShowedTips") && Page.conf.current == "full") {
                m.id("hd-tips").style.display = "block";
                m.cookie("isShowedTips", "1", {
                    path: "/",
                    domain: ".3g.qq.com",
                    expires: 365
                })
            }
        };
        var u = function() {
            var G = m.id("ads");
            var I = G.children;
            var F = 0,
            L = I.length,
            H;
            var K = 0;
            if (L == 1) {
                return
            }
            for (F = 0; F < L; F++) {
                H = I[F];
                H.style.cssText += "position: absolute; opacity:" + (F ? "0": "1") + "; -webkit-transition: opacity 0s ease-in-out; width: 100%; z-index:" + (F ? "0": "1")
            }
            setTimeout(function() {
                var M;
                for (M = 0; M < L; M++) {
                    H = I[M];
                    H.style.cssText += ";-webkit-transition: opacity 1s ease-in-out;"
                }
            },
            1);
            F = 0;
            var J = function() {
                var M = J.i;
                var N = m.id("ads").children;
                var O = J.c;
                if (O == 3) {
                    nextFrame(function() {
                        N[M].style.opacity = "0";
                        N[M].style.zIndex = "0"
                    })
                } else {
                    if (O == 4) {
                        M = (++M) % L;
                        nextFrame(function() {
                            N[M].style.opacity = "1";
                            N[M].style.zIndex = "1"
                        })
                    }
                }
                O = (++O) % 5;
                J.i = M;
                J.c = O
            };
            J.list = I;
            J.i = F;
            J.c = K;
            setInterval(J, 1000)
        };
        var w = function() {
            var F = m.id("qcode");
            nextFrame(function() {
                m.removeClass(F, "max");
                m.addClass(F, "min")
            });
            document.removeEventListener("touchstart", w, false)
        };
        /*var s = function() {
            m.id("qcode").addEventListener("touchstart",
            function(F) {
                F.stopPropagation()
            });
            m.id("qcode").addEventListener("click",
            function() {
                var G = this;
                var F;
                if (!G.styleok) {
                    G.style.cssText = " -webkit-transition: 300ms ease-in-out;";
                    G.styleok = true
                }
                if (m.hasClass(this, "max")) {
                    w()
                } else {
                    nextFrame(function() {
                        m.removeClass(G, "min");
                        m.addClass(G, "max")
                    });
                    document.addEventListener("touchstart", w, false)
                }
            })
        };*/
        var h = function() {
            if (m.id("switch") && m.id("gosimp") && m.id("gofull")) {
                m.id("switch").addEventListener("click", x, false);
                m.id("gosimp").addEventListener("click",
                function(F) {
                    F.preventDefault();
                    if (Page.conf.current == "simple") {
                        return
                    }
                    v(F);
                    x(F)
                },
                false);
                m.id("gofull").addEventListener("click",
                function(F) {
                    F.preventDefault();
                    if (Page.conf.current == "full") {
                        return
                    }
                    v(F);
                    x(F)
                },
                false)
            }
        };
        var v = function(F) {
            F.preventDefault();
            window.scrollTo(0, 0)
        };
        var q = m.cls("dot-slider");
        var g = function(F) {
            var H;
            var G = m.id("openprolist");
            var I = m.id("product-list");
            if (!F) {
                return
            }
            H = {
                full: z,
                simple: c
            } [F];
            H && H();
            m.addClass(G, "open");
            m.removeClass(I, "open")
        };
        var x = function(G) {
            var F = m.id("switch");
            G.preventDefault();
            if (Page.conf.current == "full") {
                m.addClass(F, "switch-simple");
                m.cookie("issimp", "1", {
                    path: "/",
                    domain: ".3g.qq.com",
                    expires: 365
                })
            } else {
                m.removeClass(F, "switch-simple");
                m.cookie("issimp", "0", {
                    path: "/",
                    domain: ".3g.qq.com",
                    expires: 365
                })
            }
            Page.conf.current = {
                full: "simple",
                simple: "full"
            } [Page.conf.current];
            g(Page.conf.current)
        };
        var p = function(J, I, G, F) {
            var H = m.id(J);
            if (H) {
                if (H.state == 1) {
                    F && F.call(H)
                }
                return
            }
            if (H && !H.binded) {
                H.addEventListener("load", F);
                H.binded = true;
                return
            }
            I == "css" && m.loadCss(G, F, J);
            I == "js" && m.loadJs(G, F, J)
        };
        var o = function() {
            if (Page.conf.current == "full" && Page.full) {
                Page.full.enter();
                b.hide()
            }
        };
        var e = function() {
            this.state = 1
        };
        var n = function() {
            this.state = 1;
            o()
        };
        var z = function() {
            nextFrame(function() {
                b.show("已切换至触屏完全版")
            });
            setTimeout(function() {
                nextFrame(function() {
                    D.body.className = ""
                });
                m.each(C.full,
                function(F, G) {
                    G.id == "js-data" && p(G.id, "js", G.url, e);
                    G.id == "js-full" && p(G.id, "js", G.url, n)
                })
            },
            450)
        };
        var t = function(F) {
            m.each(q, F)
        };
        var c = function() {
            nextFrame(function() {
                b.show("已切换至极速简约版")
            });
            setTimeout(function() {
                nextFrame(function() {
                    D.body.className = "simple-wrapper"
                });
                Page.full && Page.full.leave();
                b.hide()
            },
            450)
        };
        y();
        return {
            switchTo: g,
            toggle: x,
            tips: b
        }
    })(Page.$)
});
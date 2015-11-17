/*
jCountdown Plugin for jQuery JavaScript Library

v 1.1.1 02/12/2012

http://codecanyon.net/user/ufoufoufo

Copyright (c) 2012
*/

jQuery.fn.extend({
    jCountdown: function() {
        var B = function(b) {
            this._target = b;
            this._width = 50;
            this._height = 64;
            this._frame = 1;
            this._totalFrames = 15;
            this._fps = 24;
            this._intervalId = -1;
            this._value = 0;
            this.stop = function() {
                clearInterval(this._intervalId)
            };
            this.update = function(a) {
                if (a) {
                    this.frame(1);
                    this.stop();
                    var b = this;
                    this._intervalId = setInterval(function() {
                        b.frame() == b.totalFrames() ? (clearInterval(b._intervalId), b.onFinish()) : b.frame(b.frame() + 1)
                    },
                    Math.ceil(1E3 / this.fps()))
                } else this.frame(this.totalFrames())
            };
            this.value = function(a, b) {
                if (void 0 == a) return this._value;
                this._value = a;
                this.update(b)
            };
            this.onFinish = function() {};
            this.destroy = function() {
                this.stop();
                this._target = null
            };
            this.width = function(a) {
                if (void 0 == a) return this._width;
                this._width = a
            };
            this.height = function(a) {
                if (void 0 == a) return this._height;
                this._height = a
            };
            this.frame = function(a) {
                if (void 0 == a) return this._frame;
                this._frame = a;
                var a = -(9 - this.value()) * this.width(),
                b = -(this.frame() - 1) * this.height();
                this._target.children(".text").css("background-position", a + "px " + b + "px")
            };
            this.totalFrames = function(a) {
                if (void 0 == a) return this._totalFrames;
                this._totalFrames = a
            };
            this.fps = function(a) {
                if (void 0 == a) return this._fps;
                this._fps = a
            };
            this.update(!1)
        },
        C = function(b) {
            this._target = b;
            this._width = 50;
            this._height = 64;
            this._frame = 1;
            this._totalFrames = 15;
            this._fps = 24;
            this._intervalId = -1;
            this._value = 0;
            this.stop = function() {
                clearInterval(this._intervalId)
            };
            this.update = function(a) {
                if (a) {
                    this.frame(1);
                    this.stop();
                    var b = this;
                    this._intervalId = setInterval(function() {
                        b.frame() == b.totalFrames() ? (clearInterval(b._intervalId), b.onFinish()) : b.frame(b.frame() + 1)
                    },
                    Math.ceil(1E3 / this.fps()))
                } else this.frame(this.totalFrames())
            };
            this.value = function(a, b) {
                if (void 0 == a) return this._value;
                this._value = a;
                this.update(b)
            };
            this.onFinish = function() {};
            this.destroy = function() {
                this.stop();
                this._target = null
            };
            this.width = function(a) {
                if (void 0 == a) return this._width;
                this._width = a
            };
            this.height = function(a) {
                if (void 0 == a) return this._height;
                this._height = a
            };
            this.frame = function(a) {
                if (void 0 == a) return this._frame;
                this._frame = a;
                a = -((1 + this.value()) * this.height()) + Math.sin((this.frame() - 1) / (this.totalFrames() - 1) * Math.PI / 2) * this.height();
                this._target.children(".text").css("background-position", "0px " + a + "px")
            };
            this.totalFrames = function(a) {
                if (void 0 == a) return this._totalFrames;
                this._totalFrames = a
            };
            this.fps = function(a) {
                if (void 0 == a) return this._fps;
                this._fps = a
            };
            this.update(!1)
        },
        D = function(b) {
            this._target = b;
            this._height = this._width = 60;
            this._frame = 1;
            this._totalFrames = 15;
            this._fps = 24;
            this._intervalId = -1;
            this._value = 0;
            this.stop = function() {
                clearInterval(this._intervalId)
            };
            this.update = function(a) {
                if (a) {
                    this.frame(1);
                    this.stop();
                    var b = this;
                    this._intervalId = setInterval(function() {
                        b.frame() == b.totalFrames() ? (clearInterval(b._intervalId), b.onFinish()) : b.frame(b.frame() + 1)
                    },
                    Math.ceil(1E3 / this.fps()))
                } else this.frame(this.totalFrames())
            };
            this.value = function(a, b) {
                if (void 0 == a) return this._value;
                this._value = a;
                this.update(b)
            };
            this.onFinish = function() {};
            this.destroy = function() {
                this.stop();
                this._target = null
            };
            this.width = function(a) {
                if (void 0 == a) return this._width;
                this._width = a
            };
            this.height = function(a) {
                if (void 0 == a) return this._height;
                this._height = a
            };
            this.frame = function(a) {
                if (void 0 == a) return this._frame;
                this._frame = a;
                a = this.value() + 1;
                9 < a && (a = 0);
                var b = this.frame() / this.totalFrames(),
                c;
                0.4 <= b && 0.6 >= b ? c = 0 : 0.4 >= b ? c = 1 - b / 0.4 : 0.6 <= b && (c = (b - 0.6) / 0.4);
                a = -(0.5 < b ? this.value() : a) * this.height();
                a -= 3 * (1 - c);
                this._target.children(".text").css("background-position", "0px " + a + "px").css("opacity", c);
                this._target.children(".cover").css("opacity", c)
            };
            this.totalFrames = function(a) {
                if (void 0 == a) return this._totalFrames;
                this._totalFrames = a
            };
            this.fps = function(a) {
                if (void 0 == a) return this._fps;
                this._fps = a
            };
            this.update(!1)
        },
        E = function(b) {
            this._target = b;
            this._height = this._width = 60;
            this._heightSmall = this._widthSmall = 42;
            this._frame = 1;
            this._totalFrames = 15;
            this._fps = 24;
            this._intervalId = -1;
            this._value = 0;
            this.stop = function() {
                clearInterval(this._intervalId)
            };
            this.update = function(a) {
                if (a) {
                    this.frame(1);
                    this.stop();
                    var b = this;
                    this._intervalId = setInterval(function() {
                        b.frame() == b.totalFrames() ? (clearInterval(b._intervalId), b.onFinish()) : b.frame(b.frame() + 1)
                    },
                    Math.ceil(1E3 / this.fps()))
                } else this.frame(this.totalFrames())
            };
            this.value = function(a, b) {
                if (void 0 == a) return this._value;
                this._value = a;
                this.update(b)
            };
            this.onFinish = function() {};
            this.destroy = function() {
                this.stop();
                this._target = null
            };
            this.width = function(a) {
                if (void 0 == a) return this._width;
                this._width = a
            };
            this.height = function(a) {
                if (void 0 == a) return this._height;
                this._height = a
            };
            this.frame = function(a) {
                if (void 0 == a) return this._frame;
                this._frame = a;
                var a = -this.value() * this.height(),
                b = Math.sin((this.frame() - 1) / (this.totalFrames() - 1) * Math.PI / 2);
                0 < b && 0.001 > b ? b = 0 : 0 > b && -0.001 < b && (b = 0);
                this._target.children(".text").css("background-position", "0px " + a + "px").css("opacity", b)
            };
            this.totalFrames = function(a) {
                if (void 0 == a) return this._totalFrames;
                this._totalFrames = a
            };
            this.fps = function(a) {
                if (void 0 == a) return this._fps;
                this._fps = a
            };
            this.update(!1)
        },
        y = function() {
            this._days = [];
            this._hours = [];
            this._minutes = [];
            this._seconds = [];
            this._tickId = -1;
            this._tickDelay = 100;
            this._timeText = "";
            this._timeZone = 0;
            this._time = null;
            this.checkTime = function(b) {
                var a = new Date;
                if (this._time.getTime() < a.getTime() + 6E4 * a.getTimezoneOffset()) {
                    for (a = 0; a < this._days.length; a++) this._days[a].value(0);
                    for (a = 0; a < this._hours.length; a++) this._hours[a].value(0);
                    for (a = 0; a < this._minutes.length; a++) this._minutes[a].value(0);
                    for (a = 0; a < this._seconds.length; a++) this._seconds[a].value(0);
                    this.stop();
                    this.onFinish();
                    return ! 0
                }
                var c = this.timeFormat(this._time.getTime() - (a.getTime() + 6E4 * a.getTimezoneOffset()), this._days.length, this._hours.length, this._minutes.length, this._seconds.length).split("");
                if (!isNaN(this._time)) {
                    for (a = 0; a < this._days.length; a++) {
                        var d = parseInt(c.shift(), 10);
                        d != this._days[a].value() && this._days[a].value(d, b)
                    }
                    for (a = 0; a < this._hours.length; a++) d = parseInt(c.shift(), 10),
                    d != this._hours[a].value() && this._hours[a].value(d, b);
                    for (a = 0; a < this._minutes.length; a++) d = parseInt(c.shift(), 10),
                    d != this._minutes[a].value() && this._minutes[a].value(d, b);
                    for (a = 0; a < this._seconds.length; a++) d = parseInt(c.shift(), 10),
                    d != this._seconds[a].value() && this._seconds[a].value(d, b)
                }
                return ! 1
            };
            this.textFormat = function(b, a, c) {
                for (b = b.toString(); b.length < a;) b = c + b;
                b.length > a && (b = b.substr(b.length - a, a));
                return b
            };
            this.timeFormat = function(b, a, c, d, e) {
                var b = Math.floor(b / 1E3),
                f = b % 60,
                g = Math.floor(b % 3600 / 60),
                h = Math.floor(b % 86400 / 3600);
                return this.textFormat(Math.floor(b / 86400), a, "0") + this.textFormat(h, c, "0") + this.textFormat(g, d, "0") + this.textFormat(f, e, "0")
            };
            this.start = function() {
                this.stop();
                for (var b = 0; b < this._days.length; b++) this._days[b].update();
                for (b = 0; b < this._hours.length; b++) this._hours[b].update();
                for (b = 0; b < this._minutes.length; b++) this._minutes[b].update();
                for (b = 0; b < this._seconds.length; b++) this._seconds[b].update();
                if (!this.checkTime(!1)) {
                    var a = this;
                    this._tickId = setInterval(function() {
                        a.checkTime(!0)
                    },
                    this._tickDelay)
                }
            };
            this.stop = function() {
                for (var b = 0; b < this._days.length; b++) this._days[b].stop();
                for (b = 0; b < this._hours.length; b++) this._hours[b].stop();
                for (b = 0; b < this._minutes.length; b++) this._minutes[b].stop();
                for (b = 0; b < this._seconds.length; b++) this._seconds[b].stop();
                clearInterval(this._tickId)
            };
            this.onFinish = function() {};
            this.destroy = function() {
                for (var b = 0; b < this._days.length; b++) this._days[b].destroy();
                for (b = 0; b < this._hours.length; b++) this._hours[b].destroy();
                for (b = 0; b < this._minutes.length; b++) this._minutes[b].destroy();
                for (b = 0; b < this._seconds.length; b++) this._seconds[b].destroy();
                this._days = [];
                this._hours = [];
                this._minutes = [];
                this._seconds = [];
                this.stop()
            };
            this.items = function(b, a, c, d) {
                this._days = b;
                this._hours = a;
                this._minutes = c;
                this._seconds = d
            };
            this.timeText = function(b) {
                if (void 0 == b) return this._timeText;
                this._timeText = b;
                this.time(this.timeText(), this.timeZone())
            };
            this.timeZone = function(b) {
                if (void 0 == b) return this._timeZone;
                this._timeZone = b;
                this.time(this.timeText(), this.timeZone())
            };
            this.time = function(b, a) {
                this._timeText = b;
                this._timeZone = a;
                var c = this._timeText.split("/").join(" ").split(":").join(" ").split(" "),
                d = parseInt(c[0], 10),
                e = parseInt(c[1], 10) - 1,
                f = parseInt(c[2], 10),
                g = parseInt(c[3], 10),
                h = parseInt(c[4], 10) - 60 * this._timeZone,
                c = parseInt(c[5], 10);
                this._time = new Date(d, e, f, g, h, c, 0);
                this.start()
            }

        },
        v = function() {
            return q.data("countdown")
        },
        t = function() {
            void 0 != v() && (v().destroy(), q.removeData("countdown"))
        };
        if (0 < arguments.length) {
            var q = this,
            m = v();
            if (1 == arguments.length && "object" == typeof arguments[0]) {
                void 0 != m && (t(), q.children().remove());
                var e = arguments[0];
                void 0 == v() ? (m = new y, q.data("countdown", m), m = v()) : m = void 0;
                var j = parseInt(jQuery.browser.version, 10),
                y = "string" == typeof e.timeText ? e.timeText: "",
                t = parseFloat(e.timeZone);
                isNaN(t) && (t = 0);
                var i = "string" == typeof e.style ? e.style.toLowerCase() : "";
                switch (i) {
                case "flip":
                    break;
                case "slide":
                    break;
                case "crystal":
                    break;
                case "metal":
                    break;
                default:
                    i = "flip"
                }
                var k = "string" == typeof e.color ? e.color.toLowerCase() : "";
                switch (k) {
                case "black":
                    break;
                case "white":
                    break;
                default:
                    k = "black"
                }
                var d = parseInt(e.width, 10);
                10 <= d || (d = 0);
                var n = parseInt(e.textGroupSpace, 10);
                0 <= n || (n = 15);
                var p = parseInt(e.textSpace, 10);
                0 < p || (p = 0);
                var u = !1 != e.reflection,
                r = parseFloat(e.reflectionOpacity);
                0 < r ? 100 < r && (r = 100) : r = 10;
                var l = parseInt(e.reflectionBlur, 10);
                0 < l ? 10 < l && (l = 10) : l = 0;
                var g = 2 < parseInt(e.dayTextNumber, 10) ? parseInt(e.dayTextNumber, 10) : 2,
                h = !1 != e.displayDay,
                A = !1 != e.displayHour,
                z = !1 != e.displayMinute,
                x = !1 != e.displaySecond,
                w = !1 != e.displayLabel,
                e = "function" == typeof e.onFinish ? e.onFinish: function() {},
                c,
                f = "",
                s = "";
                c = '<div class="jCountdown">';
                if (h) {
                    c += '<div class="group day' + (!A && !z && !x ? " lastItem": "") + '">';
                    for (h = 0; h < g; h++) {
                        f = " item" + (h + 1);
                        s = h == g - 1 ? " lastItem": "";
                        c += '<div class="container' + f + s + '">';
                        if ("slide" == i || "crystal" == i || "metal" == i) c += '<div class="cover"></div>';
                        c += '<div class="text"></div>';
                        c += "</div>"
                    }
                    w && (c += '<div class="label"></div>');
                    c += "</div>"
                }
                if (A) {
                    c += '<div class="group hour' + (!z && !x ? " lastItem": "") + '">';
                    for (h = 0; 2 > h; h++) {
                        f = " item" + (h + 1);
                        s = 1 == h ? " lastItem": "";
                        c += '<div class="container' + f + s + '">';
                        if ("slide" == i || "crystal" == i || "metal" == i) c += '<div class="cover"></div>';
                        c += '<div class="text"></div>';
                        c += "</div>"
                    }
                    w && (c += '<div class="label"></div>');
                    c += "</div>"
                }
                if (z) {
                    c += '<div class="group minute' + (!x ? " lastItem": "") + '">';
                    for (h = 0; 2 > h; h++) {
                        f = " item" + (h + 1);
                        s = 1 == h ? " lastItem": "";
                        c += '<div class="container' + f + s + '">';
                        if ("slide" == i || "crystal" == i || "metal" == i) c += '<div class="cover"></div>';
                        c += '<div class="text"></div>';
                        c += "</div>"
                    }
                    w && (c += '<div class="label"></div>');
                    c += "</div>"
                }
                if (x) {
                    c += '<div class="group second lastItem">';
                    for (h = 0; 2 > h; h++) {
                        f = " item" + (h + 1);
                        s = 1 == h ? " lastItem": "";
                        c += '<div class="container' + f + s + '">';
                        if ("slide" == i || "crystal" == i || "metal" == i) c += '<div class="cover"></div>';
                        c += '<div class="text"></div>';
                        c += "</div>"
                    }
                    w && (c += '<div class="label"></div>');
                    c += "</div>"
                }
                q.html(c + "</div>");
                g = q.children(".jCountdown");
                g.addClass(i);
                g.addClass(k);
                g.children(".group").css("margin-right", n + "px");
                g.children(".group.lastItem").css("margin-right", "0px");
                g.children(".group").children(".container").css("margin-right", p + "px");
                g.children(".group").children(".container.lastItem").css("margin-right", "0px");
                u && !(jQuery.browser.msie && 10 > j) && (reflectionObject = g.clone(), reflectionObject.addClass("reflection"), w && reflectionObject.addClass("displayLabel"), 100 != r && reflectionObject.css("opacity", r / 100), 0 != l && reflectionObject.addClass("blur" + l), g = g.add(reflectionObject));
                f = jQuery('<div class="jCountdownContainer"></div>');
                f.append(g);
                q.append(f);
                0 != d && (k = jQuery('<div class="jCountdownScale"></div>'), k.append(g), f.append(k), n = k.width(), p = k.height(), d /= n, u = -(1 - d) * n / 2, r = -(1 - d) * p / 2, l = "scale(" + d + ")", f.width(n * d), f.height(p * d), jQuery.browser.msie && 8 >= j ? k.css("zoom", d) : (k.css("transform", l).css("-moz-transform", l).css("-webkit-transform", l).css("-o-transform", l).css("-ms-transform", l), k.css("left", u).css("top", r)));
                j = "";
                d = 0;
                k = [];
                n = [];
                p = [];
                u = [];
                f = function() {};
                switch (i) {
                case "flip":
                    f = B;
                    break;
                case "slide":
                    f = C;
                    break;
                case "crystal":
                    f = E;
                    break;
                case "metal":
                    f = D
                }
                d = 1;
                for (j = ".group.day>.container.item"; g.find(j + d).length;) k.push(new f(g.find(j + d))),
                d++;
                d = 1;
                for (j = ".group.hour>.container.item"; g.find(j + d).length;) n.push(new f(g.find(j + d))),
                d++;
                d = 1;
                for (j = ".group.minute>.container.item"; g.find(j + d).length;) p.push(new f(g.find(j + d))),
                d++;
                d = 1;
                for (j = ".group.second>.container.item"; g.find(j + d).length;) u.push(new f(g.find(j + d))),
                d++;
                m.items(k, n, p, u);
                m.onFinish = e;
                m.time(y, t)
            } else if ("string" == typeof arguments[0] && void 0 != m) switch (arguments[0]) {
            case "stop":
                m.stop();
                break;
            case "start":
                m.start();
                break;
            case "destroy":
                t(),
                q.children().remove()
            }
        }
        return this
    }
});
(function () {
    /*!
     * segment-display.js
     *
     * Copyright 2012, RÃždiger Appel
     * http://www.3quarks.com
     * Published under Creative Commons 3.0 License.
     *
     * Date: 2012-02-14
     * Version: 1.0.0
     *
     * Dokumentation: http://www.3quarks.com/de/Segmentanzeige
     * Documentation: http://www.3quarks.com/en/SegmentDisplay
     */
    ;

    function n(e) {
        this.displayEl = e, this.pattern = "##:##:##", this.value = "12:34:56", this.digitHeight = 20, this.digitWidth = 10, this.digitDistance = 2.5, this.displayAngle = 12, this.segmentWidth = 2.5, this.segmentDistance = .2, this.segmentCount = n.SevenSegment, this.cornerType = n.RoundedCorner, this.colorOn = "rgb(233, 93, 15)", this.colorOff = "rgb(75, 30, 5)"
    }(window._gsQueue || (window._gsQueue = [])).push(function () {
            "use strict";
            window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
                    var r = [].slice,
                        i = function (e, t, r) {
                            n.call(this, e, t, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = i.prototype.render
                        },
                        s = 1e-10,
                        o = n._internals.isSelector,
                        u = n._internals.isArray,
                        a = i.prototype = n.to({}, .1, {}),
                        f = [];
                    i.version = "1.11.4", a.constructor = i, a.kill()._gc = !1, i.killTweensOf = i.killDelayedCallsTo = n.killTweensOf, i.getTweensOf = n.getTweensOf, i.ticker = n.ticker, a.invalidate = function () {
                        return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
                    }, a.updateTo = function (e, t) {
                        var r, i = this.ratio;
                        t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                        for (r in e) this.vars[r] = e[r];
                        if (this._initted)
                            if (t) this._initted = !1;
                            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                            var s = this._time;
                            this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                        } else if (this._time > 0) {
                            this._initted = !1, this._init();
                            for (var o, u = 1 / (1 - i), a = this._firstPT; a;) o = a.s + a.c, a.c *= u, a.s = o - a.c, a = a._next
                        }
                        return this
                    }, a.render = function (e, t, n) {
                        this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                        var r, i, o, u, a, l, c, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
                            d = this._time,
                            v = this._totalTime,
                            m = this._cycle,
                            g = this._duration;
                        if (e >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, i = "onComplete"), 0 === g && (h = this._rawPrevTime, (0 === e || 0 > h || h === s) && h !== e && (n = !0, h > s && (i = "onReverseComplete")), this._rawPrevTime = h = !t || e || 0 === h ? e : s)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === g && this._rawPrevTime > s) && (i = "onReverseComplete", r = this._reversed), 0 > e ? (this._active = !1, 0 === g && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = h = !t || e || 0 === this._rawPrevTime ? e : s)) : this._initted || (n = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (u = g + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (a = this._time / g, l = this._easeType, c = this._easePower, (1 === l || 3 === l && a >= .5) && (a = 1 - a), 3 === l && (a *= 2), 1 === c ? a *= a : 2 === c ? a *= a * a : 3 === c ? a *= a * a * a : 4 === c && (a *= a * a * a * a), this.ratio = 1 === l ? 1 - a : 2 === l ? a : .5 > this._time / g ? a / 2 : 1 - a / 2) : this.ratio = this._ease.getRatio(this._time / g)), d === this._time && !n && m === this._cycle) return v !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), void 0;
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            this._time && !r ? this.ratio = this._ease.getRatio(this._time / g) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (this._active || !this._paused && this._time !== d && e >= 0 && (this._active = !0), 0 === v && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                        this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n), t || (this._totalTime !== v || r) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), this._cycle !== m && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || f)), i && (this._gc || (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || f), 0 === g && this._rawPrevTime === s && h !== s && (this._rawPrevTime = 0)))
                    }, i.to = function (e, t, n) {
                        return new i(e, t, n)
                    }, i.from = function (e, t, n) {
                        return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new i(e, t, n)
                    }, i.fromTo = function (e, t, n, r) {
                        return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new i(e, t, r)
                    }, i.staggerTo = i.allTo = function (e, t, s, a, l, c, h) {
                        a = a || 0;
                        var p, d, v, m, g = s.delay || 0,
                            y = [],
                            b = function () {
                                s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), l.apply(h || this, c || f)
                            };
                        for (u(e) || ("string" == typeof e && (e = n.selector(e) || e), o(e) && (e = r.call(e, 0))), p = e.length, v = 0; p > v; v++) {
                            d = {};
                            for (m in s) d[m] = s[m];
                            d.delay = g, v === p - 1 && l && (d.onComplete = b), y[v] = new i(e[v], t, d), g += a
                        }
                        return y
                    }, i.staggerFrom = i.allFrom = function (e, t, n, r, s, o, u) {
                        return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, i.staggerTo(e, t, n, r, s, o, u)
                    }, i.staggerFromTo = i.allFromTo = function (e, t, n, r, s, o, u, a) {
                        return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, i.staggerTo(e, t, r, s, o, u, a)
                    }, i.delayedCall = function (e, t, n, r, s) {
                        return new i(t, 0, {
                            delay: e,
                            onComplete: t,
                            onCompleteParams: n,
                            onCompleteScope: r,
                            onReverseComplete: t,
                            onReverseCompleteParams: n,
                            onReverseCompleteScope: r,
                            immediateRender: !1,
                            useFrames: s,
                            overwrite: 0
                        })
                    }, i.set = function (
                        e, t) {
                        return new i(e, 0, t)
                    }, i.isTweening = function (e) {
                        return n.getTweensOf(e, !0).length > 0
                    };
                    var l = function (e, t) {
                            for (var r = [], i = 0, s = e._first; s;) s instanceof n ? r[i++] = s : (t && (r[i++] = s), r = r.concat(l(s, t)), i = r.length), s = s._next;
                            return r
                        },
                        c = i.getAllTweens = function (t) {
                            return l(e._rootTimeline, t).concat(l(e._rootFramesTimeline, t))
                        };
                    i.killAll = function (e, n, r, i) {
                        null == n && (n = !0), null == r && (r = !0);
                        var s, o, u, a = c(0 != i),
                            f = a.length,
                            l = n && r && i;
                        for (u = 0; f > u; u++) o = a[u], (l || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && (e ? o.totalTime(o.totalDuration()) : o._enabled(!1, !1))
                    }, i.killChildTweensOf = function (e, t) {
                        if (null != e) {
                            var s, a, f, l, c, h = n._tweenLookup;
                            if ("string" == typeof e && (e = n.selector(e) || e), o(e) && (e = r.call(e, 0)), u(e))
                                for (l = e.length; --l > -1;) i.killChildTweensOf(e[l], t);
                            else {
                                s = [];
                                for (f in h)
                                    for (a = h[f].target.parentNode; a;) a === e && (s = s.concat(h[f].tweens)), a = a.parentNode;
                                for (c = s.length, l = 0; c > l; l++) t && s[l].totalTime(s[l].totalDuration()), s[l]._enabled(!1, !1)
                            }
                        }
                    };
                    var h = function (e, n, r, i) {
                        n = n !== !1, r = r !== !1, i = i !== !1;
                        for (var s, o, u = c(i), a = n && r && i, f = u.length; --f > -1;) o = u[f], (a || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && o.paused(e)
                    };
                    return i.pauseAll = function (e, t, n) {
                        h(!0, e, t, n)
                    }, i.resumeAll = function (e, t, n) {
                        h(!1, e, t, n)
                    }, i.globalTimeScale = function (t) {
                        var r = e._rootTimeline,
                            i = n.ticker.time;
                        return arguments.length ? (t = t || s, r._startTime = i - (i - r._startTime) * r._timeScale / t, r = e._rootFramesTimeline, i = n.ticker.frame, r._startTime = i - (i - r._startTime) * r._timeScale / t, r._timeScale = e._rootTimeline._timeScale = t, t) : r._timeScale
                    }, a.progress = function (e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                    }, a.totalProgress = function (e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                    }, a.time = function (e, t) {
                        return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                    }, a.duration = function (t) {
                        return arguments.length ? e.prototype.duration.call(this, t) : this._duration
                    }, a.totalDuration = function (e) {
                        return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                    }, a.repeat = function (e) {
                        return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                    }, a.repeatDelay = function (e) {
                        return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                    }, a.yoyo = function (e) {
                        return arguments.length ? (this._yoyo = e, this) : this._yoyo
                    }, i
                }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
                    var r = function (e) {
                            t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                            var n, r, i = this.vars;
                            for (r in i) n = i[r], o(n) && -1 !== n.join("").indexOf("{self}") && (i[r] = this._swapSelfInParams(n));
                            o(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
                        },
                        i = 1e-10,
                        s = n._internals.isSelector,
                        o = n._internals.isArray,
                        u = [],
                        a = function (e) {
                            var t, n = {};
                            for (t in e) n[t] = e[t];
                            return n
                        },
                        f = function (e, t, n, r) {
                            e._timeline.pause(e._startTime), t && t.apply(r || e._timeline, n || u)
                        },
                        l = u.slice,
                        c = r.prototype = new t;
                    return r.version = "1.11.4", c.constructor = r, c.kill()._gc = !1, c.to = function (e, t, r, i) {
                        return t ? this.add(new n(e, t, r), i) : this.set(e, r, i)
                    }, c.from = function (e, t, r, i) {
                        return this.add(n.from(e, t, r), i)
                    }, c.fromTo = function (e, t, r, i, s) {
                        return t ? this.add(n.fromTo(e, t, r, i), s) : this.set(e, i, s)
                    }, c.staggerTo = function (e, t, i, o, u, f, c, p) {
                        var d, v = new r({
                            onComplete: f,
                            onCompleteParams: c,
                            onCompleteScope: p,
                            smoothChildTiming: this.smoothChildTiming
                        });
                        for ("string" == typeof e && (e = n.selector(e) || e), s(e) && (e = l.call(e, 0)), o = o || 0, d = 0; e.length > d; d++) i.startAt && (i.startAt = a(i.startAt)), v.to(e[d], t, a(i), d * o);
                        return this.add(v, u)
                    }, c.staggerFrom = function (e, t, n, r, i, s, o, u) {
                        return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(e, t, n, r, i, s, o, u)
                    }, c.staggerFromTo = function (e, t, n, r, i, s, o, u, a) {
                        return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, this.staggerTo(e, t, r, i, s, o, u, a)
                    }, c.call = function (e, t, r, i) {
                        return this.add(n.delayedCall(0, e, t, r), i)
                    }, c.set = function (e, t, r) {
                        return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new n(e, 0, t), r)
                    }, r.exportRoot = function (e, t) {
                        e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                        var i, s, o = new r(e),
                            u = o._timeline;
                        for (null == t && (t = !0), u._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = u._time, i = u._first; i;) s = i._next, t && i instanceof n && i.target === i.vars.onComplete || o.add(i, i._startTime - i._delay), i = s;
                        return u.add(o, 0), o
                    }, c.add = function (i, s, u, a) {
                        var f, l, c, h, p, d;
                        if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, i)), !(i instanceof e)) {
                            if (i instanceof Array || i && i.push && o(i)) {
                                for (u = u || "normal", a = a || 0, f = s, l = i.length, c = 0; l > c; c++) o(h = i[c]) && (h = new r({
                                    tweens: h
                                })), this.add(h, f), "string" != typeof h && "function" != typeof h && ("sequence" === u ? f = h._startTime + h.totalDuration() / h._timeScale : "start" === u && (h._startTime -= h.delay())), f += a;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof i) return this.addLabel(i, s);
                            if ("function" != typeof i) throw "Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                            i = n.delayedCall(0, i)
                        }
                        if (t.prototype.add.call(this, i, s), this._gc && !this._paused && this._duration < this.duration())
                            for (p = this, d = p.rawTime() > i._startTime; p._gc && p._timeline;) p._timeline.smoothChildTiming && d ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1), p = p._timeline;
                        return this
                    }, c.remove = function (t) {
                        if (t instanceof e) return this._remove(t, !1);
                        if (t instanceof Array ||
                            t && t.push && o(t)) {
                            for (var n = t.length; --n > -1;) this.remove(t[n]);
                            return this
                        }
                        return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                    }, c._remove = function (e, n) {
                        t.prototype._remove.call(this, e, n);
                        var r = this._last;
                        return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
                    }, c.append = function (e, t) {
                        return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                    }, c.insert = c.insertMultiple = function (e, t, n, r) {
                        return this.add(e, t || 0, n, r)
                    }, c.appendMultiple = function (e, t, n, r) {
                        return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, r)
                    }, c.addLabel = function (e, t) {
                        return this._labels[e] = this._parseTimeOrLabel(t), this
                    }, c.addPause = function (e, t, n, r) {
                        return this.call(f, ["{self}", t, n, r], this, e)
                    }, c.removeLabel = function (e) {
                        return delete this._labels[e], this
                    }, c.getLabelTime = function (e) {
                        return null != this._labels[e] ? this._labels[e] : -1
                    }, c._parseTimeOrLabel = function (t, n, r, i) {
                        var s;
                        if (i instanceof e && i.timeline === this) this.remove(i);
                        else if (i && (i instanceof Array || i.push && o(i)))
                            for (s = i.length; --s > -1;) i[s] instanceof e && i[s].timeline === this && this.remove(i[s]);
                        if ("string" == typeof n) return this._parseTimeOrLabel(n, r && "number" == typeof t && null == this._labels[n] ? t - this.duration() : 0, r);
                        if (n = n || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                        else {
                            if (s = t.indexOf("="), -1 === s) return null == this._labels[t] ? r ? this._labels[t] = this.duration() + n : n : this._labels[t] + n;
                            n = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, r) : this.duration()
                        }
                        return Number(t) + n
                    }, c.seek = function (e, t) {
                        return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
                    }, c.stop = function () {
                        return this.paused(!0)
                    }, c.gotoAndPlay = function (e, t) {
                        return this.play(e, t)
                    }, c.gotoAndStop = function (e, t) {
                        return this.pause(e, t)
                    }, c.render = function (e, t, n) {
                        this._gc && this._enabled(!0, !1);
                        var r, s, o, a, f, l = this._dirty ? this.totalDuration() : this._totalDuration,
                            c = this._time,
                            h = this._startTime,
                            p = this._timeScale,
                            d = this._paused;
                        if (e >= l ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime || this._rawPrevTime === i) && this._rawPrevTime !== e && this._first && (f = !0, this._rawPrevTime > i && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || 0 === this._rawPrevTime ? e : i, e = l + 1e-4) : 1e-7 > e ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && (this._rawPrevTime > i || 0 > e && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (f = !0), this._rawPrevTime = e) : (this._rawPrevTime = this._duration || !t || e || 0 === this._rawPrevTime ? e : i, e = 0, this._initted || (f = !0))) : this._totalTime = this._time = this._rawPrevTime = e, this._time !== c && this._first || n || f) {
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && e > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= c)
                                for (r = this._first; r && (o = r._next, !this._paused || d);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
                            else
                                for (r = this._last; r && (o = r._prev, !this._paused || d);)(r._active || c >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
                            this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), a && (this._gc || (h === this._startTime || p !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || u)))
                        }
                    }, c._hasPausedChild = function () {
                        for (var e = this._first; e;) {
                            if (e._paused || e instanceof r && e._hasPausedChild()) return !0;
                            e = e._next
                        }
                        return !1
                    }, c.getChildren = function (e, t, r, i) {
                        i = i || -9999999999;
                        for (var s = [], o = this._first, u = 0; o;) i > o._startTime || (o instanceof n ? t !== !1 && (s[u++] = o) : (r !== !1 && (s[u++] = o), e !== !1 && (s = s.concat(o.getChildren(!0, t, r)), u = s.length))), o = o._next;
                        return s
                    }, c.getTweensOf = function (e, t) {
                        for (var r = n.getTweensOf(e), i = r.length, s = [], o = 0; --i > -1;)(r[i].timeline === this || t && this._contains(r[i])) && (s[o++] = r[i]);
                        return s
                    }, c._contains = function (e) {
                        for (var t = e.timeline; t;) {
                            if (t === this) return !0;
                            t = t.timeline
                        }
                        return !1
                    }, c.shiftChildren = function (e, t, n) {
                        n = n || 0;
                        for (var r, i = this._first, s = this._labels; i;) i._startTime >= n && (i._startTime += e), i = i._next;
                        if (t)
                            for (r in s) s[r] >= n && (s[r] += e);
                        return this._uncache(!0)
                    }, c._kill = function (e, t) {
                        if (!e && !t) return this._enabled(!1, !1);
                        for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = n.length, i = !1; --r > -1;) n[r]._kill(e, t) && (i = !0);
                        return i
                    }, c.clear = function (e) {
                        var t = this.getChildren(!1, !0, !0),
                            n = t.length;
                        for (this._time = this._totalTime = 0; --n > -1;) t[n]._enabled(!1, !1);
                        return e !== !1 && (this._labels = {}), this._uncache(!0)
                    }, c.invalidate = function () {
                        for (var e = this._first; e;) e.invalidate(), e = e._next;
                        return this
                    }, c._enabled = function (e, n) {
                        if (e === this._gc)
                            for (var r = this._first; r;) r._enabled(e, !0), r = r._next;
                        return t.prototype._enabled.call(this, e, n)
                    }, c.duration = function (e) {
                        return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                    }, c.totalDuration = function (e) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var t, n, r = 0, i = this._last, s = 999999999999; i;) t = i._prev, i._dirty && i.totalDuration(), i._startTime > s && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay) : s = i._startTime, 0 > i._startTime && !i._paused && (r -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren(-i._startTime, !1, -9999999999), s = 0), n = i._startTime + i._totalDuration / i._timeScale, n > r && (r = n), i = t;
                                this
                                    ._duration = this._totalDuration = r, this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
                    }, c.usesFrames = function () {
                        for (var t = this._timeline; t._timeline;) t = t._timeline;
                        return t === e._rootFramesTimeline
                    }, c.rawTime = function () {
                        return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                    }, r
                }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, t, n) {
                    var r = function (t) {
                            e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                        },
                        i = 1e-10,
                        s = [],
                        o = new n(null, null, 1, 0),
                        u = r.prototype = new e;
                    return u.constructor = r, u.kill()._gc = !1, r.version = "1.11.4", u.invalidate = function () {
                        return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
                    }, u.addCallback = function (e, n, r, i) {
                        return this.add(t.delayedCall(0, e, r, i), n)
                    }, u.removeCallback = function (e, t) {
                        if (e)
                            if (null == t) this._kill(null, e);
                            else
                                for (var n = this.getTweensOf(e, !1), r = n.length, i = this._parseTimeOrLabel(t); --r > -1;) n[r]._startTime === i && n[r]._enabled(!1, !1);
                        return this
                    }, u.tweenTo = function (e, n) {
                        n = n || {};
                        var r, i, u, f = {
                            ease: o,
                            overwrite: 2,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        };
                        for (i in n) f[i] = n[i];
                        return f.time = this._parseTimeOrLabel(e), r = Math.abs(Number(f.time) - this._time) / this._timeScale || .001, u = new t(this, r, f), f.onStart = function () {
                            u.target.paused(!0), u.vars.time !== u.target.time() && r === u.duration() && u.duration(Math.abs(u.vars.time - u.target.time()) / u.target._timeScale), n.onStart && n.onStart.apply(n.onStartScope || u, n.onStartParams || s)
                        }, u
                    }, u.tweenFromTo = function (e, t, n) {
                        n = n || {}, e = this._parseTimeOrLabel(e), n.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [e],
                            onCompleteScope: this
                        }, n.immediateRender = n.immediateRender !== !1;
                        var r = this.tweenTo(t, n);
                        return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
                    }, u.render = function (e, t, n) {
                        this._gc && this._enabled(!0, !1);
                        var r, o, u, a, f, l, c = this._dirty ? this.totalDuration() : this._totalDuration,
                            h = this._duration,
                            p = this._time,
                            d = this._totalTime,
                            v = this._startTime,
                            m = this._timeScale,
                            g = this._rawPrevTime,
                            y = this._paused,
                            b = this._cycle;
                        if (e >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", 0 === this._duration && (0 === e || 0 > g || g === i) && g !== e && this._first && (f = !0, g > i && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || 0 === this._rawPrevTime ? e : i, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = h, e = h + 1e-4)) : 1e-7 > e ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === h && (g > i || 0 > e && g >= 0) && !this._locked) && (a = "onReverseComplete", o = this._reversed), 0 > e ? (this._active = !1, 0 === h && g >= 0 && this._first && (f = !0), this._rawPrevTime = e) : (this._rawPrevTime = h || !t || e || 0 === this._rawPrevTime ? e : i, e = 0, this._initted || (f = !0))) : (0 === h && 0 > g && (f = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (l = h + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = h - this._time), this._time > h ? (this._time = h, e = h + 1e-4) : 0 > this._time ? this._time = e = 0 : e = this._time))), this._cycle !== b && !this._locked) {
                            var w = this._yoyo && 0 !== (1 & b),
                                E = w === (this._yoyo && 0 !== (1 & this._cycle)),
                                S = this._totalTime,
                                x = this._cycle,
                                T = this._rawPrevTime,
                                N = this._time;
                            if (this._totalTime = b * h, b > this._cycle ? w = !w : this._totalTime += h, this._time = p, this._rawPrevTime = 0 === h ? g - 1e-4 : g, this._cycle = b, this._locked = !0, p = w ? 0 : h, this.render(p, t, 0 === h), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), E && (p = w ? h + 1e-4 : -0.0001, this.render(p, !0, !1)), this._locked = !1, this._paused && !y) return;
                            this._time = N, this._totalTime = S, this._cycle = x, this._rawPrevTime = T
                        }
                        if (!(this._time !== p && this._first || n || f)) return d !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), void 0;
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && e > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= p)
                            for (r = this._first; r && (u = r._next, !this._paused || y);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = u;
                        else
                            for (r = this._last; r && (u = r._prev, !this._paused || y);)(r._active || p >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = u;
                        this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), a && (this._locked || this._gc || (v === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (o && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || s)))
                    }, u.getActive = function (e, t, n) {
                        null == e && (e = !0), null == t && (t = !0), null == n && (n = !1);
                        var r, i, s = [],
                            o = this.getChildren(e, t, n),
                            u = 0,
                            a = o.length;
                        for (r = 0; a > r; r++) i = o[r], i.isActive() && (s[u++] = i);
                        return s
                    }, u.getLabelAfter = function (e) {
                        e || 0 !== e && (e = this._time);
                        var t, n = this.getLabelsArray(),
                            r = n.length;
                        for (t = 0; r > t; t++)
                            if (n[t].time > e) return n[t].name;
                        return null
                    }, u.getLabelBefore = function (e) {
                        null == e && (e = this._time);
                        for (var t = this.getLabelsArray(), n = t.length; --n > -1;)
                            if (e > t[n].time) return t[n].name;
                        return null
                    }, u.getLabelsArray = function () {
                        var e, t = [],
                            n = 0;
                        for (e in this._labels) t[n++] = {
                            time: this._labels[e],
                            name: e
                        };
                        return t.sort(function (e, t) {
                            return e.time - t.time
                        }), t
                    }, u.progress = function (e) {
                        return arguments.length ? this.totalTime(this.duration() * (
                            this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                    }, u.totalProgress = function (e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                    }, u.totalDuration = function (t) {
                        return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                    }, u.time = function (e, t) {
                        return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                    }, u.repeat = function (e) {
                        return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                    }, u.repeatDelay = function (e) {
                        return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                    }, u.yoyo = function (e) {
                        return arguments.length ? (this._yoyo = e, this) : this._yoyo
                    }, u.currentLabel = function (e) {
                        return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                    }, r
                }, !0),
                function () {
                    var e = 180 / Math.PI,
                        t = [],
                        n = [],
                        r = [],
                        i = {},
                        s = function (e, t, n, r) {
                            this.a = e, this.b = t, this.c = n, this.d = r, this.da = r - e, this.ca = n - e, this.ba = t - e
                        },
                        o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                        u = function (e, t, n, r) {
                            var i = {
                                    a: e
                                },
                                s = {},
                                o = {},
                                u = {
                                    c: r
                                },
                                a = (e + t) / 2,
                                f = (t + n) / 2,
                                l = (n + r) / 2,
                                c = (a + f) / 2,
                                h = (f + l) / 2,
                                p = (h - c) / 8;
                            return i.b = a + (e - a) / 4, s.b = c + p, i.c = s.a = (i.b + s.b) / 2, s.c = o.a = (c + h) / 2, o.b = h - p, u.b = l + (r - l) / 4, o.c = u.a = (o.b + u.b) / 2, [i, s, o, u]
                        },
                        a = function (e, i, s, o, a) {
                            var f, l, c, h, p, d, v, m, g, y, b, w, E, S = e.length - 1,
                                x = 0,
                                T = e[0].a;
                            for (f = 0; S > f; f++) p = e[x], l = p.a, c = p.d, h = e[x + 1].d, a ? (b = t[f], w = n[f], E = .25 * (w + b) * i / (o ? .5 : r[f] || .5), d = c - (c - l) * (o ? .5 * i : 0 !== b ? E / b : 0), v = c + (h - c) * (o ? .5 * i : 0 !== w ? E / w : 0), m = c - (d + ((v - d) * (3 * b / (b + w) + .5) / 4 || 0))) : (d = c - .5 * (c - l) * i, v = c + .5 * (h - c) * i, m = c - (d + v) / 2), d += m, v += m, p.c = g = d, p.b = 0 !== f ? T : T = p.a + .6 * (p.c - p.a), p.da = c - l, p.ca = g - l, p.ba = T - l, s ? (y = u(l, T, g, c), e.splice(x, 1, y[0], y[1], y[2], y[3]), x += 4) : x++, T = v;
                            p = e[x], p.b = T, p.c = T + .4 * (p.d - T), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = T - p.a, s && (y = u(p.a, T, p.c, p.d), e.splice(x, 1, y[0], y[1], y[2], y[3]))
                        },
                        f = function (e, r, i, o) {
                            var u, a, f, l, c, h, p = [];
                            if (o)
                                for (e = [o].concat(e), a = e.length; --a > -1;) "string" == typeof (h = e[a][r]) && "=" === h.charAt(1) && (e[a][r] = o[r] + Number(h.charAt(0) + h.substr(2)));
                            if (u = e.length - 2, 0 > u) return p[0] = new s(e[0][r], 0, 0, e[-1 > u ? 0 : 1][r]), p;
                            for (a = 0; u > a; a++) f = e[a][r], l = e[a + 1][r], p[a] = new s(f, 0, 0, l), i && (c = e[a + 2][r], t[a] = (t[a] || 0) + (l - f) * (l - f), n[a] = (n[a] || 0) + (c - l) * (c - l));
                            return p[a] = new s(e[a][r], 0, 0, e[a + 1][r]), p
                        },
                        l = function (e, s, u, l, c, h) {
                            var p, d, v, m, g, y, b, w, E = {},
                                S = [],
                                x = h || e[0];
                            c = "string" == typeof c ? "," + c + "," : o, null == s && (s = 1);
                            for (d in e[0]) S.push(d);
                            if (e.length > 1) {
                                for (w = e[e.length - 1], b = !0, p = S.length; --p > -1;)
                                    if (d = S[p], Math.abs(x[d] - w[d]) > .05) {
                                        b = !1;
                                        break
                                    }
                                b && (e = e.concat(), h && e.unshift(h), e.push(e[1]), h = e[e.length - 3])
                            }
                            for (t.length = n.length = r.length = 0, p = S.length; --p > -1;) d = S[p], i[d] = -1 !== c.indexOf("," + d + ","), E[d] = f(e, d, i[d], h);
                            for (p = t.length; --p > -1;) t[p] = Math.sqrt(t[p]), n[p] = Math.sqrt(n[p]);
                            if (!l) {
                                for (p = S.length; --p > -1;)
                                    if (i[d])
                                        for (v = E[S[p]], y = v.length - 1, m = 0; y > m; m++) g = v[m + 1].da / n[m] + v[m].da / t[m], r[m] = (r[m] || 0) + g * g;
                                for (p = r.length; --p > -1;) r[p] = Math.sqrt(r[p])
                            }
                            for (p = S.length, m = u ? 4 : 1; --p > -1;) d = S[p], v = E[d], a(v, s, u, l, i[d]), b && (v.splice(0, m), v.splice(v.length - m, m));
                            return E
                        },
                        c = function (e, t, n) {
                            t = t || "soft";
                            var r, i, o, u, a, f, l, c, h, p, d, v = {},
                                m = "cubic" === t ? 3 : 2,
                                g = "soft" === t,
                                y = [];
                            if (g && n && (e = [n].concat(e)), null == e || m + 1 > e.length) throw "invalid Bezier data";
                            for (h in e[0]) y.push(h);
                            for (f = y.length; --f > -1;) {
                                for (h = y[f], v[h] = a = [], p = 0, c = e.length, l = 0; c > l; l++) r = null == n ? e[l][h] : "string" == typeof (d = e[l][h]) && "=" === d.charAt(1) ? n[h] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && l > 1 && c - 1 > l && (a[p++] = (r + a[p - 2]) / 2), a[p++] = r;
                                for (c = p - m + 1, p = 0, l = 0; c > l; l += m) r = a[l], i = a[l + 1], o = a[l + 2], u = 2 === m ? 0 : a[l + 3], a[p++] = d = 3 === m ? new s(r, i, o, u) : new s(r, (2 * i + r) / 3, (2 * i + o) / 3, o);
                                a.length = p
                            }
                            return v
                        },
                        h = function (e, t, n) {
                            for (var r, i, s, o, u, a, f, l, c, h, p, d = 1 / n, v = e.length; --v > -1;)
                                for (h = e[v], s = h.a, o = h.d - s, u = h.c - s, a = h.b - s, r = i = 0, l = 1; n >= l; l++) f = d * l, c = 1 - f, r = i - (i = (f * f * o + 3 * c * (f * u + c * a)) * f), p = v * n + l - 1, t[p] = (t[p] || 0) + r * r
                        },
                        p = function (e, t) {
                            t = t >> 0 || 6;
                            var n, r, i, s, o = [],
                                u = [],
                                a = 0,
                                f = 0,
                                l = t - 1,
                                c = [],
                                p = [];
                            for (n in e) h(e[n], o, t);
                            for (i = o.length, r = 0; i > r; r++) a += Math.sqrt(o[r]), s = r % t, p[s] = a, s === l && (f += a, s = r / t >> 0, c[s] = p, u[s] = f, a = 0, p = []);
                            return {
                                length: f,
                                lengths: u,
                                segments: c
                            }
                        },
                        d = window._gsDefine.plugin({
                            propName: "bezier",
                            priority: -1,
                            API: 2,
                            global: !0,
                            init: function (e, t, n) {
                                this._target = e, t instanceof Array && (t = {
                                    values: t
                                }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                                var r, i, s, o, u, a = t.values || [],
                                    f = {},
                                    h = a[0],
                                    d = t.autoRotate || n.vars.orientToBezier;
                                this._autoRotate = d ? d instanceof Array ? d : [["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]] : null;
                                for (r in h) this._props.push(r);
                                for (s = this._props.length; --s > -1;) r = this._props[s], this._overwriteProps.push(r), i = this._func[r] = "function" == typeof e[r], f[r] = i ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), u || f[r] !== a[0][r] && (u = f);
                                if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? l(a, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, u) : c(a, t.type, f), this._segCount = this._beziers[r].length, this._timeRes) {
                                    var v = p(this._beziers, this._timeRes);
                                    this._length = v.length, this._lengths = v.lengths, this._segments = v.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                }
                                if (d = this._autoRotate)
                                    for (d[0] instanceof Array || (this._autoRotate = d = [d]), s = d.length; --s > -1;)
                                        for (o = 0; 3 > o; o++) r = d[s][o], this._func[r] = "function" == typeof e[r] ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
                                return !0
                            },
                            set: function (t) {
                                var n, r, i, s, o, u, a, f, l, c, h = this._segCount,
                                    p = this._func,
                                    d = this._target;
                                if (this._timeRes) {
                                    if (l = this._lengths, c = this._curSeg, t *= this._length, i = this._li, t > this._l2 && h - 1 > i) {
                                        for (f = h - 1; f > i && t >= (this._l2 = l[++i]););
                                        this._l1 = l[i - 1], this._li = i, this._curSeg = c = this._segments[i], this._s2 = c[this._s1 = this._si = 0]
                                    } else if (this._l1 > t && i > 0) {
                                        for (; i > 0 && (this._l1 = l[--i]) >= t;);
                                        0 === i && this._l1 > t ? this._l1 = 0 : i++, this._l2 = l[i], this._li = i, this._curSeg = c = this._segments[i], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                    }
                                    if (n = i, t -= this._l1, i = this._si, t > this._s2 && c.length - 1 > i) {
                                        for (f = c.length - 1; f > i && t >= (this._s2 = c[++i]););
                                        this._s1 = c[i - 1], this._si = i
                                    } else if (this._s1 > t && i > 0) {
                                        for (; i > 0 && (this._s1 = c[--i]) >= t;);
                                        0 === i && this._s1 > t ? this._s1 = 0 : i++, this._s2 = c[i], this._si = i
                                    }
                                    u = (i + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                                } else n = 0 > t ? 0 : t >= 1 ? h - 1 : h * t >> 0, u = (t - n * (1 / h)) * h;
                                for (r = 1 - u, i = this._props.length; --i > -1;) s = this._props[i], o = this._beziers[s][n], a = (u * u * o.da + 3 * r * (u * o.ca + r * o.ba)) * u + o.a, this._round[s] && (a = a + (a > 0 ? .5 : -0.5) >> 0), p[s] ? d[s](a) : d[s] = a;
                                if (this._autoRotate) {
                                    var v, m, g, y, b, w, E, S = this._autoRotate;
                                    for (i = S.length; --i > -1;) s = S[i][2], w = S[i][3] || 0, E = S[i][4] === !0 ? 1 : e, o = this._beziers[S[i][0]], v = this._beziers[S[i][1]], o && v && (o = o[n], v = v[n], m = o.a + (o.b - o.a) * u, y = o.b + (o.c - o.b) * u, m += (y - m) * u, y += (o.c + (o.d - o.c) * u - y) * u, g = v.a + (v.b - v.a) * u, b = v.b + (v.c - v.b) * u, g += (b - g) * u, b += (v.c + (v.d - v.c) * u - b) * u, a = Math.atan2(b - g, y - m) * E + w, p[s] ? d[s](a) : d[s] = a)
                                }
                            }
                        }),
                        v = d.prototype;
                    d.bezierThrough = l, d.cubicToQuadratic = u, d._autoCSS = !0, d.quadraticToCubic = function (e, t, n) {
                        return new s(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
                    }, d._cssRegister = function () {
                        var e = window._gsDefine.globals.CSSPlugin;
                        if (e) {
                            var t = e._internals,
                                n = t._parseToProxy,
                                r = t._setPluginRatio,
                                i = t.CSSPropTween;
                            t._registerComplexSpecialProp("bezier", {
                                parser: function (e, t, s, o, u, a) {
                                    t instanceof Array && (t = {
                                        values: t
                                    }), a = new d;
                                    var f, l, c, h = t.values,
                                        p = h.length - 1,
                                        v = [],
                                        m = {};
                                    if (0 > p) return u;
                                    for (f = 0; p >= f; f++) c = n(e, h[f], o, u, a, p !== f), v[f] = c.end;
                                    for (l in t) m[l] = t[l];
                                    return m.values = v, u = new i(e, "bezier", 0, 0, c.pt, 2), u.data = c, u.plugin = a, u.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (f = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [["left", "top", "rotation", f, !1]] : null != c.end.x ? [["x", "y", "rotation", f, !1]] : !1), m.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform), a._onInitTween(c.proxy, m, o._tween), u
                                }
                            })
                        }
                    }, v._roundProps = function (e, t) {
                        for (var n = this._overwriteProps, r = n.length; --r > -1;)(e[n[r]] || e.bezier || e.bezierThrough) && (this._round[n[r]] = t)
                    }, v._kill = function (e) {
                        var t, n, r = this._props;
                        for (t in this._beziers)
                            if (t in e)
                                for (delete this._beziers[t], delete this._func[t], n = r.length; --n > -1;) r[n] === t && r.splice(n, 1);
                        return this._super._kill.call(this, e)
                    }
                }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (e, t) {
                    var n, r, i, s, o = function () {
                            e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                        },
                        u = {},
                        a = o.prototype = new e("css");
                    a.constructor = o, o.version = "1.11.4", o.API = 2, o.defaultTransformPerspective = 0, a = "px", o.suffixMap = {
                        top: a,
                        right: a,
                        bottom: a,
                        left: a,
                        width: a,
                        height: a,
                        fontSize: a,
                        padding: a,
                        margin: a,
                        perspective: a,
                        lineHeight: ""
                    };
                    var f, l, c, h, p, d, v = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                        m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                        g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                        y = /[^\d\-\.]/g,
                        b = /(?:\d|\-|\+|=|#|\.)*/g,
                        w = /opacity *= *([^)]*)/,
                        E = /opacity:([^;]*)/,
                        S = /alpha\(opacity *=.+?\)/i,
                        x = /^(rgb|hsl)/,
                        T = /([A-Z])/g,
                        N = /-([a-z])/gi,
                        C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                        k = function (e, t) {
                            return t.toUpperCase()
                        },
                        L = /(?:Left|Right|Width)/i,
                        A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                        O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                        M = /,(?=[^\)]*(?:\(|$))/gi,
                        _ = Math.PI / 180,
                        D = 180 / Math.PI,
                        P = {},
                        H = document,
                        B = H.createElement("div"),
                        j = H.createElement("img"),
                        F = o._internals = {
                            _specialProps: u
                        },
                        I = navigator.userAgent,
                        q = function () {
                            var e, t = I.indexOf("Android"),
                                n = H.createElement("div");
                            return c = -1 !== I.indexOf("Safari") && -1 === I.indexOf("Chrome") && (-1 === t || Number(I.substr(t + 8, 1)) > 3), p = c && 6 > Number(I.substr(I.indexOf("Version/") + 8, 1)), h = -1 !== I.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I) && (d = parseFloat(RegExp.$1)), n.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", e = n.getElementsByTagName("a")[0], e ? /^0.55/.test(e.style.opacity) : !1
                        }(),
                        R = function (e) {
                            return w.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                        },
                        U = function (e) {
                            window.console && console.log(e)
                        },
                        z = "",
                        W = "",
                        X = function (e, t) {
                            t = t || B;
                            var n, r, i = t.style;
                            if (void 0 !== i[e]) return e;
                            for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === i[n[r] + e];);
                            return r >= 0 ? (W = 3 === r ? "ms" : n[r], z = "-" + W.toLowerCase() + "-", W + e) : null
                        },
                        V = H.defaultView ? H.defaultView.getComputedStyle : function () {},
                        $ = o.getStyle = function (e, t, n, r, i) {
                            var s;
                            return q || "opacity" !== t ? (!r && e.style[t] ? s = e.style[t] : (n = n || V(e, null)) ? (e = n.getPropertyValue(t.replace(T, "-$1").toLowerCase()), s = e || n.length ? e : n[t]) : e.currentStyle && (s = e.currentStyle[t]), null == i || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : i) : R(e)
                        },
                        J = function (e, t, n, r, i) {
                            if ("px" === r || !r) return n;
                            if ("auto" === r || !n) return 0;
                            var s, o = L.test(t),
                                u = e,
                                a = B.style,
                                f = 0 > n;
                            return f && (n = -n), "%" === r && -1 !== t.indexOf("border") ? s = n / 100 * (o ? e.clientWidth : e.clientHeight) : (a.cssText = "border:0 solid red;position:" + $(e, "position") + ";line-height:0;", "%" !== r && u.appendChild ? a[o ? "borderLeftWidth" : "borderTopWidth"] = n + r : (u = e.parentNode || H.body, a[o ? "width" : "height"] = n + r), u.appendChild(B), s = parseFloat(B[o ? "offsetWidth" : "offsetHeight"]), u.removeChild(B), 0 !== s || i || (s = J(e, t, n, r, !0))), f ? -s : s
                        },
                        K = function (e, t, n) {
                            if ("absolute" !== $(e, "position", n)) return 0;
                            var r = "left" === t ? "Left" : "Top",
                                i = $(e, "margin" + r, n);
                            return e["offset" + r] - (J(e, t, parseFloat(i), i.replace(b, "")) || 0)
                        },
                        Q = function (e, t) {
                            var n, r, i = {};
                            if (t = t || V(e, null))
                                if (n = t.length)
                                    for (; --n > -1;) i[t[n].replace(N, k)] = t.getPropertyValue(t[n]);
                                else
                                    for (n in t) i[n] = t[n];
                            else if (t = e.currentStyle ||
                                e.style)
                                for (n in t) "string" == typeof n && void 0 !== i[n] && (i[n.replace(N, k)] = t[n]);
                            return q || (i.opacity = R(e)), r = xt(e, t, !1), i.rotation = r.rotation, i.skewX = r.skewX, i.scaleX = r.scaleX, i.scaleY = r.scaleY, i.x = r.x, i.y = r.y, St && (i.z = r.z, i.rotationX = r.rotationX, i.rotationY = r.rotationY, i.scaleZ = r.scaleZ), i.filters && delete i.filters, i
                        },
                        G = function (e, t, n, r, i) {
                            var s, o, u, a = {},
                                f = e.style;
                            for (o in n) "cssText" !== o && "length" !== o && isNaN(o) && (t[o] !== (s = n[o]) || i && i[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (a[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[o] || "" === t[o].replace(y, "") ? s : 0 : K(e, o), void 0 !== f[o] && (u = new ct(f, o, f[o], u)));
                            if (r)
                                for (o in r) "className" !== o && (a[o] = r[o]);
                            return {
                                difs: a,
                                firstMPT: u
                            }
                        },
                        Y = {
                            width: ["Left", "Right"],
                            height: ["Top", "Bottom"]
                        },
                        Z = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                        et = function (e, t, n) {
                            var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                                i = Y[t],
                                s = i.length;
                            for (n = n || V(e, null); --s > -1;) r -= parseFloat($(e, "padding" + i[s], n, !0)) || 0, r -= parseFloat($(e, "border" + i[s] + "Width", n, !0)) || 0;
                            return r
                        },
                        tt = function (e, t) {
                            (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                            var n = e.split(" "),
                                r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                                i = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                            return null == i ? i = "0" : "center" === i && (i = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== i.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === i.charAt(1), t.ox = parseFloat(r.replace(y, "")), t.oy = parseFloat(i.replace(y, ""))), r + " " + i + (n.length > 2 ? " " + n[2] : "")
                        },
                        nt = function (e, t) {
                            return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                        },
                        rt = function (e, t) {
                            return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t : parseFloat(e)
                        },
                        it = function (e, t, n, r) {
                            var i, s, o, u, a = 1e-6;
                            return null == e ? u = t : "number" == typeof e ? u = e : (i = 360, s = e.split("_"), o = Number(s[0].replace(y, "")) * (-1 === e.indexOf("rad") ? 1 : D) - ("=" === e.charAt(1) ? 0 : t), s.length && (r && (r[n] = t + o), -1 !== e.indexOf("short") && (o %= i, o !== o % (i / 2) && (o = 0 > o ? o + i : o - i)), -1 !== e.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * i) % i - (0 | o / i) * i : -1 !== e.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * i) % i - (0 | o / i) * i)), u = t + o), a > u && u > -a && (u = 0), u
                        },
                        st = {
                            aqua: [0, 255, 255],
                            lime: [0, 255, 0],
                            silver: [192, 192, 192],
                            black: [0, 0, 0],
                            maroon: [128, 0, 0],
                            teal: [0, 128, 128],
                            blue: [0, 0, 255],
                            navy: [0, 0, 128],
                            white: [255, 255, 255],
                            fuchsia: [255, 0, 255],
                            olive: [128, 128, 0],
                            yellow: [255, 255, 0],
                            orange: [255, 165, 0],
                            gray: [128, 128, 128],
                            purple: [128, 0, 128],
                            green: [0, 128, 0],
                            red: [255, 0, 0],
                            pink: [255, 192, 203],
                            cyan: [0, 255, 255],
                            transparent: [255, 255, 255, 0]
                        },
                        ot = function (e, t, n) {
                            return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * (n - t) * e : .5 > e ? n : 2 > 3 * e ? t + 6 * (n - t) * (2 / 3 - e) : t) + .5
                        },
                        ut = function (e) {
                            var t, n, r, i, s, o;
                            return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), st[e] ? st[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), n = e.charAt(2), r = e.charAt(3), e = "#" + t + t + n + n + r + r), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(v), i = Number(e[0]) % 360 / 360, s = Number(e[1]) / 100, o = Number(e[2]) / 100, n = .5 >= o ? o * (s + 1) : o + s - o * s, t = 2 * o - n, e.length > 3 && (e[3] = Number(e[3])), e[0] = ot(i + 1 / 3, t, n), e[1] = ot(i, t, n), e[2] = ot(i - 1 / 3, t, n), e) : (e = e.match(v) || st.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : st.black
                        },
                        at = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                    for (a in st) at += "|" + a + "\\b";
                    at = RegExp(at + ")", "gi");
                    var ft = function (e, t, n, r) {
                            if (null == e) return function (e) {
                                return e
                            };
                            var i, s = t ? (e.match(at) || [""])[0] : "",
                                o = e.split(s).join("").match(g) || [],
                                u = e.substr(0, e.indexOf(o[0])),
                                a = ")" === e.charAt(e.length - 1) ? ")" : "",
                                f = -1 !== e.indexOf(" ") ? " " : ",",
                                l = o.length,
                                c = l > 0 ? o[0].replace(v, "") : "";
                            return l ? i = t ? function (e) {
                                var t, h, p, d;
                                if ("number" == typeof e) e += c;
                                else if (r && M.test(e)) {
                                    for (d = e.replace(M, "|").split("|"), p = 0; d.length > p; p++) d[p] = i(d[p]);
                                    return d.join(",")
                                }
                                if (t = (e.match(at) || [s])[0], h = e.split(t).join("").match(g) || [], p = h.length, l > p--)
                                    for (; l > ++p;) h[p] = n ? h[0 | (p - 1) / 2] : o[p];
                                return u + h.join(f) + f + t + a + (-1 !== e.indexOf("inset") ? " inset" : "")
                            } : function (e) {
                                var t, s, h;
                                if ("number" == typeof e) e += c;
                                else if (r && M.test(e)) {
                                    for (s = e.replace(M, "|").split("|"), h = 0; s.length > h; h++) s[h] = i(s[h]);
                                    return s.join(",")
                                }
                                if (t = e.match(g) || [], h = t.length, l > h--)
                                    for (; l > ++h;) t[h] = n ? t[0 | (h - 1) / 2] : o[h];
                                return u + t.join(f) + a
                            } : function (e) {
                                return e
                            }
                        },
                        lt = function (e) {
                            return e = e.split(","),
                                function (t, n, r, i, s, o, u) {
                                    var a, f = (n + "").split(" ");
                                    for (u = {}, a = 0; 4 > a; a++) u[e[a]] = f[a] = f[a] || f[(a - 1) / 2 >> 0];
                                    return i.parse(t, u, s, o)
                                }
                        },
                        ct = (F._setPluginRatio = function (e) {
                            this.plugin.setRatio(e);
                            for (var t, n, r, i, s = this.data, o = s.proxy, u = s.firstMPT, a = 1e-6; u;) t = o[u.v], u.r ? t = t > 0 ? 0 | t + .5 : 0 | t - .5 : a > t && t > -a && (t = 0), u.t[u.p] = t, u = u._next;
                            if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === e)
                                for (u = s.firstMPT; u;) {
                                    if (n = u.t, n.type) {
                                        if (1 === n.type) {
                                            for (i = n.xs0 + n.s + n.xs1, r = 1; n.l > r; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                            n.e = i
                                        }
                                    } else n.e = n.s + n.xs0;
                                    u = u._next
                                }
                        }, function (e, t, n, r, i) {
                            this.t = e, this.p = t, this.v = n, this.r = i, r && (r._prev = this, this._next = r)
                        }),
                        ht = (F._parseToProxy = function (e, t, n, r, i, s) {
                            var o, u, a, f, l, c = r,
                                h = {},
                                p = {},
                                d = n._transform,
                                v = P;
                            for (n._transform = null, P = t, r = l = n.parse(e, t, r, i), P = v, s && (n._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c;) {
                                if (1 >= r.type && (u = r.p, p[u] = r.s + r.c, h[u] = r.s, s || (f = new ct(r, "s", u, f, r.r), r.c = 0), 1 === r.type))
                                    for (o = r.l; --o > 0;) a = "xn" + o, u = r.p + "_" + a, p[u] = r.data[a], h[u] = r[a], s || (f = new ct(r, a, u, f, r.rxp[a]));
                                r = r._next
                            }
                            return {
                                proxy: h,
                                end: p,
                                firstMPT: f,
                                pt: l
                            }
                        }, F.CSSPropTween = function (e, t, r, i, o, u, a, f, l, c, h) {
                            this.t = e, this.p = t, this.s = r, this.c = i, this.n = a || t, e instanceof ht || s.push(this.n), this.r = f, this.type = u || 0, l && (this.pr = l, n = !0), this.b = void 0 === c ? r : c, this.e = void 0 === h ? r + i : h, o && (this._next = o, o._prev = this)
                        }),
                        pt = o.parseComplex = function (e, t, n, r, i, s, o, u, a, l) {
                            n = n || s || "", o = new ht(e, t, 0, 0, o, l ? 2 : 1, null, !1, u, n, r), r += "";
                            var c, h, p, d, g, y, b, w, E, S, T, N, C = n.split(", ").join(",").split(" "),
                                k = r
                                .split(", ").join(",").split(" "),
                                L = C.length,
                                A = f !== !1;
                            for ((-1 !== r.indexOf(",") || -1 !== n.indexOf(",")) && (C = C.join(" ").replace(M, ", ").split(" "), k = k.join(" ").replace(M, ", ").split(" "), L = C.length), L !== k.length && (C = (s || "").split(" "), L = C.length), o.plugin = a, o.setRatio = l, c = 0; L > c; c++)
                                if (d = C[c], g = k[c], w = parseFloat(d), w || 0 === w) o.appendXtra("", w, nt(g, w), g.replace(m, ""), A && -1 !== g.indexOf("px"), !0);
                                else if (i && ("#" === d.charAt(0) || st[d] || x.test(d))) N = "," === g.charAt(g.length - 1) ? ")," : ")", d = ut(d), g = ut(g), E = d.length + g.length > 6, E && !q && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(k[c]).join("transparent")) : (q || (E = !1), o.appendXtra(E ? "rgba(" : "rgb(", d[0], g[0] - d[0], ",", !0, !0).appendXtra("", d[1], g[1] - d[1], ",", !0).appendXtra("", d[2], g[2] - d[2], E ? "," : N, !0), E && (d = 4 > d.length ? 1 : d[3], o.appendXtra("", d, (4 > g.length ? 1 : g[3]) - d, N, !1)));
                            else if (y = d.match(v)) {
                                if (b = g.match(m), !b || b.length !== y.length) return o;
                                for (p = 0, h = 0; y.length > h; h++) T = y[h], S = d.indexOf(T, p), o.appendXtra(d.substr(p, S - p), Number(T), nt(b[h], T), "", A && "px" === d.substr(S + T.length, 2), 0 === h), p = S + T.length;
                                o["xs" + o.l] += d.substr(p)
                            } else o["xs" + o.l] += o.l ? " " + d : d;
                            if (-1 !== r.indexOf("=") && o.data) {
                                for (N = o.xs0 + o.data.s, c = 1; o.l > c; c++) N += o["xs" + c] + o.data["xn" + c];
                                o.e = N + o["xs" + c]
                            }
                            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                        },
                        dt = 9;
                    for (a = ht.prototype, a.l = a.pr = 0; --dt > 0;) a["xn" + dt] = 0, a["xs" + dt] = "";
                    a.xs0 = "", a._next = a._prev = a.xfirst = a.data = a.plugin = a.setRatio = a.rxp = null, a.appendXtra = function (e, t, n, r, i, s) {
                        var o = this,
                            u = o.l;
                        return o["xs" + u] += s && u ? " " + e : e || "", n || 0 === u || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", u > 0 ? (o.data["xn" + u] = t + n, o.rxp["xn" + u] = i, o["xn" + u] = t, o.plugin || (o.xfirst = new ht(o, "xn" + u, t, n, o.xfirst || o, 0, o.n, i, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                            s: t + n
                        }, o.rxp = {}, o.s = t, o.c = n, o.r = i, o)) : (o["xs" + u] += t + (r || ""), o)
                    };
                    var vt = function (e, t) {
                            t = t || {}, this.p = t.prefix ? X(e) || e : e, u[e] = u[this.p] = this, this.format = t.formatter || ft(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                        },
                        mt = F._registerComplexSpecialProp = function (e, t, n) {
                            "object" != typeof t && (t = {
                                parser: n
                            });
                            var r, i, s = e.split(","),
                                o = t.defaultValue;
                            for (n = n || [o], r = 0; s.length > r; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = n[r] || o, i = new vt(s[r], t)
                        },
                        gt = function (e) {
                            if (!u[e]) {
                                var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                                mt(e, {
                                    parser: function (e, n, r, i, s, o, a) {
                                        var f = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                                        return f ? (f._cssRegister(), u[r].parse(e, n, r, i, s, o, a)) : (U("Error: " + t + " js file not loaded."), s)
                                    }
                                })
                            }
                        };
                    a = vt.prototype, a.parseComplex = function (e, t, n, r, i, s) {
                        var o, u, a, f, l, c, h = this.keyword;
                        if (this.multi && (M.test(n) || M.test(t) ? (u = t.replace(M, "|").split("|"), a = n.replace(M, "|").split("|")) : h && (u = [t], a = [n])), a) {
                            for (f = a.length > u.length ? a.length : u.length, o = 0; f > o; o++) t = u[o] = u[o] || this.dflt, n = a[o] = a[o] || this.dflt, h && (l = t.indexOf(h), c = n.indexOf(h), l !== c && (n = -1 === c ? a : u, n[o] += " " + h));
                            t = u.join(", "), n = a.join(", ")
                        }
                        return pt(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, s)
                    }, a.parse = function (e, t, n, r, s, o) {
                        return this.parseComplex(e.style, this.format($(e, this.p, i, !1, this.dflt)), this.format(t), s, o)
                    }, o.registerSpecialProp = function (e, t, n) {
                        mt(e, {
                            parser: function (e, r, i, s, o, u) {
                                var a = new ht(e, i, 0, 0, o, 2, i, !1, n);
                                return a.plugin = u, a.setRatio = t(e, r, s._tween, i), a
                            },
                            priority: n
                        })
                    };
                    var yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                        bt = X("transform"),
                        wt = z + "transform",
                        Et = X("transformOrigin"),
                        St = null !== X("perspective"),
                        xt = function (e, t, n, r) {
                            if (e._gsTransform && n && !r) return e._gsTransform;
                            var i, s, u, a, f, l, c, h, p, d, v, m, g, y = n ? e._gsTransform || {
                                    skewY: 0
                                } : {
                                    skewY: 0
                                },
                                b = 0 > y.scaleX,
                                w = 2e-5,
                                E = 1e5,
                                S = 179.99,
                                x = S * _,
                                T = St ? parseFloat($(e, Et, t, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0;
                            for (bt ? i = $(e, wt, t, !0) : e.currentStyle && (i = e.currentStyle.filter.match(A), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), s = (i || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], u = s.length; --u > -1;) a = Number(s[u]), s[u] = (f = a - (a |= 0)) ? (0 | f * E + (0 > f ? -0.5 : .5)) / E + a : a;
                            if (16 === s.length) {
                                var N = s[8],
                                    C = s[9],
                                    k = s[10],
                                    L = s[12],
                                    O = s[13],
                                    M = s[14];
                                if (y.zOrigin && (M = -y.zOrigin, L = N * M - s[12], O = C * M - s[13], M = k * M + y.zOrigin - s[14]), !n || r || null == y.rotationX) {
                                    var P, H, B, j, F, I, q, R = s[0],
                                        U = s[1],
                                        z = s[2],
                                        W = s[3],
                                        X = s[4],
                                        V = s[5],
                                        J = s[6],
                                        K = s[7],
                                        Q = s[11],
                                        G = Math.atan2(J, k),
                                        Y = -x > G || G > x;
                                    y.rotationX = G * D, G && (j = Math.cos(-G), F = Math.sin(-G), P = X * j + N * F, H = V * j + C * F, B = J * j + k * F, N = X * -F + N * j, C = V * -F + C * j, k = J * -F + k * j, Q = K * -F + Q * j, X = P, V = H, J = B), G = Math.atan2(N, R), y.rotationY = G * D, G && (I = -x > G || G > x, j = Math.cos(-G), F = Math.sin(-G), P = R * j - N * F, H = U * j - C * F, B = z * j - k * F, C = U * F + C * j, k = z * F + k * j, Q = W * F + Q * j, R = P, U = H, z = B), G = Math.atan2(U, V), y.rotation = G * D, G && (q = -x > G || G > x, j = Math.cos(-G), F = Math.sin(-G), R = R * j + X * F, H = U * j + V * F, V = U * -F + V * j, J = z * -F + J * j, U = H), q && Y ? y.rotation = y.rotationX = 0 : q && I ? y.rotation = y.rotationY = 0 : I && Y && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(R * R + U * U) * E + .5) / E, y.scaleY = (0 | Math.sqrt(V * V + C * C) * E + .5) / E, y.scaleZ = (0 | Math.sqrt(J * J + k * k) * E + .5) / E, y.skewX = 0, y.perspective = Q ? 1 / (0 > Q ? -Q : Q) : 0, y.x = L, y.y = O, y.z = M
                                }
                            } else if (!(St && !r && s.length && y.x === s[4] && y.y === s[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === $(e, "display", t))) {
                                var Z = s.length >= 6,
                                    et = Z ? s[0] : 1,
                                    tt = s[1] || 0,
                                    nt = s[2] || 0,
                                    rt = Z ? s[3] : 1;
                                y.x = s[4] || 0, y.y = s[5] || 0, l = Math.sqrt(et * et + tt * tt), c = Math.sqrt(rt * rt + nt * nt), h = et || tt ? Math.atan2(tt, et) * D : y.rotation || 0, p = nt || rt ? Math.atan2(nt, rt) * D + h : y.skewX || 0, d = l - Math.abs(y.scaleX || 0), v = c - Math.abs(y.scaleY || 0), Math.abs(p) > 90 && 270 > Math.abs(p) && (b ? (l *= -1, p += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (c *= -1, p += 0 >= p ? 180 : -180)), m = (h - y.rotation) % 180, g = (p - y.skewX) % 180, (void 0 === y.skewX || d > w || -w > d || v > w || -w > v || m > -S && S > m && !1 | m * E || g > -S && S > g && !1 | g * E) && (y.scaleX = l, y.scaleY = c, y.rotation = h, y.skewX = p), St && (y.rotationX = y.rotationY = y.z = 0, y.perspective = parseFloat(o.defaultTransformPerspective) || 0, y.scaleZ = 1)
                            }
                            y.zOrigin = T;
                            for (u in y) w > y[u] && y[u] > -w && (y[u] = 0);
                            return n && (e._gsTransform = y), y
                        },
                        Tt = function (e) {
                            var t, n, r = this.data,
                                i = -r.rotation * _,
                                s = i + r.skewX * _,
                                o = 1e5,
                                u = (0 | Math.cos(i) * r.scaleX *
                                    o) / o,
                                a = (0 | Math.sin(i) * r.scaleX * o) / o,
                                f = (0 | Math.sin(s) * -r.scaleY * o) / o,
                                l = (0 | Math.cos(s) * r.scaleY * o) / o,
                                c = this.t.style,
                                h = this.t.currentStyle;
                            if (h) {
                                n = a, a = -f, f = -n, t = h.filter, c.filter = "";
                                var p, v, m = this.t.offsetWidth,
                                    g = this.t.offsetHeight,
                                    y = "absolute" !== h.position,
                                    E = "progid:DXImageTransform.Microsoft.Matrix(M11=" + u + ", M12=" + a + ", M21=" + f + ", M22=" + l,
                                    S = r.x,
                                    x = r.y;
                                if (null != r.ox && (p = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, v = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, S += p - (p * u + v * a), x += v - (p * f + v * l)), y ? (p = m / 2, v = g / 2, E += ", Dx=" + (p - (p * u + v * a) + S) + ", Dy=" + (v - (p * f + v * l) + x) + ")") : E += ", sizingMethod='auto expand')", c.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(O, E) : E + " " + t, (0 === e || 1 === e) && 1 === u && 0 === a && 0 === f && 1 === l && (y && -1 === E.indexOf("Dx=0, Dy=0") || w.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter")), !y) {
                                    var T, N, C, k = 8 > d ? 1 : -1;
                                    for (p = r.ieOffsetX || 0, v = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > u ? -u : u) * m + (0 > a ? -a : a) * g)) / 2 + S), r.ieOffsetY = Math.round((g - ((0 > l ? -l : l) * g + (0 > f ? -f : f) * m)) / 2 + x), dt = 0; 4 > dt; dt++) N = Z[dt], T = h[N], n = -1 !== T.indexOf("px") ? parseFloat(T) : J(this.t, N, parseFloat(T), T.replace(b, "")) || 0, C = n !== r[N] ? 2 > dt ? -r.ieOffsetX : -r.ieOffsetY : 2 > dt ? p - r.ieOffsetX : v - r.ieOffsetY, c[N] = (r[N] = Math.round(n - C * (0 === dt || 2 === dt ? 1 : k))) + "px"
                                }
                            }
                        },
                        Nt = function () {
                            var e, t, n, r, i, s, o, u, a, f, l, c, p, d, v, m, g, y, b, w, E, S, x, T = this.data,
                                N = this.t.style,
                                C = T.rotation * _,
                                k = T.scaleX,
                                L = T.scaleY,
                                A = T.scaleZ,
                                O = T.perspective;
                            if (h) {
                                var M = 1e-4;
                                M > k && k > -M && (k = A = 2e-5), M > L && L > -M && (L = A = 2e-5), !O || T.z || T.rotationX || T.rotationY || (O = 0)
                            }
                            if (C || T.skewX) y = Math.cos(C), b = Math.sin(C), e = y, i = b, T.skewX && (C -= T.skewX * _, y = Math.cos(C), b = Math.sin(C)), t = -b, s = y;
                            else {
                                if (!(T.rotationY || T.rotationX || 1 !== A || O)) return N[bt] = "translate3d(" + T.x + "px," + T.y + "px," + T.z + "px)" + (1 !== k || 1 !== L ? " scale(" + k + "," + L + ")" : ""), void 0;
                                e = s = 1, t = i = 0
                            }
                            l = 1, n = r = o = u = a = f = c = p = d = 0, v = O ? -1 / O : 0, m = T.zOrigin, g = 1e5, C = T.rotationY * _, C && (y = Math.cos(C), b = Math.sin(C), a = l * -b, p = v * -b, n = e * b, o = i * b, l *= y, v *= y, e *= y, i *= y), C = T.rotationX * _, C && (y = Math.cos(C), b = Math.sin(C), w = t * y + n * b, E = s * y + o * b, S = f * y + l * b, x = d * y + v * b, n = t * -b + n * y, o = s * -b + o * y, l = f * -b + l * y, v = d * -b + v * y, t = w, s = E, f = S, d = x), 1 !== A && (n *= A, o *= A, l *= A, v *= A), 1 !== L && (t *= L, s *= L, f *= L, d *= L), 1 !== k && (e *= k, i *= k, a *= k, p *= k), m && (c -= m, r = n * c, u = o * c, c = l * c + m), r = (w = (r += T.x) - (r |= 0)) ? (0 | w * g + (0 > w ? -0.5 : .5)) / g + r : r, u = (w = (u += T.y) - (u |= 0)) ? (0 | w * g + (0 > w ? -0.5 : .5)) / g + u : u, c = (w = (c += T.z) - (c |= 0)) ? (0 | w * g + (0 > w ? -0.5 : .5)) / g + c : c, N[bt] = "matrix3d(" + [(0 | e * g) / g, (0 | i * g) / g, (0 | a * g) / g, (0 | p * g) / g, (0 | t * g) / g, (0 | s * g) / g, (0 | f * g) / g, (0 | d * g) / g, (0 | n * g) / g, (0 | o * g) / g, (0 | l * g) / g, (0 | v * g) / g, r, u, c, O ? 1 + -c / O : 1].join(",") + ")"
                        },
                        Ct = function (e) {
                            var t, n, r, i, s, o = this.data,
                                u = this.t,
                                a = u.style;
                            return o.rotationX || o.rotationY || o.z || o.force3D ? (this.setRatio = Nt, Nt.call(this, e), void 0) : (o.rotation || o.skewX ? (t = o.rotation * _, n = t - o.skewX * _, r = 1e5, i = o.scaleX * r, s = o.scaleY * r, a[bt] = "matrix(" + (0 | Math.cos(t) * i) / r + "," + (0 | Math.sin(t) * i) / r + "," + (0 | Math.sin(n) * -s) / r + "," + (0 | Math.cos(n) * s) / r + "," + o.x + "," + o.y + ")") : a[bt] = "matrix(" + o.scaleX + ",0,0," + o.scaleY + "," + o.x + "," + o.y + ")", void 0)
                        };
                    mt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                        parser: function (e, t, n, r, s, o, u) {
                            if (r._transform) return s;
                            var a, f, l, c, h, p, d, v = r._transform = xt(e, i, !0, u.parseTransform),
                                m = e.style,
                                g = 1e-6,
                                y = yt.length,
                                b = u,
                                w = {};
                            if ("string" == typeof b.transform && bt) l = m.cssText, m[bt] = b.transform, m.display = "block", a = xt(e, null, !1), m.cssText = l;
                            else if ("object" == typeof b) {
                                if (a = {
                                        scaleX: rt(null != b.scaleX ? b.scaleX : b.scale, v.scaleX),
                                        scaleY: rt(null != b.scaleY ? b.scaleY : b.scale, v.scaleY),
                                        scaleZ: rt(b.scaleZ, v.scaleZ),
                                        x: rt(b.x, v.x),
                                        y: rt(b.y, v.y),
                                        z: rt(b.z, v.z),
                                        perspective: rt(b.transformPerspective, v.perspective)
                                    }, d = b.directionalRotation, null != d)
                                    if ("object" == typeof d)
                                        for (l in d) b[l] = d[l];
                                    else b.rotation = d;
                                a.rotation = it("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : v.rotation, v.rotation, "rotation", w), St && (a.rotationX = it("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : v.rotationX || 0, v.rotationX, "rotationX", w), a.rotationY = it("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : v.rotationY || 0, v.rotationY, "rotationY", w)), a.skewX = null == b.skewX ? v.skewX : it(b.skewX, v.skewX), a.skewY = null == b.skewY ? v.skewY : it(b.skewY, v.skewY), (f = a.skewY - v.skewY) && (a.skewX += f, a.rotation += f)
                            }
                            for (St && null != b.force3D && (v.force3D = b.force3D, p = !0), h = v.force3D || v.z || v.rotationX || v.rotationY || a.z || a.rotationX || a.rotationY || a.perspective, h || null == b.scale || (a.scaleZ = 1); --y > -1;) n = yt[y], c = a[n] - v[n], (c > g || -g > c || null != P[n]) && (p = !0, s = new ht(v, n, v[n], c, s), n in w && (s.e = w[n]), s.xs0 = 0, s.plugin = o, r._overwriteProps.push(s.n));
                            return c = b.transformOrigin, (c || St && h && v.zOrigin) && (bt ? (p = !0, n = Et, c = (c || $(e, n, i, !1, "50% 50%")) + "", s = new ht(m, n, 0, 0, s, -1, "transformOrigin"), s.b = m[n], s.plugin = o, St ? (l = v.zOrigin, c = c.split(" "), v.zOrigin = (c.length > 2 && (0 === l || "0px" !== c[2]) ? parseFloat(c[2]) : l) || 0, s.xs0 = s.e = m[n] = c[0] + " " + (c[1] || "50%") + " 0px", s = new ht(v, "zOrigin", 0, 0, s, -1, s.n), s.b = l, s.xs0 = s.e = v.zOrigin) : s.xs0 = s.e = m[n] = c) : tt(c + "", v)), p && (r._transformType = h || 3 === this._transformType ? 3 : 2), s
                        },
                        prefix: !0
                    }), mt("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }), mt("borderRadius", {
                        defaultValue: "0px",
                        parser: function (e, t, n, s, o) {
                            t = this.format(t);
                            var u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                T = e.style;
                            for (v = parseFloat(e.offsetWidth), m = parseFloat(e.offsetHeight), u = t.split(" "), a = 0; x.length > a; a++) this.p.indexOf("border") && (x[a] = X(x[a])), c = l = $(e, x[a], i, !1, "0px"), -1 !== c.indexOf(" ") && (l = c.split(" "), c = l[0], l = l[1]), h = f = u[a], p = parseFloat(c), y = c.substr((p + "").length), b = "=" === h.charAt(1), b ? (d = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), d *= parseFloat(h), g = h.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(h), g = h.substr((d + "").length)), "" === g && (g = r[n] || y), g !== y && (w = J(e, "borderLeft", p, y), E = J(e, "borderTop", p, y), "%" === g ? (c = 100 * (w / v) + "%", l = 100 * (E / m) + "%") : "em" === g ? (S = J(e, "borderLeft", 1, "em"), c = w / S + "em", l = E / S + "em") : (c = w + "px", l = E + "px"), b && (h = parseFloat(c) + d + g, f = parseFloat(l) + d + g)), o = pt(T, x[a], c + " " + l, h + " " + f, !1, "0px", o);
                            return o
                        },
                        prefix: !0,
                        formatter: ft("0px 0px 0px 0px", !1, !0)
                    }), mt("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function (e, t, n, r, s, o) {
                            var u, a, f, l, c, h, p = "background-position",
                                v = i || V(e, null),
                                m = this.format((v ? d ? v.getPropertyValue(p + "-x") + " " + v.getPropertyValue(p + "-y") : v.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                                g = this.format(t);
                            if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (h = $(e, "backgroundImage").replace(C, ""), h && "none" !== h)) {
                                for (u = m.split(" "), a = g.split(" "), j.setAttribute("src", h), f = 2; --f > -1;) m = u[f], l = -1 !== m.indexOf("%"), l !== (-1 !== a[f].indexOf("%")) && (c = 0 === f ? e.offsetWidth - j.width : e.offsetHeight - j.height, u[f] = l ? parseFloat(m) / 100 * c + "px" : 100 * (parseFloat(m) / c) + "%");
                                m = u.join(" ")
                            }
                            return this.parseComplex(e.style, m, g, s, o)
                        },
                        formatter: tt
                    }), mt("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: tt
                    }), mt("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }), mt("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }), mt("transformStyle", {
                        prefix: !0
                    }), mt("backfaceVisibility", {
                        prefix: !0
                    }), mt("userSelect", {
                        prefix: !0
                    }), mt("margin", {
                        parser: lt("marginTop,marginRight,marginBottom,marginLeft")
                    }), mt("padding", {
                        parser: lt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }), mt("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function (e, t, n, r, s, o) {
                            var u, a, f;
                            return 9 > d ? (a = e.currentStyle, f = 8 > d ? " " : ",", u = "rect(" + a.clipTop + f + a.clipRight + f + a.clipBottom + f + a.clipLeft + ")", t = this.format(t).split(",").join(f)) : (u = this.format($(e, this.p, i, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, u, t, s, o)
                        }
                    }), mt("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }), mt("autoRound,strictUnits", {
                        parser: function (e, t, n, r, i) {
                            return i
                        }
                    }), mt("border", {
                        defaultValue: "0px solid #000",
                        parser: function (e, t, n, r, s, o) {
                            return this.parseComplex(e.style, this.format($(e, "borderTopWidth", i, !1, "0px") + " " + $(e, "borderTopStyle", i, !1, "solid") + " " + $(e, "borderTopColor", i, !1, "#000")), this.format(t), s, o)
                        },
                        color: !0,
                        formatter: function (e) {
                            var t = e.split(" ");
                            return t[0] + " " + (t[1] || "solid") + " " + (e.match(at) || ["#000"])[0]
                        }
                    }), mt("borderWidth", {
                        parser: lt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }), mt("float,cssFloat,styleFloat", {
                        parser: function (e, t, n, r, i) {
                            var s = e.style,
                                o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                            return new ht(s, o, 0, 0, i, -1, n, !1, 0, s[o], t)
                        }
                    });
                    var kt = function (e) {
                        var t, n = this.t,
                            r = n.filter || $(this.data, "filter"),
                            i = 0 | this.s + this.c * e;
                        100 === i && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (n.removeAttribute("filter"), t = !$(this.data, "filter")) : (n.filter = r.replace(S, ""), t = !0)), t || (this.xn1 && (n.filter = r = r || "alpha(opacity=" + i + ")"), -1 === r.indexOf("opacity") ? 0 === i && this.xn1 || (n.filter = r + " alpha(opacity=" + i + ")") : n.filter = r.replace(w, "opacity=" + i))
                    };
                    mt("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function (e, t, n, r, s, o) {
                            var u = parseFloat($(e, "opacity", i, !1, "1")),
                                a = e.style,
                                f = "autoAlpha" === n;
                            return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + u), f && 1 === u && "hidden" === $(e, "visibility", i) && 0 !== t && (u = 0), q ? s = new ht(a, "opacity", u, t - u, s) : (s = new ht(a, "opacity", 100 * u, 100 * (t - u), s), s.xn1 = f ? 1 : 0, a.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = o, s.setRatio = kt), f && (s = new ht(a, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== u ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), s.xs0 = "inherit", r._overwriteProps.push(s.n), r._overwriteProps.push(n)), s
                        }
                    });
                    var Lt = function (e, t) {
                            t && (e.removeProperty ? e.removeProperty(t.replace(T, "-$1").toLowerCase()) : e.removeAttribute(t))
                        },
                        At = function (e) {
                            if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                                this.t.className = 0 === e ? this.b : this.e;
                                for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : Lt(n, t.p), t = t._next;
                                1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                            } else this.t.className !== this.e && (this.t.className = this.e)
                        };
                    mt("className", {
                        parser: function (e, t, r, s, o, u, a) {
                            var f, l, c, h, p, d = e.className,
                                v = e.style.cssText;
                            if (o = s._classNamePT = new ht(e, r, 0, 0, o, 2), o.setRatio = At, o.pr = -11, n = !0, o.b = d, l = Q(e, i), c = e._gsClassPT) {
                                for (h = {}, p = c.data; p;) h[p.p] = 1, p = p._next;
                                c.setRatio(1)
                            }
                            return e._gsClassPT = o, o.e = "=" !== t.charAt(1) ? t : d.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), s._tween._duration && (e.className = o.e, f = G(e, l, Q(e), a, h), e.className = d, o.data = f.firstMPT, e.style.cssText = v, o = o.xfirst = s.parse(e, f.difs, o, u)), o
                        }
                    });
                    var Ot = function (e) {
                        if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var t, n, r, i, s = this.t.style,
                                o = u.transform.parse;
                            if ("all" === this.e) s.cssText = "", i = !0;
                            else
                                for (t = this.e.split(","), r = t.length; --r > -1;) n = t[r], u[n] && (u[n].parse === o ? i = !0 : n = "transformOrigin" === n ? Et : u[n].p), Lt(s, n);
                            i && (Lt(s, bt), this.t._gsTransform && delete this.t._gsTransform)
                        }
                    };
                    for (mt("clearProps", {
                            parser: function (e, t, r, i, s) {
                                return s = new ht(e, r, 0, 0, s, 2), s.setRatio = Ot, s.e = t, s.pr = -10, s.data = i._tween, n = !0, s
                            }
                        }), a = "bezier,throwProps,physicsProps,physics2D".split(","), dt = a.length; dt--;) gt(a[dt]);
                    a = o.prototype, a._firstPT = null, a._onInitTween = function (e, t, u) {
                        if (!e.nodeType) return !1;
                        this._target = e, this._tween = u, this._vars = t, f = t.autoRound, n = !1, r = t.suffixMap || o.suffixMap, i = V(e, ""), s = this._overwriteProps;
                        var a, h, d, v, m, g, y, b, w, S = e.style;
                        if (l && "" === S.zIndex && (a = $(e, "zIndex", i), ("auto" === a || "" === a) && (S.zIndex = 0)), "string" == typeof t && (v = S.cssText, a = Q(e, i), S.cssText = v + ";" + t, a = G(e, a, Q(e)).difs, !q && E.test(t) && (a.opacity = parseFloat(RegExp.$1)), t = a, S.cssText = v), this._firstPT = h = this.parse(e, t, null), this._transformType) {
                            for (w = 3 === this._transformType, bt ? c && (l = !0, "" === S.zIndex && (y = $(e, "zIndex", i), ("auto" === y || "" === y) && (S.zIndex = 0)), p && (S.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : S.zoom = 1, d = h; d && d._next;) d = d._next;
                            b = new ht(e, "transform", 0, 0, null, 2), this._linkCSSP(b, null, d), b.setRatio = w && St ?
                                Nt : bt ? Ct : Tt, b.data = this._transform || xt(e, i, !0), s.pop()
                        }
                        if (n) {
                            for (; h;) {
                                for (g = h._next, d = v; d && d.pr > h.pr;) d = d._next;
                                (h._prev = d ? d._prev : m) ? h._prev._next = h: v = h, (h._next = d) ? d._prev = h : m = h, h = g
                            }
                            this._firstPT = v
                        }
                        return !0
                    }, a.parse = function (e, t, n, s) {
                        var o, a, l, c, h, p, d, v, m, g, y = e.style;
                        for (o in t) p = t[o], a = u[o], a ? n = a.parse(e, p, o, this, n, s, t) : (h = $(e, o, i) + "", m = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && x.test(p) ? (m || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = pt(y, o, h, p, !0, "transparent", n, 0, s)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (l = parseFloat(h), d = l || 0 === l ? h.substr((l + "").length) : "", ("" === h || "auto" === h) && ("width" === o || "height" === o ? (l = et(e, o, i), d = "px") : "left" === o || "top" === o ? (l = K(e, o, i), d = "px") : (l = "opacity" !== o ? 0 : 1, d = "")), g = m && "=" === p.charAt(1), g ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), v = p.replace(b, "")) : (c = parseFloat(p), v = m ? p.substr((c + "").length) || "" : ""), "" === v && (v = o in r ? r[o] : d), p = c || 0 === c ? (g ? c + l : c) + v : t[o], d !== v && "" !== v && (c || 0 === c) && (l || 0 === l) && (l = J(e, o, l, d), "%" === v ? (l /= J(e, o, 100, "%") / 100, t.strictUnits !== !0 && (h = l + "%")) : "em" === v ? l /= J(e, o, 1, "em") : (c = J(e, o, c, v), v = "px"), g && (c || 0 === c) && (p = c + l + v)), g && (c += l), !l && 0 !== l || !c && 0 !== c ? void 0 !== y[o] && (p || "NaN" != p + "" && null != p) ? (n = new ht(y, o, c || l || 0, 0, n, -1, o, !1, 0, h, p), n.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : h) : U("invalid " + o + " tween value: " + t[o]) : (n = new ht(y, o, l, c - l, n, 0, o, f !== !1 && ("px" === v || "zIndex" === o), 0, h, p), n.xs0 = v)) : n = pt(y, o, h, p, !0, null, n, 0, s)), s && n && !n.plugin && (n.plugin = s);
                        return n
                    }, a.setRatio = function (e) {
                        var t, n, r, i = this._firstPT,
                            s = 1e-6;
                        if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                            if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -0.000001)
                                for (; i;) {
                                    if (t = i.c * e + i.s, i.r ? t = t > 0 ? 0 | t + .5 : 0 | t - .5 : s > t && t > -s && (t = 0), i.type)
                                        if (1 === i.type)
                                            if (r = i.l, 2 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2;
                                            else if (3 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
                                    else if (4 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
                                    else if (5 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
                                    else {
                                        for (n = i.xs0 + t + i.xs1, r = 1; i.l > r; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                        i.t[i.p] = n
                                    } else -1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(e);
                                    else i.t[i.p] = t + i.xs0;
                                    i = i._next
                                } else
                                    for (; i;) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(e), i = i._next;
                            else
                                for (; i;) 2 !== i.type ? i.t[i.p] = i.e : i.setRatio(e), i = i._next
                    }, a._enableTransforms = function (e) {
                        this._transformType = e || 3 === this._transformType ? 3 : 2, this._transform = this._transform || xt(this._target, i, !0)
                    }, a._linkCSSP = function (e, t, n, r) {
                        return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), n ? n._next = e : r || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
                    }, a._kill = function (t) {
                        var n, r, i, s = t;
                        if (t.autoAlpha || t.alpha) {
                            s = {};
                            for (r in t) s[r] = t[r];
                            s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                        }
                        return t.className && (n = this._classNamePT) && (i = n.xfirst, i && i._prev ? this._linkCSSP(i._prev, n._next, i._prev._prev) : i === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, i._prev), this._classNamePT = null), e.prototype._kill.call(this, s)
                    };
                    var Mt = function (e, t, n) {
                        var r, i, s, o;
                        if (e.slice)
                            for (i = e.length; --i > -1;) Mt(e[i], t, n);
                        else
                            for (r = e.childNodes, i = r.length; --i > -1;) s = r[i], o = s.type, s.style && (t.push(Q(s)), n && n.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Mt(s, t, n)
                    };
                    return o.cascadeTo = function (e, n, r) {
                        var i, s, o, u = t.to(e, n, r),
                            a = [u],
                            f = [],
                            l = [],
                            c = [],
                            h = t._internals.reservedProps;
                        for (e = u._targets || u.target, Mt(e, f, c), u.render(n, !0), Mt(e, l), u.render(0, !0), u._enabled(!0), i = c.length; --i > -1;)
                            if (s = G(c[i], f[i], l[i]), s.firstMPT) {
                                s = s.difs;
                                for (o in r) h[o] && (s[o] = r[o]);
                                a.push(t.to(c[i], n, s))
                            }
                        return a
                    }, e.activate([o]), o
                }, !0),
                function () {
                    var e = window._gsDefine.plugin({
                            propName: "roundProps",
                            priority: -1,
                            API: 2,
                            init: function (e, t, n) {
                                return this._tween = n, !0
                            }
                        }),
                        t = e.prototype;
                    t._onInitAllProps = function () {
                        for (var e, t, n, r = this._tween, i = r.vars.roundProps instanceof Array ? r.vars.roundProps : r.vars.roundProps.split(","), s = i.length, o = {}, u = r._propLookup.roundProps; --s > -1;) o[i[s]] = 1;
                        for (s = i.length; --s > -1;)
                            for (e = i[s], t = r._firstPT; t;) n = t._next, t.pg ? t.t._roundProps(o, !0) : t.n === e && (this._add(t.t, e, t.s, t.c), n && (n._prev = t._prev), t._prev ? t._prev._next = n : r._firstPT === t && (r._firstPT = n), t._next = t._prev = null, r._propLookup[e] = u), t = n;
                        return !1
                    }, t._add = function (e, t, n, r) {
                        this._addTween(e, t, n, n + r, t, !0), this._overwriteProps.push(t)
                    }
                }(), window._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.2.0",
                    init: function (e, t) {
                        var n;
                        if ("function" != typeof e.setAttribute) return !1;
                        this._target = e, this._proxy = {};
                        for (n in t) this._addTween(this._proxy, n, parseFloat(e.getAttribute(n)), t[n], n) && this._overwriteProps.push(n);
                        return !0
                    },
                    set: function (e) {
                        this._super.setRatio.call(this, e);
                        for (var t, n = this._overwriteProps, r = n.length; --r > -1;) t = n[r], this._target.setAttribute(t, this._proxy[t] + "")
                    }
                }), window._gsDefine.plugin({
                    propName: "directionalRotation",
                    API: 2,
                    version: "0.2.0",
                    init: function (e, t) {
                        "object" != typeof t && (t = {
                            rotation: t
                        }), this.finals = {};
                        var n, r, i, s, o, u, a = t.useRadians === !0 ? 2 * Math.PI : 360,
                            f = 1e-6;
                        for (n in t) "useRadians" !== n && (u = (t[n] + "").split("_"), r = u[0], i = parseFloat("function" != typeof e[n] ? e[n] : e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), s = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? i + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, o = s - i, u.length && (r = u.join("_"), -1 !== r.indexOf("short") && (o %= a, o !== o % (a / 2) && (o = 0 > o ? o + a : o - a)), -1 !== r.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * a) % a - (0 | o / a) * a : -1 !== r.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * a) % a - (0 | o / a) * a)), (o > f || -f > o) && (this._addTween(e, n, i, i + o, n), this._overwriteProps.push(n)));
                        return !0
                    },
                    set: function (e) {
                        var t;
                        if (1 !== e) this._super.setRatio.call(this, e);
                        else
                            for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                    }
                })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function (e) {
                    var t, n, r, i = window.GreenSockGlobals || window,
                        s = i.com.greensock,
                        o = 2 * Math.PI,
                        u = Math.PI / 2,
                        a = s._class,
                        f = function (t, n) {
                            var r = a("easing." + t, function () {}, !0),
                                i = r.prototype = new e;
                            return i.constructor = r, i.getRatio = n, r
                        },
                        l = e.register || function () {},
                        c = function (e, t, n, r) {
                            var i = a("easing." + e, {
                                easeOut: new t,
                                easeIn: new n,
                                easeInOut: new r
                            }, !0);
                            return l(i, e), i
                        },
                        h = function (e, t, n) {
                            this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
                        },
                        p = function (t, n) {
                            var r = a("easing." + t, function (e) {
                                    this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                                }, !0),
                                i = r.prototype = new e;
                            return i.constructor = r, i.getRatio = n, i.config = function (e) {
                                return new r(e)
                            }, r
                        },
                        d = c("Back", p("BackOut", function (e) {
                            return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                        }), p("BackIn", function (e) {
                            return e * e * ((this._p1 + 1) * e - this._p1)
                        }), p("BackInOut", function (e) {
                            return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                        })),
                        v = a("easing.SlowMo", function (e, t, n) {
                            t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
                        }, !0),
                        m = v.prototype = new e;
                    return m.constructor = v, m.getRatio = function (e) {
                        var t = e + (.5 - e) * this._p;
                        return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                    }, v.ease = new v(.7, .7), m.config = v.config = function (e, t, n) {
                        return new v(e, t, n)
                    }, t = a("easing.SteppedEase", function (e) {
                        e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
                    }, !0), m = t.prototype = new e, m.constructor = t, m.getRatio = function (e) {
                        return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
                    }, m.config = t.config = function (e) {
                        return new t(e)
                    }, n = a("easing.RoughEase", function (t) {
                        t = t || {};
                        for (var n, r, i, s, o, u, a = t.taper || "none", f = [], l = 0, c = 0 | (t.points || 20), p = c, d = t.randomize !== !1, v = t.clamp === !0, m = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) n = d ? Math.random() : 1 / c * p, r = m ? m.getRatio(n) : n, "none" === a ? i = g : "out" === a ? (s = 1 - n, i = s * s * g) : "in" === a ? i = n * n * g : .5 > n ? (s = 2 * n, i = .5 * s * s * g) : (s = 2 * (1 - n), i = .5 * s * s * g), d ? r += Math.random() * i - .5 * i : p % 2 ? r += .5 * i : r -= .5 * i, v && (r > 1 ? r = 1 : 0 > r && (r = 0)), f[l++] = {
                            x: n,
                            y: r
                        };
                        for (f.sort(function (e, t) {
                                return e.x - t.x
                            }), u = new h(1, 1, null), p = c; --p > -1;) o = f[p], u = new h(o.x, o.y, u);
                        this._prev = new h(0, 0, 0 !== u.t ? u : u.next)
                    }, !0), m = n.prototype = new e, m.constructor = n, m.getRatio = function (e) {
                        var t = this._prev;
                        if (e > t.t) {
                            for (; t.next && e >= t.t;) t = t.next;
                            t = t.prev
                        } else
                            for (; t.prev && t.t >= e;) t = t.prev;
                        return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                    }, m.config = function (e) {
                        return new n(e)
                    }, n.ease = new n, c("Bounce", f("BounceOut", function (e) {
                        return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                    }), f("BounceIn", function (e) {
                        return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                    }), f("BounceInOut", function (e) {
                        var t = .5 > e;
                        return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                    })), c("Circ", f("CircOut", function (e) {
                        return Math.sqrt(1 - (e -= 1) * e)
                    }), f("CircIn", function (e) {
                        return -(Math.sqrt(1 - e * e) - 1)
                    }), f("CircInOut", function (e) {
                        return 1 > (e *= 2) ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                    })), r = function (t, n, r) {
                        var i = a("easing." + t, function (e, t) {
                                this._p1 = e || 1, this._p2 = t || r, this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
                            }, !0),
                            s = i.prototype = new e;
                        return s.constructor = i, s.getRatio = n, s.config = function (e, t) {
                            return new i(e, t)
                        }, i
                    }, c("Elastic", r("ElasticOut", function (e) {
                        return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * o / this._p2) + 1
                    }, .3), r("ElasticIn", function (e) {
                        return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2))
                    }, .3), r("ElasticInOut", function (e) {
                        return 1 > (e *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) + 1
                    }, .45)), c("Expo", f("ExpoOut", function (e) {
                        return 1 - Math.pow(2, -10 * e)
                    }), f("ExpoIn", function (e) {
                        return Math.pow(2, 10 * (e - 1)) - .001
                    }), f("ExpoInOut", function (e) {
                        return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                    })), c("Sine", f("SineOut", function (e) {
                        return Math.sin(e * u)
                    }), f("SineIn", function (e) {
                        return -Math.cos(e * u) + 1
                    }), f("SineInOut", function (e) {
                        return -0.5 * (Math.cos(Math.PI * e) - 1)
                    })), a("easing.EaseLookup", {
                        find: function (t) {
                            return e.map[t]
                        }
                    }, !0), l(i.SlowMo, "SlowMo", "ease,"), l(n, "RoughEase", "ease,"), l(t, "SteppedEase", "ease,"), d
                }, !0)
        }),
        function (e) {
            "use strict";
            var t = e.GreenSockGlobals || e;
            if (!t.TweenLite) {
                var n, r, i, s, o, u = function (e) {
                        var n, r = e.split("."),
                            i = t;
                        for (n = 0; r.length > n; n++) i[r[n]] = i = i[r[n]] || {};
                        return i
                    },
                    a = u("com.greensock"),
                    f = 1e-10,
                    l = [].slice,
                    c = function () {},
                    h = function () {
                        var e = Object.prototype.toString,
                            t = e.call([]);
                        return function (n) {
                            return null != n && (n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t)
                        }
                    }(),
                    p = {},
                    d = function (n, r, i, s) {
                        this.sc = p[n] ? p[n].sc : [], p[n] = this, this.gsClass = null, this.func = i;
                        var o = [];
                        this.check = function (a) {
                            for (var f, l, c, h, v = r.length, m = v; --v > -1;)(f = p[r[v]] || new d(r[v], [])).gsClass ? (o[v] = f.gsClass, m--) : a && f.sc.push(this);
                            if (0 === m && i)
                                for (l = ("com.greensock." + n).split("."), c = l.pop(), h = u(l.join("."))[c] = this.gsClass = i.apply(i, o), s && (t[c] = h, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").join("/"), [], function () {
                                        return h
                                    }) : "undefined" != typeof module && module.exports && (module.exports = h)), v = 0; this.sc.length > v; v++) this.sc[v].check()
                        }, this.check(!0)
                    },
                    v = e._gsDefine = function (e, t, n, r) {
                        return new d(e, t, n, r)
                    },
                    m = a._class = function (e, t, n) {
                        return t = t || function () {}, v(e, [], function () {
                            return t
                        }, n), t
                    };
                v.globals = t;
                var g = [0, 0, 1, 1],
                    y = [],
                    b = m("easing.Ease", function (e, t, n, r) {
                        this._func = e, this._type = n || 0, this._power = r || 0, this._params = t ? g.concat(t) : g
                    }, !0),
                    w = b.map = {},
                    E = b.register = function (e, t, n, r) {
                        for (var i, s, o, u, f = t.split(","), l = f.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --l > -1;)
                            for (s = f[l], i = r ? m("easing." + s, null, !0) : a.easing[s] || {}, o = c.length; --o > -1;) u = c[o], w[s + "." + u] = w[
                                u + s] = i[u] = e.getRatio ? e : e[u] || new e
                    };
                for (i = b.prototype, i._calcEnd = !1, i.getRatio = function (e) {
                        if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                        var t = this._type,
                            n = this._power,
                            r = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                        return 1 === n ? r *= r : 2 === n ? r *= r * r : 3 === n ? r *= r * r * r : 4 === n && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : .5 > e ? r / 2 : 1 - r / 2
                    }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) i = n[r] + ",Power" + r, E(new b(null, null, 1, r), i, "easeOut", !0), E(new b(null, null, 2, r), i, "easeIn" + (0 === r ? ",easeNone" : "")), E(new b(null, null, 3, r), i, "easeInOut");
                w.linear = a.easing.Linear.easeIn, w.swing = a.easing.Quad.easeInOut;
                var S = m("events.EventDispatcher", function (e) {
                    this._listeners = {}, this._eventTarget = e || this
                });
                i = S.prototype, i.addEventListener = function (e, t, n, r, i) {
                    i = i || 0;
                    var u, a, f = this._listeners[e],
                        l = 0;
                    for (null == f && (this._listeners[e] = f = []), a = f.length; --a > -1;) u = f[a], u.c === t && u.s === n ? f.splice(a, 1) : 0 === l && i > u.pr && (l = a + 1);
                    f.splice(l, 0, {
                        c: t,
                        s: n,
                        up: r,
                        pr: i
                    }), this !== s || o || s.wake()
                }, i.removeEventListener = function (e, t) {
                    var n, r = this._listeners[e];
                    if (r)
                        for (n = r.length; --n > -1;)
                            if (r[n].c === t) return r.splice(n, 1), void 0
                }, i.dispatchEvent = function (e) {
                    var t, n, r, i = this._listeners[e];
                    if (i)
                        for (t = i.length, n = this._eventTarget; --t > -1;) r = i[t], r.up ? r.c.call(r.s || n, {
                            type: e,
                            target: n
                        }) : r.c.call(r.s || n)
                };
                var x = e.requestAnimationFrame,
                    T = e.cancelAnimationFrame,
                    N = Date.now || function () {
                        return (new Date).getTime()
                    },
                    C = N();
                for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !x;) x = e[n[r] + "RequestAnimationFrame"], T = e[n[r] + "CancelAnimationFrame"] || e[n[r] + "CancelRequestAnimationFrame"];
                m("Ticker", function (e, t) {
                    var n, r, i, u, a, f = this,
                        l = N(),
                        h = t !== !1 && x,
                        p = function (e) {
                            C = N(), f.time = (C - l) / 1e3;
                            var t, s = f.time - a;
                            (!n || s > 0 || e === !0) && (f.frame++, a += s + (s >= u ? .004 : u - s), t = !0), e !== !0 && (i = r(p)), t && f.dispatchEvent("tick")
                        };
                    S.call(f), f.time = f.frame = 0, f.tick = function () {
                        p(!0)
                    }, f.sleep = function () {
                        null != i && (h && T ? T(i) : clearTimeout(i), r = c, i = null, f === s && (o = !1))
                    }, f.wake = function () {
                        null !== i && f.sleep(), r = 0 === n ? c : h && x ? x : function (e) {
                            return setTimeout(e, 0 | 1e3 * (a - f.time) + 1)
                        }, f === s && (o = !0), p(2)
                    }, f.fps = function (e) {
                        return arguments.length ? (n = e, u = 1 / (n || 60), a = this.time + u, f.wake(), void 0) : n
                    }, f.useRAF = function (e) {
                        return arguments.length ? (f.sleep(), h = e, f.fps(n), void 0) : h
                    }, f.fps(e), setTimeout(function () {
                        h && (!i || 5 > f.frame) && f.useRAF(!1)
                    }, 1500)
                }), i = a.Ticker.prototype = new a.events.EventDispatcher, i.constructor = a.Ticker;
                var k = m("core.Animation", function (e, t) {
                    if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, q) {
                        o || s.wake();
                        var n = this.vars.useFrames ? I : q;
                        n.add(this, n._time), this.vars.paused && this.paused(!0)
                    }
                });
                s = k.ticker = new a.Ticker, i = k.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
                var L = function () {
                    o && N() - C > 2e3 && s.wake(), setTimeout(L, 2e3)
                };
                L(), i.play = function (e, t) {
                    return arguments.length && this.seek(e, t), this.reversed(!1).paused(!1)
                }, i.pause = function (e, t) {
                    return arguments.length && this.seek(e, t), this.paused(!0)
                }, i.resume = function (e, t) {
                    return arguments.length && this.seek(e, t), this.paused(!1)
                }, i.seek = function (e, t) {
                    return this.totalTime(Number(e), t !== !1)
                }, i.restart = function (e, t) {
                    return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
                }, i.reverse = function (e, t) {
                    return arguments.length && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
                }, i.render = function () {}, i.invalidate = function () {
                    return this
                }, i.isActive = function () {
                    var e, t = this._timeline,
                        n = this._startTime;
                    return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= n && n + this.totalDuration() / this._timeScale > e
                }, i._enabled = function (e, t) {
                    return o || s.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
                }, i._kill = function () {
                    return this._enabled(!1, !1)
                }, i.kill = function (e, t) {
                    return this._kill(e, t), this
                }, i._uncache = function (e) {
                    for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                    return this
                }, i._swapSelfInParams = function (e) {
                    for (var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
                    return n
                }, i.eventCallback = function (e, t, n, r) {
                    if ("on" === (e || "").substr(0, 2)) {
                        var i = this.vars;
                        if (1 === arguments.length) return i[e];
                        null == t ? delete i[e] : (i[e] = t, i[e + "Params"] = h(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, i[e + "Scope"] = r), "onUpdate" === e && (this._onUpdate = t)
                    }
                    return this
                }, i.delay = function (e) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
                }, i.duration = function (e) {
                    return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
                }, i.totalDuration = function (e) {
                    return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
                }, i.time = function (e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
                }, i.totalTime = function (e, t, n) {
                    if (o || s.wake(), !arguments.length) return this._totalTime;
                    if (this._timeline) {
                        if (0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var r = this._totalDuration,
                                i = this._timeline;
                            if (e > r && !n && (e = r), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? r - e : e) / this._timeScale, i._dirty || this._uncache(!1), i._timeline)
                                for (; i._timeline;) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
                        }
                        this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && this.render(e, t, !1)
                    }
                    return this
                }, i.progress = i.totalProgress = function (e, t) {
                    return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
                }, i.startTime = function (e) {
                    return arguments
                        .length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
                }, i.timeScale = function (e) {
                    if (!arguments.length) return this._timeScale;
                    if (e = e || f, this._timeline && this._timeline.smoothChildTiming) {
                        var t = this._pauseTime,
                            n = t || 0 === t ? t : this._timeline.totalTime();
                        this._startTime = n - (n - this._startTime) * this._timeScale / e
                    }
                    return this._timeScale = e, this._uncache(!1)
                }, i.reversed = function (e) {
                    return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                }, i.paused = function (e) {
                    if (!arguments.length) return this._paused;
                    if (e != this._paused && this._timeline) {
                        o || e || s.wake();
                        var t = this._timeline,
                            n = t.rawTime(),
                            r = n - this._pauseTime;
                        !e && t.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = e ? n : null, this._paused = e, this._active = this.isActive(), !e && 0 !== r && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
                    }
                    return this._gc && !e && this._enabled(!0, !1), this
                };
                var A = m("core.SimpleTimeline", function (e) {
                    k.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
                });
                i = A.prototype = new k, i.constructor = A, i.kill()._gc = !1, i._first = i._last = null, i._sortChildren = !1, i.add = i.insert = function (e, t) {
                    var n, r;
                    if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren)
                        for (r = e._startTime; n && n._startTime > r;) n = n._prev;
                    return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = n, this._timeline && this._uncache(!0), this
                }, i._remove = function (e, t) {
                    return e.timeline === this && (t || e._enabled(!1, !0), e.timeline = null, e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), this._timeline && this._uncache(!0)), this
                }, i.render = function (e, t, n) {
                    var r, i = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = e; i;) r = i._next, (i._active || e >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = r
                }, i.rawTime = function () {
                    return o || s.wake(), this._totalTime
                };
                var O = m("TweenLite", function (t, n, r) {
                        if (k.call(this, n, r), this.render = O.prototype.render, null == t) throw "Cannot tween a null target.";
                        this.target = t = "string" != typeof t ? t : O.selector(t) || t;
                        var i, s, o, u = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                            a = this.vars.overwrite;
                        if (this._overwrite = a = null == a ? F[O.defaultOverwrite] : "number" == typeof a ? a >> 0 : F[a], (u || t instanceof Array || t.push && h(t)) && "number" != typeof t[0])
                            for (this._targets = o = l.call(t, 0), this._propLookup = [], this._siblings = [], i = 0; o.length > i; i++) s = o[i], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(i--, 1), this._targets = o = o.concat(l.call(s, 0))) : (this._siblings[i] = R(s, this, !1), 1 === a && this._siblings[i].length > 1 && U(s, this, null, 1, this._siblings[i])) : (s = o[i--] = O.selector(s), "string" == typeof s && o.splice(i + 1, 1)) : o.splice(i--, 1);
                        else this._propLookup = {}, this._siblings = R(t, this, !1), 1 === a && this._siblings.length > 1 && U(t, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
                    }, !0),
                    M = function (t) {
                        return t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                    },
                    _ = function (e, t) {
                        var n, r = {};
                        for (n in e) j[n] || n in t && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!P[n] || P[n] && P[n]._autoCSS) || (r[n] = e[n], delete e[n]);
                        e.css = r
                    };
                i = O.prototype = new k, i.constructor = O, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = !1, O.version = "1.11.4", O.defaultEase = i._ease = new b(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = s, O.autoSleep = !0, O.selector = e.$ || e.jQuery || function (t) {
                    return e.$ ? (O.selector = e.$, e.$(t)) : e.document ? e.document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
                };
                var D = O._internals = {
                        isArray: h,
                        isSelector: M
                    },
                    P = O._plugins = {},
                    H = O._tweenLookup = {},
                    B = 0,
                    j = D.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1
                    },
                    F = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        "true": 1,
                        "false": 0
                    },
                    I = k._rootFramesTimeline = new A,
                    q = k._rootTimeline = new A;
                q._startTime = s.time, I._startTime = s.frame, q._active = I._active = !0, k._updateRoot = function () {
                    if (q.render((s.time - q._startTime) * q._timeScale, !1, !1), I.render((s.frame - I._startTime) * I._timeScale, !1, !1), !(s.frame % 120)) {
                        var e, t, n;
                        for (n in H) {
                            for (t = H[n].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                            0 === t.length && delete H[n]
                        }
                        if (n = q._first, (!n || n._paused) && O.autoSleep && !I._first && 1 === s._listeners.tick.length) {
                            for (; n && n._paused;) n = n._next;
                            n || s.sleep()
                        }
                    }
                }, s.addEventListener("tick", k._updateRoot);
                var R = function (e, t, n) {
                        var r, i, s = e._gsTweenID;
                        if (H[s || (e._gsTweenID = s = "t" + B++)] || (H[s] = {
                                target: e,
                                tweens: []
                            }), t && (r = H[s].tweens, r[i = r.length] = t, n))
                            for (; --i > -1;) r[i] === t && r.splice(i, 1);
                        return H[s].tweens
                    },
                    U = function (e, t, n, r, i) {
                        var s, o, u, a;
                        if (1 === r || r >= 4) {
                            for (a = i.length, s = 0; a > s; s++)
                                if ((u = i[s]) !== t) u._gc || u._enabled(!1, !1) && (o = !0);
                                else if (5 === r) break;
                            return o
                        }
                        var l, c = t._startTime + f,
                            h = [],
                            p = 0,
                            d = 0 === t._duration;
                        for (s = i.length; --s > -1;)(u = i[s]) === t || u._gc || u._paused || (u._timeline !== t._timeline ? (l = l || z(t, 0, d), 0 === z(u, l, d) && (h[p++] = u)) : c >= u._startTime && u._startTime +
                            u.totalDuration() / u._timeScale > c && ((d || !u._initted) && 2e-10 >= c - u._startTime || (h[p++] = u)));
                        for (s = p; --s > -1;) u = h[s], 2 === r && u._kill(n, e) && (o = !0), (2 !== r || !u._firstPT && u._initted) && u._enabled(!1, !1) && (o = !0);
                        return o
                    },
                    z = function (e, t, n) {
                        for (var r = e._timeline, i = r._timeScale, s = e._startTime; r._timeline;) {
                            if (s += r._startTime, i *= r._timeScale, r._paused) return -100;
                            r = r._timeline
                        }
                        return s /= i, s > t ? s - t : n && s === t || !e._initted && 2 * f > s - t ? f : (s += e.totalDuration() / e._timeScale / i) > t + f ? 0 : s - t - f
                    };
                i._init = function () {
                    var e, t, n, r, i = this.vars,
                        s = this._overwrittenProps,
                        o = this._duration,
                        u = i.immediateRender,
                        a = i.ease;
                    if (i.startAt) {
                        if (this._startAt && this._startAt.render(-1, !0), i.startAt.overwrite = 0, i.startAt.immediateRender = !0, this._startAt = O.to(this.target, 0, i.startAt), u)
                            if (this._time > 0) this._startAt = null;
                            else if (0 !== o) return
                    } else if (i.runBackwards && 0 !== o)
                        if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                        else {
                            n = {};
                            for (r in i) j[r] && "autoCSS" !== r || (n[r] = i[r]);
                            if (n.overwrite = 0, n.data = "isFromStart", this._startAt = O.to(this.target, 0, n), i.immediateRender) {
                                if (0 === this._time) return
                            } else this._startAt.render(-1, !0)
                        }
                    if (this._ease = a ? a instanceof b ? i.easeParams instanceof Array ? a.config.apply(a, i.easeParams) : a : "function" == typeof a ? new b(a, i.easeParams) : w[a] || O.defaultEase : O.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null) && (t = !0);
                    else t = this._initProps(this.target, this._propLookup, this._siblings, s);
                    if (t && O._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), i.runBackwards)
                        for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                    this._onUpdate = i.onUpdate, this._initted = !0
                }, i._initProps = function (t, n, r, i) {
                    var s, o, u, a, f, l;
                    if (null == t) return !1;
                    this.vars.css || t.style && t !== e && t.nodeType && P.css && this.vars.autoCSS !== !1 && _(this.vars, t);
                    for (s in this.vars) {
                        if (l = this.vars[s], j[s]) l && (l instanceof Array || l.push && h(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[s] = l = this._swapSelfInParams(l, this));
                        else if (P[s] && (a = new P[s])._onInitTween(t, this.vars[s], this)) {
                            for (this._firstPT = f = {
                                    _next: this._firstPT,
                                    t: a,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: !0,
                                    n: s,
                                    pg: !0,
                                    pr: a._priority
                                }, o = a._overwriteProps.length; --o > -1;) n[a._overwriteProps[o]] = this._firstPT;
                            (a._priority || a._onInitAllProps) && (u = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0)
                        } else this._firstPT = n[s] = f = {
                            _next: this._firstPT,
                            t: t,
                            p: s,
                            f: "function" == typeof t[s],
                            n: s,
                            pg: !1,
                            pr: 0
                        }, f.s = f.f ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), f.c = "string" == typeof l && "=" === l.charAt(1) ? parseInt(l.charAt(0) + "1", 10) * Number(l.substr(2)) : Number(l) - f.s || 0;
                        f && f._next && (f._next._prev = f)
                    }
                    return i && this._kill(i, t) ? this._initProps(t, n, r, i) : this._overwrite > 1 && this._firstPT && r.length > 1 && U(t, this, n, this._overwrite, r) ? (this._kill(n, t), this._initProps(t, n, r, i)) : u
                }, i.render = function (e, t, n) {
                    var r, i, s, o, u = this._time,
                        a = this._duration;
                    if (e >= a) this._totalTime = this._time = a, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, i = "onComplete"), 0 === a && (o = this._rawPrevTime, (0 === e || 0 > o || o === f) && o !== e && (n = !0, o > f && (i = "onReverseComplete")), this._rawPrevTime = o = !t || e || 0 === o ? e : f);
                    else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== u || 0 === a && this._rawPrevTime > f) && (i = "onReverseComplete", r = this._reversed), 0 > e ? (this._active = !1, 0 === a && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = o = !t || e || 0 === this._rawPrevTime ? e : f)) : this._initted || (n = !0);
                    else if (this._totalTime = this._time = e, this._easeType) {
                        var l = e / a,
                            c = this._easeType,
                            h = this._easePower;
                        (1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === h ? l *= l : 2 === h ? l *= l * l : 3 === h ? l *= l * l * l : 4 === h && (l *= l * l * l * l), this.ratio = 1 === c ? 1 - l : 2 === c ? l : .5 > e / a ? l / 2 : 1 - l / 2
                    } else this.ratio = this._ease.getRatio(e / a);
                    if (this._time !== u || n) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            this._time && !r ? this.ratio = this._ease.getRatio(this._time / a) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (this._active || !this._paused && this._time !== u && e >= 0 && (this._active = !0), 0 === u && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === a) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                        this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n), t || (this._time !== u || r) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), i && (this._gc || (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || y), 0 === a && this._rawPrevTime === f && o !== f && (this._rawPrevTime = 0)))
                    }
                }, i._kill = function (e, t) {
                    if ("all" === e && (e = null), null != e || null != t && t !== this.target) {
                        t = "string" != typeof t ? t || this._targets || this.target : O.selector(t) || t;
                        var n, r, i, s, o, u, a, f;
                        if ((h(t) || M(t)) && "number" != typeof t[0])
                            for (n = t.length; --n > -1;) this._kill(e, t[n]) && (u = !0);
                        else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;)
                                    if (t === this._targets[n]) {
                                        o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                            } else {
                                if (t !== this.target) return !1;
                                o = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                            }
                            if (o) {
                                a = e || o, f = e !== r && "all" !== r && e !== o && ("object" != typeof e || !e._tempKill);
                                for (i in a)(s = o[i]) && (s.pg && s.t._kill(a) && (u = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete o[i]), f && (r[i] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return u
                    }
                    return this._enabled(!1, !1)
                }, i.invalidate = function () {
                    return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
                }, i._enabled = function (e, t) {
                    if (o || s.wake(), e && this._gc) {
                        var n, r = this._targets;
                        if (r)
                            for (n = r.length; --n > -1;) this._siblings[n] = R(r[n], this, !0);
                        else this._siblings = R(this.target, this, !0)
                    }
                    return k.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
                }, O.to = function (e, t, n) {
                    return new O(e, t, n)
                }, O.from = function (e, t, n) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new O(e, t, n)
                }, O.fromTo = function (e, t, n, r) {
                    return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new O(e, t, r)
                }, O.delayedCall = function (e, t, n, r, i) {
                    return new O(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: n,
                        onCompleteScope: r,
                        onReverseComplete: t,
                        onReverseCompleteParams: n,
                        onReverseCompleteScope: r,
                        immediateRender: !1,
                        useFrames: i,
                        overwrite: 0
                    })
                }, O.set = function (e, t) {
                    return new O(e, 0, t)
                }, O.getTweensOf = function (e, t) {
                    if (null == e) return [];
                    e = "string" != typeof e ? e : O.selector(e) || e;
                    var n, r, i, s;
                    if ((h(e) || M(e)) && "number" != typeof e[0]) {
                        for (n = e.length, r = []; --n > -1;) r = r.concat(O.getTweensOf(e[n], t));
                        for (n = r.length; --n > -1;)
                            for (s = r[n], i = n; --i > -1;) s === r[i] && r.splice(n, 1)
                    } else
                        for (r = R(e).concat(), n = r.length; --n > -1;)(r[n]._gc || t && !r[n].isActive()) && r.splice(n, 1);
                    return r
                }, O.killTweensOf = O.killDelayedCallsTo = function (e, t, n) {
                    "object" == typeof t && (n = t, t = !1);
                    for (var r = O.getTweensOf(e, t), i = r.length; --i > -1;) r[i]._kill(n, e)
                };
                var W = m("plugins.TweenPlugin", function (e, t) {
                    this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = W.prototype
                }, !0);
                if (i = W.prototype, W.version = "1.10.1", W.API = 2, i._firstPT = null, i._addTween = function (e, t, n, r, i, s) {
                        var o, u;
                        return null != r && (o = "number" == typeof r || "=" !== r.charAt(1) ? Number(r) - n : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))) ? (this._firstPT = u = {
                            _next: this._firstPT,
                            t: e,
                            p: t,
                            s: n,
                            c: o,
                            f: "function" == typeof e[t],
                            n: i || t,
                            r: s
                        }, u._next && (u._next._prev = u), u) : void 0
                    }, i.setRatio = function (e) {
                        for (var t, n = this._firstPT, r = 1e-6; n;) t = n.c * e + n.s, n.r ? t = 0 | t + (t > 0 ? .5 : -0.5) : r > t && t > -r && (t = 0), n.f ? n.t[n.p](t) : n.t[n.p] = t, n = n._next
                    }, i._kill = function (e) {
                        var t, n = this._overwriteProps,
                            r = this._firstPT;
                        if (null != e[this._propName]) this._overwriteProps = [];
                        else
                            for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
                        for (; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                        return !1
                    }, i._roundProps = function (e, t) {
                        for (var n = this._firstPT; n;)(e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && (n.r = t), n = n._next
                    }, O._onPluginEvent = function (e, t) {
                        var n, r, i, s, o, u = t._firstPT;
                        if ("_onInitAllProps" === e) {
                            for (; u;) {
                                for (o = u._next, r = i; r && r.pr > u.pr;) r = r._next;
                                (u._prev = r ? r._prev : s) ? u._prev._next = u: i = u, (u._next = r) ? r._prev = u : s = u, u = o
                            }
                            u = t._firstPT = i
                        }
                        for (; u;) u.pg && "function" == typeof u.t[e] && u.t[e]() && (n = !0), u = u._next;
                        return n
                    }, W.activate = function (e) {
                        for (var t = e.length; --t > -1;) e[t].API === W.API && (P[(new e[t])._propName] = e[t]);
                        return !0
                    }, v.plugin = function (e) {
                        if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                        var t, n = e.propName,
                            r = e.priority || 0,
                            i = e.overwriteProps,
                            s = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_roundProps",
                                initAll: "_onInitAllProps"
                            },
                            o = m("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
                                W.call(this, n, r), this._overwriteProps = i || []
                            }, e.global === !0),
                            u = o.prototype = new W(n);
                        u.constructor = o, o.API = e.API;
                        for (t in s) "function" == typeof e[t] && (u[s[t]] = e[t]);
                        return o.version = e.version, W.activate([o]), o
                    }, n = e._gsQueue) {
                    for (r = 0; n.length > r; r++) n[r]();
                    for (i in p) p[i].func || e.console.log("GSAP encountered missing dependency: com.greensock." + i)
                }
                o = !1
            }
        }(window),
        function (e) {
            function o(e) {
                return !s || /\B\$super\b/.test(e.toString())
            }

            function u(t, n, r) {
                r === e ? delete t[n] : t[n] = r
            }

            function a(t, n) {
                return Object.prototype.hasOwnProperty.call(t, n) ? t[n] : e
            }

            function f(e) {
                i = !0;
                var t = new e;
                return i = !1, t
            }
            var t = "1.4",
                n = this,
                r = n.Class,
                i = !1,
                s = function () {
                    $super()
                }.toString().indexOf("$super") > 0,
                l = function () {};
            l.$noConflict = function () {
                try {
                    u(n, "Class", r)
                } catch (e) {
                    n.Class = r
                }
                return l
            }, l.$classyVersion = t, l.$extend = function (t) {
                var r = this.prototype,
                    s = f(this);
                if (t.__include__)
                    for (var c = 0, h = t.__include__.length; c != h; ++c) {
                        var p = t.__include__[c];
                        for (var d in p) {
                            var v = a(p, d);
                            v !== e && (s[d] = p[d])
                        }
                    }
                t.__classvars__ = t.__classvars__ || {};
                if (s.__classvars__)
                    for (var m in s.__classvars__)
                        if (!t.__classvars__[m]) {
                            var v = a(s.__classvars__, m);
                            t.__classvars__[m] = v
                        }
                for (var d in t) {
                    var v = a(t, d);
                    if (d === "__include__" || v === e) continue;
                    s[d] = typeof v == "function" && o(v) ? function (e, t) {
                        return function () {
                            var n = a(this, "$super");
                            this.$super = r[t];
                            try {
                                return e.apply(this, arguments)
                            } finally {
                                u(this, "$super", n)
                            }
                        }
                    }(v, d) : v
                }
                var g = function () {
                    if (i) return;
                    var e = n === this ? f(arguments.callee) : this;
                    return e.__init__ && e.__init__.apply(e, arguments), e.$class = g, e
                };
                for (var m in t.__classvars__) {
                    var v = a(t.__classvars__, m);
                    v !== e && (g[m] = v)
                }
                return g.prototype = s, g.constructor = g, g.$extend = l.$extend, g.$withData = l.$withData, g
            }, l.$withData = function (t) {
                var n = f(this);
                for (var r in t) {
                    var i = a(t, r);
                    i !== e && (n[r] = i)
                }
                return n
            }, n.Class = l
        }(),
        function () {
            var e, t = function () {},
                n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"],
                r = n.length,
                i = window.console = window.console || {};
            while (r--) e = n[r], i[e] || (i[e] = t)
        }(), ! function () {
            function p(e) {
                return e != null && !isNaN(e)
            }

            function v(e) {
                return e.length
            }

            function g(e) {
                var t = 1;
                while (e * t % 1) t *= 10;
                return t
            }

            function y(e, t) {
                try {
                    for (var n in t) Object.defineProperty(e.prototype, n, {
                        value: t[n],
                        enumerable: !1
                    })
                } catch (r) {
                    e.prototype = t
                }
            }

            function b() {}

            function S(e) {
                return w + e in this
            }

            function x(e) {
                return e = w + e, e in this && delete this[e]
            }

            function T() {
                var e = [];
                return this.forEach(function (t) {
                    e.push(t)
                }), e
            }

            function N() {
                var e = 0;
                for (var t in this) t.charCodeAt(0) === E && ++e;
                return e
            }

            function C() {
                for (var e in this)
                    if (e.charCodeAt(0) === E) return !1;
                return !0
            }

            function k() {}

            function L(e, t, n) {
                return function () {
                    var r = n.apply(t, arguments);
                    return r === t ? e : r
                }
            }

            function A(e, t) {
                if (t in e) return t;
                t = t.charAt(0).toUpperCase() + t.substring(1);
                for (var n = 0, r = O.length; n < r; ++n) {
                    var i = O[n] + t;
                    if (i in e) return i
                }
            }

            function M() {}

            function _() {}

            function D(e) {
                function r() {
                    var n = t,
                        r = -1,
                        i = n.length,
                        s;
                    while (++r < i)(s = n[r].on) && s.apply(this, arguments);
                    return e
                }
                var t = [],
                    n = new b;
                return r.on = function (r, i) {
                    var s = n.get(r),
                        o;
                    return arguments.length < 2 ? s && s.on : (s && (s.on = null, t = t.slice(0, o = t.indexOf(s)).concat(t.slice(o + 1)), n.remove(r)), i && t.push(n.set(r, {
                        on: i
                    })), e)
                }, r
            }

            function P() {
                e.event.preventDefault()
            }

            function H() {
                var t = e.event,
                    n;
                while (n = t.sourceEvent) t = n;
                return t
            }

            function B(t) {
                var n = new _,
                    r = 0,
                    i = arguments.length;
                while (++r < i) n[arguments[r]] = D(n);
                return n.of = function (r, i) {
                    return function (s) {
                        try {
                            var o = s.sourceEvent = e.event;
                            s.target = t, e.event = s, n[s.type].apply(r, i)
                        } finally {
                            e.event = o
                        }
                    }
                }, n
            }

            function I(e) {
                return F(e, W), e
            }

            function X(e) {
                return typeof e == "function" ? e : function () {
                    return q(e, this)
                }
            }

            function V(e) {
                return typeof e == "function" ? e : function () {
                    return R(e, this)
                }
            }

            function J(t, n) {
                function r() {
                    this.removeAttribute(t)
                }

                function i() {
                    this.removeAttributeNS(t.space, t.local)
                }

                function s() {
                    this.setAttribute(t, n)
                }

                function o() {
                    this.setAttributeNS(t.space, t.local, n)
                }

                function u() {
                    var e = n.apply(this, arguments);
                    e == null ? this.removeAttribute(t) : this.setAttribute(t, e)
                }

                function a() {
                    var e = n.apply(this, arguments);
                    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                }
                return t = e.ns.qualify(t), n == null ? t.local ? i : r : typeof n == "function" ? t.local ? a : u : t.local ? o : s
            }

            function K(e) {
                return e.trim().replace(/\s+/g, " ")
            }

            function Q(t) {
                return new RegExp("(?:^|\\s+)" + e.requote(t) + "(?:\\s+|$)", "g")
            }

            function G(e) {
                return e.trim().split(/^|\s+/)
            }

            function Y(e, t) {
                function r() {
                    var r = -1;
                    while (++r < n) e[r](this, t)
                }

                function i() {
                    var r = -1,
                        i = t.apply(this, arguments);
                    while (++r < n) e[r](this, i)
                }
                e = G(e).map(Z);
                var n = e.length;
                return typeof t == "function" ? i : r
            }

            function Z(e) {
                var t = Q(e);
                return function (n, r) {
                    if (i = n.classList) return r ? i.add(e) : i.remove(e);
                    var i = n.getAttribute("class") || "";
                    r ? (t.lastIndex = 0, t.test(i) || n.setAttribute("class", K(i + " " + e))) : n.setAttribute("class", K(i.replace(t, " ")))
                }
            }

            function et(e, t, n) {
                function r() {
                    this.style.removeProperty(e)
                }

                function i() {
                    this.style.setProperty(e, t, n)
                }

                function s() {
                    var r = t.apply(this, arguments);
                    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n)
                }
                return t == null ? r : typeof t == "function" ? s : i
            }

            function tt(e, t) {
                function n() {
                    delete this[e]
                }

                function r() {
                    this[e] = t
                }

                function i() {
                    var n = t.apply(this, arguments);
                    n == null ? delete this[e] : this[e] = n
                }
                return t == null ? n : typeof t == "function" ? i : r
            }

            function nt(t) {
                return typeof t == "function" ? t : (t = e.ns.qualify(t)).local ? function () {
                    return this.ownerDocument.createElementNS(t.space, t.local)
                } : function () {
                    return this.ownerDocument.createElementNS(this.namespaceURI, t)
                }
            }

            function rt(e) {
                return {
                    __data__: e
                }
            }

            function it(e) {
                return function () {
                    return z(this, e)
                }
            }

            function st(t) {
                return arguments.length || (t = e.ascending),
                    function (e, n) {
                        return e && n ? t(e.__data__, n.__data__) : !e - !n
                    }
            }

            function ot(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    for (var i = e[n], s = 0, o = i.length, u; s < o; s++)(u = i[s]) && t(u, s, n);
                return e
            }

            function ut(e) {
                return F(e, at), e
            }

            function ft(e) {
                var t, n;
                return function (r, i, s) {
                    var o = e[s].update,
                        u = o.length,
                        a;
                    s != n && (n = s, t = 0), i >= t && (t = i + 1);
                    while (!(a = o[t]) && ++t < u);
                    return a
                }
            }

            function lt() {
                var e = this.__transition__;
                e && ++e.active
            }

            function ht(t, r, i) {
                function f() {
                    var e = this[s];
                    e && (this.removeEventListener(t, e, e.$), delete this[s])
                }

                function l() {
                    var e = u(r, n(arguments));
                    f.call(this), this.addEventListener(t, this[s] = e, e.$ = i), e._ = r
                }

                function c() {
                    var n = new RegExp("^__on([^.]+)" + e.requote(t) + "$"),
                        r;
                    for (var i in this)
                        if (r = i.match(n)) {
                            var s = this[i];
                            this.removeEventListener(r[1], s, s.$), delete this[i]
                        }
                }
                var s = "__on" + t,
                    o = t.indexOf("."),
                    u = dt;
                o > 0 && (t = t.substring(0, o));
                var a = pt.get(t);
                return a && (t = a, u = vt), o ? r ? l : f : r ? M : c
            }

            function dt(t, n) {
                return function (r) {
                    var i = e.event;
                    e.event = r, n[0] = this.__data__;
                    try {
                        t.apply(this, n)
                    } finally {
                        e.event = i
                    }
                }
            }

            function vt(e, t) {
                var n = dt(e, t);
                return function (e) {
                    var t = this,
                        r = e.relatedTarget;
                    (!r || r !== t && !(r.compareDocumentPosition(t) & 8)) && n.call(t, e)
                }
            }

            function yt() {
                var t = ".dragsuppress-" + ++gt,
                    n = "click" + t,
                    r = e.select(s).on("touchmove" + t, P).on("dragstart" + t, P).on("selectstart" + t, P);
                if (mt) {
                    var o = i.style,
                        u = o[mt];
                    o[mt] = "none"
                }
                return function (e) {
                    r.on(t, null), mt && (o[mt] = u);
                    if (e) {
                        function i() {
                            r.on(n, null)
                        }
                        r.on(n, function () {
                            P(), i()
                        }, !0), setTimeout(i, 0)
                    }
                }
            }

            function wt(t, n) {
                n.changedTouches && (n = n.changedTouches[0]);
                var r = t.ownerSVGElement || t;
                if (r.createSVGPoint) {
                    var i = r.createSVGPoint();
                    if (bt < 0 && (s.scrollX || s.scrollY)) {
                        r = e.select("body").append("svg").style({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            margin: 0,
                            padding: 0,
                            border: "none"
                        }, "important");
                        var o = r[0][0].getScreenCTM();
                        bt = !o.f && !o.e, r.remove()
                    }
                    return bt ? (i.x = n.pageX, i.y = n.pageY) : (i.x = n.clientX, i.y = n.clientY), i = i.matrixTransform(t.getScreenCTM().inverse()), [i.x, i.y]
                }
                var u = t.getBoundingClientRect();
                return [n.clientX - u.left - t.clientLeft, n.clientY - u.top - t.clientTop]
            }

            function Lt(e) {
                return e > 0 ? 1 : e < 0 ? -1 : 0
            }

            function At(e, t, n) {
                return (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0])
            }

            function Ot(e) {
                return e > 1 ? 0 : e < -1 ? Et : Math.acos(e)
            }

            function Mt(e) {
                return e > 1 ? xt : e < -1 ? -xt : Math.asin(e)
            }

            function _t(e) {
                return ((e = Math.exp(e)) - 1 / e) / 2
            }

            function Dt(e) {
                return ((e = Math.exp(e)) + 1 / e) / 2
            }

            function Pt(e) {
                return ((e = Math.exp(2 * e)) - 1) / (e + 1)
            }

            function Ht(e) {
                return (e = Math.sin(e / 2)) * e
            }

            function Ut() {}

            function zt(e, t, n) {
                return new Wt(e, t, n)
            }

            function Wt(e, t, n) {
                this.h = e, this.s = t, this.l = n
            }

            function Vt(e, t, n) {
                function s(e) {
                    return e > 360 ? e -= 360 : e < 0 && (e += 360), e < 60 ? r + (i - r) * e / 60 : e < 180 ? i : e < 240 ? r + (i - r) * (240 - e) / 60 : r
                }

                function o(e) {
                    return Math.round(s(e) * 255)
                }
                var r, i;
                return e = isNaN(e) ? 0 : (e %= 360) < 0 ? e + 360 : e, t = isNaN(t) ? 0 : t < 0 ? 0 : t > 1 ? 1 : t, n = n < 0 ? 0 : n > 1 ? 1 : n, i = n <= .5 ? n * (1 + t) : n + t - n * t, r = 2 * n - i, hn(o(e + 120), o(e), o(e - 120))
            }

            function $t(e, t, n) {
                return new Jt(e, t, n)
            }

            function Jt(e, t, n) {
                this.h = e, this.c = t, this.l = n
            }

            function Qt(e, t, n) {
                return isNaN(e) && (e = 0), isNaN(t) && (t = 0), Gt(n, Math.cos(e *= Ct) * t, Math.sin(e) * t)
            }

            function Gt(e, t, n) {
                return new Yt(e, t, n)
            }

            function Yt(e, t, n) {
                this.l = e, this.a = t, this.b = n
            }

            function sn(e, t, n) {
                var r = (e + 16) / 116,
                    i = r + t / 500,
                    s = r - n / 200;
                return i = un(i) * en, r = un(r) * tn, s = un(s) * nn, hn(fn(3.2404542 * i - 1.5371385 * r - .4985314 * s), fn(-0.969266 * i + 1.8760108 * r + .041556 * s), fn(.0556434 * i - .2040259 * r + 1.0572252 * s))
            }

            function on(e, t, n) {
                return e > 0 ? $t(Math.atan2(n, t) * kt, Math.sqrt(t * t + n * n), e) : $t(NaN, NaN, e)
            }

            function un(e) {
                return e > .206893034 ? e * e * e : (e - 4 / 29) / 7.787037
            }

            function an(e) {
                return e > .008856 ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29
            }

            function fn(e) {
                return Math.round(255 * (e <= .00304 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055))
            }

            function ln(e) {
                return hn(e >> 16, e >> 8 & 255, e & 255)
            }

            function cn(e) {
                return ln(e) + ""
            }

            function hn(e, t, n) {
                return new pn(e, t, n)
            }

            function pn(e, t, n) {
                this.r = e, this.g = t, this.b = n
            }

            function vn(e) {
                return e < 16 ? "0" + Math.max(0, e).toString(16) : Math.min(255, e).toString(16)
            }

            function mn(e, t, n) {
                var r = 0,
                    i = 0,
                    s = 0,
                    o, u, a;
                o = /([a-z]+)\((.*)\)/i.exec(e);
                if (o) {
                    u = o[2].split(",");
                    switch (o[1]) {
                        case "hsl":
                            return n(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
                        case "rgb":
                            return t(wn(u[0]), wn(u[1]), wn(u[2]))
                    }
                }
                return (a = En.get(e)) ? t(a.r, a.g, a.b) : (e != null && e.charAt(0) === "#" && (e.length === 4 ? (r = e.charAt(1), r += r, i = e.charAt(2), i += i, s = e.charAt(3), s += s) : e.length === 7 && (r = e.substring(1, 3), i = e.substring(3, 5), s = e.substring(5, 7)), r = parseInt(r, 16), i = parseInt(i, 16), s = parseInt(s, 16)), t(r, i, s))
            }

            function gn(e, t, n) {
                var r = Math.min(e /= 255, t /= 255, n /= 255),
                    i = Math.max(e, t, n),
                    s = i - r,
                    o, u, a = (i + r) / 2;
                return s ? (u = a < .5 ? s / (i + r) : s / (2 - i - r), e == i ? o = (t - n) / s + (t < n ? 6 : 0) : t == i ? o = (n - e) / s + 2 : o = (e - t) / s + 4, o *= 60) : (o = NaN, u = a > 0 && a < 1 ? 0 : o), zt(o, u, a)
            }

            function yn(e, t, n) {
                e = bn(e), t = bn(t), n = bn(n);
                var r = an((.4124564 * e + .3575761 * t + .1804375 * n) / en),
                    i = an((.2126729 * e + .7151522 * t + .072175 * n) / tn),
                    s = an((.0193339 * e + .119192 * t + .9503041 * n) / nn);
                return Gt(116 * i - 16, 500 * (r - i), 200 * (i - s))
            }

            function bn(e) {
                return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
            }

            function wn(e) {
                var t = parseFloat(e);
                return e.charAt(e.length - 1) === "%" ? Math.round(t * 2.55) : t
            }

            function Sn(e) {
                return typeof e == "function" ? e : function () {
                    return e
                }
            }

            function xn(e) {
                return e
            }

            function Tn(e) {
                return function (t, n, r) {
                    return arguments.length === 2 && typeof n == "function" && (r = n, n = null), Nn(t, n, e, r)
                }
            }

            function Nn(t, r, i, o) {
                function h() {
                    var e = l.status,
                        t;
                    if (!e && l.responseText || e >= 200 && e < 300 || e === 304) {
                        try {
                            t = i.call(u, l)
                        } catch (n) {
                            a.error.call(u, n);
                            return
                        }
                        a.load.call(u, t)
                    } else a.error.call(u, l)
                }
                var u = {},
                    a = e.dispatch("beforesend", "progress", "load", "error"),
                    f = {},
                    l = new XMLHttpRequest,
                    c = null;
                return s.XDomainRequest && !("withCredentials" in l) && /^(http(s)?:)?\/\//.test(t) && (l = new XDomainRequest), "onload" in l ? l.onload = l.onerror = h : l.onreadystatechange = function () {
                    l.readyState > 3 && h()
                }, l.onprogress = function (t) {
                    var n = e.event;
                    e.event = t;
                    try {
                        a.progress.call(u, l)
                    } finally {
                        e.event = n
                    }
                }, u.header = function (e, t) {
                    return e = (e + "").toLowerCase(), arguments.length < 2 ? f[e] : (t == null ? delete f[e] : f[e] = t + "", u)
                }, u.mimeType = function (e) {
                    return arguments.length ? (r = e == null ? null : e + "", u) : r
                }, u.responseType = function (e) {
                    return arguments.length ? (c = e, u) : c
                }, u.response = function (e) {
                    return i = e, u
                }, ["get", "post"].forEach(function (e) {
                    u[e] = function () {
                        return u.send.apply(u, [e].concat(n(arguments)))
                    }
                }), u.send = function (e, n, i) {
                    arguments.length === 2 && typeof n == "function" && (i = n, n = null), l.open(e, t, !0), r != null && !("accept" in f) && (f.accept = r + ",*/*");
                    if (l.setRequestHeader)
                        for (var s in f) l.setRequestHeader(s, f[s]);
                    return r != null && l.overrideMimeType && l.overrideMimeType(r), c != null && (l.responseType = c), i != null && u.on("error", i).on("load", function (e) {
                        i(null, e)
                    }), a.beforesend.call(u, l), l.send(n == null ? null : n), u
                }, u.abort = function () {
                    return l.abort(), u
                }, e.rebind(u, a, "on"), o == null ? u : u.get(Cn(o))
            }

            function Cn(e) {
                return e.length === 1 ? function (t, n) {
                    e(t == null ? n : null)
                } : e
            }

            function Dn() {
                var e = Pn(),
                    t = Hn() - e;
                t > 24 ? (isFinite(t) && (clearTimeout(On), On = setTimeout(Dn, t)), An = 0) : (An = 1, _n(Dn))
            }

            function Pn() {
                var e = Date.now();
                Mn = kn;
                while (Mn) e >= Mn.t && (Mn.f = Mn.c(e - Mn.t)), Mn = Mn.n;
                return e
            }

            function Hn() {
                var e, t = kn,
                    n = Infinity;
                while (t) t.f ? t = e ? e.n = t.n : kn = t.n : (t.t < n && (n = t.t), t = (e = t).n);
                return Ln = e, n
            }

            function Bn(e, t) {
                return t - (e ? Math.ceil(Math.log(e) / Math.LN10) : 1)
            }

            function Fn(e, t) {
                var n = Math.pow(10, m(8 - t) * 3);
                return {
                    scale: t > 8 ? function (e) {
                        return e / n
                    } : function (e) {
                        return e * n
                    },
                    symbol: e
                }
            }

            function In(t) {
                var n = t.decimal,
                    r = t.thousands,
                    i = t.grouping,
                    s = t.currency,
                    o = i ? function (e) {
                        var t = e.length,
                            n = [],
                            s = 0,
                            o = i[0];
                        while (t > 0 && o > 0) n.push(e.substring(t -= o, t + o)), o = i[s = (s + 1) % i.length];
                        return n.reverse().join(r)
                    } : xn;
                return function (t) {
                    var r = qn.exec(t),
                        i = r[1] || " ",
                        u = r[2] || ">",
                        a = r[3] || "",
                        f = r[4] || "",
                        l = r[5],
                        c = +r[6],
                        h = r[7],
                        p = r[8],
                        d = r[9],
                        v = 1,
                        m = "",
                        g = "",
                        y = !1;
                    p && (p = +p.substring(1));
                    if (l || i === "0" && u === "=") l = i = "0", u = "=", h && (c -= Math.floor((c - 1) / 4));
                    switch (d) {
                        case "n":
                            h = !0, d = "g";
                            break;
                        case "%":
                            v = 100, g = "%", d = "f";
                            break;
                        case "p":
                            v = 100, g = "%", d = "r";
                            break;
                        case "b":
                        case "o":
                        case "x":
                        case "X":
                            f === "#" && (m = "0" + d.toLowerCase());
                        case "c":
                        case "d":
                            y = !0, p = 0;
                            break;
                        case "s":
                            v = -1, d = "r"
                    }
                    f === "$" && (m = s[0], g = s[1]), d == "r" && !p && (d = "g");
                    if (p != null)
                        if (d == "g") p = Math.max(1, Math.min(21, p));
                        else if (d == "e" || d == "f") p = Math.max(0, Math.min(20, p));
                    d = Rn.get(d) || Un;
                    var b = l && h;
                    return function (t) {
                        if (y && t % 1) return "";
                        var r = t < 0 || t === 0 && 1 / t < 0 ? (t = -t, "-") : a;
                        if (v < 0) {
                            var s = e.formatPrefix(t, p);
                            t = s.scale(t), g = s.symbol
                        } else t *= v;
                        t = d(t, p);
                        var f = t.lastIndexOf("."),
                            w = f < 0 ? t : t.substring(0, f),
                            E = f < 0 ? "" : n + t.substring(f + 1);
                        !l && h && (w = o(w));
                        var S = m.length + w.length + E.length + (b ? 0 : r.length),
                            x = S < c ? (new Array(S = c - S + 1)).join(i) : "";
                        return b && (w = o(x + w)), r += m, t = w + E, (u === "<" ? r + t + x : u === ">" ? x + r + t : u === "^" ? x.substring(0, S >>= 1) + r + t + x.substring(S) : r + (b ? t : x + t)) + g
                    }
                }
            }

            function Un(e) {
                return e + ""
            }

            function Xn() {
                this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
            }

            function $n(e, t, n) {
                function r(t) {
                    var n = e(t),
                        r = s(n, 1);
                    return t - n < r - t ? n : r
                }

                function i(n) {
                    return t(n = e(new Wn(n - 1)), 1), n
                }

                function s(e, n) {
                    return t(e = new Wn(+e), n), e
                }

                function o(e, r, s) {
                    var o = i(e),
                        u = [];
                    if (s > 1)
                        while (o < r) n(o) % s || u.push(new Date(+o)), t(o, 1);
                    else
                        while (o < r) u.push(new Date(+o)), t(o, 1);
                    return u
                }

                function u(e, t, n) {
                    try {
                        Wn = Xn;
                        var r = new Xn;
                        return r._ = e, o(r, t, n)
                    } finally {
                        Wn = Date
                    }
                }
                e.floor = e, e.round = r, e.ceil = i, e.offset = s, e.range = o;
                var a = e.utc = Jn(e);
                return a.floor = a, a.round = Jn(r), a.ceil = Jn(i), a.offset = Jn(s), a.range = u, e
            }

            function Jn(e) {
                return function (t, n) {
                    try {
                        Wn = Xn;
                        var r = new Xn;
                        return r._ = t, e(r, n)._
                    } finally {
                        Wn = Date
                    }
                }
            }

            function Kn(t) {
                function l(e) {
                    function n(n) {
                        var r = [],
                            i = -1,
                            s = 0,
                            o, u, a;
                        while (++i < t)
                            if (e.charCodeAt(i) === 37) {
                                r.push(e.substring(s, i)), (u = Qn[o = e.charAt(++i)]) != null && (o = e.charAt(++i));
                                if (a = E[o]) o = a(n, u == null ? o === "e" ? " " : "0" : u);
                                r.push(o), s = i + 1
                            }
                        return r.push(e.substring(s, i)), r.join("")
                    }
                    var t = e.length;
                    return n.parse = function (t) {
                        var n = {
                                y: 1900,
                                m: 0,
                                d: 1,
                                H: 0,
                                M: 0,
                                S: 0,
                                L: 0,
                                Z: null
                            },
                            r = c(n, e, t, 0);
                        if (r != t.length) return null;
                        "p" in n && (n.H = n.H % 12 + n.p * 12);
                        var i = n.Z != null && Wn !== Xn,
                            s = new(i ? Xn : Wn);
                        return "j" in n ? s.setFullYear(n.y, 0, n.j) : "w" in n && ("W" in n || "U" in n) ? (s.setFullYear(n.y, 0, 1), s.setFullYear(n.y, 0, "W" in n ? (n.w + 6) % 7 + n.W * 7 - (s.getDay() + 5) % 7 : n.w + n.U * 7 - (s.getDay() + 6) % 7)) : s.setFullYear(n.y, n.m, n.d), s.setHours(n.H + Math.floor(n.Z / 100), n.M + n.Z % 100, n.S, n.L), i ? s._ : s
                    }, n.toString = function () {
                        return e
                    }, n
                }

                function c(e, t, n, r) {
                    var i, s, o, u = 0,
                        a = t.length,
                        f = n.length;
                    while (u < a) {
                        if (r >= f) return -1;
                        i = t.charCodeAt(u++);
                        if (i === 37) {
                            o = t.charAt(u++), s = S[o in Qn ? t.charAt(u++) : o];
                            if (!s || (r = s(e, n, r)) < 0) return -1
                        } else if (i != n.charCodeAt(r++)) return -1
                    }
                    return r
                }

                function x(e, t, n) {
                    v.lastIndex = 0;
                    var r = v.exec(t.substring(n));
                    return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1
                }

                function T(e, t, n) {
                    p.lastIndex = 0;
                    var r = p.exec(t.substring(n));
                    return r ? (e.w = d.get(r[0].toLowerCase()), n + r[0].length) : -1
                }

                function N(e, t, n) {
                    b.lastIndex = 0;
                    var r = b.exec(t.substring(n));
                    return r ? (e.m = w.get(r[0].toLowerCase()), n + r[0].length) : -1
                }

                function C(e, t, n) {
                    g.lastIndex = 0;
                    var r = g.exec(t.substring(n));
                    return r ? (e.m = y.get(r[0].toLowerCase()), n + r[0].length) : -1
                }

                function k(e, t, n) {
                    return c(e, E.c.toString(), t, n)
                }

                function L(e, t, n) {
                    return c(e, E.x.toString(), t, n)
                }

                function A(e, t, n) {
                    return c(e, E.X.toString(), t, n)
                }

                function O(e, t, n) {
                    var r = h.get(t.substring(n, n += 2).toLowerCase());
                    return r == null ? -1 : (e.p = r, n)
                }
                var n = t.dateTime,
                    r = t.date,
                    i = t.time,
                    s = t.periods,
                    o = t.days,
                    u = t.shortDays,
                    a = t.months,
                    f = t.shortMonths;
                l.utc = function (e) {
                    function n(e) {
                        try {
                            Wn = Xn;
                            var n = new Wn;
                            return n._ = e, t(n)
                        } finally {
                            Wn = Date
                        }
                    }
                    var t = l(e);
                    return n.parse = function (e) {
                        try {
                            Wn = Xn;
                            var n = t.parse(e);
                            return n && n._
                        } finally {
                            Wn = Date
                        }
                    }, n.toString = t.toString, n
                }, l.multi = l.utc.multi = yr;
                var h = e.map(),
                    p = er(o),
                    d = tr(o),
                    v = er(u),
                    m = tr(u),
                    g = er(a),
                    y = tr(a),
                    b = er(f),
                    w = tr(f);
                s.forEach(function (e, t) {
                    h.set(e.toLowerCase(), t)
                });
                var E = {
                        a: function (e) {
                            return u[e.getDay()]
                        },
                        A: function (e) {
                            return o[e.getDay()]
                        },
                        b: function (e) {
                            return f[e.getMonth()]
                        },
                        B: function (e) {
                            return a[e.getMonth()]
                        },
                        c: l(n),
                        d: function (e, t) {
                            return Zn(e.getDate(), t, 2)
                        },
                        e: function (e, t) {
                            return Zn(e.getDate(), t, 2)
                        },
                        H: function (e, t) {
                            return Zn(e.getHours(), t, 2)
                        },
                        I: function (e, t) {
                            return Zn(e.getHours() % 12 || 12, t, 2)
                        },
                        j: function (e, t) {
                            return Zn(1 + zn.dayOfYear(e), t, 3)
                        },
                        L: function (e, t) {
                            return Zn(e.getMilliseconds(), t, 3)
                        },
                        m: function (e, t) {
                            return Zn(e.getMonth() + 1, t, 2)
                        },
                        M: function (e, t) {
                            return Zn(e.getMinutes(), t, 2)
                        },
                        p: function (e) {
                            return s[+(e.getHours() >= 12)]
                        },
                        S: function (e, t) {
                            return Zn(e.getSeconds(), t, 2)
                        },
                        U: function (e, t) {
                            return Zn(zn.sundayOfYear(e), t, 2)
                        },
                        w: function (e) {
                            return e.getDay()
                        },
                        W: function (e, t) {
                            return Zn(zn.mondayOfYear(e), t, 2)
                        },
                        x: l(r),
                        X: l(i),
                        y: function (e, t) {
                            return Zn(e.getFullYear() % 100, t, 2)
                        },
                        Y: function (e, t) {
                            return Zn(e.getFullYear() % 1e4, t, 4)
                        },
                        Z: mr,
                        "%": function () {
                            return "%"
                        }
                    },
                    S = {
                        a: x,
                        A: T,
                        b: N,
                        B: C,
                        c: k,
                        d: lr,
                        e: lr,
                        H: hr,
                        I: hr,
                        j: cr,
                        L: vr,
                        m: fr,
                        M: pr,
                        p: O,
                        S: dr,
                        U: rr,
                        w: nr,
                        W: ir,
                        x: L,
                        X: A,
                        y: or,
                        Y: sr,
                        Z: ur,
                        "%": gr
                    };
                return l
            }

            function Zn(e, t, n) {
                var r = e < 0 ? "-" : "",
                    i = (r ? -e : e) + "",
                    s = i.length;
                return r + (s < n ? (new Array(n - s + 1)).join(t) + i : i)
            }

            function er(t) {
                return new RegExp("^(?:" + t.map(e.requote).join("|") + ")", "i")
            }

            function tr(e) {
                var t = new b,
                    n = -1,
                    r = e.length;
                while (++n < r) t.set(e[n].toLowerCase(), n);
                return t
            }

            function nr(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n, n + 1));
                return r ? (e.w = +r[0], n + r[0].length) : -1
            }

            function rr(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n));
                return r ? (e.U = +r[0], n + r[0].length) : -1
            }

            function ir(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n));
                return r ? (e.W = +r[0], n + r[0].length) : -1
            }

            function sr(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n, n + 4));
                return r ? (e.y = +r[0], n + r[0].length) : -1
            }

            function or(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n, n + 2));
                return r ? (e.y = ar(+r[0]), n + r[0].length) : -1
            }

            function ur(e, t, n) {
                return /^[+-]\d{4}$/.test(t = t.substring(n, n + 5)) ? (e.Z = +t, n + 5) : -1
            }

            function ar(e) {
                return e + (e > 68 ? 1900 : 2e3)
            }

            function fr(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n, n + 2));
                return r ? (e.m = r[0] - 1, n + r[0].length) : -1
            }

            function lr(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n, n + 2));
                return r ? (e.d = +r[0], n + r[0].length) : -1
            }

            function cr(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n, n + 3));
                return r ? (e.j = +r[0], n + r[0].length) : -1
            }

            function hr(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n, n + 2));
                return r ? (e.H = +r[0], n + r[0].length) : -1
            }

            function pr(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n, n + 2));
                return r ? (e.M = +r[0], n + r[0].length) : -1
            }

            function dr(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n, n + 2));
                return r ? (e.S = +r[0], n + r[0].length) : -1
            }

            function vr(e, t, n) {
                Gn.lastIndex = 0;
                var r = Gn.exec(t.substring(n, n + 3));
                return r ? (e.L = +r[0], n + r[0].length) : -1
            }

            function mr(e) {
                var t = e.getTimezoneOffset(),
                    n = t > 0 ? "-" : "+",
                    r = ~~(m(t) / 60),
                    i = m(t) % 60;
                return n + Zn(r, "0", 2) + Zn(i, "0", 2)
            }

            function gr(e, t, n) {
                Yn.lastIndex = 0;
                var r = Yn.exec(t.substring(n, n + 1));
                return r ? n + r[0].length : -1
            }

            function yr(e) {
                var t = e.length,
                    n = -1;
                while (++n < t) e[n][0] = this(e[n][0]);
                return function (t) {
                    var n = 0,
                        r = e[n];
                    while (!r[1](t)) r = e[++n];
                    return r[0](t)
                }
            }

            function wr() {}

            function Sr(e, t, n) {
                var r = n.s = e + t,
                    i = r - e,
                    s = r - i;
                n.t = e - s + (t - i)
            }

            function xr(e, t) {
                e && Nr.hasOwnProperty(e.type) && Nr[e.type](e, t)
            }

            function Cr(e, t, n) {
                var r = -1,
                    i = e.length - n,
                    s;
                t.lineStart();
                while (++r < i) s = e[r], t.point(s[0], s[1], s[2]);
                t.lineEnd()
            }

            function kr(e, t) {
                var n = -1,
                    r = e.length;
                t.polygonStart();
                while (++n < r) Cr(e[n], t, 1);
                t.polygonEnd()
            }

            function Mr() {
                function s(e, t) {
                    e *= Ct, t = t * Ct / 2 + Et / 4;
                    var s = e - n,
                        o = Math.cos(t),
                        u = Math.sin(t),
                        a = i * u,
                        f = r * o + a * Math.cos(s),
                        l = a * Math.sin(s);
                    Ar.add(Math.atan2(l, f)), n = e, r = o, i = u
                }
                var e, t, n, r, i;
                Or.point = function (o, u) {
                    Or.point = s, n = (e = o) * Ct, r = Math.cos(u = (t = u) * Ct / 2 + Et / 4), i = Math.sin(u)
                }, Or.lineEnd = function () {
                    s(e, t)
                }
            }

            function _r(e) {
                var t = e[0],
                    n = e[1],
                    r = Math.cos(n);
                return [r * Math.cos(t), r * Math.sin(t), Math.sin(n)]
            }

            function Dr(e, t) {
                return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
            }

            function Pr(e, t) {
                return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
            }

            function Hr(e, t) {
                e[0] += t[0], e[1] += t[1], e[2] += t[2]
            }

            function Br(e, t) {
                return [e[0] * t, e[1] * t, e[2] * t]
            }

            function jr(e) {
                var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
                e[0] /= t, e[1] /= t, e[2] /= t
            }

            function Fr(e) {
                return [Math.atan2(e[1], e[0]), Mt(e[2])]
            }

            function Ir(e, t) {
                return m(e[0] - t[0]) < Tt && m(e[1] - t[1]) < Tt
            }

            function Yr(e, t) {
                e *= Ct;
                var n = Math.cos(t *= Ct);
                Zr(n * Math.cos(e), n * Math.sin(e), Math.sin(t))
            }

            function Zr(e, t, n) {
                ++qr, Ur += (e - Ur) / qr, zr += (t - zr) / qr, Wr += (n - Wr) / qr
            }

            function ei() {
                function r(r, i) {
                    r *= Ct;
                    var s = Math.cos(i *= Ct),
                        o = s * Math.cos(r),
                        u = s * Math.sin(r),
                        a = Math.sin(i),
                        f = Math.atan2(Math.sqrt((f = t * a - n * u) * f + (f = n * o - e * a) * f + (f = e * u - t * o) * f), e * o + t * u + n * a);
                    Rr += f, Xr += f * (e + (e = o)), Vr += f * (t + (t = u)), $r += f * (n + (n = a)), Zr(e, t, n)
                }
                var e, t, n;
                Gr.point = function (i, s) {
                    i *= Ct;
                    var o = Math.cos(s *= Ct);
                    e = o * Math.cos(i), t = o * Math.sin(i), n = Math.sin(s), Gr.point = r, Zr(e, t, n)
                }
            }

            function ti() {
                Gr.point = Yr
            }

            function ni() {
                function s(e, t) {
                    e *= Ct;
                    var s = Math.cos(t *= Ct),
                        o = s * Math.cos(e),
                        u = s * Math.sin(e),
                        a = Math.sin(t),
                        f = r * a - i * u,
                        l = i * o - n * a,
                        c = n * u - r * o,
                        h = Math.sqrt(f * f + l * l + c * c),
                        p = n * o + r * u + i * a,
                        d = h && -Ot(p) / h,
                        v = Math.atan2(h, p);
                    Jr += d * f, Kr += d * l, Qr += d * c, Rr += v, Xr += v * (n + (n = o)), Vr += v * (r + (r = u)), $r += v * (i + (i = a)), Zr(n, r, i)
                }
                var e, t, n, r, i;
                Gr.point = function (o, u) {
                    e = o, t = u, Gr.point = s, o *= Ct;
                    var a = Math.cos(u *= Ct);
                    n = a * Math.cos(o), r = a * Math.sin(o), i = Math.sin(u), Zr(n, r, i)
                }, Gr.lineEnd = function () {
                    s(e, t), Gr.lineEnd = ti, Gr.point = Yr
                }
            }

            function ri() {
                return !0
            }

            function ii(e, t, n, r, i) {
                var s = [],
                    o = [];
                e.forEach(function (e) {
                    if ((t = e.length - 1) <= 0) return;
                    var t, n = e[0],
                        r = e[t];
                    if (Ir(n, r)) {
                        i.lineStart();
                        for (var u = 0; u < t; ++u) i.point((n = e[u])[0], n[1]);
                        i.lineEnd();
                        return
                    }
                    var a = new oi(n, e, null, !0),
                        f = new oi(n, null, a, !1);
                    a.o = f, s.push(a), o.push(f), a = new oi(r, e, null, !1), f = new oi(r, null, a, !0), a.o = f, s.push(a), o.push(f)
                }), o.sort(t), si(s), si(o);
                if (!s.length) return;
                for (var u = 0, a = n, f = o.length; u < f; ++u) o[u].e = a = !a;
                var l = s[0],
                    c, h;
                for (;;) {
                    var p = l,
                        d = !0;
                    while (p.v)
                        if ((p = p.n) === l) return;
                    c = p.z, i.lineStart();
                    do {
                        p.v = p.o.v = !0;
                        if (p.e) {
                            if (d)
                                for (var u = 0, f = c.length; u < f; ++u) i.point((h = c[u])[0], h[1]);
                            else r(p.x, p.n.x, 1, i);
                            p = p.n
                        } else {
                            if (d) {
                                c = p.p.z;
                                for (var u = c.length - 1; u >= 0; --u) i.point((h = c[u])[0], h[1])
                            } else r(p.x, p.p.x, -1, i);
                            p = p.p
                        }
                        p = p.o, c = p.z, d = !d
                    } while (!p.v);
                    i.lineEnd()
                }
            }

            function si(e) {
                if (!(t = e.length)) return;
                var t, n = 0,
                    r = e[0],
                    i;
                while (++n < t) r.n = i = e[n], i.p = r, r = i;
                r.n = i = e[0], i.p = r
            }

            function oi(e, t, n, r) {
                this.x = e, this.z = t, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
            }

            function ui(t, n, r, i) {
                return function (s, o) {
                    function l(e, n) {
                        var r = s(e, n);
                        t(e = r[0], n = r[1]) && o.point(e, n)
                    }

                    function c(e, t) {
                        var n = s(e, t);
                        u.point(n[0], n[1])
                    }

                    function h() {
                        f.point = c, u.lineStart()
                    }

                    function p() {
                        f.point = l, u.lineEnd()
                    }

                    function b(e, t) {
                        y.push([e, t]);
                        var n = s(e, t);
                        m.point(n[0], n[1])
                    }

                    function w() {
                        m.lineStart(), y = []
                    }

                    function E() {
                        b(y[0][0], y[0][1]), m.lineEnd();
                        var e = m.clean(),
                            t = v.buffer(),
                            n, r = t.length;
                        y.pop(), g.push(y), y = null;
                        if (!r) return;
                        if (e & 1) {
                            n = t[0];
                            var r = n.length - 1,
                                i = -1,
                                s;
                            o.lineStart();
                            while (++i < r) o.point((s = n[i])[0], s[1]);
                            o.lineEnd();
                            return
                        }
                        r > 1 && e & 2 && t.push(t.pop().concat(t.shift())), d.push(t.filter(ai))
                    }
                    var u = n(o),
                        a = s.invert(i[0], i[1]),
                        f = {
                            point: l,
                            lineStart: h,
                            lineEnd: p,
                            polygonStart: function () {
                                f.point = b, f.lineStart = w, f.lineEnd = E, d = [], g = [], o.polygonStart()
                            },
                            polygonEnd: function () {
                                f.point = l, f.lineStart = h, f.lineEnd = p, d = e.merge(d);
                                var t = ci(a, g);
                                d.length ? ii(d, li, t, r, o) : t && (o.lineStart(), r(null, null, 1, o), o.lineEnd()), o.polygonEnd(), d = g = null
                            },
                            sphere: function () {
                                o.polygonStart(), o.lineStart(), r(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                            }
                        },
                        d, v = fi(),
                        m = n(v),
                        g, y;
                    return f
                }
            }

            function ai(e) {
                return e.length > 1
            }

            function fi() {
                var e = [],
                    t;
                return {
                    lineStart: function () {
                        e.push(t = [])
                    },
                    point: function (e, n) {
                        t.push([e, n])
                    },
                    lineEnd: M,
                    buffer: function () {
                        var n = e;
                        return e = [], t = null, n
                    },
                    rejoin: function () {
                        e.length > 1 && e.push(e.pop().concat(e.shift()))
                    }
                }
            }

            function li(e, t) {
                return ((e = e.x)[0] < 0 ? e[1] - xt - Tt : xt - e[1]) - ((t = t.x)[0] < 0 ? t[1] - xt - Tt : xt - t[1])
            }

            function ci(e, t) {
                var n = e[0],
                    r = e[1],
                    i = [Math.sin(n), -Math.cos(n), 0],
                    s = 0,
                    o = 0;
                Ar.reset();
                for (var u = 0, a = t.length; u < a; ++u) {
                    var f = t[u],
                        l = f.length;
                    if (!l) continue;
                    var c = f[0],
                        h = c[0],
                        p = c[1] / 2 + Et / 4,
                        d = Math.sin(p),
                        v = Math.cos(p),
                        g = 1;
                    for (;;) {
                        g === l && (g = 0), e = f[g];
                        var y = e[0],
                            b = e[1] / 2 + Et / 4,
                            w = Math.sin(b),
                            E = Math.cos(b),
                            S = y - h,
                            x = m(S) > Et,
                            T = d * w;
                        Ar.add(Math.atan2(T * Math.sin(S), v * E + T * Math.cos(S))), s += x ? S + (S >= 0 ? St : -St) : S;
                        if (x ^ h >= n ^ y >= n) {
                            var N = Pr(_r(c), _r(e));
                            jr(N);
                            var C = Pr(i, N);
                            jr(C);
                            var k = (x ^ S >= 0 ? -1 : 1) * Mt(C[2]);
                            if (r > k || r === k && (N[0] || N[1])) o += x ^ S >= 0 ? 1 : -1
                        }
                        if (!(g++)) break;
                        h = y, d = w, v = E, c = e
                    }
                }
                return (s < -Tt || s < Tt && Ar < 0) ^ o & 1
            }

            function pi(e) {
                var t = NaN,
                    n = NaN,
                    r = NaN,
                    i;
                return {
                    lineStart: function () {
                        e.lineStart(), i = 1
                    },
                    point: function (s, o) {
                        var u = s > 0 ? Et : -Et,
                            a = m(s - t);
                        m(a - Et) < Tt ? (e.point(t, n = (n + o) / 2 > 0 ? xt : -xt), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(u, n), e.point(s, n), i = 0) : r !== u && a >= Et && (m(t - r) < Tt && (t -= r * Tt), m(s - u) < Tt && (s -= u * Tt), n = di(t, n, s, o), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(u, n), i = 0), e.point(t = s, n = o), r = u
                    },
                    lineEnd: function () {
                        e.lineEnd(), t = n = NaN
                    },
                    clean: function () {
                        return 2 - i
                    }
                }
            }

            function di(e, t, n, r) {
                var i, s, o = Math.sin(e - n);
                return m(o) > Tt ? Math.atan((Math.sin(t) * (s = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (i = Math.cos(t)) * Math.sin(e)) / (i * s * o)) : (t + r) / 2
            }

            function vi(e, t, n, r) {
                var i;
                if (e == null) i = n * xt, r.point(-Et, i), r.point(0, i), r.point(Et, i), r.point(Et, 0), r.point(Et, -i), r.point(0, -i), r.point(-Et, -i), r.point(-Et, 0), r.point(-Et, i);
                else if (m(e[0] - t[0]) > Tt) {
                    var s = e[0] < t[0] ? Et : -Et;
                    i = n * s / 2, r.point(-s, i), r.point(0, i), r.point(s, i)
                } else r.point(t[0], t[1])
            }

            function mi(e) {
                function s(e, n) {
                    return Math.cos(e) * Math.cos(n) > t
                }

                function o(e) {
                    var t, i, o, f, l;
                    return {
                        lineStart: function () {
                            f = o = !1, l = 1
                        },
                        point: function (c, h) {
                            var p = [c, h],
                                d, v = s(c, h),
                                m = n ? v ? 0 : a(c, h) : v ? a(c + (c < 0 ? Et :
                                    -Et), h) : 0;
                            !t && (f = o = v) && e.lineStart();
                            if (v !== o) {
                                d = u(t, p);
                                if (Ir(t, d) || Ir(p, d)) p[0] += Tt, p[1] += Tt, v = s(p[0], p[1])
                            }
                            if (v !== o) l = 0, v ? (e.lineStart(), d = u(p, t), e.point(d[0], d[1])) : (d = u(t, p), e.point(d[0], d[1]), e.lineEnd()), t = d;
                            else if (r && t && n ^ v) {
                                var g;
                                !(m & i) && (g = u(p, t, !0)) && (l = 0, n ? (e.lineStart(), e.point(g[0][0], g[0][1]), e.point(g[1][0], g[1][1]), e.lineEnd()) : (e.point(g[1][0], g[1][1]), e.lineEnd(), e.lineStart(), e.point(g[0][0], g[0][1])))
                            }
                            v && (!t || !Ir(t, p)) && e.point(p[0], p[1]), t = p, o = v, i = m
                        },
                        lineEnd: function () {
                            o && e.lineEnd(), t = null
                        },
                        clean: function () {
                            return l | (f && o) << 1
                        }
                    }
                }

                function u(e, n, r) {
                    var i = _r(e),
                        s = _r(n),
                        o = [1, 0, 0],
                        u = Pr(i, s),
                        a = Dr(u, u),
                        f = u[0],
                        l = a - f * f;
                    if (!l) return !r && e;
                    var c = t * a / l,
                        h = -t * f / l,
                        p = Pr(o, u),
                        d = Br(o, c),
                        v = Br(u, h);
                    Hr(d, v);
                    var g = p,
                        y = Dr(d, g),
                        b = Dr(g, g),
                        w = y * y - b * (Dr(d, d) - 1);
                    if (w < 0) return;
                    var E = Math.sqrt(w),
                        S = Br(g, (-y - E) / b);
                    Hr(S, d), S = Fr(S);
                    if (!r) return S;
                    var x = e[0],
                        T = n[0],
                        N = e[1],
                        C = n[1],
                        k;
                    T < x && (k = x, x = T, T = k);
                    var L = T - x,
                        A = m(L - Et) < Tt,
                        O = A || L < Tt;
                    !A && C < N && (k = N, N = C, C = k);
                    if (O ? A ? N + C > 0 ^ S[1] < (m(S[0] - x) < Tt ? N : C) : N <= S[1] && S[1] <= C : L > Et ^ (x <= S[0] && S[0] <= T)) {
                        var M = Br(g, (-y + E) / b);
                        return Hr(M, d), [S, Fr(M)]
                    }
                }

                function a(t, r) {
                    var i = n ? e : Et - e,
                        s = 0;
                    return t < -i ? s |= 1 : t > i && (s |= 2), r < -i ? s |= 4 : r > i && (s |= 8), s
                }
                var t = Math.cos(e),
                    n = t > 0,
                    r = m(t) > Tt,
                    i = es(e, 6 * Ct);
                return ui(s, o, i, n ? [0, -e] : [-Et, e - Et])
            }

            function gi(e, t, n, r) {
                return function (i) {
                    var s = i.a,
                        o = i.b,
                        u = s.x,
                        a = s.y,
                        f = o.x,
                        l = o.y,
                        c = 0,
                        h = 1,
                        p = f - u,
                        d = l - a,
                        v;
                    v = e - u;
                    if (!p && v > 0) return;
                    v /= p;
                    if (p < 0) {
                        if (v < c) return;
                        v < h && (h = v)
                    } else if (p > 0) {
                        if (v > h) return;
                        v > c && (c = v)
                    }
                    v = n - u;
                    if (!p && v < 0) return;
                    v /= p;
                    if (p < 0) {
                        if (v > h) return;
                        v > c && (c = v)
                    } else if (p > 0) {
                        if (v < c) return;
                        v < h && (h = v)
                    }
                    v = t - a;
                    if (!d && v > 0) return;
                    v /= d;
                    if (d < 0) {
                        if (v < c) return;
                        v < h && (h = v)
                    } else if (d > 0) {
                        if (v > h) return;
                        v > c && (c = v)
                    }
                    v = r - a;
                    if (!d && v < 0) return;
                    v /= d;
                    if (d < 0) {
                        if (v > h) return;
                        v > c && (c = v)
                    } else if (d > 0) {
                        if (v < c) return;
                        v < h && (h = v)
                    }
                    return c > 0 && (i.a = {
                        x: u + c * p,
                        y: a + c * d
                    }), h < 1 && (i.b = {
                        x: u + h * p,
                        y: a + h * d
                    }), i
                }
            }

            function bi(t, n, r, i) {
                function s(e, i) {
                    return m(e[0] - t) < Tt ? i > 0 ? 0 : 3 : m(e[0] - r) < Tt ? i > 0 ? 2 : 1 : m(e[1] - n) < Tt ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
                }

                function o(e, t) {
                    return u(e.x, t.x)
                }

                function u(e, t) {
                    var n = s(e, 1),
                        r = s(t, 1);
                    return n !== r ? n - r : n === 0 ? t[1] - e[1] : n === 1 ? e[0] - t[0] : n === 2 ? e[1] - t[1] : t[0] - e[0]
                }
                return function (a) {
                    function m(e) {
                        var t = 0,
                            n = p.length,
                            r = e[1];
                        for (var i = 0; i < n; ++i)
                            for (var s = 1, o = p[i], u = o.length, a = o[0], f; s < u; ++s) f = o[s], a[1] <= r ? f[1] > r && At(a, f, e) > 0 && ++t : f[1] <= r && At(a, f, e) < 0 && --t, a = f;
                        return t !== 0
                    }

                    function g(e, o, a, f) {
                        var l = 0,
                            c = 0;
                        if (e == null || (l = s(e, a)) !== (c = s(o, a)) || u(e, o) < 0 ^ a > 0) {
                            do f.point(l === 0 || l === 3 ? t : r, l > 1 ? i : n); while ((l = (l + a + 4) % 4) !== c)
                        } else f.point(o[0], o[1])
                    }

                    function y(e, s) {
                        return t <= e && e <= r && n <= s && s <= i
                    }

                    function b(e, t) {
                        y(e, t) && a.point(e, t)
                    }

                    function L() {
                        v.point = O, p && p.push(d = []), C = !0, N = !1, x = T = NaN
                    }

                    function A() {
                        h && (O(w, E), S && N && l.rejoin(), h.push(l.buffer())), v.point = b, N && a.lineEnd()
                    }

                    function O(e, t) {
                        e = Math.max(-yi, Math.min(yi, e)), t = Math.max(-yi, Math.min(yi, t));
                        var n = y(e, t);
                        p && d.push([e, t]);
                        if (C) w = e, E = t, S = n, C = !1, n && (a.lineStart(), a.point(e, t));
                        else if (n && N) a.point(e, t);
                        else {
                            var r = {
                                a: {
                                    x: x,
                                    y: T
                                },
                                b: {
                                    x: e,
                                    y: t
                                }
                            };
                            c(r) ? (N || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), n || a.lineEnd(), k = !1) : n && (a.lineStart(), a.point(e, t), k = !1)
                        }
                        x = e, T = t, N = n
                    }
                    var f = a,
                        l = fi(),
                        c = gi(t, n, r, i),
                        h, p, d, v = {
                            point: b,
                            lineStart: L,
                            lineEnd: A,
                            polygonStart: function () {
                                a = l, h = [], p = [], k = !0
                            },
                            polygonEnd: function () {
                                a = f, h = e.merge(h);
                                var n = m([t, i]),
                                    r = k && n,
                                    s = h.length;
                                if (r || s) a.polygonStart(), r && (a.lineStart(), g(null, null, 1, a), a.lineEnd()), s && ii(h, o, n, g, a), a.polygonEnd();
                                h = p = d = null
                            }
                        },
                        w, E, S, x, T, N, C, k;
                    return v
                }
            }

            function wi(e, t) {
                function n(n, r) {
                    return n = e(n, r), t(n[0], n[1])
                }
                return e.invert && t.invert && (n.invert = function (n, r) {
                    return n = t.invert(n, r), n && e.invert(n[0], n[1])
                }), n
            }

            function Ei(e) {
                var t = 0,
                    n = Et / 3,
                    r = Vi(e),
                    i = r(t, n);
                return i.parallels = function (e) {
                    return arguments.length ? r(t = e[0] * Et / 180, n = e[1] * Et / 180) : [t / Et * 180, n / Et * 180]
                }, i
            }

            function Si(e, t) {
                function o(e, t) {
                    var n = Math.sqrt(i - 2 * r * Math.sin(t)) / r;
                    return [n * Math.sin(e *= r), s - n * Math.cos(e)]
                }
                var n = Math.sin(e),
                    r = (n + Math.sin(t)) / 2,
                    i = 1 + n * (2 * r - n),
                    s = Math.sqrt(i) / r;
                return o.invert = function (e, t) {
                    var n = s - t;
                    return [Math.atan2(e, n) / r, Mt((i - (e * e + n * n) * r * r) / (2 * r))]
                }, o
            }

            function Ci() {
                function i(e, t) {
                    Ti += r * e - n * t, n = e, r = t
                }
                var e, t, n, r;
                Ni.point = function (s, o) {
                    Ni.point = i, e = n = s, t = r = o
                }, Ni.lineEnd = function () {
                    i(e, t)
                }
            }

            function _i(e, t) {
                e < ki && (ki = e), e > Ai && (Ai = e), t < Li && (Li = t), t > Oi && (Oi = t)
            }

            function Di() {
                function r(n, r) {
                    t.push("M", n, ",", r, e)
                }

                function i(e, r) {
                    t.push("M", e, ",", r), n.point = s
                }

                function s(e, n) {
                    t.push("L", e, ",", n)
                }

                function o() {
                    n.point = r
                }

                function u() {
                    t.push("Z")
                }
                var e = Pi(4.5),
                    t = [],
                    n = {
                        point: r,
                        lineStart: function () {
                            n.point = i
                        },
                        lineEnd: o,
                        polygonStart: function () {
                            n.lineEnd = u
                        },
                        polygonEnd: function () {
                            n.lineEnd = o, n.point = r
                        },
                        pointRadius: function (t) {
                            return e = Pi(t), n
                        },
                        result: function () {
                            if (t.length) {
                                var e = t.join("");
                                return t = [], e
                            }
                        }
                    };
                return n
            }

            function Pi(e) {
                return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z"
            }

            function Bi(e, t) {
                Ur += e, zr += t, ++Wr
            }

            function ji() {
                function n(n, r) {
                    var i = n - e,
                        s = r - t,
                        o = Math.sqrt(i * i + s * s);
                    Xr += o * (e + n) / 2, Vr += o * (t + r) / 2, $r += o, Bi(e = n, t = r)
                }
                var e, t;
                Hi.point = function (r, i) {
                    Hi.point = n, Bi(e = r, t = i)
                }
            }

            function Fi() {
                Hi.point = Bi
            }

            function Ii() {
                function i(e, t) {
                    var i = e - n,
                        s = t - r,
                        o = Math.sqrt(i * i + s * s);
                    Xr += o * (n + e) / 2, Vr += o * (r + t) / 2, $r += o, o = r * e - n * t, Jr += o * (n + e), Kr += o * (r + t), Qr += o * 3, Bi(n = e, r = t)
                }
                var e, t, n, r;
                Hi.point = function (s, o) {
                    Hi.point = i, Bi(e = n = s, t = r = o)
                }, Hi.lineEnd = function () {
                    i(e, t)
                }
            }

            function qi(e) {
                function r(n, r) {
                    e.moveTo(n, r), e.arc(n, r, t, 0, St)
                }

                function i(t, r) {
                    e.moveTo(t, r), n.point = s
                }

                function s(t, n) {
                    e.lineTo(t, n)
                }

                function o() {
                    n.point = r
                }

                function u() {
                    e.closePath()
                }
                var t = 4.5,
                    n = {
                        point: r,
                        lineStart: function () {
                            n.point = i
                        },
                        lineEnd: o,
                        polygonStart: function () {
                            n.lineEnd = u
                        },
                        polygonEnd: function () {
                            n.lineEnd = o, n.point = r
                        },
                        pointRadius: function (e) {
                            return t = e, n
                        },
                        result: M
                    };
                return n
            }

            function Ri(e) {
                function i(e) {
                    return (r ? o : s)(e)
                }

                function s(t) {
                    return Wi(t, function (n, r) {
                        n = e(n, r), t.point(n[0], n[1])
                    })
                }

                function o(t) {
                    function y(n, r) {
                        n = e(n, r), t.point(n[0], n[1])
                    }

                    function b() {
                        h = NaN, g.point = w, t.lineStart()
                    }

                    function w(n, i) {
                        var s = _r([n, i]),
                            o = e(n, i);
                        u(h, p, c, d, v, m, h = o[0], p = o[1], c = n, d = s[0], v = s[1], m = s[2], r, t), t.point(h, p)
                    }

                    function E() {
                        g.point = y, t.lineEnd()
                    }

                    function S() {
                        b(), g.point = x, g.lineEnd = T
                    }

                    function x(e, t) {
                        w(n = e, i = t), s = h, o = p, a = d, f = v, l = m, g.point = w
                    }

                    function T() {
                        u(h, p, c, d, v, m, s, o, n, a, f, l, r, t), g.lineEnd = E, E()
                    }
                    var n, i, s, o, a, f, l, c, h, p, d, v, m, g = {
                        point: y,
                        lineStart: b,
                        lineEnd: E,
                        polygonStart: function () {
                            t.polygonStart(), g.lineStart = S
                        },
                        polygonEnd: function () {
                            t.polygonEnd(), g.lineStart = b
                        }
                    };
                    return g
                }

                function u(r, i, s, o, a, f, l, c, h, p, d, v, g, y) {
                    var b = l - r,
                        w = c - i,
                        E = b * b + w * w;
                    if (E > 4 * t && g--) {
                        var S = o + p,
                            x = a + d,
                            T = f + v,
                            N = Math.sqrt(S * S + x * x + T * T),
                            C = Math.asin(T /= N),
                            k = m(m(T) - 1) < Tt || m(s - h) < Tt ? (s + h) / 2 : Math.atan2(x, S),
                            L = e(k, C),
                            A = L[0],
                            O = L[1],
                            M = A - r,
                            _ = O - i,
                            D = w * M - b * _;
                        if (D * D / E > t || m((b * M + w * _) / E - .5) > .3 || o * p + a * d + f * v < n) u(r, i, s, o, a, f, A, O, k, S /= N, x /= N, T, g, y), y.point(A, O), u(A, O, k, S, x, T, l, c, h, p, d, v, g, y)
                    }
                }
                var t = .5,
                    n = Math.cos(30 * Ct),
                    r = 16;
                return i.precision = function (e) {
                    return arguments.length ? (r = (t = e * e) > 0 && 16, i) : Math.sqrt(t)
                }, i
            }

            function Ui(e) {
                var t = Ri(function (t, n) {
                    return e([t * kt, n * kt])
                });
                return function (e) {
                    return $i(t(e))
                }
            }

            function zi(e) {
                this.stream = e
            }

            function Wi(e, t) {
                return {
                    point: t,
                    sphere: function () {
                        e.sphere()
                    },
                    lineStart: function () {
                        e.lineStart()
                    },
                    lineEnd: function () {
                        e.lineEnd()
                    },
                    polygonStart: function () {
                        e.polygonStart()
                    },
                    polygonEnd: function () {
                        e.polygonEnd()
                    }
                }
            }

            function Xi(e) {
                return Vi(function () {
                    return e
                })()
            }

            function Vi(t) {
                function E(e) {
                    return e = i(e[0] * Ct, e[1] * Ct), [e[0] * o + d, v - e[1] * o]
                }

                function S(e) {
                    return e = i.invert((e[0] - d) / o, (v - e[1]) / o), e && [e[0] * kt, e[1] * kt]
                }

                function x() {
                    i = wi(r = Qi(c, h, p), n);
                    var e = n(f, l);
                    return d = u - e[0] * o, v = a + e[1] * o, T()
                }

                function T() {
                    return w && (w.valid = !1, w = null), E
                }
                var n, r, i, s = Ri(function (e, t) {
                        return e = n(e, t), [e[0] * o + d, v - e[1] * o]
                    }),
                    o = 150,
                    u = 480,
                    a = 250,
                    f = 0,
                    l = 0,
                    c = 0,
                    h = 0,
                    p = 0,
                    d, v, m = hi,
                    g = xn,
                    y = null,
                    b = null,
                    w;
                return E.stream = function (e) {
                        return w && (w.valid = !1), w = $i(m(r, s(g(e)))), w.valid = !0, w
                    }, E.clipAngle = function (e) {
                        return arguments.length ? (m = e == null ? (y = e, hi) : mi((y = +e) * Ct), T()) : y
                    }, E.clipExtent = function (e) {
                        return arguments.length ? (b = e, g = e ? bi(e[0][0], e[0][1], e[1][0], e[1][1]) : xn, T()) : b
                    }, E.scale = function (e) {
                        return arguments.length ? (o = +e, x()) : o
                    }, E.translate = function (e) {
                        return arguments.length ? (u = +e[0], a = +e[1], x()) : [u, a]
                    }, E.center = function (e) {
                        return arguments.length ? (f = e[0] % 360 * Ct, l = e[1] % 360 * Ct, x()) : [f * kt, l * kt]
                    }, E.rotate = function (e) {
                        return arguments.length ? (c = e[0] % 360 * Ct, h = e[1] % 360 * Ct, p = e.length > 2 ? e[2] % 360 * Ct : 0, x()) : [c * kt, h * kt, p * kt]
                    }, e.rebind(E, s, "precision"),
                    function () {
                        return n = t.apply(this, arguments), E.invert = n.invert && S, x()
                    }
            }

            function $i(e) {
                return Wi(e, function (t, n) {
                    e.point(t * Ct, n * Ct)
                })
            }

            function Ji(e, t) {
                return [e, t]
            }

            function Ki(e, t) {
                return [e > Et ? e - St : e < -Et ? e + St : e, t]
            }

            function Qi(e, t, n) {
                return e ? t || n ? wi(Yi(e), Zi(t, n)) : Yi(e) : t || n ? Zi(t, n) : Ki
            }

            function Gi(e) {
                return function (t, n) {
                    return t += e, [t > Et ? t - St : t < -Et ? t + St : t, n]
                }
            }

            function Yi(e) {
                var t = Gi(e);
                return t.invert = Gi(-e), t
            }

            function Zi(e, t) {
                function o(e, t) {
                    var o = Math.cos(t),
                        u = Math.cos(e) * o,
                        a = Math.sin(e) * o,
                        f = Math.sin(t),
                        l = f * n + u * r;
                    return [Math.atan2(a * i - l * s, u * n - f * r), Mt(l * i + a * s)]
                }
                var n = Math.cos(e),
                    r = Math.sin(e),
                    i = Math.cos(t),
                    s = Math.sin(t);
                return o.invert = function (e, t) {
                    var o = Math.cos(t),
                        u = Math.cos(e) * o,
                        a = Math.sin(e) * o,
                        f = Math.sin(t),
                        l = f * i - a * s;
                    return [Math.atan2(a * i + f * s, u * n + l * r), Mt(l * n - u * r)]
                }, o
            }

            function es(e, t) {
                var n = Math.cos(e),
                    r = Math.sin(e);
                return function (i, s, o, u) {
                    var a = o * t;
                    if (i != null) {
                        i = ts(n, i), s = ts(n, s);
                        if (o > 0 ? i < s : i > s) i += o * St
                    } else i = e + o * St, s = e - .5 * a;
                    for (var f, l = i; o > 0 ? l > s : l < s; l -= a) u.point((f = Fr([n, -r * Math.cos(l), -r * Math.sin(l)]))[0], f[1])
                }
            }

            function ts(e, t) {
                var n = _r(t);
                n[0] -= e, jr(n);
                var r = Ot(-n[1]);
                return ((-n[2] < 0 ? -r : r) + 2 * Math.PI - Tt) % (2 * Math.PI)
            }

            function ns(t, n, r) {
                var i = e.range(t, n - Tt, r).concat(n);
                return function (e) {
                    return i.map(function (t) {
                        return [e, t]
                    })
                }
            }

            function rs(t, n, r) {
                var i = e.range(t, n - Tt, r).concat(n);
                return function (e) {
                    return i.map(function (t) {
                        return [t, e]
                    })
                }
            }

            function is(e) {
                return e.source
            }

            function ss(e) {
                return e.target
            }

            function os(e, t, n, r) {
                var i = Math.cos(t),
                    s = Math.sin(t),
                    o = Math.cos(r),
                    u = Math.sin(r),
                    a = i * Math.cos(e),
                    f = i * Math.sin(e),
                    l = o * Math.cos(n),
                    c = o * Math.sin(n),
                    h = 2 * Math.asin(Math.sqrt(Ht(r - t) + i * o * Ht(n - e))),
                    p = 1 / Math.sin(h),
                    d = h ? function (e) {
                        var t = Math.sin(e *= h) * p,
                            n = Math.sin(h - e) * p,
                            r = n * a + t * l,
                            i = n * f + t * c,
                            o = n * s + t * u;
                        return [Math.atan2(i, r) * kt, Math.atan2(o, Math.sqrt(r * r + i * i)) * kt]
                    } : function () {
                        return [e * kt, t * kt]
                    };
                return d.distance = h, d
            }

            function fs() {
                function r(r, i) {
                    var s = Math.sin(i *= Ct),
                        o = Math.cos(i),
                        u = m((r *= Ct) - e),
                        a = Math.cos(u);
                    us += Math.atan2(Math.sqrt((u = o * Math.sin(u)) * u + (u = n * s - t * o * a) * u), t * s + n * o * a), e = r, t = s, n = o
                }
                var e, t, n;
                as.point = function (i, s) {
                    e = i * Ct, t = Math.sin(s *= Ct), n = Math.cos(s), as.point = r
                }, as.lineEnd = function () {
                    as.point = as.lineEnd = M
                }
            }

            function ls(e, t) {
                function n(t, n) {
                    var r = Math.cos(t),
                        i = Math.cos(n),
                        s = e(r * i);
                    return [s * i * Math.sin(t), s * Math.sin(n)]
                }
                return n.invert = function (e, n) {
                    var r = Math.sqrt(e * e + n * n),
                        i = t(r),
                        s = Math.sin(i),
                        o = Math.cos(i);
                    return [Math.atan2(e * s, r * o), Math.asin(r && n * s / r)]
                }, n
            }

            function ps(e, t) {
                function o(e, t) {
                    var n = m(m(t) - xt) < Tt ? 0 : s / Math.pow(r(t), i);
                    return [n * Math.sin(i * e), s - n * Math.cos(i * e)]
                }
                var n = Math.cos(e),
                    r = function (e) {
                        return Math.tan(Et / 4 + e / 2)
                    },
                    i = e === t ? Math.sin(e) : Math.log(n / Math.cos(t)) / Math.log(r(t) / r(e)),
                    s = n * Math.pow(r(e), i) / i;
                return i ? (o.invert = function (e, t) {
                    var n = s - t,
                        r = Lt(i) * Math.sqrt(e * e + n * n);
                    return [Math.atan2(e, n) / i, 2 * Math.atan(Math.pow(s / r, 1 / i)) - xt]
                }, o) : ms
            }

            function ds(e, t) {
                function s(e, t) {
                    var n = i - t;
                    return [n * Math.sin(r * e), i - n * Math.cos(r * e)]
                }
                var n = Math.cos(e),
                    r = e === t ? Math.sin(e) : (n - Math.cos(t)) / (t - e),
                    i = n / r + e;
                return m(r) < Tt ? Ji : (s.invert = function (e, t) {
                    var n = i - t;
                    return [Math.atan2(e, n) / r, i - Lt(r) * Math.sqrt(e * e + n * n)]
                }, s)
            }

            function ms(e, t) {
                return [e, Math.log(Math.tan(Et / 4 + t / 2))]
            }

            function gs(e) {
                var t = Xi(e),
                    n = t.scale,
                    r = t.translate,
                    i = t.clipExtent,
                    s;
                return t.scale = function () {
                    var e = n.apply(t, arguments);
                    return e === t ? s ? t.clipExtent(null) : t : e
                }, t.translate = function () {
                    var e = r.apply(t, arguments);
                    return e === t ? s ? t.clipExtent(null) : t : e
                }, t.clipExtent = function (e) {
                    var o = i.apply(t, arguments);
                    if (o === t) {
                        if (s = e == null) {
                            var u = Et * n(),
                                a = r();
                            i([[a[0] - u, a[1] - u], [a[0] + u, a[1] + u]])
                        }
                    } else s && (o = null);
                    return o
                }, t.clipExtent(null)
            }

            function ws(e, t) {
                return [Math.log(Math.tan(Et / 4 + t / 2)), -e]
            }

            function Es(e) {
                return e[0]
            }

            function Ss(e) {
                return e[1]
            }

            function xs(e) {
                var t = e.length,
                    n = [0, 1],
                    r = 2;
                for (var i = 2; i < t; i++) {
                    while (r > 1 && At(e[n[r - 2]], e[n[r - 1]], e[i]) <= 0) --
                        r;
                    n[r++] = i
                }
                return n.slice(0, r)
            }

            function Ts(e, t) {
                return e[0] - t[0] || e[1] - t[1]
            }

            function Cs(e, t, n) {
                return (n[0] - t[0]) * (e[1] - t[1]) < (n[1] - t[1]) * (e[0] - t[0])
            }

            function ks(e, t, n, r) {
                var i = e[0],
                    s = n[0],
                    o = t[0] - i,
                    u = r[0] - s,
                    a = e[1],
                    f = n[1],
                    l = t[1] - a,
                    c = r[1] - f,
                    h = (u * (a - f) - c * (i - s)) / (c * o - u * l);
                return [i + h * o, a + h * l]
            }

            function Ls(e) {
                var t = e[0],
                    n = e[e.length - 1];
                return !(t[0] - n[0] || t[1] - n[1])
            }

            function Bs() {
                ro(this), this.edge = this.site = this.circle = null
            }

            function js(e) {
                var t = _s.pop() || new Bs;
                return t.site = e, t
            }

            function Fs(e) {
                Js(e), Ms.remove(e), _s.push(e), ro(e)
            }

            function Is(e) {
                var t = e.circle,
                    n = t.x,
                    r = t.cy,
                    i = {
                        x: n,
                        y: r
                    },
                    s = e.P,
                    o = e.N,
                    u = [e];
                Fs(e);
                var a = s;
                while (a.circle && m(n - a.circle.x) < Tt && m(r - a.circle.cy) < Tt) s = a.P, u.unshift(a), Fs(a), a = s;
                u.unshift(a), Js(a);
                var f = o;
                while (f.circle && m(n - f.circle.x) < Tt && m(r - f.circle.cy) < Tt) o = f.N, u.push(f), Fs(f), f = o;
                u.push(f), Js(f);
                var l = u.length,
                    c;
                for (c = 1; c < l; ++c) f = u[c], a = u[c - 1], eo(f.edge, a.site, f.site, i);
                a = u[0], f = u[l - 1], f.edge = Ys(a.site, f.site, null, i), $s(a), $s(f)
            }

            function qs(e) {
                var t = e.x,
                    n = e.y,
                    r, i, s, o, u = Ms._;
                while (u) {
                    s = Rs(u, n) - t;
                    if (s > Tt) u = u.L;
                    else {
                        o = t - Us(u, n);
                        if (!(o > Tt)) {
                            s > -Tt ? (r = u.P, i = u) : o > -Tt ? (r = u, i = u.N) : r = i = u;
                            break
                        }
                        if (!u.R) {
                            r = u;
                            break
                        }
                        u = u.R
                    }
                }
                var a = js(e);
                Ms.insert(r, a);
                if (!r && !i) return;
                if (r === i) {
                    Js(r), i = js(r.site), Ms.insert(a, i), a.edge = i.edge = Ys(r.site, a.site), $s(r), $s(i);
                    return
                }
                if (!i) {
                    a.edge = Ys(r.site, a.site);
                    return
                }
                Js(r), Js(i);
                var f = r.site,
                    l = f.x,
                    c = f.y,
                    h = e.x - l,
                    p = e.y - c,
                    d = i.site,
                    v = d.x - l,
                    m = d.y - c,
                    g = 2 * (h * m - p * v),
                    y = h * h + p * p,
                    b = v * v + m * m,
                    w = {
                        x: (m * y - p * b) / g + l,
                        y: (h * b - v * y) / g + c
                    };
                eo(i.edge, f, d, w), a.edge = Ys(f, e, null, w), i.edge = Ys(e, d, null, w), $s(r), $s(i)
            }

            function Rs(e, t) {
                var n = e.site,
                    r = n.x,
                    i = n.y,
                    s = i - t;
                if (!s) return r;
                var o = e.P;
                if (!o) return -Infinity;
                n = o.site;
                var u = n.x,
                    a = n.y,
                    f = a - t;
                if (!f) return u;
                var l = u - r,
                    c = 1 / s - 1 / f,
                    h = l / f;
                return c ? (-h + Math.sqrt(h * h - 2 * c * (l * l / (-2 * f) - a + f / 2 + i - s / 2))) / c + r : (r + u) / 2
            }

            function Us(e, t) {
                var n = e.N;
                if (n) return Rs(n, t);
                var r = e.site;
                return r.y === t ? r.x : Infinity
            }

            function zs(e) {
                this.site = e, this.edges = []
            }

            function Ws(e) {
                var t = e[0][0],
                    n = e[1][0],
                    r = e[0][1],
                    i = e[1][1],
                    s, o, u, a, f = Os,
                    l = f.length,
                    c, h, p, d, v, g;
                while (l--) {
                    c = f[l];
                    if (!c || !c.prepare()) continue;
                    p = c.edges, d = p.length, h = 0;
                    while (h < d) {
                        g = p[h].end(), u = g.x, a = g.y, v = p[++h % d].start(), s = v.x, o = v.y;
                        if (m(u - s) > Tt || m(a - o) > Tt) p.splice(h, 0, new to(Zs(c.site, g, m(u - t) < Tt && i - a > Tt ? {
                            x: t,
                            y: m(s - t) < Tt ? o : i
                        } : m(a - i) < Tt && n - u > Tt ? {
                            x: m(o - i) < Tt ? s : n,
                            y: i
                        } : m(u - n) < Tt && a - r > Tt ? {
                            x: n,
                            y: m(s - n) < Tt ? o : r
                        } : m(a - r) < Tt && u - t > Tt ? {
                            x: m(o - r) < Tt ? s : t,
                            y: r
                        } : null), c.site, null)), ++d
                    }
                }
            }

            function Xs(e, t) {
                return t.angle - e.angle
            }

            function Vs() {
                ro(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function $s(e) {
                var t = e.P,
                    n = e.N;
                if (!t || !n) return;
                var r = t.site,
                    i = e.site,
                    s = n.site;
                if (r === s) return;
                var o = i.x,
                    u = i.y,
                    a = r.x - o,
                    f = r.y - u,
                    l = s.x - o,
                    c = s.y - u,
                    h = 2 * (a * c - f * l);
                if (h >= -Nt) return;
                var p = a * a + f * f,
                    d = l * l + c * c,
                    v = (c * p - f * d) / h,
                    m = (a * d - l * p) / h,
                    c = m + u,
                    g = Hs.pop() || new Vs;
                g.arc = e, g.site = i, g.x = v + o, g.y = c + Math.sqrt(v * v + m * m), g.cy = c, e.circle = g;
                var y = null,
                    b = Ps._;
                while (b)
                    if (g.y < b.y || g.y === b.y && g.x <= b.x) {
                        if (!b.L) {
                            y = b.P;
                            break
                        }
                        b = b.L
                    } else {
                        if (!b.R) {
                            y = b;
                            break
                        }
                        b = b.R
                    }
                Ps.insert(y, g), y || (Ds = g)
            }

            function Js(e) {
                var t = e.circle;
                t && (t.P || (Ds = t.N), Ps.remove(t), Hs.push(t), ro(t), e.circle = null)
            }

            function Ks(e) {
                var t = As,
                    n = gi(e[0][0], e[0][1], e[1][0], e[1][1]),
                    r = t.length,
                    i;
                while (r--) {
                    i = t[r];
                    if (!Qs(i, e) || !n(i) || m(i.a.x - i.b.x) < Tt && m(i.a.y - i.b.y) < Tt) i.a = i.b = null, t.splice(r, 1)
                }
            }

            function Qs(e, t) {
                var n = e.b;
                if (n) return !0;
                var r = e.a,
                    i = t[0][0],
                    s = t[1][0],
                    o = t[0][1],
                    u = t[1][1],
                    a = e.l,
                    f = e.r,
                    l = a.x,
                    c = a.y,
                    h = f.x,
                    p = f.y,
                    d = (l + h) / 2,
                    v = (c + p) / 2,
                    m, g;
                if (p === c) {
                    if (d < i || d >= s) return;
                    if (l > h) {
                        if (!r) r = {
                            x: d,
                            y: o
                        };
                        else if (r.y >= u) return;
                        n = {
                            x: d,
                            y: u
                        }
                    } else {
                        if (!r) r = {
                            x: d,
                            y: u
                        };
                        else if (r.y < o) return;
                        n = {
                            x: d,
                            y: o
                        }
                    }
                } else {
                    m = (l - h) / (p - c), g = v - m * d;
                    if (m < -1 || m > 1)
                        if (l > h) {
                            if (!r) r = {
                                x: (o - g) / m,
                                y: o
                            };
                            else if (r.y >= u) return;
                            n = {
                                x: (u - g) / m,
                                y: u
                            }
                        } else {
                            if (!r) r = {
                                x: (u - g) / m,
                                y: u
                            };
                            else if (r.y < o) return;
                            n = {
                                x: (o - g) / m,
                                y: o
                            }
                        }
                    else if (c < p) {
                        if (!r) r = {
                            x: i,
                            y: m * i + g
                        };
                        else if (r.x >= s) return;
                        n = {
                            x: s,
                            y: m * s + g
                        }
                    } else {
                        if (!r) r = {
                            x: s,
                            y: m * s + g
                        };
                        else if (r.x < i) return;
                        n = {
                            x: i,
                            y: m * i + g
                        }
                    }
                }
                return e.a = r, e.b = n, !0
            }

            function Gs(e, t) {
                this.l = e, this.r = t, this.a = this.b = null
            }

            function Ys(e, t, n, r) {
                var i = new Gs(e, t);
                return As.push(i), n && eo(i, e, t, n), r && eo(i, t, e, r), Os[e.i].edges.push(new to(i, e, t)), Os[t.i].edges.push(new to(i, t, e)), i
            }

            function Zs(e, t, n) {
                var r = new Gs(e, null);
                return r.a = t, r.b = n, As.push(r), r
            }

            function eo(e, t, n, r) {
                !e.a && !e.b ? (e.a = r, e.l = t, e.r = n) : e.l === n ? e.b = r : e.a = r
            }

            function to(e, t, n) {
                var r = e.a,
                    i = e.b;
                this.edge = e, this.site = t, this.angle = n ? Math.atan2(n.y - t.y, n.x - t.x) : e.l === t ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
            }

            function no() {
                this._ = null
            }

            function ro(e) {
                e.U = e.C = e.L = e.R = e.P = e.N = null
            }

            function io(e, t) {
                var n = t,
                    r = t.R,
                    i = n.U;
                i ? i.L === n ? i.L = r : i.R = r : e._ = r, r.U = i, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n
            }

            function so(e, t) {
                var n = t,
                    r = t.L,
                    i = n.U;
                i ? i.L === n ? i.L = r : i.R = r : e._ = r, r.U = i, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n
            }

            function oo(e) {
                while (e.L) e = e.L;
                return e
            }

            function uo(e, t) {
                var n = e.sort(ao).pop(),
                    r, i, s;
                As = [], Os = new Array(e.length), Ms = new no, Ps = new no;
                for (;;) {
                    s = Ds;
                    if (n && (!s || n.y < s.y || n.y === s.y && n.x < s.x)) {
                        if (n.x !== r || n.y !== i) Os[n.i] = new zs(n), qs(n), r = n.x, i = n.y;
                        n = e.pop()
                    } else {
                        if (!s) break;
                        Is(s.arc)
                    }
                }
                t && (Ks(t), Ws(t));
                var o = {
                    cells: Os,
                    edges: As
                };
                return Ms = Ps = As = Os = null, o
            }

            function ao(e, t) {
                return t.y - e.y || t.x - e.x
            }

            function lo(e, t, n) {
                return (e.x - n.x) * (t.y - e.y) - (e.x - t.x) * (n.y - e.y)
            }

            function co(e) {
                return e.x
            }

            function ho(e) {
                return e.y
            }

            function po() {
                return {
                    leaf: !0,
                    nodes: [],
                    point: null,
                    x: null,
                    y: null
                }
            }

            function vo(e, t, n, r, i, s) {
                if (!e(t, n, r, i, s)) {
                    var o = (n + i) * .5,
                        u = (r + s) * .5,
                        a = t.nodes;
                    a[0] && vo(e, a[0], n, r, o, u), a[1] && vo(e, a[1], o, r, i, u), a[2] && vo(e, a[2], n, u, o, s), a[3] && vo(e, a[3], o, u, i, s)
                }
            }

            function mo(t, n) {
                t = e.rgb(t), n = e.rgb(n);
                var r = t.r,
                    i = t.g,
                    s = t.b,
                    o = n.r - r,
                    u = n.g - i,
                    a = n.b - s;
                return function (e) {
                    return "#" + vn(Math.round(r + o * e)) + vn(Math.round(i + u * e)) + vn(Math.round(s + a * e))
                }
            }

            function go(e, t) {
                var n = {},
                    r = {},
                    i;
                for (i in e) i in t ? n[i] = Eo(e[i], t[i]) : r[i] = e[i];
                for (i in t) i in e || (r[i] = t[i]);
                return function (e) {
                    for (i in n) r[i] = n[i](e);
                    return r
                }
            }

            function yo(e, t) {
                return t -= e = +e,
                    function (n) {
                        return e + t * n
                    }
            }

            function bo(e, t) {
                var n, r, i, s = 0,
                    o = 0,
                    u = [],
                    a = [],
                    f, l;
                e += "", t += "", wo.lastIndex = 0;
                for (r = 0; n = wo.exec(t); ++r) n.index && u.push(t.substring(s, o = n.index)), a.push({
                    i: u.length,
                    x: n[0]
                }), u.push(null), s = wo.lastIndex;
                s < t.length && u.push(t.substring(s));
                for (r = 0, f = a.length;
                    (n = wo.exec(e)) && r < f; ++r) {
                    l = a[r];
                    if (l.x == n[0]) {
                        if (l.i)
                            if (u[l.i + 1] == null) {
                                u[l.i - 1] += l.x, u.splice(l.i, 1);
                                for (i = r + 1; i < f; ++i) a[i].i--
                            } else {
                                u[l.i - 1] += l.x + u[l.i + 1], u.splice(l.i, 2);
                                for (i = r + 1; i < f; ++i) a[i].i -= 2
                            }
                        else if (u[l.i + 1] == null) u[l.i] = l.x;
                        else {
                            u[l.i] = l.x + u[l.i + 1], u.splice(l.i + 1, 1);
                            for (i = r + 1; i < f; ++i) a[i].i--
                        }
                        a.splice(r, 1), f--, r--
                    } else l.x = yo(parseFloat(n[0]), parseFloat(l.x))
                }
                while (r < f) l = a.pop(), u[l.i + 1] == null ? u[l.i] = l.x : (u[l.i] = l.x + u[l.i + 1], u.splice(l.i + 1, 1)), f--;
                return u.length === 1 ? u[0] == null ? (l = a[0].x, function (e) {
                    return l(e) + ""
                }) : function () {
                    return t
                } : function (e) {
                    for (r = 0; r < f; ++r) u[(l = a[r]).i] = l.x(e);
                    return u.join("")
                }
            }

            function Eo(t, n) {
                var r = e.interpolators.length,
                    i;
                while (--r >= 0 && !(i = e.interpolators[r](t, n)));
                return i
            }

            function So(e, t) {
                var n = [],
                    r = [],
                    i = e.length,
                    s = t.length,
                    o = Math.min(e.length, t.length),
                    u;
                for (u = 0; u < o; ++u) n.push(Eo(e[u], t[u]));
                for (; u < i; ++u) r[u] = e[u];
                for (; u < s; ++u) r[u] = t[u];
                return function (e) {
                    for (u = 0; u < o; ++u) r[u] = n[u](e);
                    return r
                }
            }

            function Co(e) {
                return function (t) {
                    return t <= 0 ? 0 : t >= 1 ? 1 : e(t)
                }
            }

            function ko(e) {
                return function (t) {
                    return 1 - e(1 - t)
                }
            }

            function Lo(e) {
                return function (t) {
                    return .5 * (t < .5 ? e(2 * t) : 2 - e(2 - 2 * t))
                }
            }

            function Ao(e) {
                return e * e
            }

            function Oo(e) {
                return e * e * e
            }

            function Mo(e) {
                if (e <= 0) return 0;
                if (e >= 1) return 1;
                var t = e * e,
                    n = t * e;
                return 4 * (e < .5 ? n : 3 * (e - t) + n - .75)
            }

            function _o(e) {
                return function (t) {
                    return Math.pow(t, e)
                }
            }

            function Do(e) {
                return 1 - Math.cos(e * xt)
            }

            function Po(e) {
                return Math.pow(2, 10 * (e - 1))
            }

            function Ho(e) {
                return 1 - Math.sqrt(1 - e * e)
            }

            function Bo(e, t) {
                var n;
                return arguments.length < 2 && (t = .45), arguments.length ? n = t / St * Math.asin(1 / e) : (e = 1, n = t / 4),
                    function (r) {
                        return 1 + e * Math.pow(2, -10 * r) * Math.sin((r - n) * St / t)
                    }
            }

            function jo(e) {
                return e || (e = 1.70158),
                    function (t) {
                        return t * t * ((e + 1) * t - e)
                    }
            }

            function Fo(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function Io(t, n) {
                t = e.hcl(t), n = e.hcl(n);
                var r = t.h,
                    i = t.c,
                    s = t.l,
                    o = n.h - r,
                    u = n.c - i,
                    a = n.l - s;
                return isNaN(u) && (u = 0, i = isNaN(i) ? n.c : i), isNaN(o) ? (o = 0, r = isNaN(r) ? n.h : r) : o > 180 ? o -= 360 : o < -180 && (o += 360),
                    function (e) {
                        return Qt(r + o * e, i + u * e, s + a * e) + ""
                    }
            }

            function qo(t, n) {
                t = e.hsl(t), n = e.hsl(n);
                var r = t.h,
                    i = t.s,
                    s = t.l,
                    o = n.h - r,
                    u = n.s - i,
                    a = n.l - s;
                return isNaN(u) && (u = 0, i = isNaN(i) ? n.s : i), isNaN(o) ? (o = 0, r = isNaN(r) ? n.h : r) : o > 180 ? o -= 360 : o < -180 && (o += 360),
                    function (e) {
                        return Vt(r + o * e, i + u * e, s + a * e) + ""
                    }
            }

            function Ro(t, n) {
                t = e.lab(t), n = e.lab(n);
                var r = t.l,
                    i = t.a,
                    s = t.b,
                    o = n.l - r,
                    u = n.a - i,
                    a = n.b - s;
                return function (e) {
                    return sn(r + o * e, i + u * e, s + a * e) + ""
                }
            }

            function Uo(e, t) {
                return t -= e,
                    function (n) {
                        return Math.round(e + t * n)
                    }
            }

            function zo(e) {
                var t = [e.a, e.b],
                    n = [e.c, e.d],
                    r = Xo(t),
                    i = Wo(t, n),
                    s = Xo(Vo(n, t, -i)) || 0;
                t[0] * n[1] < n[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-n[0], n[1])) * kt, this.translate = [e.e, e.f], this.scale = [r, s], this.skew = s ? Math.atan2(i, s) * kt : 0
            }

            function Wo(e, t) {
                return e[0] * t[0] + e[1] * t[1]
            }

            function Xo(e) {
                var t = Math.sqrt(Wo(e, e));
                return t && (e[0] /= t, e[1] /= t), t
            }

            function Vo(e, t, n) {
                return e[0] += n * t[0], e[1] += n * t[1], e
            }

            function Jo(t, n) {
                var r = [],
                    i = [],
                    s, o = e.transform(t),
                    u = e.transform(n),
                    a = o.translate,
                    f = u.translate,
                    l = o.rotate,
                    c = u.rotate,
                    h = o.skew,
                    p = u.skew,
                    d = o.scale,
                    v = u.scale;
                return a[0] != f[0] || a[1] != f[1] ? (r.push("translate(", null, ",", null, ")"), i.push({
                        i: 1,
                        x: yo(a[0], f[0])
                    }, {
                        i: 3,
                        x: yo(a[1], f[1])
                    })) : f[0] || f[1] ? r.push("translate(" + f + ")") : r.push(""), l != c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), i.push({
                        i: r.push(r.pop() + "rotate(", null, ")") - 2,
                        x: yo(l, c)
                    })) : c && r.push(r.pop() + "rotate(" + c + ")"), h != p ? i.push({
                        i: r.push(r.pop() + "skewX(", null, ")") - 2,
                        x: yo(h, p)
                    }) : p && r.push(r.pop() + "skewX(" + p + ")"), d[0] != v[0] || d[1] != v[1] ? (s = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({
                        i: s - 4,
                        x: yo(d[0], v[0])
                    }, {
                        i: s - 2,
                        x: yo(d[1], v[1])
                    })) : (v[0] != 1 || v[1] != 1) && r.push(r.pop() + "scale(" + v + ")"), s = i.length,
                    function (e) {
                        var t = -1,
                            n;
                        while (++t < s) r[(n = i[t]).i] = n.x(e);
                        return r.join("")
                    }
            }

            function Ko(e, t) {
                return t = t - (e = +e) ? 1 / (t - e) : 0,
                    function (n) {
                        return (n - e) * t
                    }
            }

            function Qo(e, t) {
                return t = t - (e = +e) ? 1 / (t - e) : 0,
                    function (n) {
                        return Math.max(0, Math.min(1, (n - e) * t))
                    }
            }

            function Go(e) {
                var t = e.source,
                    n = e.target,
                    r = Zo(t, n),
                    i = [t];
                while (t !== r) t = t.parent, i.push(t);
                var s = i.length;
                while (n !== r) i.splice(s, 0, n), n = n.parent;
                return i
            }

            function Yo(e) {
                var t = [],
                    n = e.parent;
                while (n != null) t.push(e), e = n, n = n.parent;
                return t.push(e), t
            }

            function Zo(e, t) {
                if (e === t) return e;
                var n = Yo(e),
                    r = Yo(t),
                    i = n.pop(),
                    s = r.pop(),
                    o = null;
                while (i === s) o = i, i = n.pop(), s = r.pop();
                return o
            }

            function eu(e) {
                e.fixed |= 2
            }

            function tu(e) {
                e.fixed &= -7
            }

            function nu(e) {
                e.fixed |= 4, e.px = e.x, e.py = e.y
            }

            function ru(e) {
                e.fixed &= -5
            }

            function iu(e, t, n) {
                var r = 0,
                    i = 0;
                e.charge = 0;
                if (!e.leaf) {
                    var s = e.nodes,
                        o = s.length,
                        u = -1,
                        a;
                    while (++u < o) {
                        a = s[u];
                        if (a == null) continue;
                        iu(a, t, n), e.charge += a.charge, r += a.charge * a.cx, i += a.charge * a.cy
                    }
                }
                if (e.point) {
                    e.leaf || (e.point.x += Math.random() - .5, e.point.y += Math.random() - .5);
                    var f = t * n[e.point.index];
                    e.charge += e.pointCharge = f, r += f * e.point.x, i += f * e.point.y
                }
                e.cx = r / e.charge, e.cy = i / e.charge
            }

            function au(t, n) {
                return e.rebind(t, n, "sort", "children", "value"), t.nodes = t, t.links = hu, t
            }

            function fu(e) {
                return e.children
            }

            function lu(e) {
                return e.value
            }

            function cu(e, t) {
                return t.value - e.value
            }

            function hu(t) {
                return e.merge(t.map(function (e) {
                    return (e.children || []).map(function (t) {
                        return {
                            source: e,
                            target: t
                        }
                    })
                }))
            }

            function du(e) {
                return e.x
            }

            function vu(e) {
                return e.y
            }

            function mu(e, t, n) {
                e.y0 = t, e.y = n
            }

            function bu(t) {
                return e.range(t.length)
            }

            function wu(e) {
                var t = -1,
                    n = e[0].length,
                    r = [];
                while (++t < n) r[t] = 0;
                return r
            }

            function Eu(e) {
                var t = 1,
                    n = 0,
                    r = e[0][1],
                    i, s = e.length;
                for (; t < s; ++t)(i = e[t][1]) > r && (n = t, r = i);
                return n
            }

            function Su(e) {
                return e.reduce(xu, 0)
            }

            function xu(e, t) {
                return e + t[1]
            }

            function Tu(e, t) {
                return Nu(e, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
            }

            function Nu(e, t) {
                var n = -1,
                    r = +e[0],
                    i = (e[1] - r) / t,
                    s = [];
                while (++n <= t) s[n] = i * n + r;
                return s
            }

            function Cu(t) {
                return [e.min(t), e.max(t)]
            }

            function ku(e, t) {
                return e.parent == t.parent ? 1 : 2
            }

            function Lu(e) {
                var t = e.children;
                return t && t.length ? t[0] : e._tree.thread
            }

            function Au(e) {
                var t = e.children,
                    n;
                return t && (n = t.length) ? t[n - 1] : e._tree.thread
            }

            function Ou(e, t) {
                var n = e.children;
                if (n && (i = n.length)) {
                    var r, i, s = -1;
                    while (++s < i) t(r = Ou(n[s], t), e) > 0 && (e = r)
                }
                return e
            }

            function Mu(e, t) {
                return e.x - t.x
            }

            function _u(e, t) {
                return t.x - e.x
            }

            function Du(e, t) {
                return e.depth - t.depth
            }

            function Pu(e, t) {
                function n(e, r) {
                    var i = e.children;
                    if (i && (a = i.length)) {
                        var s, o = null,
                            u = -1,
                            a;
                        while (++u < a) s = i[u], n(s, o), o = s
                    }
                    t(e, r)
                }
                n(e, null)
            }

            function Hu(e) {
                var t = 0,
                    n = 0,
                    r = e.children,
                    i = r.length,
                    s;
                while (--i >= 0) s = r[i]._tree, s.prelim += t, s.mod += t, t += s.shift + (n += s.change)
            }

            function Bu(e, t, n) {
                e = e._tree, t = t._tree;
                var r = n / (t.number - e.number);
                e.change += r, t.change -= r, t.shift += n, t.prelim += n, t.mod += n
            }

            function ju(e, t, n) {
                return e._tree.ancestor.parent == t.parent ? e._tree.ancestor : n
            }

            function Fu(e, t) {
                return e.value - t.value
            }

            function Iu(e, t) {
                var n = e._pack_next;
                e._pack_next = t, t._pack_prev = e, t._pack_next = n, n._pack_prev = t
            }

            function qu(e, t) {
                e._pack_next = t, t._pack_prev = e
            }

            function Ru(e, t) {
                var n = t.x - e.x,
                    r = t.y - e.y,
                    i = e.r + t.r;
                return .999 * i * i > n * n + r * r
            }

            function Uu(e) {
                function p(e) {
                    n = Math.min(e.x - e.r, n), r = Math.max(e.x + e.r, r), i = Math.min(e.y - e.r, i), s = Math.max(e.y + e.r, s)
                }
                if (!(t = e.children) || !(h = t.length)) return;
                var t, n = Infinity,
                    r = -Infinity,
                    i = Infinity,
                    s = -Infinity,
                    o, u, a, f, l, c, h;
                t.forEach(zu), o = t[0], o.x = -o.r, o.y = 0, p(o);
                if (h > 1) {
                    u = t[1], u.x = u.r, u.y = 0, p(u);
                    if (h > 2) {
                        a = t[2], Vu(o, u, a), p(a), Iu(o, a), o._pack_prev = a, Iu(a, u), u = o._pack_next;
                        for (f = 3; f < h; f++) {
                            Vu(o, u, a = t[f]);
                            var d = 0,
                                v = 1,
                                m = 1;
                            for (l = u._pack_next; l !== u; l = l._pack_next, v++)
                                if (Ru(l, a)) {
                                    d = 1;
                                    break
                                }
                            if (d == 1)
                                for (c = o._pack_prev; c !== l._pack_prev; c = c._pack_prev, m++)
                                    if (Ru(c, a)) break;
                            d ? (v < m || v == m && u.r < o.r ? qu(o, u = l) : qu(o = c, u), f--) : (Iu(o, a), u = a, p(a))
                        }
                    }
                }
                var g = (n + r) / 2,
                    y = (i + s) / 2,
                    b = 0;
                for (f = 0; f < h; f++) a = t[f], a.x -= g, a.y -= y, b = Math.max(b, a.r + Math.sqrt(a.x * a.x + a.y * a.y));
                e.r = b, t.forEach(Wu)
            }

            function zu(e) {
                e._pack_next = e._pack_prev = e
            }

            function Wu(e) {
                delete e._pack_next, delete e._pack_prev
            }

            function Xu(e, t, n, r) {
                var i = e.children;
                e.x = t += r * e.x, e.y = n += r * e.y, e.r *= r;
                if (i) {
                    var s = -1,
                        o = i.length;
                    while (++s < o) Xu(i[s], t, n, r)
                }
            }

            function Vu(e, t, n) {
                var r = e.r + n.r,
                    i = t.x - e.x,
                    s = t.y - e.y;
                if (r && (i || s)) {
                    var o = t.r + n.r,
                        u = i * i + s * s;
                    o *= o, r *= r;
                    var a = .5 + (r - o) / (2 * u),
                        f = Math.sqrt(Math.max(0, 2 * o * (r + u) - (r -= u) * r - o * o)) / (2 * u);
                    n.x = e.x + a * i + f * s, n.y = e.y + a * s - f * i
                } else n.x = e.x + r, n.y = e.y
            }

            function $u(t) {
                return 1 + e.max(t, function (e) {
                    return e.y
                })
            }

            function Ju(e) {
                return e.reduce(function (e, t) {
                    return e + t.x
                }, 0) / e.length
            }

            function Ku(e) {
                var t = e.children;
                return t && t.length ? Ku(t[0]) : e
            }

            function Qu(e) {
                var t = e.children,
                    n;
                return t && (n = t.length) ? Qu(t[n - 1]) : e
            }

            function Gu(e) {
                return {
                    x: e.x,
                    y: e.y,
                    dx: e.dx,
                    dy: e.dy
                }
            }

            function Yu(e, t) {
                var n = e.x + t[3],
                    r = e.y + t[0],
                    i = e.dx - t[1] - t[3],
                    s = e.dy - t[0] - t[2];
                return i < 0 && (n += i / 2, i = 0), s < 0 && (r += s / 2, s = 0), {
                    x: n,
                    y: r,
                    dx: i,
                    dy: s
                }
            }

            function Zu(e) {
                var t = e[0],
                    n = e[e.length - 1];
                return t < n ? [t, n] : [n, t]
            }

            function ea(e) {
                return e.rangeExtent ? e.rangeExtent() : Zu(e.range())
            }

            function ta(e, t, n, r) {
                var i = n(e[0], e[1]),
                    s = r(t[0], t[1]);
                return function (e) {
                    return s(i(e))
                }
            }

            function na(e, t) {
                var n = 0,
                    r = e.length - 1,
                    i = e[n],
                    s = e[r],
                    o;
                return s < i && (o = n, n = r, r = o, o = i, i = s, s = o), e[n] = t.floor(i), e[r] = t.ceil(s), e
            }

            function ra(e) {
                return e ? {
                    floor: function (t) {
                        return Math.floor(t / e) * e
                    },
                    ceil: function (t) {
                        return Math.ceil(t / e) * e
                    }
                } : ia
            }

            function sa(t, n, r, i) {
                var s = [],
                    o = [],
                    u = 0,
                    a = Math.min(t.length, n.length) - 1;
                t[a] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse());
                while (++u <= a) s.push(r(t[u - 1], t[u])), o.push(i(n[u - 1], n[u]));
                return function (n) {
                    var r = e.bisect(t, n, 1, a) - 1;
                    return o[r](s[r](n))
                }
            }

            function oa(e, t, n, r) {
                function o() {
                    var o = Math.min(e.length, t.length) > 2 ? sa : ta,
                        a = r ? Qo : Ko;
                    return i = o(e, t, a, n), s = o(t, e, a, Eo), u
                }

                function u(e) {
                    return i(e)
                }
                var i, s;
                return u.invert = function (e) {
                    return s(e)
                }, u.domain = function (t) {
                    return arguments.length ? (e = t.map(Number), o()) : e
                }, u.range = function (e) {
                    return arguments.length ? (t = e, o()) : t
                }, u.rangeRound = function (e) {
                    return u.range(e).interpolate(Uo)
                }, u.clamp = function (e) {
                    return arguments.length ? (r = e, o()) : r
                }, u.interpolate = function (e) {
                    return arguments.length ? (n = e, o()) : n
                }, u.ticks = function (t) {
                    return la(e, t)
                }, u.tickFormat = function (t, n) {
                    return ca(e, t, n)
                }, u.nice = function (t) {
                    return aa(e, t), o()
                }, u.copy = function () {
                    return oa(e, t, n, r)
                }, o()
            }

            function ua(t, n) {
                return e.rebind(t, n, "range", "rangeRound", "interpolate", "clamp")
            }

            function aa(e, t) {
                return na(e, ra(fa(e, t)[2]))
            }

            function fa(e, t) {
                t == null && (t = 10);
                var n = Zu(e),
                    r = n[1] - n[0],
                    i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
                    s = t / r * i;
                return s <= .15 ? i *= 10 : s <= .35 ? i *= 5 : s <= .75 && (i *= 2), n[0] = Math.ceil(n[0] / i) * i, n[1] = Math.floor(n[1] / i) * i + i * .5, n[2] = i, n
            }

            function la(t, n) {
                return e.range.apply(e, fa(t, n))
            }

            function ca(t, n, r) {
                var i = fa(t, n);
                return e.format(r ? r.replace(qn, function (e, t, n, r, s, o, u, a, f, l) {
                    return [t, n, r, s, o, u, a, f || "." + da(l, i), l].join("")
                }) : ",." + pa(i[2]) + "f")
            }

            function pa(e) {
                return -Math.floor(Math.log(e) / Math.LN10 + .01)
            }

            function da(e, t) {
                var n = pa(t[2]);
                return e in ha ? Math.abs(n - pa(Math.max(Math.abs(t[0]), Math.abs(t[1])))) + +(e !== "e") : n - (e === "%") * 2
            }

            function va(t, n, r, i) {
                function s(e) {
                    return (r ? Math.log(e < 0 ? 0 : e) : -Math.log(e > 0 ? 0 : -e)) / Math.log(n)
                }

                function o(e) {
                    return r ? Math.pow(n, e) : -Math.pow(n, -e)
                }

                function u(e) {
                    return t(s(e))
                }
                return u.invert = function (e) {
                    return o(t.invert(e))
                }, u.domain = function (e) {
                    return arguments.length ? (r = e[0] >= 0, t.domain((i = e.map(Number)).map(s)), u) : i
                }, u.base = function (e) {
                    return arguments.length ? (n = +e, t.domain(i.map(s)), u) : n
                }, u.nice = function () {
                    var e = na(i.map(s), r ? Math : ga);
                    return t.domain(e), i = e.map(o), u
                }, u.ticks = function () {
                    var e = Zu(i),
                        t = [],
                        u = e[0],
                        a = e[1],
                        f = Math.floor(s(u)),
                        l = Math.ceil(s(a)),
                        c = n % 1 ? 2 : n;
                    if (isFinite(l - f)) {
                        if (r) {
                            for (; f < l; f++)
                                for (var h = 1; h < c; h++) t.push(o(f) * h);
                            t.push(o(f))
                        } else {
                            t.push(o(f));
                            for (; f++ < l;)
                                for (var h = c - 1; h > 0; h--) t.push(o(f) * h)
                        }
                        for (f = 0; t[f] < u; f++);
                        for (l = t.length; t[l - 1] > a; l--);
                        t = t.slice(f, l)
                    }
                    return t
                }, u.tickFormat = function (t, n) {
                    if (!arguments.length) return ma;
                    arguments.length < 2 ? n = ma : typeof n != "function" && (n = e.format(n));
                    var i = Math.max(.1, t / u.ticks().length),
                        a = r ? (f = 1e-12, Math.ceil) : (f = -1e-12, Math.floor),
                        f;
                    return function (e) {
                        return e / o(a(s(e) + f)) <= i ? n(e) : ""
                    }
                }, u.copy = function () {
                    return va(t.copy(), n, r, i)
                }, ua(u, t)
            }

            function ya(e, t, n) {
                function s(t) {
                    return e(r(t))
                }
                var r = ba(t),
                    i = ba(1 / t);
                return s.invert = function (t) {
                    return i(e.invert(t))
                }, s.domain = function (t) {
                    return arguments.length ? (e.domain((n = t.map(Number)).map(r)), s) : n
                }, s.ticks = function (e) {
                    return la(n, e)
                }, s.tickFormat = function (e, t) {
                    return ca(n, e, t)
                }, s.nice = function (e) {
                    return s.domain(aa(n, e))
                }, s.exponent = function (o) {
                    return arguments.length ? (r = ba(t = o), i = ba(1 / t), e.domain(n.map(r)), s) : t
                }, s.copy = function () {
                    return ya(e.copy(), t, n)
                }, ua(s, e)
            }

            function ba(e) {
                return function (t) {
                    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
                }
            }

            function wa(t, n) {
                function o(e) {
                    return i[((r.get(e) || n.t === "range" && r.set(e, t.push(e))) - 1) % i.length]
                }

                function u(n, r) {
                    return e.range(t.length).map(function (e) {
                        return n + r * e
                    })
                }
                var r, i, s;
                return o.domain = function (e) {
                    if (!arguments.length) return t;
                    t = [], r = new b;
                    var i = -1,
                        s = e.length,
                        u;
                    while (++i < s) r.has(u = e[i]) || r.set(u, t.push(u));
                    return o[n.t].apply(o, n.a)
                }, o.range = function (e) {
                    return arguments.length ? (i = e, s = 0, n = {
                        t: "range",
                        a: arguments
                    }, o) : i
                }, o.rangePoints = function (e, r) {
                    arguments.length < 2 && (r = 0);
                    var a = e[0],
                        f = e[1],
                        l = (f - a) / (Math.max(1, t.length - 1) + r);
                    return i = u(t.length < 2 ? (a + f) / 2 : a + l * r / 2, l), s = 0, n = {
                        t: "rangePoints",
                        a: arguments
                    }, o
                }, o.rangeBands = function (e, r, a) {
                    arguments.length < 2 && (r = 0), arguments.length < 3 && (a = r);
                    var f = e[1] < e[0],
                        l = e[f - 0],
                        c = e[1 - f],
                        h = (c - l) / (t.length - r + 2 * a);
                    return i = u(l + h * a, h), f && i.reverse(), s = h * (1 - r), n = {
                        t: "rangeBands",
                        a: arguments
                    }, o
                }, o.rangeRoundBands = function (e, r, a) {
                    arguments.length < 2 && (r = 0), arguments.length < 3 && (a = r);
                    var f = e[1] < e[0],
                        l = e[f - 0],
                        c = e[1 - f],
                        h = Math.floor((c - l) / (t.length - r + 2 * a)),
                        p = c - l - (t.length - r) * h;
                    return i = u(l + Math.round(p / 2), h), f && i.reverse(), s = Math.round(h * (1 - r)), n = {
                        t: "rangeRoundBands",
                        a: arguments
                    }, o
                }, o.rangeBand = function () {
                    return s
                }, o.rangeExtent = function () {
                    return Zu(n.a[0])
                }, o.copy = function () {
                    return wa(t, n)
                }, o.domain(t)
            }

            function Na(t, n) {
                function i() {
                    var i = 0,
                        o = n.length;
                    r = [];
                    while (++i < o) r[i - 1] = e.quantile(t, i / o);
                    return s
                }

                function s(t) {
                    if (!isNaN(t = +t)) return n[e.bisect(r, t)]
                }
                var r;
                return s.domain = function (n) {
                    return arguments.length ? (t = n.filter(function (e) {
                        return !isNaN(e)
                    }).sort(e.ascending), i()) : t
                }, s.range = function (e) {
                    return arguments.length ? (n = e, i()) : n
                }, s.quantiles = function () {
                    return r
                }, s.invertExtent = function (e) {
                    return e = n.indexOf(e), e < 0 ? [NaN, NaN] : [e > 0 ? r[e - 1] : t[0], e < r.length ? r[e] : t[t.length - 1]]
                }, s.copy = function () {
                    return Na(t, n)
                }, i()
            }

            function Ca(e, t, n) {
                function s(t) {
                    return n[Math.max(0, Math.min(i, Math.floor(r * (t - e))))]
                }

                function o() {
                    return r = n.length / (t - e), i = n.length - 1, s
                }
                var r, i;
                return s.domain = function (n) {
                    return arguments.length ? (e = +n[0], t = +n[n.length - 1], o()) : [e, t]
                }, s.range = function (e) {
                    return arguments.length ? (n = e, o()) : n
                }, s.invertExtent = function (t) {
                    return t = n.indexOf(t), t = t < 0 ? NaN : t / r + e, [t, t + 1 / r]
                }, s.copy = function () {
                    return Ca(e, t, n)
                }, o()
            }

            function ka(t, n) {
                function r(r) {
                    if (r <= r) return n[e.bisect(t, r)]
                }
                return r.domain = function (e) {
                    return arguments.length ? (t = e, r) : t
                }, r.range = function (e) {
                    return arguments.length ? (n = e, r) : n
                }, r.invertExtent = function (e) {
                    return e = n.indexOf(e), [t[e - 1], t[e]]
                }, r.copy = function () {
                    return ka(t, n)
                }, r
            }

            function La(e) {
                function t(e) {
                    return +e
                }
                return t.invert = t, t.domain = t.range = function (n) {
                    return arguments.length ? (e = n.map(t), t) : e
                }, t.ticks = function (t) {
                    return la(e, t)
                }, t.tickFormat = function (t, n) {
                    return ca(e, t, n)
                }, t.copy = function () {
                    return La(e)
                }, t
            }

            function Ma(e) {
                return e.innerRadius
            }

            function _a(e) {
                return e.outerRadius
            }

            function Da(e) {
                return e.startAngle
            }

            function Pa(e) {
                return e.endAngle
            }

            function Ha(e) {
                function u(s) {
                    function d() {
                        u.push("M", i(e(a), o))
                    }
                    var u = [],
                        a = [],
                        f = -1,
                        l = s.length,
                        c, h = Sn(t),
                        p = Sn(n);
                    while (++f < l) r.call(this, c = s[f], f) ? a.push([+h.call(this, c, f), +p.call(this, c, f)]) : a.length && (d(), a = []);
                    return a.length && d(), u.length ? u.join("") : null
                }
                var t = Es,
                    n = Ss,
                    r = ri,
                    i = ja,
                    s = i.key,
                    o = .7;
                return u.x = function (e) {
                    return arguments.length ? (t = e, u) : t
                }, u.y = function (e) {
                    return arguments.length ? (n = e, u) : n
                }, u.defined = function (e) {
                    return arguments.length ? (r = e, u) : r
                }, u.interpolate = function (e) {
                    return arguments.length ? (typeof e == "function" ? s = i = e : s = (i = Ba.get(e) || ja).key, u) : s
                }, u.tension = function (e) {
                    return arguments.length ? (o = e, u) : o
                }, u
            }

            function ja(e) {
                return e.join("L")
            }

            function Fa(e) {
                return ja(e) + "Z"
            }

            function Ia(e) {
                var t = 0,
                    n = e.length,
                    r = e[0],
                    i = [r[0], ",", r[1]];
                while (++t < n) i.push("H", (r[0] + (r = e[t])[0]) / 2, "V", r[1]);
                return n > 1 && i.push("H", r[0]), i.join("")
            }

            function qa(e) {
                var t = 0,
                    n = e.length,
                    r = e[0],
                    i = [r[0], ",", r[1]];
                while (++t < n) i.push("V", (r = e[t])[1], "H", r[0]);
                return i.join("")
            }

            function Ra(e) {
                var t = 0,
                    n = e.length,
                    r = e[0],
                    i = [r[0], ",", r[1]];
                while (++t < n) i.push("H", (r = e[t])[0], "V", r[1]);
                return i.join("")
            }

            function Ua(e, t) {
                return e.length < 4 ? ja(e) : e[1] + Xa(e.slice(1, e.length - 1), Va(e, t))
            }

            function za(e, t) {
                return e.length < 3 ? ja(e) : e[0] + Xa((e.push(e[0]), e), Va([e[e.length - 2]].concat(e, [e[1]]), t))
            }

            function Wa(e, t) {
                return e.length < 3 ? ja(e) : e[0] + Xa(e, Va(e, t))
            }

            function Xa(e, t) {
                if (t.length < 1 || e.length != t.length && e.length != t.length + 2) return ja(e);
                var n = e.length != t.length,
                    r = "",
                    i = e[0],
                    s = e[1],
                    o = t[0],
                    u = o,
                    a = 1;
                n && (r += "Q" + (s[0] - o[0] * 2 / 3) + "," + (s[1] - o[1] * 2 / 3) + "," + s[0] + "," + s[1], i = e[1], a = 2);
                if (t.length > 1) {
                    u = t[1], s = e[a], a++, r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (s[0] - u[0]) + "," + (s[1] - u[1]) + "," + s[0] + "," + s[1];
                    for (var f = 2; f < t.length; f++, a++) s = e[a], u = t[f], r += "S" + (s[0] - u[0]) + "," + (s[1] - u[1]) + "," + s[0] + "," + s[1]
                }
                if (n) {
                    var l = e[a];
                    r += "Q" + (s[0] + u[0] * 2 / 3) + "," + (s[1] + u[1] * 2 / 3) + "," + l[0] + "," + l[1]
                }
                return r
            }

            function Va(e, t) {
                var n = [],
                    r = (1 - t) / 2,
                    i, s = e[0],
                    o = e[1],
                    u = 1,
                    a = e.length;
                while (++u < a) i = s, s = o, o = e[u], n.push([r * (o[0] - i[0]), r * (o[1] - i[1])]);
                return n
            }

            function $a(e) {
                if (e.length < 3) return ja(e);
                var t = 1,
                    n = e.length,
                    r = e[0],
                    i = r[0],
                    s = r[1],
                    o = [i, i, i, (r = e[1])[0]],
                    u = [s, s, s, r[1]],
                    a = [i, ",", s, "L", Ga(ef, o), ",", Ga(ef, u)];
                e.push(e[n - 1]);
                while (++t <= n) r = e[t], o.shift(), o.push(r[0]), u.shift(), u.push(r[1]), tf(a, o, u);
                return e.pop(), a.push("L", r), a.join("")
            }

            function Ja(e) {
                if (e.length < 4) return ja(e);
                var t = [],
                    n = -1,
                    r = e.length,
                    i, s = [0],
                    o = [0];
                while (++n < 3) i = e[n], s.push(i[0]), o.push(i[1]);
                t.push(Ga(ef, s) + "," + Ga(ef, o)), --n;
                while (++n < r) i = e[n], s.shift(), s.push(i[0]), o.shift(), o.push(i[1]), tf(t, s, o);
                return t.join("")
            }

            function Ka(e) {
                var t, n = -1,
                    r = e.length,
                    i = r + 4,
                    s, o = [],
                    u = [];
                while (++n < 4) s = e[n % r], o.push(s[0]), u.push(s[1]);
                t = [Ga(ef, o), ",", Ga(ef, u)], --n;
                while (++n < i) s = e[n % r], o.shift(), o.push(s[0]), u.shift(), u.push(s[1]), tf(t, o, u);
                return t.join("")
            }

            function Qa(e, t) {
                var n = e.length - 1;
                if (n) {
                    var r = e[0][0],
                        i = e[0][1],
                        s = e[n][0] - r,
                        o = e[n][1] - i,
                        u = -1,
                        a, f;
                    while (++u <= n) a = e[u], f = u / n, a[0] = t * a[0] + (1 - t) * (r + f * s), a[1] = t * a[1] + (1 - t) * (i + f * o)
                }
                return $a(e)
            }

            function Ga(e, t) {
                return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
            }

            function tf(e, t, n) {
                e.push("C", Ga(Ya, t), ",", Ga(Ya, n), ",", Ga(Za, t), ",", Ga(Za, n), ",", Ga(ef, t), ",", Ga(ef, n))
            }

            function nf(e, t) {
                return (t[1] - e[1]) / (t[0] - e[0])
            }

            function rf(e) {
                var t = 0,
                    n = e.length - 1,
                    r = [],
                    i = e[0],
                    s = e[1],
                    o = r[0] = nf(i, s);
                while (++t < n) r[t] = (o + (o = nf(i = s, s = e[t + 1]))) / 2;
                return r[t] = o, r
            }

            function sf(e) {
                var t = [],
                    n, r, i, s, o = rf(e),
                    u = -1,
                    a = e.length - 1;
                while (++u < a) n = nf(e[u], e[u + 1]), m(n) < Tt ? o[u] = o[u + 1] = 0 : (r = o[u] / n, i = o[u + 1] / n, s = r * r + i * i, s > 9 && (s = n * 3 / Math.sqrt(s), o[u] = s * r, o[u + 1] = s * i));
                u = -1;
                while (++u <= a) s = (e[Math.min(a, u + 1)][0] - e[Math.max(0, u - 1)][0]) / (6 * (1 + o[u] * o[u])), t.push([s || 0, o[u] * s || 0]);
                return t
            }

            function of (e) {
                return e.length < 3 ? ja(e) : e[0] + Xa(e, sf(e))
            }

            function uf(e) {
                var t, n = -1,
                    r = e.length,
                    i, s;
                while (++n < r) t = e[n], i = t[0], s = t[1] + Aa, t[0] = i * Math.cos(s), t[1] = i * Math.sin(s);
                return e
            }

            function af(e) {
                function c(u) {
                    function x() {
                        c.push("M", o(e(p), l), f, a(e(h.reverse()), l), "Z")
                    }
                    var c = [],
                        h = [],
                        p = [],
                        d = -1,
                        v = u.length,
                        m, g = Sn(t),
                        y = Sn(r),
                        b = t === n ? function () {
                            return E
                        } : Sn(n),
                        w = r === i ? function () {
                            return S
                        } : Sn(i),
                        E, S;
                    while (++d < v) s.call(this, m = u[d], d) ? (h.push([E = +g.call(this, m, d), S = +y.call(this, m, d)]), p.push([+b.call(this, m, d), +w.call(this, m, d)])) : h.length && (x(), h = [], p = []);
                    return h.length && x(), c.length ? c.join("") : null
                }
                var t = Es,
                    n = Es,
                    r = 0,
                    i = Ss,
                    s = ri,
                    o = ja,
                    u = o.key,
                    a = o,
                    f = "L",
                    l = .7;
                return c.x = function (e) {
                    return arguments.length ? (t = n = e, c) : n
                }, c.x0 = function (e) {
                    return arguments.length ? (t = e, c) : t
                }, c.x1 = function (e) {
                    return arguments.length ? (n = e, c) : n
                }, c.y = function (e) {
                    return arguments.length ? (r = i = e, c) : i
                }, c.y0 = function (e) {
                    return arguments.length ? (r = e, c) : r
                }, c.y1 = function (e) {
                    return arguments.length ? (i = e, c) : i
                }, c.defined = function (e) {
                    return arguments.length ? (s = e, c) : s
                }, c.interpolate = function (e) {
                    return arguments.length ? (typeof e == "function" ? u = o = e : u = (o = Ba.get(e) || ja).key, a = o.reverse || o, f = o.closed ? "M" : "L", c) : u
                }, c.tension = function (e) {
                    return arguments.length ? (l = e, c) : l
                }, c
            }

            function ff(e) {
                return e.radius
            }

            function lf(e) {
                return [e.x, e.y]
            }

            function cf(e) {
                return function () {
                    var t = e.apply(this, arguments),
                        n = t[0],
                        r = t[1] + Aa;
                    return [n * Math.cos(r), n * Math.sin(r)]
                }
            }

            function hf() {
                return 64
            }

            function pf() {
                return "circle"
            }

            function df(e) {
                var t = Math.sqrt(e / Et);
                return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
            }

            function yf(e, t) {
                return F(e, bf), e.id = t, e
            }

            function xf(e, t, n, r) {
                var i = e.id;
                return ot(e, typeof n == "function" ? function (e, s, o) {
                    e.__transition__[i].tween.set(t, r(n.call(e, e.__data__, s, o)))
                } : (n = r(n), function (e) {
                    e.__transition__[i].tween.set(t, n)
                }))
            }

            function Tf(e) {
                return e == null && (e = ""),
                    function () {
                        this.textContent = e
                    }
            }

            function Nf(t, n, r, i) {
                var s = t.__transition__ || (t.__transition__ = {
                        active: 0,
                        count: 0
                    }),
                    o = s[r];
                if (!o) {
                    var u = i.time;
                    o = s[r] = {
                        tween: new b,
                        time: u,
                        ease: i.ease,
                        delay: i.delay,
                        duration: i.duration
                    }, ++s.count, e.timer(function (i) {
                        function d(i) {
                            if (s.active > r) return m();
                            s.active = r, o.event && o.event.start.call(t, a, n), o.tween.forEach(function (e, r) {
                                (r = r.call(t, a, n)) && p.push(r)
                            }), e.timer(function () {
                                return h.c = v(i || 1) ? ri : v, 1
                            }, 0, u)
                        }

                        function v(e) {
                            if (s.active !== r) return m();
                            var i = e / c,
                                u = f(i),
                                l = p.length;
                            while (l > 0) p[--l].call(t, u);
                            if (i >= 1) return o.event && o.event.end.call(t, a, n), m()
                        }

                        function m() {
                            return --s.count ? delete s[r] : delete t.__transition__, 1
                        }
                        var a = t.__data__,
                            f = o.ease,
                            l = o.delay,
                            c = o.duration,
                            h = Mn,
                            p = [];
                        h.t = l + u;
                        if (l <= i) return d(i - l);
                        h.c = d
                    }, 0, u)
                }
            }

            function Lf(e, t) {
                e.attr("transform", function (e) {
                    return "translate(" + t(e) + ",0)"
                })
            }

            function Af(e, t) {
                e.attr("transform", function (e) {
                    return "translate(0," + t(e) + ")"
                })
            }

            function Hf(e) {
                return e.toISOString()
            }

            function Bf(t, n, r) {
                function i(e) {
                    return t(e)
                }

                function s(t, r) {
                    var i = t[1] - t[0],
                        s = i / r,
                        o = e.bisect(Ff, s);
                    return o == Ff.length ? [n.year, fa(t.map(function (e) {
                        return e / 31536e6
                    }), r)[2]] : o ? n[s / Ff[o - 1] < Ff[o] / s ? o - 1 : o] : [Rf, fa(t, r)[2]]
                }
                return i.invert = function (e) {
                    return jf(t.invert(e))
                }, i.domain = function (e) {
                    return arguments.length ? (t.domain(e), i) : t.domain().map(jf)
                }, i.nice = function (e, t) {
                    function u(n) {
                        return !isNaN(n) && !e.range(n, jf(+n + 1), t).length
                    }
                    var n = i.domain(),
                        r = Zu(n),
                        o = e == null ? s(r, 10) : typeof e == "number" && s(r, e);
                    return o && (e = o[0], t = o[1]), i.domain(na(n, t > 1 ? {
                        floor: function (t) {
                            while (u(t = e.floor(t))) t = jf(t - 1);
                            return t
                        },
                        ceil: function (t) {
                            while (u(t = e.ceil(t))) t = jf(+t + 1);
                            return t
                        }
                    } : e))
                }, i.ticks = function (e, t) {
                    var n = Zu(i.domain()),
                        r = e == null ? s(n, 10) : typeof e == "number" ? s(n, e) : !e.range && [{
                            range: e
                        }, t];
                    return r && (e = r[0], t = r[1]), e.range(n[0], jf(+n[1] + 1), t < 1 ? 1 : t)
                }, i.tickFormat = function () {
                    return r
                }, i.copy = function () {
                    return Bf(t.copy(), n, r)
                }, ua(i, t)
            }

            function jf(e) {
                return new Date(e)
            }

            function Wf(e) {
                return JSON.parse(e.responseText)
            }

            function Xf(e) {
                var t = r.createRange();
                return t.selectNode(r.body), t.createContextualFragment(e.responseText)
            }
            var e = {
                version: "3.4.1"
            };
            Date.now || (Date.now = function () {
                return +(new Date)
            });
            var t = [].slice,
                n = function (e) {
                    return t.call(e)
                },
                r = document,
                i = r.documentElement,
                s = window;
            try {
                n(i.childNodes)[0].nodeType
            } catch (o) {
                n = function (e) {
                    var t = e.length,
                        n = new Array(t);
                    while (t--) n[t] = e[t];
                    return n
                }
            }
            try {
                r.createElement("div").style.setProperty("opacity", 0, "")
            } catch (u) {
                var a = s.Element.prototype,
                    f = a.setAttribute,
                    l = a.setAttributeNS,
                    c = s.CSSStyleDeclaration.prototype,
                    h = c.setProperty;
                a.setAttribute = function (e, t) {
                    f.call(this, e, t + "")
                }, a.setAttributeNS = function (e, t, n) {
                    l.call(this, e, t, n + "")
                }, c.setProperty = function (e, t, n) {
                    h.call(this, e, t + "", n)
                }
            }
            e.ascending = function (e, t) {
                return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
            }, e.descending = function (e, t) {
                return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
            }, e.min = function (e, t) {
                var n = -1,
                    r = e.length,
                    i, s;
                if (arguments.length === 1) {
                    while (++n < r && !((i = e[n]) != null && i <= i)) i = undefined;
                    while (++n < r)(s = e[n]) != null && i > s && (i = s)
                } else {
                    while (++n < r && !((i = t.call(e, e[n], n)) != null && i <= i)) i = undefined;
                    while (++n < r)(s = t.call(e, e[n], n)) != null && i > s && (i = s)
                }
                return i
            }, e.max = function (e, t) {
                var n = -1,
                    r = e.length,
                    i, s;
                if (arguments.length === 1) {
                    while (++n < r && !((i = e[n]) != null && i <= i)) i = undefined;
                    while (++n < r)(s = e[n]) != null && s > i && (i = s)
                } else {
                    while (++n < r && !((i = t.call(e, e[n], n)) != null && i <= i)) i = undefined;
                    while (++n < r)(s = t.call(e, e[n], n)) != null && s > i && (i = s)
                }
                return i
            }, e.extent = function (e, t) {
                var n = -1,
                    r = e.length,
                    i, s, o;
                if (arguments.length === 1) {
                    while (++n < r && !((i = o = e[n]) != null && i <= i)) i = o = undefined;
                    while (++n < r)(s = e[n]) != null && (i > s && (i = s), o < s && (o = s))
                } else {
                    while (++n < r && !((i = o = t.call(e, e[n], n)) != null && i <= i)) i = undefined;
                    while (++n < r)(s = t.call(e, e[n], n)) != null && (i > s && (i = s), o < s && (o = s))
                }
                return [i, o]
            }, e.sum = function (e, t) {
                var n = 0,
                    r = e.length,
                    i, s = -1;
                if (arguments.length === 1)
                    while (++s < r) isNaN(i = +e[s]) || (n += i);
                else
                    while (++s < r) isNaN(i = +t.call(e, e[s], s)) || (n += i);
                return n
            }, e.mean = function (e, t) {
                var n = e.length,
                    r, i = 0,
                    s = -1,
                    o = 0;
                if (arguments.length === 1)
                    while (++s < n) p(r = e[s]) && (i += (r - i) / ++o);
                else
                    while (++s < n) p(r = t.call(e, e[s], s)) && (i += (r - i) / ++o);
                return o ? i : undefined
            }, e.quantile = function (e, t) {
                var n = (e.length - 1) * t + 1,
                    r = Math.floor(n),
                    i = +e[r - 1],
                    s = n - r;
                return s ? i + s * (e[r] - i) : i
            }, e.median = function (t, n) {
                return arguments.length > 1 && (t = t.map(n)), t = t.filter(p), t.length ? e.quantile(t.sort(e.ascending), .5) : undefined
            }, e.bisector = function (e) {
                return {
                    left: function (t, n, r, i) {
                        arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length);
                        while (r < i) {
                            var s = r + i >>> 1;
                            e.call(t, t[s], s) < n ? r = s + 1 : i = s
                        }
                        return r
                    },
                    right: function (t, n, r, i) {
                        arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length);
                        while (r < i) {
                            var s = r + i >>> 1;
                            n < e.call(t, t[s], s) ? i = s : r = s + 1
                        }
                        return r
                    }
                }
            };
            var d = e.bisector(function (e) {
                return e
            });
            e.bisectLeft = d.left, e.bisect = e.bisectRight = d.right, e.shuffle = function (e) {
                var t = e.length,
                    n, r;
                while (t) r = Math.random() * t-- | 0, n = e[t], e[t] = e[r], e[r] = n;
                return e
            }, e.permute = function (e, t) {
                var n = t.length,
                    r = new Array(n);
                while (n--) r[n] = e[t[n]];
                return r
            }, e.pairs = function (e) {
                var t = 0,
                    n = e.length - 1,
                    r, i = e[0],
                    s = new Array(n < 0 ? 0 : n);
                while (t < n) s[t] = [r = i, i = e[++t]];
                return s
            }, e.zip = function () {
                if (!(s = arguments.length)) return [];
                for (var t = -1, n = e.min(arguments, v), r = new Array(n); ++t < n;)
                    for (var i = -1, s, o = r[t] = new Array(s); ++i < s;) o[i] = arguments[i][t];
                return r
            }, e.transpose = function (t) {
                return e.zip.apply(e, t)
            }, e.keys = function (e) {
                var t = [];
                for (var n in e) t.push(n);
                return t
            }, e.values = function (e) {
                var t = [];
                for (var n in e) t.push(e[n]);
                return t
            }, e.entries = function (e) {
                var t = [];
                for (var n in e) t.push({
                    key: n,
                    value: e[n]
                });
                return t
            }, e.merge = function (e) {
                var t = e.length,
                    n, r = -1,
                    i = 0,
                    s, o;
                while (++r < t) i += e[r].length;
                s = new Array(i);
                while (--t >= 0) {
                    o = e[t], n = o.length;
                    while (--n >= 0) s[--i] = o[n]
                }
                return s
            };
            var m = Math.abs;
            e.range = function (e, t, n) {
                arguments.length < 3 && (n = 1, arguments.length < 2 && (t = e, e = 0));
                if ((t - e) / n === Infinity) throw new Error("infinite range");
                var r = [],
                    i = g(m(n)),
                    s = -1,
                    o;
                e *= i, t *= i, n *= i;
                if (n < 0)
                    while ((o = e + n * ++s) > t) r.push(o / i);
                else
                    while ((o = e + n * ++s) < t) r.push(o / i);
                return r
            }, e.map = function (e) {
                var t = new b;
                if (e instanceof b) e.forEach(function (e, n) {
                    t.set(e, n)
                });
                else
                    for (var n in e) t.set(n, e[n]);
                return t
            }, y(b, {
                has: S,
                get: function (e) {
                    return this[w + e]
                },
                set: function (e, t) {
                    return this[w + e] = t
                },
                remove: x,
                keys: T,
                values: function () {
                    var e = [];
                    return this.forEach(function (t, n) {
                        e.push(n)
                    }), e
                },
                entries: function () {
                    var e = [];
                    return this.forEach(function (t, n) {
                        e.push({
                            key: t,
                            value: n
                        })
                    }), e
                },
                size: N,
                empty: C,
                forEach: function (e) {
                    for (var t in this) t.charCodeAt(0) === E && e.call(this, t.substring(1), this[t])
                }
            });
            var w = "\0",
                E = w.charCodeAt(0);
            e.nest = function () {
                function o(e, r, u) {
                    if (u >= n.length) return s ? s.call(t, r) : i ? r.sort(i) : r;
                    var a = -1,
                        f = r.length,
                        l = n[u++],
                        c, h, p, d = new b,
                        v;
                    while (++a < f)(v = d.get(c = l(h = r[a]))) ? v.push(h) : d.set(c, [h]);
                    return e ? (h = e(), p = function (t, n) {
                        h.set(t, o(e, n, u))
                    }) : (h = {}, p = function (t, n) {
                        h[t] = o(e, n, u)
                    }), d.forEach(p), h
                }

                function u(e, t) {
                    if (t >= n.length) return e;
                    var i = [],
                        s = r[t++];
                    return e.forEach(function (e, n) {
                        i.push({
                            key: e,
                            values: u(n, t)
                        })
                    }), s ? i.sort(function (e, t) {
                        return s(e.key, t.key)
                    }) : i
                }
                var t = {},
                    n = [],
                    r = [],
                    i, s;
                return t.map = function (e, t) {
                    return o(t, e, 0)
                }, t.entries = function (t) {
                    return u(o(e.map, t, 0), 0)
                }, t.key = function (e) {
                    return n.push(e), t
                }, t.sortKeys = function (e) {
                    return r[n.length - 1] = e, t
                }, t.sortValues = function (e) {
                    return i = e, t
                }, t.rollup = function (e) {
                    return s = e, t
                }, t
            }, e.set = function (e) {
                var t = new k;
                if (e)
                    for (var n = 0, r = e.length; n < r; ++n) t.add(e[n]);
                return t
            }, y(k, {
                has: S,
                add: function (e) {
                    return this[w + e] = !0, e
                },
                remove: function (e) {
                    return e = w + e, e in this && delete this[e]
                },
                values: T,
                size: N,
                empty: C,
                forEach: function (e) {
                    for (var t in this) t.charCodeAt(0) === E && e.call(this, t.substring(1))
                }
            }), e.behavior = {}, e.rebind = function (e, t) {
                var n = 1,
                    r = arguments.length,
                    i;
                while (++n < r) e[i = arguments[n]] = L(e, t, t[i]);
                return e
            };
            var O = ["webkit", "ms", "moz", "Moz", "o", "O"];
            e.dispatch = function () {
                var e = new _,
                    t = -1,
                    n = arguments.length;
                while (++t < n) e[arguments[t]] = D(e);
                return e
            }, _.prototype.on = function (e, t) {
                var n = e.indexOf("."),
                    r = "";
                n >= 0 && (r = e.substring(n + 1), e = e.substring(0, n));
                if (e) return arguments.length < 2 ? this[e].on(r) : this[e].on(r, t);
                if (arguments.length === 2) {
                    if (t == null)
                        for (e in this) this.hasOwnProperty(e) && this[e].on(r, null);
                    return this
                }
            }, e.event = null, e.requote = function (e) {
                return e.replace(j, "\\$&")
            };
            var j = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
                F = {}.__proto__ ? function (e, t) {
                    e.__proto__ = t
                } : function (e, t) {
                    for (var n in t) e[n] = t[n]
                },
                q = function (e, t) {
                    return t.querySelector(e)
                },
                R = function (e, t) {
                    return t.querySelectorAll(e)
                },
                U = i[A(i, "matchesSelector")],
                z = function (e, t) {
                    return U.call(e, t)
                };
            typeof Sizzle == "function" && (q = function (e, t) {
                return Sizzle(e, t)[0] || null
            }, R = function (e, t) {
                return Sizzle.uniqueSort(Sizzle(e, t))
            }, z = Sizzle.matchesSelector), e.selection = function () {
                return ct
            };
            var W = e.selection.prototype = [];
            W.select = function (e) {
                var t = [],
                    n, r, i, s;
                e = X(e);
                for (var o = -1, u = this.length; ++o < u;) {
                    t.push(n = []), n.parentNode = (i = this[o]).parentNode;
                    for (var a = -1, f = i.length; ++a < f;)(s = i[a]) ? (n.push(r = e.call(s, s.__data__, a, o)), r && "__data__" in s && (r.__data__ = s.__data__)) : n.push(null)
                }
                return I(t)
            }, W.selectAll = function (e) {
                var t = [],
                    r, i;
                e = V(e);
                for (var s = -1, o = this.length; ++s < o;)
                    for (var u = this[s], a = -1, f = u.length; ++a < f;)
                        if (i = u[a]) t.push(r = n(e.call(i, i.__data__, a, s))), r.parentNode = i;
                return I(t)
            };
            var $ = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: "http://www.w3.org/1999/xhtml",
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };
            e.ns = {
                prefix: $,
                qualify: function (e) {
                    var t = e.indexOf(":"),
                        n = e;
                    return t >= 0 && (n =
                        e.substring(0, t), e = e.substring(t + 1)), $.hasOwnProperty(n) ? {
                        space: $[n],
                        local: e
                    } : e
                }
            }, W.attr = function (t, n) {
                if (arguments.length < 2) {
                    if (typeof t == "string") {
                        var r = this.node();
                        return t = e.ns.qualify(t), t.local ? r.getAttributeNS(t.space, t.local) : r.getAttribute(t)
                    }
                    for (n in t) this.each(J(n, t[n]));
                    return this
                }
                return this.each(J(t, n))
            }, W.classed = function (e, t) {
                if (arguments.length < 2) {
                    if (typeof e == "string") {
                        var n = this.node(),
                            r = (e = G(e)).length,
                            i = -1;
                        if (t = n.classList) {
                            while (++i < r)
                                if (!t.contains(e[i])) return !1
                        } else {
                            t = n.getAttribute("class");
                            while (++i < r)
                                if (!Q(e[i]).test(t)) return !1
                        }
                        return !0
                    }
                    for (t in e) this.each(Y(t, e[t]));
                    return this
                }
                return this.each(Y(e, t))
            }, W.style = function (e, t, n) {
                var r = arguments.length;
                if (r < 3) {
                    if (typeof e != "string") {
                        r < 2 && (t = "");
                        for (n in e) this.each(et(n, e[n], t));
                        return this
                    }
                    if (r < 2) return s.getComputedStyle(this.node(), null).getPropertyValue(e);
                    n = ""
                }
                return this.each(et(e, t, n))
            }, W.property = function (e, t) {
                if (arguments.length < 2) {
                    if (typeof e == "string") return this.node()[e];
                    for (t in e) this.each(tt(t, e[t]));
                    return this
                }
                return this.each(tt(e, t))
            }, W.text = function (e) {
                return arguments.length ? this.each(typeof e == "function" ? function () {
                    var t = e.apply(this, arguments);
                    this.textContent = t == null ? "" : t
                } : e == null ? function () {
                    this.textContent = ""
                } : function () {
                    this.textContent = e
                }) : this.node().textContent
            }, W.html = function (e) {
                return arguments.length ? this.each(typeof e == "function" ? function () {
                    var t = e.apply(this, arguments);
                    this.innerHTML = t == null ? "" : t
                } : e == null ? function () {
                    this.innerHTML = ""
                } : function () {
                    this.innerHTML = e
                }) : this.node().innerHTML
            }, W.append = function (e) {
                return e = nt(e), this.select(function () {
                    return this.appendChild(e.apply(this, arguments))
                })
            }, W.insert = function (e, t) {
                return e = nt(e), t = X(t), this.select(function () {
                    return this.insertBefore(e.apply(this, arguments), t.apply(this, arguments) || null)
                })
            }, W.remove = function () {
                return this.each(function () {
                    var e = this.parentNode;
                    e && e.removeChild(this)
                })
            }, W.data = function (e, t) {
                function o(e, n) {
                    var r, i = e.length,
                        s = n.length,
                        o = Math.min(i, s),
                        l = new Array(s),
                        c = new Array(s),
                        h = new Array(i),
                        p, d;
                    if (t) {
                        var v = new b,
                            m = new b,
                            g = [],
                            y;
                        for (r = -1; ++r < i;) y = t.call(p = e[r], p.__data__, r), v.has(y) ? h[r] = p : v.set(y, p), g.push(y);
                        for (r = -1; ++r < s;) y = t.call(n, d = n[r], r), (p = v.get(y)) ? (l[r] = p, p.__data__ = d) : m.has(y) || (c[r] = rt(d)), m.set(y, d), v.remove(y);
                        for (r = -1; ++r < i;) v.has(g[r]) && (h[r] = e[r])
                    } else {
                        for (r = -1; ++r < o;) p = e[r], d = n[r], p ? (p.__data__ = d, l[r] = p) : c[r] = rt(d);
                        for (; r < s; ++r) c[r] = rt(n[r]);
                        for (; r < i; ++r) h[r] = e[r]
                    }
                    c.update = l, c.parentNode = l.parentNode = h.parentNode = e.parentNode, u.push(c), a.push(l), f.push(h)
                }
                var n = -1,
                    r = this.length,
                    i, s;
                if (!arguments.length) {
                    e = new Array(r = (i = this[0]).length);
                    while (++n < r)
                        if (s = i[n]) e[n] = s.__data__;
                    return e
                }
                var u = ut([]),
                    a = I([]),
                    f = I([]);
                if (typeof e == "function")
                    while (++n < r) o(i = this[n], e.call(i, i.parentNode.__data__, n));
                else
                    while (++n < r) o(i = this[n], e);
                return a.enter = function () {
                    return u
                }, a.exit = function () {
                    return f
                }, a
            }, W.datum = function (e) {
                return arguments.length ? this.property("__data__", e) : this.property("__data__")
            }, W.filter = function (e) {
                var t = [],
                    n, r, i;
                typeof e != "function" && (e = it(e));
                for (var s = 0, o = this.length; s < o; s++) {
                    t.push(n = []), n.parentNode = (r = this[s]).parentNode;
                    for (var u = 0, a = r.length; u < a; u++)(i = r[u]) && e.call(i, i.__data__, u, s) && n.push(i)
                }
                return I(t)
            }, W.order = function () {
                for (var e = -1, t = this.length; ++e < t;)
                    for (var n = this[e], r = n.length - 1, i = n[r], s; --r >= 0;)
                        if (s = n[r]) i && i !== s.nextSibling && i.parentNode.insertBefore(s, i), i = s;
                return this
            }, W.sort = function (e) {
                e = st.apply(this, arguments);
                for (var t = -1, n = this.length; ++t < n;) this[t].sort(e);
                return this.order()
            }, W.each = function (e) {
                return ot(this, function (t, n, r) {
                    e.call(t, t.__data__, n, r)
                })
            }, W.call = function (e) {
                var t = n(arguments);
                return e.apply(t[0] = this, t), this
            }, W.empty = function () {
                return !this.node()
            }, W.node = function () {
                for (var e = 0, t = this.length; e < t; e++)
                    for (var n = this[e], r = 0, i = n.length; r < i; r++) {
                        var s = n[r];
                        if (s) return s
                    }
                return null
            }, W.size = function () {
                var e = 0;
                return this.each(function () {
                    ++e
                }), e
            };
            var at = [];
            e.selection.enter = ut, e.selection.enter.prototype = at, at.append = W.append, at.empty = W.empty, at.node = W.node, at.call = W.call, at.size = W.size, at.select = function (e) {
                var t = [],
                    n, r, i, s, o;
                for (var u = -1, a = this.length; ++u < a;) {
                    i = (s = this[u]).update, t.push(n = []), n.parentNode = s.parentNode;
                    for (var f = -1, l = s.length; ++f < l;)(o = s[f]) ? (n.push(i[f] = r = e.call(s.parentNode, o.__data__, f, u)), r.__data__ = o.__data__) : n.push(null)
                }
                return I(t)
            }, at.insert = function (e, t) {
                return arguments.length < 2 && (t = ft(this)), W.insert.call(this, e, t)
            }, W.transition = function () {
                var e = Ef || ++wf,
                    t = [],
                    n, r, i = Sf || {
                        time: Date.now(),
                        ease: Mo,
                        delay: 0,
                        duration: 250
                    };
                for (var s = -1, o = this.length; ++s < o;) {
                    t.push(n = []);
                    for (var u = this[s], a = -1, f = u.length; ++a < f;)(r = u[a]) && Nf(r, a, e, i), n.push(r)
                }
                return yf(t, e)
            }, W.interrupt = function () {
                return this.each(lt)
            }, e.select = function (e) {
                var t = [typeof e == "string" ? q(e, r) : e];
                return t.parentNode = i, I([t])
            }, e.selectAll = function (e) {
                var t = n(typeof e == "string" ? R(e, r) : e);
                return t.parentNode = i, I([t])
            };
            var ct = e.select(i);
            W.on = function (e, t, n) {
                var r = arguments.length;
                if (r < 3) {
                    if (typeof e != "string") {
                        r < 2 && (t = !1);
                        for (n in e) this.each(ht(n, e[n], t));
                        return this
                    }
                    if (r < 2) return (r = this.node()["__on" + e]) && r._;
                    n = !1
                }
                return this.each(ht(e, t, n))
            };
            var pt = e.map({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            });
            pt.forEach(function (e) {
                "on" + e in r && pt.remove(e)
            });
            var mt = "onselectstart" in r ? null : A(i.style, "userSelect"),
                gt = 0;
            e.mouse = function (e) {
                return wt(e, H())
            };
            var bt = /WebKit/.test(s.navigator.userAgent) ? -1 : 0;
            e.touches = function (e, t) {
                return arguments.length < 2 && (t = H().touches), t ? n(t).map(function (t) {
                    var n = wt(e, t);
                    return n.identifier = t.identifier, n
                }) : []
            }, e.behavior.drag = function () {
                function o() {
                    this.on("mousedown.drag", r).on("touchstart.drag", i)
                }

                function u() {
                    return e.event.changedTouches[0].identifier
                }

                function a(t, n) {
                    return e.touches(t).filter(function (e) {
                        return e.identifier === n
                    })[0]
                }

                function f(r, i, o, u) {
                    return function () {
                        function b() {
                            var e = i(f, h),
                                t = e[0] - d[0],
                                n = e[1] - d[1];
                            v |= t | n, d = e, l({
                                type: "drag",
                                x: e[0] + m[0],
                                y: e[1] + m[1],
                                dx: t,
                                dy: n
                            })
                        }

                        function w() {
                            g.on(o + "." + p, null).on(u + "." + p, null), y(v && e.event.target === c), l({
                                type: "dragend"
                            })
                        }
                        var a = this,
                            f = a.parentNode,
                            l = t.of(a, arguments),
                            c = e.
                        event.target, h = r(), p = h == null ? "drag" : "drag-" + h, d = i(f, h), v = 0, m, g = e.select(s).on(o + "." + p, b).on(u + "." + p, w), y = yt();
                        n ? (m = n.apply(a, arguments), m = [m.x - d[0], m.y - d[1]]) : m = [0, 0], l({
                            type: "dragstart"
                        })
                    }
                }
                var t = B(o, "drag", "dragstart", "dragend"),
                    n = null,
                    r = f(M, e.mouse, "mousemove", "mouseup"),
                    i = f(u, a, "touchmove", "touchend");
                return o.origin = function (e) {
                    return arguments.length ? (n = e, o) : n
                }, e.rebind(o, t, "on")
            };
            var Et = Math.PI,
                St = 2 * Et,
                xt = Et / 2,
                Tt = 1e-6,
                Nt = Tt * Tt,
                Ct = Et / 180,
                kt = 180 / Et,
                Bt = Math.SQRT2,
                jt = 2,
                Ft = 4;
            e.interpolateZoom = function (e, t) {
                function y(e) {
                    var t = e * g;
                    if (m) {
                        var s = Dt(d),
                            o = i / (jt * c) * (s * Pt(Bt * t + d) - _t(d));
                        return [n + o * a, r + o * f, i * s / Dt(Bt * t + d)]
                    }
                    return [n + e * a, r + e * f, i * Math.exp(Bt * t)]
                }
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    s = t[0],
                    o = t[1],
                    u = t[2],
                    a = s - n,
                    f = o - r,
                    l = a * a + f * f,
                    c = Math.sqrt(l),
                    h = (u * u - i * i + Ft * l) / (2 * i * jt * c),
                    p = (u * u - i * i - Ft * l) / (2 * u * jt * c),
                    d = Math.log(Math.sqrt(h * h + 1) - h),
                    v = Math.log(Math.sqrt(p * p + 1) - p),
                    m = v - d,
                    g = (m || Math.log(u / i)) / Bt;
                return y.duration = g * 1e3, y
            }, e.behavior.zoom = function () {
                function y(e) {
                    e.on(u, k).on(Rt + ".zoom", A).on(a, O).on("dblclick.zoom", M).on(c, L)
                }

                function b(e) {
                    return [(e[0] - t.x) / t.k, (e[1] - t.y) / t.k]
                }

                function w(e) {
                    return [e[0] * t.k + t.x, e[1] * t.k + t.y]
                }

                function E(e) {
                    t.k = Math.max(o[0], Math.min(o[1], e))
                }

                function S(e, n) {
                    n = w(n), t.x += e[0] - n[0], t.y += e[1] - n[1]
                }

                function x() {
                    v && v.domain(d.range().map(function (e) {
                        return (e - t.x) / t.k
                    }).map(d.invert)), g && g.domain(m.range().map(function (e) {
                        return (e - t.y) / t.k
                    }).map(m.invert))
                }

                function T(e) {
                    e({
                        type: "zoomstart"
                    })
                }

                function N(e) {
                    x(), e({
                        type: "zoom",
                        scale: t.k,
                        translate: [t.x, t.y]
                    })
                }

                function C(e) {
                    e({
                        type: "zoomend"
                    })
                }

                function k() {
                    function c() {
                        i = 1, S(e.mouse(t), u), N(n)
                    }

                    function h() {
                        o.on(a, s === t ? O : null).on(f, null), l(i && e.event.target === r), C(n)
                    }
                    var t = this,
                        n = p.of(t, arguments),
                        r = e.event.target,
                        i = 0,
                        o = e.select(s).on(a, c).on(f, h),
                        u = b(e.mouse(t)),
                        l = yt();
                    lt.call(t), T(n)
                }

                function L() {
                    function y() {
                        var r = e.touches(n);
                        return a = t.k, r.forEach(function (e) {
                            e.identifier in i && (i[e.identifier] = b(e))
                        }), r
                    }

                    function w() {
                        var n = e.event.changedTouches;
                        for (var s = 0, u = n.length; s < u; ++s) i[n[s].identifier] = null;
                        var a = y(),
                            f = Date.now();
                        if (a.length === 1) {
                            if (f - h < 500) {
                                var l = a[0],
                                    c = i[l.identifier];
                                E(t.k * 2), S(l, c), P(), N(r)
                            }
                            h = f
                        } else if (a.length > 1) {
                            var l = a[0],
                                p = a[1],
                                d = l[0] - p[0],
                                v = l[1] - p[1];
                            o = d * d + v * v
                        }
                    }

                    function x() {
                        var t = e.touches(n),
                            s, u, f, l;
                        for (var c = 0, p = t.length; c < p; ++c, l = null) {
                            f = t[c];
                            if (l = i[f.identifier]) {
                                if (u) break;
                                s = f, u = l
                            }
                        }
                        if (l) {
                            var d = (d = f[0] - s[0]) * d + (d = f[1] - s[1]) * d,
                                v = o && Math.sqrt(d / o);
                            s = [(s[0] + f[0]) / 2, (s[1] + f[1]) / 2], u = [(u[0] + l[0]) / 2, (u[1] + l[1]) / 2], E(v * a)
                        }
                        h = null, S(s, u), N(r)
                    }

                    function A() {
                        if (e.event.touches.length) {
                            var t = e.event.changedTouches;
                            for (var n = 0, s = t.length; n < s; ++n) delete i[t[n].identifier];
                            for (var o in i) return void y()
                        }
                        v.on(l, null).on(d, null), m.on(u, k).on(c, L), g(), C(r)
                    }
                    var n = this,
                        r = p.of(n, arguments),
                        i = {},
                        o = 0,
                        a, f = e.event.changedTouches[0].identifier,
                        l = "touchmove.zoom-" + f,
                        d = "touchend.zoom-" + f,
                        v = e.select(s).on(l, x).on(d, A),
                        m = e.select(n).on(u, null).on(c, w),
                        g = yt();
                    lt.call(n), w(), T(r)
                }

                function A() {
                    var i = p.of(this, arguments);
                    l ? clearTimeout(l) : (lt.call(this), T(i)), l = setTimeout(function () {
                        l = null, C(i)
                    }, 50), P();
                    var s = r || e.mouse(this);
                    n || (n = b(s)), E(Math.pow(2, qt() * .002) * t.k), S(s, n), N(i)
                }

                function O() {
                    n = null
                }

                function M() {
                    var n = p.of(this, arguments),
                        r = e.mouse(this),
                        i = b(r),
                        s = Math.log(t.k) / Math.LN2;
                    T(n), E(Math.pow(2, e.event.shiftKey ? Math.ceil(s) - 1 : Math.floor(s) + 1)), S(r, i), N(n), C(n)
                }
                var t = {
                        x: 0,
                        y: 0,
                        k: 1
                    },
                    n, r, i = [960, 500],
                    o = It,
                    u = "mousedown.zoom",
                    a = "mousemove.zoom",
                    f = "mouseup.zoom",
                    l, c = "touchstart.zoom",
                    h, p = B(y, "zoomstart", "zoom", "zoomend"),
                    d, v, m, g;
                return y.event = function (n) {
                    n.each(function () {
                        var n = p.of(this, arguments),
                            r = t;
                        Ef ? e.select(this).transition().each("start.zoom", function () {
                            t = this.__chart__ || {
                                x: 0,
                                y: 0,
                                k: 1
                            }, T(n)
                        }).tween("zoom:zoom", function () {
                            var s = i[0],
                                o = i[1],
                                u = s / 2,
                                a = o / 2,
                                f = e.interpolateZoom([(u - t.x) / t.k, (a - t.y) / t.k, s / t.k], [(u - r.x) / r.k, (a - r.y) / r.k, s / r.k]);
                            return function (e) {
                                var r = f(e),
                                    i = s / r[2];
                                this.__chart__ = t = {
                                    x: u - r[0] * i,
                                    y: a - r[1] * i,
                                    k: i
                                }, N(n)
                            }
                        }).each("end.zoom", function () {
                            C(n)
                        }) : (this.__chart__ = t, T(n), N(n), C(n))
                    })
                }, y.translate = function (e) {
                    return arguments.length ? (t = {
                        x: +e[0],
                        y: +e[1],
                        k: t.k
                    }, x(), y) : [t.x, t.y]
                }, y.scale = function (e) {
                    return arguments.length ? (t = {
                        x: t.x,
                        y: t.y,
                        k: +e
                    }, x(), y) : t.k
                }, y.scaleExtent = function (e) {
                    return arguments.length ? (o = e == null ? It : [+e[0], +e[1]], y) : o
                }, y.center = function (e) {
                    return arguments.length ? (r = e && [+e[0], +e[1]], y) : r
                }, y.size = function (e) {
                    return arguments.length ? (i = e && [+e[0], +e[1]], y) : i
                }, y.x = function (e) {
                    return arguments.length ? (v = e, d = e.copy(), t = {
                        x: 0,
                        y: 0,
                        k: 1
                    }, y) : v
                }, y.y = function (e) {
                    return arguments.length ? (g = e, m = e.copy(), t = {
                        x: 0,
                        y: 0,
                        k: 1
                    }, y) : g
                }, e.rebind(y, p, "on")
            };
            var It = [0, Infinity],
                qt, Rt = "onwheel" in r ? (qt = function () {
                    return -e.event.deltaY * (e.event.deltaMode ? 120 : 1)
                }, "wheel") : "onmousewheel" in r ? (qt = function () {
                    return e.event.wheelDelta
                }, "mousewheel") : (qt = function () {
                    return -e.event.detail
                }, "MozMousePixelScroll");
            Ut.prototype.toString = function () {
                return this.rgb() + ""
            }, e.hsl = function (e, t, n) {
                return arguments.length === 1 ? e instanceof Wt ? zt(e.h, e.s, e.l) : mn("" + e, gn, zt) : zt(+e, +t, +n)
            };
            var Xt = Wt.prototype = new Ut;
            Xt.brighter = function (e) {
                return e = Math.pow(.7, arguments.length ? e : 1), zt(this.h, this.s, this.l / e)
            }, Xt.darker = function (e) {
                return e = Math.pow(.7, arguments.length ? e : 1), zt(this.h, this.s, e * this.l)
            }, Xt.rgb = function () {
                return Vt(this.h, this.s, this.l)
            }, e.hcl = function (t, n, r) {
                return arguments.length === 1 ? t instanceof Jt ? $t(t.h, t.c, t.l) : t instanceof Yt ? on(t.l, t.a, t.b) : on((t = yn((t = e.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : $t(+t, +n, +r)
            };
            var Kt = Jt.prototype = new Ut;
            Kt.brighter = function (e) {
                return $t(this.h, this.c, Math.min(100, this.l + Zt * (arguments.length ? e : 1)))
            }, Kt.darker = function (e) {
                return $t(this.h, this.c, Math.max(0, this.l - Zt * (arguments.length ? e : 1)))
            }, Kt.rgb = function () {
                return Qt(this.h, this.c, this.l).rgb()
            }, e.lab = function (t, n, r) {
                return arguments.length === 1 ? t instanceof Yt ? Gt(t.l, t.a, t.b) : t instanceof Jt ? Qt(t.l, t.c, t.h) : yn((t = e.rgb(t)).r, t.g, t.b) : Gt(+t, +n, +r)
            };
            var Zt = 18,
                en = .95047,
                tn = 1,
                nn = 1.08883,
                rn = Yt.prototype = new Ut;
            rn.brighter = function (e) {
                return Gt(Math.min(100, this.l + Zt * (arguments.length ? e : 1)), this.a, this.b)
            }, rn.darker = function (e) {
                return Gt(Math.max(0, this.l - Zt * (arguments.length ? e : 1)), this.a, this.b)
            }, rn.rgb = function () {
                return sn(this.l, this.a, this.b)
            }, e.rgb = function (e, t, n) {
                return arguments.length === 1 ? e instanceof pn ? hn(e.r, e.g, e.b) : mn("" + e, hn, Vt) : hn(~~e, ~~t, ~~n)
            };
            var dn = pn.prototype = new Ut;
            dn.brighter = function (e) {
                e = Math.pow(.7, arguments.length ? e : 1);
                var t = this.r,
                    n = this.g,
                    r = this.b,
                    i = 30;
                return !t && !n && !r ? hn(i, i, i) : (t && t < i && (t = i), n && n < i && (n = i), r && r < i && (r = i), hn(Math.min(255, ~~(t / e)), Math.min(255, ~~(n / e)), Math.min(255, ~~(r / e))))
            }, dn.darker = function (e) {
                return e = Math.pow(.7, arguments.length ? e : 1), hn(~~(e * this.r), ~~(e * this.g), ~~(e * this.b))
            }, dn.hsl = function () {
                return gn(this.r, this.g, this.b)
            }, dn.toString = function () {
                return "#" + vn(this.r) + vn(this.g) + vn(this.b)
            };
            var En = e.map({
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            });
            En.forEach(function (e, t) {
                En.set(e, ln(t))
            }), e.functor = Sn, e.xhr = Tn(xn), e.dsv = function (e, t) {
                function i(e, n, r) {
                    arguments.length < 3 && (r = n, n = null);
                    var i = Nn(e, t, n == null ? s : o(n), r);
                    return i.row = function (e) {
                        return arguments.length ? i.response((n = e) == null ? s : o(e)) : n
                    }, i
                }

                function s(e) {
                    return i.parse(e.responseText)
                }

                function o(e) {
                    return function (t) {
                        return i.parse(t.responseText, e)
                    }
                }

                function u(t) {
                    return t.map(a).join(e)
                }

                function a(e) {
                    return n.test(e) ? '"' + e.replace(/\"/g, '""') + '"' : e
                }
                var n = new RegExp('["' + e + "\n]"),
                    r = e.charCodeAt(0);
                return i.parse = function (e, t) {
                    var n;
                    return i.parseRows(e, function (e, r) {
                        if (n) return n(e, r - 1);
                        var i = new Function("d", "return {" + e.map(function (e, t) {
                            return JSON.stringify(e) + ": d[" + t + "]"
                        }).join(",") + "}");
                        n = t ? function (e, n) {
                            return t(i(e), n)
                        } : i
                    })
                }, i.parseRows = function (e, t) {
                    function c() {
                        if (u >= o) return i;
                        if (l) return l = !1, n;
                        var t = u;
                        if (e.charCodeAt(t) === 34) {
                            var s = t;
                            while (s++ < o)
                                if (e.charCodeAt(s) === 34) {
                                    if (e.charCodeAt(s + 1) !== 34) break;
                                    ++s
                                }
                            u = s + 2;
                            var a = e.charCodeAt(s + 1);
                            return a === 13 ? (l = !0, e.charCodeAt(s + 2) === 10 && ++u) : a === 10 && (l = !0), e.substring(t + 1, s).replace(/""/g, '"')
                        }
                        while (u < o) {
                            var a = e.charCodeAt(u++),
                                f = 1;
                            if (a === 10) l = !0;
                            else if (a === 13) l = !0, e.charCodeAt(u) === 10 && (++u, ++f);
                            else if (a !== r) continue;
                            return e.substring(t, u - f)
                        }
                        return e.substring(t)
                    }
                    var n = {},
                        i = {},
                        s = [],
                        o = e.length,
                        u = 0,
                        a = 0,
                        f, l;
                    while ((f = c()) !== i) {
                        var h = [];
                        while (f !== n && f !== i) h.push(f), f = c();
                        if (t && !(h = t(h, a++))) continue;
                        s.push(h)
                    }
                    return s
                }, i.format = function (t) {
                    if (Array.isArray(t[0])) return i.formatRows(t);
                    var n = new k,
                        r = [];
                    return t.forEach(function (e) {
                        for (var t in e) n.has(t) || r.push(n.add(t))
                    }), [r.map(a).join(e)].concat(t.map(function (t) {
                        return r.map(function (e) {
                            return a(t[e])
                        }).join(e)
                    })).join("\n")
                }, i.formatRows = function (e) {
                    return e.map(u).join("\n")
                }, i
            }, e.csv = e.dsv(",", "text/csv"), e.tsv = e.dsv(" ", "text/tab-separated-values");
            var kn, Ln, An, On, Mn, _n = s[A(s, "requestAnimationFrame")] || function (e) {
                setTimeout(e, 17)
            };
            e.timer = function (e, t, n) {
                var r = arguments.length;
                r < 2 && (t = 0), r < 3 && (n = Date.now());
                var i = n + t,
                    s = {
                        c: e,
                        t: i,
                        f: !1,
                        n: null
                    };
                Ln ? Ln.n = s : kn = s, Ln = s, An || (On = clearTimeout(On), An = 1, _n(Dn))
            }, e.timer.flush = function () {
                Pn(), Hn()
            }, e.round = function (e, t) {
                return t ? Math.round(e * (t = Math.pow(10, t))) / t : Math.round(e)
            };
            var jn = ["y", "z", "a", "f", "p", "n", "\u00b5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Fn);
            e.formatPrefix = function (t, n) {
                var r = 0;
                return t && (t < 0 && (t *= -1), n && (t = e.round(t, Bn(t, n))), r = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), r = Math.max(-24, Math.min(24, Math.floor((r <= 0 ? r + 1 : r - 1) / 3) * 3))), jn[8 + r / 3]
            };
            var qn = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
                Rn = e.map({
                    b: function (e) {
                        return e.toString(2)
                    },
                    c: function (e) {
                        return String.fromCharCode(e)
                    },
                    o: function (e) {
                        return e.toString(8)
                    },
                    x: function (e) {
                        return e.toString(16)
                    },
                    X: function (e) {
                        return e.toString(16).toUpperCase()
                    },
                    g: function (e, t) {
                        return e.toPrecision(t)
                    },
                    e: function (e, t) {
                        return e.toExponential(t)
                    },
                    f: function (e, t) {
                        return e.toFixed(t)
                    },
                    r: function (t, n) {
                        return (t = e.round(t, Bn(t, n))).toFixed(Math.max(0, Math.min(20, Bn(t * (1 + 1e-15), n))))
                    }
                }),
                zn = e.time = {},
                Wn = Date;
            Xn.prototype = {
                getDate: function () {
                    return this._.getUTCDate()
                },
                getDay: function () {
                    return this._.getUTCDay()
                },
                getFullYear: function () {
                    return this._.getUTCFullYear()
                },
                getHours: function () {
                    return this._.getUTCHours()
                },
                getMilliseconds: function () {
                    return this._.getUTCMilliseconds()
                },
                getMinutes: function () {
                    return this._.getUTCMinutes()
                },
                getMonth: function () {
                    return this._.getUTCMonth()
                },
                getSeconds: function () {
                    return this._.getUTCSeconds()
                },
                getTime: function () {
                    return this._.getTime()
                },
                getTimezoneOffset: function () {
                    return 0
                },
                valueOf: function () {
                    return this._.valueOf()
                },
                setDate: function () {
                    Vn.setUTCDate.apply(this._, arguments)
                },
                setDay: function () {
                    Vn.setUTCDay.apply(this._, arguments)
                },
                setFullYear: function () {
                    Vn.setUTCFullYear.apply(this._, arguments)
                },
                setHours: function () {
                    Vn.setUTCHours.apply(this._, arguments)
                },
                setMilliseconds: function () {
                    Vn.setUTCMilliseconds.apply(this._, arguments)
                },
                setMinutes: function () {
                    Vn.setUTCMinutes.apply(this._, arguments)
                },
                setMonth: function () {
                    Vn.setUTCMonth.apply(this._, arguments)
                },
                setSeconds: function () {
                    Vn.setUTCSeconds.apply(this._, arguments)
                },
                setTime: function () {
                    Vn.setTime.apply(this._, arguments)
                }
            };
            var Vn = Date.prototype;
            zn.year = $n(function (e) {
                return e = zn.day(e), e.setMonth(0, 1), e
            }, function (e, t) {
                e.setFullYear(e.getFullYear() + t)
            }, function (e) {
                return e.getFullYear()
            }), zn.years = zn.year.range, zn.years.utc = zn.year.utc.range, zn.day = $n(function (e) {
                var t = new Wn(2e3, 0);
                return t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), t
            }, function (e, t) {
                e.setDate(e.getDate() + t)
            }, function (e) {
                return e.getDate() - 1
            }), zn.days = zn.day.range, zn.days.utc = zn.day.utc.range, zn.dayOfYear = function (e) {
                var t = zn.year(e);
                return Math.floor((e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5)
            }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (e, t) {
                t = 7 - t;
                var n = zn[e] = $n(function (e) {
                    return (e = zn.day(e)).setDate(e.getDate() - (e.getDay() + t) % 7), e
                }, function (e, t) {
                    e.setDate(e.getDate() + Math.floor(t) * 7)
                }, function (e) {
                    var n = zn.year(e).getDay();
                    return Math.floor((zn.dayOfYear(e) + (n + t) % 7) / 7) - (n !== t)
                });
                zn[e + "s"] = n.range, zn[e + "s"].utc = n.utc.range, zn[e + "OfYear"] = function (e) {
                    var n = zn.year(e).getDay();
                    return Math.floor((zn.dayOfYear(e) + (n + t) % 7) / 7)
                }
            }), zn.week = zn.sunday, zn.weeks = zn.sunday.range, zn.weeks.utc = zn.sunday.utc.range, zn.weekOfYear = zn.sundayOfYear;
            var Qn = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                Gn = /^\s*\d+/,
                Yn = /^%/;
            e.locale = function (e) {
                return {
                    numberFormat: In(e),
                    timeFormat: Kn(e)
                }
            };
            var br = e.locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""],
                dateTime: "%a %b %e %X %Y",
                date: "%m/%d/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });
            e.format = br.numberFormat, e.geo = {}, wr.prototype = {
                s: 0,
                t: 0,
                add: function (e) {
                    Sr(e, this.t, Er), Sr(Er.s, this.s, this), this.s ? this.t += Er.t : this.s = Er.t
                },
                reset: function () {
                    this.s = this.t = 0
                },
                valueOf: function () {
                    return this.s
                }
            };
            var Er = new wr;
            e.geo.stream = function (e, t) {
                e && Tr.hasOwnProperty(e.type) ? Tr[e.type](e, t) : xr(e, t)
            };
            var Tr = {
                    Feature: function (e, t) {
                        xr(e.geometry, t)
                    },
                    FeatureCollection: function (e, t) {
                        var n = e.features,
                            r = -1,
                            i = n.length;
                        while (++r < i) xr(n[r].geometry, t)
                    }
                },
                Nr = {
                    Sphere: function (e, t) {
                        t.sphere()
                    },
                    Point: function (e, t) {
                        e = e.coordinates, t.point(e[0], e[1], e[2])
                    },
                    MultiPoint: function (e, t) {
                        var n = e.coordinates,
                            r = -1,
                            i = n.length;
                        while (++r < i) e = n[r], t.point(e[0], e[1], e[2])
                    },
                    LineString: function (e, t) {
                        Cr(e.coordinates, t, 0)
                    },
                    MultiLineString: function (e, t) {
                        var n = e.coordinates,
                            r = -1,
                            i = n.length;
                        while (++r < i) Cr(n[r], t, 0)
                    },
                    Polygon: function (e, t) {
                        kr(e.coordinates, t)
                    },
                    MultiPolygon: function (e, t) {
                        var n = e.coordinates,
                            r = -1,
                            i = n.length;
                        while (++r < i) kr(n[r], t)
                    },
                    GeometryCollection: function (e, t) {
                        var n = e.geometries,
                            r = -1,
                            i = n.length;
                        while (++r < i) xr(n[r], t)
                    }
                };
            e.geo.area = function (t) {
                return Lr = 0, e.geo.stream(t, Or), Lr
            };
            var Lr, Ar = new wr,
                Or = {
                    sphere: function () {
                        Lr += 4 * Et
                    },
                    point: M,
                    lineStart: M,
                    lineEnd: M,
                    polygonStart: function () {
                        Ar.reset(), Or.lineStart = Mr
                    },
                    polygonEnd: function () {
                        var e = 2 * Ar;
                        Lr += e < 0 ? 4 * Et + e : e, Or.lineStart = Or.lineEnd = Or.point = M
                    }
                };
            e.geo.bounds = function () {
                function p(e, s) {
                    l.push(c = [t = e, r = e]), s < n && (n = s), s > i && (i = s)
                }

                function d(e, o) {
                    var u = _r([e * Ct, o * Ct]);
                    if (a) {
                        var f = Pr(a, u),
                            l = [f[1], -f[0], 0],
                            c = Pr(l, f);
                        jr(c), c = Fr(c);
                        var h = e - s,
                            d = h > 0 ? 1 : -1,
                            v = c[0] * kt * d,
                            g = m(h) > 180;
                        if (g ^ (d * s < v && v < d * e)) {
                            var y = c[1] * kt;
                            y > i && (i = y)
                        } else if (v = (v + 360) % 360 - 180, g ^ (d * s < v && v < d * e)) {
                            var y = -c[1] * kt;
                            y < n && (n = y)
                        } else o < n && (n = o), o > i && (i = o);
                        g ? e < s ? E(t, e) > E(t, r) && (r = e) : E(e, r) > E(t, r) && (t = e) : r >= t ? (e < t && (t = e), e > r && (r = e)) : e > s ? E(t, e) > E(t, r) && (r = e) : E(e, r) > E(t, r) && (t = e)
                    } else p(e, o);
                    a = u, s = e
                }

                function v() {
                    h.point = d
                }

                function g() {
                    c[0] = t, c[1] = r, h.point = p, a = null
                }

                function y(e, t) {
                    if (a) {
                        var n = e - s;
                        f += m(n) > 180 ? n + (n > 0 ? 360 : -360) : n
                    } else o = e, u = t;
                    Or.point(e, t), d(e, t)
                }

                function b() {
                    Or.lineStart()
                }

                function w() {
                    y(o, u), Or.lineEnd(), m(f) > Tt && (t = -(r = 180)), c[0] = t, c[1] = r, a = null
                }

                function E(e, t) {
                    return (t -= e) < 0 ? t + 360 : t
                }

                function S(e, t) {
                    return e[0] - t[0]
                }

                function x(e, t) {
                    return t[0] <= t[1] ? t[0] <= e && e <= t[1] : e < t[0] || t[1] < e
                }
                var t, n, r, i, s, o, u, a, f, l, c, h = {
                    point: p,
                    lineStart: v,
                    lineEnd: g,
                    polygonStart: function () {
                        h.point = y, h.lineStart = b, h.lineEnd = w, f = 0, Or.polygonStart()
                    },
                    polygonEnd: function () {
                        Or.polygonEnd(), h.point = p, h.lineStart = v, h.lineEnd = g, Ar < 0 ? (t = -(r = 180), n = -(i = 90)) : f > Tt ? i = 90 : f < -Tt && (n = -90), c[0] = t, c[1] = r
                    }
                };
                return function (s) {
                    i = r = -(t = n = Infinity), l = [], e.geo.stream(s, h);
                    var o = l.length;
                    if (o) {
                        l.sort(S);
                        for (var u = 1, a = l[0], f, p = [a]; u < o; ++u) f = l[u], x(f[0], a) || x(f[1], a) ? (E(a[0], f[1]) > E(a[0], a[1]) && (a[1] = f[1]), E(f[0], a[1]) > E(a[0], a[1]) && (a[0] = f[0])) : p.push(a =
                            f);
                        var d = -Infinity,
                            v;
                        for (var o = p.length - 1, u = 0, a = p[o], f; u <= o; a = f, ++u) f = p[u], (v = E(a[1], f[0])) > d && (d = v, t = f[0], r = a[1])
                    }
                    return l = c = null, t === Infinity || n === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[t, n], [r, i]]
                }
            }(), e.geo.centroid = function (t) {
                qr = Rr = Ur = zr = Wr = Xr = Vr = $r = Jr = Kr = Qr = 0, e.geo.stream(t, Gr);
                var n = Jr,
                    r = Kr,
                    i = Qr,
                    s = n * n + r * r + i * i;
                if (s < Nt) {
                    n = Xr, r = Vr, i = $r, Rr < Tt && (n = Ur, r = zr, i = Wr), s = n * n + r * r + i * i;
                    if (s < Nt) return [NaN, NaN]
                }
                return [Math.atan2(r, n) * kt, Mt(i / Math.sqrt(s)) * kt]
            };
            var qr, Rr, Ur, zr, Wr, Xr, Vr, $r, Jr, Kr, Qr, Gr = {
                    sphere: M,
                    point: Yr,
                    lineStart: ei,
                    lineEnd: ti,
                    polygonStart: function () {
                        Gr.lineStart = ni
                    },
                    polygonEnd: function () {
                        Gr.lineStart = ei
                    }
                },
                hi = ui(ri, pi, vi, [-Et, -Et / 2]),
                yi = 1e9;
            e.geo.clipExtent = function () {
                var e, t, n, r, i, s, o = {
                    stream: function (e) {
                        return i && (i.valid = !1), i = s(e), i.valid = !0, i
                    },
                    extent: function (u) {
                        return arguments.length ? (s = bi(e = +u[0][0], t = +u[0][1], n = +u[1][0], r = +u[1][1]), i && (i.valid = !1, i = null), o) : [[e, t], [n, r]]
                    }
                };
                return o.extent([[0, 0], [960, 500]])
            }, (e.geo.conicEqualArea = function () {
                return Ei(Si)
            }).raw = Si, e.geo.albers = function () {
                return e.geo.conicEqualArea().rotate([96, 0]).center([-0.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
            }, e.geo.albersUsa = function () {
                function f(e) {
                    var t = e[0],
                        n = e[1];
                    return i = null, (o(t, n), i) || (u(t, n), i) || a(t, n), i
                }
                var t = e.geo.albers(),
                    n = e.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    r = e.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                    i, s = {
                        point: function (e, t) {
                            i = [e, t]
                        }
                    },
                    o, u, a;
                return f.invert = function (e) {
                    var i = t.scale(),
                        s = t.translate(),
                        o = (e[0] - s[0]) / i,
                        u = (e[1] - s[1]) / i;
                    return (u >= .12 && u < .234 && o >= -0.425 && o < -0.214 ? n : u >= .166 && u < .234 && o >= -0.214 && o < -0.115 ? r : t).invert(e)
                }, f.stream = function (e) {
                    var i = t.stream(e),
                        s = n.stream(e),
                        o = r.stream(e);
                    return {
                        point: function (e, t) {
                            i.point(e, t), s.point(e, t), o.point(e, t)
                        },
                        sphere: function () {
                            i.sphere(), s.sphere(), o.sphere()
                        },
                        lineStart: function () {
                            i.lineStart(), s.lineStart(), o.lineStart()
                        },
                        lineEnd: function () {
                            i.lineEnd(), s.lineEnd(), o.lineEnd()
                        },
                        polygonStart: function () {
                            i.polygonStart(), s.polygonStart(), o.polygonStart()
                        },
                        polygonEnd: function () {
                            i.polygonEnd(), s.polygonEnd(), o.polygonEnd()
                        }
                    }
                }, f.precision = function (e) {
                    return arguments.length ? (t.precision(e), n.precision(e), r.precision(e), f) : t.precision()
                }, f.scale = function (e) {
                    return arguments.length ? (t.scale(e), n.scale(e * .35), r.scale(e), f.translate(t.translate())) : t.scale()
                }, f.translate = function (e) {
                    if (!arguments.length) return t.translate();
                    var i = t.scale(),
                        l = +e[0],
                        c = +e[1];
                    return o = t.translate(e).clipExtent([[l - .455 * i, c - .238 * i], [l + .455 * i, c + .238 * i]]).stream(s).point, u = n.translate([l - .307 * i, c + .201 * i]).clipExtent([[l - .425 * i + Tt, c + .12 * i + Tt], [l - .214 * i - Tt, c + .234 * i - Tt]]).stream(s).point, a = r.translate([l - .205 * i, c + .212 * i]).clipExtent([[l - .214 * i + Tt, c + .166 * i + Tt], [l - .115 * i - Tt, c + .234 * i - Tt]]).stream(s).point, f
                }, f.scale(1070)
            };
            var xi, Ti, Ni = {
                    point: M,
                    lineStart: M,
                    lineEnd: M,
                    polygonStart: function () {
                        Ti = 0, Ni.lineStart = Ci
                    },
                    polygonEnd: function () {
                        Ni.lineStart = Ni.lineEnd = Ni.point = M, xi += m(Ti / 2)
                    }
                },
                ki, Li, Ai, Oi, Mi = {
                    point: _i,
                    lineStart: M,
                    lineEnd: M,
                    polygonStart: M,
                    polygonEnd: M
                },
                Hi = {
                    point: Bi,
                    lineStart: ji,
                    lineEnd: Fi,
                    polygonStart: function () {
                        Hi.lineStart = Ii
                    },
                    polygonEnd: function () {
                        Hi.point = Bi, Hi.lineStart = ji, Hi.lineEnd = Fi
                    }
                };
            e.geo.path = function () {
                function u(n) {
                    if (n) {
                        typeof t == "function" && s.pointRadius(+t.apply(this, arguments));
                        if (!o || !o.valid) o = i(s);
                        e.geo.stream(n, o)
                    }
                    return s.result()
                }

                function a() {
                    return o = null, u
                }
                var t = 4.5,
                    n, r, i, s, o;
                return u.area = function (t) {
                    return xi = 0, e.geo.stream(t, i(Ni)), xi
                }, u.centroid = function (t) {
                    return Ur = zr = Wr = Xr = Vr = $r = Jr = Kr = Qr = 0, e.geo.stream(t, i(Hi)), Qr ? [Jr / Qr, Kr / Qr] : $r ? [Xr / $r, Vr / $r] : Wr ? [Ur / Wr, zr / Wr] : [NaN, NaN]
                }, u.bounds = function (t) {
                    return Ai = Oi = -(ki = Li = Infinity), e.geo.stream(t, i(Mi)), [[ki, Li], [Ai, Oi]]
                }, u.projection = function (e) {
                    return arguments.length ? (i = (n = e) ? e.stream || Ui(e) : xn, a()) : n
                }, u.context = function (e) {
                    return arguments.length ? (s = (r = e) == null ? new Di : new qi(e), typeof t != "function" && s.pointRadius(t), a()) : r
                }, u.pointRadius = function (e) {
                    return arguments.length ? (t = typeof e == "function" ? e : (s.pointRadius(+e), +e), u) : t
                }, u.projection(e.geo.albersUsa()).context(null)
            }, e.geo.transform = function (e) {
                return {
                    stream: function (t) {
                        var n = new zi(t);
                        for (var r in e) n[r] = e[r];
                        return n
                    }
                }
            }, zi.prototype = {
                point: function (e, t) {
                    this.stream.point(e, t)
                },
                sphere: function () {
                    this.stream.sphere()
                },
                lineStart: function () {
                    this.stream.lineStart()
                },
                lineEnd: function () {
                    this.stream.lineEnd()
                },
                polygonStart: function () {
                    this.stream.polygonStart()
                },
                polygonEnd: function () {
                    this.stream.polygonEnd()
                }
            }, e.geo.projection = Xi, e.geo.projectionMutator = Vi, (e.geo.equirectangular = function () {
                return Xi(Ji)
            }).raw = Ji.invert = Ji, e.geo.rotation = function (e) {
                function t(t) {
                    return t = e(t[0] * Ct, t[1] * Ct), t[0] *= kt, t[1] *= kt, t
                }
                return e = Qi(e[0] % 360 * Ct, e[1] * Ct, e.length > 2 ? e[2] * Ct : 0), t.invert = function (t) {
                    return t = e.invert(t[0] * Ct, t[1] * Ct), t[0] *= kt, t[1] *= kt, t
                }, t
            }, Ki.invert = Ji, e.geo.circle = function () {
                function i() {
                    var t = typeof e == "function" ? e.apply(this, arguments) : e,
                        n = Qi(-t[0] * Ct, -t[1] * Ct, 0).invert,
                        i = [];
                    return r(null, null, 1, {
                        point: function (e, t) {
                            i.push(e = n(e, t)), e[0] *= kt, e[1] *= kt
                        }
                    }), {
                        type: "Polygon",
                        coordinates: [i]
                    }
                }
                var e = [0, 0],
                    t, n = 6,
                    r;
                return i.origin = function (t) {
                    return arguments.length ? (e = t, i) : e
                }, i.angle = function (e) {
                    return arguments.length ? (r = es((t = +e) * Ct, n * Ct), i) : t
                }, i.precision = function (e) {
                    return arguments.length ? (r = es(t * Ct, (n = +e) * Ct), i) : n
                }, i.angle(90)
            }, e.geo.distance = function (e, t) {
                var n = (t[0] - e[0]) * Ct,
                    r = e[1] * Ct,
                    i = t[1] * Ct,
                    s = Math.sin(n),
                    o = Math.cos(n),
                    u = Math.sin(r),
                    a = Math.cos(r),
                    f = Math.sin(i),
                    l = Math.cos(i),
                    c;
                return Math.atan2(Math.sqrt((c = l * s) * c + (c = a * f - u * l * o) * c), u * f + a * l * o)
            }, e.geo.graticule = function () {
                function b() {
                    return {
                        type: "MultiLineString",
                        coordinates: w()
                    }
                }

                function w() {
                    return e.range(Math.ceil(i / c) * c, r, c).map(v).concat(e.range(Math.ceil(a / h) * h, u, h).map(g)).concat(e.range(Math.ceil(n / f) * f, t, f).filter(function (e) {
                        return m(e % c) > Tt
                    }).map(p)).concat(e.range(Math.ceil(o / l) * l, s, l).filter(function (e) {
                        return m(e % h) > Tt
                    }).map(d))
                }
                var t, n, r, i, s, o, u, a, f = 10,
                    l = f,
                    c = 90,
                    h = 360,
                    p, d, v, g, y = 2.5;
                return b.lines = function () {
                    return w().map(function (e) {
                        return {
                            type: "LineString",
                            coordinates: e
                        }
                    })
                }, b.outline = function () {
                    return {
                        type: "Polygon",
                        coordinates: [v(i).concat(g(u).slice(1), v(r).reverse().slice(1), g(a).reverse().slice(1))]
                    }
                }, b.extent = function (e) {
                    return arguments.length ? b.majorExtent(e).minorExtent(e) : b.minorExtent()
                }, b.majorExtent = function (e) {
                    return arguments.length ? (i = +e[0][0], r = +e[1][0], a = +e[0][1], u = +e[1][1], i > r && (e = i, i = r, r = e), a > u && (e = a, a = u, u = e), b.precision(y)) : [[i, a], [r, u]]
                }, b.minorExtent = function (e) {
                    return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], s = +e[1][1], n > t && (e = n, n = t, t = e), o > s && (e = o, o = s, s = e), b.precision(y)) : [[n, o], [t, s]]
                }, b.step = function (e) {
                    return arguments.length ? b.majorStep(e).minorStep(e) : b.minorStep()
                }, b.majorStep = function (e) {
                    return arguments.length ? (c = +e[0], h = +e[1], b) : [c, h]
                }, b.minorStep = function (e) {
                    return arguments.length ? (f = +e[0], l = +e[1], b) : [f, l]
                }, b.precision = function (e) {
                    return arguments.length ? (y = +e, p = ns(o, s, 90), d = rs(n, t, y), v = ns(a, u, 90), g = rs(i, r, y), b) : y
                }, b.majorExtent([[-180, -90 + Tt], [180, 90 - Tt]]).minorExtent([[-180, -80 - Tt], [180, 80 + Tt]])
            }, e.geo.greatArc = function () {
                function s() {
                    return {
                        type: "LineString",
                        coordinates: [n || t.apply(this, arguments), i || r.apply(this, arguments)]
                    }
                }
                var t = is,
                    n, r = ss,
                    i;
                return s.distance = function () {
                    return e.geo.distance(n || t.apply(this, arguments), i || r.apply(this, arguments))
                }, s.source = function (e) {
                    return arguments.length ? (t = e, n = typeof e == "function" ? null : e, s) : t
                }, s.target = function (e) {
                    return arguments.length ? (r = e, i = typeof e == "function" ? null : e, s) : r
                }, s.precision = function () {
                    return arguments.length ? s : 0
                }, s
            }, e.geo.interpolate = function (e, t) {
                return os(e[0] * Ct, e[1] * Ct, t[0] * Ct, t[1] * Ct)
            }, e.geo.length = function (t) {
                return us = 0, e.geo.stream(t, as), us
            };
            var us, as = {
                    sphere: M,
                    point: M,
                    lineStart: fs,
                    lineEnd: M,
                    polygonStart: M,
                    polygonEnd: M
                },
                cs = ls(function (e) {
                    return Math.sqrt(2 / (1 + e))
                }, function (e) {
                    return 2 * Math.asin(e / 2)
                });
            (e.geo.azimuthalEqualArea = function () {
                return Xi(cs)
            }).raw = cs;
            var hs = ls(function (e) {
                var t = Math.acos(e);
                return t && t / Math.sin(t)
            }, xn);
            (e.geo.azimuthalEquidistant = function () {
                return Xi(hs)
            }).raw = hs, (e.geo.conicConformal = function () {
                return Ei(ps)
            }).raw = ps, (e.geo.conicEquidistant = function () {
                return Ei(ds)
            }).raw = ds;
            var vs = ls(function (e) {
                return 1 / e
            }, Math.atan);
            (e.geo.gnomonic = function () {
                return Xi(vs)
            }).raw = vs, ms.invert = function (e, t) {
                return [e, 2 * Math.atan(Math.exp(t)) - xt]
            }, (e.geo.mercator = function () {
                return gs(ms)
            }).raw = ms;
            var ys = ls(function () {
                return 1
            }, Math.asin);
            (e.geo.orthographic = function () {
                return Xi(ys)
            }).raw = ys;
            var bs = ls(function (e) {
                return 1 / (1 + e)
            }, function (e) {
                return 2 * Math.atan(e)
            });
            (e.geo.stereographic = function () {
                return Xi(bs)
            }).raw = bs, ws.invert = function (e, t) {
                return [-t, 2 * Math.atan(Math.exp(e)) - xt]
            }, (e.geo.transverseMercator = function () {
                var e = gs(ws),
                    t = e.center,
                    n = e.rotate;
                return e.center = function (e) {
                    return e ? t([-e[1], e[0]]) : (e = t(), [-e[1], e[0]])
                }, e.rotate = function (e) {
                    return e ? n([e[0], e[1], e.length > 2 ? e[2] + 90 : 90]) : (e = n(), [e[0], e[1], e[2] - 90])
                }, e.rotate([0, 0])
            }).raw = ws, e.geom = {}, e.geom.hull = function (e) {
                function r(e) {
                    if (e.length < 3) return [];
                    var r = Sn(t),
                        i = Sn(n),
                        s, o = e.length,
                        u = [],
                        a = [];
                    for (s = 0; s < o; s++) u.push([+r.call(this, e[s], s), +i.call(this, e[s], s), s]);
                    u.sort(Ts);
                    for (s = 0; s < o; s++) a.push([u[s][0], -u[s][1]]);
                    var f = xs(u),
                        l = xs(a),
                        c = l[0] === f[0],
                        h = l[l.length - 1] === f[f.length - 1],
                        p = [];
                    for (s = f.length - 1; s >= 0; --s) p.push(e[u[f[s]][2]]);
                    for (s = +c; s < l.length - h; ++s) p.push(e[u[l[s]][2]]);
                    return p
                }
                var t = Es,
                    n = Ss;
                return arguments.length ? r(e) : (r.x = function (e) {
                    return arguments.length ? (t = e, r) : t
                }, r.y = function (e) {
                    return arguments.length ? (n = e, r) : n
                }, r)
            }, e.geom.polygon = function (e) {
                return F(e, Ns), e
            };
            var Ns = e.geom.polygon.prototype = [];
            Ns.area = function () {
                var e = -1,
                    t = this.length,
                    n, r = this[t - 1],
                    i = 0;
                while (++e < t) n = r, r = this[e], i += n[1] * r[0] - n[0] * r[1];
                return i * .5
            }, Ns.centroid = function (e) {
                var t = -1,
                    n = this.length,
                    r = 0,
                    i = 0,
                    s, o = this[n - 1],
                    u;
                arguments.length || (e = -1 / (6 * this.area()));
                while (++t < n) s = o, o = this[t], u = s[0] * o[1] - o[0] * s[1], r += (s[0] + o[0]) * u, i += (s[1] + o[1]) * u;
                return [r * e, i * e]
            }, Ns.clip = function (e) {
                var t, n = Ls(e),
                    r = -1,
                    i = this.length - Ls(this),
                    s, o, u = this[i - 1],
                    a, f, l;
                while (++r < i) {
                    t = e.slice(), e.length = 0, a = this[r], f = t[(o = t.length - n) - 1], s = -1;
                    while (++s < o) l = t[s], Cs(l, u, a) ? (Cs(f, u, a) || e.push(ks(f, l, u, a)), e.push(l)) : Cs(f, u, a) && e.push(ks(f, l, u, a)), f = l;
                    n && e.push(e[0]), u = a
                }
                return e
            };
            var As, Os, Ms, _s = [],
                Ds, Ps, Hs = [];
            zs.prototype.prepare = function () {
                var e = this.edges,
                    t = e.length,
                    n;
                while (t--) n = e[t].edge, (!n.b || !n.a) && e.splice(t, 1);
                return e.sort(Xs), e.length
            }, to.prototype = {
                start: function () {
                    return this.edge.l === this.site ? this.edge.a : this.edge.b
                },
                end: function () {
                    return this.edge.l === this.site ? this.edge.b : this.edge.a
                }
            }, no.prototype = {
                insert: function (e, t) {
                    var n, r, i;
                    if (e) {
                        t.P = e, t.N = e.N, e.N && (e.N.P = t), e.N = t;
                        if (e.R) {
                            e = e.R;
                            while (e.L) e = e.L;
                            e.L = t
                        } else e.R = t;
                        n = e
                    } else this._ ? (e = oo(this._), t.P = null, t.N = e, e.P = e.L = t, n = e) : (t.P = t.N = null, this._ = t, n = null);
                    t.L = t.R = null, t.U = n, t.C = !0, e = t;
                    while (n && n.C) r = n.U, n === r.L ? (i = r.R, i && i.C ? (n.C = i.C = !1, r.C = !0, e = r) : (e === n.R && (io(this, n), e = n, n = e.U), n.C = !1, r.C = !0, so(this, r))) : (i = r.L, i && i.C ? (n.C = i.C = !1, r.C = !0, e = r) : (e === n.L && (so(this, n), e = n, n = e.U), n.C = !1, r.C = !0, io(this, r))), n = e.U;
                    this._.C = !1
                },
                remove: function (e) {
                    e.N && (e.N.P = e.P), e.P && (e.P.N = e.N), e.N = e.P = null;
                    var t = e.U,
                        n, r = e.L,
                        i = e.R,
                        s, o;
                    r ? i ? s = oo(i) : s = r : s = i, t ? t.L === e ? t.L = s : t.R = s : this._ = s, r && i ? (o = s.C, s.C = e.C, s.L = r, r.U = s, s !== i ? (t = s.U, s.U = e.U, e = s.R, t.L = e, s.R = i, i.U = s) : (s.U = t, t = s, e = s.R)) : (o = e.C, e = s), e && (e.U = t);
                    if (o) return;
                    if (e && e.C) {
                        e.C = !1;
                        return
                    }
                    do {
                        if (e === this._) break;
                        if (e === t.L) {
                            n = t.R, n.C && (n.C = !1, t.C = !0, io(this, t), n = t.R);
                            if (n.L && n.L.C || n.R && n.R.C) {
                                if (!n.R || !n.R.C) n.L.C = !1, n.C = !0, so(this, n), n = t.R;
                                n.C = t.C, t.C = n.R.C = !1, io(this, t), e = this._;
                                break
                            }
                        } else {
                            n = t.L, n.C && (n.C = !1, t.C = !0, so(this, t), n = t.L);
                            if (n.L && n.L.C || n.R && n.R.C) {
                                if (!n.L || !n.L.C) n.R.C = !1, n.C = !0, io(this, n), n = t.L;
                                n.C = t.C, t.C = n.L.C = !1, so(this, t), e = this._;
                                break
                            }
                        }
                        n.C = !0, e = t, t = t.U
                    } while (!e.C);
                    e && (e.C = !1)
                }
            }, e.geom.voronoi = function (e) {
                function o(e) {
                    var t = new Array(e.length),
                        n = s[0][0],
                        r = s[0][1],
                        i = s[1][0],
                        o = s[1][1];
                    return uo(u(e), s).cells.forEach(function (s, u) {
                        var a = s.edges,
                            f = s.site,
                            l = t[u] = a.length ? a.map(function (e) {
                                var t = e.start();
                                return [t.x, t.y]
                            }) : f.x >= n && f.x <= i && f.y >= r && f.y <= o ? [[n, o], [i, o], [i, r], [n, r]] : [];
                        l.point = e[u]
                    }), t
                }

                function u(e) {
                    return e.map(function (e, t) {
                        return {
                            x: Math.round(r(e, t) / Tt) * Tt,
                            y: Math.round(i(e, t) / Tt) * Tt,
                            i: t
                        }
                    })
                }
                var t = Es,
                    n = Ss,
                    r = t,
                    i = n,
                    s = fo;
                return e ? o(e) : (o.links = function (e) {
                    return uo(u(e)).edges.filter(function (e) {
                        return e.l && e.r
                    }).map(function (t) {
                        return {
                            source: e[t.l.i],
                            target: e[t.r.i]
                        }
                    })
                }, o.triangles = function (e) {
                    var t = [];
                    return uo(u(e)).cells.forEach(function (n, r) {
                        var i = n.site,
                            s = n.edges.sort(Xs),
                            o = -1,
                            u = s.length,
                            a, f, l = s[u - 1].edge,
                            c = l.l === i ? l.r : l.l;
                        while (++o < u) a = l, f = c, l = s[o].edge, c = l.l === i ? l.r : l.l, r < f.i && r < c.i && lo(i, f, c) < 0 && t.push([e[r], e[f.i], e[c.i]])
                    }), t
                }, o.x = function (e) {
                    return arguments.length ? (r = Sn(t = e), o) : t
                }, o.y = function (e) {
                    return arguments.length ? (i = Sn(n = e), o) : n
                }, o.clipExtent = function (e) {
                    return arguments.length ? (s = e == null ? fo : e, o) : s === fo ? null : s
                }, o.size = function (e) {
                    return arguments.length ? o.clipExtent(e && [[0, 0], e]) : s === fo ? null : s && s[1]
                }, o)
            };
            var fo = [[-1e6, -1e6], [1e6, 1e6]];
            e.geom.delaunay = function (t) {
                return e.geom.voronoi().triangles(t)
            }, e.geom.quadtree = function (e, t, n, r, i) {
                function a(e) {
                    function T(e, t, n, r, i, s, o, u) {
                        if (isNaN(n) || isNaN(r)) return;
                        if (e.leaf) {
                            var a = e.x,
                                f = e.y;
                            if (a != null)
                                if (m(a - n) + m(f - r) < .01) N(e, t, n, r, i, s, o, u);
                                else {
                                    var l = e.point;
                                    e.x = e.y = e.point = null, N(e, l, a, f, i, s, o, u), N(e, t, n, r, i, s, o, u)
                                }
                            else e.x = n, e.y = r, e.point = t
                        } else N(e, t, n, r, i, s, o, u)
                    }

                    function N(e, t, n, r, i, s, o, u) {
                        var a = (i + o) * .5,
                            f = (s + u) * .5,
                            l = n >= a,
                            c = r >= f,
                            h = (c << 1) + l;
                        e.leaf = !1, e = e.nodes[h] || (e.nodes[h] = po()), l ? i = a : o = a, c ? s = f : u = f, T(e, t, n, r, i, s, o, u)
                    }
                    var a, f = Sn(s),
                        l = Sn(o),
                        c, h, p, d, v, g, y, b;
                    if (t != null) v = t, g = n, y = r, b = i;
                    else {
                        y = b = -(v = g = Infinity), c = [], h = [], d = e.length;
                        if (u)
                            for (p = 0; p < d; ++p) a = e[p], a.x < v && (v = a.x), a.y < g && (g = a.y), a.x > y && (y = a.x), a.y > b && (b = a.y), c.push(a.x), h.push(a.y);
                        else
                            for (p = 0; p < d; ++p) {
                                var w = +f(a = e[p], p),
                                    E = +l(a, p);
                                w < v && (v = w), E < g && (g = E), w > y && (y = w), E > b && (b = E), c.push(w), h.push(E)
                            }
                    }
                    var S = y - v,
                        x = b - g;
                    S > x ? b = g + S : y = v + x;
                    var C = po();
                    C.add = function (e) {
                        T(C, e, +f(e, ++p), +l(e, p), v, g, y, b)
                    }, C.visit = function (e) {
                        vo(e, C, v, g, y, b)
                    }, p = -1;
                    if (t == null) {
                        while (++p < d) T(C, e[p], c[p], h[p], v, g, y, b);
                        --p
                    } else e.forEach(C.add);
                    return c = h = e = a = null, C
                }
                var s = Es,
                    o = Ss,
                    u;
                return (u = arguments.length) ? (s = co, o = ho, u === 3 && (i = n, r = t, n = t = 0), a(e)) : (a.x = function (e) {
                    return arguments.length ? (s = e, a) : s
                }, a.y = function (e) {
                    return arguments.length ? (o = e, a) : o
                }, a.extent = function (e) {
                    return arguments.length ? (e == null ? t = n = r = i = null : (t = +e[0][0], n = +e[0][1], r = +e[1][0], i = +e[1][1]), a) : t == null ? null : [[t, n], [r, i]]
                }, a.size = function (e) {
                    return arguments.length ? (e == null ? t = n = r = i = null : (t = n = 0, r = +e[0], i = +e[1]), a) : t == null ? null : [r - t, i - n]
                }, a)
            }, e.interpolateRgb = mo, e.interpolateObject = go, e.interpolateNumber = yo, e.interpolateString = bo;
            var wo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
            e.interpolate = Eo, e.interpolators = [function (e, t) {
                var n = typeof t;
                return (n === "string" ? En.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? mo : bo : t instanceof Ut ? mo : n === "object" ? Array.isArray(t) ? So : go : yo)(e, t)
            }], e.interpolateArray = So;
            var xo = function () {
                    return xn
                },
                To = e.map({
                    linear: xo,
                    poly: _o,
                    quad: function () {
                        return Ao
                    },
                    cubic: function () {
                        return Oo
                    },
                    sin: function () {
                        return Do
                    },
                    exp: function () {
                        return Po
                    },
                    circle: function () {
                        return Ho
                    },
                    elastic: Bo,
                    back: jo,
                    bounce: function () {
                        return Fo
                    }
                }),
                No = e.map({
                    "in": xn,
                    out: ko,
                    "in-out": Lo,
                    "out-in": function (e) {
                        return Lo(ko(e))
                    }
                });
            e.ease = function (e) {
                var n = e.indexOf("-"),
                    r = n >= 0 ? e.substring(0, n) : e,
                    i = n >= 0 ? e.substring(n + 1) : "in";
                return r = To.get(r) || xo, i = No.get(i) || xn, Co(i(r.apply(null, t.call(arguments, 1))))
            }, e.interpolateHcl = Io, e.interpolateHsl = qo, e.interpolateLab = Ro, e.interpolateRound = Uo, e.transform = function (t) {
                var n = r.createElementNS(e.ns.prefix.svg, "g");
                return (e.transform = function (e) {
                    if (e != null) {
                        n.setAttribute("transform", e);
                        var t = n.transform.baseVal.consolidate()
                    }
                    return new zo(t ? t.matrix : $o)
                })(t)
            }, zo.prototype.toString = function () {
                return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
            };
            var $o = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            e.interpolateTransform = Jo, e.layout = {}, e.layout.bundle = function () {
                return function (e) {
                    var t = [],
                        n = -1,
                        r = e.length;
                    while (++n < r) t.push(Go(e[n]));
                    return t
                }
            }, e.layout.chord = function () {
                function l() {
                    var t = {},
                        l = [],
                        h = e.range(s),
                        p = [],
                        d, v, m, g, y;
                    n = [], r = [], d = 0, g = -1;
                    while (++g < s) {
                        v = 0, y = -1;
                        while (++y < s) v += i[g][y];
                        l.push(v), p.push(e.range(s)), d += v
                    }
                    u && h.sort(function (e, t) {
                        return u(l[e], l[t])
                    }), a && p.forEach(function (e, t) {
                        e.sort(function (e, n) {
                            return a(i[t][e], i[t][n])
                        })
                    }), d = (St - o * s) / d, v = 0, g = -1;
                    while (++g < s) {
                        m = v, y = -1;
                        while (++y < s) {
                            var b = h[g],
                                w = p[b][y],
                                E = i[b][w],
                                S = v,
                                x = v += E * d;
                            t[b + "-" + w] = {
                                index: b,
                                subindex: w,
                                startAngle: S,
                                endAngle: x,
                                value: E
                            }
                        }
                        r[b] = {
                            index: b,
                            startAngle: m,
                            endAngle: v,
                            value: (v - m) / d
                        }, v += o
                    }
                    g = -1;
                    while (++g < s) {
                        y = g - 1;
                        while (++y < s) {
                            var T = t[g + "-" + y],
                                N = t[y + "-" + g];
                            (T.value || N.value) && n.push(T.value < N.value ? {
                                source: N,
                                target: T
                            } : {
                                source: T,
                                target: N
                            })
                        }
                    }
                    f && c()
                }

                function c() {
                    n.sort(function (e, t) {
                        return f((e.source.value + e.target.value) / 2, (t.source.value + t.target.value) / 2)
                    })
                }
                var t = {},
                    n, r, i, s, o = 0,
                    u, a, f;
                return t.matrix = function (e) {
                    return arguments.length ? (s = (i = e) && i.length, n = r = null, t) : i
                }, t.padding = function (e) {
                    return arguments.length ? (o = e, n = r = null, t) : o
                }, t.sortGroups = function (e) {
                    return arguments.length ? (u = e, n = r = null, t) : u
                }, t.sortSubgroups = function (e) {
                    return arguments.length ? (a = e, n = null, t) : a
                }, t.sortChords = function (e) {
                    return arguments.length ? (f = e, n && c(), t) : f
                }, t.chords = function () {
                    return n || l(), n
                }, t.groups = function () {
                    return r || l(), r
                }, t
            }, e.layout.force = function () {
                function y(e) {
                    return function (t, n, r, i) {
                        if (t.point !== e) {
                            var s = t.cx - e.x,
                                o = t.cy - e.y,
                                u = i - n,
                                a = s * s + o * o;
                            if (u * u / h < a) {
                                if (a < l) {
                                    var f = t.charge / a;
                                    e.px -= s * f, e.py -= o * f
                                }
                                return !0
                            }
                            if (t.point && a && a < l) {
                                var f = t.pointCharge / a;
                                e.px -= s * f, e.py -= o * f
                            }
                        }
                        return !t.charge
                    }
                }

                function b(n) {
                    n.px = e.event.x, n.py = e.event.y, t.resume()
                }
                var t = {},
                    n = e.dispatch("start", "tick", "end"),
                    r = [1, 1],
                    i, s, o = .9,
                    u = su,
                    a = ou,
                    f = -30,
                    l = uu,
                    c = .1,
                    h = .64,
                    p = [],
                    d = [],
                    v, m, g;
                return t.tick = function () {
                    if ((s *= .99) < .005) return n.end({
                        type: "end",
                        alpha: s = 0
                    }), !0;
                    var t = p.length,
                        i = d.length,
                        u, a, l, h, b, w, E, S, x;
                    for (a = 0; a < i; ++a) {
                        l = d[a], h = l.source, b = l.target, S = b.x - h.x, x = b.y - h.y;
                        if (w = S * S + x * x) w = s * m[a] * ((w = Math.sqrt(w)) - v[a]) / w, S *= w, x *= w, b.x -= S * (E = h.weight / (b.weight + h.weight)), b.y -= x * E, h.x += S * (E = 1 - E), h.y += x * E
                    }
                    if (E = s * c) {
                        S = r[0] / 2, x = r[1] / 2, a = -1;
                        if (E)
                            while (++a < t) l = p[a], l.x += (S - l.x) * E, l.y += (x - l.y) * E
                    }
                    if (f) {
                        iu(u = e.geom.quadtree(p), s, g), a = -1;
                        while (++a < t)(l = p[a]).fixed || u.visit(y(l))
                    }
                    a = -1;
                    while (++a < t) l = p[a], l.fixed ? (l.x = l.px, l.y = l.py) : (l.x -= (l.px - (l.px = l.x)) * o, l.y -= (l.py - (l.py = l.y)) * o);
                    n.tick({
                        type: "tick",
                        alpha: s
                    })
                }, t.nodes = function (e) {
                    return arguments.length ? (p = e, t) : p
                }, t.links = function (e) {
                    return arguments.length ? (d = e, t) : d
                }, t.size = function (e) {
                    return arguments.length ? (r = e, t) : r
                }, t.linkDistance = function (e) {
                    return arguments.length ? (u = typeof e == "function" ? e : +e, t) : u
                }, t.distance = t.linkDistance, t.linkStrength = function (e) {
                    return arguments.length ? (a = typeof e == "function" ? e : +e, t) : a
                }, t.friction = function (e) {
                    return arguments.length ? (o = +e, t) : o
                }, t.charge = function (e) {
                    return arguments.length ? (f = typeof e == "function" ? e : +e, t) : f
                }, t.chargeDistance = function (e) {
                    return arguments.length ? (l = e * e, t) : Math.sqrt(l)
                }, t.gravity = function (e) {
                    return arguments.length ? (c = +e, t) : c
                }, t.theta = function (e) {
                    return arguments.length ? (h = e * e, t) : Math.sqrt(h)
                }, t.alpha = function (r) {
                    return arguments.length ? (r = +r, s ? r > 0 ? s = r : s = 0 : r > 0 && (n.start({
                        type: "start",
                        alpha: s = r
                    }), e.timer(t.tick)), t) : s
                }, t.start = function () {
                    function h(t, r) {
                        if (!l) {
                            l = new Array(n);
                            for (o = 0; o < n; ++o) l[o] = [];
                            for (o = 0; o < u; ++o) {
                                var i = d[o];
                                l[i.source.index].push(i.target), l[i.target.index].push(i.source)
                            }
                        }
                        var s = l[e],
                            o = -1,
                            u = s.length,
                            a;
                        while (++o < u)
                            if (!isNaN(a = s[o][t])) return a;
                        return Math.random() * r
                    }
                    var e, n = p.length,
                        i = d.length,
                        s = r[0],
                        o = r[1],
                        l, c;
                    for (e = 0; e < n; ++e)(c = p[e]).index = e, c.weight = 0;
                    for (e = 0; e < i; ++e) c = d[e], typeof c.source == "number" && (c.source = p[c.source]), typeof c.target == "number" && (c.target = p[c.target]), ++c.source.weight, ++c.target.weight;
                    for (e = 0; e < n; ++e) c = p[e], isNaN(c.x) && (c.x = h("x", s)), isNaN(c.y) && (c.y = h("y", o)), isNaN(c.px) && (c.px = c.x), isNaN(c.py) && (c.py = c.y);
                    v = [];
                    if (typeof u == "function")
                        for (e = 0; e < i; ++e) v[e] = +u.call(this, d[e], e);
                    else
                        for (e = 0; e < i; ++e) v[e] = u;
                    m = [];
                    if (typeof a == "function")
                        for (e = 0; e < i; ++e) m[e] = +a.call(this, d[e], e);
                    else
                        for (e = 0; e < i; ++e) m[e] = a;
                    g = [];
                    if (typeof f == "function")
                        for (e = 0; e < n; ++e) g[e] = +f.call(this, p[e], e);
                    else
                        for (e = 0; e < n; ++e) g[e] = f;
                    return t.resume()
                }, t.resume = function () {
                    return t.alpha(.1)
                }, t.stop = function () {
                    return t.alpha(0)
                }, t.drag = function () {
                    i || (i = e.behavior.drag().origin(xn).on("dragstart.force", eu).on("drag.force", b).on("dragend.force", tu));
                    if (!arguments.length) return i;
                    this.on("mouseover.force", nu).on("mouseout.force", ru).call(i)
                }, e.rebind(t, n, "on")
            };
            var su = 20,
                ou = 1,
                uu = Infinity;
            e.layout.hierarchy = function () {
                function r(i, o, u) {
                    var a = t.call(s, i, o);
                    i.depth = o, u.push(i);
                    if (a && (l = a.length)) {
                        var f = -1,
                            l, c = i.children = new Array(l),
                            h = 0,
                            p = o + 1,
                            d;
                        while (++f < l) d = c[f] = r(a[f], p, u), d.parent = i, h += d.value;
                        e && c.sort(e), n && (i.value = h)
                    } else delete i.children, n && (i.value = +n.call(s, i, o) || 0);
                    return i
                }

                function i(e, t) {
                    var r = e.children,
                        o = 0;
                    if (r && (a = r.length)) {
                        var u = -1,
                            a, f = t + 1;
                        while (++u < a) o += i(r[u], f)
                    } else n && (o = +n.call(s, e, t) || 0);
                    return n && (e.value = o), o
                }

                function s(e) {
                    var t = [];
                    return r(e, 0, t), t
                }
                var e = cu,
                    t = fu,
                    n = lu;
                return s.sort = function (t) {
                    return arguments.length ? (e = t, s) : e
                }, s.children = function (e) {
                    return arguments.length ? (t = e, s) : t
                }, s.value = function (e) {
                    return arguments.length ? (n = e, s) : n
                }, s.revalue = function (e) {
                    return i(e, 0), e
                }, s
            }, e.layout.partition = function () {
                function r(e, t, n, i) {
                    var s = e.children;
                    e.x = t, e.y = e.depth * i, e.dx = n, e.dy = i;
                    if (s && (u = s.length)) {
                        var o = -1,
                            u, a, f;
                        n = e.value ? n / e.value : 0;
                        while (++o < u) r(a = s[o], t, f = a.value * n, i), t += f
                    }
                }

                function i(e) {
                    var t = e.children,
                        n = 0;
                    if (t && (s = t.length)) {
                        var r = -1,
                            s;
                        while (++r < s) n = Math.max(n, i(t[r]))
                    }
                    return 1 + n
                }

                function s(e, s) {
                    var o = t.call(this, e, s);
                    return r(o[0], 0, n[0], n[1] / i(o[0])), o
                }
                var t = e.layout.hierarchy(),
                    n = [1, 1];
                return s.size = function (e) {
                    return arguments.length ? (n = e, s) : n
                }, au(s, t)
            }, e.layout.pie = function () {
                function s(o) {
                    var u = o.map(function (e, n) {
                            return +t.call(s, e, n)
                        }),
                        a = +(typeof r == "function" ? r.apply(this, arguments) : r),
                        f = ((typeof i == "function" ? i.apply(this, arguments) : i) - a) / e.sum(u),
                        l = e.range(o.length);
                    n != null && l.sort(n === pu ? function (e, t) {
                        return u[t] - u[e]
                    } : function (e, t) {
                        return n(o[e], o[t])
                    });
                    var c = [];
                    return l.forEach(function (e) {
                        var t;
                        c[e] = {
                            data: o[e],
                            value: t = u[e],
                            startAngle: a,
                            endAngle: a += t * f
                        }
                    }), c
                }
                var t = Number,
                    n = pu,
                    r = 0,
                    i = St;
                return s.value = function (e) {
                    return arguments.length ? (t = e, s) : t
                }, s.sort = function (e) {
                    return arguments.length ? (n = e, s) : n
                }, s.startAngle = function (e) {
                    return arguments.length ? (r = e, s) : r
                }, s.endAngle = function (e) {
                    return arguments.length ? (i = e, s) : i
                }, s
            };
            var pu = {};
            e.layout.stack = function () {
                function u(a, f) {
                    var l = a.map(function (e, n) {
                            return t.call(u, e, n)
                        }),
                        c = l.map(function (e) {
                            return e.map(function (e, t) {
                                return [s.call(u, e, t), o.call(u, e, t)]
                            })
                        }),
                        h = n.call(u, c, f);
                    l = e.permute(l, h), c = e.permute(c, h);
                    var p = r.call(u, c, f),
                        d = l.length,
                        v = l[0].length,
                        m, g, y;
                    for (g = 0; g < v; ++g) {
                        i.call(u, l[0][g], y = p[g], c[0][g][1]);
                        for (m = 1; m < d; ++m) i.call(u, l[m][g], y += c[m - 1][g][1], c[m][g][1])
                    }
                    return a
                }
                var t = xn,
                    n = bu,
                    r = wu,
                    i = mu,
                    s = du,
                    o = vu;
                return u.values = function (e) {
                    return arguments.length ? (t = e, u) : t
                }, u.order = function (e) {
                    return arguments.length ? (n = typeof e == "function" ? e : gu.get(e) || bu, u) : n
                }, u.offset = function (e) {
                    return arguments.length ? (r = typeof e == "function" ? e : yu.get(e) || wu, u) : r
                }, u.x = function (e) {
                    return arguments.length ? (s = e, u) : s
                }, u.y = function (e) {
                    return arguments.length ? (o = e, u) : o
                }, u.out = function (e) {
                    return arguments.length ? (i = e, u) : i
                }, u
            };
            var gu = e.map({
                    "inside-out": function (t) {
                        var n = t.length,
                            r, i, s = t.map(Eu),
                            o = t.map(Su),
                            u = e.range(n).sort(function (e, t) {
                                return s[e] - s[t]
                            }),
                            a = 0,
                            f = 0,
                            l = [],
                            c = [];
                        for (r = 0; r < n; ++r) i = u[r], a < f ? (a += o[i], l.push(i)) : (f += o[i], c.push(i));
                        return c.reverse().concat(l)
                    },
                    reverse: function (t) {
                        return e.range(t.length).reverse()
                    },
                    "default": bu
                }),
                yu = e.map({
                    silhouette: function (e) {
                        var t = e.length,
                            n = e[0].length,
                            r = [],
                            i = 0,
                            s, o, u, a = [];
                        for (o = 0; o < n; ++o) {
                            for (s = 0, u = 0; s < t; s++) u += e[s][o][1];
                            u > i && (i = u), r.push(u)
                        }
                        for (o = 0; o < n; ++o) a[o] = (i - r[o]) / 2;
                        return a
                    },
                    wiggle: function (e) {
                        var t = e.length,
                            n = e[0],
                            r = n.length,
                            i, s, o, u, a, f, l, c, h, p = [];
                        p[0] = c = h = 0;
                        for (s = 1; s < r; ++s) {
                            for (i = 0, u = 0; i < t; ++i) u += e[i][s][1];
                            for (i = 0, a = 0, l = n[s][0] - n[s - 1][0]; i < t; ++i) {
                                for (o = 0, f = (e[i][s][1] - e[i][s - 1][1]) / (2 * l); o < i; ++o) f += (e[o][s][1] - e[o][s - 1][1]) / l;
                                a += f * e[i][s][1]
                            }
                            p[s] = c -= u ? a / u * l : 0, c < h && (h = c)
                        }
                        for (s = 0; s < r; ++s) p[s] -= h;
                        return p
                    },
                    expand: function (e) {
                        var t = e.length,
                            n = e[0].length,
                            r = 1 / t,
                            i, s, o, u = [];
                        for (s = 0; s < n; ++s) {
                            for (
                                i = 0, o = 0; i < t; i++) o += e[i][s][1];
                            if (o)
                                for (i = 0; i < t; i++) e[i][s][1] /= o;
                            else
                                for (i = 0; i < t; i++) e[i][s][1] = r
                        }
                        for (s = 0; s < n; ++s) u[s] = 0;
                        return u
                    },
                    zero: wu
                });
            e.layout.histogram = function () {
                function s(s, o) {
                    var u = [],
                        a = s.map(n, this),
                        f = r.call(this, a, o),
                        l = i.call(this, f, a, o),
                        c, o = -1,
                        h = a.length,
                        p = l.length - 1,
                        d = t ? 1 : 1 / h,
                        v;
                    while (++o < p) c = u[o] = [], c.dx = l[o + 1] - (c.x = l[o]), c.y = 0;
                    if (p > 0) {
                        o = -1;
                        while (++o < h) v = a[o], v >= f[0] && v <= f[1] && (c = u[e.bisect(l, v, 1, p) - 1], c.y += d, c.push(s[o]))
                    }
                    return u
                }
                var t = !0,
                    n = Number,
                    r = Cu,
                    i = Tu;
                return s.value = function (e) {
                    return arguments.length ? (n = e, s) : n
                }, s.range = function (e) {
                    return arguments.length ? (r = Sn(e), s) : r
                }, s.bins = function (e) {
                    return arguments.length ? (i = typeof e == "number" ? function (t) {
                        return Nu(t, e)
                    } : Sn(e), s) : i
                }, s.frequency = function (e) {
                    return arguments.length ? (t = !!e, s) : t
                }, s
            }, e.layout.tree = function () {
                function s(e, s) {
                    function a(e, t) {
                        var r = e.children,
                            i = e._tree;
                        if (r && (s = r.length)) {
                            var s, o = r[0],
                                u, f = o,
                                c, h = -1;
                            while (++h < s) c = r[h], a(c, u), f = l(c, u, f), u = c;
                            Hu(e);
                            var p = .5 * (o._tree.prelim + c._tree.prelim);
                            t ? (i.prelim = t._tree.prelim + n(e, t), i.mod = i.prelim - p) : i.prelim = p
                        } else t && (i.prelim = t._tree.prelim + n(e, t))
                    }

                    function f(e, t) {
                        e.x = e._tree.prelim + t;
                        var n = e.children;
                        if (n && (i = n.length)) {
                            var r = -1,
                                i;
                            t += e._tree.mod;
                            while (++r < i) f(n[r], t)
                        }
                    }

                    function l(e, t, r) {
                        if (t) {
                            var i = e,
                                s = e,
                                o = t,
                                u = e.parent.children[0],
                                a = i._tree.mod,
                                f = s._tree.mod,
                                l = o._tree.mod,
                                c = u._tree.mod,
                                h;
                            while (o = Au(o), i = Lu(i), o && i) u = Lu(u), s = Au(s), s._tree.ancestor = e, h = o._tree.prelim + l - i._tree.prelim - a + n(o, i), h > 0 && (Bu(ju(o, e, r), e, h), a += h, f += h), l += o._tree.mod, a += i._tree.mod, c += u._tree.mod, f += s._tree.mod;
                            o && !Au(s) && (s._tree.thread = o, s._tree.mod += l - f), i && !Lu(u) && (u._tree.thread = i, u._tree.mod += a - c, r = e)
                        }
                        return r
                    }
                    var o = t.call(this, e, s),
                        u = o[0];
                    Pu(u, function (e, t) {
                        e._tree = {
                            ancestor: e,
                            prelim: 0,
                            mod: 0,
                            change: 0,
                            shift: 0,
                            number: t ? t._tree.number + 1 : 0
                        }
                    }), a(u), f(u, -u._tree.prelim);
                    var c = Ou(u, _u),
                        h = Ou(u, Mu),
                        p = Ou(u, Du),
                        d = c.x - n(c, h) / 2,
                        v = h.x + n(h, c) / 2,
                        m = p.depth || 1;
                    return Pu(u, i ? function (e) {
                        e.x *= r[0], e.y = e.depth * r[1], delete e._tree
                    } : function (e) {
                        e.x = (e.x - d) / (v - d) * r[0], e.y = e.depth / m * r[1], delete e._tree
                    }), o
                }
                var t = e.layout.hierarchy().sort(null).value(null),
                    n = ku,
                    r = [1, 1],
                    i = !1;
                return s.separation = function (e) {
                    return arguments.length ? (n = e, s) : n
                }, s.size = function (e) {
                    return arguments.length ? (i = (r = e) == null, s) : i ? null : r
                }, s.nodeSize = function (e) {
                    return arguments.length ? (i = (r = e) != null, s) : i ? r : null
                }, au(s, t)
            }, e.layout.pack = function () {
                function s(e, s) {
                    var o = t.call(this, e, s),
                        u = o[0],
                        a = r[0],
                        f = r[1],
                        l = i == null ? Math.sqrt : typeof i == "function" ? i : function () {
                            return i
                        };
                    u.x = u.y = 0, Pu(u, function (e) {
                        e.r = +l(e.value)
                    }), Pu(u, Uu);
                    if (n) {
                        var c = n * (i ? 1 : Math.max(2 * u.r / a, 2 * u.r / f)) / 2;
                        Pu(u, function (e) {
                            e.r += c
                        }), Pu(u, Uu), Pu(u, function (e) {
                            e.r -= c
                        })
                    }
                    return Xu(u, a / 2, f / 2, i ? 1 : 1 / Math.max(2 * u.r / a, 2 * u.r / f)), o
                }
                var t = e.layout.hierarchy().sort(Fu),
                    n = 0,
                    r = [1, 1],
                    i;
                return s.size = function (e) {
                    return arguments.length ? (r = e, s) : r
                }, s.radius = function (e) {
                    return arguments.length ? (i = e == null || typeof e == "function" ? e : +e, s) : i
                }, s.padding = function (e) {
                    return arguments.length ? (n = +e, s) : n
                }, au(s, t)
            }, e.layout.cluster = function () {
                function s(e, s) {
                    var o = t.call(this, e, s),
                        u = o[0],
                        a, f = 0;
                    Pu(u, function (e) {
                        var t = e.children;
                        t && t.length ? (e.x = Ju(t), e.y = $u(t)) : (e.x = a ? f += n(e, a) : 0, e.y = 0, a = e)
                    });
                    var l = Ku(u),
                        c = Qu(u),
                        h = l.x - n(l, c) / 2,
                        p = c.x + n(c, l) / 2;
                    return Pu(u, i ? function (e) {
                        e.x = (e.x - u.x) * r[0], e.y = (u.y - e.y) * r[1]
                    } : function (e) {
                        e.x = (e.x - h) / (p - h) * r[0], e.y = (1 - (u.y ? e.y / u.y : 1)) * r[1]
                    }), o
                }
                var t = e.layout.hierarchy().sort(null).value(null),
                    n = ku,
                    r = [1, 1],
                    i = !1;
                return s.separation = function (e) {
                    return arguments.length ? (n = e, s) : n
                }, s.size = function (e) {
                    return arguments.length ? (i = (r = e) == null, s) : i ? null : r
                }, s.nodeSize = function (e) {
                    return arguments.length ? (i = (r = e) != null, s) : i ? r : null
                }, au(s, t)
            }, e.layout.treemap = function () {
                function l(e, t) {
                    var n = -1,
                        r = e.length,
                        i, s;
                    while (++n < r) s = (i = e[n]).value * (t < 0 ? 0 : t), i.area = isNaN(s) || s <= 0 ? 0 : s
                }

                function c(e) {
                    var t = e.children;
                    if (t && t.length) {
                        var n = s(e),
                            r = [],
                            i = t.slice(),
                            o, u = Infinity,
                            f, h = a === "slice" ? n.dx : a === "dice" ? n.dy : a === "slice-dice" ? e.depth & 1 ? n.dy : n.dx : Math.min(n.dx, n.dy),
                            v;
                        l(i, n.dx * n.dy / e.value), r.area = 0;
                        while ((v = i.length) > 0) r.push(o = i[v - 1]), r.area += o.area, a !== "squarify" || (f = p(r, h)) <= u ? (i.pop(), u = f) : (r.area -= r.pop().area, d(r, h, n, !1), h = Math.min(n.dx, n.dy), r.length = r.area = 0, u = Infinity);
                        r.length && (d(r, h, n, !0), r.length = r.area = 0), t.forEach(c)
                    }
                }

                function h(e) {
                    var t = e.children;
                    if (t && t.length) {
                        var n = s(e),
                            r = t.slice(),
                            i, o = [];
                        l(r, n.dx * n.dy / e.value), o.area = 0;
                        while (i = r.pop()) o.push(i), o.area += i.area, i.z != null && (d(o, i.z ? n.dx : n.dy, n, !r.length), o.length = o.area = 0);
                        t.forEach(h)
                    }
                }

                function p(e, t) {
                    var n = e.area,
                        r, i = 0,
                        s = Infinity,
                        o = -1,
                        u = e.length;
                    while (++o < u) {
                        if (!(r = e[o].area)) continue;
                        r < s && (s = r), r > i && (i = r)
                    }
                    return n *= n, t *= t, n ? Math.max(t * i * f / n, n / (t * s * f)) : Infinity
                }

                function d(e, t, r, i) {
                    var s = -1,
                        o = e.length,
                        u = r.x,
                        a = r.y,
                        f = t ? n(e.area / t) : 0,
                        l;
                    if (t == r.dx) {
                        if (i || f > r.dy) f = r.dy;
                        while (++s < o) l = e[s], l.x = u, l.y = a, l.dy = f, u += l.dx = Math.min(r.x + r.dx - u, f ? n(l.area / f) : 0);
                        l.z = !0, l.dx += r.x + r.dx - u, r.y += f, r.dy -= f
                    } else {
                        if (i || f > r.dx) f = r.dx;
                        while (++s < o) l = e[s], l.x = u, l.y = a, l.dx = f, a += l.dy = Math.min(r.y + r.dy - a, f ? n(l.area / f) : 0);
                        l.z = !1, l.dy += r.y + r.dy - a, r.x += f, r.dx -= f
                    }
                }

                function v(e) {
                    var n = u || t(e),
                        i = n[0];
                    return i.x = 0, i.y = 0, i.dx = r[0], i.dy = r[1], u && t.revalue(i), l([i], i.dx * i.dy / i.value), (u ? h : c)(i), o && (u = n), n
                }
                var t = e.layout.hierarchy(),
                    n = Math.round,
                    r = [1, 1],
                    i = null,
                    s = Gu,
                    o = !1,
                    u, a = "squarify",
                    f = .5 * (1 + Math.sqrt(5));
                return v.size = function (e) {
                    return arguments.length ? (r = e, v) : r
                }, v.padding = function (e) {
                    function t(t) {
                        var n = e.call(v, t, t.depth);
                        return n == null ? Gu(t) : Yu(t, typeof n == "number" ? [n, n, n, n] : n)
                    }

                    function n(t) {
                        return Yu(t, e)
                    }
                    if (!arguments.length) return i;
                    var r;
                    return s = (i = e) == null ? Gu : (r = typeof e) === "function" ? t : r === "number" ? (e = [e, e, e, e], n) : n, v
                }, v.round = function (e) {
                    return arguments.length ? (n = e ? Math.round : Number, v) : n != Number
                }, v.sticky = function (e) {
                    return arguments.length ? (o = e, u = null, v) : o
                }, v.ratio = function (e) {
                    return arguments.length ? (f = e, v) : f
                }, v.mode = function (e) {
                    return arguments.length ? (a = e + "", v) : a
                }, au(v, t)
            }, e.random = {
                normal: function (e, t) {
                    var n = arguments.length;
                    return n < 2 && (t = 1), n < 1 && (e = 0),
                        function () {
                            var n, r, i;
                            do n = Math.random() * 2 - 1, r = Math.random() * 2 - 1, i = n * n + r * r; while (!i || i > 1);
                            return e + t * n * Math.sqrt(-2 *
                                Math.log(i) / i)
                        }
                },
                logNormal: function () {
                    var t = e.random.normal.apply(e, arguments);
                    return function () {
                        return Math.exp(t())
                    }
                },
                bates: function (t) {
                    var n = e.random.irwinHall(t);
                    return function () {
                        return n() / t
                    }
                },
                irwinHall: function (e) {
                    return function () {
                        for (var t = 0, n = 0; n < e; n++) t += Math.random();
                        return t
                    }
                }
            }, e.scale = {};
            var ia = {
                floor: xn,
                ceil: xn
            };
            e.scale.linear = function () {
                return oa([0, 1], [0, 1], Eo, !1)
            };
            var ha = {
                s: 1,
                g: 1,
                p: 1,
                r: 1,
                e: 1
            };
            e.scale.log = function () {
                return va(e.scale.linear().domain([0, 1]), 10, !0, [1, 10])
            };
            var ma = e.format(".0e"),
                ga = {
                    floor: function (e) {
                        return -Math.ceil(-e)
                    },
                    ceil: function (e) {
                        return -Math.floor(-e)
                    }
                };
            e.scale.pow = function () {
                return ya(e.scale.linear(), 1, [0, 1])
            }, e.scale.sqrt = function () {
                return e.scale.pow().exponent(.5)
            }, e.scale.ordinal = function () {
                return wa([], {
                    t: "range",
                    a: [[]]
                })
            }, e.scale.category10 = function () {
                return e.scale.ordinal().range(Ea)
            }, e.scale.category20 = function () {
                return e.scale.ordinal().range(Sa)
            }, e.scale.category20b = function () {
                return e.scale.ordinal().range(xa)
            }, e.scale.category20c = function () {
                return e.scale.ordinal().range(Ta)
            };
            var Ea = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(cn),
                Sa = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(cn),
                xa = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(cn),
                Ta = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(cn);
            e.scale.quantile = function () {
                return Na([], [])
            }, e.scale.quantize = function () {
                return Ca(0, 1, [0, 1])
            }, e.scale.threshold = function () {
                return ka([.5], [0, 1])
            }, e.scale.identity = function () {
                return La([0, 1])
            }, e.svg = {}, e.svg.arc = function () {
                function i() {
                    var i = e.apply(this, arguments),
                        s = t.apply(this, arguments),
                        o = n.apply(this, arguments) + Aa,
                        u = r.apply(this, arguments) + Aa,
                        a = (u < o && (a = o, o = u, u = a), u - o),
                        f = a < Et ? "0" : "1",
                        l = Math.cos(o),
                        c = Math.sin(o),
                        h = Math.cos(u),
                        p = Math.sin(u);
                    return a >= Oa ? i ? "M0," + s + "A" + s + "," + s + " 0 1,1 0," + -s + "A" + s + "," + s + " 0 1,1 0," + s + "M0," + i + "A" + i + "," + i + " 0 1,0 0," + -i + "A" + i + "," + i + " 0 1,0 0," + i + "Z" : "M0," + s + "A" + s + "," + s + " 0 1,1 0," + -s + "A" + s + "," + s + " 0 1,1 0," + s + "Z" : i ? "M" + s * l + "," + s * c + "A" + s + "," + s + " 0 " + f + ",1 " + s * h + "," + s * p + "L" + i * h + "," + i * p + "A" + i + "," + i + " 0 " + f + ",0 " + i * l + "," + i * c + "Z" : "M" + s * l + "," + s * c + "A" + s + "," + s + " 0 " + f + ",1 " + s * h + "," + s * p + "L0,0" + "Z"
                }
                var e = Ma,
                    t = _a,
                    n = Da,
                    r = Pa;
                return i.innerRadius = function (t) {
                    return arguments.length ? (e = Sn(t), i) : e
                }, i.outerRadius = function (e) {
                    return arguments.length ? (t = Sn(e), i) : t
                }, i.startAngle = function (e) {
                    return arguments.length ? (n = Sn(e), i) : n
                }, i.endAngle = function (e) {
                    return arguments.length ? (r = Sn(e), i) : r
                }, i.centroid = function () {
                    var i = (e.apply(this, arguments) + t.apply(this, arguments)) / 2,
                        s = (n.apply(this, arguments) + r.apply(this, arguments)) / 2 + Aa;
                    return [Math.cos(s) * i, Math.sin(s) * i]
                }, i
            };
            var Aa = -xt,
                Oa = St - Tt;
            e.svg.line = function () {
                return Ha(xn)
            };
            var Ba = e.map({
                linear: ja,
                "linear-closed": Fa,
                step: Ia,
                "step-before": qa,
                "step-after": Ra,
                basis: $a,
                "basis-open": Ja,
                "basis-closed": Ka,
                bundle: Qa,
                cardinal: Wa,
                "cardinal-open": Ua,
                "cardinal-closed": za,
                monotone: of
            });
            Ba.forEach(function (e, t) {
                t.key = e, t.closed = /-closed$/.test(e)
            });
            var Ya = [0, 2 / 3, 1 / 3, 0],
                Za = [0, 1 / 3, 2 / 3, 0],
                ef = [0, 1 / 6, 2 / 3, 1 / 6];
            e.svg.line.radial = function () {
                var e = Ha(uf);
                return e.radius = e.x, delete e.x, e.angle = e.y, delete e.y, e
            }, qa.reverse = Ra, Ra.reverse = qa, e.svg.area = function () {
                return af(xn)
            }, e.svg.area.radial = function () {
                var e = af(uf);
                return e.radius = e.x, delete e.x, e.innerRadius = e.x0, delete e.x0, e.outerRadius = e.x1, delete e.x1, e.angle = e.y, delete e.y, e.startAngle = e.y0, delete e.y0, e.endAngle = e.y1, delete e.y1, e
            }, e.svg.chord = function () {
                function s(n, r) {
                    var i = o(this, e, n, r),
                        s = o(this, t, n, r);
                    return "M" + i.p0 + a(i.r, i.p1, i.a1 - i.a0) + (u(i, s) ? f(i.r, i.p1, i.r, i.p0) : f(i.r, i.p1, s.r, s.p0) + a(s.r, s.p1, s.a1 - s.a0) + f(s.r, s.p1, i.r, i.p0)) + "Z"
                }

                function o(e, t, s, o) {
                    var u = t.call(e, s, o),
                        a = n.call(e, u, o),
                        f = r.call(e, u, o) + Aa,
                        l = i.call(e, u, o) + Aa;
                    return {
                        r: a,
                        a0: f,
                        a1: l,
                        p0: [a * Math.cos(f), a * Math.sin(f)],
                        p1: [a * Math.cos(l), a * Math.sin(l)]
                    }
                }

                function u(e, t) {
                    return e.a0 == t.a0 && e.a1 == t.a1
                }

                function a(e, t, n) {
                    return "A" + e + "," + e + " 0 " + +(n > Et) + ",1 " + t
                }

                function f(e, t, n, r) {
                    return "Q 0,0 " + r
                }
                var e = is,
                    t = ss,
                    n = ff,
                    r = Da,
                    i = Pa;
                return s.radius = function (e) {
                    return arguments.length ? (n = Sn(e), s) : n
                }, s.source = function (t) {
                    return arguments.length ? (e = Sn(t), s) : e
                }, s.target = function (e) {
                    return arguments.length ? (t = Sn(e), s) : t
                }, s.startAngle = function (e) {
                    return arguments.length ? (r = Sn(e), s) : r
                }, s.endAngle = function (e) {
                    return arguments.length ? (i = Sn(e), s) : i
                }, s
            }, e.svg.diagonal = function () {
                function r(r, i) {
                    var s = e.call(this, r, i),
                        o = t.call(this, r, i),
                        u = (s.y + o.y) / 2,
                        a = [s, {
                            x: s.x,
                            y: u
                        }, {
                            x: o.x,
                            y: u
                        }, o];
                    return a = a.map(n), "M" + a[0] + "C" + a[1] + " " + a[2] + " " + a[3]
                }
                var e = is,
                    t = ss,
                    n = lf;
                return r.source = function (t) {
                    return arguments.length ? (e = Sn(t), r) : e
                }, r.target = function (e) {
                    return arguments.length ? (t = Sn(e), r) : t
                }, r.projection = function (e) {
                    return arguments.length ? (n = e, r) : n
                }, r
            }, e.svg.diagonal.radial = function () {
                var t = e.svg.diagonal(),
                    n = lf,
                    r = t.projection;
                return t.projection = function (e) {
                    return arguments.length ? r(cf(n = e)) : n
                }, t
            }, e.svg.symbol = function () {
                function n(n, r) {
                    return (vf.get(e.call(this, n, r)) || df)(t.call(this, n, r))
                }
                var e = pf,
                    t = hf;
                return n.type = function (t) {
                    return arguments.length ? (e = Sn(t), n) : e
                }, n.size = function (e) {
                    return arguments.length ? (t = Sn(e), n) : t
                }, n
            };
            var vf = e.map({
                circle: df,
                cross: function (e) {
                    var t = Math.sqrt(e / 5) / 2;
                    return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
                },
                diamond: function (e) {
                    var t = Math.sqrt(e / (2 * gf)),
                        n = t * gf;
                    return "M0," + -t + "L" + n + ",0" + " 0," + t + " " + -n + ",0" + "Z"
                },
                square: function (e) {
                    var t = Math.sqrt(e) / 2;
                    return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
                },
                "triangle-down": function (e) {
                    var t = Math.sqrt(e / mf),
                        n = t * mf / 2;
                    return "M0," + n + "L" + t + "," + -n + " " + -t + "," + -n + "Z"
                },
                "triangle-up": function (e) {
                    var t = Math.sqrt(e / mf),
                        n = t * mf / 2;
                    return "M0," + -n + "L" +
                        t + "," + n + " " + -t + "," + n + "Z"
                }
            });
            e.svg.symbolTypes = vf.keys();
            var mf = Math.sqrt(3),
                gf = Math.tan(30 * Ct),
                bf = [],
                wf = 0,
                Ef, Sf;
            bf.call = W.call, bf.empty = W.empty, bf.node = W.node, bf.size = W.size, e.transition = function (e) {
                return arguments.length ? Ef ? e.transition() : e : ct.transition()
            }, e.transition.prototype = bf, bf.select = function (e) {
                var t = this.id,
                    n = [],
                    r, i, s;
                e = X(e);
                for (var o = -1, u = this.length; ++o < u;) {
                    n.push(r = []);
                    for (var a = this[o], f = -1, l = a.length; ++f < l;)(s = a[f]) && (i = e.call(s, s.__data__, f, o)) ? ("__data__" in s && (i.__data__ = s.__data__), Nf(i, f, t, s.__transition__[t]), r.push(i)) : r.push(null)
                }
                return yf(n, t)
            }, bf.selectAll = function (e) {
                var t = this.id,
                    n = [],
                    r, i, s, o, u;
                e = V(e);
                for (var a = -1, f = this.length; ++a < f;)
                    for (var l = this[a], c = -1, h = l.length; ++c < h;)
                        if (s = l[c]) {
                            u = s.__transition__[t], i = e.call(s, s.__data__, c, a), n.push(r = []);
                            for (var p = -1, d = i.length; ++p < d;)(o = i[p]) && Nf(o, p, t, u), r.push(o)
                        }
                return yf(n, t)
            }, bf.filter = function (e) {
                var t = [],
                    n, r, i;
                typeof e != "function" && (e = it(e));
                for (var s = 0, o = this.length; s < o; s++) {
                    t.push(n = []);
                    for (var r = this[s], u = 0, a = r.length; u < a; u++)(i = r[u]) && e.call(i, i.__data__, u, s) && n.push(i)
                }
                return yf(t, this.id)
            }, bf.tween = function (e, t) {
                var n = this.id;
                return arguments.length < 2 ? this.node().__transition__[n].tween.get(e) : ot(this, t == null ? function (t) {
                    t.__transition__[n].tween.remove(e)
                } : function (r) {
                    r.__transition__[n].tween.set(e, t)
                })
            }, bf.attr = function (t, n) {
                function s() {
                    this.removeAttribute(i)
                }

                function o() {
                    this.removeAttributeNS(i.space, i.local)
                }

                function u(e) {
                    return e == null ? s : (e += "", function () {
                        var t = this.getAttribute(i),
                            n;
                        return t !== e && (n = r(t, e), function (e) {
                            this.setAttribute(i, n(e))
                        })
                    })
                }

                function a(e) {
                    return e == null ? o : (e += "", function () {
                        var t = this.getAttributeNS(i.space, i.local),
                            n;
                        return t !== e && (n = r(t, e), function (e) {
                            this.setAttributeNS(i.space, i.local, n(e))
                        })
                    })
                }
                if (arguments.length < 2) {
                    for (n in t) this.attr(n, t[n]);
                    return this
                }
                var r = t == "transform" ? Jo : Eo,
                    i = e.ns.qualify(t);
                return xf(this, "attr." + t, n, i.local ? a : u)
            }, bf.attrTween = function (t, n) {
                function i(e, t) {
                    var i = n.call(this, e, t, this.getAttribute(r));
                    return i && function (e) {
                        this.setAttribute(r, i(e))
                    }
                }

                function s(e, t) {
                    var i = n.call(this, e, t, this.getAttributeNS(r.space, r.local));
                    return i && function (e) {
                        this.setAttributeNS(r.space, r.local, i(e))
                    }
                }
                var r = e.ns.qualify(t);
                return this.tween("attr." + t, r.local ? s : i)
            }, bf.style = function (e, t, n) {
                function i() {
                    this.style.removeProperty(e)
                }

                function o(t) {
                    return t == null ? i : (t += "", function () {
                        var r = s.getComputedStyle(this, null).getPropertyValue(e),
                            i;
                        return r !== t && (i = Eo(r, t), function (t) {
                            this.style.setProperty(e, i(t), n)
                        })
                    })
                }
                var r = arguments.length;
                if (r < 3) {
                    if (typeof e != "string") {
                        r < 2 && (t = "");
                        for (n in e) this.style(n, e[n], t);
                        return this
                    }
                    n = ""
                }
                return xf(this, "style." + e, t, o)
            }, bf.styleTween = function (e, t, n) {
                function r(r, i) {
                    var o = t.call(this, r, i, s.getComputedStyle(this, null).getPropertyValue(e));
                    return o && function (t) {
                        this.style.setProperty(e, o(t), n)
                    }
                }
                return arguments.length < 3 && (n = ""), this.tween("style." + e, r)
            }, bf.text = function (e) {
                return xf(this, "text", e, Tf)
            }, bf.remove = function () {
                return this.each("end.transition", function () {
                    var e;
                    this.__transition__.count < 2 && (e = this.parentNode) && e.removeChild(this)
                })
            }, bf.ease = function (t) {
                var n = this.id;
                return arguments.length < 1 ? this.node().__transition__[n].ease : (typeof t != "function" && (t = e.ease.apply(e, arguments)), ot(this, function (e) {
                    e.__transition__[n].ease = t
                }))
            }, bf.delay = function (e) {
                var t = this.id;
                return ot(this, typeof e == "function" ? function (n, r, i) {
                    n.__transition__[t].delay = +e.call(n, n.__data__, r, i)
                } : (e = +e, function (n) {
                    n.__transition__[t].delay = e
                }))
            }, bf.duration = function (e) {
                var t = this.id;
                return ot(this, typeof e == "function" ? function (n, r, i) {
                    n.__transition__[t].duration = Math.max(1, e.call(n, n.__data__, r, i))
                } : (e = Math.max(1, e), function (n) {
                    n.__transition__[t].duration = e
                }))
            }, bf.each = function (t, n) {
                var r = this.id;
                if (arguments.length < 2) {
                    var i = Sf,
                        s = Ef;
                    Ef = r, ot(this, function (e, n, i) {
                        Sf = e.__transition__[r], t.call(e, e.__data__, n, i)
                    }), Sf = i, Ef = s
                } else ot(this, function (i) {
                    var s = i.__transition__[r];
                    (s.event || (s.event = e.dispatch("start", "end"))).on(t, n)
                });
                return this
            }, bf.transition = function () {
                var e = this.id,
                    t = ++wf,
                    n = [],
                    r, i, s, o;
                for (var u = 0, a = this.length; u < a; u++) {
                    n.push(r = []);
                    for (var i = this[u], f = 0, l = i.length; f < l; f++) {
                        if (s = i[f]) o = Object.create(s.__transition__[e]), o.delay += o.duration, Nf(s, f, t, o);
                        r.push(s)
                    }
                }
                return yf(n, t)
            }, e.svg.axis = function () {
                function f(f) {
                    f.each(function () {
                        var f = e.select(this),
                            l = this.__chart__ || t,
                            c = this.__chart__ = t.copy(),
                            h = u == null ? c.ticks ? c.ticks.apply(c, o) : c.domain() : u,
                            p = a == null ? c.tickFormat ? c.tickFormat.apply(c, o) : xn : a,
                            d = f.selectAll(".tick").data(h, c),
                            v = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Tt),
                            m = e.transition(d.exit()).style("opacity", Tt).remove(),
                            g = e.transition(d).style("opacity", 1),
                            y, b = ea(c),
                            w = f.selectAll(".domain").data([0]),
                            E = (w.enter().append("path").attr("class", "domain"), e.transition(w));
                        v.append("line"), v.append("text");
                        var S = v.select("line"),
                            x = g.select("line"),
                            T = d.select("text").text(p),
                            N = v.select("text"),
                            C = g.select("text");
                        switch (n) {
                            case "bottom":
                                y = Lf, S.attr("y2", r), N.attr("y", Math.max(r, 0) + s), x.attr("x2", 0).attr("y2", r), C.attr("x", 0).attr("y", Math.max(r, 0) + s), T.attr("dy", ".71em").style("text-anchor", "middle"), E.attr("d", "M" + b[0] + "," + i + "V0H" + b[1] + "V" + i);
                                break;
                            case "top":
                                y = Lf, S.attr("y2", -r), N.attr("y", -(Math.max(r, 0) + s)), x.attr("x2", 0).attr("y2", -r), C.attr("x", 0).attr("y", -(Math.max(r, 0) + s)), T.attr("dy", "0em").style("text-anchor", "middle"), E.attr("d", "M" + b[0] + "," + -i + "V0H" + b[1] + "V" + -i);
                                break;
                            case "left":
                                y = Af, S.attr("x2", -r), N.attr("x", -(Math.max(r, 0) + s)), x.attr("x2", -r).attr("y2", 0), C.attr("x", -(Math.max(r, 0) + s)).attr("y", 0), T.attr("dy", ".32em").style("text-anchor", "end"), E.attr("d", "M" + -i + "," + b[0] + "H0V" + b[1] + "H" + -i);
                                break;
                            case "right":
                                y = Af, S.attr("x2", r), N.attr("x", Math.max(r, 0) + s), x.attr("x2", r).attr("y2", 0), C.attr("x", Math.max(r, 0) + s).attr("y", 0), T.attr("dy", ".32em").style("text-anchor", "start"), E.attr("d", "M" + i + "," + b[0] + "H0V" + b[1] + "H" + i)
                        }
                        if (c.rangeBand) {
                            var k = c,
                                L = k.rangeBand() / 2;
                            l = c = function (e) {
                                return k(e) + L
                            }
                        } else l.rangeBand ? l = c : m.call(y, c);
                        v.call(y, l), g.call(y, c)
                    })
                }
                var t = e.scale.linear(),
                    n = Cf,
                    r = 6,
                    i = 6,
                    s = 3,
                    o = [10],
                    u = null,
                    a;
                return f.scale = function (e) {
                    return arguments.length ? (t = e, f) : t
                }, f.orient = function (e) {
                    return arguments.length ? (n = e in kf ? e + "" : Cf, f) : n
                }, f.ticks = function () {
                    return arguments.length ? (o = arguments, f) : o
                }, f.tickValues = function (e) {
                    return arguments.length ? (u = e, f) : u
                }, f.tickFormat = function (e) {
                    return arguments.length ? (a = e, f) : a
                }, f.tickSize = function (e) {
                    var t = arguments.length;
                    return t ? (r = +e, i = +arguments[t - 1], f) : r
                }, f.innerTickSize = function (e) {
                    return arguments.length ? (r = +e, f) : r
                }, f.outerTickSize = function (e) {
                    return arguments.length ? (i = +e, f) : i
                }, f.tickPadding = function (e) {
                    return arguments.length ? (s = +e, f) : s
                }, f.tickSubdivide = function () {
                    return arguments.length && f
                }, f
            };
            var Cf = "bottom",
                kf = {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1
                };
            e.svg.brush = function () {
                function h(t) {
                    t.each(function () {
                        var t = e.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", m).on("touchstart.brush", m),
                            i = t.selectAll(".background").data([0]);
                        i.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                        var s = t.selectAll(".resize").data(c, xn);
                        s.exit().remove(), s.enter().append("g").attr("class", function (e) {
                            return "resize " + e
                        }).style("cursor", function (e) {
                            return Of[e]
                        }).append("rect").attr("x", function (e) {
                            return /[ew]$/.test(e) ? -3 : null
                        }).attr("y", function (e) {
                            return /^[ns]/.test(e) ? -3 : null
                        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), s.style("display", h.empty() ? "none" : null);
                        var o = e.transition(t),
                            u = e.transition(i),
                            a;
                        n && (a = ea(n), u.attr("x", a[0]).attr("width", a[1] - a[0]), d(o)), r && (a = ea(r), u.attr("y", a[0]).attr("height", a[1] - a[0]), v(o)), p(o)
                    })
                }

                function p(e) {
                    e.selectAll(".resize").attr("transform", function (e) {
                        return "translate(" + i[+/e$/.test(e)] + "," + o[+/^s/.test(e)] + ")"
                    })
                }

                function d(e) {
                    e.select(".extent").attr("x", i[0]), e.selectAll(".extent,.n>rect,.s>rect").attr("width", i[1] - i[0])
                }

                function v(e) {
                    e.select(".extent").attr("y", o[0]), e.selectAll(".extent,.e>rect,.w>rect").attr("height", o[1] - o[0])
                }

                function m() {
                    function O() {
                        e.event.keyCode == 32 && (S || (T = null, N[0] -= i[1], N[1] -= o[1], S = 2), P())
                    }

                    function M() {
                        e.event.keyCode == 32 && S == 2 && (N[0] += i[1], N[1] += o[1], S = 0, P())
                    }

                    function _() {
                        var t = e.mouse(c),
                            s = !1;
                        C && (t[0] += C[0], t[1] += C[1]), S || (e.event.altKey ? (T || (T = [(i[0] + i[1]) / 2, (o[0] + o[1]) / 2]), N[0] = i[+(t[0] < T[0])], N[1] = o[+(t[1] < T[1])]) : T = null), w && D(t, n, 0) && (d(y), s = !0), E && D(t, r, 1) && (v(y), s = !0), s && (p(y), g({
                            type: "brush",
                            mode: S ? "move" : "resize"
                        }))
                    }

                    function D(e, t, n) {
                        var r = ea(t),
                            s = r[0],
                            c = r[1],
                            h = N[n],
                            p = n ? o : i,
                            d = p[1] - p[0],
                            v, m;
                        S && (s -= h, c -= d + h), v = (n ? l : f) ? Math.max(s, Math.min(c, e[n])) : e[n], S ? m = (v += h) + d : (T && (h = Math.max(s, Math.min(c, 2 * T[n] - v))), h < v ? (m = v, v = h) : m = h);
                        if (p[0] != v || p[1] != m) return n ? a = null : u = null, p[0] = v, p[1] = m, !0
                    }

                    function H() {
                        _(), y.style("pointer-events", "all").selectAll(".resize").style("display", h.empty() ? "none" : null), e.select("body").style("cursor", null), k.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), x(), g({
                            type: "brushend"
                        })
                    }
                    var c = this,
                        m = e.select(e.event.target),
                        g = t.of(c, arguments),
                        y = e.select(c),
                        b = m.datum(),
                        w = !/^(n|s)$/.test(b) && n,
                        E = !/^(e|w)$/.test(b) && r,
                        S = m.classed("extent"),
                        x = yt(),
                        T, N = e.mouse(c),
                        C, k = e.select(s).on("keydown.brush", O).on("keyup.brush", M);
                    e.event.changedTouches ? k.on("touchmove.brush", _).on("touchend.brush", H) : k.on("mousemove.brush", _).on("mouseup.brush", H), y.interrupt().selectAll("*").interrupt();
                    if (S) N[0] = i[0] - N[0], N[1] = o[0] - N[1];
                    else if (b) {
                        var L = +/w$/.test(b),
                            A = +/^n/.test(b);
                        C = [i[1 - L] - N[0], o[1 - A] - N[1]], N[0] = i[L], N[1] = o[A]
                    } else e.event.altKey && (T = N.slice());
                    y.style("pointer-events", "none").selectAll(".resize").style("display", null), e.select("body").style("cursor", m.style("cursor")), g({
                        type: "brushstart"
                    }), _()
                }
                var t = B(h, "brushstart", "brush", "brushend"),
                    n = null,
                    r = null,
                    i = [0, 0],
                    o = [0, 0],
                    u, a, f = !0,
                    l = !0,
                    c = Mf[0];
                return h.event = function (n) {
                    n.each(function () {
                        var n = t.of(this, arguments),
                            r = {
                                x: i,
                                y: o,
                                i: u,
                                j: a
                            },
                            s = this.__chart__ || r;
                        this.__chart__ = r, Ef ? e.select(this).transition().each("start.brush", function () {
                            u = s.i, a = s.j, i = s.x, o = s.y, n({
                                type: "brushstart"
                            })
                        }).tween("brush:brush", function () {
                            var e = So(i, r.x),
                                t = So(o, r.y);
                            return u = a = null,
                                function (s) {
                                    i = r.x = e(s), o = r.y = t(s), n({
                                        type: "brush",
                                        mode: "resize"
                                    })
                                }
                        }).each("end.brush", function () {
                            u = r.i, a = r.j, n({
                                type: "brush",
                                mode: "resize"
                            }), n({
                                type: "brushend"
                            })
                        }) : (n({
                            type: "brushstart"
                        }), n({
                            type: "brush",
                            mode: "resize"
                        }), n({
                            type: "brushend"
                        }))
                    })
                }, h.x = function (e) {
                    return arguments.length ? (n = e, c = Mf[!n << 1 | !r], h) : n
                }, h.y = function (e) {
                    return arguments.length ? (r = e, c = Mf[!n << 1 | !r], h) : r
                }, h.clamp = function (e) {
                    return arguments.length ? (n && r ? (f = !!e[0], l = !!e[1]) : n ? f = !!e : r && (l = !!e), h) : n && r ? [f, l] : n ? f : r ? l : null
                }, h.extent = function (e) {
                    var t, s, f, l, c;
                    if (!arguments.length) return n && (u ? (t = u[0], s = u[1]) : (t = i[0], s = i[1], n.invert && (t = n.invert(t), s = n.invert(s)), s < t && (c = t, t = s, s = c))), r && (a ? (f = a[0], l = a[1]) : (f = o[0], l = o[1], r.invert && (f = r.invert(f), l = r.invert(l)), l < f && (c = f, f = l, l = c))), n && r ? [[t, f], [s, l]] : n ? [t, s] : r && [f, l];
                    if (n) {
                        t = e[0], s = e[1], r && (t = t[0], s = s[0]), u = [t, s], n.invert && (t = n(t), s = n(s)), s < t && (c = t, t = s, s = c);
                        if (t != i[0] || s != i[1]) i = [t, s]
                    }
                    if (r) {
                        f = e[0], l = e[1], n && (f = f[1], l = l[1]), a = [f, l], r.invert && (f = r(f), l = r(l)), l < f && (c = f, f = l, l = c);
                        if (f != o[0] || l != o[1]) o = [f, l]
                    }
                    return h
                }, h.clear = function () {
                    return h.empty() || (i = [0, 0], o = [0, 0], u = a = null), h
                }, h.empty = function () {
                    return !!n && i[0] == i[1] || !!r && o[0] == o[1]
                }, e.rebind(h, t, "on")
            };
            var Of = {
                    n: "ns-resize",
                    e: "ew-resize",
                    s: "ns-resize",
                    w: "ew-resize",
                    nw: "nwse-resize",
                    ne: "nesw-resize",
                    se: "nwse-resize",
                    sw: "nesw-resize"
                },
                Mf = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []],
                _f = zn.format = br.timeFormat,
                Df = _f.utc,
                Pf = Df("%Y-%m-%dT%H:%M:%S.%LZ");
            _f.iso = Date.prototype.toISOString && +(new Date("2000-01-01T00:00:00.000Z")) ? Hf : Pf, Hf.parse = function (e) {
                var t = new Date(e);
                return isNaN(t) ? null : t
            }, Hf.toString = Pf.toString, zn.second = $n(function (e) {
                return new Wn(Math.floor(e / 1e3) * 1e3)
            }, function (e, t) {
                e.setTime(e.getTime() + Math.floor(t) * 1e3)
            }, function (e) {
                return e.getSeconds()
            }), zn.seconds = zn.second.range, zn.seconds.utc = zn.second.utc.range, zn.minute = $n(function (e) {
                return new Wn(Math.floor(e / 6e4) * 6e4)
            }, function (e, t) {
                e.setTime(e.getTime() + Math.floor(t) * 6e4)
            }, function (e) {
                return e.getMinutes()
            }), zn.minutes = zn.minute.range, zn.minutes.utc = zn.minute.utc.range, zn.hour = $n(function (e) {
                var t = e.getTimezoneOffset() / 60;
                return new Wn((Math.floor(e / 36e5 - t) + t) * 36e5)
            }, function (e, t) {
                e.setTime(e.getTime() + Math.floor(t) * 36e5)
            }, function (e) {
                return e.getHours()
            }), zn.hours = zn.hour.range, zn.hours.utc = zn.hour.utc.range, zn.month = $n(function (e) {
                return e = zn.day(e), e.setDate(1), e
            }, function (e, t) {
                e.setMonth(e.getMonth() + t)
            }, function (e) {
                return e.getMonth()
            }), zn.months = zn.month.range, zn.months.utc = zn.month.utc.range;
            var Ff = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
                If = [[zn.second, 1], [zn.second, 5], [zn.second, 15], [zn.second, 30], [zn.minute, 1], [zn.minute, 5], [zn.minute, 15], [zn.minute, 30], [zn.hour, 1], [zn.hour, 3], [zn.hour, 6], [zn.hour, 12], [zn.day, 1], [zn.day, 2], [zn.week, 1], [zn.month, 1], [zn.month, 3], [zn.year, 1]],
                qf = _f.multi([[".%L", function (e) {
                    return e.getMilliseconds()
                }], [":%S", function (e) {
                    return e.getSeconds()
                }], ["%I:%M", function (e) {
                    return e.getMinutes()
                }], ["%I %p", function (e) {
                    return e.getHours()
                }], ["%a %d", function (e) {
                    return e.getDay() && e.getDate() != 1
                }], ["%b %d", function (e) {
                    return e.getDate() != 1
                }], ["%B", function (e) {
                    return e.getMonth()
                }], ["%Y", ri]]),
                Rf = {
                    range: function (t, n, r) {
                        return e.range(+t, +n, r).map(jf)
                    },
                    floor: xn,
                    ceil: xn
                };
            If.year = zn.year, zn.scale = function () {
                return Bf(e.scale.linear(), If, qf)
            };
            var Uf = If.map(function (e) {
                    return [e[0].utc, e[1]]
                }),
                zf = Df.multi([[".%L", function (e) {
                    return e.getUTCMilliseconds()
                }], [":%S", function (e) {
                    return e.getUTCSeconds()
                }], ["%I:%M", function (e) {
                    return e.getUTCMinutes()
                }], ["%I %p", function (e) {
                    return e.getUTCHours()
                }], ["%a %d", function (e) {
                    return e.getUTCDay() && e.getUTCDate() != 1
                }], ["%b %d", function (e) {
                    return e.getUTCDate() != 1
                }], ["%B", function (e) {
                    return e.getUTCMonth()
                }], ["%Y", ri]]);
            Uf.year = zn.year.utc, zn.scale.utc = function () {
                return Bf(e.scale.linear(), Uf, zf)
            }, e.text = Tn(function (e) {
                return e.responseText
            }), e.json = function (e, t) {
                return Nn(e, "application/json", Wf, t)
            }, e.html = function (e, t) {
                return Nn(e, "text/html", Xf, t)
            }, e.xml = Tn(function (e) {
                return e.responseXML
            }), typeof define == "function" && define.amd ? define(e) : typeof module == "object" && module.exports ? module.exports = e : this.d3 = e
        }(),
        /*!
         * VERSION: 1.11.4
         * DATE: 2014-01-18
         * UPDATES AND DOCS AT: http://www.greensock.com
         * 
         * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
         *
         * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
         * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        function (e, t, n) {
            var r = window.matchMedia;
            typeof module != "undefined" && module.exports ? module.exports = n(r) : typeof define == "function" && define.amd ? define(function () {
                return t[e] = n(r)
            }) : t[e] = n(r)
        }("enquire", this, function (e) {
            "use strict";

            function t(e, t) {
                var n = 0,
                    r = e.length,
                    i;
                for (n; n < r; n++) {
                    i = t(e[n], n);
                    if (i === !1) break
                }
            }

            function n(e) {
                return Object.prototype.toString.apply(e) === "[object Array]"
            }

            function r(e) {
                return typeof e == "function"
            }

            function i(e) {
                this.options = e, !e.deferSetup && this.setup()
            }

            function s(t, n) {
                this.query = t, this.isUnconditional = n, this.handlers = [], this.mql = e(t);
                var r = this;
                this.listener = function (e) {
                    r.mql = e, r.assess()
                }, this.mql.addListener(this.listener)
            }

            function o() {
                if (!e) throw new Error("matchMedia not present, legacy browsers require a polyfill");
                this.queries = {}, this.browserIsIncapable = !e("only all").matches
            }
            return i.prototype = {
                setup: function () {
                    this.options.setup && this.options.setup(), this.initialised = !0
                },
                on: function () {
                    !this.initialised && this.setup(), this.options.match && this.options.match()
                },
                off: function () {
                    this.options.unmatch && this.options.unmatch()
                },
                destroy: function () {
                    this.options.destroy ? this.options.destroy() : this.off()
                },
                equals: function (e) {
                    return this.options === e || this.options.match === e
                }
            }, s.prototype = {
                addHandler: function (e) {
                    var t = new i(e);
                    this.handlers.push(t), this.matches() && t.on()
                },
                removeHandler: function (e) {
                    var n = this.handlers;
                    t(n, function (t, r) {
                        if (t.equals(e)) return t.destroy(), !n.splice(r, 1)
                    })
                },
                matches: function () {
                    return this.mql.matches || this.isUnconditional
                },
                clear: function () {
                    t(this.handlers, function (e) {
                        e.destroy()
                    }), this.mql.removeListener(this.listener), this.handlers.length = 0
                },
                assess: function () {
                    var e = this.matches() ? "on" : "off";
                    t(this.handlers, function (t) {
                        t[e]()
                    })
                }
            }, o.prototype = {
                register: function (e, i, o) {
                    var u = this.queries,
                        a = o && this.browserIsIncapable;
                    return u[e] || (u[e] = new s(e, a)), r(i) && (i = {
                        match: i
                    }), n(i) || (i = [i]), t(i, function (t) {
                        u[e].addHandler(t)
                    }), this
                },
                unregister: function (e, t) {
                    var n = this.queries[e];
                    return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
                }
            }, new o
        }),
        function () {
            var e = function () {
                "use strict";

                function y(e) {
                    return e.toUpperCase()
                }

                function b(e) {
                    return typeof e == "number" && !isNaN(e)
                }

                function w() {
                    return (new Date).getTime()
                }

                function E(e, t) {
                    var n = [];
                    for (var r = 0, i = e.length; r < i; r++) n[r] = t(e[r]);
                    return n
                }

                function S(e, t) {
                    for (var n in t) n in e || (e[n] = t[n]);
                    return e
                }

                function x(e) {
                    if (!d) {
                        var t, i = h(c.body),
                            s = n;
                        for (var o = 0, u = r.length; o < u; o++) {
                            d = r[o], t = d + s;
                            if (t in i) break;
                            d = d.replace(/^(\w)/, y), t = d + s;
                            if (t in i) break
                        }
                    }
                    return d + e
                }

                function T(e) {
                    var t = h(e),
                        r = t[x(n)].replace(/[a-z()]/gi, "").split(",");
                    if (r.length < 6) return [1, 0, 0, 1, 0, 0];
                    for (var i = 0; i < 6; i++) r[i] = parseFloat(r[i]);
                    return r
                }

                function N(e, r) {
                    var i = T(r);
                    i[0] = e.scale, i[3] = e.scale, i[4] += e.tx, i[5] += e.ty;
                    var s = E(i, function (e) {
                        return e.toFixed(6)
                    });
                    r.style[x(t)] = "0 0", r.style[x(n)] = "matrix(" + s.join(",") + ")"
                }

                function C(e, t) {
                    var n = h(t),
                        r = parseFloat(n.left) || 0,
                        i = parseFloat(n.top) || 0;
                    n.position === "static" && (t.style.position = "relative"), t.style.left = r + e.tx + f, t.style.top = i + e.ty + f, t.style.height = e.height + f, t.style.width = e.width + f
                }

                function k(e, t) {
                    var n = h(t),
                        r = parseFloat(n.marginLeft) || 0,
                        i = parseFloat(n.marginTop) || 0;
                    t.style.marginLeft = r + e.tx + f, t.style.marginTop = i + e.ty + f, t.style.height = e.height + f, t.style.width = e.width + f
                }

                function L(e, t) {
                    t.height *= e.scale, t.width *= e.scale, t.x += e.tx, t.y += e.ty
                }

                function A(e) {
                    if (e.nodeType && e.nodeType == 1) {
                        var t = e.getBoundingClientRect();
                        e = {
                            height: e.offsetHeight,
                            width: e.offsetWidth,
                            x: t.left,
                            y: t.top
                        }
                    }
                    return !b(e.x) && b(e.left) && (e.x = e.left), !b(e.y) && b(e.top) && (e.x = e.top), e
                }

                function O() {
                    var t = w(),
                        n = t - v;
                    if (n <= e) clearInterval(m), m = setTimeout(O, e - n);
                    else {
                        for (var r = 0, i = p.length; r < i; r++) p[r]();
                        v = t
                    }
                }

                function M(e, t, n, r, u) {
                    var a = A(e),
                        f = A(t),
                        l = a.width,
                        c = a.height,
                        h = f.width,
                        p = f.height,
                        d = h / l,
                        v = p / c,
                        m = l / c,
                        g = h / p,
                        y = n.cover ? v : d,
                        b = n.cover ? d : v,
                        w = m >= g ? y : b,
                        E = l * w,
                        S = c * w,
                        x = n.hAlign == i ? .5 * (E - h) : n.hAlign == o ? E - h : 0,
                        T = n.vAlign == i ? .5 * (S - p) : n.vAlign == s ? S - p : 0;
                    return u = u || {}, u.tx = f.x - x - a.x, u.ty = f.y - T - a.y, u.x = f.x - x - a.x * w, u.y = f.y - T - a.y * w, u.height = a.height * w, u.width = a.width * w, u.scale = w, r ? r(u, e) : n.apply && (typeof HTMLElement != "undefined" && e instanceof HTMLElement ? r = N : r = L, r(u, e)), u
                }

                function _(e, t, n, r) {
                    if (!e || !t) throw "You must supply a target and a container";
                    typeof n == "function" && (r = n, n = {}), n = S(n || {}, g);
                    var i = M(e, t, n, r);
                    return n.watch && (p.length || (l.addEventListener ? l.addEventListener("resize", O) : l.attachEvent("onresize", O)), i.trigger = function () {
                        M(e, t, n, r, i)
                    }, i.on = function (e) {
                        var t = p.indexOf(i.trigger);
                        ~t || p.push(i.trigger), e || i.trigger()
                    }, i.off = function () {
                        var e = p.indexOf(i.trigger);
                        !~e || p.splice(e, 1)
                    }, i.on(!0)), i
                }
                var e = 50,
                    t = "TransformOrigin",
                    n = "Transform",
                    r = "moz ms o webkit".split(" "),
                    i = "center",
                    s = "bottom",
                    o = "right",
                    u = "left",
                    a = "top",
                    f = "px",
                    l = window || self,
                    c = document,
                    h = l.getComputedStyle,
                    p = [],
                    d, v, m, g = {
                        hAlign: i,
                        vAlign: i,
                        watch: !1,
                        cover: !1,
                        apply: !0
                    };
                return Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
                    for (var t = 0; t < this.length; ++t)
                        if (this[t] == e) return t;
                    return -1
                }), S(_, {
                    watching: p,
                    defaults: g,
                    cssTransform: N,
                    cssPosition: C,
                    cssMargin: k,
                    CENTER: i,
                    BOTTOM: s,
                    RIGHT: o,
                    LEFT: u,
                    TOP: a
                })
            }();
            window.fit = e
        }();
    var e = function () {};
    e.extend = function (t, n) {
        "use strict";
        var r = e.prototype.extend;
        e._prototyping = !0;
        var i = new this;
        r.call(i, t), i.base = function () {}, delete e._prototyping;
        var s = i.constructor,
            o = i.constructor = function () {
                if (!e._prototyping)
                    if (this._constructing || this.constructor == o) this._constructing = !0, s.apply(this, arguments), delete this._constructing;
                    else if (arguments[0] !== null) return (arguments[0].extend || r).call(arguments[0], i)
            };
        return o.ancestor = this, o.extend = this.extend, o.forEach = this.forEach, o.implement = this.implement, o.prototype = i, o.toString = this.toString, o.valueOf = function (e) {
            return e == "object" ? o : s.valueOf()
        }, r.call(o, n), typeof o.init == "function" && o.init(), o
    }, e.prototype = {
        extend: function (t, n) {
            if (arguments.length > 1) {
                var r = this[t];
                if (r && typeof n == "function" && (!r.valueOf || r.valueOf() != n.valueOf()) && /\bbase\b/.test(n)) {
                    var i = n.valueOf();
                    n = function () {
                        var t = this.base || e.prototype.base;
                        this.base = r;
                        var n = i.apply(this, arguments);
                        return this.base = t, n
                    }, n.valueOf = function (e) {
                        return e == "object" ? n : i
                    }, n.toString = e.toString
                }
                this[t] = n
            } else if (t) {
                var s = e.prototype.extend;
                !e._prototyping && typeof this != "function" && (s = this.extend || s);
                var o = {
                        toSource: null
                    },
                    u = ["constructor", "toString", "valueOf"],
                    a = e._prototyping ? 0 : 1;
                while (f = u[a++]) t[f] != o[f] && s.call(this, f, t[f]);
                for (var f in t) o[f] || s.call(this, f, t[f])
            }
            return this
        }
    }, e = e.extend({
        constructor: function () {
            this.extend(arguments[0])
        }
    }, {
        ancestor: Object,
        version: "1.1",
        forEach: function (e, t, n) {
            for (var r in e) this.prototype[r] === undefined && t.call(n, e[r], r, e)
        },
        implement: function () {
            for (var e = 0; e < arguments.length; e++) typeof arguments[e] == "function" ? arguments[e](this.prototype) : this.prototype.extend(arguments[e]);
            return this
        },
        toString: function () {
            return String(this.valueOf())
        }
    });
    var t;
    (function (n) {
        "use strict";
        t = function (e, n, r) {
            return new t.Factory(e, n, r)
        }, t.Lang = {}, t.Base = e.extend({
            buildDate: "2013-11-07",
            version: "0.3.1",
            constructor: function (e, t) {
                typeof e != "object" && (e = {}), typeof t != "object" && (t = {}), this.setOptions(n.extend(!0, {}, e, t))
            },
            callback: function (e) {
                if (typeof e == "function") {
                    var t = [];
                    for (var n = 1; n <= arguments.length; n++) arguments[n] && t.push(arguments[n]);
                    e.apply(this, t)
                }
            },
            log: function (e) {
                window.console && console.log && console.log(e)
            },
            getOption: function (e) {
                return this[e] ? this[e] : !1
            },
            getOptions: function () {
                return this
            },
            setOption: function (e, t) {
                this[e] = t
            },
            setOptions: function (e) {
                for (var t in e) typeof e[t] != "undefined" && this.setOption(t, e[t])
            }
        }), t.Factory = t.Base.extend({
            autoStart: !0,
            callbacks: {
                destroy: !1,
                create: !1,
                init: !1,
                interval: !1,
                start: !1,
                stop: !1,
                reset: !1
            },
            classes: {
                active: "flip-clock-active",
                before: "flip-clock-before",
                divider: "flip-clock-divider",
                dot: "flip-clock-dot",
                label: "flip-clock-label",
                flip: "flip",
                play: "play",
                wrapper: "flip-clock-wrapper"
            },
            clockFace: "HourlyCounter",
            defaultClockFace: "HourlyCounter",
            defaultLanguage: "english",
            language: "english",
            lang: !1,
            face: !0,
            running: !1,
            time: !1,
            timer: !1,
            lists: [],
            $wrapper: !1,
            constructor: function (e, r, i) {
                this.lists = [], this.running = !1, this.base(i), this.$wrapper = n(e).addClass(this.classes.wrapper), this.time = new t.Time(this, r ? Math.round(r) : 0), this.timer = new t.Timer(this, i), this.lang = this.loadLanguage(this.language), this.face = this.loadClockFace(this.clockFace, i), this.autoStart && this.start()
            },
            loadClockFace: function (e, n) {
                var r, i = "Face";
                return e = e.ucfirst() + i, t[e] ? r = new t[e](this, n) : r = new t[this.defaultClockFace + i](this, n), r.build(), r
            },
            loadLanguage: function (e) {
                var n;
                return t.Lang[e.ucfirst()] ? n = t.Lang[e.ucfirst()] : t.Lang[e] ? n = t.Lang[e] : n = t.Lang[this.defaultLanguage], n
            },
            localize: function (e, t) {
                var n = this.lang;
                if (!e) return null;
                var r = e.toLowerCase();
                return typeof t == "object" && (n = t), n && n[r] ? n[r] : e
            },
            start: function (e) {
                var t = this;
                !t.running && (!t.countdown || t.countdown && t.time.time > 0) ? (t.face.start(t.time), t.timer.start(function () {
                    t.flip(), typeof e == "function" && e()
                })) : t.log("Trying to start timer when countdown already at 0")
            },
            stop: function (e) {
                this.face.stop(), this.timer.stop(e);
                for (var t in this.lists) this.lists[t].stop()
            },
            reset: function (e) {
                this.timer.reset(e), this.face.reset()
            },
            setTime: function (e) {
                this.time.time = e, this.face.setTime(e)
            },
            getTime: function (e) {
                return this.time
            },
            setCountdown: function (e) {
                var t = this.running;
                this.countdown = e ? !0 : !1, t && (this.stop(), this.start())
            },
            flip: function () {
                this.face.flip()
            }
        }), t.Face = t.Base.extend({
            dividers: [],
            factory: !1,
            lists: [],
            constructor: function (e, t) {
                this.base(t), this.factory = e, this.dividers = []
            },
            build: function () {},
            createDivider: function (e, t, r) {
                if (typeof t == "boolean" || !t) r = t, t = e;
                var i = ['<span class="' + this.factory.classes.dot + ' top"></span>', '<span class="' + this.factory.classes.dot + ' bottom"></span>'
].join("");
                r && (i = ""), e = this.factory.localize(e);
                var s = ['<span class="' + this.factory.classes.divider + " " + (t ? t : "").toLowerCase() + '">', '<span class="' + this.factory.classes.label + '">' + (e ? e : "") + "</span>", i, "</span>"];
                return n(s.join(""))
            },
            createList: function (e, n) {
                typeof e == "object" && (n = e, e = 0);
                var r = new t.List(this.factory, e, n);
                return r
            },
            reset: function () {},
            setTime: function (e) {
                this.flip(e)
            },
            addDigit: function (e) {
                var t = this.createList(e, {
                    classes: {
                        active: this.factory.classes.active,
                        before: this.factory.classes.before,
                        flip: this.factory.classes.flip
                    }
                });
                t.$obj.insertBefore(this.factory.lists[0].$obj), this.factory.lists.unshift(t)
            },
            start: function () {},
            stop: function () {},
            flip: function (e, t) {
                var r = this;
                t || (r.factory.countdown ? (r.factory.time.time <= 0 && r.factory.stop(), r.factory.time.time--) : r.factory.time.time++);
                var i = r.factory.lists.length - e.length;
                i < 0 && (i = 0);
                var s = 0,
                    o = !1;
                n.each(e, function (e, n) {
                    e += i;
                    var s = r.factory.lists[e];
                    if (s) {
                        var u = s.digit;
                        s.select(n), n != u && !t && s.play()
                    } else r.addDigit(n), o = !0
                });
                for (var u = 0; u < e.length; u++) u >= i && r.factory.lists[u].digit != e[u] && r.factory.lists[u].select(e[u])
            }
        }), t.List = t.Base.extend({
            digit: 0,
            classes: {
                active: "flip-clock-active",
                before: "flip-clock-before",
                flip: "flip"
            },
            factory: !1,
            $obj: !1,
            items: [],
            constructor: function (e, t, n) {
                this.factory = e, this.digit = t, this.$obj = this.createList(), t > 0 && this.select(t), this.factory.$wrapper.append(this.$obj)
            },
            select: function (e) {
                typeof e == "undefined" ? e = this.digit : this.digit = e;
                var t = this.$obj.find('[data-digit="' + e + '"]'),
                    n = this.$obj.find("." + this.classes.active).removeClass(this.classes.active),
                    r = this.$obj.find("." + this.classes.before).removeClass(this.classes.before);
                this.factory.countdown ? t.is(":last-child") ? this.$obj.find(":first-child").addClass(this.classes.before) : t.next().addClass(this.classes.before) : t.is(":first-child") ? this.$obj.find(":last-child").addClass(this.classes.before) : t.prev().addClass(this.classes.before), t.addClass(this.classes.active)
            },
            play: function () {
                this.$obj.addClass(this.factory.classes.play)
            },
            stop: function () {
                var e = this;
                setTimeout(function () {
                    e.$obj.removeClass(e.factory.classes.play)
                }, this.factory.timer.interval)
            },
            createList: function () {
                var e = n('<ul class="' + this.classes.flip + " " + (this.factory.running ? this.factory.classes.play : "") + '" />');
                for (var t = 0; t < 10; t++) {
                    var r = n(['<li data-digit="' + t + '">', '<a href="#">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + t + "</div>", "</div>", '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + t + "</div>", "</div>", "</a>", "</li>"].join(""));
                    this.items.push(r), e.append(r)
                }
                return e
            }
        }), t.Time = t.Base.extend({
            minimumDigits: 0,
            time: 0,
            factory: !1,
            constructor: function (e, t, n) {
                this.base(n), this.factory = e, t && (this.time = t)
            },
            convertDigitsToArray: function (e) {
                var t = [];
                e = e.toString();
                for (var n = 0; n < e.length; n++) e[n].match(/^\d*$/g) && t.push(e[n]);
                return t
            },
            digit: function (e) {
                var t = this.toString(),
                    n = t.length;
                return t[n - e] ? t[n - e] : !1
            },
            digitize: function (e) {
                var t = [];
                return n.each(e, function (e, n) {
                    n = n.toString(), n.length == 1 && (n = "0" + n);
                    for (var r = 0; r < n.length; r++) t.push(n[r])
                }), t.length > this.minimumDigits && (this.minimumDigits = t.length), this.minimumDigits > t.length && t.unshift("0"), t
            },
            getDayCounter: function (e) {
                var t = [this.getDays(), this.getHours(!0), this.getMinutes(!0)];
                return e && t.push(this.getSeconds(!0)), this.digitize(t)
            },
            getDays: function (e) {
                var t = this.time / 60 / 60 / 24;
                return e && (t %= 7), Math.floor(t)
            },
            getHourCounter: function () {
                var e = this.digitize([this.getHours(), this.getMinutes(!0), this.getSeconds(!0)]);
                return e
            },
            getHourly: function () {
                return this.getHourCounter()
            },
            getHours: function (e) {
                var t = this.time / 60 / 60;
                return e && (t %= 24), Math.floor(t)
            },
            getMilitaryTime: function () {
                var e = new Date,
                    t = this.digitize([e.getHours(), e.getMinutes(), e.getSeconds()]);
                return t
            },
            getMinutes: function (e) {
                var t = this.time / 60;
                return e && (t %= 60), Math.floor(t)
            },
            getMinuteCounter: function () {
                var e = this.digitize([this.getMinutes(), this.getSeconds(!0)]);
                return e
            },
            getSeconds: function (e) {
                var t = this.time;
                return e && (t == 60 ? t = 0 : t %= 60), Math.ceil(t)
            },
            getTime: function () {
                var e = new Date,
                    t = e.getHours(),
                    n = t > 12 ? "PM" : "AM",
                    r = this.digitize([t > 12 ? t - 12 : t === 0 ? 12 : t, e.getMinutes(), e.getSeconds()]);
                return r
            },
            getWeeks: function () {
                var e = this.time / 60 / 60 / 24 / 7;
                return mod && (e %= 52), Math.floor(e)
            },
            removeLeadingZeros: function (e, t) {
                var r = 0,
                    i = [];
                return n.each(t, function (n, s) {
                    n < e ? r += parseInt(t[n], 10) : i.push(t[n])
                }), r === 0 ? i : t
            },
            toString: function () {
                return this.time.toString()
            }
        }), t.Timer = t.Base.extend({
            callbacks: {
                destroy: !1,
                create: !1,
                init: !1,
                interval: !1,
                start: !1,
                stop: !1,
                reset: !1
            },
            count: 0,
            factory: !1,
            interval: 1e3,
            constructor: function (e, t) {
                this.base(t), this.factory = e, this.callback(this.callbacks.init), this.callback(this.callbacks.create)
            },
            getElapsed: function () {
                return this.count * this.interval
            },
            getElapsedTime: function () {
                return new Date(this.time + this.getElapsed())
            },
            reset: function (e) {
                clearInterval(this.timer), this.count = 0, this._setInterval(e), this.callback(this.callbacks.reset)
            },
            start: function (e) {
                this.factory.running = !0, this._createTimer(e), this.callback(this.callbacks.start)
            },
            stop: function (e) {
                this.factory.running = !1, this._clearInterval(e), this.callback(this.callbacks.stop), this.callback(e)
            },
            _clearInterval: function () {
                clearInterval(this.timer)
            },
            _createTimer: function (e) {
                this._setInterval(e)
            },
            _destroyTimer: function (e) {
                this._clearInterval(), this.timer = !1, this.callback(e), this.callback(this.callbacks.destroy)
            },
            _interval: function (e) {
                this.callback(this.callbacks.interval), this.callback(e), this.count++
            },
            _setInterval: function (e) {
                var t = this;
                t.timer = setInterval(function () {
                    t._interval(e)
                }, this.interval)
            }
        }), String.prototype.ucfirst = function () {
            return this.substr(0, 1).toUpperCase() + this.substr(1)
        }, n.fn.FlipClock = function (e, r) {
            return typeof e == "object" && (r = e, e = 0), new t(n(this), e, r)
        }, n.fn.flipClock = function (e, t) {
            return n.fn.FlipClock(e, t)
        }
    })(jQuery),
    function (e) {
        t.TwentyFourHourClockFace = t.Face.extend({
            constructor: function (e, t) {
                e.countdown = !1, this.base(e, t)
            },
            build: function (t) {
                var n = this,
                    r = this.factory.$wrapper.find("ul");
                t = t ? t : this.factory.time.time || this.factory.time.getMilitaryTime(), t.length >
                    r.length && e.each(t, function (e, t) {
                        n.factory.lists.push(n.createList(t))
                    }), this.dividers.push(this.createDivider()), this.dividers.push(this.createDivider()), e(this.dividers[0]).insertBefore(this.factory.lists[this.factory.lists.length - 2].$obj), e(this.dividers[1]).insertBefore(this.factory.lists[this.factory.lists.length - 4].$obj), this._clearExcessDigits(), this.autoStart && this.start()
            },
            flip: function (e) {
                e = e ? e : this.factory.time.getMilitaryTime(), this.base(e)
            },
            _clearExcessDigits: function () {
                var e = this.factory.lists[this.factory.lists.length - 2],
                    t = this.factory.lists[this.factory.lists.length - 4];
                for (var n = 6; n < 10; n++) e.$obj.find("li:last-child").remove(), t.$obj.find("li:last-child").remove()
            }
        })
    }(jQuery),
    function (e) {
        t.CounterFace = t.Face.extend({
            autoStart: !1,
            constructor: function (e, t) {
                e.timer.interval = 0, e.autoStart = !1, e.running = !0, e.increment = function () {
                    e.countdown = !1, e.setTime(e.getTime().time + 1)
                }, e.decrement = function () {
                    e.countdown = !0, e.setTime(e.getTime().time - 1)
                }, e.setValue = function (t) {
                    e.setTime(t)
                }, e.setCounter = function (t) {
                    e.setTime(t)
                }, this.base(e, t)
            },
            build: function () {
                var t = this,
                    n = this.factory.$wrapper.find("ul"),
                    r = [],
                    i = this.factory.getTime().digitize([this.factory.getTime().time]);
                i.length > n.length && e.each(i, function (e, n) {
                    var i = t.createList(n);
                    i.select(n), r.push(i)
                }), e.each(r, function (e, t) {
                    t.play()
                }), this.factory.lists = r
            },
            flip: function (e) {
                var t = this.factory.getTime().digitize([this.factory.getTime().time]);
                this.base(t, e)
            }
        })
    }(jQuery),
    function (e) {
        t.DailyCounterFace = t.Face.extend({
            showSeconds: !0,
            constructor: function (e, t) {
                this.base(e, t)
            },
            build: function (t, n) {
                var r = this,
                    i = this.factory.$wrapper.find("ul"),
                    s = [],
                    o = 0;
                n = n ? n : this.factory.time.getDayCounter(this.showSeconds), n.length > i.length && e.each(n, function (e, t) {
                    s.push(r.createList(t))
                }), this.factory.lists = s, this.showSeconds ? e(this.createDivider("Seconds")).insertBefore(this.factory.lists[this.factory.lists.length - 2].$obj) : o = 2, e(this.createDivider("Minutes")).insertBefore(this.factory.lists[this.factory.lists.length - 4 + o].$obj), e(this.createDivider("Hours")).insertBefore(this.factory.lists[this.factory.lists.length - 6 + o].$obj), e(this.createDivider("Days", !0)).insertBefore(this.factory.lists[0].$obj), this._clearExcessDigits(), this.autoStart && this.start()
            },
            flip: function (e, t) {
                t || (t = this.factory.time.getDayCounter(this.showSeconds)), this.base(t, e)
            },
            _clearExcessDigits: function () {
                var e = this.factory.lists[this.factory.lists.length - 2],
                    t = this.factory.lists[this.factory.lists.length - 4];
                for (var n = 6; n < 10; n++) e.$obj.find("li:last-child").remove(), t.$obj.find("li:last-child").remove()
            }
        })
    }(jQuery),
    function (e) {
        t.HourlyCounterFace = t.Face.extend({
            clearExcessDigits: !0,
            constructor: function (e, t) {
                this.base(e, t)
            },
            build: function (t, n) {
                var r = this,
                    i = this.factory.$wrapper.find("ul"),
                    s = [];
                n = n ? n : this.factory.time.getHourCounter(), n.length > i.length && e.each(n, function (e, t) {
                    s.push(r.createList(t))
                }), this.factory.lists = s, e(this.createDivider("Seconds")).insertBefore(this.factory.lists[this.factory.lists.length - 2].$obj), e(this.createDivider("Minutes")).insertBefore(this.factory.lists[this.factory.lists.length - 4].$obj), t || e(this.createDivider("Hours", !0)).insertBefore(this.factory.lists[0].$obj), this.clearExcessDigits && this._clearExcessDigits(), this.autoStart && this.start()
            },
            flip: function (e, t) {
                t || (t = this.factory.time.getHourCounter()), this.base(t, e)
            },
            _clearExcessDigits: function () {
                var e = this.factory.lists[this.factory.lists.length - 2],
                    t = this.factory.lists[this.factory.lists.length - 4];
                for (var n = 6; n < 10; n++) e.$obj.find("li:last-child").remove(), t.$obj.find("li:last-child").remove()
            }
        })
    }(jQuery),
    function (e) {
        t.MinuteCounterFace = t.HourlyCounterFace.extend({
            clearExcessDigits: !1,
            constructor: function (e, t) {
                this.base(e, t)
            },
            build: function () {
                this.base(!0, this.factory.time.getMinuteCounter())
            },
            flip: function (e) {
                this.base(e, this.factory.time.getMinuteCounter())
            }
        })
    }(jQuery),
    function (e) {
        t.TwelveHourClockFace = t.TwentyFourHourClockFace.extend({
            meridium: !1,
            meridiumText: "AM",
            build: function (t) {
                var n = this;
                t = t ? t : this.factory.time.time ? this.factory.time.time : this.factory.time.getTime(), this.base(t), this.meridiumText = this._isPM() ? "PM" : "AM", this.meridium = e(['<ul class="flip-clock-meridium">', "<li>", '<a href="#">' + this.meridiumText + "</a>", "</li>", "</ul>"].join("")), this.meridium.insertAfter(this.factory.lists[this.factory.lists.length - 1].$obj)
            },
            flip: function () {
                this.meridiumText != this._getMeridium() && (this.meridiumText = this._getMeridium(), this.meridium.find("a").html(this.meridiumText)), this.base(this.factory.time.getTime())
            },
            _getMeridium: function () {
                return (new Date).getHours() >= 12 ? "PM" : "AM"
            },
            _isPM: function () {
                return this._getMeridium() == "PM" ? !0 : !1
            },
            _clearExcessDigits: function () {
                var e = this.factory.lists[this.factory.lists.length - 2],
                    t = this.factory.lists[this.factory.lists.length - 4];
                for (var n = 6; n < 10; n++) e.$obj.find("li:last-child").remove(), t.$obj.find("li:last-child").remove()
            }
        })
    }(jQuery),
    function (e) {
        t.Lang.German = {
            years: "Jahre",
            months: "Monate",
            days: "Tage",
            hours: "Stunden",
            minutes: "Minuten",
            seconds: "Sekunden"
        }, t.Lang.de = t.Lang.German, t.Lang["de-de"] = t.Lang.German, t.Lang.german = t.Lang.German
    }(jQuery),
    function (e) {
        t.Lang.English = {
            years: "Years",
            months: "Months",
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds"
        }, t.Lang.en = t.Lang.English, t.Lang["en-us"] = t.Lang.English, t.Lang.english = t.Lang.English
    }(jQuery),
    function (e) {
        t.Lang.Spanish = {
            years: "A&#241;os",
            months: "Meses",
            days: "D&#205;as",
            hours: "Horas",
            minutes: "Minutos",
            seconds: "Segundo"
        }, t.Lang.es = t.Lang.Spanish, t.Lang["es-es"] = t.Lang.Spanish, t.Lang.spanish = t.Lang.Spanish
    }(jQuery),
    function (e) {
        t.Lang.French = {
            years: "ans",
            months: "mois",
            days: "jours",
            hours: "heures",
            minutes: "minutes",
            seconds: "secondes"
        }, t.Lang.fr = t.Lang.French, t.Lang["fr-ca"] = t.Lang.French, t.Lang.french = t.Lang.French
    }(jQuery),
    function (e) {
        function u() {
            r = !1;
            for (var n = 0; n < t.length; n++) {
                var i = e(t[n]).filter(function () {
                    return e(this).is(":appeared")
                });
                i.trigger("appear", [i]);
                if (o) {
                    var s = o.not(i);
                    s.trigger("disappear", [s])
                }
                o = i
            }
        }
        var t = [],
            n = !1,
            r = !1,
            i = {
                interval: 250,
                force_process: !1
            },
            s = e(window),
            o;
        e.expr[":"].appeared = function (t) {
            var n = e(t);
            if (!n.is(":visible")) return !1;
            var r = s.scrollLeft(),
                i = s.scrollTop(),
                o = n.offset(),
                u = o.left,
                a = o.top;
            return a + n.height() >= i && a - (n.data("appear-top-offset") || 0) <= i + s.height() && u + n.width() >= r && u - (n.data("appear-left-offset") || 0) <= r + s.width() ? !0 : !1
        }, e.fn.extend({
            appear: function (s) {
                var o = e.extend({}, i, s || {}),
                    a = this.selector || this;
                if (!n) {
                    var f = function () {
                        if (r) return;
                        r = !0, setTimeout(u, o.interval)
                    };
                    e(window).scroll(f).resize(f), n = !0
                }
                return o.force_process && setTimeout(u, o.interval), t.push(a), e(a)
            }
        }), e.extend({
            force_appear: function () {
                return n ? (u(), !0) : !1
            }
        })
    }(jQuery),
    function (e) {
        e.fn.autoFitInput = function (t) {
            function n(t, n) {
                var r = e("#input-tester");
                return r.length === 0 && (r = e('<pre id="input-tester" />').appendTo("body").css({
                    position: "absolute",
                    top: -9999,
                    left: -9999,
                    zIndex: -1,
                    width: "auto",
                    whiteSpace: "pre"
                })), n || (n = ""), n = n.replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\./g, "l").replace(/ /g, "<span> </span>"), r.css({
                    fontSize: t.css("fontSize"),
                    fontFamily: t.css("fontFamily"),
                    fontWeight: t.css("fontWeight"),
                    letterSpacing: t.css("letterSpacing"),
                    textTransform: t.css("textTransform")
                }).html(n), r
            }

            function r() {
                var r = e(this),
                    i = t.minWidth,
                    s = r.val() || "",
                    u = r.attr("placeholder"),
                    a = n(r, s);
                if (u) {
                    var f = r.data("placeholder-width");
                    f || (f = n(r, u).width(), r.data("placeholder-width", f)), i = Math.min(Math.max(i, f), t.maxWidth)
                }
                var l = parseInt(r.css("fontSize").replace("px", ""), 10);
                s = s || u;
                if (!s) return;
                s = s.replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\./g, "l").replace(/ /g, "<span> </span>");
                var c = a.html(s).width(),
                    h = Math.min(c, t.maxWidth);
                if (Math.max(i, h) - r.width() === 0) return;
                r.width(Math.max(i, h + t.comfortZone))
            }
            return t = e.extend({
                maxWidth: 1e3,
                minWidth: 0,
                comfortZone: 10
            }, t), this.each(function () {
                var t = e(this);
                r.call(t), e(window).on("resize", function () {
                    e(".main.contacts").length > 0 && r.call(this)
                }.bind(t)), t.on("change blur focus input", r)
            }), this
        }
    }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
            def: "easeOutQuad",
            swing: function (e, t, n, r, i) {
                return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
            },
            easeInQuad: function (e, t, n, r, i) {
                return r * (t /= i) * t + n
            },
            easeOutQuad: function (e, t, n, r, i) {
                return -r * (t /= i) * (t - 2) + n
            },
            easeInOutQuad: function (e, t, n, r, i) {
                return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
            },
            easeInCubic: function (e, t, n, r, i) {
                return r * (t /= i) * t * t + n
            },
            easeOutCubic: function (e, t, n, r, i) {
                return r * ((t = t / i - 1) * t * t + 1) + n
            },
            easeInOutCubic: function (e, t, n, r, i) {
                return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
            },
            easeInQuart: function (e, t, n, r, i) {
                return r * (t /= i) * t * t * t + n
            },
            easeOutQuart: function (e, t, n, r, i) {
                return -r * ((t = t / i - 1) * t * t * t - 1) + n
            },
            easeInOutQuart: function (e, t, n, r, i) {
                return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
            },
            easeInQuint: function (e, t, n, r, i) {
                return r * (t /= i) * t * t * t * t + n
            },
            easeOutQuint: function (e, t, n, r, i) {
                return r * ((t = t / i - 1) * t * t * t * t + 1) + n
            },
            easeInOutQuint: function (e, t, n, r, i) {
                return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
            },
            easeInSine: function (e, t, n, r, i) {
                return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
            },
            easeOutSine: function (e, t, n, r, i) {
                return r * Math.sin(t / i * (Math.PI / 2)) + n
            },
            easeInOutSine: function (e, t, n, r, i) {
                return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
            },
            easeInExpo: function (e, t, n, r, i) {
                return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
            },
            easeOutExpo: function (e, t, n, r, i) {
                return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
            },
            easeInOutExpo: function (e, t, n, r, i) {
                return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
            },
            easeInCirc: function (e, t, n, r, i) {
                return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
            },
            easeOutCirc: function (e, t, n, r, i) {
                return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
            },
            easeInOutCirc: function (e, t, n, r, i) {
                return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
            },
            easeInElastic: function (e, t, n, r, i) {
                var s = 1.70158,
                    o = 0,
                    u = r;
                if (t == 0) return n;
                if ((t /= i) == 1) return n + r;
                o || (o = i * .3);
                if (u < Math.abs(r)) {
                    u = r;
                    var s = o / 4
                } else var s = o / (2 * Math.PI) * Math.asin(r / u);
                return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
            },
            easeOutElastic: function (e, t, n, r, i) {
                var s = 1.70158,
                    o = 0,
                    u = r;
                if (t == 0) return n;
                if ((t /= i) == 1) return n + r;
                o || (o = i * .3);
                if (u < Math.abs(r)) {
                    u = r;
                    var s = o / 4
                } else var s = o / (2 * Math.PI) * Math.asin(r / u);
                return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
            },
            easeInOutElastic: function (e, t, n, r, i) {
                var s = 1.70158,
                    o = 0,
                    u = r;
                if (t == 0) return n;
                if ((t /= i / 2) == 2) return n + r;
                o || (o = i * .3 * 1.5);
                if (u < Math.abs(r)) {
                    u = r;
                    var s = o / 4
                } else var s = o / (2 * Math.PI) * Math.asin(r / u);
                return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
            },
            easeInBack: function (e, t, n, r, i, s) {
                return s == undefined && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n
            },
            easeOutBack: function (e, t, n, r, i, s) {
                return s == undefined && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
            },
            easeInOutBack: function (e, t, n, r, i, s) {
                return s == undefined && (s = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
            },
            easeInBounce: function (e, t, n, r, i) {
                return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
            },
            easeOutBounce: function (e, t, n, r, i) {
                return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
            },
            easeInOutBounce: function (e, t, n, r, i) {
                return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
            }
        }),
        function (e, t) {
            "use strict";
            var n = e.History = e.History || {},
                r = e.jQuery;
            if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
            n.Adapter = {
                bind: function (e, t, n) {
                    r(e).bind(t, n)
                },
                trigger: function (e, t, n) {
                    r(e).trigger(t, n)
                },
                extractEventData: function (e, n, r) {
                    var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
                    return i
                },
                onDomLoad: function (e) {
                    r(e)
                }
            }, typeof n.init != "undefined" && n.init()
        }(window),
        function (e, t) {
            "use strict";
            var n = e.console || t,
                r = e.document,
                i = e.navigator,
                s = !1,
                o = e.setTimeout,
                u = e.clearTimeout,
                a = e.setInterval,
                f = e.clearInterval,
                l = e.JSON,
                c = e.alert,
                h = e.History = e.History || {},
                p = e.history;
            try {
                s = e.sessionStorage, s.setItem("TEST", "1"), s.removeItem("TEST")
            } catch (d) {
                s = !1
            }
            l.stringify =
                l.stringify || l.encode, l.parse = l.parse || l.decode;
            if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
            h.init = function (e) {
                return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
            }, h.initCore = function (d) {
                if (typeof h.initCore.initialized != "undefined") return !1;
                h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function () {
                    var e, t = h.intervalList;
                    if (typeof t != "undefined" && t !== null) {
                        for (e = 0; e < t.length; e++) f(t[e]);
                        h.intervalList = null
                    }
                }, h.debug = function () {
                    (h.options.debug || !1) && h.log.apply(h, arguments)
                }, h.log = function () {
                    var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
                        t = r.getElementById("log"),
                        i, s, o, u, a;
                    e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
                    for (s = 1, o = arguments.length; s < o; ++s) {
                        a = arguments[s];
                        if (typeof a == "object" && typeof l != "undefined") try {
                            a = l.stringify(a)
                        } catch (f) {}
                        i += "\n" + a + "\n"
                    }
                    return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
                }, h.getInternetExplorerMajorVersion = function () {
                    var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function () {
                        var e = 3,
                            t = r.createElement("div"),
                            n = t.getElementsByTagName("i");
                        while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                        return e > 4 ? e : !1
                    }();
                    return e
                }, h.isInternetExplorer = function () {
                    var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
                    return e
                }, h.options.html4Mode ? h.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : h.emulated = {
                    pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
                    hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
                }, h.enabled = !h.emulated.pushState, h.bugs = {
                    setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                    safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                    ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
                }, h.isEmptyObject = function (e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }, h.cloneObject = function (e) {
                    var t, n;
                    return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
                }, h.getRootUrl = function () {
                    var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
                    if (r.location.port || !1) e += ":" + r.location.port;
                    return e += "/", e
                }, h.getBaseHref = function () {
                    var e = r.getElementsByTagName("base"),
                        t = null,
                        n = "";
                    return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
                }, h.getBaseUrl = function () {
                    var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
                    return e
                }, h.getPageUrl = function () {
                    var e = h.getState(!1, !1),
                        t = (e || {}).url || h.getLocationHref(),
                        n;
                    return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function (e, t, n) {
                        return /\./.test(e) ? e : e + "/"
                    }), n
                }, h.getBasePageUrl = function () {
                    var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function (e, t, n) {
                        return /[^\/]$/.test(e) ? "" : e
                    }).replace(/\/+$/, "") + "/";
                    return e
                }, h.getFullUrl = function (e, t) {
                    var n = e,
                        r = e.substring(0, 1);
                    return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                }, h.getShortUrl = function (e) {
                    var t = e,
                        n = h.getBaseUrl(),
                        r = h.getRootUrl();
                    return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
                }, h.getLocationHref = function (e) {
                    return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
                }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function () {
                    h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
                }, h.getState = function (e, t) {
                    typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
                    var n = h.getLastSavedState();
                    return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
                }, h.getIdByState = function (e) {
                    var t = h.extractId(e.url),
                        n;
                    if (!t) {
                        n = h.getStateString(e);
                        if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];
                        else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];
                        else {
                            for (;;) {
                                t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                                if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
                            }
                            h.stateToId[n] = t, h.idToState[t] = e
                        }
                    }
                    return t
                }, h.normalizeState = function (e) {
                    var t, n;
                    if (!e || typeof e != "object") e = {};
                    if (typeof e.normalized != "undefined") return e;
                    if (!e.data || typeof e.data != "object") e.data = {};
                    return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
                }, h.createStateObject = function (e, t, n) {
                    var r = {
                        data: e,
                        title: t,
                        url: n
                    };
                    return r = h.normalizeState(r), r
                }, h.getStateById = function (e) {
                    e = String(e);
                    var n = h.idToState[e] || h.store.idToState[e] || t;
                    return n
                }, h.getStateString = function (e) {
                    var t, n, r;
                    return t = h.normalizeState(e), n = {
                        data: t.data,
                        title: e.title,
                        url: e.url
                    }, r = l.stringify(n), r
                }, h.getStateId = function (e) {
                    var t, n;
                    return t = h.normalizeState(e), n = t.id, n
                }, h.getHashByState = function (e) {
                    var t, n;
                    return t = h.normalizeState(e), n = t.hash, n
                }, h.extractId = function (e) {
                    var t, n, r, i;
                    return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
                }, h.isTraditionalAnchor = function (e) {
                    var t = !/[\/\?\.]/.test(e);
                    return t
                }, h.extractState = function (e, t) {
                    var n = null,
                        r, i;
                    return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
                }, h.getIdByUrl = function (e) {
                    var n = h.urlToId[e] || h.store.urlToId[e] || t;
                    return n
                }, h.getLastSavedState = function () {
                    return h.savedStates[h.savedStates.length - 1] || t
                }, h.getLastStoredState = function () {
                    return h.storedStates[h.storedStates.length - 1] || t
                }, h.hasUrlDuplicate = function (e) {
                    var t = !1,
                        n;
                    return n = h.extractState(e.url), t = n && n.id !== e.id, t
                }, h.storeState = function (e) {
                    return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
                }, h.isLastSavedState = function (e) {
                    var t = !1,
                        n, r, i;
                    return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
                }, h.saveState = function (e) {
                    return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
                }, h.getStateByIndex = function (e) {
                    var t = null;
                    return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
                }, h.getCurrentIndex = function () {
                    var e = null;
                    return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e
                }, h.getHash = function (e) {
                    var t = h.getLocationHref(e),
                        n;
                    return n = h.getHashByUrl(t), n
                }, h.unescapeHash = function (e) {
                    var t = h.normalizeHash(e);
                    return t = decodeURIComponent(t), t
                }, h.normalizeHash = function (e) {
                    var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
                    return t
                }, h.setHash = function (e, t) {
                    var n, i;
                    return t !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.setHash,
                        args: arguments,
                        queue: t
                    }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
                }, h.escapeHash = function (t) {
                    var n = h.normalizeHash(t);
                    return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
                }, h.getHashByUrl = function (e) {
                    var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return t = h.unescapeHash(t), t
                }, h.setTitle = function (e) {
                    var t = e.title,
                        n;
                    t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
                    try {
                        r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (i) {}
                    return r.title = t, h
                }, h.queues = [], h.busy = function (e) {
                    typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
                    if (!h.busy.flag) {
                        u(h.busy.timeout);
                        var t = function () {
                            var e, n, r;
                            if (h.busy.flag) return;
                            for (e = h.queues.length - 1; e >= 0; --e) {
                                n = h.queues[e];
                                if (n.length === 0) continue;
                                r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                            }
                        };
                        h.busy.timeout = o(t, h.options.busyDelay)
                    }
                    return h.busy.flag
                }, h.busy.flag = !1, h.fireQueueItem = function (e) {
                    return e.callback.apply(e.scope || h, e.args || [])
                }, h.pushQueue = function (e) {
                    return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
                }, h.queue = function (e, t) {
                    return typeof e == "function" && (e = {
                        callback: e
                    }), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
                }, h.clearQueue = function () {
                    return h.busy.flag = !1, h.queues = [], h
                }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function () {
                    return h.stateChanged = !0, h.doubleCheckClear(), h
                }, h.doubleCheckClear = function () {
                    return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
                }, h.doubleCheck = function (e) {
                    return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function () {
                        return h.doubleCheckClear(), h.stateChanged || e(), !0
                    }, h.options.doubleCheckInterval)), h
                }, h.safariStatePoll = function () {
                    var t = h.extractState(h.getLocationHref()),
                        n;
                    if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
                    return
                }, h.back = function (e) {
                    return e !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.back,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), h.doubleCheck(function () {
                        h.back(!1)
                    }), p.go(-1), !0)
                }, h.forward = function (e) {
                    return e !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.forward,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), h.doubleCheck(function () {
                        h.forward(!1)
                    }), p.go(1), !0)
                }, h.go = function (e, t) {
                    var n;
                    if (e > 0)
                        for (n = 1; n <= e; ++n) h.forward(t);
                    else {
                        if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (n = -1; n >= e; --n) h.back(t)
                    }
                    return h
                };
                if (h.emulated.pushState) {
                    var v = function () {};
                    h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
                } else h.onPopState = function (t, n) {
                    var r = !1,
                        i = !1,
                        s, o;
                    return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
                }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function (t, n, r, i) {
                    if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (i !== !1 && h.busy()) return h.pushQueue({
                        scope: h,
                        callback: h.pushState,
                        args: arguments,
                        queue: i
                    }), !1;
                    h.busy(!0);
                    var s = h.createStateObject(t, n, r);
                    return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
                }, h.replaceState = function (t, n, r, i) {
                    if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (i !== !1 && h.busy()) return h.pushQueue({
                        scope: h,
                        callback: h.replaceState,
                        args: arguments,
                        queue: i
                    }), !1;
                    h.busy(!0);
                    var s = h.createStateObject(t, n, r);
                    return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
                };
                if (s) {
                    try {
                        h.store = l.parse(s.getItem("History.store")) || {}
                    } catch (m) {
                        h.store = {}
                    }
                    h.normalizeStore()
                } else h.store = {}, h.normalizeStore();
                h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function () {
                    var e, t, n;
                    try {
                        e = l.parse(s.getItem("History.store")) || {}
                    } catch (r) {
                        e = {}
                    }
                    e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
                    for (t in h.idToState) {
                        if (!h.idToState.hasOwnProperty(t)) continue;
                        e.idToState[t] = h.idToState[t]
                    }
                    for (t in h.urlToId) {
                        if (!h.urlToId.hasOwnProperty(t)) continue;
                        e.urlToId[t] = h.urlToId[t]
                    }
                    for (t in h.stateToId) {
                        if (!h.stateToId.hasOwnProperty(t)) continue;
                        e.stateToId[t] = h.stateToId[t]
                    }
                    h.store = e, h.normalizeStore(), n = l.stringify(e);
                    try {
                        s.setItem("History.store", n)
                    } catch (i) {
                        if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
                        s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
                    }
                }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
                if (!h.emulated.pushState) {
                    h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
                    if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function () {
                        h.Adapter.trigger(e, "popstate")
                    }), h.getHash() && h.Adapter.onDomLoad(function () {
                        h.Adapter.trigger(e, "hashchange")
                    })
                }
            }, (!h.options || !h.options.delayInit) && h.init()
        }(window),
        /*!
         * enquire.js v2.1.0 - Awesome Media Queries in JavaScript
         * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
         * License: MIT (http://www.opensource.org/licenses/mit-license.php)
         */
        function (e) {
            typeof define == "function" && define.amd ? define(["jquery"], e) : typeof exports == "object" ? module.exports = e : e(jQuery)
        }(function (e) {
            function a(t) {
                var n = t || window.event,
                    o = r.call(arguments, 1),
                    u = 0,
                    a = 0,
                    c = 0,
                    h = 0;
                t = e.event.fix(n), t.type = "mousewheel", "detail" in n && (c = n.detail * -1), "wheelDelta" in n && (c = n.wheelDelta), "wheelDeltaY" in n && (c = n.wheelDeltaY), "wheelDeltaX" in n && (a = n.wheelDeltaX * -1), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (a = c * -1, c = 0), u = c === 0 ? a : c, "deltaY" in n && (c = n.deltaY * -1, u = c), "deltaX" in n && (a = n.deltaX, c === 0 && (u = a * -1));
                if (c === 0 && a === 0) return;
                if (n.deltaMode === 1) {
                    var p = e.data(this, "mousewheel-line-height");
                    u *= p, c *= p, a *= p
                } else if (n.deltaMode === 2) {
                    var d = e.data(this, "mousewheel-page-height");
                    u *= d, c *= d, a *= d
                }
                h = Math.max(Math.abs(c), Math.abs(a));
                if (!s || h < s) s = h, l(n, h) && (s /= 40);
                return l(n, h) && (u /= 40, a /= 40, c /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / s), a = Math[a >= 1 ? "floor" : "ceil"](a / s), c = Math[c >= 1 ? "floor" : "ceil"](c / s), t.deltaX = a, t.deltaY = c, t.deltaFactor = s, t.deltaMode = 0, o.unshift(t, u, a, c), i && clearTimeout(i), i = setTimeout(f, 200), (e.event.dispatch || e.event.handle).apply(this, o)
            }

            function f() {
                s = null
            }

            function l(e, t) {
                return u.settings.adjustOldDeltas && e.type === "mousewheel" && t % 120 === 0
            }
            var t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                n = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                r = Array.prototype.slice,
                i, s;
            if (e.event.fixHooks)
                for (var o = t.length; o;) e.event.fixHooks[t[--o]] = e.event.mouseHooks;
            var u = e.event.special.mousewheel = {
                version: "3.1.9",
                setup: function () {
                    if (this.addEventListener)
                        for (var t = n.length; t;) this.addEventListener(n[--t], a, !1);
                    else this.onmousewheel = a;
                    e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
                },
                teardown: function () {
                    if (this.removeEventListener)
                        for (var e = n.length; e;) this.removeEventListener(n[--e], a, !1);
                    else this.onmousewheel = null
                },
                getLineHeight: function (t) {
                    return parseInt(e(t)["offsetParent" in e.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
                },
                getPageHeight: function (t) {
                    return e(t).height()
                },
                settings: {
                    adjustOldDeltas: !0
                }
            };
            e.fn.extend({
                mousewheel: function (e) {
                    return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                },
                unmousewheel: function (e) {
                    return this.unbind("mousewheel", e)
                }
            })
        }),
        function (e) {
            var t = "waitForImages";
            e.waitForImages = {
                hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"]
            }, e.expr[":"].uncached = function (t) {
                if (!e(t).is('img[src!=""]')) return !1;
                var n = new Image;
                return n.src = t.src, !n.complete
            }, e.fn.waitForImages = function (n, r, i) {
                var s = 0,
                    o = 0;
                e.isPlainObject(arguments[0]) && (i = arguments[0].waitForAll, r = arguments[0].each, n = arguments[0].finished), n = n || e.noop, r = r || e.noop, i = !!i;
                if (!e.isFunction(n) || !e.isFunction(r)) throw new TypeError("An invalid callback was supplied.");
                return this.each(function () {
                    var u = e(this),
                        a = [],
                        f = e.waitForImages.hasImageProperties || [],
                        l = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
                    i ? u.find("*").addBack().each(function () {
                        var t = e(this);
                        t.is("img:uncached") && a.push({
                            src: t.attr("src"),
                            element: t[0]
                        }), e.each(f, function (e, n) {
                            var r = t.css(n),
                                i;
                            if (!r) return !0;
                            while (i = l.exec(r)) a.push({
                                src: i[2],
                                element: t[0]
                            })
                        })
                    }) : u.find("img:uncached").each(function () {
                        a.push({
                            src: this.src,
                            element: this
                        })
                    }), s = a.length, o = 0, s === 0 && n.call(u[0]), e.each(a, function (i, a) {
                        var f = new Image;
                        e(f).on("load." + t + " error." + t, function (e) {
                            o++, r.call(a.element, o, s, e.type == "load");
                            if (o == s) return n.call(u[0]), !1
                        }), f.src = a.src
                    })
                })
            }
        }(jQuery),
        function () {
            var e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _ = [].slice;
            m = '<span class="odometer-value"></span>', p = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + m + "</span></span>", r = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + p + "</span></span>", o = '<span class="odometer-formatting-mark"></span>', n = "(,ddd).dd", u = /^\(?([^)]*)\)?(?:(.)(d+))?$/, a = 30, s = 2e3, e = 20, f = 2, i = .5, l = 1e3 / a, t = 1e3 / e, d = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", T = document.createElement("div").style, v = T.transition != null || T.webkitTransition != null || T.mozTransition != null || T.oTransition != null, S = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, c = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, y = function (e) {
                var t;
                return t = document.createElement("div"), t.innerHTML = e, t.children[0]
            }, E = function (e, t) {
                return e.className = e.className.replace(new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"), " ")
            }, g = function (e, t) {
                return E(e, t), e.className += " " + t
            }, N = function (e, t) {
                var n;
                if (document.createEvent != null) return n = document.createEvent("HTMLEvents"), n.initEvent(t, !0, !0), e.dispatchEvent(n)
            }, w = function () {
                var e, t;
                return (e = (t = window.performance) != null ? typeof t.now === "function" ? t.now() : void 0 : void 0) != null ? e : +(new Date)
            }, x = function (e, t) {
                return t == null && (t = 0), t ? (e *= Math.pow(10, t), e += .5, e = Math.floor(e), e /= Math.pow(10, t)) : Math.round(e)
            }, C = function (e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }, b = function (e) {
                return e - x(e)
            }, L = !1, (k = function () {
                var e, t, n, r, i;
                if (L) return;
                if (window.jQuery != null) {
                    L = !0, r = ["html", "text"], i = [];
                    for (t = 0, n = r.length; t < n; t++) e = r[t], i.push(function (e) {
                        var t;
                        return t = window.jQuery.fn[e], window.jQuery.fn[e] = function (e) {
                            var n;
                            return e == null || ((n = this[0]) != null ? n.odometer : void 0) == null ? t.apply(this, arguments) : this[0].odometer.update(e)
                        }
                    }(e));
                    return i
                }
            })(), setTimeout(k, 0), h = function () {
                function e(t) {
                    var n, r, i, o, u, a, c, h, p, d, v = this;
                    this.options = t, this.el = this.options.el;
                    if (this.el.odometer != null) return this.el.odometer;
                    this.el.odometer = this, h = e.options;
                    for (r in h) o = h[r], this.options[r] == null && (this.options[r] = o);
                    (u = this.options).duration == null && (u.duration = s), this.MAX_VALUES = this.options.duration / l / f | 0, this.resetFormat(), this.value = this.cleanValue((p = this.options.value) != null ? p : ""), this.renderInside(), this.render();
                    try {
                        d = ["innerHTML", "innerText", "textContent"];
                        for (a = 0, c = d.length; a < c; a++) i = d[a], this.el[i] != null && function (e) {
                            return Object.defineProperty(v.el, e, {
                                get: function () {
                                    var t;
                                    return e === "innerHTML" ? v.inside.outerHTML : (t = v.inside.innerText) != null ? t : v.inside.textContent
                                },
                                set: function (e) {
                                    return v.update(e)
                                }
                            })
                        }(i)
                    } catch (m) {
                        n = m, this.watchForMutations()
                    }
                    this
                }
                return e.prototype.renderInside = function () {
                    return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
                }, e.prototype.watchForMutations = function () {
                    var e, t = this;
                    if (c == null) return;
                    try {
                        return this.observer == null && (this.observer = new c(function (e) {
                            var n;
                            return n = t.el.innerText, t.renderInside(), t.render(t.value), t.update(n)
                        })), this.watchMutations = !0, this.startWatchingMutations()
                    } catch (n) {
                        e = n
                    }
                }, e.prototype.startWatchingMutations = function () {
                    if (this.watchMutations) return this.observer.observe(this.el, {
                        childList: !0
                    })
                }, e.prototype.stopWatchingMutations = function () {
                    var e;
                    return (e = this.observer) != null ? e.disconnect() : void 0
                }, e.prototype.cleanValue = function (e) {
                    var t;
                    return typeof e == "string" && (e = e.replace((t = this.format.radix) != null ? t : ".", "<radix>"), e = e.replace(/[.,]/g, ""), e = e.replace("<radix>", "."), e = parseFloat(e, 10) || 0), x(e, this.format.precision)
                }, e.prototype.bindTransitionEnd = function () {
                    var e, t, n, r, i, s, o = this;
                    if (this.transitionEndBound) return;
                    this.transitionEndBound = !0, t = !1, i = d.split(" "), s = [];
                    for (n = 0, r = i.length; n < r; n++) e = i[n], s.push(this.el.addEventListener(e, function () {
                        return t ? !0 : (t = !0, setTimeout(function () {
                            return o.render(), t = !1, N(o.el, "odometerdone")
                        }, 0), !0)
                    }, !1));
                    return s
                }, e.prototype.resetFormat = function () {
                    var e, t, r, i, s, o, a, f;
                    e = (a = this.options.format) != null ? a : n, e || (e = "d"), r = u.exec(e);
                    if (!r) throw new Error("Odometer: Unparsable digit format");
                    return f = r.slice(1, 4), o = f[0], s = f[1], t = f[2], i = (t != null ? t.length : void 0) || 0, this.format = {
                        repeating: o,
                        radix: s,
                        precision: i
                    }
                }, e.prototype.render = function (e) {
                    var t, n, r, i, s, o, u, a, f, l, c, h;
                    e == null && (e = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", o = this.options.theme, t = this.el.className.split(" "), s = [];
                    for (a = 0, l = t.length; a < l; a++) {
                        n = t[a];
                        if (!n.length) continue;
                        if (i = /^odometer-theme-(.+)$/.exec(n)) {
                            o = i[1];
                            continue
                        }
                        if (/^odometer(-|$)/.test(n)) continue;
                        s.push(n)
                    }
                    s.push("odometer"), v || s.push("odometer-no-transitions"), o ? s.push("odometer-theme-" + o) : s.push("odometer-auto-theme"), this.el.className = s.join(" "), this.ribbons = {}, this.digits = [], u = !this.format.precision || !b(e) || !1, h = e.toString().split("").reverse();
                    for (f = 0, c = h.length; f < c; f++) r = h[f], r === "." && (u = !0), this.addDigit(r, u);
                    return this.startWatchingMutations()
                }, e.prototype.update = function (e) {
                    var t, n = this;
                    e = this.cleanValue(e);
                    if (!(t = e - this.value)) return;
                    return E(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), t > 0 ? g(this.el, "odometer-animating-up") : g(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(e), this.startWatchingMutations(), setTimeout(function () {
                        return n.el.offsetHeight, g(n.el, "odometer-animating")
                    }, 0), this.value = e
                }, e.prototype.renderDigit = function () {
                    return y(r)
                }, e.prototype.insertDigit = function (e, t) {
                    return t != null ? this.inside.insertBefore(e, t) : this.inside.children.length ? this.inside.insertBefore(e, this.inside.children[0]) : this.inside.appendChild(e)
                }, e.prototype.addSpacer = function (e, t, n) {
                    var r;
                    return r = y(o), r.innerHTML = e, n && g(r, n), this.insertDigit(r, t)
                }, e.prototype.addDigit = function (e, t) {
                    var n, r, i, s;
                    t == null && (t = !0);
                    if (e === "-") return this.addSpacer(e, null, "odometer-negation-mark");
                    if (e === ".") return this.addSpacer((s = this.format.radix) != null ? s : ".", null, "odometer-radix-mark");
                    if (t) {
                        i = !1;
                        for (;;) {
                            if (!this.format.repeating.length) {
                                if (i) throw new Error("Bad odometer format without digits");
                                this.resetFormat(), i = !0
                            }
                            n = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1);
                            if (n === "d") break;
                            this.addSpacer(n)
                        }
                    }
                    return r = this.renderDigit(), r.querySelector(".odometer-value").innerHTML = e, this.digits.push(r), this.insertDigit(r)
                }, e.prototype.animate = function (e) {
                    return !v || this.options.animation === "count" ? this.animateCount(e) : this.animateSlide(e)
                }, e.prototype.animateCount = function (e) {
                    var n, r, i, s, o, u = this;
                    if (!(r = +e - this.value)) return;
                    return s = i = w(), n = this.value, (o = function () {
                        var a, f, l;
                        if (w() - s > u.options.duration) {
                            u.value = e, u.render(), N(u.el, "odometerdone");
                            return
                        }
                        return a = w() - i, a > t && (i = w(), l = a / u.options.duration, f = r * l, n += f, u.render(Math.round(n))), S != null ? S(o) : setTimeout(o, t)
                    })()
                }, e.prototype.getDigitCount = function () {
                    var e, t, n, r, i, s;
                    r = 1 <= arguments.length ? _.call(arguments, 0) : [];
                    for (e = i = 0, s = r.length; i < s; e = ++i) n = r[e], r[e] = Math.abs(n);
                    return t = Math.max.apply(Math, r), Math.ceil(Math.log(t + 1) / Math.log(10))
                }, e.prototype.getFractionalDigitCount = function () {
                    var e, t, n, r, i, s, o;
                    i = 1 <= arguments.length ? _.call(arguments, 0) : [], t = /^\-?\d*\.(\d*?)0*$/;
                    for (e = s = 0, o = i.length; s < o; e = ++s) r = i[e], i[e] = r.toString(), n = t.exec(i[e]), n == null ? i[e] = 0 : i[e] = n[1].length;
                    return Math.max.apply(Math, i)
                }, e.prototype.resetDigits = function () {
                    return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
                }, e.prototype.animateSlide = function (e) {
                    var t, n, r, s, o, u, a, f, l, c, h, p, d, v, m, y, b, w, E, S, x, T, N, k, L, A, O, M;
                    y = this.value, f = this.getFractionalDigitCount(y, e), f && (e *= Math.pow(10, f), y *= Math.pow(10, f));
                    if (!(r = e - y)) return;
                    this.bindTransitionEnd(), s = this.getDigitCount(y, e), o = [], t = 0;
                    for (h = E = 0; 0 <= s ? E < s : E > s; h = 0 <= s ? ++E : --E) {
                        b = C(y / Math.pow(10, s - h - 1)), a = C(e / Math.pow(10, s - h - 1)), u = a - b;
                        if (Math.abs(u) > this.MAX_VALUES) {
                            c = [], p = u / (this.MAX_VALUES + this.MAX_VALUES * t * i), n = b;
                            while (u > 0 && n < a || u < 0 && n > a) c.push(Math.round(n)), n += p;
                            c[c.length - 1] !== a && c.push(a), t++
                        } else c = function () {
                            M = [];
                            for (var e = b; b <= a ? e <= a : e >= a; b <= a ? e++ : e--) M.push(e);
                            return M
                        }.apply(this);
                        for (h = x = 0, N = c.length; x < N; h = ++x) l = c[h], c[h] = Math.abs(l % 10);
                        o.push(c)
                    }
                    this.resetDigits(), O = o.reverse();
                    for (h = T = 0, k = O.length; T < k; h = ++T) {
                        c = O[h], this.digits[h] || this.addDigit(" ", h >= f), (w = this.ribbons)[h] == null && (w[h] = this.digits[h].querySelector(".odometer-ribbon-inner")), this.ribbons[h].innerHTML = "", r < 0 && (c = c.reverse());
                        for (d = A = 0, L = c.length; A < L; d = ++A) l = c[d], m = document.createElement("div"), m.className = "odometer-value", m.innerHTML = l, this.ribbons[h].appendChild(m), d === c.length - 1 && g(m, "odometer-last-value"), d === 0 && g(m, "odometer-first-value")
                    }
                    b < 0 && this.addDigit("-"), v = this.inside.querySelector(".odometer-radix-mark"), v != null && v.parent.removeChild(v);
                    if (f) return this.addSpacer(this.format.radix, this.digits[f - 1], "odometer-radix-mark")
                }, e
            }(), h.options = (O = window.odometerOptions) != null ? O : {}, setTimeout(function () {
                var e, t, n, r, i;
                if (window.odometerOptions) {
                    r = window.odometerOptions, i = [];
                    for (e in r) t = r[e], i.push((n = h.options)[e] != null ? (n = h.options)[e] : n[e] = t);
                    return i
                }
            }, 0), h.init = function () {
                var e, t, n, r, i, s;
                if (document.querySelectorAll == null) return;
                t = document.querySelectorAll(h.options.selector || ".odometer"), s = [];
                for (n = 0, r = t.length; n < r; n++) e = t[n], s.push(e.odometer = new h({
                    el: e,
                    value: (i = e.innerText) != null ? i : e.textContent
                }));
                return s
            }, ((M = document.documentElement) != null ? M.doScroll : void 0) != null && document.createEventObject != null ? (A = document.onreadystatechange, document.onreadystatechange = function () {
                return document.readyState === "complete" && h.options.auto !== !1 && h.init(), A != null ? A.apply(this, arguments) : void 0
            }) : document.addEventListener("DOMContentLoaded", function () {
                if (h.options.auto !== !1) return h.init()
            }, !1), typeof define == "function" && define.amd ? define(["jquery"], function () {
                return h
            }) : typeof exports === !1 ? module.exports = h : window.Odometer = h
        }.call(this),
        /*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
         * Licensed under the MIT License (LICENSE.txt).
         *
         * Version: 3.1.9
         *
         * Requires: jQuery 1.2.2+
         */
        function (e) {
            "use strict";
            e.picturefill = function () {
                var t = e.document.getElementsByTagName("span");
                for (var n = 0, r = t.length; n < r; n++)
                    if (t[n].getAttribute("data-picture") !== null) {
                        var i = t[n].getElementsByTagName("span"),
                            s = [];
                        for (var o = 0, u = i.length; o < u; o++) {
                            var a = i[o].getAttribute("data-media");
                            (!a || e.matchMedia && e.matchMedia(a).matches) && s.push(i[o])
                        }
                        var f = t[n].getElementsByTagName("img")[0];
                        if (s.length) {
                            var l = s.pop();
                            if (!f || f.parentNode.nodeName === "NOSCRIPT") f = e.document.createElement("img"), f.alt = t[n].getAttribute("data-alt");
                            else if (l === f.parentNode) continue;
                            f.src = l.getAttribute("data-src"), l.appendChild(f), f.width = l.getAttribute("data-width"), f.height = l.getAttribute("data-height")
                        } else f && f.parentNode.removeChild(f)
                    }
            }, e.addEventListener ? (e.addEventListener("resize", e.picturefill, !1), e.addEventListener("DOMContentLoaded", function () {
                e.picturefill(), e.removeEventListener("load", e.picturefill, !1)
            }, !1), e.addEventListener("load", e.picturefill, !1)) : e.attachEvent && e.attachEvent("onload", e.picturefill)
        }(this),
        function (e) {
            "use strict";

            function t(e, t, n) {
                return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : void 0
            }

            function n(e, t) {
                var n, r;
                for (n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return !0;
                return !1
            }

            function r(e, t) {
                var n;
                e.createTextRange ? (n = e.createTextRange(), n.move("character", t), n.select()) : e.selectionStart && (e.focus(), e.setSelectionRange(t, t))
            }

            function i(e, t) {
                try {
                    return e.type = t, !0
                } catch (n) {
                    return !1
                }
            }
            e.Placeholders = {
                Utils: {
                    addEventListener: t,
                    inArray: n,
                    moveCaret: r,
                    changeType: i
                }
            }
        }(this),
        function (e) {
            "use strict";

            function t() {}

            function n() {
                try {
                    return document.activeElement
                } catch (e) {}
            }

            function r(e, t) {
                var n, r, i = !!t && e.value !== t,
                    s = e.value === e.getAttribute(D);
                return (i || s) && "true" === e.getAttribute(P) ? (e.removeAttribute(P), e.value = e.value.replace(e.getAttribute(D), ""), e.className = e.className.replace(_, ""), r = e.getAttribute(q), parseInt(r, 10) >= 0 && (e.setAttribute("maxLength", r), e.removeAttribute(q)), n = e.getAttribute(H), n && (e.type = n), !0) : !1
            }

            function i(e) {
                var t, n, r = e.getAttribute(D);
                return "" === e.value && r ? (e.setAttribute(P, "true"), e.value = r, e.className += " " + M, n = e.getAttribute(q), n || (e.setAttribute(q, e.maxLength), e.removeAttribute("maxLength")), t = e.getAttribute(H), t ? e.type = "text" : "password" === e.type && X.changeType(e, "text") && e.setAttribute(H, "password"), !0) : !1
            }

            function s(e, t) {
                var n, r, i, s, o, u, a;
                if (e && e.getAttribute(D)) t(e);
                else
                    for (i = e ? e.getElementsByTagName("input") : v, s = e ? e.getElementsByTagName("textarea") : m, n = i ? i.length : 0, r = s ? s.length : 0, a = 0, u = n + r; u > a; a++) o = n > a ? i[a] : s[a - n], t(o)
            }

            function o(e) {
                s(e, r)
            }

            function u(e) {
                s(e, i)
            }

            function a(e) {
                return function () {
                    g && e.value === e.getAttribute(D) && "true" === e.getAttribute(P) ? X.moveCaret(e, 0) : r(e)
                }
            }

            function f(e) {
                return function () {
                    i(e)
                }
            }

            function l(e) {
                return function (t) {
                    return b = e.value, "true" === e.getAttribute(P) && b === e.getAttribute(D) && X.inArray(A, t.keyCode) ? (t.preventDefault && t.preventDefault(), !1) : void 0
                }
            }

            function c(e) {
                return function () {
                    r(e, b), "" === e.value && (e.blur(), X.moveCaret(e, 0))
                }
            }

            function h(e) {
                return function () {
                    e === n() && e.value === e.getAttribute(D) && "true" === e.getAttribute(P) && X.moveCaret(e, 0)
                }
            }

            function p(e) {
                return function () {
                    o(e)
                }
            }

            function d(e) {
                e.form && (T = e.form, "string" == typeof T && (T = document.getElementById(T)), T.getAttribute(B) || (X.addEventListener(T, "submit", p(T)), T.setAttribute(B, "true"))), X.addEventListener(e, "focus", a(e)), X.addEventListener(e, "blur", f(e)), g && (X.addEventListener(e, "keydown", l(e)), X.addEventListener(e, "keyup", c(e)), X.addEventListener(e, "click", h(e))), e.setAttribute(j, "true"), e.setAttribute(D, S), (g || e !== n()) && i(e)
            }
            var v, m, g, y, b, w, E, S, x, T, N, C, k, L = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
                A = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
                O = "#ccc",
                M = "placeholdersjs",
                _ = RegExp("(?:^|\\s)" + M + "(?!\\S)"),
                D = "data-placeholder-value",
                P = "data-placeholder-active",
                H = "data-placeholder-type",
                B = "data-placeholder-submit",
                j = "data-placeholder-bound",
                F = "data-placeholder-focus",
                I = "data-placeholder-live",
                q = "data-placeholder-maxlength",
                R = document.createElement("input"),
                U = document.getElementsByTagName("head")[0],
                z = document.documentElement,
                W = e.Placeholders,
                X = W.Utils;
            if (W.nativeSupport = void 0 !== R.placeholder, !W.nativeSupport) {
                for (v = document.getElementsByTagName("input"), m = document.getElementsByTagName("textarea"), g = "false" === z.getAttribute(F), y = "false" !== z.getAttribute(I), w = document.createElement("style"), w.type = "text/css", E = document.createTextNode("." + M + " { color:" + O + "; }"), w.styleSheet ? w.styleSheet.cssText = E.nodeValue : w.appendChild(E), U.insertBefore(w, U.firstChild), k = 0, C = v.length + m.length; C > k; k++) N = v.length > k ? v[k] : m[k - v.length], S = N.attributes.placeholder, S && (S = S.nodeValue, S && X.inArray(L, N.type) && d(N));
                x = setInterval(function () {
                    for (k = 0, C = v.length + m.length; C > k; k++) N = v.length > k ? v[k] : m[k - v.length], S = N.attributes.placeholder, S ? (S = S.nodeValue, S && X.inArray(L, N.type) && (N.getAttribute(j) || d(N), (S !== N.getAttribute(D) || "password" === N.type && !N.getAttribute(H)) && ("password" === N.type && !N.getAttribute(H) && X.changeType(N, "text") && N.setAttribute(H, "password"), N.value === N.getAttribute(D) && (N.value = S), N.setAttribute(D, S)))) : N.getAttribute(P) && (r(N), N.removeAttribute(D));
                    y || clearInterval(x)
                }, 100)
            }
            X.addEventListener(e, "beforeunload", function () {
                W.disable()
            }), W.disable = W.nativeSupport ? t : o, W.enable = W.nativeSupport ? t : u
        }(this),
        function (e, t, n, r) {
            function f(t, n) {
                this.element = t, this.$element = e(t).addClass("roll-carousel"), this.transitionEnd = "transitionend webkitTransitionEnd mozTransitionEnd msTransitionEnd";
                var r = this.$element.data("roll-carousel-options");
                this.settings = e.extend({}, e.fn[i].defaults, r, n), this._name = i, this.init()
            }
            var i = "rollCarousel",
                s = {
                    initialPage: 1,
                    slideSelector: null,
                    autoNext: !1,
                    autoTiming: 6e3,
                    controls: !0,
                    prevText: "Previous",
                    nextText: "Next",
                    pagination: !1,
                    paginationText: "{i}",
                    paginationElement: null,
                    latestKind: !1,
                    homePageFade: !1,
                    maxWidth: 1035,
                    transition: "0.5s all linear",
                    margin: 20,
                    grid: [1, 1],
                    sizes: {
                        500: {
                            transition: "0.7s all linear",
                            grid: [2, 1]
                        },
                        700: {
                            grid: [2, 2]
                        }
                    }
                },
                o = e(t),
                u = e("<div />"),
                a = e("<button />");
            f.prototype = {
                init: function () {
                    this.settings.slideSelector ? this.$slides = this.$element.find(this.settings.slideSelector) : this.$slides = this.$element.children(), this.currentPage = this.settings.initialPage, this.numSlides = this.$slides.length, this.elementWidth = this.$element.width(), this.isAnimating = !1, this.$outerWrapper = u.clone().addClass("outer-wrapper"), this.$wrapper = u.clone().addClass("wrapper"), this.$outerWrapper.append(this.$wrapper), this.$element.append(this.$outerWrapper), this.$wrapper.append(this.$slides), this.$outerWrapper.css("overflow", "hidden"), this.settings.controls && (this.settings.latestKind ? (this.$outerWrapper.append('<div class="navigationContainer" />'), this.$nextButton = a.clone().addClass("roll-next").text(this.settings.nextText).appendTo(this.$outerWrapper.find(".navigationContainer")), this.$prevButton = a.clone().addClass("roll-prev").text(this.settings.prevText).appendTo(this.$outerWrapper.find(".navigationContainer"))) : (this.$nextButton = a.clone().addClass("roll-next").text(this.settings.nextText).appendTo(this.$outerWrapper), this.$prevButton = a.clone().addClass("roll-prev").text(this.settings.prevText).appendTo(this.$outerWrapper))), this.setWrapper(), this.currentBreakpoint = this.getBreakpoint(), this.build(), this.settings.autoNext && (this.IntervalAutoNext = t.setInterval(function () {
                        this.next()
                    }.bind(this), this.settings.autoTiming));
                    var n = this;
                    if (this.settings.homePageFade) {
                        this.$slides.not(":first").css("opacity", 0);
                        var r = this.$slides.eq(0),
                            i = r.find(".centred-slide > div.slide-content");
                        !Modernizr.csstransitions || Modernizr.firefox ? (i.addClass("show"), i.find(".description").addClass("show"), i.find("a.hexagon-link").addClass("show"), n.isAnimating = !1) : i.addClass("show").on(n.transitionEnd, function () {
                            e(this).off(n.transitionEnd), i.find(".description").addClass("show").on(n.transitionEnd, function () {
                                e(this).off(n.transitionEnd), i.find("a.hexagon-link").addClass("show"), n.isAnimating = !1
                            })
                        })
                    }
                    this.$slides.on(this.transitionEnd, function () {
                        e(this).css("transition", ""), n.isAnimating = !1
                    }), this.setEvents(), o.resize(e.proxy(this.resize, this))
                },
                build: function () {
                    var e = this.getOption("grid");
                    this.buildSlides(e[0], e[1]), this.setPrevNext(), this.settings.pagination && this.buildPagination()
                },
                getSizes: function () {
                    return Object.keys(this.settings.sizes).sort(function (e, t) {
                        return e - t
                    })
                },
                getOption: function (e) {
                    var t = +this.currentBreakpoint,
                        n = this.settings.sizes,
                        r = this.settings[e];
                    if (t > 0)
                        if (e in n[t]) r = n[t][e];
                        else {
                            var i = this.getSizes();
                            for (var s = i.length - 1; s >= 0; s--) {
                                var o = +i[s];
                                if (o < t && e in n[o]) {
                                    r = n[o][e];
                                    break
                                }
                            }
                        }
                    return r
                },
                getBreakpoint: function () {
                    var e = this.elementWidth,
                        t = this.getSizes(),
                        n = null;
                    for (var r = t.length - 1; r >= 0; r--) {
                        var i = +t[r];
                        if (e >= i) {
                            n = i;
                            break
                        }
                    }
                    return n
                },
                setWrapper: function () {
                    this.$wrapper.css({
                        position: "relative"
                    })
                },
                resize: function () {
                    var e = this.getOption("grid");
                    this.elementWidth = this.$element.width(), this.currentBreakpoint = this.getBreakpoint(), this.build();
                    var t = this.getOption("grid");
                    e !== t && this.$element.trigger("gridChanged", t)
                },
                setEvents: function () {
                    this.settings.controls && (this.$nextButton.on("click", e.proxy(this.next, this)), this.$prevButton.on("click", e.proxy(this.prev, this))), this.$paginationContainer && this.$paginationContainer.on("click", "div", e.proxy(function (n) {
                        var r = e(n.target).index();
                        t.clearInterval(this.IntervalAutoNext), this.goToPage(r + 1)
                    }, this));
                    var n = this;
                    this.$element.on("swipe", function (e) {
                        e.direction === "left" && n.next(), e.direction === "right" && n.prev()
                    })
                },
                getPositionInfo: function (e, t) {
                    return this.settings.homePageFade ? {} : Modernizr.csstransforms3d ? {
                        transform: "translate3d(" + t + "px, " + e + "px, 0px)"
                    } : Modernizr.csstransforms ? {
                        transform: "translate(" + t + "px, " + e + "px)"
                    } : {
                        top: e,
                        left: t
                    }
                },
                buildSlides: function (t, n) {
                    this.$outerWrapper.css("height", ""), this.$wrapper.css("height", "");
                    var r = this,
                        i = this.perPage = t * n;
                    this.pages = Math.ceil(this.numSlides / this.perPage);
                    var s = this.getOption("maxWidth");
                    if (jQuery.type(s) === "string") {
                        var o = parseFloat(s.replace("%", "")) / 100;
                        s = this.elementWidth * o
                    }
                    s <= 0 && (s = Infinity);
                    var u = this.elementWidth,
                        a = this.getOption("margin"),
                        f = n > 1 ? a : 0,
                        l = (n - 1) * f,
                        c = (Math.min(s, u) - l) / n,
                        h = 0;
                    s < u && (h = (u - s) / 2);
                    var p = 0,
                        d = 0,
                        v = this.currentPage,
                        p = 0;
                    i === 1 ? this.$slides.each(function () {
                        var t = e(this).css({
                            width: c,
                            height: ""
                        }).outerHeight();
                        p = Math.max(p, t)
                    }) : p = this.$slides.first().css({
                        width: c,
                        height: ""
                    }).outerHeight(), this.$slides.each(function (s) {
                        var o = Math.floor(s / i),
                            l = e(this),
                            m = 0,
                            g = 0,
                            y = s % n,
                            b = h + y * (c + f),
                            E = d * (p + a);
                        m = b, g = E, y === n - 1 && (d++, d >= t && (d = 0)), o !== v - 1 && (m = b + u + f), l.css(e.extend({
                            position: "absolute",
                            width: c,
                            height: p
                        }, r.getPositionInfo(g, m))).data({
                            baseLeft: b,
                            baseTop: E
                        })
                    });
                    var m = p * t + (t - 1) * a;
                    if (this.pages === 1 && this.numSlides < i) {
                        var g = Math.ceil(this.numSlides / n);
                        m = p * g + (g - 1) * a
                    }
                    this.$outerWrapper.css("height", m), this.$wrapper.css("height", m), this.settings.latestKind && this.$slides.css("overflow", "hidden")
                },
                buildPagination: function () {
                    this.$paginationContainer || (this.settings.paginationElement ? this.$paginationContainer = this.settings.paginationElement : (this.$paginationContainer = u.clone().addClass("roll-pagination"), this.$paginationContainer.insertAfter(this.$outerWrapper))), this.$paginationContainer.empty();
                    for (var e = 0; e < this.pages; e++) {
                        var t = u.clone().text(this.settings.paginationText.replace("{i}", e));
                        e === this.currentPage - 1 && t.addClass("current"), this.$paginationContainer.append(t)
                    }
                },
                setPrevNext: function () {
                    if (!this.settings.controls) return;
                    this.currentPage === 1 ? this.$prevButton.prop("disabled", !0) : this.$prevButton.prop("disabled", !1), this.currentPage === this.pages ? this.$nextButton.prop("disabled", !0) : this.$nextButton.prop("disabled", !1)
                },
                getCurrentPage: function () {
                    return this.currentPage
                },
                goToPage: function (n, r) {
                    if (this.isAnimating) return;
                    if (this.currentPage == n) return;
                    var i = this,
                        s = this.getOption("margin"),
                        o = this.currentPage;
                    if (n <= 0 || n > this.pages) return;
                    this.settings.pagination && (this.$paginationContainer.find(".current").removeClass("current"), this.$paginationContainer.children().eq(n - 1).addClass("current")), this.currentPage = n, this.setPrevNext();
                    var u = this.elementWidth,
                        a = "";
                    !r && Modernizr.csstransitions && (a = this.getOption("transition"), this.isAnimating = !0), this.$slides.css("transition", "");
                    var f = (o - 1) * this.perPage,
                        l = f + this.perPage,
                        c = o > n,
                        h = u + s;
                    c && (h = -h);
                    var p = this.$slides.slice(f, l);
                    f = (n - 1) * this.perPage, l = f + this.perPage;
                    var d = this.$slides.slice(f, l);
                    this.settings.homePageFade ? (this.transition = "0.6s opacity", a = "0.6s opacity") : d.each(function () {
                        var t = e(this),
                            n = t.data(),
                            r = n.baseLeft,
                            s = n.baseTop;
                        t.css(i.getPositionInfo(s, r + h))
                    });
                    if (this.settings.homePageFade) t.setTimeout(function () {
                        Modernizr.csstransitions ? (d.each(function () {
                            var t = e(this);
                            t.css({
                                transition: a,
                                opacity: 1
                            }).on(i.transitionEnd, function () {
                                e(this).off(i.transitionEnd), i.isAnimating = !1;
                                var t = e(this).find(".centred-slide > div.slide-content");
                                t.addClass("show").on(i.transitionEnd, function () {
                                    e(this).off(i.transitionEnd), t.find(".description").addClass("show").on(i.transitionEnd, function () {
                                        e(this).off(i.transitionEnd), t.find("a.hexagon-link").addClass("show"), i.isAnimating = !1
                                    })
                                })
                            })
                        }), p.each(function () {
                            var t = e(this),
                                n = t.find(".centred-slide > div");
                            n.removeClass("show").on(i.transitionEnd, function () {
                                e(this).off(i.transitionEnd), e(this).find(".show").removeClass("show")
                            }), t.css({
                                transition: a,
                                opacity: 0
                            })
                        })) : (d.each(function () {
                            var t = e(this);
                            t.css({
                                opacity: 1
                            });
                            var n = e(this).find(".centred-slide > div.slide-content");
                            n.addClass("show"), n.find(".description").addClass("show"), n.find("a.hexagon-link").addClass("show"), i.isAnimating = !1
                        }), p.each(function () {
                            var t = e(this),
                                n = t.find(".centred-slide > div");
                            n.removeClass("show"), n.find(".show").removeClass("show"), t.css({
                                opacity: 0
                            })
                        }))
                    });
                    else if (this.settings.latestKind) {
                        var v = c ? "moveInLatestRev" : "moveInLatest",
                            m = c ? "moveOutLatestRev" : "moveOutLatest",
                            g = 0;
                        for (var y = 0; y < Math.max(d.length, p.length); y++) setTimeout(function (t) {
                            return function () {
                                var n = d.eq(t),
                                    r = p.eq(t);
                                if (n.length) {
                                    var s = n,
                                        o = s.data(),
                                        u = o.baseLeft,
                                        a = o.baseTop;
                                    s.css(i.getPositionInfo(a, u)), s.find("> div").css("animation", v + " 0.4s").one("webkitAnimationEnd animationEnd MozAnimationEnd MSAnimationEnd", function () {
                                        e(this).css("animation", "none"), i.isAnimating = !1
                                    })
                                }
                                if (r.length) {
                                    var s = r,
                                        o = s.data(),
                                        u = o.baseLeft - h,
                                        a = o.baseTop;
                                    s.find("> div").css("animation", m + " 0.4s").one("webkitAnimationEnd animationEnd MozAnimationEnd MSAnimationEnd", function () {
                                        e(this).css("animation", "none"), s.css(i.getPositionInfo(a, u))
                                    })
                                }
                            }
                        }.call(this, y), g), g += 150
                    } else t.setTimeout(function () {
                        d.each(function () {
                            var t = e(this),
                                n = t.data(),
                                r = n.baseLeft,
                                s = n.baseTop;
                            t.css(e.extend({
                                transition: a
                            }, i.getPositionInfo(s, r)))
                        }), p.each(function () {
                            var t = e(this),
                                n = t.data(),
                                r = n.baseLeft - h,
                                s = n.baseTop;
                            t.css(e.extend({
                                transition: a
                            }, i.getPositionInfo(s, r)))
                        })
                    });
                    this.$element.trigger("beforePageChange", [this.currentPage])
                },
                next: function () {
                    if (this.currentPage === this.pages) {
                        this.goToPage(1);
                        return
                    }
                    this.goToPage(this.currentPage + 1)
                },
                prev: function () {
                    if (this.currentPage === 1) {
                        this.goToPage(this.numSlides);
                        return
                    }
                    this.goToPage(this.currentPage - 1)
                }
            }, e.fn[i] = function (t) {
                var n = arguments;
                if (t === r || typeof t == "object") return this.each(function () {
                    e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new f(this, t))
                });
                if (typeof t == "string" && t[0] !== "_" && t !== "init") {
                    var s;
                    return this.each(function () {
                        var r = e.data(this, "plugin_" + i);
                        r instanceof f && typeof r[t] == "function" && (s = r[t].apply(r, Array.prototype.slice.call(n, 1))), t === "destroy" && e.data(this, "plugin_" + i, null)
                    }), s !== r ? s : this
                }
            }, e.fn[i].defaults = s
        }(jQuery, window, document),
        /*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
        n.SevenSegment = 7, n.FourteenSegment = 14, n.SixteenSegment = 16, n.SymmetricCorner = 0, n.SquaredCorner = 1, n.RoundedCorner = 2, n.prototype.setValue = function (e) {
            this.value = "" + e, this.draw()
        }, n.prototype.draw = function () {
            var e = this.displayEl;
            if (e) {
                var t = e.getContext("2d");
                if (t) {
                    t.clearRect(0, 0, e.width, e.height);
                    var n = 0,
                        r = !0;
                    if (this.pattern)
                        for (var i = 0; i < this.pattern.length; i++) {
                            var s = this.pattern.charAt(i).toLowerCase();
                            if (s == "#") n += this.digitWidth;
                            else if (s == "." || s == ":") n += this.segmentWidth;
                            else if (s != " ") return;
                            n += r ? 0 : this.digitDistance, r = !1
                        }
                    if (n <= 0) return;
                    var o = -1 * Math.max(-45, Math.min(45, this.displayAngle)),
                        u = Math.tan(o * Math.PI / 180),
                        a = Math.min(e.width / (n + Math.abs(u * this.digitHeight)), e.height / this.digitHeight),
                        f = (e.width - (n + u * this.digitHeight) * a) / 2,
                        l = (e.height - this.digitHeight * a) / 2;
                    t.save(), t.translate(f, l), t.scale(a, a), t.transform(1, 0, u, 1, 0, 0);
                    var c = 0,
                        h = this.value ? this.value.length : 0;
                    for (var i = 0; i < this.pattern.length; i++) {
                        var p = this.pattern.charAt(i),
                            d = i < h ? this.value.charAt(i).toLowerCase() : " ";
                        c += this.drawDigit(t, c, p, d)
                    }
                    t.restore()
                }
            }
        }, n.prototype.drawDigit = function (e, t, r, i) {
            switch (r) {
                case "#":
                    var s = Math.sqrt(this.segmentWidth * this.segmentWidth / 2),
                        o = Math.sqrt(this.segmentDistance * this.segmentDistance / 2),
                        u = o / 2,
                        a = (this.segmentWidth - o) * Math.sin(45 * Math.PI / 180),
                        f = a / 2,
                        l = (this.digitHeight - 3 * this.segmentWidth) / 2,
                        c = (this.digitWidth - 3 * this.segmentWidth) / 2,
                        h = this.segmentWidth / 2,
                        p = this.digitWidth / 2;
                    if (this.segmentCount == 16) {
                        var d = t,
                            v = 0;
                        e.fillStyle = this.getSegmentColor(i, null, "02356789abcdefgiopqrstz@%"), e.beginPath();
                        switch (this.cornerType) {
                            case n.SymmetricCorner:
                                e.moveTo(d + h + o, v + h), e.lineTo(d + this.segmentWidth + o, v);
                                break;
                            case n.SquaredCorner:
                                e.moveTo(d + h + u, v + h - u), e.lineTo(d + this.segmentWidth, v);
                                break;
                            default:
                                e.moveTo(d + this.segmentWidth - a, v + this.segmentWidth - a - o), e.quadraticCurveTo(d + this.segmentWidth - f, v, d + this.segmentWidth, v)
                        }
                        e.lineTo(d + p - o - h, v), e.lineTo(d + p - o, v + h), e.lineTo(d + p - o - h, v + this.segmentWidth), e.lineTo(d + this.segmentWidth + o, v + this.segmentWidth), e.fill();
                        var d = t,
                            v = 0;
                        e.fillStyle = this.getSegmentColor(i, null, "02356789abcdefgiopqrstz@"), e.beginPath(), e.moveTo(d + this.digitWidth - this.segmentWidth - o, v + this.segmentWidth), e.lineTo(d + p + o + h, v + this.segmentWidth), e.lineTo(d + p + o, v + h), e.lineTo(d + p + o + h, v);
                        switch (this.cornerType) {
                            case n.SymmetricCorner:
                                e.lineTo(d + this.digitWidth - this.segmentWidth - o, v), e.lineTo(d + this.digitWidth - h - o, v + h);
                                break;
                            case n.SquaredCorner:
                                e.lineTo(d + this.digitWidth - this.segmentWidth, v), e.lineTo(d + this.digitWidth - h - u, v + h - u);
                                break;
                            default:
                                e.lineTo(d + this.digitWidth - this.segmentWidth, v), e.quadraticCurveTo(d + this.digitWidth - this.segmentWidth + f, v, d + this.digitWidth - this.segmentWidth + a, v + this.segmentWidth - a - o)
                        }
                        e.fill()
                    } else {
                        var d = t,
                            v = 0;
                        e.fillStyle = this.getSegmentColor(i, "02356789acefp", "02356789abcdefgiopqrstz@"), e.beginPath();
                        switch (this.cornerType) {
                            case n.SymmetricCorner:
                                e.moveTo(d + h + o, v + h), e.lineTo(d + this.segmentWidth + o, v), e.lineTo(d + this.digitWidth - this.segmentWidth - o, v), e.lineTo(d + this.digitWidth - h - o, v + h);
                                break;
                            case n.SquaredCorner:
                                e.moveTo(d + h + u, v + h - u), e.lineTo(d + this.segmentWidth, v), e.lineTo(d + this.digitWidth - this.segmentWidth, v), e.lineTo(d + this.digitWidth - h - u, v + h - u);
                                break;
                            default:
                                e.moveTo(d + this.segmentWidth - a, v + this.segmentWidth - a - o), e.quadraticCurveTo(d + this.segmentWidth - f, v, d + this.segmentWidth, v), e.lineTo(d + this.digitWidth - this.segmentWidth, v), e.quadraticCurveTo(d + this.digitWidth - this.segmentWidth + f, v, d + this.digitWidth - this.segmentWidth + a, v + this.segmentWidth - a - o)
                        }
                        e.lineTo(d + this.digitWidth - this.segmentWidth - o, v + this.segmentWidth), e.lineTo(d + this.segmentWidth + o, v + this.segmentWidth), e.fill()
                    }
                    d = t + this.digitWidth - this.segmentWidth, v = 0, e.fillStyle = this.getSegmentColor(i, "01234789adhpy", "01234789abdhjmnopqruwy"), e.beginPath();
                    switch (this.cornerType) {
                        case n.SymmetricCorner:
                            e.moveTo(d + h, v + h + o), e.lineTo(d + this.segmentWidth, v + this.segmentWidth + o);
                            break;
                        case n.SquaredCorner:
                            e.moveTo(d + h + u, v + h + u), e.lineTo(d + this.segmentWidth, v + this.segmentWidth);
                            break;
                        default:
                            e.moveTo(d + a + o, v + this.segmentWidth - a), e.quadraticCurveTo(d + this.segmentWidth, v + this.segmentWidth - f, d + this.segmentWidth, v + this.segmentWidth)
                    }
                    e.lineTo(d + this.segmentWidth, v + l + this.segmentWidth - o), e.lineTo(d + h, v + l + this.segmentWidth + h - o), e.lineTo(d, v + l + this.segmentWidth - o), e.lineTo(d, v + this.segmentWidth + o), e.fill(), d = t + this.digitWidth - this.segmentWidth, v = l + this.segmentWidth, e.fillStyle = this.getSegmentColor(i, "013456789abdhnouy", "01346789abdghjmnoqsuw@", "%"), e.beginPath(), e.moveTo(d, v + this.segmentWidth + o), e.lineTo(d + h, v + h +
                        o), e.lineTo(d + this.segmentWidth, v + this.segmentWidth + o), e.lineTo(d + this.segmentWidth, v + l + this.segmentWidth - o);
                    switch (this.cornerType) {
                        case n.SymmetricCorner:
                            e.lineTo(d + h, v + l + this.segmentWidth + h - o), e.lineTo(d, v + l + this.segmentWidth - o);
                            break;
                        case n.SquaredCorner:
                            e.lineTo(d + h + u, v + l + this.segmentWidth + h - u), e.lineTo(d, v + l + this.segmentWidth - o);
                            break;
                        default:
                            e.quadraticCurveTo(d + this.segmentWidth, v + l + this.segmentWidth + f, d + a + o, v + l + this.segmentWidth + a), e.lineTo(d, v + l + this.segmentWidth - o)
                    }
                    e.fill();
                    if (this.segmentCount == 16) {
                        d = t, v = this.digitHeight - this.segmentWidth, e.fillStyle = this.getSegmentColor(i, null, "0235689bcdegijloqsuz_=@"), e.beginPath(), e.moveTo(d + this.segmentWidth + o, v), e.lineTo(d + p - o - h, v), e.lineTo(d + p - o, v + h), e.lineTo(d + p - o - h, v + this.segmentWidth);
                        switch (this.cornerType) {
                            case n.SymmetricCorner:
                                e.lineTo(d + this.segmentWidth + o, v + this.segmentWidth), e.lineTo(d + h + o, v + h);
                                break;
                            case n.SquaredCorner:
                                e.lineTo(d + this.segmentWidth, v + this.segmentWidth), e.lineTo(d + h + u, v + h + u);
                                break;
                            default:
                                e.lineTo(d + this.segmentWidth, v + this.segmentWidth), e.quadraticCurveTo(d + this.segmentWidth - f, v + this.segmentWidth, d + this.segmentWidth - a, v + a + o), e.lineTo(d + this.segmentWidth - a, v + a + o)
                        }
                        e.fill(), d = t, v = this.digitHeight - this.segmentWidth, e.fillStyle = this.getSegmentColor(i, null, "0235689bcdegijloqsuz_=@", "%"), e.beginPath(), e.moveTo(d + p + o + h, v + this.segmentWidth), e.lineTo(d + p + o, v + h), e.lineTo(d + p + o + h, v), e.lineTo(d + this.digitWidth - this.segmentWidth - o, v);
                        switch (this.cornerType) {
                            case n.SymmetricCorner:
                                e.lineTo(d + this.digitWidth - h - o, v + h), e.lineTo(d + this.digitWidth - this.segmentWidth - o, v + this.segmentWidth);
                                break;
                            case n.SquaredCorner:
                                e.lineTo(d + this.digitWidth - h - u, v + h + u), e.lineTo(d + this.digitWidth - this.segmentWidth, v + this.segmentWidth);
                                break;
                            default:
                                e.lineTo(d + this.digitWidth - this.segmentWidth + a, v + a + o), e.quadraticCurveTo(d + this.digitWidth - this.segmentWidth + f, v + this.segmentWidth, d + this.digitWidth - this.segmentWidth, v + this.segmentWidth)
                        }
                        e.fill()
                    } else {
                        d = t, v = this.digitHeight - this.segmentWidth, e.fillStyle = this.getSegmentColor(i, "0235689bcdelotuy_", "0235689bcdegijloqsuz_=@"), e.beginPath(), e.moveTo(d + this.segmentWidth + o, v), e.lineTo(d + this.digitWidth - this.segmentWidth - o, v);
                        switch (this.cornerType) {
                            case n.SymmetricCorner:
                                e.lineTo(d + this.digitWidth - h - o, v + h), e.lineTo(d + this.digitWidth - this.segmentWidth - o, v + this.segmentWidth), e.lineTo(d + this.segmentWidth + o, v + this.segmentWidth), e.lineTo(d + h + o, v + h);
                                break;
                            case n.SquaredCorner:
                                e.lineTo(d + this.digitWidth - h - u, v + h + u), e.lineTo(d + this.digitWidth - this.segmentWidth, v + this.segmentWidth), e.lineTo(d + this.segmentWidth, v + this.segmentWidth), e.lineTo(d + h + u, v + h + u);
                                break;
                            default:
                                e.lineTo(d + this.digitWidth - this.segmentWidth + a, v + a + o), e.quadraticCurveTo(d + this.digitWidth - this.segmentWidth + f, v + this.segmentWidth, d + this.digitWidth - this.segmentWidth, v + this.segmentWidth), e.lineTo(d + this.segmentWidth, v + this.segmentWidth), e.quadraticCurveTo(d + this.segmentWidth - f, v + this.segmentWidth, d + this.segmentWidth - a, v + a + o), e.lineTo(d + this.segmentWidth - a, v + a + o)
                        }
                        e.fill()
                    }
                    d = t, v = l + this.segmentWidth, e.fillStyle = this.getSegmentColor(i, "0268abcdefhlnoprtu", "0268acefghjklmnopqruvw@"), e.beginPath(), e.moveTo(d, v + this.segmentWidth + o), e.lineTo(d + h, v + h + o), e.lineTo(d + this.segmentWidth, v + this.segmentWidth + o), e.lineTo(d + this.segmentWidth, v + l + this.segmentWidth - o);
                    switch (this.cornerType) {
                        case n.SymmetricCorner:
                            e.lineTo(d + h, v + l + this.segmentWidth + h - o), e.lineTo(d, v + l + this.segmentWidth - o);
                            break;
                        case n.SquaredCorner:
                            e.lineTo(d + h - u, v + l + this.segmentWidth + h - o + u), e.lineTo(d, v + l + this.segmentWidth);
                            break;
                        default:
                            e.lineTo(d + this.segmentWidth - a - o, v + l + this.segmentWidth + a), e.quadraticCurveTo(d, v + l + this.segmentWidth + f, d, v + l + this.segmentWidth)
                    }
                    e.fill(), d = t, v = 0, e.fillStyle = this.getSegmentColor(i, "045689abcefhlpty", "045689acefghklmnopqrsuvwy@", "%"), e.beginPath(), e.moveTo(d + this.segmentWidth, v + this.segmentWidth + o), e.lineTo(d + this.segmentWidth, v + l + this.segmentWidth - o), e.lineTo(d + h, v + l + this.segmentWidth + h - o), e.lineTo(d, v + l + this.segmentWidth - o);
                    switch (this.cornerType) {
                        case n.SymmetricCorner:
                            e.lineTo(d, v + this.segmentWidth + o), e.lineTo(d + h, v + h + o);
                            break;
                        case n.SquaredCorner:
                            e.lineTo(d, v + this.segmentWidth), e.lineTo(d + h - u, v + h + u);
                            break;
                        default:
                            e.lineTo(d, v + this.segmentWidth), e.quadraticCurveTo(d, v + this.segmentWidth - f, d + this.segmentWidth - a - o, v + this.segmentWidth - a), e.lineTo(d + this.segmentWidth - a - o, v + this.segmentWidth - a)
                    }
                    return e.fill(), this.segmentCount == 7 && (d = t, v = (this.digitHeight - this.segmentWidth) / 2, e.fillStyle = this.getSegmentColor(i, "2345689abdefhnoprty-="), e.beginPath(), e.moveTo(d + h + o, v + h), e.lineTo(d + this.segmentWidth + o, v), e.lineTo(d + this.digitWidth - this.segmentWidth - o, v), e.lineTo(d + this.digitWidth - h - o, v + h), e.lineTo(d + this.digitWidth - this.segmentWidth - o, v + this.segmentWidth), e.lineTo(d + this.segmentWidth + o, v + this.segmentWidth), e.fill()), this.segmentCount != 7 && (d = t, v = (this.digitHeight - this.segmentWidth) / 2, e.fillStyle = this.getSegmentColor(i, null, "2345689aefhkprsy-+*=", "%"), e.beginPath(), e.moveTo(d + h + o, v + h), e.lineTo(d + this.segmentWidth + o, v), e.lineTo(d + p - o - h, v), e.lineTo(d + p - o, v + h), e.lineTo(d + p - o - h, v + this.segmentWidth), e.lineTo(d + this.segmentWidth + o, v + this.segmentWidth), e.fill(), d = t, v = (this.digitHeight - this.segmentWidth) / 2, e.fillStyle = this.getSegmentColor(i, null, "234689abefghprsy-+*=@", "%"), e.beginPath(), e.moveTo(d + p + o, v + h), e.lineTo(d + p + o + h, v), e.lineTo(d + this.digitWidth - this.segmentWidth - o, v), e.lineTo(d + this.digitWidth - h - o, v + h), e.lineTo(d + this.digitWidth - this.segmentWidth - o, v + this.segmentWidth), e.lineTo(d + p + o + h, v + this.segmentWidth), e.fill(), d = t + p - h, v = 0, e.fillStyle = this.getSegmentColor(i, null, "bdit+*", "%"), e.beginPath(), this.segmentCount == 14 ? (e.moveTo(d, v + this.segmentWidth + this.segmentDistance), e.lineTo(d + this.segmentWidth, v + this.segmentWidth + this.segmentDistance)) : (e.moveTo(d, v + this.segmentWidth + o), e.lineTo(d + h, v + h + o), e.lineTo(d + this.segmentWidth, v + this.segmentWidth + o)), e.lineTo(d + this.segmentWidth, v + l + this.segmentWidth - o), e.lineTo(d + h, v + l + this.segmentWidth + h - o), e.lineTo(d, v + l + this.segmentWidth - o), e.fill(), d = t + p - h, v = this.digitHeight, e.fillStyle = this.getSegmentColor(i, null, "bdity+*@", "%"), e.beginPath(), this
                        .segmentCount == 14 ? (e.moveTo(d, v - this.segmentWidth - this.segmentDistance), e.lineTo(d + this.segmentWidth, v - this.segmentWidth - this.segmentDistance)) : (e.moveTo(d, v - this.segmentWidth - o), e.lineTo(d + h, v - h - o), e.lineTo(d + this.segmentWidth, v - this.segmentWidth - o)), e.lineTo(d + this.segmentWidth, v - l - this.segmentWidth + o), e.lineTo(d + h, v - l - this.segmentWidth - h + o), e.lineTo(d, v - l - this.segmentWidth + o), e.fill(), d = t + this.segmentWidth, v = this.segmentWidth, e.fillStyle = this.getSegmentColor(i, null, "mnx\\*"), e.beginPath(), e.moveTo(d + this.segmentDistance, v + this.segmentDistance), e.lineTo(d + this.segmentDistance + s, v + this.segmentDistance), e.lineTo(d + c - this.segmentDistance, v + l - this.segmentDistance - s), e.lineTo(d + c - this.segmentDistance, v + l - this.segmentDistance), e.lineTo(d + c - this.segmentDistance - s, v + l - this.segmentDistance), e.lineTo(d + this.segmentDistance, v + this.segmentDistance + s), e.fill(), d = t + c + 2 * this.segmentWidth, v = this.segmentWidth, e.fillStyle = this.getSegmentColor(i, null, "0kmvxz/*", "%"), e.beginPath(), e.moveTo(d + c - this.segmentDistance, v + this.segmentDistance), e.lineTo(d + c - this.segmentDistance, v + this.segmentDistance + s), e.lineTo(d + this.segmentDistance + s, v + l - this.segmentDistance), e.lineTo(d + this.segmentDistance, v + l - this.segmentDistance), e.lineTo(d + this.segmentDistance, v + l - this.segmentDistance - s), e.lineTo(d + c - this.segmentDistance - s, v + this.segmentDistance), e.fill(), d = t + c + 2 * this.segmentWidth, v = l + 2 * this.segmentWidth, e.fillStyle = this.getSegmentColor(i, null, "5knqrwx\\*"), e.beginPath(), e.moveTo(d + this.segmentDistance, v + this.segmentDistance), e.lineTo(d + this.segmentDistance + s, v + this.segmentDistance), e.lineTo(d + c - this.segmentDistance, v + l - this.segmentDistance - s), e.lineTo(d + c - this.segmentDistance, v + l - this.segmentDistance), e.lineTo(d + c - this.segmentDistance - s, v + l - this.segmentDistance), e.lineTo(d + this.segmentDistance, v + this.segmentDistance + s), e.fill(), d = t + this.segmentWidth, v = l + 2 * this.segmentWidth, e.fillStyle = this.getSegmentColor(i, null, "0vwxz/*", "%"), e.beginPath(), e.moveTo(d + c - this.segmentDistance, v + this.segmentDistance), e.lineTo(d + c - this.segmentDistance, v + this.segmentDistance + s), e.lineTo(d + this.segmentDistance + s, v + l - this.segmentDistance), e.lineTo(d + this.segmentDistance, v + l - this.segmentDistance), e.lineTo(d + this.segmentDistance, v + l - this.segmentDistance - s), e.lineTo(d + c - this.segmentDistance - s, v + this.segmentDistance), e.fill()), this.digitDistance + this.digitWidth;
                case ".":
                    return e.fillStyle = i == "#" || i == "." ? this.colorOn : this.colorOff, this.drawPoint(e, t, this.digitHeight - this.segmentWidth, this.segmentWidth), this.digitDistance + this.segmentWidth;
                case ":":
                    e.fillStyle = i == "#" || i == ":" ? this.colorOn : this.colorOff;
                    var v = (this.digitHeight - this.segmentWidth) / 2 - this.segmentWidth;
                    return this.drawPoint(e, t, v, this.segmentWidth), this.drawPoint(e, t, v + 2 * this.segmentWidth, this.segmentWidth), this.digitDistance + this.segmentWidth;
                default:
                    return this.digitDistance
            }
        }, n.prototype.drawPoint = function (e, t, n, r) {
            var i = t + r,
                s = n + r,
                o = r / 4;
            e.beginPath(), e.moveTo(i - o, n), e.quadraticCurveTo(i, n, i, n + o), e.lineTo(i, s - o), e.quadraticCurveTo(i, s, i - o, s), e.lineTo(t + o, s), e.quadraticCurveTo(t, s, t, s - o), e.lineTo(t, n + o), e.quadraticCurveTo(t, n, t + o, n), e.fill()
        }, n.prototype.getSegmentColor = function (e, t, n, r) {
            if (e == "#") return this.colorOn;
            switch (this.segmentCount) {
                case 7:
                    return t.indexOf(e) == -1 ? this.colorOff : this.colorOn;
                case 14:
                    return n.indexOf(e) == -1 ? this.colorOff : this.colorOn;
                case 16:
                    var i = n + (r === undefined ? "" : r);
                    return i.indexOf(e) == -1 ? this.colorOff : this.colorOn;
                default:
                    return this.colorOff
            }
        }, window.SegmentDisplay = n,
        function (e) {
            var t = "0.4.2",
                n = "hasOwnProperty",
                r = /[\.\/]/,
                i = "*",
                s = function () {},
                o = function (e, t) {
                    return e - t
                },
                u, a, f = {
                    n: {}
                },
                l = function (e, t) {
                    e = String(e);
                    var n = f,
                        r = a,
                        i = Array.prototype.slice.call(arguments, 2),
                        s = l.listeners(e),
                        c = 0,
                        h = !1,
                        p, d = [],
                        v = {},
                        m = [],
                        g = u,
                        y = [];
                    u = e, a = 0;
                    for (var b = 0, w = s.length; b < w; b++) "zIndex" in s[b] && (d.push(s[b].zIndex), s[b].zIndex < 0 && (v[s[b].zIndex] = s[b]));
                    d.sort(o);
                    while (d[c] < 0) {
                        p = v[d[c++]], m.push(p.apply(t, i));
                        if (a) return a = r, m
                    }
                    for (b = 0; b < w; b++) {
                        p = s[b];
                        if ("zIndex" in p)
                            if (p.zIndex == d[c]) {
                                m.push(p.apply(t, i));
                                if (a) break;
                                do {
                                    c++, p = v[d[c]], p && m.push(p.apply(t, i));
                                    if (a) break
                                } while (p)
                            } else v[p.zIndex] = p;
                        else {
                            m.push(p.apply(t, i));
                            if (a) break
                        }
                    }
                    return a = r, u = g, m.length ? m : null
                };
            l._events = f, l.listeners = function (e) {
                var t = e.split(r),
                    n = f,
                    s, o, u, a, l, c, h, p, d = [n],
                    v = [];
                for (a = 0, l = t.length; a < l; a++) {
                    p = [];
                    for (c = 0, h = d.length; c < h; c++) {
                        n = d[c].n, o = [n[t[a]], n[i]], u = 2;
                        while (u--) s = o[u], s && (p.push(s), v = v.concat(s.f || []))
                    }
                    d = p
                }
                return v
            }, l.on = function (e, t) {
                e = String(e);
                if (typeof t != "function") return function () {};
                var n = e.split(r),
                    i = f;
                for (var o = 0, u = n.length; o < u; o++) i = i.n, i = i.hasOwnProperty(n[o]) && i[n[o]] || (i[n[o]] = {
                    n: {}
                });
                i.f = i.f || [];
                for (o = 0, u = i.f.length; o < u; o++)
                    if (i.f[o] == t) return s;
                return i.f.push(t),
                    function (e) {
                        +e == +e && (t.zIndex = +e)
                    }
            }, l.f = function (e) {
                var t = [].slice.call(arguments, 1);
                return function () {
                    l.apply(null, [e, null].concat(t).concat([].slice.call(arguments, 0)))
                }
            }, l.stop = function () {
                a = 1
            }, l.nt = function (e) {
                return e ? (new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)")).test(u) : u
            }, l.nts = function () {
                return u.split(r)
            }, l.off = l.unbind = function (e, t) {
                if (!e) {
                    l._events = f = {
                        n: {}
                    };
                    return
                }
                var s = e.split(r),
                    o, u, a, c, h, p, d, v = [f];
                for (c = 0, h = s.length; c < h; c++)
                    for (p = 0; p < v.length; p += a.length - 2) {
                        a = [p, 1], o = v[p].n;
                        if (s[c] != i) o[s[c]] && a.push(o[s[c]]);
                        else
                            for (u in o) o[n](u) && a.push(o[u]);
                        v.splice.apply(v, a)
                    }
                for (c = 0, h = v.length; c < h; c++) {
                    o = v[c];
                    while (o.n) {
                        if (t) {
                            if (o.f) {
                                for (p = 0, d = o.f.length; p < d; p++)
                                    if (o.f[p] == t) {
                                        o.f.splice(p, 1);
                                        break
                                    }!o.f.length && delete o.f
                            }
                            for (u in o.n)
                                if (o.n[n](u) && o.n[u].f) {
                                    var m = o.n[u].f;
                                    for (p = 0, d = m.length; p < d; p++)
                                        if (m[p] == t) {
                                            m.splice(p, 1);
                                            break
                                        }!m.length && delete o.n[u].f
                                }
                        } else {
                            delete o.f;
                            for (u in o.n) o.n[n](u) && o.n[u].f && delete o.n[u].f
                        }
                        o = o.n
                    }
                }
            }, l.once = function (e, t) {
                var n = function () {
                    return l.unbind(e, n), t.apply(this, arguments)
                };
                return l.on(e, n)
            }, l.version = t, l.toString = function () {
                return "You are running Eve " + t
            }, typeof module != "undefined" && module.exports ? module.exports = l : typeof define != "undefined" ? define("eve", [], function () {
                return l
            }) : e.eve = l
        }(this),
        function (e, t) {
            typeof define == "function" && define.amd ? define(["eve"], function (n) {
                return t(e, n)
            }) : t(e, e.eve)
        }(this, function (e, t) {
            var n = function (t) {
                    var n = {},
                        r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
                            setTimeout(e, 16)
                        },
                        i = Array.isArray || function (e) {
                            return e instanceof Array || Object.prototype.toString.call(e) == "[object Array]"
                        },
                        s = 0,
                        o = "M" + (+(new Date)).toString(36),
                        u = function () {
                            return o + (s++).toString(36)
                        },
                        a = function (e, t, n, r) {
                            if (i(e)) {
                                res = [];
                                for (var s = 0, o = e.length; s < o; s++) res[s] = a(e[s], t, n[s], r);
                                return res
                            }
                            var u = (n - e) / (r - t);
                            return function (n) {
                                return e + u * (n - t)
                            }
                        },
                        f = Date.now || function () {
                            return +(new Date)
                        },
                        l = function (e) {
                            var t = this;
                            if (e == null) return t.s;
                            var n = t.s - e;
                            t.b += t.dur * n, t.B += t.dur * n, t.s = e
                        },
                        c = function (e) {
                            var t = this;
                            if (e == null) return t.spd;
                            t.spd = e
                        },
                        h = function (e) {
                            var t = this;
                            if (e == null) return t.dur;
                            t.s = t.s * e / t.dur, t.dur = e
                        },
                        p = function () {
                            var e = this;
                            delete n[e.id], t("mina.stop." + e.id, e)
                        },
                        d = function () {
                            var e = this;
                            if (e.pdif) return;
                            delete n[e.id], e.pdif = e.get() - e.b
                        },
                        v = function () {
                            var e = this;
                            if (!e.pdif) return;
                            e.b = e.get() - e.pdif, delete e.pdif, n[e.id] = e
                        },
                        m = function () {
                            var e = 0;
                            for (var s in n)
                                if (n.hasOwnProperty(s)) {
                                    var o = n[s],
                                        u = o.get(),
                                        a;
                                    e++, o.s = (u - o.b) / (o.dur / o.spd), o.s >= 1 && (delete n[s], o.s = 1, e--, function (e) {
                                        setTimeout(function () {
                                            t("mina.finish." + e.id, e)
                                        })
                                    }(o));
                                    if (i(o.start)) {
                                        a = [];
                                        for (var f = 0, l = o.start.length; f < l; f++) a[f] = +o.start[f] + (o.end[f] - o.start[f]) * o.easing(o.s)
                                    } else a = +o.start + (o.end - o.start) * o.easing(o.s);
                                    o.set(a)
                                }
                            e && r(m)
                        },
                        g = function (e, t, i, s, o, a, f) {
                            var y = {
                                id: u(),
                                start: e,
                                end: t,
                                b: i,
                                s: 0,
                                dur: s - i,
                                spd: 1,
                                get: o,
                                set: a,
                                easing: f || g.linear,
                                status: l,
                                speed: c,
                                duration: h,
                                stop: p,
                                pause: d,
                                resume: v
                            };
                            n[y.id] = y;
                            var b = 0,
                                w;
                            for (w in n)
                                if (n.hasOwnProperty(w)) {
                                    b++;
                                    if (b == 2) break
                                }
                            return b == 1 && r(m), y
                        };
                    return g.time = f, g.getById = function (e) {
                        return n[e] || null
                    }, g.linear = function (e) {
                        return e
                    }, g.easeout = function (e) {
                        return Math.pow(e, 1.7)
                    }, g.easein = function (e) {
                        return Math.pow(e, .48)
                    }, g.easeinout = function (e) {
                        if (e == 1) return 1;
                        if (e == 0) return 0;
                        var t = .48 - e / 1.04,
                            n = Math.sqrt(.1734 + t * t),
                            r = n - t,
                            i = Math.pow(Math.abs(r), 1 / 3) * (r < 0 ? -1 : 1),
                            s = -n - t,
                            o = Math.pow(Math.abs(s), 1 / 3) * (s < 0 ? -1 : 1),
                            u = i + o + .5;
                        return (1 - u) * 3 * u * u + u * u * u
                    }, g.backin = function (e) {
                        if (e == 1) return 1;
                        var t = 1.70158;
                        return e * e * ((t + 1) * e - t)
                    }, g.backout = function (e) {
                        if (e == 0) return 0;
                        e -= 1;
                        var t = 1.70158;
                        return e * e * ((t + 1) * e + t) + 1
                    }, g.elastic = function (e) {
                        return e == !!e ? e : Math.pow(2, -10 * e) * Math.sin((e - .075) * 2 * Math.PI / .3) + 1
                    }, g.bounce = function (e) {
                        var t = 7.5625,
                            n = 2.75,
                            r;
                        return e < 1 / n ? r = t * e * e : e < 2 / n ? (e -= 1.5 / n, r = t * e * e + .75) : e < 2.5 / n ? (e -= 2.25 / n, r = t * e * e + .9375) : (e -= 2.625 / n, r = t * e * e + .984375), r
                    }, e.mina = g, g
                }(typeof t == "undefined" ? function () {} : t),
                r = function () {
                    function r(e, t) {
                        if (e) {
                            if (e.tagName) return gt(e);
                            if (e instanceof ht) return e;
                            if (t == null) return e = i.doc.querySelector(e), gt(e)
                        }
                        return e = e == null ? "100%" : e, t = t == null ? "100%" : t, new mt(e, t)
                    }

                    function I(e, t) {
                        if (t) {
                            typeof e == "string" && (e = I(e));
                            if (typeof t == "string") return t.substring(0, 6) == "xlink:" ? e.getAttributeNS(H, t.substring(6)) : t.substring(0, 4) == "xml:" ? e.getAttributeNS(B, t.substring(4)) : e.getAttribute(t);
                            for (var n in t)
                                if (t[s](n)) {
                                    var r = o(t[n]);
                                    r ? n.substring(0, 6) == "xlink:" ? e.setAttributeNS(H, n.substring(6), r) : n.substring(0, 4) == "xml:" ? e.setAttributeNS(B, n.substring(4), r) : e.setAttribute(n, r) : e.removeAttribute(n)
                                }
                        } else e = i.doc.createElementNS(B, e);
                        return e
                    }

                    function q(e) {
                        var t = e.attributes,
                            n, r = {};
                        for (var i = 0; i < t.length; i++) t[i].namespaceURI == H ? n = "xlink:" : n = "", n += t[i].name, r[n] = t[i].textContent;
                        return r
                    }

                    function R(e, t) {
                        return t = o.prototype.toLowerCase.call(t), t == "finite" ? isFinite(e) : t == "array" && (e instanceof Array || Array.isArray && Array.isArray(e)) ? !0 : t == "null" && e === null || t == typeof e && e !== null || t == "object" && e === Object(e) || b.call(e).slice(8, -1).toLowerCase() == t
                    }

                    function z(e) {
                        if (typeof e == "function" || Object(e) !== e) return e;
                        var t = new e.constructor;
                        for (var n in e) e[s](n) && (t[n] = z(e[n]));
                        return t
                    }

                    function W(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return e.push(e.splice(n, 1)[0])
                    }

                    function X(e, t, n) {
                        function r() {
                            var i = Array.prototype.slice.call(arguments, 0),
                                o = i.join("\u2400"),
                                u = r.cache = r.cache || {},
                                a = r.count = r.count || [];
                            return u[s](o) ? (W(a, o), n ? n(u[o]) : u[o]) : (a.length >= 1e3 && delete u[a.shift()], a.push(o), u[o] = e.apply(t, i), n ? n(u[o]) : u[o])
                        }
                        return r
                    }

                    function V(e, t, n, r, i, s) {
                        if (i == null) {
                            var o = e - n,
                                u = t - r;
                            return !o && !u ? 0 : (180 + f.atan2(-u, -o) * 180 / d + 360) % 360
                        }
                        return V(e, t, i, s) - V(n, r, i, s)
                    }

                    function $(e) {
                        return e % 360 * d / 180
                    }

                    function J(e) {
                        return e * 180 / d % 360
                    }

                    function K() {
                        return this.x + y + this.y
                    }

                    function Q() {
                        return this.x + y + this.y + y + this.width + " \u00d7 " + this.height
                    }

                    function G(e, t, n, r, i, s) {
                        if (t == null && b.call(e) == "[object SVGMatrix]") {
                            this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.e = e.e, this.f = e.f;
                            return
                        }
                        e != null ? (this.a = +e, this.b = +t, this.c = +n, this.d = +r, this.e = +i, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
                    }

                    function st(e) {
                        var t = [];
                        return e = e.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (e, n, r) {
                            return r = r.split(/\s*,\s*|\s+/), n == "rotate" && r.length == 1 && r.push(0, 0), n == "scale" && (r.length == 2 && r.push(0, 0), r.length == 1 && r.push(r[0], 0, 0)), n == "skewX" ? t.push(["m", 1, 0, f.tan($(r[0])), 1, 0, 0]) : n == "skewY" ? t.push(["m", 1, f.tan($(r[0])), 0, 1, 0, 0]) : t.push([n.charAt(0)].concat(r)), e
                        }), t
                    }

                    function ot(e, t) {
                        var n = it(e),
                            r = new G;
                        if (n)
                            for (var i = 0, s = n.length; i < s; i++) {
                                var u = n[i],
                                    a = u.length,
                                    f = o(u[0]).toLowerCase(),
                                    l = u[0] != f,
                                    c = l ? r.invert() : 0,
                                    h, p, d, v, m;
                                f == "t" && a == 2 ? r.translate(u[1], 0) : f == "t" && a == 3 ? l ? (h = c.x(0, 0), p = c.y(0, 0), d = c.x(u[1], u[2]), v = c.y(u[1], u[2]), r.translate(d - h, v - p)) : r.translate(u[1], u[2]) : f == "r" ? a == 2 ? (m = m || t, r.rotate(u[1], m.x + m.width / 2, m.y + m.height / 2)) : a == 4 && (l ? (d = c.x(u[2], u[3]), v = c.y(u[2], u[3]), r.rotate(u[1], d, v)) : r.rotate(u[1], u[2], u[3])) : f == "s" ? a == 2 || a == 3 ? (m = m || t, r.scale(u[1], u[a - 1], m.x + m.width / 2, m.y + m.height / 2)) : a == 4 ? l ? (d = c.x(u[2], u[3]), v = c.y(u[2], u[3]), r.scale(u[1], u[1], d, v)) : r.scale(u[1], u[1], u[2], u[3]) : a == 5 && (l ? (d = c.x(u[3], u[4]), v = c.y(u[3], u[4]), r.scale(u[1], u[2], d, v)) : r.scale(u[1], u[2], u[3], u[4])) : f == "m" && a == 7 && r.add(u[1], u[2], u[3], u[4], u[5], u[6])
                            }
                        return r
                    }

                    function ut(e, t) {
                        if (t == null) {
                            var n = !0;
                            e.type == "linearGradient" || e.type == "radialGradient" ? t = e.node.getAttribute("gradientTransform") : e.type == "pattern" ?
                                t = e.node.getAttribute("patternTransform") : t = e.node.getAttribute("transform");
                            if (!t) return new G;
                            t = st(t)
                        } else r._.rgTransform.test(t) ? t = o(t).replace(/\.{3}|\u2026/g, e._.transform || m) : t = st(t), R(t, "array") && (t = r.path ? r.path.toString.call(t) : o(t)), e._.transform = t;
                        var i = ot(t, e.getBBox(1));
                        if (n) return i;
                        e.matrix = i
                    }

                    function ft(e) {
                        var t = r._.someDefs;
                        if (t && at(t.ownerDocument.documentElement, t)) return t;
                        var n = e.node.ownerSVGElement && gt(e.node.ownerSVGElement) || e.node.parentNode && gt(e.node.parentNode) || r.select("svg") || r(0, 0),
                            i = n.select("defs"),
                            s = i == null ? !1 : i.node;
                        return s || (s = vt("defs", n.node).node), r._.someDefs = s, s
                    }

                    function lt(e, t, n) {
                        function o(e) {
                            return e == null ? m : e == +e ? e : (I(s, {
                                width: e
                            }), s.getBBox().width)
                        }

                        function u(e) {
                            return e == null ? m : e == +e ? e : (I(s, {
                                height: e
                            }), s.getBBox().height)
                        }

                        function a(r, s) {
                            t == null ? i[r] = s(e.attr(r)) : r == t && (i = s(n == null ? e.attr(r) : n))
                        }
                        var r = ft(e),
                            i = {},
                            s = r.querySelector(".svg---mgr");
                        s || (s = I("rect"), I(s, {
                            width: 10,
                            height: 10,
                            "class": "svg---mgr"
                        }), r.appendChild(s));
                        switch (e.type) {
                            case "rect":
                                a("rx", o), a("ry", u);
                            case "image":
                                a("width", o), a("height", u);
                            case "text":
                                a("x", o), a("y", u);
                                break;
                            case "circle":
                                a("cx", o), a("cy", u), a("r", o);
                                break;
                            case "ellipse":
                                a("cx", o), a("cy", u), a("rx", o), a("ry", u);
                                break;
                            case "line":
                                a("x1", o), a("x2", o), a("y1", u), a("y2", u);
                                break;
                            case "marker":
                                a("refX", o), a("markerWidth", o), a("refY", u), a("markerHeight", u);
                                break;
                            case "radialGradient":
                                a("fx", o), a("fy", u);
                                break;
                            case "tspan":
                                a("dx", o), a("dy", u);
                                break;
                            default:
                                a(t, o)
                        }
                        return i
                    }

                    function ct(e) {
                        R(e, "array") || (e = Array.prototype.slice.call(arguments, 0));
                        var t = 0,
                            n = 0,
                            r = this.node;
                        while (this[t]) delete this[t++];
                        for (t = 0; t < e.length; t++) e[t].type == "set" ? e[t].forEach(function (e) {
                            r.appendChild(e.node)
                        }) : r.appendChild(e[t].node);
                        var i = r.childNodes;
                        for (t = 0; t < i.length; t++) this[n++] = gt(i[t]);
                        return this
                    }

                    function ht(e) {
                        if (e.snap in j) return j[e.snap];
                        var t = this.id = P(),
                            n;
                        try {
                            n = e.ownerSVGElement
                        } catch (r) {}
                        this.node = e, n && (this.paper = new mt(n)), this.type = e.tagName, this.anims = {}, this._ = {
                            transform: []
                        }, e.snap = t, j[t] = this;
                        if (this.type == "g") {
                            this.add = ct;
                            for (var i in mt.prototype) mt.prototype[s](i) && (this[i] = mt.prototype[i])
                        }
                    }

                    function pt(e) {
                        var t;
                        for (var n = 0, r = e.length; n < r; n++) {
                            t = t || e[n];
                            if (t) return t
                        }
                    }

                    function dt(e) {
                        this.node = e
                    }

                    function vt(e, t) {
                        var n = I(e);
                        t.appendChild(n);
                        var r = gt(n);
                        return r.type = e, r
                    }

                    function mt(e, t) {
                        var n, r, o, u = mt.prototype;
                        if (e && e.tagName == "svg") {
                            if (e.snap in j) return j[e.snap];
                            n = new ht(e), r = e.getElementsByTagName("desc")[0], o = e.getElementsByTagName("defs")[0], r || (r = I("desc"), r.appendChild(i.doc.createTextNode("Created with Snap")), n.node.appendChild(r)), o || (o = I("defs"), n.node.appendChild(o)), n.defs = o;
                            for (var a in u) u[s](a) && (n[a] = u[a]);
                            n.paper = n.root = n
                        } else n = vt("svg", i.doc.body), I(n.node, {
                            height: t,
                            version: 1.1,
                            width: e,
                            xmlns: B
                        });
                        return n
                    }

                    function gt(e) {
                        return e ? e instanceof ht || e instanceof dt ? e : e.tagName == "svg" ? new mt(e) : new ht(e) : e
                    }

                    function yt() {
                        return this.selectAll("stop")
                    }

                    function bt(e, t) {
                        var n = I("stop"),
                            i = {
                                offset: +t + "%"
                            };
                        return e = r.color(e), i["stop-color"] = e.hex, e.opacity < 1 && (i["stop-opacity"] = e.opacity), I(n, i), this.node.appendChild(n), this
                    }

                    function wt() {
                        if (this.type == "linearGradient") {
                            var e = I(this.node, "x1") || 0,
                                t = I(this.node, "x2") || 1,
                                n = I(this.node, "y1") || 0,
                                i = I(this.node, "y2") || 0;
                            return r._.box(e, n, f.abs(t - e), f.abs(i - n))
                        }
                        var s = this.node.cx || .5,
                            o = this.node.cy || .5,
                            u = this.node.r || 0;
                        return r._.box(s - u, o - u, u * 2, u * 2)
                    }

                    function Et(e, n) {
                        function f(e, t) {
                            var n = (t - u) / (e - a);
                            for (var r = a; r < e; r++) s[r].offset = +(+u + n * (r - a)).toFixed(2);
                            a = e, u = t
                        }
                        var r = pt(t("snap.util.grad.parse", null, n)),
                            i;
                        if (!r) return null;
                        r.params.unshift(e), r.type.toLowerCase() == "l" ? i = St.apply(0, r.params) : i = xt.apply(0, r.params), r.type != r.type.toLowerCase() && I(i.node, {
                            gradientUnits: "userSpaceOnUse"
                        });
                        var s = r.stops,
                            o = s.length,
                            u = 0,
                            a = 0;
                        o--;
                        for (var l = 0; l < o; l++) "offset" in s[l] && f(l, s[l].offset);
                        s[o].offset = s[o].offset || 100, f(o, s[o].offset);
                        for (l = 0; l <= o; l++) {
                            var c = s[l];
                            i.addStop(c.color, c.offset)
                        }
                        return i
                    }

                    function St(e, t, n, r, i) {
                        var s = vt("linearGradient", e);
                        return s.stops = yt, s.addStop = bt, s.getBBox = wt, t != null && I(s.node, {
                            x1: t,
                            y1: n,
                            x2: r,
                            y2: i
                        }), s
                    }

                    function xt(e, t, n, r, i, s) {
                        var o = vt("radialGradient", e);
                        return o.stops = yt, o.addStop = bt, o.getBBox = wt, t != null && I(o.node, {
                            cx: t,
                            cy: n,
                            r: r
                        }), i != null && s != null && I(o.node, {
                            fx: i,
                            fy: s
                        }), o
                    }

                    function Tt(e) {
                        return function (n) {
                            t.stop(), n instanceof dt && n.node.childNodes.length == 1 && (n.node.firstChild.tagName == "radialGradient" || n.node.firstChild.tagName == "linearGradient" || n.node.firstChild.tagName == "pattern") && (n = n.node.firstChild, ft(this).appendChild(n), n = gt(n));
                            if (n instanceof ht)
                                if (n.type == "radialGradient" || n.type == "linearGradient" || n.type == "pattern") {
                                    n.node.id || I(n.node, {
                                        id: n.id
                                    });
                                    var i = F(n.node.id)
                                } else i = n.attr(e);
                            else {
                                i = r.color(n);
                                if (i.error) {
                                    var s = Et(ft(this), n);
                                    s ? (s.node.id || I(s.node, {
                                        id: s.id
                                    }), i = F(s.node.id)) : i = n
                                } else i = o(i)
                            }
                            var u = {};
                            u[e] = i, I(this.node, u), this.node.style[e] = m
                        }
                    }

                    function kt(e) {
                        var t = [],
                            n = e.childNodes;
                        for (var r = 0, i = n.length; r < i; r++) {
                            var s = n[r];
                            s.nodeType == 3 && t.push(s.nodeValue), s.tagName == "tspan" && (s.childNodes.length == 1 && s.firstChild.nodeType == 3 ? t.push(s.firstChild.nodeValue) : t.push(kt(s)))
                        }
                        return t
                    }
                    r.version = "0.2.0", r.toString = function () {
                        return "Snap v" + this.version
                    }, r._ = {};
                    var i = {
                        win: e,
                        doc: e.document
                    };
                    r._.glob = i;
                    var s = "hasOwnProperty",
                        o = String,
                        u = parseFloat,
                        a = parseInt,
                        f = Math,
                        l = f.max,
                        c = f.min,
                        h = f.abs,
                        p = f.pow,
                        d = f.PI,
                        v = f.round,
                        m = "",
                        y = " ",
                        b = Object.prototype.toString,
                        w = /^url\(['"]?([^\)]+?)['"]?\)$/i,
                        E = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                        S = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                        x = /^url\(#?([^)]+)\)$/,
                        T = "	\n\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029",
                        N = new RegExp("[," + T + "]+"),
                        C = new RegExp("[" + T + "]", "g"),
                        k = new RegExp("[" + T + "]*,[" + T + "]*"),
                        L = {
                            hs: 1,
                            rg: 1
                        },
                        A = new RegExp("([a-z])[" + T + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" +
                            T + "]*,?[" + T + "]*)+)", "ig"),
                        O = new RegExp("([rstm])[" + T + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + T + "]*,?[" + T + "]*)+)", "ig"),
                        M = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + T + "]*,?[" + T + "]*", "ig"),
                        _ = 0,
                        D = "S" + (+(new Date)).toString(36),
                        P = function () {
                            return D + (_++).toString(36)
                        },
                        H = "http://www.w3.org/1999/xlink",
                        B = "http://www.w3.org/2000/svg",
                        j = {},
                        F = r.url = function (e) {
                            return "url('#" + e + "')"
                        };
                    r._.$ = I, r._.id = P, r.format = function () {
                        var e = /\{([^\}]+)\}/g,
                            t = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                            n = function (e, n, r) {
                                var i = r;
                                return n.replace(t, function (e, t, n, r, s) {
                                    t = t || r, i && (t in i && (i = i[t]), typeof i == "function" && s && (i = i()))
                                }), i = (i == null || i == r ? e : i) + "", i
                            };
                        return function (t, r) {
                            return o(t).replace(e, function (e, t) {
                                return n(e, t, r)
                            })
                        }
                    }();
                    var U = function () {
                        function e() {
                            this.parentNode.removeChild(this)
                        }
                        return function (t, n) {
                            var r = i.doc.createElement("img"),
                                s = i.doc.body;
                            r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function () {
                                n.call(r), r.onload = r.onerror = null, s.removeChild(r)
                            }, r.onerror = e, s.appendChild(r), r.src = t
                        }
                    }();
                    r._.clone = z, r._.cacher = X, r.rad = $, r.deg = J, r.angle = V, r.is = R, r.snapTo = function (e, t, n) {
                            n = R(n, "finite") ? n : 10;
                            if (R(e, "array")) {
                                var r = e.length;
                                while (r--)
                                    if (h(e[r] - t) <= n) return e[r]
                            } else {
                                e = +e;
                                var i = t % e;
                                if (i < n) return t - i;
                                if (i > e - n) return t - i + e
                            }
                            return t
                        },
                        function (e) {
                            function t(e) {
                                return e[0] * e[0] + e[1] * e[1]
                            }

                            function n(e) {
                                var n = f.sqrt(t(e));
                                e[0] && (e[0] /= n), e[1] && (e[1] /= n)
                            }
                            e.add = function (e, t, n, r, i, s) {
                                var o = [[], [], []],
                                    u = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                                    a = [[e, n, i], [t, r, s], [0, 0, 1]],
                                    f, l, c, h;
                                e && e instanceof G && (a = [[e.a, e.c, e.e], [e.b, e.d, e.f], [0, 0, 1]]);
                                for (f = 0; f < 3; f++)
                                    for (l = 0; l < 3; l++) {
                                        h = 0;
                                        for (c = 0; c < 3; c++) h += u[f][c] * a[c][l];
                                        o[f][l] = h
                                    }
                                return this.a = o[0][0], this.b = o[1][0], this.c = o[0][1], this.d = o[1][1], this.e = o[0][2], this.f = o[1][2], this
                            }, e.invert = function () {
                                var e = this,
                                    t = e.a * e.d - e.b * e.c;
                                return new G(e.d / t, -e.b / t, -e.c / t, e.a / t, (e.c * e.f - e.d * e.e) / t, (e.b * e.e - e.a * e.f) / t)
                            }, e.clone = function () {
                                return new G(this.a, this.b, this.c, this.d, this.e, this.f)
                            }, e.translate = function (e, t) {
                                return this.add(1, 0, 0, 1, e, t)
                            }, e.scale = function (e, t, n, r) {
                                return t == null && (t = e), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(e, 0, 0, t, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r), this
                            }, e.rotate = function (e, t, n) {
                                e = $(e), t = t || 0, n = n || 0;
                                var r = +f.cos(e).toFixed(9),
                                    i = +f.sin(e).toFixed(9);
                                return this.add(r, i, -i, r, t, n), this.add(1, 0, 0, 1, -t, -n)
                            }, e.x = function (e, t) {
                                return e * this.a + t * this.c + this.e
                            }, e.y = function (e, t) {
                                return e * this.b + t * this.d + this.f
                            }, e.get = function (e) {
                                return +this[o.fromCharCode(97 + e)].toFixed(4)
                            }, e.toString = function () {
                                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                            }, e.offset = function () {
                                return [this.e.toFixed(4), this.f.toFixed(4)]
                            }, e.split = function () {
                                var e = {};
                                e.dx = this.e, e.dy = this.f;
                                var r = [[this.a, this.c], [this.b, this.d]];
                                e.scalex = f.sqrt(t(r[0])), n(r[0]), e.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * e.shear, r[1][1] - r[0][1] * e.shear], e.scaley = f.sqrt(t(r[1])), n(r[1]), e.shear /= e.scaley;
                                var i = -r[0][1],
                                    s = r[1][1];
                                return s < 0 ? (e.rotate = J(f.acos(s)), i < 0 && (e.rotate = 360 - e.rotate)) : e.rotate = J(f.asin(i)), e.isSimple = !+e.shear.toFixed(9) && (e.scalex.toFixed(9) == e.scaley.toFixed(9) || !e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
                            }, e.toTransformString = function (e) {
                                var t = e || this.split();
                                return t.isSimple ? (t.scalex = +t.scalex.toFixed(4), t.scaley = +t.scaley.toFixed(4), t.rotate = +t.rotate.toFixed(4), (t.dx || t.dy ? "t" + [+t.dx.toFixed(4), +t.dy.toFixed(4)] : m) + (t.scalex != 1 || t.scaley != 1 ? "s" + [t.scalex, t.scaley, 0, 0] : m) + (t.rotate ? "r" + [+t.rotate.toFixed(4), 0, 0] : m)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                            }
                        }(G.prototype), r.Matrix = G, r.getRGB = X(function (e) {
                            if (!e || !!((e = o(e)).indexOf("-") + 1)) return {
                                r: -1,
                                g: -1,
                                b: -1,
                                hex: "none",
                                error: 1,
                                toString: tt
                            };
                            if (e == "none") return {
                                r: -1,
                                g: -1,
                                b: -1,
                                hex: "none",
                                toString: tt
                            };
                            !L[s](e.toLowerCase().substring(0, 2)) && e.charAt() != "#" && (e = Y(e));
                            if (!e) return {
                                r: -1,
                                g: -1,
                                b: -1,
                                hex: "none",
                                error: 1,
                                toString: tt
                            };
                            var t, n, i, h, p, d, v, m = e.match(E);
                            return m ? (m[2] && (h = a(m[2].substring(5), 16), i = a(m[2].substring(3, 5), 16), n = a(m[2].substring(1, 3), 16)), m[3] && (h = a((d = m[3].charAt(3)) + d, 16), i = a((d = m[3].charAt(2)) + d, 16), n = a((d = m[3].charAt(1)) + d, 16)), m[4] && (v = m[4].split(k), n = u(v[0]), v[0].slice(-1) == "%" && (n *= 2.55), i = u(v[1]), v[1].slice(-1) == "%" && (i *= 2.55), h = u(v[2]), v[2].slice(-1) == "%" && (h *= 2.55), m[1].toLowerCase().slice(0, 4) == "rgba" && (p = u(v[3])), v[3] && v[3].slice(-1) == "%" && (p /= 100)), m[5] ? (v = m[5].split(k), n = u(v[0]), v[0].slice(-1) == "%" && (n /= 100), i = u(v[1]), v[1].slice(-1) == "%" && (i /= 100), h = u(v[2]), v[2].slice(-1) == "%" && (h /= 100), (v[0].slice(-3) == "deg" || v[0].slice(-1) == "\u00b0") && (n /= 360), m[1].toLowerCase().slice(0, 4) == "hsba" && (p = u(v[3])), v[3] && v[3].slice(-1) == "%" && (p /= 100), r.hsb2rgb(n, i, h, p)) : m[6] ? (v = m[6].split(k), n = u(v[0]), v[0].slice(-1) == "%" && (n /= 100), i = u(v[1]), v[1].slice(-1) == "%" && (i /= 100), h = u(v[2]), v[2].slice(-1) == "%" && (h /= 100), (v[0].slice(-3) == "deg" || v[0].slice(-1) == "\u00b0") && (n /= 360), m[1].toLowerCase().slice(0, 4) == "hsla" && (p = u(v[3])), v[3] && v[3].slice(-1) == "%" && (p /= 100), r.hsl2rgb(n, i, h, p)) : (n = c(f.round(n), 255), i = c(f.round(i), 255), h = c(f.round(h), 255), p = c(l(p, 0), 1), m = {
                                r: n,
                                g: i,
                                b: h,
                                toString: tt
                            }, m.hex = "#" + (16777216 | h | i << 8 | n << 16).toString(16).slice(1), m.opacity = R(p, "finite") ? p : 1, m)) : {
                                r: -1,
                                g: -1,
                                b: -1,
                                hex: "none",
                                error: 1,
                                toString: tt
                            }
                        }, r), r.hsb = X(function (e, t, n) {
                            return r.hsb2rgb(e, t, n).hex
                        }), r.hsl = X(function (e, t, n) {
                            return r.hsl2rgb(e, t, n).hex
                        }), r.rgb = X(function (e, t, n, r) {
                            if (R(r, "finite")) {
                                var i = f.round;
                                return "rgba(" + [i(e), i(t), i(n), +r.toFixed(2)] + ")"
                            }
                            return "#" + (16777216 | n | t << 8 | e << 16).toString(16).slice(1)
                        });
                    var Y = function (e) {
                            var t = i.doc.getElementsByTagName("head")[0],
                                n = "rgb(255, 0, 0)";
                            return Y = X(function (e) {
                                if (e.toLowerCase() == "red") return n;
                                t.style.color = n, t.style.color = e;
                                var r = i.doc.defaultView.getComputedStyle(t, m).getPropertyValue("color");
                                return r == n ? null : r
                            }), Y(e)
                        },
                        Z = function () {
                            return "hsb(" + [this.h, this.s, this.b] + ")"
                        },
                        et = function () {
                            return "hsl(" + [this.h, this.s, this.l] + ")"
                        },
                        tt = function () {
                            return this.opacity == 1 || this.opacity == null ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                        },
                        nt = function (e, t, n) {
                            t == null && R(e, "object") && "r" in e && "g" in e && "b" in e && (n = e.b, t = e.g, e = e.r);
                            if (t == null && R(e, string)) {
                                var i = r.getRGB(e);
                                e = i.r, t = i.g, n = i.b
                            }
                            if (e > 1 || t > 1 || n > 1) e /= 255, t /= 255, n /= 255;
                            return [e, t, n]
                        },
                        rt = function (e, t, n, i) {
                            e = f.round(e * 255), t = f.round(t * 255), n = f.round(n * 255);
                            var s = {
                                r: e,
                                g: t,
                                b: n,
                                opacity: R(i, "finite") ? i : 1,
                                hex: r.rgb(e, t, n),
                                toString: tt
                            };
                            return R(i, "finite") && (s.opacity = i), s
                        };
                    r.color = function (e) {
                        var t;
                        return R(e, "object") && "h" in e && "s" in e && "b" in e ? (t = r.hsb2rgb(e), e.r = t.r, e.g = t.g, e.b = t.b, e.opacity = 1, e.hex = t.hex) : R(e, "object") && "h" in e && "s" in e && "l" in e ? (t = r.hsl2rgb(e), e.r = t.r, e.g = t.g, e.b = t.b, e.opacity = 1, e.hex = t.hex) : (R(e, "string") && (e = r.getRGB(e)), R(e, "object") && "r" in e && "g" in e && "b" in e && !("error" in e) ? (t = r.rgb2hsl(e), e.h = t.h, e.s = t.s, e.l = t.l, t = r.rgb2hsb(e), e.v = t.b) : (e = {
                            hex: "none"
                        }, e.r = e.g = e.b = e.h = e.s = e.v = e.l = -1, e.error = 1)), e.toString = tt, e
                    }, r.hsb2rgb = function (e, t, n, r) {
                        R(e, "object") && "h" in e && "s" in e && "b" in e && (n = e.b, t = e.s, e = e.h, r = e.o), e *= 360;
                        var i, s, o, u, a;
                        return e = e % 360 / 60, a = n * t, u = a * (1 - h(e % 2 - 1)), i = s = o = n - a, e = ~~e, i += [a, u, 0, 0, u, a][e], s += [u, a, a, u, 0, 0][e], o += [0, 0, u, a, a, u][e], rt(i, s, o, r)
                    }, r.hsl2rgb = function (e, t, n, r) {
                        R(e, "object") && "h" in e && "s" in e && "l" in e && (n = e.l, t = e.s, e = e.h);
                        if (e > 1 || t > 1 || n > 1) e /= 360, t /= 100, n /= 100;
                        e *= 360;
                        var i, s, o, u, a;
                        return e = e % 360 / 60, a = 2 * t * (n < .5 ? n : 1 - n), u = a * (1 - h(e % 2 - 1)), i = s = o = n - a / 2, e = ~~e, i += [a, u, 0, 0, u, a][e], s += [u, a, a, u, 0, 0][e], o += [0, 0, u, a, a, u][e], rt(i, s, o, r)
                    }, r.rgb2hsb = function (e, t, n) {
                        n = nt(e, t, n), e = n[0], t = n[1], n = n[2];
                        var r, i, s, o;
                        return s = l(e, t, n), o = s - c(e, t, n), r = o == 0 ? null : s == e ? (t - n) / o : s == t ? (n - e) / o + 2 : (e - t) / o + 4, r = (r + 360) % 6 * 60 / 360, i = o == 0 ? 0 : o / s, {
                            h: r,
                            s: i,
                            b: s,
                            toString: Z
                        }
                    }, r.rgb2hsl = function (e, t, n) {
                        n = nt(e, t, n), e = n[0], t = n[1], n = n[2];
                        var r, i, s, o, u, a;
                        return o = l(e, t, n), u = c(e, t, n), a = o - u, r = a == 0 ? null : o == e ? (t - n) / a : o == t ? (n - e) / a + 2 : (e - t) / a + 4, r = (r + 360) % 6 * 60 / 360, s = (o + u) / 2, i = a == 0 ? 0 : s < .5 ? a / (2 * s) : a / (2 - 2 * s), {
                            h: r,
                            s: i,
                            l: s,
                            toString: et
                        }
                    }, r.parsePathString = function (e) {
                        if (!e) return null;
                        var t = r.path(e);
                        if (t.arr) return r.path.clone(t.arr);
                        var n = {
                                a: 7,
                                c: 6,
                                o: 2,
                                h: 1,
                                l: 2,
                                m: 2,
                                r: 4,
                                q: 4,
                                s: 4,
                                t: 2,
                                v: 1,
                                u: 3,
                                z: 0
                            },
                            i = [];
                        return R(e, "array") && R(e[0], "array") && (i = r.path.clone(e)), i.length || o(e).replace(A, function (e, t, r) {
                            var s = [],
                                o = t.toLowerCase();
                            r.replace(M, function (e, t) {
                                t && s.push(+t)
                            }), o == "m" && s.length > 2 && (i.push([t].concat(s.splice(0, 2))), o = "l", t = t == "m" ? "l" : "L"), o == "o" && s.length == 1 && i.push([t, s[0]]);
                            if (o == "r") i.push([t].concat(s));
                            else
                                while (s.length >= n[o]) {
                                    i.push([t].concat(s.splice(0, n[o])));
                                    if (!n[o]) break
                                }
                        }), i.toString = r.path.toString, t.arr = r.path.clone(i), i
                    };
                    var it = r.parseTransformString = function (e) {
                        if (!e) return null;
                        var t = {
                                r: 3,
                                s: 4,
                                t: 2,
                                m: 6
                            },
                            n = [];
                        return R(e, "array") && R(e[0], "array") && (n = r.path.clone(e)), n.length || o(e).replace(O, function (e, t, r) {
                            var i = [],
                                s = t.toLowerCase();
                            r.replace(M, function (e, t) {
                                t && i.push(+t)
                            }), n.push([t].concat(i))
                        }), n.toString = r.path.toString, n
                    };
                    r._.svgTransform2string = st, r._.rgTransform = new RegExp("^[a-z][" + T + "]*-?\\.?\\d", "i"), r._.transform2matrix = ot, r._unit2px = lt;
                    var at = i.doc.contains || i.doc.compareDocumentPosition ? function (e, t) {
                        var n = e.nodeType == 9 ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e == r || !!r && r.nodeType == 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
                    } : function (e, t) {
                        if (t)
                            while (t) {
                                t = t.parentNode;
                                if (t == e) return !0
                            }
                        return !1
                    };
                    r._.getSomeDefs = ft, r.select = function (e) {
                            return gt(i.doc.querySelector(e))
                        }, r.selectAll = function (e) {
                            var t = i.doc.querySelectorAll(e),
                                n = (r.set || Array)();
                            for (var s = 0; s < t.length; s++) n.push(gt(t[s]));
                            return n
                        },
                        function (e) {
                            function u(e) {
                                function o(e, t) {
                                    var n = I(e.node, t);
                                    n = n && n.match(r), n = n && n[2];
                                    if (!n || n.charAt() != "#") return;
                                    n = n.substring(1), n && (s[n] = (s[n] || []).concat(function (n) {
                                        var r = {};
                                        r[t] = F(n), I(e.node, r)
                                    }))
                                }

                                function u(e) {
                                    var t = I(e.node, "xlink:href");
                                    if (!t || t.charAt() != "#") return;
                                    t = t.substring(1), t && (s[t] = (s[t] || []).concat(function (t) {
                                        e.attr("xlink:href", "#" + t)
                                    }))
                                }
                                var t = e.selectAll("*"),
                                    n, r = /^\s*url\(("|'|)(.*)\1\)\s*$/,
                                    i = [],
                                    s = {};
                                for (var a = 0, f = t.length; a < f; a++) {
                                    n = t[a], o(n, "fill"), o(n, "stroke"), o(n, "filter"), o(n, "mask"), o(n, "clip-path"), u(n);
                                    var l = I(n.node, "id");
                                    l && (I(n.node, {
                                        id: n.id
                                    }), i.push({
                                        old: l,
                                        id: n.id
                                    }))
                                }
                                for (a = 0, f = i.length; a < f; a++) {
                                    var c = s[i[a].old];
                                    if (c)
                                        for (var h = 0, p = c.length; h < p; h++) c[h](i[a].id)
                                }
                            }

                            function a(e, t, n) {
                                return function (r) {
                                    var i = r.slice(e, t);
                                    return i.length == 1 && (i = i[0]), n ? n(i) : i
                                }
                            }

                            function c(e) {
                                return function () {
                                    var t = e ? "<" + this.type : "",
                                        n = this.node.attributes,
                                        r = this.node.childNodes;
                                    if (e)
                                        for (var i = 0, s = n.length; i < s; i++) t += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
                                    if (r.length) {
                                        e && (t += ">");
                                        for (i = 0, s = r.length; i < s; i++) r[i].nodeType == 3 ? t += r[i].nodeValue : r[i].nodeType == 1 && (t += gt(r[i]).toString());
                                        e && (t += "</" + this.type + ">")
                                    } else e && (t += "/>");
                                    return t
                                }
                            }
                            e.attr = function (e, n) {
                                var r = this,
                                    i = r.node;
                                if (!e) return r;
                                if (R(e, "string")) {
                                    if (!(arguments.length > 1)) return pt(t("snap.util.getattr." + e, r));
                                    var o = {};
                                    o[e] = n, e = o
                                }
                                for (var u in e) e[s](u) && t("snap.util.attr." + u, r, e[u]);
                                return r
                            }, e.getBBox = function (e) {
                                var t = this;
                                t.type == "use" && (t = t.original);
                                if (t.removed) return {};
                                var n = t._;
                                return e ? (n.bboxwt = r.path.get[t.type] ? r.path.getBBox(t.realPath = r.path.get[t.type](t)) : r._.box(t.node.getBBox()), r._.box(n.bboxwt)) : (t.realPath = (r.path.get[t.type] || r.path.get.deflt)(t), n.bbox = r.path.getBBox(r.path.map(t.realPath, t.matrix)), r._.box(n.bbox))
                            };
                            var i = function () {
                                return this.string
                            };
                            e.transform = function (e) {
                                var t = this._;
                                if (e == null) {
                                    var n = new G(this.node.getCTM()),
                                        r = ut(this),
                                        s = r.toTransformString(),
                                        u = o(r) == o(this.matrix) ? t.transform : s;
                                    return {
                                        string: u,
                                        globalMatrix: n,
                                        localMatrix: r,
                                        diffMatrix: n.clone().add(r.invert()),
                                        global: n.toTransformString(),
                                        local: s,
                                        toString: i
                                    }
                                }
                                return e instanceof G && (e = e.toTransformString()), ut(this, e), this.node && (this.type == "linearGradient" || this.type == "radialGradient" ? I(this.node, {
                                    gradientTransform: this.matrix
                                }) : this.type == "pattern" ? I(this.node, {
                                    patternTransform: this.matrix
                                }) : I(this.node, {
                                    transform: this.matrix
                                })), this
                            }, e.parent = function () {
                                return gt(this.node.parentNode)
                            }, e.append = e.add = function (e) {
                                if (e) {
                                    if (e.type == "set") {
                                        var t = this;
                                        return e.forEach(function (e) {
                                            t.add(e)
                                        }), this
                                    }
                                    e = gt(e), this.node.appendChild(e.node), e.paper = this.paper
                                }
                                return this
                            }, e.appendTo = function (e) {
                                return e && (e = gt(e), e.append(this)), this
                            }, e.prepend = function (e) {
                                if (e) {
                                    e = gt(e);
                                    var t = e.parent();
                                    this.node.insertBefore(e.node, this.node.firstChild), this.add && this.add(), e.paper = this.paper, this.parent() && this.parent().add(), t && t.add()
                                }
                                return this
                            }, e.prependTo = function (e) {
                                return e = gt(e), e.prepend(this), this
                            }, e.before = function (e) {
                                if (e.type == "set") {
                                    var t = this;
                                    return e.forEach(function (e) {
                                        var n = e.parent();
                                        t.node.parentNode.insertBefore(e.node, t.node), n && n.add()
                                    }), this.parent().add(), this
                                }
                                e = gt(e);
                                var n = e.parent();
                                return this.node.parentNode.insertBefore(e.node, this.node), this.parent() && this.parent().add(), n && n.add(), e.paper = this.paper, this
                            }, e.after = function (e) {
                                e = gt(e);
                                var t = e.parent();
                                return this.node.nextSibling ? this.node.parentNode.insertBefore(e.node, this.node.nextSibling) : this.node.parentNode.appendChild(e.node), this.parent() && this.parent().add(), t && t.add(), e.paper = this.paper, this
                            }, e.insertBefore = function (e) {
                                e = gt(e);
                                var t = this.parent();
                                return e.node.parentNode.insertBefore(this.node, e.node), this.paper = e.paper, t && t.add(), e.parent() && e.parent().add(), this
                            }, e.insertAfter = function (e) {
                                e = gt(e);
                                var t = this.parent();
                                return e.node.parentNode.insertBefore(this.node, e.node.nextSibling), this.paper = e.paper, t && t.add(), e.parent() && e.parent().add(), this
                            }, e.remove = function () {
                                var e = this.parent();
                                return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, e && e.add(), this
                            }, e.select = function (e) {
                                return gt(this.node.querySelector(e))
                            }, e.selectAll = function (e) {
                                var t = this.node.querySelectorAll(e),
                                    n = (r.set || Array)();
                                for (var i = 0; i < t.length; i++) n.push(gt(t[i]));
                                return n
                            }, e.asPX = function (e, t) {
                                return t == null && (t = this.attr(e)), +lt(this, e, t)
                            }, e.use = function () {
                                var e, t = this.node.id;
                                return t || (t = this.id, I(this.node, {
                                    id: t
                                })), this.type == "linearGradient" || this.type == "radialGradient" || this.type == "pattern" ? e = vt(this.type, this.node.parentNode) : e = vt("use", this.node.parentNode), I(e.node, {
                                    "xlink:href": "#" + t
                                }), e.original = this, e
                            }, e.clone = function () {
                                var e = gt(this.node.cloneNode(!0));
                                return I(e.node, "id") && I(e.node, {
                                    id: e.id
                                }), u(e), e.insertAfter(this), e
                            }, e.toDefs = function () {
                                var e = ft(this);
                                return e.appendChild(this.node), this
                            }, e.pattern = function (e, t, n, r) {
                                var i = vt("pattern", ft(this));
                                return e == null && (e = this.getBBox()), R(e, "object") && "x" in e && (t = e.y, n = e.width, r = e.height, e = e.x), I(i.node, {
                                    x: e,
                                    y: t,
                                    width: n,
                                    height: r,
                                    patternUnits: "userSpaceOnUse",
                                    id: i.id,
                                    viewBox: [e, t, n, r].join(" ")
                                }), i.node.appendChild(this.node), i
                            }, e.marker = function (e, t, n, r, i, s) {
                                var o = vt("marker", ft(this));
                                return e == null && (e = this.getBBox()), R(e, "object") && "x" in e && (t = e.y, n = e.width, r = e.height, i = e.refX || e.cx, s = e.refY || e.cy, e = e.x), I(o.node, {
                                    viewBox: [e, t, n, r].join(y),
                                    markerWidth: n,
                                    markerHeight: r,
                                    orient: "auto",
                                    refX: i || 0,
                                    refY: s || 0,
                                    id: o.id
                                }), o.node.appendChild(this.node), o
                            };
                            var f = function (e, t, r, i) {
                                typeof r == "function" && !r.length && (i = r, r = n.linear), this.attr = e, this.dur = t, r && (this.easing = r), i && (this.callback = i)
                            };
                            r.animation = function (e, t, n, r) {
                                return new f(e, t, n, r)
                            }, e.inAnim = function () {
                                var e = this,
                                    t = [];
                                for (var n in e.anims) e.anims[s](n) && function (e) {
                                    t.push({
                                        anim: new f(e._attrs, e.dur, e.easing, e._callback),
                                        curStatus: e.status(),
                                        status: function (t) {
                                            return e.status(t)
                                        },
                                        stop: function () {
                                            e.stop()
                                        }
                                    })
                                }(e.anims[n]);
                                return t
                            }, r.animate = function (e, r, i, s, o, u) {
                                typeof o == "function" && !o.length && (u = o, o = n.linear);
                                var a = n.time(),
                                    f = n(e, r, a, a + s, n.time, i, o);
                                return u && t.once("mina.finish." + f.id, u), f
                            }, e.stop = function () {
                                var e = this.inAnim();
                                for (var t = 0, n = e.length; t < n; t++) e[t].stop();
                                return this
                            }, e.animate = function (e, r, i, u) {
                                typeof i == "function" && !i.length && (u = i, i = n.linear), e instanceof f && (u = e.callback, i = e.easing, r = i.dur, e = e.attr);
                                var l = [],
                                    c = [],
                                    h = {},
                                    p, d, v, m, g = this;
                                for (var y in e)
                                    if (e[s](y)) {
                                        g.equal ? (m = g.equal(y, o(e[y])), p = m.from, d = m.to, v = m.f) : (p = +g.attr(y), d = +e[y]);
                                        var b = R(p, "array") ? p.length : 1;
                                        h[y] = a(l.length, l.length + b, v), l = l.concat(p), c = c.concat(d)
                                    }
                                var w = n.time(),
                                    E = n(l, c, w, w + r, n.time, function (e) {
                                        var t = {};
                                        for (var n in h) h[s](n) && (t[n] = h[n](e));
                                        g.attr(t)
                                    }, i);
                                return g.anims[E.id] = E, E._attrs = e, E._callback = u, t.once("mina.finish." + E.id, function () {
                                    delete g.anims[E.id], u && u.call(g)
                                }), t.once("mina.stop." + E.id, function () {
                                    delete g.anims[E.id]
                                }), g
                            };
                            var l = {};
                            e.data = function (e, n) {
                                var i = l[this.id] = l[this.id] || {};
                                if (arguments.length == 0) return t("snap.data.get." + this.id, this, i, null), i;
                                if (arguments.length == 1) {
                                    if (r.is(e, "object")) {
                                        for (var o in e) e[s](o) && this.data(o, e[o]);
                                        return this
                                    }
                                    return t("snap.data.get." + this.id, this, i[e], e), i[e]
                                }
                                return i[e] = n, t("snap.data.set." + this.id, this, n, e), this
                            }, e.removeData = function (e) {
                                return e == null ? l[this.id] = {} : l[this.id] && delete l[this.id][e], this
                            }, e.outerSVG = e.toString = c(1), e.innerSVG = c()
                        }(ht.prototype), r.parse = function (e) {
                            var t = i.doc.createDocumentFragment(),
                                n = !0,
                                r = i.doc.createElement("div");
                            e = o(e), e.match(/^\s*<\s*svg(?:\s|>)/) || (e = "<svg>" + e + "</svg>", n = !1), r.innerHTML = e, e = r.getElementsByTagName("svg")[0];
                            if (e)
                                if (n) t = e;
                                else
                                    while (e.firstChild) t.appendChild(e.firstChild);
                            return r.innerHTML = m, new dt(t)
                        }, dt.prototype.select = ht.prototype.select, dt.prototype.selectAll = ht.prototype.selectAll, r.fragment = function () {
                            var e = Array.prototype.slice.call(arguments, 0),
                                t = i.doc.createDocumentFragment();
                            for (var n = 0, s = e.length; n < s; n++) {
                                var o = e[n];
                                o.node && o.node.nodeType && t.appendChild(o.node), o.nodeType && t.appendChild(o), typeof o == "string" && t.appendChild(r.parse(o).node)
                            }
                            return new dt(t)
                        },
                        function (e) {
                            e.el = function (e, t) {
                                    return vt(e, this.node).attr(t)
                                }, e.rect = function (e, t, n, r, i, s) {
                                    var o;
                                    return s == null && (s = i), R(e, "object") && "x" in e ? o = e : e != null && (o = {
                                        x: e,
                                        y: t,
                                        width: n,
                                        height: r
                                    }, i != null && (o.rx = i, o.ry = s)), this.el("rect", o)
                                }, e.circle = function (e, t, n) {
                                    var r;
                                    return R(e, "object") && "cx" in e ? r = e : e != null && (r = {
                                        cx: e,
                                        cy: t,
                                        r: n
                                    }), this.el("circle", r)
                                }, e.image = function (e, t, n, r, i) {
                                    var s = vt("image", this.node);
                                    if (R(e, "object") && "src" in e) s.attr(e);
                                    else if (e != null) {
                                        var o = {
                                            "xlink:href": e,
                                            preserveAspectRatio: "none"
                                        };
                                        t != null && n != null && (o.x = t, o.y = n), r != null && i !=
                                            null ? (o.width = r, o.height = i) : U(e, function () {
                                                I(s.node, {
                                                    width: this.offsetWidth,
                                                    height: this.offsetHeight
                                                })
                                            }), I(s.node, o)
                                    }
                                    return s
                                }, e.ellipse = function (e, t, n, r) {
                                    var i = vt("ellipse", this.node);
                                    return R(e, "object") && "cx" in e ? i.attr(e) : e != null && i.attr({
                                        cx: e,
                                        cy: t,
                                        rx: n,
                                        ry: r
                                    }), i
                                }, e.path = function (e) {
                                    var t = vt("path", this.node);
                                    return R(e, "object") && !R(e, "array") ? t.attr(e) : e && t.attr({
                                        d: e
                                    }), t
                                }, e.group = e.g = function (t) {
                                    var n = vt("g", this.node);
                                    n.add = ct;
                                    for (var r in e) e[s](r) && (n[r] = e[r]);
                                    return arguments.length == 1 && t && !t.type ? n.attr(t) : arguments.length && n.add(Array.prototype.slice.call(arguments, 0)), n
                                }, e.text = function (e, t, n) {
                                    var r = vt("text", this.node);
                                    return R(e, "object") ? r.attr(e) : e != null && r.attr({
                                        x: e,
                                        y: t,
                                        text: n || ""
                                    }), r
                                }, e.line = function (e, t, n, r) {
                                    var i = vt("line", this.node);
                                    return R(e, "object") ? i.attr(e) : e != null && i.attr({
                                        x1: e,
                                        x2: n,
                                        y1: t,
                                        y2: r
                                    }), i
                                }, e.polyline = function (e) {
                                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments, 0));
                                    var t = vt("polyline", this.node);
                                    return R(e, "object") && !R(e, "array") ? t.attr(e) : e != null && t.attr({
                                        points: e
                                    }), t
                                }, e.polygon = function (e) {
                                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments, 0));
                                    var t = vt("polygon", this.node);
                                    return R(e, "object") && !R(e, "array") ? t.attr(e) : e != null && t.attr({
                                        points: e
                                    }), t
                                },
                                function () {
                                    e.gradient = function (e) {
                                        return Et(this.defs, e)
                                    }, e.gradientLinear = function (e, t, n, r) {
                                        return St(this.defs, e, t, n, r)
                                    }, e.gradientRadial = function (e, t, n, r, i) {
                                        return xt(this.defs, e, t, n, r, i)
                                    }, e.toString = function () {
                                        var e = i.doc.createDocumentFragment(),
                                            t = i.doc.createElement("div"),
                                            n = this.node.cloneNode(!0),
                                            r;
                                        return e.appendChild(t), t.appendChild(n), I(n, {
                                            xmlns: B
                                        }), r = t.innerHTML, e.removeChild(e.firstChild), r
                                    }, e.clear = function () {
                                        var e = this.node.firstChild,
                                            t;
                                        while (e) t = e.nextSibling, e.tagName != "defs" && e.parentNode.removeChild(e), e = t
                                    }
                                }()
                        }(mt.prototype), r.ajax = function (e, n, r, i) {
                            var s = new XMLHttpRequest,
                                o = P();
                            if (s) {
                                if (R(n, "function")) i = r, r = n, n = null;
                                else if (R(n, "object")) {
                                    var u = [];
                                    for (var a in n) n.hasOwnProperty(a) && u.push(encodeURIComponent(a) + "=" + encodeURIComponent(n[a]));
                                    n = u.join("&")
                                }
                                return s.open(n ? "POST" : "GET", e, !0), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n && s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r && (t.once("snap.ajax." + o + ".0", r), t.once("snap.ajax." + o + ".200", r), t.once("snap.ajax." + o + ".304", r)), s.onreadystatechange = function () {
                                    if (s.readyState != 4) return;
                                    t("snap.ajax." + o + "." + s.status, i, s)
                                }, s.readyState == 4 ? s : (s.send(n), s)
                            }
                        }, r.load = function (e, t, n) {
                            r.ajax(e, function (e) {
                                var i = r.parse(e.responseText);
                                n ? t.call(n, i) : t(i)
                            })
                        }, t.on("snap.util.attr.mask", function (e) {
                            if (e instanceof ht || e instanceof dt) {
                                t.stop(), e instanceof dt && e.node.childNodes.length == 1 && (e = e.node.firstChild, ft(this).appendChild(e), e = gt(e));
                                if (e.type == "mask") var n = e;
                                else n = vt("mask", ft(this)), n.node.appendChild(e.node), !n.node.id && I(n.node, {
                                    id: n.id
                                });
                                I(this.node, {
                                    mask: F(n.id)
                                })
                            }
                        }),
                        function (e) {
                            t.on("snap.util.attr.clip", e), t.on("snap.util.attr.clip-path", e), t.on("snap.util.attr.clipPath", e)
                        }(function (e) {
                            if (e instanceof ht || e instanceof dt) {
                                t.stop();
                                if (e.type == "clipPath") var n = e;
                                else n = vt("clipPath", ft(this)), n.node.appendChild(e.node), !n.node.id && I(n.node, {
                                    id: n.id
                                });
                                I(this.node, {
                                    "clip-path": F(n.id)
                                })
                            }
                        }), t.on("snap.util.attr.fill", Tt("fill")), t.on("snap.util.attr.stroke", Tt("stroke"));
                    var Nt = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
                    t.on("snap.util.grad.parse", function (t) {
                        t = o(t);
                        var n = t.match(Nt);
                        if (!n) return null;
                        var r = n[1],
                            i = n[2],
                            s = n[3];
                        return i = i.split(/\s*,\s*/).map(function (e) {
                            return +e == e ? +e : e
                        }), i.length == 1 && i[0] == 0 && (i = []), s = s.split("-"), s = s.map(function (e) {
                            e = e.split(":");
                            var t = {
                                color: e[0]
                            };
                            return e[1] && (t.offset = e[1]), t
                        }), {
                            type: r,
                            params: i,
                            stops: s
                        }
                    }), t.on("snap.util.attr.d", function (e) {
                        t.stop(), R(e, "array") && R(e[0], "array") && (e = r.path.toString.call(e)), e = o(e), e.match(/[ruo]/i) && (e = r.path.toAbsolute(e)), I(this.node, {
                            d: e
                        })
                    })(-1), t.on("snap.util.attr.#text", function (e) {
                        t.stop(), e = o(e);
                        var n = i.doc.createTextNode(e);
                        while (this.node.firstChild) this.node.removeChild(this.node.firstChild);
                        this.node.appendChild(n)
                    })(-1), t.on("snap.util.attr.path", function (e) {
                        t.stop(), this.attr({
                            d: e
                        })
                    })(-1), t.on("snap.util.attr.viewBox", function (e) {
                        var n;
                        R(e, "object") && "x" in e ? n = [e.x, e.y, e.width, e.height].join(" ") : R(e, "array") ? n = e.join(" ") : n = e, I(this.node, {
                            viewBox: n
                        }), t.stop()
                    })(-1), t.on("snap.util.attr.transform", function (e) {
                        this.transform(e), t.stop()
                    })(-1), t.on("snap.util.attr.r", function (e) {
                        this.type == "rect" && (t.stop(), I(this.node, {
                            rx: e,
                            ry: e
                        }))
                    })(-1), t.on("snap.util.attr.textpath", function (e) {
                        t.stop();
                        if (this.type == "text") {
                            var n, r, i;
                            if (!e && this.textPath) {
                                r = this.textPath;
                                while (r.node.firstChild) this.node.appendChild(r.node.firstChild);
                                r.remove(), delete this.textPath;
                                return
                            }
                            if (R(e, "string")) {
                                var s = ft(this),
                                    o = gt(s.parentNode).path(e);
                                s.appendChild(o.node), n = o.id, o.attr({
                                    id: n
                                })
                            } else e = gt(e), e instanceof ht && (n = e.attr("id"), n || (n = e.id, e.attr({
                                id: n
                            })));
                            if (n) {
                                r = this.textPath, i = this.node;
                                if (r) r.attr({
                                    "xlink:href": "#" + n
                                });
                                else {
                                    r = I("textPath", {
                                        "xlink:href": "#" + n
                                    });
                                    while (i.firstChild) r.appendChild(i.firstChild);
                                    i.appendChild(r), this.textPath = gt(r)
                                }
                            }
                        }
                    })(-1), t.on("snap.util.attr.text", function (e) {
                        if (this.type == "text") {
                            var n = 0,
                                r = this.node,
                                s = function (e) {
                                    var t = I("tspan");
                                    if (R(e, "array"))
                                        for (var n = 0; n < e.length; n++) t.appendChild(s(e[n]));
                                    else t.appendChild(i.doc.createTextNode(e));
                                    return t.normalize && t.normalize(), t
                                };
                            while (r.firstChild) r.removeChild(r.firstChild);
                            var o = s(e);
                            while (o.firstChild) r.appendChild(o.firstChild)
                        }
                        t.stop()
                    })(-1);
                    var Ct = {
                        "alignment-baseline": 0,
                        "baseline-shift": 0,
                        clip: 0,
                        "clip-path": 0,
                        "clip-rule": 0,
                        color: 0,
                        "color-interpolation": 0,
                        "color-interpolation-filters": 0,
                        "color-profile": 0,
                        "color-rendering": 0,
                        cursor: 0,
                        direction: 0,
                        display: 0,
                        "dominant-baseline": 0,
                        "enable-background": 0,
                        fill: 0,
                        "fill-opacity": 0,
                        "fill-rule": 0,
                        filter: 0,
                        "flood-color": 0,
                        "flood-opacity": 0,
                        font: 0,
                        "font-family": 0,
                        "font-size": 0,
                        "font-size-adjust": 0,
                        "font-stretch": 0,
                        "font-style": 0,
                        "font-variant": 0,
                        "font-weight": 0,
                        "glyph-orientation-horizontal": 0,
                        "glyph-orientation-vertical": 0,
                        "image-rendering": 0,
                        kerning: 0,
                        "letter-spacing": 0,
                        "lighting-color": 0,
                        marker: 0,
                        "marker-end": 0,
                        "marker-mid": 0,
                        "marker-start": 0,
                        mask: 0,
                        opacity: 0,
                        overflow: 0,
                        "pointer-events": 0,
                        "shape-rendering": 0,
                        "stop-color": 0,
                        "stop-opacity": 0,
                        stroke: 0,
                        "stroke-dasharray": 0,
                        "stroke-dashoffset": 0,
                        "stroke-linecap": 0,
                        "stroke-linejoin": 0,
                        "stroke-miterlimit": 0,
                        "stroke-opacity": 0,
                        "stroke-width": 0,
                        "text-anchor": 0,
                        "text-decoration": 0,
                        "text-rendering": 0,
                        "unicode-bidi": 0,
                        visibility: 0,
                        "word-spacing": 0,
                        "writing-mode": 0
                    };
                    t.on("snap.util.attr", function (e) {
                            var n = t.nt(),
                                r = {};
                            n = n.substring(n.lastIndexOf(".") + 1), r[n] = e;
                            var i = n.replace(/-(\w)/gi, function (e, t) {
                                    return t.toUpperCase()
                                }),
                                o = n.replace(/[A-Z]/g, function (e) {
                                    return "-" + e.toLowerCase()
                                });
                            Ct[s](o) ? this.node.style[i] = e == null ? m : e : I(this.node, r)
                        }), t.on("snap.util.getattr.transform", function () {
                            return t.stop(), this.transform()
                        })(-1), t.on("snap.util.getattr.textpath", function () {
                            return t.stop(), this.textPath
                        })(-1),
                        function () {
                            function e(e) {
                                return function () {
                                    t.stop();
                                    var n = i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + e);
                                    return n == "none" ? n : r(i.doc.getElementById(n.match(x)[1]))
                                }
                            }

                            function n(e) {
                                return function (n) {
                                    t.stop();
                                    var r = "marker" + e.charAt(0).toUpperCase() + e.substring(1);
                                    if (n == "" || !n) {
                                        this.node.style[r] = "none";
                                        return
                                    }
                                    if (n.type == "marker") {
                                        var i = n.node.id;
                                        i || I(n.node, {
                                            id: n.id
                                        }), this.node.style[r] = F(i);
                                        return
                                    }
                                }
                            }
                            t.on("snap.util.getattr.marker-end", e("end"))(-1), t.on("snap.util.getattr.markerEnd", e("end"))(-1), t.on("snap.util.getattr.marker-start", e("start"))(-1), t.on("snap.util.getattr.markerStart", e("start"))(-1), t.on("snap.util.getattr.marker-mid", e("mid"))(-1), t.on("snap.util.getattr.markerMid", e("mid"))(-1), t.on("snap.util.attr.marker-end", n("end"))(-1), t.on("snap.util.attr.markerEnd", n("end"))(-1), t.on("snap.util.attr.marker-start", n("start"))(-1), t.on("snap.util.attr.markerStart", n("start"))(-1), t.on("snap.util.attr.marker-mid", n("mid"))(-1), t.on("snap.util.attr.markerMid", n("mid"))(-1)
                        }(), t.on("snap.util.getattr.r", function () {
                            if (this.type == "rect" && I(this.node, "rx") == I(this.node, "ry")) return t.stop(), I(this.node, "rx")
                        })(-1), t.on("snap.util.getattr.text", function () {
                            if (this.type == "text" || this.type == "tspan") {
                                t.stop();
                                var e = kt(this.node);
                                return e.length == 1 ? e[0] : e
                            }
                        })(-1), t.on("snap.util.getattr.#text", function () {
                            return this.node.textContent
                        })(-1), t.on("snap.util.getattr.viewBox", function () {
                            t.stop();
                            var e = I(this.node, "viewBox").split(N);
                            return r._.box(+e[0], +e[1], +e[2], +e[3])
                        })(-1), t.on("snap.util.getattr.points", function () {
                            var e = I(this.node, "points");
                            return t.stop(), e.split(N)
                        }), t.on("snap.util.getattr.path", function () {
                            var e = I(this.node, "d");
                            return t.stop(), e
                        }), t.on("snap.util.getattr", function () {
                            var e = t.nt();
                            e = e.substring(e.lastIndexOf(".") + 1);
                            var n = e.replace(/[A-Z]/g, function (e) {
                                return "-" + e.toLowerCase()
                            });
                            return Ct[s](n) ? i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : I(this.node, e)
                        });
                    var Lt = function (e) {
                        var t = e.getBoundingClientRect(),
                            n = e.ownerDocument,
                            r = n.body,
                            i = n.documentElement,
                            s = i.clientTop || r.clientTop || 0,
                            o = i.clientLeft || r.clientLeft || 0,
                            u = t.top + (g.win.pageYOffset || i.scrollTop || r.scrollTop) - s,
                            a = t.left + (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) - o;
                        return {
                            y: u,
                            x: a
                        }
                    };
                    return r.getElementByPoint = function (e, t) {
                        var n = this,
                            r = n.canvas,
                            s = i.doc.elementFromPoint(e, t);
                        if (i.win.opera && s.tagName == "svg") {
                            var o = Lt(s),
                                u = s.createSVGRect();
                            u.x = e - o.x, u.y = t - o.y, u.width = u.height = 1;
                            var a = s.getIntersectionList(u, null);
                            a.length && (s = a[a.length - 1])
                        }
                        return s ? gt(s) : null
                    }, r.plugin = function (e) {
                        e(r, ht, mt, i)
                    }, i.win.Snap = r, r
                }();
            return r.plugin(function (e, t, n, r) {
                function m(e) {
                    var t = m.ps = m.ps || {};
                    return t[e] ? t[e].sleep = 100 : t[e] = {
                        sleep: 100
                    }, setTimeout(function () {
                        for (var n in t) t[u](n) && n != e && (t[n].sleep--, !t[n].sleep && delete t[n])
                    }), t[e]
                }

                function g(e, t, n, r) {
                    return e == null && (e = t = n = r = 0), t == null && (t = e.y, n = e.width, r = e.height, e = e.x), {
                        x: e,
                        y: t,
                        width: n,
                        w: n,
                        height: r,
                        h: r,
                        x2: e + n,
                        y2: t + r,
                        cx: e + n / 2,
                        cy: t + r / 2,
                        r1: l.min(n, r) / 2,
                        r2: l.max(n, r) / 2,
                        r0: l.sqrt(n * n + r * r) / 2,
                        path: R(e, t, n, r),
                        vb: [e, t, n, r].join(" ")
                    }
                }

                function y() {
                    return this.join(",").replace(a, "$1")
                }

                function b(e) {
                    var t = o(e);
                    return t.toString = y, t
                }

                function w(e, t, n, r, i, s, o, u, a) {
                    return a == null ? O(e, t, n, r, i, s, o, u) : N(e, t, n, r, i, s, o, u, M(e, t, n, r, i, s, o, u, a))
                }

                function E(n, r) {
                    function i(e) {
                        return +(+e).toFixed(3)
                    }
                    return e._.cacher(function (e, s, o) {
                        e instanceof t && (e = e.attr("d")), e = Y(e);
                        var u, a, f, l, c = "",
                            h = {},
                            p, d = 0;
                        for (var v = 0, m = e.length; v < m; v++) {
                            f = e[v];
                            if (f[0] == "M") u = +f[1], a = +f[2];
                            else {
                                l = w(u, a, f[1], f[2], f[3], f[4], f[5], f[6]);
                                if (d + l > s) {
                                    if (r && !h.start) {
                                        p = w(u, a, f[1], f[2], f[3], f[4], f[5], f[6], s - d), c += ["C" + i(p.start.x), i(p.start.y), i(p.m.x), i(p.m.y), i(p.x), i(p.y)];
                                        if (o) return c;
                                        h.start = c, c = ["M" + i(p.x), i(p.y) + "C" + i(p.n.x), i(p.n.y), i(p.end.x), i(p.end.y), i(f[5]), i(f[6])].join(), d += l, u = +f[5], a = +f[6];
                                        continue
                                    }
                                    if (!n && !r) return p = w(u, a, f[1], f[2], f[3], f[4], f[5], f[6], s - d), p
                                }
                                d += l, u = +f[5], a = +f[6]
                            }
                            c += f.shift() + f
                        }
                        return h.end = c, p = n ? d : r ? h : N(u, a, f[0], f[1], f[2], f[3], f[4], f[5], 1), p
                    }, null, e._.clone)
                }

                function N(e, t, n, r, i, s, o, u, a) {
                    var f = 1 - a,
                        h = d(f, 3),
                        p = d(f, 2),
                        v = a * a,
                        m = v * a,
                        g = h * e + p * 3 * a * n + f * 3 * a * a * i + m * o,
                        y = h * t + p * 3 * a * r + f * 3 * a * a * s + m * u,
                        b = e + 2 * a * (n - e) + v * (i - 2 * n + e),
                        w = t + 2 * a * (r - t) + v * (s - 2 * r + t),
                        E = n + 2 * a * (i - n) + v * (o - 2 * i + n),
                        S = r + 2 * a * (s - r) + v * (u - 2 * s + r),
                        x = f * e + a * n,
                        T = f * t + a * r,
                        N = f * i + a * o,
                        C = f * s + a * u,
                        k = 90 - l.atan2(b - E, w - S) * 180 / c;
                    return {
                        x: g,
                        y: y,
                        m: {
                            x: b,
                            y: w
                        },
                        n: {
                            x: E,
                            y: S
                        },
                        start: {
                            x: x,
                            y: T
                        },
                        end: {
                            x: N,
                            y: C
                        },
                        alpha: k
                    }
                }

                function C(t, n, r, i, s, o, u, a) {
                    e.is(t, "array") || (t = [t, n, r, i, s, o, u, a]);
                    var f = G.apply(null, t);
                    return g(f.min.x, f.min.y, f.max.x - f.min.x, f.max.y - f.min.y)
                }

                function k(e, t, n) {
                    return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height
                }

                function L(e, t) {
                    return e = g(e), t = g(t), k(t, e.x, e.y) || k(t, e.x2, e.y) || k(t, e.x, e.y2) || k(t, e.x2, e.y2) || k(e, t.x, t.y) || k(e, t.x2, t.y) || k(e, t.x, t.y2) || k(e, t.x2, t.y2) || (e.x < t.x2 && e.x > t.x || t.x < e.x2 && t.x > e.x) && (e.y < t.y2 && e.y > t.y || t.y < e.y2 && t.y > e.y)
                }

                function A(e, t, n, r, i) {
                    var s = -3 * t + 9 * n - 9 * r + 3 * i,
                        o = e * s + 6 * t - 12 * n + 6 * r;
                    return e * o - 3 * t + 3 * n
                }

                function O(e, t, n, r, i, s, o, u, a) {
                    a == null && (a = 1), a = a > 1 ? 1 : a < 0 ? 0 : a;
                    var f = a / 2,
                        c = 12,
                        h = [-0.1252, .1252, -0.3678, .3678, -0.5873, .5873, -0.7699, .7699, -0.9041, .9041, -0.9816, .9816],
                        p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472],
                        d = 0;
                    for (var v = 0; v < c; v++) {
                        var m = f * h[v] + f,
                            g = A(m, e, n, i, o),
                            y = A(m, t, r, s, u),
                            b = g * g + y * y;
                        d += p[v] * l.sqrt(b)
                    }
                    return f * d
                }

                function M(e, t, n, r, i, s, o, u, a) {
                    if (a < 0 || O(e, t, n, r, i, s, o, u) < a) return;
                    var f = 1,
                        l = f / 2,
                        c = f - l,
                        h, p = .01;
                    h = O(e, t, n, r, i, s, o, u, c);
                    while (v(h - a) > p) l /= 2, c += (h < a ? 1 : -1) * l, h = O(e, t, n, r, i, s, o, u, c);
                    return c
                }

                function _(e, t, n, r, i, s, o, u) {
                    if (p(e, n) < h(i, o) || h(e, n) > p(i, o) || p(t, r) < h(s, u) || h(t, r) > p(s, u)) return;
                    var a = (e * r - t * n) * (i - o) - (e - n) * (i * u - s * o),
                        f = (e * r - t * n) * (s - u) - (t - r) * (i * u - s * o),
                        l = (e - n) * (s - u) - (t - r) * (i - o);
                    if (!l) return;
                    var c = a / l,
                        d = f / l,
                        v = +c.toFixed(2),
                        m = +d.toFixed(2);
                    if (v < +h(e, n).toFixed(2) || v > +p(e, n).toFixed(2) || v < +h(i, o).toFixed(2) || v > +p(i, o).toFixed(2) || m < +h(t, r).toFixed(2) || m > +p(t, r).toFixed(2) || m < +h(s, u).toFixed(2) || m > +p(s, u).toFixed(2)) return;
                    return {
                        x: c,
                        y: d
                    }
                }

                function D(e, t) {
                    return H(e, t)
                }

                function P(e, t) {
                    return H(e, t, 1)
                }

                function H(e, t, n) {
                    var r = C(e),
                        i = C(t);
                    if (!L(r, i)) return n ? 0 : [];
                    var s = O.apply(0, e),
                        o = O.apply(0, t),
                        u = ~~(s / 5),
                        a = ~~(o / 5),
                        f = [],
                        l = [],
                        c = {},
                        h = n ? 0 : [];
                    for (var p = 0; p < u + 1; p++) {
                        var d = N.apply(0, e.concat(p / u));
                        f.push({
                            x: d.x,
                            y: d.y,
                            t: p / u
                        })
                    }
                    for (p = 0; p < a + 1; p++) d = N.apply(0, t.concat(p / a)), l.push({
                        x: d.x,
                        y: d.y,
                        t: p / a
                    });
                    for (p = 0; p < u; p++)
                        for (var m = 0; m < a; m++) {
                            var g = f[p],
                                y = f[p + 1],
                                b = l[m],
                                w = l[m + 1],
                                E = v(y.x - g.x) < .001 ? "y" : "x",
                                S = v(w.x - b.x) < .001 ? "y" : "x",
                                x = _(g.x, g.y, y.x, y.y, b.x, b.y, w.x, w.y);
                            if (x) {
                                if (c[x.x.toFixed(4)] == x.y.toFixed(4)) continue;
                                c[x.x.toFixed(4)] = x.y.toFixed(4);
                                var T = g.t + v((x[E] - g[E]) / (y[E] - g[E])) * (y.t - g.t),
                                    k = b.t + v((x[S] - b[S]) / (w[S] - b[S])) * (w.t - b.t);
                                T >= 0 && T <= 1 && k >= 0 && k <= 1 && (n ? h++ : h.push({
                                    x: x.x,
                                    y: x.y,
                                    t1: T,
                                    t2: k
                                }))
                            }
                        }
                    return h
                }

                function B(e, t) {
                    return F(e, t)
                }

                function j(e, t) {
                    return F(e, t, 1)
                }

                function F(e, t, n) {
                    e = Y(e), t = Y(t);
                    var r, i, s, o, u, a, f, l, c, h, p = n ? 0 : [];
                    for (var d = 0, v = e.length; d < v; d++) {
                        var m = e[d];
                        if (m[0] == "M") r = u = m[1], i = a = m[2];
                        else {
                            m[0] == "C" ? (c = [r, i].concat(m.slice(1)), r = c[6], i = c[7]) : (c = [r, i, r, i, u, a, u, a], r = u, i = a);
                            for (var g = 0, y = t.length; g < y; g++) {
                                var b = t[g];
                                if (b[0] == "M") s = f = b[1], o = l = b[2];
                                else {
                                    b[0] == "C" ? (h = [s, o].concat(b.slice(1)), s = h[6], o = h[7]) : (h = [s, o, s, o, f, l, f, l], s = f, o = l);
                                    var w = H(c, h, n);
                                    if (n) p += w;
                                    else {
                                        for (var E = 0, S = w.length; E < S; E++) w[E].segment1 = d, w[E].segment2 = g, w[E].bez1 = c, w[E].bez2 = h;
                                        p = p.concat(w)
                                    }
                                }
                            }
                        }
                    }
                    return p
                }

                function I(e, t, n) {
                    var r = q(e);
                    return k(r, t, n) && F(e, [["M", t, n], ["H", r.x2 + 10]], 1) % 2 == 1
                }

                function q(e) {
                    var t = m(e);
                    if (t.bbox) return o(t.bbox);
                    if (!e) return g();
                    e = Y(e);
                    var n = 0,
                        r = 0,
                        i = [],
                        s = [],
                        u;
                    for (var a = 0, f = e.length; a < f; a++) {
                        u = e[a];
                        if (u[0] == "M") n = u[1], r = u[2], i.push(n), s.push(r);
                        else {
                            var l = G(n, r, u[1], u[2], u[3], u[4], u[5], u[6]);
                            i = i.concat(l.min.x, l.max.x), s = s.concat(l.min.y, l.max.y), n = u[5], r = u[6]
                        }
                    }
                    var c = h.apply(0, i),
                        d = h.apply(0, s),
                        v = p.apply(0, i),
                        y = p.apply(0, s),
                        b = g(c, d, v - c, y - d);
                    return t.bbox = o(b), b
                }

                function R(e, t, n, r, i) {
                    if (i) return [["M", e + i, t], ["l", n - i * 2, 0], ["a", i, i, 0, 0, 1, i, i], ["l", 0, r - i * 2], ["a", i, i, 0, 0, 1, -i, i], ["l", i * 2 - n, 0], ["a", i, i, 0, 0, 1, -i, -i], ["l", 0, i * 2 - r], ["a", i, i, 0, 0, 1, i, -i], ["z"]];
                    var s = [["M", e, t], ["l", n, 0], ["l", 0, r], ["l", -n, 0], ["z"]];
                    return s.toString = y, s
                }

                function U(e, t, n, r, i) {
                    i == null && r == null && (r = n);
                    if (i != null) var s = Math.PI / 180,
                        o = e + n * Math.cos(-r * s),
                        u = e + n * Math.cos(-i * s),
                        a = t + n * Math.sin(-r * s),
                        f = t + n * Math.sin(-i * s),
                        l = [["M", o, a], ["A", n, n, 0, +(i - r > 180), 0, u, f]];
                    else l = [["M", e, t], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]];
                    return l.toString = y, l
                }

                function X(t) {
                    var n = m(t),
                        r = String.prototype.toLowerCase;
                    if (n.rel) return b(n.rel);
                    if (!e.is(t, "array") || !e.is(t && t[0], "array")) t = e.parsePathString(t);
                    var i = [],
                        s = 0,
                        o = 0,
                        u = 0,
                        a = 0,
                        f = 0;
                    t[0][0] == "M" && (s = t[0][1], o = t[0][2], u = s, a = o, f++, i.push(["M", s, o]));
                    for (var l = f, c = t.length; l < c; l++) {
                        var h = i[l] = [],
                            p = t[l];
                        if (p[0] != r.call(p[0])) {
                            h[0] = r.call(p[0]);
                            switch (h[0]) {
                                case "a":
                                    h[1] = p[1], h[2] = p[2], h[3] = p[3], h[4] = p[4], h[5] = p[5], h[6] = +(p[6] - s).toFixed(3), h[7] = +(p[7] - o).toFixed(3);
                                    break;
                                case "v":
                                    h[1] = +(p[1] - o).toFixed(3);
                                    break;
                                case "m":
                                    u = p[1], a = p[2];
                                default:
                                    for (var d = 1, v = p.length; d < v; d++) h[d] = +(p[d] - (d % 2 ? s : o)).toFixed(3)
                            }
                        } else {
                            h = i[l] = [], p[0] == "m" && (u = p[1] + s, a = p[2] + o);
                            for (var g = 0, w = p.length; g < w; g++) i[l][g] = p[g]
                        }
                        var E = i[l].length;
                        switch (i[l][0]) {
                            case "z":
                                s = u, o = a;
                                break;
                            case "h":
                                s += +i[l][E - 1];
                                break;
                            case "v":
                                o += +i[l][E - 1];
                                break;
                            default:
                                s += +i[l][E - 2], o += +i[l][E - 1]
                        }
                    }
                    return i.toString = y, n.rel = b(i), i
                }

                function V(t) {
                    var n = m(t);
                    if (n.abs) return b(n.abs);
                    if (!s(t, "array") || !s(t && t[0], "array")) t = e.parsePathString(t);
                    if (!t || !t.length) return [["M", 0, 0]];
                    var r = [],
                        i = 0,
                        o = 0,
                        u = 0,
                        a = 0,
                        f = 0,
                        l;
                    t[0][0] == "M" && (i = +t[0][1], o = +t[0][2], u = i, a = o, f++, r[0] = ["M", i, o]);
                    var c = t.length == 3 && t[0][0] == "M" && t[1][0].toUpperCase() == "R" && t[2][0].toUpperCase() == "Z";
                    for (var h, p, d = f, v = t.length; d < v; d++) {
                        r.push(h = []), p = t[d], l = p[0];
                        if (l != l.toUpperCase()) {
                            h[0] = l.toUpperCase();
                            switch (h[0]) {
                                case "A":
                                    h[1] = p[1], h[2] = p[2], h[3] = p[3], h[4] = p[4], h[5] = p[5], h[6] = +(p[6] + i), h[7] = +(p[7] + o);
                                    break;
                                case "V":
                                    h[1] = +p[1] + o;
                                    break;
                                case "H":
                                    h[1] = +p[1] + i;
                                    break;
                                case "R":
                                    var g = [i, o].concat(p.slice(1));
                                    for (var w = 2, E = g.length; w < E; w++) g[w] = +g[w] + i, g[++w] = +g[w] + o;
                                    r.pop(), r = r.concat(et(g, c));
                                    break;
                                case "O":
                                    r.pop(), g = U(i, o, p[1], p[2]), g.push(g[0]), r = r.concat(g);
                                    break;
                                case "U":
                                    r.pop(), r = r.concat(U(i, o, p[1], p[2], p[3])), h = ["U"].concat(r[r.length - 1].slice(-2));
                                    break;
                                case "M":
                                    u = +p[1] + i, a = +p[2] + o;
                                default:
                                    for (w = 1, E = p.length; w < E; w++) h[w] = +p[w] + (w % 2 ? i : o)
                            }
                        } else if (l == "R") g = [i, o].concat(p.slice(1)), r.pop(), r = r.concat(et(g, c)), h = ["R"].concat(p.slice(-2));
                        else if (l == "O") r.pop(), g = U(i, o, p[1], p[2]), g.push(g[0]), r = r.concat(g);
                        else if (l == "U") r.pop(), r = r.concat(U(i, o, p[1], p[2], p[3])), h = ["U"].concat(r[r.length - 1].slice(-2));
                        else
                            for (var S = 0, x = p.length; S < x; S++) h[S] = p[S];
                        l = l.toUpperCase();
                        if (l != "O") switch (h[0]) {
                            case "Z":
                                i = u, o = a;
                                break;
                            case "H":
                                i = h[1];
                                break;
                            case "V":
                                o = h[1];
                                break;
                            case "M":
                                u = h[h.length - 2], a = h[h.length - 1];
                            default:
                                i = h[h.length - 2], o = h[h.length - 1]
                        }
                    }
                    return r.toString = y, n.abs = b(r), r
                }

                function $(e, t, n, r) {
                    return [e, t, n, r, n, r]
                }

                function J(e, t, n, r, i, s) {
                    var o = 1 / 3,
                        u = 2 / 3;
                    return [o * e + u * n, o * t + u * r, o * i + u * n, o * s + u * r, i, s]
                }

                function K(t, n, r, i, s, o, u, a, f, h) {
                    var p = c * 120 / 180,
                        d = c / 180 * (+s || 0),
                        m = [],
                        g, y = e._.cacher(function (e, t, n) {
                            var r = e * l.cos(n) - t * l.sin(n),
                                i = e * l.sin(n) + t * l.cos(n);
                            return {
                                x: r,
                                y: i
                            }
                        });
                    if (!h) {
                        g = y(t, n, -d), t = g.x, n = g.y, g = y(a, f, -d), a = g.x, f = g.y;
                        var b = l.cos(c / 180 * s),
                            w = l.sin(c / 180 * s),
                            E = (t - a) / 2,
                            S = (n - f) / 2,
                            x = E * E / (r * r) + S * S / (i * i);
                        x > 1 && (x = l.sqrt(x), r = x * r, i = x *
                            i);
                        var T = r * r,
                            N = i * i,
                            C = (o == u ? -1 : 1) * l.sqrt(v((T * N - T * S * S - N * E * E) / (T * S * S + N * E * E))),
                            k = C * r * S / i + (t + a) / 2,
                            L = C * -i * E / r + (n + f) / 2,
                            A = l.asin(((n - L) / i).toFixed(9)),
                            O = l.asin(((f - L) / i).toFixed(9));
                        A = t < k ? c - A : A, O = a < k ? c - O : O, A < 0 && (A = c * 2 + A), O < 0 && (O = c * 2 + O), u && A > O && (A -= c * 2), !u && O > A && (O -= c * 2)
                    } else A = h[0], O = h[1], k = h[2], L = h[3];
                    var M = O - A;
                    if (v(M) > p) {
                        var _ = O,
                            D = a,
                            P = f;
                        O = A + p * (u && O > A ? 1 : -1), a = k + r * l.cos(O), f = L + i * l.sin(O), m = K(a, f, r, i, s, 0, u, D, P, [O, _, k, L])
                    }
                    M = O - A;
                    var H = l.cos(A),
                        B = l.sin(A),
                        j = l.cos(O),
                        F = l.sin(O),
                        I = l.tan(M / 4),
                        q = 4 / 3 * r * I,
                        R = 4 / 3 * i * I,
                        U = [t, n],
                        z = [t + q * B, n - R * H],
                        W = [a + q * F, f - R * j],
                        X = [a, f];
                    z[0] = 2 * U[0] - z[0], z[1] = 2 * U[1] - z[1];
                    if (h) return [z, W, X].concat(m);
                    m = [z, W, X].concat(m).join().split(",");
                    var V = [];
                    for (var $ = 0, J = m.length; $ < J; $++) V[$] = $ % 2 ? y(m[$ - 1], m[$], d).y : y(m[$], m[$ + 1], d).x;
                    return V
                }

                function Q(e, t, n, r, i, s, o, u, a) {
                    var f = 1 - a;
                    return {
                        x: d(f, 3) * e + d(f, 2) * 3 * a * n + f * 3 * a * a * i + d(a, 3) * o,
                        y: d(f, 3) * t + d(f, 2) * 3 * a * r + f * 3 * a * a * s + d(a, 3) * u
                    }
                }

                function G(e, t, n, r, i, s, o, u) {
                    var a = i - 2 * n + e - (o - 2 * i + n),
                        f = 2 * (n - e) - 2 * (i - n),
                        c = e - n,
                        d = (-f + l.sqrt(f * f - 4 * a * c)) / 2 / a,
                        m = (-f - l.sqrt(f * f - 4 * a * c)) / 2 / a,
                        g = [t, u],
                        y = [e, o],
                        b;
                    return v(d) > "1e12" && (d = .5), v(m) > "1e12" && (m = .5), d > 0 && d < 1 && (b = Q(e, t, n, r, i, s, o, u, d), y.push(b.x), g.push(b.y)), m > 0 && m < 1 && (b = Q(e, t, n, r, i, s, o, u, m), y.push(b.x), g.push(b.y)), a = s - 2 * r + t - (u - 2 * s + r), f = 2 * (r - t) - 2 * (s - r), c = t - r, d = (-f + l.sqrt(f * f - 4 * a * c)) / 2 / a, m = (-f - l.sqrt(f * f - 4 * a * c)) / 2 / a, v(d) > "1e12" && (d = .5), v(m) > "1e12" && (m = .5), d > 0 && d < 1 && (b = Q(e, t, n, r, i, s, o, u, d), y.push(b.x), g.push(b.y)), m > 0 && m < 1 && (b = Q(e, t, n, r, i, s, o, u, m), y.push(b.x), g.push(b.y)), {
                        min: {
                            x: h.apply(0, y),
                            y: h.apply(0, g)
                        },
                        max: {
                            x: p.apply(0, y),
                            y: p.apply(0, g)
                        }
                    }
                }

                function Y(e, t) {
                    var n = !t && m(e);
                    if (!t && n.curve) return b(n.curve);
                    var r = V(e),
                        i = t && V(t),
                        s = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        },
                        o = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        },
                        u = function (e, t) {
                            var n, r;
                            if (!e) return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
                            !(e[0] in {
                                T: 1,
                                Q: 1
                            }) && (t.qx = t.qy = null);
                            switch (e[0]) {
                                case "M":
                                    t.X = e[1], t.Y = e[2];
                                    break;
                                case "A":
                                    e = ["C"].concat(K.apply(0, [t.x, t.y].concat(e.slice(1))));
                                    break;
                                case "S":
                                    n = t.x + (t.x - (t.bx || t.x)), r = t.y + (t.y - (t.by || t.y)), e = ["C", n, r].concat(e.slice(1));
                                    break;
                                case "T":
                                    t.qx = t.x + (t.x - (t.qx || t.x)), t.qy = t.y + (t.y - (t.qy || t.y)), e = ["C"].concat(J(t.x, t.y, t.qx, t.qy, e[1], e[2]));
                                    break;
                                case "Q":
                                    t.qx = e[1], t.qy = e[2], e = ["C"].concat(J(t.x, t.y, e[1], e[2], e[3], e[4]));
                                    break;
                                case "L":
                                    e = ["C"].concat($(t.x, t.y, e[1], e[2]));
                                    break;
                                case "H":
                                    e = ["C"].concat($(t.x, t.y, e[1], t.y));
                                    break;
                                case "V":
                                    e = ["C"].concat($(t.x, t.y, t.x, e[1]));
                                    break;
                                case "Z":
                                    e = ["C"].concat($(t.x, t.y, t.X, t.Y))
                            }
                            return e
                        },
                        a = function (e, t) {
                            if (e[t].length > 7) {
                                e[t].shift();
                                var n = e[t];
                                while (n.length) e.splice(t++, 0, ["C"].concat(n.splice(0, 6)));
                                e.splice(t, 1), h = p(r.length, i && i.length || 0)
                            }
                        },
                        l = function (e, t, n, s, o) {
                            e && t && e[o][0] == "M" && t[o][0] != "M" && (t.splice(o, 0, ["M", s.x, s.y]), n.bx = 0, n.by = 0, n.x = e[o][1], n.y = e[o][2], h = p(r.length, i && i.length || 0))
                        };
                    for (var c = 0, h = p(r.length, i && i.length || 0); c < h; c++) {
                        r[c] = u(r[c], s), a(r, c), i && (i[c] = u(i[c], o)), i && a(i, c), l(r, i, s, o, c), l(i, r, o, s, c);
                        var d = r[c],
                            v = i && i[c],
                            g = d.length,
                            y = i && v.length;
                        s.x = d[g - 2], s.y = d[g - 1], s.bx = f(d[g - 4]) || s.x, s.by = f(d[g - 3]) || s.y, o.bx = i && (f(v[y - 4]) || o.x), o.by = i && (f(v[y - 3]) || o.y), o.x = i && v[y - 2], o.y = i && v[y - 1]
                    }
                    return i || (n.curve = b(r)), i ? [r, i] : r
                }

                function Z(e, t) {
                    if (!t) return e;
                    var n, r, i, s, o, u, a;
                    e = Y(e);
                    for (i = 0, o = e.length; i < o; i++) {
                        a = e[i];
                        for (s = 1, u = a.length; s < u; s += 2) n = t.x(a[s], a[s + 1]), r = t.y(a[s], a[s + 1]), a[s] = n, a[s + 1] = r
                    }
                    return e
                }

                function et(e, t) {
                    var n = [];
                    for (var r = 0, i = e.length; i - 2 * !t > r; r += 2) {
                        var s = [{
                            x: +e[r - 2],
                            y: +e[r - 1]
                        }, {
                            x: +e[r],
                            y: +e[r + 1]
                        }, {
                            x: +e[r + 2],
                            y: +e[r + 3]
                        }, {
                            x: +e[r + 4],
                            y: +e[r + 5]
                        }];
                        t ? r ? i - 4 == r ? s[3] = {
                            x: +e[0],
                            y: +e[1]
                        } : i - 2 == r && (s[2] = {
                            x: +e[0],
                            y: +e[1]
                        }, s[3] = {
                            x: +e[2],
                            y: +e[3]
                        }) : s[0] = {
                            x: +e[i - 2],
                            y: +e[i - 1]
                        } : i - 4 == r ? s[3] = s[2] : r || (s[0] = {
                            x: +e[r],
                            y: +e[r + 1]
                        }), n.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
                    }
                    return n
                }
                var i = t.prototype,
                    s = e.is,
                    o = e._.clone,
                    u = "hasOwnProperty",
                    a = /,?([a-z]),?/gi,
                    f = parseFloat,
                    l = Math,
                    c = l.PI,
                    h = l.min,
                    p = l.max,
                    d = l.pow,
                    v = l.abs,
                    S = E(1),
                    x = E(),
                    T = E(0, 1),
                    z = e._unit2px,
                    W = {
                        path: function (e) {
                            return e.attr("path")
                        },
                        circle: function (e) {
                            var t = z(e);
                            return U(t.cx, t.cy, t.r)
                        },
                        ellipse: function (e) {
                            var t = z(e);
                            return U(t.cx, t.cy, t.rx, t.ry)
                        },
                        rect: function (e) {
                            var t = z(e);
                            return R(t.x, t.y, t.width, t.height, t.rx, t.ry)
                        },
                        image: function (e) {
                            var t = z(e);
                            return R(t.x, t.y, t.width, t.height)
                        },
                        text: function (e) {
                            var t = e.node.getBBox();
                            return R(t.x, t.y, t.width, t.height)
                        },
                        g: function (e) {
                            var t = e.node.getBBox();
                            return R(t.x, t.y, t.width, t.height)
                        },
                        symbol: function (e) {
                            var t = e.getBBox();
                            return R(t.x, t.y, t.width, t.height)
                        },
                        line: function (e) {
                            return "M" + [e.attr("x1"), e.attr("y1"), e.attr("x2"), e.attr("y2")]
                        },
                        polyline: function (e) {
                            return "M" + e.attr("points")
                        },
                        polygon: function (e) {
                            return "M" + e.attr("points") + "z"
                        },
                        svg: function (e) {
                            var t = e.node.getBBox();
                            return R(t.x, t.y, t.width, t.height)
                        },
                        deflt: function (e) {
                            var t = e.node.getBBox();
                            return R(t.x, t.y, t.width, t.height)
                        }
                    };
                e.path = m, e.path.getTotalLength = S, e.path.getPointAtLength = x, e.path.getSubpath = function (e, t, n) {
                    if (this.getTotalLength(e) - n < 1e-6) return T(e, t).end;
                    var r = T(e, n, 1);
                    return t ? T(r, t).end : r
                }, i.getTotalLength = function () {
                    if (this.node.getTotalLength) return this.node.getTotalLength()
                }, i.getPointAtLength = function (e) {
                    return x(this.attr("d"), e)
                }, i.getSubpath = function (t, n) {
                    return e.path.getSubpath(this.attr("d"), t, n)
                }, e._.box = g, e.path.findDotsAtSegment = N, e.path.bezierBBox = C, e.path.isPointInsideBBox = k, e.path.isBBoxIntersect = L, e.path.intersection = B, e.path.intersectionNumber = j, e.path.isPointInside = I, e.path.getBBox = q, e.path.get = W, e.path.toRelative = X, e.path.toAbsolute = V, e.path.toCubic = Y, e.path.map = Z, e.path.toString = y, e.path.clone = b
            }), r.plugin(function (e, t, n, r) {
                var i = Math.max,
                    s = Math.min,
                    o = function (e) {
                        this.items = [], this.length = 0, this.type = "set";
                        if (e)
                            for (var t = 0, n = e.length; t < n; t++) e[t] && (this[this.items.length] = this.items[this.items.length] = e[t], this.length++)
                    },
                    u = o.prototype;
                u.push = function () {
                    var e, t;
                    for (var n = 0, r = arguments.length; n < r; n++) e = arguments[n], e && (t = this.items.length, this[t] = this.items[t] = e, this.length++);
                    return this
                }, u.pop = function () {
                    return this.length && delete this[this.length--], this.items.pop()
                }, u.forEach = function (e, t) {
                    for (var n = 0, r = this.items.length; n < r; n++)
                        if (e.call(t, this.items[n], n) === !1) return this;
                    return this
                }, u.remove = function () {
                    while (this.length) this.pop().remove();
                    return this
                }, u.attr = function (e) {
                    for (var t = 0, n = this.items.length; t < n; t++) this.items[t].attr(e);
                    return this
                }, u.clear = function () {
                    while (this.length) this.pop()
                }, u.splice = function (e, t, n) {
                    e = e < 0 ? i(this.length + e, 0) : e, t = i(0, s(this.length - e, t));
                    var r = [],
                        u = [],
                        a = [],
                        f;
                    for (f = 2; f < arguments.length; f++) a.push(arguments[f]);
                    for (f = 0; f < t; f++) u.push(this[e + f]);
                    for (; f < this.length - e; f++) r.push(this[e + f]);
                    var l = a.length;
                    for (f = 0; f < l + r.length; f++) this.items[e + f] = this[e + f] = f < l ? a[f] : r[f - l];
                    f = this.items.length = this.length -= t - l;
                    while (this[f]) delete this[f++];
                    return new o(u)
                }, u.exclude = function (e) {
                    for (var t = 0, n = this.length; t < n; t++)
                        if (this[t] == e) return this.splice(t, 1), !0;
                    return !1
                }, u.insertAfter = function (e) {
                    var t = this.items.length;
                    while (t--) this.items[t].insertAfter(e);
                    return this
                }, u.getBBox = function () {
                    var e = [],
                        t = [],
                        n = [],
                        r = [];
                    for (var o = this.items.length; o--;)
                        if (!this.items[o].removed) {
                            var u = this.items[o].getBBox();
                            e.push(u.x), t.push(u.y), n.push(u.x + u.width), r.push(u.y + u.height)
                        }
                    return e = s.apply(0, e), t = s.apply(0, t), n = i.apply(0, n), r = i.apply(0, r), {
                        x: e,
                        y: t,
                        x2: n,
                        y2: r,
                        width: n - e,
                        height: r - t,
                        cx: e + (n - e) / 2,
                        cy: t + (r - t) / 2
                    }
                }, u.clone = function (e) {
                    e = new o;
                    for (var t = 0, n = this.items.length; t < n; t++) e.push(this.items[t].clone());
                    return e
                }, u.toString = function () {
                    return "Snap\u2018s set"
                }, u.type = "set", e.set = function () {
                    var e = new o;
                    return arguments.length && e.push.apply(e, Array.prototype.slice.call(arguments, 0)), e
                }
            }), r.plugin(function (e, t, n, r) {
                function u(e) {
                    var t = e[0];
                    switch (t.toLowerCase()) {
                        case "t":
                            return [t, 0, 0];
                        case "m":
                            return [t, 1, 0, 0, 1, 0, 0];
                        case "r":
                            return e.length == 4 ? [t, 0, e[2], e[3]] : [t, 0];
                        case "s":
                            return e.length == 5 ? [t, 1, 1, e[3], e[4]] : e.length == 3 ? [t, 1, 1] : [t, 1]
                    }
                }

                function a(t, n, r) {
                    n = o(n).replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], n = e.parseTransformString(n) || [];
                    var i = Math.max(t.length, n.length),
                        s = [],
                        a = [],
                        f = 0,
                        l, c, d, v;
                    for (; f < i; f++) {
                        d = t[f] || u(n[f]), v = n[f] || u(d);
                        if (d[0] != v[0] || d[0].toLowerCase() == "r" && (d[2] != v[2] || d[3] != v[3]) || d[0].toLowerCase() == "s" && (d[3] != v[3] || d[4] != v[4])) {
                            t = e._.transform2matrix(t, r()), n = e._.transform2matrix(n, r()), s = [["m", t.a, t.b, t.c, t.d, t.e, t.f]], a = [["m", n.a, n.b, n.c, n.d, n.e, n.f]];
                            break
                        }
                        s[f] = [], a[f] = [];
                        for (l = 0, c = Math.max(d.length, v.length); l < c; l++) l in d && (s[f][l] = d[l]), l in v && (a[f][l] = v[l])
                    }
                    return {
                        from: p(s),
                        to: p(a),
                        f: h(s)
                    }
                }

                function f(e) {
                    return e
                }

                function l(e) {
                    return function (t) {
                        return +t.toFixed(3) + e
                    }
                }

                function c(t) {
                    return e.rgb(t[0], t[1], t[2])
                }

                function h(e) {
                    var t = 0,
                        n, r, i, s, o, u, a = [];
                    for (n = 0, r = e.length; n < r; n++) {
                        o = "[", u = ['"' + e[n][0] + '"'];
                        for (i = 1, s = e[n].length; i < s; i++) u[i] = "val[" + t++ + "]";
                        o += u + "]", a[n] = o
                    }
                    return Function("val", "return Snap.path.toString.call([" + a + "])")
                }

                function p(e) {
                    var t = [];
                    for (var n = 0, r = e.length; n < r; n++)
                        for (var i = 1, s = e[n].length; i < s; i++) t.push(e[n][i]);
                    return t
                }
                var i = {},
                    s = /[a-z]+$/i,
                    o = String;
                i.stroke = i.fill = "colour", t.prototype.equal = function (t, n) {
                    var r, u, d = o(this.attr(t) || ""),
                        v = this;
                    if (d == +d && n == +n) return {
                        from: +d,
                        to: +n,
                        f: f
                    };
                    if (i[t] == "colour") return r = e.color(d), u = e.color(n), {
                        from: [r.r, r.g, r.b, r.opacity],
                        to: [u.r, u.g, u.b, u.opacity],
                        f: c
                    };
                    if (t == "transform" || t == "gradientTransform" || t == "patternTransform") return n instanceof e.Matrix && (n = n.toTransformString()), e._.rgTransform.test(n) || (n = e._.svgTransform2string(n)), a(d, n, function () {
                        return v.getBBox(1)
                    });
                    if (t == "d" || t == "path") return r = e.path.toCubic(d, n), {
                        from: p(r[0]),
                        to: p(r[1]),
                        f: h(r[0])
                    };
                    if (t == "points") return r = o(d).split(","), u = o(n).split(","), {
                        from: r,
                        to: u,
                        f: function (e) {
                            return e
                        }
                    };
                    var m = d.match(s),
                        g = o(n).match(s);
                    return m && m == g ? {
                        from: parseFloat(d),
                        to: parseFloat(n),
                        f: l(m)
                    } : {
                        from: this.asPX(t),
                        to: this.asPX(t, n),
                        f: f
                    }
                }
            }), r.plugin(function (e, n, r, i) {
                var s = n.prototype,
                    o = "hasOwnProperty",
                    u = "createTouch" in i.doc,
                    a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"],
                    f = {
                        mousedown: "touchstart",
                        mousemove: "touchmove",
                        mouseup: "touchend"
                    },
                    l = function (e) {
                        var t = e == "y" ? "scrollTop" : "scrollLeft";
                        return i.doc.documentElement[t] || i.doc.body[t]
                    },
                    c = function () {
                        this.returnValue = !1
                    },
                    h = function () {
                        return this.originalEvent.preventDefault()
                    },
                    p = function () {
                        this.cancelBubble = !0
                    },
                    d = function () {
                        return this.originalEvent.stopPropagation()
                    },
                    v = function () {
                        if (i.doc.addEventListener) return function (e, t, n, r) {
                            var i = u && f[t] ? f[t] : t,
                                s = function (i) {
                                    var s = l("y"),
                                        a = l("x");
                                    if (u && f[o](t))
                                        for (var c = 0, p = i.targetTouches && i.targetTouches.length; c < p; c++)
                                            if (i.targetTouches[c].target == e || e.contains(i.targetTouches[c].target)) {
                                                var v = i;
                                                i = i.targetTouches[c], i.originalEvent = v, i.preventDefault = h, i.stopPropagation = d;
                                                break
                                            }
                                    var m = i.clientX + a,
                                        g = i.clientY + s;
                                    return n.call(r, i, m, g)
                                };
                            return t !== i && e.addEventListener(t, s, !1), e.addEventListener(i, s, !1),
                                function () {
                                    return t !== i && e.removeEventListener(t, s, !1), e.removeEventListener(i, s, !1), !0
                                }
                        };
                        if (i.doc.attachEvent) return function (e, t, n, r) {
                            var s = function (e) {
                                e = e || i.win.event;
                                var t = l("y"),
                                    s = l("x"),
                                    o = e.clientX + s,
                                    u = e.clientY + t;
                                return e.preventDefault = e.preventDefault || c, e.stopPropagation = e.stopPropagation || p, n.call(r, e, o, u)
                            };
                            e.attachEvent("on" + t, s);
                            var o = function () {
                                return e.detachEvent("on" + t, s), !0
                            };
                            return o
                        }
                    }(),
                    m = [],
                    g = function (n) {
                        var r = n.clientX,
                            i = n.clientY,
                            s = l("y"),
                            o = l("x"),
                            a, f = m.length;
                        while (f--) {
                            a = m[f];
                            if (u) {
                                var c = n.touches && n.touches.length,
                                    h;
                                while (c--) {
                                    h = n.touches[c];
                                    if (h.identifier == a.el._drag.id || a.el.node.contains(h.target)) {
                                        r = h.clientX, i = h.clientY, (n.originalEvent ? n.originalEvent : n).preventDefault();
                                        break
                                    }
                                }
                            } else n.preventDefault();
                            var p = a.el.node,
                                d, v = e._.glob,
                                g = p.nextSibling,
                                y = p.parentNode,
                                b = p.style.display;
                            r += o, i += s, t("snap.drag.move." + a.el.id, a.move_scope || a.el, r - a.el._drag.x, i - a.el._drag.y, r, i, n)
                        }
                    },
                    y = function (n) {
                        e.unmousemove(g).unmouseup(y);
                        var r = m.length,
                            i;
                        while (r--) i = m[r], i.el._drag = {}, t("snap.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, n);
                        m = []
                    };
                for (var b = a.length; b--;)(function (t) {
                    e[t] = s[t] = function (n, r) {
                        return e.is(n, "function") && (this.events = this.events || [], this.events.push({
                            name: t,
                            f: n,
                            unbind: v(this.shape || this.node || i.doc, t, n, r || this)
                        })), this
                    }, e["un" + t] = s["un" + t] = function (e) {
                        var n = this.events || [],
                            r = n.length;
                        while (r--)
                            if (n[r].name == t && (n[r].f == e || !e)) return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
                        return this
                    }
                })(a[b]);
                s.hover = function (e, t, n, r) {
                    return this.mouseover(e, n).mouseout(t, r || n)
                }, s.unhover = function (e, t) {
                    return this.unmouseover(e).unmouseout(t)
                };
                var w = [];
                s.drag = function (n, r, i, s, o, u) {
                    function f(a, f, l) {
                        (a.originalEvent || a).preventDefault(), this._drag.x = f, this._drag.y = l, this._drag.id = a.identifier, !m.length && e.mousemove(g).mouseup(y), m.push({
                            el: this,
                            move_scope: s,
                            start_scope: o,
                            end_scope: u
                        }), r && t.on("snap.drag.start." + this.id, r), n && t.on("snap.drag.move." + this.id, n), i && t.on("snap.drag.end." + this.id, i), t("snap.drag.start." + this.id, o || s || this, f, l, a)
                    }
                    if (!arguments.length) {
                        var a;
                        return this.drag(function (e, t) {
                            this.attr({
                                transform: a + (a ? "T" : "t") + [e, t]
                            })
                        }, function () {
                            a = this.transform().local
                        })
                    }
                    return this._drag = {}, w.push({
                        el: this,
                        start: f
                    }), this.mousedown(f), this
                }, s.undrag = function () {
                    var n = w.length;
                    while (n--) w[n].el == this && (this.unmousedown(w[n].start), w.splice(n, 1), t.unbind("snap.drag.*." + this.id));
                    return !w.length && e.unmousemove(g).unmouseup(y), this
                }
            }), r.plugin(function (e, n, r, i) {
                var s = n.prototype,
                    o = r.prototype,
                    u = /^\s*url\((.+)\)/,
                    a = String,
                    f = e._.$;
                e.filter = {}, o.filter = function (t) {
                    var r = this;
                    r.type != "svg" && (r = r.paper);
                    var i = e.parse(a(t)),
                        s = e._.id(),
                        o = r.node.offsetWidth,
                        u = r.node.offsetHeight,
                        l = f("filter");
                    return f(l, {
                        id: s,
                        filterUnits: "userSpaceOnUse"
                    }), l.appendChild(i.node), r.defs.appendChild(l), new n(l)
                }, t.on("snap.util.getattr.filter", function () {
                    t.stop();
                    var n = f(this.node, "filter");
                    if (n) {
                        var r = a(n).match(u);
                        return r && e.select(r[1])
                    }
                }), t.on("snap.util.attr.filter", function (r) {
                    if (r instanceof n && r.type == "filter") {
                        t.stop();
                        var i = r.node.id;
                        i || (f(r.node, {
                            id: r.id
                        }), i = r.id), f(this.node, {
                            filter: e.url(i)
                        })
                    }
                    if (!r || r == "none") t.stop(), this.node.removeAttribute("filter")
                }), e.filter.blur = function (t, n) {
                    t == null && (t = 2);
                    var r = n == null ? t : [t, n];
                    return e.format('<feGaussianBlur stdDeviation="{def}"/>', {
                        def: r
                    })
                }, e.filter.blur.toString = function () {
                    return this()
                }, e.filter.shadow = function (t, n, r, i) {
                    return i = i || "#000", r == null && (r = 4), typeof r == "string" && (i = r, r = 4), t == null && (t = 0, n = 2), n == null && (n = t), i = e.color(i), e.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                        color: i,
                        dx: t,
                        dy: n,
                        blur: r
                    })
                }, e.filter.shadow.toString = function () {
                    return this()
                }, e.filter.grayscale = function (t) {
                    return t == null && (t = 1), e.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                        a: .2126 + .7874 * (1 - t),
                        b: .7152 - .7152 * (1 - t),
                        c: .0722 - .0722 * (1 - t),
                        d: .2126 - .2126 * (1 - t),
                        e: .7152 + .2848 * (1 - t),
                        f: .0722 - .0722 * (1 - t),
                        g: .2126 - .2126 * (1 - t),
                        h: .0722 + .9278 * (1 - t)
                    })
                }, e.filter.grayscale.toString = function () {
                    return this()
                }, e.filter.sepia = function (t) {
                    return t == null && (t = 1), e.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                        a: .393 + .607 * (1 - t),
                        b: .769 - .769 * (1 - t),
                        c: .189 - .189 * (1 - t),
                        d: .349 - .349 * (1 - t),
                        e: .686 + .314 * (1 - t),
                        f: .168 - .168 * (1 - t),
                        g: .272 - .272 * (1 - t),
                        h: .534 - .534 * (1 - t),
                        i: .131 + .869 * (1 - t)
                    })
                }, e.filter.sepia.toString = function () {
                    return this()
                }, e.filter.saturate = function (t) {
                    return t == null && (t = 1), e.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                        amount: 1 - t
                    })
                }, e.filter.saturate.toString = function () {
                    return this()
                }, e.filter.hueRotate = function (t) {
                    return t = t || 0, e.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                        angle: t
                    })
                }, e.filter.hueRotate.toString = function () {
                    return this()
                }, e.filter.invert = function (t) {
                    return t == null && (t = 1), e.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                        amount: t,
                        amount2: 1 - t
                    })
                }, e.filter.invert.toString = function () {
                    return this()
                }, e.filter.brightness = function (t) {
                    return t == null && (t = 1), e.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                        amount: t
                    })
                }, e.filter.brightness.toString = function () {
                    return this()
                }, e.filter.contrast = function (t) {
                    return t == null && (t = 1), e.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                        amount: t,
                        amount2: .5 - t / 2
                    })
                }, e.filter.contrast.toString = function () {
                    return this()
                }
            }), r
        }),
        function (e, t, n) {
            function u(t, n, r, s) {
                e.each(i, function (e, i) {
                    i[t].call(this, n, r, s)
                })
            }

            function a(e) {
                var t = o.Event(e);
                r = o.State(t), u("touchstart", e, r, t)
            }

            function f(e) {
                if (!r) return;
                var t = o.Event(e);
                r.move.push(t), u("touchmove", e, r, t)
            }

            function l(e) {
                var t = o.Event(e);
                r.end = t, u("touchend", e, r, t)
            }
            var r, i = {},
                s = "ontouchstart" in t,
                o = {
                    active: !1,
                    on: function () {
                        e(document).on("touchstart MSPointerDown pointerdown", a).on("touchmove MSPointerMove MSPointerHover pointermove", f).on("touchend touchcancel MSPointerUp MSPointerCancel pointerup pointercancel", l), o.active = !0
                    },
                    off: function () {
                        e(document).off("touchstart MSPointerDown pointerdown", a).off("touchmove MSPointerMove MSPointerHover pointermove ", f).off("touchend touchcancel MSPointerUp MSPointerCancel pointerup pointercancel", l), o.active = !1
                    },
                    track: function (e, t) {
                        i[e] = t
                    },
                    addEventParam: function (t, n) {
                        var r = e(t.target),
                            i = r.offset(),
                            s = {
                                pageX: t.point[0].x,
                                pageY: t.point[0].y,
                                offsetX: i.left - t.point[0].x,
                                offsetY: i.top - t.point[0].y
                            };
                        return e.extend(s, n)
                    },
                    Event: function (t) {
                        var n = {
                                type: t.type,
                                timestamp: (new Date).getTime(),
                                target: t.target,
                                point: []
                            },
                            r = [];
                        return t.type.indexOf("touch") > -1 ? r = t.changedTouches || t.originalEvent.changedTouches || t.touches || t.originalEvent.touches : t.type.match(/.*?pointer.*?/i) && (r = [t.originalEvent]), e.each(r, function (e, t) {
                            n.point.push({
                                x: t.pageX,
                                y: t.
                                pageY
                            })
                        }), n
                    },
                    State: function (e) {
                        var t = e.point[0];
                        return {
                            start: e,
                            move: [],
                            end: null
                        }
                    },
                    calc: {
                        getDuration: function (e, t) {
                            return t.timestamp - e.timestamp
                        },
                        getDistance: function (e, t) {
                            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                        },
                        getAngle: function (e, t) {
                            return Math.atan2(t.y - e.y, t.x - e.x) * 180 / Math.PI
                        },
                        getDirection: function (e) {
                            return e < -45 && e > -135 ? "up" : e >= -45 && e <= 45 ? "right" : e >= 45 && e < 135 ? "down" : e >= 135 || e <= -135 ? "left" : "unknown"
                        },
                        getScale: function (e, t) {
                            var n = e.point,
                                r = t.point;
                            return n.length === 2 && r.length === 2 ? (Math.sqrt(Math.pow(r[0].x - r[1].x, 2) + Math.pow(r[0].y - r[1].y, 2)) / Math.sqrt(Math.pow(n[0].x - n[1].x, 2) + Math.pow(n[0].y - n[1].y, 2))).toFixed(2) : 0
                        },
                        getRotation: function (e, t) {
                            var n = e.point,
                                r = t.point;
                            return n.length === 2 && r.length === 2 ? (Math.atan2(r[0].y - r[1].y, r[0].x - r[1].x) * 180 / Math.PI - Math.atan2(n[0].y - n[1].y, n[0].x - n[1].x) * 180 / Math.PI).toFixed(2) : 0
                        }
                    }
                };
            o.on(), e.toe = o
        }(jQuery, this),
        function (e, t, n, r) {
            var i = "swipe",
                s = {
                    distance: 5,
                    duration: 4e3,
                    direction: "all"
                };
            t.track(i, {
                touchstart: function (e, t, n) {
                    t[i] = {
                        finger: n.point.length
                    }
                },
                touchmove: function (e, t, n) {
                    t[i].finger = n.point.length > t[i].finger ? n.point.length : t[i].finger
                },
                touchend: function (n, r, o) {
                    var u = e.extend(s, n.data),
                        a, f;
                    a = t.calc.getDuration(r.start, o), f = t.calc.getDistance(r.start.point[0], o.point[0]), console.log(a, f), a < u.duration && f > u.distance && (r[i].angle = t.calc.getAngle(r.start.point[0], o.point[0]), r[i].direction = t.calc.getDirection(r[i].angle), (u.direction === "all" || r[i].direction === u.direction) && e(n.target).trigger(e.Event(i, t.addEventParam(r.start, r[i]))))
                }
            })
        }(jQuery, jQuery.toe, this), Date.now === undefined && (Date.now = function () {
            return (new Date).valueOf()
        });
    var r = r || function () {
        var e = [];
        return {
            REVISION: "12",
            getAll: function () {
                return e
            },
            removeAll: function () {
                e = []
            },
            add: function (t) {
                e.push(t)
            },
            remove: function (t) {
                var n = e.indexOf(t);
                n !== -1 && e.splice(n, 1)
            },
            update: function (t) {
                if (e.length === 0) return !1;
                var n = 0;
                t = t !== undefined ? t : typeof window != "undefined" && window.performance !== undefined && window.performance.now !== undefined ? window.performance.now() : Date.now();
                while (n < e.length) e[n].update(t) ? n++ : e.splice(n, 1);
                return !0
            }
        }
    }();
    r.Tween = function (e) {
            var t = e,
                n = {},
                i = {},
                s = {},
                o = 1e3,
                u = 0,
                a = !1,
                f = !1,
                l = !1,
                c = 0,
                h = null,
                p = r.Easing.Linear.None,
                d = r.Interpolation.Linear,
                v = [],
                m = null,
                g = !1,
                y = null,
                b = null;
            for (var w in e) n[w] = parseFloat(e[w], 10);
            this.to = function (e, t) {
                return t !== undefined && (o = t), i = e, this
            }, this.start = function (e) {
                r.add(this), f = !0, g = !1, h = e !== undefined ? e : typeof window != "undefined" && window.performance !== undefined && window.performance.now !== undefined ? window.performance.now() : Date.now(), h += c;
                for (var o in i) {
                    if (i[o] instanceof Array) {
                        if (i[o].length === 0) continue;
                        i[o] = [t[o]].concat(i[o])
                    }
                    n[o] = t[o], n[o] instanceof Array == 0 && (n[o] *= 1), s[o] = n[o] || 0
                }
                return this
            }, this.stop = function () {
                return f ? (r.remove(this), f = !1, this.stopChainedTweens(), this) : this
            }, this.stopChainedTweens = function () {
                for (var e = 0, t = v.length; e < t; e++) v[e].stop()
            }, this.delay = function (e) {
                return c = e, this
            }, this.repeat = function (e) {
                return u = e, this
            }, this.yoyo = function (e) {
                return a = e, this
            }, this.easing = function (e) {
                return p = e, this
            }, this.interpolation = function (e) {
                return d = e, this
            }, this.chain = function () {
                return v = arguments, this
            }, this.onStart = function (e) {
                return m = e, this
            }, this.onUpdate = function (e) {
                return y = e, this
            }, this.onComplete = function (e) {
                return b = e, this
            }, this.update = function (e) {
                var r;
                if (e < h) return !0;
                g === !1 && (m !== null && m.call(t), g = !0);
                var f = (e - h) / o;
                f = f > 1 ? 1 : f;
                var w = p(f);
                for (r in i) {
                    var E = n[r] || 0,
                        S = i[r];
                    S instanceof Array ? t[r] = d(S, w) : (typeof S == "string" && (S = E + parseFloat(S, 10)), typeof S == "number" && (t[r] = E + (S - E) * w))
                }
                y !== null && y.call(t, w);
                if (f == 1) {
                    if (u > 0) {
                        isFinite(u) && u--;
                        for (r in s) {
                            typeof i[r] == "string" && (s[r] = s[r] + parseFloat(i[r], 10));
                            if (a) {
                                var x = s[r];
                                s[r] = i[r], i[r] = x, l = !l
                            }
                            n[r] = s[r]
                        }
                        return h = e + c, !0
                    }
                    b !== null && b.call(t);
                    for (var T = 0, N = v.length; T < N; T++) v[T].start(e);
                    return !1
                }
                return !0
            }
        }, r.Easing = {
            Linear: {
                None: function (e) {
                    return e
                }
            },
            Quadratic: {
                In: function (e) {
                    return e * e
                },
                Out: function (e) {
                    return e * (2 - e)
                },
                InOut: function (e) {
                    return (e *= 2) < 1 ? .5 * e * e : -0.5 * (--e * (e - 2) - 1)
                }
            },
            Cubic: {
                In: function (e) {
                    return e * e * e
                },
                Out: function (e) {
                    return --e * e * e + 1
                },
                InOut: function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                }
            },
            Quartic: {
                In: function (e) {
                    return e * e * e * e
                },
                Out: function (e) {
                    return 1 - --e * e * e * e
                },
                InOut: function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2)
                }
            },
            Quintic: {
                In: function (e) {
                    return e * e * e * e * e
                },
                Out: function (e) {
                    return --e * e * e * e * e + 1
                },
                InOut: function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                }
            },
            Sinusoidal: {
                In: function (e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Out: function (e) {
                    return Math.sin(e * Math.PI / 2)
                },
                InOut: function (e) {
                    return .5 * (1 - Math.cos(Math.PI * e))
                }
            },
            Exponential: {
                In: function (e) {
                    return e === 0 ? 0 : Math.pow(1024, e - 1)
                },
                Out: function (e) {
                    return e === 1 ? 1 : 1 - Math.pow(2, -10 * e)
                },
                InOut: function (e) {
                    return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
                }
            },
            Circular: {
                In: function (e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Out: function (e) {
                    return Math.sqrt(1 - --e * e)
                },
                InOut: function (e) {
                    return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                }
            },
            Elastic: {
                In: function (e) {
                    var t, n = .1,
                        r = .4;
                    return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r)))
                },
                Out: function (e) {
                    var t, n = .1,
                        r = .4;
                    return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin((e - t) * 2 * Math.PI / r) + 1)
                },
                InOut: function (e) {
                    var t, n = .1,
                        r = .4;
                    return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? -0.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r) * .5 + 1)
                }
            },
            Back: {
                In: function (e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t)
                },
                Out: function (e) {
                    var t = 1.70158;
                    return --e * e * ((t + 1) * e + t) + 1
                },
                InOut: function (e) {
                    var t = 2.5949095;
                    return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
                }
            },
            Bounce: {
                In: function (e) {
                    return 1 - r.Easing.Bounce.Out(1 - e)
                },
                Out: function (e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                },
                InOut: function (e) {
                    return e < .5 ? r.Easing.Bounce.In(e * 2) * .5 : r.Easing.Bounce.Out(e * 2 - 1) * .5 + .5
                }
            }
        }, r.Interpolation = {
            Linear: function (e, t) {
                var n = e.length - 1,
                    i = n * t,
                    s = Math.floor(i),
                    o = r.Interpolation.Utils.Linear;
                return t < 0 ? o(e[0], e[1], i) : t > 1 ? o(e[n], e[n - 1], n - i) : o(e[s], e[s + 1 > n ? n : s + 1], i - s)
            },
            Bezier: function (e, t) {
                var n = 0,
                    i = e.length - 1,
                    s = Math.pow,
                    o = r.Interpolation.Utils.Bernstein,
                    u;
                for (u = 0; u <= i; u++) n += s(1 - t, i - u) * s(t, u) * e[u] * o(i, u);
                return n
            },
            CatmullRom: function (e, t) {
                var n = e.length - 1,
                    i = n * t,
                    s = Math.floor(i),
                    o = r.Interpolation.Utils.CatmullRom;
                return e[0] === e[n] ? (t < 0 && (s = Math.floor(i = n * (1 + t))), o(e[(s - 1 + n) % n], e[s], e[(s + 1) % n], e[(s + 2) % n], i - s)) : t < 0 ? e[0] - (o(e[0], e[0], e[1], e[1], -i) - e[0]) : t > 1 ? e[n] - (o(e[n], e[n], e[n - 1], e[n - 1], i - n) - e[n]) : o(e[s ? s - 1 : 0], e[s], e[n < s + 1 ? n : s + 1], e[n < s + 2 ? n : s + 2], i - s)
            },
            Utils: {
                Linear: function (e, t, n) {
                    return (t - e) * n + e
                },
                Bernstein: function (e, t) {
                    var n = r.Interpolation.Utils.Factorial;
                    return n(e) / n(t) / n(e - t)
                },
                Factorial: function () {
                    var e = [1];
                    return function (t) {
                        var n = 1,
                            r;
                        if (e[t]) return e[t];
                        for (r = t; r > 1; r--) n *= r;
                        return e[t] = n
                    }
                }(),
                CatmullRom: function (e, t, n, r, i) {
                    var s = (n - e) * .5,
                        o = (r - t) * .5,
                        u = i * i,
                        a = i * u;
                    return (2 * t - 2 * n + s + o) * a + (-3 * t + 3 * n - 2 * s - o) * u + s * i + t
                }
            }
        }, window.TWEEN = r,
        function () {
            var e = this,
                t = e._,
                n = {},
                r = Array.prototype,
                i = Object.prototype,
                s = Function.prototype,
                o = r.push,
                u = r.slice,
                a = r.concat,
                f = i.toString,
                l = i.hasOwnProperty,
                c = r.forEach,
                h = r.map,
                p = r.reduce,
                d = r.reduceRight,
                v = r.filter,
                m = r.every,
                g = r.some,
                y = r.indexOf,
                b = r.lastIndexOf,
                w = Array.isArray,
                E = Object.keys,
                S = s.bind,
                x = function (e) {
                    if (e instanceof x) return e;
                    if (!(this instanceof x)) return new x(e);
                    this._wrapped = e
                };
            typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.5.2";
            var T = x.each = x.forEach = function (e, t, r) {
                if (e == null) return;
                if (c && e.forEach === c) e.forEach(t, r);
                else if (e.length === +e.length) {
                    for (var i = 0, s = e.length; i < s; i++)
                        if (t.call(r, e[i], i, e) === n) return
                } else {
                    var o = x.keys(e);
                    for (var i = 0, s = o.length; i < s; i++)
                        if (t.call(r, e[o[i]], o[i], e) === n) return
                }
            };
            x.map = x.collect = function (e, t, n) {
                var r = [];
                return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function (e, i, s) {
                    r.push(t.call(n, e, i, s))
                }), r)
            };
            var N = "Reduce of empty array with no initial value";
            x.reduce = x.foldl = x.inject = function (e, t, n, r) {
                var i = arguments.length > 2;
                e == null && (e = []);
                if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
                T(e, function (e, s, o) {
                    i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
                });
                if (!i) throw new TypeError(N);
                return n
            }, x.reduceRight = x.foldr = function (e, t, n, r) {
                var i = arguments.length > 2;
                e == null && (e = []);
                if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
                var s = e.length;
                if (s !== +s) {
                    var o = x.keys(e);
                    s = o.length
                }
                T(e, function (u, a, f) {
                    a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
                });
                if (!i) throw new TypeError(N);
                return n
            }, x.find = x.detect = function (e, t, n) {
                var r;
                return C(e, function (e, i, s) {
                    if (t.call(n, e, i, s)) return r = e, !0
                }), r
            }, x.filter = x.select = function (e, t, n) {
                var r = [];
                return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function (e, i, s) {
                    t.call(n, e, i, s) && r.push(e)
                }), r)
            }, x.reject = function (e, t, n) {
                return x.filter(e, function (e, r, i) {
                    return !t.call(n, e, r, i)
                }, n)
            }, x.every = x.all = function (e, t, r) {
                t || (t = x.identity);
                var i = !0;
                return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function (e, s, o) {
                    if (!(i = i && t.call(r, e, s, o))) return n
                }), !!i)
            };
            var C = x.some = x.any = function (e, t, r) {
                t || (t = x.identity);
                var i = !1;
                return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, s, o) {
                    if (i || (i = t.call(r, e, s, o))) return n
                }), !!i)
            };
            x.contains = x.include = function (e, t) {
                return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function (e) {
                    return e === t
                })
            }, x.invoke = function (e, t) {
                var n = u.call(arguments, 2),
                    r = x.isFunction(t);
                return x.map(e, function (e) {
                    return (r ? t : e[t]).apply(e, n)
                })
            }, x.pluck = function (e, t) {
                return x.map(e, function (e) {
                    return e[t]
                })
            }, x.where = function (e, t, n) {
                return x.isEmpty(t) ? n ? void 0 : [] : x[n ? "find" : "filter"](e, function (e) {
                    for (var n in t)
                        if (t[n] !== e[n]) return !1;
                    return !0
                })
            }, x.findWhere = function (e, t) {
                return x.where(e, t, !0)
            }, x.max = function (e, t, n) {
                if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
                if (!t && x.isEmpty(e)) return -Infinity;
                var r = {
                    computed: -Infinity,
                    value: -Infinity
                };
                return T(e, function (e, i, s) {
                    var o = t ? t.call(n, e, i, s) : e;
                    o > r.computed && (r = {
                        value: e,
                        computed: o
                    })
                }), r.value
            }, x.min = function (e, t, n) {
                if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
                if (!t && x.isEmpty(e)) return Infinity;
                var r = {
                    computed: Infinity,
                    value: Infinity
                };
                return T(e, function (e, i, s) {
                    var o = t ? t.call(n, e, i, s) : e;
                    o < r.computed && (r = {
                        value: e,
                        computed: o
                    })
                }), r.value
            }, x.shuffle = function (e) {
                var t, n = 0,
                    r = [];
                return T(e, function (e) {
                    t = x.random(n++), r[n - 1] = r[t], r[t] = e
                }), r
            }, x.sample = function (e, t, n) {
                return arguments.length < 2 || n ? e[x.random(e.length - 1)] : x.shuffle(e).slice(0, Math.max(0, t))
            };
            var k = function (e) {
                return x.isFunction(e) ? e : function (t) {
                    return t[e]
                }
            };
            x.sortBy = function (e, t, n) {
                var r = k(t);
                return x.pluck(x.map(e, function (e, t, i) {
                    return {
                        value: e,
                        index: t,
                        criteria: r.call(n, e, t, i)
                    }
                }).sort(function (e, t) {
                    var n = e.criteria,
                        r = t.criteria;
                    if (n !== r) {
                        if (n > r || n === void 0) return 1;
                        if (n < r || r === void 0) return -1
                    }
                    return e.index - t.index
                }), "value")
            };
            var L = function (e) {
                return function (t, n, r) {
                    var i = {},
                        s = n == null ? x.identity : k(n);
                    return T(t, function (n, o) {
                        var u = s.call(r, n, o, t);
                        e(i, u, n)
                    }), i
                }
            };
            x.groupBy = L(function (e, t, n) {
                (x.has(e, t) ? e[t] : e[t] = []).push(n)
            }), x.indexBy = L(function (e, t, n) {
                e[t] = n
            }), x.countBy = L(function (e, t) {
                x.has(e, t) ? e[t]++ : e[t] = 1
            }), x.sortedIndex = function (e, t, n, r) {
                n = n == null ? x.identity : k(n);
                var i = n.call(r, t),
                    s = 0,
                    o = e.length;
                while (s < o) {
                    var u = s + o >>> 1;
                    n.call(r, e[u]) < i ? s = u + 1 : o = u
                }
                return s
            }, x.toArray = function (e) {
                return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
            }, x.size = function (e) {
                return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length
            }, x.first = x.head = x.take = function (e, t, n) {
                return e == null ? void 0 : t == null || n ? e[0] : u.call(e, 0, t)
            }, x.initial = function (e, t, n) {
                return u.call(e, 0, e.length - (t == null || n ? 1 : t))
            }, x.last = function (e, t, n) {
                return e == null ? void 0 : t == null || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
            }, x.rest = x.tail = x.drop = function (e, t, n) {
                return u.call(e, t == null || n ? 1 : t)
            }, x.compact = function (e) {
                return x.filter(e,
                    x.identity)
            };
            var A = function (e, t, n) {
                return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function (e) {
                    x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
                }), n)
            };
            x.flatten = function (e, t) {
                return A(e, t, [])
            }, x.without = function (e) {
                return x.difference(e, u.call(arguments, 1))
            }, x.uniq = x.unique = function (e, t, n, r) {
                x.isFunction(t) && (r = n, n = t, t = !1);
                var i = n ? x.map(e, n, r) : e,
                    s = [],
                    o = [];
                return T(i, function (n, r) {
                    if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n)) o.push(n), s.push(e[r])
                }), s
            }, x.union = function () {
                return x.uniq(x.flatten(arguments, !0))
            }, x.intersection = function (e) {
                var t = u.call(arguments, 1);
                return x.filter(x.uniq(e), function (e) {
                    return x.every(t, function (t) {
                        return x.indexOf(t, e) >= 0
                    })
                })
            }, x.difference = function (e) {
                var t = a.apply(r, u.call(arguments, 1));
                return x.filter(e, function (e) {
                    return !x.contains(t, e)
                })
            }, x.zip = function () {
                var e = x.max(x.pluck(arguments, "length").concat(0)),
                    t = new Array(e);
                for (var n = 0; n < e; n++) t[n] = x.pluck(arguments, "" + n);
                return t
            }, x.object = function (e, t) {
                if (e == null) return {};
                var n = {};
                for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                return n
            }, x.indexOf = function (e, t, n) {
                if (e == null) return -1;
                var r = 0,
                    i = e.length;
                if (n) {
                    if (typeof n != "number") return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
                    r = n < 0 ? Math.max(0, i + n) : n
                }
                if (y && e.indexOf === y) return e.indexOf(t, n);
                for (; r < i; r++)
                    if (e[r] === t) return r;
                return -1
            }, x.lastIndexOf = function (e, t, n) {
                if (e == null) return -1;
                var r = n != null;
                if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
                var i = r ? n : e.length;
                while (i--)
                    if (e[i] === t) return i;
                return -1
            }, x.range = function (e, t, n) {
                arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
                var r = Math.max(Math.ceil((t - e) / n), 0),
                    i = 0,
                    s = new Array(r);
                while (i < r) s[i++] = e, e += n;
                return s
            };
            var O = function () {};
            x.bind = function (e, t) {
                var n, r;
                if (S && e.bind === S) return S.apply(e, u.call(arguments, 1));
                if (!x.isFunction(e)) throw new TypeError;
                return n = u.call(arguments, 2), r = function () {
                    if (this instanceof r) {
                        O.prototype = e.prototype;
                        var i = new O;
                        O.prototype = null;
                        var s = e.apply(i, n.concat(u.call(arguments)));
                        return Object(s) === s ? s : i
                    }
                    return e.apply(t, n.concat(u.call(arguments)))
                }
            }, x.partial = function (e) {
                var t = u.call(arguments, 1);
                return function () {
                    return e.apply(this, t.concat(u.call(arguments)))
                }
            }, x.bindAll = function (e) {
                var t = u.call(arguments, 1);
                if (t.length === 0) throw new Error("bindAll must be passed function names");
                return T(t, function (t) {
                    e[t] = x.bind(e[t], e)
                }), e
            }, x.memoize = function (e, t) {
                var n = {};
                return t || (t = x.identity),
                    function () {
                        var r = t.apply(this, arguments);
                        return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
                    }
            }, x.delay = function (e, t) {
                var n = u.call(arguments, 2);
                return setTimeout(function () {
                    return e.apply(null, n)
                }, t)
            }, x.defer = function (e) {
                return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
            }, x.throttle = function (e, t, n) {
                var r, i, s, o = null,
                    u = 0;
                n || (n = {});
                var a = function () {
                    u = n.leading === !1 ? 0 : new Date, o = null, s = e.apply(r, i)
                };
                return function () {
                    var f = new Date;
                    !u && n.leading === !1 && (u = f);
                    var l = t - (f - u);
                    return r = this, i = arguments, l <= 0 ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
                }
            }, x.debounce = function (e, t, n) {
                var r, i, s, o, u;
                return function () {
                    s = this, i = arguments, o = new Date;
                    var a = function () {
                            var f = new Date - o;
                            f < t ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i)))
                        },
                        f = n && !r;
                    return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i)), u
                }
            }, x.once = function (e) {
                var t = !1,
                    n;
                return function () {
                    return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                }
            }, x.wrap = function (e, t) {
                return function () {
                    var n = [e];
                    return o.apply(n, arguments), t.apply(this, n)
                }
            }, x.compose = function () {
                var e = arguments;
                return function () {
                    var t = arguments;
                    for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                    return t[0]
                }
            }, x.after = function (e, t) {
                return function () {
                    if (--e < 1) return t.apply(this, arguments)
                }
            }, x.keys = E || function (e) {
                if (e !== Object(e)) throw new TypeError("Invalid object");
                var t = [];
                for (var n in e) x.has(e, n) && t.push(n);
                return t
            }, x.values = function (e) {
                var t = x.keys(e),
                    n = t.length,
                    r = new Array(n);
                for (var i = 0; i < n; i++) r[i] = e[t[i]];
                return r
            }, x.pairs = function (e) {
                var t = x.keys(e),
                    n = t.length,
                    r = new Array(n);
                for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
                return r
            }, x.invert = function (e) {
                var t = {},
                    n = x.keys(e);
                for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                return t
            }, x.functions = x.methods = function (e) {
                var t = [];
                for (var n in e) x.isFunction(e[n]) && t.push(n);
                return t.sort()
            }, x.extend = function (e) {
                return T(u.call(arguments, 1), function (t) {
                    if (t)
                        for (var n in t) e[n] = t[n]
                }), e
            }, x.pick = function (e) {
                var t = {},
                    n = a.apply(r, u.call(arguments, 1));
                return T(n, function (n) {
                    n in e && (t[n] = e[n])
                }), t
            }, x.omit = function (e) {
                var t = {},
                    n = a.apply(r, u.call(arguments, 1));
                for (var i in e) x.contains(n, i) || (t[i] = e[i]);
                return t
            }, x.defaults = function (e) {
                return T(u.call(arguments, 1), function (t) {
                    if (t)
                        for (var n in t) e[n] === void 0 && (e[n] = t[n])
                }), e
            }, x.clone = function (e) {
                return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
            }, x.tap = function (e, t) {
                return t(e), e
            };
            var M = function (e, t, n, r) {
                if (e === t) return e !== 0 || 1 / e == 1 / t;
                if (e == null || t == null) return e === t;
                e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
                var i = f.call(e);
                if (i != f.call(t)) return !1;
                switch (i) {
                    case "[object String]":
                        return e == String(t);
                    case "[object Number]":
                        return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +t;
                    case "[object RegExp]":
                        return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
                }
                if (typeof e != "object" || typeof t != "object") return !1;
                var s = n.length;
                while (s--)
                    if (n[s] == e) return r[s] == t;
                var o = e.constructor,
                    u = t.constructor;
                if (o !== u && !(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u)) return !1;
                n.push(e), r.push(t);
                var a = 0,
                    l = !0;
                if (i == "[object Array]") {
                    a = e.length, l = a == t.length;
                    if (l)
                        while (a--)
                            if (!(l = M(e[a], t[a], n, r))) break
                } else {
                    for (var c in e)
                        if (x.has(e, c)) {
                            a++;
                            if (!(l = x.has(t, c) && M(e[c], t[c], n, r))) break
                        }
                    if (l) {
                        for (c in t)
                            if (x.has(t, c) && !(a--)) break;
                        l = !a
                    }
                }
                return n.pop(), r.pop(), l
            };
            x.isEqual = function (e, t) {
                    return M(e, t, [], [])
                }, x.isEmpty = function (e) {
                    if (e == null) return !0;
                    if (x.isArray(e) || x.isString(e)) return e.length === 0;
                    for (var t in e)
                        if (x.has(e, t)) return !1;
                    return !0
                }, x.isElement = function (e) {
                    return !!e && e.nodeType === 1
                }, x.isArray = w ||
                function (e) {
                    return f.call(e) == "[object Array]"
                }, x.isObject = function (e) {
                    return e === Object(e)
                }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
                    x["is" + e] = function (t) {
                        return f.call(t) == "[object " + e + "]"
                    }
                }), x.isArguments(arguments) || (x.isArguments = function (e) {
                    return !!e && !!x.has(e, "callee")
                }), typeof /./ != "function" && (x.isFunction = function (e) {
                    return typeof e == "function"
                }), x.isFinite = function (e) {
                    return isFinite(e) && !isNaN(parseFloat(e))
                }, x.isNaN = function (e) {
                    return x.isNumber(e) && e != +e
                }, x.isBoolean = function (e) {
                    return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
                }, x.isNull = function (e) {
                    return e === null
                }, x.isUndefined = function (e) {
                    return e === void 0
                }, x.has = function (e, t) {
                    return l.call(e, t)
                }, x.noConflict = function () {
                    return e._ = t, this
                }, x.identity = function (e) {
                    return e
                }, x.times = function (e, t, n) {
                    var r = Array(Math.max(0, e));
                    for (var i = 0; i < e; i++) r[i] = t.call(n, i);
                    return r
                }, x.random = function (e, t) {
                    return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
                };
            var _ = {
                escape: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;"
                }
            };
            _.unescape = x.invert(_.escape);
            var D = {
                escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
                unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
            };
            x.each(["escape", "unescape"], function (e) {
                x[e] = function (t) {
                    return t == null ? "" : ("" + t).replace(D[e], function (t) {
                        return _[e][t]
                    })
                }
            }), x.result = function (e, t) {
                if (e == null) return void 0;
                var n = e[t];
                return x.isFunction(n) ? n.call(e) : n
            }, x.mixin = function (e) {
                T(x.functions(e), function (t) {
                    var n = x[t] = e[t];
                    x.prototype[t] = function () {
                        var e = [this._wrapped];
                        return o.apply(e, arguments), F.call(this, n.apply(x, e))
                    }
                })
            };
            var P = 0;
            x.uniqueId = function (e) {
                var t = ++P + "";
                return e ? e + t : t
            }, x.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var H = /(.)^/,
                B = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
            x.template = function (e, t, n) {
                var r;
                n = x.defaults({}, n, x.templateSettings);
                var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
                    s = 0,
                    o = "__p+='";
                e.replace(i, function (t, n, r, i, u) {
                    return o += e.slice(s, u).replace(j, function (e) {
                        return "\\" + B[e]
                    }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
                }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    r = new Function(n.variable || "obj", "_", o)
                } catch (u) {
                    throw u.source = o, u
                }
                if (t) return r(t, x);
                var a = function (e) {
                    return r.call(this, e, x)
                };
                return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
            }, x.chain = function (e) {
                return x(e).chain()
            };
            var F = function (e) {
                return this._chain ? x(e).chain() : e
            };
            x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = r[e];
                x.prototype[e] = function () {
                    var n = this._wrapped;
                    return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
                }
            }), T(["concat", "join", "slice"], function (e) {
                var t = r[e];
                x.prototype[e] = function () {
                    return F.call(this, t.apply(this._wrapped, arguments))
                }
            }), x.extend(x.prototype, {
                chain: function () {
                    return this._chain = !0, this
                },
                value: function () {
                    return this._wrapped
                }
            })
        }.call(this)
}).call(this);

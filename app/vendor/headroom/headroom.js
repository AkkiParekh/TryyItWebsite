// headroom javascript
! function(e, t) {
	"use strict";

	function n(e) {
		this.callback = e, this.ticking = !1
	}

	function i(t) {
		return t && void 0 !== e && (t === e || t.nodeType)
	}

	function o(e) {
		if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
		var t, n, r = e || {};
		for (n = 1; n < arguments.length; n++) {
			var a = arguments[n] || {};
			for (t in a) r[t] = "object" != typeof r[t] || i(r[t]) ? r[t] || a[t] : o(r[t], a[t])
		}
		return r
	}

	function r(e) {
		return e === Object(e) ? e : {
			down: e,
			up: e
		}
	}

	function a(e, t) {
		t = o(t, a.options), this.lastKnownScrollY = 0, this.elem = e, this.debouncer = new n(this.update.bind(this)), this.tolerance = r(t.tolerance), this.classes = t.classes, this.offset = t.offset, this.scroller = t.scroller, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop
	}
	var s = {
		bind: !! function() {}.bind,
		classList: "classList" in t.documentElement,
		rAF: !!(e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame)
	};
	e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame, n.prototype = {
		constructor: n,
		update: function() {
			this.callback && this.callback(), this.ticking = !1
		},
		requestTick: function() {
			this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
		},
		handleEvent: function() {
			this.requestTick()
		}
	}, a.prototype = {
		constructor: a,
		init: function() {
			return a.cutsTheMustard ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0
		},
		destroy: function() {
			var e = this.classes;
			this.initialised = !1, this.elem.classList.remove(e.unpinned, e.pinned, e.top, e.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1)
		},
		attachEvent: function() {
			this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
		},
		unpin: function() {
			var e = this.elem.classList,
				t = this.classes;
			(e.contains(t.pinned) || !e.contains(t.unpinned)) && (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this))
		},
		pin: function() {
			var e = this.elem.classList,
				t = this.classes;
			e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this))
		},
		top: function() {
			var e = this.elem.classList,
				t = this.classes;
			e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this))
		},
		notTop: function() {
			var e = this.elem.classList,
				t = this.classes;
			e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this))
		},
		getScrollY: function() {
			return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (t.documentElement || t.body.parentNode || t.body).scrollTop
		},
		getViewportHeight: function() {
			return e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight
		},
		getDocumentHeight: function() {
			var e = t.body,
				n = t.documentElement;
			return Math.max(e.scrollHeight, n.scrollHeight, e.offsetHeight, n.offsetHeight, e.clientHeight, n.clientHeight)
		},
		getElementHeight: function(e) {
			return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
		},
		getScrollerHeight: function() {
			return this.scroller === e || this.scroller === t.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
		},
		isOutOfBounds: function(e) {
			var t = 0 > e,
				n = e + this.getViewportHeight() > this.getScrollerHeight();
			return t || n
		},
		toleranceExceeded: function(e, t) {
			return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t]
		},
		shouldUnpin: function(e, t) {
			var n = e > this.lastKnownScrollY,
				i = e >= this.offset;
			return n && i && t
		},
		shouldPin: function(e, t) {
			var n = e < this.lastKnownScrollY,
				i = e <= this.offset;
			return n && t || i
		},
		update: function() {
			var e = this.getScrollY(),
				t = e > this.lastKnownScrollY ? "down" : "up",
				n = this.toleranceExceeded(e, t);
			this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(e, n) ? this.unpin() : this.shouldPin(e, n) && this.pin(), this.lastKnownScrollY = e)
		}
	}, a.options = {
		tolerance: {
			up: 0,
			down: 0
		},
		offset: 0,
		scroller: e,
		classes: {
			pinned: "headroom--pinned",
			unpinned: "headroom--unpinned",
			top: "headroom--top",
			notTop: "headroom--not-top",
			initial: "headroom"
		}
	}, a.cutsTheMustard = void 0 !== s && s.rAF && s.bind && s.classList, e.Headroom = a
}(window, document),

// headroom jquery
(function($) {

	if (!$) {
		return;
	}

	////////////
	// Plugin //
	////////////

	$.fn.headroom = function(option) {
		return this.each(function() {
			var $this = $(this),
				data = $this.data('headroom'),
				options = typeof option === 'object' && option;

			options = $.extend(true, {}, Headroom.options, options);

			if (!data) {
				data = new Headroom(this, options);
				data.init();
				$this.data('headroom', data);
			}
			if (typeof option === 'string') {
				data[option]();

				if (option === 'destroy') {
					$this.removeData('headroom');
				}
			}
		});
	};

	//////////////
	// Data API //
	//////////////

	$('[data-headroom]').each(function() {
		var $this = $(this);
		$this.headroom($this.data());
	});

}(window.Zepto || window.jQuery));
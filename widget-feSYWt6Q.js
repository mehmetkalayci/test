import { effectScope as pr, ref as ii, markRaw as fr, hasInjectionContext as Sa, inject as Ut, watch as mr, reactive as gr, isRef as Us, isReactive as _r, toRaw as Aa, getCurrentScope as Ta, onScopeDispose as Ca, nextTick as vr, toRefs as $a, computed as Ue, openBlock as E, createElementBlock as C, toDisplayString as Q, createCommentVNode as D, normalizeStyle as Ge, createElementVNode as p, Fragment as ce, renderList as Ne, withDirectives as Ot, normalizeClass as ie, vShow as kt, resolveComponent as X, createVNode as he, createBlock as ke, createStaticVNode as ts, createTextVNode as Oe, withCtx as Bn, callWithAsyncErrorHandling as Oa, shallowRef as ka, unref as fs, shallowReactive as xa, defineComponent as yr, h as br, provide as An, renderSlot as ws, mergeProps as Pa, toHandlers as La, createApp as jn } from "vue";
var wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Er(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Da(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var s = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    s.prototype = t.prototype;
  } else
    s = {};
  return Object.defineProperty(s, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(s, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), s;
}
var Na = { exports: {} }, xe = "top", Me = "bottom", Ie = "right", Pe = "left", Xs = "auto", ss = [xe, Me, Ie, Pe], xt = "start", qt = "end", Sr = "clippingParents", oi = "viewport", Wt = "popper", Ar = "reference", Zn = /* @__PURE__ */ ss.reduce(function(e, t) {
  return e.concat([t + "-" + xt, t + "-" + qt]);
}, []), ri = /* @__PURE__ */ [].concat(ss, [Xs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + xt, t + "-" + qt]);
}, []), Tr = "beforeRead", Cr = "read", $r = "afterRead", Or = "beforeMain", kr = "main", xr = "afterMain", Pr = "beforeWrite", Lr = "write", Dr = "afterWrite", Nr = [Tr, Cr, $r, Or, kr, xr, Pr, Lr, Dr];
function Je(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ve(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Pt(e) {
  var t = Ve(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ze(e) {
  var t = Ve(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function li(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ve(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ra(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(s) {
    var n = t.styles[s] || {}, o = t.attributes[s] || {}, r = t.elements[s];
    !Ze(r) || !Je(r) || (Object.assign(r.style, n), Object.keys(o).forEach(function(l) {
      var u = o[l];
      u === !1 ? r.removeAttribute(l) : r.setAttribute(l, u === !0 ? "" : u);
    }));
  });
}
function Ma(e) {
  var t = e.state, s = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, s.popper), t.styles = s, t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], r = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : s[n]), u = l.reduce(function(a, f) {
        return a[f] = "", a;
      }, {});
      !Ze(o) || !Je(o) || (Object.assign(o.style, u), Object.keys(r).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const ci = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ra,
  effect: Ma,
  requires: ["computeStyles"]
};
function Xe(e) {
  return e.split("-")[0];
}
var $t = Math.max, qs = Math.min, Kt = Math.round;
function Fn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Rr() {
  return !/^((?!chrome|android).)*safari/i.test(Fn());
}
function Yt(e, t, s) {
  t === void 0 && (t = !1), s === void 0 && (s = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  t && Ze(e) && (o = e.offsetWidth > 0 && Kt(n.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Kt(n.height) / e.offsetHeight || 1);
  var l = Pt(e) ? Ve(e) : window, u = l.visualViewport, a = !Rr() && s, f = (n.left + (a && u ? u.offsetLeft : 0)) / o, h = (n.top + (a && u ? u.offsetTop : 0)) / r, d = n.width / o, _ = n.height / r;
  return {
    width: d,
    height: _,
    top: h,
    right: f + d,
    bottom: h + _,
    left: f,
    x: f,
    y: h
  };
}
function ai(e) {
  var t = Yt(e), s = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - s) <= 1 && (s = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: s,
    height: n
  };
}
function Mr(e, t) {
  var s = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (s && li(s)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function it(e) {
  return Ve(e).getComputedStyle(e);
}
function Ia(e) {
  return ["table", "td", "th"].indexOf(Je(e)) >= 0;
}
function pt(e) {
  return ((Pt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Js(e) {
  return Je(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (li(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    pt(e)
  );
}
function bo(e) {
  return !Ze(e) || // https://github.com/popperjs/popper-core/issues/837
  it(e).position === "fixed" ? null : e.offsetParent;
}
function Va(e) {
  var t = /firefox/i.test(Fn()), s = /Trident/i.test(Fn());
  if (s && Ze(e)) {
    var n = it(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Js(e);
  for (li(o) && (o = o.host); Ze(o) && ["html", "body"].indexOf(Je(o)) < 0; ) {
    var r = it(o);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function As(e) {
  for (var t = Ve(e), s = bo(e); s && Ia(s) && it(s).position === "static"; )
    s = bo(s);
  return s && (Je(s) === "html" || Je(s) === "body" && it(s).position === "static") ? t : s || Va(e) || t;
}
function ui(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ms(e, t, s) {
  return $t(e, qs(t, s));
}
function Ba(e, t, s) {
  var n = ms(e, t, s);
  return n > s ? s : n;
}
function Ir() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Vr(e) {
  return Object.assign({}, Ir(), e);
}
function Br(e, t) {
  return t.reduce(function(s, n) {
    return s[n] = e, s;
  }, {});
}
var ja = function(t, s) {
  return t = typeof t == "function" ? t(Object.assign({}, s.rects, {
    placement: s.placement
  })) : t, Vr(typeof t != "number" ? t : Br(t, ss));
};
function Za(e) {
  var t, s = e.state, n = e.name, o = e.options, r = s.elements.arrow, l = s.modifiersData.popperOffsets, u = Xe(s.placement), a = ui(u), f = [Pe, Ie].indexOf(u) >= 0, h = f ? "height" : "width";
  if (!(!r || !l)) {
    var d = ja(o.padding, s), _ = ai(r), y = a === "y" ? xe : Pe, v = a === "y" ? Me : Ie, b = s.rects.reference[h] + s.rects.reference[a] - l[a] - s.rects.popper[h], S = l[a] - s.rects.reference[a], $ = As(r), k = $ ? a === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0, V = b / 2 - S / 2, M = d[y], B = k - _[h] - d[v], q = k / 2 - _[h] / 2 + V, H = ms(M, q, B), z = a;
    s.modifiersData[n] = (t = {}, t[z] = H, t.centerOffset = H - q, t);
  }
}
function Fa(e) {
  var t = e.state, s = e.options, n = s.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Mr(t.elements.popper, o) && (t.elements.arrow = o));
}
const jr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Za,
  effect: Fa,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Gt(e) {
  return e.split("-")[1];
}
var za = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Wa(e, t) {
  var s = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Kt(s * o) / o || 0,
    y: Kt(n * o) / o || 0
  };
}
function wo(e) {
  var t, s = e.popper, n = e.popperRect, o = e.placement, r = e.variation, l = e.offsets, u = e.position, a = e.gpuAcceleration, f = e.adaptive, h = e.roundOffsets, d = e.isFixed, _ = l.x, y = _ === void 0 ? 0 : _, v = l.y, b = v === void 0 ? 0 : v, S = typeof h == "function" ? h({
    x: y,
    y: b
  }) : {
    x: y,
    y: b
  };
  y = S.x, b = S.y;
  var $ = l.hasOwnProperty("x"), k = l.hasOwnProperty("y"), V = Pe, M = xe, B = window;
  if (f) {
    var q = As(s), H = "clientHeight", z = "clientWidth";
    if (q === Ve(s) && (q = pt(s), it(q).position !== "static" && u === "absolute" && (H = "scrollHeight", z = "scrollWidth")), q = q, o === xe || (o === Pe || o === Ie) && r === qt) {
      M = Me;
      var R = d && q === B && B.visualViewport ? B.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        q[H]
      );
      b -= R - n.height, b *= a ? 1 : -1;
    }
    if (o === Pe || (o === xe || o === Me) && r === qt) {
      V = Ie;
      var F = d && q === B && B.visualViewport ? B.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        q[z]
      );
      y -= F - n.width, y *= a ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: u
  }, f && za), oe = h === !0 ? Wa({
    x: y,
    y: b
  }, Ve(s)) : {
    x: y,
    y: b
  };
  if (y = oe.x, b = oe.y, a) {
    var se;
    return Object.assign({}, W, (se = {}, se[M] = k ? "0" : "", se[V] = $ ? "0" : "", se.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", se));
  }
  return Object.assign({}, W, (t = {}, t[M] = k ? b + "px" : "", t[V] = $ ? y + "px" : "", t.transform = "", t));
}
function Ha(e) {
  var t = e.state, s = e.options, n = s.gpuAcceleration, o = n === void 0 ? !0 : n, r = s.adaptive, l = r === void 0 ? !0 : r, u = s.roundOffsets, a = u === void 0 ? !0 : u, f = {
    placement: Xe(t.placement),
    variation: Gt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, wo(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, wo(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const hi = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ha,
  data: {}
};
var Bs = {
  passive: !0
};
function Ua(e) {
  var t = e.state, s = e.instance, n = e.options, o = n.scroll, r = o === void 0 ? !0 : o, l = n.resize, u = l === void 0 ? !0 : l, a = Ve(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && f.forEach(function(h) {
    h.addEventListener("scroll", s.update, Bs);
  }), u && a.addEventListener("resize", s.update, Bs), function() {
    r && f.forEach(function(h) {
      h.removeEventListener("scroll", s.update, Bs);
    }), u && a.removeEventListener("resize", s.update, Bs);
  };
}
const di = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ua,
  data: {}
};
var qa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Fs(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return qa[t];
  });
}
var Ka = {
  start: "end",
  end: "start"
};
function Eo(e) {
  return e.replace(/start|end/g, function(t) {
    return Ka[t];
  });
}
function pi(e) {
  var t = Ve(e), s = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: s,
    scrollTop: n
  };
}
function fi(e) {
  return Yt(pt(e)).left + pi(e).scrollLeft;
}
function Ya(e, t) {
  var s = Ve(e), n = pt(e), o = s.visualViewport, r = n.clientWidth, l = n.clientHeight, u = 0, a = 0;
  if (o) {
    r = o.width, l = o.height;
    var f = Rr();
    (f || !f && t === "fixed") && (u = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: u + fi(e),
    y: a
  };
}
function Ga(e) {
  var t, s = pt(e), n = pi(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, r = $t(s.scrollWidth, s.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = $t(s.scrollHeight, s.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -n.scrollLeft + fi(e), a = -n.scrollTop;
  return it(o || s).direction === "rtl" && (u += $t(s.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: u,
    y: a
  };
}
function mi(e) {
  var t = it(e), s = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(s + o + n);
}
function Zr(e) {
  return ["html", "body", "#document"].indexOf(Je(e)) >= 0 ? e.ownerDocument.body : Ze(e) && mi(e) ? e : Zr(Js(e));
}
function gs(e, t) {
  var s;
  t === void 0 && (t = []);
  var n = Zr(e), o = n === ((s = e.ownerDocument) == null ? void 0 : s.body), r = Ve(n), l = o ? [r].concat(r.visualViewport || [], mi(n) ? n : []) : n, u = t.concat(l);
  return o ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(gs(Js(l)))
  );
}
function zn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Xa(e, t) {
  var s = Yt(e, !1, t === "fixed");
  return s.top = s.top + e.clientTop, s.left = s.left + e.clientLeft, s.bottom = s.top + e.clientHeight, s.right = s.left + e.clientWidth, s.width = e.clientWidth, s.height = e.clientHeight, s.x = s.left, s.y = s.top, s;
}
function So(e, t, s) {
  return t === oi ? zn(Ya(e, s)) : Pt(t) ? Xa(t, s) : zn(Ga(pt(e)));
}
function Ja(e) {
  var t = gs(Js(e)), s = ["absolute", "fixed"].indexOf(it(e).position) >= 0, n = s && Ze(e) ? As(e) : e;
  return Pt(n) ? t.filter(function(o) {
    return Pt(o) && Mr(o, n) && Je(o) !== "body";
  }) : [];
}
function Qa(e, t, s, n) {
  var o = t === "clippingParents" ? Ja(e) : [].concat(t), r = [].concat(o, [s]), l = r[0], u = r.reduce(function(a, f) {
    var h = So(e, f, n);
    return a.top = $t(h.top, a.top), a.right = qs(h.right, a.right), a.bottom = qs(h.bottom, a.bottom), a.left = $t(h.left, a.left), a;
  }, So(e, l, n));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function Fr(e) {
  var t = e.reference, s = e.element, n = e.placement, o = n ? Xe(n) : null, r = n ? Gt(n) : null, l = t.x + t.width / 2 - s.width / 2, u = t.y + t.height / 2 - s.height / 2, a;
  switch (o) {
    case xe:
      a = {
        x: l,
        y: t.y - s.height
      };
      break;
    case Me:
      a = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Ie:
      a = {
        x: t.x + t.width,
        y: u
      };
      break;
    case Pe:
      a = {
        x: t.x - s.width,
        y: u
      };
      break;
    default:
      a = {
        x: t.x,
        y: t.y
      };
  }
  var f = o ? ui(o) : null;
  if (f != null) {
    var h = f === "y" ? "height" : "width";
    switch (r) {
      case xt:
        a[f] = a[f] - (t[h] / 2 - s[h] / 2);
        break;
      case qt:
        a[f] = a[f] + (t[h] / 2 - s[h] / 2);
        break;
    }
  }
  return a;
}
function Xt(e, t) {
  t === void 0 && (t = {});
  var s = t, n = s.placement, o = n === void 0 ? e.placement : n, r = s.strategy, l = r === void 0 ? e.strategy : r, u = s.boundary, a = u === void 0 ? Sr : u, f = s.rootBoundary, h = f === void 0 ? oi : f, d = s.elementContext, _ = d === void 0 ? Wt : d, y = s.altBoundary, v = y === void 0 ? !1 : y, b = s.padding, S = b === void 0 ? 0 : b, $ = Vr(typeof S != "number" ? S : Br(S, ss)), k = _ === Wt ? Ar : Wt, V = e.rects.popper, M = e.elements[v ? k : _], B = Qa(Pt(M) ? M : M.contextElement || pt(e.elements.popper), a, h, l), q = Yt(e.elements.reference), H = Fr({
    reference: q,
    element: V,
    strategy: "absolute",
    placement: o
  }), z = zn(Object.assign({}, V, H)), R = _ === Wt ? z : q, F = {
    top: B.top - R.top + $.top,
    bottom: R.bottom - B.bottom + $.bottom,
    left: B.left - R.left + $.left,
    right: R.right - B.right + $.right
  }, W = e.modifiersData.offset;
  if (_ === Wt && W) {
    var oe = W[o];
    Object.keys(F).forEach(function(se) {
      var ye = [Ie, Me].indexOf(se) >= 0 ? 1 : -1, de = [xe, Me].indexOf(se) >= 0 ? "y" : "x";
      F[se] += oe[de] * ye;
    });
  }
  return F;
}
function e0(e, t) {
  t === void 0 && (t = {});
  var s = t, n = s.placement, o = s.boundary, r = s.rootBoundary, l = s.padding, u = s.flipVariations, a = s.allowedAutoPlacements, f = a === void 0 ? ri : a, h = Gt(n), d = h ? u ? Zn : Zn.filter(function(v) {
    return Gt(v) === h;
  }) : ss, _ = d.filter(function(v) {
    return f.indexOf(v) >= 0;
  });
  _.length === 0 && (_ = d);
  var y = _.reduce(function(v, b) {
    return v[b] = Xt(e, {
      placement: b,
      boundary: o,
      rootBoundary: r,
      padding: l
    })[Xe(b)], v;
  }, {});
  return Object.keys(y).sort(function(v, b) {
    return y[v] - y[b];
  });
}
function t0(e) {
  if (Xe(e) === Xs)
    return [];
  var t = Fs(e);
  return [Eo(e), t, Eo(t)];
}
function s0(e) {
  var t = e.state, s = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = s.mainAxis, r = o === void 0 ? !0 : o, l = s.altAxis, u = l === void 0 ? !0 : l, a = s.fallbackPlacements, f = s.padding, h = s.boundary, d = s.rootBoundary, _ = s.altBoundary, y = s.flipVariations, v = y === void 0 ? !0 : y, b = s.allowedAutoPlacements, S = t.options.placement, $ = Xe(S), k = $ === S, V = a || (k || !v ? [Fs(S)] : t0(S)), M = [S].concat(V).reduce(function(be, Se) {
      return be.concat(Xe(Se) === Xs ? e0(t, {
        placement: Se,
        boundary: h,
        rootBoundary: d,
        padding: f,
        flipVariations: v,
        allowedAutoPlacements: b
      }) : Se);
    }, []), B = t.rects.reference, q = t.rects.popper, H = /* @__PURE__ */ new Map(), z = !0, R = M[0], F = 0; F < M.length; F++) {
      var W = M[F], oe = Xe(W), se = Gt(W) === xt, ye = [xe, Me].indexOf(oe) >= 0, de = ye ? "width" : "height", J = Xt(t, {
        placement: W,
        boundary: h,
        rootBoundary: d,
        altBoundary: _,
        padding: f
      }), pe = ye ? se ? Ie : Pe : se ? Me : xe;
      B[de] > q[de] && (pe = Fs(pe));
      var _e = Fs(pe), ge = [];
      if (r && ge.push(J[oe] <= 0), u && ge.push(J[pe] <= 0, J[_e] <= 0), ge.every(function(be) {
        return be;
      })) {
        R = W, z = !1;
        break;
      }
      H.set(W, ge);
    }
    if (z)
      for (var ae = v ? 3 : 1, fe = function(Se) {
        var we = M.find(function(A) {
          var L = H.get(A);
          if (L)
            return L.slice(0, Se).every(function(N) {
              return N;
            });
        });
        if (we)
          return R = we, "break";
      }, Ce = ae; Ce > 0; Ce--) {
        var Le = fe(Ce);
        if (Le === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[n]._skip = !0, t.placement = R, t.reset = !0);
  }
}
const zr = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: s0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ao(e, t, s) {
  return s === void 0 && (s = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - s.y,
    right: e.right - t.width + s.x,
    bottom: e.bottom - t.height + s.y,
    left: e.left - t.width - s.x
  };
}
function To(e) {
  return [xe, Ie, Me, Pe].some(function(t) {
    return e[t] >= 0;
  });
}
function n0(e) {
  var t = e.state, s = e.name, n = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, l = Xt(t, {
    elementContext: "reference"
  }), u = Xt(t, {
    altBoundary: !0
  }), a = Ao(l, n), f = Ao(u, o, r), h = To(a), d = To(f);
  t.modifiersData[s] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: f,
    isReferenceHidden: h,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": h,
    "data-popper-escaped": d
  });
}
const Wr = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: n0
};
function i0(e, t, s) {
  var n = Xe(e), o = [Pe, xe].indexOf(n) >= 0 ? -1 : 1, r = typeof s == "function" ? s(Object.assign({}, t, {
    placement: e
  })) : s, l = r[0], u = r[1];
  return l = l || 0, u = (u || 0) * o, [Pe, Ie].indexOf(n) >= 0 ? {
    x: u,
    y: l
  } : {
    x: l,
    y: u
  };
}
function o0(e) {
  var t = e.state, s = e.options, n = e.name, o = s.offset, r = o === void 0 ? [0, 0] : o, l = ri.reduce(function(h, d) {
    return h[d] = i0(d, t.rects, r), h;
  }, {}), u = l[t.placement], a = u.x, f = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += f), t.modifiersData[n] = l;
}
const Hr = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: o0
};
function r0(e) {
  var t = e.state, s = e.name;
  t.modifiersData[s] = Fr({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const gi = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: r0,
  data: {}
};
function l0(e) {
  return e === "x" ? "y" : "x";
}
function c0(e) {
  var t = e.state, s = e.options, n = e.name, o = s.mainAxis, r = o === void 0 ? !0 : o, l = s.altAxis, u = l === void 0 ? !1 : l, a = s.boundary, f = s.rootBoundary, h = s.altBoundary, d = s.padding, _ = s.tether, y = _ === void 0 ? !0 : _, v = s.tetherOffset, b = v === void 0 ? 0 : v, S = Xt(t, {
    boundary: a,
    rootBoundary: f,
    padding: d,
    altBoundary: h
  }), $ = Xe(t.placement), k = Gt(t.placement), V = !k, M = ui($), B = l0(M), q = t.modifiersData.popperOffsets, H = t.rects.reference, z = t.rects.popper, R = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, F = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, oe = {
    x: 0,
    y: 0
  };
  if (q) {
    if (r) {
      var se, ye = M === "y" ? xe : Pe, de = M === "y" ? Me : Ie, J = M === "y" ? "height" : "width", pe = q[M], _e = pe + S[ye], ge = pe - S[de], ae = y ? -z[J] / 2 : 0, fe = k === xt ? H[J] : z[J], Ce = k === xt ? -z[J] : -H[J], Le = t.elements.arrow, be = y && Le ? ai(Le) : {
        width: 0,
        height: 0
      }, Se = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ir(), we = Se[ye], A = Se[de], L = ms(0, H[J], be[J]), N = V ? H[J] / 2 - ae - L - we - F.mainAxis : fe - L - we - F.mainAxis, j = V ? -H[J] / 2 + ae + L + A + F.mainAxis : Ce + L + A + F.mainAxis, w = t.elements.arrow && As(t.elements.arrow), re = w ? M === "y" ? w.clientTop || 0 : w.clientLeft || 0 : 0, K = (se = W == null ? void 0 : W[M]) != null ? se : 0, U = pe + N - K - re, te = pe + j - K, Ae = ms(y ? qs(_e, U) : _e, pe, y ? $t(ge, te) : ge);
      q[M] = Ae, oe[M] = Ae - pe;
    }
    if (u) {
      var ve, $e = M === "x" ? xe : Pe, mt = M === "x" ? Me : Ie, I = q[B], ze = B === "y" ? "height" : "width", gt = I + S[$e], Z = I - S[mt], Y = [xe, Pe].indexOf($) !== -1, ue = (ve = W == null ? void 0 : W[B]) != null ? ve : 0, Lt = Y ? gt : I - H[ze] - z[ze] - ue + F.altAxis, Dt = Y ? I + H[ze] + z[ze] - ue - F.altAxis : Z, _t = y && Y ? Ba(Lt, I, Dt) : ms(y ? Lt : gt, I, y ? Dt : Z);
      q[B] = _t, oe[B] = _t - I;
    }
    t.modifiersData[n] = oe;
  }
}
const Ur = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: c0,
  requiresIfExists: ["offset"]
};
function a0(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function u0(e) {
  return e === Ve(e) || !Ze(e) ? pi(e) : a0(e);
}
function h0(e) {
  var t = e.getBoundingClientRect(), s = Kt(t.width) / e.offsetWidth || 1, n = Kt(t.height) / e.offsetHeight || 1;
  return s !== 1 || n !== 1;
}
function d0(e, t, s) {
  s === void 0 && (s = !1);
  var n = Ze(t), o = Ze(t) && h0(t), r = pt(t), l = Yt(e, o, s), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (n || !n && !s) && ((Je(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  mi(r)) && (u = u0(t)), Ze(t) ? (a = Yt(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : r && (a.x = fi(r))), {
    x: l.left + u.scrollLeft - a.x,
    y: l.top + u.scrollTop - a.y,
    width: l.width,
    height: l.height
  };
}
function p0(e) {
  var t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function o(r) {
    s.add(r.name);
    var l = [].concat(r.requires || [], r.requiresIfExists || []);
    l.forEach(function(u) {
      if (!s.has(u)) {
        var a = t.get(u);
        a && o(a);
      }
    }), n.push(r);
  }
  return e.forEach(function(r) {
    s.has(r.name) || o(r);
  }), n;
}
function f0(e) {
  var t = p0(e);
  return Nr.reduce(function(s, n) {
    return s.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function m0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(s) {
      Promise.resolve().then(function() {
        t = void 0, s(e());
      });
    })), t;
  };
}
function g0(e) {
  var t = e.reduce(function(s, n) {
    var o = s[n.name];
    return s[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, s;
  }, {});
  return Object.keys(t).map(function(s) {
    return t[s];
  });
}
var Co = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function $o() {
  for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
    t[s] = arguments[s];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Qs(e) {
  e === void 0 && (e = {});
  var t = e, s = t.defaultModifiers, n = s === void 0 ? [] : s, o = t.defaultOptions, r = o === void 0 ? Co : o;
  return function(u, a, f) {
    f === void 0 && (f = r);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Co, r),
      modifiersData: {},
      elements: {
        reference: u,
        popper: a
      },
      attributes: {},
      styles: {}
    }, d = [], _ = !1, y = {
      state: h,
      setOptions: function($) {
        var k = typeof $ == "function" ? $(h.options) : $;
        b(), h.options = Object.assign({}, r, h.options, k), h.scrollParents = {
          reference: Pt(u) ? gs(u) : u.contextElement ? gs(u.contextElement) : [],
          popper: gs(a)
        };
        var V = f0(g0([].concat(n, h.options.modifiers)));
        return h.orderedModifiers = V.filter(function(M) {
          return M.enabled;
        }), v(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!_) {
          var $ = h.elements, k = $.reference, V = $.popper;
          if ($o(k, V)) {
            h.rects = {
              reference: d0(k, As(V), h.options.strategy === "fixed"),
              popper: ai(V)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(F) {
              return h.modifiersData[F.name] = Object.assign({}, F.data);
            });
            for (var M = 0; M < h.orderedModifiers.length; M++) {
              if (h.reset === !0) {
                h.reset = !1, M = -1;
                continue;
              }
              var B = h.orderedModifiers[M], q = B.fn, H = B.options, z = H === void 0 ? {} : H, R = B.name;
              typeof q == "function" && (h = q({
                state: h,
                options: z,
                name: R,
                instance: y
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: m0(function() {
        return new Promise(function(S) {
          y.forceUpdate(), S(h);
        });
      }),
      destroy: function() {
        b(), _ = !0;
      }
    };
    if (!$o(u, a))
      return y;
    y.setOptions(f).then(function(S) {
      !_ && f.onFirstUpdate && f.onFirstUpdate(S);
    });
    function v() {
      h.orderedModifiers.forEach(function(S) {
        var $ = S.name, k = S.options, V = k === void 0 ? {} : k, M = S.effect;
        if (typeof M == "function") {
          var B = M({
            state: h,
            name: $,
            instance: y,
            options: V
          }), q = function() {
          };
          d.push(B || q);
        }
      });
    }
    function b() {
      d.forEach(function(S) {
        return S();
      }), d = [];
    }
    return y;
  };
}
var _0 = /* @__PURE__ */ Qs(), v0 = [di, gi, hi, ci], y0 = /* @__PURE__ */ Qs({
  defaultModifiers: v0
}), b0 = [di, gi, hi, ci, Hr, zr, Ur, jr, Wr], w0 = /* @__PURE__ */ Qs({
  defaultModifiers: b0
});
const E0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: xr,
  afterRead: $r,
  afterWrite: Dr,
  applyStyles: ci,
  arrow: jr,
  auto: Xs,
  basePlacements: ss,
  beforeMain: Or,
  beforeRead: Tr,
  beforeWrite: Pr,
  bottom: Me,
  clippingParents: Sr,
  computeStyles: hi,
  createPopper: w0,
  createPopperBase: _0,
  createPopperLite: y0,
  detectOverflow: Xt,
  end: qt,
  eventListeners: di,
  flip: zr,
  hide: Wr,
  left: Pe,
  main: kr,
  modifierPhases: Nr,
  offset: Hr,
  placements: ri,
  popper: Wt,
  popperGenerator: Qs,
  popperOffsets: gi,
  preventOverflow: Ur,
  read: Cr,
  reference: Ar,
  right: Ie,
  start: xt,
  top: xe,
  variationPlacements: Zn,
  viewport: oi,
  write: Lr
}, Symbol.toStringTag, { value: "Module" })), S0 = /* @__PURE__ */ Da(E0);
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e, t) {
  (function(s, n) {
    e.exports = n(S0);
  })(wr, function(s) {
    function n(m) {
      const i = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
      if (m) {
        for (const c in m)
          if (c !== "default") {
            const g = Object.getOwnPropertyDescriptor(m, c);
            Object.defineProperty(i, c, g.get ? g : {
              enumerable: !0,
              get: () => m[c]
            });
          }
      }
      return i.default = m, Object.freeze(i);
    }
    const o = /* @__PURE__ */ n(s), r = /* @__PURE__ */ new Map(), l = {
      set(m, i, c) {
        r.has(m) || r.set(m, /* @__PURE__ */ new Map());
        const g = r.get(m);
        if (!g.has(i) && g.size !== 0) {
          console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`);
          return;
        }
        g.set(i, c);
      },
      get(m, i) {
        return r.has(m) && r.get(m).get(i) || null;
      },
      remove(m, i) {
        if (!r.has(m))
          return;
        const c = r.get(m);
        c.delete(i), c.size === 0 && r.delete(m);
      }
    }, u = 1e6, a = 1e3, f = "transitionend", h = (m) => (m && window.CSS && window.CSS.escape && (m = m.replace(/#([^\s"#']+)/g, (i, c) => `#${CSS.escape(c)}`)), m), d = (m) => m == null ? `${m}` : Object.prototype.toString.call(m).match(/\s([a-z]+)/i)[1].toLowerCase(), _ = (m) => {
      do
        m += Math.floor(Math.random() * u);
      while (document.getElementById(m));
      return m;
    }, y = (m) => {
      if (!m)
        return 0;
      let {
        transitionDuration: i,
        transitionDelay: c
      } = window.getComputedStyle(m);
      const g = Number.parseFloat(i), T = Number.parseFloat(c);
      return !g && !T ? 0 : (i = i.split(",")[0], c = c.split(",")[0], (Number.parseFloat(i) + Number.parseFloat(c)) * a);
    }, v = (m) => {
      m.dispatchEvent(new Event(f));
    }, b = (m) => !m || typeof m != "object" ? !1 : (typeof m.jquery < "u" && (m = m[0]), typeof m.nodeType < "u"), S = (m) => b(m) ? m.jquery ? m[0] : m : typeof m == "string" && m.length > 0 ? document.querySelector(h(m)) : null, $ = (m) => {
      if (!b(m) || m.getClientRects().length === 0)
        return !1;
      const i = getComputedStyle(m).getPropertyValue("visibility") === "visible", c = m.closest("details:not([open])");
      if (!c)
        return i;
      if (c !== m) {
        const g = m.closest("summary");
        if (g && g.parentNode !== c || g === null)
          return !1;
      }
      return i;
    }, k = (m) => !m || m.nodeType !== Node.ELEMENT_NODE || m.classList.contains("disabled") ? !0 : typeof m.disabled < "u" ? m.disabled : m.hasAttribute("disabled") && m.getAttribute("disabled") !== "false", V = (m) => {
      if (!document.documentElement.attachShadow)
        return null;
      if (typeof m.getRootNode == "function") {
        const i = m.getRootNode();
        return i instanceof ShadowRoot ? i : null;
      }
      return m instanceof ShadowRoot ? m : m.parentNode ? V(m.parentNode) : null;
    }, M = () => {
    }, B = (m) => {
      m.offsetHeight;
    }, q = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, H = [], z = (m) => {
      document.readyState === "loading" ? (H.length || document.addEventListener("DOMContentLoaded", () => {
        for (const i of H)
          i();
      }), H.push(m)) : m();
    }, R = () => document.documentElement.dir === "rtl", F = (m) => {
      z(() => {
        const i = q();
        if (i) {
          const c = m.NAME, g = i.fn[c];
          i.fn[c] = m.jQueryInterface, i.fn[c].Constructor = m, i.fn[c].noConflict = () => (i.fn[c] = g, m.jQueryInterface);
        }
      });
    }, W = (m, i = [], c = m) => typeof m == "function" ? m(...i) : c, oe = (m, i, c = !0) => {
      if (!c) {
        W(m);
        return;
      }
      const g = 5, T = y(i) + g;
      let P = !1;
      const x = ({
        target: G
      }) => {
        G === i && (P = !0, i.removeEventListener(f, x), W(m));
      };
      i.addEventListener(f, x), setTimeout(() => {
        P || v(i);
      }, T);
    }, se = (m, i, c, g) => {
      const T = m.length;
      let P = m.indexOf(i);
      return P === -1 ? !c && g ? m[T - 1] : m[0] : (P += c ? 1 : -1, g && (P = (P + T) % T), m[Math.max(0, Math.min(P, T - 1))]);
    }, ye = /[^.]*(?=\..*)\.|.*/, de = /\..*/, J = /::\d+$/, pe = {};
    let _e = 1;
    const ge = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, ae = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function fe(m, i) {
      return i && `${i}::${_e++}` || m.uidEvent || _e++;
    }
    function Ce(m) {
      const i = fe(m);
      return m.uidEvent = i, pe[i] = pe[i] || {}, pe[i];
    }
    function Le(m, i) {
      return function c(g) {
        return re(g, {
          delegateTarget: m
        }), c.oneOff && w.off(m, g.type, i), i.apply(m, [g]);
      };
    }
    function be(m, i, c) {
      return function g(T) {
        const P = m.querySelectorAll(i);
        for (let {
          target: x
        } = T; x && x !== this; x = x.parentNode)
          for (const G of P)
            if (G === x)
              return re(T, {
                delegateTarget: x
              }), g.oneOff && w.off(m, T.type, i, c), c.apply(x, [T]);
      };
    }
    function Se(m, i, c = null) {
      return Object.values(m).find((g) => g.callable === i && g.delegationSelector === c);
    }
    function we(m, i, c) {
      const g = typeof i == "string", T = g ? c : i || c;
      let P = j(m);
      return ae.has(P) || (P = m), [g, T, P];
    }
    function A(m, i, c, g, T) {
      if (typeof i != "string" || !m)
        return;
      let [P, x, G] = we(i, c, g);
      i in ge && (x = ((Ea) => function(Ft) {
        if (!Ft.relatedTarget || Ft.relatedTarget !== Ft.delegateTarget && !Ft.delegateTarget.contains(Ft.relatedTarget))
          return Ea.call(this, Ft);
      })(x));
      const De = Ce(m), je = De[G] || (De[G] = {}), Te = Se(je, x, P ? c : null);
      if (Te) {
        Te.oneOff = Te.oneOff && T;
        return;
      }
      const Ke = fe(x, i.replace(ye, "")), He = P ? be(m, c, x) : Le(m, x);
      He.delegationSelector = P ? c : null, He.callable = x, He.oneOff = T, He.uidEvent = Ke, je[Ke] = He, m.addEventListener(G, He, P);
    }
    function L(m, i, c, g, T) {
      const P = Se(i[c], g, T);
      P && (m.removeEventListener(c, P, !!T), delete i[c][P.uidEvent]);
    }
    function N(m, i, c, g) {
      const T = i[c] || {};
      for (const [P, x] of Object.entries(T))
        P.includes(g) && L(m, i, c, x.callable, x.delegationSelector);
    }
    function j(m) {
      return m = m.replace(de, ""), ge[m] || m;
    }
    const w = {
      on(m, i, c, g) {
        A(m, i, c, g, !1);
      },
      one(m, i, c, g) {
        A(m, i, c, g, !0);
      },
      off(m, i, c, g) {
        if (typeof i != "string" || !m)
          return;
        const [T, P, x] = we(i, c, g), G = x !== i, De = Ce(m), je = De[x] || {}, Te = i.startsWith(".");
        if (typeof P < "u") {
          if (!Object.keys(je).length)
            return;
          L(m, De, x, P, T ? c : null);
          return;
        }
        if (Te)
          for (const Ke of Object.keys(De))
            N(m, De, Ke, i.slice(1));
        for (const [Ke, He] of Object.entries(je)) {
          const Vs = Ke.replace(J, "");
          (!G || i.includes(Vs)) && L(m, De, x, He.callable, He.delegationSelector);
        }
      },
      trigger(m, i, c) {
        if (typeof i != "string" || !m)
          return null;
        const g = q(), T = j(i), P = i !== T;
        let x = null, G = !0, De = !0, je = !1;
        P && g && (x = g.Event(i, c), g(m).trigger(x), G = !x.isPropagationStopped(), De = !x.isImmediatePropagationStopped(), je = x.isDefaultPrevented());
        const Te = re(new Event(i, {
          bubbles: G,
          cancelable: !0
        }), c);
        return je && Te.preventDefault(), De && m.dispatchEvent(Te), Te.defaultPrevented && x && x.preventDefault(), Te;
      }
    };
    function re(m, i = {}) {
      for (const [c, g] of Object.entries(i))
        try {
          m[c] = g;
        } catch {
          Object.defineProperty(m, c, {
            configurable: !0,
            get() {
              return g;
            }
          });
        }
      return m;
    }
    function K(m) {
      if (m === "true")
        return !0;
      if (m === "false")
        return !1;
      if (m === Number(m).toString())
        return Number(m);
      if (m === "" || m === "null")
        return null;
      if (typeof m != "string")
        return m;
      try {
        return JSON.parse(decodeURIComponent(m));
      } catch {
        return m;
      }
    }
    function U(m) {
      return m.replace(/[A-Z]/g, (i) => `-${i.toLowerCase()}`);
    }
    const te = {
      setDataAttribute(m, i, c) {
        m.setAttribute(`data-bs-${U(i)}`, c);
      },
      removeDataAttribute(m, i) {
        m.removeAttribute(`data-bs-${U(i)}`);
      },
      getDataAttributes(m) {
        if (!m)
          return {};
        const i = {}, c = Object.keys(m.dataset).filter((g) => g.startsWith("bs") && !g.startsWith("bsConfig"));
        for (const g of c) {
          let T = g.replace(/^bs/, "");
          T = T.charAt(0).toLowerCase() + T.slice(1, T.length), i[T] = K(m.dataset[g]);
        }
        return i;
      },
      getDataAttribute(m, i) {
        return K(m.getAttribute(`data-bs-${U(i)}`));
      }
    };
    class Ae {
      // Getters
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
      _getConfig(i) {
        return i = this._mergeConfigObj(i), i = this._configAfterMerge(i), this._typeCheckConfig(i), i;
      }
      _configAfterMerge(i) {
        return i;
      }
      _mergeConfigObj(i, c) {
        const g = b(c) ? te.getDataAttribute(c, "config") : {};
        return {
          ...this.constructor.Default,
          ...typeof g == "object" ? g : {},
          ...b(c) ? te.getDataAttributes(c) : {},
          ...typeof i == "object" ? i : {}
        };
      }
      _typeCheckConfig(i, c = this.constructor.DefaultType) {
        for (const [g, T] of Object.entries(c)) {
          const P = i[g], x = b(P) ? "element" : d(P);
          if (!new RegExp(T).test(x))
            throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${g}" provided type "${x}" but expected type "${T}".`);
        }
      }
    }
    const ve = "5.3.2";
    class $e extends Ae {
      constructor(i, c) {
        super(), i = S(i), i && (this._element = i, this._config = this._getConfig(c), l.set(this._element, this.constructor.DATA_KEY, this));
      }
      // Public
      dispose() {
        l.remove(this._element, this.constructor.DATA_KEY), w.off(this._element, this.constructor.EVENT_KEY);
        for (const i of Object.getOwnPropertyNames(this))
          this[i] = null;
      }
      _queueCallback(i, c, g = !0) {
        oe(i, c, g);
      }
      _getConfig(i) {
        return i = this._mergeConfigObj(i, this._element), i = this._configAfterMerge(i), this._typeCheckConfig(i), i;
      }
      // Static
      static getInstance(i) {
        return l.get(S(i), this.DATA_KEY);
      }
      static getOrCreateInstance(i, c = {}) {
        return this.getInstance(i) || new this(i, typeof c == "object" ? c : null);
      }
      static get VERSION() {
        return ve;
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(i) {
        return `${i}${this.EVENT_KEY}`;
      }
    }
    const mt = (m) => {
      let i = m.getAttribute("data-bs-target");
      if (!i || i === "#") {
        let c = m.getAttribute("href");
        if (!c || !c.includes("#") && !c.startsWith("."))
          return null;
        c.includes("#") && !c.startsWith("#") && (c = `#${c.split("#")[1]}`), i = c && c !== "#" ? h(c.trim()) : null;
      }
      return i;
    }, I = {
      find(m, i = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(i, m));
      },
      findOne(m, i = document.documentElement) {
        return Element.prototype.querySelector.call(i, m);
      },
      children(m, i) {
        return [].concat(...m.children).filter((c) => c.matches(i));
      },
      parents(m, i) {
        const c = [];
        let g = m.parentNode.closest(i);
        for (; g; )
          c.push(g), g = g.parentNode.closest(i);
        return c;
      },
      prev(m, i) {
        let c = m.previousElementSibling;
        for (; c; ) {
          if (c.matches(i))
            return [c];
          c = c.previousElementSibling;
        }
        return [];
      },
      // TODO: this is now unused; remove later along with prev()
      next(m, i) {
        let c = m.nextElementSibling;
        for (; c; ) {
          if (c.matches(i))
            return [c];
          c = c.nextElementSibling;
        }
        return [];
      },
      focusableChildren(m) {
        const i = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((c) => `${c}:not([tabindex^="-"])`).join(",");
        return this.find(i, m).filter((c) => !k(c) && $(c));
      },
      getSelectorFromElement(m) {
        const i = mt(m);
        return i && I.findOne(i) ? i : null;
      },
      getElementFromSelector(m) {
        const i = mt(m);
        return i ? I.findOne(i) : null;
      },
      getMultipleElementsFromSelector(m) {
        const i = mt(m);
        return i ? I.find(i) : [];
      }
    }, ze = (m, i = "hide") => {
      const c = `click.dismiss${m.EVENT_KEY}`, g = m.NAME;
      w.on(document, c, `[data-bs-dismiss="${g}"]`, function(T) {
        if (["A", "AREA"].includes(this.tagName) && T.preventDefault(), k(this))
          return;
        const P = I.getElementFromSelector(this) || this.closest(`.${g}`);
        m.getOrCreateInstance(P)[i]();
      });
    }, gt = "alert", Y = ".bs.alert", ue = `close${Y}`, Lt = `closed${Y}`, Dt = "fade", _t = "show";
    class vt extends $e {
      // Getters
      static get NAME() {
        return gt;
      }
      // Public
      close() {
        if (w.trigger(this._element, ue).defaultPrevented)
          return;
        this._element.classList.remove(_t);
        const c = this._element.classList.contains(Dt);
        this._queueCallback(() => this._destroyElement(), this._element, c);
      }
      // Private
      _destroyElement() {
        this._element.remove(), w.trigger(this._element, Lt), this.dispose();
      }
      // Static
      static jQueryInterface(i) {
        return this.each(function() {
          const c = vt.getOrCreateInstance(this);
          if (typeof i == "string") {
            if (c[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            c[i](this);
          }
        });
      }
    }
    ze(vt, "close"), F(vt);
    const Zl = "button", Fl = ".bs.button", zl = ".data-api", Wl = "active", Pi = '[data-bs-toggle="button"]', Hl = `click${Fl}${zl}`;
    class is extends $e {
      // Getters
      static get NAME() {
        return Zl;
      }
      // Public
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(Wl));
      }
      // Static
      static jQueryInterface(i) {
        return this.each(function() {
          const c = is.getOrCreateInstance(this);
          i === "toggle" && c[i]();
        });
      }
    }
    w.on(document, Hl, Pi, (m) => {
      m.preventDefault();
      const i = m.target.closest(Pi);
      is.getOrCreateInstance(i).toggle();
    }), F(is);
    const Ul = "swipe", Nt = ".bs.swipe", ql = `touchstart${Nt}`, Kl = `touchmove${Nt}`, Yl = `touchend${Nt}`, Gl = `pointerdown${Nt}`, Xl = `pointerup${Nt}`, Jl = "touch", Ql = "pen", e1 = "pointer-event", t1 = 40, s1 = {
      endCallback: null,
      leftCallback: null,
      rightCallback: null
    }, n1 = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)"
    };
    class $s extends Ae {
      constructor(i, c) {
        super(), this._element = i, !(!i || !$s.isSupported()) && (this._config = this._getConfig(c), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
      }
      // Getters
      static get Default() {
        return s1;
      }
      static get DefaultType() {
        return n1;
      }
      static get NAME() {
        return Ul;
      }
      // Public
      dispose() {
        w.off(this._element, Nt);
      }
      // Private
      _start(i) {
        if (!this._supportPointerEvents) {
          this._deltaX = i.touches[0].clientX;
          return;
        }
        this._eventIsPointerPenTouch(i) && (this._deltaX = i.clientX);
      }
      _end(i) {
        this._eventIsPointerPenTouch(i) && (this._deltaX = i.clientX - this._deltaX), this._handleSwipe(), W(this._config.endCallback);
      }
      _move(i) {
        this._deltaX = i.touches && i.touches.length > 1 ? 0 : i.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const i = Math.abs(this._deltaX);
        if (i <= t1)
          return;
        const c = i / this._deltaX;
        this._deltaX = 0, c && W(c > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents ? (w.on(this._element, Gl, (i) => this._start(i)), w.on(this._element, Xl, (i) => this._end(i)), this._element.classList.add(e1)) : (w.on(this._element, ql, (i) => this._start(i)), w.on(this._element, Kl, (i) => this._move(i)), w.on(this._element, Yl, (i) => this._end(i)));
      }
      _eventIsPointerPenTouch(i) {
        return this._supportPointerEvents && (i.pointerType === Ql || i.pointerType === Jl);
      }
      // Static
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }
    const i1 = "carousel", ot = ".bs.carousel", Li = ".data-api", o1 = "ArrowLeft", r1 = "ArrowRight", l1 = 500, os = "next", Rt = "prev", Mt = "left", Os = "right", c1 = `slide${ot}`, un = `slid${ot}`, a1 = `keydown${ot}`, u1 = `mouseenter${ot}`, h1 = `mouseleave${ot}`, d1 = `dragstart${ot}`, p1 = `load${ot}${Li}`, f1 = `click${ot}${Li}`, Di = "carousel", ks = "active", m1 = "slide", g1 = "carousel-item-end", _1 = "carousel-item-start", v1 = "carousel-item-next", y1 = "carousel-item-prev", Ni = ".active", Ri = ".carousel-item", b1 = Ni + Ri, w1 = ".carousel-item img", E1 = ".carousel-indicators", S1 = "[data-bs-slide], [data-bs-slide-to]", A1 = '[data-bs-ride="carousel"]', T1 = {
      [o1]: Os,
      [r1]: Mt
    }, C1 = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0
    }, $1 = {
      interval: "(number|boolean)",
      // TODO:v6 remove boolean support
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean"
    };
    class It extends $e {
      constructor(i, c) {
        super(i, c), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = I.findOne(E1, this._element), this._addEventListeners(), this._config.ride === Di && this.cycle();
      }
      // Getters
      static get Default() {
        return C1;
      }
      static get DefaultType() {
        return $1;
      }
      static get NAME() {
        return i1;
      }
      // Public
      next() {
        this._slide(os);
      }
      nextWhenVisible() {
        !document.hidden && $(this._element) && this.next();
      }
      prev() {
        this._slide(Rt);
      }
      pause() {
        this._isSliding && v(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
      }
      _maybeEnableCycle() {
        if (this._config.ride) {
          if (this._isSliding) {
            w.one(this._element, un, () => this.cycle());
            return;
          }
          this.cycle();
        }
      }
      to(i) {
        const c = this._getItems();
        if (i > c.length - 1 || i < 0)
          return;
        if (this._isSliding) {
          w.one(this._element, un, () => this.to(i));
          return;
        }
        const g = this._getItemIndex(this._getActive());
        if (g === i)
          return;
        const T = i > g ? os : Rt;
        this._slide(T, c[i]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      // Private
      _configAfterMerge(i) {
        return i.defaultInterval = i.interval, i;
      }
      _addEventListeners() {
        this._config.keyboard && w.on(this._element, a1, (i) => this._keydown(i)), this._config.pause === "hover" && (w.on(this._element, u1, () => this.pause()), w.on(this._element, h1, () => this._maybeEnableCycle())), this._config.touch && $s.isSupported() && this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const g of I.find(w1, this._element))
          w.on(g, d1, (T) => T.preventDefault());
        const c = {
          leftCallback: () => this._slide(this._directionToOrder(Mt)),
          rightCallback: () => this._slide(this._directionToOrder(Os)),
          endCallback: () => {
            this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), l1 + this._config.interval));
          }
        };
        this._swipeHelper = new $s(this._element, c);
      }
      _keydown(i) {
        if (/input|textarea/i.test(i.target.tagName))
          return;
        const c = T1[i.key];
        c && (i.preventDefault(), this._slide(this._directionToOrder(c)));
      }
      _getItemIndex(i) {
        return this._getItems().indexOf(i);
      }
      _setActiveIndicatorElement(i) {
        if (!this._indicatorsElement)
          return;
        const c = I.findOne(Ni, this._indicatorsElement);
        c.classList.remove(ks), c.removeAttribute("aria-current");
        const g = I.findOne(`[data-bs-slide-to="${i}"]`, this._indicatorsElement);
        g && (g.classList.add(ks), g.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const i = this._activeElement || this._getActive();
        if (!i)
          return;
        const c = Number.parseInt(i.getAttribute("data-bs-interval"), 10);
        this._config.interval = c || this._config.defaultInterval;
      }
      _slide(i, c = null) {
        if (this._isSliding)
          return;
        const g = this._getActive(), T = i === os, P = c || se(this._getItems(), g, T, this._config.wrap);
        if (P === g)
          return;
        const x = this._getItemIndex(P), G = (Vs) => w.trigger(this._element, Vs, {
          relatedTarget: P,
          direction: this._orderToDirection(i),
          from: this._getItemIndex(g),
          to: x
        });
        if (G(c1).defaultPrevented || !g || !P)
          return;
        const je = !!this._interval;
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(x), this._activeElement = P;
        const Te = T ? _1 : g1, Ke = T ? v1 : y1;
        P.classList.add(Ke), B(P), g.classList.add(Te), P.classList.add(Te);
        const He = () => {
          P.classList.remove(Te, Ke), P.classList.add(ks), g.classList.remove(ks, Ke, Te), this._isSliding = !1, G(un);
        };
        this._queueCallback(He, g, this._isAnimated()), je && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains(m1);
      }
      _getActive() {
        return I.findOne(b1, this._element);
      }
      _getItems() {
        return I.find(Ri, this._element);
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
      _directionToOrder(i) {
        return R() ? i === Mt ? Rt : os : i === Mt ? os : Rt;
      }
      _orderToDirection(i) {
        return R() ? i === Rt ? Mt : Os : i === Rt ? Os : Mt;
      }
      // Static
      static jQueryInterface(i) {
        return this.each(function() {
          const c = It.getOrCreateInstance(this, i);
          if (typeof i == "number") {
            c.to(i);
            return;
          }
          if (typeof i == "string") {
            if (c[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            c[i]();
          }
        });
      }
    }
    w.on(document, f1, S1, function(m) {
      const i = I.getElementFromSelector(this);
      if (!i || !i.classList.contains(Di))
        return;
      m.preventDefault();
      const c = It.getOrCreateInstance(i), g = this.getAttribute("data-bs-slide-to");
      if (g) {
        c.to(g), c._maybeEnableCycle();
        return;
      }
      if (te.getDataAttribute(this, "slide") === "next") {
        c.next(), c._maybeEnableCycle();
        return;
      }
      c.prev(), c._maybeEnableCycle();
    }), w.on(window, p1, () => {
      const m = I.find(A1);
      for (const i of m)
        It.getOrCreateInstance(i);
    }), F(It);
    const O1 = "collapse", rs = ".bs.collapse", k1 = ".data-api", x1 = `show${rs}`, P1 = `shown${rs}`, L1 = `hide${rs}`, D1 = `hidden${rs}`, N1 = `click${rs}${k1}`, hn = "show", Vt = "collapse", xs = "collapsing", R1 = "collapsed", M1 = `:scope .${Vt} .${Vt}`, I1 = "collapse-horizontal", V1 = "width", B1 = "height", j1 = ".collapse.show, .collapse.collapsing", dn = '[data-bs-toggle="collapse"]', Z1 = {
      parent: null,
      toggle: !0
    }, F1 = {
      parent: "(null|element)",
      toggle: "boolean"
    };
    class Bt extends $e {
      constructor(i, c) {
        super(i, c), this._isTransitioning = !1, this._triggerArray = [];
        const g = I.find(dn);
        for (const T of g) {
          const P = I.getSelectorFromElement(T), x = I.find(P).filter((G) => G === this._element);
          P !== null && x.length && this._triggerArray.push(T);
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
      }
      // Getters
      static get Default() {
        return Z1;
      }
      static get DefaultType() {
        return F1;
      }
      static get NAME() {
        return O1;
      }
      // Public
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown())
          return;
        let i = [];
        if (this._config.parent && (i = this._getFirstLevelChildren(j1).filter((G) => G !== this._element).map((G) => Bt.getOrCreateInstance(G, {
          toggle: !1
        }))), i.length && i[0]._isTransitioning || w.trigger(this._element, x1).defaultPrevented)
          return;
        for (const G of i)
          G.hide();
        const g = this._getDimension();
        this._element.classList.remove(Vt), this._element.classList.add(xs), this._element.style[g] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        const T = () => {
          this._isTransitioning = !1, this._element.classList.remove(xs), this._element.classList.add(Vt, hn), this._element.style[g] = "", w.trigger(this._element, P1);
        }, x = `scroll${g[0].toUpperCase() + g.slice(1)}`;
        this._queueCallback(T, this._element, !0), this._element.style[g] = `${this._element[x]}px`;
      }
      hide() {
        if (this._isTransitioning || !this._isShown() || w.trigger(this._element, L1).defaultPrevented)
          return;
        const c = this._getDimension();
        this._element.style[c] = `${this._element.getBoundingClientRect()[c]}px`, B(this._element), this._element.classList.add(xs), this._element.classList.remove(Vt, hn);
        for (const T of this._triggerArray) {
          const P = I.getElementFromSelector(T);
          P && !this._isShown(P) && this._addAriaAndCollapsedClass([T], !1);
        }
        this._isTransitioning = !0;
        const g = () => {
          this._isTransitioning = !1, this._element.classList.remove(xs), this._element.classList.add(Vt), w.trigger(this._element, D1);
        };
        this._element.style[c] = "", this._queueCallback(g, this._element, !0);
      }
      _isShown(i = this._element) {
        return i.classList.contains(hn);
      }
      // Private
      _configAfterMerge(i) {
        return i.toggle = !!i.toggle, i.parent = S(i.parent), i;
      }
      _getDimension() {
        return this._element.classList.contains(I1) ? V1 : B1;
      }
      _initializeChildren() {
        if (!this._config.parent)
          return;
        const i = this._getFirstLevelChildren(dn);
        for (const c of i) {
          const g = I.getElementFromSelector(c);
          g && this._addAriaAndCollapsedClass([c], this._isShown(g));
        }
      }
      _getFirstLevelChildren(i) {
        const c = I.find(M1, this._config.parent);
        return I.find(i, this._config.parent).filter((g) => !c.includes(g));
      }
      _addAriaAndCollapsedClass(i, c) {
        if (i.length)
          for (const g of i)
            g.classList.toggle(R1, !c), g.setAttribute("aria-expanded", c);
      }
      // Static
      static jQueryInterface(i) {
        const c = {};
        return typeof i == "string" && /show|hide/.test(i) && (c.toggle = !1), this.each(function() {
          const g = Bt.getOrCreateInstance(this, c);
          if (typeof i == "string") {
            if (typeof g[i] > "u")
              throw new TypeError(`No method named "${i}"`);
            g[i]();
          }
        });
      }
    }
    w.on(document, N1, dn, function(m) {
      (m.target.tagName === "A" || m.delegateTarget && m.delegateTarget.tagName === "A") && m.preventDefault();
      for (const i of I.getMultipleElementsFromSelector(this))
        Bt.getOrCreateInstance(i, {
          toggle: !1
        }).toggle();
    }), F(Bt);
    const Mi = "dropdown", yt = ".bs.dropdown", pn = ".data-api", z1 = "Escape", Ii = "Tab", W1 = "ArrowUp", Vi = "ArrowDown", H1 = 2, U1 = `hide${yt}`, q1 = `hidden${yt}`, K1 = `show${yt}`, Y1 = `shown${yt}`, Bi = `click${yt}${pn}`, ji = `keydown${yt}${pn}`, G1 = `keyup${yt}${pn}`, jt = "show", X1 = "dropup", J1 = "dropend", Q1 = "dropstart", ec = "dropup-center", tc = "dropdown-center", bt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', sc = `${bt}.${jt}`, Ps = ".dropdown-menu", nc = ".navbar", ic = ".navbar-nav", oc = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", rc = R() ? "top-end" : "top-start", lc = R() ? "top-start" : "top-end", cc = R() ? "bottom-end" : "bottom-start", ac = R() ? "bottom-start" : "bottom-end", uc = R() ? "left-start" : "right-start", hc = R() ? "right-start" : "left-start", dc = "top", pc = "bottom", fc = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    }, mc = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };
    class We extends $e {
      constructor(i, c) {
        super(i, c), this._popper = null, this._parent = this._element.parentNode, this._menu = I.next(this._element, Ps)[0] || I.prev(this._element, Ps)[0] || I.findOne(Ps, this._parent), this._inNavbar = this._detectNavbar();
      }
      // Getters
      static get Default() {
        return fc;
      }
      static get DefaultType() {
        return mc;
      }
      static get NAME() {
        return Mi;
      }
      // Public
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (k(this._element) || this._isShown())
          return;
        const i = {
          relatedTarget: this._element
        };
        if (!w.trigger(this._element, K1, i).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(ic))
            for (const g of [].concat(...document.body.children))
              w.on(g, "mouseover", M);
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(jt), this._element.classList.add(jt), w.trigger(this._element, Y1, i);
        }
      }
      hide() {
        if (k(this._element) || !this._isShown())
          return;
        const i = {
          relatedTarget: this._element
        };
        this._completeHide(i);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
      // Private
      _completeHide(i) {
        if (!w.trigger(this._element, U1, i).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const g of [].concat(...document.body.children))
              w.off(g, "mouseover", M);
          this._popper && this._popper.destroy(), this._menu.classList.remove(jt), this._element.classList.remove(jt), this._element.setAttribute("aria-expanded", "false"), te.removeDataAttribute(this._menu, "popper"), w.trigger(this._element, q1, i);
        }
      }
      _getConfig(i) {
        if (i = super._getConfig(i), typeof i.reference == "object" && !b(i.reference) && typeof i.reference.getBoundingClientRect != "function")
          throw new TypeError(`${Mi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return i;
      }
      _createPopper() {
        if (typeof o > "u")
          throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let i = this._element;
        this._config.reference === "parent" ? i = this._parent : b(this._config.reference) ? i = S(this._config.reference) : typeof this._config.reference == "object" && (i = this._config.reference);
        const c = this._getPopperConfig();
        this._popper = o.createPopper(i, this._menu, c);
      }
      _isShown() {
        return this._menu.classList.contains(jt);
      }
      _getPlacement() {
        const i = this._parent;
        if (i.classList.contains(J1))
          return uc;
        if (i.classList.contains(Q1))
          return hc;
        if (i.classList.contains(ec))
          return dc;
        if (i.classList.contains(tc))
          return pc;
        const c = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return i.classList.contains(X1) ? c ? lc : rc : c ? ac : cc;
      }
      _detectNavbar() {
        return this._element.closest(nc) !== null;
      }
      _getOffset() {
        const {
          offset: i
        } = this._config;
        return typeof i == "string" ? i.split(",").map((c) => Number.parseInt(c, 10)) : typeof i == "function" ? (c) => i(c, this._element) : i;
      }
      _getPopperConfig() {
        const i = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || this._config.display === "static") && (te.setDataAttribute(this._menu, "popper", "static"), i.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), {
          ...i,
          ...W(this._config.popperConfig, [i])
        };
      }
      _selectMenuItem({
        key: i,
        target: c
      }) {
        const g = I.find(oc, this._menu).filter((T) => $(T));
        g.length && se(g, c, i === Vi, !g.includes(c)).focus();
      }
      // Static
      static jQueryInterface(i) {
        return this.each(function() {
          const c = We.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (typeof c[i] > "u")
              throw new TypeError(`No method named "${i}"`);
            c[i]();
          }
        });
      }
      static clearMenus(i) {
        if (i.button === H1 || i.type === "keyup" && i.key !== Ii)
          return;
        const c = I.find(sc);
        for (const g of c) {
          const T = We.getInstance(g);
          if (!T || T._config.autoClose === !1)
            continue;
          const P = i.composedPath(), x = P.includes(T._menu);
          if (P.includes(T._element) || T._config.autoClose === "inside" && !x || T._config.autoClose === "outside" && x || T._menu.contains(i.target) && (i.type === "keyup" && i.key === Ii || /input|select|option|textarea|form/i.test(i.target.tagName)))
            continue;
          const G = {
            relatedTarget: T._element
          };
          i.type === "click" && (G.clickEvent = i), T._completeHide(G);
        }
      }
      static dataApiKeydownHandler(i) {
        const c = /input|textarea/i.test(i.target.tagName), g = i.key === z1, T = [W1, Vi].includes(i.key);
        if (!T && !g || c && !g)
          return;
        i.preventDefault();
        const P = this.matches(bt) ? this : I.prev(this, bt)[0] || I.next(this, bt)[0] || I.findOne(bt, i.delegateTarget.parentNode), x = We.getOrCreateInstance(P);
        if (T) {
          i.stopPropagation(), x.show(), x._selectMenuItem(i);
          return;
        }
        x._isShown() && (i.stopPropagation(), x.hide(), P.focus());
      }
    }
    w.on(document, ji, bt, We.dataApiKeydownHandler), w.on(document, ji, Ps, We.dataApiKeydownHandler), w.on(document, Bi, We.clearMenus), w.on(document, G1, We.clearMenus), w.on(document, Bi, bt, function(m) {
      m.preventDefault(), We.getOrCreateInstance(this).toggle();
    }), F(We);
    const Zi = "backdrop", gc = "fade", Fi = "show", zi = `mousedown.bs.${Zi}`, _c = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      // if false, we use the backdrop helper without adding any element to the dom
      rootElement: "body"
      // give the choice to place backdrop under different elements
    }, vc = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)"
    };
    class Wi extends Ae {
      constructor(i) {
        super(), this._config = this._getConfig(i), this._isAppended = !1, this._element = null;
      }
      // Getters
      static get Default() {
        return _c;
      }
      static get DefaultType() {
        return vc;
      }
      static get NAME() {
        return Zi;
      }
      // Public
      show(i) {
        if (!this._config.isVisible) {
          W(i);
          return;
        }
        this._append();
        const c = this._getElement();
        this._config.isAnimated && B(c), c.classList.add(Fi), this._emulateAnimation(() => {
          W(i);
        });
      }
      hide(i) {
        if (!this._config.isVisible) {
          W(i);
          return;
        }
        this._getElement().classList.remove(Fi), this._emulateAnimation(() => {
          this.dispose(), W(i);
        });
      }
      dispose() {
        this._isAppended && (w.off(this._element, zi), this._element.remove(), this._isAppended = !1);
      }
      // Private
      _getElement() {
        if (!this._element) {
          const i = document.createElement("div");
          i.className = this._config.className, this._config.isAnimated && i.classList.add(gc), this._element = i;
        }
        return this._element;
      }
      _configAfterMerge(i) {
        return i.rootElement = S(i.rootElement), i;
      }
      _append() {
        if (this._isAppended)
          return;
        const i = this._getElement();
        this._config.rootElement.append(i), w.on(i, zi, () => {
          W(this._config.clickCallback);
        }), this._isAppended = !0;
      }
      _emulateAnimation(i) {
        oe(i, this._getElement(), this._config.isAnimated);
      }
    }
    const yc = "focustrap", Ls = ".bs.focustrap", bc = `focusin${Ls}`, wc = `keydown.tab${Ls}`, Ec = "Tab", Sc = "forward", Hi = "backward", Ac = {
      autofocus: !0,
      trapElement: null
      // The element to trap focus inside of
    }, Tc = {
      autofocus: "boolean",
      trapElement: "element"
    };
    class Ui extends Ae {
      constructor(i) {
        super(), this._config = this._getConfig(i), this._isActive = !1, this._lastTabNavDirection = null;
      }
      // Getters
      static get Default() {
        return Ac;
      }
      static get DefaultType() {
        return Tc;
      }
      static get NAME() {
        return yc;
      }
      // Public
      activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), w.off(document, Ls), w.on(document, bc, (i) => this._handleFocusin(i)), w.on(document, wc, (i) => this._handleKeydown(i)), this._isActive = !0);
      }
      deactivate() {
        this._isActive && (this._isActive = !1, w.off(document, Ls));
      }
      // Private
      _handleFocusin(i) {
        const {
          trapElement: c
        } = this._config;
        if (i.target === document || i.target === c || c.contains(i.target))
          return;
        const g = I.focusableChildren(c);
        g.length === 0 ? c.focus() : this._lastTabNavDirection === Hi ? g[g.length - 1].focus() : g[0].focus();
      }
      _handleKeydown(i) {
        i.key === Ec && (this._lastTabNavDirection = i.shiftKey ? Hi : Sc);
      }
    }
    const qi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Ki = ".sticky-top", Ds = "padding-right", Yi = "margin-right";
    class fn {
      constructor() {
        this._element = document.body;
      }
      // Public
      getWidth() {
        const i = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - i);
      }
      hide() {
        const i = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, Ds, (c) => c + i), this._setElementAttributes(qi, Ds, (c) => c + i), this._setElementAttributes(Ki, Yi, (c) => c - i);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ds), this._resetElementAttributes(qi, Ds), this._resetElementAttributes(Ki, Yi);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      // Private
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
      _setElementAttributes(i, c, g) {
        const T = this.getWidth(), P = (x) => {
          if (x !== this._element && window.innerWidth > x.clientWidth + T)
            return;
          this._saveInitialAttribute(x, c);
          const G = window.getComputedStyle(x).getPropertyValue(c);
          x.style.setProperty(c, `${g(Number.parseFloat(G))}px`);
        };
        this._applyManipulationCallback(i, P);
      }
      _saveInitialAttribute(i, c) {
        const g = i.style.getPropertyValue(c);
        g && te.setDataAttribute(i, c, g);
      }
      _resetElementAttributes(i, c) {
        const g = (T) => {
          const P = te.getDataAttribute(T, c);
          if (P === null) {
            T.style.removeProperty(c);
            return;
          }
          te.removeDataAttribute(T, c), T.style.setProperty(c, P);
        };
        this._applyManipulationCallback(i, g);
      }
      _applyManipulationCallback(i, c) {
        if (b(i)) {
          c(i);
          return;
        }
        for (const g of I.find(i, this._element))
          c(g);
      }
    }
    const Cc = "modal", Be = ".bs.modal", $c = ".data-api", Oc = "Escape", kc = `hide${Be}`, xc = `hidePrevented${Be}`, Gi = `hidden${Be}`, Xi = `show${Be}`, Pc = `shown${Be}`, Lc = `resize${Be}`, Dc = `click.dismiss${Be}`, Nc = `mousedown.dismiss${Be}`, Rc = `keydown.dismiss${Be}`, Mc = `click${Be}${$c}`, Ji = "modal-open", Ic = "fade", Qi = "show", mn = "modal-static", Vc = ".modal.show", Bc = ".modal-dialog", jc = ".modal-body", Zc = '[data-bs-toggle="modal"]', Fc = {
      backdrop: !0,
      focus: !0,
      keyboard: !0
    }, zc = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
    class wt extends $e {
      constructor(i, c) {
        super(i, c), this._dialog = I.findOne(Bc, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new fn(), this._addEventListeners();
      }
      // Getters
      static get Default() {
        return Fc;
      }
      static get DefaultType() {
        return zc;
      }
      static get NAME() {
        return Cc;
      }
      // Public
      toggle(i) {
        return this._isShown ? this.hide() : this.show(i);
      }
      show(i) {
        this._isShown || this._isTransitioning || w.trigger(this._element, Xi, {
          relatedTarget: i
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ji), this._adjustDialog(), this._backdrop.show(() => this._showElement(i)));
      }
      hide() {
        !this._isShown || this._isTransitioning || w.trigger(this._element, kc).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Qi), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
      }
      dispose() {
        w.off(window, Be), w.off(this._dialog, Be), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      // Private
      _initializeBackDrop() {
        return new Wi({
          isVisible: !!this._config.backdrop,
          // 'static' option will be translated to true, and booleans will keep their value,
          isAnimated: this._isAnimated()
        });
      }
      _initializeFocusTrap() {
        return new Ui({
          trapElement: this._element
        });
      }
      _showElement(i) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const c = I.findOne(jc, this._dialog);
        c && (c.scrollTop = 0), B(this._element), this._element.classList.add(Qi);
        const g = () => {
          this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, w.trigger(this._element, Pc, {
            relatedTarget: i
          });
        };
        this._queueCallback(g, this._dialog, this._isAnimated());
      }
      _addEventListeners() {
        w.on(this._element, Rc, (i) => {
          if (i.key === Oc) {
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            this._triggerBackdropTransition();
          }
        }), w.on(window, Lc, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }), w.on(this._element, Nc, (i) => {
          w.one(this._element, Dc, (c) => {
            if (!(this._element !== i.target || this._element !== c.target)) {
              if (this._config.backdrop === "static") {
                this._triggerBackdropTransition();
                return;
              }
              this._config.backdrop && this.hide();
            }
          });
        });
      }
      _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
          document.body.classList.remove(Ji), this._resetAdjustments(), this._scrollBar.reset(), w.trigger(this._element, Gi);
        });
      }
      _isAnimated() {
        return this._element.classList.contains(Ic);
      }
      _triggerBackdropTransition() {
        if (w.trigger(this._element, xc).defaultPrevented)
          return;
        const c = this._element.scrollHeight > document.documentElement.clientHeight, g = this._element.style.overflowY;
        g === "hidden" || this._element.classList.contains(mn) || (c || (this._element.style.overflowY = "hidden"), this._element.classList.add(mn), this._queueCallback(() => {
          this._element.classList.remove(mn), this._queueCallback(() => {
            this._element.style.overflowY = g;
          }, this._dialog);
        }, this._dialog), this._element.focus());
      }
      /**
       * The following methods are used to handle overflowing modals
       */
      _adjustDialog() {
        const i = this._element.scrollHeight > document.documentElement.clientHeight, c = this._scrollBar.getWidth(), g = c > 0;
        if (g && !i) {
          const T = R() ? "paddingLeft" : "paddingRight";
          this._element.style[T] = `${c}px`;
        }
        if (!g && i) {
          const T = R() ? "paddingRight" : "paddingLeft";
          this._element.style[T] = `${c}px`;
        }
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
      // Static
      static jQueryInterface(i, c) {
        return this.each(function() {
          const g = wt.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (typeof g[i] > "u")
              throw new TypeError(`No method named "${i}"`);
            g[i](c);
          }
        });
      }
    }
    w.on(document, Mc, Zc, function(m) {
      const i = I.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && m.preventDefault(), w.one(i, Xi, (T) => {
        T.defaultPrevented || w.one(i, Gi, () => {
          $(this) && this.focus();
        });
      });
      const c = I.findOne(Vc);
      c && wt.getInstance(c).hide(), wt.getOrCreateInstance(i).toggle(this);
    }), ze(wt), F(wt);
    const Wc = "offcanvas", et = ".bs.offcanvas", eo = ".data-api", Hc = `load${et}${eo}`, Uc = "Escape", to = "show", so = "showing", no = "hiding", qc = "offcanvas-backdrop", io = ".offcanvas.show", Kc = `show${et}`, Yc = `shown${et}`, Gc = `hide${et}`, oo = `hidePrevented${et}`, ro = `hidden${et}`, Xc = `resize${et}`, Jc = `click${et}${eo}`, Qc = `keydown.dismiss${et}`, e2 = '[data-bs-toggle="offcanvas"]', t2 = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    }, s2 = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean"
    };
    class tt extends $e {
      constructor(i, c) {
        super(i, c), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
      }
      // Getters
      static get Default() {
        return t2;
      }
      static get DefaultType() {
        return s2;
      }
      static get NAME() {
        return Wc;
      }
      // Public
      toggle(i) {
        return this._isShown ? this.hide() : this.show(i);
      }
      show(i) {
        if (this._isShown || w.trigger(this._element, Kc, {
          relatedTarget: i
        }).defaultPrevented)
          return;
        this._isShown = !0, this._backdrop.show(), this._config.scroll || new fn().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(so);
        const g = () => {
          (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(to), this._element.classList.remove(so), w.trigger(this._element, Yc, {
            relatedTarget: i
          });
        };
        this._queueCallback(g, this._element, !0);
      }
      hide() {
        if (!this._isShown || w.trigger(this._element, Gc).defaultPrevented)
          return;
        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(no), this._backdrop.hide();
        const c = () => {
          this._element.classList.remove(to, no), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new fn().reset(), w.trigger(this._element, ro);
        };
        this._queueCallback(c, this._element, !0);
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      // Private
      _initializeBackDrop() {
        const i = () => {
          if (this._config.backdrop === "static") {
            w.trigger(this._element, oo);
            return;
          }
          this.hide();
        }, c = !!this._config.backdrop;
        return new Wi({
          className: qc,
          isVisible: c,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: c ? i : null
        });
      }
      _initializeFocusTrap() {
        return new Ui({
          trapElement: this._element
        });
      }
      _addEventListeners() {
        w.on(this._element, Qc, (i) => {
          if (i.key === Uc) {
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            w.trigger(this._element, oo);
          }
        });
      }
      // Static
      static jQueryInterface(i) {
        return this.each(function() {
          const c = tt.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (c[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            c[i](this);
          }
        });
      }
    }
    w.on(document, Jc, e2, function(m) {
      const i = I.getElementFromSelector(this);
      if (["A", "AREA"].includes(this.tagName) && m.preventDefault(), k(this))
        return;
      w.one(i, ro, () => {
        $(this) && this.focus();
      });
      const c = I.findOne(io);
      c && c !== i && tt.getInstance(c).hide(), tt.getOrCreateInstance(i).toggle(this);
    }), w.on(window, Hc, () => {
      for (const m of I.find(io))
        tt.getOrCreateInstance(m).show();
    }), w.on(window, Xc, () => {
      for (const m of I.find("[aria-modal][class*=show][class*=offcanvas-]"))
        getComputedStyle(m).position !== "fixed" && tt.getOrCreateInstance(m).hide();
    }), ze(tt), F(tt);
    const lo = {
      // Global attributes allowed on any supplied element below.
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    }, n2 = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), i2 = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, o2 = (m, i) => {
      const c = m.nodeName.toLowerCase();
      return i.includes(c) ? n2.has(c) ? !!i2.test(m.nodeValue) : !0 : i.filter((g) => g instanceof RegExp).some((g) => g.test(c));
    };
    function r2(m, i, c) {
      if (!m.length)
        return m;
      if (c && typeof c == "function")
        return c(m);
      const T = new window.DOMParser().parseFromString(m, "text/html"), P = [].concat(...T.body.querySelectorAll("*"));
      for (const x of P) {
        const G = x.nodeName.toLowerCase();
        if (!Object.keys(i).includes(G)) {
          x.remove();
          continue;
        }
        const De = [].concat(...x.attributes), je = [].concat(i["*"] || [], i[G] || []);
        for (const Te of De)
          o2(Te, je) || x.removeAttribute(Te.nodeName);
      }
      return T.body.innerHTML;
    }
    const l2 = "TemplateFactory", c2 = {
      allowList: lo,
      content: {},
      // { selector : text ,  selector2 : text2 , }
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>"
    }, a2 = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string"
    }, u2 = {
      entry: "(string|element|function|null)",
      selector: "(string|element)"
    };
    class h2 extends Ae {
      constructor(i) {
        super(), this._config = this._getConfig(i);
      }
      // Getters
      static get Default() {
        return c2;
      }
      static get DefaultType() {
        return a2;
      }
      static get NAME() {
        return l2;
      }
      // Public
      getContent() {
        return Object.values(this._config.content).map((i) => this._resolvePossibleFunction(i)).filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(i) {
        return this._checkContent(i), this._config.content = {
          ...this._config.content,
          ...i
        }, this;
      }
      toHtml() {
        const i = document.createElement("div");
        i.innerHTML = this._maybeSanitize(this._config.template);
        for (const [T, P] of Object.entries(this._config.content))
          this._setContent(i, P, T);
        const c = i.children[0], g = this._resolvePossibleFunction(this._config.extraClass);
        return g && c.classList.add(...g.split(" ")), c;
      }
      // Private
      _typeCheckConfig(i) {
        super._typeCheckConfig(i), this._checkContent(i.content);
      }
      _checkContent(i) {
        for (const [c, g] of Object.entries(i))
          super._typeCheckConfig({
            selector: c,
            entry: g
          }, u2);
      }
      _setContent(i, c, g) {
        const T = I.findOne(g, i);
        if (T) {
          if (c = this._resolvePossibleFunction(c), !c) {
            T.remove();
            return;
          }
          if (b(c)) {
            this._putElementInTemplate(S(c), T);
            return;
          }
          if (this._config.html) {
            T.innerHTML = this._maybeSanitize(c);
            return;
          }
          T.textContent = c;
        }
      }
      _maybeSanitize(i) {
        return this._config.sanitize ? r2(i, this._config.allowList, this._config.sanitizeFn) : i;
      }
      _resolvePossibleFunction(i) {
        return W(i, [this]);
      }
      _putElementInTemplate(i, c) {
        if (this._config.html) {
          c.innerHTML = "", c.append(i);
          return;
        }
        c.textContent = i.textContent;
      }
    }
    const d2 = "tooltip", p2 = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), gn = "fade", f2 = "modal", Ns = "show", m2 = ".tooltip-inner", co = `.${f2}`, ao = "hide.bs.modal", ls = "hover", _n = "focus", g2 = "click", _2 = "manual", v2 = "hide", y2 = "hidden", b2 = "show", w2 = "shown", E2 = "inserted", S2 = "click", A2 = "focusin", T2 = "focusout", C2 = "mouseenter", $2 = "mouseleave", O2 = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: R() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: R() ? "right" : "left"
    }, k2 = {
      allowList: lo,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus"
    }, x2 = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string"
    };
    class Et extends $e {
      constructor(i, c) {
        if (typeof o > "u")
          throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(i, c), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
      }
      // Getters
      static get Default() {
        return k2;
      }
      static get DefaultType() {
        return x2;
      }
      static get NAME() {
        return d2;
      }
      // Public
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        if (this._isEnabled) {
          if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
            this._leave();
            return;
          }
          this._enter();
        }
      }
      dispose() {
        clearTimeout(this._timeout), w.off(this._element.closest(co), ao, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled))
          return;
        const i = w.trigger(this._element, this.constructor.eventName(b2)), g = (V(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (i.defaultPrevented || !g)
          return;
        this._disposePopper();
        const T = this._getTipElement();
        this._element.setAttribute("aria-describedby", T.getAttribute("id"));
        const {
          container: P
        } = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (P.append(T), w.trigger(this._element, this.constructor.eventName(E2))), this._popper = this._createPopper(T), T.classList.add(Ns), "ontouchstart" in document.documentElement)
          for (const G of [].concat(...document.body.children))
            w.on(G, "mouseover", M);
        const x = () => {
          w.trigger(this._element, this.constructor.eventName(w2)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
        };
        this._queueCallback(x, this.tip, this._isAnimated());
      }
      hide() {
        if (!this._isShown() || w.trigger(this._element, this.constructor.eventName(v2)).defaultPrevented)
          return;
        if (this._getTipElement().classList.remove(Ns), "ontouchstart" in document.documentElement)
          for (const T of [].concat(...document.body.children))
            w.off(T, "mouseover", M);
        this._activeTrigger[g2] = !1, this._activeTrigger[_n] = !1, this._activeTrigger[ls] = !1, this._isHovered = null;
        const g = () => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), w.trigger(this._element, this.constructor.eventName(y2)));
        };
        this._queueCallback(g, this.tip, this._isAnimated());
      }
      update() {
        this._popper && this._popper.update();
      }
      // Protected
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
      _createTipElement(i) {
        const c = this._getTemplateFactory(i).toHtml();
        if (!c)
          return null;
        c.classList.remove(gn, Ns), c.classList.add(`bs-${this.constructor.NAME}-auto`);
        const g = _(this.constructor.NAME).toString();
        return c.setAttribute("id", g), this._isAnimated() && c.classList.add(gn), c;
      }
      setContent(i) {
        this._newContent = i, this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(i) {
        return this._templateFactory ? this._templateFactory.changeContent(i) : this._templateFactory = new h2({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content: i,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        }), this._templateFactory;
      }
      _getContentForTemplate() {
        return {
          [m2]: this._getTitle()
        };
      }
      _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
      // Private
      _initializeOnDelegatedTarget(i) {
        return this.constructor.getOrCreateInstance(i.delegateTarget, this._getDelegateConfig());
      }
      _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(gn);
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(Ns);
      }
      _createPopper(i) {
        const c = W(this._config.placement, [this, i, this._element]), g = O2[c.toUpperCase()];
        return o.createPopper(this._element, i, this._getPopperConfig(g));
      }
      _getOffset() {
        const {
          offset: i
        } = this._config;
        return typeof i == "string" ? i.split(",").map((c) => Number.parseInt(c, 10)) : typeof i == "function" ? (c) => i(c, this._element) : i;
      }
      _resolvePossibleFunction(i) {
        return W(i, [this._element]);
      }
      _getPopperConfig(i) {
        const c = {
          placement: i,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: `.${this.constructor.NAME}-arrow`
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (g) => {
              this._getTipElement().setAttribute("data-popper-placement", g.state.placement);
            }
          }]
        };
        return {
          ...c,
          ...W(this._config.popperConfig, [c])
        };
      }
      _setListeners() {
        const i = this._config.trigger.split(" ");
        for (const c of i)
          if (c === "click")
            w.on(this._element, this.constructor.eventName(S2), this._config.selector, (g) => {
              this._initializeOnDelegatedTarget(g).toggle();
            });
          else if (c !== _2) {
            const g = c === ls ? this.constructor.eventName(C2) : this.constructor.eventName(A2), T = c === ls ? this.constructor.eventName($2) : this.constructor.eventName(T2);
            w.on(this._element, g, this._config.selector, (P) => {
              const x = this._initializeOnDelegatedTarget(P);
              x._activeTrigger[P.type === "focusin" ? _n : ls] = !0, x._enter();
            }), w.on(this._element, T, this._config.selector, (P) => {
              const x = this._initializeOnDelegatedTarget(P);
              x._activeTrigger[P.type === "focusout" ? _n : ls] = x._element.contains(P.relatedTarget), x._leave();
            });
          }
        this._hideModalHandler = () => {
          this._element && this.hide();
        }, w.on(this._element.closest(co), ao, this._hideModalHandler);
      }
      _fixTitle() {
        const i = this._element.getAttribute("title");
        i && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", i), this._element.setAttribute("data-bs-original-title", i), this._element.removeAttribute("title"));
      }
      _enter() {
        if (this._isShown() || this._isHovered) {
          this._isHovered = !0;
          return;
        }
        this._isHovered = !0, this._setTimeout(() => {
          this._isHovered && this.show();
        }, this._config.delay.show);
      }
      _leave() {
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
      }
      _setTimeout(i, c) {
        clearTimeout(this._timeout), this._timeout = setTimeout(i, c);
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(i) {
        const c = te.getDataAttributes(this._element);
        for (const g of Object.keys(c))
          p2.has(g) && delete c[g];
        return i = {
          ...c,
          ...typeof i == "object" && i ? i : {}
        }, i = this._mergeConfigObj(i), i = this._configAfterMerge(i), this._typeCheckConfig(i), i;
      }
      _configAfterMerge(i) {
        return i.container = i.container === !1 ? document.body : S(i.container), typeof i.delay == "number" && (i.delay = {
          show: i.delay,
          hide: i.delay
        }), typeof i.title == "number" && (i.title = i.title.toString()), typeof i.content == "number" && (i.content = i.content.toString()), i;
      }
      _getDelegateConfig() {
        const i = {};
        for (const [c, g] of Object.entries(this._config))
          this.constructor.Default[c] !== g && (i[c] = g);
        return i.selector = !1, i.trigger = "manual", i;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
      // Static
      static jQueryInterface(i) {
        return this.each(function() {
          const c = Et.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (typeof c[i] > "u")
              throw new TypeError(`No method named "${i}"`);
            c[i]();
          }
        });
      }
    }
    F(Et);
    const P2 = "popover", L2 = ".popover-header", D2 = ".popover-body", N2 = {
      ...Et.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    }, R2 = {
      ...Et.DefaultType,
      content: "(null|string|element|function)"
    };
    class Rs extends Et {
      // Getters
      static get Default() {
        return N2;
      }
      static get DefaultType() {
        return R2;
      }
      static get NAME() {
        return P2;
      }
      // Overrides
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      // Private
      _getContentForTemplate() {
        return {
          [L2]: this._getTitle(),
          [D2]: this._getContent()
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      // Static
      static jQueryInterface(i) {
        return this.each(function() {
          const c = Rs.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (typeof c[i] > "u")
              throw new TypeError(`No method named "${i}"`);
            c[i]();
          }
        });
      }
    }
    F(Rs);
    const M2 = "scrollspy", vn = ".bs.scrollspy", I2 = ".data-api", V2 = `activate${vn}`, uo = `click${vn}`, B2 = `load${vn}${I2}`, j2 = "dropdown-item", Zt = "active", Z2 = '[data-bs-spy="scroll"]', yn = "[href]", F2 = ".nav, .list-group", ho = ".nav-link", z2 = `${ho}, .nav-item > ${ho}, .list-group-item`, W2 = ".dropdown", H2 = ".dropdown-toggle", U2 = {
      offset: null,
      // TODO: v6 @deprecated, keep it for backwards compatibility reasons
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1]
    }, q2 = {
      offset: "(number|null)",
      // TODO v6 @deprecated, keep it for backwards compatibility reasons
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array"
    };
    class cs extends $e {
      constructor(i, c) {
        super(i, c), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
          visibleEntryTop: 0,
          parentScrollTop: 0
        }, this.refresh();
      }
      // Getters
      static get Default() {
        return U2;
      }
      static get DefaultType() {
        return q2;
      }
      static get NAME() {
        return M2;
      }
      // Public
      refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const i of this._observableSections.values())
          this._observer.observe(i);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      // Private
      _configAfterMerge(i) {
        return i.target = S(i.target) || document.body, i.rootMargin = i.offset ? `${i.offset}px 0px -30%` : i.rootMargin, typeof i.threshold == "string" && (i.threshold = i.threshold.split(",").map((c) => Number.parseFloat(c))), i;
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll && (w.off(this._config.target, uo), w.on(this._config.target, uo, yn, (i) => {
          const c = this._observableSections.get(i.target.hash);
          if (c) {
            i.preventDefault();
            const g = this._rootElement || window, T = c.offsetTop - this._element.offsetTop;
            if (g.scrollTo) {
              g.scrollTo({
                top: T,
                behavior: "smooth"
              });
              return;
            }
            g.scrollTop = T;
          }
        }));
      }
      _getNewObserver() {
        const i = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver((c) => this._observerCallback(c), i);
      }
      // The logic of selection
      _observerCallback(i) {
        const c = (x) => this._targetLinks.get(`#${x.target.id}`), g = (x) => {
          this._previousScrollData.visibleEntryTop = x.target.offsetTop, this._process(c(x));
        }, T = (this._rootElement || document.documentElement).scrollTop, P = T >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = T;
        for (const x of i) {
          if (!x.isIntersecting) {
            this._activeTarget = null, this._clearActiveClass(c(x));
            continue;
          }
          const G = x.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (P && G) {
            if (g(x), !T)
              return;
            continue;
          }
          !P && !G && g(x);
        }
      }
      _initializeTargetsAndObservables() {
        this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
        const i = I.find(yn, this._config.target);
        for (const c of i) {
          if (!c.hash || k(c))
            continue;
          const g = I.findOne(decodeURI(c.hash), this._element);
          $(g) && (this._targetLinks.set(decodeURI(c.hash), c), this._observableSections.set(c.hash, g));
        }
      }
      _process(i) {
        this._activeTarget !== i && (this._clearActiveClass(this._config.target), this._activeTarget = i, i.classList.add(Zt), this._activateParents(i), w.trigger(this._element, V2, {
          relatedTarget: i
        }));
      }
      _activateParents(i) {
        if (i.classList.contains(j2)) {
          I.findOne(H2, i.closest(W2)).classList.add(Zt);
          return;
        }
        for (const c of I.parents(i, F2))
          for (const g of I.prev(c, z2))
            g.classList.add(Zt);
      }
      _clearActiveClass(i) {
        i.classList.remove(Zt);
        const c = I.find(`${yn}.${Zt}`, i);
        for (const g of c)
          g.classList.remove(Zt);
      }
      // Static
      static jQueryInterface(i) {
        return this.each(function() {
          const c = cs.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (c[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            c[i]();
          }
        });
      }
    }
    w.on(window, B2, () => {
      for (const m of I.find(Z2))
        cs.getOrCreateInstance(m);
    }), F(cs);
    const K2 = "tab", St = ".bs.tab", Y2 = `hide${St}`, G2 = `hidden${St}`, X2 = `show${St}`, J2 = `shown${St}`, Q2 = `click${St}`, ea = `keydown${St}`, ta = `load${St}`, sa = "ArrowLeft", po = "ArrowRight", na = "ArrowUp", fo = "ArrowDown", bn = "Home", mo = "End", At = "active", go = "fade", wn = "show", ia = "dropdown", _o = ".dropdown-toggle", oa = ".dropdown-menu", En = `:not(${_o})`, ra = '.list-group, .nav, [role="tablist"]', la = ".nav-item, .list-group-item", ca = `.nav-link${En}, .list-group-item${En}, [role="tab"]${En}`, vo = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Sn = `${ca}, ${vo}`, aa = `.${At}[data-bs-toggle="tab"], .${At}[data-bs-toggle="pill"], .${At}[data-bs-toggle="list"]`;
    class Tt extends $e {
      constructor(i) {
        super(i), this._parent = this._element.closest(ra), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), w.on(this._element, ea, (c) => this._keydown(c)));
      }
      // Getters
      static get NAME() {
        return K2;
      }
      // Public
      show() {
        const i = this._element;
        if (this._elemIsActive(i))
          return;
        const c = this._getActiveElem(), g = c ? w.trigger(c, Y2, {
          relatedTarget: i
        }) : null;
        w.trigger(i, X2, {
          relatedTarget: c
        }).defaultPrevented || g && g.defaultPrevented || (this._deactivate(c, i), this._activate(i, c));
      }
      // Private
      _activate(i, c) {
        if (!i)
          return;
        i.classList.add(At), this._activate(I.getElementFromSelector(i));
        const g = () => {
          if (i.getAttribute("role") !== "tab") {
            i.classList.add(wn);
            return;
          }
          i.removeAttribute("tabindex"), i.setAttribute("aria-selected", !0), this._toggleDropDown(i, !0), w.trigger(i, J2, {
            relatedTarget: c
          });
        };
        this._queueCallback(g, i, i.classList.contains(go));
      }
      _deactivate(i, c) {
        if (!i)
          return;
        i.classList.remove(At), i.blur(), this._deactivate(I.getElementFromSelector(i));
        const g = () => {
          if (i.getAttribute("role") !== "tab") {
            i.classList.remove(wn);
            return;
          }
          i.setAttribute("aria-selected", !1), i.setAttribute("tabindex", "-1"), this._toggleDropDown(i, !1), w.trigger(i, G2, {
            relatedTarget: c
          });
        };
        this._queueCallback(g, i, i.classList.contains(go));
      }
      _keydown(i) {
        if (![sa, po, na, fo, bn, mo].includes(i.key))
          return;
        i.stopPropagation(), i.preventDefault();
        const c = this._getChildren().filter((T) => !k(T));
        let g;
        if ([bn, mo].includes(i.key))
          g = c[i.key === bn ? 0 : c.length - 1];
        else {
          const T = [po, fo].includes(i.key);
          g = se(c, i.target, T, !0);
        }
        g && (g.focus({
          preventScroll: !0
        }), Tt.getOrCreateInstance(g).show());
      }
      _getChildren() {
        return I.find(Sn, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((i) => this._elemIsActive(i)) || null;
      }
      _setInitialAttributes(i, c) {
        this._setAttributeIfNotExists(i, "role", "tablist");
        for (const g of c)
          this._setInitialAttributesOnChild(g);
      }
      _setInitialAttributesOnChild(i) {
        i = this._getInnerElement(i);
        const c = this._elemIsActive(i), g = this._getOuterElement(i);
        i.setAttribute("aria-selected", c), g !== i && this._setAttributeIfNotExists(g, "role", "presentation"), c || i.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(i, "role", "tab"), this._setInitialAttributesOnTargetPanel(i);
      }
      _setInitialAttributesOnTargetPanel(i) {
        const c = I.getElementFromSelector(i);
        c && (this._setAttributeIfNotExists(c, "role", "tabpanel"), i.id && this._setAttributeIfNotExists(c, "aria-labelledby", `${i.id}`));
      }
      _toggleDropDown(i, c) {
        const g = this._getOuterElement(i);
        if (!g.classList.contains(ia))
          return;
        const T = (P, x) => {
          const G = I.findOne(P, g);
          G && G.classList.toggle(x, c);
        };
        T(_o, At), T(oa, wn), g.setAttribute("aria-expanded", c);
      }
      _setAttributeIfNotExists(i, c, g) {
        i.hasAttribute(c) || i.setAttribute(c, g);
      }
      _elemIsActive(i) {
        return i.classList.contains(At);
      }
      // Try to get the inner element (usually the .nav-link)
      _getInnerElement(i) {
        return i.matches(Sn) ? i : I.findOne(Sn, i);
      }
      // Try to get the outer element (usually the .nav-item)
      _getOuterElement(i) {
        return i.closest(la) || i;
      }
      // Static
      static jQueryInterface(i) {
        return this.each(function() {
          const c = Tt.getOrCreateInstance(this);
          if (typeof i == "string") {
            if (c[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            c[i]();
          }
        });
      }
    }
    w.on(document, Q2, vo, function(m) {
      ["A", "AREA"].includes(this.tagName) && m.preventDefault(), !k(this) && Tt.getOrCreateInstance(this).show();
    }), w.on(window, ta, () => {
      for (const m of I.find(aa))
        Tt.getOrCreateInstance(m);
    }), F(Tt);
    const ua = "toast", rt = ".bs.toast", ha = `mouseover${rt}`, da = `mouseout${rt}`, pa = `focusin${rt}`, fa = `focusout${rt}`, ma = `hide${rt}`, ga = `hidden${rt}`, _a = `show${rt}`, va = `shown${rt}`, ya = "fade", yo = "hide", Ms = "show", Is = "showing", ba = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    }, wa = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
    class as extends $e {
      constructor(i, c) {
        super(i, c), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
      }
      // Getters
      static get Default() {
        return wa;
      }
      static get DefaultType() {
        return ba;
      }
      static get NAME() {
        return ua;
      }
      // Public
      show() {
        if (w.trigger(this._element, _a).defaultPrevented)
          return;
        this._clearTimeout(), this._config.animation && this._element.classList.add(ya);
        const c = () => {
          this._element.classList.remove(Is), w.trigger(this._element, va), this._maybeScheduleHide();
        };
        this._element.classList.remove(yo), B(this._element), this._element.classList.add(Ms, Is), this._queueCallback(c, this._element, this._config.animation);
      }
      hide() {
        if (!this.isShown() || w.trigger(this._element, ma).defaultPrevented)
          return;
        const c = () => {
          this._element.classList.add(yo), this._element.classList.remove(Is, Ms), w.trigger(this._element, ga);
        };
        this._element.classList.add(Is), this._queueCallback(c, this._element, this._config.animation);
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(Ms), super.dispose();
      }
      isShown() {
        return this._element.classList.contains(Ms);
      }
      // Private
      _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
      }
      _onInteraction(i, c) {
        switch (i.type) {
          case "mouseover":
          case "mouseout": {
            this._hasMouseInteraction = c;
            break;
          }
          case "focusin":
          case "focusout": {
            this._hasKeyboardInteraction = c;
            break;
          }
        }
        if (c) {
          this._clearTimeout();
          return;
        }
        const g = i.relatedTarget;
        this._element === g || this._element.contains(g) || this._maybeScheduleHide();
      }
      _setListeners() {
        w.on(this._element, ha, (i) => this._onInteraction(i, !0)), w.on(this._element, da, (i) => this._onInteraction(i, !1)), w.on(this._element, pa, (i) => this._onInteraction(i, !0)), w.on(this._element, fa, (i) => this._onInteraction(i, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
      // Static
      static jQueryInterface(i) {
        return this.each(function() {
          const c = as.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (typeof c[i] > "u")
              throw new TypeError(`No method named "${i}"`);
            c[i](this);
          }
        });
      }
    }
    return ze(as), F(as), {
      Alert: vt,
      Button: is,
      Carousel: It,
      Collapse: Bt,
      Dropdown: We,
      Modal: wt,
      Offcanvas: tt,
      Popover: Rs,
      ScrollSpy: cs,
      Tab: Tt,
      Toast: as,
      Tooltip: Et
    };
  });
})(Na);
var A0 = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let qr;
const en = (e) => qr = e, Kr = (
  /* istanbul ignore next */
  Symbol()
);
function Wn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var _s;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(_s || (_s = {}));
function T0() {
  const e = pr(!0), t = e.run(() => ii({}));
  let s = [], n = [];
  const o = fr({
    install(r) {
      en(o), o._a = r, r.provide(Kr, o), r.config.globalProperties.$pinia = o, n.forEach((l) => s.push(l)), n = [];
    },
    use(r) {
      return !this._a && !A0 ? n.push(r) : s.push(r), this;
    },
    _p: s,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return o;
}
const Yr = () => {
};
function Oo(e, t, s, n = Yr) {
  e.push(t);
  const o = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), n());
  };
  return !s && Ta() && Ca(o), o;
}
function zt(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const C0 = (e) => e();
function Hn(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((s, n) => e.set(n, s)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], o = e[s];
    Wn(o) && Wn(n) && e.hasOwnProperty(s) && !Us(n) && !_r(n) ? e[s] = Hn(o, n) : e[s] = n;
  }
  return e;
}
const $0 = (
  /* istanbul ignore next */
  Symbol()
);
function O0(e) {
  return !Wn(e) || !e.hasOwnProperty($0);
}
const { assign: at } = Object;
function k0(e) {
  return !!(Us(e) && e.effect);
}
function x0(e, t, s, n) {
  const { state: o, actions: r, getters: l } = t, u = s.state.value[e];
  let a;
  function f() {
    u || (s.state.value[e] = o ? o() : {});
    const h = $a(s.state.value[e]);
    return at(h, r, Object.keys(l || {}).reduce((d, _) => (d[_] = fr(Ue(() => {
      en(s);
      const y = s._s.get(e);
      return l[_].call(y, y);
    })), d), {}));
  }
  return a = Gr(e, f, t, s, n, !0), a;
}
function Gr(e, t, s = {}, n, o, r) {
  let l;
  const u = at({ actions: {} }, s), a = {
    deep: !0
    // flush: 'post',
  };
  let f, h, d = [], _ = [], y;
  const v = n.state.value[e];
  !r && !v && (n.state.value[e] = {}), ii({});
  let b;
  function S(z) {
    let R;
    f = h = !1, typeof z == "function" ? (z(n.state.value[e]), R = {
      type: _s.patchFunction,
      storeId: e,
      events: y
    }) : (Hn(n.state.value[e], z), R = {
      type: _s.patchObject,
      payload: z,
      storeId: e,
      events: y
    });
    const F = b = Symbol();
    vr().then(() => {
      b === F && (f = !0);
    }), h = !0, zt(d, R, n.state.value[e]);
  }
  const $ = r ? function() {
    const { state: R } = s, F = R ? R() : {};
    this.$patch((W) => {
      at(W, F);
    });
  } : (
    /* istanbul ignore next */
    Yr
  );
  function k() {
    l.stop(), d = [], _ = [], n._s.delete(e);
  }
  function V(z, R) {
    return function() {
      en(n);
      const F = Array.from(arguments), W = [], oe = [];
      function se(J) {
        W.push(J);
      }
      function ye(J) {
        oe.push(J);
      }
      zt(_, {
        args: F,
        name: z,
        store: B,
        after: se,
        onError: ye
      });
      let de;
      try {
        de = R.apply(this && this.$id === e ? this : B, F);
      } catch (J) {
        throw zt(oe, J), J;
      }
      return de instanceof Promise ? de.then((J) => (zt(W, J), J)).catch((J) => (zt(oe, J), Promise.reject(J))) : (zt(W, de), de);
    };
  }
  const M = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: Oo.bind(null, _),
    $patch: S,
    $reset: $,
    $subscribe(z, R = {}) {
      const F = Oo(d, z, R.detached, () => W()), W = l.run(() => mr(() => n.state.value[e], (oe) => {
        (R.flush === "sync" ? h : f) && z({
          storeId: e,
          type: _s.direct,
          events: y
        }, oe);
      }, at({}, a, R)));
      return F;
    },
    $dispose: k
  }, B = gr(M);
  n._s.set(e, B);
  const H = (n._a && n._a.runWithContext || C0)(() => n._e.run(() => (l = pr()).run(t)));
  for (const z in H) {
    const R = H[z];
    if (Us(R) && !k0(R) || _r(R))
      r || (v && O0(R) && (Us(R) ? R.value = v[z] : Hn(R, v[z])), n.state.value[e][z] = R);
    else if (typeof R == "function") {
      const F = V(z, R);
      H[z] = F, u.actions[z] = R;
    }
  }
  return at(B, H), at(Aa(B), H), Object.defineProperty(B, "$state", {
    get: () => n.state.value[e],
    set: (z) => {
      S((R) => {
        at(R, z);
      });
    }
  }), n._p.forEach((z) => {
    at(B, l.run(() => z({
      store: B,
      app: n._a,
      pinia: n,
      options: u
    })));
  }), v && r && s.hydrate && s.hydrate(B.$state, v), f = !0, h = !0, B;
}
function P0(e, t, s) {
  let n, o;
  const r = typeof t == "function";
  typeof e == "string" ? (n = e, o = r ? s : t) : (o = e, n = e.id);
  function l(u, a) {
    const f = Sa();
    return u = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    u || (f ? Ut(Kr, null) : null), u && en(u), u = qr, u._s.has(n) || (r ? Gr(n, t, o, u) : x0(n, o, u)), u._s.get(n);
  }
  return l.$id = n, l;
}
const me = P0("myStore", {
  state: () => ({
    apartmentOptionStatus: !1,
    chooseBlockPanelVisibility: !1,
    apartmentPanelVisibility: !1,
    backButtonVisibility: !1,
    blokListButtonVisibility: !0,
    polygonVisibility: !1,
    isMainView: !0,
    dayType: "light",
    dayTypeVisibility: !0,
    selectedFlat: null,
    listViewType: "list",
    mobileMode: !1,
    desktopMode: !0,
    portraitMode: !1,
    pulseDialogBox: !1,
    viewerType: "PROJECT-VIEW",
    mobileZoomStatus: !0,
    viewerMobileFlatDetail: !1,
    mobileFilterStatus: !1,
    mobileOverlayPosition: 0,
    projectName: "Koru Inventum",
    apartmentList: [],
    dollHouseItem: [],
    blockList: []
  }),
  getters: {},
  actions: {
    mobileFilterPanel(e) {
      this.mobileFilterStatus = e;
    }
  }
});
var Un = { exports: {} };
(function(e, t) {
  (function(s, n) {
    n(t, e);
  })(wr, function(s, n) {
    function o(d, _) {
      if (!(d instanceof _))
        throw new TypeError("Cannot call a class as a function");
    }
    var r = 0.3, l = 0.04, u = 0.11;
    window.addEventListener("touchmove", function() {
    });
    var a = function d(_) {
      var y = _.source, v = y === void 0 ? document : y, b = _.update, S = _.multiplier, $ = S === void 0 ? 1 : S, k = _.friction, V = k === void 0 ? 0.92 : k, M = _.initialValues, B = _.boundX, q = _.boundY, H = _.bounce, z = H === void 0 ? !0 : H;
      o(this, d);
      var R, F, W, oe, se, ye, de, J, pe, _e, ge, ae = 0, fe = 0, Ce = r * $, Le = !1, be = !1, Se = !1, we = !1, A = [];
      (function() {
        if (v = typeof v == "string" ? document.querySelector(v) : v, !v)
          throw new Error("IMPETUS: source not found.");
        if (!b)
          throw new Error("IMPETUS: update function not defined.");
        M && (M[0] && (ae = M[0]), M[1] && (fe = M[1]), j()), B && (R = B[0], F = B[1]), q && (W = q[0], oe = q[1]), v.addEventListener("touchstart", re), v.addEventListener("mousedown", re);
      })(), this.destroy = function() {
        return v.removeEventListener("touchstart", re), v.removeEventListener("mousedown", re), L(), null;
      }, this.pause = function() {
        L(), be = !1, Se = !0;
      }, this.resume = function() {
        Se = !1;
      }, this.setValues = function(Z, Y) {
        typeof Z == "number" && (ae = Z), typeof Y == "number" && (fe = Y);
      }, this.getValueX = function() {
        return ae;
      }, this.getValueY = function() {
        return fe;
      }, this.setMultiplier = function(Z) {
        $ = Z, Ce = r * $;
      }, this.setBoundX = function(Z) {
        R = Z[0], F = Z[1];
      }, this.setBoundY = function(Z) {
        W = Z[0], oe = Z[1];
      };
      function L() {
        document.removeEventListener("touchmove", K, h() ? { passive: !1 } : !1), document.removeEventListener("touchend", U), document.removeEventListener("touchcancel", te), document.removeEventListener("mousemove", K, h() ? { passive: !1 } : !1), document.removeEventListener("mouseup", U);
      }
      function N() {
        L(), document.addEventListener("touchmove", K, h() ? { passive: !1 } : !1), document.addEventListener("touchend", U), document.addEventListener("touchcancel", te), document.addEventListener("mousemove", K, h() ? { passive: !1 } : !1), document.addEventListener("mouseup", U);
      }
      function j() {
        b.call(v, ae, fe);
      }
      function w(Z) {
        if (Z.type === "touchmove" || Z.type === "touchstart" || Z.type === "touchend") {
          var Y = Z.targetTouches[0] || Z.changedTouches[0];
          return {
            x: Y.clientX,
            y: Y.clientY,
            id: Y.identifier
          };
        } else
          return {
            x: Z.clientX,
            y: Z.clientY,
            id: null
          };
      }
      function re(Z) {
        var Y = w(Z);
        !be && !Se && (be = !0, we = !1, pe = Y.id, se = de = Y.x, ye = J = Y.y, A = [], Ae(se, ye), N());
      }
      function K(Z) {
        Z.preventDefault();
        var Y = w(Z);
        be && Y.id === pe && (de = Y.x, J = Y.y, Ae(se, ye), mt());
      }
      function U(Z) {
        var Y = w(Z);
        be && Y.id === pe && te();
      }
      function te() {
        be = !1, Ae(se, ye), ze(), L();
      }
      function Ae(Z, Y) {
        for (var ue = Date.now(); A.length > 0 && !(ue - A[0].time <= 100); )
          A.shift();
        A.push({ x: Z, y: Y, time: ue });
      }
      function ve() {
        var Z = de - se, Y = J - ye;
        if (ae += Z * $, fe += Y * $, z) {
          var ue = I();
          ue.x !== 0 && (ae -= Z * $e(ue.x) * $), ue.y !== 0 && (fe -= Y * $e(ue.y) * $);
        } else
          I(!0);
        j(), se = de, ye = J, Le = !1;
      }
      function $e(Z) {
        return 5e-6 * Math.pow(Z, 2) + 1e-4 * Z + 0.55;
      }
      function mt() {
        Le || f(ve), Le = !0;
      }
      function I(Z) {
        var Y = 0, ue = 0;
        return R !== void 0 && ae < R ? Y = R - ae : F !== void 0 && ae > F && (Y = F - ae), W !== void 0 && fe < W ? ue = W - fe : oe !== void 0 && fe > oe && (ue = oe - fe), Z && (Y !== 0 && (ae = Y > 0 ? R : F), ue !== 0 && (fe = ue > 0 ? W : oe)), {
          x: Y,
          y: ue,
          inBounds: Y === 0 && ue === 0
        };
      }
      function ze() {
        var Z = A[0], Y = A[A.length - 1], ue = Y.x - Z.x, Lt = Y.y - Z.y, Dt = Y.time - Z.time, _t = Dt / 15 / $;
        _e = ue / _t || 0, ge = Lt / _t || 0;
        var vt = I();
        (Math.abs(_e) > 1 || Math.abs(ge) > 1 || !vt.inBounds) && (we = !0, f(gt));
      }
      function gt() {
        if (we) {
          _e *= V, ge *= V, ae += _e, fe += ge;
          var Z = I();
          if (Math.abs(_e) > Ce || Math.abs(ge) > Ce || !Z.inBounds) {
            if (z) {
              var Y = 2.5;
              if (Z.x !== 0)
                if (Z.x * _e <= 0)
                  _e += Z.x * l;
                else {
                  var ue = Z.x > 0 ? Y : -Y;
                  _e = (Z.x + ue) * u;
                }
              if (Z.y !== 0)
                if (Z.y * ge <= 0)
                  ge += Z.y * l;
                else {
                  var ue = Z.y > 0 ? Y : -Y;
                  ge = (Z.y + ue) * u;
                }
            } else
              Z.x !== 0 && (Z.x > 0 ? ae = R : ae = F, _e = 0), Z.y !== 0 && (Z.y > 0 ? fe = W : fe = oe, ge = 0);
            j(), f(gt);
          } else
            we = !1;
        }
      }
    };
    n.exports = a;
    var f = function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(d) {
        window.setTimeout(d, 1e3 / 60);
      };
    }();
    function h() {
      var d = !1;
      try {
        var _ = Object.defineProperty({}, "passive", {
          get: function() {
            d = !0;
          }
        });
        window.addEventListener("test", null, _);
      } catch {
      }
      return h = function() {
        return d;
      }, d;
    }
  });
})(Un, Un.exports);
var L0 = Un.exports;
const tn = /* @__PURE__ */ Er(L0), ee = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, o] of t)
    s[n] = o;
  return s;
}, D0 = {
  props: ["overLayerInfo"]
}, N0 = {
  class: "centerItem",
  id: "centerItem"
}, R0 = {
  key: 0,
  class: "centerPointTag",
  id: "centerPointTag"
};
function M0(e, t, s, n, o, r) {
  return E(), C("div", N0, [
    s.overLayerInfo != null ? (E(), C("div", R0, Q(s.overLayerInfo), 1)) : D("", !0)
  ]);
}
const I0 = /* @__PURE__ */ ee(D0, [["render", M0]]), V0 = {
  props: ["item", "index"],
  methods: {
    centerItem(e) {
      return e.center == null ? null : "left:" + "".concat(e.center[0] / 10 - 2, "%") + ";bottom:" + "".concat(95 - e.center[1] / 9, "%");
    }
  }
}, B0 = { class: "centerPointTag" }, j0 = /* @__PURE__ */ p("div", { class: "centerPointLine" }, null, -1), Z0 = /* @__PURE__ */ p("div", { class: "centerPoint" }, null, -1);
function F0(e, t, s, n, o, r) {
  return s.item.center != null && s.item.connect_type == "block" ? (E(), C("div", {
    key: 0,
    class: "centerItem",
    style: Ge(r.centerItem(s.item, s.index))
  }, [
    p("div", B0, Q(s.item.display_name), 1),
    j0,
    Z0
  ], 4)) : D("", !0);
}
const z0 = /* @__PURE__ */ ee(V0, [["render", F0]]), W0 = {
  props: ["loading", "currentFrame", "list", "pointerActive", "polygonVisibility"],
  methods: {
    centerInfoCard(e) {
      if (e.center == null) {
        this.$parent.overLayerInfo = e;
        let t = 20, s = event.pageX + t, n = event.pageY + t;
        document.getElementById("centerItem").style.display = "block", document.getElementById("centerItem").style.top = n + "px", document.getElementById("centerItem").style.left = s + "px";
      }
    },
    centerInfoCardLeave() {
      document.getElementById("centerItem").style.display = "none";
    },
    reFormatPoints(e) {
      return e;
    }
  }
}, H0 = {
  key: 0,
  id: "mySvg",
  ref: "svg",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1000 750"
}, U0 = ["onMousemove", "points", "onClick"];
function q0(e, t, s, n, o, r) {
  return !s.loading && s.list.frames[s.currentFrame] != null ? (E(), C("svg", H0, [
    (E(!0), C(ce, null, Ne(s.list.frames[s.currentFrame].layers, (l, u) => Ot((E(), C("g", { key: u }, [
      l.connect_type != "pulse" ? (E(), C("polygon", {
        key: 0,
        onMousemove: (a) => r.centerInfoCard(l),
        onMouseleave: t[0] || (t[0] = (...a) => r.centerInfoCardLeave && r.centerInfoCardLeave(...a)),
        points: r.reFormatPoints(l.points),
        onClick: (a) => this.$parent.selectedItem(l),
        class: ie(`layer currentLayer${u}`)
      }, null, 42, U0)) : D("", !0)
    ])), [
      [kt, !s.polygonVisibility && s.pointerActive]
    ])), 128))
  ], 512)) : D("", !0);
}
const K0 = /* @__PURE__ */ ee(W0, [["render", q0]]), sn = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20data-name='Layer%202'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20358.4%20366.84'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23f4f0ea;%20}%20.cls-1,%20.cls-2,%20.cls-3,%20.cls-4,%20.cls-5,%20.cls-6,%20.cls-7,%20.cls-8,%20.cls-9,%20.cls-10,%20.cls-11,%20.cls-12,%20.cls-13,%20.cls-14,%20.cls-15,%20.cls-16,%20.cls-17,%20.cls-18,%20.cls-19,%20.cls-20,%20.cls-21,%20.cls-22,%20.cls-23,%20.cls-24,%20.cls-25,%20.cls-26,%20.cls-27,%20.cls-28,%20.cls-29,%20.cls-30,%20.cls-31,%20.cls-32,%20.cls-33,%20.cls-34,%20.cls-35,%20.cls-36,%20.cls-37,%20.cls-38,%20.cls-39,%20.cls-40,%20.cls-41,%20.cls-42,%20.cls-43,%20.cls-44,%20.cls-45,%20.cls-46,%20.cls-47,%20.cls-48,%20.cls-49,%20.cls-50,%20.cls-51,%20.cls-52,%20.cls-53,%20.cls-54,%20.cls-55,%20.cls-56,%20.cls-57,%20.cls-58%20{%20stroke-width:%200px;%20}%20.cls-2%20{%20fill:%20%23998363;%20}%20.cls-3%20{%20fill:%20%23b58d75;%20}%20.cls-4%20{%20fill:%20%23423f37;%20}%20.cls-5%20{%20fill:%20%2333aeff;%20}%20.cls-6%20{%20fill:%20%2339362f;%20}%20.cls-7%20{%20fill:%20%235cbeff;%20}%20.cls-8%20{%20fill:%20%232d1e0c;%20}%20.cls-59%20{%20clip-path:%20url(%23clippath-2);%20}%20.cls-9%20{%20fill:%20%23f7e041;%20}%20.cls-10%20{%20fill:%20%23ffe6c6;%20}%20.cls-11%20{%20fill:%20%23ae392e;%20}%20.cls-12%20{%20fill:%20%232a272a;%20}%20.cls-13%20{%20fill:%20%231a5780;%20}%20.cls-14%20{%20fill:%20%23e84c3d;%20}%20.cls-15%20{%20fill:%20%23544d53;%20}%20.cls-16%20{%20fill:%20%2347443b;%20}%20.cls-17%20{%20fill:%20%23332e25;%20}%20.cls-18%20{%20fill:%20none;%20}%20.cls-60%20{%20clip-path:%20url(%23clippath-1);%20}%20.cls-61%20{%20clip-path:%20url(%23clippath-4);%20}%20.cls-19%20{%20fill:%20%23e9662c;%20}%20.cls-20%20{%20fill:%20%23b84b4a;%20}%20.cls-21%20{%20fill:%20%23e3d6c3;%20}%20.cls-22%20{%20fill:%20%23dadada;%20}%20.cls-23,%20.cls-26,%20.cls-51%20{%20fill:%20%23fff;%20}%20.cls-24%20{%20fill:%20%232b2923;%20}%20.cls-25%20{%20fill:%20%23f9a2a1;%20}%20.cls-26%20{%20opacity:%20.2;%20}%20.cls-26,%20.cls-51,%20.cls-58%20{%20isolation:%20isolate;%20}%20.cls-27%20{%20fill:%20%23ffd6a0;%20}%20.cls-28%20{%20fill:%20%2300a133;%20}%20.cls-29%20{%20fill:%20%23fff23f;%20}%20.cls-30%20{%20fill:%20%23e6c595;%20}%20.cls-31%20{%20fill:%20%23f0c184;%20}%20.cls-32%20{%20fill:%20%2382684d;%20}%20.cls-33%20{%20fill:%20%23d4aa74;%20}%20.cls-34%20{%20fill:%20%235dba48;%20}%20.cls-35%20{%20fill:%20%23d1d1d1;%20}%20.cls-62%20{%20clip-path:%20url(%23clippath);%20}%20.cls-36%20{%20fill:%20%231d1b18;%20}%20.cls-37%20{%20fill:%20%23f78381;%20}%20.cls-38%20{%20fill:%20%23ffdeb3;%20}%20.cls-39%20{%20fill:%20%23f08f8d;%20}%20.cls-40%20{%20fill:%20%237d737b;%20}%20.cls-63%20{%20clip-path:%20url(%23clippath-3);%20}%20.cls-41%20{%20fill:%20%23ede6dc;%20}%20.cls-42%20{%20fill:%20%233f3a3e;%20}%20.cls-43%20{%20fill:%20%23dca700;%20}%20.cls-44%20{%20fill:%20%23007926;%20}%20.cls-45%20{%20fill:%20%23bd9767;%20}%20.cls-46%20{%20fill:%20%23ad9470;%20}%20.cls-47%20{%20fill:%20%23ad8b66;%20}%20.cls-64%20{%20clip-path:%20url(%23clippath-5);%20}%20.cls-48%20{%20fill:%20%23ffd800;%20}%20.cls-49%20{%20fill:%20%23403b32;%20}%20.cls-50%20{%20fill:%20%23454139;%20}%20.cls-51,%20.cls-58%20{%20opacity:%20.1;%20}%20.cls-52%20{%20fill:%20%23a4c639;%20}%20.cls-53%20{%20fill:%20%232683bf;%20}%20.cls-54%20{%20fill:%20%23f0d0a1;%20}%20.cls-55%20{%20fill:%20%23a5b7c6;%20}%20.cls-56%20{%20fill:%20%23f56462;%20}%20.cls-57%20{%20fill:%20%23cfc3b1;%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3cpolygon%20class='cls-18'%20points='243.04%20126.13%20218.49%20111.95%20218.49%2055.97%20243.04%2070.15%20243.04%20126.13'/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-1'%3e%3cellipse%20class='cls-18'%20cx='260.63'%20cy='162.52'%20rx='39.32'%20ry='69.5'%20transform='translate(-42.83%20115.03)%20rotate(-23.05)'/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-2'%3e%3cpolygon%20class='cls-18'%20points='272.88%20143.35%20248.32%20129.18%20248.32%2073.19%20272.88%2087.37%20272.88%20143.35'/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-3'%3e%3cellipse%20class='cls-18'%20cx='260.63'%20cy='162.52'%20rx='39.32'%20ry='69.5'%20transform='translate(-42.83%20115.03)%20rotate(-23.05)'/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-4'%3e%3cpolygon%20class='cls-18'%20points='302.71%20160.58%20278.16%20146.41%20278.16%2090.42%20302.71%20104.6%20302.71%20160.58'/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-5'%3e%3cellipse%20class='cls-18'%20cx='260.63'%20cy='162.52'%20rx='39.32'%20ry='69.5'%20transform='translate(-42.83%20115.03)%20rotate(-23.05)'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20id='Layer_1-2'%20data-name='Layer%201'%3e%3cg%20id='Objects'%3e%3cg%3e%3cpolygon%20class='cls-41'%20points='343.86%20247.59%20343.86%20105.27%20190.61%2016.79%20190.61%20159.11%20343.86%20247.59'/%3e%3cpolygon%20class='cls-21'%20points='13.63%20261.23%2013.63%20118.91%20190.61%2016.79%20190.61%20159.11%2013.63%20261.23'/%3e%3cg%3e%3cpolygon%20class='cls-54'%20points='13.63%20261.23%20190.59%20159.06%20343.85%20247.54%20166.88%20349.71%2013.63%20261.23'/%3e%3cg%3e%3cpolygon%20class='cls-30'%20points='158.55%20344.9%20335.52%20242.73%20338.43%20244.41%20161.47%20346.58%20158.55%20344.9'/%3e%3cpolygon%20class='cls-30'%20points='144.6%20336.85%20321.57%20234.68%20324.48%20236.36%20147.52%20338.53%20144.6%20336.85'/%3e%3cpolygon%20class='cls-30'%20points='130.65%20328.79%20307.62%20226.62%20310.53%20228.3%20133.57%20330.48%20130.65%20328.79'/%3e%3cpolygon%20class='cls-30'%20points='116.7%20320.74%20293.66%20218.57%20296.58%20220.25%20119.61%20322.42%20116.7%20320.74'/%3e%3cpolygon%20class='cls-30'%20points='102.75%20312.68%20279.71%20210.51%20282.63%20212.2%20105.66%20314.37%20102.75%20312.68'/%3e%3cpolygon%20class='cls-30'%20points='88.8%20304.63%20265.76%20202.46%20268.68%20204.14%2091.71%20306.31%2088.8%20304.63'/%3e%3cpolygon%20class='cls-30'%20points='74.85%20296.57%20251.81%20194.4%20254.73%20196.09%2077.76%20298.26%2074.85%20296.57'/%3e%3cpolygon%20class='cls-30'%20points='60.89%20288.52%20237.86%20186.35%20240.77%20188.03%2063.81%20290.2%2060.89%20288.52'/%3e%3cpolygon%20class='cls-30'%20points='46.94%20280.46%20223.91%20178.29%20226.82%20179.98%2049.86%20282.15%2046.94%20280.46'/%3e%3cpolygon%20class='cls-30'%20points='32.99%20272.41%20209.96%20170.24%20212.87%20171.92%2035.91%20274.09%2032.99%20272.41'/%3e%3cpolygon%20class='cls-30'%20points='19.04%20264.35%20196%20162.18%20198.92%20163.87%2021.95%20266.04%2019.04%20264.35'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-55'%20points='68.23%20218.1%2029.63%20240.38%2029.63%20130.81%2068.23%20108.52%2068.23%20218.1'/%3e%3cpolygon%20class='cls-22'%20points='68.23%20213.73%2068.02%20213.61%2029.63%20235.77%2029.63%20240.38%2068.23%20218.1%2068.23%20213.73'/%3e%3cpolygon%20class='cls-22'%20points='68.23%20179.1%2068.02%20178.97%2029.63%20201.14%2029.63%20205.75%2068.23%20183.46%2068.23%20179.1'/%3e%3cpolygon%20class='cls-22'%20points='68.23%20133.79%2068.02%20133.66%2029.63%20155.83%2029.63%20160.44%2068.23%20138.15%2068.23%20133.79'/%3e%3cpolygon%20class='cls-35'%20points='68.23%20138.11%2064.28%20135.82%2064.28%20110.8%2068.23%20108.52%2068.23%20138.11'/%3e%3cpolygon%20class='cls-35'%20points='47.09%20150.34%2043.13%20148.06%2043.13%20123.03%2047.09%20120.75%2047.09%20150.34'/%3e%3cpolygon%20class='cls-35'%20points='68.23%20218.07%2064.28%20215.78%2064.28%20190.76%2068.23%20188.48%2068.23%20218.07'/%3e%3cpolygon%20class='cls-35'%20points='47.09%20230.3%2043.13%20228.01%2043.13%20202.99%2047.09%20200.71%2047.09%20230.3'/%3e%3cpolygon%20class='cls-35'%20points='68.23%20183.5%2064.28%20181.21%2064.28%20145.41%2068.23%20143.13%2068.23%20183.5'/%3e%3cpolygon%20class='cls-35'%20points='47.09%20195.73%2043.13%20193.44%2043.13%20157.65%2047.09%20155.36%2047.09%20195.73'/%3e%3cpath%20class='cls-23'%20d='m50.82,113.54h0l-3.77,2.18h0l-21.19,12.23v119.64l46.14-26.64v-119.64l-21.18,12.23Zm-21.19,17.26l17.41-10.05v29.59l-17.41,10.05v-29.59Zm0,34.62l17.41-10.05v40.33l-17.41,10.05v-40.33Zm0,45.36l17.41-10.05v29.59l-17.41,10.05v-29.59Zm38.6,7.31l-17.41,10.05v-29.59l17.41-10.05v29.59Zm0-34.62l-17.41,10.05v-40.33l17.41-10.05v40.33Zm0-45.36l-17.41,10.05v-29.59l17.41-10.05v29.59Z'/%3e%3c/g%3e%3cpolygon%20class='cls-57'%20points='13.63%20261.23%200%20253.36%200%20110.05%2013.63%20118.91%2013.63%20261.23'/%3e%3cpolygon%20class='cls-1'%20points='0%20110.05%20190.61%200%20358.4%2096.88%20343.86%20105.27%20190.61%2016.79%2013.63%20118.91%200%20110.05'/%3e%3cpolygon%20class='cls-57'%20points='358.4%2096.88%20358.4%20239.2%20343.85%20247.54%20343.85%20105.27%20358.4%2096.88'/%3e%3cpolygon%20class='cls-46'%20points='0%20253.36%200%20270.49%20166.88%20366.84%20166.88%20349.71%200%20253.36'/%3e%3cpolygon%20class='cls-2'%20points='166.88%20366.84%20358.4%20256.27%20358.4%20239.2%20166.88%20349.71%20166.88%20366.84'/%3e%3cg%3e%3cpath%20class='cls-6'%20d='m196.27,186.27c-7.02,4.05-17.63,4.49-23.71.98s-5.32-9.64,1.7-13.69c7.02-4.05,17.63-4.49,23.71-.98,6.08,3.51,5.32,9.64-1.7,13.69Z'/%3e%3cpath%20class='cls-4'%20d='m193.7,182.51c-5.38,3.1-13.51,3.44-18.17.75-4.66-2.69-4.07-7.39,1.3-10.49,5.38-3.1,13.51-3.44,18.17-.75,4.66,2.69,4.07,7.39-1.3,10.49Z'/%3e%3cpath%20class='cls-6'%20d='m185.26,177.65h0c-1.2,0-2.18-.98-2.18-2.18v-67.52h4.36v67.52c0,1.2-.98,2.18-2.18,2.18Z'/%3e%3cpath%20class='cls-38'%20d='m206.86,110.02l-3.6-26.95-35.99,3.64-3.48,26.23c-.1.44-.16.87-.17,1.31v.05s0,0,0,0c-.1,2.96,1.63,5.8,5.28,7.9,7.83,4.52,21.5,3.95,30.55-1.27,5.39-3.11,7.91-7.17,7.42-10.9Z'/%3e%3cpath%20class='cls-10'%20d='m197.04,91.95c-7.51,4.34-18.88,4.81-25.38,1.05-6.51-3.76-5.69-10.32,1.82-14.66,7.51-4.34,18.88-4.81,25.38-1.05,6.51,3.76,5.69,10.32-1.82,14.66Z'/%3e%3cpath%20class='cls-27'%20d='m194.03,90.21c-5.59,3.23-14.04,3.58-18.88.78-4.84-2.79-4.23-7.68,1.36-10.9,5.59-3.23,14.04-3.58,18.88-.78,4.84,2.79,4.23,7.67-1.36,10.9Z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-6'%20points='125.61%20126.17%20108.17%20136.24%20108.17%20106.46%20125.61%2096.39%20125.61%20126.17'/%3e%3cpolygon%20class='cls-24'%20points='125.61%2096.39%20108.17%20136.24%20125.61%20126.17%20125.61%2096.39'/%3e%3cpolygon%20class='cls-19'%20points='124.03%20124.37%20109.74%20132.62%20109.74%20108.26%20124.03%20100.01%20124.03%20124.37'/%3e%3cpolygon%20class='cls-36'%20points='108.17%20106.46%20106.55%20105.4%20123.72%2095.49%20125.61%2096.39%20108.17%20106.46'/%3e%3cpolygon%20class='cls-36'%20points='108.17%20136.24%20106.55%20135.01%20106.55%20105.4%20108.17%20106.46%20108.17%20136.24'/%3e%3cg%3e%3cpath%20class='cls-23'%20d='m113.04,114.86v3.05l-.45.26v-4.22l.62-.36.51,2.23v-2.52l.44-.26v4.22l-.51.29-.62-2.7Z'/%3e%3cpath%20class='cls-23'%20d='m115.03,114.33l.68-.39v.6l-.68.39v1.24l.86-.5v.6l-1.35.78v-4.22l1.35-.78v.6l-.86.5v1.18Z'/%3e%3cpath%20class='cls-23'%20d='m116.94,114.88l.38-3.66.46-.26-.49,4.5-.74.43-.49-3.93.5-.29.38,3.22Z'/%3e%3cpath%20class='cls-23'%20d='m118.51,112.32l.68-.39v.6l-.68.39v1.24l.86-.5v.6l-1.35.78v-4.22l1.35-.78v.6l-.86.5v1.17Z'/%3e%3cpath%20class='cls-23'%20d='m120.72,113.49c-.03-.09-.04-.15-.04-.49v-.66c0-.39-.1-.48-.32-.35l-.17.1v1.72l-.5.29v-4.22l.75-.43c.51-.3.74-.11.74.54v.33c0,.43-.1.78-.32,1.04.25,0,.33.27.33.71v.65c0,.21,0,.35.05.48l-.51.29Zm-.54-3.3v1.29l.19-.11c.18-.11.3-.28.3-.62v-.42c0-.3-.08-.39-.25-.29l-.24.14Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-23'%20d='m113.23,120.84l.61-.35v1.17c0,.59-.22,1.06-.65,1.3-.43.25-.65.04-.65-.55v-1.92c0-.59.22-1.06.65-1.3.43-.25.65-.04.65.55v.36l-.41.24v-.4c0-.26-.09-.31-.23-.23-.14.08-.23.23-.23.49v1.99c0,.26.09.31.23.23.14-.08.23-.23.23-.49v-.68l-.2.11v-.53Z'/%3e%3cpath%20class='cls-23'%20d='m114.12,118.68l.44-.25v3.7l-.44.25v-3.7Z'/%3e%3cpath%20class='cls-23'%20d='m115.53,120.88l.33-3.21.4-.23-.43,3.94-.65.38-.43-3.45.44-.25.33,2.82Z'/%3e%3cpath%20class='cls-23'%20d='m116.9,118.64l.6-.35v.53l-.6.35v1.08l.75-.43v.53l-1.19.69v-3.7l1.19-.69v.53l-.75.43v1.03Z'/%3e%3cpath%20class='cls-23'%20d='m118.96,115.89v2.85c0,.26.09.31.23.23.14-.08.23-.23.23-.49v-2.85l.41-.24v2.81c0,.59-.22,1.06-.65,1.3s-.65.04-.65-.55v-2.81l.43-.25Z'/%3e%3cpath%20class='cls-23'%20d='m121.41,115.39v.48c0,.59-.21,1.04-.65,1.29l-.21.12v1.39l-.43.25v-3.7l.64-.37c.43-.25.65-.05.65.54Zm-.86.11v1.25l.21-.12c.14-.08.21-.21.21-.47v-.55c0-.26-.07-.3-.21-.23l-.21.12Z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-26'%20points='109.74%20130.88%20124.03%20103.57%20124.03%20100.01%20115.3%20105.05%20109.74%20115.67%20109.74%20130.88'/%3e%3cpolygon%20class='cls-26'%20points='124.03%20117.73%20124.03%20107.77%20111.59%20131.55%20119.06%20127.24%20124.03%20117.73'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-6'%20points='243.04%20126.13%20218.49%20111.95%20218.49%2055.97%20243.04%2070.15%20243.04%20126.13'/%3e%3cpolygon%20class='cls-17'%20points='218.49%2055.97%20220.46%2054.84%20245.01%2069.01%20243.04%2070.15%20218.49%2055.97'/%3e%3cpolygon%20class='cls-24'%20points='243.04%20126.13%20245.01%20124.99%20245.01%2069.01%20243.04%2070.15%20243.04%20126.13'/%3e%3cpolygon%20class='cls-6'%20points='272.88%20143.35%20248.32%20129.18%20248.32%2073.19%20272.88%2087.37%20272.88%20143.35'/%3e%3cpolygon%20class='cls-17'%20points='248.32%2073.19%20250.29%2072.06%20274.85%2086.24%20272.88%2087.37%20248.32%2073.19'/%3e%3cpolygon%20class='cls-24'%20points='272.88%20143.35%20274.85%20142.22%20274.85%2086.24%20272.88%2087.37%20272.88%20143.35'/%3e%3cpolygon%20class='cls-6'%20points='302.71%20160.58%20278.16%20146.41%20278.16%2090.42%20302.71%20104.6%20302.71%20160.58'/%3e%3cpolygon%20class='cls-17'%20points='278.16%2090.42%20280.13%2089.29%20304.68%20103.46%20302.71%20104.6%20278.16%2090.42'/%3e%3cpolygon%20class='cls-24'%20points='302.71%20160.58%20304.68%20159.45%20304.68%20103.46%20302.71%20104.6%20302.71%20160.58'/%3e%3cg%20class='cls-62'%3e%3cg%3e%3cellipse%20class='cls-51'%20cx='260.63'%20cy='162.52'%20rx='43.77'%20ry='77.36'%20transform='translate(-42.83%20115.03)%20rotate(-23.05)'/%3e%3cellipse%20class='cls-5'%20cx='260.63'%20cy='162.52'%20rx='39.32'%20ry='69.5'%20transform='translate(-42.83%20115.03)%20rotate(-23.05)'/%3e%3cg%20class='cls-60'%3e%3cg%3e%3cg%3e%3cpath%20class='cls-34'%20d='m195.94,43.27l-4.72-8.3c-1.01-1.78-2.5-2.77-3.62-2.43l-1.55.48-1.32-2.64h0c-.7.53-.76,1.99-.13,3.39l.56,1.25c.26.57.22,1.17-.09,1.35h0c-.28.16-.7-.07-.98-.56l-2.04-3.46h0c-.56.73-.44,2.24.27,3.52l.72,1.3c.32.58.34,1.27.03,1.51h0c-.26.21-.67.03-.98-.42h0c-.48-.69-1.12-.91-1.47-.52h0c-.95,1.08-.88,3.44.18,5.56h0c.4.8.28,1.65-.24,1.7l-4.24.45c-.47.05-.59.82-.23,1.54h0c.19.38.47.67.74.76l.45.15c.41.14.66-.27.54-.87h0l3.08-.32.88,2.07.18-.08c.88-.38,1.15-1.85.62-3.45h0l2-.92c.17-.08.41.1.54.4h0c.12.28.1.57-.05.66l-1.01.64h0c.37.86,1.08,1.36,1.53,1.07l.84-.53h0c.44,1,1.26,1.57,1.79,1.24l.25-.15.73,1.54c.94,1.97,1,4.12.16,5.16h0l2,10.25-.99,1.48c-1.67,2.5-1.28,7.28.93,11.43h0c-.64,1.07-.6,2.9.1,4.69l2.12,5.47h0c.43-.57.46-1.62.09-2.7l-.94-2.72c-.34-.97-.28-1.92.14-2.38h0l2.47,7.2-.05,1.28c-.05,1.23.31,2.66.99,3.92h0c.59,1.11,1.37,2.01,2.2,2.54l1.71,1.1h0c.48,1.25,1.28,2.33,2.16,2.89l1.07.69.41,2.35c.24,1.38,1.06,2.74,2.02,3.36h0c.33-.41.96-.21,1.43.47l.36.52-.02.38c-.05,1.42-.69,2.36-1.66,2.46h0c-.1,2.44.34,5.18,1.26,7.89l.52,1.53c.59,1.74,1.42,3.4,2.43,4.86h0l-.3,7.79h0c-.92.51-1.48,1.7-1.54,3.27v.24s1.26.82,1.26.82l.38,4.02h0c-.31,2.52-.23,5.33.26,8.26l.43,2.6c.18,1.09.82,2.17,1.58,2.66h0c.95.61,1.76.1,1.8-1.13v-.24h0c-.77-.46-1.38-1.67-1.34-2.68l.05-1.24h0c.56.36,1.03.06,1.06-.66l.04-1.13-1.33-.85.11-2.76c.06-1.48,1.03-2.09,2.17-1.36h0c.52.33.96.06.98-.62l.08-2.09,1.25.8c.85.55,1.57.09,1.61-1.01h0c.67.43,1.24.07,1.27-.8l.06-1.56c.05-1.29.89-1.82,1.89-1.18h0c1.18.76,2.19.13,2.25-1.41l.17-4.31,1.97-1.24h0c.08-2.04-1.12-4.5-2.68-5.51l-1.61-1.04-2-2.87h0c.08-2.01-1.11-4.45-2.65-5.44l-.8-.52-1.96-4.02-2.12-1.37h0c-.72-1.48-1.73-2.71-2.81-3.4l-.99-.64-.1,2.47-1.85-1.73-.92.1h0c-.56-.81-.89-1.85-.86-2.73l.11-2.76-2.44-1.57h0c.03-.72.35-1.2.84-1.25h0c.53-.05.74-.79.49-1.65l-.14-.45-3.46.96-.41-.95c-.42-.98-.24-1.94.38-2h0l.12-3.16h0c1.48-.42,3.33.4,4.97,2.22l.39.43-.14,3.5h0c.92.6,1.71.1,1.76-1.1l.12-3.08,1.6-.58c.92-.34,1.5-1.39,1.55-2.86h0l.69.45c1.3.84,2.42.14,2.48-1.56h0l1.3.84c1.21.78,2.24.13,2.3-1.45h0l-1.58-1.02h0c.05-1.18.82-1.67,1.73-1.08l3.05,1.97.04-1.13c.07-1.85-1.02-4.09-2.44-5h0l.11-2.9c.03-.81-.45-1.79-1.07-2.19h0l-.1,2.67h0c-.62-.4-1.1-1.38-1.07-2.19l.02-.6c.07-1.87-1.03-4.13-2.46-5.06h0l-.24,6.17-2.05-1.32-.16,4.1h0c-.88-.57-1.55-1.95-1.51-3.09l.12-3.04-2.54-1.64.12-3.18c.11-2.83,1.96-4,4.13-2.6h0c1.51.97,2.79.17,2.86-1.8l.06-1.45-2.82-.51.07-1.77h0c-.45-.29-.79-.99-.77-1.57l.11-2.89h0c-.88-.57-1.62-.1-1.67,1.04l-.03.83c-.06,1.54-1.06,2.17-2.24,1.41h0l.1-2.67-1.12-.72c-.68-.44-1.27-.08-1.3.82h0l-2.12-2.52.33-.83-4.29-6.6c-.88-1.36-2.11-1.87-2.81-1.16h0Z'/%3e%3cpath%20class='cls-34'%20d='m212.04,123.14l-.36-.23c-1.75-1.13-3.09-3.88-3-6.16l.07-1.79,3.52,2.27-.23,5.91Z'/%3e%3cpath%20class='cls-34'%20d='m205.18,52.48l-2.62-3.35h0c.33-2.44,2.32-2.94,4.24-1.06l.06.06.65-.07c.83-.09,1.85.88,2.34,2.23h0l-1.94.44-.08,2.15-.63-.55c-.82-.72-1.66-.65-2.02.15h0Z'/%3e%3cpath%20class='cls-34'%20d='m208.83,46.95l-.56-.36-2.83-4.08h0c.62-.96,1.9-.66,2.93.68l.58.77,2.29,1.48h0c-.06,1.65-1.14,2.33-2.41,1.51Z'/%3e%3cpath%20class='cls-34'%20d='m212.53,56.62l.1-.16c.77-1.28,1.89-2.04,3.24-2.18h0l2.35,5.32c1.06,2.39,1.59,4.93,1.5,7.15h0l.51.8c.63.99.79,2.25.37,2.89h0l-1.85-2.66-.29.43c-.24.34-.19,1.01.12,1.59h0c.37.69.36,1.48-.02,1.73l-.95.63-2.48-5.76h0c1.49-.96,1.74-3.82.59-6.7l-.22-.56h0c-.73.32-1.76-.33-2.43-1.55l-.53-.96Z'/%3e%3cpath%20class='cls-34'%20d='m213.97,47.09h0c.91.81,1.48,2.33,1.28,3.44h0c-.1.57.15,1.35.59,1.85h0c.6.69,1.27,1.05,1.85.99l.52-.06h0c.35,1.18-.09,2.07-.88,1.81h0c-.22-.07-.44-.23-.65-.45l-.5-.54c-1.74-1.88-2.7-4.93-2.21-7.04h0Z'/%3e%3cpath%20class='cls-34'%20d='m217.41,48.73l-1.97-2.75,2.11-3.36h0c1.09,1.52,1.42,3.61.76,4.67l-.9,1.43Z'/%3e%3cpath%20class='cls-34'%20d='m221.92,51.25l-1.45,1.06c-.87.64-2.27-.14-3.16-1.77h0l3.02-2.59h0c-.63-1.35-.56-2.79.15-3.26h0c2.21-1.46,5.67.7,7.73,4.84l.2.39-4.11,2.32-1.11-2.21c-.36-.71-.95-1.07-1.33-.83h0c-.35.23-.4.92-.12,1.6l.18.44Z'/%3e%3cpath%20class='cls-34'%20d='m225.94,54.23l-.21-.14c-2.39-1.54-4.42-.26-4.54,2.85h0l3.85,2.48-.3,8.64c-.12,3.57,1.84,7.88,4.54,9.97h0l.16-4.21h0c4.04,2.61,7.49.44,7.69-4.83l.15-3.92h0c1.91,1.23,3.54.21,3.63-2.28l.02-.59-3.23-2.08h0c.1-2.57-1.42-5.69-3.39-6.97l-.4-.26c-.95-.62-1.77-.11-1.82,1.14h0l-3.75-2.42-2.41,2.61Z'/%3e%3cpath%20class='cls-34'%20d='m239.34,83.21l-4.76-3.07h0c-.07,1.81,1,3.99,2.38,4.89l.43.28.06-1.63.56.36c.69.45,1.28.08,1.32-.83h0Z'/%3e%3cpath%20class='cls-34'%20d='m236.72,94.74l-2.74-1.77h0c-.04,1.14.63,2.52,1.51,3.09l.11.07-.05,1.43-1.56.98,1.45.93c.77.49,1.42.09,1.46-.92l.06-1.66.46.96-.1,2.56h0c.94.6,1.74.1,1.79-1.12v-.34s-.64-1.35-.64-1.35l.08-2.08c.05-1.3-.72-2.88-1.71-3.52h0l-.11,2.74Z'/%3e%3cpath%20class='cls-34'%20d='m247.17,112.13l-8.44-2.84h0c.04,2.22-1.07,3.52-2.67,3.13l-.46-.12-1.27,6.52h0c1.4,4.92,4.71,9.16,8.05,10.31l1.46.5.67,2.11h0c.79.38,1.48,1.58,1.53,2.66l.15,3.22,1.09,1.57.65,3.83h0c-1.19.13-1.76,1.66-1.33,3.6l.71,3.23-.45,1.44,1.41,3.57.25,3.8,1.6,1.03c2.53,1.63,4.69.28,4.82-3.02h0c1,.65,1.86.11,1.91-1.2l.05-1.18,2.16-1.35.25-6.51,5.46-3.43c.57-.36.23-1.81-.53-2.31l-1.45-.94c-1.23-.79-2.32-2.4-2.83-4.19l-2.51-8.76c-.36-1.24-.04-2.29.72-2.37h0l3.05,9.87-.08,2.14h0c.85,1.22,1.93,1.83,2.77,1.55l5.08-1.69-.16-.34c-.95-2.05-2.64-3.21-3.76-2.59h0l-.8-1.64c-.91-1.86-.83-3.88.17-4.51h0l.78,1.6c1.38,2.83,3.44,4.98,5.47,5.69h0l2.32,4.76,1.49.96-.1,2.62,1.38,2.82-.17,4.48h0c1.37.88,2.54.15,2.61-1.64l.09-2.4h0c1.19.77,2.21.13,2.27-1.43l.04-.9,2.08,1.34-.02.56c-.08,2.05,1.13,4.54,2.71,5.56h0l-.13,3.27c-.1,2.55,1.41,5.65,3.37,6.91h0v-.09c.07-1.76-.59-3.85-1.72-5.49h0l.11-2.75,1.98,4.07h0c1.06.68,1.96.12,2.02-1.26v-.17c.07-1.49-.82-3.31-1.96-4.04h0l.13-3.38h0c.65,1.4,1.6,2.56,2.6,3.21l.09.06c1.94,1.25,3.58.2,3.66-2.33.06-2.01.14-3.92.14-3.92l-1.17-2.4.11-.29c.25-.66.11-1.68-.36-2.56h0l-.91.53h0c-.43-1.61-.06-2.98.88-3.23l.2-.05-.07,1.69h0c.67.43,1.24.07,1.27-.8v-.11s.81.52.81.52l-.12,3.2.84.54-.1,2.67h0c.88.56,1.62.1,1.67-1.05l.08-2.1-1.5-.97.03-.75c.06-1.64,1.13-2.31,2.39-1.5h0l.33-.37c1.7-1.87,1.82-5.78.29-9.68h0l-2.33-1.51h0c.15-3.8,2.63-5.36,5.54-3.48l.43.28,2.07-4.71-.31,8.12c-.08,2.09,1.13,4.62,2.73,5.69h0l.13-3.35-.22-1.1c-.93-4.58.84-7.82,3.91-7.12h0l.03-.68c.08-2.12,1.46-2.99,3.09-1.94h0l2.57-1.62h0c-.6-1.23-1.62-1.88-2.28-1.47l-.74.47-5.16-7.43-2.2-1.42-.91.1c-2.52.26-5.49-1.31-8.1-4.31h0l-3.29-2.12-1.36-2.78-2.72-1.76c-2.39-1.54-4.42-.26-4.54,2.85h0l-2.9-1.87c-2.39-1.54-4.23-5.31-4.11-8.43h0l-3.98-2.57c-2.17-1.4-4.02-.24-4.13,2.6h0c-.11,2.83-1.96,4-4.13,2.6l-1.99-1.28-.08,2.2c-.1,2.52-1.74,3.56-3.68,2.31h0l-4.45,2.79-1.5-4.73,2.29,1.48h0c.08-2.06-1.13-4.55-2.71-5.56l-1.34-.86.07-1.86-.48-.31c-2.96-1.91-5.48-.33-5.63,3.54h0l-4.1,2.57h0c.77,1.89,2.22,3.19,3.4,3.07h.13s-.11,2.77-.11,2.77h0c1.24.8,2.3.14,2.36-1.48l.16-4.23h0c.86.55,1.52,1.91,1.48,3.03l-.08,2.09,2.6.4h0c.18.91-.17,1.55-.77,1.43l-2.1-.45h0c-.08,2.12-1.46,2.99-3.09,1.94l-.61-.39.07-1.92h0c-.71-.46-1.31-.08-1.35.85v.24s-.38-.24-.38-.24c-1.46-.94-2.71-.16-2.79,1.75h0l-1.64-1.06v.15c-.06,1.29.7,2.85,1.69,3.48h0c-.03.87-.6,1.23-1.27.8l-2.93-1.89-.04.92c-.03.7.38,1.54.92,1.88h0c-.06,1.54.85,3.41,2.03,4.17h0c.54.35.99.06,1.02-.64l.05-1.18h0c1.08.7,2.01.12,2.06-1.29v-.26s1.97,1.26,1.97,1.26h0c-.06,1.43.79,3.17,1.89,3.88l.61.39-.04,1.13-.37-.12c-.49-.15-.78.34-.64,1.05h0l2.11.43.17-4.32h0c.55.35.98,1.21.98,1.94v1.67c.01,1.17.46,2.52,1.2,3.58l.31.45.78-1.45h0c1.04,1.91,2.53,3.23,3.9,3.47l.31.05.3,1.43c.26,1.25-.19,2.16-1.02,2.04l-1.54-.23-3.35-4.82h0c-1.03.71-2.56.18-3.86-1.34l-1.35-1.59.18-2.72Z'/%3e%3cpath%20class='cls-34'%20d='m252.32,71.19l-1.64-1.06c-1.69-1.09-3.12-.19-3.21,2.01h0c-.06,1.58.87,3.49,2.08,4.27h0l.13-3.27h0c1.39.89,2.56.15,2.64-1.65v-.3Z'/%3e%3cpath%20class='cls-34'%20d='m263.26,90.82h0c-.93-1.91-1-4.01-.16-5l.12-.14,1.55.31,1.08-.68h0c-.82-1.68-2.21-2.58-3.11-2.01l-1.9,1.19c-1.06.66-1.14,2.79-.18,4.76h0c.69,1.42,1.88,2.14,2.6,1.56h0Z'/%3e%3cpath%20class='cls-34'%20d='m260.53,157.13l-1.61,2.08h0c.96,1.38,2.24,1.77,2.87.87l.86-1.21.13-.07c1.08-.57,1.45-2.35.9-4.39h0l-1.49.94h0c-.95-.92-1.87-.39-1.74.99l.07.79Z'/%3e%3cpath%20class='cls-34'%20d='m276.92,152l.4.81c.37.76,1,1.17,1.41.91h0l-.6-1.24.39-.25c.29-.18.31-.76.05-1.3h0l-1.65,1.05Z'/%3e%3cpath%20class='cls-34'%20d='m289.21,166.4l-.34-.22c-.89-.58-1.71-1.7-2.16-2.99l-1.53-4.35c-.11-.31.1-.47.29-.22l1.14,1.53c.99,1.32,1.75,2.93,2.17,4.58l.43,1.67Z'/%3e%3cpath%20class='cls-34'%20d='m288.91,167.88l1.31-.17h0c.26.57.64,1.05,1.05,1.31l.52.34.39-.24h0c.54.35.95,1.2.92,1.9v.08s-4.11-2.65-4.11-2.65c-.21-.13-.28-.55-.09-.57Z'/%3e%3cpath%20class='cls-34'%20d='m293.71,171.22l.77,1.57.67-.42h0c-.32-.82-.97-1.35-1.43-1.15h0Z'/%3e%3cpath%20class='cls-34'%20d='m292.78,161.51l-.04,1.13-1.58.99-.99-.64-.04.95c-.03.68.38,1.51.9,1.85h0c-.04.96.53,2.11,1.26,2.58h0c.95.61,1.75.1,1.8-1.13l.02-.56.81-.51.06-1.53.82-.52-.4-.74c-.71-1.32-1.79-2.09-2.62-1.88h0Z'/%3e%3cpath%20class='cls-34'%20d='m295.95,170.18v.12c-.03.59-.41.83-.87.54h0l.12-3.22c.03-.67.44-.98.95-.71l1.18.62.03-.81h0c.46.3.82,1.03.79,1.63h0c0,.25-.17.35-.36.23l-.99-.64c-.34-.22-.63-.04-.64.4l-.02.39.37-.04c.26-.03.58.24.77.66h0l-.9.29.25.42c.34.58.37,1.28.06,1.53h0l-.76-1.41Z'/%3e%3cpath%20class='cls-34'%20d='m299.41,170.12l.03-.85c.02-.51-.28-1.12-.67-1.38h0l-.03.85c-.02.51.28,1.12.67,1.38h0Z'/%3e%3cpath%20class='cls-34'%20d='m298.81,170.57l.24.16c.36.23.63.8.62,1.26h0l-.24-.16c-.36-.23-.63-.8-.62-1.26h0Z'/%3e%3cpath%20class='cls-34'%20d='m297.1,162.99l1.82,1.17h0c-.03.87-.6,1.23-1.27.8h0c-.33-.22-.59-.74-.58-1.18l.03-.79Z'/%3e%3cpath%20class='cls-34'%20d='m296.55,155.87l-.1,2.45h0c.6.38,1.15,1.06,1.55,1.88l.02.05c.41.85.38,1.77-.08,2.06h0l-1.8-2.36-1.14,1.38h0c-.3-.62-.34-1.31-.1-1.67l.83-1.24h0c-.46-1.34-.13-2.51.71-2.54h.1Z'/%3e%3cpath%20class='cls-34'%20d='m301.42,172.02l-1.1-.71.26-.31c.46-.54,1.41.19,1.68,1.29l.22.9.9-.1c.73-.08,1.61.49,2.3,1.48h0l-.04,1.14.13.08c1.04.67,1.84,2.31,1.79,3.67h0l.91,1.56c.31.54.39,1.19.17,1.53h0l-1-1.55c-.69-1.07-1.65-1.44-2.17-.83h0l-1.24-1.23.05-1.41-.92.3h0c-.31-.77-.2-1.52.24-1.68l.16-.05-.02-.07c-.33-1.09-.99-2.06-1.74-2.54h0l-.05.02c-.36.18-.9-.18-1.21-.83h0l.67-.67Z'/%3e%3cpath%20class='cls-34'%20d='m309.27,177.94l.29,1.3-.7.4.94.61c.41.26.75.04.77-.49h0c.02-.53-.29-1.17-.7-1.43l-.61-.39Z'/%3e%3cpath%20class='cls-34'%20d='m302.93,135.94l.08-1.97-1.15-4.73h0c-.07,1.92.24,4.06.91,6.2l.16.5Z'/%3e%3cpath%20class='cls-34'%20d='m302.08,139.01l-.86.54.36.74c1.07,2.2.98,4.59-.21,5.33h0c-.48.3-1.23-.18-1.66-1.07h0c-1.36.85-1.46,3.58-.24,6.09l.65,1.32.1-2.51c.04-1.11.68-1.68,1.53-1.36h0c1.48.57,2.45-.79,2.09-2.93l-.07-.43c-.3-1.78.09-3.26,1.02-3.84h0c-.66-1.52-1.9-2.38-2.7-1.88Z'/%3e%3cpath%20class='cls-34'%20d='m291.06,180.81l-.32,8.21.85.54c2.16,1.39,4.24,1.4,5.65.02h0l1.72,1.11h0c-.05,1.41.56,3.09,1.54,4.25l.68.81-.11,2.78,1.67,1.08c1.91,1.23,3.54.21,3.63-2.28h0l1.09.43c1.38.55,2.42-.36,2.5-2.17h0c.11-2.76-1.52-6.11-3.64-7.47h0l.17-4.29c.04-1.08-.6-2.39-1.42-2.92h0l-.09,2.22c-.04.93-.65,1.32-1.36.86h0c-.72-.46-1.27-1.59-1.23-2.53l.14-3.48-.85-.55c-.85-.55-1.58-.09-1.62,1.02h0l-2.38-1.53c-1.09-.7-2.02-.12-2.07,1.3h0c-.05,1.32-.86,1.93-1.86,1.42l-.68-.34c-1.08-.54-1.93.11-1.99,1.52Z'/%3e%3cpath%20class='cls-34'%20d='m304.17,202.38l-.13,3.38h0c-.99-.64-1.75-2.2-1.7-3.48l.04-1.05,1.79,1.15Z'/%3e%3cpath%20class='cls-34'%20d='m317.58,206.25l-.14,3.67,1.34.86h0c-.12,3.21-2.22,4.52-4.68,2.94l-.3-.2v.17c-.08,1.96-1.36,2.77-2.87,1.8h0l.08-2.17c.08-2.07,1.43-2.92,3.02-1.9l1.32.85.18-4.74c.05-1.4.97-1.98,2.04-1.28h0Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-52'%20d='m220.01,121.86c-1.2-.77-2.22-.13-2.29,1.43l-4.34-2.8v-.04c.09-2.16-1.19-4.77-2.85-5.84l.02-.64c.07-1.83-1.01-4.04-2.41-4.94l-.15,3.95c-.08,2.18,1.2,4.82,2.87,5.9l.14.09-.93,23.91c-.05,1.16.64,2.57,1.53,3.15l.29-7.56c.89.57,1.65.1,1.7-1.06l.2-5.03c.06-1.56.64-2.61,1.51-3.03l-.12,3,1.79,1.15.16-4.19c.28.1.57.24.86.43.35.23.7.37,1.02.44l-.04,1.06c2.46,1.59,4.55.27,4.68-2.94l.03-.76.12.08c.73.47,1.36.08,1.4-.88l.06-1.49-3.68-2.37-1.6-1.02Z'/%3e%3cpath%20class='cls-52'%20d='m207.87,84.42l2.13,1.38c1.69,1.09,3.12.19,3.21-2.01l-.17-.11c1.18.76,2.18.13,2.24-1.41l.17-4.44c-1.66-1.07-3.07-.18-3.15,1.98l-.13,3.31-4.15-2.68.08-2.1c.12-3.18-1.75-7.03-4.19-8.6l-4.35-2.81.13-3.35,2.24,1.45,4.1,2.64.15-3.99c.1-2.53-1.4-5.6-3.34-6.85l-.58-.37v.23c-.1,2.41-1.67,3.39-3.52,2.2l.05-1.21c.13-3.35-1.77-7.37-4.3-9.2l.23-5.86-4.79-3.08c-1.83-1.18-3.39-.24-3.55,2.09l-2.51-1.62c-1.34-.86-2.48-.15-2.54,1.6l4.93,3.18,4.58,2.96-.3,7.65c1.11.72,1.97,2.48,1.92,3.93l-.37,9.66-1.88-1.21-.1,2.69c-.13,3.31,1.64,7.24,4.07,9.27l-.03.84c-.08,2.16.75,4.62,2.05,6.48l-.05,1.15c-.08,2.15,1.18,4.75,2.83,5.81l.17-4.29.52.34.18-4.58,4.5,2.9c.98.63,1.82.11,1.87-1.17l-4.38-2.82.38-9.85,1.93,1.24-.04.93c-.11,2.85,1.57,6.3,3.76,7.71Z'/%3e%3cpath%20class='cls-52'%20d='m216.27,116.89l2.16,1.39.11-2.88-4.37-2.82c-.06,1.59.88,3.51,2.09,4.3Z'/%3e%3cpath%20class='cls-52'%20d='m252.2,117.78c-1.03.71-2.56.18-3.86-1.34l-1.35-1.59.18-2.72-8.44-2.84c.04,2.22-1.07,3.52-2.67,3.13l-.46-.12-1.27,6.52c1.4,4.92,4.71,9.16,8.05,10.31l1.46.5.67,2.11c.79.38,1.48,1.58,1.53,2.66l.15,3.22,1.09,1.57.65,3.83c-1.19.13-1.76,1.66-1.33,3.6l.71,3.23-.45,1.44,1.41,3.57.25,3.8,1.6,1.03c2.53,1.63,4.69.28,4.82-3.02,1,.65,1.86.11,1.91-1.2l.05-1.18,2.16-1.35.25-6.51,5.46-3.43c.57-.36.23-1.81-.53-2.31l-1.45-.94c-1.23-.79-2.32-2.4-2.83-4.19l-2.51-8.76c-.36-1.24-.04-2.29.72-2.37l-2.6-1.83-3.35-4.82Z'/%3e%3cpath%20class='cls-52'%20d='m262.08,155.94c-.72-.69-1.41-.3-1.32.75l.06.59-1.22,1.58c.73,1.04,1.69,1.34,2.17.66l.65-.91.1-.05c.82-.43,1.1-1.78.68-3.32l-1.13.71Z'/%3e%3cpath%20class='cls-52'%20d='m239.69,105.01l.35.23-.02.39c-.04,1.02.56,2.26,1.35,2.76.44.28.82.05.84-.53l.05-1.19.33.21c.63.41,1.17.1,1.24-.69l.04.02c.23.15.42.02.43-.27l.03-.73,3.02,1.95c.01,1.29.76,2.78,1.73,3.41l.28.18-.11,2.73c.38.25.71.04.73-.46l.07-1.82.1-2.45,1.74,1.12-.12,3.03-.03.81c-.04.96.53,2.11,1.26,2.58l.1-2.54.58.37v.1c-.03.65.35,1.43.85,1.75l3.07,1.98.06-1.6c.06-1.49-.82-3.3-1.96-4.03l-.19-.12h0c.06-1.66-.91-3.67-2.19-4.49l-4.06-2.62c-.68-.44-1.27-.14-1.4.66l-3.45-2.22c-.76-.49-1.42-.08-1.45.91l-.04,1.05-3.92-2.53-.02.54c-.02.56.31,1.24.74,1.52Z'/%3e%3cpath%20class='cls-52'%20d='m247.77,94.38l-.11,2.97c.81.52,1.5.09,1.54-.97l.21-5.38,1.11.71c1.16.75,2.06,2.59,2,4.1l2.31,1.49-.06,1.62c.76.49,1.42.08,1.45-.91l.07-1.69-1.38-.89.02-.41c.05-1.29-.71-2.85-1.7-3.48l.04-.98,3.6,2.32c.04-1-.55-2.2-1.31-2.7l-2.22-1.43.07-1.92c-2.52-1.62-4.66-.28-4.78,3-.01.35-.24.5-.52.32l-.16-.1-3.23,2.18.06.12c.76,1.67,2.13,2.59,3.01,2.02Z'/%3e%3cpath%20class='cls-52'%20d='m263.7,119.69c1.31.84,2.42.14,2.48-1.56l.18-4.59-2.36-1.52.16-4.02c-1.34-.86-2.48-.15-2.54,1.6l-.19,4.88,2.42,1.56-.14,3.65Z'/%3e%3cpath%20class='cls-52'%20d='m308.52,112.86c-.07,1.9-1.32,2.68-2.77,1.74l-1.94-1.25c.07-1.85-1.02-4.09-2.44-5l-2.85-1.84h0c-2.18,1.37-5.05,1.07-7.99-.82l-.16-.1-.18,4.65c-2.65-1.71-4.92-.29-5.05,3.17h0c-.16,4.23-1.61,7.46-4.02,8.97l-3.22,2.02c-1.19-2.44-2.85-4.46-4.62-5.6l-1.64-1.05-.43,11.22-5.86-3.78-.96-1.98-2.37-1.53c-1.56-1-2.88-.17-2.96,1.86l-2.57-.29,1.68,1.18,1.14.88,3.54,11.65,4.67-1.61c-.54-1.12-1.47-1.72-2.08-1.34l-.82.51c-1-2.05-1.52-4.29-1.44-6.23v-.18c.07-1.6,1.12-2.26,2.35-1.47,1.25,2.56,2.99,4.68,4.86,5.88l.6.38,2.48,5.09c.73-.46,1.89.95,1.84,2.22l-.1,2.55c.75.49,1.33,1.67,1.29,2.65l-.14,3.49c.62.4,1.14.07,1.17-.74l.11-2.88c.76-.48.82-2.01.13-3.42l-.27-.55.09-2.26c.46.94,1.1,1.72,1.79,2.16l5.52,3.56c-.07,1.71.39,3.68,1.27,5.49l2.7,5.55c.57.37,1.06.06,1.09-.68l.02-.38c.03-.75-.41-1.65-.98-2.02l-.98-2.02.21-5.38,1.82,1.17c-.03.85.47,1.88,1.12,2.3l1.07.69c1.38.89,2.56.15,2.63-1.65.09-2.24-1.24-4.96-2.96-6.07l.14-3.6c.08-2.15,1.49-3.03,3.14-1.97l.48.31c.99.64,1.84.11,1.89-1.18h0l.17.11c.88.57,1.63.1,1.67-1.05.09-2.31-1.28-5.12-3.05-6.26l.42-10.94,2.83,1.82c2.17,1.4,4.01.24,4.12-2.59h0l2.94,1.9-.36,9.32c-.04.93.52,2.07,1.23,2.53l.46-11.99.38.24c1.7,1.1,3.15.19,3.24-2.03l2.62,1.69c.65.42,1.21.07,1.24-.78l-6.92-4.46Z'/%3e%3cpath%20class='cls-52'%20d='m276.59,89.19l-2.19-1.41-.12,3.01,4.5,2.9c.07-1.66-.92-3.67-2.19-4.49Z'/%3e%3cpath%20class='cls-52'%20d='m274.32,99.98c-.08,2.06,1.13,4.55,2.71,5.56-.09,2.43,1.34,5.37,3.2,6.57l2.77,1.78.36-9.31-8.99-5.8-.04,1.19Z'/%3e%3cpath%20class='cls-52'%20d='m301.18,146.32h-.08c-.36.05-.8-.23-1.14-.73l-.17.57c-.32,1.09-.28,2.5.12,3.96l.27-1.88c.1-.69.53-1.03,1.09-.84h0c1.07.35,1.86-.4,1.91-1.82l.08-2.01c.05-1.22.29-2.3.72-3.16-.72-.32-1.38-.27-1.88.14l-.02.02.17.55c.33,1.1.47,2.18.4,3.15-.09,1.19-.64,1.96-1.47,2.05Z'/%3e%3cpath%20class='cls-52'%20d='m306.01,188.85l-.22-.14.04-.94c.04-.91-.5-2.02-1.2-2.47l-2.97-1.91c-.03.81.45,1.79,1.07,2.19l1.15.74-.03.88c-.03.68.37,1.49.89,1.83.87.56,1.54,1.93,1.49,3.06l-.02.58c-.05,1.16-.8,1.64-1.7,1.06l-.17,4.36c.7.45,1.3.08,1.33-.84l.04-1.08c1.56,1.01,2.89.17,2.97-1.86.08-2.02-1.11-4.47-2.66-5.47Z'/%3e%3cpath%20class='cls-52'%20d='m300.58,186.39l.08-2.09c.03-.84-.46-1.86-1.11-2.27l.11-2.97c-1.7-1.1-3.15-.19-3.24,2.03l-.04,1.09-1.5-.97c-1.29-.83-2.39-.14-2.45,1.54-.35-.23-.65-.04-.67.42l-.08,2.18c-.06,1.56.86,3.45,2.06,4.22h0l.09-2.29.57.37c.76.49,1.42.08,1.45-.91l3.17,2.04c.62.4,1.1,1.38,1.07,2.19-.04,1.12.62,2.48,1.48,3.03l.2-5.17c.04-.9-.5-2-1.19-2.44Z'/%3e%3c/g%3e%3cpath%20class='cls-34'%20d='m236.6,115.08h0l-1.37-.88-.9,4.62c.33,1.15.77,2.27,1.28,3.31h0s.04.07.06.1c.03.06.07.13.1.19,1.68,3.28,4.14,5.84,6.61,6.7l1.46.5.12.37h0c.05-1.34-.74-2.97-1.77-3.63l-.12-.08c-3.18-2.05-5.62-7.06-5.46-11.21Z'/%3e%3cpath%20class='cls-34'%20d='m254.21,120.67l-2.01-2.89c-1.03.71-2.56.18-3.86-1.34l-1.32-1.54h0c-.11,2.96,1.63,6.54,3.9,8.01l3.12,2.01.16-4.24Z'/%3e%3cpath%20class='cls-34'%20d='m264.94,142.78l-2.13-1.37c-2.4-1.55-4.44-.26-4.57,2.87h0c-.03.79.44,1.76,1.05,2.15h0l5.46-3.43c.08-.05.14-.12.19-.21Z'/%3e%3cpath%20class='cls-34'%20d='m251.61,160.32c1.83.36,3.22-1.03,3.32-3.65,1,.65,1.86.11,1.91-1.2l.05-1.18,2.16-1.35h0c-3.85-2.48-7.13-.42-7.32,4.6l-.11,2.79Z'/%3e%3cg%3e%3cpath%20class='cls-29'%20d='m211.35,123.75l-.34,8.85-.03.87-.38,9.82c-.02.45.25,1,.6,1.22l.42-10.76c.94.24,1.66-.43,1.71-1.76l.38-9.72c-1.23-.8-2.28-.14-2.35,1.47Z'/%3e%3cpath%20class='cls-29'%20d='m198.76,67.77l.13-3.28c.09-2.39-1.32-5.28-3.15-6.46l.19-4.88c.06-1.53-.85-3.39-2.02-4.14l-.05-.03.06-1.64.15-3.83-3.14-2.02c-1.63-1.05-3.02-.19-3.11,1.93l-4.24-2.73c-.69-.45-1.28-.08-1.32.83l5.49,3.54,3.89,2.51-.17,4.25c-.07,1.88,1.04,4.16,2.48,5.08l-.56,14.53-2.41-1.55-.04,1.04c-.11,2.82,1.55,6.23,3.71,7.62l.27.17-.1,2.61c-.07,1.78.69,3.83,1.84,5.25l-.09,2.27c-.05,1.39.76,3.07,1.83,3.75l.2-5.3.61.39.66-17.12c.04-.97-.45-2.11-1.13-2.78Z'/%3e%3cpath%20class='cls-29'%20d='m208.68,110.52l-.13,3.41c-.04,1.03.57,2.27,1.36,2.78l.13-3.41c.04-1.03-.57-2.27-1.36-2.78Z'/%3e%3cpath%20class='cls-29'%20d='m212.67,119.16c.04-.9-.5-2-1.19-2.44l-.94-.6c-.04.9.5,2,1.19,2.44l.94.6Z'/%3e%3cpath%20class='cls-29'%20d='m217.93,126.98l-1.24-.8c-.04,1.02.56,2.25,1.34,2.75l1.53.99c1.62,1.05,3.01.18,3.09-1.94v-.23s-2.93-1.9-2.93-1.9c-.05,1.22-.85,1.73-1.79,1.12Z'/%3e%3cpath%20class='cls-29'%20d='m262.03,156.58c-.46-.45-.91-.19-.84.48l.04.38-.78,1.01c.47.67,1.09.86,1.4.42l.42-.59.06-.03c.53-.27.7-1.14.44-2.13l-.73.46Z'/%3e%3cpath%20class='cls-29'%20d='m239.12,115.23c-.95-.62-1.77-.1-1.82,1.14l-.04,1.04,3.37,2.17.13-3.25.72.46c2.04,1.31,3.77.22,3.88-2.43l-2.4-1.55c-2.02-1.3-3.74-.22-3.84,2.41Z'/%3e%3cpath%20class='cls-29'%20d='m256.97,133.5l-1.16-.75c.07-1.82-1-4.02-2.4-4.92l-5.31-3.43.1-2.65c-1.27-.82-2.36-.14-2.42,1.52l-.18,4.74,3.63,2.34c1.43.92,2.54,3.19,2.46,5.06l-.23,5.96c-.82-.53-1.45-1.82-1.41-2.89l.11-2.74-1.37-.88c-1.04-.67-1.92-.11-1.97,1.24-.05,1.23.68,2.72,1.62,3.33l.32.21-.27,6.83c-.02.4.22.88.53,1.08l-.28,7.3c-.06,1.54.85,3.41,2.03,4.17l.39-10.09c2.17,1.4,4.01.24,4.12-2.59l.1-2.44.26-6.71,4.55,2.94c.09-2.45-1.35-5.41-3.23-6.62Z'/%3e%3cpath%20class='cls-29'%20d='m262.11,123.38l-1.6-1.03-.14,3.69c-.05,1.15.64,2.55,1.52,3.12l.22-5.78Z'/%3e%3cpath%20class='cls-29'%20d='m295.85,110.47c-1.4-.9-2.6-.15-2.67,1.68l-.15,3.88c-.16,4.05-2.8,5.71-5.91,3.71h0l-.25,6.45-2.35,1.48c-3.14,1.97-7.28,1.55-11.51-1.18h0l-.11,2.83c-.04.97-.67,1.37-1.41.89l-3.79-2.44c-.03.76.42,1.68,1,2.06l4.05,2.61c-.03.84.46,1.86,1.11,2.27l8.86,5.71c4.48,2.89,8.3.49,8.53-5.35l.14-3.67c1.77,1.15,3.29.2,3.38-2.12l.56-14.52,3.86,2.49c1.91,1.23,3.54.21,3.63-2.28h0l-6.97-4.5Z'/%3e%3cpath%20class='cls-29'%20d='m250.43,87.62l-1.45,1.81-.02.43c-.03.66-.46.94-.97.61l-2.59,2.12c.33.67.9.99,1.22.69l6.1-5.8c-.9-.58-1.76-.53-2.29.13Z'/%3e%3cpath%20class='cls-29'%20d='m296.9,182.63l-.03.79-1.73-1.12c-.84-.54-1.56-.09-1.61,1.01l-.11,2.82c.64.41,1.19.07,1.22-.76l.04-1.12,2.1,1.35,1.07.69.17-4.36c-.59-.38-1.09-.07-1.12.7Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20class='cls-59'%3e%3cg%3e%3cellipse%20class='cls-51'%20cx='260.63'%20cy='162.52'%20rx='43.77'%20ry='77.36'%20transform='translate(-42.83%20115.03)%20rotate(-23.05)'/%3e%3cellipse%20class='cls-5'%20cx='260.63'%20cy='162.52'%20rx='39.32'%20ry='69.5'%20transform='translate(-42.83%20115.03)%20rotate(-23.05)'/%3e%3cg%20class='cls-63'%3e%3cg%3e%3cg%3e%3cpath%20class='cls-34'%20d='m195.94,43.27l-4.72-8.3c-1.01-1.78-2.5-2.77-3.62-2.43l-1.55.48-1.32-2.64h0c-.7.53-.76,1.99-.13,3.39l.56,1.25c.26.57.22,1.17-.09,1.35h0c-.28.16-.7-.07-.98-.56l-2.04-3.46h0c-.56.73-.44,2.24.27,3.52l.72,1.3c.32.58.34,1.27.03,1.51h0c-.26.21-.67.03-.98-.42h0c-.48-.69-1.12-.91-1.47-.52h0c-.95,1.08-.88,3.44.18,5.56h0c.4.8.28,1.65-.24,1.7l-4.24.45c-.47.05-.59.82-.23,1.54h0c.19.38.47.67.74.76l.45.15c.41.14.66-.27.54-.87h0l3.08-.32.88,2.07.18-.08c.88-.38,1.15-1.85.62-3.45h0l2-.92c.17-.08.41.1.54.4h0c.12.28.1.57-.05.66l-1.01.64h0c.37.86,1.08,1.36,1.53,1.07l.84-.53h0c.44,1,1.26,1.57,1.79,1.24l.25-.15.73,1.54c.94,1.97,1,4.12.16,5.16h0l2,10.25-.99,1.48c-1.67,2.5-1.28,7.28.93,11.43h0c-.64,1.07-.6,2.9.1,4.69l2.12,5.47h0c.43-.57.46-1.62.09-2.7l-.94-2.72c-.34-.97-.28-1.92.14-2.38h0l2.47,7.2-.05,1.28c-.05,1.23.31,2.66.99,3.92h0c.59,1.11,1.37,2.01,2.2,2.54l1.71,1.1h0c.48,1.25,1.28,2.33,2.16,2.89l1.07.69.41,2.35c.24,1.38,1.06,2.74,2.02,3.36h0c.33-.41.96-.21,1.43.47l.36.52-.02.38c-.05,1.42-.69,2.36-1.66,2.46h0c-.1,2.44.34,5.18,1.26,7.89l.52,1.53c.59,1.74,1.42,3.4,2.43,4.86h0l-.3,7.79h0c-.92.51-1.48,1.7-1.54,3.27v.24s1.26.82,1.26.82l.38,4.02h0c-.31,2.52-.23,5.33.26,8.26l.43,2.6c.18,1.09.82,2.17,1.58,2.66h0c.95.61,1.76.1,1.8-1.13v-.24h0c-.77-.46-1.38-1.67-1.34-2.68l.05-1.24h0c.56.36,1.03.06,1.06-.66l.04-1.13-1.33-.85.11-2.76c.06-1.48,1.03-2.09,2.17-1.36h0c.52.33.96.06.98-.62l.08-2.09,1.25.8c.85.55,1.57.09,1.61-1.01h0c.67.43,1.24.07,1.27-.8l.06-1.56c.05-1.29.89-1.82,1.89-1.18h0c1.18.76,2.19.13,2.25-1.41l.17-4.31,1.97-1.24h0c.08-2.04-1.12-4.5-2.68-5.51l-1.61-1.04-2-2.87h0c.08-2.01-1.11-4.45-2.65-5.44l-.8-.52-1.96-4.02-2.12-1.37h0c-.72-1.48-1.73-2.71-2.81-3.4l-.99-.64-.1,2.47-1.85-1.73-.92.1h0c-.56-.81-.89-1.85-.86-2.73l.11-2.76-2.44-1.57h0c.03-.72.35-1.2.84-1.25h0c.53-.05.74-.79.49-1.65l-.14-.45-3.46.96-.41-.95c-.42-.98-.24-1.94.38-2h0l.12-3.16h0c1.48-.42,3.33.4,4.97,2.22l.39.43-.14,3.5h0c.92.6,1.71.1,1.76-1.1l.12-3.08,1.6-.58c.92-.34,1.5-1.39,1.55-2.86h0l.69.45c1.3.84,2.42.14,2.48-1.56h0l1.3.84c1.21.78,2.24.13,2.3-1.45h0l-1.58-1.02h0c.05-1.18.82-1.67,1.73-1.08l3.05,1.97.04-1.13c.07-1.85-1.02-4.09-2.44-5h0l.11-2.9c.03-.81-.45-1.79-1.07-2.19h0l-.1,2.67h0c-.62-.4-1.1-1.38-1.07-2.19l.02-.6c.07-1.87-1.03-4.13-2.46-5.06h0l-.24,6.17-2.05-1.32-.16,4.1h0c-.88-.57-1.55-1.95-1.51-3.09l.12-3.04-2.54-1.64.12-3.18c.11-2.83,1.96-4,4.13-2.6h0c1.51.97,2.79.17,2.86-1.8l.06-1.45-2.82-.51.07-1.77h0c-.45-.29-.79-.99-.77-1.57l.11-2.89h0c-.88-.57-1.62-.1-1.67,1.04l-.03.83c-.06,1.54-1.06,2.17-2.24,1.41h0l.1-2.67-1.12-.72c-.68-.44-1.27-.08-1.3.82h0l-2.12-2.52.33-.83-4.29-6.6c-.88-1.36-2.11-1.87-2.81-1.16h0Z'/%3e%3cpath%20class='cls-34'%20d='m212.04,123.14l-.36-.23c-1.75-1.13-3.09-3.88-3-6.16l.07-1.79,3.52,2.27-.23,5.91Z'/%3e%3cpath%20class='cls-34'%20d='m205.18,52.48l-2.62-3.35h0c.33-2.44,2.32-2.94,4.24-1.06l.06.06.65-.07c.83-.09,1.85.88,2.34,2.23h0l-1.94.44-.08,2.15-.63-.55c-.82-.72-1.66-.65-2.02.15h0Z'/%3e%3cpath%20class='cls-34'%20d='m208.83,46.95l-.56-.36-2.83-4.08h0c.62-.96,1.9-.66,2.93.68l.58.77,2.29,1.48h0c-.06,1.65-1.14,2.33-2.41,1.51Z'/%3e%3cpath%20class='cls-34'%20d='m212.53,56.62l.1-.16c.77-1.28,1.89-2.04,3.24-2.18h0l2.35,5.32c1.06,2.39,1.59,4.93,1.5,7.15h0l.51.8c.63.99.79,2.25.37,2.89h0l-1.85-2.66-.29.43c-.24.34-.19,1.01.12,1.59h0c.37.69.36,1.48-.02,1.73l-.95.63-2.48-5.76h0c1.49-.96,1.74-3.82.59-6.7l-.22-.56h0c-.73.32-1.76-.33-2.43-1.55l-.53-.96Z'/%3e%3cpath%20class='cls-34'%20d='m213.97,47.09h0c.91.81,1.48,2.33,1.28,3.44h0c-.1.57.15,1.35.59,1.85h0c.6.69,1.27,1.05,1.85.99l.52-.06h0c.35,1.18-.09,2.07-.88,1.81h0c-.22-.07-.44-.23-.65-.45l-.5-.54c-1.74-1.88-2.7-4.93-2.21-7.04h0Z'/%3e%3cpath%20class='cls-34'%20d='m217.41,48.73l-1.97-2.75,2.11-3.36h0c1.09,1.52,1.42,3.61.76,4.67l-.9,1.43Z'/%3e%3cpath%20class='cls-34'%20d='m221.92,51.25l-1.45,1.06c-.87.64-2.27-.14-3.16-1.77h0l3.02-2.59h0c-.63-1.35-.56-2.79.15-3.26h0c2.21-1.46,5.67.7,7.73,4.84l.2.39-4.11,2.32-1.11-2.21c-.36-.71-.95-1.07-1.33-.83h0c-.35.23-.4.92-.12,1.6l.18.44Z'/%3e%3cpath%20class='cls-34'%20d='m225.94,54.23l-.21-.14c-2.39-1.54-4.42-.26-4.54,2.85h0l3.85,2.48-.3,8.64c-.12,3.57,1.84,7.88,4.54,9.97h0l.16-4.21h0c4.04,2.61,7.49.44,7.69-4.83l.15-3.92h0c1.91,1.23,3.54.21,3.63-2.28l.02-.59-3.23-2.08h0c.1-2.57-1.42-5.69-3.39-6.97l-.4-.26c-.95-.62-1.77-.11-1.82,1.14h0l-3.75-2.42-2.41,2.61Z'/%3e%3cpath%20class='cls-34'%20d='m239.34,83.21l-4.76-3.07h0c-.07,1.81,1,3.99,2.38,4.89l.43.28.06-1.63.56.36c.69.45,1.28.08,1.32-.83h0Z'/%3e%3cpath%20class='cls-34'%20d='m236.72,94.74l-2.74-1.77h0c-.04,1.14.63,2.52,1.51,3.09l.11.07-.05,1.43-1.56.98,1.45.93c.77.49,1.42.09,1.46-.92l.06-1.66.46.96-.1,2.56h0c.94.6,1.74.1,1.79-1.12v-.34s-.64-1.35-.64-1.35l.08-2.08c.05-1.3-.72-2.88-1.71-3.52h0l-.11,2.74Z'/%3e%3cpath%20class='cls-34'%20d='m247.17,112.13l-8.44-2.84h0c.04,2.22-1.07,3.52-2.67,3.13l-.46-.12-1.27,6.52h0c1.4,4.92,4.71,9.16,8.05,10.31l1.46.5.67,2.11h0c.79.38,1.48,1.58,1.53,2.66l.15,3.22,1.09,1.57.65,3.83h0c-1.19.13-1.76,1.66-1.33,3.6l.71,3.23-.45,1.44,1.41,3.57.25,3.8,1.6,1.03c2.53,1.63,4.69.28,4.82-3.02h0c1,.65,1.86.11,1.91-1.2l.05-1.18,2.16-1.35.25-6.51,5.46-3.43c.57-.36.23-1.81-.53-2.31l-1.45-.94c-1.23-.79-2.32-2.4-2.83-4.19l-2.51-8.76c-.36-1.24-.04-2.29.72-2.37h0l3.05,9.87-.08,2.14h0c.85,1.22,1.93,1.83,2.77,1.55l5.08-1.69-.16-.34c-.95-2.05-2.64-3.21-3.76-2.59h0l-.8-1.64c-.91-1.86-.83-3.88.17-4.51h0l.78,1.6c1.38,2.83,3.44,4.98,5.47,5.69h0l2.32,4.76,1.49.96-.1,2.62,1.38,2.82-.17,4.48h0c1.37.88,2.54.15,2.61-1.64l.09-2.4h0c1.19.77,2.21.13,2.27-1.43l.04-.9,2.08,1.34-.02.56c-.08,2.05,1.13,4.54,2.71,5.56h0l-.13,3.27c-.1,2.55,1.41,5.65,3.37,6.91h0v-.09c.07-1.76-.59-3.85-1.72-5.49h0l.11-2.75,1.98,4.07h0c1.06.68,1.96.12,2.02-1.26v-.17c.07-1.49-.82-3.31-1.96-4.04h0l.13-3.38h0c.65,1.4,1.6,2.56,2.6,3.21l.09.06c1.94,1.25,3.58.2,3.66-2.33.06-2.01.14-3.92.14-3.92l-1.17-2.4.11-.29c.25-.66.11-1.68-.36-2.56h0l-.91.53h0c-.43-1.61-.06-2.98.88-3.23l.2-.05-.07,1.69h0c.67.43,1.24.07,1.27-.8v-.11s.81.52.81.52l-.12,3.2.84.54-.1,2.67h0c.88.56,1.62.1,1.67-1.05l.08-2.1-1.5-.97.03-.75c.06-1.64,1.13-2.31,2.39-1.5h0l.33-.37c1.7-1.87,1.82-5.78.29-9.68h0l-2.33-1.51h0c.15-3.8,2.63-5.36,5.54-3.48l.43.28,2.07-4.71-.31,8.12c-.08,2.09,1.13,4.62,2.73,5.69h0l.13-3.35-.22-1.1c-.93-4.58.84-7.82,3.91-7.12h0l.03-.68c.08-2.12,1.46-2.99,3.09-1.94h0l2.57-1.62h0c-.6-1.23-1.62-1.88-2.28-1.47l-.74.47-5.16-7.43-2.2-1.42-.91.1c-2.52.26-5.49-1.31-8.1-4.31h0l-3.29-2.12-1.36-2.78-2.72-1.76c-2.39-1.54-4.42-.26-4.54,2.85h0l-2.9-1.87c-2.39-1.54-4.23-5.31-4.11-8.43h0l-3.98-2.57c-2.17-1.4-4.02-.24-4.13,2.6h0c-.11,2.83-1.96,4-4.13,2.6l-1.99-1.28-.08,2.2c-.1,2.52-1.74,3.56-3.68,2.31h0l-4.45,2.79-1.5-4.73,2.29,1.48h0c.08-2.06-1.13-4.55-2.71-5.56l-1.34-.86.07-1.86-.48-.31c-2.96-1.91-5.48-.33-5.63,3.54h0l-4.1,2.57h0c.77,1.89,2.22,3.19,3.4,3.07h.13s-.11,2.77-.11,2.77h0c1.24.8,2.3.14,2.36-1.48l.16-4.23h0c.86.55,1.52,1.91,1.48,3.03l-.08,2.09,2.6.4h0c.18.91-.17,1.55-.77,1.43l-2.1-.45h0c-.08,2.12-1.46,2.99-3.09,1.94l-.61-.39.07-1.92h0c-.71-.46-1.31-.08-1.35.85v.24s-.38-.24-.38-.24c-1.46-.94-2.71-.16-2.79,1.75h0l-1.64-1.06v.15c-.06,1.29.7,2.85,1.69,3.48h0c-.03.87-.6,1.23-1.27.8l-2.93-1.89-.04.92c-.03.7.38,1.54.92,1.88h0c-.06,1.54.85,3.41,2.03,4.17h0c.54.35.99.06,1.02-.64l.05-1.18h0c1.08.7,2.01.12,2.06-1.29v-.26s1.97,1.26,1.97,1.26h0c-.06,1.43.79,3.17,1.89,3.88l.61.39-.04,1.13-.37-.12c-.49-.15-.78.34-.64,1.05h0l2.11.43.17-4.32h0c.55.35.98,1.21.98,1.94v1.67c.01,1.17.46,2.52,1.2,3.58l.31.45.78-1.45h0c1.04,1.91,2.53,3.23,3.9,3.47l.31.05.3,1.43c.26,1.25-.19,2.16-1.02,2.04l-1.54-.23-3.35-4.82h0c-1.03.71-2.56.18-3.86-1.34l-1.35-1.59.18-2.72Z'/%3e%3cpath%20class='cls-34'%20d='m252.32,71.19l-1.64-1.06c-1.69-1.09-3.12-.19-3.21,2.01h0c-.06,1.58.87,3.49,2.08,4.27h0l.13-3.27h0c1.39.89,2.56.15,2.64-1.65v-.3Z'/%3e%3cpath%20class='cls-34'%20d='m263.26,90.82h0c-.93-1.91-1-4.01-.16-5l.12-.14,1.55.31,1.08-.68h0c-.82-1.68-2.21-2.58-3.11-2.01l-1.9,1.19c-1.06.66-1.14,2.79-.18,4.76h0c.69,1.42,1.88,2.14,2.6,1.56h0Z'/%3e%3cpath%20class='cls-34'%20d='m260.53,157.13l-1.61,2.08h0c.96,1.38,2.24,1.77,2.87.87l.86-1.21.13-.07c1.08-.57,1.45-2.35.9-4.39h0l-1.49.94h0c-.95-.92-1.87-.39-1.74.99l.07.79Z'/%3e%3cpath%20class='cls-34'%20d='m276.92,152l.4.81c.37.76,1,1.17,1.41.91h0l-.6-1.24.39-.25c.29-.18.31-.76.05-1.3h0l-1.65,1.05Z'/%3e%3cpath%20class='cls-34'%20d='m289.21,166.4l-.34-.22c-.89-.58-1.71-1.7-2.16-2.99l-1.53-4.35c-.11-.31.1-.47.29-.22l1.14,1.53c.99,1.32,1.75,2.93,2.17,4.58l.43,1.67Z'/%3e%3cpath%20class='cls-34'%20d='m288.91,167.88l1.31-.17h0c.26.57.64,1.05,1.05,1.31l.52.34.39-.24h0c.54.35.95,1.2.92,1.9v.08s-4.11-2.65-4.11-2.65c-.21-.13-.28-.55-.09-.57Z'/%3e%3cpath%20class='cls-34'%20d='m293.71,171.22l.77,1.57.67-.42h0c-.32-.82-.97-1.35-1.43-1.15h0Z'/%3e%3cpath%20class='cls-34'%20d='m292.78,161.51l-.04,1.13-1.58.99-.99-.64-.04.95c-.03.68.38,1.51.9,1.85h0c-.04.96.53,2.11,1.26,2.58h0c.95.61,1.75.1,1.8-1.13l.02-.56.81-.51.06-1.53.82-.52-.4-.74c-.71-1.32-1.79-2.09-2.62-1.88h0Z'/%3e%3cpath%20class='cls-34'%20d='m295.95,170.18v.12c-.03.59-.41.83-.87.54h0l.12-3.22c.03-.67.44-.98.95-.71l1.18.62.03-.81h0c.46.3.82,1.03.79,1.63h0c0,.25-.17.35-.36.23l-.99-.64c-.34-.22-.63-.04-.64.4l-.02.39.37-.04c.26-.03.58.24.77.66h0l-.9.29.25.42c.34.58.37,1.28.06,1.53h0l-.76-1.41Z'/%3e%3cpath%20class='cls-34'%20d='m299.41,170.12l.03-.85c.02-.51-.28-1.12-.67-1.38h0l-.03.85c-.02.51.28,1.12.67,1.38h0Z'/%3e%3cpath%20class='cls-34'%20d='m298.81,170.57l.24.16c.36.23.63.8.62,1.26h0l-.24-.16c-.36-.23-.63-.8-.62-1.26h0Z'/%3e%3cpath%20class='cls-34'%20d='m297.1,162.99l1.82,1.17h0c-.03.87-.6,1.23-1.27.8h0c-.33-.22-.59-.74-.58-1.18l.03-.79Z'/%3e%3cpath%20class='cls-34'%20d='m296.55,155.87l-.1,2.45h0c.6.38,1.15,1.06,1.55,1.88l.02.05c.41.85.38,1.77-.08,2.06h0l-1.8-2.36-1.14,1.38h0c-.3-.62-.34-1.31-.1-1.67l.83-1.24h0c-.46-1.34-.13-2.51.71-2.54h.1Z'/%3e%3cpath%20class='cls-34'%20d='m301.42,172.02l-1.1-.71.26-.31c.46-.54,1.41.19,1.68,1.29l.22.9.9-.1c.73-.08,1.61.49,2.3,1.48h0l-.04,1.14.13.08c1.04.67,1.84,2.31,1.79,3.67h0l.91,1.56c.31.54.39,1.19.17,1.53h0l-1-1.55c-.69-1.07-1.65-1.44-2.17-.83h0l-1.24-1.23.05-1.41-.92.3h0c-.31-.77-.2-1.52.24-1.68l.16-.05-.02-.07c-.33-1.09-.99-2.06-1.74-2.54h0l-.05.02c-.36.18-.9-.18-1.21-.83h0l.67-.67Z'/%3e%3cpath%20class='cls-34'%20d='m309.27,177.94l.29,1.3-.7.4.94.61c.41.26.75.04.77-.49h0c.02-.53-.29-1.17-.7-1.43l-.61-.39Z'/%3e%3cpath%20class='cls-34'%20d='m302.93,135.94l.08-1.97-1.15-4.73h0c-.07,1.92.24,4.06.91,6.2l.16.5Z'/%3e%3cpath%20class='cls-34'%20d='m302.08,139.01l-.86.54.36.74c1.07,2.2.98,4.59-.21,5.33h0c-.48.3-1.23-.18-1.66-1.07h0c-1.36.85-1.46,3.58-.24,6.09l.65,1.32.1-2.51c.04-1.11.68-1.68,1.53-1.36h0c1.48.57,2.45-.79,2.09-2.93l-.07-.43c-.3-1.78.09-3.26,1.02-3.84h0c-.66-1.52-1.9-2.38-2.7-1.88Z'/%3e%3cpath%20class='cls-34'%20d='m291.06,180.81l-.32,8.21.85.54c2.16,1.39,4.24,1.4,5.65.02h0l1.72,1.11h0c-.05,1.41.56,3.09,1.54,4.25l.68.81-.11,2.78,1.67,1.08c1.91,1.23,3.54.21,3.63-2.28h0l1.09.43c1.38.55,2.42-.36,2.5-2.17h0c.11-2.76-1.52-6.11-3.64-7.47h0l.17-4.29c.04-1.08-.6-2.39-1.42-2.92h0l-.09,2.22c-.04.93-.65,1.32-1.36.86h0c-.72-.46-1.27-1.59-1.23-2.53l.14-3.48-.85-.55c-.85-.55-1.58-.09-1.62,1.02h0l-2.38-1.53c-1.09-.7-2.02-.12-2.07,1.3h0c-.05,1.32-.86,1.93-1.86,1.42l-.68-.34c-1.08-.54-1.93.11-1.99,1.52Z'/%3e%3cpath%20class='cls-34'%20d='m304.17,202.38l-.13,3.38h0c-.99-.64-1.75-2.2-1.7-3.48l.04-1.05,1.79,1.15Z'/%3e%3cpath%20class='cls-34'%20d='m317.58,206.25l-.14,3.67,1.34.86h0c-.12,3.21-2.22,4.52-4.68,2.94l-.3-.2v.17c-.08,1.96-1.36,2.77-2.87,1.8h0l.08-2.17c.08-2.07,1.43-2.92,3.02-1.9l1.32.85.18-4.74c.05-1.4.97-1.98,2.04-1.28h0Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-52'%20d='m220.01,121.86c-1.2-.77-2.22-.13-2.29,1.43l-4.34-2.8v-.04c.09-2.16-1.19-4.77-2.85-5.84l.02-.64c.07-1.83-1.01-4.04-2.41-4.94l-.15,3.95c-.08,2.18,1.2,4.82,2.87,5.9l.14.09-.93,23.91c-.05,1.16.64,2.57,1.53,3.15l.29-7.56c.89.57,1.65.1,1.7-1.06l.2-5.03c.06-1.56.64-2.61,1.51-3.03l-.12,3,1.79,1.15.16-4.19c.28.1.57.24.86.43.35.23.7.37,1.02.44l-.04,1.06c2.46,1.59,4.55.27,4.68-2.94l.03-.76.12.08c.73.47,1.36.08,1.4-.88l.06-1.49-3.68-2.37-1.6-1.02Z'/%3e%3cpath%20class='cls-52'%20d='m207.87,84.42l2.13,1.38c1.69,1.09,3.12.19,3.21-2.01l-.17-.11c1.18.76,2.18.13,2.24-1.41l.17-4.44c-1.66-1.07-3.07-.18-3.15,1.98l-.13,3.31-4.15-2.68.08-2.1c.12-3.18-1.75-7.03-4.19-8.6l-4.35-2.81.13-3.35,2.24,1.45,4.1,2.64.15-3.99c.1-2.53-1.4-5.6-3.34-6.85l-.58-.37v.23c-.1,2.41-1.67,3.39-3.52,2.2l.05-1.21c.13-3.35-1.77-7.37-4.3-9.2l.23-5.86-4.79-3.08c-1.83-1.18-3.39-.24-3.55,2.09l-2.51-1.62c-1.34-.86-2.48-.15-2.54,1.6l4.93,3.18,4.58,2.96-.3,7.65c1.11.72,1.97,2.48,1.92,3.93l-.37,9.66-1.88-1.21-.1,2.69c-.13,3.31,1.64,7.24,4.07,9.27l-.03.84c-.08,2.16.75,4.62,2.05,6.48l-.05,1.15c-.08,2.15,1.18,4.75,2.83,5.81l.17-4.29.52.34.18-4.58,4.5,2.9c.98.63,1.82.11,1.87-1.17l-4.38-2.82.38-9.85,1.93,1.24-.04.93c-.11,2.85,1.57,6.3,3.76,7.71Z'/%3e%3cpath%20class='cls-52'%20d='m216.27,116.89l2.16,1.39.11-2.88-4.37-2.82c-.06,1.59.88,3.51,2.09,4.3Z'/%3e%3cpath%20class='cls-52'%20d='m252.2,117.78c-1.03.71-2.56.18-3.86-1.34l-1.35-1.59.18-2.72-8.44-2.84c.04,2.22-1.07,3.52-2.67,3.13l-.46-.12-1.27,6.52c1.4,4.92,4.71,9.16,8.05,10.31l1.46.5.67,2.11c.79.38,1.48,1.58,1.53,2.66l.15,3.22,1.09,1.57.65,3.83c-1.19.13-1.76,1.66-1.33,3.6l.71,3.23-.45,1.44,1.41,3.57.25,3.8,1.6,1.03c2.53,1.63,4.69.28,4.82-3.02,1,.65,1.86.11,1.91-1.2l.05-1.18,2.16-1.35.25-6.51,5.46-3.43c.57-.36.23-1.81-.53-2.31l-1.45-.94c-1.23-.79-2.32-2.4-2.83-4.19l-2.51-8.76c-.36-1.24-.04-2.29.72-2.37l-2.6-1.83-3.35-4.82Z'/%3e%3cpath%20class='cls-52'%20d='m262.08,155.94c-.72-.69-1.41-.3-1.32.75l.06.59-1.22,1.58c.73,1.04,1.69,1.34,2.17.66l.65-.91.1-.05c.82-.43,1.1-1.78.68-3.32l-1.13.71Z'/%3e%3cpath%20class='cls-52'%20d='m239.69,105.01l.35.23-.02.39c-.04,1.02.56,2.26,1.35,2.76.44.28.82.05.84-.53l.05-1.19.33.21c.63.41,1.17.1,1.24-.69l.04.02c.23.15.42.02.43-.27l.03-.73,3.02,1.95c.01,1.29.76,2.78,1.73,3.41l.28.18-.11,2.73c.38.25.71.04.73-.46l.07-1.82.1-2.45,1.74,1.12-.12,3.03-.03.81c-.04.96.53,2.11,1.26,2.58l.1-2.54.58.37v.1c-.03.65.35,1.43.85,1.75l3.07,1.98.06-1.6c.06-1.49-.82-3.3-1.96-4.03l-.19-.12h0c.06-1.66-.91-3.67-2.19-4.49l-4.06-2.62c-.68-.44-1.27-.14-1.4.66l-3.45-2.22c-.76-.49-1.42-.08-1.45.91l-.04,1.05-3.92-2.53-.02.54c-.02.56.31,1.24.74,1.52Z'/%3e%3cpath%20class='cls-52'%20d='m247.77,94.38l-.11,2.97c.81.52,1.5.09,1.54-.97l.21-5.38,1.11.71c1.16.75,2.06,2.59,2,4.1l2.31,1.49-.06,1.62c.76.49,1.42.08,1.45-.91l.07-1.69-1.38-.89.02-.41c.05-1.29-.71-2.85-1.7-3.48l.04-.98,3.6,2.32c.04-1-.55-2.2-1.31-2.7l-2.22-1.43.07-1.92c-2.52-1.62-4.66-.28-4.78,3-.01.35-.24.5-.52.32l-.16-.1-3.23,2.18.06.12c.76,1.67,2.13,2.59,3.01,2.02Z'/%3e%3cpath%20class='cls-52'%20d='m263.7,119.69c1.31.84,2.42.14,2.48-1.56l.18-4.59-2.36-1.52.16-4.02c-1.34-.86-2.48-.15-2.54,1.6l-.19,4.88,2.42,1.56-.14,3.65Z'/%3e%3cpath%20class='cls-52'%20d='m308.52,112.86c-.07,1.9-1.32,2.68-2.77,1.74l-1.94-1.25c.07-1.85-1.02-4.09-2.44-5l-2.85-1.84h0c-2.18,1.37-5.05,1.07-7.99-.82l-.16-.1-.18,4.65c-2.65-1.71-4.92-.29-5.05,3.17h0c-.16,4.23-1.61,7.46-4.02,8.97l-3.22,2.02c-1.19-2.44-2.85-4.46-4.62-5.6l-1.64-1.05-.43,11.22-5.86-3.78-.96-1.98-2.37-1.53c-1.56-1-2.88-.17-2.96,1.86l-2.57-.29,1.68,1.18,1.14.88,3.54,11.65,4.67-1.61c-.54-1.12-1.47-1.72-2.08-1.34l-.82.51c-1-2.05-1.52-4.29-1.44-6.23v-.18c.07-1.6,1.12-2.26,2.35-1.47,1.25,2.56,2.99,4.68,4.86,5.88l.6.38,2.48,5.09c.73-.46,1.89.95,1.84,2.22l-.1,2.55c.75.49,1.33,1.67,1.29,2.65l-.14,3.49c.62.4,1.14.07,1.17-.74l.11-2.88c.76-.48.82-2.01.13-3.42l-.27-.55.09-2.26c.46.94,1.1,1.72,1.79,2.16l5.52,3.56c-.07,1.71.39,3.68,1.27,5.49l2.7,5.55c.57.37,1.06.06,1.09-.68l.02-.38c.03-.75-.41-1.65-.98-2.02l-.98-2.02.21-5.38,1.82,1.17c-.03.85.47,1.88,1.12,2.3l1.07.69c1.38.89,2.56.15,2.63-1.65.09-2.24-1.24-4.96-2.96-6.07l.14-3.6c.08-2.15,1.49-3.03,3.14-1.97l.48.31c.99.64,1.84.11,1.89-1.18h0l.17.11c.88.57,1.63.1,1.67-1.05.09-2.31-1.28-5.12-3.05-6.26l.42-10.94,2.83,1.82c2.17,1.4,4.01.24,4.12-2.59h0l2.94,1.9-.36,9.32c-.04.93.52,2.07,1.23,2.53l.46-11.99.38.24c1.7,1.1,3.15.19,3.24-2.03l2.62,1.69c.65.42,1.21.07,1.24-.78l-6.92-4.46Z'/%3e%3cpath%20class='cls-52'%20d='m276.59,89.19l-2.19-1.41-.12,3.01,4.5,2.9c.07-1.66-.92-3.67-2.19-4.49Z'/%3e%3cpath%20class='cls-52'%20d='m274.32,99.98c-.08,2.06,1.13,4.55,2.71,5.56-.09,2.43,1.34,5.37,3.2,6.57l2.77,1.78.36-9.31-8.99-5.8-.04,1.19Z'/%3e%3cpath%20class='cls-52'%20d='m301.18,146.32h-.08c-.36.05-.8-.23-1.14-.73l-.17.57c-.32,1.09-.28,2.5.12,3.96l.27-1.88c.1-.69.53-1.03,1.09-.84h0c1.07.35,1.86-.4,1.91-1.82l.08-2.01c.05-1.22.29-2.3.72-3.16-.72-.32-1.38-.27-1.88.14l-.02.02.17.55c.33,1.1.47,2.18.4,3.15-.09,1.19-.64,1.96-1.47,2.05Z'/%3e%3cpath%20class='cls-52'%20d='m306.01,188.85l-.22-.14.04-.94c.04-.91-.5-2.02-1.2-2.47l-2.97-1.91c-.03.81.45,1.79,1.07,2.19l1.15.74-.03.88c-.03.68.37,1.49.89,1.83.87.56,1.54,1.93,1.49,3.06l-.02.58c-.05,1.16-.8,1.64-1.7,1.06l-.17,4.36c.7.45,1.3.08,1.33-.84l.04-1.08c1.56,1.01,2.89.17,2.97-1.86.08-2.02-1.11-4.47-2.66-5.47Z'/%3e%3cpath%20class='cls-52'%20d='m300.58,186.39l.08-2.09c.03-.84-.46-1.86-1.11-2.27l.11-2.97c-1.7-1.1-3.15-.19-3.24,2.03l-.04,1.09-1.5-.97c-1.29-.83-2.39-.14-2.45,1.54-.35-.23-.65-.04-.67.42l-.08,2.18c-.06,1.56.86,3.45,2.06,4.22h0l.09-2.29.57.37c.76.49,1.42.08,1.45-.91l3.17,2.04c.62.4,1.1,1.38,1.07,2.19-.04,1.12.62,2.48,1.48,3.03l.2-5.17c.04-.9-.5-2-1.19-2.44Z'/%3e%3c/g%3e%3cpath%20class='cls-34'%20d='m236.6,115.08h0l-1.37-.88-.9,4.62c.33,1.15.77,2.27,1.28,3.31h0s.04.07.06.1c.03.06.07.13.1.19,1.68,3.28,4.14,5.84,6.61,6.7l1.46.5.12.37h0c.05-1.34-.74-2.97-1.77-3.63l-.12-.08c-3.18-2.05-5.62-7.06-5.46-11.21Z'/%3e%3cpath%20class='cls-34'%20d='m254.21,120.67l-2.01-2.89c-1.03.71-2.56.18-3.86-1.34l-1.32-1.54h0c-.11,2.96,1.63,6.54,3.9,8.01l3.12,2.01.16-4.24Z'/%3e%3cpath%20class='cls-34'%20d='m264.94,142.78l-2.13-1.37c-2.4-1.55-4.44-.26-4.57,2.87h0c-.03.79.44,1.76,1.05,2.15h0l5.46-3.43c.08-.05.14-.12.19-.21Z'/%3e%3cpath%20class='cls-34'%20d='m251.61,160.32c1.83.36,3.22-1.03,3.32-3.65,1,.65,1.86.11,1.91-1.2l.05-1.18,2.16-1.35h0c-3.85-2.48-7.13-.42-7.32,4.6l-.11,2.79Z'/%3e%3cg%3e%3cpath%20class='cls-29'%20d='m211.35,123.75l-.34,8.85-.03.87-.38,9.82c-.02.45.25,1,.6,1.22l.42-10.76c.94.24,1.66-.43,1.71-1.76l.38-9.72c-1.23-.8-2.28-.14-2.35,1.47Z'/%3e%3cpath%20class='cls-29'%20d='m198.76,67.77l.13-3.28c.09-2.39-1.32-5.28-3.15-6.46l.19-4.88c.06-1.53-.85-3.39-2.02-4.14l-.05-.03.06-1.64.15-3.83-3.14-2.02c-1.63-1.05-3.02-.19-3.11,1.93l-4.24-2.73c-.69-.45-1.28-.08-1.32.83l5.49,3.54,3.89,2.51-.17,4.25c-.07,1.88,1.04,4.16,2.48,5.08l-.56,14.53-2.41-1.55-.04,1.04c-.11,2.82,1.55,6.23,3.71,7.62l.27.17-.1,2.61c-.07,1.78.69,3.83,1.84,5.25l-.09,2.27c-.05,1.39.76,3.07,1.83,3.75l.2-5.3.61.39.66-17.12c.04-.97-.45-2.11-1.13-2.78Z'/%3e%3cpath%20class='cls-29'%20d='m208.68,110.52l-.13,3.41c-.04,1.03.57,2.27,1.36,2.78l.13-3.41c.04-1.03-.57-2.27-1.36-2.78Z'/%3e%3cpath%20class='cls-29'%20d='m212.67,119.16c.04-.9-.5-2-1.19-2.44l-.94-.6c-.04.9.5,2,1.19,2.44l.94.6Z'/%3e%3cpath%20class='cls-29'%20d='m217.93,126.98l-1.24-.8c-.04,1.02.56,2.25,1.34,2.75l1.53.99c1.62,1.05,3.01.18,3.09-1.94v-.23s-2.93-1.9-2.93-1.9c-.05,1.22-.85,1.73-1.79,1.12Z'/%3e%3cpath%20class='cls-29'%20d='m262.03,156.58c-.46-.45-.91-.19-.84.48l.04.38-.78,1.01c.47.67,1.09.86,1.4.42l.42-.59.06-.03c.53-.27.7-1.14.44-2.13l-.73.46Z'/%3e%3cpath%20class='cls-29'%20d='m239.12,115.23c-.95-.62-1.77-.1-1.82,1.14l-.04,1.04,3.37,2.17.13-3.25.72.46c2.04,1.31,3.77.22,3.88-2.43l-2.4-1.55c-2.02-1.3-3.74-.22-3.84,2.41Z'/%3e%3cpath%20class='cls-29'%20d='m256.97,133.5l-1.16-.75c.07-1.82-1-4.02-2.4-4.92l-5.31-3.43.1-2.65c-1.27-.82-2.36-.14-2.42,1.52l-.18,4.74,3.63,2.34c1.43.92,2.54,3.19,2.46,5.06l-.23,5.96c-.82-.53-1.45-1.82-1.41-2.89l.11-2.74-1.37-.88c-1.04-.67-1.92-.11-1.97,1.24-.05,1.23.68,2.72,1.62,3.33l.32.21-.27,6.83c-.02.4.22.88.53,1.08l-.28,7.3c-.06,1.54.85,3.41,2.03,4.17l.39-10.09c2.17,1.4,4.01.24,4.12-2.59l.1-2.44.26-6.71,4.55,2.94c.09-2.45-1.35-5.41-3.23-6.62Z'/%3e%3cpath%20class='cls-29'%20d='m262.11,123.38l-1.6-1.03-.14,3.69c-.05,1.15.64,2.55,1.52,3.12l.22-5.78Z'/%3e%3cpath%20class='cls-29'%20d='m295.85,110.47c-1.4-.9-2.6-.15-2.67,1.68l-.15,3.88c-.16,4.05-2.8,5.71-5.91,3.71h0l-.25,6.45-2.35,1.48c-3.14,1.97-7.28,1.55-11.51-1.18h0l-.11,2.83c-.04.97-.67,1.37-1.41.89l-3.79-2.44c-.03.76.42,1.68,1,2.06l4.05,2.61c-.03.84.46,1.86,1.11,2.27l8.86,5.71c4.48,2.89,8.3.49,8.53-5.35l.14-3.67c1.77,1.15,3.29.2,3.38-2.12l.56-14.52,3.86,2.49c1.91,1.23,3.54.21,3.63-2.28h0l-6.97-4.5Z'/%3e%3cpath%20class='cls-29'%20d='m250.43,87.62l-1.45,1.81-.02.43c-.03.66-.46.94-.97.61l-2.59,2.12c.33.67.9.99,1.22.69l6.1-5.8c-.9-.58-1.76-.53-2.29.13Z'/%3e%3cpath%20class='cls-29'%20d='m296.9,182.63l-.03.79-1.73-1.12c-.84-.54-1.56-.09-1.61,1.01l-.11,2.82c.64.41,1.19.07,1.22-.76l.04-1.12,2.1,1.35,1.07.69.17-4.36c-.59-.38-1.09-.07-1.12.7Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20class='cls-61'%3e%3cg%3e%3cellipse%20class='cls-51'%20cx='260.63'%20cy='162.52'%20rx='43.77'%20ry='77.36'%20transform='translate(-42.83%20115.03)%20rotate(-23.05)'/%3e%3cellipse%20class='cls-5'%20cx='260.63'%20cy='162.52'%20rx='39.32'%20ry='69.5'%20transform='translate(-42.83%20115.03)%20rotate(-23.05)'/%3e%3cg%20class='cls-64'%3e%3cg%3e%3cg%3e%3cpath%20class='cls-34'%20d='m195.94,43.27l-4.72-8.3c-1.01-1.78-2.5-2.77-3.62-2.43l-1.55.48-1.32-2.64h0c-.7.53-.76,1.99-.13,3.39l.56,1.25c.26.57.22,1.17-.09,1.35h0c-.28.16-.7-.07-.98-.56l-2.04-3.46h0c-.56.73-.44,2.24.27,3.52l.72,1.3c.32.58.34,1.27.03,1.51h0c-.26.21-.67.03-.98-.42h0c-.48-.69-1.12-.91-1.47-.52h0c-.95,1.08-.88,3.44.18,5.56h0c.4.8.28,1.65-.24,1.7l-4.24.45c-.47.05-.59.82-.23,1.54h0c.19.38.47.67.74.76l.45.15c.41.14.66-.27.54-.87h0l3.08-.32.88,2.07.18-.08c.88-.38,1.15-1.85.62-3.45h0l2-.92c.17-.08.41.1.54.4h0c.12.28.1.57-.05.66l-1.01.64h0c.37.86,1.08,1.36,1.53,1.07l.84-.53h0c.44,1,1.26,1.57,1.79,1.24l.25-.15.73,1.54c.94,1.97,1,4.12.16,5.16h0l2,10.25-.99,1.48c-1.67,2.5-1.28,7.28.93,11.43h0c-.64,1.07-.6,2.9.1,4.69l2.12,5.47h0c.43-.57.46-1.62.09-2.7l-.94-2.72c-.34-.97-.28-1.92.14-2.38h0l2.47,7.2-.05,1.28c-.05,1.23.31,2.66.99,3.92h0c.59,1.11,1.37,2.01,2.2,2.54l1.71,1.1h0c.48,1.25,1.28,2.33,2.16,2.89l1.07.69.41,2.35c.24,1.38,1.06,2.74,2.02,3.36h0c.33-.41.96-.21,1.43.47l.36.52-.02.38c-.05,1.42-.69,2.36-1.66,2.46h0c-.1,2.44.34,5.18,1.26,7.89l.52,1.53c.59,1.74,1.42,3.4,2.43,4.86h0l-.3,7.79h0c-.92.51-1.48,1.7-1.54,3.27v.24s1.26.82,1.26.82l.38,4.02h0c-.31,2.52-.23,5.33.26,8.26l.43,2.6c.18,1.09.82,2.17,1.58,2.66h0c.95.61,1.76.1,1.8-1.13v-.24h0c-.77-.46-1.38-1.67-1.34-2.68l.05-1.24h0c.56.36,1.03.06,1.06-.66l.04-1.13-1.33-.85.11-2.76c.06-1.48,1.03-2.09,2.17-1.36h0c.52.33.96.06.98-.62l.08-2.09,1.25.8c.85.55,1.57.09,1.61-1.01h0c.67.43,1.24.07,1.27-.8l.06-1.56c.05-1.29.89-1.82,1.89-1.18h0c1.18.76,2.19.13,2.25-1.41l.17-4.31,1.97-1.24h0c.08-2.04-1.12-4.5-2.68-5.51l-1.61-1.04-2-2.87h0c.08-2.01-1.11-4.45-2.65-5.44l-.8-.52-1.96-4.02-2.12-1.37h0c-.72-1.48-1.73-2.71-2.81-3.4l-.99-.64-.1,2.47-1.85-1.73-.92.1h0c-.56-.81-.89-1.85-.86-2.73l.11-2.76-2.44-1.57h0c.03-.72.35-1.2.84-1.25h0c.53-.05.74-.79.49-1.65l-.14-.45-3.46.96-.41-.95c-.42-.98-.24-1.94.38-2h0l.12-3.16h0c1.48-.42,3.33.4,4.97,2.22l.39.43-.14,3.5h0c.92.6,1.71.1,1.76-1.1l.12-3.08,1.6-.58c.92-.34,1.5-1.39,1.55-2.86h0l.69.45c1.3.84,2.42.14,2.48-1.56h0l1.3.84c1.21.78,2.24.13,2.3-1.45h0l-1.58-1.02h0c.05-1.18.82-1.67,1.73-1.08l3.05,1.97.04-1.13c.07-1.85-1.02-4.09-2.44-5h0l.11-2.9c.03-.81-.45-1.79-1.07-2.19h0l-.1,2.67h0c-.62-.4-1.1-1.38-1.07-2.19l.02-.6c.07-1.87-1.03-4.13-2.46-5.06h0l-.24,6.17-2.05-1.32-.16,4.1h0c-.88-.57-1.55-1.95-1.51-3.09l.12-3.04-2.54-1.64.12-3.18c.11-2.83,1.96-4,4.13-2.6h0c1.51.97,2.79.17,2.86-1.8l.06-1.45-2.82-.51.07-1.77h0c-.45-.29-.79-.99-.77-1.57l.11-2.89h0c-.88-.57-1.62-.1-1.67,1.04l-.03.83c-.06,1.54-1.06,2.17-2.24,1.41h0l.1-2.67-1.12-.72c-.68-.44-1.27-.08-1.3.82h0l-2.12-2.52.33-.83-4.29-6.6c-.88-1.36-2.11-1.87-2.81-1.16h0Z'/%3e%3cpath%20class='cls-34'%20d='m212.04,123.14l-.36-.23c-1.75-1.13-3.09-3.88-3-6.16l.07-1.79,3.52,2.27-.23,5.91Z'/%3e%3cpath%20class='cls-34'%20d='m205.18,52.48l-2.62-3.35h0c.33-2.44,2.32-2.94,4.24-1.06l.06.06.65-.07c.83-.09,1.85.88,2.34,2.23h0l-1.94.44-.08,2.15-.63-.55c-.82-.72-1.66-.65-2.02.15h0Z'/%3e%3cpath%20class='cls-34'%20d='m208.83,46.95l-.56-.36-2.83-4.08h0c.62-.96,1.9-.66,2.93.68l.58.77,2.29,1.48h0c-.06,1.65-1.14,2.33-2.41,1.51Z'/%3e%3cpath%20class='cls-34'%20d='m212.53,56.62l.1-.16c.77-1.28,1.89-2.04,3.24-2.18h0l2.35,5.32c1.06,2.39,1.59,4.93,1.5,7.15h0l.51.8c.63.99.79,2.25.37,2.89h0l-1.85-2.66-.29.43c-.24.34-.19,1.01.12,1.59h0c.37.69.36,1.48-.02,1.73l-.95.63-2.48-5.76h0c1.49-.96,1.74-3.82.59-6.7l-.22-.56h0c-.73.32-1.76-.33-2.43-1.55l-.53-.96Z'/%3e%3cpath%20class='cls-34'%20d='m213.97,47.09h0c.91.81,1.48,2.33,1.28,3.44h0c-.1.57.15,1.35.59,1.85h0c.6.69,1.27,1.05,1.85.99l.52-.06h0c.35,1.18-.09,2.07-.88,1.81h0c-.22-.07-.44-.23-.65-.45l-.5-.54c-1.74-1.88-2.7-4.93-2.21-7.04h0Z'/%3e%3cpath%20class='cls-34'%20d='m217.41,48.73l-1.97-2.75,2.11-3.36h0c1.09,1.52,1.42,3.61.76,4.67l-.9,1.43Z'/%3e%3cpath%20class='cls-34'%20d='m221.92,51.25l-1.45,1.06c-.87.64-2.27-.14-3.16-1.77h0l3.02-2.59h0c-.63-1.35-.56-2.79.15-3.26h0c2.21-1.46,5.67.7,7.73,4.84l.2.39-4.11,2.32-1.11-2.21c-.36-.71-.95-1.07-1.33-.83h0c-.35.23-.4.92-.12,1.6l.18.44Z'/%3e%3cpath%20class='cls-34'%20d='m225.94,54.23l-.21-.14c-2.39-1.54-4.42-.26-4.54,2.85h0l3.85,2.48-.3,8.64c-.12,3.57,1.84,7.88,4.54,9.97h0l.16-4.21h0c4.04,2.61,7.49.44,7.69-4.83l.15-3.92h0c1.91,1.23,3.54.21,3.63-2.28l.02-.59-3.23-2.08h0c.1-2.57-1.42-5.69-3.39-6.97l-.4-.26c-.95-.62-1.77-.11-1.82,1.14h0l-3.75-2.42-2.41,2.61Z'/%3e%3cpath%20class='cls-34'%20d='m239.34,83.21l-4.76-3.07h0c-.07,1.81,1,3.99,2.38,4.89l.43.28.06-1.63.56.36c.69.45,1.28.08,1.32-.83h0Z'/%3e%3cpath%20class='cls-34'%20d='m236.72,94.74l-2.74-1.77h0c-.04,1.14.63,2.52,1.51,3.09l.11.07-.05,1.43-1.56.98,1.45.93c.77.49,1.42.09,1.46-.92l.06-1.66.46.96-.1,2.56h0c.94.6,1.74.1,1.79-1.12v-.34s-.64-1.35-.64-1.35l.08-2.08c.05-1.3-.72-2.88-1.71-3.52h0l-.11,2.74Z'/%3e%3cpath%20class='cls-34'%20d='m247.17,112.13l-8.44-2.84h0c.04,2.22-1.07,3.52-2.67,3.13l-.46-.12-1.27,6.52h0c1.4,4.92,4.71,9.16,8.05,10.31l1.46.5.67,2.11h0c.79.38,1.48,1.58,1.53,2.66l.15,3.22,1.09,1.57.65,3.83h0c-1.19.13-1.76,1.66-1.33,3.6l.71,3.23-.45,1.44,1.41,3.57.25,3.8,1.6,1.03c2.53,1.63,4.69.28,4.82-3.02h0c1,.65,1.86.11,1.91-1.2l.05-1.18,2.16-1.35.25-6.51,5.46-3.43c.57-.36.23-1.81-.53-2.31l-1.45-.94c-1.23-.79-2.32-2.4-2.83-4.19l-2.51-8.76c-.36-1.24-.04-2.29.72-2.37h0l3.05,9.87-.08,2.14h0c.85,1.22,1.93,1.83,2.77,1.55l5.08-1.69-.16-.34c-.95-2.05-2.64-3.21-3.76-2.59h0l-.8-1.64c-.91-1.86-.83-3.88.17-4.51h0l.78,1.6c1.38,2.83,3.44,4.98,5.47,5.69h0l2.32,4.76,1.49.96-.1,2.62,1.38,2.82-.17,4.48h0c1.37.88,2.54.15,2.61-1.64l.09-2.4h0c1.19.77,2.21.13,2.27-1.43l.04-.9,2.08,1.34-.02.56c-.08,2.05,1.13,4.54,2.71,5.56h0l-.13,3.27c-.1,2.55,1.41,5.65,3.37,6.91h0v-.09c.07-1.76-.59-3.85-1.72-5.49h0l.11-2.75,1.98,4.07h0c1.06.68,1.96.12,2.02-1.26v-.17c.07-1.49-.82-3.31-1.96-4.04h0l.13-3.38h0c.65,1.4,1.6,2.56,2.6,3.21l.09.06c1.94,1.25,3.58.2,3.66-2.33.06-2.01.14-3.92.14-3.92l-1.17-2.4.11-.29c.25-.66.11-1.68-.36-2.56h0l-.91.53h0c-.43-1.61-.06-2.98.88-3.23l.2-.05-.07,1.69h0c.67.43,1.24.07,1.27-.8v-.11s.81.52.81.52l-.12,3.2.84.54-.1,2.67h0c.88.56,1.62.1,1.67-1.05l.08-2.1-1.5-.97.03-.75c.06-1.64,1.13-2.31,2.39-1.5h0l.33-.37c1.7-1.87,1.82-5.78.29-9.68h0l-2.33-1.51h0c.15-3.8,2.63-5.36,5.54-3.48l.43.28,2.07-4.71-.31,8.12c-.08,2.09,1.13,4.62,2.73,5.69h0l.13-3.35-.22-1.1c-.93-4.58.84-7.82,3.91-7.12h0l.03-.68c.08-2.12,1.46-2.99,3.09-1.94h0l2.57-1.62h0c-.6-1.23-1.62-1.88-2.28-1.47l-.74.47-5.16-7.43-2.2-1.42-.91.1c-2.52.26-5.49-1.31-8.1-4.31h0l-3.29-2.12-1.36-2.78-2.72-1.76c-2.39-1.54-4.42-.26-4.54,2.85h0l-2.9-1.87c-2.39-1.54-4.23-5.31-4.11-8.43h0l-3.98-2.57c-2.17-1.4-4.02-.24-4.13,2.6h0c-.11,2.83-1.96,4-4.13,2.6l-1.99-1.28-.08,2.2c-.1,2.52-1.74,3.56-3.68,2.31h0l-4.45,2.79-1.5-4.73,2.29,1.48h0c.08-2.06-1.13-4.55-2.71-5.56l-1.34-.86.07-1.86-.48-.31c-2.96-1.91-5.48-.33-5.63,3.54h0l-4.1,2.57h0c.77,1.89,2.22,3.19,3.4,3.07h.13s-.11,2.77-.11,2.77h0c1.24.8,2.3.14,2.36-1.48l.16-4.23h0c.86.55,1.52,1.91,1.48,3.03l-.08,2.09,2.6.4h0c.18.91-.17,1.55-.77,1.43l-2.1-.45h0c-.08,2.12-1.46,2.99-3.09,1.94l-.61-.39.07-1.92h0c-.71-.46-1.31-.08-1.35.85v.24s-.38-.24-.38-.24c-1.46-.94-2.71-.16-2.79,1.75h0l-1.64-1.06v.15c-.06,1.29.7,2.85,1.69,3.48h0c-.03.87-.6,1.23-1.27.8l-2.93-1.89-.04.92c-.03.7.38,1.54.92,1.88h0c-.06,1.54.85,3.41,2.03,4.17h0c.54.35.99.06,1.02-.64l.05-1.18h0c1.08.7,2.01.12,2.06-1.29v-.26s1.97,1.26,1.97,1.26h0c-.06,1.43.79,3.17,1.89,3.88l.61.39-.04,1.13-.37-.12c-.49-.15-.78.34-.64,1.05h0l2.11.43.17-4.32h0c.55.35.98,1.21.98,1.94v1.67c.01,1.17.46,2.52,1.2,3.58l.31.45.78-1.45h0c1.04,1.91,2.53,3.23,3.9,3.47l.31.05.3,1.43c.26,1.25-.19,2.16-1.02,2.04l-1.54-.23-3.35-4.82h0c-1.03.71-2.56.18-3.86-1.34l-1.35-1.59.18-2.72Z'/%3e%3cpath%20class='cls-34'%20d='m252.32,71.19l-1.64-1.06c-1.69-1.09-3.12-.19-3.21,2.01h0c-.06,1.58.87,3.49,2.08,4.27h0l.13-3.27h0c1.39.89,2.56.15,2.64-1.65v-.3Z'/%3e%3cpath%20class='cls-34'%20d='m263.26,90.82h0c-.93-1.91-1-4.01-.16-5l.12-.14,1.55.31,1.08-.68h0c-.82-1.68-2.21-2.58-3.11-2.01l-1.9,1.19c-1.06.66-1.14,2.79-.18,4.76h0c.69,1.42,1.88,2.14,2.6,1.56h0Z'/%3e%3cpath%20class='cls-34'%20d='m260.53,157.13l-1.61,2.08h0c.96,1.38,2.24,1.77,2.87.87l.86-1.21.13-.07c1.08-.57,1.45-2.35.9-4.39h0l-1.49.94h0c-.95-.92-1.87-.39-1.74.99l.07.79Z'/%3e%3cpath%20class='cls-34'%20d='m276.92,152l.4.81c.37.76,1,1.17,1.41.91h0l-.6-1.24.39-.25c.29-.18.31-.76.05-1.3h0l-1.65,1.05Z'/%3e%3cpath%20class='cls-34'%20d='m289.21,166.4l-.34-.22c-.89-.58-1.71-1.7-2.16-2.99l-1.53-4.35c-.11-.31.1-.47.29-.22l1.14,1.53c.99,1.32,1.75,2.93,2.17,4.58l.43,1.67Z'/%3e%3cpath%20class='cls-34'%20d='m288.91,167.88l1.31-.17h0c.26.57.64,1.05,1.05,1.31l.52.34.39-.24h0c.54.35.95,1.2.92,1.9v.08s-4.11-2.65-4.11-2.65c-.21-.13-.28-.55-.09-.57Z'/%3e%3cpath%20class='cls-34'%20d='m293.71,171.22l.77,1.57.67-.42h0c-.32-.82-.97-1.35-1.43-1.15h0Z'/%3e%3cpath%20class='cls-34'%20d='m292.78,161.51l-.04,1.13-1.58.99-.99-.64-.04.95c-.03.68.38,1.51.9,1.85h0c-.04.96.53,2.11,1.26,2.58h0c.95.61,1.75.1,1.8-1.13l.02-.56.81-.51.06-1.53.82-.52-.4-.74c-.71-1.32-1.79-2.09-2.62-1.88h0Z'/%3e%3cpath%20class='cls-34'%20d='m295.95,170.18v.12c-.03.59-.41.83-.87.54h0l.12-3.22c.03-.67.44-.98.95-.71l1.18.62.03-.81h0c.46.3.82,1.03.79,1.63h0c0,.25-.17.35-.36.23l-.99-.64c-.34-.22-.63-.04-.64.4l-.02.39.37-.04c.26-.03.58.24.77.66h0l-.9.29.25.42c.34.58.37,1.28.06,1.53h0l-.76-1.41Z'/%3e%3cpath%20class='cls-34'%20d='m299.41,170.12l.03-.85c.02-.51-.28-1.12-.67-1.38h0l-.03.85c-.02.51.28,1.12.67,1.38h0Z'/%3e%3cpath%20class='cls-34'%20d='m298.81,170.57l.24.16c.36.23.63.8.62,1.26h0l-.24-.16c-.36-.23-.63-.8-.62-1.26h0Z'/%3e%3cpath%20class='cls-34'%20d='m297.1,162.99l1.82,1.17h0c-.03.87-.6,1.23-1.27.8h0c-.33-.22-.59-.74-.58-1.18l.03-.79Z'/%3e%3cpath%20class='cls-34'%20d='m296.55,155.87l-.1,2.45h0c.6.38,1.15,1.06,1.55,1.88l.02.05c.41.85.38,1.77-.08,2.06h0l-1.8-2.36-1.14,1.38h0c-.3-.62-.34-1.31-.1-1.67l.83-1.24h0c-.46-1.34-.13-2.51.71-2.54h.1Z'/%3e%3cpath%20class='cls-34'%20d='m301.42,172.02l-1.1-.71.26-.31c.46-.54,1.41.19,1.68,1.29l.22.9.9-.1c.73-.08,1.61.49,2.3,1.48h0l-.04,1.14.13.08c1.04.67,1.84,2.31,1.79,3.67h0l.91,1.56c.31.54.39,1.19.17,1.53h0l-1-1.55c-.69-1.07-1.65-1.44-2.17-.83h0l-1.24-1.23.05-1.41-.92.3h0c-.31-.77-.2-1.52.24-1.68l.16-.05-.02-.07c-.33-1.09-.99-2.06-1.74-2.54h0l-.05.02c-.36.18-.9-.18-1.21-.83h0l.67-.67Z'/%3e%3cpath%20class='cls-34'%20d='m309.27,177.94l.29,1.3-.7.4.94.61c.41.26.75.04.77-.49h0c.02-.53-.29-1.17-.7-1.43l-.61-.39Z'/%3e%3cpath%20class='cls-34'%20d='m302.93,135.94l.08-1.97-1.15-4.73h0c-.07,1.92.24,4.06.91,6.2l.16.5Z'/%3e%3cpath%20class='cls-34'%20d='m302.08,139.01l-.86.54.36.74c1.07,2.2.98,4.59-.21,5.33h0c-.48.3-1.23-.18-1.66-1.07h0c-1.36.85-1.46,3.58-.24,6.09l.65,1.32.1-2.51c.04-1.11.68-1.68,1.53-1.36h0c1.48.57,2.45-.79,2.09-2.93l-.07-.43c-.3-1.78.09-3.26,1.02-3.84h0c-.66-1.52-1.9-2.38-2.7-1.88Z'/%3e%3cpath%20class='cls-34'%20d='m291.06,180.81l-.32,8.21.85.54c2.16,1.39,4.24,1.4,5.65.02h0l1.72,1.11h0c-.05,1.41.56,3.09,1.54,4.25l.68.81-.11,2.78,1.67,1.08c1.91,1.23,3.54.21,3.63-2.28h0l1.09.43c1.38.55,2.42-.36,2.5-2.17h0c.11-2.76-1.52-6.11-3.64-7.47h0l.17-4.29c.04-1.08-.6-2.39-1.42-2.92h0l-.09,2.22c-.04.93-.65,1.32-1.36.86h0c-.72-.46-1.27-1.59-1.23-2.53l.14-3.48-.85-.55c-.85-.55-1.58-.09-1.62,1.02h0l-2.38-1.53c-1.09-.7-2.02-.12-2.07,1.3h0c-.05,1.32-.86,1.93-1.86,1.42l-.68-.34c-1.08-.54-1.93.11-1.99,1.52Z'/%3e%3cpath%20class='cls-34'%20d='m304.17,202.38l-.13,3.38h0c-.99-.64-1.75-2.2-1.7-3.48l.04-1.05,1.79,1.15Z'/%3e%3cpath%20class='cls-34'%20d='m317.58,206.25l-.14,3.67,1.34.86h0c-.12,3.21-2.22,4.52-4.68,2.94l-.3-.2v.17c-.08,1.96-1.36,2.77-2.87,1.8h0l.08-2.17c.08-2.07,1.43-2.92,3.02-1.9l1.32.85.18-4.74c.05-1.4.97-1.98,2.04-1.28h0Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-52'%20d='m220.01,121.86c-1.2-.77-2.22-.13-2.29,1.43l-4.34-2.8v-.04c.09-2.16-1.19-4.77-2.85-5.84l.02-.64c.07-1.83-1.01-4.04-2.41-4.94l-.15,3.95c-.08,2.18,1.2,4.82,2.87,5.9l.14.09-.93,23.91c-.05,1.16.64,2.57,1.53,3.15l.29-7.56c.89.57,1.65.1,1.7-1.06l.2-5.03c.06-1.56.64-2.61,1.51-3.03l-.12,3,1.79,1.15.16-4.19c.28.1.57.24.86.43.35.23.7.37,1.02.44l-.04,1.06c2.46,1.59,4.55.27,4.68-2.94l.03-.76.12.08c.73.47,1.36.08,1.4-.88l.06-1.49-3.68-2.37-1.6-1.02Z'/%3e%3cpath%20class='cls-52'%20d='m207.87,84.42l2.13,1.38c1.69,1.09,3.12.19,3.21-2.01l-.17-.11c1.18.76,2.18.13,2.24-1.41l.17-4.44c-1.66-1.07-3.07-.18-3.15,1.98l-.13,3.31-4.15-2.68.08-2.1c.12-3.18-1.75-7.03-4.19-8.6l-4.35-2.81.13-3.35,2.24,1.45,4.1,2.64.15-3.99c.1-2.53-1.4-5.6-3.34-6.85l-.58-.37v.23c-.1,2.41-1.67,3.39-3.52,2.2l.05-1.21c.13-3.35-1.77-7.37-4.3-9.2l.23-5.86-4.79-3.08c-1.83-1.18-3.39-.24-3.55,2.09l-2.51-1.62c-1.34-.86-2.48-.15-2.54,1.6l4.93,3.18,4.58,2.96-.3,7.65c1.11.72,1.97,2.48,1.92,3.93l-.37,9.66-1.88-1.21-.1,2.69c-.13,3.31,1.64,7.24,4.07,9.27l-.03.84c-.08,2.16.75,4.62,2.05,6.48l-.05,1.15c-.08,2.15,1.18,4.75,2.83,5.81l.17-4.29.52.34.18-4.58,4.5,2.9c.98.63,1.82.11,1.87-1.17l-4.38-2.82.38-9.85,1.93,1.24-.04.93c-.11,2.85,1.57,6.3,3.76,7.71Z'/%3e%3cpath%20class='cls-52'%20d='m216.27,116.89l2.16,1.39.11-2.88-4.37-2.82c-.06,1.59.88,3.51,2.09,4.3Z'/%3e%3cpath%20class='cls-52'%20d='m252.2,117.78c-1.03.71-2.56.18-3.86-1.34l-1.35-1.59.18-2.72-8.44-2.84c.04,2.22-1.07,3.52-2.67,3.13l-.46-.12-1.27,6.52c1.4,4.92,4.71,9.16,8.05,10.31l1.46.5.67,2.11c.79.38,1.48,1.58,1.53,2.66l.15,3.22,1.09,1.57.65,3.83c-1.19.13-1.76,1.66-1.33,3.6l.71,3.23-.45,1.44,1.41,3.57.25,3.8,1.6,1.03c2.53,1.63,4.69.28,4.82-3.02,1,.65,1.86.11,1.91-1.2l.05-1.18,2.16-1.35.25-6.51,5.46-3.43c.57-.36.23-1.81-.53-2.31l-1.45-.94c-1.23-.79-2.32-2.4-2.83-4.19l-2.51-8.76c-.36-1.24-.04-2.29.72-2.37l-2.6-1.83-3.35-4.82Z'/%3e%3cpath%20class='cls-52'%20d='m262.08,155.94c-.72-.69-1.41-.3-1.32.75l.06.59-1.22,1.58c.73,1.04,1.69,1.34,2.17.66l.65-.91.1-.05c.82-.43,1.1-1.78.68-3.32l-1.13.71Z'/%3e%3cpath%20class='cls-52'%20d='m239.69,105.01l.35.23-.02.39c-.04,1.02.56,2.26,1.35,2.76.44.28.82.05.84-.53l.05-1.19.33.21c.63.41,1.17.1,1.24-.69l.04.02c.23.15.42.02.43-.27l.03-.73,3.02,1.95c.01,1.29.76,2.78,1.73,3.41l.28.18-.11,2.73c.38.25.71.04.73-.46l.07-1.82.1-2.45,1.74,1.12-.12,3.03-.03.81c-.04.96.53,2.11,1.26,2.58l.1-2.54.58.37v.1c-.03.65.35,1.43.85,1.75l3.07,1.98.06-1.6c.06-1.49-.82-3.3-1.96-4.03l-.19-.12h0c.06-1.66-.91-3.67-2.19-4.49l-4.06-2.62c-.68-.44-1.27-.14-1.4.66l-3.45-2.22c-.76-.49-1.42-.08-1.45.91l-.04,1.05-3.92-2.53-.02.54c-.02.56.31,1.24.74,1.52Z'/%3e%3cpath%20class='cls-52'%20d='m247.77,94.38l-.11,2.97c.81.52,1.5.09,1.54-.97l.21-5.38,1.11.71c1.16.75,2.06,2.59,2,4.1l2.31,1.49-.06,1.62c.76.49,1.42.08,1.45-.91l.07-1.69-1.38-.89.02-.41c.05-1.29-.71-2.85-1.7-3.48l.04-.98,3.6,2.32c.04-1-.55-2.2-1.31-2.7l-2.22-1.43.07-1.92c-2.52-1.62-4.66-.28-4.78,3-.01.35-.24.5-.52.32l-.16-.1-3.23,2.18.06.12c.76,1.67,2.13,2.59,3.01,2.02Z'/%3e%3cpath%20class='cls-52'%20d='m263.7,119.69c1.31.84,2.42.14,2.48-1.56l.18-4.59-2.36-1.52.16-4.02c-1.34-.86-2.48-.15-2.54,1.6l-.19,4.88,2.42,1.56-.14,3.65Z'/%3e%3cpath%20class='cls-52'%20d='m308.52,112.86c-.07,1.9-1.32,2.68-2.77,1.74l-1.94-1.25c.07-1.85-1.02-4.09-2.44-5l-2.85-1.84h0c-2.18,1.37-5.05,1.07-7.99-.82l-.16-.1-.18,4.65c-2.65-1.71-4.92-.29-5.05,3.17h0c-.16,4.23-1.61,7.46-4.02,8.97l-3.22,2.02c-1.19-2.44-2.85-4.46-4.62-5.6l-1.64-1.05-.43,11.22-5.86-3.78-.96-1.98-2.37-1.53c-1.56-1-2.88-.17-2.96,1.86l-2.57-.29,1.68,1.18,1.14.88,3.54,11.65,4.67-1.61c-.54-1.12-1.47-1.72-2.08-1.34l-.82.51c-1-2.05-1.52-4.29-1.44-6.23v-.18c.07-1.6,1.12-2.26,2.35-1.47,1.25,2.56,2.99,4.68,4.86,5.88l.6.38,2.48,5.09c.73-.46,1.89.95,1.84,2.22l-.1,2.55c.75.49,1.33,1.67,1.29,2.65l-.14,3.49c.62.4,1.14.07,1.17-.74l.11-2.88c.76-.48.82-2.01.13-3.42l-.27-.55.09-2.26c.46.94,1.1,1.72,1.79,2.16l5.52,3.56c-.07,1.71.39,3.68,1.27,5.49l2.7,5.55c.57.37,1.06.06,1.09-.68l.02-.38c.03-.75-.41-1.65-.98-2.02l-.98-2.02.21-5.38,1.82,1.17c-.03.85.47,1.88,1.12,2.3l1.07.69c1.38.89,2.56.15,2.63-1.65.09-2.24-1.24-4.96-2.96-6.07l.14-3.6c.08-2.15,1.49-3.03,3.14-1.97l.48.31c.99.64,1.84.11,1.89-1.18h0l.17.11c.88.57,1.63.1,1.67-1.05.09-2.31-1.28-5.12-3.05-6.26l.42-10.94,2.83,1.82c2.17,1.4,4.01.24,4.12-2.59h0l2.94,1.9-.36,9.32c-.04.93.52,2.07,1.23,2.53l.46-11.99.38.24c1.7,1.1,3.15.19,3.24-2.03l2.62,1.69c.65.42,1.21.07,1.24-.78l-6.92-4.46Z'/%3e%3cpath%20class='cls-52'%20d='m276.59,89.19l-2.19-1.41-.12,3.01,4.5,2.9c.07-1.66-.92-3.67-2.19-4.49Z'/%3e%3cpath%20class='cls-52'%20d='m274.32,99.98c-.08,2.06,1.13,4.55,2.71,5.56-.09,2.43,1.34,5.37,3.2,6.57l2.77,1.78.36-9.31-8.99-5.8-.04,1.19Z'/%3e%3cpath%20class='cls-52'%20d='m301.18,146.32h-.08c-.36.05-.8-.23-1.14-.73l-.17.57c-.32,1.09-.28,2.5.12,3.96l.27-1.88c.1-.69.53-1.03,1.09-.84h0c1.07.35,1.86-.4,1.91-1.82l.08-2.01c.05-1.22.29-2.3.72-3.16-.72-.32-1.38-.27-1.88.14l-.02.02.17.55c.33,1.1.47,2.18.4,3.15-.09,1.19-.64,1.96-1.47,2.05Z'/%3e%3cpath%20class='cls-52'%20d='m306.01,188.85l-.22-.14.04-.94c.04-.91-.5-2.02-1.2-2.47l-2.97-1.91c-.03.81.45,1.79,1.07,2.19l1.15.74-.03.88c-.03.68.37,1.49.89,1.83.87.56,1.54,1.93,1.49,3.06l-.02.58c-.05,1.16-.8,1.64-1.7,1.06l-.17,4.36c.7.45,1.3.08,1.33-.84l.04-1.08c1.56,1.01,2.89.17,2.97-1.86.08-2.02-1.11-4.47-2.66-5.47Z'/%3e%3cpath%20class='cls-52'%20d='m300.58,186.39l.08-2.09c.03-.84-.46-1.86-1.11-2.27l.11-2.97c-1.7-1.1-3.15-.19-3.24,2.03l-.04,1.09-1.5-.97c-1.29-.83-2.39-.14-2.45,1.54-.35-.23-.65-.04-.67.42l-.08,2.18c-.06,1.56.86,3.45,2.06,4.22h0l.09-2.29.57.37c.76.49,1.42.08,1.45-.91l3.17,2.04c.62.4,1.1,1.38,1.07,2.19-.04,1.12.62,2.48,1.48,3.03l.2-5.17c.04-.9-.5-2-1.19-2.44Z'/%3e%3c/g%3e%3cpath%20class='cls-34'%20d='m236.6,115.08h0l-1.37-.88-.9,4.62c.33,1.15.77,2.27,1.28,3.31h0s.04.07.06.1c.03.06.07.13.1.19,1.68,3.28,4.14,5.84,6.61,6.7l1.46.5.12.37h0c.05-1.34-.74-2.97-1.77-3.63l-.12-.08c-3.18-2.05-5.62-7.06-5.46-11.21Z'/%3e%3cpath%20class='cls-34'%20d='m254.21,120.67l-2.01-2.89c-1.03.71-2.56.18-3.86-1.34l-1.32-1.54h0c-.11,2.96,1.63,6.54,3.9,8.01l3.12,2.01.16-4.24Z'/%3e%3cpath%20class='cls-34'%20d='m264.94,142.78l-2.13-1.37c-2.4-1.55-4.44-.26-4.57,2.87h0c-.03.79.44,1.76,1.05,2.15h0l5.46-3.43c.08-.05.14-.12.19-.21Z'/%3e%3cpath%20class='cls-34'%20d='m251.61,160.32c1.83.36,3.22-1.03,3.32-3.65,1,.65,1.86.11,1.91-1.2l.05-1.18,2.16-1.35h0c-3.85-2.48-7.13-.42-7.32,4.6l-.11,2.79Z'/%3e%3cg%3e%3cpath%20class='cls-29'%20d='m211.35,123.75l-.34,8.85-.03.87-.38,9.82c-.02.45.25,1,.6,1.22l.42-10.76c.94.24,1.66-.43,1.71-1.76l.38-9.72c-1.23-.8-2.28-.14-2.35,1.47Z'/%3e%3cpath%20class='cls-29'%20d='m198.76,67.77l.13-3.28c.09-2.39-1.32-5.28-3.15-6.46l.19-4.88c.06-1.53-.85-3.39-2.02-4.14l-.05-.03.06-1.64.15-3.83-3.14-2.02c-1.63-1.05-3.02-.19-3.11,1.93l-4.24-2.73c-.69-.45-1.28-.08-1.32.83l5.49,3.54,3.89,2.51-.17,4.25c-.07,1.88,1.04,4.16,2.48,5.08l-.56,14.53-2.41-1.55-.04,1.04c-.11,2.82,1.55,6.23,3.71,7.62l.27.17-.1,2.61c-.07,1.78.69,3.83,1.84,5.25l-.09,2.27c-.05,1.39.76,3.07,1.83,3.75l.2-5.3.61.39.66-17.12c.04-.97-.45-2.11-1.13-2.78Z'/%3e%3cpath%20class='cls-29'%20d='m208.68,110.52l-.13,3.41c-.04,1.03.57,2.27,1.36,2.78l.13-3.41c.04-1.03-.57-2.27-1.36-2.78Z'/%3e%3cpath%20class='cls-29'%20d='m212.67,119.16c.04-.9-.5-2-1.19-2.44l-.94-.6c-.04.9.5,2,1.19,2.44l.94.6Z'/%3e%3cpath%20class='cls-29'%20d='m217.93,126.98l-1.24-.8c-.04,1.02.56,2.25,1.34,2.75l1.53.99c1.62,1.05,3.01.18,3.09-1.94v-.23s-2.93-1.9-2.93-1.9c-.05,1.22-.85,1.73-1.79,1.12Z'/%3e%3cpath%20class='cls-29'%20d='m262.03,156.58c-.46-.45-.91-.19-.84.48l.04.38-.78,1.01c.47.67,1.09.86,1.4.42l.42-.59.06-.03c.53-.27.7-1.14.44-2.13l-.73.46Z'/%3e%3cpath%20class='cls-29'%20d='m239.12,115.23c-.95-.62-1.77-.1-1.82,1.14l-.04,1.04,3.37,2.17.13-3.25.72.46c2.04,1.31,3.77.22,3.88-2.43l-2.4-1.55c-2.02-1.3-3.74-.22-3.84,2.41Z'/%3e%3cpath%20class='cls-29'%20d='m256.97,133.5l-1.16-.75c.07-1.82-1-4.02-2.4-4.92l-5.31-3.43.1-2.65c-1.27-.82-2.36-.14-2.42,1.52l-.18,4.74,3.63,2.34c1.43.92,2.54,3.19,2.46,5.06l-.23,5.96c-.82-.53-1.45-1.82-1.41-2.89l.11-2.74-1.37-.88c-1.04-.67-1.92-.11-1.97,1.24-.05,1.23.68,2.72,1.62,3.33l.32.21-.27,6.83c-.02.4.22.88.53,1.08l-.28,7.3c-.06,1.54.85,3.41,2.03,4.17l.39-10.09c2.17,1.4,4.01.24,4.12-2.59l.1-2.44.26-6.71,4.55,2.94c.09-2.45-1.35-5.41-3.23-6.62Z'/%3e%3cpath%20class='cls-29'%20d='m262.11,123.38l-1.6-1.03-.14,3.69c-.05,1.15.64,2.55,1.52,3.12l.22-5.78Z'/%3e%3cpath%20class='cls-29'%20d='m295.85,110.47c-1.4-.9-2.6-.15-2.67,1.68l-.15,3.88c-.16,4.05-2.8,5.71-5.91,3.71h0l-.25,6.45-2.35,1.48c-3.14,1.97-7.28,1.55-11.51-1.18h0l-.11,2.83c-.04.97-.67,1.37-1.41.89l-3.79-2.44c-.03.76.42,1.68,1,2.06l4.05,2.61c-.03.84.46,1.86,1.11,2.27l8.86,5.71c4.48,2.89,8.3.49,8.53-5.35l.14-3.67c1.77,1.15,3.29.2,3.38-2.12l.56-14.52,3.86,2.49c1.91,1.23,3.54.21,3.63-2.28h0l-6.97-4.5Z'/%3e%3cpath%20class='cls-29'%20d='m250.43,87.62l-1.45,1.81-.02.43c-.03.66-.46.94-.97.61l-2.59,2.12c.33.67.9.99,1.22.69l6.1-5.8c-.9-.58-1.76-.53-2.29.13Z'/%3e%3cpath%20class='cls-29'%20d='m296.9,182.63l-.03.79-1.73-1.12c-.84-.54-1.56-.09-1.61,1.01l-.11,2.82c.64.41,1.19.07,1.22-.76l.04-1.12,2.1,1.35,1.07.69.17-4.36c-.59-.38-1.09-.07-1.12.7Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cpolygon%20class='cls-58'%20points='195.55%20316.76%20116.7%20271.24%2099.83%20274.69%20122.68%20261.5%2046.46%20261.5%2048.54%20278.24%2082.48%20278.24%2063.39%20282.15%2063.39%20286.29%2085.39%20286.29%20138.17%20316.76%20123.42%20316.76%20122.92%20320.53%20148.2%20320.53%20149.81%20333.51%20194.95%20333.51%20223.95%20316.76%20195.55%20316.76'/%3e%3cg%3e%3cpath%20class='cls-6'%20d='m153.83,199.78h2.1l-.65,4.59c-.1.72-.72,1.26-1.45,1.26h0c-.73,0-1.35-.54-1.45-1.26l-.65-4.59h2.1Z'/%3e%3cpath%20class='cls-6'%20d='m126.13,215.7h2.1l-.65,4.59c-.1.72-.72,1.26-1.45,1.26h0c-.73,0-1.35-.54-1.45-1.26l-.65-4.59h2.1Z'/%3e%3cpath%20class='cls-6'%20d='m106.89,204.61h2.1l-.65,4.59c-.1.72-.72,1.26-1.45,1.26h0c-.73,0-1.35-.54-1.45-1.26l-.65-4.59h2.1Z'/%3e%3cpolygon%20class='cls-33'%20points='159.04%20164.05%20159.04%20197.98%20126.13%20216.98%20126.13%20183.05%20159.04%20164.05'/%3e%3cpolygon%20class='cls-45'%20points='126.13%20183.05%20103.1%20169.76%20103.1%20203.69%20126.13%20216.98%20126.13%20183.05'/%3e%3cpolygon%20class='cls-27'%20points='136.52%20145.45%20100.27%20166.38%20125.62%20181.01%20161.87%20160.09%20136.52%20145.45'/%3e%3cpolygon%20class='cls-31'%20points='161.87%20160.09%20161.87%20163.76%20125.62%20184.69%20125.62%20181.01%20161.87%20160.09'/%3e%3cpolygon%20class='cls-33'%20points='125.62%20184.69%20100.27%20170.05%20100.27%20166.38%20125.62%20181.01%20125.62%20184.69'/%3e%3cg%3e%3cpolygon%20class='cls-45'%20points='153.99%20170.85%20128.14%20185.77%20128.14%20194.46%20129.63%20195.31%20155.49%20171.7%20153.99%20170.85'/%3e%3cpolygon%20class='cls-31'%20points='155.49%20171.7%20129.63%20186.62%20129.63%20195.31%20155.49%20180.38%20155.49%20171.7'/%3e%3cpath%20class='cls-6'%20d='m142.28,182.07c0,.65.53,1.18,1.18,1.18s1.18-.53,1.18-1.18-.53-1.18-1.18-1.18c-.65,0-1.18.53-1.18,1.18Z'/%3e%3cpath%20class='cls-50'%20d='m142.69,182.72c0,.85.69,1.54,1.54,1.54s1.54-.69,1.54-1.54-.69-1.54-1.54-1.54-1.54.69-1.54,1.54Z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-45'%20points='153.99%20184.69%20128.14%20199.61%20128.14%20208.3%20129.63%20209.15%20155.49%20185.54%20153.99%20184.69'/%3e%3cpolygon%20class='cls-31'%20points='155.49%20185.54%20129.63%20200.46%20129.63%20209.15%20155.49%20194.22%20155.49%20185.54'/%3e%3cpath%20class='cls-6'%20d='m142.28,195.91c0,.65.53,1.18,1.18,1.18s1.18-.53,1.18-1.18-.53-1.18-1.18-1.18c-.65,0-1.18.53-1.18,1.18Z'/%3e%3ccircle%20class='cls-50'%20cx='144.23'%20cy='196.56'%20r='1.54'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-11'%20points='251.6%20257.76%20162.61%20206.38%20101.19%20241.84%2098.54%20241.56%2098.54%20243.37%20191.37%20296.97%20255.45%20259.98%20255.45%20258.17%20251.6%20257.76'/%3e%3cpolygon%20class='cls-14'%20points='98.54%20241.56%20162.61%20204.57%20255.45%20258.17%20191.37%20295.16%2098.54%20241.56'/%3e%3c/g%3e%3cpath%20class='cls-58'%20d='m323.43,212.09l1.2,4.19-.09-.15-.89.64-28.27-48.75-9.01,15.03L190.61,16.79,13.63,118.91v142.32h246.39l25.46-14.7h47.46l-13.49,7.79h-20.38l.45,2.58h28.12l16.2-9.36-20.42-35.45Zm-64.96,17.47l-5.77,9.62h-42.63l16.67-9.62h31.73Zm-40.71,0l-16.67,9.62h-69.87l16.67-9.62h69.87Zm-129.88,0h51.03l-16.67,9.62h-50.77l16.4-9.62Zm-37.83,22.19l17.33-10.16h50.71l-17.6,10.16h-50.43Zm59.4,0l17.6-10.16h69.87l-17.6,10.16h-69.87Zm150.17,0h-71.32l17.6-10.16h45.35l-2.39,3.99h21.35l-10.59,6.17Z'/%3e%3cg%3e%3cpath%20class='cls-6'%20d='m185.26,199.45h-3.54l1.09,7.73c.17,1.22,1.21,2.12,2.45,2.12h0c1.23,0,2.27-.91,2.45-2.12l1.09-7.73h-3.54Z'/%3e%3cpath%20class='cls-6'%20d='m248.86,235.72h-3.54l1.09,7.73c.17,1.22,1.21,2.12,2.45,2.12h0c1.23,0,2.27-.91,2.45-2.12l1.09-7.73h-3.54Z'/%3e%3cpath%20class='cls-6'%20d='m291.3,216.99h-3.54l1.09,7.73c.17,1.22,1.21,2.12,2.45,2.12h0c1.23,0,2.27-.91,2.45-2.12l1.09-7.73h-3.54Z'/%3e%3cg%3e%3cpath%20class='cls-39'%20d='m203.89,161.09l-21,12.12c-1.89,1.09-3.06,3.11-3.06,5.29v22.76l36.11-20.85,5.66-29.36-17.72,10.04Z'/%3e%3cpolygon%20class='cls-39'%20points='179.84%20201.26%20215.95%20221.92%20257.72%20171.71%20221.61%20151.05%20179.84%20201.26'/%3e%3cpath%20class='cls-37'%20d='m240,181.74l-21,12.12c-1.89,1.09-3.06,3.11-3.06,5.29v22.76l41.77-24.04v-26.18l-17.72,10.03Z'/%3e%3cpath%20class='cls-39'%20d='m203.89,161.09l3.96-27.38c.18-1.24.92-2.34,2.02-2.96l10.3-5.82c.64-.36,1.44.1,1.44.84v25.28l-17.72,10.04Z'/%3e%3cpolygon%20class='cls-39'%20points='257.18%20145.56%20221.09%20124.92%20203.89%20161.09%20240%20181.74%20257.18%20145.56'/%3e%3cpath%20class='cls-37'%20d='m240,181.74l3.96-27.38c.18-1.24.92-2.34,2.02-2.96l10.3-5.82c.64-.36,1.44.1,1.44.84v25.28l-17.72,10.04Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-39'%20d='m241.55,182.68l-21,12.12c-1.89,1.09-3.06,3.11-3.06,5.29v22.76l36.11-20.85,5.66-29.36-17.72,10.04Z'/%3e%3cpolygon%20class='cls-39'%20points='217.5%20222.85%20253.61%20243.5%20295.38%20193.29%20259.27%20172.64%20217.5%20222.85'/%3e%3cpath%20class='cls-39'%20d='m241.55,182.68l3.96-27.38c.18-1.24.92-2.34,2.02-2.96l10.3-5.82c.64-.36,1.44.1,1.44.84v25.28l-17.72,10.04Z'/%3e%3cpolygon%20class='cls-39'%20points='294.84%20167.14%20258.75%20146.51%20241.55%20182.68%20277.66%20203.33%20294.84%20167.14'/%3e%3cpath%20class='cls-37'%20d='m293.94,167.17l-10.3,5.82c-1.09.62-1.84,1.71-2.02,2.96l-3.96,27.38-21,12.12c-1.89,1.09-3.06,3.11-3.06,5.29v22.76l41.77-24.04v-51.46c0-.74-.8-1.2-1.44-.84Z'/%3e%3c/g%3e%3cpolygon%20class='cls-25'%20points='179.84%20178.51%20215.95%20199.16%20215.95%20221.92%20179.84%20201.26%20179.84%20178.51'/%3e%3cpolygon%20class='cls-25'%20points='217.5%20200.09%20253.61%20220.74%20253.61%20243.5%20217.5%20222.85%20217.5%20200.09'/%3e%3cpolygon%20class='cls-25'%20points='207.85%20133.71%20243.96%20154.36%20240%20181.74%20203.89%20161.09%20207.85%20133.71'/%3e%3cpolygon%20class='cls-25'%20points='245.51%20155.29%20281.62%20175.95%20277.66%20203.33%20241.55%20182.68%20245.51%20155.29'/%3e%3cpath%20class='cls-58'%20d='m295.34,167.74s-.01-.03-.02-.05c-.02-.07-.05-.14-.09-.2,0,0-.01-.01-.02-.02-.1-.14-.23-.25-.37-.32h0s0,0,0,0c-.27-.13-.6-.15-.89.02l-10.3,5.82c-1.09.62-1.84,1.71-2.02,2.96l-3.37,23.31h0l-22.83-39.56,13.13-7.58-9.73-5.57c-.28-.18-.66-.22-.99-.03l-.11.06v-.16c0-.4-.23-.71-.55-.86h0s-36.02-20.6-36.02-20.6c-.28-.18-.66-.22-.99-.03l-10.3,5.82c-1.09.62-1.84,1.71-2.02,2.96l-3.96,27.38h0l-21,12.12c-1.89,1.09-3.06,3.11-3.06,5.29v22.76l2.33,1.33.65,4.58c.17,1.22,1.21,2.12,2.45,2.12s2.27-.91,2.45-2.12l.18-1.31,28.06,16.04,1.55-.89v1.83l11.73,6.71v-19.51l16.57,9.78v19.2l.31,2.2c1.64,1.11,3.26,2.21,4.8,3.26h0c.1-.14.18-.29.24-.45,0-.02.02-.04.02-.05.07-.17.12-.34.14-.53l.17-1.17,2.14,1.22,24.05-13.86,17.72-10.17v-51.46c0-.1-.02-.19-.04-.27Z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-49'%20points='61.99%20187.53%2048.53%20195.3%2032.99%20186.33%2046.45%20178.56%2061.99%20187.53'/%3e%3cpolygon%20class='cls-6'%20points='48.53%20195.3%2048.53%20278.24%2061.99%20270.47%2061.99%20187.53%2048.53%20195.3'/%3e%3cpolygon%20class='cls-16'%20points='32.99%20186.33%2032.99%20269.27%2048.53%20278.24%2048.53%20195.3%2032.99%20186.33'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-6'%20d='m63.39,280.44h-2.1l.65,4.59c.1.72.72,1.26,1.45,1.26h0c.73,0,1.35-.54,1.45-1.26l.65-4.59h-2.1Z'/%3e%3cpath%20class='cls-6'%20d='m122.92,314.68h-2.1l.65,4.59c.1.72.72,1.26,1.45,1.26h0c.73,0,1.35-.54,1.45-1.26l.65-4.59h-2.1Z'/%3e%3cpath%20class='cls-6'%20d='m142.15,303.58h-2.1l.65,4.59c.1.72.72,1.26,1.45,1.26h0c.73,0,1.35-.54,1.45-1.26l.65-4.59h-2.1Z'/%3e%3cpolygon%20class='cls-33'%20points='58.18%20244.72%2058.18%20278.64%20122.92%20315.96%20122.92%20282.03%2058.18%20244.72'/%3e%3cpolygon%20class='cls-45'%20points='122.92%20282.03%20145.94%20268.74%20145.94%20302.67%20122.92%20315.96%20122.92%20282.03'/%3e%3cpolygon%20class='cls-27'%20points='80.71%20226.11%20148.77%20265.35%20123.42%20279.99%2055.35%20240.75%2080.71%20226.11'/%3e%3cpolygon%20class='cls-31'%20points='55.35%20240.75%2055.35%20244.43%20123.42%20283.67%20123.42%20279.99%2055.35%20240.75'/%3e%3cpolygon%20class='cls-33'%20points='123.42%20283.67%20148.77%20269.03%20148.77%20265.35%20123.42%20279.99%20123.42%20283.67'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-6'%20d='m89.83,259.37c5.37,3.1,13.5,3.44,18.15.75,4.65-2.69,4.07-7.38-1.3-10.48-5.37-3.1-13.5-3.44-18.15-.75-4.65,2.69-4.07,7.38,1.3,10.48Z'/%3e%3cpath%20class='cls-4'%20d='m91.8,256.5c4.12,2.38,10.35,2.64,13.91.58,3.57-2.06,3.12-5.65-1-8.03-4.12-2.38-10.35-2.64-13.91-.58-3.57,2.06-3.12,5.65,1,8.03Z'/%3e%3cpolygon%20class='cls-49'%20points='76.36%20194.39%2074.42%20195.57%2076.36%20198.36%2076.36%20233.52%20126.48%20262.38%20129.13%20266.21%20131.07%20265.03%20131.07%20225.9%2076.36%20194.39'/%3e%3cpolygon%20class='cls-16'%20points='129.13%20266.21%2074.42%20234.7%2074.42%20195.57%20129.13%20227.07%20129.13%20266.21'/%3e%3cpolygon%20class='cls-6'%20points='115.41%20252.89%20113.45%20254.07%2086.99%20236.53%2085.03%20217.38%2086.99%20216.2%20115.41%20232.56%20115.41%20252.89'/%3e%3cpolygon%20class='cls-6'%20points='129.13%20227.07%20131.07%20225.9%20131.07%20265.03%20129.13%20266.21%20129.13%20227.07'/%3e%3cpolygon%20class='cls-49'%20points='113.45%20254.07%2085.03%20237.7%2085.03%20217.38%20113.45%20233.74%20113.45%20254.07'/%3e%3cpolygon%20class='cls-6'%20points='94.87%20228.4%20103.6%20233.44%20103.6%20253.91%20101.64%20255.09%2092.91%20250.25%2092.91%20229.58%2094.87%20228.4'/%3e%3cpolygon%20class='cls-16'%20points='92.91%20229.58%20101.64%20234.62%20101.64%20255.29%2092.91%20250.25%2092.91%20229.58'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-49'%20points='163.27%20242.8%20149.81%20250.57%20134.27%20241.6%20147.73%20233.83%20163.27%20242.8'/%3e%3cpolygon%20class='cls-6'%20points='149.81%20250.57%20149.81%20333.51%20163.27%20325.74%20163.27%20242.8%20149.81%20250.57'/%3e%3cpolygon%20class='cls-16'%20points='134.27%20241.6%20134.27%20324.53%20149.81%20333.51%20149.81%20250.57%20134.27%20241.6'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='cls-32'%20d='m319.45,233.38l-1.48-.12c-1.14-1.71-2.94-3.35-5.4-4.77-8.32-4.8-20.9-5.33-28.11-1.17-1.52.88-2.65,1.89-3.45,2.99l-1.4-.11v4.38h.02c.1,3.13,2.41,6.4,6.86,8.97,8.32,4.8,20.9,5.33,28.11,1.17,3.19-1.84,4.78-4.29,4.86-6.87h0v-4.47h0Z'/%3e%3cpath%20class='cls-58'%20d='m285.32,226.89c-.29.14-.59.28-.86.44-1.52.88-2.65,1.89-3.45,2.99l-1.4-.11v4.38h.02c.1,3.13,2.41,6.4,6.86,8.97,2.15,1.24,4.58,2.19,7.14,2.85l-8.29-19.52Z'/%3e%3cellipse%20class='cls-47'%20cx='299.54'%20cy='231.96'%20rx='11.33'%20ry='20.03'%20transform='translate(33.04%20501.24)%20rotate(-83.05)'/%3e%3c/g%3e%3cpath%20class='cls-32'%20d='m281.82,246.53h0c-1.23,0-2.22-.99-2.22-2.22v-25.2h4.44v25.2c0,1.23-1,2.22-2.22,2.22Z'/%3e%3cpath%20class='cls-32'%20d='m317.23,246.53h0c-1.23,0-2.22-.99-2.22-2.22v-21.15h4.44v21.15c0,1.23-.99,2.22-2.22,2.22Z'/%3e%3cpath%20class='cls-32'%20d='m299.52,256.89h0c-1.23,0-2.22-.99-2.22-2.22v-25.2h4.44v25.2c0,1.23-1,2.22-2.22,2.22Z'/%3e%3cg%3e%3cpath%20class='cls-32'%20d='m324.54,216.12l-1.85-.15c-1.44-2.15-3.69-4.2-6.79-5.99-10.45-6.03-26.26-6.69-35.3-1.46-1.9,1.1-3.33,2.38-4.34,3.76l-1.77-.14v5.5h.03c.13,3.93,3.02,8.04,8.61,11.27,10.45,6.03,26.26,6.69,35.3,1.46,4.01-2.31,6.01-5.39,6.1-8.63h0v-5.62h0Z'/%3e%3cellipse%20class='cls-47'%20cx='299.54'%20cy='214.34'%20rx='14.23'%20ry='25.16'%20transform='translate(50.53%20485.75)%20rotate(-83.05)'/%3e%3c/g%3e%3cpath%20class='cls-58'%20d='m274.66,218.88c.06.34.13.67.23,1.01,0,0,0,.02,0,.03.1.33.23.67.36,1,.03.06.05.13.08.19.15.35.32.69.52,1.04,0,0,0,0,0,0,.2.35.42.69.66,1.03.03.04.06.08.09.13.5.7,1.1,1.39,1.78,2.06.03.03.05.05.08.08.35.34.72.68,1.12,1.01,1.03.86,2.2,1.68,3.54,2.45,1.24.71,2.55,1.35,3.92,1.91l-2.68-6.16,32.83-18.96h0c-.42-.27-.85-.54-1.3-.8-10.45-6.03-26.26-6.69-35.3-1.46-4.04,2.33-6.04,5.44-6.09,8.71h-.01s0,5.5,0,5.5h.03c.01.34.05.67.1,1,.01.08.02.16.04.24Z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-35'%20points='132.68%20132.72%20129.43%20134.6%20138.74%20139.98%20142%20138.1%20132.68%20132.72'/%3e%3cpolygon%20class='cls-3'%20points='128.85%20134.27%20128.85%20149.7%20138.74%20155.41%20138.74%20139.98%20128.85%20134.27'/%3e%3cpolygon%20class='cls-53'%20points='128.85%20134.27%20129.24%20134.05%20139.12%20139.76%20138.74%20139.98%20128.85%20134.27'/%3e%3cpolygon%20class='cls-53'%20points='131.73%20132.61%20132.11%20132.39%20142%20138.1%20141.62%20138.32%20131.73%20132.61'/%3e%3cpolygon%20class='cls-7'%20points='138.74%20155.41%20142%20153.53%20142%20138.1%20138.74%20139.98%20138.74%20155.41'/%3e%3cpolygon%20class='cls-53'%20points='142%20138.1%20141.57%20137.85%20138.31%20139.73%20138.74%20139.98%20142%20138.1'/%3e%3cpolygon%20class='cls-13'%20points='131.73%20132.61%20131.73%20133.27%20131.96%20133.14%20140.81%20138.28%20141.2%20138.05%20131.73%20132.61'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-35'%20points='129.43%20134.6%20126.17%20136.48%20135.48%20141.86%20138.74%20139.98%20129.43%20134.6'/%3e%3cpolygon%20class='cls-56'%20points='125.6%20136.15%20125.6%20151.58%20135.48%20157.29%20135.48%20141.86%20125.6%20136.15'/%3e%3cpolygon%20class='cls-20'%20points='125.6%20136.15%20125.98%20135.93%20135.87%20141.64%20135.48%20141.86%20125.6%20136.15'/%3e%3cpolygon%20class='cls-20'%20points='128.47%20134.49%20128.85%20134.27%20138.74%20139.98%20138.36%20140.2%20128.47%20134.49'/%3e%3cpolygon%20class='cls-37'%20points='135.48%20157.29%20138.74%20155.41%20138.74%20139.98%20135.48%20141.86%20135.48%20157.29'/%3e%3cpolygon%20class='cls-20'%20points='138.74%20139.98%20138.31%20139.73%20135.05%20141.61%20135.48%20141.86%20138.74%20139.98'/%3e%3cpolygon%20class='cls-56'%20points='128.47%20134.49%20128.47%20135.15%20128.7%20135.02%20137.55%20140.16%20137.94%20139.93%20128.47%20134.49'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-35'%20points='126.17%20136.49%20122.91%20138.37%20132.22%20143.75%20135.48%20141.87%20126.17%20136.49'/%3e%3cpolygon%20class='cls-3'%20points='122.34%20138.04%20122.34%20153.47%20132.22%20159.18%20132.22%20143.75%20122.34%20138.04'/%3e%3cpolygon%20class='cls-9'%20points='122.34%20138.04%20122.72%20137.82%20132.61%20143.53%20132.22%20143.75%20122.34%20138.04'/%3e%3cpolygon%20class='cls-9'%20points='125.21%20136.39%20125.6%20136.16%20135.48%20141.87%20135.1%20142.09%20125.21%20136.39'/%3e%3cpolygon%20class='cls-43'%20points='132.22%20159.18%20135.48%20157.3%20135.48%20141.87%20132.22%20143.75%20132.22%20159.18'/%3e%3cpolygon%20class='cls-9'%20points='135.48%20141.87%20135.05%20141.62%20131.79%20143.5%20132.22%20143.75%20135.48%20141.87'/%3e%3cpolygon%20class='cls-43'%20points='125.21%20136.39%20125.21%20137.04%20125.44%20136.91%20134.29%20142.06%20134.69%20141.83%20125.21%20136.39'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='cls-35'%20points='122.91%20138.39%20119.65%20140.27%20128.97%20145.66%20132.22%20143.77%20122.91%20138.39'/%3e%3cpolygon%20class='cls-15'%20points='119.08%20139.95%20119.08%20155.38%20128.97%20161.09%20128.97%20145.66%20119.08%20139.95'/%3e%3cpolygon%20class='cls-42'%20points='119.08%20139.95%20119.46%20139.73%20129.35%20145.43%20128.97%20145.66%20119.08%20139.95'/%3e%3cpolygon%20class='cls-42'%20points='121.96%20138.29%20122.34%20138.07%20132.22%20143.77%20131.84%20144%20121.96%20138.29'/%3e%3cpolygon%20class='cls-15'%20points='128.97%20161.09%20132.22%20159.2%20132.22%20143.77%20128.97%20145.66%20128.97%20161.09'/%3e%3cpolygon%20class='cls-42'%20points='132.22%20143.77%20131.79%20143.52%20128.54%20145.4%20128.97%20145.66%20132.22%20143.77'/%3e%3cpolygon%20class='cls-12'%20points='121.96%20138.29%20121.96%20138.95%20122.18%20138.81%20131.03%20143.96%20131.43%20143.73%20121.96%20138.29'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-15'%20d='m294.79,213.77l.57-.33v.38l8.14,3.94s.12.87-.67.75c-.79-.11-7.92-4.57-7.92-4.57l-.11-.17Z'/%3e%3cpath%20class='cls-23'%20d='m295.35,210.85l7.65,4.42c.68.39,1.1,1.12,1.1,1.91h0c0,.76-.82,1.23-1.48.85l-7.27-4.22v-2.96Z'/%3e%3cpath%20class='cls-40'%20d='m314.68,211.52c0-.79-.42-1.52-1.1-1.91l-7.99-4.61-10.81,6.24,8.19,4.97.68,1.26-.13,1.04,10.51-6.07c.11-.04.21-.1.3-.17h0c.21-.18.35-.44.35-.75Z'/%3e%3cpath%20class='cls-15'%20d='m302.71,216.05l.27.16.68,1.26-.13,1.04,10.51-6.07c.11-.04.21-.1.3-.17.21-.18.35-.44.35-.75,0-.79-.42-1.52-1.1-1.91h0l-10.81,6.24-.06.2Z'/%3e%3cpath%20class='cls-42'%20d='m295.59,214.23h0l7,4.04c.09.05.19.08.3.08.29,0,.6-.23.6-.6,0-.65-.35-1.25-.91-1.58l-6.57-3.79h0l-1.22-.71v-.45l7.99,4.61c.68.39,1.1,1.12,1.1,1.91,0,.58-.47.99-.99.99-.16,0-.33-.04-.49-.13l-7.61-4.4v-.45l.8.46Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-23'%20d='m298,206.05h0v-6.72l-7.76-.74v6.76c-.03.64.43,1.32,1.34,1.84,1.62.94,4.07,1.04,5.48.23.63-.37.94-.85.94-1.36Z'/%3e%3cpath%20class='cls-39'%20d='m296.66,197.48c1.62.94,1.8,2.35.39,3.16-1.4.81-3.86.71-5.48-.23s-1.8-2.35-.39-3.16,3.86-.71,5.48.23Z'/%3e%3cpath%20class='cls-25'%20d='m296.27,197.7c1.37.79,1.52,1.99.33,2.68s-3.27.6-4.64-.19-1.52-1.99-.33-2.68c1.19-.69,3.27-.6,4.64.19Z'/%3e%3cpath%20class='cls-8'%20d='m296.27,199.12c-1.37-.79-3.45-.88-4.64-.19-.24.14-.43.3-.56.48.19.28.48.55.89.79,1.37.79,3.45.88,4.64.19.24-.14.43-.3.56-.48-.19-.28-.49-.55-.89-.79Z'/%3e%3cpath%20class='cls-35'%20d='m297.52,206.49c-.27,0-.53-.07-.78-.21-.33-.19-.45-.62-.26-.96s.62-.45.95-.26c.06.04.12.02.15,0,.03-.02.08-.06.08-.13v-.68c0-.66-.36-1.28-.93-1.61-.33-.19-.45-.62-.26-.96.19-.34.62-.45.95-.26,1,.58,1.63,1.66,1.63,2.82v.68c0,.56-.29,1.06-.77,1.34-.24.14-.51.21-.77.21Z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='cls-32'%20d='m113.9,152.68v1.19c0,1.89.28,3.95.8,5.77h0c.09.49.44.95,1.05,1.3,1.6.92,4.39.81,6.24-.26.89-.51,1.4-1.16,1.5-1.79h0l.23-1.09c.39-1.59.58-3.21.58-4.84v-1l-10.42.71Z'/%3e%3cpath%20class='cls-47'%20d='m122.51,154.38c-2.18,1.26-5.47,1.39-7.35.3-1.88-1.09-1.65-2.99.53-4.24,2.18-1.26,5.47-1.39,7.35-.3,1.88,1.09,1.65,2.99-.53,4.24Z'/%3e%3cpath%20class='cls-8'%20d='m121.73,153.93c-1.68.97-4.22,1.07-5.67.24s-1.27-2.3.41-3.27c1.68-.97,4.22-1.07,5.67-.24,1.45.84,1.27,2.31-.41,3.27Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-44'%20d='m119.31,152.57s-.92-.77-2.68-.16c-1.35.48-1.99.98-2.74,1.96-.74.96-1.23,2.39-1.23,2.39,0,0,2.6.06,4.12-.54,1.73-.68,3.29-1.77,2.53-3.65Z'/%3e%3cpath%20class='cls-44'%20d='m119.31,152.57s-.42-2.82,2.21-3.84c2.93-1.13,5.12.02,5.12.02,0,0-.21,2.46-3.33,3.44-2.33.73-4.01.37-4.01.37Z'/%3e%3cpath%20class='cls-44'%20d='m119.71,151.48s-.47-1.82-2.07-2.74c-1.71-.99-3.7-.76-3.7-.76,0,0,.56,3.85,2.62,4.71,2.06.86,2.74-.3,2.74-.3l.4-.91Z'/%3e%3cpath%20class='cls-28'%20d='m119.1,152.3s1.34-1.01,2.81-.98c2.4.06,3.67,2.08,3.67,2.08,0,0-2.02,1.41-4.32.95-2.3-.46-2.17-2.05-2.17-2.05Z'/%3e%3cpath%20class='cls-28'%20d='m119.1,152.31c-.68-.8-1.08-1.82-1.02-2.88.02-.37.1-.72.27-1,.61-1.01,1.66-1.71,1.66-1.71,0,0,1.27,1.5,1.03,3.18s-1.93,2.42-1.93,2.42h0Z'/%3e%3cpath%20class='cls-28'%20d='m118.73,152.24s-.54-.88-2.06-1.17c-1.52-.29-3.36.61-3.36.61,0,0,.72,1.54,2.6,1.81,1.88.27,2.82-1.25,2.82-1.25Z'/%3e%3cpath%20class='cls-28'%20d='m119.1,152.41s-1.4,1.35-.39,2.85,1.77,1.74,1.77,1.74c0,0,1.21-1.46.99-2.66-.21-1.2-.96-2.52-2.38-1.93Z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-6'%20d='m291.79,211.2l-2.18-.53-4.64-2.68c-1.01-.58-2.76-.51-3.93.16l-.32.18c-.08.04-.15.09-.22.14l-.91-.22.17,1.49c.04.32.26.63.67.86l5.97,3.46c1.01.58,2.76.51,3.93-.16l.32-.18c.63-.36.95-.82.96-1.26h0s.17-1.25.17-1.25Z'/%3e%3cpath%20class='cls-16'%20d='m280.58,206.92l.33-.19c1.19-.69,3-.76,4.04-.17l6.14,3.55c1.03.6.9,1.64-.29,2.33l-.33.19c-1.19.69-3,.76-4.04.17l-6.14-3.55c-1.03-.6-.9-1.64.29-2.33Z'/%3e%3cpath%20class='cls-6'%20d='m280.74,208.42l2.82-1.63c.39-.23.99-.25,1.33-.05l4.8,2.77c.34.2.3.54-.1.77l-2.82,1.63c-.39.23-.99.25-1.33.05l-4.8-2.77c-.34-.2-.3-.54.1-.77Z'/%3e%3cpath%20class='cls-14'%20d='m289.84,210.94c-.21-.12-.19-.34.06-.48s.62-.16.83-.03c.21.12.19.34-.06.48-.24.14-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m288.46,210.14c-.21-.12-.19-.34.06-.48s.62-.16.83-.03c.21.12.19.34-.06.48-.24.14-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m287.04,210.96c-.21-.12-.19-.34.06-.48s.62-.16.83-.03c.21.12.19.34-.06.48s-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m285.61,211.79c-.21-.12-.19-.34.06-.48s.62-.16.83-.03c.21.12.19.34-.06.48-.25.14-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m287.2,209.41c-.21-.12-.19-.34.06-.48.25-.14.62-.16.83-.03.21.12.19.34-.06.48-.24.14-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m285.78,210.24c-.21-.12-.19-.34.06-.48s.62-.16.83-.03c.21.12.19.34-.06.48-.24.14-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m284.35,211.06c-.21-.12-.19-.34.06-.48s.62-.16.83-.03.19.34-.06.48c-.24.14-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m285.94,208.69c-.21-.12-.19-.34.06-.48s.62-.16.83-.03c.21.12.19.34-.06.48-.24.14-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m284.52,209.51c-.21-.12-.19-.34.06-.48.25-.14.62-.16.83-.03.21.12.19.34-.06.48-.24.14-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m283.09,210.33c-.21-.12-.19-.34.06-.48s.62-.16.83-.03c.21.12.19.34-.06.48-.24.14-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m284.68,207.96c-.21-.12-.19-.34.06-.48s.62-.16.83-.03c.21.12.19.34-.06.48-.25.14-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m283.26,208.78c-.21-.12-.19-.34.06-.48s.62-.16.83-.03.19.34-.06.48-.62.16-.83.03Z'/%3e%3cpath%20class='cls-16'%20d='m281.83,209.61c-.21-.12-.19-.34.06-.48s.62-.16.83-.03.19.34-.06.48-.62.16-.83.03Z'/%3e%3cpath%20class='cls-48'%20d='m283.72,207.07l.51-.29c.06-.03.13-.03.19,0h0c.13.07.13.26,0,.33l-.51.29c-.06.03-.13.03-.19,0h0c-.13-.08-.13-.26,0-.33Z'/%3e%3cpath%20class='cls-52'%20d='m282.29,207.89l.51-.29c.06-.04.13-.04.19,0h0c.13.07.13.26,0,.33l-.5.29c-.06.03-.13.03-.19,0h0c-.13-.07-.13-.26,0-.33Z'/%3e%3cpath%20class='cls-5'%20d='m280.87,208.72l.51-.29c.06-.04.13-.04.19,0h0c.13.07.13.26,0,.33l-.51.29c-.06.03-.13.03-.19,0h0c-.13-.08-.13-.26,0-.33Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Y0 = {
  setup() {
    return {
      myStore: me()
    };
  },
  methods: {
    apartmentOptionToggle() {
      this.myStore.apartmentOptionStatus ? (this.myStore.apartmentOptionStatus = !1, this.myStore.chooseBlockPanelVisibility = !1, this.myStore.backButtonVisibility = !0, this.myStore.blokListButtonVisibility = !0, this.myStore.apartmentPanelVisibility = !1) : (this.myStore.apartmentOptionStatus = !0, this.myStore.chooseBlockPanelVisibility = !0, this.myStore.backButtonVisibility = !1, this.myStore.blokListButtonVisibility = !1, this.myStore.apartmentPanelVisibility = !0), this.myStore.viewerType = "PROJECT-VIEW";
    },
    dollView() {
      this.myStore.viewerType = "DOLL-VIEW";
    },
    virtualTourView() {
      this.myStore.viewerType = "VIRTUAL-TOUR";
    }
  }
}, G0 = /* @__PURE__ */ p("img", {
  src: sn,
  width: "50px",
  height: "50px"
}, null, -1), X0 = /* @__PURE__ */ p("div", { class: "text" }, "Daire Maket Görüntüsü", -1), J0 = [
  G0,
  X0
], Q0 = /* @__PURE__ */ p("img", {
  src: sn,
  width: "50px",
  height: "50px"
}, null, -1), e3 = /* @__PURE__ */ p("div", { class: "text" }, "Sanal Tur", -1), t3 = [
  Q0,
  e3
], s3 = /* @__PURE__ */ p("img", {
  src: sn,
  width: "50px",
  height: "50px"
}, null, -1), n3 = /* @__PURE__ */ p("div", { class: "text" }, "Balkon Görüntüsü", -1), i3 = [
  s3,
  n3
], o3 = /* @__PURE__ */ p("div", { class: "text" }, "Yapı Görüntüsü", -1), r3 = /* @__PURE__ */ p("i", { class: "bi bi-arrow-left" }, null, -1), l3 = /* @__PURE__ */ p("div", { class: "text" }, "Listeye Dön", -1), c3 = [
  r3,
  l3
];
function a3(e, t, s, n, o, r) {
  return E(), C("div", {
    class: ie(
      "d-flex flex-column mb-3 view_left_apartment-option-panel " + (this.myStore.apartmentPanelVisibility ? "open" : "")
    )
  }, [
    p("div", {
      class: ie(`view_left_apartment-option-panel-item ${n.myStore.viewerType == "DOLL-VIEW" ? "selected" : ""}`),
      onClick: t[0] || (t[0] = (...l) => r.dollView && r.dollView(...l))
    }, J0, 2),
    p("div", {
      class: ie(`view_left_apartment-option-panel-item ${n.myStore.viewerType == "VIRTUAL-TOUR" ? "selected" : ""}`),
      onClick: t[1] || (t[1] = (...l) => r.virtualTourView && r.virtualTourView(...l))
    }, t3, 2),
    p("div", {
      class: ie(`view_left_apartment-option-panel-item ${n.myStore.viewerType == "BALCONY-VIEW" ? "selected" : ""}`)
    }, i3, 2),
    p("div", {
      class: ie(`view_left_apartment-option-panel-item ${n.myStore.viewerType == "PROJECT-VIEW" ? "selected" : ""}`)
    }, [
      p("img", {
        src: sn,
        width: "50px",
        height: "50px",
        onClick: t[2] || (t[2] = (...l) => r.apartmentOptionToggle && r.apartmentOptionToggle(...l))
      }),
      o3
    ], 2),
    p("div", {
      class: "view_left_apartment-option-panel-item",
      onClick: t[3] || (t[3] = (...l) => r.apartmentOptionToggle && r.apartmentOptionToggle(...l))
    }, c3)
  ], 2);
}
const u3 = /* @__PURE__ */ ee(Y0, [["render", a3]]), h3 = {
  props: ["list"],
  setup() {
    return { myStore: me() };
  },
  methods: {
    goTo(e) {
      this.$router.push({ path: "/", query: { viewId: e } });
    }
  }
}, d3 = /* @__PURE__ */ p("div", { class: "view_left_top_choose-list-panel-item selected" }, "Ana Ekran", -1), p3 = ["onClick"], f3 = /* @__PURE__ */ p("i", { class: "bi bi-arrow-right" }, null, -1), m3 = [
  f3
];
function g3(e, t, s, n, o, r) {
  return this.myStore.viewerType == "PROJECT-VIEW" ? (E(), C("div", {
    key: 0,
    class: ie(
      "d-flex flex-column mb-3 view_left_top_choose-list-panel " + (n.myStore.chooseBlockPanelVisibility ? "open" : "")
    )
  }, [
    d3,
    s.list != null ? (E(!0), C(ce, { key: 0 }, Ne(s.list, (l, u) => (E(), C("div", {
      class: "view_left_top_choose-list-panel-item",
      key: u,
      onClick: (a) => r.goTo(l.id)
    }, Q(l.title), 9, p3))), 128)) : D("", !0),
    p("div", {
      class: "view_left_top_choose-list-panel-back-button",
      onClick: t[0] || (t[0] = (...l) => e.$parent.chooseViewPanelToggle && e.$parent.chooseViewPanelToggle(...l))
    }, m3)
  ], 2)) : D("", !0);
}
const _3 = /* @__PURE__ */ ee(h3, [["render", g3]]), Xr = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2028.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20100%20100'%20style='enable-background:new%200%200%20100%20100;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23F1F2F2;}%20.st1{fill:%23ED1C24;}%20.st2{fill:%23BE1E2D;}%20.st3{fill:%23D1D3D4;}%20.st4{fill:%23E6E7E8;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M50,7c23.71,0,43,19.29,43,43S73.71,93,50,93S7,73.71,7,50S26.29,7,50,7%20M50,0C22.39,0,0,22.39,0,50%20s22.39,50,50,50s50-22.39,50-50S77.61,0,50,0L50,0z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpolygon%20class='st1'%20points='50,50%2033.88,50%2050,17.76%20'/%3e%3cpolyline%20class='st2'%20points='50,50%2066.12,50%2050,17.76%20'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st3'%20points='50,50%2066.12,50%2050,82.24%20'/%3e%3cpolyline%20class='st4'%20points='50,50%2033.88,50%2050,82.24%20'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", v3 = {
  props: ["loading", "list", "currentFrame", "isMainView"],
  setup() {
    return { myStore: me() };
  },
  components: { FlatOptions: u3, BlockOption: _3 },
  methods: {
    dollView() {
      this.myStore.viewerType = "DOLL-VIEW";
    },
    virtualTourView() {
      this.myStore.viewerType = "VIRTUAL-TOUR";
    },
    dayTypeToggle() {
      this.myStore.dayType == "light" ? this.myStore.dayType = "night" : this.myStore.dayType = "light";
    },
    polygonShowToggle() {
      this.myStore.polygonVisibility = !this.myStore.polygonVisibility;
    },
    backToMain() {
      this.$router.push({ path: "/", query: {} });
    },
    chooseViewPanelToggle() {
      this.myStore.blokListButtonVisibility = !this.myStore.blokListButtonVisibility, this.myStore.chooseBlockPanelVisibility = !this.myStore.chooseBlockPanelVisibility, this.myStore.backButtonVisibility = !this.myStore.backButtonVisibility;
    }
  }
}, y3 = { class: "viewer_left_top" }, b3 = {
  key: 0,
  class: "d-flex point-event-auto"
}, w3 = { class: "btn btn-light mr-2 p-0" }, E3 = {
  key: 0,
  class: "bi bi-brightness-high-fill"
}, S3 = {
  key: 1,
  class: "bi bi-moon-fill"
}, A3 = {
  key: 0,
  class: "bi bi-eye-fill"
}, T3 = {
  key: 1,
  class: "bi bi-eye-slash-fill"
}, C3 = { class: "d-flex flex-column point-event-auto" }, $3 = /* @__PURE__ */ p("i", {
  class: "bi bi-search",
  style: { "font-size": "25px" }
}, null, -1), O3 = /* @__PURE__ */ p("br", null, null, -1), k3 = /* @__PURE__ */ p("div", {
  class: "text-wrap",
  style: { "font-size": "13px", "font-weight": "bold" }
}, "Blok Listesi", -1), x3 = [
  $3,
  O3,
  k3
], P3 = /* @__PURE__ */ p("i", {
  class: "bi bi-arrow-left",
  style: { "font-size": "25px" }
}, null, -1), L3 = /* @__PURE__ */ p("br", null, null, -1), D3 = /* @__PURE__ */ p("div", {
  class: "text-wrap",
  style: { "font-size": "13px", "font-weight": "bold" }
}, "Geri Dön", -1), N3 = [
  P3,
  L3,
  D3
];
function R3(e, t, s, n, o, r) {
  const l = X("FlatOptions"), u = X("BlockOption");
  return E(), C("div", y3, [
    n.myStore.viewerType == "PROJECT-VIEW" ? (E(), C("div", b3, [
      p("div", w3, [
        p("img", {
          style: Ge(
            "display:flex;padding-top:4px;padding-bottom:4px;transform:rotate(" + s.currentFrame * 3 + "deg);width:40px;height:35px;"
          ),
          src: Xr
        }, null, 4)
      ]),
      n.myStore.dayTypeVisibility ? (E(), C("button", {
        key: 0,
        class: "btn btn-light mr-2",
        onClick: t[0] || (t[0] = (...a) => r.dayTypeToggle && r.dayTypeToggle(...a))
      }, [
        n.myStore.dayType == "light" ? (E(), C("i", E3)) : D("", !0),
        n.myStore.dayType == "night" ? (E(), C("i", S3)) : D("", !0)
      ])) : D("", !0),
      p("button", {
        class: "btn btn-light mr-2",
        onClick: t[1] || (t[1] = (...a) => r.polygonShowToggle && r.polygonShowToggle(...a))
      }, [
        n.myStore.polygonVisibility ? D("", !0) : (E(), C("i", A3)),
        n.myStore.polygonVisibility ? (E(), C("i", T3)) : D("", !0)
      ])
    ])) : D("", !0),
    p("div", C3, [
      p("button", {
        class: ie(
          "btn btn-lg btn-light mr-2 mt-2 p-2 view_left_top_choose-list-panel-button " + (this.myStore.blokListButtonVisibility ? "" : "hide")
        ),
        onClick: t[2] || (t[2] = (...a) => r.chooseViewPanelToggle && r.chooseViewPanelToggle(...a))
      }, x3, 2),
      !this.myStore.isMainView && n.myStore.viewerType == "PROJECT-VIEW" ? (E(), C("button", {
        key: 0,
        class: ie(
          "btn btn-lg btn-light mr-2 mt-2 p-2 view_left_top_choose-list-panel-button " + (this.myStore.backButtonVisibility ? "" : "hide")
        ),
        onClick: t[3] || (t[3] = (...a) => r.backToMain && r.backToMain(...a))
      }, N3, 2)) : D("", !0),
      he(l),
      s.loading ? D("", !0) : (E(), ke(u, {
        key: 1,
        list: s.list.blockList
      }, null, 8, ["list"]))
    ])
  ]);
}
const _i = /* @__PURE__ */ ee(v3, [["render", R3]]), Jr = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20data-name='Layer%202'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20441.95%20200.27'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23ea5b0c;%20}%20.cls-1,%20.cls-2%20{%20stroke-width:%200px;%20}%20.cls-2%20{%20fill:%20%231a2141;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1-2'%20data-name='Layer%201'%3e%3cg%3e%3cpath%20class='cls-2'%20d='m191.04,90.34v6.4c0,3.22,2.92,5.65,6.08,5.06l8.2-1.52v-12.59l-14.29,2.65Z'/%3e%3cg%3e%3cpath%20class='cls-2'%20d='m361.19,167.66l2.93-11.94c-.64.22-1.31.42-2.05.55-1.11.2-2.14.3-3.1.3-3.18,0-5.22-.84-6.13-2.5-.91-1.67-1.37-3.77-1.37-6.31v-24.25h14.29v-13.73h-14.29v-25.77l-14.05,11.86v52c0,2.78.26,5.38.77,7.8.51,2.42,1.47,4.57,2.86,6.43,1.39,1.87,3.27,3.33,5.66,4.41,2.38,1.07,5.48,1.61,9.29,1.61,1.59,0,3.26-.14,5-.42.07-.01.13-.03.19-.04Z'/%3e%3cpath%20class='cls-2'%20d='m10.83,45.72H0v-11.43h10.83v-8.45c0-3.41.38-6.69,1.13-9.82.75-3.13,2.02-5.89,3.81-8.27,1.79-2.38,4.15-4.27,7.08-5.66,2.94-1.39,6.63-2.08,11.07-2.08,1.59,0,2.92.06,3.99.18,1.07.12,2.16.34,3.27.65,0,0-3.5,11.62-3.51,11.55-.91-.16-1.89-.24-2.92-.24-2.06,0-3.73.4-5,1.19-1.27.79-2.24,1.83-2.92,3.09-.68,1.27-1.13,2.66-1.37,4.17-.24,1.51-.36,2.98-.36,4.41v9.29h13.22v11.43h-13.22v45.72h-14.29v-45.72Z'/%3e%3cpath%20class='cls-2'%20d='m205.33,109.77v60.6c0,3.41-.28,6.65-.83,9.7-.56,3.06-1.61,5.72-3.15,7.98-1.55,2.26-3.65,4.07-6.31,5.42-2.66,1.35-6.13,2.02-10.42,2.02-1.19,0-2.38-.08-3.57-.24-1.19-.16-2.14-.32-2.86-.48l1.19-12.14c.64.16,1.31.28,2.02.36.71.08,1.35.12,1.91.12,1.67,0,3.02-.32,4.05-.95,1.03-.64,1.82-1.51,2.38-2.62.55-1.11.91-2.4,1.07-3.87.16-1.47.24-3.04.24-4.7v-52.53c0-3.49,2.49-6.48,5.92-7.11l8.37-1.55Z'/%3e%3cg%3e%3cpath%20class='cls-2'%20d='m50.41,36.09l9.74-1.81v57.15h-14.29v-49.88c0-2.68,1.91-4.98,4.54-5.46Z'/%3e%3cpath%20class='cls-2'%20d='m45.87,15.85v6.94c0,2.94,2.67,5.16,5.56,4.62l8.73-1.62v-12.59l-14.29,2.65Z'/%3e%3c/g%3e%3cpath%20class='cls-2'%20d='m120.79,138.11c0-4.52.81-8.63,2.44-12.32,1.63-3.69,3.83-6.85,6.61-9.47,2.78-2.62,6.07-4.64,9.88-6.07,3.81-1.43,7.86-2.14,12.14-2.14s8.33.71,12.14,2.14c3.81,1.43,7.1,3.45,9.88,6.07,2.78,2.62,4.98,5.78,6.61,9.47,1.63,3.69,2.44,7.8,2.44,12.32s-.81,8.65-2.44,12.38c-1.63,3.73-3.83,6.93-6.61,9.58-2.78,2.66-6.07,4.74-9.88,6.25-3.81,1.51-7.86,2.26-12.14,2.26s-8.33-.76-12.14-2.26c-3.81-1.51-7.11-3.59-9.88-6.25-2.78-2.66-4.98-5.85-6.61-9.58-1.63-3.73-2.44-7.86-2.44-12.38Zm14.52,0c0,2.22.34,4.45,1.01,6.67.67,2.22,1.69,4.21,3.04,5.95,1.35,1.75,3.05,3.18,5.12,4.29,2.06,1.11,4.52,1.67,7.38,1.67s5.32-.56,7.38-1.67c2.06-1.11,3.77-2.54,5.12-4.29,1.35-1.75,2.36-3.73,3.04-5.95.67-2.22,1.01-4.44,1.01-6.67s-.34-4.42-1.01-6.61c-.68-2.18-1.69-4.14-3.04-5.89-1.35-1.75-3.06-3.15-5.12-4.23-2.07-1.07-4.52-1.61-7.38-1.61s-5.32.54-7.38,1.61c-2.06,1.07-3.77,2.48-5.12,4.23-1.35,1.75-2.36,3.71-3.04,5.89-.68,2.18-1.01,4.39-1.01,6.61Z'/%3e%3cpath%20class='cls-2'%20d='m67.72,58.94v32.5h14.41v-32.43h0s0-.05,0-.07c0-.05,0-.1,0-.15.08-6.63,5.47-11.99,12.12-11.99s12.14,5.43,12.14,12.14h-.01v32.5h14.41v-32.5h0c0-14.66-11.88-26.54-26.53-26.54s-26.53,11.88-26.53,26.53h0Z'/%3e%3cpath%20class='cls-2'%20d='m3.71,120.08c3.18,0,5.22.84,6.13,2.5.91,1.67,1.37,3.77,1.37,6.31v71.37l14.05-2.65v-33.58c1.53.91,3.15,1.7,4.9,2.35,3.81,1.43,7.86,2.14,12.14,2.14s8.33-.71,12.14-2.14c3.81-1.43,7.1-3.45,9.88-6.07,2.78-2.62,4.98-5.78,6.61-9.47,1.63-3.69,2.44-7.8,2.44-12.32s-.81-8.65-2.44-12.38c-1.63-3.73-3.83-6.93-6.61-9.58-2.78-2.66-6.07-4.74-9.88-6.25-3.81-1.51-7.86-2.26-12.14-2.26s-8.33.75-12.14,2.26c-1.15.45-2.23.98-3.29,1.54.12.14.25.27.36.42,1.39,1.86,2.34,4.01,2.86,6.43.42,1.94.62,4.02.7,6.19,1.18-1.27,2.52-2.39,4.14-3.27,2.07-1.11,4.52-1.67,7.38-1.67s5.32.56,7.38,1.67c2.06,1.11,3.77,2.54,5.12,4.29,1.35,1.75,2.36,3.73,3.04,5.95.68,2.22,1.01,4.44,1.01,6.67s-.34,4.42-1.01,6.61c-.67,2.18-1.69,4.14-3.04,5.89-1.35,1.75-3.05,3.15-5.12,4.23-2.06,1.07-4.52,1.61-7.38,1.61s-5.32-.54-7.38-1.61c-2.06-1.07-3.77-2.48-5.12-4.23-1.35-1.75-2.36-3.71-3.04-5.89-.23-.74-.54-2.21-.54-3.64v-12.73c0-2.78-.26-5.38-.77-7.8-.51-2.42-1.47-4.57-2.86-6.43-1.39-1.87-3.27-3.33-5.66-4.41-2.38-1.07-5.48-1.61-9.29-1.61-1.23,0-3.09.09-4.69.25v11.33c.25-.01.5-.04.74-.04Z'/%3e%3cpath%20class='cls-2'%20d='m182.74,50.06c-1.39-3.85-3.32-7.06-5.77-9.64-2.46-2.58-5.38-4.52-8.75-5.83-3.38-1.31-7.05-1.96-11.01-1.96-4.29,0-8.27.73-11.97,2.2s-6.89,3.53-9.58,6.19c-2.7,2.66-4.82,5.88-6.37,9.64-1.55,3.77-2.32,7.96-2.32,12.56s.77,8.87,2.32,12.56c1.55,3.69,3.69,6.8,6.43,9.34,2.74,2.54,5.97,4.51,9.7,5.9,3.73,1.39,7.82,2.08,12.26,2.08,7.26,0,15.09-2.05,22.01-8.12l-7.8-9.22c-1.25,1.28-4.64,3.37-5.28,3.71-2.46,1.31-5.48,1.96-9.05,1.96-2.06,0-4.05-.36-5.95-1.07-1.9-.71-3.61-1.68-5.12-2.92-1.51-1.23-2.72-2.7-3.63-4.41-.91-1.7-1.45-3.59-1.61-5.65-.52-5.55,0-10.24,0-10.24.32-4.05,1.96-7.36,4.94-9.94,2.98-2.58,6.61-3.87,10.89-3.87,2.3,0,4.3.38,6.01,1.13,1.71.75,3.11,1.77,4.23,3.04,1.11,1.27,1.92,2.74,2.44,4.41.52,1.67.77,3.41.77,5.24h-24.4v10.24h38.56c.08-.63.12-1.27.12-1.91v-1.9c0-5.16-.7-9.66-2.08-13.51Z'/%3e%3cpath%20class='cls-2'%20d='m268.26,125.55c-1.39-3.85-3.32-7.06-5.77-9.64-2.46-2.58-5.38-4.52-8.75-5.83-3.38-1.31-7.05-1.96-11.01-1.96-4.29,0-8.27.73-11.97,2.2s-6.89,3.53-9.58,6.19c-2.7,2.66-4.82,5.88-6.37,9.64-1.55,3.77-2.32,7.96-2.32,12.56s.77,8.87,2.32,12.56c1.55,3.69,3.69,6.8,6.43,9.34,2.74,2.54,5.97,4.51,9.7,5.9,3.73,1.39,7.82,2.08,12.26,2.08,7.26,0,15.09-2.05,22.01-8.12l-7.8-9.22c-1.25,1.28-4.64,3.37-5.28,3.71-2.46,1.31-5.48,1.96-9.05,1.96-2.06,0-4.05-.36-5.95-1.07-1.9-.71-3.61-1.68-5.12-2.92-1.51-1.23-2.72-2.7-3.63-4.41-.91-1.7-1.45-3.59-1.61-5.65-.52-5.55,0-10.24,0-10.24.32-4.05,1.96-7.36,4.94-9.94,2.98-2.58,6.61-3.87,10.89-3.87,2.3,0,4.3.38,6.01,1.13,1.71.75,3.11,1.77,4.23,3.04,1.11,1.27,1.92,2.74,2.44,4.41.52,1.67.77,3.41.77,5.24h-24.4v10.24h38.56c.08-.63.12-1.27.12-1.91v-1.9c0-5.16-.7-9.66-2.08-13.51Z'/%3e%3cpath%20class='cls-2'%20d='m321.41,150.19c-.12.17-.21.37-.34.54-1.35,1.75-3.06,3.18-5.12,4.29-2.06,1.11-4.52,1.67-7.38,1.67s-5.32-.56-7.38-1.67c-2.06-1.11-3.77-2.54-5.12-4.29-1.35-1.75-2.36-3.73-3.04-5.95-.68-2.22-1.01-4.44-1.01-6.67s.34-4.42,1.01-6.61c.67-2.18,1.69-4.14,3.04-5.89,1.35-1.75,3.05-3.15,5.12-4.23,2.06-1.07,4.52-1.61,7.38-1.61s5.32.54,7.38,1.61c2.06,1.07,3.77,2.48,5.12,4.23.18.23.31.5.48.75l8.72-10.31c-2.71-2.48-5.89-4.42-9.55-5.79-3.81-1.43-7.86-2.14-12.14-2.14s-8.33.71-12.14,2.14c-3.81,1.43-7.11,3.45-9.88,6.07-2.78,2.62-4.98,5.78-6.61,9.47-1.63,3.69-2.44,7.8-2.44,12.32s.81,8.65,2.44,12.38c1.62,3.73,3.83,6.93,6.61,9.58,2.78,2.66,6.07,4.74,9.88,6.25,3.81,1.51,7.86,2.26,12.14,2.26s8.33-.76,12.14-2.26c3.6-1.43,6.73-3.39,9.41-5.84l-8.71-10.3Z'/%3e%3cpath%20class='cls-2'%20d='m115.77,107.97c-1.99-.04-4.73-.08-7.5-.08-14.65,0-26.53,11.88-26.53,26.53v32.5h14.41v-32.5h-.01c0-6.7,5.43-12.14,12.14-12.14.15,0,7.5.02,7.5-.04v-14.27Z'/%3e%3c/g%3e%3c/g%3e%3cpath%20class='cls-1'%20d='m334.1,65.04c1.46-1.23,20.19-16.66,20.19-16.66l20.58-17.26c3.16-2.65,7.77-2.66,10.94-.01l51.43,42.99c2.99,2.5,4.71,6.19,4.71,10.08v71.46c0,6.89-5.59,12.48-12.48,12.48h-56.42l2.89-12.12h49.77c2.37,0,4.29-1.93,4.28-4.3l-.33-65.22c0-1.93-.86-3.76-2.36-4.99l-43.05-36.89c-1.67-1.43-4.12-1.46-5.82-.06l-64.22,52.6v-9.33c0-3.8,1.67-7.4,4.58-9.84l15.32-12.91Z'/%3e%3c/g%3e%3c/svg%3e", M3 = {
  props: ["size", "loading"],
  data() {
    return {
      interval: null,
      rotatePos: 0,
      fullScreenStatus: !1
    };
  },
  setup() {
    return { myStore: me() };
  },
  methods: {
    intervalClear() {
      document.querySelector(".viewer_left_bottom-center").classList.remove("rotate-right"), document.querySelector(".viewer_left_bottom-center").classList.remove("rotate-left"), clearInterval(this.interval);
    },
    rotate(e, t = "move") {
      if (t == "move" && (this.interval = setInterval(() => {
        this.$parent.pointerActive = !1, e > 0 ? document.querySelector(".viewer_left_bottom-center").classList.add("rotate-left") : document.querySelector(".viewer_left_bottom-center").classList.add("rotate-right"), document.querySelectorAll("#_3dimage").forEach((n) => {
          n.classList.remove("active");
        }), this.rotatePos != null && this.rotatePos == e ? this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() + 5 * e,
          this.$parent.impetus.getValueY()
        ) : (this.rotatePos = e, e > 0 ? this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() + 15,
          this.$parent.impetus.getValueY()
        ) : this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() - 10,
          this.$parent.impetus.getValueY()
        ));
        let s = Math.floor(-this.$parent.impetus.getValueX() / 5) % this.size + e;
        this.$parent.frame = s <= 0 ? this.size + s : s, document.querySelector("._3dimage" + this.$parent.frame).classList.add("active");
      }, 100)), t == "click") {
        document.querySelectorAll("#_3dimage").forEach((n) => {
          n.classList.remove("active");
        }), this.rotatePos != null && this.rotatePos == e ? this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() + 5 * e,
          this.$parent.impetus.getValueY()
        ) : (this.rotatePos = e, e > 0 ? this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() + 15,
          this.$parent.impetus.getValueY()
        ) : this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() - 10,
          this.$parent.impetus.getValueY()
        ));
        let s = Math.floor(-this.$parent.impetus.getValueX() / 5) % this.size + e;
        this.$parent.frame = s <= 0 ? this.size + s : s, document.querySelector("._3dimage" + this.$parent.frame).classList.add("active");
      }
    },
    rightBarToggle() {
      this.$parent.rightBarVisibility = !this.$parent.rightBarVisibility, document.querySelector(".viewer").style.left = "0px";
      let e = setInterval(() => {
        this.$parent.updateScreenSize();
      }, 0);
      setTimeout(() => {
        clearInterval(e);
      }, 500);
    },
    fullScreenMode() {
      var e = window.document, t = e.documentElement, s = t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.msRequestFullscreen, n = e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen;
      !e.fullscreenElement && !e.mozFullScreenElement && !e.webkitFullscreenElement && !e.msFullscreenElement ? (s.call(t), this.fullScreenStatus = !0) : (n.call(e), this.fullScreenStatus = !1);
    }
  }
}, I3 = {
  key: 0,
  class: "viewer_left_bottom d-flex justify-content-between"
}, V3 = /* @__PURE__ */ p("div", { class: "viewer_left_bottom-we" }, [
  /* @__PURE__ */ p("img", { src: Jr })
], -1), B3 = { class: "viewer_left_bottom-center" }, j3 = /* @__PURE__ */ p("i", { class: "bi bi-chevron-left" }, null, -1), Z3 = [
  j3
], F3 = /* @__PURE__ */ p("span", null, "360°", -1), z3 = /* @__PURE__ */ p("i", { class: "bi bi-chevron-right" }, null, -1), W3 = [
  z3
], H3 = { class: "viewer_left_bottom-right" }, U3 = {
  key: 0,
  class: "bi bi-fullscreen"
}, q3 = {
  key: 1,
  class: "bi bi-fullscreen-exit"
}, K3 = {
  key: 0,
  class: "bi bi-caret-right"
}, Y3 = {
  key: 1,
  class: "bi bi-caret-left"
};
function G3(e, t, s, n, o, r) {
  return s.loading ? D("", !0) : (E(), C("div", I3, [
    V3,
    p("div", B3, [
      p("button", {
        onMousedown: t[0] || (t[0] = (l) => r.rotate(1)),
        onClick: t[1] || (t[1] = (l) => r.rotate(1, "click")),
        onMouseup: t[2] || (t[2] = (...l) => r.intervalClear && r.intervalClear(...l)),
        onMouseleave: t[3] || (t[3] = (...l) => r.intervalClear && r.intervalClear(...l))
      }, Z3, 32),
      F3,
      p("button", {
        onMousedown: t[4] || (t[4] = (l) => r.rotate(-1)),
        onClick: t[5] || (t[5] = (l) => r.rotate(-1, "click")),
        onMouseup: t[6] || (t[6] = (...l) => r.intervalClear && r.intervalClear(...l)),
        onMouseleave: t[7] || (t[7] = (...l) => r.intervalClear && r.intervalClear(...l))
      }, W3, 32)
    ]),
    p("div", H3, [
      n.myStore.viewerType == "PROJECT-VIEW" ? (E(), C("button", {
        key: 0,
        class: "btn btn-light m-2",
        onClick: t[8] || (t[8] = (...l) => r.fullScreenMode && r.fullScreenMode(...l))
      }, [
        o.fullScreenStatus ? D("", !0) : (E(), C("i", U3)),
        o.fullScreenStatus ? (E(), C("i", q3)) : D("", !0)
      ])) : D("", !0),
      n.myStore.viewerType == "PROJECT-VIEW" ? (E(), C("button", {
        key: 1,
        class: "btn btn-light m-2",
        onClick: t[9] || (t[9] = (...l) => r.rightBarToggle && r.rightBarToggle(...l))
      }, [
        this.$parent.rightBarVisibility ? D("", !0) : (E(), C("i", K3)),
        this.$parent.rightBarVisibility ? (E(), C("i", Y3)) : D("", !0)
      ])) : D("", !0)
    ])
  ]));
}
const Qr = /* @__PURE__ */ ee(M3, [["render", G3]]), X3 = {
  setup() {
    return { myStore: me() };
  },
  created() {
    for (let e = 1; e < 70; e++)
      this.items.push({
        id: e,
        title: "Daire" + e,
        status: e % 3,
        size: e * 10 + "m2",
        floor: e,
        rooms: "3+1",
        isCompare: this.compareControl(e)
      });
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    compareControl(e) {
      return JSON.parse(localStorage.getItem("compare") || "[]").find((s) => s == e);
    },
    addCompare(e) {
      event.stopPropagation();
      let t = JSON.parse(localStorage.getItem("compare") || "[]");
      this.compareControl(e.id) || (t.push(e.id), localStorage.setItem("compare", JSON.stringify(t)), e.isCompare = !0);
    },
    removeCompare(e) {
      event.stopPropagation();
      let t = JSON.parse(localStorage.getItem("compare") || "[]");
      if (this.compareControl(e.id)) {
        let s = t.indexOf(e.id);
        t.splice(s, 1), localStorage.setItem("compare", JSON.stringify(t)), e.isCompare = !1;
      }
    }
  }
}, J3 = { class: "mt-2 ls-card" }, Q3 = ["onClick"], eu = { class: "ls-card-item-left" }, tu = { class: "ls-card-item-left-content" }, su = /* @__PURE__ */ p("b", null, "m²", -1), nu = /* @__PURE__ */ p("b", null, "Oda", -1), iu = /* @__PURE__ */ p("b", null, "Kat", -1), ou = { class: "ls-card-item-right" }, ru = { class: "ls-card-item-right-toolbox" }, lu = ["onClick"], cu = /* @__PURE__ */ p("i", { class: "bi bi-box-arrow-in-down" }, null, -1), au = [
  cu
], uu = ["onClick"], hu = /* @__PURE__ */ p("i", { class: "bi bi-heart-fill" }, null, -1), du = [
  hu
], pu = /* @__PURE__ */ p("img", { src: "https://smart-makieta-3destate-embed.azureedge.net/assets/6b248da8-fe5e-4253-8fae-b443c131c970/minimaps/D2-01-0-512x512-Medium.png" }, null, -1);
function fu(e, t, s, n, o, r) {
  return E(), C("div", J3, [
    (E(!0), C(ce, null, Ne(n.myStore.apartmentList, (l, u) => (E(), C("div", {
      class: "ls-card-item mb-3",
      key: u,
      onClick: (a) => this.$parent.selectedLayer(l)
    }, [
      p("div", eu, [
        p("div", tu, [
          p("h2", null, Q(l.title), 1),
          p("h3", null, Q(l.status == 0 ? "UYGUN" : l.status == 1 ? "REZERVE" : l.status == 2 ? "SATILDI" : ""), 1),
          su,
          p("span", null, Q(l.size), 1),
          nu,
          p("span", null, Q(l.rooms), 1),
          iu,
          p("span", null, Q(l.floor), 1)
        ])
      ]),
      p("div", ou, [
        p("div", ru, [
          l.isCompare ? D("", !0) : (E(), C("button", {
            key: 0,
            class: "btn btn-sm btn-light",
            onClick: (a) => r.addCompare(l)
          }, au, 8, lu)),
          l.isCompare ? (E(), C("button", {
            key: 1,
            onClick: (a) => r.removeCompare(l),
            class: "btn btn-sm btn-light"
          }, du, 8, uu)) : D("", !0)
        ]),
        pu
      ])
    ], 8, Q3))), 128))
  ]);
}
const mu = /* @__PURE__ */ ee(X3, [["render", fu]]), gu = {
  setup() {
    return { myStore: me() };
  },
  created() {
    for (let e = 1; e < 70; e++)
      this.items.push({
        id: e,
        title: "Daire" + e,
        size: e * 10 + "m2",
        floor: e,
        rooms: "3+1",
        isCompare: this.compareControl(e)
      });
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    compareControl(e) {
      return JSON.parse(localStorage.getItem("compare") || "[]").find((s) => s == e);
    },
    addCompare(e) {
      event.stopPropagation();
      let t = JSON.parse(localStorage.getItem("compare") || "[]");
      this.compareControl(e.id) || (t.push(e.id), localStorage.setItem("compare", JSON.stringify(t)), e.isCompare = !0);
    },
    removeCompare(e) {
      event.stopPropagation();
      let t = JSON.parse(localStorage.getItem("compare") || "[]");
      if (this.compareControl(e.id)) {
        let s = t.indexOf(e.id);
        t.splice(s, 1), localStorage.setItem("compare", JSON.stringify(t)), e.isCompare = !1;
      }
    }
  }
}, _u = { class: "mt-2 ls-table" }, vu = /* @__PURE__ */ ts('<div class="ls-table-thead"><div class="ls-table-thead-tr"><div class="ls-table-thead-th">ID</div><div class="ls-table-thead-th">Blok</div><div class="ls-table-thead-th">m²</div><div class="ls-table-thead-th">Kat</div><div class="ls-table-thead-th">Oda</div><div></div></div></div>', 1), yu = { class: "ls-table-tbody" }, bu = ["onClick"], wu = { class: "ls-table-td" }, Eu = { class: "ls-table-td" }, Su = { class: "ls-table-td" }, Au = { class: "ls-table-td" }, Tu = { class: "ls-table-td" }, Cu = { class: "ls-table-td" }, $u = ["onClick"], Ou = /* @__PURE__ */ p("i", { class: "bi bi-box-arrow-in-down" }, null, -1), ku = [
  Ou
], xu = ["onClick"], Pu = /* @__PURE__ */ p("i", { class: "bi bi-heart-fill" }, null, -1), Lu = [
  Pu
];
function Du(e, t, s, n, o, r) {
  return E(), C("div", _u, [
    vu,
    p("div", yu, [
      (E(!0), C(ce, null, Ne(n.myStore.apartmentList, (l, u) => (E(), C("div", {
        class: "ls-table-tr",
        key: u,
        onClick: (a) => this.$parent.selectedLayer(l)
      }, [
        p("div", wu, Q(l.id), 1),
        p("div", Eu, Q(l.title), 1),
        p("div", Su, Q(l.size), 1),
        p("div", Au, Q(l.floor), 1),
        p("div", Tu, Q(l.rooms), 1),
        p("div", Cu, [
          l.isCompare ? D("", !0) : (E(), C("button", {
            key: 0,
            class: "btn btn-sm btn-light",
            onClick: (a) => r.addCompare(l)
          }, ku, 8, $u)),
          l.isCompare ? (E(), C("button", {
            key: 1,
            onClick: (a) => r.removeCompare(l),
            class: "btn btn-sm btn-light"
          }, Lu, 8, xu)) : D("", !0)
        ])
      ], 8, bu))), 128))
    ])
  ]);
}
const Nu = /* @__PURE__ */ ee(gu, [["render", Du]]), Ru = {
  components: { CardList: mu, TableList: Nu },
  setup() {
    return { myStore: me() };
  },
  data() {
    return {
      filterPanelStatus: !0,
      filterMoreStatus: !1,
      item: null
    };
  },
  methods: {
    selectedLayer(e) {
      this.myStore.isMainView = !1, this.myStore.backButtonVisibility = !1, this.$router.push({ path: "/", query: { viewId: e.block_id } }), this.myStore.dollHouseItem = e.dollhouse, this.myStore.apartmentOptionStatus = !0, this.myStore.selectedFlat = e, this.myStore.blokListButtonVisibility = !1, this.myStore.chooseBlockPanelVisibility = !1, this.myStore.apartmentPanelVisibility = !0;
    },
    filterMoreOptionToggle() {
      this.filterMoreStatus = !this.filterMoreStatus;
    },
    filterPanelToggle() {
      this.filterPanelStatus = !this.filterPanelStatus;
    },
    listViewTypeToggle(e) {
      this.myStore.listViewType = e;
    }
  }
}, Mu = { class: "viewer_right_container" }, Iu = { class: "viewer_right_head" }, Vu = { class: "viewer_right_head_title" }, Bu = /* @__PURE__ */ p("div", { class: "viewer_right_head_box" }, [
  /* @__PURE__ */ p("button", { class: "btn btn-light" }, [
    /* @__PURE__ */ p("i", { class: "bi bi-share" })
  ])
], -1), ju = { class: "viewer_right_filter_panel_text" }, Zu = /* @__PURE__ */ p("span", null, "daire listendi", -1), Fu = { class: "viewer_right_filter_box" }, zu = {
  key: 0,
  class: "bi bi-chevron-up"
}, Wu = {
  key: 1,
  class: "bi bi-chevron-down"
}, Hu = /* @__PURE__ */ p("button", { class: "btn btn-sm btn-outline-secondary" }, "Temizle", -1), Uu = {
  key: 0,
  class: "view_right_filter_panel_area"
}, qu = /* @__PURE__ */ ts('<div class="view_right_filter_panel_area_filter _top_filter"><div class="input-group"><label for="customRange1" class="form-label">m² (Net)</label><input type="range" class="form-range" id="customRange1"></div><div class="input-group"><label for="customRange1" class="form-label">Kat</label><input type="range" class="form-range" id="customRange1"></div><div class="input-group"><label for="customRange1" class="form-label">Odalar</label><input type="range" class="form-range" id="customRange1"></div></div>', 1), Ku = /* @__PURE__ */ p("div", { class: "view_right_filter_panel_area_filter" }, [
  /* @__PURE__ */ p("div", { class: "mb-1" }, "DURUM"),
  /* @__PURE__ */ p("div", {
    class: "input-group",
    role: "group"
  }, [
    /* @__PURE__ */ p("button", { class: "btn w-25 btn-outline-secondary" }, "Uygun"),
    /* @__PURE__ */ p("button", { class: "btn w-25 btn-outline-secondary" }, "Rezerve"),
    /* @__PURE__ */ p("button", { class: "btn w-25 btn-outline-secondary" }, "Satıldı"),
    /* @__PURE__ */ p("button", { class: "btn w-25 btn-outline-secondary" }, "Tümü")
  ])
], -1), Yu = [
  qu,
  Ku
], Gu = {
  key: 0,
  class: "bi bi-chevron-up"
}, Xu = {
  key: 1,
  class: "bi bi-chevron-down"
}, Ju = {
  key: 2,
  class: "view_right_filter_panel_advance_list radius-bottom p-2"
}, Qu = /* @__PURE__ */ p("div", { class: "d-flex flex-wrap" }, [
  /* @__PURE__ */ p("button", { class: "btn btn-outline-secondary m-1" }, "Test")
], -1), eh = [
  Qu
], th = { class: "d-flex justify-content-between mt-2" }, sh = /* @__PURE__ */ p("i", { class: "bi bi-box-arrow-in-down" }, null, -1), nh = /* @__PURE__ */ p("i", { class: "bi bi-list-ul" }, null, -1), ih = /* @__PURE__ */ p("i", { class: "bi bi-grid" }, null, -1);
function oh(e, t, s, n, o, r) {
  const l = X("router-link"), u = X("CardList"), a = X("TableList");
  return E(), C("div", Mu, [
    p("div", Iu, [
      p("div", Vu, Q(n.myStore.projectName), 1),
      Bu
    ]),
    p("div", {
      class: ie("viewer_right_filter_panel " + (o.filterPanelStatus ? "" : "radius-bottom"))
    }, [
      p("div", ju, [
        p("b", null, Q(n.myStore.apartmentList.length), 1),
        Oe(" "),
        Zu
      ]),
      p("div", Fu, [
        p("button", {
          class: "btn btn-sm btn-outline-secondary m-2",
          onClick: t[0] || (t[0] = (...f) => r.filterPanelToggle && r.filterPanelToggle(...f))
        }, [
          o.filterPanelStatus ? D("", !0) : (E(), C("i", zu)),
          o.filterPanelStatus ? (E(), C("i", Wu)) : D("", !0)
        ]),
        Hu
      ])
    ], 2),
    o.filterPanelStatus ? (E(), C("div", Uu, Yu)) : D("", !0),
    o.filterPanelStatus ? (E(), C("div", {
      key: 1,
      class: ie("view_right_filter_panel_advance " + (o.filterMoreStatus ? "" : "radius-bottom"))
    }, [
      p("button", {
        class: "button-border-none w-100",
        onClick: t[1] || (t[1] = (...f) => r.filterMoreOptionToggle && r.filterMoreOptionToggle(...f))
      }, [
        o.filterMoreStatus ? (E(), C("i", Gu)) : D("", !0),
        o.filterMoreStatus ? D("", !0) : (E(), C("i", Xu)),
        Oe(" Daha Fazla Seçenek ")
      ])
    ], 2)) : D("", !0),
    o.filterMoreStatus && o.filterPanelStatus ? (E(), C("div", Ju, eh)) : D("", !0),
    p("div", th, [
      he(l, {
        to: "/compare",
        class: "btn btn-light"
      }, {
        default: Bn(() => [
          Oe("Kıyas "),
          sh
        ]),
        _: 1
      }),
      n.myStore.listViewType == "list" ? (E(), C("button", {
        key: 0,
        class: "btn btn-light",
        onClick: t[2] || (t[2] = (f) => r.listViewTypeToggle("card"))
      }, [
        nh,
        Oe(" Liste ")
      ])) : D("", !0),
      n.myStore.listViewType == "card" ? (E(), C("button", {
        key: 1,
        class: "btn btn-light",
        onClick: t[3] || (t[3] = (f) => r.listViewTypeToggle("list"))
      }, [
        ih,
        Oe(" Kart ")
      ])) : D("", !0)
    ]),
    n.myStore.listViewType == "card" ? (E(), ke(u, { key: 3 })) : D("", !0),
    n.myStore.listViewType == "list" ? (E(), ke(a, { key: 4 })) : D("", !0)
  ]);
}
const rh = /* @__PURE__ */ ee(Ru, [["render", oh]]), lh = {
  setup() {
    return { myStore: me() };
  },
  methods: {
    backToMain() {
      this.myStore.apartmentOptionStatus ? (this.myStore.viewerType = "PROJECT-VIEW", this.myStore.apartmentOptionStatus = !1, this.myStore.chooseBlockPanelVisibility = !1, this.myStore.backButtonVisibility = !0, this.myStore.blokListButtonVisibility = !0, this.myStore.apartmentPanelVisibility = !1) : (this.myStore.apartmentOptionStatus = !0, this.myStore.chooseBlockPanelVisibility = !0, this.myStore.backButtonVisibility = !1, this.myStore.blokListButtonVisibility = !1, this.myStore.apartmentPanelVisibility = !0);
    },
    compareControl(e) {
      return JSON.parse(localStorage.getItem("compare") || "[]").find((s) => s == e);
    },
    addCompare(e) {
      event.stopPropagation();
      let t = JSON.parse(localStorage.getItem("compare") || "[]");
      this.compareControl(e.id) || (t.push(e.id), localStorage.setItem("compare", JSON.stringify(t)), e.isCompare = !0);
    },
    removeCompare(e) {
      event.stopPropagation();
      let t = JSON.parse(localStorage.getItem("compare") || "[]");
      if (this.compareControl(e.id)) {
        let s = t.indexOf(e.id);
        t.splice(s, 1), localStorage.setItem("compare", JSON.stringify(t)), e.isCompare = !1;
      }
    }
  }
}, ch = { class: "viewer_right_container border-bottom pb-3" }, ah = { class: "viewer_right_head" }, uh = { class: "viewer_right_head_title" }, hh = /* @__PURE__ */ p("span", { style: { "font-weight": "none" } }, "Daire:", -1), dh = /* @__PURE__ */ p("div", { class: "viewer_right_head_box" }, [
  /* @__PURE__ */ p("button", { class: "btn btn-light" }, [
    /* @__PURE__ */ p("i", { class: "bi bi-share" })
  ])
], -1), ph = /* @__PURE__ */ p("i", { class: "bi bi-chevron-left" }, null, -1), fh = { class: "viewer_right_container" }, mh = { class: "viewer_right_apartment_detail_content" }, gh = /* @__PURE__ */ p("div", { class: "viewer_right_apartment_detail_status" }, "UYGUN", -1), _h = { class: "viewer_right_apartment_detail_header" }, vh = { class: "viewer_right_apartment_detail_items" }, yh = { class: "viewer_right_apartment_detail_item" }, bh = /* @__PURE__ */ p("span", null, "Boyut:", -1), wh = { class: "viewer_right_apartment_detail_item" }, Eh = /* @__PURE__ */ p("span", null, "Oda:", -1), Sh = { class: "viewer_right_apartment_detail_toolbox" }, Ah = { class: "input-group" }, Th = /* @__PURE__ */ p("div", { class: "btn btn-light disabled" }, "Kıyasla", -1), Ch = /* @__PURE__ */ p("i", { class: "bi bi-box-arrow-in-down" }, null, -1), $h = [
  Ch
], Oh = /* @__PURE__ */ p("i", { class: "bi bi-heart-fill" }, null, -1), kh = [
  Oh
], xh = /* @__PURE__ */ p("div", { class: "viewer_right_container" }, [
  /* @__PURE__ */ p("div", { class: "viewer_right_dollimage" }, [
    /* @__PURE__ */ p("img", { src: "https://smart-makieta-3destate-embed.azureedge.net/assets/6b248da8-fe5e-4253-8fae-b443c131c970/minimaps/D2-01-0-512x512-Medium.png" })
  ])
], -1), Ph = { class: "viewer_right_container" }, Lh = { class: "viewer_right_options_bar" }, Dh = /* @__PURE__ */ p("div", { class: "viewer_right_option_bar_item" }, " A Blok ", -1), Nh = { class: "viewer_right_option_bar_item" }, Rh = { class: "viewer_right_option_bar_item" };
function Mh(e, t, s, n, o, r) {
  return E(), C(ce, null, [
    p("div", ch, [
      p("div", ah, [
        p("div", uh, [
          hh,
          Oe(" " + Q(n.myStore.selectedFlat.title), 1)
        ]),
        dh
      ]),
      p("div", {
        class: "viewer_right_head_back_button",
        onClick: t[0] || (t[0] = (...l) => r.backToMain && r.backToMain(...l))
      }, [
        ph,
        Oe(" Yapı Görünümüne Geri Dön ")
      ])
    ]),
    p("div", fh, [
      p("div", mh, [
        gh,
        p("div", _h, [
          p("div", vh, [
            p("div", yh, [
              bh,
              p("b", null, Q(n.myStore.selectedFlat.size), 1)
            ]),
            p("div", wh, [
              Eh,
              p("b", null, Q(n.myStore.selectedFlat.rooms), 1)
            ])
          ]),
          p("div", Sh, [
            p("div", Ah, [
              Th,
              n.myStore.selectedFlat.isCompare ? D("", !0) : (E(), C("button", {
                key: 0,
                class: "btn btn-sm btn-light",
                onClick: t[1] || (t[1] = (l) => r.addCompare(n.myStore.selectedFlat))
              }, $h)),
              n.myStore.selectedFlat.isCompare ? (E(), C("button", {
                key: 1,
                onClick: t[2] || (t[2] = (l) => r.removeCompare(n.myStore.selectedFlat)),
                class: "btn btn-sm btn-light"
              }, kh)) : D("", !0)
            ])
          ])
        ])
      ])
    ]),
    xh,
    p("div", Ph, [
      p("div", Lh, [
        Dh,
        p("div", Nh, Q(n.myStore.selectedFlat.floor) + ".Kat ", 1),
        p("div", Rh, Q(n.myStore.selectedFlat.size), 1)
      ])
    ])
  ], 64);
}
const Ih = /* @__PURE__ */ ee(lh, [["render", Mh]]), Vh = {
  components: { MainView: rh, ApartmentDetailView: Ih },
  setup() {
    return { myStore: me() };
  },
  data() {
    return {
      filterPanelStatus: !0,
      filterMoreStatus: !1,
      listViewType: "list",
      item: null
    };
  },
  methods: {}
}, Bh = { class: "viewer_right" };
function jh(e, t, s, n, o, r) {
  const l = X("MainView"), u = X("ApartmentDetailView");
  return E(), C("div", Bh, [
    n.myStore.apartmentOptionStatus ? D("", !0) : (E(), ke(l, { key: 0 })),
    n.myStore.apartmentOptionStatus ? (E(), ke(u, { key: 1 })) : D("", !0)
  ]);
}
const vi = /* @__PURE__ */ ee(Vh, [["render", jh]]), Zh = {
  setup() {
    return { myStore: me() };
  },
  props: ["item", "index"],
  methods: {
    openPulseDialog() {
      this.myStore.pulseDialogBox = !this.myStore.pulseDialogBox;
    },
    centerItem(e) {
      return e.center == null ? null : "left:" + "".concat(e.center[0] / 10 - 2, "%") + ";bottom:" + "".concat(95 - e.center[1] / 9, "%");
    }
  }
}, Fh = ["title"], zh = /* @__PURE__ */ p("i", { class: "bi bi-geo-alt-fill" }, null, -1);
function Wh(e, t, s, n, o, r) {
  return s.item.center != null && s.item.connect_type == "pulse" ? (E(), C("div", {
    key: 0,
    class: "pulseIcon",
    onClick: t[0] || (t[0] = (...l) => r.openPulseDialog && r.openPulseDialog(...l)),
    title: s.item.layer_name,
    style: Ge(r.centerItem(s.item, s.index))
  }, [
    zh,
    p("small", null, Q(s.item.display_name), 1)
  ], 12, Fh)) : D("", !0);
}
const Hh = /* @__PURE__ */ ee(Zh, [["render", Wh]]), Uh = {
  components: {
    ApartmmentInfoCard: I0,
    BlokInfoCard: z0,
    SvgDraw: K0,
    TopPanel: _i,
    BottomPanel: Qr,
    PanelArea: vi,
    PulseCard: Hh,
    callWithAsyncErrorHandling: Oa
  },
  setup() {
    return { myStore: me() };
  },
  props: ["viewData"],
  created() {
    this.fetchData(this.viewData);
  },
  methods: {
    closePulseDialog() {
      this.myStore.pulseDialogBox = !this.myStore.pulseDialogBox;
    },
    explorerMode() {
      this.explorerButton = !1, this.updateScreenSize(), setTimeout(() => {
        document.getElementById("loadExplorer").style.zIndex = 0;
      }, 2e3);
    },
    fetchData(e) {
      this.loading = !0, this.$axios.get(e).then((t) => {
        this.ds = t.data, this.myStore.apartmentList = this.ds.apartmentList, this.buildScene();
      }).catch((t) => {
        console.error("Error fetching data:", t), this.loading = !1;
      });
    },
    selectedItem(e) {
      this.myStore.isMainView && (this.myStore.isMainView = !1, this.myStore.backButtonVisibility = !0), e.connect_type == "flat" ? (this.myStore.apartmentList.forEach((t) => {
        t.id == e.connect_id && (this.myStore.selectedFlat = t);
      }), this.showFlatDetail = !0) : (this.$router.push({ path: "/", query: { viewId: e.connect_id } }), this.imageMode = "obj2", this.fetchData("https://api.fineproject.com.tr/api/auth/general/project/get?projectId=" + e.connect_id), this.showFlatDetail = !1);
    },
    sizeCalc(e) {
      if (!e || e.width <= 0 || e.height <= 0)
        return {
          width: 2e3,
          height: 1500
        };
      let t = e.width, s = e.height, n = 4 / 3;
      return t / s >= n ? {
        width: t,
        height: 0.75 * t
      } : {
        width: s * (4 / 3),
        height: s
      };
    },
    updateScreenSize() {
      try {
        let e = document.querySelector(".viewer").clientWidth, t = document.querySelector(".viewer_left").clientWidth, s = (t - e) / 4, n = this.sizeCalc({ width: t, height: window.innerHeight });
        document.querySelector(".viewer_right").style.flex = "0 0 calc(100% - " + n.width + "px)", document.querySelector(".viewer").style.width = n.width + "px", document.querySelector(".viewer").style.height = n.height + "px", s > 0 ? (document.querySelector(".viewer").style.top = s * -1 + "px", document.querySelector(".viewer").style.left = "0px") : s < 0 && (document.querySelector(".viewer").style.left = s + "px", document.querySelector(".viewer").style.top = "0px");
      } catch {
        console.log();
      }
    },
    downloadImages(e) {
      var t = e.map(function(s) {
        return new Promise(function(n, o) {
          var r = new Image();
          r.onload = function() {
            n(s);
          }, r.onerror = function() {
            o(new Error("Failed to download " + s));
          }, r.src = s;
        });
      });
      return Promise.all(t);
    },
    buildScene() {
      let e = document.querySelector(".viewer");
      this.images = [], this.ds.frames.forEach((s) => {
        this.images.push(s.srcDay);
      });
      let t = this;
      this.downloadImages(this.images).then(function(s) {
        t.total = t.images.length - 1;
        let n = 0, o = 0;
        t.impetus != null && (n = t.impetus.getValueX(), o = t.impetus.getValueY()), t.impetus = new tn({
          source: e,
          friction: 0,
          update(r) {
            t.frame = Math.floor(-r / t.threshold) % t.total, t.frame = t.frame <= 0 ? t.total + t.frame : t.frame;
          }
        }), t.impetus.setValues(n, o), t.loading = !1, setTimeout(() => {
          t.updateScreenSize();
        }, 100);
      }).catch(function(s) {
        console.error("Error downloading images:", s);
      });
    }
  },
  watch: {
    "$route.query.viewId": function() {
      this.$route.query.viewId == null || this.$route.query.viewId == 1 ? (this.myStore.isMainView = !0, this.myStore.backButtonVisibility = !1, this.imageMode = "obj", this.fetchData(this.viewData)) : (this.fetchData("https://api.fineproject.com.tr/api/auth/general/project/get?projectId=" + this.$route.query.viewId), this.showFlatDetail = !1);
    }
  },
  mounted() {
    var e = !1;
    let t = this, s = document.querySelector(".viewer_left");
    s.addEventListener("mouseup", () => {
      e = !1, t.pointerActive = !0;
    }), s.addEventListener("mousemove", () => {
      e && (t.pointerActive = !1);
    }), s.addEventListener("mousedown", () => {
      e = !0;
    }), window.addEventListener("resize", this.updateScreenSize), document.addEventListener(
      "contextmenu",
      function(n) {
        n.preventDefault();
      },
      !1
    );
  },
  data() {
    return {
      explorerButton: !0,
      overLayerInfo: null,
      //<-- Üzerine gelinen apartmanın bilgileri
      isMainView: !0,
      //<-- Ana ekranda ise true, alt ekranda ise false
      pointerActive: !0,
      //<-- döndürme işlemi başlamışsa false, başlamamışsa true
      threshold: 5,
      //<-- mevcut framei bulmak için kullanılan eşik değer
      frame: 0,
      //<-- Sahnedeki mevcut frame i burada tutar
      total: 0,
      //<-- Toplam Frame Sayısı
      imageMode: "obj",
      loading: !0,
      //<-- Yükleme tamamlandıysa false, yükleme tamamlanmadıysa true
      ds: null,
      //<-- Sahneye ait veri seti
      images: [],
      //<-- Sahneye ait resimlerin listesi
      rightBarVisibility: !1,
      //<--Sağ taraftaki barın görünüp görünmeyeceği
      impetus: null
      //<-- 360 rotate işlemini yapan functionu tutan değişken
    };
  }
}, qh = ["disabled"], Kh = /* @__PURE__ */ p("div", {
  class: "spinner-grow",
  role: "status"
}, [
  /* @__PURE__ */ p("span", { class: "sr-only" })
], -1), Yh = /* @__PURE__ */ p("br", null, null, -1), Gh = { class: "pulseDialogBox" }, Xh = /* @__PURE__ */ p("i", { class: "bi bi-x-lg" }, null, -1), Jh = [
  Xh
], Qh = { class: "loading" }, ed = /* @__PURE__ */ p("div", {
  class: "spinner-grow",
  role: "status"
}, [
  /* @__PURE__ */ p("span", { class: "sr-only" })
], -1), td = [
  ed
], sd = { class: "viewer" }, nd = {
  key: 0,
  class: "centerList"
}, id = ["src"];
function od(e, t, s, n, o, r) {
  const l = X("ApartmmentInfoCard"), u = X("BlokInfoCard"), a = X("PulseCard"), f = X("SvgDraw"), h = X("TopPanel"), d = X("BottomPanel"), _ = X("PanelArea");
  return E(), C(ce, null, [
    p("div", {
      class: ie("loadImage " + (o.explorerButton ? "" : "visible")),
      id: "loadExplorer"
    }, [
      p("button", {
        class: "btn btn-primary",
        disabled: o.loading,
        onClick: t[0] || (t[0] = (...y) => r.explorerMode && r.explorerMode(...y))
      }, [
        o.loading ? (E(), C(ce, { key: 0 }, [
          Kh,
          Yh,
          Oe(" Yükleniyor... ")
        ], 64)) : D("", !0),
        o.loading ? D("", !0) : (E(), C(ce, { key: 1 }, [
          Oe("Keşfe Başla")
        ], 64))
      ], 8, qh)
    ], 2),
    n.myStore.pulseDialogBox ? (E(), C("div", {
      key: 0,
      class: ie(`pulseDialog ${n.myStore.pulseDialogBox ? "pulseDialogActive" : ""}`)
    }, [
      p("div", Gh, [
        p("div", {
          class: "btn btn-light pulseDialogCloseButton",
          onClick: t[1] || (t[1] = (...y) => r.closePulseDialog && r.closePulseDialog(...y))
        }, Jh)
      ])
    ], 2)) : D("", !0),
    p("div", {
      class: ie("viewer_left " + (o.rightBarVisibility ? "expanded" : ""))
    }, [
      Ot(p("div", Qh, td, 512), [
        [kt, o.loading]
      ]),
      he(l, { overLayerInfo: o.overLayerInfo }, null, 8, ["overLayerInfo"]),
      Ot(p("div", sd, [
        !o.loading && !n.myStore.polygonVisibility ? (E(), C("div", nd, [
          (E(!0), C(ce, null, Ne(o.ds.frames[o.frame].layers, (y, v) => (E(), C(ce, { key: v }, [
            y.connect_type == "block" ? (E(), ke(u, {
              key: 0,
              item: y,
              index: v
            }, null, 8, ["item", "index"])) : (E(), ke(a, {
              key: 1,
              item: y,
              index: v
            }, null, 8, ["item", "index"]))
          ], 64))), 128))
        ])) : D("", !0),
        he(f, {
          loading: o.loading,
          currentFrame: o.frame,
          list: o.ds,
          pointerActive: o.pointerActive,
          polygonVisibility: n.myStore.polygonVisibility
        }, null, 8, ["loading", "currentFrame", "list", "pointerActive", "polygonVisibility"]),
        (E(!0), C(ce, null, Ne(o.images, (y, v) => (E(), C("img", {
          key: v,
          src: y,
          id: "_3dimage",
          class: ie(`_3dimage${v}` + (o.frame == v ? " active" : ""))
        }, null, 10, id))), 128))
      ], 512), [
        [kt, !o.loading]
      ]),
      he(h, {
        loading: o.loading,
        list: o.ds,
        currentFrame: o.frame,
        isMainView: o.isMainView
      }, null, 8, ["loading", "list", "currentFrame", "isMainView"]),
      he(d, {
        size: 119,
        loading: o.loading
      }, null, 8, ["loading"])
    ], 2),
    he(_)
  ], 64);
}
const rd = /* @__PURE__ */ ee(Uh, [["render", od]]), ld = {
  components: { TopPanel: _i, PanelArea: vi }
}, cd = {
  class: /* @__PURE__ */ ie("viewer_left")
}, ad = /* @__PURE__ */ p("iframe", {
  width: "100%",
  height: "100%",
  src: "https://fineproject.com.tr/sanal_tur"
}, null, -1);
function ud(e, t, s, n, o, r) {
  const l = X("TopPanel"), u = X("PanelArea");
  return E(), C(ce, null, [
    p("div", cd, [
      ad,
      Oe("s "),
      he(l, {
        loading: !1,
        list: []
      })
    ]),
    he(u)
  ], 64);
}
const hd = /* @__PURE__ */ ee(ld, [["render", ud]]), dd = {
  components: {
    TopPanel: _i,
    BottomPanel: Qr,
    PanelArea: vi
  },
  setup() {
    return { myStore: me() };
  },
  props: [],
  created() {
  },
  methods: {
    sizeCalc(e) {
      if (!e)
        return {
          width: 1200,
          height: 900
        };
      var t = e.width, s = e.height;
      return t <= 0 || s <= 0 ? {
        width: 1200,
        height: 900
      } : t / s >= 4 / 3 ? {
        width: t,
        height: 0.75 * t
      } : {
        width: s * (4 / 3),
        height: s
      };
    },
    updateScreenSize() {
      let e = document.querySelector(".viewer").clientWidth, t = document.querySelector(".viewer_left").clientWidth, s = (t - e) / 2, n = this.sizeCalc({ width: t, height: window.innerHeight });
      document.querySelector(".viewer").style.width = n.width + "px", document.querySelector(".viewer").style.height = n.height + "px", s > 0 ? document.querySelector(".viewer").style.left = "0px" : s < 0 && (document.querySelector(".viewer").style.left = s + "px", document.querySelector(".viewer").style.top = "0px");
    },
    buildScene() {
      let e = document.querySelector(".viewer");
      this.images = [], this.myStore.dollHouseItem.forEach((o) => {
        this.images.push(
          `https://api.fineproject.com.tr/storage/${o.path}`
        );
      }), this.total = this.images.length - 1;
      let t = 0, s = 0;
      this.impetus != null && (t = this.impetus.getValueX(), s = this.impetus.getValueY());
      let n = this;
      this.impetus = new tn({
        source: e,
        friction: 0,
        update(o) {
          n.frame = Math.floor(-o / n.threshold) % n.total, n.frame = n.frame <= 0 ? n.total + n.frame : n.frame;
        }
      }), this.impetus.setValues(t, s), this.updateScreenSize();
    }
  },
  mounted() {
    window.addEventListener("resize", this.updateScreenSize), this.buildScene(), document.addEventListener(
      "contextmenu",
      function(e) {
        e.preventDefault();
      },
      !1
    );
  },
  data() {
    return {
      threshold: 5,
      //<-- mevcut framei bulmak için kullanılan eşik değer
      frame: 0,
      //<-- Sahnedeki mevcut frame i burada tutar
      total: 0,
      //<-- Toplam Frame Sayısı
      imageMode: "obj",
      loading: !0,
      //<-- Yükleme tamamlandıysa false, yükleme tamamlanmadıysa true
      ds: null,
      //<-- Sahneye ait veri seti
      images: [],
      //<-- Sahneye ait resimlerin listesi
      rightBarVisibility: !1,
      //<--Sağ taraftaki barın görünüp görünmeyeceği
      polygonVisibility: !1,
      //<--Polygonlar görünecekse true, görünmeyecekse false
      impetus: null
      //<-- 360 rotate işlemini yapan functionu tutan değişken
    };
  }
}, pd = { class: "viewer_left" }, fd = { class: "viewer" }, md = ["src"];
function gd(e, t, s, n, o, r) {
  const l = X("TopPanel"), u = X("BottomPanel"), a = X("PanelArea");
  return E(), C(ce, null, [
    p("div", pd, [
      p("div", fd, [
        (E(!0), C(ce, null, Ne(o.images, (f, h) => (E(), C("img", {
          key: h,
          src: f,
          id: "_3dimage",
          class: ie(`_3dimage${h}` + (o.frame == h ? " active" : ""))
        }, null, 10, md))), 128))
      ]),
      he(l, {
        loading: !1,
        list: [],
        currentFrame: o.frame
      }, null, 8, ["currentFrame"]),
      he(u, {
        loading: !1,
        size: 59
      })
    ]),
    he(a)
  ], 64);
}
const _d = /* @__PURE__ */ ee(dd, [["render", gd]]), vd = {
  props: ["item", "index"],
  methods: {
    centerItem(e) {
      return e.C == null ? null : "left:" + "".concat(e.C[0] / 1e3 - 5, "%") + ";bottom:" + "".concat(100 - e.C[1] / 1e3, "%");
    }
  }
}, yd = { class: "centerPointTag" }, bd = /* @__PURE__ */ p("div", { class: "centerPointLine" }, null, -1), wd = /* @__PURE__ */ p("div", { class: "centerPoint" }, null, -1);
function Ed(e, t, s, n, o, r) {
  return s.item.C != null ? (E(), C("div", {
    key: 0,
    class: "centerItem",
    style: Ge(r.centerItem(s.item, s.index))
  }, [
    p("div", yd, Q(s.item.A.T) + Q(s.item.A.I), 1),
    bd,
    wd
  ], 4)) : D("", !0);
}
const Sd = /* @__PURE__ */ ee(vd, [["render", Ed]]), Ad = {
  props: ["loading", "currentFrame", "list", "pointerActive", "polygonVisibility"],
  methods: {
    reFormatPoints(e) {
      return e;
    }
  }
}, Td = {
  key: 0,
  id: "mySvg",
  ref: "svg",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1000 750"
}, Cd = ["points", "onClick"];
function $d(e, t, s, n, o, r) {
  return !s.loading && s.list.frames[s.currentFrame] != null ? (E(), C("svg", Td, [
    (E(!0), C(ce, null, Ne(s.list.frames[s.currentFrame].layers, (l, u) => Ot((E(), C("g", { key: u }, [
      p("polygon", {
        points: r.reFormatPoints(l.points),
        onClick: (a) => this.$parent.selectedItem(l),
        class: ie(`layer currentLayer${u}`)
      }, null, 10, Cd)
    ])), [
      [kt, !s.polygonVisibility && s.pointerActive]
    ])), 128))
  ], 512)) : D("", !0);
}
const Od = /* @__PURE__ */ ee(Ad, [["render", $d]]), kd = {
  props: ["loading", "list", "currentFrame", "isMainView"],
  setup() {
    return { myStore: me() };
  },
  methods: {
    dollView() {
      this.myStore.viewerType = "DOLL-VIEW";
    },
    virtualTourView() {
      this.myStore.viewerType = "VIRTUAL-TOUR";
    },
    backToMain() {
      this.$router.push({ path: "/", query: {} });
    },
    chooseViewPanelToggle() {
      this.myStore.blokListButtonVisibility = !this.myStore.blokListButtonVisibility, this.myStore.chooseBlockPanelVisibility = !this.myStore.chooseBlockPanelVisibility, this.myStore.backButtonVisibility = !this.myStore.backButtonVisibility;
    }
  }
}, xd = { class: "viewer_left_top" }, Pd = {
  key: 0,
  class: "d-flex point-event-auto"
}, Ld = { class: "btn btn-light btn-sm mr-2 p-0" };
function Dd(e, t, s, n, o, r) {
  return E(), C("div", xd, [
    n.myStore.viewerType == "PROJECT-VIEW" ? (E(), C("div", Pd, [
      p("div", Ld, [
        p("img", {
          style: Ge(
            "display:flex;padding-top:4px;padding-bottom:4px;transform:rotate(" + s.currentFrame * 3 + "deg);width:30px;height:25px;"
          ),
          src: Xr
        }, null, 4)
      ])
    ])) : D("", !0)
  ]);
}
const el = /* @__PURE__ */ ee(kd, [["render", Dd]]), Nd = {
  props: ["size", "loading"],
  data() {
    return {
      interval: null,
      rotatePos: 0,
      fullScreenStatus: !1
    };
  },
  setup() {
    return { myStore: me() };
  },
  methods: {
    intervalClear() {
      document.querySelector(".viewer_left_bottom-center").classList.remove("rotate-right"), document.querySelector(".viewer_left_bottom-center").classList.remove("rotate-left"), clearInterval(this.interval);
    },
    rotate(e, t = "move") {
      if (t == "move" && (this.interval = setInterval(() => {
        this.$parent.pointerActive = !1, e > 0 ? document.querySelector(".viewer_left_bottom-center").classList.add("rotate-left") : document.querySelector(".viewer_left_bottom-center").classList.add("rotate-right"), document.querySelectorAll("#_3dimage").forEach((n) => {
          n.classList.remove("active");
        }), this.rotatePos != null && this.rotatePos == e ? this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() + 5 * e,
          this.$parent.impetus.getValueY()
        ) : (this.rotatePos = e, e > 0 ? this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() + 15,
          this.$parent.impetus.getValueY()
        ) : this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() - 10,
          this.$parent.impetus.getValueY()
        ));
        let s = Math.floor(-this.$parent.impetus.getValueX() / 5) % this.size + e;
        this.$parent.frame = s <= 0 ? this.size + s : s, document.querySelector("._3dimage" + this.$parent.frame).classList.add("active");
      }, 100)), t == "click") {
        document.querySelectorAll("#_3dimage").forEach((n) => {
          n.classList.remove("active");
        }), this.rotatePos != null && this.rotatePos == e ? this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() + 5 * e,
          this.$parent.impetus.getValueY()
        ) : (this.rotatePos = e, e > 0 ? this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() + 15,
          this.$parent.impetus.getValueY()
        ) : this.$parent.impetus.setValues(
          this.$parent.impetus.getValueX() - 10,
          this.$parent.impetus.getValueY()
        ));
        let s = Math.floor(-this.$parent.impetus.getValueX() / 5) % this.size + e;
        this.$parent.frame = s <= 0 ? this.size + s : s, document.querySelector("._3dimage" + this.$parent.frame).classList.add("active");
      }
    },
    rightBarToggle() {
      this.$parent.rightBarVisibility = !this.$parent.rightBarVisibility, document.querySelector(".viewer").style.left = "0px";
      let e = setInterval(() => {
        this.$parent.updateScreenSize();
      }, 0);
      setTimeout(() => {
        clearInterval(e);
      }, 500);
    },
    fullScreenMode() {
      var e = window.document, t = e.documentElement, s = t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.msRequestFullscreen, n = e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen;
      !e.fullscreenElement && !e.mozFullScreenElement && !e.webkitFullscreenElement && !e.msFullscreenElement ? (s.call(t), this.fullScreenStatus = !0) : (n.call(e), this.fullScreenStatus = !1);
    }
  }
}, Rd = {
  key: 0,
  class: "viewer_left_bottom"
}, Md = /* @__PURE__ */ p("div", { class: "viewer_left_bottom-we" }, [
  /* @__PURE__ */ p("img", { src: Jr })
], -1), Id = { class: "viewer_left_bottom-center" }, Vd = /* @__PURE__ */ p("i", { class: "bi bi-chevron-left" }, null, -1), Bd = [
  Vd
], jd = /* @__PURE__ */ p("span", null, "360°", -1), Zd = /* @__PURE__ */ p("i", { class: "bi bi-chevron-right" }, null, -1), Fd = [
  Zd
], zd = /* @__PURE__ */ p("div", { class: "viewer_left_bottom-right" }, null, -1);
function Wd(e, t, s, n, o, r) {
  return s.loading ? D("", !0) : (E(), C("div", Rd, [
    Md,
    p("div", Id, [
      p("button", {
        onMousedown: t[0] || (t[0] = (l) => r.rotate(1)),
        onClick: t[1] || (t[1] = (l) => r.rotate(1, "click")),
        onMouseup: t[2] || (t[2] = (...l) => r.intervalClear && r.intervalClear(...l)),
        onMouseleave: t[3] || (t[3] = (...l) => r.intervalClear && r.intervalClear(...l))
      }, Bd, 32),
      jd,
      p("button", {
        onMousedown: t[4] || (t[4] = (l) => r.rotate(-1)),
        onClick: t[5] || (t[5] = (l) => r.rotate(-1, "click")),
        onMouseup: t[6] || (t[6] = (...l) => r.intervalClear && r.intervalClear(...l)),
        onMouseleave: t[7] || (t[7] = (...l) => r.intervalClear && r.intervalClear(...l))
      }, Fd, 32)
    ]),
    zd
  ]));
}
const tl = /* @__PURE__ */ ee(Nd, [["render", Wd]]), Hd = {
  setup() {
    return { myStore: me() };
  },
  methods: {
    dropdownToggle(e) {
      this.dropdownStatus = !this.dropdownStatus, this.$router.push({ path: "/", query: { viewId: e.connect_id } }), this.$parent.fetchData("https://api.fineproject.com.tr/api/auth/general/project/get?projectId=" + e.connect_id);
    }
  },
  data() {
    return {
      dropdownStatus: !1
    };
  }
}, Ud = { class: "viewer_mobile_dropdown-area" }, qd = { class: "viewer_mobile_dropdown-content" }, Kd = /* @__PURE__ */ p("span", null, "Genel Görünüm", -1), Yd = ["onClick"];
function Gd(e, t, s, n, o, r) {
  return E(), C(ce, null, [
    Ot(p("div", {
      class: "viewer_mobile_dropdown-overlay",
      onClick: t[0] || (t[0] = (...l) => r.dropdownToggle && r.dropdownToggle(...l))
    }, null, 512), [
      [kt, o.dropdownStatus]
    ]),
    p("div", Ud, [
      p("div", {
        class: ie(`viewer_mobile_dropdown ${o.dropdownStatus ? "open" : ""}`),
        onClick: t[1] || (t[1] = (...l) => r.dropdownToggle && r.dropdownToggle(...l))
      }, [
        p("div", qd, [
          Kd,
          p("i", {
            class: "bi bi-chevron-down",
            style: Ge(`transition: transform .5s; transform: rotate(${o.dropdownStatus ? "180deg" : "0deg"});`)
          }, null, 4)
        ])
      ], 2),
      p("div", {
        class: ie(`viewer_mobile_dropdown-items ${o.dropdownStatus ? "open" : ""}`)
      }, [
        (E(!0), C(ce, null, Ne(n.myStore.blockList, (l, u) => (E(), C("div", {
          key: u,
          class: "viewer_mobile_dropdown-item",
          onClick: (a) => r.dropdownToggle(l.id)
        }, Q(l.title), 9, Yd))), 128))
      ], 2)
    ])
  ], 64);
}
const Xd = /* @__PURE__ */ ee(Hd, [["render", Gd]]), Jd = {
  //components: { CardList, TableList },
  setup() {
    return { myStore: me() };
  },
  data() {
    return {
      filterPanelStatus: !0,
      filterMoreStatus: !1,
      item: null
    };
  },
  methods: {
    zoomToggle() {
      this.myStore.mobileZoomStatus = !this.myStore.mobileZoomStatus;
    },
    selectedLayer(e) {
      this.myStore.isMainView = !1, this.myStore.backButtonVisibility = !1, this.$router.push({ path: "/", query: { viewId: e.id } }), this.myStore.apartmentOptionStatus = !0, this.myStore.selectedFlat = e, this.myStore.blokListButtonVisibility = !1, this.myStore.chooseBlockPanelVisibility = !1, this.myStore.apartmentPanelVisibility = !0;
    },
    dayTypeToggle() {
      this.myStore.dayType == "light" ? this.myStore.dayType = "night" : this.myStore.dayType = "light";
    },
    polygonShowToggle() {
      this.myStore.polygonVisibility = !this.myStore.polygonVisibility;
    },
    filterMoreOptionToggle() {
      this.filterMoreStatus = !this.filterMoreStatus;
    },
    filterPanelToggle() {
      this.filterPanelStatus = !this.filterPanelStatus;
    },
    listViewTypeToggle(e) {
      this.myStore.listViewType = e;
    }
  }
}, Qd = { class: "viewer_mobile_control_left" }, e4 = {
  key: 0,
  class: "bi bi-brightness-high-fill"
}, t4 = {
  key: 1,
  class: "bi bi-moon-fill"
}, s4 = {
  key: 0,
  class: "bi bi-eye-fill"
}, n4 = {
  key: 1,
  class: "bi bi-eye-slash-fill"
}, i4 = /* @__PURE__ */ p("button", { class: "btn btn-light mr-2" }, [
  /* @__PURE__ */ p("i", { class: "bi bi-filter" }),
  /* @__PURE__ */ Oe(" Filtreler ")
], -1), o4 = [
  i4
];
function r4(e, t, s, n, o, r) {
  return E(), C("div", {
    class: ie(`viewer_mobile_controls ${n.myStore.mobileZoomStatus ? "zoomIn" : ""}`)
  }, [
    p("div", Qd, [
      n.myStore.dayTypeVisibility ? (E(), C("button", {
        key: 0,
        class: "btn btn-light mr-2",
        onClick: t[0] || (t[0] = (...l) => r.dayTypeToggle && r.dayTypeToggle(...l))
      }, [
        n.myStore.dayType == "light" ? (E(), C("i", e4)) : D("", !0),
        n.myStore.dayType == "night" ? (E(), C("i", t4)) : D("", !0)
      ])) : D("", !0),
      p("button", {
        class: "btn btn-light mr-2",
        onClick: t[1] || (t[1] = (...l) => r.polygonShowToggle && r.polygonShowToggle(...l))
      }, [
        n.myStore.polygonVisibility ? D("", !0) : (E(), C("i", s4)),
        n.myStore.polygonVisibility ? (E(), C("i", n4)) : D("", !0)
      ])
    ]),
    p("div", {
      class: "viewer_mobile_control_right",
      onClick: t[2] || (t[2] = (l) => n.myStore.mobileFilterPanel(!0))
    }, o4)
  ], 2);
}
const l4 = /* @__PURE__ */ ee(Jd, [["render", r4]]), c4 = {
  components: {
    MainView: l4
  },
  setup() {
    return { myStore: me() };
  },
  data() {
    return {
      filterPanelStatus: !0,
      filterMoreStatus: !1,
      listViewType: "list",
      item: null
    };
  },
  methods: {}
}, a4 = {
  key: 0,
  class: "viewer_mobile_bottom-wrapper"
};
function u4(e, t, s, n, o, r) {
  const l = X("MainView");
  return E(), C(ce, null, [
    he(l),
    n.myStore.mobileZoomStatus ? D("", !0) : (E(), C("div", a4))
  ], 64);
}
const h4 = /* @__PURE__ */ ee(c4, [["render", u4]]), d4 = {
  setup() {
    return { myStore: me() };
  },
  created() {
    for (let e = 1; e < 70; e++)
      this.items.push({
        id: e,
        title: "Daire" + e,
        status: e % 3,
        size: e * 10 + "m2",
        floor: e,
        rooms: "3+1",
        isCompare: this.compareControl(e)
      });
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    compareControl(e) {
      return JSON.parse(localStorage.getItem("compare") || "[]").find((s) => s == e);
    },
    addCompare(e) {
      event.stopPropagation();
      let t = JSON.parse(localStorage.getItem("compare") || "[]");
      this.compareControl(e.id) || (t.push(e.id), localStorage.setItem("compare", JSON.stringify(t)), e.isCompare = !0);
    },
    removeCompare(e) {
      event.stopPropagation();
      let t = JSON.parse(localStorage.getItem("compare") || "[]");
      if (this.compareControl(e.id)) {
        let s = t.indexOf(e.id);
        t.splice(s, 1), localStorage.setItem("compare", JSON.stringify(t)), e.isCompare = !1;
      }
    }
  }
}, p4 = { class: "mt-2 ls-card" }, f4 = ["onClick"], m4 = { class: "ls-card-item-left" }, g4 = { class: "ls-card-item-left-content" }, _4 = /* @__PURE__ */ p("b", null, "m²", -1), v4 = /* @__PURE__ */ p("b", null, "Oda", -1), y4 = /* @__PURE__ */ p("b", null, "Kat", -1), b4 = { class: "ls-card-item-right" }, w4 = { class: "ls-card-item-right-toolbox" }, E4 = ["onClick"], S4 = /* @__PURE__ */ p("i", { class: "bi bi-box-arrow-in-down" }, null, -1), A4 = [
  S4
], T4 = ["onClick"], C4 = /* @__PURE__ */ p("i", { class: "bi bi-heart-fill" }, null, -1), $4 = [
  C4
], O4 = /* @__PURE__ */ p("img", { src: "https://smart-makieta-3destate-embed.azureedge.net/assets/6b248da8-fe5e-4253-8fae-b443c131c970/minimaps/D2-01-0-512x512-Medium.png" }, null, -1);
function k4(e, t, s, n, o, r) {
  return E(), C("div", p4, [
    (E(!0), C(ce, null, Ne(n.myStore.apartmentList, (l, u) => (E(), C("div", {
      class: "ls-card-item mb-3",
      key: u,
      onClick: (a) => this.$parent.selectedLayer(l)
    }, [
      p("div", m4, [
        p("div", g4, [
          p("h2", null, Q(l.title), 1),
          p("h3", null, Q(l.status == 0 ? "UYGUN" : l.status == 1 ? "REZERVE" : l.status == 2 ? "SATILDI" : ""), 1),
          _4,
          p("span", null, Q(l.size), 1),
          v4,
          p("span", null, Q(l.rooms), 1),
          y4,
          p("span", null, Q(l.floor), 1)
        ])
      ]),
      p("div", b4, [
        p("div", w4, [
          l.isCompare ? D("", !0) : (E(), C("button", {
            key: 0,
            class: "btn btn-sm btn-light",
            onClick: (a) => r.addCompare(l)
          }, A4, 8, E4)),
          l.isCompare ? (E(), C("button", {
            key: 1,
            onClick: (a) => r.removeCompare(l),
            class: "btn btn-sm btn-light"
          }, $4, 8, T4)) : D("", !0)
        ]),
        O4
      ])
    ], 8, f4))), 128))
  ]);
}
const x4 = /* @__PURE__ */ ee(d4, [["render", k4]]), P4 = {
  setup() {
    return { myStore: me() };
  },
  created() {
    for (let e = 1; e < 70; e++)
      this.items.push({
        id: e,
        title: "Daire" + e,
        size: e * 10 + "m2",
        floor: e,
        rooms: "3+1",
        isCompare: this.compareControl(e)
      });
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    compareControl(e) {
      return JSON.parse(localStorage.getItem("compare") || "[]").find((s) => s == e);
    },
    addCompare(e) {
      event.stopPropagation();
      let t = JSON.parse(localStorage.getItem("compare") || "[]");
      this.compareControl(e.id) || (t.push(e.id), localStorage.setItem("compare", JSON.stringify(t)), e.isCompare = !0);
    },
    removeCompare(e) {
      event.stopPropagation();
      let t = JSON.parse(localStorage.getItem("compare") || "[]");
      if (this.compareControl(e.id)) {
        let s = t.indexOf(e.id);
        t.splice(s, 1), localStorage.setItem("compare", JSON.stringify(t)), e.isCompare = !1;
      }
    }
  }
}, L4 = { class: "mt-2 ls-table" }, D4 = /* @__PURE__ */ ts('<div class="ls-table-thead" style="top:0px;"><div class="ls-table-thead-tr"><div class="ls-table-thead-th" style="background:white !important;">ID</div><div class="ls-table-thead-th" style="background:white !important;">Blok</div><div class="ls-table-thead-th" style="background:white !important;">m²</div><div class="ls-table-thead-th" style="background:white !important;">Kat</div><div class="ls-table-thead-th" style="background:white !important;">Oda</div><div class="ls-table-thead-th" style="background:white !important;"></div></div></div>', 1), N4 = { class: "ls-table-tbody" }, R4 = ["onClick"], M4 = { class: "ls-table-td" }, I4 = { class: "ls-table-td" }, V4 = { class: "ls-table-td" }, B4 = { class: "ls-table-td" }, j4 = { class: "ls-table-td" }, Z4 = { class: "ls-table-td" }, F4 = ["onClick"], z4 = /* @__PURE__ */ p("i", { class: "bi bi-box-arrow-in-down" }, null, -1), W4 = [
  z4
], H4 = ["onClick"], U4 = /* @__PURE__ */ p("i", { class: "bi bi-heart-fill" }, null, -1), q4 = [
  U4
];
function K4(e, t, s, n, o, r) {
  return E(), C("div", L4, [
    D4,
    p("div", N4, [
      (E(!0), C(ce, null, Ne(n.myStore.apartmentList, (l, u) => (E(), C("div", {
        class: "ls-table-tr",
        key: u,
        onClick: (a) => this.$parent.selectedItem(l)
      }, [
        p("div", M4, Q(l.id), 1),
        p("div", I4, Q(l.title), 1),
        p("div", V4, Q(l.size), 1),
        p("div", B4, Q(l.floor), 1),
        p("div", j4, Q(l.rooms), 1),
        p("div", Z4, [
          l.isCompare ? D("", !0) : (E(), C("button", {
            key: 0,
            class: "btn btn-sm btn-light",
            onClick: (a) => r.addCompare(l)
          }, W4, 8, F4)),
          l.isCompare ? (E(), C("button", {
            key: 1,
            onClick: (a) => r.removeCompare(l),
            class: "btn btn-sm btn-light"
          }, q4, 8, H4)) : D("", !0)
        ])
      ], 8, R4))), 128))
    ])
  ]);
}
const Y4 = /* @__PURE__ */ ee(P4, [["render", K4]]), G4 = {
  components: {
    TopPanel: el,
    BottomPanel: tl
  },
  setup() {
    return { myStore: me() };
  },
  props: ["dollhouse"],
  created() {
  },
  methods: {
    sizeCalc(e) {
      if (!e)
        return {
          width: 1200,
          height: 900
        };
      var t = e.width, s = e.height;
      return t <= 0 || s <= 0 ? {
        width: 1200,
        height: 900
      } : t / s >= 4 / 3 ? {
        width: t,
        height: 0.75 * t
      } : {
        width: s * (4 / 3),
        height: s
      };
    },
    updateScreenSize() {
      setTimeout(() => {
        let e = document.querySelector(".mobile_dollview").clientHeight, t = this.sizeCalc({ width: window.innerWidth, height: e }), s = (t.width - window.innerWidth) / 2, n = (t.height - e) / 2;
        document.querySelector(".mobile_dollview_viewer").style.width = t.width + "px", document.querySelector(".mobile_dollview_viewer").style.height = t.height + "px", s > 0 ? document.querySelector(".mobile_dollview_viewer").style.left = s * -1 + "px" : s < 0 ? document.querySelector(".mobile_dollview_viewer").style.left = s + "px" : document.querySelector(".mobile_dollview_viewer").style.left = "0px", n > 0 ? document.querySelector(".mobile_dollview_viewer").style.top = n * -1 + "px" : n < 0 ? document.querySelector(".mobile_dollview_viewer").style.top = n + "px" : document.querySelector(".mobile_dollview_viewer").style.top = "0px";
      }, 400);
    },
    buildScene() {
      let e = document.querySelector(".mobile_dollview_viewer");
      this.images = [], this.dollhouse.forEach((o) => {
        this.images.push(
          `http://127.0.0.1:8000/${o.path}.jpg`
        );
      }), this.total = this.images.length - 1;
      let t = 0, s = 0;
      this.impetus != null && (t = this.impetus.getValueX(), s = this.impetus.getValueY());
      let n = this;
      this.impetus = new tn({
        source: e,
        friction: 0,
        update(o) {
          n.frame = Math.floor(-o / n.threshold) % n.total, n.frame = n.frame <= 0 ? n.total + n.frame : n.frame;
        }
      }), this.impetus.setValues(t, s), this.updateScreenSize();
    }
  },
  mounted() {
    window.addEventListener("resize", this.updateScreenSize), this.buildScene(), document.addEventListener(
      "contextmenu",
      function(e) {
        e.preventDefault();
      },
      !1
    );
  },
  data() {
    return {
      threshold: 5,
      //<-- mevcut framei bulmak için kullanılan eşik değer
      frame: 0,
      //<-- Sahnedeki mevcut frame i burada tutar
      total: 0,
      //<-- Toplam Frame Sayısı
      imageMode: "obj",
      loading: !0,
      //<-- Yükleme tamamlandıysa false, yükleme tamamlanmadıysa true
      ds: null,
      //<-- Sahneye ait veri seti
      images: [],
      //<-- Sahneye ait resimlerin listesi
      rightBarVisibility: !1,
      //<--Sağ taraftaki barın görünüp görünmeyeceği
      polygonVisibility: !1,
      //<--Polygonlar görünecekse true, görünmeyecekse false
      impetus: null
      //<-- 360 rotate işlemini yapan functionu tutan değişken
    };
  }
}, X4 = { class: "mobile_dollview_viewer" }, J4 = ["src"];
function Q4(e, t, s, n, o, r) {
  const l = X("TopPanel"), u = X("BottomPanel");
  return E(), C("div", {
    class: ie(`mobile_dollview ${n.myStore.mobileOverlayPosition > 0 ? "hidden" : ""}`)
  }, [
    p("div", X4, [
      (E(!0), C(ce, null, Ne(o.images, (a, f) => (E(), C("img", {
        key: f,
        src: a,
        id: "_3dimage",
        class: ie(`_3dimage${f}` + (o.frame == f ? " active" : ""))
      }, null, 10, J4))), 128))
    ]),
    he(l, {
      loading: !1,
      list: [],
      currentFrame: o.frame
    }, null, 8, ["currentFrame"]),
    he(u, {
      loading: !1,
      size: 59
    })
  ], 2);
}
const ep = /* @__PURE__ */ ee(G4, [["render", Q4]]), tp = {
  props: ["viewData"],
  components: {
    BlokInfoCard: Sd,
    SvgDraw: Od,
    TopPanel: el,
    BottomPanel: tl,
    DropdownMenu: Xd,
    PanelArea: h4,
    CardList: x4,
    TableList: Y4,
    DollViewArea: ep
  },
  setup() {
    return { myStore: me() };
  },
  created() {
    this.fetchData(this.viewData);
  },
  methods: {
    mobilePosChange(e) {
      this.myStore.mobileOverlayPosition = e;
    },
    openFlatDetail(e) {
      this.myStore.viewerMobileFlatDetail = e;
    },
    backToMain() {
      this.showFlatDetail = !1, this.$router.push({ path: "/", query: {} });
    },
    fetchData(e) {
      this.loading = !0, setTimeout(() => {
        this.$axios.get(e).then((t) => {
          this.ds = t.data, this.myStore.apartmentList = this.ds.apartmentList, this.myStore.blockList = this.ds.blockList, this.buildScene(), setTimeout(() => {
            this.updateScreenSize();
          }, 1e3);
        }).catch((t) => {
          console.error("Error fetching data:", t), this.loading = !1;
        });
      }, 500);
    },
    selectedItem(e) {
      this.myStore.isMainView && (this.myStore.isMainView = !1, this.myStore.backButtonVisibility = !0), e.connect_type == "flat" ? (this.myStore.apartmentList.forEach((t) => {
        t.id == e.connect_id && (this.flatInfo = t);
      }), this.showFlatDetail = !0) : (this.$router.push({ path: "/", query: { viewId: e.connect_id } }), this.imageMode = "obj2", this.fetchData("https://api.fineproject.com.tr/api/auth/general/project/get?projectId=" + e.connect_id), this.showFlatDetail = !1);
    },
    sizeCalc(e) {
      if (!e)
        return {
          width: 1600,
          height: 1200
        };
      var t = e.width, s = e.height;
      return t <= 0 || s <= 0 ? {
        width: 1600,
        height: 1200
      } : t / s >= 4 / 3 ? {
        width: t,
        height: 0.75 * t
      } : {
        width: s * (4 / 3),
        height: s
      };
    },
    updateScreenSize() {
      try {
        let e;
        this.myStore.mobileZoomStatus ? e = window.innerHeight - 188 - 50 : this.myStore.mobileSvgCurrentHeight > 0 ? e = this.myStore.mobileSvgCurrentHeight : e = window.innerWidth / (4 / 3);
        let t = window.innerWidth, s = 0, n = this.sizeCalc({ width: t, height: e });
        this.myStore.mobileZoomStatus && (s = (t - n.width) / 2), document.querySelector(".viewer_mobile").style.height = e + "px", document.querySelector(".viewer").style.width = n.width + "px", document.querySelector(".viewer").style.height = n.height + "px", s >= 0 ? document.querySelector(".viewer").style.left = "0px" : s < 0 && (document.querySelector(".viewer").style.left = s + "px");
      } catch {
        console.log();
      }
    },
    switchStatusToggle(e) {
      this.switchStatus = e;
    },
    downloadImages(e) {
      var t = e.map(function(s) {
        return new Promise(function(n, o) {
          var r = new Image();
          r.onload = function() {
            n(s);
          }, r.onerror = function() {
            o(new Error("Failed to download " + s));
          }, r.src = s;
        });
      });
      return Promise.all(t);
    },
    buildScene() {
      let e = document.querySelector(".viewer");
      this.images = [], this.ds.frames.forEach((s) => {
        this.images.push(s.srcDay);
      });
      let t = this;
      this.downloadImages(this.images).then(function(s) {
        t.total = t.images.length - 1;
        let n = 0, o = 0;
        t.impetus != null && (n = t.impetus.getValueX(), o = t.impetus.getValueY()), t.impetus = new tn({
          source: e,
          friction: 0,
          update(r) {
            t.frame = Math.floor(-r / t.threshold) % t.total, t.frame = t.frame <= 0 ? t.total + t.frame : t.frame;
          }
        }), t.impetus.setValues(n, o), t.loading = !1;
      }).catch(function(s) {
        console.error("Error downloading images:", s);
      });
    },
    listViewTypeToggle(e) {
      this.myStore.listViewType = e;
    }
  },
  watch: {
    "myStore.mobileZoomStatus": function() {
      this.updateScreenSize();
    },
    "$route.query.viewId": function() {
      this.$route.query.viewId == null || this.$route.query.viewId == 1 ? (this.myStore.isMainView = !0, this.myStore.backButtonVisibility = !1, this.imageMode = "obj", this.fetchData(this.viewData)) : (this.fetchData("https://api.fineproject.com.tr/auth/general/project/get?projectId=" + this.$route.query.viewId), this.showFlatDetail = !1);
    }
  },
  mounted() {
    var e = !1;
    let t = this, s = document.querySelector(".viewer_mobile");
    s.addEventListener("mouseup", () => {
      e = !1, t.pointerActive = !0;
    }), document.querySelector(".viewer_mobile_dropdown-overlay").addEventListener("click", () => {
      t.dropdownStatus = !1;
    }), s.addEventListener("mousemove", () => {
      e && (t.pointerActive = !1);
    }), s.addEventListener("mousedown", () => {
      e = !0;
    }), window.addEventListener("resize", this.updateScreenSize), document.addEventListener(
      "contextmenu",
      function(n) {
        n.preventDefault();
      },
      !1
    );
  },
  data() {
    return {
      overLayerInfo: null,
      //<-- Üzerine gelinen apartmanın bilgileri
      isMainView: !0,
      //<-- Ana ekranda ise true, alt ekranda ise false
      pointerActive: !0,
      //<-- döndürme işlemi başlamışsa false, başlamamışsa true
      threshold: 5,
      //<-- mevcut framei bulmak için kullanılan eşik değer
      frame: 0,
      //<-- Sahnedeki mevcut frame i burada tutar
      total: 0,
      //<-- Toplam Frame Sayısı
      imageMode: "obj",
      loading: !0,
      //<-- Yükleme tamamlandıysa false, yükleme tamamlanmadıysa true
      ds: null,
      //<-- Sahneye ait veri seti
      images: [],
      //<-- Sahneye ait resimlerin listesi
      rightBarVisibility: !1,
      //<--Sağ taraftaki barın görünüp görünmeyeceği
      impetus: null,
      //<-- 360 rotate işlemini yapan functionu tutan değişken
      switchStatus: !0,
      flatInfo: null,
      showFlatDetail: !1
    };
  }
}, sp = { class: "viewer_mobile_header" }, np = { class: "viewer_mobile_header_content" }, ip = /* @__PURE__ */ p("i", { class: "bi bi-send-plus-fill" }, null, -1), op = /* @__PURE__ */ p("button", { class: "btn btn-sm btn-light mr-2" }, [
  /* @__PURE__ */ p("i", { class: "bi bi-share" })
], -1), rp = /* @__PURE__ */ p("i", { class: "bi bi-arrow-left" }, null, -1), lp = [
  rp
], cp = { class: "viewer_mobile_header_main" }, ap = { class: "viewer_mobile_header_main" }, up = { class: "viewer_mobile_header_slide-toggle" }, hp = /* @__PURE__ */ p("i", { class: "bi bi-box" }, null, -1), dp = /* @__PURE__ */ p("i", { class: "bi bi-list" }, null, -1), pp = { class: "container" }, fp = { class: "d-flex justify-content-between mt-2" }, mp = /* @__PURE__ */ p("i", { class: "bi bi-sliders" }, null, -1), gp = /* @__PURE__ */ p("i", { class: "bi bi-list-ul" }, null, -1), _p = /* @__PURE__ */ p("i", { class: "bi bi-grid" }, null, -1), vp = { class: "viewer_mobile" }, yp = { class: "loading" }, bp = /* @__PURE__ */ p("div", {
  class: "spinner-grow",
  role: "status"
}, [
  /* @__PURE__ */ p("span", { class: "sr-only" })
], -1), wp = [
  bp
], Ep = { class: "viewer" }, Sp = {
  key: 0,
  class: "centerList"
}, Ap = ["src"], Tp = /* @__PURE__ */ p("div", { class: "" }, "Daire detaylarını göster", -1), Cp = /* @__PURE__ */ p("div", { class: "" }, "Daire No: 12", -1), $p = [
  Tp,
  Cp
], Op = { class: "d-flex justify-content-between" }, kp = { class: "d-flex flex-column" }, xp = { class: "" }, Pp = /* @__PURE__ */ p("div", { class: "" }, "Müsait", -1), Lp = /* @__PURE__ */ ts('<div class="d-flex flex-column"><div class="">Kat</div><div class="">4</div></div><div class="d-flex flex-column"><div class="">Oda</div><div class="">3+1</div></div><div class="d-flex flex-column"><div class="">Boyut</div><div class="">120m2</div></div>', 3), Dp = { class: "viewer_mobile_filter_panel-item header" }, Np = /* @__PURE__ */ p("div", { class: "title" }, "Filtre Paneli", -1), Rp = { class: "controllers" }, Mp = /* @__PURE__ */ p("i", { class: "bi bi-x" }, null, -1), Ip = [
  Mp
], Vp = /* @__PURE__ */ ts('<div class="viewer_mobile_filter_panel-item content"><div class="accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Durum </button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Hepsi </label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Uygun </label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Rezerve </label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Satıldı </label></div></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Oda </button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Hepsi </label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Uygun </label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Rezerve </label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Satıldı </label></div></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Kat </button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Hepsi </label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Uygun </label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Rezerve </label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Satıldı </label></div></div></div></div></div><div class="form-group"><label>Alan</label><div class="input-group mt-2 mb-2"><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Min. m2"><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Max. m2"></div></div><div class="form-group"><label>Fiyat</label><div class="input-group mt-2 mb-2"><input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Min. Fiyat"><input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Max. Fiyat"></div></div></div><div class="viewer_mobile_filter_panel-item footer"><button class="btn btn-primary w-100">Uygula</button></div>', 2), Bp = { class: "viewer_mobile_header_content" }, jp = /* @__PURE__ */ p("i", { class: "bi bi-send-plus-fill" }, null, -1), Zp = /* @__PURE__ */ p("button", { class: "btn btn-sm btn-light mr-2" }, [
  /* @__PURE__ */ p("i", { class: "bi bi-share" })
], -1), Fp = /* @__PURE__ */ p("i", { class: "bi bi-x" }, null, -1), zp = [
  Fp
], Wp = { class: "mobile_dollview_head" }, Hp = { class: "viewer_mobile_dollview_content" }, Up = { class: "mobile_dollview_menu" }, qp = { class: "mobile_dollview_menu-slide" }, Kp = {
  key: 0,
  class: "mobile_dollview-content"
}, Yp = /* @__PURE__ */ ts('<div class="mobile_dollview_flat-info-compare"><button class="btn btn-secondary w-100"><i class="bi bi-heart"></i> Kıyasla</button></div><div class="mobile_dollview_flat-info"><div class="mobile_dollview_flat-info-item"><b>Durum</b><span>Müsait</span></div><div class="mobile_dollview_flat-info-item"><b>Oda</b><span>3+1</span></div><div class="mobile_dollview_flat-info-item"><b>m2</b><span>100m2</span></div><div class="mobile_dollview_flat-info-item"><b>Kat</b><span>3</span></div><div class="mobile_dollview_flat-info-item"><b>Blok</b><span>D</span></div></div><div class="mobile_dollview_flat-info"><img src="https://www.southseabeachcafe.co.uk/wp-content/uploads/2014/08/500x500-500x400.gif"></div><div class="mobile_dollview_flat-info"><small>Görseller bilgilendirme amaçlıdır.</small></div>', 4), Gp = { class: "mobile_dollview_flat-info border-top" }, Xp = /* @__PURE__ */ p("small", null, "Benzer Daireler", -1), Jp = {
  key: 1,
  class: "mobile_dollview-content"
}, Qp = {
  key: 2,
  class: "mobile_dollview-content"
}, e5 = {
  key: 3,
  class: "mobile_dollview-content"
};
function t5(e, t, s, n, o, r) {
  const l = X("router-link"), u = X("DropdownMenu"), a = X("CardList"), f = X("TableList"), h = X("BlokInfoCard"), d = X("SvgDraw"), _ = X("TopPanel"), y = X("BottomPanel"), v = X("DollViewArea"), b = X("PanelArea");
  return E(), C(ce, null, [
    p("div", sp, [
      p("div", np, [
        he(l, {
          to: "compare",
          class: "btn btn-sm btn-light mr-2"
        }, {
          default: Bn(() => [
            ip
          ]),
          _: 1
        }),
        op,
        this.myStore.backButtonVisibility ? (E(), C("button", {
          key: 0,
          class: ie(
            "btn btn-sm btn-light"
          ),
          onClick: t[0] || (t[0] = (...S) => r.backToMain && r.backToMain(...S))
        }, lp)) : D("", !0)
      ]),
      p("div", cp, [
        he(u)
      ]),
      p("div", ap, [
        p("div", up, [
          p("div", {
            class: "viewer_mobile_header_slide-toggle-overlay",
            style: Ge(`width: calc(50% + 0px);left: calc(${o.switchStatus ? 0 : 50}% + 0px);`)
          }, null, 4),
          p("div", {
            class: "viewer_mobile_header_slide-toggle-item",
            onClick: t[1] || (t[1] = (S) => r.switchStatusToggle(!0))
          }, [
            hp,
            Oe(" Ana Görüntü ")
          ]),
          p("div", {
            class: "viewer_mobile_header_slide-toggle-item",
            onClick: t[2] || (t[2] = (S) => r.switchStatusToggle(!1))
          }, [
            dp,
            Oe(" Liste ")
          ])
        ]),
        p("div", {
          class: "viewer_mobile_header-switch-menu",
          style: Ge(`width:100%;left:-${o.switchStatus ? 100 : 0}%;`)
        }, [
          p("div", pp, [
            p("div", fp, [
              p("button", {
                class: "btn btn-lg btn-primary",
                onClick: t[3] || (t[3] = (S) => n.myStore.mobileFilterPanel(!0))
              }, [
                mp,
                Oe(" Filtre ")
              ]),
              n.myStore.listViewType == "list" ? (E(), C("button", {
                key: 0,
                class: "btn btn-lg btn-primary",
                onClick: t[4] || (t[4] = (S) => r.listViewTypeToggle("card"))
              }, [
                gp,
                Oe(" Liste ")
              ])) : D("", !0),
              n.myStore.listViewType == "card" ? (E(), C("button", {
                key: 1,
                class: "btn btn-lg btn-primary",
                onClick: t[5] || (t[5] = (S) => r.listViewTypeToggle("list"))
              }, [
                _p,
                Oe(" Kart ")
              ])) : D("", !0)
            ]),
            n.myStore.listViewType == "card" ? (E(), ke(a, { key: 0 })) : D("", !0),
            n.myStore.listViewType == "list" ? (E(), ke(f, { key: 1 })) : D("", !0)
          ])
        ], 4)
      ])
    ]),
    p("div", vp, [
      Ot(p("div", yp, wp, 512), [
        [kt, o.loading]
      ]),
      Ot(p("div", Ep, [
        !o.loading && !n.myStore.polygonVisibility ? (E(), C("div", Sp, [
          (E(!0), C(ce, null, Ne(o.ds.frames[o.frame].layers, (S, $) => (E(), ke(h, {
            key: $,
            item: S,
            index: $
          }, null, 8, ["item", "index"]))), 128))
        ])) : D("", !0),
        he(d, {
          loading: o.loading,
          currentFrame: o.frame,
          list: o.ds,
          pointerActive: o.pointerActive,
          polygonVisibility: n.myStore.polygonVisibility
        }, null, 8, ["loading", "currentFrame", "list", "pointerActive", "polygonVisibility"]),
        (E(!0), C(ce, null, Ne(o.images, (S, $) => (E(), C("img", {
          key: $,
          src: S,
          id: "_3dimage",
          class: ie(`_3dimage${$}` + (o.frame == $ ? " active" : ""))
        }, null, 10, Ap))), 128))
      ], 512), [
        [kt, !o.loading]
      ]),
      he(_, {
        loading: o.loading,
        list: o.ds,
        currentFrame: o.frame,
        isMainView: o.isMainView
      }, null, 8, ["loading", "list", "currentFrame", "isMainView"]),
      he(y, {
        size: 119,
        loading: o.loading
      }, null, 8, ["loading"])
    ]),
    o.flatInfo != null ? (E(), C("div", {
      key: 0,
      class: ie(`viewer_mobile_flat_infos ${o.showFlatDetail ? "show" : ""}`)
    }, [
      p("button", {
        class: "btn flex-d w-100 btn-primary mb-3 d-flex justify-content-between",
        onClick: t[6] || (t[6] = (S) => r.openFlatDetail(!0))
      }, $p),
      p("div", Op, [
        p("div", kp, [
          p("div", xp, Q(o.flatInfo.title), 1),
          Pp
        ]),
        Lp
      ])
    ], 2)) : D("", !0),
    p("div", {
      class: ie(`viewer_mobile_filter_panel ${n.myStore.mobileFilterStatus ? "open" : ""}`)
    }, [
      p("div", Dp, [
        Np,
        p("div", Rp, [
          p("button", {
            class: "btn btn-light",
            onClick: t[7] || (t[7] = (S) => n.myStore.mobileFilterPanel(!1))
          }, Ip)
        ])
      ]),
      Vp
    ], 2),
    o.flatInfo != null ? (E(), C("div", {
      key: 1,
      class: ie(`viewer_mobile_flat_detail ${n.myStore.viewerMobileFlatDetail ? "open" : ""}`)
    }, [
      p("div", Bp, [
        he(l, {
          to: "compare",
          class: "btn btn-sm btn-light mr-2"
        }, {
          default: Bn(() => [
            jp
          ]),
          _: 1
        }),
        Zp,
        p("button", {
          class: ie(
            "btn btn-sm btn-light"
          ),
          onClick: t[8] || (t[8] = (S) => r.openFlatDetail(!1))
        }, zp)
      ]),
      p("div", Wp, "Daire: " + Q(o.flatInfo.title), 1),
      p("div", Hp, [
        he(v, {
          dollhouse: o.flatInfo.dollhouse
        }, null, 8, ["dollhouse"]),
        p("div", Up, [
          p("div", qp, [
            p("div", {
              class: "mobile_dollview_menu-slide-overlay",
              style: Ge(`width: calc(25% + 0px); left: calc(${n.myStore.mobileOverlayPosition * 25}% + 0px);`)
            }, null, 4),
            p("div", {
              class: "mobile_dollview_menu-slide-item",
              onClick: t[9] || (t[9] = (S) => r.mobilePosChange(0))
            }, "Detaylar"),
            p("div", {
              class: "mobile_dollview_menu-slide-item",
              onClick: t[10] || (t[10] = (S) => r.mobilePosChange(1))
            }, "Sanal Tur"),
            p("div", {
              class: "mobile_dollview_menu-slide-item",
              onClick: t[11] || (t[11] = (S) => r.mobilePosChange(2))
            }, "Çevre Turu"),
            p("div", {
              class: "mobile_dollview_menu-slide-item",
              onClick: t[12] || (t[12] = (S) => r.mobilePosChange(3))
            }, "Dış Görünüm")
          ])
        ]),
        n.myStore.mobileOverlayPosition == 0 ? (E(), C("div", Kp, [
          Yp,
          p("div", Gp, [
            Xp,
            he(a)
          ])
        ])) : D("", !0),
        n.myStore.mobileOverlayPosition == 1 ? (E(), C("div", Jp, " Sanal Tur ")) : D("", !0),
        n.myStore.mobileOverlayPosition == 2 ? (E(), C("div", Qp, " Çevre Turu ")) : D("", !0),
        n.myStore.mobileOverlayPosition == 3 ? (E(), C("div", e5, " Dış Görünüm ")) : D("", !0)
      ])
    ], 2)) : D("", !0),
    he(b)
  ], 64);
}
const s5 = /* @__PURE__ */ ee(tp, [["render", t5]]), n5 = {
  setup() {
    const e = me();
    return window.innerWidth > 950 ? (e.desktopMode = !0, e.mobileMode = !1, window.innerHeight > 500 ? e.portraitMode = !1 : e.portraitMode = !0) : window.innerWidth < 800 ? (e.desktopMode = !1, e.mobileMode = !0, window.innerHeight > 500 ? e.portraitMode = !1 : e.portraitMode = !0) : e.portraitMode = !0, { myStore: e };
  },
  components: {
    DesktopViewArea: rd,
    MobileViewArea: s5,
    DesktopDollViewArea: _d,
    DesktopVirtualTourViewArea: hd
  },
  created() {
  },
  computed: {},
  methods: {},
  mounted() {
    window.addEventListener("resize", () => {
      window.innerWidth > 950 ? (this.myStore.desktopMode = !0, this.myStore.mobileMode = !1, window.innerHeight > 500 ? this.myStore.portraitMode = !1 : this.myStore.portraitMode = !0) : window.innerWidth < 800 ? (this.myStore.desktopMode = !1, this.myStore.mobileMode = !0, window.innerHeight > 500 ? this.myStore.portraitMode = !1 : this.myStore.portraitMode = !0) : this.myStore.portraitMode = !0;
    });
  },
  data() {
    return {};
  }
}, i5 = {
  key: 0,
  class: "portrait"
}, o5 = {
  key: 1,
  class: "main"
};
function r5(e, t, s, n, o, r) {
  const l = X("DesktopViewArea"), u = X("MobileViewArea"), a = X("DesktopDollViewArea"), f = X("DesktopVirtualTourViewArea");
  return E(), C(ce, null, [
    n.myStore.portraitMode ? (E(), C("div", i5, " Lüften cihazınızı dikey konuma getirin ")) : D("", !0),
    n.myStore.portraitMode ? D("", !0) : (E(), C("div", o5, [
      n.myStore.desktopMode && n.myStore.viewerType == "PROJECT-VIEW" ? (E(), ke(l, {
        key: 0,
        viewData: "https://api.fineproject.com.tr/api/auth/general/project/get?projectId=7"
      }, null, 8, ["viewData"])) : D("", !0),
      n.myStore.mobileMode && n.myStore.viewerType == "PROJECT-VIEW" ? (E(), ke(u, {
        key: 1,
        viewData: "https://api.fineproject.com.tr/api/auth/general/project/get?projectId=7"
      }, null, 8, ["viewData"])) : D("", !0),
      n.myStore.desktopMode && n.myStore.viewerType == "DOLL-VIEW" ? (E(), ke(a, { key: 2 })) : D("", !0),
      n.myStore.desktopMode && n.myStore.viewerType == "VIRTUAL-TOUR" ? (E(), ke(f, { key: 3 })) : D("", !0)
    ]))
  ], 64);
}
const sl = /* @__PURE__ */ ee(n5, [["render", r5]]), ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sl
}, Symbol.toStringTag, { value: "Module" })), l5 = {
  setup() {
  },
  data() {
  },
  components: { HomeView: sl },
  methods: {}
};
function c5(e, t, s, n, o, r) {
  const l = X("HomeView");
  return E(), ke(l);
}
const a5 = /* @__PURE__ */ ee(l5, [["render", c5]]);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Ht = typeof window < "u";
function u5(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const le = Object.assign;
function Tn(e, t) {
  const s = {};
  for (const n in t) {
    const o = t[n];
    s[n] = qe(o) ? o.map(e) : e(o);
  }
  return s;
}
const vs = () => {
}, qe = Array.isArray, h5 = /\/$/, d5 = (e) => e.replace(h5, "");
function Cn(e, t, s = "/") {
  let n, o = {}, r = "", l = "";
  const u = t.indexOf("#");
  let a = t.indexOf("?");
  return u < a && u >= 0 && (a = -1), a > -1 && (n = t.slice(0, a), r = t.slice(a + 1, u > -1 ? u : t.length), o = e(r)), u > -1 && (n = n || t.slice(0, u), l = t.slice(u, t.length)), n = g5(n ?? t, s), {
    fullPath: n + (r && "?") + r + l,
    path: n,
    query: o,
    hash: l
  };
}
function p5(e, t) {
  const s = t.query ? e(t.query) : "";
  return t.path + (s && "?") + s + (t.hash || "");
}
function xo(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function f5(e, t, s) {
  const n = t.matched.length - 1, o = s.matched.length - 1;
  return n > -1 && n === o && Jt(t.matched[n], s.matched[o]) && nl(t.params, s.params) && e(t.query) === e(s.query) && t.hash === s.hash;
}
function Jt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function nl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const s in e)
    if (!m5(e[s], t[s]))
      return !1;
  return !0;
}
function m5(e, t) {
  return qe(e) ? Po(e, t) : qe(t) ? Po(t, e) : e === t;
}
function Po(e, t) {
  return qe(t) ? e.length === t.length && e.every((s, n) => s === t[n]) : e.length === 1 && e[0] === t;
}
function g5(e, t) {
  if (e.startsWith("/"))
    return e;
  if (!e)
    return t;
  const s = t.split("/"), n = e.split("/"), o = n[n.length - 1];
  (o === ".." || o === ".") && n.push("");
  let r = s.length - 1, l, u;
  for (l = 0; l < n.length; l++)
    if (u = n[l], u !== ".")
      if (u === "..")
        r > 1 && r--;
      else
        break;
  return s.slice(0, r).join("/") + "/" + n.slice(l - (l === n.length ? 1 : 0)).join("/");
}
var Es;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Es || (Es = {}));
var ys;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ys || (ys = {}));
function _5(e) {
  if (!e)
    if (Ht) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), d5(e);
}
const v5 = /^[^#]+#/;
function y5(e, t) {
  return e.replace(v5, "#") + t;
}
function b5(e, t) {
  const s = document.documentElement.getBoundingClientRect(), n = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: n.left - s.left - (t.left || 0),
    top: n.top - s.top - (t.top || 0)
  };
}
const nn = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function w5(e) {
  let t;
  if ("el" in e) {
    const s = e.el, n = typeof s == "string" && s.startsWith("#"), o = typeof s == "string" ? n ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
    if (!o)
      return;
    t = b5(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Lo(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const qn = /* @__PURE__ */ new Map();
function E5(e, t) {
  qn.set(e, t);
}
function S5(e) {
  const t = qn.get(e);
  return qn.delete(e), t;
}
let A5 = () => location.protocol + "//" + location.host;
function il(e, t) {
  const { pathname: s, search: n, hash: o } = t, r = e.indexOf("#");
  if (r > -1) {
    let u = o.includes(e.slice(r)) ? e.slice(r).length : 1, a = o.slice(u);
    return a[0] !== "/" && (a = "/" + a), xo(a, "");
  }
  return xo(s, e) + n + o;
}
function T5(e, t, s, n) {
  let o = [], r = [], l = null;
  const u = ({ state: _ }) => {
    const y = il(e, location), v = s.value, b = t.value;
    let S = 0;
    if (_) {
      if (s.value = y, t.value = _, l && l === v) {
        l = null;
        return;
      }
      S = b ? _.position - b.position : 0;
    } else
      n(y);
    o.forEach(($) => {
      $(s.value, v, {
        delta: S,
        type: Es.pop,
        direction: S ? S > 0 ? ys.forward : ys.back : ys.unknown
      });
    });
  };
  function a() {
    l = s.value;
  }
  function f(_) {
    o.push(_);
    const y = () => {
      const v = o.indexOf(_);
      v > -1 && o.splice(v, 1);
    };
    return r.push(y), y;
  }
  function h() {
    const { history: _ } = window;
    _.state && _.replaceState(le({}, _.state, { scroll: nn() }), "");
  }
  function d() {
    for (const _ of r)
      _();
    r = [], window.removeEventListener("popstate", u), window.removeEventListener("beforeunload", h);
  }
  return window.addEventListener("popstate", u), window.addEventListener("beforeunload", h, {
    passive: !0
  }), {
    pauseListeners: a,
    listen: f,
    destroy: d
  };
}
function Do(e, t, s, n = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: s,
    replaced: n,
    position: window.history.length,
    scroll: o ? nn() : null
  };
}
function C5(e) {
  const { history: t, location: s } = window, n = {
    value: il(e, s)
  }, o = { value: t.state };
  o.value || r(n.value, {
    back: null,
    current: n.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function r(a, f, h) {
    const d = e.indexOf("#"), _ = d > -1 ? (s.host && document.querySelector("base") ? e : e.slice(d)) + a : A5() + e + a;
    try {
      t[h ? "replaceState" : "pushState"](f, "", _), o.value = f;
    } catch (y) {
      console.error(y), s[h ? "replace" : "assign"](_);
    }
  }
  function l(a, f) {
    const h = le({}, t.state, Do(
      o.value.back,
      // keep back and forward entries but override current position
      a,
      o.value.forward,
      !0
    ), f, { position: o.value.position });
    r(a, h, !0), n.value = a;
  }
  function u(a, f) {
    const h = le(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: a,
        scroll: nn()
      }
    );
    r(h.current, h, !0);
    const d = le({}, Do(n.value, a, null), { position: h.position + 1 }, f);
    r(a, d, !1), n.value = a;
  }
  return {
    location: n,
    state: o,
    push: u,
    replace: l
  };
}
function $5(e) {
  e = _5(e);
  const t = C5(e), s = T5(e, t.state, t.location, t.replace);
  function n(r, l = !0) {
    l || s.pauseListeners(), history.go(r);
  }
  const o = le({
    // it's overridden right after
    location: "",
    base: e,
    go: n,
    createHref: y5.bind(null, e)
  }, t, s);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function O5(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ol(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const lt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, rl = Symbol("");
var No;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(No || (No = {}));
function Qt(e, t) {
  return le(new Error(), {
    type: e,
    [rl]: !0
  }, t);
}
function st(e, t) {
  return e instanceof Error && rl in e && (t == null || !!(e.type & t));
}
const Ro = "[^/]+?", k5 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, x5 = /[.+*?^${}()[\]/\\]/g;
function P5(e, t) {
  const s = le({}, k5, t), n = [];
  let o = s.start ? "^" : "";
  const r = [];
  for (const f of e) {
    const h = f.length ? [] : [
      90
      /* PathScore.Root */
    ];
    s.strict && !f.length && (o += "/");
    for (let d = 0; d < f.length; d++) {
      const _ = f[d];
      let y = 40 + (s.sensitive ? 0.25 : 0);
      if (_.type === 0)
        d || (o += "/"), o += _.value.replace(x5, "\\$&"), y += 40;
      else if (_.type === 1) {
        const { value: v, repeatable: b, optional: S, regexp: $ } = _;
        r.push({
          name: v,
          repeatable: b,
          optional: S
        });
        const k = $ || Ro;
        if (k !== Ro) {
          y += 10;
          try {
            new RegExp(`(${k})`);
          } catch (M) {
            throw new Error(`Invalid custom RegExp for param "${v}" (${k}): ` + M.message);
          }
        }
        let V = b ? `((?:${k})(?:/(?:${k}))*)` : `(${k})`;
        d || (V = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        S && f.length < 2 ? `(?:/${V})` : "/" + V), S && (V += "?"), o += V, y += 20, S && (y += -8), b && (y += -20), k === ".*" && (y += -50);
      }
      h.push(y);
    }
    n.push(h);
  }
  if (s.strict && s.end) {
    const f = n.length - 1;
    n[f][n[f].length - 1] += 0.7000000000000001;
  }
  s.strict || (o += "/?"), s.end ? o += "$" : s.strict && (o += "(?:/|$)");
  const l = new RegExp(o, s.sensitive ? "" : "i");
  function u(f) {
    const h = f.match(l), d = {};
    if (!h)
      return null;
    for (let _ = 1; _ < h.length; _++) {
      const y = h[_] || "", v = r[_ - 1];
      d[v.name] = y && v.repeatable ? y.split("/") : y;
    }
    return d;
  }
  function a(f) {
    let h = "", d = !1;
    for (const _ of e) {
      (!d || !h.endsWith("/")) && (h += "/"), d = !1;
      for (const y of _)
        if (y.type === 0)
          h += y.value;
        else if (y.type === 1) {
          const { value: v, repeatable: b, optional: S } = y, $ = v in f ? f[v] : "";
          if (qe($) && !b)
            throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);
          const k = qe($) ? $.join("/") : $;
          if (!k)
            if (S)
              _.length < 2 && (h.endsWith("/") ? h = h.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${v}"`);
          h += k;
        }
    }
    return h || "/";
  }
  return {
    re: l,
    score: n,
    keys: r,
    parse: u,
    stringify: a
  };
}
function L5(e, t) {
  let s = 0;
  for (; s < e.length && s < t.length; ) {
    const n = t[s] - e[s];
    if (n)
      return n;
    s++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function D5(e, t) {
  let s = 0;
  const n = e.score, o = t.score;
  for (; s < n.length && s < o.length; ) {
    const r = L5(n[s], o[s]);
    if (r)
      return r;
    s++;
  }
  if (Math.abs(o.length - n.length) === 1) {
    if (Mo(n))
      return 1;
    if (Mo(o))
      return -1;
  }
  return o.length - n.length;
}
function Mo(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const N5 = {
  type: 0,
  value: ""
}, R5 = /[a-zA-Z0-9_]/;
function M5(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[N5]];
  if (!e.startsWith("/"))
    throw new Error(`Invalid path "${e}"`);
  function t(y) {
    throw new Error(`ERR (${s})/"${f}": ${y}`);
  }
  let s = 0, n = s;
  const o = [];
  let r;
  function l() {
    r && o.push(r), r = [];
  }
  let u = 0, a, f = "", h = "";
  function d() {
    f && (s === 0 ? r.push({
      type: 0,
      value: f
    }) : s === 1 || s === 2 || s === 3 ? (r.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), r.push({
      type: 1,
      value: f,
      regexp: h,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : t("Invalid state to consume buffer"), f = "");
  }
  function _() {
    f += a;
  }
  for (; u < e.length; ) {
    if (a = e[u++], a === "\\" && s !== 2) {
      n = s, s = 4;
      continue;
    }
    switch (s) {
      case 0:
        a === "/" ? (f && d(), l()) : a === ":" ? (d(), s = 1) : _();
        break;
      case 4:
        _(), s = n;
        break;
      case 1:
        a === "(" ? s = 2 : R5.test(a) ? _() : (d(), s = 0, a !== "*" && a !== "?" && a !== "+" && u--);
        break;
      case 2:
        a === ")" ? h[h.length - 1] == "\\" ? h = h.slice(0, -1) + a : s = 3 : h += a;
        break;
      case 3:
        d(), s = 0, a !== "*" && a !== "?" && a !== "+" && u--, h = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return s === 2 && t(`Unfinished custom RegExp for param "${f}"`), d(), l(), o;
}
function I5(e, t, s) {
  const n = P5(M5(e.path), s), o = le(n, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function V5(e, t) {
  const s = [], n = /* @__PURE__ */ new Map();
  t = Bo({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(h) {
    return n.get(h);
  }
  function r(h, d, _) {
    const y = !_, v = B5(h);
    v.aliasOf = _ && _.record;
    const b = Bo(t, h), S = [
      v
    ];
    if ("alias" in h) {
      const V = typeof h.alias == "string" ? [h.alias] : h.alias;
      for (const M of V)
        S.push(le({}, v, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: _ ? _.record.components : v.components,
          path: M,
          // we might be the child of an alias
          aliasOf: _ ? _.record : v
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let $, k;
    for (const V of S) {
      const { path: M } = V;
      if (d && M[0] !== "/") {
        const B = d.record.path, q = B[B.length - 1] === "/" ? "" : "/";
        V.path = d.record.path + (M && q + M);
      }
      if ($ = I5(V, d, b), _ ? _.alias.push($) : (k = k || $, k !== $ && k.alias.push($), y && h.name && !Vo($) && l(h.name)), v.children) {
        const B = v.children;
        for (let q = 0; q < B.length; q++)
          r(B[q], $, _ && _.children[q]);
      }
      _ = _ || $, ($.record.components && Object.keys($.record.components).length || $.record.name || $.record.redirect) && a($);
    }
    return k ? () => {
      l(k);
    } : vs;
  }
  function l(h) {
    if (ol(h)) {
      const d = n.get(h);
      d && (n.delete(h), s.splice(s.indexOf(d), 1), d.children.forEach(l), d.alias.forEach(l));
    } else {
      const d = s.indexOf(h);
      d > -1 && (s.splice(d, 1), h.record.name && n.delete(h.record.name), h.children.forEach(l), h.alias.forEach(l));
    }
  }
  function u() {
    return s;
  }
  function a(h) {
    let d = 0;
    for (; d < s.length && D5(h, s[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (h.record.path !== s[d].record.path || !ll(h, s[d])); )
      d++;
    s.splice(d, 0, h), h.record.name && !Vo(h) && n.set(h.record.name, h);
  }
  function f(h, d) {
    let _, y = {}, v, b;
    if ("name" in h && h.name) {
      if (_ = n.get(h.name), !_)
        throw Qt(1, {
          location: h
        });
      b = _.record.name, y = le(
        // paramsFromLocation is a new object
        Io(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          _.keys.filter((k) => !k.optional).map((k) => k.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        h.params && Io(h.params, _.keys.map((k) => k.name))
      ), v = _.stringify(y);
    } else if ("path" in h)
      v = h.path, _ = s.find((k) => k.re.test(v)), _ && (y = _.parse(v), b = _.record.name);
    else {
      if (_ = d.name ? n.get(d.name) : s.find((k) => k.re.test(d.path)), !_)
        throw Qt(1, {
          location: h,
          currentLocation: d
        });
      b = _.record.name, y = le({}, d.params, h.params), v = _.stringify(y);
    }
    const S = [];
    let $ = _;
    for (; $; )
      S.unshift($.record), $ = $.parent;
    return {
      name: b,
      path: v,
      params: y,
      matched: S,
      meta: Z5(S)
    };
  }
  return e.forEach((h) => r(h)), { addRoute: r, resolve: f, removeRoute: l, getRoutes: u, getRecordMatcher: o };
}
function Io(e, t) {
  const s = {};
  for (const n of t)
    n in e && (s[n] = e[n]);
  return s;
}
function B5(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: j5(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function j5(e) {
  const t = {}, s = e.props || !1;
  if ("component" in e)
    t.default = s;
  else
    for (const n in e.components)
      t[n] = typeof s == "object" ? s[n] : s;
  return t;
}
function Vo(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Z5(e) {
  return e.reduce((t, s) => le(t, s.meta), {});
}
function Bo(e, t) {
  const s = {};
  for (const n in e)
    s[n] = n in t ? t[n] : e[n];
  return s;
}
function ll(e, t) {
  return t.children.some((s) => s === e || ll(e, s));
}
const cl = /#/g, F5 = /&/g, z5 = /\//g, W5 = /=/g, H5 = /\?/g, al = /\+/g, U5 = /%5B/g, q5 = /%5D/g, ul = /%5E/g, K5 = /%60/g, hl = /%7B/g, Y5 = /%7C/g, dl = /%7D/g, G5 = /%20/g;
function yi(e) {
  return encodeURI("" + e).replace(Y5, "|").replace(U5, "[").replace(q5, "]");
}
function X5(e) {
  return yi(e).replace(hl, "{").replace(dl, "}").replace(ul, "^");
}
function Kn(e) {
  return yi(e).replace(al, "%2B").replace(G5, "+").replace(cl, "%23").replace(F5, "%26").replace(K5, "`").replace(hl, "{").replace(dl, "}").replace(ul, "^");
}
function J5(e) {
  return Kn(e).replace(W5, "%3D");
}
function Q5(e) {
  return yi(e).replace(cl, "%23").replace(H5, "%3F");
}
function ef(e) {
  return e == null ? "" : Q5(e).replace(z5, "%2F");
}
function Ks(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
function tf(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < n.length; ++o) {
    const r = n[o].replace(al, " "), l = r.indexOf("="), u = Ks(l < 0 ? r : r.slice(0, l)), a = l < 0 ? null : Ks(r.slice(l + 1));
    if (u in t) {
      let f = t[u];
      qe(f) || (f = t[u] = [f]), f.push(a);
    } else
      t[u] = a;
  }
  return t;
}
function jo(e) {
  let t = "";
  for (let s in e) {
    const n = e[s];
    if (s = J5(s), n == null) {
      n !== void 0 && (t += (t.length ? "&" : "") + s);
      continue;
    }
    (qe(n) ? n.map((r) => r && Kn(r)) : [n && Kn(n)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + s, r != null && (t += "=" + r));
    });
  }
  return t;
}
function sf(e) {
  const t = {};
  for (const s in e) {
    const n = e[s];
    n !== void 0 && (t[s] = qe(n) ? n.map((o) => o == null ? null : "" + o) : n == null ? n : "" + n);
  }
  return t;
}
const nf = Symbol(""), Zo = Symbol(""), bi = Symbol(""), pl = Symbol(""), Yn = Symbol("");
function us() {
  let e = [];
  function t(n) {
    return e.push(n), () => {
      const o = e.indexOf(n);
      o > -1 && e.splice(o, 1);
    };
  }
  function s() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: s
  };
}
function ht(e, t, s, n, o) {
  const r = n && // name is defined if record is because of the function overload
  (n.enterCallbacks[o] = n.enterCallbacks[o] || []);
  return () => new Promise((l, u) => {
    const a = (d) => {
      d === !1 ? u(Qt(4, {
        from: s,
        to: t
      })) : d instanceof Error ? u(d) : O5(d) ? u(Qt(2, {
        from: t,
        to: d
      })) : (r && // since enterCallbackArray is truthy, both record and name also are
      n.enterCallbacks[o] === r && typeof d == "function" && r.push(d), l());
    }, f = e.call(n && n.instances[o], t, s, a);
    let h = Promise.resolve(f);
    e.length < 3 && (h = h.then(a)), h.catch((d) => u(d));
  });
}
function $n(e, t, s, n) {
  const o = [];
  for (const r of e)
    for (const l in r.components) {
      let u = r.components[l];
      if (!(t !== "beforeRouteEnter" && !r.instances[l]))
        if (of(u)) {
          const f = (u.__vccOpts || u)[t];
          f && o.push(ht(f, s, n, r, l));
        } else {
          let a = u();
          o.push(() => a.then((f) => {
            if (!f)
              return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${r.path}"`));
            const h = u5(f) ? f.default : f;
            r.components[l] = h;
            const _ = (h.__vccOpts || h)[t];
            return _ && ht(_, s, n, r, l)();
          }));
        }
    }
  return o;
}
function of(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Fo(e) {
  const t = Ut(bi), s = Ut(pl), n = Ue(() => t.resolve(fs(e.to))), o = Ue(() => {
    const { matched: a } = n.value, { length: f } = a, h = a[f - 1], d = s.matched;
    if (!h || !d.length)
      return -1;
    const _ = d.findIndex(Jt.bind(null, h));
    if (_ > -1)
      return _;
    const y = zo(a[f - 2]);
    return (
      // we are dealing with nested routes
      f > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      zo(h) === y && // avoid comparing the child with its parent
      d[d.length - 1].path !== y ? d.findIndex(Jt.bind(null, a[f - 2])) : _
    );
  }), r = Ue(() => o.value > -1 && af(s.params, n.value.params)), l = Ue(() => o.value > -1 && o.value === s.matched.length - 1 && nl(s.params, n.value.params));
  function u(a = {}) {
    return cf(a) ? t[fs(e.replace) ? "replace" : "push"](
      fs(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(vs) : Promise.resolve();
  }
  return {
    route: n,
    href: Ue(() => n.value.href),
    isActive: r,
    isExactActive: l,
    navigate: u
  };
}
const rf = /* @__PURE__ */ yr({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: Fo,
  setup(e, { slots: t }) {
    const s = gr(Fo(e)), { options: n } = Ut(bi), o = Ue(() => ({
      [Wo(e.activeClass, n.linkActiveClass, "router-link-active")]: s.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Wo(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
    }));
    return () => {
      const r = t.default && t.default(s);
      return e.custom ? r : br("a", {
        "aria-current": s.isExactActive ? e.ariaCurrentValue : null,
        href: s.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: s.navigate,
        class: o.value
      }, r);
    };
  }
}), lf = rf;
function cf(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function af(e, t) {
  for (const s in t) {
    const n = t[s], o = e[s];
    if (typeof n == "string") {
      if (n !== o)
        return !1;
    } else if (!qe(o) || o.length !== n.length || n.some((r, l) => r !== o[l]))
      return !1;
  }
  return !0;
}
function zo(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Wo = (e, t, s) => e ?? t ?? s, uf = /* @__PURE__ */ yr({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: s }) {
    const n = Ut(Yn), o = Ue(() => e.route || n.value), r = Ut(Zo, 0), l = Ue(() => {
      let f = fs(r);
      const { matched: h } = o.value;
      let d;
      for (; (d = h[f]) && !d.components; )
        f++;
      return f;
    }), u = Ue(() => o.value.matched[l.value]);
    An(Zo, Ue(() => l.value + 1)), An(nf, u), An(Yn, o);
    const a = ii();
    return mr(() => [a.value, u.value, e.name], ([f, h, d], [_, y, v]) => {
      h && (h.instances[d] = f, y && y !== h && f && f === _ && (h.leaveGuards.size || (h.leaveGuards = y.leaveGuards), h.updateGuards.size || (h.updateGuards = y.updateGuards))), f && h && // if there is no instance but to and from are the same this might be
      // the first visit
      (!y || !Jt(h, y) || !_) && (h.enterCallbacks[d] || []).forEach((b) => b(f));
    }, { flush: "post" }), () => {
      const f = o.value, h = e.name, d = u.value, _ = d && d.components[h];
      if (!_)
        return Ho(s.default, { Component: _, route: f });
      const y = d.props[h], v = y ? y === !0 ? f.params : typeof y == "function" ? y(f) : y : null, S = br(_, le({}, v, t, {
        onVnodeUnmounted: ($) => {
          $.component.isUnmounted && (d.instances[h] = null);
        },
        ref: a
      }));
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Ho(s.default, { Component: S, route: f }) || S
      );
    };
  }
});
function Ho(e, t) {
  if (!e)
    return null;
  const s = e(t);
  return s.length === 1 ? s[0] : s;
}
const hf = uf;
function df(e) {
  const t = V5(e.routes, e), s = e.parseQuery || tf, n = e.stringifyQuery || jo, o = e.history, r = us(), l = us(), u = us(), a = ka(lt);
  let f = lt;
  Ht && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const h = Tn.bind(null, (A) => "" + A), d = Tn.bind(null, ef), _ = (
    // @ts-expect-error: intentionally avoid the type check
    Tn.bind(null, Ks)
  );
  function y(A, L) {
    let N, j;
    return ol(A) ? (N = t.getRecordMatcher(A), j = L) : j = A, t.addRoute(j, N);
  }
  function v(A) {
    const L = t.getRecordMatcher(A);
    L && t.removeRoute(L);
  }
  function b() {
    return t.getRoutes().map((A) => A.record);
  }
  function S(A) {
    return !!t.getRecordMatcher(A);
  }
  function $(A, L) {
    if (L = le({}, L || a.value), typeof A == "string") {
      const U = Cn(s, A, L.path), te = t.resolve({ path: U.path }, L), Ae = o.createHref(U.fullPath);
      return le(U, te, {
        params: _(te.params),
        hash: Ks(U.hash),
        redirectedFrom: void 0,
        href: Ae
      });
    }
    let N;
    if ("path" in A)
      N = le({}, A, {
        path: Cn(s, A.path, L.path).path
      });
    else {
      const U = le({}, A.params);
      for (const te in U)
        U[te] == null && delete U[te];
      N = le({}, A, {
        params: d(U)
      }), L.params = d(L.params);
    }
    const j = t.resolve(N, L), w = A.hash || "";
    j.params = h(_(j.params));
    const re = p5(n, le({}, A, {
      hash: X5(w),
      path: j.path
    })), K = o.createHref(re);
    return le({
      fullPath: re,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: w,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        n === jo ? sf(A.query) : A.query || {}
      )
    }, j, {
      redirectedFrom: void 0,
      href: K
    });
  }
  function k(A) {
    return typeof A == "string" ? Cn(s, A, a.value.path) : le({}, A);
  }
  function V(A, L) {
    if (f !== A)
      return Qt(8, {
        from: L,
        to: A
      });
  }
  function M(A) {
    return H(A);
  }
  function B(A) {
    return M(le(k(A), { replace: !0 }));
  }
  function q(A) {
    const L = A.matched[A.matched.length - 1];
    if (L && L.redirect) {
      const { redirect: N } = L;
      let j = typeof N == "function" ? N(A) : N;
      return typeof j == "string" && (j = j.includes("?") || j.includes("#") ? j = k(j) : (
        // force empty params
        { path: j }
      ), j.params = {}), le({
        query: A.query,
        hash: A.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in j ? {} : A.params
      }, j);
    }
  }
  function H(A, L) {
    const N = f = $(A), j = a.value, w = A.state, re = A.force, K = A.replace === !0, U = q(N);
    if (U)
      return H(
        le(k(U), {
          state: typeof U == "object" ? le({}, w, U.state) : w,
          force: re,
          replace: K
        }),
        // keep original redirectedFrom if it exists
        L || N
      );
    const te = N;
    te.redirectedFrom = L;
    let Ae;
    return !re && f5(n, j, N) && (Ae = Qt(16, { to: te, from: j }), fe(
      j,
      j,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Ae ? Promise.resolve(Ae) : F(te, j)).catch((ve) => st(ve) ? (
      // navigation redirects still mark the router as ready
      st(
        ve,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ve : ae(ve)
    ) : (
      // reject any unknown error
      _e(ve, te, j)
    )).then((ve) => {
      if (ve) {
        if (st(
          ve,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return H(
            // keep options
            le({
              // preserve an existing replacement but allow the redirect to override it
              replace: K
            }, k(ve.to), {
              state: typeof ve.to == "object" ? le({}, w, ve.to.state) : w,
              force: re
            }),
            // preserve the original redirectedFrom if any
            L || te
          );
      } else
        ve = oe(te, j, !0, K, w);
      return W(te, j, ve), ve;
    });
  }
  function z(A, L) {
    const N = V(A, L);
    return N ? Promise.reject(N) : Promise.resolve();
  }
  function R(A) {
    const L = be.values().next().value;
    return L && typeof L.runWithContext == "function" ? L.runWithContext(A) : A();
  }
  function F(A, L) {
    let N;
    const [j, w, re] = pf(A, L);
    N = $n(j.reverse(), "beforeRouteLeave", A, L);
    for (const U of j)
      U.leaveGuards.forEach((te) => {
        N.push(ht(te, A, L));
      });
    const K = z.bind(null, A, L);
    return N.push(K), we(N).then(() => {
      N = [];
      for (const U of r.list())
        N.push(ht(U, A, L));
      return N.push(K), we(N);
    }).then(() => {
      N = $n(w, "beforeRouteUpdate", A, L);
      for (const U of w)
        U.updateGuards.forEach((te) => {
          N.push(ht(te, A, L));
        });
      return N.push(K), we(N);
    }).then(() => {
      N = [];
      for (const U of re)
        if (U.beforeEnter)
          if (qe(U.beforeEnter))
            for (const te of U.beforeEnter)
              N.push(ht(te, A, L));
          else
            N.push(ht(U.beforeEnter, A, L));
      return N.push(K), we(N);
    }).then(() => (A.matched.forEach((U) => U.enterCallbacks = {}), N = $n(re, "beforeRouteEnter", A, L), N.push(K), we(N))).then(() => {
      N = [];
      for (const U of l.list())
        N.push(ht(U, A, L));
      return N.push(K), we(N);
    }).catch((U) => st(
      U,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? U : Promise.reject(U));
  }
  function W(A, L, N) {
    u.list().forEach((j) => R(() => j(A, L, N)));
  }
  function oe(A, L, N, j, w) {
    const re = V(A, L);
    if (re)
      return re;
    const K = L === lt, U = Ht ? history.state : {};
    N && (j || K ? o.replace(A.fullPath, le({
      scroll: K && U && U.scroll
    }, w)) : o.push(A.fullPath, w)), a.value = A, fe(A, L, N, K), ae();
  }
  let se;
  function ye() {
    se || (se = o.listen((A, L, N) => {
      if (!Se.listening)
        return;
      const j = $(A), w = q(j);
      if (w) {
        H(le(w, { replace: !0 }), j).catch(vs);
        return;
      }
      f = j;
      const re = a.value;
      Ht && E5(Lo(re.fullPath, N.delta), nn()), F(j, re).catch((K) => st(
        K,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? K : st(
        K,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (H(
        K.to,
        j
        // avoid an uncaught rejection, let push call triggerError
      ).then((U) => {
        st(
          U,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !N.delta && N.type === Es.pop && o.go(-1, !1);
      }).catch(vs), Promise.reject()) : (N.delta && o.go(-N.delta, !1), _e(K, j, re))).then((K) => {
        K = K || oe(
          // after navigation, all matched components are resolved
          j,
          re,
          !1
        ), K && (N.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !st(
          K,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-N.delta, !1) : N.type === Es.pop && st(
          K,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), W(j, re, K);
      }).catch(vs);
    }));
  }
  let de = us(), J = us(), pe;
  function _e(A, L, N) {
    ae(A);
    const j = J.list();
    return j.length ? j.forEach((w) => w(A, L, N)) : console.error(A), Promise.reject(A);
  }
  function ge() {
    return pe && a.value !== lt ? Promise.resolve() : new Promise((A, L) => {
      de.add([A, L]);
    });
  }
  function ae(A) {
    return pe || (pe = !A, ye(), de.list().forEach(([L, N]) => A ? N(A) : L()), de.reset()), A;
  }
  function fe(A, L, N, j) {
    const { scrollBehavior: w } = e;
    if (!Ht || !w)
      return Promise.resolve();
    const re = !N && S5(Lo(A.fullPath, 0)) || (j || !N) && history.state && history.state.scroll || null;
    return vr().then(() => w(A, L, re)).then((K) => K && w5(K)).catch((K) => _e(K, A, L));
  }
  const Ce = (A) => o.go(A);
  let Le;
  const be = /* @__PURE__ */ new Set(), Se = {
    currentRoute: a,
    listening: !0,
    addRoute: y,
    removeRoute: v,
    hasRoute: S,
    getRoutes: b,
    resolve: $,
    options: e,
    push: M,
    replace: B,
    go: Ce,
    back: () => Ce(-1),
    forward: () => Ce(1),
    beforeEach: r.add,
    beforeResolve: l.add,
    afterEach: u.add,
    onError: J.add,
    isReady: ge,
    install(A) {
      const L = this;
      A.component("RouterLink", lf), A.component("RouterView", hf), A.config.globalProperties.$router = L, Object.defineProperty(A.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => fs(a)
      }), Ht && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Le && a.value === lt && (Le = !0, M(o.location).catch((w) => {
      }));
      const N = {};
      for (const w in lt)
        Object.defineProperty(N, w, {
          get: () => a.value[w],
          enumerable: !0
        });
      A.provide(bi, L), A.provide(pl, xa(N)), A.provide(Yn, a);
      const j = A.unmount;
      be.add(A), A.unmount = function() {
        be.delete(A), be.size < 1 && (f = lt, se && se(), se = null, a.value = lt, Le = !1, pe = !1), j();
      };
    }
  };
  function we(A) {
    return A.reduce((L, N) => L.then(() => R(N)), Promise.resolve());
  }
  return Se;
}
function pf(e, t) {
  const s = [], n = [], o = [], r = Math.max(t.matched.length, e.matched.length);
  for (let l = 0; l < r; l++) {
    const u = t.matched[l];
    u && (e.matched.find((f) => Jt(f, u)) ? n.push(u) : s.push(u));
    const a = e.matched[l];
    a && (t.matched.find((f) => Jt(f, a)) || o.push(a));
  }
  return [s, n, o];
}
const ff = {
  setup() {
    return { myStore: me() };
  },
  methods: {
    close() {
      this.$emit("response", !1);
    },
    redirect(e) {
      try {
        this.$emit("response", !1), this.$router.push(e);
      } catch (t) {
        console.log(t);
      }
    }
  }
}, mf = { class: "navbar-ls" }, gf = /* @__PURE__ */ p("div", { class: "navbar-backdrops" }, null, -1), _f = { class: "navbar-panel" }, vf = { class: "navbar-header" }, yf = /* @__PURE__ */ p("i", { class: "bi bi-x-lg" }, null, -1), bf = [
  yf
], wf = { class: "navbar-links" };
function Ef(e, t, s, n, o, r) {
  return E(), C("div", mf, [
    gf,
    p("div", _f, [
      p("div", vf, [
        p("button", {
          class: ie(`btn ${n.myStore.mobileMode ? "btn-sm" : "btn-lg"} btn-light`),
          onClick: t[0] || (t[0] = (...l) => r.close && r.close(...l))
        }, bf, 2)
      ]),
      p("div", wf, [
        p("div", {
          class: "navbar-link",
          onClick: t[1] || (t[1] = (l) => r.redirect("/"))
        }, " Proje "),
        p("div", {
          class: "navbar-link",
          onClick: t[2] || (t[2] = (l) => r.redirect("/location"))
        }, " Konum "),
        p("div", {
          class: "navbar-link",
          onClick: t[3] || (t[3] = (l) => r.redirect("/gallery"))
        }, " Galeri "),
        p("div", {
          class: "navbar-link",
          onClick: t[4] || (t[4] = (l) => r.redirect("/compare"))
        }, " Kıyaslama ")
      ])
    ])
  ]);
}
const Sf = /* @__PURE__ */ ee(ff, [["render", Ef]]), Af = {
  setup() {
    return { myStore: me() };
  },
  data() {
    return {
      hamburgerMenu: !1
    };
  },
  components: { NavBar: Sf },
  methods: {
    hamburgerMenuToggle() {
      this.hamburgerMenu = !this.hamburgerMenu;
    }
  }
}, Tf = { class: "navbar-ls-panel" }, Cf = /* @__PURE__ */ p("i", { class: "bi bi-list" }, null, -1), $f = [
  Cf
];
function Of(e, t, s, n, o, r) {
  const l = X("NavBar"), u = X("router-view");
  return E(), C(ce, null, [
    p("div", Tf, [
      p("button", {
        class: ie(`btn ${n.myStore.mobileMode ? "btn-sm" : "btn-lg"} btn-light`),
        onClick: t[0] || (t[0] = (...a) => r.hamburgerMenuToggle && r.hamburgerMenuToggle(...a))
      }, $f, 2)
    ]),
    o.hamburgerMenu ? (E(), ke(l, {
      key: 0,
      onResponse: t[1] || (t[1] = (a) => r.hamburgerMenuToggle())
    })) : D("", !0),
    he(u)
  ], 64);
}
const kf = /* @__PURE__ */ ee(Af, [["render", Of]]), xf = df({
  history: $5(),
  routes: [
    {
      path: "/",
      name: "Public",
      component: kf,
      children: [
        {
          path: "/",
          name: "Home",
          component: () => Promise.resolve().then(() => ko)
        },
        {
          path: "/main-view",
          name: "HomePage",
          component: () => Promise.resolve().then(() => ko)
        },
        {
          path: "/location",
          name: "LocationPage",
          component: () => import("./LocationView-9zrtAApU.js")
        },
        {
          path: "/compare",
          name: "ComparePage",
          component: () => import("./CompareView-6nym0uqj.js")
        },
        {
          path: "/gallery",
          name: "GalleryPage",
          component: () => import("./GalleryView-Q6uKY9sP.js")
        }
      ]
    }
  ]
});
function fl(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Pf } = Object.prototype, { getPrototypeOf: wi } = Object, on = /* @__PURE__ */ ((e) => (t) => {
  const s = Pf.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Qe = (e) => (e = e.toLowerCase(), (t) => on(t) === e), rn = (e) => (t) => typeof t === e, { isArray: ns } = Array, Ss = rn("undefined");
function Lf(e) {
  return e !== null && !Ss(e) && e.constructor !== null && !Ss(e.constructor) && Fe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ml = Qe("ArrayBuffer");
function Df(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ml(e.buffer), t;
}
const Nf = rn("string"), Fe = rn("function"), gl = rn("number"), ln = (e) => e !== null && typeof e == "object", Rf = (e) => e === !0 || e === !1, zs = (e) => {
  if (on(e) !== "object")
    return !1;
  const t = wi(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Mf = Qe("Date"), If = Qe("File"), Vf = Qe("Blob"), Bf = Qe("FileList"), jf = (e) => ln(e) && Fe(e.pipe), Zf = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Fe(e.append) && ((t = on(e)) === "formdata" || // detect form-data instance
  t === "object" && Fe(e.toString) && e.toString() === "[object FormData]"));
}, Ff = Qe("URLSearchParams"), zf = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ts(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), ns(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const r = s ? Object.getOwnPropertyNames(e) : Object.keys(e), l = r.length;
    let u;
    for (n = 0; n < l; n++)
      u = r[n], t.call(null, e[u], u, e);
  }
}
function _l(e, t) {
  t = t.toLowerCase();
  const s = Object.keys(e);
  let n = s.length, o;
  for (; n-- > 0; )
    if (o = s[n], t === o.toLowerCase())
      return o;
  return null;
}
const vl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, yl = (e) => !Ss(e) && e !== vl;
function Gn() {
  const { caseless: e } = yl(this) && this || {}, t = {}, s = (n, o) => {
    const r = e && _l(t, o) || o;
    zs(t[r]) && zs(n) ? t[r] = Gn(t[r], n) : zs(n) ? t[r] = Gn({}, n) : ns(n) ? t[r] = n.slice() : t[r] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Ts(arguments[n], s);
  return t;
}
const Wf = (e, t, s, { allOwnKeys: n } = {}) => (Ts(t, (o, r) => {
  s && Fe(o) ? e[r] = fl(o, s) : e[r] = o;
}, { allOwnKeys: n }), e), Hf = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Uf = (e, t, s, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, qf = (e, t, s, n) => {
  let o, r, l;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), r = o.length; r-- > 0; )
      l = o[r], (!n || n(l, e, t)) && !u[l] && (t[l] = e[l], u[l] = !0);
    e = s !== !1 && wi(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, Kf = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const n = e.indexOf(t, s);
  return n !== -1 && n === s;
}, Yf = (e) => {
  if (!e)
    return null;
  if (ns(e))
    return e;
  let t = e.length;
  if (!gl(t))
    return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, Gf = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && wi(Uint8Array)), Xf = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const r = o.value;
    t.call(e, r[0], r[1]);
  }
}, Jf = (e, t) => {
  let s;
  const n = [];
  for (; (s = e.exec(t)) !== null; )
    n.push(s);
  return n;
}, Qf = Qe("HTMLFormElement"), e6 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, n, o) {
    return n.toUpperCase() + o;
  }
), Uo = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), t6 = Qe("RegExp"), bl = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), n = {};
  Ts(s, (o, r) => {
    let l;
    (l = t(o, r, e)) !== !1 && (n[r] = l || o);
  }), Object.defineProperties(e, n);
}, s6 = (e) => {
  bl(e, (t, s) => {
    if (Fe(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const n = e[s];
    if (Fe(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, n6 = (e, t) => {
  const s = {}, n = (o) => {
    o.forEach((r) => {
      s[r] = !0;
    });
  };
  return ns(e) ? n(e) : n(String(e).split(t)), s;
}, i6 = () => {
}, o6 = (e, t) => (e = +e, Number.isFinite(e) ? e : t), On = "abcdefghijklmnopqrstuvwxyz", qo = "0123456789", wl = {
  DIGIT: qo,
  ALPHA: On,
  ALPHA_DIGIT: On + On.toUpperCase() + qo
}, r6 = (e = 16, t = wl.ALPHA_DIGIT) => {
  let s = "";
  const { length: n } = t;
  for (; e--; )
    s += t[Math.random() * n | 0];
  return s;
};
function l6(e) {
  return !!(e && Fe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const c6 = (e) => {
  const t = new Array(10), s = (n, o) => {
    if (ln(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const r = ns(n) ? [] : {};
        return Ts(n, (l, u) => {
          const a = s(l, o + 1);
          !Ss(a) && (r[u] = a);
        }), t[o] = void 0, r;
      }
    }
    return n;
  };
  return s(e, 0);
}, a6 = Qe("AsyncFunction"), u6 = (e) => e && (ln(e) || Fe(e)) && Fe(e.then) && Fe(e.catch), O = {
  isArray: ns,
  isArrayBuffer: ml,
  isBuffer: Lf,
  isFormData: Zf,
  isArrayBufferView: Df,
  isString: Nf,
  isNumber: gl,
  isBoolean: Rf,
  isObject: ln,
  isPlainObject: zs,
  isUndefined: Ss,
  isDate: Mf,
  isFile: If,
  isBlob: Vf,
  isRegExp: t6,
  isFunction: Fe,
  isStream: jf,
  isURLSearchParams: Ff,
  isTypedArray: Gf,
  isFileList: Bf,
  forEach: Ts,
  merge: Gn,
  extend: Wf,
  trim: zf,
  stripBOM: Hf,
  inherits: Uf,
  toFlatObject: qf,
  kindOf: on,
  kindOfTest: Qe,
  endsWith: Kf,
  toArray: Yf,
  forEachEntry: Xf,
  matchAll: Jf,
  isHTMLForm: Qf,
  hasOwnProperty: Uo,
  hasOwnProp: Uo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: bl,
  freezeMethods: s6,
  toObjectSet: n6,
  toCamelCase: e6,
  noop: i6,
  toFiniteNumber: o6,
  findKey: _l,
  global: vl,
  isContextDefined: yl,
  ALPHABET: wl,
  generateString: r6,
  isSpecCompliantForm: l6,
  toJSONObject: c6,
  isAsyncFn: a6,
  isThenable: u6
};
function ne(e, t, s, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), s && (this.config = s), n && (this.request = n), o && (this.response = o);
}
O.inherits(ne, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: O.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const El = ne.prototype, Sl = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Sl[e] = { value: e };
});
Object.defineProperties(ne, Sl);
Object.defineProperty(El, "isAxiosError", { value: !0 });
ne.from = (e, t, s, n, o, r) => {
  const l = Object.create(El);
  return O.toFlatObject(e, l, function(a) {
    return a !== Error.prototype;
  }, (u) => u !== "isAxiosError"), ne.call(l, e.message, t, s, n, o), l.cause = e, l.name = e.name, r && Object.assign(l, r), l;
};
const h6 = null;
function Xn(e) {
  return O.isPlainObject(e) || O.isArray(e);
}
function Al(e) {
  return O.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ko(e, t, s) {
  return e ? e.concat(t).map(function(o, r) {
    return o = Al(o), !s && r ? "[" + o + "]" : o;
  }).join(s ? "." : "") : t;
}
function d6(e) {
  return O.isArray(e) && !e.some(Xn);
}
const p6 = O.toFlatObject(O, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function cn(e, t, s) {
  if (!O.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), s = O.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, S) {
    return !O.isUndefined(S[b]);
  });
  const n = s.metaTokens, o = s.visitor || h, r = s.dots, l = s.indexes, a = (s.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(t);
  if (!O.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(v) {
    if (v === null)
      return "";
    if (O.isDate(v))
      return v.toISOString();
    if (!a && O.isBlob(v))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(v) || O.isTypedArray(v) ? a && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function h(v, b, S) {
    let $ = v;
    if (v && !S && typeof v == "object") {
      if (O.endsWith(b, "{}"))
        b = n ? b : b.slice(0, -2), v = JSON.stringify(v);
      else if (O.isArray(v) && d6(v) || (O.isFileList(v) || O.endsWith(b, "[]")) && ($ = O.toArray(v)))
        return b = Al(b), $.forEach(function(V, M) {
          !(O.isUndefined(V) || V === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? Ko([b], M, r) : l === null ? b : b + "[]",
            f(V)
          );
        }), !1;
    }
    return Xn(v) ? !0 : (t.append(Ko(S, b, r), f(v)), !1);
  }
  const d = [], _ = Object.assign(p6, {
    defaultVisitor: h,
    convertValue: f,
    isVisitable: Xn
  });
  function y(v, b) {
    if (!O.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      d.push(v), O.forEach(v, function($, k) {
        (!(O.isUndefined($) || $ === null) && o.call(
          t,
          $,
          O.isString(k) ? k.trim() : k,
          b,
          _
        )) === !0 && y($, b ? b.concat(k) : [k]);
      }), d.pop();
    }
  }
  if (!O.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Yo(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ei(e, t) {
  this._pairs = [], e && cn(e, this, t);
}
const Tl = Ei.prototype;
Tl.append = function(t, s) {
  this._pairs.push([t, s]);
};
Tl.toString = function(t) {
  const s = t ? function(n) {
    return t.call(this, n, Yo);
  } : Yo;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function f6(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cl(e, t, s) {
  if (!t)
    return e;
  const n = s && s.encode || f6, o = s && s.serialize;
  let r;
  if (o ? r = o(t, s) : r = O.isURLSearchParams(t) ? t.toString() : new Ei(t, s).toString(n), r) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
class m6 {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, s, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: s,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    O.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Go = m6, $l = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, g6 = typeof URLSearchParams < "u" ? URLSearchParams : Ei, _6 = typeof FormData < "u" ? FormData : null, v6 = typeof Blob < "u" ? Blob : null, y6 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: g6,
    FormData: _6,
    Blob: v6
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ol = typeof window < "u" && typeof document < "u", b6 = ((e) => Ol && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), w6 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", E6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ol,
  hasStandardBrowserEnv: b6,
  hasStandardBrowserWebWorkerEnv: w6
}, Symbol.toStringTag, { value: "Module" })), Ye = {
  ...E6,
  ...y6
};
function S6(e, t) {
  return cn(e, new Ye.classes.URLSearchParams(), Object.assign({
    visitor: function(s, n, o, r) {
      return Ye.isNode && O.isBuffer(s) ? (this.append(n, s.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function A6(e) {
  return O.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function T6(e) {
  const t = {}, s = Object.keys(e);
  let n;
  const o = s.length;
  let r;
  for (n = 0; n < o; n++)
    r = s[n], t[r] = e[r];
  return t;
}
function kl(e) {
  function t(s, n, o, r) {
    let l = s[r++];
    const u = Number.isFinite(+l), a = r >= s.length;
    return l = !l && O.isArray(o) ? o.length : l, a ? (O.hasOwnProp(o, l) ? o[l] = [o[l], n] : o[l] = n, !u) : ((!o[l] || !O.isObject(o[l])) && (o[l] = []), t(s, n, o[l], r) && O.isArray(o[l]) && (o[l] = T6(o[l])), !u);
  }
  if (O.isFormData(e) && O.isFunction(e.entries)) {
    const s = {};
    return O.forEachEntry(e, (n, o) => {
      t(A6(n), o, s, 0);
    }), s;
  }
  return null;
}
function C6(e, t, s) {
  if (O.isString(e))
    try {
      return (t || JSON.parse)(e), O.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (s || JSON.stringify)(e);
}
const Si = {
  transitional: $l,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, s) {
    const n = s.getContentType() || "", o = n.indexOf("application/json") > -1, r = O.isObject(t);
    if (r && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t))
      return o && o ? JSON.stringify(kl(t)) : t;
    if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t))
      return t;
    if (O.isArrayBufferView(t))
      return t.buffer;
    if (O.isURLSearchParams(t))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (r) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return S6(t, this.formSerializer).toString();
      if ((u = O.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return cn(
          u ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return r || o ? (s.setContentType("application/json", !1), C6(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || Si.transitional, n = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (t && O.isString(t) && (n && !this.responseType || o)) {
      const l = !(s && s.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (l)
          throw u.name === "SyntaxError" ? ne.from(u, ne.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ye.classes.FormData,
    Blob: Ye.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
O.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Si.headers[e] = {};
});
const Ai = Si, $6 = O.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), O6 = (e) => {
  const t = {};
  let s, n, o;
  return e && e.split(`
`).forEach(function(l) {
    o = l.indexOf(":"), s = l.substring(0, o).trim().toLowerCase(), n = l.substring(o + 1).trim(), !(!s || t[s] && $6[s]) && (s === "set-cookie" ? t[s] ? t[s].push(n) : t[s] = [n] : t[s] = t[s] ? t[s] + ", " + n : n);
  }), t;
}, Xo = Symbol("internals");
function hs(e) {
  return e && String(e).trim().toLowerCase();
}
function Ws(e) {
  return e === !1 || e == null ? e : O.isArray(e) ? e.map(Ws) : String(e);
}
function k6(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = s.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const x6 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function kn(e, t, s, n, o) {
  if (O.isFunction(n))
    return n.call(this, t, s);
  if (o && (t = s), !!O.isString(t)) {
    if (O.isString(n))
      return t.indexOf(n) !== -1;
    if (O.isRegExp(n))
      return n.test(t);
  }
}
function P6(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, n) => s.toUpperCase() + n);
}
function L6(e, t) {
  const s = O.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + s, {
      value: function(o, r, l) {
        return this[n].call(this, t, o, r, l);
      },
      configurable: !0
    });
  });
}
class an {
  constructor(t) {
    t && this.set(t);
  }
  set(t, s, n) {
    const o = this;
    function r(u, a, f) {
      const h = hs(a);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const d = O.findKey(o, h);
      (!d || o[d] === void 0 || f === !0 || f === void 0 && o[d] !== !1) && (o[d || a] = Ws(u));
    }
    const l = (u, a) => O.forEach(u, (f, h) => r(f, h, a));
    return O.isPlainObject(t) || t instanceof this.constructor ? l(t, s) : O.isString(t) && (t = t.trim()) && !x6(t) ? l(O6(t), s) : t != null && r(s, t, n), this;
  }
  get(t, s) {
    if (t = hs(t), t) {
      const n = O.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!s)
          return o;
        if (s === !0)
          return k6(o);
        if (O.isFunction(s))
          return s.call(this, o, n);
        if (O.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, s) {
    if (t = hs(t), t) {
      const n = O.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!s || kn(this, this[n], n, s)));
    }
    return !1;
  }
  delete(t, s) {
    const n = this;
    let o = !1;
    function r(l) {
      if (l = hs(l), l) {
        const u = O.findKey(n, l);
        u && (!s || kn(n, n[u], u, s)) && (delete n[u], o = !0);
      }
    }
    return O.isArray(t) ? t.forEach(r) : r(t), o;
  }
  clear(t) {
    const s = Object.keys(this);
    let n = s.length, o = !1;
    for (; n--; ) {
      const r = s[n];
      (!t || kn(this, this[r], r, t, !0)) && (delete this[r], o = !0);
    }
    return o;
  }
  normalize(t) {
    const s = this, n = {};
    return O.forEach(this, (o, r) => {
      const l = O.findKey(n, r);
      if (l) {
        s[l] = Ws(o), delete s[r];
        return;
      }
      const u = t ? P6(r) : String(r).trim();
      u !== r && delete s[r], s[u] = Ws(o), n[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const s = /* @__PURE__ */ Object.create(null);
    return O.forEach(this, (n, o) => {
      n != null && n !== !1 && (s[o] = t && O.isArray(n) ? n.join(", ") : n);
    }), s;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, s]) => t + ": " + s).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...s) {
    const n = new this(t);
    return s.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Xo] = this[Xo] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function r(l) {
      const u = hs(l);
      n[u] || (L6(o, l), n[u] = !0);
    }
    return O.isArray(t) ? t.forEach(r) : r(t), this;
  }
}
an.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(an.prototype, ({ value: e }, t) => {
  let s = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[s] = n;
    }
  };
});
O.freezeMethods(an);
const nt = an;
function xn(e, t) {
  const s = this || Ai, n = t || s, o = nt.from(n.headers);
  let r = n.data;
  return O.forEach(e, function(u) {
    r = u.call(s, r, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), r;
}
function xl(e) {
  return !!(e && e.__CANCEL__);
}
function Cs(e, t, s) {
  ne.call(this, e ?? "canceled", ne.ERR_CANCELED, t, s), this.name = "CanceledError";
}
O.inherits(Cs, ne, {
  __CANCEL__: !0
});
function D6(e, t, s) {
  const n = s.config.validateStatus;
  !s.status || !n || n(s.status) ? e(s) : t(new ne(
    "Request failed with status code " + s.status,
    [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const N6 = Ye.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, s, n, o, r) {
      const l = [e + "=" + encodeURIComponent(t)];
      O.isNumber(s) && l.push("expires=" + new Date(s).toGMTString()), O.isString(n) && l.push("path=" + n), O.isString(o) && l.push("domain=" + o), r === !0 && l.push("secure"), document.cookie = l.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function R6(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function M6(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pl(e, t) {
  return e && !R6(t) ? M6(e, t) : t;
}
const I6 = Ye.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");
    let n;
    function o(r) {
      let l = r;
      return t && (s.setAttribute("href", l), l = s.href), s.setAttribute("href", l), {
        href: s.href,
        protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
        host: s.host,
        search: s.search ? s.search.replace(/^\?/, "") : "",
        hash: s.hash ? s.hash.replace(/^#/, "") : "",
        hostname: s.hostname,
        port: s.port,
        pathname: s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname
      };
    }
    return n = o(window.location.href), function(l) {
      const u = O.isString(l) ? o(l) : l;
      return u.protocol === n.protocol && u.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function V6(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function B6(e, t) {
  e = e || 10;
  const s = new Array(e), n = new Array(e);
  let o = 0, r = 0, l;
  return t = t !== void 0 ? t : 1e3, function(a) {
    const f = Date.now(), h = n[r];
    l || (l = f), s[o] = a, n[o] = f;
    let d = r, _ = 0;
    for (; d !== o; )
      _ += s[d++], d = d % e;
    if (o = (o + 1) % e, o === r && (r = (r + 1) % e), f - l < t)
      return;
    const y = h && f - h;
    return y ? Math.round(_ * 1e3 / y) : void 0;
  };
}
function Jo(e, t) {
  let s = 0;
  const n = B6(50, 250);
  return (o) => {
    const r = o.loaded, l = o.lengthComputable ? o.total : void 0, u = r - s, a = n(u), f = r <= l;
    s = r;
    const h = {
      loaded: r,
      total: l,
      progress: l ? r / l : void 0,
      bytes: u,
      rate: a || void 0,
      estimated: a && l && f ? (l - r) / a : void 0,
      event: o
    };
    h[t ? "download" : "upload"] = !0, e(h);
  };
}
const j6 = typeof XMLHttpRequest < "u", Z6 = j6 && function(e) {
  return new Promise(function(s, n) {
    let o = e.data;
    const r = nt.from(e.headers).normalize();
    let { responseType: l, withXSRFToken: u } = e, a;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    let h;
    if (O.isFormData(o)) {
      if (Ye.hasStandardBrowserEnv || Ye.hasStandardBrowserWebWorkerEnv)
        r.setContentType(!1);
      else if ((h = r.getContentType()) !== !1) {
        const [b, ...S] = h ? h.split(";").map(($) => $.trim()).filter(Boolean) : [];
        r.setContentType([b || "multipart/form-data", ...S].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const b = e.auth.username || "", S = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      r.set("Authorization", "Basic " + btoa(b + ":" + S));
    }
    const _ = Pl(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), Cl(_, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function y() {
      if (!d)
        return;
      const b = nt.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), $ = {
        data: !l || l === "text" || l === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: b,
        config: e,
        request: d
      };
      D6(function(V) {
        s(V), f();
      }, function(V) {
        n(V), f();
      }, $), d = null;
    }
    if ("onloadend" in d ? d.onloadend = y : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, d.onabort = function() {
      d && (n(new ne("Request aborted", ne.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      n(new ne("Network Error", ne.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let S = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const $ = e.transitional || $l;
      e.timeoutErrorMessage && (S = e.timeoutErrorMessage), n(new ne(
        S,
        $.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
        e,
        d
      )), d = null;
    }, Ye.hasStandardBrowserEnv && (u && O.isFunction(u) && (u = u(e)), u || u !== !1 && I6(_))) {
      const b = e.xsrfHeaderName && e.xsrfCookieName && N6.read(e.xsrfCookieName);
      b && r.set(e.xsrfHeaderName, b);
    }
    o === void 0 && r.setContentType(null), "setRequestHeader" in d && O.forEach(r.toJSON(), function(S, $) {
      d.setRequestHeader($, S);
    }), O.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), l && l !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", Jo(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Jo(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (b) => {
      d && (n(!b || b.type ? new Cs(null, e, d) : b), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const v = V6(_);
    if (v && Ye.protocols.indexOf(v) === -1) {
      n(new ne("Unsupported protocol " + v + ":", ne.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(o || null);
  });
}, Jn = {
  http: h6,
  xhr: Z6
};
O.forEach(Jn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qo = (e) => `- ${e}`, F6 = (e) => O.isFunction(e) || e === null || e === !1, Ll = {
  getAdapter: (e) => {
    e = O.isArray(e) ? e : [e];
    const { length: t } = e;
    let s, n;
    const o = {};
    for (let r = 0; r < t; r++) {
      s = e[r];
      let l;
      if (n = s, !F6(s) && (n = Jn[(l = String(s)).toLowerCase()], n === void 0))
        throw new ne(`Unknown adapter '${l}'`);
      if (n)
        break;
      o[l || "#" + r] = n;
    }
    if (!n) {
      const r = Object.entries(o).map(
        ([u, a]) => `adapter ${u} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? r.length > 1 ? `since :
` + r.map(Qo).join(`
`) : " " + Qo(r[0]) : "as no adapter specified";
      throw new ne(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Jn
};
function Pn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Cs(null, e);
}
function er(e) {
  return Pn(e), e.headers = nt.from(e.headers), e.data = xn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ll.getAdapter(e.adapter || Ai.adapter)(e).then(function(n) {
    return Pn(e), n.data = xn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = nt.from(n.headers), n;
  }, function(n) {
    return xl(n) || (Pn(e), n && n.response && (n.response.data = xn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = nt.from(n.response.headers))), Promise.reject(n);
  });
}
const tr = (e) => e instanceof nt ? e.toJSON() : e;
function es(e, t) {
  t = t || {};
  const s = {};
  function n(f, h, d) {
    return O.isPlainObject(f) && O.isPlainObject(h) ? O.merge.call({ caseless: d }, f, h) : O.isPlainObject(h) ? O.merge({}, h) : O.isArray(h) ? h.slice() : h;
  }
  function o(f, h, d) {
    if (O.isUndefined(h)) {
      if (!O.isUndefined(f))
        return n(void 0, f, d);
    } else
      return n(f, h, d);
  }
  function r(f, h) {
    if (!O.isUndefined(h))
      return n(void 0, h);
  }
  function l(f, h) {
    if (O.isUndefined(h)) {
      if (!O.isUndefined(f))
        return n(void 0, f);
    } else
      return n(void 0, h);
  }
  function u(f, h, d) {
    if (d in t)
      return n(f, h);
    if (d in e)
      return n(void 0, f);
  }
  const a = {
    url: r,
    method: r,
    data: r,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (f, h) => o(tr(f), tr(h), !0)
  };
  return O.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
    const d = a[h] || o, _ = d(e[h], t[h], h);
    O.isUndefined(_) && d !== u || (s[h] = _);
  }), s;
}
const Dl = "1.6.2", Ti = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ti[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const sr = {};
Ti.transitional = function(t, s, n) {
  function o(r, l) {
    return "[Axios v" + Dl + "] Transitional option '" + r + "'" + l + (n ? ". " + n : "");
  }
  return (r, l, u) => {
    if (t === !1)
      throw new ne(
        o(l, " has been removed" + (s ? " in " + s : "")),
        ne.ERR_DEPRECATED
      );
    return s && !sr[l] && (sr[l] = !0, console.warn(
      o(
        l,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(r, l, u) : !0;
  };
};
function z6(e, t, s) {
  if (typeof e != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const r = n[o], l = t[r];
    if (l) {
      const u = e[r], a = u === void 0 || l(u, r, e);
      if (a !== !0)
        throw new ne("option " + r + " must be " + a, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new ne("Unknown option " + r, ne.ERR_BAD_OPTION);
  }
}
const Qn = {
  assertOptions: z6,
  validators: Ti
}, ct = Qn.validators;
class Ys {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Go(),
      response: new Go()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = es(this.defaults, s);
    const { transitional: n, paramsSerializer: o, headers: r } = s;
    n !== void 0 && Qn.assertOptions(n, {
      silentJSONParsing: ct.transitional(ct.boolean),
      forcedJSONParsing: ct.transitional(ct.boolean),
      clarifyTimeoutError: ct.transitional(ct.boolean)
    }, !1), o != null && (O.isFunction(o) ? s.paramsSerializer = {
      serialize: o
    } : Qn.assertOptions(o, {
      encode: ct.function,
      serialize: ct.function
    }, !0)), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let l = r && O.merge(
      r.common,
      r[s.method]
    );
    r && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete r[v];
      }
    ), s.headers = nt.concat(l, r);
    const u = [];
    let a = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(s) === !1 || (a = a && b.synchronous, u.unshift(b.fulfilled, b.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(b) {
      f.push(b.fulfilled, b.rejected);
    });
    let h, d = 0, _;
    if (!a) {
      const v = [er.bind(this), void 0];
      for (v.unshift.apply(v, u), v.push.apply(v, f), _ = v.length, h = Promise.resolve(s); d < _; )
        h = h.then(v[d++], v[d++]);
      return h;
    }
    _ = u.length;
    let y = s;
    for (d = 0; d < _; ) {
      const v = u[d++], b = u[d++];
      try {
        y = v(y);
      } catch (S) {
        b.call(this, S);
        break;
      }
    }
    try {
      h = er.call(this, y);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, _ = f.length; d < _; )
      h = h.then(f[d++], f[d++]);
    return h;
  }
  getUri(t) {
    t = es(this.defaults, t);
    const s = Pl(t.baseURL, t.url);
    return Cl(s, t.params, t.paramsSerializer);
  }
}
O.forEach(["delete", "get", "head", "options"], function(t) {
  Ys.prototype[t] = function(s, n) {
    return this.request(es(n || {}, {
      method: t,
      url: s,
      data: (n || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(t) {
  function s(n) {
    return function(r, l, u) {
      return this.request(es(u || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: l
      }));
    };
  }
  Ys.prototype[t] = s(), Ys.prototype[t + "Form"] = s(!0);
});
const Hs = Ys;
class Ci {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(r) {
      s = r;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let r = n._listeners.length;
      for (; r-- > 0; )
        n._listeners[r](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let r;
      const l = new Promise((u) => {
        n.subscribe(u), r = u;
      }).then(o);
      return l.cancel = function() {
        n.unsubscribe(r);
      }, l;
    }, t(function(r, l, u) {
      n.reason || (n.reason = new Cs(r, l, u), s(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const s = this._listeners.indexOf(t);
    s !== -1 && this._listeners.splice(s, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ci(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const W6 = Ci;
function H6(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function U6(e) {
  return O.isObject(e) && e.isAxiosError === !0;
}
const ei = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ei).forEach(([e, t]) => {
  ei[t] = e;
});
const q6 = ei;
function Nl(e) {
  const t = new Hs(e), s = fl(Hs.prototype.request, t);
  return O.extend(s, Hs.prototype, t, { allOwnKeys: !0 }), O.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(o) {
    return Nl(es(e, o));
  }, s;
}
const Ee = Nl(Ai);
Ee.Axios = Hs;
Ee.CanceledError = Cs;
Ee.CancelToken = W6;
Ee.isCancel = xl;
Ee.VERSION = Dl;
Ee.toFormData = cn;
Ee.AxiosError = ne;
Ee.Cancel = Ee.CanceledError;
Ee.all = function(t) {
  return Promise.all(t);
};
Ee.spread = H6;
Ee.isAxiosError = U6;
Ee.mergeConfig = es;
Ee.AxiosHeaders = nt;
Ee.formToJSON = (e) => kl(O.isHTMLForm(e) ? new FormData(e) : e);
Ee.getAdapter = Ll.getAdapter;
Ee.HttpStatusCode = q6;
Ee.default = Ee;
const K6 = Ee, nr = (e) => {
  let t = !1, s;
  return () => (t || (t = !0, s = e()), s);
};
class ti {
  static isServer() {
    return typeof document > "u";
  }
}
function Y6(e) {
  const t = document.createElement("SCRIPT");
  if (typeof e != "object")
    throw new Error("options should  be an object");
  Array.prototype.isPrototypeOf(e.libraries) && (e.libraries = e.libraries.join(",")), e.v || (e.v = 3.47), e.callback = "vueGoogleMapsInit";
  let n = "https://maps.googleapis.com/maps/api/js?" + Object.keys(e).map((o) => encodeURIComponent(o) + "=" + encodeURIComponent(e[o])).join("&");
  return t.setAttribute("src", n), t.setAttribute("async", ""), t.setAttribute("defer", ""), t;
}
let ir = !1;
function G6(e) {
  if (!ti.isServer()) {
    if (ir)
      throw new Error("You already started the loading of google maps");
    {
      ir = !0;
      const t = Y6(e);
      document.head.appendChild(t);
    }
  }
}
const Rl = (e, t, s) => {
  for (let n of s) {
    const o = `on${n.charAt(0).toUpperCase()}${n.slice(1)}`.replace(/[-_]+(.)?/g, (r, l) => l ? l.toUpperCase() : "");
    e.$props[o] || e.$attrs[o] ? t.addListener(n, (r) => {
      e.$emit(n, r);
    }) : (e.$gmapOptions.autobindAllEvents || e.$attrs[n]) && t.addListener(n, (r) => {
      e.$emit(n, r);
    });
  }
};
function Ml(e, t, s, n = !1) {
  let o = !1;
  function r() {
    o || (o = !0, e.$nextTick(() => {
      o = !1, s();
    }));
  }
  for (let l of t)
    e.$watch(l, r, { immediate: n });
}
class or {
  static capitalizeFirstLetter(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
}
function Gs(e, t) {
  return Object.keys(t).reduce((s, n) => (e[n] !== void 0 && (s[n] = e[n]), s), {});
}
function $i(e, t, s) {
  for (let n in s) {
    let { twoWay: o, type: r, trackProperties: l, noBind: u } = s[n];
    if (u)
      continue;
    const a = "set" + or.capitalizeFirstLetter(n), f = "get" + or.capitalizeFirstLetter(n), h = n.toLowerCase() + "_changed", d = e[n];
    if (typeof t[a] > "u")
      throw new Error(
        `${a} is not a method of (the Maps object corresponding to) ${e.$options._componentTag}`
      );
    r !== Object || !l ? e.$watch(
      n,
      () => {
        const _ = e[n];
        t[a](_);
      },
      {
        immediate: typeof d < "u",
        deep: r === Object
      }
    ) : Ml(
      e,
      l.map((_) => `${n}.${_}`),
      () => {
        t[a](e[n]);
      },
      e[n] !== void 0
    ), o && (e.$gmapOptions.autobindAllEvents || e.$attrs[h]) && t.addListener(h, () => {
      e.$emit(h, t[f]());
    });
  }
}
const X6 = {
  inject: {
    $mapPromise: { default: "abcdef" }
  },
  provide() {
    return this.$mapPromise.then((e) => {
      this.$map = e;
    }), {};
  }
};
function ft(e) {
  const {
    mappedProps: t,
    name: s,
    ctr: n,
    ctrArgs: o,
    events: r,
    beforeCreate: l,
    afterCreate: u,
    props: a,
    ...f
  } = e, h = `$${s}Promise`, d = `$${s}Object`;
  return J6(!(f.props instanceof Array), "`props` should be an object, not Array"), {
    ...typeof GENERATE_DOC < "u" ? { $vgmOptions: e } : {},
    mixins: [X6],
    props: {
      ...a,
      ...Oi(t)
    },
    render() {
      return "";
    },
    provide() {
      const _ = this.$mapPromise.then((y) => {
        this.$map = y;
        const v = {
          ...this.options,
          map: y,
          ...Gs(this, t)
        };
        if (delete v.options, l) {
          const b = l.bind(this)(v);
          if (b instanceof Promise)
            return b.then(() => ({ options: v }));
        }
        return { options: v };
      }).then(({ options: y }) => {
        const v = n();
        return this[d] = o ? new (Function.prototype.bind.call(
          v,
          null,
          ...o(y, Gs(this, a || {}))
        ))() : new v(y), $i(this, this[d], t), Rl(this, this[d], r), u && u.bind(this)(this[d]), this[d];
      });
      return this[h] = _, { [h]: _ };
    },
    unmounted() {
      this[d] && this[d].setMap && this[d].setMap(null);
    },
    ...f
  };
}
function J6(e, t) {
  if (!e)
    throw new Error(t);
}
function Oi(e) {
  return Object.entries(e).map(([t, s]) => {
    const n = {};
    return "type" in s && (n.type = s.type), "default" in s && (n.default = s.default), "required" in s && (n.required = s.required), [t, n];
  }).reduce((t, [s, n]) => (t[s] = n, t), {});
}
const Q6 = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    twoWay: !1,
    type: Object
  },
  path: {
    type: Array,
    twoWay: !0
  }
}, em = [
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "rightclick"
], tm = ft({
  mappedProps: Q6,
  props: {
    deepWatch: {
      type: Boolean,
      default: !1
    }
  },
  events: em,
  name: "polyline",
  ctr: () => google.maps.Polyline,
  afterCreate() {
    let e = () => {
    };
    this.$watch(
      "path",
      (t) => {
        if (t) {
          e(), this.$polylineObject.setPath(t);
          const s = this.$polylineObject.getPath(), n = [], o = () => {
            this.$emit("path_changed", this.$polylineObject.getPath());
          };
          n.push([s, s.addListener("insert_at", o)]), n.push([s, s.addListener("remove_at", o)]), n.push([s, s.addListener("set_at", o)]), e = () => {
            n.map(([r, l]) => google.maps.event.removeListener(l));
          };
        }
      },
      {
        deep: this.deepWatch,
        immediate: !0
      }
    );
  }
}), sm = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    type: Object
  },
  path: {
    type: Array,
    twoWay: !0,
    noBind: !0
  },
  paths: {
    type: Array,
    twoWay: !0,
    noBind: !0
  }
}, nm = [
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "rightclick"
], im = ft({
  props: {
    deepWatch: {
      type: Boolean,
      default: !1
    }
  },
  events: nm,
  mappedProps: sm,
  name: "polygon",
  ctr: () => google.maps.Polygon,
  beforeCreate(e) {
    e.path || delete e.path, e.paths || delete e.paths;
  },
  afterCreate(e) {
    let t = () => {
    };
    this.$watch(
      "paths",
      (s) => {
        if (s) {
          t(), e.setPaths(s);
          const n = () => {
            this.$emit("paths_changed", e.getPaths());
          }, o = [], r = e.getPaths();
          for (let l = 0; l < r.getLength(); l++) {
            let u = r.getAt(l);
            o.push([u, u.addListener("insert_at", n)]), o.push([u, u.addListener("remove_at", n)]), o.push([u, u.addListener("set_at", n)]);
          }
          o.push([r, r.addListener("insert_at", n)]), o.push([r, r.addListener("remove_at", n)]), o.push([r, r.addListener("set_at", n)]), t = () => {
            o.map(([l, u]) => google.maps.event.removeListener(u));
          };
        }
      },
      {
        deep: this.deepWatch,
        immediate: !0
      }
    ), this.$watch(
      "path",
      (s) => {
        if (s) {
          t(), e.setPaths(s);
          const n = e.getPath(), o = [], r = () => {
            this.$emit("path_changed", e.getPath());
          };
          o.push([n, n.addListener("insert_at", r)]), o.push([n, n.addListener("remove_at", r)]), o.push([n, n.addListener("set_at", r)]), t = () => {
            o.map(([l, u]) => google.maps.event.removeListener(u));
          };
        }
      },
      {
        deep: this.deepWatch,
        immediate: !0
      }
    );
  }
}), om = {
  center: {
    type: Object,
    twoWay: !0,
    required: !0
  },
  radius: {
    type: Number,
    twoWay: !0
  },
  draggable: {
    type: Boolean,
    default: !1
  },
  editable: {
    type: Boolean,
    default: !1
  },
  options: {
    type: Object,
    twoWay: !1
  }
}, rm = [
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "rightclick"
], lm = ft({
  mappedProps: om,
  name: "circle",
  ctr: () => google.maps.Circle,
  events: rm
}), cm = {
  bounds: {
    type: Object,
    twoWay: !0
  },
  draggable: {
    type: Boolean,
    default: !1
  },
  editable: {
    type: Boolean,
    default: !1
  },
  options: {
    type: Object,
    twoWay: !1
  }
}, am = [
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "rightclick"
], um = ft({
  mappedProps: cm,
  name: "rectangle",
  ctr: () => google.maps.Rectangle,
  events: am
}), hm = {
  animation: {
    twoWay: !0,
    type: Number
  },
  attribution: {
    type: Object
  },
  clickable: {
    type: Boolean,
    twoWay: !0,
    default: !0
  },
  cursor: {
    type: String,
    twoWay: !0
  },
  draggable: {
    type: Boolean,
    twoWay: !0,
    default: !1
  },
  icon: {
    twoWay: !0
  },
  label: {},
  opacity: {
    type: Number,
    default: 1
  },
  options: {
    type: Object
  },
  place: {
    type: Object
  },
  position: {
    type: Object,
    twoWay: !0
  },
  shape: {
    type: Object,
    twoWay: !0
  },
  title: {
    type: String,
    twoWay: !0
  },
  zIndex: {
    type: Number,
    twoWay: !0
  },
  visible: {
    twoWay: !0,
    default: !0
  }
}, Ln = [
  "click",
  "rightclick",
  "dblclick",
  "drag",
  "dragstart",
  "dragend",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout"
], dm = ft({
  mappedProps: hm,
  events: Ln,
  name: "marker",
  ctr: () => google.maps.Marker,
  inject: {
    $clusterPromise: {
      default: null
    }
  },
  emits: Ln,
  unmounted() {
    this.$markerObject && (this.$clusterObject ? this.$clusterObject.removeMarker(this.$markerObject, !0) : this.$markerObject.setMap(null));
  },
  beforeCreate(e) {
    return this.$clusterPromise && (e.map = null), this.$clusterPromise;
  },
  afterCreate(e) {
    Ln.forEach((t) => {
      e.addListener(t, (s) => {
        this.$emit(t, s);
      });
    }), this.$clusterPromise && this.$clusterPromise.then((t) => {
      this.$clusterObject = t, t.addMarker(e);
    });
  }
});
function pm(e, t, s, n, o, r) {
  return E(), C("div", {
    onClick: t[0] || (t[0] = () => {
      console.log("sdfsd");
    })
  }, [
    ws(e.$slots, "default")
  ]);
}
const fm = /* @__PURE__ */ ee(dm, [["render", pm]]);
var mm = function e(t, s) {
  if (t === s)
    return !0;
  if (t && s && typeof t == "object" && typeof s == "object") {
    if (t.constructor !== s.constructor)
      return !1;
    var n, o, r;
    if (Array.isArray(t)) {
      if (n = t.length, n != s.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!e(t[o], s[o]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === s.source && t.flags === s.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === s.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === s.toString();
    if (r = Object.keys(t), n = r.length, n !== Object.keys(s).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(s, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      var l = r[o];
      if (!e(t[l], s[l]))
        return !1;
    }
    return !0;
  }
  return t !== t && s !== s;
};
const rr = /* @__PURE__ */ Er(mm), lr = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
], Dn = 1, ds = 8;
class ki {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(t) {
    if (!(t instanceof ArrayBuffer))
      throw new Error("Data must be an instance of ArrayBuffer.");
    const [s, n] = new Uint8Array(t, 0, 2);
    if (s !== 219)
      throw new Error("Data does not appear to be in a KDBush format.");
    const o = n >> 4;
    if (o !== Dn)
      throw new Error(`Got v${o} data when expected v${Dn}.`);
    const r = lr[n & 15];
    if (!r)
      throw new Error("Unrecognized array type.");
    const [l] = new Uint16Array(t, 2, 1), [u] = new Uint32Array(t, 4, 1);
    return new ki(u, l, r, t);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(t, s = 64, n = Float64Array, o) {
    if (isNaN(t) || t < 0)
      throw new Error(`Unpexpected numItems value: ${t}.`);
    this.numItems = +t, this.nodeSize = Math.min(Math.max(+s, 2), 65535), this.ArrayType = n, this.IndexArrayType = t < 65536 ? Uint16Array : Uint32Array;
    const r = lr.indexOf(this.ArrayType), l = t * 2 * this.ArrayType.BYTES_PER_ELEMENT, u = t * this.IndexArrayType.BYTES_PER_ELEMENT, a = (8 - u % 8) % 8;
    if (r < 0)
      throw new Error(`Unexpected typed array class: ${n}.`);
    o && o instanceof ArrayBuffer ? (this.data = o, this.ids = new this.IndexArrayType(this.data, ds, t), this.coords = new this.ArrayType(this.data, ds + u + a, t * 2), this._pos = t * 2, this._finished = !0) : (this.data = new ArrayBuffer(ds + l + u + a), this.ids = new this.IndexArrayType(this.data, ds, t), this.coords = new this.ArrayType(this.data, ds + u + a, t * 2), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, (Dn << 4) + r]), new Uint16Array(this.data, 2, 1)[0] = s, new Uint32Array(this.data, 4, 1)[0] = t);
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(t, s) {
    const n = this._pos >> 1;
    return this.ids[n] = n, this.coords[this._pos++] = t, this.coords[this._pos++] = s, n;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    const t = this._pos >> 1;
    if (t !== this.numItems)
      throw new Error(`Added ${t} items when expected ${this.numItems}.`);
    return si(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(t, s, n, o) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: r, coords: l, nodeSize: u } = this, a = [0, r.length - 1, 0], f = [];
    for (; a.length; ) {
      const h = a.pop() || 0, d = a.pop() || 0, _ = a.pop() || 0;
      if (d - _ <= u) {
        for (let S = _; S <= d; S++) {
          const $ = l[2 * S], k = l[2 * S + 1];
          $ >= t && $ <= n && k >= s && k <= o && f.push(r[S]);
        }
        continue;
      }
      const y = _ + d >> 1, v = l[2 * y], b = l[2 * y + 1];
      v >= t && v <= n && b >= s && b <= o && f.push(r[y]), (h === 0 ? t <= v : s <= b) && (a.push(_), a.push(y - 1), a.push(1 - h)), (h === 0 ? n >= v : o >= b) && (a.push(y + 1), a.push(d), a.push(1 - h));
    }
    return f;
  }
  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(t, s, n) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: o, coords: r, nodeSize: l } = this, u = [0, o.length - 1, 0], a = [], f = n * n;
    for (; u.length; ) {
      const h = u.pop() || 0, d = u.pop() || 0, _ = u.pop() || 0;
      if (d - _ <= l) {
        for (let S = _; S <= d; S++)
          cr(r[2 * S], r[2 * S + 1], t, s) <= f && a.push(o[S]);
        continue;
      }
      const y = _ + d >> 1, v = r[2 * y], b = r[2 * y + 1];
      cr(v, b, t, s) <= f && a.push(o[y]), (h === 0 ? t - n <= v : s - n <= b) && (u.push(_), u.push(y - 1), u.push(1 - h)), (h === 0 ? t + n >= v : s + n >= b) && (u.push(y + 1), u.push(d), u.push(1 - h));
    }
    return a;
  }
}
function si(e, t, s, n, o, r) {
  if (o - n <= s)
    return;
  const l = n + o >> 1;
  Il(e, t, l, n, o, r), si(e, t, s, n, l - 1, 1 - r), si(e, t, s, l + 1, o, 1 - r);
}
function Il(e, t, s, n, o, r) {
  for (; o > n; ) {
    if (o - n > 600) {
      const f = o - n + 1, h = s - n + 1, d = Math.log(f), _ = 0.5 * Math.exp(2 * d / 3), y = 0.5 * Math.sqrt(d * _ * (f - _) / f) * (h - f / 2 < 0 ? -1 : 1), v = Math.max(n, Math.floor(s - h * _ / f + y)), b = Math.min(o, Math.floor(s + (f - h) * _ / f + y));
      Il(e, t, s, v, b, r);
    }
    const l = t[2 * s + r];
    let u = n, a = o;
    for (ps(e, t, n, s), t[2 * o + r] > l && ps(e, t, n, o); u < a; ) {
      for (ps(e, t, u, a), u++, a--; t[2 * u + r] < l; )
        u++;
      for (; t[2 * a + r] > l; )
        a--;
    }
    t[2 * n + r] === l ? ps(e, t, n, a) : (a++, ps(e, t, a, o)), a <= s && (n = a + 1), s <= a && (o = a - 1);
  }
}
function ps(e, t, s, n) {
  Nn(e, s, n), Nn(t, 2 * s, 2 * n), Nn(t, 2 * s + 1, 2 * n + 1);
}
function Nn(e, t, s) {
  const n = e[t];
  e[t] = e[s], e[s] = n;
}
function cr(e, t, s, n) {
  const o = e - s, r = t - n;
  return o * o + r * r;
}
const gm = {
  minZoom: 0,
  // min zoom to generate clusters on
  maxZoom: 16,
  // max zoom level to cluster the points on
  minPoints: 2,
  // minimum points to form a cluster
  radius: 40,
  // cluster radius in pixels
  extent: 512,
  // tile extent (radius is calculated relative to it)
  nodeSize: 64,
  // size of the KD-tree leaf node, affects performance
  log: !1,
  // whether to log timing info
  // whether to generate numeric ids for input features (in vector tiles)
  generateId: !1,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }
  // properties to use for individual points when running the reducer
  map: (e) => e
  // props => ({sum: props.my_value})
}, ar = Math.fround || /* @__PURE__ */ ((e) => (t) => (e[0] = +t, e[0]))(new Float32Array(1)), Ct = 2, dt = 3, Rn = 4, ut = 5, Vl = 6;
class _m {
  constructor(t) {
    this.options = Object.assign(Object.create(gm), t), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
  }
  load(t) {
    const { log: s, minZoom: n, maxZoom: o } = this.options;
    s && console.time("total time");
    const r = `prepare ${t.length} points`;
    s && console.time(r), this.points = t;
    const l = [];
    for (let a = 0; a < t.length; a++) {
      const f = t[a];
      if (!f.geometry)
        continue;
      const [h, d] = f.geometry.coordinates, _ = ar(js(h)), y = ar(Zs(d));
      l.push(
        _,
        y,
        // projected point coordinates
        1 / 0,
        // the last zoom the point was processed at
        a,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      ), this.options.reduce && l.push(0);
    }
    let u = this.trees[o + 1] = this._createTree(l);
    s && console.timeEnd(r);
    for (let a = o; a >= n; a--) {
      const f = +Date.now();
      u = this.trees[a] = this._createTree(this._cluster(u, a)), s && console.log("z%d: %d clusters in %dms", a, u.numItems, +Date.now() - f);
    }
    return s && console.timeEnd("total time"), this;
  }
  getClusters(t, s) {
    let n = ((t[0] + 180) % 360 + 360) % 360 - 180;
    const o = Math.max(-90, Math.min(90, t[1]));
    let r = t[2] === 180 ? 180 : ((t[2] + 180) % 360 + 360) % 360 - 180;
    const l = Math.max(-90, Math.min(90, t[3]));
    if (t[2] - t[0] >= 360)
      n = -180, r = 180;
    else if (n > r) {
      const d = this.getClusters([n, o, 180, l], s), _ = this.getClusters([-180, o, r, l], s);
      return d.concat(_);
    }
    const u = this.trees[this._limitZoom(s)], a = u.range(js(n), Zs(l), js(r), Zs(o)), f = u.data, h = [];
    for (const d of a) {
      const _ = this.stride * d;
      h.push(f[_ + ut] > 1 ? ur(f, _, this.clusterProps) : this.points[f[_ + dt]]);
    }
    return h;
  }
  getChildren(t) {
    const s = this._getOriginId(t), n = this._getOriginZoom(t), o = "No cluster with the specified id.", r = this.trees[n];
    if (!r)
      throw new Error(o);
    const l = r.data;
    if (s * this.stride >= l.length)
      throw new Error(o);
    const u = this.options.radius / (this.options.extent * Math.pow(2, n - 1)), a = l[s * this.stride], f = l[s * this.stride + 1], h = r.within(a, f, u), d = [];
    for (const _ of h) {
      const y = _ * this.stride;
      l[y + Rn] === t && d.push(l[y + ut] > 1 ? ur(l, y, this.clusterProps) : this.points[l[y + dt]]);
    }
    if (d.length === 0)
      throw new Error(o);
    return d;
  }
  getLeaves(t, s, n) {
    s = s || 10, n = n || 0;
    const o = [];
    return this._appendLeaves(o, t, s, n, 0), o;
  }
  getTile(t, s, n) {
    const o = this.trees[this._limitZoom(t)], r = Math.pow(2, t), { extent: l, radius: u } = this.options, a = u / l, f = (n - a) / r, h = (n + 1 + a) / r, d = {
      features: []
    };
    return this._addTileFeatures(
      o.range((s - a) / r, f, (s + 1 + a) / r, h),
      o.data,
      s,
      n,
      r,
      d
    ), s === 0 && this._addTileFeatures(
      o.range(1 - a / r, f, 1, h),
      o.data,
      r,
      n,
      r,
      d
    ), s === r - 1 && this._addTileFeatures(
      o.range(0, f, a / r, h),
      o.data,
      -1,
      n,
      r,
      d
    ), d.features.length ? d : null;
  }
  getClusterExpansionZoom(t) {
    let s = this._getOriginZoom(t) - 1;
    for (; s <= this.options.maxZoom; ) {
      const n = this.getChildren(t);
      if (s++, n.length !== 1)
        break;
      t = n[0].properties.cluster_id;
    }
    return s;
  }
  _appendLeaves(t, s, n, o, r) {
    const l = this.getChildren(s);
    for (const u of l) {
      const a = u.properties;
      if (a && a.cluster ? r + a.point_count <= o ? r += a.point_count : r = this._appendLeaves(t, a.cluster_id, n, o, r) : r < o ? r++ : t.push(u), t.length === n)
        break;
    }
    return r;
  }
  _createTree(t) {
    const s = new ki(t.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let n = 0; n < t.length; n += this.stride)
      s.add(t[n], t[n + 1]);
    return s.finish(), s.data = t, s;
  }
  _addTileFeatures(t, s, n, o, r, l) {
    for (const u of t) {
      const a = u * this.stride, f = s[a + ut] > 1;
      let h, d, _;
      if (f)
        h = Bl(s, a, this.clusterProps), d = s[a], _ = s[a + 1];
      else {
        const b = this.points[s[a + dt]];
        h = b.properties;
        const [S, $] = b.geometry.coordinates;
        d = js(S), _ = Zs($);
      }
      const y = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (d * r - n)),
          Math.round(this.options.extent * (_ * r - o))
        ]],
        tags: h
      };
      let v;
      f || this.options.generateId ? v = s[a + dt] : v = this.points[s[a + dt]].id, v !== void 0 && (y.id = v), l.features.push(y);
    }
  }
  _limitZoom(t) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+t), this.options.maxZoom + 1));
  }
  _cluster(t, s) {
    const { radius: n, extent: o, reduce: r, minPoints: l } = this.options, u = n / (o * Math.pow(2, s)), a = t.data, f = [], h = this.stride;
    for (let d = 0; d < a.length; d += h) {
      if (a[d + Ct] <= s)
        continue;
      a[d + Ct] = s;
      const _ = a[d], y = a[d + 1], v = t.within(a[d], a[d + 1], u), b = a[d + ut];
      let S = b;
      for (const $ of v) {
        const k = $ * h;
        a[k + Ct] > s && (S += a[k + ut]);
      }
      if (S > b && S >= l) {
        let $ = _ * b, k = y * b, V, M = -1;
        const B = ((d / h | 0) << 5) + (s + 1) + this.points.length;
        for (const q of v) {
          const H = q * h;
          if (a[H + Ct] <= s)
            continue;
          a[H + Ct] = s;
          const z = a[H + ut];
          $ += a[H] * z, k += a[H + 1] * z, a[H + Rn] = B, r && (V || (V = this._map(a, d, !0), M = this.clusterProps.length, this.clusterProps.push(V)), r(V, this._map(a, H)));
        }
        a[d + Rn] = B, f.push($ / S, k / S, 1 / 0, B, -1, S), r && f.push(M);
      } else {
        for (let $ = 0; $ < h; $++)
          f.push(a[d + $]);
        if (S > 1)
          for (const $ of v) {
            const k = $ * h;
            if (!(a[k + Ct] <= s)) {
              a[k + Ct] = s;
              for (let V = 0; V < h; V++)
                f.push(a[k + V]);
            }
          }
      }
    }
    return f;
  }
  // get index of the point from which the cluster originated
  _getOriginId(t) {
    return t - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(t) {
    return (t - this.points.length) % 32;
  }
  _map(t, s, n) {
    if (t[s + ut] > 1) {
      const l = this.clusterProps[t[s + Vl]];
      return n ? Object.assign({}, l) : l;
    }
    const o = this.points[t[s + dt]].properties, r = this.options.map(o);
    return n && r === o ? Object.assign({}, r) : r;
  }
}
function ur(e, t, s) {
  return {
    type: "Feature",
    id: e[t + dt],
    properties: Bl(e, t, s),
    geometry: {
      type: "Point",
      coordinates: [vm(e[t]), ym(e[t + 1])]
    }
  };
}
function Bl(e, t, s) {
  const n = e[t + ut], o = n >= 1e4 ? `${Math.round(n / 1e3)}k` : n >= 1e3 ? `${Math.round(n / 100) / 10}k` : n, r = e[t + Vl], l = r === -1 ? {} : Object.assign({}, s[r]);
  return Object.assign(l, {
    cluster: !0,
    cluster_id: e[t + dt],
    point_count: n,
    point_count_abbreviated: o
  });
}
function js(e) {
  return e / 360 + 0.5;
}
function Zs(e) {
  const t = Math.sin(e * Math.PI / 180), s = 0.5 - 0.25 * Math.log((1 + t) / (1 - t)) / Math.PI;
  return s < 0 ? 0 : s > 1 ? 1 : s;
}
function vm(e) {
  return (e - 0.5) * 360;
}
function ym(e) {
  const t = (180 - e * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(t)) / Math.PI - 90;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function bm(e, t) {
  var s = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]]);
  return s;
}
class Re {
  static isAdvancedMarkerAvailable(t) {
    return google.maps.marker && t.getMapCapabilities().isAdvancedMarkersAvailable === !0;
  }
  static isAdvancedMarker(t) {
    return google.maps.marker && t instanceof google.maps.marker.AdvancedMarkerElement;
  }
  static setMap(t, s) {
    this.isAdvancedMarker(t) ? t.map = s : t.setMap(s);
  }
  static getPosition(t) {
    if (this.isAdvancedMarker(t)) {
      if (t.position) {
        if (t.position instanceof google.maps.LatLng)
          return t.position;
        if (t.position.lat && t.position.lng)
          return new google.maps.LatLng(t.position.lat, t.position.lng);
      }
      return new google.maps.LatLng(null);
    }
    return t.getPosition();
  }
  static getVisible(t) {
    return this.isAdvancedMarker(t) ? !0 : t.getVisible();
  }
}
class ni {
  constructor({ markers: t, position: s }) {
    this.markers = t, s && (s instanceof google.maps.LatLng ? this._position = s : this._position = new google.maps.LatLng(s));
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position)
      return;
    const t = new google.maps.LatLngBounds(this._position, this._position);
    for (const s of this.markers)
      t.extend(Re.getPosition(s));
    return t;
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter((t) => Re.getVisible(t)).length;
  }
  /**
   * Add a marker to the cluster.
   */
  push(t) {
    this.markers.push(t);
  }
  /**
   * Cleanup references and remove marker from map.
   */
  delete() {
    this.marker && (Re.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
  }
}
class wm {
  constructor({ maxZoom: t = 16 }) {
    this.maxZoom = t;
  }
  /**
   * Helper function to bypass clustering based upon some map state such as
   * zoom, number of markers, etc.
   *
   * ```typescript
   *  cluster({markers, map}: AlgorithmInput): Cluster[] {
   *    if (shouldBypassClustering(map)) {
   *      return this.noop({markers})
   *    }
   * }
   * ```
   */
  noop({ markers: t }) {
    return Em(t);
  }
}
const Em = (e) => e.map((s) => new ni({
  position: Re.getPosition(s),
  markers: [s]
}));
class Sm extends wm {
  constructor(t) {
    var { maxZoom: s, radius: n = 60 } = t, o = bm(t, ["maxZoom", "radius"]);
    super({ maxZoom: s }), this.state = { zoom: -1 }, this.superCluster = new _m(Object.assign({ maxZoom: this.maxZoom, radius: n }, o));
  }
  calculate(t) {
    let s = !1;
    const n = { zoom: t.map.getZoom() };
    if (!rr(t.markers, this.markers)) {
      s = !0, this.markers = [...t.markers];
      const o = this.markers.map((r) => {
        const l = Re.getPosition(r);
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [l.lng(), l.lat()]
          },
          properties: { marker: r }
        };
      });
      this.superCluster.load(o);
    }
    return s || (this.state.zoom <= this.maxZoom || n.zoom <= this.maxZoom) && (s = !rr(this.state, n)), this.state = n, s && (this.clusters = this.cluster(t)), { clusters: this.clusters, changed: s };
  }
  cluster({ map: t }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(t.getZoom())).map((s) => this.transformCluster(s));
  }
  transformCluster({ geometry: { coordinates: [t, s] }, properties: n }) {
    if (n.cluster)
      return new ni({
        markers: this.superCluster.getLeaves(n.cluster_id, 1 / 0).map((r) => r.properties.marker),
        position: { lat: s, lng: t }
      });
    const o = n.marker;
    return new ni({
      markers: [o],
      position: Re.getPosition(o)
    });
  }
}
class Am {
  constructor(t, s) {
    this.markers = { sum: t.length };
    const n = s.map((r) => r.count), o = n.reduce((r, l) => r + l, 0);
    this.clusters = {
      count: s.length,
      markers: {
        mean: o / s.length,
        sum: o,
        min: Math.min(...n),
        max: Math.max(...n)
      }
    };
  }
}
class Tm {
  /**
   * The default render function for the library used by {@link MarkerClusterer}.
   *
   * Currently set to use the following:
   *
   * ```typescript
   * // change color if this cluster has more markers than the mean cluster
   * const color =
   *   count > Math.max(10, stats.clusters.markers.mean)
   *     ? "#ff0000"
   *     : "#0000ff";
   *
   * // create svg url with fill color
   * const svg = window.btoa(`
   * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
   *   <circle cx="120" cy="120" opacity=".6" r="70" />
   *   <circle cx="120" cy="120" opacity=".3" r="90" />
   *   <circle cx="120" cy="120" opacity=".2" r="110" />
   *   <circle cx="120" cy="120" opacity=".1" r="130" />
   * </svg>`);
   *
   * // create marker using svg icon
   * return new google.maps.Marker({
   *   position,
   *   icon: {
   *     url: `data:image/svg+xml;base64,${svg}`,
   *     scaledSize: new google.maps.Size(45, 45),
   *   },
   *   label: {
   *     text: String(count),
   *     color: "rgba(255,255,255,0.9)",
   *     fontSize: "12px",
   *   },
   *   // adjust zIndex to be above other markers
   *   zIndex: 1000 + count,
   * });
   * ```
   */
  render({ count: t, position: s }, n, o) {
    const l = `<svg fill="${t > Math.max(10, n.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${t}</text>
</svg>`, u = `Cluster of ${t} markers`, a = Number(google.maps.Marker.MAX_ZINDEX) + t;
    if (Re.isAdvancedMarkerAvailable(o)) {
      const d = new DOMParser().parseFromString(l, "image/svg+xml").documentElement;
      d.setAttribute("transform", "translate(0 25)");
      const _ = {
        map: o,
        position: s,
        zIndex: a,
        title: u,
        content: d
      };
      return new google.maps.marker.AdvancedMarkerElement(_);
    }
    const f = {
      position: s,
      zIndex: a,
      title: u,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(l)}`,
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(f);
  }
}
function Cm(e, t) {
  for (let s in t.prototype)
    e.prototype[s] = t.prototype[s];
}
class xi {
  constructor() {
    Cm(xi, google.maps.OverlayView);
  }
}
var bs;
(function(e) {
  e.CLUSTERING_BEGIN = "clusteringbegin", e.CLUSTERING_END = "clusteringend", e.CLUSTER_CLICK = "click";
})(bs || (bs = {}));
const $m = (e, t, s) => {
  s.fitBounds(t.bounds);
};
class hr extends xi {
  constructor({ map: t, markers: s = [], algorithmOptions: n = {}, algorithm: o = new Sm(n), renderer: r = new Tm(), onClusterClick: l = $m }) {
    super(), this.markers = [...s], this.clusters = [], this.algorithm = o, this.renderer = r, this.onClusterClick = l, t && this.setMap(t);
  }
  addMarker(t, s) {
    this.markers.includes(t) || (this.markers.push(t), s || this.render());
  }
  addMarkers(t, s) {
    t.forEach((n) => {
      this.addMarker(n, !0);
    }), s || this.render();
  }
  removeMarker(t, s) {
    const n = this.markers.indexOf(t);
    return n === -1 ? !1 : (Re.setMap(t, null), this.markers.splice(n, 1), s || this.render(), !0);
  }
  removeMarkers(t, s) {
    let n = !1;
    return t.forEach((o) => {
      n = this.removeMarker(o, !0) || n;
    }), n && !s && this.render(), n;
  }
  clearMarkers(t) {
    this.markers.length = 0, t || this.render();
  }
  /**
   * Recalculates and draws all the marker clusters.
   */
  render() {
    const t = this.getMap();
    if (t instanceof google.maps.Map && t.getProjection()) {
      google.maps.event.trigger(this, bs.CLUSTERING_BEGIN, this);
      const { clusters: s, changed: n } = this.algorithm.calculate({
        markers: this.markers,
        map: t,
        mapCanvasProjection: this.getProjection()
      });
      if (n || n == null) {
        const o = /* @__PURE__ */ new Set();
        for (const l of s)
          l.markers.length == 1 && o.add(l.markers[0]);
        const r = [];
        for (const l of this.clusters)
          l.marker != null && (l.markers.length == 1 ? o.has(l.marker) || Re.setMap(l.marker, null) : r.push(l.marker));
        this.clusters = s, this.renderClusters(), requestAnimationFrame(() => r.forEach((l) => Re.setMap(l, null)));
      }
      google.maps.event.trigger(this, bs.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener), this.reset();
  }
  reset() {
    this.markers.forEach((t) => Re.setMap(t, null)), this.clusters.forEach((t) => t.delete()), this.clusters = [];
  }
  renderClusters() {
    const t = new Am(this.markers, this.clusters), s = this.getMap();
    this.clusters.forEach((n) => {
      n.markers.length === 1 ? n.marker = n.markers[0] : (n.marker = this.renderer.render(n, t, s), n.markers.forEach((o) => Re.setMap(o, null)), this.onClusterClick && n.marker.addListener(
        "click",
        /* istanbul ignore next */
        (o) => {
          google.maps.event.trigger(this, bs.CLUSTER_CLICK, n), this.onClusterClick(o, n, s);
        }
      )), Re.setMap(n.marker, s);
    });
  }
}
const Mn = {
  maxZoom: {
    type: Number,
    twoWay: !1
  },
  batchSizeIE: {
    type: Number,
    twoWay: !1
  },
  calculator: {
    type: Function,
    twoWay: !1
  },
  enableRetinaIcons: {
    type: Boolean,
    twoWay: !1
  },
  gridSize: {
    type: Number,
    twoWay: !1
  },
  ignoreHidden: {
    type: Boolean,
    twoWay: !1
  },
  imageExtension: {
    type: String,
    twoWay: !1
  },
  imagePath: {
    type: String,
    twoWay: !1
  },
  imageSizes: {
    type: Array,
    twoWay: !1
  },
  minimumClusterSize: {
    type: Number,
    twoWay: !1
  },
  styles: {
    type: Array,
    twoWay: !1
  },
  zoomOnClick: {
    type: Boolean,
    twoWay: !1
  }
}, Om = [
  "click",
  "rightclick",
  "dblclick",
  "drag",
  "dragstart",
  "dragend",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout"
], km = ft({
  mappedProps: Mn,
  events: Om,
  name: "cluster",
  ctr: () => {
    if (typeof hr > "u") {
      const e = "MarkerClusterer is not installed!";
      throw console.error(e), new Error(e);
    }
    return hr;
  },
  ctrArgs: ({ map: e, ...t }) => [e, [], t],
  afterCreate(e) {
    const t = () => {
      const s = e.getMarkers();
      e.clearMarkers(), e.addMarkers(s);
    };
    for (let s in Mn)
      Mn[s].twoWay && this.$on(s.toLowerCase() + "_changed", t);
  },
  updated() {
    this.$clusterObject && this.$clusterObject.repaint();
  },
  beforeUnmount() {
    this.$children && this.$children.length && this.$children.forEach((e) => {
      e.$clusterObject === this.$clusterObject && (e.$clusterObject = null);
    }), this.$clusterObject && this.$clusterObject.clearMarkers();
  }
});
function xm(e, t, s, n, o, r) {
  return E(), C("div", null, [
    ws(e.$slots, "default")
  ]);
}
const Pm = /* @__PURE__ */ ee(km, [["render", xm]]), Lm = {
  options: {
    type: Object,
    required: !1,
    default() {
      return {};
    }
  },
  position: {
    type: Object,
    twoWay: !0
  },
  zIndex: {
    type: Number,
    twoWay: !0
  }
}, Dm = ["domready", "click", "closeclick", "content_changed"], Nm = ft({
  mappedProps: Lm,
  events: Dm,
  name: "infoWindow",
  ctr: () => google.maps.InfoWindow,
  props: {
    opened: {
      type: Boolean,
      default: !0
    }
  },
  inject: {
    $markerPromise: {
      default: null
    }
  },
  mounted() {
    const e = this.$refs.infoWindow;
    e.parentNode.removeChild(e);
  },
  beforeCreate(e) {
    if (e.content = this.$refs.infoWindow, this.$markerPromise)
      return delete e.position, this.$markerPromise.then((t) => (this.$markerObject = t, t));
  },
  emits: ["closeclick"],
  methods: {
    _openInfoWindow() {
      this.$infoWindowObject.close(), this.opened ? this.$infoWindowObject.open(this.$map, this.$markerObject) : this.$emit("closeclick");
    }
  },
  afterCreate() {
    this._openInfoWindow(), this.$watch("opened", () => {
      this._openInfoWindow();
    });
  }
}), Rm = { ref: "infoWindow" };
function Mm(e, t, s, n, o, r) {
  return E(), C("div", Rm, [
    ws(e.$slots, "default")
  ], 512);
}
const Im = /* @__PURE__ */ ee(Nm, [["render", Mm]]), Vm = {
  props: ["resizeBus"],
  data() {
    return {
      _actualResizeBus: null
    };
  },
  created() {
    typeof this.resizeBus > "u" ? this.$data._actualResizeBus = this.$gmapDefaultResizeBus : this.$data._actualResizeBus = this.resizeBus;
  },
  methods: {
    _resizeCallback() {
      this.resize();
    },
    isFunction(e) {
      return e && {}.toString.call(e) === "[object Function]";
    },
    _delayedResizeCallback() {
      this.$nextTick(() => this._resizeCallback());
    }
  },
  watch: {
    resizeBus(e) {
      this.$data._actualResizeBus = e;
    },
    "$data._actualResizeBus"(e, t) {
      t && t.$off("resize", this._delayedResizeCallback);
    }
  },
  unmounted() {
    this.$data._actualResizeBus && this.isFunction(this.$data._actualResizeBus.$off) && this.$data._actualResizeBus.$off("resize", this._delayedResizeCallback);
  }
};
function Bm(e) {
  let t = 0;
  e(
    () => {
      t += 1;
    },
    () => {
      t = Math.max(0, t - 1);
    },
    () => t === 0
  );
}
const In = {
  center: {
    required: !0,
    twoWay: !0,
    type: Object,
    noBind: !0
  },
  zoom: {
    required: !1,
    twoWay: !0,
    type: Number,
    noBind: !0
  },
  heading: {
    type: Number,
    twoWay: !0
  },
  mapTypeId: {
    twoWay: !0,
    type: String
  },
  tilt: {
    twoWay: !0,
    type: Number
  },
  options: {
    type: Object,
    default() {
      return {};
    }
  }
}, dr = [
  "bounds_changed",
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "idle",
  "mousemove",
  "mouseout",
  "mouseover",
  "resize",
  "rightclick",
  "tilesloaded"
], jm = ["panBy", "panTo", "panToBounds", "fitBounds"].reduce((e, t) => (e[t] = function() {
  this.$mapObject && this.$mapObject[t].apply(this.$mapObject, arguments);
}, e), {}), Zm = {
  resize() {
    this.$mapObject && google.maps.event.trigger(this.$mapObject, "resize");
  },
  resizePreserveCenter() {
    if (!this.$mapObject)
      return;
    const e = this.$mapObject.getCenter();
    google.maps.event.trigger(this.$mapObject, "resize"), this.$mapObject.setCenter(e);
  },
  /// Override mountableMixin::_resizeCallback
  /// because resizePreserveCenter is usually the
  /// expected behaviour
  _resizeCallback() {
    this.resizePreserveCenter();
  }
}, Fm = {
  mixins: [Vm],
  props: Oi({ ...In, ...dr.reduce((e, t) => ({ ...e, [`on${t.charAt(0).toUpperCase()}${t.slice(1)}`.replace(/[-_]+(.)?/g, (s, n) => n ? n.toUpperCase() : "")]: Function }), {}) }),
  inheritAttrs: !1,
  provide() {
    return this.$mapPromise = new Promise((e, t) => {
      this.$mapPromiseDeferred = { resolve: e, reject: t };
    }), {
      $mapPromise: this.$mapPromise
    };
  },
  emits: ["center_changed", "zoom_changed", "bounds_changed"],
  computed: {
    finalLat() {
      return this.center && typeof this.center.lat == "function" ? this.center.lat() : this.center.lat;
    },
    finalLng() {
      return this.center && typeof this.center.lng == "function" ? this.center.lng() : this.center.lng;
    },
    finalLatLng() {
      return { lat: this.finalLat, lng: this.finalLng };
    }
  },
  watch: {
    zoom(e) {
      this.$mapObject && this.$mapObject.setZoom(e);
    }
  },
  mounted() {
    return this.$gmapApiPromiseLazy().then(() => {
      const e = this.$refs["vue-map"], t = {
        ...this.options,
        ...Gs(this, In)
      };
      return delete t.options, this.$mapObject = new google.maps.Map(e, t), $i(this, this.$mapObject, In), Rl(this, this.$mapObject, dr), Bm((s, n, o) => {
        this.$mapObject.addListener("center_changed", () => {
          o() && this.$emit("center_changed", this.$mapObject.getCenter()), n();
        }), Ml(this, ["finalLat", "finalLng"], () => {
          s(), this.$mapObject.setCenter(this.finalLatLng);
        });
      }), this.$mapObject.addListener("zoom_changed", () => {
        this.$emit("zoom_changed", this.$mapObject.getZoom());
      }), this.$mapObject.addListener("bounds_changed", () => {
        this.$emit("bounds_changed", this.$mapObject.getBounds());
      }), this.$mapPromiseDeferred.resolve(this.$mapObject), this.$mapObject;
    }).catch((e) => {
      throw e;
    });
  },
  methods: {
    ...Zm,
    ...jm
  }
}, zm = { class: "vue-map-hidden" };
function Wm(e, t, s, n, o, r) {
  return E(), C("div", {
    class: ie(["vue-map-container", e.$attrs.class])
  }, [
    p("div", {
      ref: "vue-map",
      class: "vue-map",
      style: Ge(e.$attrs.style ? e.$attrs.style : "")
    }, null, 4),
    p("div", zm, [
      ws(e.$slots, "default")
    ]),
    ws(e.$slots, "visible")
  ], 2);
}
const Hm = /* @__PURE__ */ ee(Fm, [["render", Wm]]), Um = {
  options: {
    type: Object,
    twoWay: !1,
    default: () => {
    }
  },
  data: {
    type: Array,
    twoWay: !0
  }
}, qm = [], Km = ft({
  mappedProps: Um,
  name: "heatmap",
  ctr: () => google.maps.visualization.HeatmapLayer,
  events: qm
}), Ym = (e) => {
  const t = e.addEventListener ? e.addEventListener : e.attachEvent;
  function s(n, o) {
    if (n === "keydown") {
      const r = o;
      o = function(l) {
        const u = document.getElementsByClassName("pac-item-selected").length > 0;
        if (l.which === 13 && !u) {
          const a = document.createEvent("Event");
          a.keyCode = 40, a.which = 40, r.apply(e, [a]);
        }
        r.apply(e, [l]);
      };
    }
    t.apply(e, [n, o]);
  }
  e.addEventListener = s, e.attachEvent = s;
}, Vn = {
  bounds: {
    type: Object
  },
  componentRestrictions: {
    type: Object,
    // Do not bind -- must check for undefined
    // in the property
    noBind: !0
  },
  types: {
    type: Array,
    default: function() {
      return [];
    }
  }
}, Gm = {
  selectFirstOnEnter: {
    required: !1,
    type: Boolean,
    default: !1
  },
  options: {
    type: Object
  }
}, Xm = {
  mounted() {
    this.$gmapApiPromiseLazy().then(() => {
      if (this.selectFirstOnEnter && Ym(this.$refs.input), typeof google.maps.places.Autocomplete != "function")
        throw new Error(
          "google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?"
        );
      const e = {
        ...Gs(this, Vn),
        ...this.options
      };
      this.$autocomplete = new google.maps.places.Autocomplete(this.$refs.input, e), $i(this, this.$autocomplete, Vn), this.$watch("componentRestrictions", (t) => {
        t !== void 0 && this.$autocomplete.setComponentRestrictions(t);
      }), this.$autocomplete.addListener("place_changed", () => {
        this.$emit("place_changed", this.$autocomplete.getPlace());
      });
    });
  },
  props: {
    ...Oi(Vn),
    ...Gm
  }
};
function Jm(e, t, s, n, o, r) {
  return E(), C("input", Pa({ ref: "input" }, e.$attrs, La(e.$attrs, !0)), null, 16);
}
const Qm = /* @__PURE__ */ ee(Xm, [["render", Jm]]);
let jl = null;
function e8(e, t) {
  t = {
    installComponents: !0,
    autobindAllEvents: !1,
    ...t
  }, jl = jn({
    data: function() {
      return { gmapApi: null };
    }
  });
  const s = jn();
  let n = t8(t);
  e.mixin({
    created() {
      this.$gmapDefaultResizeBus = s, this.$gmapOptions = t, this.$gmapApiPromiseLazy = n;
    }
  }), e.$gmapDefaultResizeBus = s, e.$gmapApiPromiseLazy = n, t.installComponents && (e.component("GMapMap", Hm), e.component("GMapMarker", fm), e.component("GMapInfoWindow", Im), e.component("GMapCluster", Pm), e.component("GMapPolyline", tm), e.component("GMapPolygon", im), e.component("GMapCircle", lm), e.component("GMapRectangle", um), e.component("GMapAutocomplete", Qm), e.component("GMapHeatmap", Km));
}
function t8(e) {
  function t() {
    return jl.gmapApi = {}, window.google;
  }
  if (e.load)
    return nr(() => ti.isServer() ? new Promise(() => {
    }).then(t) : new Promise((s, n) => {
      try {
        window.vueGoogleMapsInit = s, G6(e.load);
      } catch (o) {
        n(o);
      }
    }).then(t));
  {
    const s = new Promise((n) => {
      ti.isServer() || (window.vueGoogleMapsInit = n);
    }).then(t);
    return nr(() => s);
  }
}
window.render = (e, t) => {
  const s = jn(a5, t), n = T0();
  s.use(xf), s.use(n), s.config.globalProperties.$store = n, s.config.globalProperties.$axios = K6, s.use(e8, {
    load: {
      key: "AIzaSyA7cMwNKdFcVybV9YjvnvPhJ2sEBpoCQlQ"
    }
  }), s.mount(e), console.log("mounted");
};
export {
  ee as _
};

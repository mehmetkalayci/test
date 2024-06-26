import { resolveComponent as As, openBlock as Ht, createBlock as Yo, effectScope as Go, ref as Hs, markRaw as Zo, hasInjectionContext as Ju, inject as Te, watch as Xo, reactive as Jo, isRef as Ln, isReactive as Qo, toRaw as Qu, getCurrentScope as tf, onScopeDispose as ef, nextTick as ti, toRefs as nf, computed as St, shallowRef as sf, unref as Ye, shallowReactive as rf, defineComponent as ei, h as ni, provide as cs, createElementBlock as fe, createElementVNode as rt, normalizeClass as Ws, Fragment as of, createCommentVNode as af, createVNode as cf, renderSlot as en, normalizeStyle as lf, mergeProps as uf, toHandlers as ff, createApp as Os } from "vue";
var df = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function pf(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(s) {
    var o = Object.getOwnPropertyDescriptor(t, s);
    Object.defineProperty(n, s, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[s];
      }
    });
  }), n;
}
var mf = { exports: {} }, ot = "top", pt = "bottom", mt = "right", it = "left", In = "auto", ke = [ot, pt, mt, it], le = "start", Se = "end", si = "clippingParents", Vs = "viewport", Ae = "popper", ri = "reference", Ts = /* @__PURE__ */ ke.reduce(function(t, e) {
  return t.concat([e + "-" + le, e + "-" + Se]);
}, []), Us = /* @__PURE__ */ [].concat(ke, [In]).reduce(function(t, e) {
  return t.concat([e, e + "-" + le, e + "-" + Se]);
}, []), oi = "beforeRead", ii = "read", ai = "afterRead", ci = "beforeMain", li = "main", ui = "afterMain", fi = "beforeWrite", di = "write", hi = "afterWrite", pi = [oi, ii, ai, ci, li, ui, fi, di, hi];
function Dt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function gt(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function ue(t) {
  var e = gt(t).Element;
  return t instanceof e || t instanceof Element;
}
function vt(t) {
  var e = gt(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function zs(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = gt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function gf(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var s = e.styles[n] || {}, o = e.attributes[n] || {}, i = e.elements[n];
    !vt(i) || !Dt(i) || (Object.assign(i.style, s), Object.keys(o).forEach(function(c) {
      var u = o[c];
      u === !1 ? i.removeAttribute(c) : i.setAttribute(c, u === !0 ? "" : u);
    }));
  });
}
function _f(t) {
  var e = t.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(s) {
      var o = e.elements[s], i = e.attributes[s] || {}, c = Object.keys(e.styles.hasOwnProperty(s) ? e.styles[s] : n[s]), u = c.reduce(function(l, p) {
        return l[p] = "", l;
      }, {});
      !vt(o) || !Dt(o) || (Object.assign(o.style, u), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Ks = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: gf,
  effect: _f,
  requires: ["computeStyles"]
};
function Lt(t) {
  return t.split("-")[0];
}
var ce = Math.max, Dn = Math.min, Ce = Math.round;
function Ss() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function mi() {
  return !/^((?!chrome|android).)*safari/i.test(Ss());
}
function $e(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var s = t.getBoundingClientRect(), o = 1, i = 1;
  e && vt(t) && (o = t.offsetWidth > 0 && Ce(s.width) / t.offsetWidth || 1, i = t.offsetHeight > 0 && Ce(s.height) / t.offsetHeight || 1);
  var c = ue(t) ? gt(t) : window, u = c.visualViewport, l = !mi() && n, p = (s.left + (l && u ? u.offsetLeft : 0)) / o, f = (s.top + (l && u ? u.offsetTop : 0)) / i, d = s.width / o, g = s.height / i;
  return {
    width: d,
    height: g,
    top: f,
    right: p + d,
    bottom: f + g,
    left: p,
    x: p,
    y: f
  };
}
function qs(t) {
  var e = $e(t), n = t.offsetWidth, s = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - s) <= 1 && (s = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: s
  };
}
function gi(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && zs(n)) {
    var s = e;
    do {
      if (s && t.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function Wt(t) {
  return gt(t).getComputedStyle(t);
}
function Ef(t) {
  return ["table", "td", "th"].indexOf(Dt(t)) >= 0;
}
function Xt(t) {
  return ((ue(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function jn(t) {
  return Dt(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (zs(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xt(t)
  );
}
function eo(t) {
  return !vt(t) || // https://github.com/popperjs/popper-core/issues/837
  Wt(t).position === "fixed" ? null : t.offsetParent;
}
function yf(t) {
  var e = /firefox/i.test(Ss()), n = /Trident/i.test(Ss());
  if (n && vt(t)) {
    var s = Wt(t);
    if (s.position === "fixed")
      return null;
  }
  var o = jn(t);
  for (zs(o) && (o = o.host); vt(o) && ["html", "body"].indexOf(Dt(o)) < 0; ) {
    var i = Wt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function rn(t) {
  for (var e = gt(t), n = eo(t); n && Ef(n) && Wt(n).position === "static"; )
    n = eo(n);
  return n && (Dt(n) === "html" || Dt(n) === "body" && Wt(n).position === "static") ? e : n || yf(t) || e;
}
function Ys(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Ge(t, e, n) {
  return ce(t, Dn(e, n));
}
function bf(t, e, n) {
  var s = Ge(t, e, n);
  return s > n ? n : s;
}
function _i() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ei(t) {
  return Object.assign({}, _i(), t);
}
function yi(t, e) {
  return e.reduce(function(n, s) {
    return n[s] = t, n;
  }, {});
}
var vf = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, Ei(typeof e != "number" ? e : yi(e, ke));
};
function wf(t) {
  var e, n = t.state, s = t.name, o = t.options, i = n.elements.arrow, c = n.modifiersData.popperOffsets, u = Lt(n.placement), l = Ys(u), p = [it, mt].indexOf(u) >= 0, f = p ? "height" : "width";
  if (!(!i || !c)) {
    var d = vf(o.padding, n), g = qs(i), _ = l === "y" ? ot : it, E = l === "y" ? pt : mt, y = n.rects.reference[f] + n.rects.reference[l] - c[l] - n.rects.popper[f], O = c[l] - n.rects.reference[l], T = rn(i), S = T ? l === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, k = y / 2 - O / 2, D = d[_], x = S - g[f] - d[E], F = S / 2 - g[f] / 2 + k, j = Ge(D, F, x), I = l;
    n.modifiersData[s] = (e = {}, e[I] = j, e.centerOffset = j - F, e);
  }
}
function Af(t) {
  var e = t.state, n = t.options, s = n.element, o = s === void 0 ? "[data-popper-arrow]" : s;
  o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || gi(e.elements.popper, o) && (e.elements.arrow = o));
}
const bi = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: wf,
  effect: Af,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ne(t) {
  return t.split("-")[1];
}
var Of = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Tf(t, e) {
  var n = t.x, s = t.y, o = e.devicePixelRatio || 1;
  return {
    x: Ce(n * o) / o || 0,
    y: Ce(s * o) / o || 0
  };
}
function no(t) {
  var e, n = t.popper, s = t.popperRect, o = t.placement, i = t.variation, c = t.offsets, u = t.position, l = t.gpuAcceleration, p = t.adaptive, f = t.roundOffsets, d = t.isFixed, g = c.x, _ = g === void 0 ? 0 : g, E = c.y, y = E === void 0 ? 0 : E, O = typeof f == "function" ? f({
    x: _,
    y
  }) : {
    x: _,
    y
  };
  _ = O.x, y = O.y;
  var T = c.hasOwnProperty("x"), S = c.hasOwnProperty("y"), k = it, D = ot, x = window;
  if (p) {
    var F = rn(n), j = "clientHeight", I = "clientWidth";
    if (F === gt(n) && (F = Xt(n), Wt(F).position !== "static" && u === "absolute" && (j = "scrollHeight", I = "scrollWidth")), F = F, o === ot || (o === it || o === mt) && i === Se) {
      D = pt;
      var R = d && F === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        F[j]
      );
      y -= R - s.height, y *= l ? 1 : -1;
    }
    if (o === it || (o === ot || o === pt) && i === Se) {
      k = mt;
      var B = d && F === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        F[I]
      );
      _ -= B - s.width, _ *= l ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: u
  }, p && Of), X = f === !0 ? Tf({
    x: _,
    y
  }, gt(n)) : {
    x: _,
    y
  };
  if (_ = X.x, y = X.y, l) {
    var G;
    return Object.assign({}, W, (G = {}, G[D] = S ? "0" : "", G[k] = T ? "0" : "", G.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + _ + "px, " + y + "px)" : "translate3d(" + _ + "px, " + y + "px, 0)", G));
  }
  return Object.assign({}, W, (e = {}, e[D] = S ? y + "px" : "", e[k] = T ? _ + "px" : "", e.transform = "", e));
}
function Sf(t) {
  var e = t.state, n = t.options, s = n.gpuAcceleration, o = s === void 0 ? !0 : s, i = n.adaptive, c = i === void 0 ? !0 : i, u = n.roundOffsets, l = u === void 0 ? !0 : u, p = {
    placement: Lt(e.placement),
    variation: Ne(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, no(Object.assign({}, p, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: c,
    roundOffsets: l
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, no(Object.assign({}, p, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const Gs = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Sf,
  data: {}
};
var Tn = {
  passive: !0
};
function Cf(t) {
  var e = t.state, n = t.instance, s = t.options, o = s.scroll, i = o === void 0 ? !0 : o, c = s.resize, u = c === void 0 ? !0 : c, l = gt(e.elements.popper), p = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && p.forEach(function(f) {
    f.addEventListener("scroll", n.update, Tn);
  }), u && l.addEventListener("resize", n.update, Tn), function() {
    i && p.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Tn);
    }), u && l.removeEventListener("resize", n.update, Tn);
  };
}
const Zs = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Cf,
  data: {}
};
var $f = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $n(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return $f[e];
  });
}
var Nf = {
  start: "end",
  end: "start"
};
function so(t) {
  return t.replace(/start|end/g, function(e) {
    return Nf[e];
  });
}
function Xs(t) {
  var e = gt(t), n = e.pageXOffset, s = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: s
  };
}
function Js(t) {
  return $e(Xt(t)).left + Xs(t).scrollLeft;
}
function Pf(t, e) {
  var n = gt(t), s = Xt(t), o = n.visualViewport, i = s.clientWidth, c = s.clientHeight, u = 0, l = 0;
  if (o) {
    i = o.width, c = o.height;
    var p = mi();
    (p || !p && e === "fixed") && (u = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: u + Js(t),
    y: l
  };
}
function Rf(t) {
  var e, n = Xt(t), s = Xs(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, i = ce(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), c = ce(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -s.scrollLeft + Js(t), l = -s.scrollTop;
  return Wt(o || n).direction === "rtl" && (u += ce(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: u,
    y: l
  };
}
function Qs(t) {
  var e = Wt(t), n = e.overflow, s = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + s);
}
function vi(t) {
  return ["html", "body", "#document"].indexOf(Dt(t)) >= 0 ? t.ownerDocument.body : vt(t) && Qs(t) ? t : vi(jn(t));
}
function Ze(t, e) {
  var n;
  e === void 0 && (e = []);
  var s = vi(t), o = s === ((n = t.ownerDocument) == null ? void 0 : n.body), i = gt(s), c = o ? [i].concat(i.visualViewport || [], Qs(s) ? s : []) : s, u = e.concat(c);
  return o ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(Ze(jn(c)))
  );
}
function Cs(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function Lf(t, e) {
  var n = $e(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ro(t, e, n) {
  return e === Vs ? Cs(Pf(t, n)) : ue(e) ? Lf(e, n) : Cs(Rf(Xt(t)));
}
function Df(t) {
  var e = Ze(jn(t)), n = ["absolute", "fixed"].indexOf(Wt(t).position) >= 0, s = n && vt(t) ? rn(t) : t;
  return ue(s) ? e.filter(function(o) {
    return ue(o) && gi(o, s) && Dt(o) !== "body";
  }) : [];
}
function kf(t, e, n, s) {
  var o = e === "clippingParents" ? Df(t) : [].concat(e), i = [].concat(o, [n]), c = i[0], u = i.reduce(function(l, p) {
    var f = ro(t, p, s);
    return l.top = ce(f.top, l.top), l.right = Dn(f.right, l.right), l.bottom = Dn(f.bottom, l.bottom), l.left = ce(f.left, l.left), l;
  }, ro(t, c, s));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function wi(t) {
  var e = t.reference, n = t.element, s = t.placement, o = s ? Lt(s) : null, i = s ? Ne(s) : null, c = e.x + e.width / 2 - n.width / 2, u = e.y + e.height / 2 - n.height / 2, l;
  switch (o) {
    case ot:
      l = {
        x: c,
        y: e.y - n.height
      };
      break;
    case pt:
      l = {
        x: c,
        y: e.y + e.height
      };
      break;
    case mt:
      l = {
        x: e.x + e.width,
        y: u
      };
      break;
    case it:
      l = {
        x: e.x - n.width,
        y: u
      };
      break;
    default:
      l = {
        x: e.x,
        y: e.y
      };
  }
  var p = o ? Ys(o) : null;
  if (p != null) {
    var f = p === "y" ? "height" : "width";
    switch (i) {
      case le:
        l[p] = l[p] - (e[f] / 2 - n[f] / 2);
        break;
      case Se:
        l[p] = l[p] + (e[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function Pe(t, e) {
  e === void 0 && (e = {});
  var n = e, s = n.placement, o = s === void 0 ? t.placement : s, i = n.strategy, c = i === void 0 ? t.strategy : i, u = n.boundary, l = u === void 0 ? si : u, p = n.rootBoundary, f = p === void 0 ? Vs : p, d = n.elementContext, g = d === void 0 ? Ae : d, _ = n.altBoundary, E = _ === void 0 ? !1 : _, y = n.padding, O = y === void 0 ? 0 : y, T = Ei(typeof O != "number" ? O : yi(O, ke)), S = g === Ae ? ri : Ae, k = t.rects.popper, D = t.elements[E ? S : g], x = kf(ue(D) ? D : D.contextElement || Xt(t.elements.popper), l, f, c), F = $e(t.elements.reference), j = wi({
    reference: F,
    element: k,
    strategy: "absolute",
    placement: o
  }), I = Cs(Object.assign({}, k, j)), R = g === Ae ? I : F, B = {
    top: x.top - R.top + T.top,
    bottom: R.bottom - x.bottom + T.bottom,
    left: x.left - R.left + T.left,
    right: R.right - x.right + T.right
  }, W = t.modifiersData.offset;
  if (g === Ae && W) {
    var X = W[o];
    Object.keys(B).forEach(function(G) {
      var ut = [mt, pt].indexOf(G) >= 0 ? 1 : -1, tt = [ot, pt].indexOf(G) >= 0 ? "y" : "x";
      B[G] += X[tt] * ut;
    });
  }
  return B;
}
function xf(t, e) {
  e === void 0 && (e = {});
  var n = e, s = n.placement, o = n.boundary, i = n.rootBoundary, c = n.padding, u = n.flipVariations, l = n.allowedAutoPlacements, p = l === void 0 ? Us : l, f = Ne(s), d = f ? u ? Ts : Ts.filter(function(E) {
    return Ne(E) === f;
  }) : ke, g = d.filter(function(E) {
    return p.indexOf(E) >= 0;
  });
  g.length === 0 && (g = d);
  var _ = g.reduce(function(E, y) {
    return E[y] = Pe(t, {
      placement: y,
      boundary: o,
      rootBoundary: i,
      padding: c
    })[Lt(y)], E;
  }, {});
  return Object.keys(_).sort(function(E, y) {
    return _[E] - _[y];
  });
}
function Mf(t) {
  if (Lt(t) === In)
    return [];
  var e = $n(t);
  return [so(t), e, so(e)];
}
function If(t) {
  var e = t.state, n = t.options, s = t.name;
  if (!e.modifiersData[s]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, c = n.altAxis, u = c === void 0 ? !0 : c, l = n.fallbackPlacements, p = n.padding, f = n.boundary, d = n.rootBoundary, g = n.altBoundary, _ = n.flipVariations, E = _ === void 0 ? !0 : _, y = n.allowedAutoPlacements, O = e.options.placement, T = Lt(O), S = T === O, k = l || (S || !E ? [$n(O)] : Mf(O)), D = [O].concat(k).reduce(function(ft, at) {
      return ft.concat(Lt(at) === In ? xf(e, {
        placement: at,
        boundary: f,
        rootBoundary: d,
        padding: p,
        flipVariations: E,
        allowedAutoPlacements: y
      }) : at);
    }, []), x = e.rects.reference, F = e.rects.popper, j = /* @__PURE__ */ new Map(), I = !0, R = D[0], B = 0; B < D.length; B++) {
      var W = D[B], X = Lt(W), G = Ne(W) === le, ut = [ot, pt].indexOf(X) >= 0, tt = ut ? "width" : "height", K = Pe(e, {
        placement: W,
        boundary: f,
        rootBoundary: d,
        altBoundary: g,
        padding: p
      }), J = ut ? G ? mt : it : G ? pt : ot;
      x[tt] > F[tt] && (J = $n(J));
      var At = $n(J), _t = [];
      if (i && _t.push(K[X] <= 0), u && _t.push(K[J] <= 0, K[At] <= 0), _t.every(function(ft) {
        return ft;
      })) {
        R = W, I = !1;
        break;
      }
      j.set(W, _t);
    }
    if (I)
      for (var $t = E ? 3 : 1, xt = function(at) {
        var st = D.find(function(w) {
          var P = j.get(w);
          if (P)
            return P.slice(0, at).every(function(N) {
              return N;
            });
        });
        if (st)
          return R = st, "break";
      }, Et = $t; Et > 0; Et--) {
        var Nt = xt(Et);
        if (Nt === "break")
          break;
      }
    e.placement !== R && (e.modifiersData[s]._skip = !0, e.placement = R, e.reset = !0);
  }
}
const Ai = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: If,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function oo(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}
function io(t) {
  return [ot, mt, pt, it].some(function(e) {
    return t[e] >= 0;
  });
}
function jf(t) {
  var e = t.state, n = t.name, s = e.rects.reference, o = e.rects.popper, i = e.modifiersData.preventOverflow, c = Pe(e, {
    elementContext: "reference"
  }), u = Pe(e, {
    altBoundary: !0
  }), l = oo(c, s), p = oo(u, o, i), f = io(l), d = io(p);
  e.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: p,
    isReferenceHidden: f,
    hasPopperEscaped: d
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": d
  });
}
const Oi = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: jf
};
function Bf(t, e, n) {
  var s = Lt(t), o = [it, ot].indexOf(s) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n, c = i[0], u = i[1];
  return c = c || 0, u = (u || 0) * o, [it, mt].indexOf(s) >= 0 ? {
    x: u,
    y: c
  } : {
    x: c,
    y: u
  };
}
function Ff(t) {
  var e = t.state, n = t.options, s = t.name, o = n.offset, i = o === void 0 ? [0, 0] : o, c = Us.reduce(function(f, d) {
    return f[d] = Bf(d, e.rects, i), f;
  }, {}), u = c[e.placement], l = u.x, p = u.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += p), e.modifiersData[s] = c;
}
const Ti = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ff
};
function Hf(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = wi({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const tr = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Hf,
  data: {}
};
function Wf(t) {
  return t === "x" ? "y" : "x";
}
function Vf(t) {
  var e = t.state, n = t.options, s = t.name, o = n.mainAxis, i = o === void 0 ? !0 : o, c = n.altAxis, u = c === void 0 ? !1 : c, l = n.boundary, p = n.rootBoundary, f = n.altBoundary, d = n.padding, g = n.tether, _ = g === void 0 ? !0 : g, E = n.tetherOffset, y = E === void 0 ? 0 : E, O = Pe(e, {
    boundary: l,
    rootBoundary: p,
    padding: d,
    altBoundary: f
  }), T = Lt(e.placement), S = Ne(e.placement), k = !S, D = Ys(T), x = Wf(D), F = e.modifiersData.popperOffsets, j = e.rects.reference, I = e.rects.popper, R = typeof y == "function" ? y(Object.assign({}, e.rects, {
    placement: e.placement
  })) : y, B = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), W = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, X = {
    x: 0,
    y: 0
  };
  if (F) {
    if (i) {
      var G, ut = D === "y" ? ot : it, tt = D === "y" ? pt : mt, K = D === "y" ? "height" : "width", J = F[D], At = J + O[ut], _t = J - O[tt], $t = _ ? -I[K] / 2 : 0, xt = S === le ? j[K] : I[K], Et = S === le ? -I[K] : -j[K], Nt = e.elements.arrow, ft = _ && Nt ? qs(Nt) : {
        width: 0,
        height: 0
      }, at = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : _i(), st = at[ut], w = at[tt], P = Ge(0, j[K], ft[K]), N = k ? j[K] / 2 - $t - P - st - B.mainAxis : xt - P - st - B.mainAxis, M = k ? -j[K] / 2 + $t + P + w + B.mainAxis : Et + P + w + B.mainAxis, b = e.elements.arrow && rn(e.elements.arrow), Z = b ? D === "y" ? b.clientTop || 0 : b.clientLeft || 0 : 0, V = (G = W == null ? void 0 : W[D]) != null ? G : 0, H = J + N - V - Z, q = J + M - V, ct = Ge(_ ? Dn(At, H) : At, J, _ ? ce(_t, q) : _t);
      F[D] = ct, X[D] = ct - J;
    }
    if (u) {
      var et, dt = D === "x" ? ot : it, Me = D === "x" ? pt : mt, L = F[x], Mt = x === "y" ? "height" : "width", cn = L + O[dt], qn = L - O[Me], de = [ot, it].indexOf(T) !== -1, ln = (et = W == null ? void 0 : W[x]) != null ? et : 0, un = de ? cn : L - j[Mt] - I[Mt] - ln + B.altAxis, fn = de ? L + j[Mt] + I[Mt] - ln - B.altAxis : qn, dn = _ && de ? bf(un, L, fn) : Ge(_ ? un : cn, L, _ ? fn : qn);
      F[x] = dn, X[x] = dn - L;
    }
    e.modifiersData[s] = X;
  }
}
const Si = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Vf,
  requiresIfExists: ["offset"]
};
function Uf(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function zf(t) {
  return t === gt(t) || !vt(t) ? Xs(t) : Uf(t);
}
function Kf(t) {
  var e = t.getBoundingClientRect(), n = Ce(e.width) / t.offsetWidth || 1, s = Ce(e.height) / t.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function qf(t, e, n) {
  n === void 0 && (n = !1);
  var s = vt(e), o = vt(e) && Kf(e), i = Xt(e), c = $e(t, o, n), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (s || !s && !n) && ((Dt(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Qs(i)) && (u = zf(e)), vt(e) ? (l = $e(e, !0), l.x += e.clientLeft, l.y += e.clientTop) : i && (l.x = Js(i))), {
    x: c.left + u.scrollLeft - l.x,
    y: c.top + u.scrollTop - l.y,
    width: c.width,
    height: c.height
  };
}
function Yf(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), s = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var c = [].concat(i.requires || [], i.requiresIfExists || []);
    c.forEach(function(u) {
      if (!n.has(u)) {
        var l = e.get(u);
        l && o(l);
      }
    }), s.push(i);
  }
  return t.forEach(function(i) {
    n.has(i.name) || o(i);
  }), s;
}
function Gf(t) {
  var e = Yf(t);
  return pi.reduce(function(n, s) {
    return n.concat(e.filter(function(o) {
      return o.phase === s;
    }));
  }, []);
}
function Zf(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function Xf(t) {
  var e = t.reduce(function(n, s) {
    var o = n[s.name];
    return n[s.name] = o ? Object.assign({}, o, s, {
      options: Object.assign({}, o.options, s.options),
      data: Object.assign({}, o.data, s.data)
    }) : s, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var ao = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function co() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Bn(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, s = n === void 0 ? [] : n, o = e.defaultOptions, i = o === void 0 ? ao : o;
  return function(u, l, p) {
    p === void 0 && (p = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ao, i),
      modifiersData: {},
      elements: {
        reference: u,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], g = !1, _ = {
      state: f,
      setOptions: function(T) {
        var S = typeof T == "function" ? T(f.options) : T;
        y(), f.options = Object.assign({}, i, f.options, S), f.scrollParents = {
          reference: ue(u) ? Ze(u) : u.contextElement ? Ze(u.contextElement) : [],
          popper: Ze(l)
        };
        var k = Gf(Xf([].concat(s, f.options.modifiers)));
        return f.orderedModifiers = k.filter(function(D) {
          return D.enabled;
        }), E(), _.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var T = f.elements, S = T.reference, k = T.popper;
          if (co(S, k)) {
            f.rects = {
              reference: qf(S, rn(k), f.options.strategy === "fixed"),
              popper: qs(k)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(B) {
              return f.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var D = 0; D < f.orderedModifiers.length; D++) {
              if (f.reset === !0) {
                f.reset = !1, D = -1;
                continue;
              }
              var x = f.orderedModifiers[D], F = x.fn, j = x.options, I = j === void 0 ? {} : j, R = x.name;
              typeof F == "function" && (f = F({
                state: f,
                options: I,
                name: R,
                instance: _
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Zf(function() {
        return new Promise(function(O) {
          _.forceUpdate(), O(f);
        });
      }),
      destroy: function() {
        y(), g = !0;
      }
    };
    if (!co(u, l))
      return _;
    _.setOptions(p).then(function(O) {
      !g && p.onFirstUpdate && p.onFirstUpdate(O);
    });
    function E() {
      f.orderedModifiers.forEach(function(O) {
        var T = O.name, S = O.options, k = S === void 0 ? {} : S, D = O.effect;
        if (typeof D == "function") {
          var x = D({
            state: f,
            name: T,
            instance: _,
            options: k
          }), F = function() {
          };
          d.push(x || F);
        }
      });
    }
    function y() {
      d.forEach(function(O) {
        return O();
      }), d = [];
    }
    return _;
  };
}
var Jf = /* @__PURE__ */ Bn(), Qf = [Zs, tr, Gs, Ks], td = /* @__PURE__ */ Bn({
  defaultModifiers: Qf
}), ed = [Zs, tr, Gs, Ks, Ti, Ai, Si, bi, Oi], nd = /* @__PURE__ */ Bn({
  defaultModifiers: ed
});
const sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: ui,
  afterRead: ai,
  afterWrite: hi,
  applyStyles: Ks,
  arrow: bi,
  auto: In,
  basePlacements: ke,
  beforeMain: ci,
  beforeRead: oi,
  beforeWrite: fi,
  bottom: pt,
  clippingParents: si,
  computeStyles: Gs,
  createPopper: nd,
  createPopperBase: Jf,
  createPopperLite: td,
  detectOverflow: Pe,
  end: Se,
  eventListeners: Zs,
  flip: Ai,
  hide: Oi,
  left: it,
  main: li,
  modifierPhases: pi,
  offset: Ti,
  placements: Us,
  popper: Ae,
  popperGenerator: Bn,
  popperOffsets: tr,
  preventOverflow: Si,
  read: ii,
  reference: ri,
  right: mt,
  start: le,
  top: ot,
  variationPlacements: Ts,
  viewport: Vs,
  write: di
}, Symbol.toStringTag, { value: "Module" })), rd = /* @__PURE__ */ pf(sd);
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t, e) {
  (function(n, s) {
    t.exports = s(rd);
  })(df, function(n) {
    function s(h) {
      const r = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
      if (h) {
        for (const a in h)
          if (a !== "default") {
            const m = Object.getOwnPropertyDescriptor(h, a);
            Object.defineProperty(r, a, m.get ? m : {
              enumerable: !0,
              get: () => h[a]
            });
          }
      }
      return r.default = h, Object.freeze(r);
    }
    const o = /* @__PURE__ */ s(n), i = /* @__PURE__ */ new Map(), c = {
      set(h, r, a) {
        i.has(h) || i.set(h, /* @__PURE__ */ new Map());
        const m = i.get(h);
        if (!m.has(r) && m.size !== 0) {
          console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(m.keys())[0]}.`);
          return;
        }
        m.set(r, a);
      },
      get(h, r) {
        return i.has(h) && i.get(h).get(r) || null;
      },
      remove(h, r) {
        if (!i.has(h))
          return;
        const a = i.get(h);
        a.delete(r), a.size === 0 && i.delete(h);
      }
    }, u = 1e6, l = 1e3, p = "transitionend", f = (h) => (h && window.CSS && window.CSS.escape && (h = h.replace(/#([^\s"#']+)/g, (r, a) => `#${CSS.escape(a)}`)), h), d = (h) => h == null ? `${h}` : Object.prototype.toString.call(h).match(/\s([a-z]+)/i)[1].toLowerCase(), g = (h) => {
      do
        h += Math.floor(Math.random() * u);
      while (document.getElementById(h));
      return h;
    }, _ = (h) => {
      if (!h)
        return 0;
      let {
        transitionDuration: r,
        transitionDelay: a
      } = window.getComputedStyle(h);
      const m = Number.parseFloat(r), v = Number.parseFloat(a);
      return !m && !v ? 0 : (r = r.split(",")[0], a = a.split(",")[0], (Number.parseFloat(r) + Number.parseFloat(a)) * l);
    }, E = (h) => {
      h.dispatchEvent(new Event(p));
    }, y = (h) => !h || typeof h != "object" ? !1 : (typeof h.jquery < "u" && (h = h[0]), typeof h.nodeType < "u"), O = (h) => y(h) ? h.jquery ? h[0] : h : typeof h == "string" && h.length > 0 ? document.querySelector(f(h)) : null, T = (h) => {
      if (!y(h) || h.getClientRects().length === 0)
        return !1;
      const r = getComputedStyle(h).getPropertyValue("visibility") === "visible", a = h.closest("details:not([open])");
      if (!a)
        return r;
      if (a !== h) {
        const m = h.closest("summary");
        if (m && m.parentNode !== a || m === null)
          return !1;
      }
      return r;
    }, S = (h) => !h || h.nodeType !== Node.ELEMENT_NODE || h.classList.contains("disabled") ? !0 : typeof h.disabled < "u" ? h.disabled : h.hasAttribute("disabled") && h.getAttribute("disabled") !== "false", k = (h) => {
      if (!document.documentElement.attachShadow)
        return null;
      if (typeof h.getRootNode == "function") {
        const r = h.getRootNode();
        return r instanceof ShadowRoot ? r : null;
      }
      return h instanceof ShadowRoot ? h : h.parentNode ? k(h.parentNode) : null;
    }, D = () => {
    }, x = (h) => {
      h.offsetHeight;
    }, F = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, j = [], I = (h) => {
      document.readyState === "loading" ? (j.length || document.addEventListener("DOMContentLoaded", () => {
        for (const r of j)
          r();
      }), j.push(h)) : h();
    }, R = () => document.documentElement.dir === "rtl", B = (h) => {
      I(() => {
        const r = F();
        if (r) {
          const a = h.NAME, m = r.fn[a];
          r.fn[a] = h.jQueryInterface, r.fn[a].Constructor = h, r.fn[a].noConflict = () => (r.fn[a] = m, h.jQueryInterface);
        }
      });
    }, W = (h, r = [], a = h) => typeof h == "function" ? h(...r) : a, X = (h, r, a = !0) => {
      if (!a) {
        W(h);
        return;
      }
      const m = 5, v = _(r) + m;
      let $ = !1;
      const C = ({
        target: U
      }) => {
        U === r && ($ = !0, r.removeEventListener(p, C), W(h));
      };
      r.addEventListener(p, C), setTimeout(() => {
        $ || E(r);
      }, v);
    }, G = (h, r, a, m) => {
      const v = h.length;
      let $ = h.indexOf(r);
      return $ === -1 ? !a && m ? h[v - 1] : h[0] : ($ += a ? 1 : -1, m && ($ = ($ + v) % v), h[Math.max(0, Math.min($, v - 1))]);
    }, ut = /[^.]*(?=\..*)\.|.*/, tt = /\..*/, K = /::\d+$/, J = {};
    let At = 1;
    const _t = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, $t = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function xt(h, r) {
      return r && `${r}::${At++}` || h.uidEvent || At++;
    }
    function Et(h) {
      const r = xt(h);
      return h.uidEvent = r, J[r] = J[r] || {}, J[r];
    }
    function Nt(h, r) {
      return function a(m) {
        return Z(m, {
          delegateTarget: h
        }), a.oneOff && b.off(h, m.type, r), r.apply(h, [m]);
      };
    }
    function ft(h, r, a) {
      return function m(v) {
        const $ = h.querySelectorAll(r);
        for (let {
          target: C
        } = v; C && C !== this; C = C.parentNode)
          for (const U of $)
            if (U === C)
              return Z(v, {
                delegateTarget: C
              }), m.oneOff && b.off(h, v.type, r, a), a.apply(C, [v]);
      };
    }
    function at(h, r, a = null) {
      return Object.values(h).find((m) => m.callable === r && m.delegationSelector === a);
    }
    function st(h, r, a) {
      const m = typeof r == "string", v = m ? a : r || a;
      let $ = M(h);
      return $t.has($) || ($ = h), [m, v, $];
    }
    function w(h, r, a, m, v) {
      if (typeof r != "string" || !h)
        return;
      let [$, C, U] = st(r, a, m);
      r in _t && (C = ((Xu) => function(ve) {
        if (!ve.relatedTarget || ve.relatedTarget !== ve.delegateTarget && !ve.delegateTarget.contains(ve.relatedTarget))
          return Xu.call(this, ve);
      })(C));
      const lt = Et(h), bt = lt[U] || (lt[U] = {}), nt = at(bt, C, $ ? a : null);
      if (nt) {
        nt.oneOff = nt.oneOff && v;
        return;
      }
      const Pt = xt(C, r.replace(ut, "")), Tt = $ ? ft(h, a, C) : Nt(h, C);
      Tt.delegationSelector = $ ? a : null, Tt.callable = C, Tt.oneOff = v, Tt.uidEvent = Pt, bt[Pt] = Tt, h.addEventListener(U, Tt, $);
    }
    function P(h, r, a, m, v) {
      const $ = at(r[a], m, v);
      $ && (h.removeEventListener(a, $, !!v), delete r[a][$.uidEvent]);
    }
    function N(h, r, a, m) {
      const v = r[a] || {};
      for (const [$, C] of Object.entries(v))
        $.includes(m) && P(h, r, a, C.callable, C.delegationSelector);
    }
    function M(h) {
      return h = h.replace(tt, ""), _t[h] || h;
    }
    const b = {
      on(h, r, a, m) {
        w(h, r, a, m, !1);
      },
      one(h, r, a, m) {
        w(h, r, a, m, !0);
      },
      off(h, r, a, m) {
        if (typeof r != "string" || !h)
          return;
        const [v, $, C] = st(r, a, m), U = C !== r, lt = Et(h), bt = lt[C] || {}, nt = r.startsWith(".");
        if (typeof $ < "u") {
          if (!Object.keys(bt).length)
            return;
          P(h, lt, C, $, v ? a : null);
          return;
        }
        if (nt)
          for (const Pt of Object.keys(lt))
            N(h, lt, Pt, r.slice(1));
        for (const [Pt, Tt] of Object.entries(bt)) {
          const On = Pt.replace(K, "");
          (!U || r.includes(On)) && P(h, lt, C, Tt.callable, Tt.delegationSelector);
        }
      },
      trigger(h, r, a) {
        if (typeof r != "string" || !h)
          return null;
        const m = F(), v = M(r), $ = r !== v;
        let C = null, U = !0, lt = !0, bt = !1;
        $ && m && (C = m.Event(r, a), m(h).trigger(C), U = !C.isPropagationStopped(), lt = !C.isImmediatePropagationStopped(), bt = C.isDefaultPrevented());
        const nt = Z(new Event(r, {
          bubbles: U,
          cancelable: !0
        }), a);
        return bt && nt.preventDefault(), lt && h.dispatchEvent(nt), nt.defaultPrevented && C && C.preventDefault(), nt;
      }
    };
    function Z(h, r = {}) {
      for (const [a, m] of Object.entries(r))
        try {
          h[a] = m;
        } catch {
          Object.defineProperty(h, a, {
            configurable: !0,
            get() {
              return m;
            }
          });
        }
      return h;
    }
    function V(h) {
      if (h === "true")
        return !0;
      if (h === "false")
        return !1;
      if (h === Number(h).toString())
        return Number(h);
      if (h === "" || h === "null")
        return null;
      if (typeof h != "string")
        return h;
      try {
        return JSON.parse(decodeURIComponent(h));
      } catch {
        return h;
      }
    }
    function H(h) {
      return h.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`);
    }
    const q = {
      setDataAttribute(h, r, a) {
        h.setAttribute(`data-bs-${H(r)}`, a);
      },
      removeDataAttribute(h, r) {
        h.removeAttribute(`data-bs-${H(r)}`);
      },
      getDataAttributes(h) {
        if (!h)
          return {};
        const r = {}, a = Object.keys(h.dataset).filter((m) => m.startsWith("bs") && !m.startsWith("bsConfig"));
        for (const m of a) {
          let v = m.replace(/^bs/, "");
          v = v.charAt(0).toLowerCase() + v.slice(1, v.length), r[v] = V(h.dataset[m]);
        }
        return r;
      },
      getDataAttribute(h, r) {
        return V(h.getAttribute(`data-bs-${H(r)}`));
      }
    };
    class ct {
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
      _getConfig(r) {
        return r = this._mergeConfigObj(r), r = this._configAfterMerge(r), this._typeCheckConfig(r), r;
      }
      _configAfterMerge(r) {
        return r;
      }
      _mergeConfigObj(r, a) {
        const m = y(a) ? q.getDataAttribute(a, "config") : {};
        return {
          ...this.constructor.Default,
          ...typeof m == "object" ? m : {},
          ...y(a) ? q.getDataAttributes(a) : {},
          ...typeof r == "object" ? r : {}
        };
      }
      _typeCheckConfig(r, a = this.constructor.DefaultType) {
        for (const [m, v] of Object.entries(a)) {
          const $ = r[m], C = y($) ? "element" : d($);
          if (!new RegExp(v).test(C))
            throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${m}" provided type "${C}" but expected type "${v}".`);
        }
      }
    }
    const et = "5.3.2";
    class dt extends ct {
      constructor(r, a) {
        super(), r = O(r), r && (this._element = r, this._config = this._getConfig(a), c.set(this._element, this.constructor.DATA_KEY, this));
      }
      // Public
      dispose() {
        c.remove(this._element, this.constructor.DATA_KEY), b.off(this._element, this.constructor.EVENT_KEY);
        for (const r of Object.getOwnPropertyNames(this))
          this[r] = null;
      }
      _queueCallback(r, a, m = !0) {
        X(r, a, m);
      }
      _getConfig(r) {
        return r = this._mergeConfigObj(r, this._element), r = this._configAfterMerge(r), this._typeCheckConfig(r), r;
      }
      // Static
      static getInstance(r) {
        return c.get(O(r), this.DATA_KEY);
      }
      static getOrCreateInstance(r, a = {}) {
        return this.getInstance(r) || new this(r, typeof a == "object" ? a : null);
      }
      static get VERSION() {
        return et;
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(r) {
        return `${r}${this.EVENT_KEY}`;
      }
    }
    const Me = (h) => {
      let r = h.getAttribute("data-bs-target");
      if (!r || r === "#") {
        let a = h.getAttribute("href");
        if (!a || !a.includes("#") && !a.startsWith("."))
          return null;
        a.includes("#") && !a.startsWith("#") && (a = `#${a.split("#")[1]}`), r = a && a !== "#" ? f(a.trim()) : null;
      }
      return r;
    }, L = {
      find(h, r = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(r, h));
      },
      findOne(h, r = document.documentElement) {
        return Element.prototype.querySelector.call(r, h);
      },
      children(h, r) {
        return [].concat(...h.children).filter((a) => a.matches(r));
      },
      parents(h, r) {
        const a = [];
        let m = h.parentNode.closest(r);
        for (; m; )
          a.push(m), m = m.parentNode.closest(r);
        return a;
      },
      prev(h, r) {
        let a = h.previousElementSibling;
        for (; a; ) {
          if (a.matches(r))
            return [a];
          a = a.previousElementSibling;
        }
        return [];
      },
      // TODO: this is now unused; remove later along with prev()
      next(h, r) {
        let a = h.nextElementSibling;
        for (; a; ) {
          if (a.matches(r))
            return [a];
          a = a.nextElementSibling;
        }
        return [];
      },
      focusableChildren(h) {
        const r = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((a) => `${a}:not([tabindex^="-"])`).join(",");
        return this.find(r, h).filter((a) => !S(a) && T(a));
      },
      getSelectorFromElement(h) {
        const r = Me(h);
        return r && L.findOne(r) ? r : null;
      },
      getElementFromSelector(h) {
        const r = Me(h);
        return r ? L.findOne(r) : null;
      },
      getMultipleElementsFromSelector(h) {
        const r = Me(h);
        return r ? L.find(r) : [];
      }
    }, Mt = (h, r = "hide") => {
      const a = `click.dismiss${h.EVENT_KEY}`, m = h.NAME;
      b.on(document, a, `[data-bs-dismiss="${m}"]`, function(v) {
        if (["A", "AREA"].includes(this.tagName) && v.preventDefault(), S(this))
          return;
        const $ = L.getElementFromSelector(this) || this.closest(`.${m}`);
        h.getOrCreateInstance($)[r]();
      });
    }, cn = "alert", de = ".bs.alert", ln = `close${de}`, un = `closed${de}`, fn = "fade", dn = "show";
    class Ie extends dt {
      // Getters
      static get NAME() {
        return cn;
      }
      // Public
      close() {
        if (b.trigger(this._element, ln).defaultPrevented)
          return;
        this._element.classList.remove(dn);
        const a = this._element.classList.contains(fn);
        this._queueCallback(() => this._destroyElement(), this._element, a);
      }
      // Private
      _destroyElement() {
        this._element.remove(), b.trigger(this._element, un), this.dispose();
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const a = Ie.getOrCreateInstance(this);
          if (typeof r == "string") {
            if (a[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            a[r](this);
          }
        });
      }
    }
    Mt(Ie, "close"), B(Ie);
    const ga = "button", _a = ".bs.button", Ea = ".data-api", ya = "active", hr = '[data-bs-toggle="button"]', ba = `click${_a}${Ea}`;
    class je extends dt {
      // Getters
      static get NAME() {
        return ga;
      }
      // Public
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(ya));
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const a = je.getOrCreateInstance(this);
          r === "toggle" && a[r]();
        });
      }
    }
    b.on(document, ba, hr, (h) => {
      h.preventDefault();
      const r = h.target.closest(hr);
      je.getOrCreateInstance(r).toggle();
    }), B(je);
    const va = "swipe", he = ".bs.swipe", wa = `touchstart${he}`, Aa = `touchmove${he}`, Oa = `touchend${he}`, Ta = `pointerdown${he}`, Sa = `pointerup${he}`, Ca = "touch", $a = "pen", Na = "pointer-event", Pa = 40, Ra = {
      endCallback: null,
      leftCallback: null,
      rightCallback: null
    }, La = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)"
    };
    class hn extends ct {
      constructor(r, a) {
        super(), this._element = r, !(!r || !hn.isSupported()) && (this._config = this._getConfig(a), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
      }
      // Getters
      static get Default() {
        return Ra;
      }
      static get DefaultType() {
        return La;
      }
      static get NAME() {
        return va;
      }
      // Public
      dispose() {
        b.off(this._element, he);
      }
      // Private
      _start(r) {
        if (!this._supportPointerEvents) {
          this._deltaX = r.touches[0].clientX;
          return;
        }
        this._eventIsPointerPenTouch(r) && (this._deltaX = r.clientX);
      }
      _end(r) {
        this._eventIsPointerPenTouch(r) && (this._deltaX = r.clientX - this._deltaX), this._handleSwipe(), W(this._config.endCallback);
      }
      _move(r) {
        this._deltaX = r.touches && r.touches.length > 1 ? 0 : r.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const r = Math.abs(this._deltaX);
        if (r <= Pa)
          return;
        const a = r / this._deltaX;
        this._deltaX = 0, a && W(a > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents ? (b.on(this._element, Ta, (r) => this._start(r)), b.on(this._element, Sa, (r) => this._end(r)), this._element.classList.add(Na)) : (b.on(this._element, wa, (r) => this._start(r)), b.on(this._element, Aa, (r) => this._move(r)), b.on(this._element, Oa, (r) => this._end(r)));
      }
      _eventIsPointerPenTouch(r) {
        return this._supportPointerEvents && (r.pointerType === $a || r.pointerType === Ca);
      }
      // Static
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }
    const Da = "carousel", Vt = ".bs.carousel", pr = ".data-api", ka = "ArrowLeft", xa = "ArrowRight", Ma = 500, Be = "next", pe = "prev", me = "left", pn = "right", Ia = `slide${Vt}`, Yn = `slid${Vt}`, ja = `keydown${Vt}`, Ba = `mouseenter${Vt}`, Fa = `mouseleave${Vt}`, Ha = `dragstart${Vt}`, Wa = `load${Vt}${pr}`, Va = `click${Vt}${pr}`, mr = "carousel", mn = "active", Ua = "slide", za = "carousel-item-end", Ka = "carousel-item-start", qa = "carousel-item-next", Ya = "carousel-item-prev", gr = ".active", _r = ".carousel-item", Ga = gr + _r, Za = ".carousel-item img", Xa = ".carousel-indicators", Ja = "[data-bs-slide], [data-bs-slide-to]", Qa = '[data-bs-ride="carousel"]', tc = {
      [ka]: pn,
      [xa]: me
    }, ec = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0
    }, nc = {
      interval: "(number|boolean)",
      // TODO:v6 remove boolean support
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean"
    };
    class ge extends dt {
      constructor(r, a) {
        super(r, a), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = L.findOne(Xa, this._element), this._addEventListeners(), this._config.ride === mr && this.cycle();
      }
      // Getters
      static get Default() {
        return ec;
      }
      static get DefaultType() {
        return nc;
      }
      static get NAME() {
        return Da;
      }
      // Public
      next() {
        this._slide(Be);
      }
      nextWhenVisible() {
        !document.hidden && T(this._element) && this.next();
      }
      prev() {
        this._slide(pe);
      }
      pause() {
        this._isSliding && E(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
      }
      _maybeEnableCycle() {
        if (this._config.ride) {
          if (this._isSliding) {
            b.one(this._element, Yn, () => this.cycle());
            return;
          }
          this.cycle();
        }
      }
      to(r) {
        const a = this._getItems();
        if (r > a.length - 1 || r < 0)
          return;
        if (this._isSliding) {
          b.one(this._element, Yn, () => this.to(r));
          return;
        }
        const m = this._getItemIndex(this._getActive());
        if (m === r)
          return;
        const v = r > m ? Be : pe;
        this._slide(v, a[r]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      // Private
      _configAfterMerge(r) {
        return r.defaultInterval = r.interval, r;
      }
      _addEventListeners() {
        this._config.keyboard && b.on(this._element, ja, (r) => this._keydown(r)), this._config.pause === "hover" && (b.on(this._element, Ba, () => this.pause()), b.on(this._element, Fa, () => this._maybeEnableCycle())), this._config.touch && hn.isSupported() && this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const m of L.find(Za, this._element))
          b.on(m, Ha, (v) => v.preventDefault());
        const a = {
          leftCallback: () => this._slide(this._directionToOrder(me)),
          rightCallback: () => this._slide(this._directionToOrder(pn)),
          endCallback: () => {
            this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Ma + this._config.interval));
          }
        };
        this._swipeHelper = new hn(this._element, a);
      }
      _keydown(r) {
        if (/input|textarea/i.test(r.target.tagName))
          return;
        const a = tc[r.key];
        a && (r.preventDefault(), this._slide(this._directionToOrder(a)));
      }
      _getItemIndex(r) {
        return this._getItems().indexOf(r);
      }
      _setActiveIndicatorElement(r) {
        if (!this._indicatorsElement)
          return;
        const a = L.findOne(gr, this._indicatorsElement);
        a.classList.remove(mn), a.removeAttribute("aria-current");
        const m = L.findOne(`[data-bs-slide-to="${r}"]`, this._indicatorsElement);
        m && (m.classList.add(mn), m.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const r = this._activeElement || this._getActive();
        if (!r)
          return;
        const a = Number.parseInt(r.getAttribute("data-bs-interval"), 10);
        this._config.interval = a || this._config.defaultInterval;
      }
      _slide(r, a = null) {
        if (this._isSliding)
          return;
        const m = this._getActive(), v = r === Be, $ = a || G(this._getItems(), m, v, this._config.wrap);
        if ($ === m)
          return;
        const C = this._getItemIndex($), U = (On) => b.trigger(this._element, On, {
          relatedTarget: $,
          direction: this._orderToDirection(r),
          from: this._getItemIndex(m),
          to: C
        });
        if (U(Ia).defaultPrevented || !m || !$)
          return;
        const bt = !!this._interval;
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(C), this._activeElement = $;
        const nt = v ? Ka : za, Pt = v ? qa : Ya;
        $.classList.add(Pt), x($), m.classList.add(nt), $.classList.add(nt);
        const Tt = () => {
          $.classList.remove(nt, Pt), $.classList.add(mn), m.classList.remove(mn, Pt, nt), this._isSliding = !1, U(Yn);
        };
        this._queueCallback(Tt, m, this._isAnimated()), bt && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains(Ua);
      }
      _getActive() {
        return L.findOne(Ga, this._element);
      }
      _getItems() {
        return L.find(_r, this._element);
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
      _directionToOrder(r) {
        return R() ? r === me ? pe : Be : r === me ? Be : pe;
      }
      _orderToDirection(r) {
        return R() ? r === pe ? me : pn : r === pe ? pn : me;
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const a = ge.getOrCreateInstance(this, r);
          if (typeof r == "number") {
            a.to(r);
            return;
          }
          if (typeof r == "string") {
            if (a[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            a[r]();
          }
        });
      }
    }
    b.on(document, Va, Ja, function(h) {
      const r = L.getElementFromSelector(this);
      if (!r || !r.classList.contains(mr))
        return;
      h.preventDefault();
      const a = ge.getOrCreateInstance(r), m = this.getAttribute("data-bs-slide-to");
      if (m) {
        a.to(m), a._maybeEnableCycle();
        return;
      }
      if (q.getDataAttribute(this, "slide") === "next") {
        a.next(), a._maybeEnableCycle();
        return;
      }
      a.prev(), a._maybeEnableCycle();
    }), b.on(window, Wa, () => {
      const h = L.find(Qa);
      for (const r of h)
        ge.getOrCreateInstance(r);
    }), B(ge);
    const sc = "collapse", Fe = ".bs.collapse", rc = ".data-api", oc = `show${Fe}`, ic = `shown${Fe}`, ac = `hide${Fe}`, cc = `hidden${Fe}`, lc = `click${Fe}${rc}`, Gn = "show", _e = "collapse", gn = "collapsing", uc = "collapsed", fc = `:scope .${_e} .${_e}`, dc = "collapse-horizontal", hc = "width", pc = "height", mc = ".collapse.show, .collapse.collapsing", Zn = '[data-bs-toggle="collapse"]', gc = {
      parent: null,
      toggle: !0
    }, _c = {
      parent: "(null|element)",
      toggle: "boolean"
    };
    class Ee extends dt {
      constructor(r, a) {
        super(r, a), this._isTransitioning = !1, this._triggerArray = [];
        const m = L.find(Zn);
        for (const v of m) {
          const $ = L.getSelectorFromElement(v), C = L.find($).filter((U) => U === this._element);
          $ !== null && C.length && this._triggerArray.push(v);
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
      }
      // Getters
      static get Default() {
        return gc;
      }
      static get DefaultType() {
        return _c;
      }
      static get NAME() {
        return sc;
      }
      // Public
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown())
          return;
        let r = [];
        if (this._config.parent && (r = this._getFirstLevelChildren(mc).filter((U) => U !== this._element).map((U) => Ee.getOrCreateInstance(U, {
          toggle: !1
        }))), r.length && r[0]._isTransitioning || b.trigger(this._element, oc).defaultPrevented)
          return;
        for (const U of r)
          U.hide();
        const m = this._getDimension();
        this._element.classList.remove(_e), this._element.classList.add(gn), this._element.style[m] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        const v = () => {
          this._isTransitioning = !1, this._element.classList.remove(gn), this._element.classList.add(_e, Gn), this._element.style[m] = "", b.trigger(this._element, ic);
        }, C = `scroll${m[0].toUpperCase() + m.slice(1)}`;
        this._queueCallback(v, this._element, !0), this._element.style[m] = `${this._element[C]}px`;
      }
      hide() {
        if (this._isTransitioning || !this._isShown() || b.trigger(this._element, ac).defaultPrevented)
          return;
        const a = this._getDimension();
        this._element.style[a] = `${this._element.getBoundingClientRect()[a]}px`, x(this._element), this._element.classList.add(gn), this._element.classList.remove(_e, Gn);
        for (const v of this._triggerArray) {
          const $ = L.getElementFromSelector(v);
          $ && !this._isShown($) && this._addAriaAndCollapsedClass([v], !1);
        }
        this._isTransitioning = !0;
        const m = () => {
          this._isTransitioning = !1, this._element.classList.remove(gn), this._element.classList.add(_e), b.trigger(this._element, cc);
        };
        this._element.style[a] = "", this._queueCallback(m, this._element, !0);
      }
      _isShown(r = this._element) {
        return r.classList.contains(Gn);
      }
      // Private
      _configAfterMerge(r) {
        return r.toggle = !!r.toggle, r.parent = O(r.parent), r;
      }
      _getDimension() {
        return this._element.classList.contains(dc) ? hc : pc;
      }
      _initializeChildren() {
        if (!this._config.parent)
          return;
        const r = this._getFirstLevelChildren(Zn);
        for (const a of r) {
          const m = L.getElementFromSelector(a);
          m && this._addAriaAndCollapsedClass([a], this._isShown(m));
        }
      }
      _getFirstLevelChildren(r) {
        const a = L.find(fc, this._config.parent);
        return L.find(r, this._config.parent).filter((m) => !a.includes(m));
      }
      _addAriaAndCollapsedClass(r, a) {
        if (r.length)
          for (const m of r)
            m.classList.toggle(uc, !a), m.setAttribute("aria-expanded", a);
      }
      // Static
      static jQueryInterface(r) {
        const a = {};
        return typeof r == "string" && /show|hide/.test(r) && (a.toggle = !1), this.each(function() {
          const m = Ee.getOrCreateInstance(this, a);
          if (typeof r == "string") {
            if (typeof m[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            m[r]();
          }
        });
      }
    }
    b.on(document, lc, Zn, function(h) {
      (h.target.tagName === "A" || h.delegateTarget && h.delegateTarget.tagName === "A") && h.preventDefault();
      for (const r of L.getMultipleElementsFromSelector(this))
        Ee.getOrCreateInstance(r, {
          toggle: !1
        }).toggle();
    }), B(Ee);
    const Er = "dropdown", te = ".bs.dropdown", Xn = ".data-api", Ec = "Escape", yr = "Tab", yc = "ArrowUp", br = "ArrowDown", bc = 2, vc = `hide${te}`, wc = `hidden${te}`, Ac = `show${te}`, Oc = `shown${te}`, vr = `click${te}${Xn}`, wr = `keydown${te}${Xn}`, Tc = `keyup${te}${Xn}`, ye = "show", Sc = "dropup", Cc = "dropend", $c = "dropstart", Nc = "dropup-center", Pc = "dropdown-center", ee = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Rc = `${ee}.${ye}`, _n = ".dropdown-menu", Lc = ".navbar", Dc = ".navbar-nav", kc = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", xc = R() ? "top-end" : "top-start", Mc = R() ? "top-start" : "top-end", Ic = R() ? "bottom-end" : "bottom-start", jc = R() ? "bottom-start" : "bottom-end", Bc = R() ? "left-start" : "right-start", Fc = R() ? "right-start" : "left-start", Hc = "top", Wc = "bottom", Vc = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    }, Uc = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };
    class Ot extends dt {
      constructor(r, a) {
        super(r, a), this._popper = null, this._parent = this._element.parentNode, this._menu = L.next(this._element, _n)[0] || L.prev(this._element, _n)[0] || L.findOne(_n, this._parent), this._inNavbar = this._detectNavbar();
      }
      // Getters
      static get Default() {
        return Vc;
      }
      static get DefaultType() {
        return Uc;
      }
      static get NAME() {
        return Er;
      }
      // Public
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (S(this._element) || this._isShown())
          return;
        const r = {
          relatedTarget: this._element
        };
        if (!b.trigger(this._element, Ac, r).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(Dc))
            for (const m of [].concat(...document.body.children))
              b.on(m, "mouseover", D);
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ye), this._element.classList.add(ye), b.trigger(this._element, Oc, r);
        }
      }
      hide() {
        if (S(this._element) || !this._isShown())
          return;
        const r = {
          relatedTarget: this._element
        };
        this._completeHide(r);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
      // Private
      _completeHide(r) {
        if (!b.trigger(this._element, vc, r).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const m of [].concat(...document.body.children))
              b.off(m, "mouseover", D);
          this._popper && this._popper.destroy(), this._menu.classList.remove(ye), this._element.classList.remove(ye), this._element.setAttribute("aria-expanded", "false"), q.removeDataAttribute(this._menu, "popper"), b.trigger(this._element, wc, r);
        }
      }
      _getConfig(r) {
        if (r = super._getConfig(r), typeof r.reference == "object" && !y(r.reference) && typeof r.reference.getBoundingClientRect != "function")
          throw new TypeError(`${Er.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return r;
      }
      _createPopper() {
        if (typeof o > "u")
          throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let r = this._element;
        this._config.reference === "parent" ? r = this._parent : y(this._config.reference) ? r = O(this._config.reference) : typeof this._config.reference == "object" && (r = this._config.reference);
        const a = this._getPopperConfig();
        this._popper = o.createPopper(r, this._menu, a);
      }
      _isShown() {
        return this._menu.classList.contains(ye);
      }
      _getPlacement() {
        const r = this._parent;
        if (r.classList.contains(Cc))
          return Bc;
        if (r.classList.contains($c))
          return Fc;
        if (r.classList.contains(Nc))
          return Hc;
        if (r.classList.contains(Pc))
          return Wc;
        const a = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return r.classList.contains(Sc) ? a ? Mc : xc : a ? jc : Ic;
      }
      _detectNavbar() {
        return this._element.closest(Lc) !== null;
      }
      _getOffset() {
        const {
          offset: r
        } = this._config;
        return typeof r == "string" ? r.split(",").map((a) => Number.parseInt(a, 10)) : typeof r == "function" ? (a) => r(a, this._element) : r;
      }
      _getPopperConfig() {
        const r = {
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
        return (this._inNavbar || this._config.display === "static") && (q.setDataAttribute(this._menu, "popper", "static"), r.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), {
          ...r,
          ...W(this._config.popperConfig, [r])
        };
      }
      _selectMenuItem({
        key: r,
        target: a
      }) {
        const m = L.find(kc, this._menu).filter((v) => T(v));
        m.length && G(m, a, r === br, !m.includes(a)).focus();
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const a = Ot.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (typeof a[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            a[r]();
          }
        });
      }
      static clearMenus(r) {
        if (r.button === bc || r.type === "keyup" && r.key !== yr)
          return;
        const a = L.find(Rc);
        for (const m of a) {
          const v = Ot.getInstance(m);
          if (!v || v._config.autoClose === !1)
            continue;
          const $ = r.composedPath(), C = $.includes(v._menu);
          if ($.includes(v._element) || v._config.autoClose === "inside" && !C || v._config.autoClose === "outside" && C || v._menu.contains(r.target) && (r.type === "keyup" && r.key === yr || /input|select|option|textarea|form/i.test(r.target.tagName)))
            continue;
          const U = {
            relatedTarget: v._element
          };
          r.type === "click" && (U.clickEvent = r), v._completeHide(U);
        }
      }
      static dataApiKeydownHandler(r) {
        const a = /input|textarea/i.test(r.target.tagName), m = r.key === Ec, v = [yc, br].includes(r.key);
        if (!v && !m || a && !m)
          return;
        r.preventDefault();
        const $ = this.matches(ee) ? this : L.prev(this, ee)[0] || L.next(this, ee)[0] || L.findOne(ee, r.delegateTarget.parentNode), C = Ot.getOrCreateInstance($);
        if (v) {
          r.stopPropagation(), C.show(), C._selectMenuItem(r);
          return;
        }
        C._isShown() && (r.stopPropagation(), C.hide(), $.focus());
      }
    }
    b.on(document, wr, ee, Ot.dataApiKeydownHandler), b.on(document, wr, _n, Ot.dataApiKeydownHandler), b.on(document, vr, Ot.clearMenus), b.on(document, Tc, Ot.clearMenus), b.on(document, vr, ee, function(h) {
      h.preventDefault(), Ot.getOrCreateInstance(this).toggle();
    }), B(Ot);
    const Ar = "backdrop", zc = "fade", Or = "show", Tr = `mousedown.bs.${Ar}`, Kc = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      // if false, we use the backdrop helper without adding any element to the dom
      rootElement: "body"
      // give the choice to place backdrop under different elements
    }, qc = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)"
    };
    class Sr extends ct {
      constructor(r) {
        super(), this._config = this._getConfig(r), this._isAppended = !1, this._element = null;
      }
      // Getters
      static get Default() {
        return Kc;
      }
      static get DefaultType() {
        return qc;
      }
      static get NAME() {
        return Ar;
      }
      // Public
      show(r) {
        if (!this._config.isVisible) {
          W(r);
          return;
        }
        this._append();
        const a = this._getElement();
        this._config.isAnimated && x(a), a.classList.add(Or), this._emulateAnimation(() => {
          W(r);
        });
      }
      hide(r) {
        if (!this._config.isVisible) {
          W(r);
          return;
        }
        this._getElement().classList.remove(Or), this._emulateAnimation(() => {
          this.dispose(), W(r);
        });
      }
      dispose() {
        this._isAppended && (b.off(this._element, Tr), this._element.remove(), this._isAppended = !1);
      }
      // Private
      _getElement() {
        if (!this._element) {
          const r = document.createElement("div");
          r.className = this._config.className, this._config.isAnimated && r.classList.add(zc), this._element = r;
        }
        return this._element;
      }
      _configAfterMerge(r) {
        return r.rootElement = O(r.rootElement), r;
      }
      _append() {
        if (this._isAppended)
          return;
        const r = this._getElement();
        this._config.rootElement.append(r), b.on(r, Tr, () => {
          W(this._config.clickCallback);
        }), this._isAppended = !0;
      }
      _emulateAnimation(r) {
        X(r, this._getElement(), this._config.isAnimated);
      }
    }
    const Yc = "focustrap", En = ".bs.focustrap", Gc = `focusin${En}`, Zc = `keydown.tab${En}`, Xc = "Tab", Jc = "forward", Cr = "backward", Qc = {
      autofocus: !0,
      trapElement: null
      // The element to trap focus inside of
    }, tl = {
      autofocus: "boolean",
      trapElement: "element"
    };
    class $r extends ct {
      constructor(r) {
        super(), this._config = this._getConfig(r), this._isActive = !1, this._lastTabNavDirection = null;
      }
      // Getters
      static get Default() {
        return Qc;
      }
      static get DefaultType() {
        return tl;
      }
      static get NAME() {
        return Yc;
      }
      // Public
      activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), b.off(document, En), b.on(document, Gc, (r) => this._handleFocusin(r)), b.on(document, Zc, (r) => this._handleKeydown(r)), this._isActive = !0);
      }
      deactivate() {
        this._isActive && (this._isActive = !1, b.off(document, En));
      }
      // Private
      _handleFocusin(r) {
        const {
          trapElement: a
        } = this._config;
        if (r.target === document || r.target === a || a.contains(r.target))
          return;
        const m = L.focusableChildren(a);
        m.length === 0 ? a.focus() : this._lastTabNavDirection === Cr ? m[m.length - 1].focus() : m[0].focus();
      }
      _handleKeydown(r) {
        r.key === Xc && (this._lastTabNavDirection = r.shiftKey ? Cr : Jc);
      }
    }
    const Nr = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Pr = ".sticky-top", yn = "padding-right", Rr = "margin-right";
    class Jn {
      constructor() {
        this._element = document.body;
      }
      // Public
      getWidth() {
        const r = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - r);
      }
      hide() {
        const r = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, yn, (a) => a + r), this._setElementAttributes(Nr, yn, (a) => a + r), this._setElementAttributes(Pr, Rr, (a) => a - r);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, yn), this._resetElementAttributes(Nr, yn), this._resetElementAttributes(Pr, Rr);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      // Private
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
      _setElementAttributes(r, a, m) {
        const v = this.getWidth(), $ = (C) => {
          if (C !== this._element && window.innerWidth > C.clientWidth + v)
            return;
          this._saveInitialAttribute(C, a);
          const U = window.getComputedStyle(C).getPropertyValue(a);
          C.style.setProperty(a, `${m(Number.parseFloat(U))}px`);
        };
        this._applyManipulationCallback(r, $);
      }
      _saveInitialAttribute(r, a) {
        const m = r.style.getPropertyValue(a);
        m && q.setDataAttribute(r, a, m);
      }
      _resetElementAttributes(r, a) {
        const m = (v) => {
          const $ = q.getDataAttribute(v, a);
          if ($ === null) {
            v.style.removeProperty(a);
            return;
          }
          q.removeDataAttribute(v, a), v.style.setProperty(a, $);
        };
        this._applyManipulationCallback(r, m);
      }
      _applyManipulationCallback(r, a) {
        if (y(r)) {
          a(r);
          return;
        }
        for (const m of L.find(r, this._element))
          a(m);
      }
    }
    const el = "modal", yt = ".bs.modal", nl = ".data-api", sl = "Escape", rl = `hide${yt}`, ol = `hidePrevented${yt}`, Lr = `hidden${yt}`, Dr = `show${yt}`, il = `shown${yt}`, al = `resize${yt}`, cl = `click.dismiss${yt}`, ll = `mousedown.dismiss${yt}`, ul = `keydown.dismiss${yt}`, fl = `click${yt}${nl}`, kr = "modal-open", dl = "fade", xr = "show", Qn = "modal-static", hl = ".modal.show", pl = ".modal-dialog", ml = ".modal-body", gl = '[data-bs-toggle="modal"]', _l = {
      backdrop: !0,
      focus: !0,
      keyboard: !0
    }, El = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
    class ne extends dt {
      constructor(r, a) {
        super(r, a), this._dialog = L.findOne(pl, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Jn(), this._addEventListeners();
      }
      // Getters
      static get Default() {
        return _l;
      }
      static get DefaultType() {
        return El;
      }
      static get NAME() {
        return el;
      }
      // Public
      toggle(r) {
        return this._isShown ? this.hide() : this.show(r);
      }
      show(r) {
        this._isShown || this._isTransitioning || b.trigger(this._element, Dr, {
          relatedTarget: r
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(kr), this._adjustDialog(), this._backdrop.show(() => this._showElement(r)));
      }
      hide() {
        !this._isShown || this._isTransitioning || b.trigger(this._element, rl).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(xr), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
      }
      dispose() {
        b.off(window, yt), b.off(this._dialog, yt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      // Private
      _initializeBackDrop() {
        return new Sr({
          isVisible: !!this._config.backdrop,
          // 'static' option will be translated to true, and booleans will keep their value,
          isAnimated: this._isAnimated()
        });
      }
      _initializeFocusTrap() {
        return new $r({
          trapElement: this._element
        });
      }
      _showElement(r) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const a = L.findOne(ml, this._dialog);
        a && (a.scrollTop = 0), x(this._element), this._element.classList.add(xr);
        const m = () => {
          this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, b.trigger(this._element, il, {
            relatedTarget: r
          });
        };
        this._queueCallback(m, this._dialog, this._isAnimated());
      }
      _addEventListeners() {
        b.on(this._element, ul, (r) => {
          if (r.key === sl) {
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            this._triggerBackdropTransition();
          }
        }), b.on(window, al, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }), b.on(this._element, ll, (r) => {
          b.one(this._element, cl, (a) => {
            if (!(this._element !== r.target || this._element !== a.target)) {
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
          document.body.classList.remove(kr), this._resetAdjustments(), this._scrollBar.reset(), b.trigger(this._element, Lr);
        });
      }
      _isAnimated() {
        return this._element.classList.contains(dl);
      }
      _triggerBackdropTransition() {
        if (b.trigger(this._element, ol).defaultPrevented)
          return;
        const a = this._element.scrollHeight > document.documentElement.clientHeight, m = this._element.style.overflowY;
        m === "hidden" || this._element.classList.contains(Qn) || (a || (this._element.style.overflowY = "hidden"), this._element.classList.add(Qn), this._queueCallback(() => {
          this._element.classList.remove(Qn), this._queueCallback(() => {
            this._element.style.overflowY = m;
          }, this._dialog);
        }, this._dialog), this._element.focus());
      }
      /**
       * The following methods are used to handle overflowing modals
       */
      _adjustDialog() {
        const r = this._element.scrollHeight > document.documentElement.clientHeight, a = this._scrollBar.getWidth(), m = a > 0;
        if (m && !r) {
          const v = R() ? "paddingLeft" : "paddingRight";
          this._element.style[v] = `${a}px`;
        }
        if (!m && r) {
          const v = R() ? "paddingRight" : "paddingLeft";
          this._element.style[v] = `${a}px`;
        }
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
      // Static
      static jQueryInterface(r, a) {
        return this.each(function() {
          const m = ne.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (typeof m[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            m[r](a);
          }
        });
      }
    }
    b.on(document, fl, gl, function(h) {
      const r = L.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && h.preventDefault(), b.one(r, Dr, (v) => {
        v.defaultPrevented || b.one(r, Lr, () => {
          T(this) && this.focus();
        });
      });
      const a = L.findOne(hl);
      a && ne.getInstance(a).hide(), ne.getOrCreateInstance(r).toggle(this);
    }), Mt(ne), B(ne);
    const yl = "offcanvas", It = ".bs.offcanvas", Mr = ".data-api", bl = `load${It}${Mr}`, vl = "Escape", Ir = "show", jr = "showing", Br = "hiding", wl = "offcanvas-backdrop", Fr = ".offcanvas.show", Al = `show${It}`, Ol = `shown${It}`, Tl = `hide${It}`, Hr = `hidePrevented${It}`, Wr = `hidden${It}`, Sl = `resize${It}`, Cl = `click${It}${Mr}`, $l = `keydown.dismiss${It}`, Nl = '[data-bs-toggle="offcanvas"]', Pl = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    }, Rl = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean"
    };
    class jt extends dt {
      constructor(r, a) {
        super(r, a), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
      }
      // Getters
      static get Default() {
        return Pl;
      }
      static get DefaultType() {
        return Rl;
      }
      static get NAME() {
        return yl;
      }
      // Public
      toggle(r) {
        return this._isShown ? this.hide() : this.show(r);
      }
      show(r) {
        if (this._isShown || b.trigger(this._element, Al, {
          relatedTarget: r
        }).defaultPrevented)
          return;
        this._isShown = !0, this._backdrop.show(), this._config.scroll || new Jn().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(jr);
        const m = () => {
          (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Ir), this._element.classList.remove(jr), b.trigger(this._element, Ol, {
            relatedTarget: r
          });
        };
        this._queueCallback(m, this._element, !0);
      }
      hide() {
        if (!this._isShown || b.trigger(this._element, Tl).defaultPrevented)
          return;
        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Br), this._backdrop.hide();
        const a = () => {
          this._element.classList.remove(Ir, Br), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Jn().reset(), b.trigger(this._element, Wr);
        };
        this._queueCallback(a, this._element, !0);
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      // Private
      _initializeBackDrop() {
        const r = () => {
          if (this._config.backdrop === "static") {
            b.trigger(this._element, Hr);
            return;
          }
          this.hide();
        }, a = !!this._config.backdrop;
        return new Sr({
          className: wl,
          isVisible: a,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: a ? r : null
        });
      }
      _initializeFocusTrap() {
        return new $r({
          trapElement: this._element
        });
      }
      _addEventListeners() {
        b.on(this._element, $l, (r) => {
          if (r.key === vl) {
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            b.trigger(this._element, Hr);
          }
        });
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const a = jt.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (a[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            a[r](this);
          }
        });
      }
    }
    b.on(document, Cl, Nl, function(h) {
      const r = L.getElementFromSelector(this);
      if (["A", "AREA"].includes(this.tagName) && h.preventDefault(), S(this))
        return;
      b.one(r, Wr, () => {
        T(this) && this.focus();
      });
      const a = L.findOne(Fr);
      a && a !== r && jt.getInstance(a).hide(), jt.getOrCreateInstance(r).toggle(this);
    }), b.on(window, bl, () => {
      for (const h of L.find(Fr))
        jt.getOrCreateInstance(h).show();
    }), b.on(window, Sl, () => {
      for (const h of L.find("[aria-modal][class*=show][class*=offcanvas-]"))
        getComputedStyle(h).position !== "fixed" && jt.getOrCreateInstance(h).hide();
    }), Mt(jt), B(jt);
    const Vr = {
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
    }, Ll = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Dl = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, kl = (h, r) => {
      const a = h.nodeName.toLowerCase();
      return r.includes(a) ? Ll.has(a) ? !!Dl.test(h.nodeValue) : !0 : r.filter((m) => m instanceof RegExp).some((m) => m.test(a));
    };
    function xl(h, r, a) {
      if (!h.length)
        return h;
      if (a && typeof a == "function")
        return a(h);
      const v = new window.DOMParser().parseFromString(h, "text/html"), $ = [].concat(...v.body.querySelectorAll("*"));
      for (const C of $) {
        const U = C.nodeName.toLowerCase();
        if (!Object.keys(r).includes(U)) {
          C.remove();
          continue;
        }
        const lt = [].concat(...C.attributes), bt = [].concat(r["*"] || [], r[U] || []);
        for (const nt of lt)
          kl(nt, bt) || C.removeAttribute(nt.nodeName);
      }
      return v.body.innerHTML;
    }
    const Ml = "TemplateFactory", Il = {
      allowList: Vr,
      content: {},
      // { selector : text ,  selector2 : text2 , }
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>"
    }, jl = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string"
    }, Bl = {
      entry: "(string|element|function|null)",
      selector: "(string|element)"
    };
    class Fl extends ct {
      constructor(r) {
        super(), this._config = this._getConfig(r);
      }
      // Getters
      static get Default() {
        return Il;
      }
      static get DefaultType() {
        return jl;
      }
      static get NAME() {
        return Ml;
      }
      // Public
      getContent() {
        return Object.values(this._config.content).map((r) => this._resolvePossibleFunction(r)).filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(r) {
        return this._checkContent(r), this._config.content = {
          ...this._config.content,
          ...r
        }, this;
      }
      toHtml() {
        const r = document.createElement("div");
        r.innerHTML = this._maybeSanitize(this._config.template);
        for (const [v, $] of Object.entries(this._config.content))
          this._setContent(r, $, v);
        const a = r.children[0], m = this._resolvePossibleFunction(this._config.extraClass);
        return m && a.classList.add(...m.split(" ")), a;
      }
      // Private
      _typeCheckConfig(r) {
        super._typeCheckConfig(r), this._checkContent(r.content);
      }
      _checkContent(r) {
        for (const [a, m] of Object.entries(r))
          super._typeCheckConfig({
            selector: a,
            entry: m
          }, Bl);
      }
      _setContent(r, a, m) {
        const v = L.findOne(m, r);
        if (v) {
          if (a = this._resolvePossibleFunction(a), !a) {
            v.remove();
            return;
          }
          if (y(a)) {
            this._putElementInTemplate(O(a), v);
            return;
          }
          if (this._config.html) {
            v.innerHTML = this._maybeSanitize(a);
            return;
          }
          v.textContent = a;
        }
      }
      _maybeSanitize(r) {
        return this._config.sanitize ? xl(r, this._config.allowList, this._config.sanitizeFn) : r;
      }
      _resolvePossibleFunction(r) {
        return W(r, [this]);
      }
      _putElementInTemplate(r, a) {
        if (this._config.html) {
          a.innerHTML = "", a.append(r);
          return;
        }
        a.textContent = r.textContent;
      }
    }
    const Hl = "tooltip", Wl = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ts = "fade", Vl = "modal", bn = "show", Ul = ".tooltip-inner", Ur = `.${Vl}`, zr = "hide.bs.modal", He = "hover", es = "focus", zl = "click", Kl = "manual", ql = "hide", Yl = "hidden", Gl = "show", Zl = "shown", Xl = "inserted", Jl = "click", Ql = "focusin", tu = "focusout", eu = "mouseenter", nu = "mouseleave", su = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: R() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: R() ? "right" : "left"
    }, ru = {
      allowList: Vr,
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
    }, ou = {
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
    class se extends dt {
      constructor(r, a) {
        if (typeof o > "u")
          throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(r, a), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
      }
      // Getters
      static get Default() {
        return ru;
      }
      static get DefaultType() {
        return ou;
      }
      static get NAME() {
        return Hl;
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
        clearTimeout(this._timeout), b.off(this._element.closest(Ur), zr, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled))
          return;
        const r = b.trigger(this._element, this.constructor.eventName(Gl)), m = (k(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (r.defaultPrevented || !m)
          return;
        this._disposePopper();
        const v = this._getTipElement();
        this._element.setAttribute("aria-describedby", v.getAttribute("id"));
        const {
          container: $
        } = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || ($.append(v), b.trigger(this._element, this.constructor.eventName(Xl))), this._popper = this._createPopper(v), v.classList.add(bn), "ontouchstart" in document.documentElement)
          for (const U of [].concat(...document.body.children))
            b.on(U, "mouseover", D);
        const C = () => {
          b.trigger(this._element, this.constructor.eventName(Zl)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
        };
        this._queueCallback(C, this.tip, this._isAnimated());
      }
      hide() {
        if (!this._isShown() || b.trigger(this._element, this.constructor.eventName(ql)).defaultPrevented)
          return;
        if (this._getTipElement().classList.remove(bn), "ontouchstart" in document.documentElement)
          for (const v of [].concat(...document.body.children))
            b.off(v, "mouseover", D);
        this._activeTrigger[zl] = !1, this._activeTrigger[es] = !1, this._activeTrigger[He] = !1, this._isHovered = null;
        const m = () => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), b.trigger(this._element, this.constructor.eventName(Yl)));
        };
        this._queueCallback(m, this.tip, this._isAnimated());
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
      _createTipElement(r) {
        const a = this._getTemplateFactory(r).toHtml();
        if (!a)
          return null;
        a.classList.remove(ts, bn), a.classList.add(`bs-${this.constructor.NAME}-auto`);
        const m = g(this.constructor.NAME).toString();
        return a.setAttribute("id", m), this._isAnimated() && a.classList.add(ts), a;
      }
      setContent(r) {
        this._newContent = r, this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(r) {
        return this._templateFactory ? this._templateFactory.changeContent(r) : this._templateFactory = new Fl({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content: r,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        }), this._templateFactory;
      }
      _getContentForTemplate() {
        return {
          [Ul]: this._getTitle()
        };
      }
      _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
      // Private
      _initializeOnDelegatedTarget(r) {
        return this.constructor.getOrCreateInstance(r.delegateTarget, this._getDelegateConfig());
      }
      _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(ts);
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(bn);
      }
      _createPopper(r) {
        const a = W(this._config.placement, [this, r, this._element]), m = su[a.toUpperCase()];
        return o.createPopper(this._element, r, this._getPopperConfig(m));
      }
      _getOffset() {
        const {
          offset: r
        } = this._config;
        return typeof r == "string" ? r.split(",").map((a) => Number.parseInt(a, 10)) : typeof r == "function" ? (a) => r(a, this._element) : r;
      }
      _resolvePossibleFunction(r) {
        return W(r, [this._element]);
      }
      _getPopperConfig(r) {
        const a = {
          placement: r,
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
            fn: (m) => {
              this._getTipElement().setAttribute("data-popper-placement", m.state.placement);
            }
          }]
        };
        return {
          ...a,
          ...W(this._config.popperConfig, [a])
        };
      }
      _setListeners() {
        const r = this._config.trigger.split(" ");
        for (const a of r)
          if (a === "click")
            b.on(this._element, this.constructor.eventName(Jl), this._config.selector, (m) => {
              this._initializeOnDelegatedTarget(m).toggle();
            });
          else if (a !== Kl) {
            const m = a === He ? this.constructor.eventName(eu) : this.constructor.eventName(Ql), v = a === He ? this.constructor.eventName(nu) : this.constructor.eventName(tu);
            b.on(this._element, m, this._config.selector, ($) => {
              const C = this._initializeOnDelegatedTarget($);
              C._activeTrigger[$.type === "focusin" ? es : He] = !0, C._enter();
            }), b.on(this._element, v, this._config.selector, ($) => {
              const C = this._initializeOnDelegatedTarget($);
              C._activeTrigger[$.type === "focusout" ? es : He] = C._element.contains($.relatedTarget), C._leave();
            });
          }
        this._hideModalHandler = () => {
          this._element && this.hide();
        }, b.on(this._element.closest(Ur), zr, this._hideModalHandler);
      }
      _fixTitle() {
        const r = this._element.getAttribute("title");
        r && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", r), this._element.setAttribute("data-bs-original-title", r), this._element.removeAttribute("title"));
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
      _setTimeout(r, a) {
        clearTimeout(this._timeout), this._timeout = setTimeout(r, a);
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(r) {
        const a = q.getDataAttributes(this._element);
        for (const m of Object.keys(a))
          Wl.has(m) && delete a[m];
        return r = {
          ...a,
          ...typeof r == "object" && r ? r : {}
        }, r = this._mergeConfigObj(r), r = this._configAfterMerge(r), this._typeCheckConfig(r), r;
      }
      _configAfterMerge(r) {
        return r.container = r.container === !1 ? document.body : O(r.container), typeof r.delay == "number" && (r.delay = {
          show: r.delay,
          hide: r.delay
        }), typeof r.title == "number" && (r.title = r.title.toString()), typeof r.content == "number" && (r.content = r.content.toString()), r;
      }
      _getDelegateConfig() {
        const r = {};
        for (const [a, m] of Object.entries(this._config))
          this.constructor.Default[a] !== m && (r[a] = m);
        return r.selector = !1, r.trigger = "manual", r;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const a = se.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (typeof a[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            a[r]();
          }
        });
      }
    }
    B(se);
    const iu = "popover", au = ".popover-header", cu = ".popover-body", lu = {
      ...se.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    }, uu = {
      ...se.DefaultType,
      content: "(null|string|element|function)"
    };
    class vn extends se {
      // Getters
      static get Default() {
        return lu;
      }
      static get DefaultType() {
        return uu;
      }
      static get NAME() {
        return iu;
      }
      // Overrides
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      // Private
      _getContentForTemplate() {
        return {
          [au]: this._getTitle(),
          [cu]: this._getContent()
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const a = vn.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (typeof a[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            a[r]();
          }
        });
      }
    }
    B(vn);
    const fu = "scrollspy", ns = ".bs.scrollspy", du = ".data-api", hu = `activate${ns}`, Kr = `click${ns}`, pu = `load${ns}${du}`, mu = "dropdown-item", be = "active", gu = '[data-bs-spy="scroll"]', ss = "[href]", _u = ".nav, .list-group", qr = ".nav-link", Eu = `${qr}, .nav-item > ${qr}, .list-group-item`, yu = ".dropdown", bu = ".dropdown-toggle", vu = {
      offset: null,
      // TODO: v6 @deprecated, keep it for backwards compatibility reasons
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1]
    }, wu = {
      offset: "(number|null)",
      // TODO v6 @deprecated, keep it for backwards compatibility reasons
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array"
    };
    class We extends dt {
      constructor(r, a) {
        super(r, a), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
          visibleEntryTop: 0,
          parentScrollTop: 0
        }, this.refresh();
      }
      // Getters
      static get Default() {
        return vu;
      }
      static get DefaultType() {
        return wu;
      }
      static get NAME() {
        return fu;
      }
      // Public
      refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const r of this._observableSections.values())
          this._observer.observe(r);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      // Private
      _configAfterMerge(r) {
        return r.target = O(r.target) || document.body, r.rootMargin = r.offset ? `${r.offset}px 0px -30%` : r.rootMargin, typeof r.threshold == "string" && (r.threshold = r.threshold.split(",").map((a) => Number.parseFloat(a))), r;
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll && (b.off(this._config.target, Kr), b.on(this._config.target, Kr, ss, (r) => {
          const a = this._observableSections.get(r.target.hash);
          if (a) {
            r.preventDefault();
            const m = this._rootElement || window, v = a.offsetTop - this._element.offsetTop;
            if (m.scrollTo) {
              m.scrollTo({
                top: v,
                behavior: "smooth"
              });
              return;
            }
            m.scrollTop = v;
          }
        }));
      }
      _getNewObserver() {
        const r = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver((a) => this._observerCallback(a), r);
      }
      // The logic of selection
      _observerCallback(r) {
        const a = (C) => this._targetLinks.get(`#${C.target.id}`), m = (C) => {
          this._previousScrollData.visibleEntryTop = C.target.offsetTop, this._process(a(C));
        }, v = (this._rootElement || document.documentElement).scrollTop, $ = v >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = v;
        for (const C of r) {
          if (!C.isIntersecting) {
            this._activeTarget = null, this._clearActiveClass(a(C));
            continue;
          }
          const U = C.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if ($ && U) {
            if (m(C), !v)
              return;
            continue;
          }
          !$ && !U && m(C);
        }
      }
      _initializeTargetsAndObservables() {
        this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
        const r = L.find(ss, this._config.target);
        for (const a of r) {
          if (!a.hash || S(a))
            continue;
          const m = L.findOne(decodeURI(a.hash), this._element);
          T(m) && (this._targetLinks.set(decodeURI(a.hash), a), this._observableSections.set(a.hash, m));
        }
      }
      _process(r) {
        this._activeTarget !== r && (this._clearActiveClass(this._config.target), this._activeTarget = r, r.classList.add(be), this._activateParents(r), b.trigger(this._element, hu, {
          relatedTarget: r
        }));
      }
      _activateParents(r) {
        if (r.classList.contains(mu)) {
          L.findOne(bu, r.closest(yu)).classList.add(be);
          return;
        }
        for (const a of L.parents(r, _u))
          for (const m of L.prev(a, Eu))
            m.classList.add(be);
      }
      _clearActiveClass(r) {
        r.classList.remove(be);
        const a = L.find(`${ss}.${be}`, r);
        for (const m of a)
          m.classList.remove(be);
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const a = We.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (a[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            a[r]();
          }
        });
      }
    }
    b.on(window, pu, () => {
      for (const h of L.find(gu))
        We.getOrCreateInstance(h);
    }), B(We);
    const Au = "tab", re = ".bs.tab", Ou = `hide${re}`, Tu = `hidden${re}`, Su = `show${re}`, Cu = `shown${re}`, $u = `click${re}`, Nu = `keydown${re}`, Pu = `load${re}`, Ru = "ArrowLeft", Yr = "ArrowRight", Lu = "ArrowUp", Gr = "ArrowDown", rs = "Home", Zr = "End", oe = "active", Xr = "fade", os = "show", Du = "dropdown", Jr = ".dropdown-toggle", ku = ".dropdown-menu", is = `:not(${Jr})`, xu = '.list-group, .nav, [role="tablist"]', Mu = ".nav-item, .list-group-item", Iu = `.nav-link${is}, .list-group-item${is}, [role="tab"]${is}`, Qr = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', as = `${Iu}, ${Qr}`, ju = `.${oe}[data-bs-toggle="tab"], .${oe}[data-bs-toggle="pill"], .${oe}[data-bs-toggle="list"]`;
    class ie extends dt {
      constructor(r) {
        super(r), this._parent = this._element.closest(xu), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), b.on(this._element, Nu, (a) => this._keydown(a)));
      }
      // Getters
      static get NAME() {
        return Au;
      }
      // Public
      show() {
        const r = this._element;
        if (this._elemIsActive(r))
          return;
        const a = this._getActiveElem(), m = a ? b.trigger(a, Ou, {
          relatedTarget: r
        }) : null;
        b.trigger(r, Su, {
          relatedTarget: a
        }).defaultPrevented || m && m.defaultPrevented || (this._deactivate(a, r), this._activate(r, a));
      }
      // Private
      _activate(r, a) {
        if (!r)
          return;
        r.classList.add(oe), this._activate(L.getElementFromSelector(r));
        const m = () => {
          if (r.getAttribute("role") !== "tab") {
            r.classList.add(os);
            return;
          }
          r.removeAttribute("tabindex"), r.setAttribute("aria-selected", !0), this._toggleDropDown(r, !0), b.trigger(r, Cu, {
            relatedTarget: a
          });
        };
        this._queueCallback(m, r, r.classList.contains(Xr));
      }
      _deactivate(r, a) {
        if (!r)
          return;
        r.classList.remove(oe), r.blur(), this._deactivate(L.getElementFromSelector(r));
        const m = () => {
          if (r.getAttribute("role") !== "tab") {
            r.classList.remove(os);
            return;
          }
          r.setAttribute("aria-selected", !1), r.setAttribute("tabindex", "-1"), this._toggleDropDown(r, !1), b.trigger(r, Tu, {
            relatedTarget: a
          });
        };
        this._queueCallback(m, r, r.classList.contains(Xr));
      }
      _keydown(r) {
        if (![Ru, Yr, Lu, Gr, rs, Zr].includes(r.key))
          return;
        r.stopPropagation(), r.preventDefault();
        const a = this._getChildren().filter((v) => !S(v));
        let m;
        if ([rs, Zr].includes(r.key))
          m = a[r.key === rs ? 0 : a.length - 1];
        else {
          const v = [Yr, Gr].includes(r.key);
          m = G(a, r.target, v, !0);
        }
        m && (m.focus({
          preventScroll: !0
        }), ie.getOrCreateInstance(m).show());
      }
      _getChildren() {
        return L.find(as, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((r) => this._elemIsActive(r)) || null;
      }
      _setInitialAttributes(r, a) {
        this._setAttributeIfNotExists(r, "role", "tablist");
        for (const m of a)
          this._setInitialAttributesOnChild(m);
      }
      _setInitialAttributesOnChild(r) {
        r = this._getInnerElement(r);
        const a = this._elemIsActive(r), m = this._getOuterElement(r);
        r.setAttribute("aria-selected", a), m !== r && this._setAttributeIfNotExists(m, "role", "presentation"), a || r.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(r, "role", "tab"), this._setInitialAttributesOnTargetPanel(r);
      }
      _setInitialAttributesOnTargetPanel(r) {
        const a = L.getElementFromSelector(r);
        a && (this._setAttributeIfNotExists(a, "role", "tabpanel"), r.id && this._setAttributeIfNotExists(a, "aria-labelledby", `${r.id}`));
      }
      _toggleDropDown(r, a) {
        const m = this._getOuterElement(r);
        if (!m.classList.contains(Du))
          return;
        const v = ($, C) => {
          const U = L.findOne($, m);
          U && U.classList.toggle(C, a);
        };
        v(Jr, oe), v(ku, os), m.setAttribute("aria-expanded", a);
      }
      _setAttributeIfNotExists(r, a, m) {
        r.hasAttribute(a) || r.setAttribute(a, m);
      }
      _elemIsActive(r) {
        return r.classList.contains(oe);
      }
      // Try to get the inner element (usually the .nav-link)
      _getInnerElement(r) {
        return r.matches(as) ? r : L.findOne(as, r);
      }
      // Try to get the outer element (usually the .nav-item)
      _getOuterElement(r) {
        return r.closest(Mu) || r;
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const a = ie.getOrCreateInstance(this);
          if (typeof r == "string") {
            if (a[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            a[r]();
          }
        });
      }
    }
    b.on(document, $u, Qr, function(h) {
      ["A", "AREA"].includes(this.tagName) && h.preventDefault(), !S(this) && ie.getOrCreateInstance(this).show();
    }), b.on(window, Pu, () => {
      for (const h of L.find(ju))
        ie.getOrCreateInstance(h);
    }), B(ie);
    const Bu = "toast", Ut = ".bs.toast", Fu = `mouseover${Ut}`, Hu = `mouseout${Ut}`, Wu = `focusin${Ut}`, Vu = `focusout${Ut}`, Uu = `hide${Ut}`, zu = `hidden${Ut}`, Ku = `show${Ut}`, qu = `shown${Ut}`, Yu = "fade", to = "hide", wn = "show", An = "showing", Gu = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    }, Zu = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
    class Ve extends dt {
      constructor(r, a) {
        super(r, a), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
      }
      // Getters
      static get Default() {
        return Zu;
      }
      static get DefaultType() {
        return Gu;
      }
      static get NAME() {
        return Bu;
      }
      // Public
      show() {
        if (b.trigger(this._element, Ku).defaultPrevented)
          return;
        this._clearTimeout(), this._config.animation && this._element.classList.add(Yu);
        const a = () => {
          this._element.classList.remove(An), b.trigger(this._element, qu), this._maybeScheduleHide();
        };
        this._element.classList.remove(to), x(this._element), this._element.classList.add(wn, An), this._queueCallback(a, this._element, this._config.animation);
      }
      hide() {
        if (!this.isShown() || b.trigger(this._element, Uu).defaultPrevented)
          return;
        const a = () => {
          this._element.classList.add(to), this._element.classList.remove(An, wn), b.trigger(this._element, zu);
        };
        this._element.classList.add(An), this._queueCallback(a, this._element, this._config.animation);
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(wn), super.dispose();
      }
      isShown() {
        return this._element.classList.contains(wn);
      }
      // Private
      _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
      }
      _onInteraction(r, a) {
        switch (r.type) {
          case "mouseover":
          case "mouseout": {
            this._hasMouseInteraction = a;
            break;
          }
          case "focusin":
          case "focusout": {
            this._hasKeyboardInteraction = a;
            break;
          }
        }
        if (a) {
          this._clearTimeout();
          return;
        }
        const m = r.relatedTarget;
        this._element === m || this._element.contains(m) || this._maybeScheduleHide();
      }
      _setListeners() {
        b.on(this._element, Fu, (r) => this._onInteraction(r, !0)), b.on(this._element, Hu, (r) => this._onInteraction(r, !1)), b.on(this._element, Wu, (r) => this._onInteraction(r, !0)), b.on(this._element, Vu, (r) => this._onInteraction(r, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const a = Ve.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (typeof a[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            a[r](this);
          }
        });
      }
    }
    return Mt(Ve), B(Ve), {
      Alert: Ie,
      Button: je,
      Carousel: ge,
      Collapse: Ee,
      Dropdown: Ot,
      Modal: ne,
      Offcanvas: jt,
      Popover: vn,
      ScrollSpy: We,
      Tab: ie,
      Toast: Ve,
      Tooltip: se
    };
  });
})(mf);
const Jt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, o] of e)
    n[s] = o;
  return n;
}, od = {};
function id(t, e) {
  const n = As("router-view");
  return Ht(), Yo(n);
}
const ad = /* @__PURE__ */ Jt(od, [["render", id]]);
var cd = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Ci;
const Fn = (t) => Ci = t, $i = (
  /* istanbul ignore next */
  Symbol()
);
function $s(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var Xe;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Xe || (Xe = {}));
function ld() {
  const t = Go(!0), e = t.run(() => Hs({}));
  let n = [], s = [];
  const o = Zo({
    install(i) {
      Fn(o), o._a = i, i.provide($i, o), i.config.globalProperties.$pinia = o, s.forEach((c) => n.push(c)), s = [];
    },
    use(i) {
      return !this._a && !cd ? s.push(i) : n.push(i), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return o;
}
const Ni = () => {
};
function lo(t, e, n, s = Ni) {
  t.push(e);
  const o = () => {
    const i = t.indexOf(e);
    i > -1 && (t.splice(i, 1), s());
  };
  return !n && tf() && ef(o), o;
}
function we(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
const ud = (t) => t();
function Ns(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((n, s) => t.set(s, n)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const s = e[n], o = t[n];
    $s(o) && $s(s) && t.hasOwnProperty(n) && !Ln(s) && !Qo(s) ? t[n] = Ns(o, s) : t[n] = s;
  }
  return t;
}
const fd = (
  /* istanbul ignore next */
  Symbol()
);
function dd(t) {
  return !$s(t) || !t.hasOwnProperty(fd);
}
const { assign: qt } = Object;
function hd(t) {
  return !!(Ln(t) && t.effect);
}
function pd(t, e, n, s) {
  const { state: o, actions: i, getters: c } = e, u = n.state.value[t];
  let l;
  function p() {
    u || (n.state.value[t] = o ? o() : {});
    const f = nf(n.state.value[t]);
    return qt(f, i, Object.keys(c || {}).reduce((d, g) => (d[g] = Zo(St(() => {
      Fn(n);
      const _ = n._s.get(t);
      return c[g].call(_, _);
    })), d), {}));
  }
  return l = Pi(t, p, e, n, s, !0), l;
}
function Pi(t, e, n = {}, s, o, i) {
  let c;
  const u = qt({ actions: {} }, n), l = {
    deep: !0
    // flush: 'post',
  };
  let p, f, d = [], g = [], _;
  const E = s.state.value[t];
  !i && !E && (s.state.value[t] = {}), Hs({});
  let y;
  function O(I) {
    let R;
    p = f = !1, typeof I == "function" ? (I(s.state.value[t]), R = {
      type: Xe.patchFunction,
      storeId: t,
      events: _
    }) : (Ns(s.state.value[t], I), R = {
      type: Xe.patchObject,
      payload: I,
      storeId: t,
      events: _
    });
    const B = y = Symbol();
    ti().then(() => {
      y === B && (p = !0);
    }), f = !0, we(d, R, s.state.value[t]);
  }
  const T = i ? function() {
    const { state: R } = n, B = R ? R() : {};
    this.$patch((W) => {
      qt(W, B);
    });
  } : (
    /* istanbul ignore next */
    Ni
  );
  function S() {
    c.stop(), d = [], g = [], s._s.delete(t);
  }
  function k(I, R) {
    return function() {
      Fn(s);
      const B = Array.from(arguments), W = [], X = [];
      function G(K) {
        W.push(K);
      }
      function ut(K) {
        X.push(K);
      }
      we(g, {
        args: B,
        name: I,
        store: x,
        after: G,
        onError: ut
      });
      let tt;
      try {
        tt = R.apply(this && this.$id === t ? this : x, B);
      } catch (K) {
        throw we(X, K), K;
      }
      return tt instanceof Promise ? tt.then((K) => (we(W, K), K)).catch((K) => (we(X, K), Promise.reject(K))) : (we(W, tt), tt);
    };
  }
  const D = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: lo.bind(null, g),
    $patch: O,
    $reset: T,
    $subscribe(I, R = {}) {
      const B = lo(d, I, R.detached, () => W()), W = c.run(() => Xo(() => s.state.value[t], (X) => {
        (R.flush === "sync" ? f : p) && I({
          storeId: t,
          type: Xe.direct,
          events: _
        }, X);
      }, qt({}, l, R)));
      return B;
    },
    $dispose: S
  }, x = Jo(D);
  s._s.set(t, x);
  const j = (s._a && s._a.runWithContext || ud)(() => s._e.run(() => (c = Go()).run(e)));
  for (const I in j) {
    const R = j[I];
    if (Ln(R) && !hd(R) || Qo(R))
      i || (E && dd(R) && (Ln(R) ? R.value = E[I] : Ns(R, E[I])), s.state.value[t][I] = R);
    else if (typeof R == "function") {
      const B = k(I, R);
      j[I] = B, u.actions[I] = R;
    }
  }
  return qt(x, j), qt(Qu(x), j), Object.defineProperty(x, "$state", {
    get: () => s.state.value[t],
    set: (I) => {
      O((R) => {
        qt(R, I);
      });
    }
  }), s._p.forEach((I) => {
    qt(x, c.run(() => I({
      store: x,
      app: s._a,
      pinia: s,
      options: u
    })));
  }), E && i && n.hydrate && n.hydrate(x.$state, E), p = !0, f = !0, x;
}
function md(t, e, n) {
  let s, o;
  const i = typeof e == "function";
  typeof t == "string" ? (s = t, o = i ? n : e) : (o = t, s = t.id);
  function c(u, l) {
    const p = Ju();
    return u = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    u || (p ? Te($i, null) : null), u && Fn(u), u = Ci, u._s.has(s) || (i ? Pi(s, e, o, u) : pd(s, o, u)), u._s.get(s);
  }
  return c.$id = s, c;
}
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Oe = typeof window < "u";
function gd(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module";
}
const Y = Object.assign;
function ls(t, e) {
  const n = {};
  for (const s in e) {
    const o = e[s];
    n[s] = Ct(o) ? o.map(t) : t(o);
  }
  return n;
}
const Je = () => {
}, Ct = Array.isArray, _d = /\/$/, Ed = (t) => t.replace(_d, "");
function us(t, e, n = "/") {
  let s, o = {}, i = "", c = "";
  const u = e.indexOf("#");
  let l = e.indexOf("?");
  return u < l && u >= 0 && (l = -1), l > -1 && (s = e.slice(0, l), i = e.slice(l + 1, u > -1 ? u : e.length), o = t(i)), u > -1 && (s = s || e.slice(0, u), c = e.slice(u, e.length)), s = wd(s ?? e, n), {
    fullPath: s + (i && "?") + i + c,
    path: s,
    query: o,
    hash: c
  };
}
function yd(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "");
}
function uo(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/";
}
function bd(t, e, n) {
  const s = e.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && Re(e.matched[s], n.matched[o]) && Ri(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash;
}
function Re(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function Ri(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const n in t)
    if (!vd(t[n], e[n]))
      return !1;
  return !0;
}
function vd(t, e) {
  return Ct(t) ? fo(t, e) : Ct(e) ? fo(e, t) : t === e;
}
function fo(t, e) {
  return Ct(e) ? t.length === e.length && t.every((n, s) => n === e[s]) : t.length === 1 && t[0] === e;
}
function wd(t, e) {
  if (t.startsWith("/"))
    return t;
  if (!t)
    return e;
  const n = e.split("/"), s = t.split("/"), o = s[s.length - 1];
  (o === ".." || o === ".") && s.push("");
  let i = n.length - 1, c, u;
  for (c = 0; c < s.length; c++)
    if (u = s[c], u !== ".")
      if (u === "..")
        i > 1 && i--;
      else
        break;
  return n.slice(0, i).join("/") + "/" + s.slice(c - (c === s.length ? 1 : 0)).join("/");
}
var nn;
(function(t) {
  t.pop = "pop", t.push = "push";
})(nn || (nn = {}));
var Qe;
(function(t) {
  t.back = "back", t.forward = "forward", t.unknown = "";
})(Qe || (Qe = {}));
function Ad(t) {
  if (!t)
    if (Oe) {
      const e = document.querySelector("base");
      t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Ed(t);
}
const Od = /^[^#]+#/;
function Td(t, e) {
  return t.replace(Od, "#") + e;
}
function Sd(t, e) {
  const n = document.documentElement.getBoundingClientRect(), s = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: s.left - n.left - (e.left || 0),
    top: s.top - n.top - (e.top || 0)
  };
}
const Hn = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Cd(t) {
  let e;
  if ("el" in t) {
    const n = t.el, s = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o)
      return;
    e = Sd(o, t);
  } else
    e = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset);
}
function ho(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const Ps = /* @__PURE__ */ new Map();
function $d(t, e) {
  Ps.set(t, e);
}
function Nd(t) {
  const e = Ps.get(t);
  return Ps.delete(t), e;
}
let Pd = () => location.protocol + "//" + location.host;
function Li(t, e) {
  const { pathname: n, search: s, hash: o } = e, i = t.indexOf("#");
  if (i > -1) {
    let u = o.includes(t.slice(i)) ? t.slice(i).length : 1, l = o.slice(u);
    return l[0] !== "/" && (l = "/" + l), uo(l, "");
  }
  return uo(n, t) + s + o;
}
function Rd(t, e, n, s) {
  let o = [], i = [], c = null;
  const u = ({ state: g }) => {
    const _ = Li(t, location), E = n.value, y = e.value;
    let O = 0;
    if (g) {
      if (n.value = _, e.value = g, c && c === E) {
        c = null;
        return;
      }
      O = y ? g.position - y.position : 0;
    } else
      s(_);
    o.forEach((T) => {
      T(n.value, E, {
        delta: O,
        type: nn.pop,
        direction: O ? O > 0 ? Qe.forward : Qe.back : Qe.unknown
      });
    });
  };
  function l() {
    c = n.value;
  }
  function p(g) {
    o.push(g);
    const _ = () => {
      const E = o.indexOf(g);
      E > -1 && o.splice(E, 1);
    };
    return i.push(_), _;
  }
  function f() {
    const { history: g } = window;
    g.state && g.replaceState(Y({}, g.state, { scroll: Hn() }), "");
  }
  function d() {
    for (const g of i)
      g();
    i = [], window.removeEventListener("popstate", u), window.removeEventListener("beforeunload", f);
  }
  return window.addEventListener("popstate", u), window.addEventListener("beforeunload", f, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: p,
    destroy: d
  };
}
function po(t, e, n, s = !1, o = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? Hn() : null
  };
}
function Ld(t) {
  const { history: e, location: n } = window, s = {
    value: Li(t, n)
  }, o = { value: e.state };
  o.value || i(s.value, {
    back: null,
    current: s.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: e.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function i(l, p, f) {
    const d = t.indexOf("#"), g = d > -1 ? (n.host && document.querySelector("base") ? t : t.slice(d)) + l : Pd() + t + l;
    try {
      e[f ? "replaceState" : "pushState"](p, "", g), o.value = p;
    } catch (_) {
      console.error(_), n[f ? "replace" : "assign"](g);
    }
  }
  function c(l, p) {
    const f = Y({}, e.state, po(
      o.value.back,
      // keep back and forward entries but override current position
      l,
      o.value.forward,
      !0
    ), p, { position: o.value.position });
    i(l, f, !0), s.value = l;
  }
  function u(l, p) {
    const f = Y(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      e.state,
      {
        forward: l,
        scroll: Hn()
      }
    );
    i(f.current, f, !0);
    const d = Y({}, po(s.value, l, null), { position: f.position + 1 }, p);
    i(l, d, !1), s.value = l;
  }
  return {
    location: s,
    state: o,
    push: u,
    replace: c
  };
}
function Dd(t) {
  t = Ad(t);
  const e = Ld(t), n = Rd(t, e.state, e.location, e.replace);
  function s(i, c = !0) {
    c || n.pauseListeners(), history.go(i);
  }
  const o = Y({
    // it's overridden right after
    location: "",
    base: t,
    go: s,
    createHref: Td.bind(null, t)
  }, e, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => e.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => e.state.value
  }), o;
}
function kd(t) {
  return typeof t == "string" || t && typeof t == "object";
}
function Di(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const zt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, ki = Symbol("");
var mo;
(function(t) {
  t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated";
})(mo || (mo = {}));
function Le(t, e) {
  return Y(new Error(), {
    type: t,
    [ki]: !0
  }, e);
}
function Bt(t, e) {
  return t instanceof Error && ki in t && (e == null || !!(t.type & e));
}
const go = "[^/]+?", xd = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Md = /[.+*?^${}()[\]/\\]/g;
function Id(t, e) {
  const n = Y({}, xd, e), s = [];
  let o = n.start ? "^" : "";
  const i = [];
  for (const p of t) {
    const f = p.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !p.length && (o += "/");
    for (let d = 0; d < p.length; d++) {
      const g = p[d];
      let _ = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        d || (o += "/"), o += g.value.replace(Md, "\\$&"), _ += 40;
      else if (g.type === 1) {
        const { value: E, repeatable: y, optional: O, regexp: T } = g;
        i.push({
          name: E,
          repeatable: y,
          optional: O
        });
        const S = T || go;
        if (S !== go) {
          _ += 10;
          try {
            new RegExp(`(${S})`);
          } catch (D) {
            throw new Error(`Invalid custom RegExp for param "${E}" (${S}): ` + D.message);
          }
        }
        let k = y ? `((?:${S})(?:/(?:${S}))*)` : `(${S})`;
        d || (k = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        O && p.length < 2 ? `(?:/${k})` : "/" + k), O && (k += "?"), o += k, _ += 20, O && (_ += -8), y && (_ += -20), S === ".*" && (_ += -50);
      }
      f.push(_);
    }
    s.push(f);
  }
  if (n.strict && n.end) {
    const p = s.length - 1;
    s[p][s[p].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
  const c = new RegExp(o, n.sensitive ? "" : "i");
  function u(p) {
    const f = p.match(c), d = {};
    if (!f)
      return null;
    for (let g = 1; g < f.length; g++) {
      const _ = f[g] || "", E = i[g - 1];
      d[E.name] = _ && E.repeatable ? _.split("/") : _;
    }
    return d;
  }
  function l(p) {
    let f = "", d = !1;
    for (const g of t) {
      (!d || !f.endsWith("/")) && (f += "/"), d = !1;
      for (const _ of g)
        if (_.type === 0)
          f += _.value;
        else if (_.type === 1) {
          const { value: E, repeatable: y, optional: O } = _, T = E in p ? p[E] : "";
          if (Ct(T) && !y)
            throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);
          const S = Ct(T) ? T.join("/") : T;
          if (!S)
            if (O)
              g.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${E}"`);
          f += S;
        }
    }
    return f || "/";
  }
  return {
    re: c,
    score: s,
    keys: i,
    parse: u,
    stringify: l
  };
}
function jd(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length; ) {
    const s = e[n] - t[n];
    if (s)
      return s;
    n++;
  }
  return t.length < e.length ? t.length === 1 && t[0] === 80 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 80 ? 1 : -1 : 0;
}
function Bd(t, e) {
  let n = 0;
  const s = t.score, o = e.score;
  for (; n < s.length && n < o.length; ) {
    const i = jd(s[n], o[n]);
    if (i)
      return i;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (_o(s))
      return 1;
    if (_o(o))
      return -1;
  }
  return o.length - s.length;
}
function _o(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const Fd = {
  type: 0,
  value: ""
}, Hd = /[a-zA-Z0-9_]/;
function Wd(t) {
  if (!t)
    return [[]];
  if (t === "/")
    return [[Fd]];
  if (!t.startsWith("/"))
    throw new Error(`Invalid path "${t}"`);
  function e(_) {
    throw new Error(`ERR (${n})/"${p}": ${_}`);
  }
  let n = 0, s = n;
  const o = [];
  let i;
  function c() {
    i && o.push(i), i = [];
  }
  let u = 0, l, p = "", f = "";
  function d() {
    p && (n === 0 ? i.push({
      type: 0,
      value: p
    }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: 1,
      value: p,
      regexp: f,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : e("Invalid state to consume buffer"), p = "");
  }
  function g() {
    p += l;
  }
  for (; u < t.length; ) {
    if (l = t[u++], l === "\\" && n !== 2) {
      s = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (p && d(), c()) : l === ":" ? (d(), n = 1) : g();
        break;
      case 4:
        g(), n = s;
        break;
      case 1:
        l === "(" ? n = 2 : Hd.test(l) ? g() : (d(), n = 0, l !== "*" && l !== "?" && l !== "+" && u--);
        break;
      case 2:
        l === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + l : n = 3 : f += l;
        break;
      case 3:
        d(), n = 0, l !== "*" && l !== "?" && l !== "+" && u--, f = "";
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return n === 2 && e(`Unfinished custom RegExp for param "${p}"`), d(), c(), o;
}
function Vd(t, e, n) {
  const s = Id(Wd(t.path), n), o = Y(s, {
    record: t,
    parent: e,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return e && !o.record.aliasOf == !e.record.aliasOf && e.children.push(o), o;
}
function Ud(t, e) {
  const n = [], s = /* @__PURE__ */ new Map();
  e = bo({ strict: !1, end: !0, sensitive: !1 }, e);
  function o(f) {
    return s.get(f);
  }
  function i(f, d, g) {
    const _ = !g, E = zd(f);
    E.aliasOf = g && g.record;
    const y = bo(e, f), O = [
      E
    ];
    if ("alias" in f) {
      const k = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const D of k)
        O.push(Y({}, E, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : E.components,
          path: D,
          // we might be the child of an alias
          aliasOf: g ? g.record : E
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let T, S;
    for (const k of O) {
      const { path: D } = k;
      if (d && D[0] !== "/") {
        const x = d.record.path, F = x[x.length - 1] === "/" ? "" : "/";
        k.path = d.record.path + (D && F + D);
      }
      if (T = Vd(k, d, y), g ? g.alias.push(T) : (S = S || T, S !== T && S.alias.push(T), _ && f.name && !yo(T) && c(f.name)), E.children) {
        const x = E.children;
        for (let F = 0; F < x.length; F++)
          i(x[F], T, g && g.children[F]);
      }
      g = g || T, (T.record.components && Object.keys(T.record.components).length || T.record.name || T.record.redirect) && l(T);
    }
    return S ? () => {
      c(S);
    } : Je;
  }
  function c(f) {
    if (Di(f)) {
      const d = s.get(f);
      d && (s.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(c), d.alias.forEach(c));
    } else {
      const d = n.indexOf(f);
      d > -1 && (n.splice(d, 1), f.record.name && s.delete(f.record.name), f.children.forEach(c), f.alias.forEach(c));
    }
  }
  function u() {
    return n;
  }
  function l(f) {
    let d = 0;
    for (; d < n.length && Bd(f, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (f.record.path !== n[d].record.path || !xi(f, n[d])); )
      d++;
    n.splice(d, 0, f), f.record.name && !yo(f) && s.set(f.record.name, f);
  }
  function p(f, d) {
    let g, _ = {}, E, y;
    if ("name" in f && f.name) {
      if (g = s.get(f.name), !g)
        throw Le(1, {
          location: f
        });
      y = g.record.name, _ = Y(
        // paramsFromLocation is a new object
        Eo(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((S) => !S.optional).map((S) => S.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        f.params && Eo(f.params, g.keys.map((S) => S.name))
      ), E = g.stringify(_);
    } else if ("path" in f)
      E = f.path, g = n.find((S) => S.re.test(E)), g && (_ = g.parse(E), y = g.record.name);
    else {
      if (g = d.name ? s.get(d.name) : n.find((S) => S.re.test(d.path)), !g)
        throw Le(1, {
          location: f,
          currentLocation: d
        });
      y = g.record.name, _ = Y({}, d.params, f.params), E = g.stringify(_);
    }
    const O = [];
    let T = g;
    for (; T; )
      O.unshift(T.record), T = T.parent;
    return {
      name: y,
      path: E,
      params: _,
      matched: O,
      meta: qd(O)
    };
  }
  return t.forEach((f) => i(f)), { addRoute: i, resolve: p, removeRoute: c, getRoutes: u, getRecordMatcher: o };
}
function Eo(t, e) {
  const n = {};
  for (const s of e)
    s in t && (n[s] = t[s]);
  return n;
}
function zd(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: Kd(t),
    children: t.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && { default: t.component }
  };
}
function Kd(t) {
  const e = {}, n = t.props || !1;
  if ("component" in t)
    e.default = n;
  else
    for (const s in t.components)
      e[s] = typeof n == "object" ? n[s] : n;
  return e;
}
function yo(t) {
  for (; t; ) {
    if (t.record.aliasOf)
      return !0;
    t = t.parent;
  }
  return !1;
}
function qd(t) {
  return t.reduce((e, n) => Y(e, n.meta), {});
}
function bo(t, e) {
  const n = {};
  for (const s in t)
    n[s] = s in e ? e[s] : t[s];
  return n;
}
function xi(t, e) {
  return e.children.some((n) => n === t || xi(t, n));
}
const Mi = /#/g, Yd = /&/g, Gd = /\//g, Zd = /=/g, Xd = /\?/g, Ii = /\+/g, Jd = /%5B/g, Qd = /%5D/g, ji = /%5E/g, th = /%60/g, Bi = /%7B/g, eh = /%7C/g, Fi = /%7D/g, nh = /%20/g;
function er(t) {
  return encodeURI("" + t).replace(eh, "|").replace(Jd, "[").replace(Qd, "]");
}
function sh(t) {
  return er(t).replace(Bi, "{").replace(Fi, "}").replace(ji, "^");
}
function Rs(t) {
  return er(t).replace(Ii, "%2B").replace(nh, "+").replace(Mi, "%23").replace(Yd, "%26").replace(th, "`").replace(Bi, "{").replace(Fi, "}").replace(ji, "^");
}
function rh(t) {
  return Rs(t).replace(Zd, "%3D");
}
function oh(t) {
  return er(t).replace(Mi, "%23").replace(Xd, "%3F");
}
function ih(t) {
  return t == null ? "" : oh(t).replace(Gd, "%2F");
}
function kn(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {
  }
  return "" + t;
}
function ah(t) {
  const e = {};
  if (t === "" || t === "?")
    return e;
  const s = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let o = 0; o < s.length; ++o) {
    const i = s[o].replace(Ii, " "), c = i.indexOf("="), u = kn(c < 0 ? i : i.slice(0, c)), l = c < 0 ? null : kn(i.slice(c + 1));
    if (u in e) {
      let p = e[u];
      Ct(p) || (p = e[u] = [p]), p.push(l);
    } else
      e[u] = l;
  }
  return e;
}
function vo(t) {
  let e = "";
  for (let n in t) {
    const s = t[n];
    if (n = rh(n), s == null) {
      s !== void 0 && (e += (e.length ? "&" : "") + n);
      continue;
    }
    (Ct(s) ? s.map((i) => i && Rs(i)) : [s && Rs(s)]).forEach((i) => {
      i !== void 0 && (e += (e.length ? "&" : "") + n, i != null && (e += "=" + i));
    });
  }
  return e;
}
function ch(t) {
  const e = {};
  for (const n in t) {
    const s = t[n];
    s !== void 0 && (e[n] = Ct(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return e;
}
const lh = Symbol(""), wo = Symbol(""), nr = Symbol(""), Hi = Symbol(""), Ls = Symbol("");
function Ue() {
  let t = [];
  function e(s) {
    return t.push(s), () => {
      const o = t.indexOf(s);
      o > -1 && t.splice(o, 1);
    };
  }
  function n() {
    t = [];
  }
  return {
    add: e,
    list: () => t.slice(),
    reset: n
  };
}
function Gt(t, e, n, s, o) {
  const i = s && // name is defined if record is because of the function overload
  (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () => new Promise((c, u) => {
    const l = (d) => {
      d === !1 ? u(Le(4, {
        from: n,
        to: e
      })) : d instanceof Error ? u(d) : kd(d) ? u(Le(2, {
        from: e,
        to: d
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === i && typeof d == "function" && i.push(d), c());
    }, p = t.call(s && s.instances[o], e, n, l);
    let f = Promise.resolve(p);
    t.length < 3 && (f = f.then(l)), f.catch((d) => u(d));
  });
}
function fs(t, e, n, s) {
  const o = [];
  for (const i of t)
    for (const c in i.components) {
      let u = i.components[c];
      if (!(e !== "beforeRouteEnter" && !i.instances[c]))
        if (uh(u)) {
          const p = (u.__vccOpts || u)[e];
          p && o.push(Gt(p, n, s, i, c));
        } else {
          let l = u();
          o.push(() => l.then((p) => {
            if (!p)
              return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`));
            const f = gd(p) ? p.default : p;
            i.components[c] = f;
            const g = (f.__vccOpts || f)[e];
            return g && Gt(g, n, s, i, c)();
          }));
        }
    }
  return o;
}
function uh(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
}
function Ao(t) {
  const e = Te(nr), n = Te(Hi), s = St(() => e.resolve(Ye(t.to))), o = St(() => {
    const { matched: l } = s.value, { length: p } = l, f = l[p - 1], d = n.matched;
    if (!f || !d.length)
      return -1;
    const g = d.findIndex(Re.bind(null, f));
    if (g > -1)
      return g;
    const _ = Oo(l[p - 2]);
    return (
      // we are dealing with nested routes
      p > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Oo(f) === _ && // avoid comparing the child with its parent
      d[d.length - 1].path !== _ ? d.findIndex(Re.bind(null, l[p - 2])) : g
    );
  }), i = St(() => o.value > -1 && ph(n.params, s.value.params)), c = St(() => o.value > -1 && o.value === n.matched.length - 1 && Ri(n.params, s.value.params));
  function u(l = {}) {
    return hh(l) ? e[Ye(t.replace) ? "replace" : "push"](
      Ye(t.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Je) : Promise.resolve();
  }
  return {
    route: s,
    href: St(() => s.value.href),
    isActive: i,
    isExactActive: c,
    navigate: u
  };
}
const fh = /* @__PURE__ */ ei({
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
  useLink: Ao,
  setup(t, { slots: e }) {
    const n = Jo(Ao(t)), { options: s } = Te(nr), o = St(() => ({
      [To(t.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [To(t.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const i = e.default && e.default(n);
      return t.custom ? i : ni("a", {
        "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, i);
    };
  }
}), dh = fh;
function hh(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e))
        return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function ph(t, e) {
  for (const n in e) {
    const s = e[n], o = t[n];
    if (typeof s == "string") {
      if (s !== o)
        return !1;
    } else if (!Ct(o) || o.length !== s.length || s.some((i, c) => i !== o[c]))
      return !1;
  }
  return !0;
}
function Oo(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : "";
}
const To = (t, e, n) => t ?? e ?? n, mh = /* @__PURE__ */ ei({
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
  setup(t, { attrs: e, slots: n }) {
    const s = Te(Ls), o = St(() => t.route || s.value), i = Te(wo, 0), c = St(() => {
      let p = Ye(i);
      const { matched: f } = o.value;
      let d;
      for (; (d = f[p]) && !d.components; )
        p++;
      return p;
    }), u = St(() => o.value.matched[c.value]);
    cs(wo, St(() => c.value + 1)), cs(lh, u), cs(Ls, o);
    const l = Hs();
    return Xo(() => [l.value, u.value, t.name], ([p, f, d], [g, _, E]) => {
      f && (f.instances[d] = p, _ && _ !== f && p && p === g && (f.leaveGuards.size || (f.leaveGuards = _.leaveGuards), f.updateGuards.size || (f.updateGuards = _.updateGuards))), p && f && // if there is no instance but to and from are the same this might be
      // the first visit
      (!_ || !Re(f, _) || !g) && (f.enterCallbacks[d] || []).forEach((y) => y(p));
    }, { flush: "post" }), () => {
      const p = o.value, f = t.name, d = u.value, g = d && d.components[f];
      if (!g)
        return So(n.default, { Component: g, route: p });
      const _ = d.props[f], E = _ ? _ === !0 ? p.params : typeof _ == "function" ? _(p) : _ : null, O = ni(g, Y({}, E, e, {
        onVnodeUnmounted: (T) => {
          T.component.isUnmounted && (d.instances[f] = null);
        },
        ref: l
      }));
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        So(n.default, { Component: O, route: p }) || O
      );
    };
  }
});
function So(t, e) {
  if (!t)
    return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n;
}
const gh = mh;
function _h(t) {
  const e = Ud(t.routes, t), n = t.parseQuery || ah, s = t.stringifyQuery || vo, o = t.history, i = Ue(), c = Ue(), u = Ue(), l = sf(zt);
  let p = zt;
  Oe && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const f = ls.bind(null, (w) => "" + w), d = ls.bind(null, ih), g = (
    // @ts-expect-error: intentionally avoid the type check
    ls.bind(null, kn)
  );
  function _(w, P) {
    let N, M;
    return Di(w) ? (N = e.getRecordMatcher(w), M = P) : M = w, e.addRoute(M, N);
  }
  function E(w) {
    const P = e.getRecordMatcher(w);
    P && e.removeRoute(P);
  }
  function y() {
    return e.getRoutes().map((w) => w.record);
  }
  function O(w) {
    return !!e.getRecordMatcher(w);
  }
  function T(w, P) {
    if (P = Y({}, P || l.value), typeof w == "string") {
      const H = us(n, w, P.path), q = e.resolve({ path: H.path }, P), ct = o.createHref(H.fullPath);
      return Y(H, q, {
        params: g(q.params),
        hash: kn(H.hash),
        redirectedFrom: void 0,
        href: ct
      });
    }
    let N;
    if ("path" in w)
      N = Y({}, w, {
        path: us(n, w.path, P.path).path
      });
    else {
      const H = Y({}, w.params);
      for (const q in H)
        H[q] == null && delete H[q];
      N = Y({}, w, {
        params: d(H)
      }), P.params = d(P.params);
    }
    const M = e.resolve(N, P), b = w.hash || "";
    M.params = f(g(M.params));
    const Z = yd(s, Y({}, w, {
      hash: sh(b),
      path: M.path
    })), V = o.createHref(Z);
    return Y({
      fullPath: Z,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: b,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === vo ? ch(w.query) : w.query || {}
      )
    }, M, {
      redirectedFrom: void 0,
      href: V
    });
  }
  function S(w) {
    return typeof w == "string" ? us(n, w, l.value.path) : Y({}, w);
  }
  function k(w, P) {
    if (p !== w)
      return Le(8, {
        from: P,
        to: w
      });
  }
  function D(w) {
    return j(w);
  }
  function x(w) {
    return D(Y(S(w), { replace: !0 }));
  }
  function F(w) {
    const P = w.matched[w.matched.length - 1];
    if (P && P.redirect) {
      const { redirect: N } = P;
      let M = typeof N == "function" ? N(w) : N;
      return typeof M == "string" && (M = M.includes("?") || M.includes("#") ? M = S(M) : (
        // force empty params
        { path: M }
      ), M.params = {}), Y({
        query: w.query,
        hash: w.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in M ? {} : w.params
      }, M);
    }
  }
  function j(w, P) {
    const N = p = T(w), M = l.value, b = w.state, Z = w.force, V = w.replace === !0, H = F(N);
    if (H)
      return j(
        Y(S(H), {
          state: typeof H == "object" ? Y({}, b, H.state) : b,
          force: Z,
          replace: V
        }),
        // keep original redirectedFrom if it exists
        P || N
      );
    const q = N;
    q.redirectedFrom = P;
    let ct;
    return !Z && bd(s, M, N) && (ct = Le(16, { to: q, from: M }), xt(
      M,
      M,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (ct ? Promise.resolve(ct) : B(q, M)).catch((et) => Bt(et) ? (
      // navigation redirects still mark the router as ready
      Bt(
        et,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? et : $t(et)
    ) : (
      // reject any unknown error
      At(et, q, M)
    )).then((et) => {
      if (et) {
        if (Bt(
          et,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return j(
            // keep options
            Y({
              // preserve an existing replacement but allow the redirect to override it
              replace: V
            }, S(et.to), {
              state: typeof et.to == "object" ? Y({}, b, et.to.state) : b,
              force: Z
            }),
            // preserve the original redirectedFrom if any
            P || q
          );
      } else
        et = X(q, M, !0, V, b);
      return W(q, M, et), et;
    });
  }
  function I(w, P) {
    const N = k(w, P);
    return N ? Promise.reject(N) : Promise.resolve();
  }
  function R(w) {
    const P = ft.values().next().value;
    return P && typeof P.runWithContext == "function" ? P.runWithContext(w) : w();
  }
  function B(w, P) {
    let N;
    const [M, b, Z] = Eh(w, P);
    N = fs(M.reverse(), "beforeRouteLeave", w, P);
    for (const H of M)
      H.leaveGuards.forEach((q) => {
        N.push(Gt(q, w, P));
      });
    const V = I.bind(null, w, P);
    return N.push(V), st(N).then(() => {
      N = [];
      for (const H of i.list())
        N.push(Gt(H, w, P));
      return N.push(V), st(N);
    }).then(() => {
      N = fs(b, "beforeRouteUpdate", w, P);
      for (const H of b)
        H.updateGuards.forEach((q) => {
          N.push(Gt(q, w, P));
        });
      return N.push(V), st(N);
    }).then(() => {
      N = [];
      for (const H of Z)
        if (H.beforeEnter)
          if (Ct(H.beforeEnter))
            for (const q of H.beforeEnter)
              N.push(Gt(q, w, P));
          else
            N.push(Gt(H.beforeEnter, w, P));
      return N.push(V), st(N);
    }).then(() => (w.matched.forEach((H) => H.enterCallbacks = {}), N = fs(Z, "beforeRouteEnter", w, P), N.push(V), st(N))).then(() => {
      N = [];
      for (const H of c.list())
        N.push(Gt(H, w, P));
      return N.push(V), st(N);
    }).catch((H) => Bt(
      H,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? H : Promise.reject(H));
  }
  function W(w, P, N) {
    u.list().forEach((M) => R(() => M(w, P, N)));
  }
  function X(w, P, N, M, b) {
    const Z = k(w, P);
    if (Z)
      return Z;
    const V = P === zt, H = Oe ? history.state : {};
    N && (M || V ? o.replace(w.fullPath, Y({
      scroll: V && H && H.scroll
    }, b)) : o.push(w.fullPath, b)), l.value = w, xt(w, P, N, V), $t();
  }
  let G;
  function ut() {
    G || (G = o.listen((w, P, N) => {
      if (!at.listening)
        return;
      const M = T(w), b = F(M);
      if (b) {
        j(Y(b, { replace: !0 }), M).catch(Je);
        return;
      }
      p = M;
      const Z = l.value;
      Oe && $d(ho(Z.fullPath, N.delta), Hn()), B(M, Z).catch((V) => Bt(
        V,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? V : Bt(
        V,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (j(
        V.to,
        M
        // avoid an uncaught rejection, let push call triggerError
      ).then((H) => {
        Bt(
          H,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !N.delta && N.type === nn.pop && o.go(-1, !1);
      }).catch(Je), Promise.reject()) : (N.delta && o.go(-N.delta, !1), At(V, M, Z))).then((V) => {
        V = V || X(
          // after navigation, all matched components are resolved
          M,
          Z,
          !1
        ), V && (N.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Bt(
          V,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-N.delta, !1) : N.type === nn.pop && Bt(
          V,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), W(M, Z, V);
      }).catch(Je);
    }));
  }
  let tt = Ue(), K = Ue(), J;
  function At(w, P, N) {
    $t(w);
    const M = K.list();
    return M.length ? M.forEach((b) => b(w, P, N)) : console.error(w), Promise.reject(w);
  }
  function _t() {
    return J && l.value !== zt ? Promise.resolve() : new Promise((w, P) => {
      tt.add([w, P]);
    });
  }
  function $t(w) {
    return J || (J = !w, ut(), tt.list().forEach(([P, N]) => w ? N(w) : P()), tt.reset()), w;
  }
  function xt(w, P, N, M) {
    const { scrollBehavior: b } = t;
    if (!Oe || !b)
      return Promise.resolve();
    const Z = !N && Nd(ho(w.fullPath, 0)) || (M || !N) && history.state && history.state.scroll || null;
    return ti().then(() => b(w, P, Z)).then((V) => V && Cd(V)).catch((V) => At(V, w, P));
  }
  const Et = (w) => o.go(w);
  let Nt;
  const ft = /* @__PURE__ */ new Set(), at = {
    currentRoute: l,
    listening: !0,
    addRoute: _,
    removeRoute: E,
    hasRoute: O,
    getRoutes: y,
    resolve: T,
    options: t,
    push: D,
    replace: x,
    go: Et,
    back: () => Et(-1),
    forward: () => Et(1),
    beforeEach: i.add,
    beforeResolve: c.add,
    afterEach: u.add,
    onError: K.add,
    isReady: _t,
    install(w) {
      const P = this;
      w.component("RouterLink", dh), w.component("RouterView", gh), w.config.globalProperties.$router = P, Object.defineProperty(w.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Ye(l)
      }), Oe && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Nt && l.value === zt && (Nt = !0, D(o.location).catch((b) => {
      }));
      const N = {};
      for (const b in zt)
        Object.defineProperty(N, b, {
          get: () => l.value[b],
          enumerable: !0
        });
      w.provide(nr, P), w.provide(Hi, rf(N)), w.provide(Ls, l);
      const M = w.unmount;
      ft.add(w), w.unmount = function() {
        ft.delete(w), ft.size < 1 && (p = zt, G && G(), G = null, l.value = zt, Nt = !1, J = !1), M();
      };
    }
  };
  function st(w) {
    return w.reduce((P, N) => P.then(() => R(N)), Promise.resolve());
  }
  return at;
}
function Eh(t, e) {
  const n = [], s = [], o = [], i = Math.max(e.matched.length, t.matched.length);
  for (let c = 0; c < i; c++) {
    const u = e.matched[c];
    u && (t.matched.find((p) => Re(p, u)) ? s.push(u) : n.push(u));
    const l = t.matched[c];
    l && (e.matched.find((p) => Re(p, l)) || o.push(l));
  }
  return [n, s, o];
}
const Wi = md("myStore", {
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
    mobileFilterPanel(t) {
      this.mobileFilterStatus = t;
    }
  }
}), yh = {
  setup() {
    return { myStore: Wi() };
  },
  methods: {
    close() {
      this.$emit("response", !1);
    },
    redirect(t) {
      try {
        this.$emit("response", !1), this.$router.push(t);
      } catch (e) {
        console.log(e);
      }
    }
  }
}, bh = { class: "navbar-ls" }, vh = /* @__PURE__ */ rt("div", { class: "navbar-backdrops" }, null, -1), wh = { class: "navbar-panel" }, Ah = { class: "navbar-header" }, Oh = /* @__PURE__ */ rt("i", { class: "bi bi-x-lg" }, null, -1), Th = [
  Oh
], Sh = { class: "navbar-links" };
function Ch(t, e, n, s, o, i) {
  return Ht(), fe("div", bh, [
    vh,
    rt("div", wh, [
      rt("div", Ah, [
        rt("button", {
          class: Ws(`btn ${s.myStore.mobileMode ? "btn-sm" : "btn-lg"} btn-light`),
          onClick: e[0] || (e[0] = (...c) => i.close && i.close(...c))
        }, Th, 2)
      ]),
      rt("div", Sh, [
        rt("div", {
          class: "navbar-link",
          onClick: e[1] || (e[1] = (c) => i.redirect("/"))
        }, " Proje "),
        rt("div", {
          class: "navbar-link",
          onClick: e[2] || (e[2] = (c) => i.redirect("/location"))
        }, " Konum "),
        rt("div", {
          class: "navbar-link",
          onClick: e[3] || (e[3] = (c) => i.redirect("/gallery"))
        }, " Galeri "),
        rt("div", {
          class: "navbar-link",
          onClick: e[4] || (e[4] = (c) => i.redirect("/compare"))
        }, " Kıyaslama ")
      ])
    ])
  ]);
}
const $h = /* @__PURE__ */ Jt(yh, [["render", Ch]]), Nh = {
  setup() {
    return { myStore: Wi() };
  },
  data() {
    return {
      hamburgerMenu: !1
    };
  },
  components: { NavBar: $h },
  methods: {
    hamburgerMenuToggle() {
      this.hamburgerMenu = !this.hamburgerMenu;
    }
  }
}, Ph = { class: "navbar-ls-panel" }, Rh = /* @__PURE__ */ rt("i", { class: "bi bi-list" }, null, -1), Lh = [
  Rh
];
function Dh(t, e, n, s, o, i) {
  const c = As("NavBar"), u = As("router-view");
  return Ht(), fe(of, null, [
    rt("div", Ph, [
      rt("button", {
        class: Ws(`btn ${s.myStore.mobileMode ? "btn-sm" : "btn-lg"} btn-light`),
        onClick: e[0] || (e[0] = (...l) => i.hamburgerMenuToggle && i.hamburgerMenuToggle(...l))
      }, Lh, 2)
    ]),
    o.hamburgerMenu ? (Ht(), Yo(c, {
      key: 0,
      onResponse: e[1] || (e[1] = (l) => i.hamburgerMenuToggle())
    })) : af("", !0),
    cf(u)
  ], 64);
}
const kh = /* @__PURE__ */ Jt(Nh, [["render", Dh]]), xh = _h({
  history: Dd(),
  routes: [
    {
      path: "/",
      name: "Public",
      component: kh,
      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("./HomeView-HiwP--Qj.js")
        },
        {
          path: "/main-view",
          name: "HomePage",
          component: () => import("./HomeView-HiwP--Qj.js")
        },
        {
          path: "/location",
          name: "LocationPage",
          component: () => import("./LocationView-ptxXKG1Z.js")
        },
        {
          path: "/compare",
          name: "ComparePage",
          component: () => import("./CompareView-l3eBkikX.js")
        },
        {
          path: "/gallery",
          name: "GalleryPage",
          component: () => import("./GalleryView-k_Te5ww7.js")
        }
      ]
    }
  ]
});
function Vi(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Mh } = Object.prototype, { getPrototypeOf: sr } = Object, Wn = /* @__PURE__ */ ((t) => (e) => {
  const n = Mh.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kt = (t) => (t = t.toLowerCase(), (e) => Wn(e) === t), Vn = (t) => (e) => typeof e === t, { isArray: xe } = Array, sn = Vn("undefined");
function Ih(t) {
  return t !== null && !sn(t) && t.constructor !== null && !sn(t.constructor) && wt(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ui = kt("ArrayBuffer");
function jh(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Ui(t.buffer), e;
}
const Bh = Vn("string"), wt = Vn("function"), zi = Vn("number"), Un = (t) => t !== null && typeof t == "object", Fh = (t) => t === !0 || t === !1, Nn = (t) => {
  if (Wn(t) !== "object")
    return !1;
  const e = sr(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Hh = kt("Date"), Wh = kt("File"), Vh = kt("Blob"), Uh = kt("FileList"), zh = (t) => Un(t) && wt(t.pipe), Kh = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || wt(t.append) && ((e = Wn(t)) === "formdata" || // detect form-data instance
  e === "object" && wt(t.toString) && t.toString() === "[object FormData]"));
}, qh = kt("URLSearchParams"), Yh = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function on(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let s, o;
  if (typeof t != "object" && (t = [t]), xe(t))
    for (s = 0, o = t.length; s < o; s++)
      e.call(null, t[s], s, t);
  else {
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t), c = i.length;
    let u;
    for (s = 0; s < c; s++)
      u = i[s], e.call(null, t[u], u, t);
  }
}
function Ki(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], e === o.toLowerCase())
      return o;
  return null;
}
const qi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Yi = (t) => !sn(t) && t !== qi;
function Ds() {
  const { caseless: t } = Yi(this) && this || {}, e = {}, n = (s, o) => {
    const i = t && Ki(e, o) || o;
    Nn(e[i]) && Nn(s) ? e[i] = Ds(e[i], s) : Nn(s) ? e[i] = Ds({}, s) : xe(s) ? e[i] = s.slice() : e[i] = s;
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && on(arguments[s], n);
  return e;
}
const Gh = (t, e, n, { allOwnKeys: s } = {}) => (on(e, (o, i) => {
  n && wt(o) ? t[i] = Vi(o, n) : t[i] = o;
}, { allOwnKeys: s }), t), Zh = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Xh = (t, e, n, s) => {
  t.prototype = Object.create(e.prototype, s), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Jh = (t, e, n, s) => {
  let o, i, c;
  const u = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      c = o[i], (!s || s(c, t, e)) && !u[c] && (e[c] = t[c], u[c] = !0);
    t = n !== !1 && sr(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Qh = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const s = t.indexOf(e, n);
  return s !== -1 && s === n;
}, tp = (t) => {
  if (!t)
    return null;
  if (xe(t))
    return t;
  let e = t.length;
  if (!zi(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, ep = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && sr(Uint8Array)), np = (t, e) => {
  const s = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, sp = (t, e) => {
  let n;
  const s = [];
  for (; (n = t.exec(e)) !== null; )
    s.push(n);
  return s;
}, rp = kt("HTMLFormElement"), op = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, o) {
    return s.toUpperCase() + o;
  }
), Co = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), ip = kt("RegExp"), Gi = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), s = {};
  on(n, (o, i) => {
    let c;
    (c = e(o, i, t)) !== !1 && (s[i] = c || o);
  }), Object.defineProperties(t, s);
}, ap = (t) => {
  Gi(t, (e, n) => {
    if (wt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = t[n];
    if (wt(s)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, cp = (t, e) => {
  const n = {}, s = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return xe(t) ? s(t) : s(String(t).split(e)), n;
}, lp = () => {
}, up = (t, e) => (t = +t, Number.isFinite(t) ? t : e), ds = "abcdefghijklmnopqrstuvwxyz", $o = "0123456789", Zi = {
  DIGIT: $o,
  ALPHA: ds,
  ALPHA_DIGIT: ds + ds.toUpperCase() + $o
}, fp = (t = 16, e = Zi.ALPHA_DIGIT) => {
  let n = "";
  const { length: s } = e;
  for (; t--; )
    n += e[Math.random() * s | 0];
  return n;
};
function dp(t) {
  return !!(t && wt(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const hp = (t) => {
  const e = new Array(10), n = (s, o) => {
    if (Un(s)) {
      if (e.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        e[o] = s;
        const i = xe(s) ? [] : {};
        return on(s, (c, u) => {
          const l = n(c, o + 1);
          !sn(l) && (i[u] = l);
        }), e[o] = void 0, i;
      }
    }
    return s;
  };
  return n(t, 0);
}, pp = kt("AsyncFunction"), mp = (t) => t && (Un(t) || wt(t)) && wt(t.then) && wt(t.catch), A = {
  isArray: xe,
  isArrayBuffer: Ui,
  isBuffer: Ih,
  isFormData: Kh,
  isArrayBufferView: jh,
  isString: Bh,
  isNumber: zi,
  isBoolean: Fh,
  isObject: Un,
  isPlainObject: Nn,
  isUndefined: sn,
  isDate: Hh,
  isFile: Wh,
  isBlob: Vh,
  isRegExp: ip,
  isFunction: wt,
  isStream: zh,
  isURLSearchParams: qh,
  isTypedArray: ep,
  isFileList: Uh,
  forEach: on,
  merge: Ds,
  extend: Gh,
  trim: Yh,
  stripBOM: Zh,
  inherits: Xh,
  toFlatObject: Jh,
  kindOf: Wn,
  kindOfTest: kt,
  endsWith: Qh,
  toArray: tp,
  forEachEntry: np,
  matchAll: sp,
  isHTMLForm: rp,
  hasOwnProperty: Co,
  hasOwnProp: Co,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Gi,
  freezeMethods: ap,
  toObjectSet: cp,
  toCamelCase: op,
  noop: lp,
  toFiniteNumber: up,
  findKey: Ki,
  global: qi,
  isContextDefined: Yi,
  ALPHABET: Zi,
  generateString: fp,
  isSpecCompliantForm: dp,
  toJSONObject: hp,
  isAsyncFn: pp,
  isThenable: mp
};
function z(t, e, n, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), s && (this.request = s), o && (this.response = o);
}
A.inherits(z, Error, {
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
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Xi = z.prototype, Ji = {};
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
].forEach((t) => {
  Ji[t] = { value: t };
});
Object.defineProperties(z, Ji);
Object.defineProperty(Xi, "isAxiosError", { value: !0 });
z.from = (t, e, n, s, o, i) => {
  const c = Object.create(Xi);
  return A.toFlatObject(t, c, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError"), z.call(c, t.message, e, n, s, o), c.cause = t, c.name = t.name, i && Object.assign(c, i), c;
};
const gp = null;
function ks(t) {
  return A.isPlainObject(t) || A.isArray(t);
}
function Qi(t) {
  return A.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function No(t, e, n) {
  return t ? t.concat(e).map(function(o, i) {
    return o = Qi(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function _p(t) {
  return A.isArray(t) && !t.some(ks);
}
const Ep = A.toFlatObject(A, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function zn(t, e, n) {
  if (!A.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = A.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, O) {
    return !A.isUndefined(O[y]);
  });
  const s = n.metaTokens, o = n.visitor || f, i = n.dots, c = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(e);
  if (!A.isFunction(o))
    throw new TypeError("visitor must be a function");
  function p(E) {
    if (E === null)
      return "";
    if (A.isDate(E))
      return E.toISOString();
    if (!l && A.isBlob(E))
      throw new z("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(E) || A.isTypedArray(E) ? l && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E;
  }
  function f(E, y, O) {
    let T = E;
    if (E && !O && typeof E == "object") {
      if (A.endsWith(y, "{}"))
        y = s ? y : y.slice(0, -2), E = JSON.stringify(E);
      else if (A.isArray(E) && _p(E) || (A.isFileList(E) || A.endsWith(y, "[]")) && (T = A.toArray(E)))
        return y = Qi(y), T.forEach(function(k, D) {
          !(A.isUndefined(k) || k === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? No([y], D, i) : c === null ? y : y + "[]",
            p(k)
          );
        }), !1;
    }
    return ks(E) ? !0 : (e.append(No(O, y, i), p(E)), !1);
  }
  const d = [], g = Object.assign(Ep, {
    defaultVisitor: f,
    convertValue: p,
    isVisitable: ks
  });
  function _(E, y) {
    if (!A.isUndefined(E)) {
      if (d.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(E), A.forEach(E, function(T, S) {
        (!(A.isUndefined(T) || T === null) && o.call(
          e,
          T,
          A.isString(S) ? S.trim() : S,
          y,
          g
        )) === !0 && _(T, y ? y.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!A.isObject(t))
    throw new TypeError("data must be an object");
  return _(t), e;
}
function Po(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(s) {
    return e[s];
  });
}
function rr(t, e) {
  this._pairs = [], t && zn(t, this, e);
}
const ta = rr.prototype;
ta.append = function(e, n) {
  this._pairs.push([e, n]);
};
ta.toString = function(e) {
  const n = e ? function(s) {
    return e.call(this, s, Po);
  } : Po;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function yp(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ea(t, e, n) {
  if (!e)
    return t;
  const s = n && n.encode || yp, o = n && n.serialize;
  let i;
  if (o ? i = o(e, n) : i = A.isURLSearchParams(e) ? e.toString() : new rr(e, n).toString(s), i) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class bp {
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
  use(e, n, s) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    A.forEach(this.handlers, function(s) {
      s !== null && e(s);
    });
  }
}
const Ro = bp, na = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, vp = typeof URLSearchParams < "u" ? URLSearchParams : rr, wp = typeof FormData < "u" ? FormData : null, Ap = typeof Blob < "u" ? Blob : null, Op = {
  isBrowser: !0,
  classes: {
    URLSearchParams: vp,
    FormData: wp,
    Blob: Ap
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, sa = typeof window < "u" && typeof document < "u", Tp = ((t) => sa && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), Sp = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: sa,
  hasStandardBrowserEnv: Tp,
  hasStandardBrowserWebWorkerEnv: Sp
}, Symbol.toStringTag, { value: "Module" })), Rt = {
  ...Cp,
  ...Op
};
function $p(t, e) {
  return zn(t, new Rt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, o, i) {
      return Rt.isNode && A.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Np(t) {
  return A.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Pp(t) {
  const e = {}, n = Object.keys(t);
  let s;
  const o = n.length;
  let i;
  for (s = 0; s < o; s++)
    i = n[s], e[i] = t[i];
  return e;
}
function ra(t) {
  function e(n, s, o, i) {
    let c = n[i++];
    const u = Number.isFinite(+c), l = i >= n.length;
    return c = !c && A.isArray(o) ? o.length : c, l ? (A.hasOwnProp(o, c) ? o[c] = [o[c], s] : o[c] = s, !u) : ((!o[c] || !A.isObject(o[c])) && (o[c] = []), e(n, s, o[c], i) && A.isArray(o[c]) && (o[c] = Pp(o[c])), !u);
  }
  if (A.isFormData(t) && A.isFunction(t.entries)) {
    const n = {};
    return A.forEachEntry(t, (s, o) => {
      e(Np(s), o, n, 0);
    }), n;
  }
  return null;
}
function Rp(t, e, n) {
  if (A.isString(t))
    try {
      return (e || JSON.parse)(t), A.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(t);
}
const or = {
  transitional: na,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, n) {
    const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, i = A.isObject(e);
    if (i && A.isHTMLForm(e) && (e = new FormData(e)), A.isFormData(e))
      return o && o ? JSON.stringify(ra(e)) : e;
    if (A.isArrayBuffer(e) || A.isBuffer(e) || A.isStream(e) || A.isFile(e) || A.isBlob(e))
      return e;
    if (A.isArrayBufferView(e))
      return e.buffer;
    if (A.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let u;
    if (i) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return $p(e, this.formSerializer).toString();
      if ((u = A.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return zn(
          u ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Rp(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || or.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (e && A.isString(e) && (s && !this.responseType || o)) {
      const c = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (u) {
        if (c)
          throw u.name === "SyntaxError" ? z.from(u, z.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return e;
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
    FormData: Rt.classes.FormData,
    Blob: Rt.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  or.headers[t] = {};
});
const ir = or, Lp = A.toObjectSet([
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
]), Dp = (t) => {
  const e = {};
  let n, s, o;
  return t && t.split(`
`).forEach(function(c) {
    o = c.indexOf(":"), n = c.substring(0, o).trim().toLowerCase(), s = c.substring(o + 1).trim(), !(!n || e[n] && Lp[n]) && (n === "set-cookie" ? e[n] ? e[n].push(s) : e[n] = [s] : e[n] = e[n] ? e[n] + ", " + s : s);
  }), e;
}, Lo = Symbol("internals");
function ze(t) {
  return t && String(t).trim().toLowerCase();
}
function Pn(t) {
  return t === !1 || t == null ? t : A.isArray(t) ? t.map(Pn) : String(t);
}
function kp(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(t); )
    e[s[1]] = s[2];
  return e;
}
const xp = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function hs(t, e, n, s, o) {
  if (A.isFunction(s))
    return s.call(this, e, n);
  if (o && (e = n), !!A.isString(e)) {
    if (A.isString(s))
      return e.indexOf(s) !== -1;
    if (A.isRegExp(s))
      return s.test(e);
  }
}
function Mp(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, s) => n.toUpperCase() + s);
}
function Ip(t, e) {
  const n = A.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(t, s + n, {
      value: function(o, i, c) {
        return this[s].call(this, e, o, i, c);
      },
      configurable: !0
    });
  });
}
class Kn {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, s) {
    const o = this;
    function i(u, l, p) {
      const f = ze(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = A.findKey(o, f);
      (!d || o[d] === void 0 || p === !0 || p === void 0 && o[d] !== !1) && (o[d || l] = Pn(u));
    }
    const c = (u, l) => A.forEach(u, (p, f) => i(p, f, l));
    return A.isPlainObject(e) || e instanceof this.constructor ? c(e, n) : A.isString(e) && (e = e.trim()) && !xp(e) ? c(Dp(e), n) : e != null && i(n, e, s), this;
  }
  get(e, n) {
    if (e = ze(e), e) {
      const s = A.findKey(this, e);
      if (s) {
        const o = this[s];
        if (!n)
          return o;
        if (n === !0)
          return kp(o);
        if (A.isFunction(n))
          return n.call(this, o, s);
        if (A.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = ze(e), e) {
      const s = A.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!n || hs(this, this[s], s, n)));
    }
    return !1;
  }
  delete(e, n) {
    const s = this;
    let o = !1;
    function i(c) {
      if (c = ze(c), c) {
        const u = A.findKey(s, c);
        u && (!n || hs(s, s[u], u, n)) && (delete s[u], o = !0);
      }
    }
    return A.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let s = n.length, o = !1;
    for (; s--; ) {
      const i = n[s];
      (!e || hs(this, this[i], i, e, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(e) {
    const n = this, s = {};
    return A.forEach(this, (o, i) => {
      const c = A.findKey(s, i);
      if (c) {
        n[c] = Pn(o), delete n[i];
        return;
      }
      const u = e ? Mp(i) : String(i).trim();
      u !== i && delete n[i], n[u] = Pn(o), s[u] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (s, o) => {
      s != null && s !== !1 && (n[o] = e && A.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const s = new this(e);
    return n.forEach((o) => s.set(o)), s;
  }
  static accessor(e) {
    const s = (this[Lo] = this[Lo] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(c) {
      const u = ze(c);
      s[u] || (Ip(o, c), s[u] = !0);
    }
    return A.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
Kn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(Kn.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(s) {
      this[n] = s;
    }
  };
});
A.freezeMethods(Kn);
const Ft = Kn;
function ps(t, e) {
  const n = this || ir, s = e || n, o = Ft.from(s.headers);
  let i = s.data;
  return A.forEach(t, function(u) {
    i = u.call(n, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function oa(t) {
  return !!(t && t.__CANCEL__);
}
function an(t, e, n) {
  z.call(this, t ?? "canceled", z.ERR_CANCELED, e, n), this.name = "CanceledError";
}
A.inherits(an, z, {
  __CANCEL__: !0
});
function jp(t, e, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? t(n) : e(new z(
    "Request failed with status code " + n.status,
    [z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Bp = Rt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, s, o, i) {
      const c = [t + "=" + encodeURIComponent(e)];
      A.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()), A.isString(s) && c.push("path=" + s), A.isString(o) && c.push("domain=" + o), i === !0 && c.push("secure"), document.cookie = c.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
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
function Fp(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Hp(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ia(t, e) {
  return t && !Fp(e) ? Hp(t, e) : e;
}
const Wp = Rt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let s;
    function o(i) {
      let c = i;
      return e && (n.setAttribute("href", c), c = n.href), n.setAttribute("href", c), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return s = o(window.location.href), function(c) {
      const u = A.isString(c) ? o(c) : c;
      return u.protocol === s.protocol && u.host === s.host;
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
function Vp(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Up(t, e) {
  t = t || 10;
  const n = new Array(t), s = new Array(t);
  let o = 0, i = 0, c;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const p = Date.now(), f = s[i];
    c || (c = p), n[o] = l, s[o] = p;
    let d = i, g = 0;
    for (; d !== o; )
      g += n[d++], d = d % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), p - c < e)
      return;
    const _ = f && p - f;
    return _ ? Math.round(g * 1e3 / _) : void 0;
  };
}
function Do(t, e) {
  let n = 0;
  const s = Up(50, 250);
  return (o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, u = i - n, l = s(u), p = i <= c;
    n = i;
    const f = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: u,
      rate: l || void 0,
      estimated: l && c && p ? (c - i) / l : void 0,
      event: o
    };
    f[e ? "download" : "upload"] = !0, t(f);
  };
}
const zp = typeof XMLHttpRequest < "u", Kp = zp && function(t) {
  return new Promise(function(n, s) {
    let o = t.data;
    const i = Ft.from(t.headers).normalize();
    let { responseType: c, withXSRFToken: u } = t, l;
    function p() {
      t.cancelToken && t.cancelToken.unsubscribe(l), t.signal && t.signal.removeEventListener("abort", l);
    }
    let f;
    if (A.isFormData(o)) {
      if (Rt.hasStandardBrowserEnv || Rt.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((f = i.getContentType()) !== !1) {
        const [y, ...O] = f ? f.split(";").map((T) => T.trim()).filter(Boolean) : [];
        i.setContentType([y || "multipart/form-data", ...O].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (t.auth) {
      const y = t.auth.username || "", O = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(y + ":" + O));
    }
    const g = ia(t.baseURL, t.url);
    d.open(t.method.toUpperCase(), ea(g, t.params, t.paramsSerializer), !0), d.timeout = t.timeout;
    function _() {
      if (!d)
        return;
      const y = Ft.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), T = {
        data: !c || c === "text" || c === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: y,
        config: t,
        request: d
      };
      jp(function(k) {
        n(k), p();
      }, function(k) {
        s(k), p();
      }, T), d = null;
    }
    if ("onloadend" in d ? d.onloadend = _ : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, d.onabort = function() {
      d && (s(new z("Request aborted", z.ECONNABORTED, t, d)), d = null);
    }, d.onerror = function() {
      s(new z("Network Error", z.ERR_NETWORK, t, d)), d = null;
    }, d.ontimeout = function() {
      let O = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const T = t.transitional || na;
      t.timeoutErrorMessage && (O = t.timeoutErrorMessage), s(new z(
        O,
        T.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
        t,
        d
      )), d = null;
    }, Rt.hasStandardBrowserEnv && (u && A.isFunction(u) && (u = u(t)), u || u !== !1 && Wp(g))) {
      const y = t.xsrfHeaderName && t.xsrfCookieName && Bp.read(t.xsrfCookieName);
      y && i.set(t.xsrfHeaderName, y);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in d && A.forEach(i.toJSON(), function(O, T) {
      d.setRequestHeader(T, O);
    }), A.isUndefined(t.withCredentials) || (d.withCredentials = !!t.withCredentials), c && c !== "json" && (d.responseType = t.responseType), typeof t.onDownloadProgress == "function" && d.addEventListener("progress", Do(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Do(t.onUploadProgress)), (t.cancelToken || t.signal) && (l = (y) => {
      d && (s(!y || y.type ? new an(null, t, d) : y), d.abort(), d = null);
    }, t.cancelToken && t.cancelToken.subscribe(l), t.signal && (t.signal.aborted ? l() : t.signal.addEventListener("abort", l)));
    const E = Vp(g);
    if (E && Rt.protocols.indexOf(E) === -1) {
      s(new z("Unsupported protocol " + E + ":", z.ERR_BAD_REQUEST, t));
      return;
    }
    d.send(o || null);
  });
}, xs = {
  http: gp,
  xhr: Kp
};
A.forEach(xs, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const ko = (t) => `- ${t}`, qp = (t) => A.isFunction(t) || t === null || t === !1, aa = {
  getAdapter: (t) => {
    t = A.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, s;
    const o = {};
    for (let i = 0; i < e; i++) {
      n = t[i];
      let c;
      if (s = n, !qp(n) && (s = xs[(c = String(n)).toLowerCase()], s === void 0))
        throw new z(`Unknown adapter '${c}'`);
      if (s)
        break;
      o[c || "#" + i] = s;
    }
    if (!s) {
      const i = Object.entries(o).map(
        ([u, l]) => `adapter ${u} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = e ? i.length > 1 ? `since :
` + i.map(ko).join(`
`) : " " + ko(i[0]) : "as no adapter specified";
      throw new z(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: xs
};
function ms(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new an(null, t);
}
function xo(t) {
  return ms(t), t.headers = Ft.from(t.headers), t.data = ps.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), aa.getAdapter(t.adapter || ir.adapter)(t).then(function(s) {
    return ms(t), s.data = ps.call(
      t,
      t.transformResponse,
      s
    ), s.headers = Ft.from(s.headers), s;
  }, function(s) {
    return oa(s) || (ms(t), s && s.response && (s.response.data = ps.call(
      t,
      t.transformResponse,
      s.response
    ), s.response.headers = Ft.from(s.response.headers))), Promise.reject(s);
  });
}
const Mo = (t) => t instanceof Ft ? t.toJSON() : t;
function De(t, e) {
  e = e || {};
  const n = {};
  function s(p, f, d) {
    return A.isPlainObject(p) && A.isPlainObject(f) ? A.merge.call({ caseless: d }, p, f) : A.isPlainObject(f) ? A.merge({}, f) : A.isArray(f) ? f.slice() : f;
  }
  function o(p, f, d) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(p))
        return s(void 0, p, d);
    } else
      return s(p, f, d);
  }
  function i(p, f) {
    if (!A.isUndefined(f))
      return s(void 0, f);
  }
  function c(p, f) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(p))
        return s(void 0, p);
    } else
      return s(void 0, f);
  }
  function u(p, f, d) {
    if (d in e)
      return s(p, f);
    if (d in t)
      return s(void 0, p);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: u,
    headers: (p, f) => o(Mo(p), Mo(f), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const d = l[f] || o, g = d(t[f], e[f], f);
    A.isUndefined(g) && d !== u || (n[f] = g);
  }), n;
}
const ca = "1.6.2", ar = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  ar[t] = function(s) {
    return typeof s === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Io = {};
ar.transitional = function(e, n, s) {
  function o(i, c) {
    return "[Axios v" + ca + "] Transitional option '" + i + "'" + c + (s ? ". " + s : "");
  }
  return (i, c, u) => {
    if (e === !1)
      throw new z(
        o(c, " has been removed" + (n ? " in " + n : "")),
        z.ERR_DEPRECATED
      );
    return n && !Io[c] && (Io[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(i, c, u) : !0;
  };
};
function Yp(t, e, n) {
  if (typeof t != "object")
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(t);
  let o = s.length;
  for (; o-- > 0; ) {
    const i = s[o], c = e[i];
    if (c) {
      const u = t[i], l = u === void 0 || c(u, i, t);
      if (l !== !0)
        throw new z("option " + i + " must be " + l, z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new z("Unknown option " + i, z.ERR_BAD_OPTION);
  }
}
const Ms = {
  assertOptions: Yp,
  validators: ar
}, Kt = Ms.validators;
class xn {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Ro(),
      response: new Ro()
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
  request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = De(this.defaults, n);
    const { transitional: s, paramsSerializer: o, headers: i } = n;
    s !== void 0 && Ms.assertOptions(s, {
      silentJSONParsing: Kt.transitional(Kt.boolean),
      forcedJSONParsing: Kt.transitional(Kt.boolean),
      clarifyTimeoutError: Kt.transitional(Kt.boolean)
    }, !1), o != null && (A.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Ms.assertOptions(o, {
      encode: Kt.function,
      serialize: Kt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let c = i && A.merge(
      i.common,
      i[n.method]
    );
    i && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (E) => {
        delete i[E];
      }
    ), n.headers = Ft.concat(c, i);
    const u = [];
    let l = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (l = l && y.synchronous, u.unshift(y.fulfilled, y.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(y) {
      p.push(y.fulfilled, y.rejected);
    });
    let f, d = 0, g;
    if (!l) {
      const E = [xo.bind(this), void 0];
      for (E.unshift.apply(E, u), E.push.apply(E, p), g = E.length, f = Promise.resolve(n); d < g; )
        f = f.then(E[d++], E[d++]);
      return f;
    }
    g = u.length;
    let _ = n;
    for (d = 0; d < g; ) {
      const E = u[d++], y = u[d++];
      try {
        _ = E(_);
      } catch (O) {
        y.call(this, O);
        break;
      }
    }
    try {
      f = xo.call(this, _);
    } catch (E) {
      return Promise.reject(E);
    }
    for (d = 0, g = p.length; d < g; )
      f = f.then(p[d++], p[d++]);
    return f;
  }
  getUri(e) {
    e = De(this.defaults, e);
    const n = ia(e.baseURL, e.url);
    return ea(n, e.params, e.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(e) {
  xn.prototype[e] = function(n, s) {
    return this.request(De(s || {}, {
      method: e,
      url: n,
      data: (s || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(e) {
  function n(s) {
    return function(i, c, u) {
      return this.request(De(u || {}, {
        method: e,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: c
      }));
    };
  }
  xn.prototype[e] = n(), xn.prototype[e + "Form"] = n(!0);
});
const Rn = xn;
class cr {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const s = this;
    this.promise.then((o) => {
      if (!s._listeners)
        return;
      let i = s._listeners.length;
      for (; i-- > 0; )
        s._listeners[i](o);
      s._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const c = new Promise((u) => {
        s.subscribe(u), i = u;
      }).then(o);
      return c.cancel = function() {
        s.unsubscribe(i);
      }, c;
    }, e(function(i, c, u) {
      s.reason || (s.reason = new an(i, c, u), n(s.reason));
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new cr(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const Gp = cr;
function Zp(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Xp(t) {
  return A.isObject(t) && t.isAxiosError === !0;
}
const Is = {
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
Object.entries(Is).forEach(([t, e]) => {
  Is[e] = t;
});
const Jp = Is;
function la(t) {
  const e = new Rn(t), n = Vi(Rn.prototype.request, e);
  return A.extend(n, Rn.prototype, e, { allOwnKeys: !0 }), A.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return la(De(t, o));
  }, n;
}
const Q = la(ir);
Q.Axios = Rn;
Q.CanceledError = an;
Q.CancelToken = Gp;
Q.isCancel = oa;
Q.VERSION = ca;
Q.toFormData = zn;
Q.AxiosError = z;
Q.Cancel = Q.CanceledError;
Q.all = function(e) {
  return Promise.all(e);
};
Q.spread = Zp;
Q.isAxiosError = Xp;
Q.mergeConfig = De;
Q.AxiosHeaders = Ft;
Q.formToJSON = (t) => ra(A.isHTMLForm(t) ? new FormData(t) : t);
Q.getAdapter = aa.getAdapter;
Q.HttpStatusCode = Jp;
Q.default = Q;
const Qp = Q, jo = (t) => {
  let e = !1, n;
  return () => (e || (e = !0, n = t()), n);
};
class js {
  static isServer() {
    return typeof document > "u";
  }
}
function tm(t) {
  const e = document.createElement("SCRIPT");
  if (typeof t != "object")
    throw new Error("options should  be an object");
  Array.prototype.isPrototypeOf(t.libraries) && (t.libraries = t.libraries.join(",")), t.v || (t.v = 3.47), t.callback = "vueGoogleMapsInit";
  let s = "https://maps.googleapis.com/maps/api/js?" + Object.keys(t).map((o) => encodeURIComponent(o) + "=" + encodeURIComponent(t[o])).join("&");
  return e.setAttribute("src", s), e.setAttribute("async", ""), e.setAttribute("defer", ""), e;
}
let Bo = !1;
function em(t) {
  if (!js.isServer()) {
    if (Bo)
      throw new Error("You already started the loading of google maps");
    {
      Bo = !0;
      const e = tm(t);
      document.head.appendChild(e);
    }
  }
}
const ua = (t, e, n) => {
  for (let s of n) {
    const o = `on${s.charAt(0).toUpperCase()}${s.slice(1)}`.replace(/[-_]+(.)?/g, (i, c) => c ? c.toUpperCase() : "");
    t.$props[o] || t.$attrs[o] ? e.addListener(s, (i) => {
      t.$emit(s, i);
    }) : (t.$gmapOptions.autobindAllEvents || t.$attrs[s]) && e.addListener(s, (i) => {
      t.$emit(s, i);
    });
  }
};
function fa(t, e, n, s = !1) {
  let o = !1;
  function i() {
    o || (o = !0, t.$nextTick(() => {
      o = !1, n();
    }));
  }
  for (let c of e)
    t.$watch(c, i, { immediate: s });
}
class Fo {
  static capitalizeFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
}
function Mn(t, e) {
  return Object.keys(e).reduce((n, s) => (t[s] !== void 0 && (n[s] = t[s]), n), {});
}
function lr(t, e, n) {
  for (let s in n) {
    let { twoWay: o, type: i, trackProperties: c, noBind: u } = n[s];
    if (u)
      continue;
    const l = "set" + Fo.capitalizeFirstLetter(s), p = "get" + Fo.capitalizeFirstLetter(s), f = s.toLowerCase() + "_changed", d = t[s];
    if (typeof e[l] > "u")
      throw new Error(
        `${l} is not a method of (the Maps object corresponding to) ${t.$options._componentTag}`
      );
    i !== Object || !c ? t.$watch(
      s,
      () => {
        const g = t[s];
        e[l](g);
      },
      {
        immediate: typeof d < "u",
        deep: i === Object
      }
    ) : fa(
      t,
      c.map((g) => `${s}.${g}`),
      () => {
        e[l](t[s]);
      },
      t[s] !== void 0
    ), o && (t.$gmapOptions.autobindAllEvents || t.$attrs[f]) && e.addListener(f, () => {
      t.$emit(f, e[p]());
    });
  }
}
const nm = {
  inject: {
    $mapPromise: { default: "abcdef" }
  },
  provide() {
    return this.$mapPromise.then((t) => {
      this.$map = t;
    }), {};
  }
};
function Qt(t) {
  const {
    mappedProps: e,
    name: n,
    ctr: s,
    ctrArgs: o,
    events: i,
    beforeCreate: c,
    afterCreate: u,
    props: l,
    ...p
  } = t, f = `$${n}Promise`, d = `$${n}Object`;
  return sm(!(p.props instanceof Array), "`props` should be an object, not Array"), {
    ...typeof GENERATE_DOC < "u" ? { $vgmOptions: t } : {},
    mixins: [nm],
    props: {
      ...l,
      ...ur(e)
    },
    render() {
      return "";
    },
    provide() {
      const g = this.$mapPromise.then((_) => {
        this.$map = _;
        const E = {
          ...this.options,
          map: _,
          ...Mn(this, e)
        };
        if (delete E.options, c) {
          const y = c.bind(this)(E);
          if (y instanceof Promise)
            return y.then(() => ({ options: E }));
        }
        return { options: E };
      }).then(({ options: _ }) => {
        const E = s();
        return this[d] = o ? new (Function.prototype.bind.call(
          E,
          null,
          ...o(_, Mn(this, l || {}))
        ))() : new E(_), lr(this, this[d], e), ua(this, this[d], i), u && u.bind(this)(this[d]), this[d];
      });
      return this[f] = g, { [f]: g };
    },
    unmounted() {
      this[d] && this[d].setMap && this[d].setMap(null);
    },
    ...p
  };
}
function sm(t, e) {
  if (!t)
    throw new Error(e);
}
function ur(t) {
  return Object.entries(t).map(([e, n]) => {
    const s = {};
    return "type" in n && (s.type = n.type), "default" in n && (s.default = n.default), "required" in n && (s.required = n.required), [e, s];
  }).reduce((e, [n, s]) => (e[n] = s, e), {});
}
const rm = {
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
}, om = [
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
], im = Qt({
  mappedProps: rm,
  props: {
    deepWatch: {
      type: Boolean,
      default: !1
    }
  },
  events: om,
  name: "polyline",
  ctr: () => google.maps.Polyline,
  afterCreate() {
    let t = () => {
    };
    this.$watch(
      "path",
      (e) => {
        if (e) {
          t(), this.$polylineObject.setPath(e);
          const n = this.$polylineObject.getPath(), s = [], o = () => {
            this.$emit("path_changed", this.$polylineObject.getPath());
          };
          s.push([n, n.addListener("insert_at", o)]), s.push([n, n.addListener("remove_at", o)]), s.push([n, n.addListener("set_at", o)]), t = () => {
            s.map(([i, c]) => google.maps.event.removeListener(c));
          };
        }
      },
      {
        deep: this.deepWatch,
        immediate: !0
      }
    );
  }
}), am = {
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
}, cm = [
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
], lm = Qt({
  props: {
    deepWatch: {
      type: Boolean,
      default: !1
    }
  },
  events: cm,
  mappedProps: am,
  name: "polygon",
  ctr: () => google.maps.Polygon,
  beforeCreate(t) {
    t.path || delete t.path, t.paths || delete t.paths;
  },
  afterCreate(t) {
    let e = () => {
    };
    this.$watch(
      "paths",
      (n) => {
        if (n) {
          e(), t.setPaths(n);
          const s = () => {
            this.$emit("paths_changed", t.getPaths());
          }, o = [], i = t.getPaths();
          for (let c = 0; c < i.getLength(); c++) {
            let u = i.getAt(c);
            o.push([u, u.addListener("insert_at", s)]), o.push([u, u.addListener("remove_at", s)]), o.push([u, u.addListener("set_at", s)]);
          }
          o.push([i, i.addListener("insert_at", s)]), o.push([i, i.addListener("remove_at", s)]), o.push([i, i.addListener("set_at", s)]), e = () => {
            o.map(([c, u]) => google.maps.event.removeListener(u));
          };
        }
      },
      {
        deep: this.deepWatch,
        immediate: !0
      }
    ), this.$watch(
      "path",
      (n) => {
        if (n) {
          e(), t.setPaths(n);
          const s = t.getPath(), o = [], i = () => {
            this.$emit("path_changed", t.getPath());
          };
          o.push([s, s.addListener("insert_at", i)]), o.push([s, s.addListener("remove_at", i)]), o.push([s, s.addListener("set_at", i)]), e = () => {
            o.map(([c, u]) => google.maps.event.removeListener(u));
          };
        }
      },
      {
        deep: this.deepWatch,
        immediate: !0
      }
    );
  }
}), um = {
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
}, fm = [
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
], dm = Qt({
  mappedProps: um,
  name: "circle",
  ctr: () => google.maps.Circle,
  events: fm
}), hm = {
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
}, pm = [
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
], mm = Qt({
  mappedProps: hm,
  name: "rectangle",
  ctr: () => google.maps.Rectangle,
  events: pm
}), gm = {
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
}, gs = [
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
], _m = Qt({
  mappedProps: gm,
  events: gs,
  name: "marker",
  ctr: () => google.maps.Marker,
  inject: {
    $clusterPromise: {
      default: null
    }
  },
  emits: gs,
  unmounted() {
    this.$markerObject && (this.$clusterObject ? this.$clusterObject.removeMarker(this.$markerObject, !0) : this.$markerObject.setMap(null));
  },
  beforeCreate(t) {
    return this.$clusterPromise && (t.map = null), this.$clusterPromise;
  },
  afterCreate(t) {
    gs.forEach((e) => {
      t.addListener(e, (n) => {
        this.$emit(e, n);
      });
    }), this.$clusterPromise && this.$clusterPromise.then((e) => {
      this.$clusterObject = e, e.addMarker(t);
    });
  }
});
function Em(t, e, n, s, o, i) {
  return Ht(), fe("div", {
    onClick: e[0] || (e[0] = () => {
      console.log("sdfsd");
    })
  }, [
    en(t.$slots, "default")
  ]);
}
const ym = /* @__PURE__ */ Jt(_m, [["render", Em]]);
var bm = function t(e, n) {
  if (e === n)
    return !0;
  if (e && n && typeof e == "object" && typeof n == "object") {
    if (e.constructor !== n.constructor)
      return !1;
    var s, o, i;
    if (Array.isArray(e)) {
      if (s = e.length, s != n.length)
        return !1;
      for (o = s; o-- !== 0; )
        if (!t(e[o], n[o]))
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === n.source && e.flags === n.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === n.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === n.toString();
    if (i = Object.keys(e), s = i.length, s !== Object.keys(n).length)
      return !1;
    for (o = s; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, i[o]))
        return !1;
    for (o = s; o-- !== 0; ) {
      var c = i[o];
      if (!t(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
};
const Ho = /* @__PURE__ */ hf(bm), Wo = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
], _s = 1, Ke = 8;
class fr {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(e) {
    if (!(e instanceof ArrayBuffer))
      throw new Error("Data must be an instance of ArrayBuffer.");
    const [n, s] = new Uint8Array(e, 0, 2);
    if (n !== 219)
      throw new Error("Data does not appear to be in a KDBush format.");
    const o = s >> 4;
    if (o !== _s)
      throw new Error(`Got v${o} data when expected v${_s}.`);
    const i = Wo[s & 15];
    if (!i)
      throw new Error("Unrecognized array type.");
    const [c] = new Uint16Array(e, 2, 1), [u] = new Uint32Array(e, 4, 1);
    return new fr(u, c, i, e);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(e, n = 64, s = Float64Array, o) {
    if (isNaN(e) || e < 0)
      throw new Error(`Unpexpected numItems value: ${e}.`);
    this.numItems = +e, this.nodeSize = Math.min(Math.max(+n, 2), 65535), this.ArrayType = s, this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array;
    const i = Wo.indexOf(this.ArrayType), c = e * 2 * this.ArrayType.BYTES_PER_ELEMENT, u = e * this.IndexArrayType.BYTES_PER_ELEMENT, l = (8 - u % 8) % 8;
    if (i < 0)
      throw new Error(`Unexpected typed array class: ${s}.`);
    o && o instanceof ArrayBuffer ? (this.data = o, this.ids = new this.IndexArrayType(this.data, Ke, e), this.coords = new this.ArrayType(this.data, Ke + u + l, e * 2), this._pos = e * 2, this._finished = !0) : (this.data = new ArrayBuffer(Ke + c + u + l), this.ids = new this.IndexArrayType(this.data, Ke, e), this.coords = new this.ArrayType(this.data, Ke + u + l, e * 2), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, (_s << 4) + i]), new Uint16Array(this.data, 2, 1)[0] = n, new Uint32Array(this.data, 4, 1)[0] = e);
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(e, n) {
    const s = this._pos >> 1;
    return this.ids[s] = s, this.coords[this._pos++] = e, this.coords[this._pos++] = n, s;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    const e = this._pos >> 1;
    if (e !== this.numItems)
      throw new Error(`Added ${e} items when expected ${this.numItems}.`);
    return Bs(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(e, n, s, o) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: i, coords: c, nodeSize: u } = this, l = [0, i.length - 1, 0], p = [];
    for (; l.length; ) {
      const f = l.pop() || 0, d = l.pop() || 0, g = l.pop() || 0;
      if (d - g <= u) {
        for (let O = g; O <= d; O++) {
          const T = c[2 * O], S = c[2 * O + 1];
          T >= e && T <= s && S >= n && S <= o && p.push(i[O]);
        }
        continue;
      }
      const _ = g + d >> 1, E = c[2 * _], y = c[2 * _ + 1];
      E >= e && E <= s && y >= n && y <= o && p.push(i[_]), (f === 0 ? e <= E : n <= y) && (l.push(g), l.push(_ - 1), l.push(1 - f)), (f === 0 ? s >= E : o >= y) && (l.push(_ + 1), l.push(d), l.push(1 - f));
    }
    return p;
  }
  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(e, n, s) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: o, coords: i, nodeSize: c } = this, u = [0, o.length - 1, 0], l = [], p = s * s;
    for (; u.length; ) {
      const f = u.pop() || 0, d = u.pop() || 0, g = u.pop() || 0;
      if (d - g <= c) {
        for (let O = g; O <= d; O++)
          Vo(i[2 * O], i[2 * O + 1], e, n) <= p && l.push(o[O]);
        continue;
      }
      const _ = g + d >> 1, E = i[2 * _], y = i[2 * _ + 1];
      Vo(E, y, e, n) <= p && l.push(o[_]), (f === 0 ? e - s <= E : n - s <= y) && (u.push(g), u.push(_ - 1), u.push(1 - f)), (f === 0 ? e + s >= E : n + s >= y) && (u.push(_ + 1), u.push(d), u.push(1 - f));
    }
    return l;
  }
}
function Bs(t, e, n, s, o, i) {
  if (o - s <= n)
    return;
  const c = s + o >> 1;
  da(t, e, c, s, o, i), Bs(t, e, n, s, c - 1, 1 - i), Bs(t, e, n, c + 1, o, 1 - i);
}
function da(t, e, n, s, o, i) {
  for (; o > s; ) {
    if (o - s > 600) {
      const p = o - s + 1, f = n - s + 1, d = Math.log(p), g = 0.5 * Math.exp(2 * d / 3), _ = 0.5 * Math.sqrt(d * g * (p - g) / p) * (f - p / 2 < 0 ? -1 : 1), E = Math.max(s, Math.floor(n - f * g / p + _)), y = Math.min(o, Math.floor(n + (p - f) * g / p + _));
      da(t, e, n, E, y, i);
    }
    const c = e[2 * n + i];
    let u = s, l = o;
    for (qe(t, e, s, n), e[2 * o + i] > c && qe(t, e, s, o); u < l; ) {
      for (qe(t, e, u, l), u++, l--; e[2 * u + i] < c; )
        u++;
      for (; e[2 * l + i] > c; )
        l--;
    }
    e[2 * s + i] === c ? qe(t, e, s, l) : (l++, qe(t, e, l, o)), l <= n && (s = l + 1), n <= l && (o = l - 1);
  }
}
function qe(t, e, n, s) {
  Es(t, n, s), Es(e, 2 * n, 2 * s), Es(e, 2 * n + 1, 2 * s + 1);
}
function Es(t, e, n) {
  const s = t[e];
  t[e] = t[n], t[n] = s;
}
function Vo(t, e, n, s) {
  const o = t - n, i = e - s;
  return o * o + i * i;
}
const vm = {
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
  map: (t) => t
  // props => ({sum: props.my_value})
}, Uo = Math.fround || /* @__PURE__ */ ((t) => (e) => (t[0] = +e, t[0]))(new Float32Array(1)), ae = 2, Zt = 3, ys = 4, Yt = 5, ha = 6;
class wm {
  constructor(e) {
    this.options = Object.assign(Object.create(vm), e), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
  }
  load(e) {
    const { log: n, minZoom: s, maxZoom: o } = this.options;
    n && console.time("total time");
    const i = `prepare ${e.length} points`;
    n && console.time(i), this.points = e;
    const c = [];
    for (let l = 0; l < e.length; l++) {
      const p = e[l];
      if (!p.geometry)
        continue;
      const [f, d] = p.geometry.coordinates, g = Uo(Sn(f)), _ = Uo(Cn(d));
      c.push(
        g,
        _,
        // projected point coordinates
        1 / 0,
        // the last zoom the point was processed at
        l,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      ), this.options.reduce && c.push(0);
    }
    let u = this.trees[o + 1] = this._createTree(c);
    n && console.timeEnd(i);
    for (let l = o; l >= s; l--) {
      const p = +Date.now();
      u = this.trees[l] = this._createTree(this._cluster(u, l)), n && console.log("z%d: %d clusters in %dms", l, u.numItems, +Date.now() - p);
    }
    return n && console.timeEnd("total time"), this;
  }
  getClusters(e, n) {
    let s = ((e[0] + 180) % 360 + 360) % 360 - 180;
    const o = Math.max(-90, Math.min(90, e[1]));
    let i = e[2] === 180 ? 180 : ((e[2] + 180) % 360 + 360) % 360 - 180;
    const c = Math.max(-90, Math.min(90, e[3]));
    if (e[2] - e[0] >= 360)
      s = -180, i = 180;
    else if (s > i) {
      const d = this.getClusters([s, o, 180, c], n), g = this.getClusters([-180, o, i, c], n);
      return d.concat(g);
    }
    const u = this.trees[this._limitZoom(n)], l = u.range(Sn(s), Cn(c), Sn(i), Cn(o)), p = u.data, f = [];
    for (const d of l) {
      const g = this.stride * d;
      f.push(p[g + Yt] > 1 ? zo(p, g, this.clusterProps) : this.points[p[g + Zt]]);
    }
    return f;
  }
  getChildren(e) {
    const n = this._getOriginId(e), s = this._getOriginZoom(e), o = "No cluster with the specified id.", i = this.trees[s];
    if (!i)
      throw new Error(o);
    const c = i.data;
    if (n * this.stride >= c.length)
      throw new Error(o);
    const u = this.options.radius / (this.options.extent * Math.pow(2, s - 1)), l = c[n * this.stride], p = c[n * this.stride + 1], f = i.within(l, p, u), d = [];
    for (const g of f) {
      const _ = g * this.stride;
      c[_ + ys] === e && d.push(c[_ + Yt] > 1 ? zo(c, _, this.clusterProps) : this.points[c[_ + Zt]]);
    }
    if (d.length === 0)
      throw new Error(o);
    return d;
  }
  getLeaves(e, n, s) {
    n = n || 10, s = s || 0;
    const o = [];
    return this._appendLeaves(o, e, n, s, 0), o;
  }
  getTile(e, n, s) {
    const o = this.trees[this._limitZoom(e)], i = Math.pow(2, e), { extent: c, radius: u } = this.options, l = u / c, p = (s - l) / i, f = (s + 1 + l) / i, d = {
      features: []
    };
    return this._addTileFeatures(
      o.range((n - l) / i, p, (n + 1 + l) / i, f),
      o.data,
      n,
      s,
      i,
      d
    ), n === 0 && this._addTileFeatures(
      o.range(1 - l / i, p, 1, f),
      o.data,
      i,
      s,
      i,
      d
    ), n === i - 1 && this._addTileFeatures(
      o.range(0, p, l / i, f),
      o.data,
      -1,
      s,
      i,
      d
    ), d.features.length ? d : null;
  }
  getClusterExpansionZoom(e) {
    let n = this._getOriginZoom(e) - 1;
    for (; n <= this.options.maxZoom; ) {
      const s = this.getChildren(e);
      if (n++, s.length !== 1)
        break;
      e = s[0].properties.cluster_id;
    }
    return n;
  }
  _appendLeaves(e, n, s, o, i) {
    const c = this.getChildren(n);
    for (const u of c) {
      const l = u.properties;
      if (l && l.cluster ? i + l.point_count <= o ? i += l.point_count : i = this._appendLeaves(e, l.cluster_id, s, o, i) : i < o ? i++ : e.push(u), e.length === s)
        break;
    }
    return i;
  }
  _createTree(e) {
    const n = new fr(e.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let s = 0; s < e.length; s += this.stride)
      n.add(e[s], e[s + 1]);
    return n.finish(), n.data = e, n;
  }
  _addTileFeatures(e, n, s, o, i, c) {
    for (const u of e) {
      const l = u * this.stride, p = n[l + Yt] > 1;
      let f, d, g;
      if (p)
        f = pa(n, l, this.clusterProps), d = n[l], g = n[l + 1];
      else {
        const y = this.points[n[l + Zt]];
        f = y.properties;
        const [O, T] = y.geometry.coordinates;
        d = Sn(O), g = Cn(T);
      }
      const _ = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (d * i - s)),
          Math.round(this.options.extent * (g * i - o))
        ]],
        tags: f
      };
      let E;
      p || this.options.generateId ? E = n[l + Zt] : E = this.points[n[l + Zt]].id, E !== void 0 && (_.id = E), c.features.push(_);
    }
  }
  _limitZoom(e) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+e), this.options.maxZoom + 1));
  }
  _cluster(e, n) {
    const { radius: s, extent: o, reduce: i, minPoints: c } = this.options, u = s / (o * Math.pow(2, n)), l = e.data, p = [], f = this.stride;
    for (let d = 0; d < l.length; d += f) {
      if (l[d + ae] <= n)
        continue;
      l[d + ae] = n;
      const g = l[d], _ = l[d + 1], E = e.within(l[d], l[d + 1], u), y = l[d + Yt];
      let O = y;
      for (const T of E) {
        const S = T * f;
        l[S + ae] > n && (O += l[S + Yt]);
      }
      if (O > y && O >= c) {
        let T = g * y, S = _ * y, k, D = -1;
        const x = ((d / f | 0) << 5) + (n + 1) + this.points.length;
        for (const F of E) {
          const j = F * f;
          if (l[j + ae] <= n)
            continue;
          l[j + ae] = n;
          const I = l[j + Yt];
          T += l[j] * I, S += l[j + 1] * I, l[j + ys] = x, i && (k || (k = this._map(l, d, !0), D = this.clusterProps.length, this.clusterProps.push(k)), i(k, this._map(l, j)));
        }
        l[d + ys] = x, p.push(T / O, S / O, 1 / 0, x, -1, O), i && p.push(D);
      } else {
        for (let T = 0; T < f; T++)
          p.push(l[d + T]);
        if (O > 1)
          for (const T of E) {
            const S = T * f;
            if (!(l[S + ae] <= n)) {
              l[S + ae] = n;
              for (let k = 0; k < f; k++)
                p.push(l[S + k]);
            }
          }
      }
    }
    return p;
  }
  // get index of the point from which the cluster originated
  _getOriginId(e) {
    return e - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(e) {
    return (e - this.points.length) % 32;
  }
  _map(e, n, s) {
    if (e[n + Yt] > 1) {
      const c = this.clusterProps[e[n + ha]];
      return s ? Object.assign({}, c) : c;
    }
    const o = this.points[e[n + Zt]].properties, i = this.options.map(o);
    return s && i === o ? Object.assign({}, i) : i;
  }
}
function zo(t, e, n) {
  return {
    type: "Feature",
    id: t[e + Zt],
    properties: pa(t, e, n),
    geometry: {
      type: "Point",
      coordinates: [Am(t[e]), Om(t[e + 1])]
    }
  };
}
function pa(t, e, n) {
  const s = t[e + Yt], o = s >= 1e4 ? `${Math.round(s / 1e3)}k` : s >= 1e3 ? `${Math.round(s / 100) / 10}k` : s, i = t[e + ha], c = i === -1 ? {} : Object.assign({}, n[i]);
  return Object.assign(c, {
    cluster: !0,
    cluster_id: t[e + Zt],
    point_count: s,
    point_count_abbreviated: o
  });
}
function Sn(t) {
  return t / 360 + 0.5;
}
function Cn(t) {
  const e = Math.sin(t * Math.PI / 180), n = 0.5 - 0.25 * Math.log((1 + e) / (1 - e)) / Math.PI;
  return n < 0 ? 0 : n > 1 ? 1 : n;
}
function Am(t) {
  return (t - 0.5) * 360;
}
function Om(t) {
  const e = (180 - t * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(e)) / Math.PI - 90;
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
function Tm(t, e) {
  var n = {};
  for (var s in t)
    Object.prototype.hasOwnProperty.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(t); o < s.length; o++)
      e.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[o]) && (n[s[o]] = t[s[o]]);
  return n;
}
class ht {
  static isAdvancedMarkerAvailable(e) {
    return google.maps.marker && e.getMapCapabilities().isAdvancedMarkersAvailable === !0;
  }
  static isAdvancedMarker(e) {
    return google.maps.marker && e instanceof google.maps.marker.AdvancedMarkerElement;
  }
  static setMap(e, n) {
    this.isAdvancedMarker(e) ? e.map = n : e.setMap(n);
  }
  static getPosition(e) {
    if (this.isAdvancedMarker(e)) {
      if (e.position) {
        if (e.position instanceof google.maps.LatLng)
          return e.position;
        if (e.position.lat && e.position.lng)
          return new google.maps.LatLng(e.position.lat, e.position.lng);
      }
      return new google.maps.LatLng(null);
    }
    return e.getPosition();
  }
  static getVisible(e) {
    return this.isAdvancedMarker(e) ? !0 : e.getVisible();
  }
}
class Fs {
  constructor({ markers: e, position: n }) {
    this.markers = e, n && (n instanceof google.maps.LatLng ? this._position = n : this._position = new google.maps.LatLng(n));
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position)
      return;
    const e = new google.maps.LatLngBounds(this._position, this._position);
    for (const n of this.markers)
      e.extend(ht.getPosition(n));
    return e;
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter((e) => ht.getVisible(e)).length;
  }
  /**
   * Add a marker to the cluster.
   */
  push(e) {
    this.markers.push(e);
  }
  /**
   * Cleanup references and remove marker from map.
   */
  delete() {
    this.marker && (ht.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
  }
}
class Sm {
  constructor({ maxZoom: e = 16 }) {
    this.maxZoom = e;
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
  noop({ markers: e }) {
    return Cm(e);
  }
}
const Cm = (t) => t.map((n) => new Fs({
  position: ht.getPosition(n),
  markers: [n]
}));
class $m extends Sm {
  constructor(e) {
    var { maxZoom: n, radius: s = 60 } = e, o = Tm(e, ["maxZoom", "radius"]);
    super({ maxZoom: n }), this.state = { zoom: -1 }, this.superCluster = new wm(Object.assign({ maxZoom: this.maxZoom, radius: s }, o));
  }
  calculate(e) {
    let n = !1;
    const s = { zoom: e.map.getZoom() };
    if (!Ho(e.markers, this.markers)) {
      n = !0, this.markers = [...e.markers];
      const o = this.markers.map((i) => {
        const c = ht.getPosition(i);
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [c.lng(), c.lat()]
          },
          properties: { marker: i }
        };
      });
      this.superCluster.load(o);
    }
    return n || (this.state.zoom <= this.maxZoom || s.zoom <= this.maxZoom) && (n = !Ho(this.state, s)), this.state = s, n && (this.clusters = this.cluster(e)), { clusters: this.clusters, changed: n };
  }
  cluster({ map: e }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(e.getZoom())).map((n) => this.transformCluster(n));
  }
  transformCluster({ geometry: { coordinates: [e, n] }, properties: s }) {
    if (s.cluster)
      return new Fs({
        markers: this.superCluster.getLeaves(s.cluster_id, 1 / 0).map((i) => i.properties.marker),
        position: { lat: n, lng: e }
      });
    const o = s.marker;
    return new Fs({
      markers: [o],
      position: ht.getPosition(o)
    });
  }
}
class Nm {
  constructor(e, n) {
    this.markers = { sum: e.length };
    const s = n.map((i) => i.count), o = s.reduce((i, c) => i + c, 0);
    this.clusters = {
      count: n.length,
      markers: {
        mean: o / n.length,
        sum: o,
        min: Math.min(...s),
        max: Math.max(...s)
      }
    };
  }
}
class Pm {
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
  render({ count: e, position: n }, s, o) {
    const c = `<svg fill="${e > Math.max(10, s.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`, u = `Cluster of ${e} markers`, l = Number(google.maps.Marker.MAX_ZINDEX) + e;
    if (ht.isAdvancedMarkerAvailable(o)) {
      const d = new DOMParser().parseFromString(c, "image/svg+xml").documentElement;
      d.setAttribute("transform", "translate(0 25)");
      const g = {
        map: o,
        position: n,
        zIndex: l,
        title: u,
        content: d
      };
      return new google.maps.marker.AdvancedMarkerElement(g);
    }
    const p = {
      position: n,
      zIndex: l,
      title: u,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(c)}`,
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(p);
  }
}
function Rm(t, e) {
  for (let n in e.prototype)
    t.prototype[n] = e.prototype[n];
}
class dr {
  constructor() {
    Rm(dr, google.maps.OverlayView);
  }
}
var tn;
(function(t) {
  t.CLUSTERING_BEGIN = "clusteringbegin", t.CLUSTERING_END = "clusteringend", t.CLUSTER_CLICK = "click";
})(tn || (tn = {}));
const Lm = (t, e, n) => {
  n.fitBounds(e.bounds);
};
class Ko extends dr {
  constructor({ map: e, markers: n = [], algorithmOptions: s = {}, algorithm: o = new $m(s), renderer: i = new Pm(), onClusterClick: c = Lm }) {
    super(), this.markers = [...n], this.clusters = [], this.algorithm = o, this.renderer = i, this.onClusterClick = c, e && this.setMap(e);
  }
  addMarker(e, n) {
    this.markers.includes(e) || (this.markers.push(e), n || this.render());
  }
  addMarkers(e, n) {
    e.forEach((s) => {
      this.addMarker(s, !0);
    }), n || this.render();
  }
  removeMarker(e, n) {
    const s = this.markers.indexOf(e);
    return s === -1 ? !1 : (ht.setMap(e, null), this.markers.splice(s, 1), n || this.render(), !0);
  }
  removeMarkers(e, n) {
    let s = !1;
    return e.forEach((o) => {
      s = this.removeMarker(o, !0) || s;
    }), s && !n && this.render(), s;
  }
  clearMarkers(e) {
    this.markers.length = 0, e || this.render();
  }
  /**
   * Recalculates and draws all the marker clusters.
   */
  render() {
    const e = this.getMap();
    if (e instanceof google.maps.Map && e.getProjection()) {
      google.maps.event.trigger(this, tn.CLUSTERING_BEGIN, this);
      const { clusters: n, changed: s } = this.algorithm.calculate({
        markers: this.markers,
        map: e,
        mapCanvasProjection: this.getProjection()
      });
      if (s || s == null) {
        const o = /* @__PURE__ */ new Set();
        for (const c of n)
          c.markers.length == 1 && o.add(c.markers[0]);
        const i = [];
        for (const c of this.clusters)
          c.marker != null && (c.markers.length == 1 ? o.has(c.marker) || ht.setMap(c.marker, null) : i.push(c.marker));
        this.clusters = n, this.renderClusters(), requestAnimationFrame(() => i.forEach((c) => ht.setMap(c, null)));
      }
      google.maps.event.trigger(this, tn.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener), this.reset();
  }
  reset() {
    this.markers.forEach((e) => ht.setMap(e, null)), this.clusters.forEach((e) => e.delete()), this.clusters = [];
  }
  renderClusters() {
    const e = new Nm(this.markers, this.clusters), n = this.getMap();
    this.clusters.forEach((s) => {
      s.markers.length === 1 ? s.marker = s.markers[0] : (s.marker = this.renderer.render(s, e, n), s.markers.forEach((o) => ht.setMap(o, null)), this.onClusterClick && s.marker.addListener(
        "click",
        /* istanbul ignore next */
        (o) => {
          google.maps.event.trigger(this, tn.CLUSTER_CLICK, s), this.onClusterClick(o, s, n);
        }
      )), ht.setMap(s.marker, n);
    });
  }
}
const bs = {
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
}, Dm = [
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
], km = Qt({
  mappedProps: bs,
  events: Dm,
  name: "cluster",
  ctr: () => {
    if (typeof Ko > "u") {
      const t = "MarkerClusterer is not installed!";
      throw console.error(t), new Error(t);
    }
    return Ko;
  },
  ctrArgs: ({ map: t, ...e }) => [t, [], e],
  afterCreate(t) {
    const e = () => {
      const n = t.getMarkers();
      t.clearMarkers(), t.addMarkers(n);
    };
    for (let n in bs)
      bs[n].twoWay && this.$on(n.toLowerCase() + "_changed", e);
  },
  updated() {
    this.$clusterObject && this.$clusterObject.repaint();
  },
  beforeUnmount() {
    this.$children && this.$children.length && this.$children.forEach((t) => {
      t.$clusterObject === this.$clusterObject && (t.$clusterObject = null);
    }), this.$clusterObject && this.$clusterObject.clearMarkers();
  }
});
function xm(t, e, n, s, o, i) {
  return Ht(), fe("div", null, [
    en(t.$slots, "default")
  ]);
}
const Mm = /* @__PURE__ */ Jt(km, [["render", xm]]), Im = {
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
}, jm = ["domready", "click", "closeclick", "content_changed"], Bm = Qt({
  mappedProps: Im,
  events: jm,
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
    const t = this.$refs.infoWindow;
    t.parentNode.removeChild(t);
  },
  beforeCreate(t) {
    if (t.content = this.$refs.infoWindow, this.$markerPromise)
      return delete t.position, this.$markerPromise.then((e) => (this.$markerObject = e, e));
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
}), Fm = { ref: "infoWindow" };
function Hm(t, e, n, s, o, i) {
  return Ht(), fe("div", Fm, [
    en(t.$slots, "default")
  ], 512);
}
const Wm = /* @__PURE__ */ Jt(Bm, [["render", Hm]]), Vm = {
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
    isFunction(t) {
      return t && {}.toString.call(t) === "[object Function]";
    },
    _delayedResizeCallback() {
      this.$nextTick(() => this._resizeCallback());
    }
  },
  watch: {
    resizeBus(t) {
      this.$data._actualResizeBus = t;
    },
    "$data._actualResizeBus"(t, e) {
      e && e.$off("resize", this._delayedResizeCallback);
    }
  },
  unmounted() {
    this.$data._actualResizeBus && this.isFunction(this.$data._actualResizeBus.$off) && this.$data._actualResizeBus.$off("resize", this._delayedResizeCallback);
  }
};
function Um(t) {
  let e = 0;
  t(
    () => {
      e += 1;
    },
    () => {
      e = Math.max(0, e - 1);
    },
    () => e === 0
  );
}
const vs = {
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
}, qo = [
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
], zm = ["panBy", "panTo", "panToBounds", "fitBounds"].reduce((t, e) => (t[e] = function() {
  this.$mapObject && this.$mapObject[e].apply(this.$mapObject, arguments);
}, t), {}), Km = {
  resize() {
    this.$mapObject && google.maps.event.trigger(this.$mapObject, "resize");
  },
  resizePreserveCenter() {
    if (!this.$mapObject)
      return;
    const t = this.$mapObject.getCenter();
    google.maps.event.trigger(this.$mapObject, "resize"), this.$mapObject.setCenter(t);
  },
  /// Override mountableMixin::_resizeCallback
  /// because resizePreserveCenter is usually the
  /// expected behaviour
  _resizeCallback() {
    this.resizePreserveCenter();
  }
}, qm = {
  mixins: [Vm],
  props: ur({ ...vs, ...qo.reduce((t, e) => ({ ...t, [`on${e.charAt(0).toUpperCase()}${e.slice(1)}`.replace(/[-_]+(.)?/g, (n, s) => s ? s.toUpperCase() : "")]: Function }), {}) }),
  inheritAttrs: !1,
  provide() {
    return this.$mapPromise = new Promise((t, e) => {
      this.$mapPromiseDeferred = { resolve: t, reject: e };
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
    zoom(t) {
      this.$mapObject && this.$mapObject.setZoom(t);
    }
  },
  mounted() {
    return this.$gmapApiPromiseLazy().then(() => {
      const t = this.$refs["vue-map"], e = {
        ...this.options,
        ...Mn(this, vs)
      };
      return delete e.options, this.$mapObject = new google.maps.Map(t, e), lr(this, this.$mapObject, vs), ua(this, this.$mapObject, qo), Um((n, s, o) => {
        this.$mapObject.addListener("center_changed", () => {
          o() && this.$emit("center_changed", this.$mapObject.getCenter()), s();
        }), fa(this, ["finalLat", "finalLng"], () => {
          n(), this.$mapObject.setCenter(this.finalLatLng);
        });
      }), this.$mapObject.addListener("zoom_changed", () => {
        this.$emit("zoom_changed", this.$mapObject.getZoom());
      }), this.$mapObject.addListener("bounds_changed", () => {
        this.$emit("bounds_changed", this.$mapObject.getBounds());
      }), this.$mapPromiseDeferred.resolve(this.$mapObject), this.$mapObject;
    }).catch((t) => {
      throw t;
    });
  },
  methods: {
    ...Km,
    ...zm
  }
}, Ym = { class: "vue-map-hidden" };
function Gm(t, e, n, s, o, i) {
  return Ht(), fe("div", {
    class: Ws(["vue-map-container", t.$attrs.class])
  }, [
    rt("div", {
      ref: "vue-map",
      class: "vue-map",
      style: lf(t.$attrs.style ? t.$attrs.style : "")
    }, null, 4),
    rt("div", Ym, [
      en(t.$slots, "default")
    ]),
    en(t.$slots, "visible")
  ], 2);
}
const Zm = /* @__PURE__ */ Jt(qm, [["render", Gm]]), Xm = {
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
}, Jm = [], Qm = Qt({
  mappedProps: Xm,
  name: "heatmap",
  ctr: () => google.maps.visualization.HeatmapLayer,
  events: Jm
}), tg = (t) => {
  const e = t.addEventListener ? t.addEventListener : t.attachEvent;
  function n(s, o) {
    if (s === "keydown") {
      const i = o;
      o = function(c) {
        const u = document.getElementsByClassName("pac-item-selected").length > 0;
        if (c.which === 13 && !u) {
          const l = document.createEvent("Event");
          l.keyCode = 40, l.which = 40, i.apply(t, [l]);
        }
        i.apply(t, [c]);
      };
    }
    e.apply(t, [s, o]);
  }
  t.addEventListener = n, t.attachEvent = n;
}, ws = {
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
}, eg = {
  selectFirstOnEnter: {
    required: !1,
    type: Boolean,
    default: !1
  },
  options: {
    type: Object
  }
}, ng = {
  mounted() {
    this.$gmapApiPromiseLazy().then(() => {
      if (this.selectFirstOnEnter && tg(this.$refs.input), typeof google.maps.places.Autocomplete != "function")
        throw new Error(
          "google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?"
        );
      const t = {
        ...Mn(this, ws),
        ...this.options
      };
      this.$autocomplete = new google.maps.places.Autocomplete(this.$refs.input, t), lr(this, this.$autocomplete, ws), this.$watch("componentRestrictions", (e) => {
        e !== void 0 && this.$autocomplete.setComponentRestrictions(e);
      }), this.$autocomplete.addListener("place_changed", () => {
        this.$emit("place_changed", this.$autocomplete.getPlace());
      });
    });
  },
  props: {
    ...ur(ws),
    ...eg
  }
};
function sg(t, e, n, s, o, i) {
  return Ht(), fe("input", uf({ ref: "input" }, t.$attrs, ff(t.$attrs, !0)), null, 16);
}
const rg = /* @__PURE__ */ Jt(ng, [["render", sg]]);
let ma = null;
function og(t, e) {
  e = {
    installComponents: !0,
    autobindAllEvents: !1,
    ...e
  }, ma = Os({
    data: function() {
      return { gmapApi: null };
    }
  });
  const n = Os();
  let s = ig(e);
  t.mixin({
    created() {
      this.$gmapDefaultResizeBus = n, this.$gmapOptions = e, this.$gmapApiPromiseLazy = s;
    }
  }), t.$gmapDefaultResizeBus = n, t.$gmapApiPromiseLazy = s, e.installComponents && (t.component("GMapMap", Zm), t.component("GMapMarker", ym), t.component("GMapInfoWindow", Wm), t.component("GMapCluster", Mm), t.component("GMapPolyline", im), t.component("GMapPolygon", lm), t.component("GMapCircle", dm), t.component("GMapRectangle", mm), t.component("GMapAutocomplete", rg), t.component("GMapHeatmap", Qm));
}
function ig(t) {
  function e() {
    return ma.gmapApi = {}, window.google;
  }
  if (t.load)
    return jo(() => js.isServer() ? new Promise(() => {
    }).then(e) : new Promise((n, s) => {
      try {
        window.vueGoogleMapsInit = n, em(t.load);
      } catch (o) {
        s(o);
      }
    }).then(e));
  {
    const n = new Promise((s) => {
      js.isServer() || (window.vueGoogleMapsInit = s);
    }).then(e);
    return jo(() => n);
  }
}
window.renderFineProjectWidget = (t, e) => {
  const n = Os(ad, e), s = ld();
  n.use(xh), n.use(s), n.config.globalProperties.$store = s, n.config.globalProperties.$axios = Qp, n.use(og, {
    load: {
      key: "AIzaSyA7cMwNKdFcVybV9YjvnvPhJ2sEBpoCQlQ"
    }
  }), n.mount(t), console.log("mounted");
};
export {
  Jt as _,
  df as c,
  hf as g,
  Wi as u
};

import { resolveComponent as Js, openBlock as qe, createBlock as Mi, effectScope as ji, ref as os, markRaw as Et, toRaw as is, hasInjectionContext as ed, inject as Vt, getCurrentInstance as yr, watch as as, unref as jt, reactive as Vi, isRef as _n, isReactive as br, toRef as Ls, nextTick as Xs, computed as Ce, getCurrentScope as td, onScopeDispose as nd, toRefs as Vo, shallowRef as sd, shallowReactive as rd, defineComponent as Bi, h as Fi, provide as ks, watchEffect as od, createElementBlock as At, createElementVNode as ue, normalizeClass as wr, Fragment as id, createCommentVNode as ad, createVNode as cd, renderSlot as En, normalizeStyle as ld, mergeProps as ud, toHandlers as fd, createApp as Qs } from "vue";
var dd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function pd(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function s() {
      return this instanceof s ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(s) {
    var o = Object.getOwnPropertyDescriptor(e, s);
    Object.defineProperty(n, s, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[s];
      }
    });
  }), n;
}
var md = { exports: {} }, fe = "top", Ee = "bottom", ve = "right", de = "left", cs = "auto", Gt = [fe, Ee, ve, de], yt = "start", Bt = "end", Hi = "clippingParents", Ar = "viewport", It = "popper", Wi = "reference", Zs = /* @__PURE__ */ Gt.reduce(function(e, t) {
  return e.concat([t + "-" + yt, t + "-" + Bt]);
}, []), Or = /* @__PURE__ */ [].concat(Gt, [cs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + yt, t + "-" + Bt]);
}, []), Ui = "beforeRead", zi = "read", Ki = "afterRead", Gi = "beforeMain", Yi = "main", qi = "afterMain", Ji = "beforeWrite", Xi = "write", Qi = "afterWrite", Zi = [Ui, zi, Ki, Gi, Yi, qi, Ji, Xi, Qi];
function Ve(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ye(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function bt(e) {
  var t = ye(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ne(e) {
  var t = ye(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Tr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ye(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function gd(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var s = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Ne(i) || !Ve(i) || (Object.assign(i.style, s), Object.keys(o).forEach(function(a) {
      var u = o[a];
      u === !1 ? i.removeAttribute(a) : i.setAttribute(a, u === !0 ? "" : u);
    }));
  });
}
function _d(e) {
  var t = e.state, n = {
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
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(s) {
      var o = t.elements[s], i = t.attributes[s] || {}, a = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : n[s]), u = a.reduce(function(l, h) {
        return l[h] = "", l;
      }, {});
      !Ne(o) || !Ve(o) || (Object.assign(o.style, u), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Sr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: gd,
  effect: _d,
  requires: ["computeStyles"]
};
function Me(e) {
  return e.split("-")[0];
}
var vt = Math.max, ts = Math.min, Ft = Math.round;
function er() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ea() {
  return !/^((?!chrome|android).)*safari/i.test(er());
}
function Ht(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(), o = 1, i = 1;
  t && Ne(e) && (o = e.offsetWidth > 0 && Ft(s.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ft(s.height) / e.offsetHeight || 1);
  var a = bt(e) ? ye(e) : window, u = a.visualViewport, l = !ea() && n, h = (s.left + (l && u ? u.offsetLeft : 0)) / o, f = (s.top + (l && u ? u.offsetTop : 0)) / i, d = s.width / o, g = s.height / i;
  return {
    width: d,
    height: g,
    top: f,
    right: h + d,
    bottom: f + g,
    left: h,
    x: h,
    y: f
  };
}
function Cr(e) {
  var t = Ht(e), n = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: s
  };
}
function ta(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Tr(n)) {
    var s = t;
    do {
      if (s && e.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function Je(e) {
  return ye(e).getComputedStyle(e);
}
function Ed(e) {
  return ["table", "td", "th"].indexOf(Ve(e)) >= 0;
}
function it(e) {
  return ((bt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ls(e) {
  return Ve(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Tr(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    it(e)
  );
}
function Bo(e) {
  return !Ne(e) || // https://github.com/popperjs/popper-core/issues/837
  Je(e).position === "fixed" ? null : e.offsetParent;
}
function vd(e) {
  var t = /firefox/i.test(er()), n = /Trident/i.test(er());
  if (n && Ne(e)) {
    var s = Je(e);
    if (s.position === "fixed")
      return null;
  }
  var o = ls(e);
  for (Tr(o) && (o = o.host); Ne(o) && ["html", "body"].indexOf(Ve(o)) < 0; ) {
    var i = Je(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function An(e) {
  for (var t = ye(e), n = Bo(e); n && Ed(n) && Je(n).position === "static"; )
    n = Bo(n);
  return n && (Ve(n) === "html" || Ve(n) === "body" && Je(n).position === "static") ? t : n || vd(e) || t;
}
function Nr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fn(e, t, n) {
  return vt(e, ts(t, n));
}
function yd(e, t, n) {
  var s = fn(e, t, n);
  return s > n ? n : s;
}
function na() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function sa(e) {
  return Object.assign({}, na(), e);
}
function ra(e, t) {
  return t.reduce(function(n, s) {
    return n[s] = e, n;
  }, {});
}
var bd = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, sa(typeof t != "number" ? t : ra(t, Gt));
};
function wd(e) {
  var t, n = e.state, s = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, u = Me(n.placement), l = Nr(u), h = [de, ve].indexOf(u) >= 0, f = h ? "height" : "width";
  if (!(!i || !a)) {
    var d = bd(o.padding, n), g = Cr(i), _ = l === "y" ? fe : de, E = l === "y" ? Ee : ve, v = n.rects.reference[f] + n.rects.reference[l] - a[l] - n.rects.popper[f], O = a[l] - n.rects.reference[l], T = An(i), C = T ? l === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, k = v / 2 - O / 2, x = d[_], j = C - g[f] - d[E], V = C / 2 - g[f] / 2 + k, R = fn(x, V, j), Q = l;
    n.modifiersData[s] = (t = {}, t[Q] = R, t.centerOffset = R - V, t);
  }
}
function Ad(e) {
  var t = e.state, n = e.options, s = n.element, o = s === void 0 ? "[data-popper-arrow]" : s;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || ta(t.elements.popper, o) && (t.elements.arrow = o));
}
const oa = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: wd,
  effect: Ad,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Wt(e) {
  return e.split("-")[1];
}
var Od = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Td(e, t) {
  var n = e.x, s = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ft(n * o) / o || 0,
    y: Ft(s * o) / o || 0
  };
}
function Fo(e) {
  var t, n = e.popper, s = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, u = e.position, l = e.gpuAcceleration, h = e.adaptive, f = e.roundOffsets, d = e.isFixed, g = a.x, _ = g === void 0 ? 0 : g, E = a.y, v = E === void 0 ? 0 : E, O = typeof f == "function" ? f({
    x: _,
    y: v
  }) : {
    x: _,
    y: v
  };
  _ = O.x, v = O.y;
  var T = a.hasOwnProperty("x"), C = a.hasOwnProperty("y"), k = de, x = fe, j = window;
  if (h) {
    var V = An(n), R = "clientHeight", Q = "clientWidth";
    if (V === ye(n) && (V = it(n), Je(V).position !== "static" && u === "absolute" && (R = "scrollHeight", Q = "scrollWidth")), V = V, o === fe || (o === de || o === ve) && i === Bt) {
      x = Ee;
      var F = d && V === j && j.visualViewport ? j.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        V[R]
      );
      v -= F - s.height, v *= l ? 1 : -1;
    }
    if (o === de || (o === fe || o === Ee) && i === Bt) {
      k = ve;
      var N = d && V === j && j.visualViewport ? j.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        V[Q]
      );
      _ -= N - s.width, _ *= l ? 1 : -1;
    }
  }
  var S = Object.assign({
    position: u
  }, h && Od), W = f === !0 ? Td({
    x: _,
    y: v
  }, ye(n)) : {
    x: _,
    y: v
  };
  if (_ = W.x, v = W.y, l) {
    var U;
    return Object.assign({}, S, (U = {}, U[x] = C ? "0" : "", U[k] = T ? "0" : "", U.transform = (j.devicePixelRatio || 1) <= 1 ? "translate(" + _ + "px, " + v + "px)" : "translate3d(" + _ + "px, " + v + "px, 0)", U));
  }
  return Object.assign({}, S, (t = {}, t[x] = C ? v + "px" : "", t[k] = T ? _ + "px" : "", t.transform = "", t));
}
function Sd(e) {
  var t = e.state, n = e.options, s = n.gpuAcceleration, o = s === void 0 ? !0 : s, i = n.adaptive, a = i === void 0 ? !0 : i, u = n.roundOffsets, l = u === void 0 ? !0 : u, h = {
    placement: Me(t.placement),
    variation: Wt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Fo(Object.assign({}, h, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Fo(Object.assign({}, h, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const $r = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Sd,
  data: {}
};
var Wn = {
  passive: !0
};
function Cd(e) {
  var t = e.state, n = e.instance, s = e.options, o = s.scroll, i = o === void 0 ? !0 : o, a = s.resize, u = a === void 0 ? !0 : a, l = ye(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && h.forEach(function(f) {
    f.addEventListener("scroll", n.update, Wn);
  }), u && l.addEventListener("resize", n.update, Wn), function() {
    i && h.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Wn);
    }), u && l.removeEventListener("resize", n.update, Wn);
  };
}
const Pr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Cd,
  data: {}
};
var Nd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Yn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Nd[t];
  });
}
var $d = {
  start: "end",
  end: "start"
};
function Ho(e) {
  return e.replace(/start|end/g, function(t) {
    return $d[t];
  });
}
function Rr(e) {
  var t = ye(e), n = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: s
  };
}
function Dr(e) {
  return Ht(it(e)).left + Rr(e).scrollLeft;
}
function Pd(e, t) {
  var n = ye(e), s = it(e), o = n.visualViewport, i = s.clientWidth, a = s.clientHeight, u = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var h = ea();
    (h || !h && t === "fixed") && (u = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: u + Dr(e),
    y: l
  };
}
function Rd(e) {
  var t, n = it(e), s = Rr(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = vt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = vt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -s.scrollLeft + Dr(e), l = -s.scrollTop;
  return Je(o || n).direction === "rtl" && (u += vt(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: u,
    y: l
  };
}
function Lr(e) {
  var t = Je(e), n = t.overflow, s = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + s);
}
function ia(e) {
  return ["html", "body", "#document"].indexOf(Ve(e)) >= 0 ? e.ownerDocument.body : Ne(e) && Lr(e) ? e : ia(ls(e));
}
function dn(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = ia(e), o = s === ((n = e.ownerDocument) == null ? void 0 : n.body), i = ye(s), a = o ? [i].concat(i.visualViewport || [], Lr(s) ? s : []) : s, u = t.concat(a);
  return o ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(dn(ls(a)))
  );
}
function tr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Dd(e, t) {
  var n = Ht(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Wo(e, t, n) {
  return t === Ar ? tr(Pd(e, n)) : bt(t) ? Dd(t, n) : tr(Rd(it(e)));
}
function Ld(e) {
  var t = dn(ls(e)), n = ["absolute", "fixed"].indexOf(Je(e).position) >= 0, s = n && Ne(e) ? An(e) : e;
  return bt(s) ? t.filter(function(o) {
    return bt(o) && ta(o, s) && Ve(o) !== "body";
  }) : [];
}
function kd(e, t, n, s) {
  var o = t === "clippingParents" ? Ld(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], u = i.reduce(function(l, h) {
    var f = Wo(e, h, s);
    return l.top = vt(f.top, l.top), l.right = ts(f.right, l.right), l.bottom = ts(f.bottom, l.bottom), l.left = vt(f.left, l.left), l;
  }, Wo(e, a, s));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function aa(e) {
  var t = e.reference, n = e.element, s = e.placement, o = s ? Me(s) : null, i = s ? Wt(s) : null, a = t.x + t.width / 2 - n.width / 2, u = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case fe:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Ee:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case ve:
      l = {
        x: t.x + t.width,
        y: u
      };
      break;
    case de:
      l = {
        x: t.x - n.width,
        y: u
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var h = o ? Nr(o) : null;
  if (h != null) {
    var f = h === "y" ? "height" : "width";
    switch (i) {
      case yt:
        l[h] = l[h] - (t[f] / 2 - n[f] / 2);
        break;
      case Bt:
        l[h] = l[h] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function Ut(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = s === void 0 ? e.placement : s, i = n.strategy, a = i === void 0 ? e.strategy : i, u = n.boundary, l = u === void 0 ? Hi : u, h = n.rootBoundary, f = h === void 0 ? Ar : h, d = n.elementContext, g = d === void 0 ? It : d, _ = n.altBoundary, E = _ === void 0 ? !1 : _, v = n.padding, O = v === void 0 ? 0 : v, T = sa(typeof O != "number" ? O : ra(O, Gt)), C = g === It ? Wi : It, k = e.rects.popper, x = e.elements[E ? C : g], j = kd(bt(x) ? x : x.contextElement || it(e.elements.popper), l, f, a), V = Ht(e.elements.reference), R = aa({
    reference: V,
    element: k,
    strategy: "absolute",
    placement: o
  }), Q = tr(Object.assign({}, k, R)), F = g === It ? Q : V, N = {
    top: j.top - F.top + T.top,
    bottom: F.bottom - j.bottom + T.bottom,
    left: j.left - F.left + T.left,
    right: F.right - j.right + T.right
  }, S = e.modifiersData.offset;
  if (g === It && S) {
    var W = S[o];
    Object.keys(N).forEach(function(U) {
      var oe = [ve, Ee].indexOf(U) >= 0 ? 1 : -1, ce = [fe, Ee].indexOf(U) >= 0 ? "y" : "x";
      N[U] += W[ce] * oe;
    });
  }
  return N;
}
function xd(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, u = n.flipVariations, l = n.allowedAutoPlacements, h = l === void 0 ? Or : l, f = Wt(s), d = f ? u ? Zs : Zs.filter(function(E) {
    return Wt(E) === f;
  }) : Gt, g = d.filter(function(E) {
    return h.indexOf(E) >= 0;
  });
  g.length === 0 && (g = d);
  var _ = g.reduce(function(E, v) {
    return E[v] = Ut(e, {
      placement: v,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Me(v)], E;
  }, {});
  return Object.keys(_).sort(function(E, v) {
    return _[E] - _[v];
  });
}
function Id(e) {
  if (Me(e) === cs)
    return [];
  var t = Yn(e);
  return [Ho(e), t, Ho(t)];
}
function Md(e) {
  var t = e.state, n = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, u = a === void 0 ? !0 : a, l = n.fallbackPlacements, h = n.padding, f = n.boundary, d = n.rootBoundary, g = n.altBoundary, _ = n.flipVariations, E = _ === void 0 ? !0 : _, v = n.allowedAutoPlacements, O = t.options.placement, T = Me(O), C = T === O, k = l || (C || !E ? [Yn(O)] : Id(O)), x = [O].concat(k).reduce(function(me, he) {
      return me.concat(Me(he) === cs ? xd(t, {
        placement: he,
        boundary: f,
        rootBoundary: d,
        padding: h,
        flipVariations: E,
        allowedAutoPlacements: v
      }) : he);
    }, []), j = t.rects.reference, V = t.rects.popper, R = /* @__PURE__ */ new Map(), Q = !0, F = x[0], N = 0; N < x.length; N++) {
      var S = x[N], W = Me(S), U = Wt(S) === yt, oe = [fe, Ee].indexOf(W) >= 0, ce = oe ? "width" : "height", ee = Ut(t, {
        placement: S,
        boundary: f,
        rootBoundary: d,
        altBoundary: g,
        padding: h
      }), J = oe ? U ? ve : de : U ? Ee : fe;
      j[ce] > V[ce] && (J = Yn(J));
      var Z = Yn(J), we = [];
      if (i && we.push(ee[W] <= 0), u && we.push(ee[J] <= 0, ee[Z] <= 0), we.every(function(me) {
        return me;
      })) {
        F = S, Q = !1;
        break;
      }
      R.set(S, we);
    }
    if (Q)
      for (var Le = E ? 3 : 1, Fe = function(he) {
        var le = x.find(function(b) {
          var D = R.get(b);
          if (D)
            return D.slice(0, he).every(function(L) {
              return L;
            });
        });
        if (le)
          return F = le, "break";
      }, Ae = Le; Ae > 0; Ae--) {
        var ke = Fe(Ae);
        if (ke === "break")
          break;
      }
    t.placement !== F && (t.modifiersData[s]._skip = !0, t.placement = F, t.reset = !0);
  }
}
const ca = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Md,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Uo(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function zo(e) {
  return [fe, ve, Ee, de].some(function(t) {
    return e[t] >= 0;
  });
}
function jd(e) {
  var t = e.state, n = e.name, s = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = Ut(t, {
    elementContext: "reference"
  }), u = Ut(t, {
    altBoundary: !0
  }), l = Uo(a, s), h = Uo(u, o, i), f = zo(l), d = zo(h);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: h,
    isReferenceHidden: f,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": d
  });
}
const la = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: jd
};
function Vd(e, t, n) {
  var s = Me(e), o = [de, fe].indexOf(s) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], u = i[1];
  return a = a || 0, u = (u || 0) * o, [de, ve].indexOf(s) >= 0 ? {
    x: u,
    y: a
  } : {
    x: a,
    y: u
  };
}
function Bd(e) {
  var t = e.state, n = e.options, s = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = Or.reduce(function(f, d) {
    return f[d] = Vd(d, t.rects, i), f;
  }, {}), u = a[t.placement], l = u.x, h = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += h), t.modifiersData[s] = a;
}
const ua = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Bd
};
function Fd(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = aa({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const kr = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Fd,
  data: {}
};
function Hd(e) {
  return e === "x" ? "y" : "x";
}
function Wd(e) {
  var t = e.state, n = e.options, s = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, u = a === void 0 ? !1 : a, l = n.boundary, h = n.rootBoundary, f = n.altBoundary, d = n.padding, g = n.tether, _ = g === void 0 ? !0 : g, E = n.tetherOffset, v = E === void 0 ? 0 : E, O = Ut(t, {
    boundary: l,
    rootBoundary: h,
    padding: d,
    altBoundary: f
  }), T = Me(t.placement), C = Wt(t.placement), k = !C, x = Nr(T), j = Hd(x), V = t.modifiersData.popperOffsets, R = t.rects.reference, Q = t.rects.popper, F = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, N = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, W = {
    x: 0,
    y: 0
  };
  if (V) {
    if (i) {
      var U, oe = x === "y" ? fe : de, ce = x === "y" ? Ee : ve, ee = x === "y" ? "height" : "width", J = V[x], Z = J + O[oe], we = J - O[ce], Le = _ ? -Q[ee] / 2 : 0, Fe = C === yt ? R[ee] : Q[ee], Ae = C === yt ? -Q[ee] : -R[ee], ke = t.elements.arrow, me = _ && ke ? Cr(ke) : {
        width: 0,
        height: 0
      }, he = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : na(), le = he[oe], b = he[ce], D = fn(0, R[ee], me[ee]), L = k ? R[ee] / 2 - Le - D - le - N.mainAxis : Fe - D - le - N.mainAxis, I = k ? -R[ee] / 2 + Le + D + b + N.mainAxis : Ae + D + b + N.mainAxis, y = t.elements.arrow && An(t.elements.arrow), X = y ? x === "y" ? y.clientTop || 0 : y.clientLeft || 0 : 0, H = (U = S == null ? void 0 : S[x]) != null ? U : 0, B = J + L - H - X, K = J + I - H, ie = fn(_ ? ts(Z, B) : Z, J, _ ? vt(we, K) : we);
      V[x] = ie, W[x] = ie - J;
    }
    if (u) {
      var te, ge = x === "x" ? fe : de, Jt = x === "x" ? Ee : ve, M = V[j], He = j === "y" ? "height" : "width", Sn = M + O[ge], Es = M - O[Jt], Ot = [fe, de].indexOf(T) !== -1, Cn = (te = S == null ? void 0 : S[j]) != null ? te : 0, Nn = Ot ? Sn : M - R[He] - Q[He] - Cn + N.altAxis, $n = Ot ? M + R[He] + Q[He] - Cn - N.altAxis : Es, Pn = _ && Ot ? yd(Nn, M, $n) : fn(_ ? Nn : Sn, M, _ ? $n : Es);
      V[j] = Pn, W[j] = Pn - M;
    }
    t.modifiersData[s] = W;
  }
}
const fa = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Wd,
  requiresIfExists: ["offset"]
};
function Ud(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function zd(e) {
  return e === ye(e) || !Ne(e) ? Rr(e) : Ud(e);
}
function Kd(e) {
  var t = e.getBoundingClientRect(), n = Ft(t.width) / e.offsetWidth || 1, s = Ft(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function Gd(e, t, n) {
  n === void 0 && (n = !1);
  var s = Ne(t), o = Ne(t) && Kd(t), i = it(t), a = Ht(e, o, n), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (s || !s && !n) && ((Ve(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Lr(i)) && (u = zd(t)), Ne(t) ? (l = Ht(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Dr(i))), {
    x: a.left + u.scrollLeft - l.x,
    y: a.top + u.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Yd(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), s = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(u) {
      if (!n.has(u)) {
        var l = t.get(u);
        l && o(l);
      }
    }), s.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), s;
}
function qd(e) {
  var t = Yd(e);
  return Zi.reduce(function(n, s) {
    return n.concat(t.filter(function(o) {
      return o.phase === s;
    }));
  }, []);
}
function Jd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Xd(e) {
  var t = e.reduce(function(n, s) {
    var o = n[s.name];
    return n[s.name] = o ? Object.assign({}, o, s, {
      options: Object.assign({}, o.options, s.options),
      data: Object.assign({}, o.data, s.data)
    }) : s, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ko = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Go() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function us(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, s = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? Ko : o;
  return function(u, l, h) {
    h === void 0 && (h = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ko, i),
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
        var C = typeof T == "function" ? T(f.options) : T;
        v(), f.options = Object.assign({}, i, f.options, C), f.scrollParents = {
          reference: bt(u) ? dn(u) : u.contextElement ? dn(u.contextElement) : [],
          popper: dn(l)
        };
        var k = qd(Xd([].concat(s, f.options.modifiers)));
        return f.orderedModifiers = k.filter(function(x) {
          return x.enabled;
        }), E(), _.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var T = f.elements, C = T.reference, k = T.popper;
          if (Go(C, k)) {
            f.rects = {
              reference: Gd(C, An(k), f.options.strategy === "fixed"),
              popper: Cr(k)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(N) {
              return f.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var x = 0; x < f.orderedModifiers.length; x++) {
              if (f.reset === !0) {
                f.reset = !1, x = -1;
                continue;
              }
              var j = f.orderedModifiers[x], V = j.fn, R = j.options, Q = R === void 0 ? {} : R, F = j.name;
              typeof V == "function" && (f = V({
                state: f,
                options: Q,
                name: F,
                instance: _
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Jd(function() {
        return new Promise(function(O) {
          _.forceUpdate(), O(f);
        });
      }),
      destroy: function() {
        v(), g = !0;
      }
    };
    if (!Go(u, l))
      return _;
    _.setOptions(h).then(function(O) {
      !g && h.onFirstUpdate && h.onFirstUpdate(O);
    });
    function E() {
      f.orderedModifiers.forEach(function(O) {
        var T = O.name, C = O.options, k = C === void 0 ? {} : C, x = O.effect;
        if (typeof x == "function") {
          var j = x({
            state: f,
            name: T,
            instance: _,
            options: k
          }), V = function() {
          };
          d.push(j || V);
        }
      });
    }
    function v() {
      d.forEach(function(O) {
        return O();
      }), d = [];
    }
    return _;
  };
}
var Qd = /* @__PURE__ */ us(), Zd = [Pr, kr, $r, Sr], eh = /* @__PURE__ */ us({
  defaultModifiers: Zd
}), th = [Pr, kr, $r, Sr, ua, ca, fa, oa, la], nh = /* @__PURE__ */ us({
  defaultModifiers: th
});
const sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: qi,
  afterRead: Ki,
  afterWrite: Qi,
  applyStyles: Sr,
  arrow: oa,
  auto: cs,
  basePlacements: Gt,
  beforeMain: Gi,
  beforeRead: Ui,
  beforeWrite: Ji,
  bottom: Ee,
  clippingParents: Hi,
  computeStyles: $r,
  createPopper: nh,
  createPopperBase: Qd,
  createPopperLite: eh,
  detectOverflow: Ut,
  end: Bt,
  eventListeners: Pr,
  flip: ca,
  hide: la,
  left: de,
  main: Yi,
  modifierPhases: Zi,
  offset: ua,
  placements: Or,
  popper: It,
  popperGenerator: us,
  popperOffsets: kr,
  preventOverflow: fa,
  read: zi,
  reference: Wi,
  right: ve,
  start: yt,
  top: fe,
  variationPlacements: Zs,
  viewport: Ar,
  write: Xi
}, Symbol.toStringTag, { value: "Module" })), rh = /* @__PURE__ */ pd(sh);
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e, t) {
  (function(n, s) {
    e.exports = s(rh);
  })(dd, function(n) {
    function s(p) {
      const r = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
      if (p) {
        for (const c in p)
          if (c !== "default") {
            const m = Object.getOwnPropertyDescriptor(p, c);
            Object.defineProperty(r, c, m.get ? m : {
              enumerable: !0,
              get: () => p[c]
            });
          }
      }
      return r.default = p, Object.freeze(r);
    }
    const o = /* @__PURE__ */ s(n), i = /* @__PURE__ */ new Map(), a = {
      set(p, r, c) {
        i.has(p) || i.set(p, /* @__PURE__ */ new Map());
        const m = i.get(p);
        if (!m.has(r) && m.size !== 0) {
          console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(m.keys())[0]}.`);
          return;
        }
        m.set(r, c);
      },
      get(p, r) {
        return i.has(p) && i.get(p).get(r) || null;
      },
      remove(p, r) {
        if (!i.has(p))
          return;
        const c = i.get(p);
        c.delete(r), c.size === 0 && i.delete(p);
      }
    }, u = 1e6, l = 1e3, h = "transitionend", f = (p) => (p && window.CSS && window.CSS.escape && (p = p.replace(/#([^\s"#']+)/g, (r, c) => `#${CSS.escape(c)}`)), p), d = (p) => p == null ? `${p}` : Object.prototype.toString.call(p).match(/\s([a-z]+)/i)[1].toLowerCase(), g = (p) => {
      do
        p += Math.floor(Math.random() * u);
      while (document.getElementById(p));
      return p;
    }, _ = (p) => {
      if (!p)
        return 0;
      let {
        transitionDuration: r,
        transitionDelay: c
      } = window.getComputedStyle(p);
      const m = Number.parseFloat(r), w = Number.parseFloat(c);
      return !m && !w ? 0 : (r = r.split(",")[0], c = c.split(",")[0], (Number.parseFloat(r) + Number.parseFloat(c)) * l);
    }, E = (p) => {
      p.dispatchEvent(new Event(h));
    }, v = (p) => !p || typeof p != "object" ? !1 : (typeof p.jquery < "u" && (p = p[0]), typeof p.nodeType < "u"), O = (p) => v(p) ? p.jquery ? p[0] : p : typeof p == "string" && p.length > 0 ? document.querySelector(f(p)) : null, T = (p) => {
      if (!v(p) || p.getClientRects().length === 0)
        return !1;
      const r = getComputedStyle(p).getPropertyValue("visibility") === "visible", c = p.closest("details:not([open])");
      if (!c)
        return r;
      if (c !== p) {
        const m = p.closest("summary");
        if (m && m.parentNode !== c || m === null)
          return !1;
      }
      return r;
    }, C = (p) => !p || p.nodeType !== Node.ELEMENT_NODE || p.classList.contains("disabled") ? !0 : typeof p.disabled < "u" ? p.disabled : p.hasAttribute("disabled") && p.getAttribute("disabled") !== "false", k = (p) => {
      if (!document.documentElement.attachShadow)
        return null;
      if (typeof p.getRootNode == "function") {
        const r = p.getRootNode();
        return r instanceof ShadowRoot ? r : null;
      }
      return p instanceof ShadowRoot ? p : p.parentNode ? k(p.parentNode) : null;
    }, x = () => {
    }, j = (p) => {
      p.offsetHeight;
    }, V = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, R = [], Q = (p) => {
      document.readyState === "loading" ? (R.length || document.addEventListener("DOMContentLoaded", () => {
        for (const r of R)
          r();
      }), R.push(p)) : p();
    }, F = () => document.documentElement.dir === "rtl", N = (p) => {
      Q(() => {
        const r = V();
        if (r) {
          const c = p.NAME, m = r.fn[c];
          r.fn[c] = p.jQueryInterface, r.fn[c].Constructor = p, r.fn[c].noConflict = () => (r.fn[c] = m, p.jQueryInterface);
        }
      });
    }, S = (p, r = [], c = p) => typeof p == "function" ? p(...r) : c, W = (p, r, c = !0) => {
      if (!c) {
        S(p);
        return;
      }
      const m = 5, w = _(r) + m;
      let P = !1;
      const $ = ({
        target: z
      }) => {
        z === r && (P = !0, r.removeEventListener(h, $), S(p));
      };
      r.addEventListener(h, $), setTimeout(() => {
        P || E(r);
      }, w);
    }, U = (p, r, c, m) => {
      const w = p.length;
      let P = p.indexOf(r);
      return P === -1 ? !c && m ? p[w - 1] : p[0] : (P += c ? 1 : -1, m && (P = (P + w) % w), p[Math.max(0, Math.min(P, w - 1))]);
    }, oe = /[^.]*(?=\..*)\.|.*/, ce = /\..*/, ee = /::\d+$/, J = {};
    let Z = 1;
    const we = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, Le = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function Fe(p, r) {
      return r && `${r}::${Z++}` || p.uidEvent || Z++;
    }
    function Ae(p) {
      const r = Fe(p);
      return p.uidEvent = r, J[r] = J[r] || {}, J[r];
    }
    function ke(p, r) {
      return function c(m) {
        return X(m, {
          delegateTarget: p
        }), c.oneOff && y.off(p, m.type, r), r.apply(p, [m]);
      };
    }
    function me(p, r, c) {
      return function m(w) {
        const P = p.querySelectorAll(r);
        for (let {
          target: $
        } = w; $ && $ !== this; $ = $.parentNode)
          for (const z of P)
            if (z === $)
              return X(w, {
                delegateTarget: $
              }), m.oneOff && y.off(p, w.type, r, c), c.apply($, [w]);
      };
    }
    function he(p, r, c = null) {
      return Object.values(p).find((m) => m.callable === r && m.delegationSelector === c);
    }
    function le(p, r, c) {
      const m = typeof r == "string", w = m ? c : r || c;
      let P = I(p);
      return Le.has(P) || (P = p), [m, w, P];
    }
    function b(p, r, c, m, w) {
      if (typeof r != "string" || !p)
        return;
      let [P, $, z] = le(r, c, m);
      r in we && ($ = ((Zf) => function(Lt) {
        if (!Lt.relatedTarget || Lt.relatedTarget !== Lt.delegateTarget && !Lt.delegateTarget.contains(Lt.relatedTarget))
          return Zf.call(this, Lt);
      })($));
      const pe = Ae(p), Te = pe[z] || (pe[z] = {}), se = he(Te, $, P ? c : null);
      if (se) {
        se.oneOff = se.oneOff && w;
        return;
      }
      const xe = Fe($, r.replace(oe, "")), Re = P ? me(p, c, $) : ke(p, $);
      Re.delegationSelector = P ? c : null, Re.callable = $, Re.oneOff = w, Re.uidEvent = xe, Te[xe] = Re, p.addEventListener(z, Re, P);
    }
    function D(p, r, c, m, w) {
      const P = he(r[c], m, w);
      P && (p.removeEventListener(c, P, !!w), delete r[c][P.uidEvent]);
    }
    function L(p, r, c, m) {
      const w = r[c] || {};
      for (const [P, $] of Object.entries(w))
        P.includes(m) && D(p, r, c, $.callable, $.delegationSelector);
    }
    function I(p) {
      return p = p.replace(ce, ""), we[p] || p;
    }
    const y = {
      on(p, r, c, m) {
        b(p, r, c, m, !1);
      },
      one(p, r, c, m) {
        b(p, r, c, m, !0);
      },
      off(p, r, c, m) {
        if (typeof r != "string" || !p)
          return;
        const [w, P, $] = le(r, c, m), z = $ !== r, pe = Ae(p), Te = pe[$] || {}, se = r.startsWith(".");
        if (typeof P < "u") {
          if (!Object.keys(Te).length)
            return;
          D(p, pe, $, P, w ? c : null);
          return;
        }
        if (se)
          for (const xe of Object.keys(pe))
            L(p, pe, xe, r.slice(1));
        for (const [xe, Re] of Object.entries(Te)) {
          const Hn = xe.replace(ee, "");
          (!z || r.includes(Hn)) && D(p, pe, $, Re.callable, Re.delegationSelector);
        }
      },
      trigger(p, r, c) {
        if (typeof r != "string" || !p)
          return null;
        const m = V(), w = I(r), P = r !== w;
        let $ = null, z = !0, pe = !0, Te = !1;
        P && m && ($ = m.Event(r, c), m(p).trigger($), z = !$.isPropagationStopped(), pe = !$.isImmediatePropagationStopped(), Te = $.isDefaultPrevented());
        const se = X(new Event(r, {
          bubbles: z,
          cancelable: !0
        }), c);
        return Te && se.preventDefault(), pe && p.dispatchEvent(se), se.defaultPrevented && $ && $.preventDefault(), se;
      }
    };
    function X(p, r = {}) {
      for (const [c, m] of Object.entries(r))
        try {
          p[c] = m;
        } catch {
          Object.defineProperty(p, c, {
            configurable: !0,
            get() {
              return m;
            }
          });
        }
      return p;
    }
    function H(p) {
      if (p === "true")
        return !0;
      if (p === "false")
        return !1;
      if (p === Number(p).toString())
        return Number(p);
      if (p === "" || p === "null")
        return null;
      if (typeof p != "string")
        return p;
      try {
        return JSON.parse(decodeURIComponent(p));
      } catch {
        return p;
      }
    }
    function B(p) {
      return p.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`);
    }
    const K = {
      setDataAttribute(p, r, c) {
        p.setAttribute(`data-bs-${B(r)}`, c);
      },
      removeDataAttribute(p, r) {
        p.removeAttribute(`data-bs-${B(r)}`);
      },
      getDataAttributes(p) {
        if (!p)
          return {};
        const r = {}, c = Object.keys(p.dataset).filter((m) => m.startsWith("bs") && !m.startsWith("bsConfig"));
        for (const m of c) {
          let w = m.replace(/^bs/, "");
          w = w.charAt(0).toLowerCase() + w.slice(1, w.length), r[w] = H(p.dataset[m]);
        }
        return r;
      },
      getDataAttribute(p, r) {
        return H(p.getAttribute(`data-bs-${B(r)}`));
      }
    };
    class ie {
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
      _mergeConfigObj(r, c) {
        const m = v(c) ? K.getDataAttribute(c, "config") : {};
        return {
          ...this.constructor.Default,
          ...typeof m == "object" ? m : {},
          ...v(c) ? K.getDataAttributes(c) : {},
          ...typeof r == "object" ? r : {}
        };
      }
      _typeCheckConfig(r, c = this.constructor.DefaultType) {
        for (const [m, w] of Object.entries(c)) {
          const P = r[m], $ = v(P) ? "element" : d(P);
          if (!new RegExp(w).test($))
            throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${m}" provided type "${$}" but expected type "${w}".`);
        }
      }
    }
    const te = "5.3.2";
    class ge extends ie {
      constructor(r, c) {
        super(), r = O(r), r && (this._element = r, this._config = this._getConfig(c), a.set(this._element, this.constructor.DATA_KEY, this));
      }
      // Public
      dispose() {
        a.remove(this._element, this.constructor.DATA_KEY), y.off(this._element, this.constructor.EVENT_KEY);
        for (const r of Object.getOwnPropertyNames(this))
          this[r] = null;
      }
      _queueCallback(r, c, m = !0) {
        W(r, c, m);
      }
      _getConfig(r) {
        return r = this._mergeConfigObj(r, this._element), r = this._configAfterMerge(r), this._typeCheckConfig(r), r;
      }
      // Static
      static getInstance(r) {
        return a.get(O(r), this.DATA_KEY);
      }
      static getOrCreateInstance(r, c = {}) {
        return this.getInstance(r) || new this(r, typeof c == "object" ? c : null);
      }
      static get VERSION() {
        return te;
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
    const Jt = (p) => {
      let r = p.getAttribute("data-bs-target");
      if (!r || r === "#") {
        let c = p.getAttribute("href");
        if (!c || !c.includes("#") && !c.startsWith("."))
          return null;
        c.includes("#") && !c.startsWith("#") && (c = `#${c.split("#")[1]}`), r = c && c !== "#" ? f(c.trim()) : null;
      }
      return r;
    }, M = {
      find(p, r = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(r, p));
      },
      findOne(p, r = document.documentElement) {
        return Element.prototype.querySelector.call(r, p);
      },
      children(p, r) {
        return [].concat(...p.children).filter((c) => c.matches(r));
      },
      parents(p, r) {
        const c = [];
        let m = p.parentNode.closest(r);
        for (; m; )
          c.push(m), m = m.parentNode.closest(r);
        return c;
      },
      prev(p, r) {
        let c = p.previousElementSibling;
        for (; c; ) {
          if (c.matches(r))
            return [c];
          c = c.previousElementSibling;
        }
        return [];
      },
      // TODO: this is now unused; remove later along with prev()
      next(p, r) {
        let c = p.nextElementSibling;
        for (; c; ) {
          if (c.matches(r))
            return [c];
          c = c.nextElementSibling;
        }
        return [];
      },
      focusableChildren(p) {
        const r = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((c) => `${c}:not([tabindex^="-"])`).join(",");
        return this.find(r, p).filter((c) => !C(c) && T(c));
      },
      getSelectorFromElement(p) {
        const r = Jt(p);
        return r && M.findOne(r) ? r : null;
      },
      getElementFromSelector(p) {
        const r = Jt(p);
        return r ? M.findOne(r) : null;
      },
      getMultipleElementsFromSelector(p) {
        const r = Jt(p);
        return r ? M.find(r) : [];
      }
    }, He = (p, r = "hide") => {
      const c = `click.dismiss${p.EVENT_KEY}`, m = p.NAME;
      y.on(document, c, `[data-bs-dismiss="${m}"]`, function(w) {
        if (["A", "AREA"].includes(this.tagName) && w.preventDefault(), C(this))
          return;
        const P = M.getElementFromSelector(this) || this.closest(`.${m}`);
        p.getOrCreateInstance(P)[r]();
      });
    }, Sn = "alert", Ot = ".bs.alert", Cn = `close${Ot}`, Nn = `closed${Ot}`, $n = "fade", Pn = "show";
    class Xt extends ge {
      // Getters
      static get NAME() {
        return Sn;
      }
      // Public
      close() {
        if (y.trigger(this._element, Cn).defaultPrevented)
          return;
        this._element.classList.remove(Pn);
        const c = this._element.classList.contains($n);
        this._queueCallback(() => this._destroyElement(), this._element, c);
      }
      // Private
      _destroyElement() {
        this._element.remove(), y.trigger(this._element, Nn), this.dispose();
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const c = Xt.getOrCreateInstance(this);
          if (typeof r == "string") {
            if (c[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            c[r](this);
          }
        });
      }
    }
    He(Xt, "close"), N(Xt);
    const _c = "button", Ec = ".bs.button", vc = ".data-api", yc = "active", Jr = '[data-bs-toggle="button"]', bc = `click${Ec}${vc}`;
    class Qt extends ge {
      // Getters
      static get NAME() {
        return _c;
      }
      // Public
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(yc));
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const c = Qt.getOrCreateInstance(this);
          r === "toggle" && c[r]();
        });
      }
    }
    y.on(document, bc, Jr, (p) => {
      p.preventDefault();
      const r = p.target.closest(Jr);
      Qt.getOrCreateInstance(r).toggle();
    }), N(Qt);
    const wc = "swipe", Tt = ".bs.swipe", Ac = `touchstart${Tt}`, Oc = `touchmove${Tt}`, Tc = `touchend${Tt}`, Sc = `pointerdown${Tt}`, Cc = `pointerup${Tt}`, Nc = "touch", $c = "pen", Pc = "pointer-event", Rc = 40, Dc = {
      endCallback: null,
      leftCallback: null,
      rightCallback: null
    }, Lc = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)"
    };
    class Rn extends ie {
      constructor(r, c) {
        super(), this._element = r, !(!r || !Rn.isSupported()) && (this._config = this._getConfig(c), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
      }
      // Getters
      static get Default() {
        return Dc;
      }
      static get DefaultType() {
        return Lc;
      }
      static get NAME() {
        return wc;
      }
      // Public
      dispose() {
        y.off(this._element, Tt);
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
        this._eventIsPointerPenTouch(r) && (this._deltaX = r.clientX - this._deltaX), this._handleSwipe(), S(this._config.endCallback);
      }
      _move(r) {
        this._deltaX = r.touches && r.touches.length > 1 ? 0 : r.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const r = Math.abs(this._deltaX);
        if (r <= Rc)
          return;
        const c = r / this._deltaX;
        this._deltaX = 0, c && S(c > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents ? (y.on(this._element, Sc, (r) => this._start(r)), y.on(this._element, Cc, (r) => this._end(r)), this._element.classList.add(Pc)) : (y.on(this._element, Ac, (r) => this._start(r)), y.on(this._element, Oc, (r) => this._move(r)), y.on(this._element, Tc, (r) => this._end(r)));
      }
      _eventIsPointerPenTouch(r) {
        return this._supportPointerEvents && (r.pointerType === $c || r.pointerType === Nc);
      }
      // Static
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }
    const kc = "carousel", Xe = ".bs.carousel", Xr = ".data-api", xc = "ArrowLeft", Ic = "ArrowRight", Mc = 500, Zt = "next", St = "prev", Ct = "left", Dn = "right", jc = `slide${Xe}`, vs = `slid${Xe}`, Vc = `keydown${Xe}`, Bc = `mouseenter${Xe}`, Fc = `mouseleave${Xe}`, Hc = `dragstart${Xe}`, Wc = `load${Xe}${Xr}`, Uc = `click${Xe}${Xr}`, Qr = "carousel", Ln = "active", zc = "slide", Kc = "carousel-item-end", Gc = "carousel-item-start", Yc = "carousel-item-next", qc = "carousel-item-prev", Zr = ".active", eo = ".carousel-item", Jc = Zr + eo, Xc = ".carousel-item img", Qc = ".carousel-indicators", Zc = "[data-bs-slide], [data-bs-slide-to]", el = '[data-bs-ride="carousel"]', tl = {
      [xc]: Dn,
      [Ic]: Ct
    }, nl = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0
    }, sl = {
      interval: "(number|boolean)",
      // TODO:v6 remove boolean support
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean"
    };
    class Nt extends ge {
      constructor(r, c) {
        super(r, c), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = M.findOne(Qc, this._element), this._addEventListeners(), this._config.ride === Qr && this.cycle();
      }
      // Getters
      static get Default() {
        return nl;
      }
      static get DefaultType() {
        return sl;
      }
      static get NAME() {
        return kc;
      }
      // Public
      next() {
        this._slide(Zt);
      }
      nextWhenVisible() {
        !document.hidden && T(this._element) && this.next();
      }
      prev() {
        this._slide(St);
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
            y.one(this._element, vs, () => this.cycle());
            return;
          }
          this.cycle();
        }
      }
      to(r) {
        const c = this._getItems();
        if (r > c.length - 1 || r < 0)
          return;
        if (this._isSliding) {
          y.one(this._element, vs, () => this.to(r));
          return;
        }
        const m = this._getItemIndex(this._getActive());
        if (m === r)
          return;
        const w = r > m ? Zt : St;
        this._slide(w, c[r]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      // Private
      _configAfterMerge(r) {
        return r.defaultInterval = r.interval, r;
      }
      _addEventListeners() {
        this._config.keyboard && y.on(this._element, Vc, (r) => this._keydown(r)), this._config.pause === "hover" && (y.on(this._element, Bc, () => this.pause()), y.on(this._element, Fc, () => this._maybeEnableCycle())), this._config.touch && Rn.isSupported() && this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const m of M.find(Xc, this._element))
          y.on(m, Hc, (w) => w.preventDefault());
        const c = {
          leftCallback: () => this._slide(this._directionToOrder(Ct)),
          rightCallback: () => this._slide(this._directionToOrder(Dn)),
          endCallback: () => {
            this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Mc + this._config.interval));
          }
        };
        this._swipeHelper = new Rn(this._element, c);
      }
      _keydown(r) {
        if (/input|textarea/i.test(r.target.tagName))
          return;
        const c = tl[r.key];
        c && (r.preventDefault(), this._slide(this._directionToOrder(c)));
      }
      _getItemIndex(r) {
        return this._getItems().indexOf(r);
      }
      _setActiveIndicatorElement(r) {
        if (!this._indicatorsElement)
          return;
        const c = M.findOne(Zr, this._indicatorsElement);
        c.classList.remove(Ln), c.removeAttribute("aria-current");
        const m = M.findOne(`[data-bs-slide-to="${r}"]`, this._indicatorsElement);
        m && (m.classList.add(Ln), m.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const r = this._activeElement || this._getActive();
        if (!r)
          return;
        const c = Number.parseInt(r.getAttribute("data-bs-interval"), 10);
        this._config.interval = c || this._config.defaultInterval;
      }
      _slide(r, c = null) {
        if (this._isSliding)
          return;
        const m = this._getActive(), w = r === Zt, P = c || U(this._getItems(), m, w, this._config.wrap);
        if (P === m)
          return;
        const $ = this._getItemIndex(P), z = (Hn) => y.trigger(this._element, Hn, {
          relatedTarget: P,
          direction: this._orderToDirection(r),
          from: this._getItemIndex(m),
          to: $
        });
        if (z(jc).defaultPrevented || !m || !P)
          return;
        const Te = !!this._interval;
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement($), this._activeElement = P;
        const se = w ? Gc : Kc, xe = w ? Yc : qc;
        P.classList.add(xe), j(P), m.classList.add(se), P.classList.add(se);
        const Re = () => {
          P.classList.remove(se, xe), P.classList.add(Ln), m.classList.remove(Ln, xe, se), this._isSliding = !1, z(vs);
        };
        this._queueCallback(Re, m, this._isAnimated()), Te && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains(zc);
      }
      _getActive() {
        return M.findOne(Jc, this._element);
      }
      _getItems() {
        return M.find(eo, this._element);
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
      _directionToOrder(r) {
        return F() ? r === Ct ? St : Zt : r === Ct ? Zt : St;
      }
      _orderToDirection(r) {
        return F() ? r === St ? Ct : Dn : r === St ? Dn : Ct;
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const c = Nt.getOrCreateInstance(this, r);
          if (typeof r == "number") {
            c.to(r);
            return;
          }
          if (typeof r == "string") {
            if (c[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            c[r]();
          }
        });
      }
    }
    y.on(document, Uc, Zc, function(p) {
      const r = M.getElementFromSelector(this);
      if (!r || !r.classList.contains(Qr))
        return;
      p.preventDefault();
      const c = Nt.getOrCreateInstance(r), m = this.getAttribute("data-bs-slide-to");
      if (m) {
        c.to(m), c._maybeEnableCycle();
        return;
      }
      if (K.getDataAttribute(this, "slide") === "next") {
        c.next(), c._maybeEnableCycle();
        return;
      }
      c.prev(), c._maybeEnableCycle();
    }), y.on(window, Wc, () => {
      const p = M.find(el);
      for (const r of p)
        Nt.getOrCreateInstance(r);
    }), N(Nt);
    const rl = "collapse", en = ".bs.collapse", ol = ".data-api", il = `show${en}`, al = `shown${en}`, cl = `hide${en}`, ll = `hidden${en}`, ul = `click${en}${ol}`, ys = "show", $t = "collapse", kn = "collapsing", fl = "collapsed", dl = `:scope .${$t} .${$t}`, hl = "collapse-horizontal", pl = "width", ml = "height", gl = ".collapse.show, .collapse.collapsing", bs = '[data-bs-toggle="collapse"]', _l = {
      parent: null,
      toggle: !0
    }, El = {
      parent: "(null|element)",
      toggle: "boolean"
    };
    class Pt extends ge {
      constructor(r, c) {
        super(r, c), this._isTransitioning = !1, this._triggerArray = [];
        const m = M.find(bs);
        for (const w of m) {
          const P = M.getSelectorFromElement(w), $ = M.find(P).filter((z) => z === this._element);
          P !== null && $.length && this._triggerArray.push(w);
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
      }
      // Getters
      static get Default() {
        return _l;
      }
      static get DefaultType() {
        return El;
      }
      static get NAME() {
        return rl;
      }
      // Public
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown())
          return;
        let r = [];
        if (this._config.parent && (r = this._getFirstLevelChildren(gl).filter((z) => z !== this._element).map((z) => Pt.getOrCreateInstance(z, {
          toggle: !1
        }))), r.length && r[0]._isTransitioning || y.trigger(this._element, il).defaultPrevented)
          return;
        for (const z of r)
          z.hide();
        const m = this._getDimension();
        this._element.classList.remove($t), this._element.classList.add(kn), this._element.style[m] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        const w = () => {
          this._isTransitioning = !1, this._element.classList.remove(kn), this._element.classList.add($t, ys), this._element.style[m] = "", y.trigger(this._element, al);
        }, $ = `scroll${m[0].toUpperCase() + m.slice(1)}`;
        this._queueCallback(w, this._element, !0), this._element.style[m] = `${this._element[$]}px`;
      }
      hide() {
        if (this._isTransitioning || !this._isShown() || y.trigger(this._element, cl).defaultPrevented)
          return;
        const c = this._getDimension();
        this._element.style[c] = `${this._element.getBoundingClientRect()[c]}px`, j(this._element), this._element.classList.add(kn), this._element.classList.remove($t, ys);
        for (const w of this._triggerArray) {
          const P = M.getElementFromSelector(w);
          P && !this._isShown(P) && this._addAriaAndCollapsedClass([w], !1);
        }
        this._isTransitioning = !0;
        const m = () => {
          this._isTransitioning = !1, this._element.classList.remove(kn), this._element.classList.add($t), y.trigger(this._element, ll);
        };
        this._element.style[c] = "", this._queueCallback(m, this._element, !0);
      }
      _isShown(r = this._element) {
        return r.classList.contains(ys);
      }
      // Private
      _configAfterMerge(r) {
        return r.toggle = !!r.toggle, r.parent = O(r.parent), r;
      }
      _getDimension() {
        return this._element.classList.contains(hl) ? pl : ml;
      }
      _initializeChildren() {
        if (!this._config.parent)
          return;
        const r = this._getFirstLevelChildren(bs);
        for (const c of r) {
          const m = M.getElementFromSelector(c);
          m && this._addAriaAndCollapsedClass([c], this._isShown(m));
        }
      }
      _getFirstLevelChildren(r) {
        const c = M.find(dl, this._config.parent);
        return M.find(r, this._config.parent).filter((m) => !c.includes(m));
      }
      _addAriaAndCollapsedClass(r, c) {
        if (r.length)
          for (const m of r)
            m.classList.toggle(fl, !c), m.setAttribute("aria-expanded", c);
      }
      // Static
      static jQueryInterface(r) {
        const c = {};
        return typeof r == "string" && /show|hide/.test(r) && (c.toggle = !1), this.each(function() {
          const m = Pt.getOrCreateInstance(this, c);
          if (typeof r == "string") {
            if (typeof m[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            m[r]();
          }
        });
      }
    }
    y.on(document, ul, bs, function(p) {
      (p.target.tagName === "A" || p.delegateTarget && p.delegateTarget.tagName === "A") && p.preventDefault();
      for (const r of M.getMultipleElementsFromSelector(this))
        Pt.getOrCreateInstance(r, {
          toggle: !1
        }).toggle();
    }), N(Pt);
    const to = "dropdown", lt = ".bs.dropdown", ws = ".data-api", vl = "Escape", no = "Tab", yl = "ArrowUp", so = "ArrowDown", bl = 2, wl = `hide${lt}`, Al = `hidden${lt}`, Ol = `show${lt}`, Tl = `shown${lt}`, ro = `click${lt}${ws}`, oo = `keydown${lt}${ws}`, Sl = `keyup${lt}${ws}`, Rt = "show", Cl = "dropup", Nl = "dropend", $l = "dropstart", Pl = "dropup-center", Rl = "dropdown-center", ut = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Dl = `${ut}.${Rt}`, xn = ".dropdown-menu", Ll = ".navbar", kl = ".navbar-nav", xl = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Il = F() ? "top-end" : "top-start", Ml = F() ? "top-start" : "top-end", jl = F() ? "bottom-end" : "bottom-start", Vl = F() ? "bottom-start" : "bottom-end", Bl = F() ? "left-start" : "right-start", Fl = F() ? "right-start" : "left-start", Hl = "top", Wl = "bottom", Ul = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    }, zl = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };
    class Pe extends ge {
      constructor(r, c) {
        super(r, c), this._popper = null, this._parent = this._element.parentNode, this._menu = M.next(this._element, xn)[0] || M.prev(this._element, xn)[0] || M.findOne(xn, this._parent), this._inNavbar = this._detectNavbar();
      }
      // Getters
      static get Default() {
        return Ul;
      }
      static get DefaultType() {
        return zl;
      }
      static get NAME() {
        return to;
      }
      // Public
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (C(this._element) || this._isShown())
          return;
        const r = {
          relatedTarget: this._element
        };
        if (!y.trigger(this._element, Ol, r).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(kl))
            for (const m of [].concat(...document.body.children))
              y.on(m, "mouseover", x);
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Rt), this._element.classList.add(Rt), y.trigger(this._element, Tl, r);
        }
      }
      hide() {
        if (C(this._element) || !this._isShown())
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
        if (!y.trigger(this._element, wl, r).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const m of [].concat(...document.body.children))
              y.off(m, "mouseover", x);
          this._popper && this._popper.destroy(), this._menu.classList.remove(Rt), this._element.classList.remove(Rt), this._element.setAttribute("aria-expanded", "false"), K.removeDataAttribute(this._menu, "popper"), y.trigger(this._element, Al, r);
        }
      }
      _getConfig(r) {
        if (r = super._getConfig(r), typeof r.reference == "object" && !v(r.reference) && typeof r.reference.getBoundingClientRect != "function")
          throw new TypeError(`${to.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return r;
      }
      _createPopper() {
        if (typeof o > "u")
          throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let r = this._element;
        this._config.reference === "parent" ? r = this._parent : v(this._config.reference) ? r = O(this._config.reference) : typeof this._config.reference == "object" && (r = this._config.reference);
        const c = this._getPopperConfig();
        this._popper = o.createPopper(r, this._menu, c);
      }
      _isShown() {
        return this._menu.classList.contains(Rt);
      }
      _getPlacement() {
        const r = this._parent;
        if (r.classList.contains(Nl))
          return Bl;
        if (r.classList.contains($l))
          return Fl;
        if (r.classList.contains(Pl))
          return Hl;
        if (r.classList.contains(Rl))
          return Wl;
        const c = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return r.classList.contains(Cl) ? c ? Ml : Il : c ? Vl : jl;
      }
      _detectNavbar() {
        return this._element.closest(Ll) !== null;
      }
      _getOffset() {
        const {
          offset: r
        } = this._config;
        return typeof r == "string" ? r.split(",").map((c) => Number.parseInt(c, 10)) : typeof r == "function" ? (c) => r(c, this._element) : r;
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
        return (this._inNavbar || this._config.display === "static") && (K.setDataAttribute(this._menu, "popper", "static"), r.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), {
          ...r,
          ...S(this._config.popperConfig, [r])
        };
      }
      _selectMenuItem({
        key: r,
        target: c
      }) {
        const m = M.find(xl, this._menu).filter((w) => T(w));
        m.length && U(m, c, r === so, !m.includes(c)).focus();
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const c = Pe.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (typeof c[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            c[r]();
          }
        });
      }
      static clearMenus(r) {
        if (r.button === bl || r.type === "keyup" && r.key !== no)
          return;
        const c = M.find(Dl);
        for (const m of c) {
          const w = Pe.getInstance(m);
          if (!w || w._config.autoClose === !1)
            continue;
          const P = r.composedPath(), $ = P.includes(w._menu);
          if (P.includes(w._element) || w._config.autoClose === "inside" && !$ || w._config.autoClose === "outside" && $ || w._menu.contains(r.target) && (r.type === "keyup" && r.key === no || /input|select|option|textarea|form/i.test(r.target.tagName)))
            continue;
          const z = {
            relatedTarget: w._element
          };
          r.type === "click" && (z.clickEvent = r), w._completeHide(z);
        }
      }
      static dataApiKeydownHandler(r) {
        const c = /input|textarea/i.test(r.target.tagName), m = r.key === vl, w = [yl, so].includes(r.key);
        if (!w && !m || c && !m)
          return;
        r.preventDefault();
        const P = this.matches(ut) ? this : M.prev(this, ut)[0] || M.next(this, ut)[0] || M.findOne(ut, r.delegateTarget.parentNode), $ = Pe.getOrCreateInstance(P);
        if (w) {
          r.stopPropagation(), $.show(), $._selectMenuItem(r);
          return;
        }
        $._isShown() && (r.stopPropagation(), $.hide(), P.focus());
      }
    }
    y.on(document, oo, ut, Pe.dataApiKeydownHandler), y.on(document, oo, xn, Pe.dataApiKeydownHandler), y.on(document, ro, Pe.clearMenus), y.on(document, Sl, Pe.clearMenus), y.on(document, ro, ut, function(p) {
      p.preventDefault(), Pe.getOrCreateInstance(this).toggle();
    }), N(Pe);
    const io = "backdrop", Kl = "fade", ao = "show", co = `mousedown.bs.${io}`, Gl = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      // if false, we use the backdrop helper without adding any element to the dom
      rootElement: "body"
      // give the choice to place backdrop under different elements
    }, Yl = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)"
    };
    class lo extends ie {
      constructor(r) {
        super(), this._config = this._getConfig(r), this._isAppended = !1, this._element = null;
      }
      // Getters
      static get Default() {
        return Gl;
      }
      static get DefaultType() {
        return Yl;
      }
      static get NAME() {
        return io;
      }
      // Public
      show(r) {
        if (!this._config.isVisible) {
          S(r);
          return;
        }
        this._append();
        const c = this._getElement();
        this._config.isAnimated && j(c), c.classList.add(ao), this._emulateAnimation(() => {
          S(r);
        });
      }
      hide(r) {
        if (!this._config.isVisible) {
          S(r);
          return;
        }
        this._getElement().classList.remove(ao), this._emulateAnimation(() => {
          this.dispose(), S(r);
        });
      }
      dispose() {
        this._isAppended && (y.off(this._element, co), this._element.remove(), this._isAppended = !1);
      }
      // Private
      _getElement() {
        if (!this._element) {
          const r = document.createElement("div");
          r.className = this._config.className, this._config.isAnimated && r.classList.add(Kl), this._element = r;
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
        this._config.rootElement.append(r), y.on(r, co, () => {
          S(this._config.clickCallback);
        }), this._isAppended = !0;
      }
      _emulateAnimation(r) {
        W(r, this._getElement(), this._config.isAnimated);
      }
    }
    const ql = "focustrap", In = ".bs.focustrap", Jl = `focusin${In}`, Xl = `keydown.tab${In}`, Ql = "Tab", Zl = "forward", uo = "backward", eu = {
      autofocus: !0,
      trapElement: null
      // The element to trap focus inside of
    }, tu = {
      autofocus: "boolean",
      trapElement: "element"
    };
    class fo extends ie {
      constructor(r) {
        super(), this._config = this._getConfig(r), this._isActive = !1, this._lastTabNavDirection = null;
      }
      // Getters
      static get Default() {
        return eu;
      }
      static get DefaultType() {
        return tu;
      }
      static get NAME() {
        return ql;
      }
      // Public
      activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), y.off(document, In), y.on(document, Jl, (r) => this._handleFocusin(r)), y.on(document, Xl, (r) => this._handleKeydown(r)), this._isActive = !0);
      }
      deactivate() {
        this._isActive && (this._isActive = !1, y.off(document, In));
      }
      // Private
      _handleFocusin(r) {
        const {
          trapElement: c
        } = this._config;
        if (r.target === document || r.target === c || c.contains(r.target))
          return;
        const m = M.focusableChildren(c);
        m.length === 0 ? c.focus() : this._lastTabNavDirection === uo ? m[m.length - 1].focus() : m[0].focus();
      }
      _handleKeydown(r) {
        r.key === Ql && (this._lastTabNavDirection = r.shiftKey ? uo : Zl);
      }
    }
    const ho = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", po = ".sticky-top", Mn = "padding-right", mo = "margin-right";
    class As {
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
        this._disableOverFlow(), this._setElementAttributes(this._element, Mn, (c) => c + r), this._setElementAttributes(ho, Mn, (c) => c + r), this._setElementAttributes(po, mo, (c) => c - r);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Mn), this._resetElementAttributes(ho, Mn), this._resetElementAttributes(po, mo);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      // Private
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
      _setElementAttributes(r, c, m) {
        const w = this.getWidth(), P = ($) => {
          if ($ !== this._element && window.innerWidth > $.clientWidth + w)
            return;
          this._saveInitialAttribute($, c);
          const z = window.getComputedStyle($).getPropertyValue(c);
          $.style.setProperty(c, `${m(Number.parseFloat(z))}px`);
        };
        this._applyManipulationCallback(r, P);
      }
      _saveInitialAttribute(r, c) {
        const m = r.style.getPropertyValue(c);
        m && K.setDataAttribute(r, c, m);
      }
      _resetElementAttributes(r, c) {
        const m = (w) => {
          const P = K.getDataAttribute(w, c);
          if (P === null) {
            w.style.removeProperty(c);
            return;
          }
          K.removeDataAttribute(w, c), w.style.setProperty(c, P);
        };
        this._applyManipulationCallback(r, m);
      }
      _applyManipulationCallback(r, c) {
        if (v(r)) {
          c(r);
          return;
        }
        for (const m of M.find(r, this._element))
          c(m);
      }
    }
    const nu = "modal", Oe = ".bs.modal", su = ".data-api", ru = "Escape", ou = `hide${Oe}`, iu = `hidePrevented${Oe}`, go = `hidden${Oe}`, _o = `show${Oe}`, au = `shown${Oe}`, cu = `resize${Oe}`, lu = `click.dismiss${Oe}`, uu = `mousedown.dismiss${Oe}`, fu = `keydown.dismiss${Oe}`, du = `click${Oe}${su}`, Eo = "modal-open", hu = "fade", vo = "show", Os = "modal-static", pu = ".modal.show", mu = ".modal-dialog", gu = ".modal-body", _u = '[data-bs-toggle="modal"]', Eu = {
      backdrop: !0,
      focus: !0,
      keyboard: !0
    }, vu = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
    class ft extends ge {
      constructor(r, c) {
        super(r, c), this._dialog = M.findOne(mu, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new As(), this._addEventListeners();
      }
      // Getters
      static get Default() {
        return Eu;
      }
      static get DefaultType() {
        return vu;
      }
      static get NAME() {
        return nu;
      }
      // Public
      toggle(r) {
        return this._isShown ? this.hide() : this.show(r);
      }
      show(r) {
        this._isShown || this._isTransitioning || y.trigger(this._element, _o, {
          relatedTarget: r
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Eo), this._adjustDialog(), this._backdrop.show(() => this._showElement(r)));
      }
      hide() {
        !this._isShown || this._isTransitioning || y.trigger(this._element, ou).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(vo), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
      }
      dispose() {
        y.off(window, Oe), y.off(this._dialog, Oe), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      // Private
      _initializeBackDrop() {
        return new lo({
          isVisible: !!this._config.backdrop,
          // 'static' option will be translated to true, and booleans will keep their value,
          isAnimated: this._isAnimated()
        });
      }
      _initializeFocusTrap() {
        return new fo({
          trapElement: this._element
        });
      }
      _showElement(r) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const c = M.findOne(gu, this._dialog);
        c && (c.scrollTop = 0), j(this._element), this._element.classList.add(vo);
        const m = () => {
          this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, y.trigger(this._element, au, {
            relatedTarget: r
          });
        };
        this._queueCallback(m, this._dialog, this._isAnimated());
      }
      _addEventListeners() {
        y.on(this._element, fu, (r) => {
          if (r.key === ru) {
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            this._triggerBackdropTransition();
          }
        }), y.on(window, cu, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }), y.on(this._element, uu, (r) => {
          y.one(this._element, lu, (c) => {
            if (!(this._element !== r.target || this._element !== c.target)) {
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
          document.body.classList.remove(Eo), this._resetAdjustments(), this._scrollBar.reset(), y.trigger(this._element, go);
        });
      }
      _isAnimated() {
        return this._element.classList.contains(hu);
      }
      _triggerBackdropTransition() {
        if (y.trigger(this._element, iu).defaultPrevented)
          return;
        const c = this._element.scrollHeight > document.documentElement.clientHeight, m = this._element.style.overflowY;
        m === "hidden" || this._element.classList.contains(Os) || (c || (this._element.style.overflowY = "hidden"), this._element.classList.add(Os), this._queueCallback(() => {
          this._element.classList.remove(Os), this._queueCallback(() => {
            this._element.style.overflowY = m;
          }, this._dialog);
        }, this._dialog), this._element.focus());
      }
      /**
       * The following methods are used to handle overflowing modals
       */
      _adjustDialog() {
        const r = this._element.scrollHeight > document.documentElement.clientHeight, c = this._scrollBar.getWidth(), m = c > 0;
        if (m && !r) {
          const w = F() ? "paddingLeft" : "paddingRight";
          this._element.style[w] = `${c}px`;
        }
        if (!m && r) {
          const w = F() ? "paddingRight" : "paddingLeft";
          this._element.style[w] = `${c}px`;
        }
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
      // Static
      static jQueryInterface(r, c) {
        return this.each(function() {
          const m = ft.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (typeof m[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            m[r](c);
          }
        });
      }
    }
    y.on(document, du, _u, function(p) {
      const r = M.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && p.preventDefault(), y.one(r, _o, (w) => {
        w.defaultPrevented || y.one(r, go, () => {
          T(this) && this.focus();
        });
      });
      const c = M.findOne(pu);
      c && ft.getInstance(c).hide(), ft.getOrCreateInstance(r).toggle(this);
    }), He(ft), N(ft);
    const yu = "offcanvas", We = ".bs.offcanvas", yo = ".data-api", bu = `load${We}${yo}`, wu = "Escape", bo = "show", wo = "showing", Ao = "hiding", Au = "offcanvas-backdrop", Oo = ".offcanvas.show", Ou = `show${We}`, Tu = `shown${We}`, Su = `hide${We}`, To = `hidePrevented${We}`, So = `hidden${We}`, Cu = `resize${We}`, Nu = `click${We}${yo}`, $u = `keydown.dismiss${We}`, Pu = '[data-bs-toggle="offcanvas"]', Ru = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    }, Du = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean"
    };
    class Ue extends ge {
      constructor(r, c) {
        super(r, c), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
      }
      // Getters
      static get Default() {
        return Ru;
      }
      static get DefaultType() {
        return Du;
      }
      static get NAME() {
        return yu;
      }
      // Public
      toggle(r) {
        return this._isShown ? this.hide() : this.show(r);
      }
      show(r) {
        if (this._isShown || y.trigger(this._element, Ou, {
          relatedTarget: r
        }).defaultPrevented)
          return;
        this._isShown = !0, this._backdrop.show(), this._config.scroll || new As().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(wo);
        const m = () => {
          (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(bo), this._element.classList.remove(wo), y.trigger(this._element, Tu, {
            relatedTarget: r
          });
        };
        this._queueCallback(m, this._element, !0);
      }
      hide() {
        if (!this._isShown || y.trigger(this._element, Su).defaultPrevented)
          return;
        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Ao), this._backdrop.hide();
        const c = () => {
          this._element.classList.remove(bo, Ao), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new As().reset(), y.trigger(this._element, So);
        };
        this._queueCallback(c, this._element, !0);
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      // Private
      _initializeBackDrop() {
        const r = () => {
          if (this._config.backdrop === "static") {
            y.trigger(this._element, To);
            return;
          }
          this.hide();
        }, c = !!this._config.backdrop;
        return new lo({
          className: Au,
          isVisible: c,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: c ? r : null
        });
      }
      _initializeFocusTrap() {
        return new fo({
          trapElement: this._element
        });
      }
      _addEventListeners() {
        y.on(this._element, $u, (r) => {
          if (r.key === wu) {
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            y.trigger(this._element, To);
          }
        });
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const c = Ue.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (c[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            c[r](this);
          }
        });
      }
    }
    y.on(document, Nu, Pu, function(p) {
      const r = M.getElementFromSelector(this);
      if (["A", "AREA"].includes(this.tagName) && p.preventDefault(), C(this))
        return;
      y.one(r, So, () => {
        T(this) && this.focus();
      });
      const c = M.findOne(Oo);
      c && c !== r && Ue.getInstance(c).hide(), Ue.getOrCreateInstance(r).toggle(this);
    }), y.on(window, bu, () => {
      for (const p of M.find(Oo))
        Ue.getOrCreateInstance(p).show();
    }), y.on(window, Cu, () => {
      for (const p of M.find("[aria-modal][class*=show][class*=offcanvas-]"))
        getComputedStyle(p).position !== "fixed" && Ue.getOrCreateInstance(p).hide();
    }), He(Ue), N(Ue);
    const Co = {
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
    }, Lu = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), ku = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, xu = (p, r) => {
      const c = p.nodeName.toLowerCase();
      return r.includes(c) ? Lu.has(c) ? !!ku.test(p.nodeValue) : !0 : r.filter((m) => m instanceof RegExp).some((m) => m.test(c));
    };
    function Iu(p, r, c) {
      if (!p.length)
        return p;
      if (c && typeof c == "function")
        return c(p);
      const w = new window.DOMParser().parseFromString(p, "text/html"), P = [].concat(...w.body.querySelectorAll("*"));
      for (const $ of P) {
        const z = $.nodeName.toLowerCase();
        if (!Object.keys(r).includes(z)) {
          $.remove();
          continue;
        }
        const pe = [].concat(...$.attributes), Te = [].concat(r["*"] || [], r[z] || []);
        for (const se of pe)
          xu(se, Te) || $.removeAttribute(se.nodeName);
      }
      return w.body.innerHTML;
    }
    const Mu = "TemplateFactory", ju = {
      allowList: Co,
      content: {},
      // { selector : text ,  selector2 : text2 , }
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>"
    }, Vu = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string"
    }, Bu = {
      entry: "(string|element|function|null)",
      selector: "(string|element)"
    };
    class Fu extends ie {
      constructor(r) {
        super(), this._config = this._getConfig(r);
      }
      // Getters
      static get Default() {
        return ju;
      }
      static get DefaultType() {
        return Vu;
      }
      static get NAME() {
        return Mu;
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
        for (const [w, P] of Object.entries(this._config.content))
          this._setContent(r, P, w);
        const c = r.children[0], m = this._resolvePossibleFunction(this._config.extraClass);
        return m && c.classList.add(...m.split(" ")), c;
      }
      // Private
      _typeCheckConfig(r) {
        super._typeCheckConfig(r), this._checkContent(r.content);
      }
      _checkContent(r) {
        for (const [c, m] of Object.entries(r))
          super._typeCheckConfig({
            selector: c,
            entry: m
          }, Bu);
      }
      _setContent(r, c, m) {
        const w = M.findOne(m, r);
        if (w) {
          if (c = this._resolvePossibleFunction(c), !c) {
            w.remove();
            return;
          }
          if (v(c)) {
            this._putElementInTemplate(O(c), w);
            return;
          }
          if (this._config.html) {
            w.innerHTML = this._maybeSanitize(c);
            return;
          }
          w.textContent = c;
        }
      }
      _maybeSanitize(r) {
        return this._config.sanitize ? Iu(r, this._config.allowList, this._config.sanitizeFn) : r;
      }
      _resolvePossibleFunction(r) {
        return S(r, [this]);
      }
      _putElementInTemplate(r, c) {
        if (this._config.html) {
          c.innerHTML = "", c.append(r);
          return;
        }
        c.textContent = r.textContent;
      }
    }
    const Hu = "tooltip", Wu = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Ts = "fade", Uu = "modal", jn = "show", zu = ".tooltip-inner", No = `.${Uu}`, $o = "hide.bs.modal", tn = "hover", Ss = "focus", Ku = "click", Gu = "manual", Yu = "hide", qu = "hidden", Ju = "show", Xu = "shown", Qu = "inserted", Zu = "click", ef = "focusin", tf = "focusout", nf = "mouseenter", sf = "mouseleave", rf = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: F() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: F() ? "right" : "left"
    }, of = {
      allowList: Co,
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
    }, af = {
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
    class dt extends ge {
      constructor(r, c) {
        if (typeof o > "u")
          throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(r, c), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
      }
      // Getters
      static get Default() {
        return of;
      }
      static get DefaultType() {
        return af;
      }
      static get NAME() {
        return Hu;
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
        clearTimeout(this._timeout), y.off(this._element.closest(No), $o, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled))
          return;
        const r = y.trigger(this._element, this.constructor.eventName(Ju)), m = (k(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (r.defaultPrevented || !m)
          return;
        this._disposePopper();
        const w = this._getTipElement();
        this._element.setAttribute("aria-describedby", w.getAttribute("id"));
        const {
          container: P
        } = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (P.append(w), y.trigger(this._element, this.constructor.eventName(Qu))), this._popper = this._createPopper(w), w.classList.add(jn), "ontouchstart" in document.documentElement)
          for (const z of [].concat(...document.body.children))
            y.on(z, "mouseover", x);
        const $ = () => {
          y.trigger(this._element, this.constructor.eventName(Xu)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
        };
        this._queueCallback($, this.tip, this._isAnimated());
      }
      hide() {
        if (!this._isShown() || y.trigger(this._element, this.constructor.eventName(Yu)).defaultPrevented)
          return;
        if (this._getTipElement().classList.remove(jn), "ontouchstart" in document.documentElement)
          for (const w of [].concat(...document.body.children))
            y.off(w, "mouseover", x);
        this._activeTrigger[Ku] = !1, this._activeTrigger[Ss] = !1, this._activeTrigger[tn] = !1, this._isHovered = null;
        const m = () => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), y.trigger(this._element, this.constructor.eventName(qu)));
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
        const c = this._getTemplateFactory(r).toHtml();
        if (!c)
          return null;
        c.classList.remove(Ts, jn), c.classList.add(`bs-${this.constructor.NAME}-auto`);
        const m = g(this.constructor.NAME).toString();
        return c.setAttribute("id", m), this._isAnimated() && c.classList.add(Ts), c;
      }
      setContent(r) {
        this._newContent = r, this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(r) {
        return this._templateFactory ? this._templateFactory.changeContent(r) : this._templateFactory = new Fu({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content: r,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        }), this._templateFactory;
      }
      _getContentForTemplate() {
        return {
          [zu]: this._getTitle()
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
        return this._config.animation || this.tip && this.tip.classList.contains(Ts);
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(jn);
      }
      _createPopper(r) {
        const c = S(this._config.placement, [this, r, this._element]), m = rf[c.toUpperCase()];
        return o.createPopper(this._element, r, this._getPopperConfig(m));
      }
      _getOffset() {
        const {
          offset: r
        } = this._config;
        return typeof r == "string" ? r.split(",").map((c) => Number.parseInt(c, 10)) : typeof r == "function" ? (c) => r(c, this._element) : r;
      }
      _resolvePossibleFunction(r) {
        return S(r, [this._element]);
      }
      _getPopperConfig(r) {
        const c = {
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
          ...c,
          ...S(this._config.popperConfig, [c])
        };
      }
      _setListeners() {
        const r = this._config.trigger.split(" ");
        for (const c of r)
          if (c === "click")
            y.on(this._element, this.constructor.eventName(Zu), this._config.selector, (m) => {
              this._initializeOnDelegatedTarget(m).toggle();
            });
          else if (c !== Gu) {
            const m = c === tn ? this.constructor.eventName(nf) : this.constructor.eventName(ef), w = c === tn ? this.constructor.eventName(sf) : this.constructor.eventName(tf);
            y.on(this._element, m, this._config.selector, (P) => {
              const $ = this._initializeOnDelegatedTarget(P);
              $._activeTrigger[P.type === "focusin" ? Ss : tn] = !0, $._enter();
            }), y.on(this._element, w, this._config.selector, (P) => {
              const $ = this._initializeOnDelegatedTarget(P);
              $._activeTrigger[P.type === "focusout" ? Ss : tn] = $._element.contains(P.relatedTarget), $._leave();
            });
          }
        this._hideModalHandler = () => {
          this._element && this.hide();
        }, y.on(this._element.closest(No), $o, this._hideModalHandler);
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
      _setTimeout(r, c) {
        clearTimeout(this._timeout), this._timeout = setTimeout(r, c);
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(r) {
        const c = K.getDataAttributes(this._element);
        for (const m of Object.keys(c))
          Wu.has(m) && delete c[m];
        return r = {
          ...c,
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
        for (const [c, m] of Object.entries(this._config))
          this.constructor.Default[c] !== m && (r[c] = m);
        return r.selector = !1, r.trigger = "manual", r;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const c = dt.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (typeof c[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            c[r]();
          }
        });
      }
    }
    N(dt);
    const cf = "popover", lf = ".popover-header", uf = ".popover-body", ff = {
      ...dt.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    }, df = {
      ...dt.DefaultType,
      content: "(null|string|element|function)"
    };
    class Vn extends dt {
      // Getters
      static get Default() {
        return ff;
      }
      static get DefaultType() {
        return df;
      }
      static get NAME() {
        return cf;
      }
      // Overrides
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      // Private
      _getContentForTemplate() {
        return {
          [lf]: this._getTitle(),
          [uf]: this._getContent()
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const c = Vn.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (typeof c[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            c[r]();
          }
        });
      }
    }
    N(Vn);
    const hf = "scrollspy", Cs = ".bs.scrollspy", pf = ".data-api", mf = `activate${Cs}`, Po = `click${Cs}`, gf = `load${Cs}${pf}`, _f = "dropdown-item", Dt = "active", Ef = '[data-bs-spy="scroll"]', Ns = "[href]", vf = ".nav, .list-group", Ro = ".nav-link", yf = `${Ro}, .nav-item > ${Ro}, .list-group-item`, bf = ".dropdown", wf = ".dropdown-toggle", Af = {
      offset: null,
      // TODO: v6 @deprecated, keep it for backwards compatibility reasons
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1]
    }, Of = {
      offset: "(number|null)",
      // TODO v6 @deprecated, keep it for backwards compatibility reasons
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array"
    };
    class nn extends ge {
      constructor(r, c) {
        super(r, c), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
          visibleEntryTop: 0,
          parentScrollTop: 0
        }, this.refresh();
      }
      // Getters
      static get Default() {
        return Af;
      }
      static get DefaultType() {
        return Of;
      }
      static get NAME() {
        return hf;
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
        return r.target = O(r.target) || document.body, r.rootMargin = r.offset ? `${r.offset}px 0px -30%` : r.rootMargin, typeof r.threshold == "string" && (r.threshold = r.threshold.split(",").map((c) => Number.parseFloat(c))), r;
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll && (y.off(this._config.target, Po), y.on(this._config.target, Po, Ns, (r) => {
          const c = this._observableSections.get(r.target.hash);
          if (c) {
            r.preventDefault();
            const m = this._rootElement || window, w = c.offsetTop - this._element.offsetTop;
            if (m.scrollTo) {
              m.scrollTo({
                top: w,
                behavior: "smooth"
              });
              return;
            }
            m.scrollTop = w;
          }
        }));
      }
      _getNewObserver() {
        const r = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver((c) => this._observerCallback(c), r);
      }
      // The logic of selection
      _observerCallback(r) {
        const c = ($) => this._targetLinks.get(`#${$.target.id}`), m = ($) => {
          this._previousScrollData.visibleEntryTop = $.target.offsetTop, this._process(c($));
        }, w = (this._rootElement || document.documentElement).scrollTop, P = w >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = w;
        for (const $ of r) {
          if (!$.isIntersecting) {
            this._activeTarget = null, this._clearActiveClass(c($));
            continue;
          }
          const z = $.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (P && z) {
            if (m($), !w)
              return;
            continue;
          }
          !P && !z && m($);
        }
      }
      _initializeTargetsAndObservables() {
        this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
        const r = M.find(Ns, this._config.target);
        for (const c of r) {
          if (!c.hash || C(c))
            continue;
          const m = M.findOne(decodeURI(c.hash), this._element);
          T(m) && (this._targetLinks.set(decodeURI(c.hash), c), this._observableSections.set(c.hash, m));
        }
      }
      _process(r) {
        this._activeTarget !== r && (this._clearActiveClass(this._config.target), this._activeTarget = r, r.classList.add(Dt), this._activateParents(r), y.trigger(this._element, mf, {
          relatedTarget: r
        }));
      }
      _activateParents(r) {
        if (r.classList.contains(_f)) {
          M.findOne(wf, r.closest(bf)).classList.add(Dt);
          return;
        }
        for (const c of M.parents(r, vf))
          for (const m of M.prev(c, yf))
            m.classList.add(Dt);
      }
      _clearActiveClass(r) {
        r.classList.remove(Dt);
        const c = M.find(`${Ns}.${Dt}`, r);
        for (const m of c)
          m.classList.remove(Dt);
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const c = nn.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (c[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            c[r]();
          }
        });
      }
    }
    y.on(window, gf, () => {
      for (const p of M.find(Ef))
        nn.getOrCreateInstance(p);
    }), N(nn);
    const Tf = "tab", ht = ".bs.tab", Sf = `hide${ht}`, Cf = `hidden${ht}`, Nf = `show${ht}`, $f = `shown${ht}`, Pf = `click${ht}`, Rf = `keydown${ht}`, Df = `load${ht}`, Lf = "ArrowLeft", Do = "ArrowRight", kf = "ArrowUp", Lo = "ArrowDown", $s = "Home", ko = "End", pt = "active", xo = "fade", Ps = "show", xf = "dropdown", Io = ".dropdown-toggle", If = ".dropdown-menu", Rs = `:not(${Io})`, Mf = '.list-group, .nav, [role="tablist"]', jf = ".nav-item, .list-group-item", Vf = `.nav-link${Rs}, .list-group-item${Rs}, [role="tab"]${Rs}`, Mo = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Ds = `${Vf}, ${Mo}`, Bf = `.${pt}[data-bs-toggle="tab"], .${pt}[data-bs-toggle="pill"], .${pt}[data-bs-toggle="list"]`;
    class mt extends ge {
      constructor(r) {
        super(r), this._parent = this._element.closest(Mf), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), y.on(this._element, Rf, (c) => this._keydown(c)));
      }
      // Getters
      static get NAME() {
        return Tf;
      }
      // Public
      show() {
        const r = this._element;
        if (this._elemIsActive(r))
          return;
        const c = this._getActiveElem(), m = c ? y.trigger(c, Sf, {
          relatedTarget: r
        }) : null;
        y.trigger(r, Nf, {
          relatedTarget: c
        }).defaultPrevented || m && m.defaultPrevented || (this._deactivate(c, r), this._activate(r, c));
      }
      // Private
      _activate(r, c) {
        if (!r)
          return;
        r.classList.add(pt), this._activate(M.getElementFromSelector(r));
        const m = () => {
          if (r.getAttribute("role") !== "tab") {
            r.classList.add(Ps);
            return;
          }
          r.removeAttribute("tabindex"), r.setAttribute("aria-selected", !0), this._toggleDropDown(r, !0), y.trigger(r, $f, {
            relatedTarget: c
          });
        };
        this._queueCallback(m, r, r.classList.contains(xo));
      }
      _deactivate(r, c) {
        if (!r)
          return;
        r.classList.remove(pt), r.blur(), this._deactivate(M.getElementFromSelector(r));
        const m = () => {
          if (r.getAttribute("role") !== "tab") {
            r.classList.remove(Ps);
            return;
          }
          r.setAttribute("aria-selected", !1), r.setAttribute("tabindex", "-1"), this._toggleDropDown(r, !1), y.trigger(r, Cf, {
            relatedTarget: c
          });
        };
        this._queueCallback(m, r, r.classList.contains(xo));
      }
      _keydown(r) {
        if (![Lf, Do, kf, Lo, $s, ko].includes(r.key))
          return;
        r.stopPropagation(), r.preventDefault();
        const c = this._getChildren().filter((w) => !C(w));
        let m;
        if ([$s, ko].includes(r.key))
          m = c[r.key === $s ? 0 : c.length - 1];
        else {
          const w = [Do, Lo].includes(r.key);
          m = U(c, r.target, w, !0);
        }
        m && (m.focus({
          preventScroll: !0
        }), mt.getOrCreateInstance(m).show());
      }
      _getChildren() {
        return M.find(Ds, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((r) => this._elemIsActive(r)) || null;
      }
      _setInitialAttributes(r, c) {
        this._setAttributeIfNotExists(r, "role", "tablist");
        for (const m of c)
          this._setInitialAttributesOnChild(m);
      }
      _setInitialAttributesOnChild(r) {
        r = this._getInnerElement(r);
        const c = this._elemIsActive(r), m = this._getOuterElement(r);
        r.setAttribute("aria-selected", c), m !== r && this._setAttributeIfNotExists(m, "role", "presentation"), c || r.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(r, "role", "tab"), this._setInitialAttributesOnTargetPanel(r);
      }
      _setInitialAttributesOnTargetPanel(r) {
        const c = M.getElementFromSelector(r);
        c && (this._setAttributeIfNotExists(c, "role", "tabpanel"), r.id && this._setAttributeIfNotExists(c, "aria-labelledby", `${r.id}`));
      }
      _toggleDropDown(r, c) {
        const m = this._getOuterElement(r);
        if (!m.classList.contains(xf))
          return;
        const w = (P, $) => {
          const z = M.findOne(P, m);
          z && z.classList.toggle($, c);
        };
        w(Io, pt), w(If, Ps), m.setAttribute("aria-expanded", c);
      }
      _setAttributeIfNotExists(r, c, m) {
        r.hasAttribute(c) || r.setAttribute(c, m);
      }
      _elemIsActive(r) {
        return r.classList.contains(pt);
      }
      // Try to get the inner element (usually the .nav-link)
      _getInnerElement(r) {
        return r.matches(Ds) ? r : M.findOne(Ds, r);
      }
      // Try to get the outer element (usually the .nav-item)
      _getOuterElement(r) {
        return r.closest(jf) || r;
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const c = mt.getOrCreateInstance(this);
          if (typeof r == "string") {
            if (c[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            c[r]();
          }
        });
      }
    }
    y.on(document, Pf, Mo, function(p) {
      ["A", "AREA"].includes(this.tagName) && p.preventDefault(), !C(this) && mt.getOrCreateInstance(this).show();
    }), y.on(window, Df, () => {
      for (const p of M.find(Bf))
        mt.getOrCreateInstance(p);
    }), N(mt);
    const Ff = "toast", Qe = ".bs.toast", Hf = `mouseover${Qe}`, Wf = `mouseout${Qe}`, Uf = `focusin${Qe}`, zf = `focusout${Qe}`, Kf = `hide${Qe}`, Gf = `hidden${Qe}`, Yf = `show${Qe}`, qf = `shown${Qe}`, Jf = "fade", jo = "hide", Bn = "show", Fn = "showing", Xf = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    }, Qf = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
    class sn extends ge {
      constructor(r, c) {
        super(r, c), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
      }
      // Getters
      static get Default() {
        return Qf;
      }
      static get DefaultType() {
        return Xf;
      }
      static get NAME() {
        return Ff;
      }
      // Public
      show() {
        if (y.trigger(this._element, Yf).defaultPrevented)
          return;
        this._clearTimeout(), this._config.animation && this._element.classList.add(Jf);
        const c = () => {
          this._element.classList.remove(Fn), y.trigger(this._element, qf), this._maybeScheduleHide();
        };
        this._element.classList.remove(jo), j(this._element), this._element.classList.add(Bn, Fn), this._queueCallback(c, this._element, this._config.animation);
      }
      hide() {
        if (!this.isShown() || y.trigger(this._element, Kf).defaultPrevented)
          return;
        const c = () => {
          this._element.classList.add(jo), this._element.classList.remove(Fn, Bn), y.trigger(this._element, Gf);
        };
        this._element.classList.add(Fn), this._queueCallback(c, this._element, this._config.animation);
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(Bn), super.dispose();
      }
      isShown() {
        return this._element.classList.contains(Bn);
      }
      // Private
      _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
      }
      _onInteraction(r, c) {
        switch (r.type) {
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
        const m = r.relatedTarget;
        this._element === m || this._element.contains(m) || this._maybeScheduleHide();
      }
      _setListeners() {
        y.on(this._element, Hf, (r) => this._onInteraction(r, !0)), y.on(this._element, Wf, (r) => this._onInteraction(r, !1)), y.on(this._element, Uf, (r) => this._onInteraction(r, !0)), y.on(this._element, zf, (r) => this._onInteraction(r, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
      // Static
      static jQueryInterface(r) {
        return this.each(function() {
          const c = sn.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (typeof c[r] > "u")
              throw new TypeError(`No method named "${r}"`);
            c[r](this);
          }
        });
      }
    }
    return He(sn), N(sn), {
      Alert: Xt,
      Button: Qt,
      Carousel: Nt,
      Collapse: Pt,
      Dropdown: Pe,
      Modal: ft,
      Offcanvas: Ue,
      Popover: Vn,
      ScrollSpy: nn,
      Tab: mt,
      Toast: sn,
      Tooltip: dt
    };
  });
})(md);
const at = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, oh = {};
function ih(e, t) {
  const n = Js("router-view");
  return qe(), Mi(n);
}
const ah = /* @__PURE__ */ at(oh, [["render", ih]]);
var da = !1;
function Un(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function xs(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function ch() {
  return ha().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ha() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const lh = typeof Proxy == "function", uh = "devtools-plugin:setup", fh = "plugin:settings:set";
let kt, nr;
function dh() {
  var e;
  return kt !== void 0 || (typeof window < "u" && window.performance ? (kt = !0, nr = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (kt = !0, nr = global.perf_hooks.performance) : kt = !1), kt;
}
function hh() {
  return dh() ? nr.now() : Date.now();
}
class ph {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const a in t.settings) {
        const u = t.settings[a];
        s[a] = u.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let i = Object.assign({}, s);
    try {
      const a = localStorage.getItem(o), u = JSON.parse(a);
      Object.assign(i, u);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return i;
      },
      setSettings(a) {
        try {
          localStorage.setItem(o, JSON.stringify(a));
        } catch {
        }
        i = a;
      },
      now() {
        return hh();
      }
    }, n && n.on(fh, (a, u) => {
      a === this.plugin.id && this.fallbacks.setSettings(u);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, u) => this.target ? this.target.on[u] : (...l) => {
        this.onQueue.push({
          method: u,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, u) => this.target ? this.target[u] : u === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(u) ? (...l) => (this.targetQueue.push({
        method: u,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[u](...l)) : (...l) => new Promise((h) => {
        this.targetQueue.push({
          method: u,
          args: l,
          resolve: h
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function xr(e, t) {
  const n = e, s = ha(), o = ch(), i = lh && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
    o.emit(uh, e, t);
  else {
    const a = i ? new ph(n, o) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: a
    }), a && t(a.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let un;
const vn = (e) => un = e, pa = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function wt(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var je;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(je || (je = {}));
const fs = typeof window < "u", hn = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && fs, Yo = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function mh(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Ir(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    _a(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function ma(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function qn(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const Jn = typeof navigator == "object" ? navigator : { userAgent: "" }, ga = /Macintosh/.test(Jn.userAgent) && /AppleWebKit/.test(Jn.userAgent) && !/Safari/.test(Jn.userAgent), _a = fs ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ga ? gh : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Jn ? _h : (
      // Fallback to using FileReader and a popup
      Eh
    )
  )
) : () => {
};
function gh(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? ma(s.href) ? Ir(e, t, n) : (s.target = "_blank", qn(s)) : qn(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    qn(s);
  }, 0));
}
function _h(e, t = "download", n) {
  if (typeof e == "string")
    if (ma(e))
      Ir(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        qn(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(mh(e, n), t);
}
function Eh(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return Ir(e, t, n);
  const o = e.type === "application/octet-stream", i = /constructor/i.test(String(Yo.HTMLElement)) || "safari" in Yo, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || o && i || ga) && typeof FileReader < "u") {
    const u = new FileReader();
    u.onloadend = function() {
      let l = u.result;
      if (typeof l != "string")
        throw s = null, new Error("Wrong reader.result type");
      l = a ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), s ? s.location.href = l : location.assign(l), s = null;
    }, u.readAsDataURL(e);
  } else {
    const u = URL.createObjectURL(e);
    s ? s.location.assign(u) : location.href = u, s = null, setTimeout(function() {
      URL.revokeObjectURL(u);
    }, 4e4);
  }
}
function re(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Mr(e) {
  return "_a" in e && "install" in e;
}
function Ea() {
  if (!("clipboard" in navigator))
    return re("Your browser doesn't support the Clipboard API", "error"), !0;
}
function va(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (re('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function vh(e) {
  if (!Ea())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), re("Global state copied to clipboard.");
    } catch (t) {
      if (va(t))
        return;
      re("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function yh(e) {
  if (!Ea())
    try {
      ya(e, JSON.parse(await navigator.clipboard.readText())), re("Global state pasted from clipboard.");
    } catch (t) {
      if (va(t))
        return;
      re("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function bh(e) {
  try {
    _a(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    re("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let ze;
function wh() {
  ze || (ze = document.createElement("input"), ze.type = "file", ze.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      ze.onchange = async () => {
        const s = ze.files;
        if (!s)
          return t(null);
        const o = s.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, ze.oncancel = () => t(null), ze.onerror = n, ze.click();
    });
  }
  return e;
}
async function Ah(e) {
  try {
    const n = await wh()();
    if (!n)
      return;
    const { text: s, file: o } = n;
    ya(e, JSON.parse(s)), re(`Global state imported from "${o.name}".`);
  } catch (t) {
    re("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function ya(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s ? Object.assign(s, t[n]) : e.state.value[n] = t[n];
  }
}
function De(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const ba = "🍍 Pinia (root)", sr = "_root";
function Oh(e) {
  return Mr(e) ? {
    id: sr,
    label: ba
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Th(e) {
  if (Mr(e)) {
    const n = Array.from(e._s.keys()), s = e._s;
    return {
      state: n.map((i) => ({
        editable: !0,
        key: i,
        value: e.state.value[i]
      })),
      getters: n.filter((i) => s.get(i)._getters).map((i) => {
        const a = s.get(i);
        return {
          editable: !1,
          key: i,
          value: a._getters.reduce((u, l) => (u[l] = a[l], u), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function Sh(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: De(e.type),
    key: De(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Ch(e) {
  switch (e) {
    case je.direct:
      return "mutation";
    case je.patchFunction:
      return "$patch";
    case je.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Mt = !0;
const Xn = [], _t = "pinia:mutations", ae = "pinia", { assign: Nh } = Object, ns = (e) => "🍍 " + e;
function $h(e, t) {
  xr({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Xn,
    app: e
  }, (n) => {
    typeof n.now != "function" && re("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: _t,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: ae,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            vh(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await yh(t), n.sendInspectorTree(ae), n.sendInspectorState(ae);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            bh(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Ah(t), n.sendInspectorTree(ae), n.sendInspectorState(ae);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (s) => {
            const o = t._s.get(s);
            o ? typeof o.$reset != "function" ? re(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (o.$reset(), re(`Store "${s}" reset.`)) : re(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s, o) => {
      const i = s.componentInstance && s.componentInstance.proxy;
      if (i && i._pStores) {
        const a = s.componentInstance.proxy._pStores;
        Object.values(a).forEach((u) => {
          s.instanceData.state.push({
            type: ns(u.$id),
            key: "state",
            editable: !0,
            value: u._isOptionsAPI ? {
              _custom: {
                value: is(u.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => u.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(u.$state).reduce((l, h) => (l[h] = u.$state[h], l), {})
            )
          }), u._getters && u._getters.length && s.instanceData.state.push({
            type: ns(u.$id),
            key: "getters",
            editable: !1,
            value: u._getters.reduce((l, h) => {
              try {
                l[h] = u[h];
              } catch (f) {
                l[h] = f;
              }
              return l;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === ae) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? o.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(s.filter.toLowerCase()) : ba.toLowerCase().includes(s.filter.toLowerCase())) : o).map(Oh);
      }
    }), n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === ae) {
        const o = s.nodeId === sr ? t : t._s.get(s.nodeId);
        if (!o)
          return;
        o && (s.state = Th(o));
      }
    }), n.on.editInspectorState((s, o) => {
      if (s.app === e && s.inspectorId === ae) {
        const i = s.nodeId === sr ? t : t._s.get(s.nodeId);
        if (!i)
          return re(`store "${s.nodeId}" not found`, "error");
        const { path: a } = s;
        Mr(i) ? a.unshift("state") : (a.length !== 1 || !i._customProperties.has(a[0]) || a[0] in i.$state) && a.unshift("$state"), Mt = !1, s.set(i, a, s.state.value), Mt = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const o = s.type.replace(/^🍍\s*/, ""), i = t._s.get(o);
        if (!i)
          return re(`store "${o}" not found`, "error");
        const { path: a } = s;
        if (a[0] !== "state")
          return re(`Invalid path for store "${o}":
${a}
Only state can be modified.`);
        a[0] = "$state", Mt = !1, s.set(i, a, s.state.value), Mt = !0;
      }
    });
  });
}
function Ph(e, t) {
  Xn.includes(ns(t.$id)) || Xn.push(ns(t.$id)), xr({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Xn,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const s = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: a, onError: u, name: l, args: h }) => {
      const f = wa++;
      n.addTimelineEvent({
        layerId: _t,
        event: {
          time: s(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: De(t.$id),
            action: De(l),
            args: h
          },
          groupId: f
        }
      }), a((d) => {
        rt = void 0, n.addTimelineEvent({
          layerId: _t,
          event: {
            time: s(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: De(t.$id),
              action: De(l),
              args: h,
              result: d
            },
            groupId: f
          }
        });
      }), u((d) => {
        rt = void 0, n.addTimelineEvent({
          layerId: _t,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: De(t.$id),
              action: De(l),
              args: h,
              error: d
            },
            groupId: f
          }
        });
      });
    }, !0), t._customProperties.forEach((a) => {
      as(() => jt(t[a]), (u, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(ae), Mt && n.addTimelineEvent({
          layerId: _t,
          event: {
            time: s(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: u,
              oldValue: l
            },
            groupId: rt
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: a, type: u }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(ae), !Mt)
        return;
      const h = {
        time: s(),
        title: Ch(u),
        data: Nh({ store: De(t.$id) }, Sh(a)),
        groupId: rt
      };
      u === je.patchFunction ? h.subtitle = "⤵️" : u === je.patchObject ? h.subtitle = "🧩" : a && !Array.isArray(a) && (h.subtitle = a.type), a && (h.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: _t,
        event: h
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = Et((a) => {
      o(a), n.addTimelineEvent({
        layerId: _t,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: De(t.$id),
            info: De("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(ae), n.sendInspectorState(ae);
    });
    const { $dispose: i } = t;
    t.$dispose = () => {
      i(), n.notifyComponentUpdate(), n.sendInspectorTree(ae), n.sendInspectorState(ae), n.getSettings().logStoreChanges && re(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(ae), n.sendInspectorState(ae), n.getSettings().logStoreChanges && re(`"${t.$id}" store installed 🆕`);
  });
}
let wa = 0, rt;
function qo(e, t, n) {
  const s = t.reduce((o, i) => (o[i] = is(e)[i], o), {});
  for (const o in s)
    e[o] = function() {
      const i = wa, a = n ? new Proxy(e, {
        get(...l) {
          return rt = i, Reflect.get(...l);
        },
        set(...l) {
          return rt = i, Reflect.set(...l);
        }
      }) : e;
      rt = i;
      const u = s[o].apply(a, arguments);
      return rt = void 0, u;
    };
}
function Rh({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, qo(t, Object.keys(n.actions), t._isOptionsAPI);
  const s = t._hotUpdate;
  is(t)._hotUpdate = function(o) {
    s.apply(this, arguments), qo(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
  }, Ph(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function Dh() {
  const e = ji(!0), t = e.run(() => os({}));
  let n = [], s = [];
  const o = Et({
    install(i) {
      vn(o), o._a = i, i.provide(pa, o), i.config.globalProperties.$pinia = o, hn && $h(i, o), s.forEach((a) => n.push(a)), s = [];
    },
    use(i) {
      return !this._a && !da ? s.push(i) : n.push(i), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return hn && typeof Proxy < "u" && o.use(Rh), o;
}
function Aa(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    wt(o) && wt(s) && !_n(s) && !br(s) ? e[n] = Aa(o, s) : e[n] = s;
  }
  return e;
}
const Oa = () => {
};
function Jo(e, t, n, s = Oa) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), s());
  };
  return !n && td() && nd(o), o;
}
function xt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Lh = (e) => e();
function rr(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    wt(o) && wt(s) && e.hasOwnProperty(n) && !_n(s) && !br(s) ? e[n] = rr(o, s) : e[n] = s;
  }
  return e;
}
const kh = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function xh(e) {
  return !wt(e) || !e.hasOwnProperty(kh);
}
const { assign: Se } = Object;
function Xo(e) {
  return !!(_n(e) && e.effect);
}
function Qo(e, t, n, s) {
  const { state: o, actions: i, getters: a } = t, u = n.state.value[e];
  let l;
  function h() {
    !u && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const f = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Vo(os(o ? o() : {}).value)
    ) : Vo(n.state.value[e]);
    return Se(f, i, Object.keys(a || {}).reduce((d, g) => (process.env.NODE_ENV !== "production" && g in f && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${g}" in store "${e}".`), d[g] = Et(Ce(() => {
      vn(n);
      const _ = n._s.get(e);
      return a[g].call(_, _);
    })), d), {}));
  }
  return l = or(e, h, t, n, s, !0), l;
}
function or(e, t, n = {}, s, o, i) {
  let a;
  const u = Se({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !da && (l.onTrigger = (N) => {
    h ? _ = N : h == !1 && !R._hotUpdating && (Array.isArray(_) ? _.push(N) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let h, f, d = [], g = [], _;
  const E = s.state.value[e];
  !i && !E && (process.env.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const v = os({});
  let O;
  function T(N) {
    let S;
    h = f = !1, process.env.NODE_ENV !== "production" && (_ = []), typeof N == "function" ? (N(s.state.value[e]), S = {
      type: je.patchFunction,
      storeId: e,
      events: _
    }) : (rr(s.state.value[e], N), S = {
      type: je.patchObject,
      payload: N,
      storeId: e,
      events: _
    });
    const W = O = Symbol();
    Xs().then(() => {
      O === W && (h = !0);
    }), f = !0, xt(d, S, s.state.value[e]);
  }
  const C = i ? function() {
    const { state: S } = n, W = S ? S() : {};
    this.$patch((U) => {
      Se(U, W);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Oa
  );
  function k() {
    a.stop(), d = [], g = [], s._s.delete(e);
  }
  function x(N, S) {
    return function() {
      vn(s);
      const W = Array.from(arguments), U = [], oe = [];
      function ce(Z) {
        U.push(Z);
      }
      function ee(Z) {
        oe.push(Z);
      }
      xt(g, {
        args: W,
        name: N,
        store: R,
        after: ce,
        onError: ee
      });
      let J;
      try {
        J = S.apply(this && this.$id === e ? this : R, W);
      } catch (Z) {
        throw xt(oe, Z), Z;
      }
      return J instanceof Promise ? J.then((Z) => (xt(U, Z), Z)).catch((Z) => (xt(oe, Z), Promise.reject(Z))) : (xt(U, J), J);
    };
  }
  const j = /* @__PURE__ */ Et({
    actions: {},
    getters: {},
    state: [],
    hotState: v
  }), V = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Jo.bind(null, g),
    $patch: T,
    $reset: C,
    $subscribe(N, S = {}) {
      const W = Jo(d, N, S.detached, () => U()), U = a.run(() => as(() => s.state.value[e], (oe) => {
        (S.flush === "sync" ? f : h) && N({
          storeId: e,
          type: je.direct,
          events: _
        }, oe);
      }, Se({}, l, S)));
      return W;
    },
    $dispose: k
  }, R = Vi(process.env.NODE_ENV !== "production" || hn ? Se(
    {
      _hmrPayload: j,
      _customProperties: Et(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    V
    // must be added later
    // setupStore
  ) : V);
  s._s.set(e, R);
  const F = (s._a && s._a.runWithContext || Lh)(() => s._e.run(() => (a = ji()).run(t)));
  for (const N in F) {
    const S = F[N];
    if (_n(S) && !Xo(S) || br(S))
      process.env.NODE_ENV !== "production" && o ? Un(v.value, N, Ls(F, N)) : i || (E && xh(S) && (_n(S) ? S.value = E[N] : rr(S, E[N])), s.state.value[e][N] = S), process.env.NODE_ENV !== "production" && j.state.push(N);
    else if (typeof S == "function") {
      const W = process.env.NODE_ENV !== "production" && o ? S : x(N, S);
      F[N] = W, process.env.NODE_ENV !== "production" && (j.actions[N] = S), u.actions[N] = S;
    } else
      process.env.NODE_ENV !== "production" && Xo(S) && (j.getters[N] = i ? (
        // @ts-expect-error
        n.getters[N]
      ) : S, fs && (F._getters || // @ts-expect-error: same
      (F._getters = Et([]))).push(N));
  }
  if (Se(R, F), Se(is(R), F), Object.defineProperty(R, "$state", {
    get: () => process.env.NODE_ENV !== "production" && o ? v.value : s.state.value[e],
    set: (N) => {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      T((S) => {
        Se(S, N);
      });
    }
  }), process.env.NODE_ENV !== "production" && (R._hotUpdate = Et((N) => {
    R._hotUpdating = !0, N._hmrPayload.state.forEach((S) => {
      if (S in R.$state) {
        const W = N.$state[S], U = R.$state[S];
        typeof W == "object" && wt(W) && wt(U) ? Aa(W, U) : N.$state[S] = U;
      }
      Un(R, S, Ls(N.$state, S));
    }), Object.keys(R.$state).forEach((S) => {
      S in N.$state || xs(R, S);
    }), h = !1, f = !1, s.state.value[e] = Ls(N._hmrPayload, "hotState"), f = !0, Xs().then(() => {
      h = !0;
    });
    for (const S in N._hmrPayload.actions) {
      const W = N[S];
      Un(R, S, x(S, W));
    }
    for (const S in N._hmrPayload.getters) {
      const W = N._hmrPayload.getters[S], U = i ? (
        // special handling of options api
        Ce(() => (vn(s), W.call(R, R)))
      ) : W;
      Un(R, S, U);
    }
    Object.keys(R._hmrPayload.getters).forEach((S) => {
      S in N._hmrPayload.getters || xs(R, S);
    }), Object.keys(R._hmrPayload.actions).forEach((S) => {
      S in N._hmrPayload.actions || xs(R, S);
    }), R._hmrPayload = N._hmrPayload, R._getters = N._getters, R._hotUpdating = !1;
  })), hn) {
    const N = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((S) => {
      Object.defineProperty(R, S, Se({ value: R[S] }, N));
    });
  }
  return s._p.forEach((N) => {
    if (hn) {
      const S = a.run(() => N({
        store: R,
        app: s._a,
        pinia: s,
        options: u
      }));
      Object.keys(S || {}).forEach((W) => R._customProperties.add(W)), Se(R, S);
    } else
      Se(R, a.run(() => N({
        store: R,
        app: s._a,
        pinia: s,
        options: u
      })));
  }), process.env.NODE_ENV !== "production" && R.$state && typeof R.$state == "object" && typeof R.$state.constructor == "function" && !R.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${R.$id}".`), E && i && n.hydrate && n.hydrate(R.$state, E), h = !0, f = !0, R;
}
function Ih(e, t, n) {
  let s, o;
  const i = typeof t == "function";
  if (typeof e == "string")
    s = e, o = i ? n : t;
  else if (o = e, s = e.id, process.env.NODE_ENV !== "production" && typeof s != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(u, l) {
    const h = ed();
    if (u = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && un && un._testing ? null : u) || (h ? Vt(pa, null) : null), u && vn(u), process.env.NODE_ENV !== "production" && !un)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    u = un, u._s.has(s) || (i ? or(s, t, o, u) : Qo(s, o, u), process.env.NODE_ENV !== "production" && (a._pinia = u));
    const f = u._s.get(s);
    if (process.env.NODE_ENV !== "production" && l) {
      const d = "__hot:" + s, g = i ? or(d, t, o, u, !0) : Qo(d, Se({}, o), u, !0);
      l._hotUpdate(g), delete u.state.value[d], u._s.delete(d);
    }
    if (process.env.NODE_ENV !== "production" && fs) {
      const d = yr();
      if (d && d.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const g = d.proxy, _ = "_pStores" in g ? g._pStores : g._pStores = {};
        _[s] = f;
      }
    }
    return f;
  }
  return a.$id = s, a;
}
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Ge = typeof window < "u";
function Mh(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const q = Object.assign;
function Is(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = be(o) ? o.map(e) : e(o);
  }
  return n;
}
const pn = () => {
}, be = Array.isArray;
function G(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const jh = /\/$/, Vh = (e) => e.replace(jh, "");
function Ms(e, t, n = "/") {
  let s, o = {}, i = "", a = "";
  const u = t.indexOf("#");
  let l = t.indexOf("?");
  return u < l && u >= 0 && (l = -1), l > -1 && (s = t.slice(0, l), i = t.slice(l + 1, u > -1 ? u : t.length), o = e(i)), u > -1 && (s = s || t.slice(0, u), a = t.slice(u, t.length)), s = Hh(s ?? t, n), {
    fullPath: s + (i && "?") + i + a,
    path: s,
    query: o,
    hash: a
  };
}
function Bh(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Zo(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function ei(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && ot(t.matched[s], n.matched[o]) && Ta(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ot(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ta(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Fh(e[n], t[n]))
      return !1;
  return !0;
}
function Fh(e, t) {
  return be(e) ? ti(e, t) : be(t) ? ti(t, e) : e === t;
}
function ti(e, t) {
  return be(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Hh(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return G(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), s = e.split("/"), o = s[s.length - 1];
  (o === ".." || o === ".") && s.push("");
  let i = n.length - 1, a, u;
  for (a = 0; a < s.length; a++)
    if (u = s[a], u !== ".")
      if (u === "..")
        i > 1 && i--;
      else
        break;
  return n.slice(0, i).join("/") + "/" + s.slice(a - (a === s.length ? 1 : 0)).join("/");
}
var yn;
(function(e) {
  e.pop = "pop", e.push = "push";
})(yn || (yn = {}));
var mn;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(mn || (mn = {}));
function Wh(e) {
  if (!e)
    if (Ge) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Vh(e);
}
const Uh = /^[^#]+#/;
function zh(e, t) {
  return e.replace(Uh, "#") + t;
}
function Kh(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const ds = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Gh(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!s || !document.getElementById(e.el.slice(1))))
      try {
        const i = document.querySelector(e.el);
        if (s && i) {
          G(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        G(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      process.env.NODE_ENV !== "production" && G(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Kh(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function ni(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ir = /* @__PURE__ */ new Map();
function Yh(e, t) {
  ir.set(e, t);
}
function qh(e) {
  const t = ir.get(e);
  return ir.delete(e), t;
}
let Jh = () => location.protocol + "//" + location.host;
function Sa(e, t) {
  const { pathname: n, search: s, hash: o } = t, i = e.indexOf("#");
  if (i > -1) {
    let u = o.includes(e.slice(i)) ? e.slice(i).length : 1, l = o.slice(u);
    return l[0] !== "/" && (l = "/" + l), Zo(l, "");
  }
  return Zo(n, e) + s + o;
}
function Xh(e, t, n, s) {
  let o = [], i = [], a = null;
  const u = ({ state: g }) => {
    const _ = Sa(e, location), E = n.value, v = t.value;
    let O = 0;
    if (g) {
      if (n.value = _, t.value = g, a && a === E) {
        a = null;
        return;
      }
      O = v ? g.position - v.position : 0;
    } else
      s(_);
    o.forEach((T) => {
      T(n.value, E, {
        delta: O,
        type: yn.pop,
        direction: O ? O > 0 ? mn.forward : mn.back : mn.unknown
      });
    });
  };
  function l() {
    a = n.value;
  }
  function h(g) {
    o.push(g);
    const _ = () => {
      const E = o.indexOf(g);
      E > -1 && o.splice(E, 1);
    };
    return i.push(_), _;
  }
  function f() {
    const { history: g } = window;
    g.state && g.replaceState(q({}, g.state, { scroll: ds() }), "");
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
    listen: h,
    destroy: d
  };
}
function si(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? ds() : null
  };
}
function Qh(e) {
  const { history: t, location: n } = window, s = {
    value: Sa(e, n)
  }, o = { value: t.state };
  o.value || i(s.value, {
    back: null,
    current: s.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function i(l, h, f) {
    const d = e.indexOf("#"), g = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l : Jh() + e + l;
    try {
      t[f ? "replaceState" : "pushState"](h, "", g), o.value = h;
    } catch (_) {
      process.env.NODE_ENV !== "production" ? G("Error with push/replace State", _) : console.error(_), n[f ? "replace" : "assign"](g);
    }
  }
  function a(l, h) {
    const f = q({}, t.state, si(
      o.value.back,
      // keep back and forward entries but override current position
      l,
      o.value.forward,
      !0
    ), h, { position: o.value.position });
    i(l, f, !0), s.value = l;
  }
  function u(l, h) {
    const f = q(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: l,
        scroll: ds()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && G(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), i(f.current, f, !0);
    const d = q({}, si(s.value, l, null), { position: f.position + 1 }, h);
    i(l, d, !1), s.value = l;
  }
  return {
    location: s,
    state: o,
    push: u,
    replace: a
  };
}
function Zh(e) {
  e = Wh(e);
  const t = Qh(e), n = Xh(e, t.state, t.location, t.replace);
  function s(i, a = !0) {
    a || n.pauseListeners(), history.go(i);
  }
  const o = q({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: zh.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function ep(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Ca(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ze = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, ar = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var ri;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ri || (ri = {}));
const tp = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${sp(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function zt(e, t) {
  return process.env.NODE_ENV !== "production" ? q(new Error(tp[e](t)), {
    type: e,
    [ar]: !0
  }, t) : q(new Error(), {
    type: e,
    [ar]: !0
  }, t);
}
function Ke(e, t) {
  return e instanceof Error && ar in e && (t == null || !!(e.type & t));
}
const np = ["params", "query", "hash"];
function sp(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of np)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const oi = "[^/]+?", rp = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, op = /[.+*?^${}()[\]/\\]/g;
function ip(e, t) {
  const n = q({}, rp, t), s = [];
  let o = n.start ? "^" : "";
  const i = [];
  for (const h of e) {
    const f = h.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !h.length && (o += "/");
    for (let d = 0; d < h.length; d++) {
      const g = h[d];
      let _ = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        d || (o += "/"), o += g.value.replace(op, "\\$&"), _ += 40;
      else if (g.type === 1) {
        const { value: E, repeatable: v, optional: O, regexp: T } = g;
        i.push({
          name: E,
          repeatable: v,
          optional: O
        });
        const C = T || oi;
        if (C !== oi) {
          _ += 10;
          try {
            new RegExp(`(${C})`);
          } catch (x) {
            throw new Error(`Invalid custom RegExp for param "${E}" (${C}): ` + x.message);
          }
        }
        let k = v ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`;
        d || (k = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        O && h.length < 2 ? `(?:/${k})` : "/" + k), O && (k += "?"), o += k, _ += 20, O && (_ += -8), v && (_ += -20), C === ".*" && (_ += -50);
      }
      f.push(_);
    }
    s.push(f);
  }
  if (n.strict && n.end) {
    const h = s.length - 1;
    s[h][s[h].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
  const a = new RegExp(o, n.sensitive ? "" : "i");
  function u(h) {
    const f = h.match(a), d = {};
    if (!f)
      return null;
    for (let g = 1; g < f.length; g++) {
      const _ = f[g] || "", E = i[g - 1];
      d[E.name] = _ && E.repeatable ? _.split("/") : _;
    }
    return d;
  }
  function l(h) {
    let f = "", d = !1;
    for (const g of e) {
      (!d || !f.endsWith("/")) && (f += "/"), d = !1;
      for (const _ of g)
        if (_.type === 0)
          f += _.value;
        else if (_.type === 1) {
          const { value: E, repeatable: v, optional: O } = _, T = E in h ? h[E] : "";
          if (be(T) && !v)
            throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);
          const C = be(T) ? T.join("/") : T;
          if (!C)
            if (O)
              g.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${E}"`);
          f += C;
        }
    }
    return f || "/";
  }
  return {
    re: a,
    score: s,
    keys: i,
    parse: u,
    stringify: l
  };
}
function ap(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function cp(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const i = ap(s[n], o[n]);
    if (i)
      return i;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (ii(s))
      return 1;
    if (ii(o))
      return -1;
  }
  return o.length - s.length;
}
function ii(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const lp = {
  type: 0,
  value: ""
}, up = /[a-zA-Z0-9_]/;
function fp(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[lp]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(_) {
    throw new Error(`ERR (${n})/"${h}": ${_}`);
  }
  let n = 0, s = n;
  const o = [];
  let i;
  function a() {
    i && o.push(i), i = [];
  }
  let u = 0, l, h = "", f = "";
  function d() {
    h && (n === 0 ? i.push({
      type: 0,
      value: h
    }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: 1,
      value: h,
      regexp: f,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), h = "");
  }
  function g() {
    h += l;
  }
  for (; u < e.length; ) {
    if (l = e[u++], l === "\\" && n !== 2) {
      s = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (h && d(), a()) : l === ":" ? (d(), n = 1) : g();
        break;
      case 4:
        g(), n = s;
        break;
      case 1:
        l === "(" ? n = 2 : up.test(l) ? g() : (d(), n = 0, l !== "*" && l !== "?" && l !== "+" && u--);
        break;
      case 2:
        l === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + l : n = 3 : f += l;
        break;
      case 3:
        d(), n = 0, l !== "*" && l !== "?" && l !== "+" && u--, f = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${h}"`), d(), a(), o;
}
function dp(e, t, n) {
  const s = ip(fp(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const i = /* @__PURE__ */ new Set();
    for (const a of s.keys)
      i.has(a.name) && G(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), i.add(a.name);
  }
  const o = q(s, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function hp(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = li({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(f) {
    return s.get(f);
  }
  function i(f, d, g) {
    const _ = !g, E = pp(f);
    process.env.NODE_ENV !== "production" && Ep(E, d), E.aliasOf = g && g.record;
    const v = li(t, f), O = [
      E
    ];
    if ("alias" in f) {
      const k = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const x of k)
        O.push(q({}, E, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : E.components,
          path: x,
          // we might be the child of an alias
          aliasOf: g ? g.record : E
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let T, C;
    for (const k of O) {
      const { path: x } = k;
      if (d && x[0] !== "/") {
        const j = d.record.path, V = j[j.length - 1] === "/" ? "" : "/";
        k.path = d.record.path + (x && V + x);
      }
      if (process.env.NODE_ENV !== "production" && k.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (T = dp(k, d, v), process.env.NODE_ENV !== "production" && d && x[0] === "/" && vp(T, d), g ? (g.alias.push(T), process.env.NODE_ENV !== "production" && _p(g, T)) : (C = C || T, C !== T && C.alias.push(T), _ && f.name && !ci(T) && a(f.name)), E.children) {
        const j = E.children;
        for (let V = 0; V < j.length; V++)
          i(j[V], T, g && g.children[V]);
      }
      g = g || T, (T.record.components && Object.keys(T.record.components).length || T.record.name || T.record.redirect) && l(T);
    }
    return C ? () => {
      a(C);
    } : pn;
  }
  function a(f) {
    if (Ca(f)) {
      const d = s.get(f);
      d && (s.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(a), d.alias.forEach(a));
    } else {
      const d = n.indexOf(f);
      d > -1 && (n.splice(d, 1), f.record.name && s.delete(f.record.name), f.children.forEach(a), f.alias.forEach(a));
    }
  }
  function u() {
    return n;
  }
  function l(f) {
    let d = 0;
    for (; d < n.length && cp(f, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (f.record.path !== n[d].record.path || !Na(f, n[d])); )
      d++;
    n.splice(d, 0, f), f.record.name && !ci(f) && s.set(f.record.name, f);
  }
  function h(f, d) {
    let g, _ = {}, E, v;
    if ("name" in f && f.name) {
      if (g = s.get(f.name), !g)
        throw zt(1, {
          location: f
        });
      if (process.env.NODE_ENV !== "production") {
        const C = Object.keys(f.params || {}).filter((k) => !g.keys.find((x) => x.name === k));
        C.length && G(`Discarded invalid param(s) "${C.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      v = g.record.name, _ = q(
        // paramsFromLocation is a new object
        ai(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((C) => !C.optional).map((C) => C.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        f.params && ai(f.params, g.keys.map((C) => C.name))
      ), E = g.stringify(_);
    } else if ("path" in f)
      E = f.path, process.env.NODE_ENV !== "production" && !E.startsWith("/") && G(`The Matcher cannot resolve relative paths but received "${E}". Unless you directly called \`matcher.resolve("${E}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((C) => C.re.test(E)), g && (_ = g.parse(E), v = g.record.name);
    else {
      if (g = d.name ? s.get(d.name) : n.find((C) => C.re.test(d.path)), !g)
        throw zt(1, {
          location: f,
          currentLocation: d
        });
      v = g.record.name, _ = q({}, d.params, f.params), E = g.stringify(_);
    }
    const O = [];
    let T = g;
    for (; T; )
      O.unshift(T.record), T = T.parent;
    return {
      name: v,
      path: E,
      params: _,
      matched: O,
      meta: gp(O)
    };
  }
  return e.forEach((f) => i(f)), { addRoute: i, resolve: h, removeRoute: a, getRoutes: u, getRecordMatcher: o };
}
function ai(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function pp(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: mp(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function mp(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const s in e.components)
      t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function ci(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function gp(e) {
  return e.reduce((t, n) => q(t, n.meta), {});
}
function li(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function cr(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function _p(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(cr.bind(null, n)))
      return G(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(cr.bind(null, n)))
      return G(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Ep(e, t) {
  t && t.record.name && !e.name && !e.path && G(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function vp(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(cr.bind(null, n)))
      return G(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Na(e, t) {
  return t.children.some((n) => n === e || Na(e, n));
}
const $a = /#/g, yp = /&/g, bp = /\//g, wp = /=/g, Ap = /\?/g, Pa = /\+/g, Op = /%5B/g, Tp = /%5D/g, Ra = /%5E/g, Sp = /%60/g, Da = /%7B/g, Cp = /%7C/g, La = /%7D/g, Np = /%20/g;
function jr(e) {
  return encodeURI("" + e).replace(Cp, "|").replace(Op, "[").replace(Tp, "]");
}
function $p(e) {
  return jr(e).replace(Da, "{").replace(La, "}").replace(Ra, "^");
}
function lr(e) {
  return jr(e).replace(Pa, "%2B").replace(Np, "+").replace($a, "%23").replace(yp, "%26").replace(Sp, "`").replace(Da, "{").replace(La, "}").replace(Ra, "^");
}
function Pp(e) {
  return lr(e).replace(wp, "%3D");
}
function Rp(e) {
  return jr(e).replace($a, "%23").replace(Ap, "%3F");
}
function Dp(e) {
  return e == null ? "" : Rp(e).replace(bp, "%2F");
}
function bn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && G(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Lp(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const i = s[o].replace(Pa, " "), a = i.indexOf("="), u = bn(a < 0 ? i : i.slice(0, a)), l = a < 0 ? null : bn(i.slice(a + 1));
    if (u in t) {
      let h = t[u];
      be(h) || (h = t[u] = [h]), h.push(l);
    } else
      t[u] = l;
  }
  return t;
}
function ui(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = Pp(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (be(s) ? s.map((i) => i && lr(i)) : [s && lr(s)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function kp(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = be(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const xp = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), fi = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), Vr = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), ka = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), ur = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function rn() {
  let e = [];
  function t(s) {
    return e.push(s), () => {
      const o = e.indexOf(s);
      o > -1 && e.splice(o, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function nt(e, t, n, s, o) {
  const i = s && // name is defined if record is because of the function overload
  (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () => new Promise((a, u) => {
    const l = (d) => {
      d === !1 ? u(zt(4, {
        from: n,
        to: t
      })) : d instanceof Error ? u(d) : ep(d) ? u(zt(2, {
        from: t,
        to: d
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === i && typeof d == "function" && i.push(d), a());
    }, h = e.call(s && s.instances[o], t, n, process.env.NODE_ENV !== "production" ? Ip(l, t, n) : l);
    let f = Promise.resolve(h);
    if (e.length < 3 && (f = f.then(l)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof h == "object" && "then" in h)
        f = f.then((g) => l._called ? g : (G(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (h !== void 0 && !l._called) {
        G(d), u(new Error("Invalid navigation guard"));
        return;
      }
    }
    f.catch((d) => u(d));
  });
}
function Ip(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && G(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function js(e, t, n, s) {
  const o = [];
  for (const i of e) {
    process.env.NODE_ENV !== "production" && !i.components && !i.children.length && G(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in i.components) {
      let u = i.components[a];
      if (process.env.NODE_ENV !== "production") {
        if (!u || typeof u != "object" && typeof u != "function")
          throw G(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(u)}".`), new Error("Invalid route component");
        if ("then" in u) {
          G(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const l = u;
          u = () => l;
        } else
          u.__asyncLoader && // warn only once per component
          !u.__warnedDefineAsync && (u.__warnedDefineAsync = !0, G(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (Mp(u)) {
          const h = (u.__vccOpts || u)[t];
          h && o.push(nt(h, n, s, i, a));
        } else {
          let l = u();
          process.env.NODE_ENV !== "production" && !("catch" in l) && (G(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), o.push(() => l.then((h) => {
            if (!h)
              return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));
            const f = Mh(h) ? h.default : h;
            i.components[a] = f;
            const g = (f.__vccOpts || f)[t];
            return g && nt(g, n, s, i, a)();
          }));
        }
    }
  }
  return o;
}
function Mp(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function di(e) {
  const t = Vt(Vr), n = Vt(ka), s = Ce(() => t.resolve(jt(e.to))), o = Ce(() => {
    const { matched: l } = s.value, { length: h } = l, f = l[h - 1], d = n.matched;
    if (!f || !d.length)
      return -1;
    const g = d.findIndex(ot.bind(null, f));
    if (g > -1)
      return g;
    const _ = hi(l[h - 2]);
    return (
      // we are dealing with nested routes
      h > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      hi(f) === _ && // avoid comparing the child with its parent
      d[d.length - 1].path !== _ ? d.findIndex(ot.bind(null, l[h - 2])) : g
    );
  }), i = Ce(() => o.value > -1 && Fp(n.params, s.value.params)), a = Ce(() => o.value > -1 && o.value === n.matched.length - 1 && Ta(n.params, s.value.params));
  function u(l = {}) {
    return Bp(l) ? t[jt(e.replace) ? "replace" : "push"](
      jt(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(pn) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Ge) {
    const l = yr();
    if (l) {
      const h = {
        route: s.value,
        isActive: i.value,
        isExactActive: a.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(h), od(() => {
        h.route = s.value, h.isActive = i.value, h.isExactActive = a.value;
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: Ce(() => s.value.href),
    isActive: i,
    isExactActive: a,
    navigate: u
  };
}
const jp = /* @__PURE__ */ Bi({
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
  useLink: di,
  setup(e, { slots: t }) {
    const n = Vi(di(e)), { options: s } = Vt(Vr), o = Ce(() => ({
      [pi(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [pi(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const i = t.default && t.default(n);
      return e.custom ? i : Fi("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, i);
    };
  }
}), Vp = jp;
function Bp(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Fp(e, t) {
  for (const n in t) {
    const s = t[n], o = e[n];
    if (typeof s == "string") {
      if (s !== o)
        return !1;
    } else if (!be(o) || o.length !== s.length || s.some((i, a) => i !== o[a]))
      return !1;
  }
  return !0;
}
function hi(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const pi = (e, t, n) => e ?? t ?? n, Hp = /* @__PURE__ */ Bi({
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
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && Up();
    const s = Vt(ur), o = Ce(() => e.route || s.value), i = Vt(fi, 0), a = Ce(() => {
      let h = jt(i);
      const { matched: f } = o.value;
      let d;
      for (; (d = f[h]) && !d.components; )
        h++;
      return h;
    }), u = Ce(() => o.value.matched[a.value]);
    ks(fi, Ce(() => a.value + 1)), ks(xp, u), ks(ur, o);
    const l = os();
    return as(() => [l.value, u.value, e.name], ([h, f, d], [g, _, E]) => {
      f && (f.instances[d] = h, _ && _ !== f && h && h === g && (f.leaveGuards.size || (f.leaveGuards = _.leaveGuards), f.updateGuards.size || (f.updateGuards = _.updateGuards))), h && f && // if there is no instance but to and from are the same this might be
      // the first visit
      (!_ || !ot(f, _) || !g) && (f.enterCallbacks[d] || []).forEach((v) => v(h));
    }, { flush: "post" }), () => {
      const h = o.value, f = e.name, d = u.value, g = d && d.components[f];
      if (!g)
        return mi(n.default, { Component: g, route: h });
      const _ = d.props[f], E = _ ? _ === !0 ? h.params : typeof _ == "function" ? _(h) : _ : null, O = Fi(g, q({}, E, t, {
        onVnodeUnmounted: (T) => {
          T.component.isUnmounted && (d.instances[f] = null);
        },
        ref: l
      }));
      if (process.env.NODE_ENV !== "production" && Ge && O.ref) {
        const T = {
          depth: a.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (be(O.ref) ? O.ref.map((k) => k.i) : [O.ref.i]).forEach((k) => {
          k.__vrv_devtools = T;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        mi(n.default, { Component: O, route: h }) || O
      );
    };
  }
});
function mi(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Wp = Hp;
function Up() {
  const e = yr(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const s = t === "KeepAlive" ? "keep-alive" : "transition";
    G(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`);
  }
}
function on(e, t) {
  const n = q({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => Zp(s, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function zn(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let zp = 0;
function Kp(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = zp++;
  xr({
    id: "org.vuejs.router" + (s ? "." + s : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((f, d) => {
      f.instanceData && f.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: on(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: f, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const g = d.__vrv_devtools;
        f.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: xa
        });
      }
      be(d.__vrl_devtools) && (d.__devtoolsApi = o, d.__vrl_devtools.forEach((g) => {
        let _ = ja, E = "";
        g.isExactActive ? (_ = Ma, E = "This is exactly active") : g.isActive && (_ = Ia, E = "This link is active"), f.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: E,
          backgroundColor: _
        });
      }));
    }), as(t.currentRoute, () => {
      l(), o.notifyComponentUpdate(), o.sendInspectorTree(u), o.sendInspectorState(u);
    });
    const i = "router:navigations:" + s;
    o.addTimelineLayer({
      id: i,
      label: `Router${s ? " " + s : ""} Navigations`,
      color: 4237508
    }), t.onError((f, d) => {
      o.addTimelineEvent({
        layerId: i,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: f },
          groupId: d.meta.__navigationId
        }
      });
    });
    let a = 0;
    t.beforeEach((f, d) => {
      const g = {
        guard: zn("beforeEach"),
        from: on(d, "Current Location during this navigation"),
        to: on(f, "Target location")
      };
      Object.defineProperty(f.meta, "__navigationId", {
        value: a++
      }), o.addTimelineEvent({
        layerId: i,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: f.fullPath,
          data: g,
          groupId: f.meta.__navigationId
        }
      });
    }), t.afterEach((f, d, g) => {
      const _ = {
        guard: zn("afterEach")
      };
      g ? (_.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, _.status = zn("❌")) : _.status = zn("✅"), _.from = on(d, "Current Location during this navigation"), _.to = on(f, "Target location"), o.addTimelineEvent({
        layerId: i,
        event: {
          title: "End of navigation",
          subtitle: f.fullPath,
          time: o.now(),
          data: _,
          logType: g ? "warning" : "default",
          groupId: f.meta.__navigationId
        }
      });
    });
    const u = "router-inspector:" + s;
    o.addInspector({
      id: u,
      label: "Routes" + (s ? " " + s : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function l() {
      if (!h)
        return;
      const f = h;
      let d = n.getRoutes().filter((g) => !g.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !g.parent.record.components);
      d.forEach(Fa), f.filter && (d = d.filter((g) => (
        // save matches state based on the payload
        fr(g, f.filter.toLowerCase())
      ))), d.forEach((g) => Ba(g, t.currentRoute.value)), f.rootNodes = d.map(Va);
    }
    let h;
    o.on.getInspectorTree((f) => {
      h = f, f.app === e && f.inspectorId === u && l();
    }), o.on.getInspectorState((f) => {
      if (f.app === e && f.inspectorId === u) {
        const g = n.getRoutes().find((_) => _.record.__vd_id === f.nodeId);
        g && (f.state = {
          options: Yp(g)
        });
      }
    }), o.sendInspectorTree(u), o.sendInspectorState(u);
  });
}
function Gp(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Yp(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((s) => `${s.name}${Gp(s)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((s) => s.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((s) => s.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const xa = 15485081, Ia = 2450411, Ma = 8702998, qp = 2282478, ja = 16486972, Jp = 6710886;
function Va(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: qp
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: ja
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: xa
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Ma
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Ia
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Jp
  });
  let s = n.__vd_id;
  return s == null && (s = String(Xp++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(Va)
  };
}
let Xp = 0;
const Qp = /^\/(.*)\/([a-z]*)$/;
function Ba(e, t) {
  const n = t.matched.length && ot(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => ot(s, e.record))), e.children.forEach((s) => Ba(s, t));
}
function Fa(e) {
  e.__vd_match = !1, e.children.forEach(Fa);
}
function fr(e, t) {
  const n = String(e.re).match(Qp);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((a) => fr(a, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), i = bn(o);
  return !t.startsWith("/") && (i.includes(t) || o.includes(t)) || i.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((a) => fr(a, t));
}
function Zp(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function em(e) {
  const t = hp(e.routes, e), n = e.parseQuery || Lp, s = e.stringifyQuery || ui, o = e.history;
  if (process.env.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const i = rn(), a = rn(), u = rn(), l = sd(Ze);
  let h = Ze;
  Ge && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const f = Is.bind(null, (b) => "" + b), d = Is.bind(null, Dp), g = (
    // @ts-expect-error: intentionally avoid the type check
    Is.bind(null, bn)
  );
  function _(b, D) {
    let L, I;
    return Ca(b) ? (L = t.getRecordMatcher(b), I = D) : I = b, t.addRoute(I, L);
  }
  function E(b) {
    const D = t.getRecordMatcher(b);
    D ? t.removeRoute(D) : process.env.NODE_ENV !== "production" && G(`Cannot remove non-existent route "${String(b)}"`);
  }
  function v() {
    return t.getRoutes().map((b) => b.record);
  }
  function O(b) {
    return !!t.getRecordMatcher(b);
  }
  function T(b, D) {
    if (D = q({}, D || l.value), typeof b == "string") {
      const B = Ms(n, b, D.path), K = t.resolve({ path: B.path }, D), ie = o.createHref(B.fullPath);
      return process.env.NODE_ENV !== "production" && (ie.startsWith("//") ? G(`Location "${b}" resolved to "${ie}". A resolved location cannot start with multiple slashes.`) : K.matched.length || G(`No match found for location with path "${b}"`)), q(B, K, {
        params: g(K.params),
        hash: bn(B.hash),
        redirectedFrom: void 0,
        href: ie
      });
    }
    let L;
    if ("path" in b)
      process.env.NODE_ENV !== "production" && "params" in b && !("name" in b) && // @ts-expect-error: the type is never
      Object.keys(b.params).length && G(`Path "${b.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), L = q({}, b, {
        path: Ms(n, b.path, D.path).path
      });
    else {
      const B = q({}, b.params);
      for (const K in B)
        B[K] == null && delete B[K];
      L = q({}, b, {
        params: d(B)
      }), D.params = d(D.params);
    }
    const I = t.resolve(L, D), y = b.hash || "";
    process.env.NODE_ENV !== "production" && y && !y.startsWith("#") && G(`A \`hash\` should always start with the character "#". Replace "${y}" with "#${y}".`), I.params = f(g(I.params));
    const X = Bh(s, q({}, b, {
      hash: $p(y),
      path: I.path
    })), H = o.createHref(X);
    return process.env.NODE_ENV !== "production" && (H.startsWith("//") ? G(`Location "${b}" resolved to "${H}". A resolved location cannot start with multiple slashes.`) : I.matched.length || G(`No match found for location with path "${"path" in b ? b.path : b}"`)), q({
      fullPath: X,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: y,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === ui ? kp(b.query) : b.query || {}
      )
    }, I, {
      redirectedFrom: void 0,
      href: H
    });
  }
  function C(b) {
    return typeof b == "string" ? Ms(n, b, l.value.path) : q({}, b);
  }
  function k(b, D) {
    if (h !== b)
      return zt(8, {
        from: D,
        to: b
      });
  }
  function x(b) {
    return R(b);
  }
  function j(b) {
    return x(q(C(b), { replace: !0 }));
  }
  function V(b) {
    const D = b.matched[b.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: L } = D;
      let I = typeof L == "function" ? L(b) : L;
      if (typeof I == "string" && (I = I.includes("?") || I.includes("#") ? I = C(I) : (
        // force empty params
        { path: I }
      ), I.params = {}), process.env.NODE_ENV !== "production" && !("path" in I) && !("name" in I))
        throw G(`Invalid redirect found:
${JSON.stringify(I, null, 2)}
 when navigating to "${b.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return q({
        query: b.query,
        hash: b.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in I ? {} : b.params
      }, I);
    }
  }
  function R(b, D) {
    const L = h = T(b), I = l.value, y = b.state, X = b.force, H = b.replace === !0, B = V(L);
    if (B)
      return R(
        q(C(B), {
          state: typeof B == "object" ? q({}, y, B.state) : y,
          force: X,
          replace: H
        }),
        // keep original redirectedFrom if it exists
        D || L
      );
    const K = L;
    K.redirectedFrom = D;
    let ie;
    return !X && ei(s, I, L) && (ie = zt(16, { to: K, from: I }), Fe(
      I,
      I,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (ie ? Promise.resolve(ie) : N(K, I)).catch((te) => Ke(te) ? (
      // navigation redirects still mark the router as ready
      Ke(
        te,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? te : Le(te)
    ) : (
      // reject any unknown error
      Z(te, K, I)
    )).then((te) => {
      if (te) {
        if (Ke(
          te,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          ei(s, T(te.to), K) && // and we have done it a couple of times
          D && // @ts-expect-error: added only in dev
          (D._count = D._count ? (
            // @ts-expect-error
            D._count + 1
          ) : 1) > 30 ? (G(`Detected a possibly infinite redirection in a navigation guard when going from "${I.fullPath}" to "${K.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : R(
            // keep options
            q({
              // preserve an existing replacement but allow the redirect to override it
              replace: H
            }, C(te.to), {
              state: typeof te.to == "object" ? q({}, y, te.to.state) : y,
              force: X
            }),
            // preserve the original redirectedFrom if any
            D || K
          );
      } else
        te = W(K, I, !0, H, y);
      return S(K, I, te), te;
    });
  }
  function Q(b, D) {
    const L = k(b, D);
    return L ? Promise.reject(L) : Promise.resolve();
  }
  function F(b) {
    const D = me.values().next().value;
    return D && typeof D.runWithContext == "function" ? D.runWithContext(b) : b();
  }
  function N(b, D) {
    let L;
    const [I, y, X] = tm(b, D);
    L = js(I.reverse(), "beforeRouteLeave", b, D);
    for (const B of I)
      B.leaveGuards.forEach((K) => {
        L.push(nt(K, b, D));
      });
    const H = Q.bind(null, b, D);
    return L.push(H), le(L).then(() => {
      L = [];
      for (const B of i.list())
        L.push(nt(B, b, D));
      return L.push(H), le(L);
    }).then(() => {
      L = js(y, "beforeRouteUpdate", b, D);
      for (const B of y)
        B.updateGuards.forEach((K) => {
          L.push(nt(K, b, D));
        });
      return L.push(H), le(L);
    }).then(() => {
      L = [];
      for (const B of X)
        if (B.beforeEnter)
          if (be(B.beforeEnter))
            for (const K of B.beforeEnter)
              L.push(nt(K, b, D));
          else
            L.push(nt(B.beforeEnter, b, D));
      return L.push(H), le(L);
    }).then(() => (b.matched.forEach((B) => B.enterCallbacks = {}), L = js(X, "beforeRouteEnter", b, D), L.push(H), le(L))).then(() => {
      L = [];
      for (const B of a.list())
        L.push(nt(B, b, D));
      return L.push(H), le(L);
    }).catch((B) => Ke(
      B,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? B : Promise.reject(B));
  }
  function S(b, D, L) {
    u.list().forEach((I) => F(() => I(b, D, L)));
  }
  function W(b, D, L, I, y) {
    const X = k(b, D);
    if (X)
      return X;
    const H = D === Ze, B = Ge ? history.state : {};
    L && (I || H ? o.replace(b.fullPath, q({
      scroll: H && B && B.scroll
    }, y)) : o.push(b.fullPath, y)), l.value = b, Fe(b, D, L, H), Le();
  }
  let U;
  function oe() {
    U || (U = o.listen((b, D, L) => {
      if (!he.listening)
        return;
      const I = T(b), y = V(I);
      if (y) {
        R(q(y, { replace: !0 }), I).catch(pn);
        return;
      }
      h = I;
      const X = l.value;
      Ge && Yh(ni(X.fullPath, L.delta), ds()), N(I, X).catch((H) => Ke(
        H,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? H : Ke(
        H,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (R(
        H.to,
        I
        // avoid an uncaught rejection, let push call triggerError
      ).then((B) => {
        Ke(
          B,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !L.delta && L.type === yn.pop && o.go(-1, !1);
      }).catch(pn), Promise.reject()) : (L.delta && o.go(-L.delta, !1), Z(H, I, X))).then((H) => {
        H = H || W(
          // after navigation, all matched components are resolved
          I,
          X,
          !1
        ), H && (L.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Ke(
          H,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-L.delta, !1) : L.type === yn.pop && Ke(
          H,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), S(I, X, H);
      }).catch(pn);
    }));
  }
  let ce = rn(), ee = rn(), J;
  function Z(b, D, L) {
    Le(b);
    const I = ee.list();
    return I.length ? I.forEach((y) => y(b, D, L)) : (process.env.NODE_ENV !== "production" && G("uncaught error during route navigation:"), console.error(b)), Promise.reject(b);
  }
  function we() {
    return J && l.value !== Ze ? Promise.resolve() : new Promise((b, D) => {
      ce.add([b, D]);
    });
  }
  function Le(b) {
    return J || (J = !b, oe(), ce.list().forEach(([D, L]) => b ? L(b) : D()), ce.reset()), b;
  }
  function Fe(b, D, L, I) {
    const { scrollBehavior: y } = e;
    if (!Ge || !y)
      return Promise.resolve();
    const X = !L && qh(ni(b.fullPath, 0)) || (I || !L) && history.state && history.state.scroll || null;
    return Xs().then(() => y(b, D, X)).then((H) => H && Gh(H)).catch((H) => Z(H, b, D));
  }
  const Ae = (b) => o.go(b);
  let ke;
  const me = /* @__PURE__ */ new Set(), he = {
    currentRoute: l,
    listening: !0,
    addRoute: _,
    removeRoute: E,
    hasRoute: O,
    getRoutes: v,
    resolve: T,
    options: e,
    push: x,
    replace: j,
    go: Ae,
    back: () => Ae(-1),
    forward: () => Ae(1),
    beforeEach: i.add,
    beforeResolve: a.add,
    afterEach: u.add,
    onError: ee.add,
    isReady: we,
    install(b) {
      const D = this;
      b.component("RouterLink", Vp), b.component("RouterView", Wp), b.config.globalProperties.$router = D, Object.defineProperty(b.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => jt(l)
      }), Ge && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ke && l.value === Ze && (ke = !0, x(o.location).catch((y) => {
        process.env.NODE_ENV !== "production" && G("Unexpected error when starting the router:", y);
      }));
      const L = {};
      for (const y in Ze)
        Object.defineProperty(L, y, {
          get: () => l.value[y],
          enumerable: !0
        });
      b.provide(Vr, D), b.provide(ka, rd(L)), b.provide(ur, l);
      const I = b.unmount;
      me.add(b), b.unmount = function() {
        me.delete(b), me.size < 1 && (h = Ze, U && U(), U = null, l.value = Ze, ke = !1, J = !1), I();
      }, process.env.NODE_ENV !== "production" && Ge && Kp(b, D, t);
    }
  };
  function le(b) {
    return b.reduce((D, L) => D.then(() => F(L)), Promise.resolve());
  }
  return he;
}
function tm(e, t) {
  const n = [], s = [], o = [], i = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < i; a++) {
    const u = t.matched[a];
    u && (e.matched.find((h) => ot(h, u)) ? s.push(u) : n.push(u));
    const l = e.matched[a];
    l && (t.matched.find((h) => ot(h, l)) || o.push(l));
  }
  return [n, s, o];
}
const Ha = Ih("myStore", {
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
}), nm = {
  setup() {
    return { myStore: Ha() };
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
}, sm = { class: "navbar-ls" }, rm = /* @__PURE__ */ ue("div", { class: "navbar-backdrops" }, null, -1), om = { class: "navbar-panel" }, im = { class: "navbar-header" }, am = /* @__PURE__ */ ue("i", { class: "bi bi-x-lg" }, null, -1), cm = [
  am
], lm = { class: "navbar-links" };
function um(e, t, n, s, o, i) {
  return qe(), At("div", sm, [
    rm,
    ue("div", om, [
      ue("div", im, [
        ue("button", {
          class: wr(`btn ${s.myStore.mobileMode ? "btn-sm" : "btn-lg"} btn-light`),
          onClick: t[0] || (t[0] = (...a) => i.close && i.close(...a))
        }, cm, 2)
      ]),
      ue("div", lm, [
        ue("div", {
          class: "navbar-link",
          onClick: t[1] || (t[1] = (a) => i.redirect("/"))
        }, " Proje "),
        ue("div", {
          class: "navbar-link",
          onClick: t[2] || (t[2] = (a) => i.redirect("/location"))
        }, " Konum "),
        ue("div", {
          class: "navbar-link",
          onClick: t[3] || (t[3] = (a) => i.redirect("/gallery"))
        }, " Galeri "),
        ue("div", {
          class: "navbar-link",
          onClick: t[4] || (t[4] = (a) => i.redirect("/compare"))
        }, " Kıyaslama ")
      ])
    ])
  ]);
}
const fm = /* @__PURE__ */ at(nm, [["render", um]]), dm = {
  setup() {
    return { myStore: Ha() };
  },
  data() {
    return {
      hamburgerMenu: !1
    };
  },
  components: { NavBar: fm },
  methods: {
    hamburgerMenuToggle() {
      this.hamburgerMenu = !this.hamburgerMenu;
    }
  }
}, hm = { class: "navbar-ls-panel" }, pm = /* @__PURE__ */ ue("i", { class: "bi bi-list" }, null, -1), mm = [
  pm
];
function gm(e, t, n, s, o, i) {
  const a = Js("NavBar"), u = Js("router-view");
  return qe(), At(id, null, [
    ue("div", hm, [
      ue("button", {
        class: wr(`btn ${s.myStore.mobileMode ? "btn-sm" : "btn-lg"} btn-light`),
        onClick: t[0] || (t[0] = (...l) => i.hamburgerMenuToggle && i.hamburgerMenuToggle(...l))
      }, mm, 2)
    ]),
    o.hamburgerMenu ? (qe(), Mi(a, {
      key: 0,
      onResponse: t[1] || (t[1] = (l) => i.hamburgerMenuToggle())
    })) : ad("", !0),
    cd(u)
  ], 64);
}
const _m = /* @__PURE__ */ at(dm, [["render", gm]]), Em = em({
  history: Zh("/"),
  routes: [
    {
      path: "/",
      name: "Public",
      component: _m,
      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("./HomeView-cnv__x08.js")
        },
        {
          path: "/main-view",
          name: "HomePage",
          component: () => import("./HomeView-cnv__x08.js")
        },
        {
          path: "/location",
          name: "LocationPage",
          component: () => import("./LocationView-PwEAQhfU.js")
        },
        {
          path: "/compare",
          name: "ComparePage",
          component: () => import("./CompareView-Q0dljw0w.js")
        },
        {
          path: "/gallery",
          name: "GalleryPage",
          component: () => import("./GalleryView-f9_l6EpF.js")
        }
      ]
    }
  ]
});
function Wa(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: vm } = Object.prototype, { getPrototypeOf: Br } = Object, hs = /* @__PURE__ */ ((e) => (t) => {
  const n = vm.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Be = (e) => (e = e.toLowerCase(), (t) => hs(t) === e), ps = (e) => (t) => typeof t === e, { isArray: Yt } = Array, wn = ps("undefined");
function ym(e) {
  return e !== null && !wn(e) && e.constructor !== null && !wn(e.constructor) && $e(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ua = Be("ArrayBuffer");
function bm(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ua(e.buffer), t;
}
const wm = ps("string"), $e = ps("function"), za = ps("number"), ms = (e) => e !== null && typeof e == "object", Am = (e) => e === !0 || e === !1, Qn = (e) => {
  if (hs(e) !== "object")
    return !1;
  const t = Br(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Om = Be("Date"), Tm = Be("File"), Sm = Be("Blob"), Cm = Be("FileList"), Nm = (e) => ms(e) && $e(e.pipe), $m = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || $e(e.append) && ((t = hs(e)) === "formdata" || // detect form-data instance
  t === "object" && $e(e.toString) && e.toString() === "[object FormData]"));
}, Pm = Be("URLSearchParams"), Rm = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function On(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, o;
  if (typeof e != "object" && (e = [e]), Yt(e))
    for (s = 0, o = e.length; s < o; s++)
      t.call(null, e[s], s, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let u;
    for (s = 0; s < a; s++)
      u = i[s], t.call(null, e[u], u, e);
  }
}
function Ka(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], t === o.toLowerCase())
      return o;
  return null;
}
const Ga = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ya = (e) => !wn(e) && e !== Ga;
function dr() {
  const { caseless: e } = Ya(this) && this || {}, t = {}, n = (s, o) => {
    const i = e && Ka(t, o) || o;
    Qn(t[i]) && Qn(s) ? t[i] = dr(t[i], s) : Qn(s) ? t[i] = dr({}, s) : Yt(s) ? t[i] = s.slice() : t[i] = s;
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && On(arguments[s], n);
  return t;
}
const Dm = (e, t, n, { allOwnKeys: s } = {}) => (On(t, (o, i) => {
  n && $e(o) ? e[i] = Wa(o, n) : e[i] = o;
}, { allOwnKeys: s }), e), Lm = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), km = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, xm = (e, t, n, s) => {
  let o, i, a;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!s || s(a, e, t)) && !u[a] && (t[a] = e[a], u[a] = !0);
    e = n !== !1 && Br(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Im = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, Mm = (e) => {
  if (!e)
    return null;
  if (Yt(e))
    return e;
  let t = e.length;
  if (!za(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, jm = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Br(Uint8Array)), Vm = (e, t) => {
  const s = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, Bm = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, Fm = Be("HTMLFormElement"), Hm = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, o) {
    return s.toUpperCase() + o;
  }
), gi = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Wm = Be("RegExp"), qa = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  On(n, (o, i) => {
    let a;
    (a = t(o, i, e)) !== !1 && (s[i] = a || o);
  }), Object.defineProperties(e, s);
}, Um = (e) => {
  qa(e, (t, n) => {
    if ($e(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if ($e(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, zm = (e, t) => {
  const n = {}, s = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return Yt(e) ? s(e) : s(String(e).split(t)), n;
}, Km = () => {
}, Gm = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Vs = "abcdefghijklmnopqrstuvwxyz", _i = "0123456789", Ja = {
  DIGIT: _i,
  ALPHA: Vs,
  ALPHA_DIGIT: Vs + Vs.toUpperCase() + _i
}, Ym = (e = 16, t = Ja.ALPHA_DIGIT) => {
  let n = "";
  const { length: s } = t;
  for (; e--; )
    n += t[Math.random() * s | 0];
  return n;
};
function qm(e) {
  return !!(e && $e(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Jm = (e) => {
  const t = new Array(10), n = (s, o) => {
    if (ms(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[o] = s;
        const i = Yt(s) ? [] : {};
        return On(s, (a, u) => {
          const l = n(a, o + 1);
          !wn(l) && (i[u] = l);
        }), t[o] = void 0, i;
      }
    }
    return s;
  };
  return n(e, 0);
}, Xm = Be("AsyncFunction"), Qm = (e) => e && (ms(e) || $e(e)) && $e(e.then) && $e(e.catch), A = {
  isArray: Yt,
  isArrayBuffer: Ua,
  isBuffer: ym,
  isFormData: $m,
  isArrayBufferView: bm,
  isString: wm,
  isNumber: za,
  isBoolean: Am,
  isObject: ms,
  isPlainObject: Qn,
  isUndefined: wn,
  isDate: Om,
  isFile: Tm,
  isBlob: Sm,
  isRegExp: Wm,
  isFunction: $e,
  isStream: Nm,
  isURLSearchParams: Pm,
  isTypedArray: jm,
  isFileList: Cm,
  forEach: On,
  merge: dr,
  extend: Dm,
  trim: Rm,
  stripBOM: Lm,
  inherits: km,
  toFlatObject: xm,
  kindOf: hs,
  kindOfTest: Be,
  endsWith: Im,
  toArray: Mm,
  forEachEntry: Vm,
  matchAll: Bm,
  isHTMLForm: Fm,
  hasOwnProperty: gi,
  hasOwnProp: gi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: qa,
  freezeMethods: Um,
  toObjectSet: zm,
  toCamelCase: Hm,
  noop: Km,
  toFiniteNumber: Gm,
  findKey: Ka,
  global: Ga,
  isContextDefined: Ya,
  ALPHABET: Ja,
  generateString: Ym,
  isSpecCompliantForm: qm,
  toJSONObject: Jm,
  isAsyncFn: Xm,
  isThenable: Qm
};
function Y(e, t, n, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), o && (this.response = o);
}
A.inherits(Y, Error, {
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
const Xa = Y.prototype, Qa = {};
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
  Qa[e] = { value: e };
});
Object.defineProperties(Y, Qa);
Object.defineProperty(Xa, "isAxiosError", { value: !0 });
Y.from = (e, t, n, s, o, i) => {
  const a = Object.create(Xa);
  return A.toFlatObject(e, a, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError"), Y.call(a, e.message, t, n, s, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const Zm = null;
function hr(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function Za(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ei(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Za(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function eg(e) {
  return A.isArray(e) && !e.some(hr);
}
const tg = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function gs(e, t, n) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = A.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, O) {
    return !A.isUndefined(O[v]);
  });
  const s = n.metaTokens, o = n.visitor || f, i = n.dots, a = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(t);
  if (!A.isFunction(o))
    throw new TypeError("visitor must be a function");
  function h(E) {
    if (E === null)
      return "";
    if (A.isDate(E))
      return E.toISOString();
    if (!l && A.isBlob(E))
      throw new Y("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(E) || A.isTypedArray(E) ? l && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E;
  }
  function f(E, v, O) {
    let T = E;
    if (E && !O && typeof E == "object") {
      if (A.endsWith(v, "{}"))
        v = s ? v : v.slice(0, -2), E = JSON.stringify(E);
      else if (A.isArray(E) && eg(E) || (A.isFileList(E) || A.endsWith(v, "[]")) && (T = A.toArray(E)))
        return v = Za(v), T.forEach(function(k, x) {
          !(A.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ei([v], x, i) : a === null ? v : v + "[]",
            h(k)
          );
        }), !1;
    }
    return hr(E) ? !0 : (t.append(Ei(O, v, i), h(E)), !1);
  }
  const d = [], g = Object.assign(tg, {
    defaultVisitor: f,
    convertValue: h,
    isVisitable: hr
  });
  function _(E, v) {
    if (!A.isUndefined(E)) {
      if (d.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(E), A.forEach(E, function(T, C) {
        (!(A.isUndefined(T) || T === null) && o.call(
          t,
          T,
          A.isString(C) ? C.trim() : C,
          v,
          g
        )) === !0 && _(T, v ? v.concat(C) : [C]);
      }), d.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function vi(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function Fr(e, t) {
  this._pairs = [], e && gs(e, this, t);
}
const ec = Fr.prototype;
ec.append = function(t, n) {
  this._pairs.push([t, n]);
};
ec.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, vi);
  } : vi;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function ng(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function tc(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || ng, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = A.isURLSearchParams(t) ? t.toString() : new Fr(t, n).toString(s), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class sg {
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
  use(t, n, s) {
    return this.handlers.push({
      fulfilled: t,
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
    A.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const yi = sg, nc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rg = typeof URLSearchParams < "u" ? URLSearchParams : Fr, og = typeof FormData < "u" ? FormData : null, ig = typeof Blob < "u" ? Blob : null, ag = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rg,
    FormData: og,
    Blob: ig
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, sc = typeof window < "u" && typeof document < "u", cg = ((e) => sc && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), lg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: sc,
  hasStandardBrowserEnv: cg,
  hasStandardBrowserWebWorkerEnv: lg
}, Symbol.toStringTag, { value: "Module" })), Ie = {
  ...ug,
  ...ag
};
function fg(e, t) {
  return gs(e, new Ie.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, o, i) {
      return Ie.isNode && A.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function dg(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function hg(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const o = n.length;
  let i;
  for (s = 0; s < o; s++)
    i = n[s], t[i] = e[i];
  return t;
}
function rc(e) {
  function t(n, s, o, i) {
    let a = n[i++];
    const u = Number.isFinite(+a), l = i >= n.length;
    return a = !a && A.isArray(o) ? o.length : a, l ? (A.hasOwnProp(o, a) ? o[a] = [o[a], s] : o[a] = s, !u) : ((!o[a] || !A.isObject(o[a])) && (o[a] = []), t(n, s, o[a], i) && A.isArray(o[a]) && (o[a] = hg(o[a])), !u);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return A.forEachEntry(e, (s, o) => {
      t(dg(s), o, n, 0);
    }), n;
  }
  return null;
}
function pg(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const Hr = {
  transitional: nc,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, i = A.isObject(t);
    if (i && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t))
      return o && o ? JSON.stringify(rc(t)) : t;
    if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t))
      return t;
    if (A.isArrayBufferView(t))
      return t.buffer;
    if (A.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (i) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return fg(t, this.formSerializer).toString();
      if ((u = A.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return gs(
          u ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), pg(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Hr.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && A.isString(t) && (s && !this.responseType || o)) {
      const a = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (a)
          throw u.name === "SyntaxError" ? Y.from(u, Y.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
    FormData: Ie.classes.FormData,
    Blob: Ie.classes.Blob
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
A.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Hr.headers[e] = {};
});
const Wr = Hr, mg = A.toObjectSet([
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
]), gg = (e) => {
  const t = {};
  let n, s, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), s = a.substring(o + 1).trim(), !(!n || t[n] && mg[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, bi = Symbol("internals");
function an(e) {
  return e && String(e).trim().toLowerCase();
}
function Zn(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(Zn) : String(e);
}
function _g(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const Eg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Bs(e, t, n, s, o) {
  if (A.isFunction(s))
    return s.call(this, t, n);
  if (o && (t = n), !!A.isString(t)) {
    if (A.isString(s))
      return t.indexOf(s) !== -1;
    if (A.isRegExp(s))
      return s.test(t);
  }
}
function vg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function yg(e, t) {
  const n = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(o, i, a) {
        return this[s].call(this, t, o, i, a);
      },
      configurable: !0
    });
  });
}
class _s {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const o = this;
    function i(u, l, h) {
      const f = an(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = A.findKey(o, f);
      (!d || o[d] === void 0 || h === !0 || h === void 0 && o[d] !== !1) && (o[d || l] = Zn(u));
    }
    const a = (u, l) => A.forEach(u, (h, f) => i(h, f, l));
    return A.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : A.isString(t) && (t = t.trim()) && !Eg(t) ? a(gg(t), n) : t != null && i(n, t, s), this;
  }
  get(t, n) {
    if (t = an(t), t) {
      const s = A.findKey(this, t);
      if (s) {
        const o = this[s];
        if (!n)
          return o;
        if (n === !0)
          return _g(o);
        if (A.isFunction(n))
          return n.call(this, o, s);
        if (A.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = an(t), t) {
      const s = A.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || Bs(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let o = !1;
    function i(a) {
      if (a = an(a), a) {
        const u = A.findKey(s, a);
        u && (!n || Bs(s, s[u], u, n)) && (delete s[u], o = !0);
      }
    }
    return A.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, o = !1;
    for (; s--; ) {
      const i = n[s];
      (!t || Bs(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, s = {};
    return A.forEach(this, (o, i) => {
      const a = A.findKey(s, i);
      if (a) {
        n[a] = Zn(o), delete n[i];
        return;
      }
      const u = t ? vg(i) : String(i).trim();
      u !== i && delete n[i], n[u] = Zn(o), s[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (s, o) => {
      s != null && s !== !1 && (n[o] = t && A.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((o) => s.set(o)), s;
  }
  static accessor(t) {
    const s = (this[bi] = this[bi] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const u = an(a);
      s[u] || (yg(o, a), s[u] = !0);
    }
    return A.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
_s.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(_s.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
A.freezeMethods(_s);
const Ye = _s;
function Fs(e, t) {
  const n = this || Wr, s = t || n, o = Ye.from(s.headers);
  let i = s.data;
  return A.forEach(e, function(u) {
    i = u.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function oc(e) {
  return !!(e && e.__CANCEL__);
}
function Tn(e, t, n) {
  Y.call(this, e ?? "canceled", Y.ERR_CANCELED, t, n), this.name = "CanceledError";
}
A.inherits(Tn, Y, {
  __CANCEL__: !0
});
function bg(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new Y(
    "Request failed with status code " + n.status,
    [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const wg = Ie.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, o, i) {
      const a = [e + "=" + encodeURIComponent(t)];
      A.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), A.isString(s) && a.push("path=" + s), A.isString(o) && a.push("domain=" + o), i === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function Ag(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Og(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ic(e, t) {
  return e && !Ag(t) ? Og(e, t) : t;
}
const Tg = Ie.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let s;
    function o(i) {
      let a = i;
      return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
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
    return s = o(window.location.href), function(a) {
      const u = A.isString(a) ? o(a) : a;
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
function Sg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Cg(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const h = Date.now(), f = s[i];
    a || (a = h), n[o] = l, s[o] = h;
    let d = i, g = 0;
    for (; d !== o; )
      g += n[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), h - a < t)
      return;
    const _ = f && h - f;
    return _ ? Math.round(g * 1e3 / _) : void 0;
  };
}
function wi(e, t) {
  let n = 0;
  const s = Cg(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, u = i - n, l = s(u), h = i <= a;
    n = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: u,
      rate: l || void 0,
      estimated: l && a && h ? (a - i) / l : void 0,
      event: o
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const Ng = typeof XMLHttpRequest < "u", $g = Ng && function(e) {
  return new Promise(function(n, s) {
    let o = e.data;
    const i = Ye.from(e.headers).normalize();
    let { responseType: a, withXSRFToken: u } = e, l;
    function h() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let f;
    if (A.isFormData(o)) {
      if (Ie.hasStandardBrowserEnv || Ie.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((f = i.getContentType()) !== !1) {
        const [v, ...O] = f ? f.split(";").map((T) => T.trim()).filter(Boolean) : [];
        i.setContentType([v || "multipart/form-data", ...O].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", O = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(v + ":" + O));
    }
    const g = ic(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), tc(g, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function _() {
      if (!d)
        return;
      const v = Ye.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), T = {
        data: !a || a === "text" || a === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: v,
        config: e,
        request: d
      };
      bg(function(k) {
        n(k), h();
      }, function(k) {
        s(k), h();
      }, T), d = null;
    }
    if ("onloadend" in d ? d.onloadend = _ : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, d.onabort = function() {
      d && (s(new Y("Request aborted", Y.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      s(new Y("Network Error", Y.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let O = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const T = e.transitional || nc;
      e.timeoutErrorMessage && (O = e.timeoutErrorMessage), s(new Y(
        O,
        T.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
        e,
        d
      )), d = null;
    }, Ie.hasStandardBrowserEnv && (u && A.isFunction(u) && (u = u(e)), u || u !== !1 && Tg(g))) {
      const v = e.xsrfHeaderName && e.xsrfCookieName && wg.read(e.xsrfCookieName);
      v && i.set(e.xsrfHeaderName, v);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in d && A.forEach(i.toJSON(), function(O, T) {
      d.setRequestHeader(T, O);
    }), A.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), a && a !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", wi(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", wi(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (v) => {
      d && (s(!v || v.type ? new Tn(null, e, d) : v), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const E = Sg(g);
    if (E && Ie.protocols.indexOf(E) === -1) {
      s(new Y("Unsupported protocol " + E + ":", Y.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(o || null);
  });
}, pr = {
  http: Zm,
  xhr: $g
};
A.forEach(pr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ai = (e) => `- ${e}`, Pg = (e) => A.isFunction(e) || e === null || e === !1, ac = {
  getAdapter: (e) => {
    e = A.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let a;
      if (s = n, !Pg(n) && (s = pr[(a = String(n)).toLowerCase()], s === void 0))
        throw new Y(`Unknown adapter '${a}'`);
      if (s)
        break;
      o[a || "#" + i] = s;
    }
    if (!s) {
      const i = Object.entries(o).map(
        ([u, l]) => `adapter ${u} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? i.length > 1 ? `since :
` + i.map(Ai).join(`
`) : " " + Ai(i[0]) : "as no adapter specified";
      throw new Y(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: pr
};
function Hs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Tn(null, e);
}
function Oi(e) {
  return Hs(e), e.headers = Ye.from(e.headers), e.data = Fs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ac.getAdapter(e.adapter || Wr.adapter)(e).then(function(s) {
    return Hs(e), s.data = Fs.call(
      e,
      e.transformResponse,
      s
    ), s.headers = Ye.from(s.headers), s;
  }, function(s) {
    return oc(s) || (Hs(e), s && s.response && (s.response.data = Fs.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = Ye.from(s.response.headers))), Promise.reject(s);
  });
}
const Ti = (e) => e instanceof Ye ? e.toJSON() : e;
function Kt(e, t) {
  t = t || {};
  const n = {};
  function s(h, f, d) {
    return A.isPlainObject(h) && A.isPlainObject(f) ? A.merge.call({ caseless: d }, h, f) : A.isPlainObject(f) ? A.merge({}, f) : A.isArray(f) ? f.slice() : f;
  }
  function o(h, f, d) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(h))
        return s(void 0, h, d);
    } else
      return s(h, f, d);
  }
  function i(h, f) {
    if (!A.isUndefined(f))
      return s(void 0, f);
  }
  function a(h, f) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(h))
        return s(void 0, h);
    } else
      return s(void 0, f);
  }
  function u(h, f, d) {
    if (d in t)
      return s(h, f);
    if (d in e)
      return s(void 0, h);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: u,
    headers: (h, f) => o(Ti(h), Ti(f), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const d = l[f] || o, g = d(e[f], t[f], f);
    A.isUndefined(g) && d !== u || (n[f] = g);
  }), n;
}
const cc = "1.6.2", Ur = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ur[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Si = {};
Ur.transitional = function(t, n, s) {
  function o(i, a) {
    return "[Axios v" + cc + "] Transitional option '" + i + "'" + a + (s ? ". " + s : "");
  }
  return (i, a, u) => {
    if (t === !1)
      throw new Y(
        o(a, " has been removed" + (n ? " in " + n : "")),
        Y.ERR_DEPRECATED
      );
    return n && !Si[a] && (Si[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, a, u) : !0;
  };
};
function Rg(e, t, n) {
  if (typeof e != "object")
    throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let o = s.length;
  for (; o-- > 0; ) {
    const i = s[o], a = t[i];
    if (a) {
      const u = e[i], l = u === void 0 || a(u, i, e);
      if (l !== !0)
        throw new Y("option " + i + " must be " + l, Y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Y("Unknown option " + i, Y.ERR_BAD_OPTION);
  }
}
const mr = {
  assertOptions: Rg,
  validators: Ur
}, et = mr.validators;
class ss {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new yi(),
      response: new yi()
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
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Kt(this.defaults, n);
    const { transitional: s, paramsSerializer: o, headers: i } = n;
    s !== void 0 && mr.assertOptions(s, {
      silentJSONParsing: et.transitional(et.boolean),
      forcedJSONParsing: et.transitional(et.boolean),
      clarifyTimeoutError: et.transitional(et.boolean)
    }, !1), o != null && (A.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : mr.assertOptions(o, {
      encode: et.function,
      serialize: et.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = i && A.merge(
      i.common,
      i[n.method]
    );
    i && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (E) => {
        delete i[E];
      }
    ), n.headers = Ye.concat(a, i);
    const u = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous, u.unshift(v.fulfilled, v.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(v) {
      h.push(v.fulfilled, v.rejected);
    });
    let f, d = 0, g;
    if (!l) {
      const E = [Oi.bind(this), void 0];
      for (E.unshift.apply(E, u), E.push.apply(E, h), g = E.length, f = Promise.resolve(n); d < g; )
        f = f.then(E[d++], E[d++]);
      return f;
    }
    g = u.length;
    let _ = n;
    for (d = 0; d < g; ) {
      const E = u[d++], v = u[d++];
      try {
        _ = E(_);
      } catch (O) {
        v.call(this, O);
        break;
      }
    }
    try {
      f = Oi.call(this, _);
    } catch (E) {
      return Promise.reject(E);
    }
    for (d = 0, g = h.length; d < g; )
      f = f.then(h[d++], h[d++]);
    return f;
  }
  getUri(t) {
    t = Kt(this.defaults, t);
    const n = ic(t.baseURL, t.url);
    return tc(n, t.params, t.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(t) {
  ss.prototype[t] = function(n, s) {
    return this.request(Kt(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(i, a, u) {
      return this.request(Kt(u || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  ss.prototype[t] = n(), ss.prototype[t + "Form"] = n(!0);
});
const es = ss;
class zr {
  constructor(t) {
    if (typeof t != "function")
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
      const a = new Promise((u) => {
        s.subscribe(u), i = u;
      }).then(o);
      return a.cancel = function() {
        s.unsubscribe(i);
      }, a;
    }, t(function(i, a, u) {
      s.reason || (s.reason = new Tn(i, a, u), n(s.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new zr(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Dg = zr;
function Lg(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function kg(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const gr = {
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
Object.entries(gr).forEach(([e, t]) => {
  gr[t] = e;
});
const xg = gr;
function lc(e) {
  const t = new es(e), n = Wa(es.prototype.request, t);
  return A.extend(n, es.prototype, t, { allOwnKeys: !0 }), A.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return lc(Kt(e, o));
  }, n;
}
const ne = lc(Wr);
ne.Axios = es;
ne.CanceledError = Tn;
ne.CancelToken = Dg;
ne.isCancel = oc;
ne.VERSION = cc;
ne.toFormData = gs;
ne.AxiosError = Y;
ne.Cancel = ne.CanceledError;
ne.all = function(t) {
  return Promise.all(t);
};
ne.spread = Lg;
ne.isAxiosError = kg;
ne.mergeConfig = Kt;
ne.AxiosHeaders = Ye;
ne.formToJSON = (e) => rc(A.isHTMLForm(e) ? new FormData(e) : e);
ne.getAdapter = ac.getAdapter;
ne.HttpStatusCode = xg;
ne.default = ne;
const Ig = ne, Ci = (e) => {
  let t = !1, n;
  return () => (t || (t = !0, n = e()), n);
};
class _r {
  static isServer() {
    return typeof document > "u";
  }
}
function Mg(e) {
  const t = document.createElement("SCRIPT");
  if (typeof e != "object")
    throw new Error("options should  be an object");
  Array.prototype.isPrototypeOf(e.libraries) && (e.libraries = e.libraries.join(",")), e.v || (e.v = 3.47), e.callback = "vueGoogleMapsInit";
  let s = "https://maps.googleapis.com/maps/api/js?" + Object.keys(e).map((o) => encodeURIComponent(o) + "=" + encodeURIComponent(e[o])).join("&");
  return t.setAttribute("src", s), t.setAttribute("async", ""), t.setAttribute("defer", ""), t;
}
let Ni = !1;
function jg(e) {
  if (!_r.isServer()) {
    if (Ni)
      throw new Error("You already started the loading of google maps");
    {
      Ni = !0;
      const t = Mg(e);
      document.head.appendChild(t);
    }
  }
}
const uc = (e, t, n) => {
  for (let s of n) {
    const o = `on${s.charAt(0).toUpperCase()}${s.slice(1)}`.replace(/[-_]+(.)?/g, (i, a) => a ? a.toUpperCase() : "");
    e.$props[o] || e.$attrs[o] ? t.addListener(s, (i) => {
      e.$emit(s, i);
    }) : (e.$gmapOptions.autobindAllEvents || e.$attrs[s]) && t.addListener(s, (i) => {
      e.$emit(s, i);
    });
  }
};
function fc(e, t, n, s = !1) {
  let o = !1;
  function i() {
    o || (o = !0, e.$nextTick(() => {
      o = !1, n();
    }));
  }
  for (let a of t)
    e.$watch(a, i, { immediate: s });
}
class $i {
  static capitalizeFirstLetter(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
}
function rs(e, t) {
  return Object.keys(t).reduce((n, s) => (e[s] !== void 0 && (n[s] = e[s]), n), {});
}
function Kr(e, t, n) {
  for (let s in n) {
    let { twoWay: o, type: i, trackProperties: a, noBind: u } = n[s];
    if (u)
      continue;
    const l = "set" + $i.capitalizeFirstLetter(s), h = "get" + $i.capitalizeFirstLetter(s), f = s.toLowerCase() + "_changed", d = e[s];
    if (typeof t[l] > "u")
      throw new Error(
        `${l} is not a method of (the Maps object corresponding to) ${e.$options._componentTag}`
      );
    i !== Object || !a ? e.$watch(
      s,
      () => {
        const g = e[s];
        t[l](g);
      },
      {
        immediate: typeof d < "u",
        deep: i === Object
      }
    ) : fc(
      e,
      a.map((g) => `${s}.${g}`),
      () => {
        t[l](e[s]);
      },
      e[s] !== void 0
    ), o && (e.$gmapOptions.autobindAllEvents || e.$attrs[f]) && t.addListener(f, () => {
      e.$emit(f, t[h]());
    });
  }
}
const Vg = {
  inject: {
    $mapPromise: { default: "abcdef" }
  },
  provide() {
    return this.$mapPromise.then((e) => {
      this.$map = e;
    }), {};
  }
};
function ct(e) {
  const {
    mappedProps: t,
    name: n,
    ctr: s,
    ctrArgs: o,
    events: i,
    beforeCreate: a,
    afterCreate: u,
    props: l,
    ...h
  } = e, f = `$${n}Promise`, d = `$${n}Object`;
  return Bg(!(h.props instanceof Array), "`props` should be an object, not Array"), {
    ...typeof GENERATE_DOC < "u" ? { $vgmOptions: e } : {},
    mixins: [Vg],
    props: {
      ...l,
      ...Gr(t)
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
          ...rs(this, t)
        };
        if (delete E.options, a) {
          const v = a.bind(this)(E);
          if (v instanceof Promise)
            return v.then(() => ({ options: E }));
        }
        return { options: E };
      }).then(({ options: _ }) => {
        const E = s();
        return this[d] = o ? new (Function.prototype.bind.call(
          E,
          null,
          ...o(_, rs(this, l || {}))
        ))() : new E(_), Kr(this, this[d], t), uc(this, this[d], i), u && u.bind(this)(this[d]), this[d];
      });
      return this[f] = g, { [f]: g };
    },
    unmounted() {
      this[d] && this[d].setMap && this[d].setMap(null);
    },
    ...h
  };
}
function Bg(e, t) {
  if (!e)
    throw new Error(t);
}
function Gr(e) {
  return Object.entries(e).map(([t, n]) => {
    const s = {};
    return "type" in n && (s.type = n.type), "default" in n && (s.default = n.default), "required" in n && (s.required = n.required), [t, s];
  }).reduce((t, [n, s]) => (t[n] = s, t), {});
}
const Fg = {
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
}, Hg = [
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
], Wg = ct({
  mappedProps: Fg,
  props: {
    deepWatch: {
      type: Boolean,
      default: !1
    }
  },
  events: Hg,
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
          const n = this.$polylineObject.getPath(), s = [], o = () => {
            this.$emit("path_changed", this.$polylineObject.getPath());
          };
          s.push([n, n.addListener("insert_at", o)]), s.push([n, n.addListener("remove_at", o)]), s.push([n, n.addListener("set_at", o)]), e = () => {
            s.map(([i, a]) => google.maps.event.removeListener(a));
          };
        }
      },
      {
        deep: this.deepWatch,
        immediate: !0
      }
    );
  }
}), Ug = {
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
}, zg = [
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
], Kg = ct({
  props: {
    deepWatch: {
      type: Boolean,
      default: !1
    }
  },
  events: zg,
  mappedProps: Ug,
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
      (n) => {
        if (n) {
          t(), e.setPaths(n);
          const s = () => {
            this.$emit("paths_changed", e.getPaths());
          }, o = [], i = e.getPaths();
          for (let a = 0; a < i.getLength(); a++) {
            let u = i.getAt(a);
            o.push([u, u.addListener("insert_at", s)]), o.push([u, u.addListener("remove_at", s)]), o.push([u, u.addListener("set_at", s)]);
          }
          o.push([i, i.addListener("insert_at", s)]), o.push([i, i.addListener("remove_at", s)]), o.push([i, i.addListener("set_at", s)]), t = () => {
            o.map(([a, u]) => google.maps.event.removeListener(u));
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
          t(), e.setPaths(n);
          const s = e.getPath(), o = [], i = () => {
            this.$emit("path_changed", e.getPath());
          };
          o.push([s, s.addListener("insert_at", i)]), o.push([s, s.addListener("remove_at", i)]), o.push([s, s.addListener("set_at", i)]), t = () => {
            o.map(([a, u]) => google.maps.event.removeListener(u));
          };
        }
      },
      {
        deep: this.deepWatch,
        immediate: !0
      }
    );
  }
}), Gg = {
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
}, Yg = [
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
], qg = ct({
  mappedProps: Gg,
  name: "circle",
  ctr: () => google.maps.Circle,
  events: Yg
}), Jg = {
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
}, Xg = [
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
], Qg = ct({
  mappedProps: Jg,
  name: "rectangle",
  ctr: () => google.maps.Rectangle,
  events: Xg
}), Zg = {
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
}, Ws = [
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
], e_ = ct({
  mappedProps: Zg,
  events: Ws,
  name: "marker",
  ctr: () => google.maps.Marker,
  inject: {
    $clusterPromise: {
      default: null
    }
  },
  emits: Ws,
  unmounted() {
    this.$markerObject && (this.$clusterObject ? this.$clusterObject.removeMarker(this.$markerObject, !0) : this.$markerObject.setMap(null));
  },
  beforeCreate(e) {
    return this.$clusterPromise && (e.map = null), this.$clusterPromise;
  },
  afterCreate(e) {
    Ws.forEach((t) => {
      e.addListener(t, (n) => {
        this.$emit(t, n);
      });
    }), this.$clusterPromise && this.$clusterPromise.then((t) => {
      this.$clusterObject = t, t.addMarker(e);
    });
  }
});
function t_(e, t, n, s, o, i) {
  return qe(), At("div", {
    onClick: t[0] || (t[0] = () => {
      console.log("sdfsd");
    })
  }, [
    En(e.$slots, "default")
  ]);
}
const n_ = /* @__PURE__ */ at(e_, [["render", t_]]);
var s_ = function e(t, n) {
  if (t === n)
    return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor)
      return !1;
    var s, o, i;
    if (Array.isArray(t)) {
      if (s = t.length, s != n.length)
        return !1;
      for (o = s; o-- !== 0; )
        if (!e(t[o], n[o]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (i = Object.keys(t), s = i.length, s !== Object.keys(n).length)
      return !1;
    for (o = s; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, i[o]))
        return !1;
    for (o = s; o-- !== 0; ) {
      var a = i[o];
      if (!e(t[a], n[a]))
        return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const Pi = /* @__PURE__ */ hd(s_), Ri = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
], Us = 1, cn = 8;
class Yr {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(t) {
    if (!(t instanceof ArrayBuffer))
      throw new Error("Data must be an instance of ArrayBuffer.");
    const [n, s] = new Uint8Array(t, 0, 2);
    if (n !== 219)
      throw new Error("Data does not appear to be in a KDBush format.");
    const o = s >> 4;
    if (o !== Us)
      throw new Error(`Got v${o} data when expected v${Us}.`);
    const i = Ri[s & 15];
    if (!i)
      throw new Error("Unrecognized array type.");
    const [a] = new Uint16Array(t, 2, 1), [u] = new Uint32Array(t, 4, 1);
    return new Yr(u, a, i, t);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(t, n = 64, s = Float64Array, o) {
    if (isNaN(t) || t < 0)
      throw new Error(`Unpexpected numItems value: ${t}.`);
    this.numItems = +t, this.nodeSize = Math.min(Math.max(+n, 2), 65535), this.ArrayType = s, this.IndexArrayType = t < 65536 ? Uint16Array : Uint32Array;
    const i = Ri.indexOf(this.ArrayType), a = t * 2 * this.ArrayType.BYTES_PER_ELEMENT, u = t * this.IndexArrayType.BYTES_PER_ELEMENT, l = (8 - u % 8) % 8;
    if (i < 0)
      throw new Error(`Unexpected typed array class: ${s}.`);
    o && o instanceof ArrayBuffer ? (this.data = o, this.ids = new this.IndexArrayType(this.data, cn, t), this.coords = new this.ArrayType(this.data, cn + u + l, t * 2), this._pos = t * 2, this._finished = !0) : (this.data = new ArrayBuffer(cn + a + u + l), this.ids = new this.IndexArrayType(this.data, cn, t), this.coords = new this.ArrayType(this.data, cn + u + l, t * 2), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, (Us << 4) + i]), new Uint16Array(this.data, 2, 1)[0] = n, new Uint32Array(this.data, 4, 1)[0] = t);
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(t, n) {
    const s = this._pos >> 1;
    return this.ids[s] = s, this.coords[this._pos++] = t, this.coords[this._pos++] = n, s;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    const t = this._pos >> 1;
    if (t !== this.numItems)
      throw new Error(`Added ${t} items when expected ${this.numItems}.`);
    return Er(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(t, n, s, o) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: i, coords: a, nodeSize: u } = this, l = [0, i.length - 1, 0], h = [];
    for (; l.length; ) {
      const f = l.pop() || 0, d = l.pop() || 0, g = l.pop() || 0;
      if (d - g <= u) {
        for (let O = g; O <= d; O++) {
          const T = a[2 * O], C = a[2 * O + 1];
          T >= t && T <= s && C >= n && C <= o && h.push(i[O]);
        }
        continue;
      }
      const _ = g + d >> 1, E = a[2 * _], v = a[2 * _ + 1];
      E >= t && E <= s && v >= n && v <= o && h.push(i[_]), (f === 0 ? t <= E : n <= v) && (l.push(g), l.push(_ - 1), l.push(1 - f)), (f === 0 ? s >= E : o >= v) && (l.push(_ + 1), l.push(d), l.push(1 - f));
    }
    return h;
  }
  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(t, n, s) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: o, coords: i, nodeSize: a } = this, u = [0, o.length - 1, 0], l = [], h = s * s;
    for (; u.length; ) {
      const f = u.pop() || 0, d = u.pop() || 0, g = u.pop() || 0;
      if (d - g <= a) {
        for (let O = g; O <= d; O++)
          Di(i[2 * O], i[2 * O + 1], t, n) <= h && l.push(o[O]);
        continue;
      }
      const _ = g + d >> 1, E = i[2 * _], v = i[2 * _ + 1];
      Di(E, v, t, n) <= h && l.push(o[_]), (f === 0 ? t - s <= E : n - s <= v) && (u.push(g), u.push(_ - 1), u.push(1 - f)), (f === 0 ? t + s >= E : n + s >= v) && (u.push(_ + 1), u.push(d), u.push(1 - f));
    }
    return l;
  }
}
function Er(e, t, n, s, o, i) {
  if (o - s <= n)
    return;
  const a = s + o >> 1;
  dc(e, t, a, s, o, i), Er(e, t, n, s, a - 1, 1 - i), Er(e, t, n, a + 1, o, 1 - i);
}
function dc(e, t, n, s, o, i) {
  for (; o > s; ) {
    if (o - s > 600) {
      const h = o - s + 1, f = n - s + 1, d = Math.log(h), g = 0.5 * Math.exp(2 * d / 3), _ = 0.5 * Math.sqrt(d * g * (h - g) / h) * (f - h / 2 < 0 ? -1 : 1), E = Math.max(s, Math.floor(n - f * g / h + _)), v = Math.min(o, Math.floor(n + (h - f) * g / h + _));
      dc(e, t, n, E, v, i);
    }
    const a = t[2 * n + i];
    let u = s, l = o;
    for (ln(e, t, s, n), t[2 * o + i] > a && ln(e, t, s, o); u < l; ) {
      for (ln(e, t, u, l), u++, l--; t[2 * u + i] < a; )
        u++;
      for (; t[2 * l + i] > a; )
        l--;
    }
    t[2 * s + i] === a ? ln(e, t, s, l) : (l++, ln(e, t, l, o)), l <= n && (s = l + 1), n <= l && (o = l - 1);
  }
}
function ln(e, t, n, s) {
  zs(e, n, s), zs(t, 2 * n, 2 * s), zs(t, 2 * n + 1, 2 * s + 1);
}
function zs(e, t, n) {
  const s = e[t];
  e[t] = e[n], e[n] = s;
}
function Di(e, t, n, s) {
  const o = e - n, i = t - s;
  return o * o + i * i;
}
const r_ = {
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
}, Li = Math.fround || /* @__PURE__ */ ((e) => (t) => (e[0] = +t, e[0]))(new Float32Array(1)), gt = 2, st = 3, Ks = 4, tt = 5, hc = 6;
class o_ {
  constructor(t) {
    this.options = Object.assign(Object.create(r_), t), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
  }
  load(t) {
    const { log: n, minZoom: s, maxZoom: o } = this.options;
    n && console.time("total time");
    const i = `prepare ${t.length} points`;
    n && console.time(i), this.points = t;
    const a = [];
    for (let l = 0; l < t.length; l++) {
      const h = t[l];
      if (!h.geometry)
        continue;
      const [f, d] = h.geometry.coordinates, g = Li(Kn(f)), _ = Li(Gn(d));
      a.push(
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
      ), this.options.reduce && a.push(0);
    }
    let u = this.trees[o + 1] = this._createTree(a);
    n && console.timeEnd(i);
    for (let l = o; l >= s; l--) {
      const h = +Date.now();
      u = this.trees[l] = this._createTree(this._cluster(u, l)), n && console.log("z%d: %d clusters in %dms", l, u.numItems, +Date.now() - h);
    }
    return n && console.timeEnd("total time"), this;
  }
  getClusters(t, n) {
    let s = ((t[0] + 180) % 360 + 360) % 360 - 180;
    const o = Math.max(-90, Math.min(90, t[1]));
    let i = t[2] === 180 ? 180 : ((t[2] + 180) % 360 + 360) % 360 - 180;
    const a = Math.max(-90, Math.min(90, t[3]));
    if (t[2] - t[0] >= 360)
      s = -180, i = 180;
    else if (s > i) {
      const d = this.getClusters([s, o, 180, a], n), g = this.getClusters([-180, o, i, a], n);
      return d.concat(g);
    }
    const u = this.trees[this._limitZoom(n)], l = u.range(Kn(s), Gn(a), Kn(i), Gn(o)), h = u.data, f = [];
    for (const d of l) {
      const g = this.stride * d;
      f.push(h[g + tt] > 1 ? ki(h, g, this.clusterProps) : this.points[h[g + st]]);
    }
    return f;
  }
  getChildren(t) {
    const n = this._getOriginId(t), s = this._getOriginZoom(t), o = "No cluster with the specified id.", i = this.trees[s];
    if (!i)
      throw new Error(o);
    const a = i.data;
    if (n * this.stride >= a.length)
      throw new Error(o);
    const u = this.options.radius / (this.options.extent * Math.pow(2, s - 1)), l = a[n * this.stride], h = a[n * this.stride + 1], f = i.within(l, h, u), d = [];
    for (const g of f) {
      const _ = g * this.stride;
      a[_ + Ks] === t && d.push(a[_ + tt] > 1 ? ki(a, _, this.clusterProps) : this.points[a[_ + st]]);
    }
    if (d.length === 0)
      throw new Error(o);
    return d;
  }
  getLeaves(t, n, s) {
    n = n || 10, s = s || 0;
    const o = [];
    return this._appendLeaves(o, t, n, s, 0), o;
  }
  getTile(t, n, s) {
    const o = this.trees[this._limitZoom(t)], i = Math.pow(2, t), { extent: a, radius: u } = this.options, l = u / a, h = (s - l) / i, f = (s + 1 + l) / i, d = {
      features: []
    };
    return this._addTileFeatures(
      o.range((n - l) / i, h, (n + 1 + l) / i, f),
      o.data,
      n,
      s,
      i,
      d
    ), n === 0 && this._addTileFeatures(
      o.range(1 - l / i, h, 1, f),
      o.data,
      i,
      s,
      i,
      d
    ), n === i - 1 && this._addTileFeatures(
      o.range(0, h, l / i, f),
      o.data,
      -1,
      s,
      i,
      d
    ), d.features.length ? d : null;
  }
  getClusterExpansionZoom(t) {
    let n = this._getOriginZoom(t) - 1;
    for (; n <= this.options.maxZoom; ) {
      const s = this.getChildren(t);
      if (n++, s.length !== 1)
        break;
      t = s[0].properties.cluster_id;
    }
    return n;
  }
  _appendLeaves(t, n, s, o, i) {
    const a = this.getChildren(n);
    for (const u of a) {
      const l = u.properties;
      if (l && l.cluster ? i + l.point_count <= o ? i += l.point_count : i = this._appendLeaves(t, l.cluster_id, s, o, i) : i < o ? i++ : t.push(u), t.length === s)
        break;
    }
    return i;
  }
  _createTree(t) {
    const n = new Yr(t.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let s = 0; s < t.length; s += this.stride)
      n.add(t[s], t[s + 1]);
    return n.finish(), n.data = t, n;
  }
  _addTileFeatures(t, n, s, o, i, a) {
    for (const u of t) {
      const l = u * this.stride, h = n[l + tt] > 1;
      let f, d, g;
      if (h)
        f = pc(n, l, this.clusterProps), d = n[l], g = n[l + 1];
      else {
        const v = this.points[n[l + st]];
        f = v.properties;
        const [O, T] = v.geometry.coordinates;
        d = Kn(O), g = Gn(T);
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
      h || this.options.generateId ? E = n[l + st] : E = this.points[n[l + st]].id, E !== void 0 && (_.id = E), a.features.push(_);
    }
  }
  _limitZoom(t) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+t), this.options.maxZoom + 1));
  }
  _cluster(t, n) {
    const { radius: s, extent: o, reduce: i, minPoints: a } = this.options, u = s / (o * Math.pow(2, n)), l = t.data, h = [], f = this.stride;
    for (let d = 0; d < l.length; d += f) {
      if (l[d + gt] <= n)
        continue;
      l[d + gt] = n;
      const g = l[d], _ = l[d + 1], E = t.within(l[d], l[d + 1], u), v = l[d + tt];
      let O = v;
      for (const T of E) {
        const C = T * f;
        l[C + gt] > n && (O += l[C + tt]);
      }
      if (O > v && O >= a) {
        let T = g * v, C = _ * v, k, x = -1;
        const j = ((d / f | 0) << 5) + (n + 1) + this.points.length;
        for (const V of E) {
          const R = V * f;
          if (l[R + gt] <= n)
            continue;
          l[R + gt] = n;
          const Q = l[R + tt];
          T += l[R] * Q, C += l[R + 1] * Q, l[R + Ks] = j, i && (k || (k = this._map(l, d, !0), x = this.clusterProps.length, this.clusterProps.push(k)), i(k, this._map(l, R)));
        }
        l[d + Ks] = j, h.push(T / O, C / O, 1 / 0, j, -1, O), i && h.push(x);
      } else {
        for (let T = 0; T < f; T++)
          h.push(l[d + T]);
        if (O > 1)
          for (const T of E) {
            const C = T * f;
            if (!(l[C + gt] <= n)) {
              l[C + gt] = n;
              for (let k = 0; k < f; k++)
                h.push(l[C + k]);
            }
          }
      }
    }
    return h;
  }
  // get index of the point from which the cluster originated
  _getOriginId(t) {
    return t - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(t) {
    return (t - this.points.length) % 32;
  }
  _map(t, n, s) {
    if (t[n + tt] > 1) {
      const a = this.clusterProps[t[n + hc]];
      return s ? Object.assign({}, a) : a;
    }
    const o = this.points[t[n + st]].properties, i = this.options.map(o);
    return s && i === o ? Object.assign({}, i) : i;
  }
}
function ki(e, t, n) {
  return {
    type: "Feature",
    id: e[t + st],
    properties: pc(e, t, n),
    geometry: {
      type: "Point",
      coordinates: [i_(e[t]), a_(e[t + 1])]
    }
  };
}
function pc(e, t, n) {
  const s = e[t + tt], o = s >= 1e4 ? `${Math.round(s / 1e3)}k` : s >= 1e3 ? `${Math.round(s / 100) / 10}k` : s, i = e[t + hc], a = i === -1 ? {} : Object.assign({}, n[i]);
  return Object.assign(a, {
    cluster: !0,
    cluster_id: e[t + st],
    point_count: s,
    point_count_abbreviated: o
  });
}
function Kn(e) {
  return e / 360 + 0.5;
}
function Gn(e) {
  const t = Math.sin(e * Math.PI / 180), n = 0.5 - 0.25 * Math.log((1 + t) / (1 - t)) / Math.PI;
  return n < 0 ? 0 : n > 1 ? 1 : n;
}
function i_(e) {
  return (e - 0.5) * 360;
}
function a_(e) {
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
function c_(e, t) {
  var n = {};
  for (var s in e)
    Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(e); o < s.length; o++)
      t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]]);
  return n;
}
class _e {
  static isAdvancedMarkerAvailable(t) {
    return google.maps.marker && t.getMapCapabilities().isAdvancedMarkersAvailable === !0;
  }
  static isAdvancedMarker(t) {
    return google.maps.marker && t instanceof google.maps.marker.AdvancedMarkerElement;
  }
  static setMap(t, n) {
    this.isAdvancedMarker(t) ? t.map = n : t.setMap(n);
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
class vr {
  constructor({ markers: t, position: n }) {
    this.markers = t, n && (n instanceof google.maps.LatLng ? this._position = n : this._position = new google.maps.LatLng(n));
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position)
      return;
    const t = new google.maps.LatLngBounds(this._position, this._position);
    for (const n of this.markers)
      t.extend(_e.getPosition(n));
    return t;
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter((t) => _e.getVisible(t)).length;
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
    this.marker && (_e.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
  }
}
class l_ {
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
    return u_(t);
  }
}
const u_ = (e) => e.map((n) => new vr({
  position: _e.getPosition(n),
  markers: [n]
}));
class f_ extends l_ {
  constructor(t) {
    var { maxZoom: n, radius: s = 60 } = t, o = c_(t, ["maxZoom", "radius"]);
    super({ maxZoom: n }), this.state = { zoom: -1 }, this.superCluster = new o_(Object.assign({ maxZoom: this.maxZoom, radius: s }, o));
  }
  calculate(t) {
    let n = !1;
    const s = { zoom: t.map.getZoom() };
    if (!Pi(t.markers, this.markers)) {
      n = !0, this.markers = [...t.markers];
      const o = this.markers.map((i) => {
        const a = _e.getPosition(i);
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [a.lng(), a.lat()]
          },
          properties: { marker: i }
        };
      });
      this.superCluster.load(o);
    }
    return n || (this.state.zoom <= this.maxZoom || s.zoom <= this.maxZoom) && (n = !Pi(this.state, s)), this.state = s, n && (this.clusters = this.cluster(t)), { clusters: this.clusters, changed: n };
  }
  cluster({ map: t }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(t.getZoom())).map((n) => this.transformCluster(n));
  }
  transformCluster({ geometry: { coordinates: [t, n] }, properties: s }) {
    if (s.cluster)
      return new vr({
        markers: this.superCluster.getLeaves(s.cluster_id, 1 / 0).map((i) => i.properties.marker),
        position: { lat: n, lng: t }
      });
    const o = s.marker;
    return new vr({
      markers: [o],
      position: _e.getPosition(o)
    });
  }
}
class d_ {
  constructor(t, n) {
    this.markers = { sum: t.length };
    const s = n.map((i) => i.count), o = s.reduce((i, a) => i + a, 0);
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
class h_ {
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
  render({ count: t, position: n }, s, o) {
    const a = `<svg fill="${t > Math.max(10, s.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${t}</text>
</svg>`, u = `Cluster of ${t} markers`, l = Number(google.maps.Marker.MAX_ZINDEX) + t;
    if (_e.isAdvancedMarkerAvailable(o)) {
      const d = new DOMParser().parseFromString(a, "image/svg+xml").documentElement;
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
    const h = {
      position: n,
      zIndex: l,
      title: u,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(a)}`,
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(h);
  }
}
function p_(e, t) {
  for (let n in t.prototype)
    e.prototype[n] = t.prototype[n];
}
class qr {
  constructor() {
    p_(qr, google.maps.OverlayView);
  }
}
var gn;
(function(e) {
  e.CLUSTERING_BEGIN = "clusteringbegin", e.CLUSTERING_END = "clusteringend", e.CLUSTER_CLICK = "click";
})(gn || (gn = {}));
const m_ = (e, t, n) => {
  n.fitBounds(t.bounds);
};
class xi extends qr {
  constructor({ map: t, markers: n = [], algorithmOptions: s = {}, algorithm: o = new f_(s), renderer: i = new h_(), onClusterClick: a = m_ }) {
    super(), this.markers = [...n], this.clusters = [], this.algorithm = o, this.renderer = i, this.onClusterClick = a, t && this.setMap(t);
  }
  addMarker(t, n) {
    this.markers.includes(t) || (this.markers.push(t), n || this.render());
  }
  addMarkers(t, n) {
    t.forEach((s) => {
      this.addMarker(s, !0);
    }), n || this.render();
  }
  removeMarker(t, n) {
    const s = this.markers.indexOf(t);
    return s === -1 ? !1 : (_e.setMap(t, null), this.markers.splice(s, 1), n || this.render(), !0);
  }
  removeMarkers(t, n) {
    let s = !1;
    return t.forEach((o) => {
      s = this.removeMarker(o, !0) || s;
    }), s && !n && this.render(), s;
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
      google.maps.event.trigger(this, gn.CLUSTERING_BEGIN, this);
      const { clusters: n, changed: s } = this.algorithm.calculate({
        markers: this.markers,
        map: t,
        mapCanvasProjection: this.getProjection()
      });
      if (s || s == null) {
        const o = /* @__PURE__ */ new Set();
        for (const a of n)
          a.markers.length == 1 && o.add(a.markers[0]);
        const i = [];
        for (const a of this.clusters)
          a.marker != null && (a.markers.length == 1 ? o.has(a.marker) || _e.setMap(a.marker, null) : i.push(a.marker));
        this.clusters = n, this.renderClusters(), requestAnimationFrame(() => i.forEach((a) => _e.setMap(a, null)));
      }
      google.maps.event.trigger(this, gn.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener), this.reset();
  }
  reset() {
    this.markers.forEach((t) => _e.setMap(t, null)), this.clusters.forEach((t) => t.delete()), this.clusters = [];
  }
  renderClusters() {
    const t = new d_(this.markers, this.clusters), n = this.getMap();
    this.clusters.forEach((s) => {
      s.markers.length === 1 ? s.marker = s.markers[0] : (s.marker = this.renderer.render(s, t, n), s.markers.forEach((o) => _e.setMap(o, null)), this.onClusterClick && s.marker.addListener(
        "click",
        /* istanbul ignore next */
        (o) => {
          google.maps.event.trigger(this, gn.CLUSTER_CLICK, s), this.onClusterClick(o, s, n);
        }
      )), _e.setMap(s.marker, n);
    });
  }
}
const Gs = {
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
}, g_ = [
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
], __ = ct({
  mappedProps: Gs,
  events: g_,
  name: "cluster",
  ctr: () => {
    if (typeof xi > "u") {
      const e = "MarkerClusterer is not installed!";
      throw console.error(e), new Error(e);
    }
    return xi;
  },
  ctrArgs: ({ map: e, ...t }) => [e, [], t],
  afterCreate(e) {
    const t = () => {
      const n = e.getMarkers();
      e.clearMarkers(), e.addMarkers(n);
    };
    for (let n in Gs)
      Gs[n].twoWay && this.$on(n.toLowerCase() + "_changed", t);
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
function E_(e, t, n, s, o, i) {
  return qe(), At("div", null, [
    En(e.$slots, "default")
  ]);
}
const v_ = /* @__PURE__ */ at(__, [["render", E_]]), y_ = {
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
}, b_ = ["domready", "click", "closeclick", "content_changed"], w_ = ct({
  mappedProps: y_,
  events: b_,
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
}), A_ = { ref: "infoWindow" };
function O_(e, t, n, s, o, i) {
  return qe(), At("div", A_, [
    En(e.$slots, "default")
  ], 512);
}
const T_ = /* @__PURE__ */ at(w_, [["render", O_]]), S_ = {
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
function C_(e) {
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
const Ys = {
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
}, Ii = [
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
], N_ = ["panBy", "panTo", "panToBounds", "fitBounds"].reduce((e, t) => (e[t] = function() {
  this.$mapObject && this.$mapObject[t].apply(this.$mapObject, arguments);
}, e), {}), $_ = {
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
}, P_ = {
  mixins: [S_],
  props: Gr({ ...Ys, ...Ii.reduce((e, t) => ({ ...e, [`on${t.charAt(0).toUpperCase()}${t.slice(1)}`.replace(/[-_]+(.)?/g, (n, s) => s ? s.toUpperCase() : "")]: Function }), {}) }),
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
        ...rs(this, Ys)
      };
      return delete t.options, this.$mapObject = new google.maps.Map(e, t), Kr(this, this.$mapObject, Ys), uc(this, this.$mapObject, Ii), C_((n, s, o) => {
        this.$mapObject.addListener("center_changed", () => {
          o() && this.$emit("center_changed", this.$mapObject.getCenter()), s();
        }), fc(this, ["finalLat", "finalLng"], () => {
          n(), this.$mapObject.setCenter(this.finalLatLng);
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
    ...$_,
    ...N_
  }
}, R_ = { class: "vue-map-hidden" };
function D_(e, t, n, s, o, i) {
  return qe(), At("div", {
    class: wr(["vue-map-container", e.$attrs.class])
  }, [
    ue("div", {
      ref: "vue-map",
      class: "vue-map",
      style: ld(e.$attrs.style ? e.$attrs.style : "")
    }, null, 4),
    ue("div", R_, [
      En(e.$slots, "default")
    ]),
    En(e.$slots, "visible")
  ], 2);
}
const L_ = /* @__PURE__ */ at(P_, [["render", D_]]), k_ = {
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
}, x_ = [], I_ = ct({
  mappedProps: k_,
  name: "heatmap",
  ctr: () => google.maps.visualization.HeatmapLayer,
  events: x_
}), M_ = (e) => {
  const t = e.addEventListener ? e.addEventListener : e.attachEvent;
  function n(s, o) {
    if (s === "keydown") {
      const i = o;
      o = function(a) {
        const u = document.getElementsByClassName("pac-item-selected").length > 0;
        if (a.which === 13 && !u) {
          const l = document.createEvent("Event");
          l.keyCode = 40, l.which = 40, i.apply(e, [l]);
        }
        i.apply(e, [a]);
      };
    }
    t.apply(e, [s, o]);
  }
  e.addEventListener = n, e.attachEvent = n;
}, qs = {
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
}, j_ = {
  selectFirstOnEnter: {
    required: !1,
    type: Boolean,
    default: !1
  },
  options: {
    type: Object
  }
}, V_ = {
  mounted() {
    this.$gmapApiPromiseLazy().then(() => {
      if (this.selectFirstOnEnter && M_(this.$refs.input), typeof google.maps.places.Autocomplete != "function")
        throw new Error(
          "google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?"
        );
      const e = {
        ...rs(this, qs),
        ...this.options
      };
      this.$autocomplete = new google.maps.places.Autocomplete(this.$refs.input, e), Kr(this, this.$autocomplete, qs), this.$watch("componentRestrictions", (t) => {
        t !== void 0 && this.$autocomplete.setComponentRestrictions(t);
      }), this.$autocomplete.addListener("place_changed", () => {
        this.$emit("place_changed", this.$autocomplete.getPlace());
      });
    });
  },
  props: {
    ...Gr(qs),
    ...j_
  }
};
function B_(e, t, n, s, o, i) {
  return qe(), At("input", ud({ ref: "input" }, e.$attrs, fd(e.$attrs, !0)), null, 16);
}
const F_ = /* @__PURE__ */ at(V_, [["render", B_]]);
let mc = null;
function H_(e, t) {
  t = {
    installComponents: !0,
    autobindAllEvents: !1,
    ...t
  }, mc = Qs({
    data: function() {
      return { gmapApi: null };
    }
  });
  const n = Qs();
  let s = W_(t);
  e.mixin({
    created() {
      this.$gmapDefaultResizeBus = n, this.$gmapOptions = t, this.$gmapApiPromiseLazy = s;
    }
  }), e.$gmapDefaultResizeBus = n, e.$gmapApiPromiseLazy = s, t.installComponents && (e.component("GMapMap", L_), e.component("GMapMarker", n_), e.component("GMapInfoWindow", T_), e.component("GMapCluster", v_), e.component("GMapPolyline", Wg), e.component("GMapPolygon", Kg), e.component("GMapCircle", qg), e.component("GMapRectangle", Qg), e.component("GMapAutocomplete", F_), e.component("GMapHeatmap", I_));
}
function W_(e) {
  function t() {
    return mc.gmapApi = {}, window.google;
  }
  if (e.load)
    return Ci(() => _r.isServer() ? new Promise(() => {
    }).then(t) : new Promise((n, s) => {
      try {
        window.vueGoogleMapsInit = n, jg(e.load);
      } catch (o) {
        s(o);
      }
    }).then(t));
  {
    const n = new Promise((s) => {
      _r.isServer() || (window.vueGoogleMapsInit = s);
    }).then(t);
    return Ci(() => n);
  }
}
const qt = Qs(ah), gc = Dh();
qt.use(Em);
qt.use(gc);
qt.config.globalProperties.$store = gc;
qt.config.globalProperties.$axios = Ig;
qt.use(H_, {
  load: {
    key: "AIzaSyA7cMwNKdFcVybV9YjvnvPhJ2sEBpoCQlQ"
  }
});
function U_(e) {
  qt.mount(e);
}
window.mountWidget = U_;
const z_ = "production";
console.log("Current Widget Mode:", z_);
export {
  at as _,
  dd as c,
  hd as g,
  Ha as u
};

(function(e, n) {
    typeof exports == "object" && typeof module < "u" ? n(require("vue")) : typeof define == "function" && define.amd ? define(["vue"], n) : (e = typeof globalThis < "u" ? globalThis : e || self, n(e.Vue))
})(this, function(e) {
    "use strict";
    const n = (t, o) => {
            const c = t.__vccOpts || t;
            for (const [f, p] of o) c[f] = p;
            return c
        },
        i = {};

    function r(t, o) {
        return e.openBlock(), e.createElementBlock("h1", null, "widget test")
    }
    const s = n(i, [
        ["render", r]
    ]);
    window.renderMyWidget = (t, o) => {
        e.createApp(s, o).mount(t)
    }
});
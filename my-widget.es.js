import { ref as c, openBlock as i, createElementBlock as p, createElementVNode as a, toDisplayString as r, createApp as _ } from "vue";
const l = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
}, u = { class: "widget-container" }, d = {
  __name: "App",
  setup(t) {
    const o = c("My Widget Title"), e = c("This is a message from the Vue.js widget.");
    return (n, s) => (i(), p("div", u, [
      a("h1", null, r(o.value), 1),
      a("p", null, r(e.value), 1)
    ]));
  }
}, m = /* @__PURE__ */ l(d, [["__scopeId", "data-v-bb870ad6"]]);
function g(t) {
  _(m).mount(t);
}
window.mountWidget = g;

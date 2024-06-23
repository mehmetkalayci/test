import { ref as n, openBlock as p, createElementBlock as _, createElementVNode as a, toDisplayString as r, createApp as l } from "vue";
const i = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, c] of o)
    e[s] = c;
  return e;
}, m = { class: "widget-container" }, u = {
  __name: "App",
  setup(t) {
    const o = n("My Widget Title"), e = n("This is a message from the Vue.js widget.");
    return (s, c) => (p(), _("div", m, [
      a("h1", null, r(o.value), 1),
      a("p", null, r(e.value), 1)
    ]));
  }
}, d = /* @__PURE__ */ i(u, [["__scopeId", "data-v-bb870ad6"]]);
l(d).mount("#app");

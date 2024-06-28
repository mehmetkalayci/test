import { openBlock as r, createElementBlock as p, createApp as s } from "vue";
const _ = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [c, o] of e)
    n[c] = o;
  return n;
}, a = {};
function d(t, e) {
  return r(), p("h1", null, "widget test");
}
const f = /* @__PURE__ */ _(a, [["render", d]]);
window.renderMyWidget = (t, e) => {
  s(f, e).mount(t);
};

import { openBlock as o, createElementBlock as n, Fragment as r, createElementVNode as e, normalizeClass as c, renderList as d } from "vue";
import { _ as g } from "./widget-HSsCATie.js";
const u = {
  data() {
    return {
      selectedImage: "",
      lightboxStatus: !1
    };
  },
  created() {
  },
  methods: {
    changeSelectedImage(s) {
      this.selectedImage = s;
    },
    galleryItemOpen(s) {
      this.selectedImage = s, this.lightboxStatus = !0, document.querySelector(".gallery").style.overflow = "hidden";
    },
    galleryItemClose() {
      this.lightboxStatus = !1, document.querySelector(".gallery").style.overflow = "auto";
    }
  }
}, h = /* @__PURE__ */ e("i", { class: "bi bi-x" }, null, -1), _ = [
  h
], b = ["src"], f = { class: "lighbox-imageList" }, p = ["onClick"], y = /* @__PURE__ */ e("img", { src: "https://smart-makieta-3destate-embed.azureedge.net/assets/6b248da8-fe5e-4253-8fae-b443c131c970/minimaps/D2-01-0-512x512-Medium.png" }, null, -1), x = [
  y
], I = { class: "gallery" }, k = /* @__PURE__ */ e("img", { src: "https://smart-makieta-3destate-embed.azureedge.net/assets/6b248da8-fe5e-4253-8fae-b443c131c970/minimaps/D2-01-0-512x512-Medium.png" }, null, -1), v = [
  k
];
function C(s, l, S, w, i, a) {
  return o(), n(r, null, [
    e("div", {
      class: c(`lightbox ${i.lightboxStatus ? "show" : "lightbox"}`)
    }, [
      e("div", {
        class: "closeButton",
        onClick: l[0] || (l[0] = (...t) => a.galleryItemClose && a.galleryItemClose(...t))
      }, _),
      e("img", { src: i.selectedImage }, null, 8, b),
      e("div", f, [
        (o(), n(r, null, d(10, (t) => e("div", {
          key: t,
          class: c(`lighbox-imageList-item ${t == i.selectedImage ? "selected" : ""}`),
          onClick: (m) => a.changeSelectedImage(t)
        }, x, 10, p)), 64))
      ])
    ], 2),
    e("div", I, [
      (o(), n(r, null, d(10, (t) => e("div", {
        class: "gallery-item",
        key: t,
        onClick: l[1] || (l[1] = (m) => a.galleryItemOpen("https://smart-makieta-3destate-embed.azureedge.net/assets/6b248da8-fe5e-4253-8fae-b443c131c970/minimaps/D2-01-0-512x512-Medium.png"))
      }, v)), 64))
    ])
  ], 64);
}
const D = /* @__PURE__ */ g(u, [["render", C]]);
export {
  D as default
};

import { openBlock as r, createElementBlock as o, createElementVNode as e, Fragment as y, renderList as f, createStaticVNode as m, resolveComponent as a, createVNode as c, withCtx as u, createBlock as b } from "vue";
import { _ as n } from "./main-nHmfA-kE.js";
const w = {
  components: {},
  data() {
    return {
      filterPanelStatus: !0,
      filterMoreStatus: !1,
      listViewType: "list"
    };
  },
  methods: {
    hamburgerMenuToggle() {
      this.hamburgerMenu = !this.hamburgerMenu;
    },
    filterMoreOptionToggle() {
      this.filterMoreStatus = !this.filterMoreStatus;
    },
    filterPanelToggle() {
      this.filterPanelStatus = !this.filterPanelStatus;
    },
    listViewTypeToggle(t) {
      this.listViewType = t;
    }
  }
}, T = { class: "viewer_right" }, k = { class: "viewer_right-location-panel" }, x = /* @__PURE__ */ e("div", { class: "viewer_right_head border-bottom-1" }, [
  /* @__PURE__ */ e("div", { class: "viewer_right_head_title" }, "Konum")
], -1), M = { class: "viewer_right_container" }, $ = { class: "viewer_right_calc-route" }, C = /* @__PURE__ */ m('<div class="viewer_right_calc-route-title">Rota Hesapla</div><div class="viewer_right_location-search"><div class="viewer_right_location-search-origin"><div class="viewer_right_location-search-graphic"><div class="viewer_right_location-search-graphic-icon-start"></div><div class="viewer_right_location-search-graphic-dot"></div><div class="viewer_right_location-search-graphic-dot"></div><div class="viewer_right_location-search-graphic-dot"></div><div class="viewer_right_location-search-graphic-dot"></div><div class="viewer_right_location-search-graphic-dot"></div><div class="viewer_right_location-search-graphic-icon-end"><i class="bi bi bi-geo-alt-fill" style="transform:rotateZ(180deg);position:absolute;left:-1px;bottom:-27px;"></i></div></div><div class="viewer_right_location-search-origin-title">3D Proje</div><div class="viewer_right_location-search-origin-address"> Atatürk Blv., Kadıköy/İstanbul </div></div><div class="viewer_right_location-search-target"><div class="input-group"><input class="form-control mr-sm-2" type="search" placeholder="Ara" aria-label="Search"><button class="btn btn-secondary my-2 my-sm-0" type="submit">Ara</button></div><div class="viewer_right_location-search-target-divider"><div class="viewer_right_location-search-target-divider-line"></div><div class="viewer_right_location-search-target-divider-label">yada</div><div class="viewer_right_location-search-target-divider-line"></div></div><div class="viewer_right_location-search-target-select-point"><div class="viewer_right_location-search-target-select-point-icon"><i class="bi bi-crosshair"></i></div><div class="viewer_right_location-search-target-select-point-label"> Mevcut konumunuzu kullanın </div></div></div></div><div class="viewer_right_calc-route-title">Yakındaki Yerleri Filtrele</div>', 3), V = { class: "viewer_right_location-marker-types" }, A = /* @__PURE__ */ m('<div class="viewer_right_location-market-type-icon"><img class="viewer_right_location-marker-type-icon-img" src="https://smart-makieta-3destate-embed.azureedge.net/assets/6b248da8-fe5e-4253-8fae-b443c131c970/assets/location-icons/GaleriaHandlowa.png"></div><div class="viewer_right_location-markere-type-content"><div class="viewer_right_location-marker-type-content-title">shopping call</div></div><div class="viewer_right_location-marker-type-switch"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></div></div>', 3), S = [
  A
];
function P(t, d, p, v, i, _) {
  return r(), o("div", T, [
    e("div", k, [
      x,
      e("div", M, [
        e("div", $, [
          C,
          e("div", V, [
            (r(), o(y, null, f(20, (s) => e("div", {
              class: "viewer_right_location-marker-type",
              key: s
            }, S)), 64))
          ])
        ])
      ])
    ])
  ]);
}
const G = /* @__PURE__ */ n(w, [["render", P]]), z = {
  props: [],
  created() {
  },
  methods: {},
  watch: {},
  mounted() {
    document.addEventListener(
      "contextmenu",
      function(t) {
        t.preventDefault();
      },
      !1
    );
  },
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212
          }
        },
        {
          position: {
            lat: 51.198429,
            lng: 6.69529
          }
        },
        {
          position: {
            lat: 51.165218,
            lng: 7.067116
          }
        },
        {
          position: {
            lat: 51.09256,
            lng: 6.84074
          }
        }
      ],
      options: {
        zoomControl: !0,
        mapTypeControl: !1,
        scaleControl: !1,
        streetViewControl: !1,
        clickableIcons: !1,
        rotateControl: !1,
        fullscreenControl: !1,
        disableDefaultUi: !1,
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5"
              }
            ]
          },
          {
            elementType: "labels",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161"
              }
            ]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#f5f5f5"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#bdbdbd"
              }
            ]
          },
          {
            featureType: "administrative.neighborhood",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575"
              }
            ]
          },
          {
            featureType: "poi.business",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "labels",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#dadada"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "labels",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161"
              }
            ]
          },
          {
            featureType: "road.local",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e"
              }
            ]
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5"
              }
            ]
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#c9c9c9"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e"
              }
            ]
          }
        ]
      }
    };
  }
}, B = { class: "viewer_left" };
function D(t, d, p, v, i, _) {
  const s = a("GMapMarker"), l = a("GMapMap");
  return r(), o("div", B, [
    c(l, {
      center: i.center,
      zoom: 15,
      "map-type-id": "roadmap",
      options: i.options,
      style: { position: "absolute", overflow: "hidden", top: "0", bottom: "0", left: "0", right: "0" }
    }, {
      default: u(() => [
        (r(!0), o(y, null, f(i.markers, (h, g) => (r(), b(s, {
          key: g,
          position: h.position,
          icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png",
          clickable: !0,
          draggable: !0,
          onClick: (F) => i.center = h.position
        }, null, 8, ["position", "icon", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["center", "options"])
  ]);
}
const E = /* @__PURE__ */ n(z, [["render", D]]), L = {
  components: { PanelArea: G, ViewArea: E },
  created() {
  },
  computed: {},
  methods: {},
  mounted() {
  },
  data() {
    return {};
  }
}, N = { class: "main" };
function j(t, d, p, v, i, _) {
  const s = a("ViewArea"), l = a("PanelArea");
  return r(), o("div", N, [
    c(s),
    c(l)
  ]);
}
const Y = /* @__PURE__ */ n(L, [["render", j]]);
export {
  Y as default
};

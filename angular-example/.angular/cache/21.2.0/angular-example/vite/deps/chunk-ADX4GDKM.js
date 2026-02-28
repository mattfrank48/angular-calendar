import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@dayflow/blossom-color-picker/dist/index.esm.js
var F = Object.defineProperty;
var H = (n, t, e) => t in n ? F(n, t, { enumerable: true, configurable: true, writable: true, value: e }) : n[t] = e;
var l = (n, t, e) => H(n, typeof t != "symbol" ? t + "" : t, e);
var N = [
  { h: 47, s: 97, l: 65 },
  // #FCD752
  { h: 37, s: 98, l: 65 },
  // #FDBA50
  { h: 27, s: 95, l: 64 },
  // #FA9C4D
  { h: 14, s: 90, l: 64 },
  // #F6774F
  { h: 0, s: 85, l: 64 },
  // #F15656
  { h: 327, s: 75, l: 62 },
  // #E756A6
  { h: 285, s: 51, l: 59 },
  // #B261CC
  { h: 257, s: 65, l: 64 },
  // #8966DF
  { h: 225, s: 71, l: 65 },
  // #6586E5
  { h: 202, s: 68, l: 65 },
  // #69B5E2
  { h: 151, s: 43, l: 63 },
  // #77C9A2
  { h: 96, s: 49, l: 67 }
  // #A4D483
];
var _ = [
  { h: 50, s: 95, l: 85 },
  // #FDF1B6
  { h: 26, s: 89, l: 89 },
  // #FCE0CA
  { h: 345, s: 77, l: 88 },
  // #F8C8D4
  { h: 283, s: 47, l: 84 },
  // #DEC2E9
  { h: 209, s: 70, l: 87 },
  // #C6DEF5
  { h: 116, s: 42, l: 87 }
  // #D2ECD0
];
var G = [..._, ...N];
var b = "linear(0, 0.060 3%, 0.200 7%, 0.420 13%, 0.680 20%, 0.900 28%, 1.020 35%, 1.060 45%, 1.025 53%, 0.997 62%, 1.0 68%)";
var Y = 100;
var T = 20;
var X = 20;
var M = 12;
var O = 30;
var D = 11;
function U(n) {
  return (100 - Math.max(20, Math.min(100, n))) / 80 * 100;
}
function R(n) {
  return 100 - n / 100 * 80;
}
function j(n) {
  n = n.replace(/^#/, "");
  const t = parseInt(n.slice(0, 2), 16) / 255, e = parseInt(n.slice(2, 4), 16) / 255, s = parseInt(n.slice(4, 6), 16) / 255, i = Math.max(t, e, s), r = Math.min(t, e, s), a = (i + r) / 2;
  if (i === r)
    return { h: 0, s: 0, l: Math.round(a * 100) };
  const o = i - r, h = a > 0.5 ? o / (2 - i - r) : o / (i + r);
  let d = 0;
  switch (i) {
    case t:
      d = ((e - s) / o + (e < s ? 6 : 0)) / 6;
      break;
    case e:
      d = ((s - t) / o + 2) / 6;
      break;
    case s:
      d = ((t - e) / o + 4) / 6;
      break;
  }
  return {
    h: Math.round(d * 360),
    s: Math.round(h * 100),
    l: Math.round(a * 100)
  };
}
function W(n, t, e) {
  n /= 255, t /= 255, e /= 255;
  const s = Math.max(n, t, e), i = Math.min(n, t, e), r = (s + i) / 2;
  if (s === i) return { h: 0, s: 0, l: Math.round(r * 100) };
  const a = s - i, o = r > 0.5 ? a / (2 - s - i) : a / (s + i);
  let h = 0;
  switch (s) {
    case n:
      h = ((t - e) / a + (t < e ? 6 : 0)) / 6;
      break;
    case t:
      h = ((e - n) / a + 2) / 6;
      break;
    case e:
      h = ((n - t) / a + 4) / 6;
      break;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(o * 100),
    l: Math.round(r * 100)
  };
}
function Z(n) {
  if (typeof n == "object") return n;
  const t = n.trim().toLowerCase();
  if (t.startsWith("#")) return j(t);
  const e = t.match(
    /^hsla?\(\s*([\d.]+)[\s,]+([\d.]+)%?[\s,]+([\d.]+)%?/
  );
  if (e)
    return {
      h: Math.round(parseFloat(e[1])),
      s: Math.round(parseFloat(e[2])),
      l: Math.round(parseFloat(e[3]))
    };
  const s = t.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/);
  return s ? W(
    parseFloat(s[1]),
    parseFloat(s[2]),
    parseFloat(s[3])
  ) : { h: 0, s: 0, l: 50 };
}
function B(n, t, e) {
  const s = t / 100, i = e / 100, r = (1 - Math.abs(2 * i - 1)) * s, a = r * (1 - Math.abs(n / 60 % 2 - 1)), o = i - r / 2;
  let h = 0, d = 0, p = 0;
  n >= 0 && n < 60 ? (h = r, d = a, p = 0) : n >= 60 && n < 120 ? (h = a, d = r, p = 0) : n >= 120 && n < 180 ? (h = 0, d = r, p = a) : n >= 180 && n < 240 ? (h = 0, d = a, p = r) : n >= 240 && n < 300 ? (h = a, d = 0, p = r) : (h = r, d = 0, p = a);
  const c = (u) => {
    const f = Math.round((u + o) * 255).toString(16);
    return f.length === 1 ? "0" + f : f;
  };
  return `#${c(h)}${c(d)}${c(p)}`;
}
function C(n, t) {
  return n < 10 ? n / 10 * t : t;
}
function z(n, t, e) {
  return `hsl(${Math.round(n)}, ${Math.round(t)}%, ${Math.round(e)}%)`;
}
function k(n, t, e, s) {
  return `hsla(${Math.round(n)}, ${Math.round(t)}%, ${Math.round(e)}%, ${(s / 100).toFixed(2)})`;
}
function $(n, t, e, s, i, r, a) {
  return {
    hue: n,
    saturation: t,
    // State value (0-100)
    originalSaturation: s,
    // Petal's intrinsic saturation (not slider-adjusted)
    lightness: i,
    alpha: r,
    layer: a,
    hex: B(n, e, i),
    hsl: z(n, e, i),
    hsla: k(n, e, i, r)
  };
}
function q(n) {
  if (!n || n.length === 0) return [];
  const t = [...n].sort((a, o) => o.l - a.l), e = t.length;
  let s = [];
  if (e <= 10)
    s = [e];
  else if (e <= 24) {
    const a = Math.max(4, Math.floor(e * 0.35));
    s = [a, e - a];
  } else if (e <= 42) {
    const a = Math.max(5, Math.floor(e * 0.15)), o = Math.floor(e * 0.35);
    s = [a, o, e - a - o];
  } else {
    const a = Math.max(6, Math.floor(e * 0.1)), o = Math.floor(e * 0.2), h = Math.floor(e * 0.3);
    s = [a, o, h, e - a - o - h];
  }
  const i = [];
  let r = 0;
  for (let a = 0; a < s.length; a++) {
    const o = s[a], h = t.slice(
      r,
      r + o
    );
    h.sort((d, p) => d.h - p.h), h.length > 0 && i.push(h), r += o;
  }
  return i;
}
function J(n, t, e) {
  const s = [], i = e, r = t / 2, a = e / 2;
  for (let o = 0; o < n.length; o++) {
    const h = n[o].length, d = h <= 8 ? 0.45 : h <= 12 ? 0.5 : 0.55, p = h * i * d / (2 * Math.PI);
    let c;
    if (o === 0) {
      const u = h <= 5 ? i * 0.35 : i * 0.25, f = r + a - u;
      c = Math.max(f, p);
    } else {
      const u = s[o - 1], f = n[o - 1].length, g = 2 * Math.PI * u, E = f * i / g;
      let m = i * 0.35;
      E < 0.85 ? m = i * 0.15 : E > 1.1 && (m = i * 0.45);
      const L = u + m;
      c = Math.max(L, p), c = Math.max(c, u + i * 0.1);
    }
    s.push(c);
  }
  return s;
}
function K(n) {
  const t = [0];
  for (let e = 1; e < n.length; e++) {
    const i = 360 / n[e - 1].length / 2;
    t.push(i);
  }
  return t;
}
function Q(n, t, e, s) {
  return n.length > 0 ? n[n.length - 1] + t / 2 + s : e / 2 + s;
}
function tt(n, t, e, s) {
  return e ? (n + s + t / 2) * 2 + 12 : (n + t / 2) * 2 + 12;
}
function A(n, t, e, s, i, r = false, a = false) {
  const o = (i - s) * 100, h = e + 10;
  if (n === t)
    return a ? o + h : o;
  const d = (n - t + e) % e;
  return o + d;
}
function et({
  elementRect: n,
  containerSize: t,
  currentShiftOffset: e,
  windowWidth: s,
  windowHeight: i,
  sliderPosition: r,
  adaptivePositioning: a
}) {
  const o = t / 2, h = n.left + n.width / 2 - e.x, d = n.top + n.height / 2 - e.y;
  let p = 0, c = 0;
  a && (h + o > s - 10 ? p = s - 10 - (h + o) : h - o < 10 && (p = 10 - (h - o)), d + o > i - 10 ? c = i - 10 - (d + o) : d - o < 10 && (c = 10 - (d - o)));
  let u = r || "right";
  if (!r) {
    const f = s - (h + p + o), g = h + p - o, S = d + c - o, E = i - (d + c + o), m = O + M + 20;
    f < m && g > f ? u = "left" : g < m && f > g ? u = "right" : E < m && S > E ? u = "top" : S < m && E > S ? u = "bottom" : u = "right";
  }
  return {
    effectivePosition: u,
    shiftOffset: { x: p, y: c }
  };
}
var st = "http://www.w3.org/2000/svg";
function y(n, t, e) {
  const s = document.createElement(n);
  if (e)
    for (const [i, r] of Object.entries(e))
      s.setAttribute(i, r);
  return s;
}
function x(n, t) {
  const e = document.createElementNS(st, n);
  if (t)
    for (const [s, i] of Object.entries(t))
      e.setAttribute(s, i);
  return e;
}
function v(n, t) {
  for (const [e, s] of Object.entries(t))
    s !== void 0 && (n.style[e] = s);
}
function it(n, t) {
  for (const [e, s] of Object.entries(t))
    n.setAttribute(e, s);
}
var w = class {
  constructor(t, e, s, i) {
    l(this, "el");
    l(this, "config");
    l(this, "isHovered", false);
    l(this, "lastExpanded", false);
    this.onClick = e, this.onMouseEnter = s, this.onMouseLeave = i, this.config = t, this.el = y("button", void 0, {
      type: "button",
      "aria-label": `Select color hue ${t.hue}`,
      tabIndex: "-1"
    }), this.el.className = "bcp-petal", t.alpha !== 0 && this.el.classList.add("bcp-petal-visible"), this.el.addEventListener("click", () => {
      var r;
      return (r = this.onClick) == null ? void 0 : r.call(this);
    }), this.el.addEventListener("mouseenter", () => {
      var r;
      this.isHovered = true, (r = this.onMouseEnter) == null || r.call(this), this.updateStyles(this.lastExpanded);
    }), this.el.addEventListener("mouseleave", () => {
      var r;
      this.isHovered = false, (r = this.onMouseLeave) == null || r.call(this), this.updateStyles(this.lastExpanded);
    }), this.applyBaseStyles(), this.updateStyles(false);
  }
  applyBaseStyles() {
    const { petalSize: t, config: e } = { petalSize: this.config.petalSize, config: this.config };
    v(this.el, {
      position: "absolute",
      width: `${t}px`,
      height: `${t}px`,
      borderRadius: "50%",
      border: "none",
      padding: "0",
      background: "none",
      left: "50%",
      top: "50%",
      marginLeft: `${-t / 2}px`,
      marginTop: `${-t / 2}px`
    }), e.clip === "left" ? this.el.style.clipPath = "polygon(0% -50%, 50% -50%, 50% 150%, 0% 150%)" : e.clip === "right" && (this.el.style.clipPath = "polygon(50% -50%, 100% -50%, 100% 150%, 50% 150%)");
  }
  update(t, e, s) {
    e !== void 0 && (this.isHovered = e), this.updateStyles(t, s);
  }
  updateStyles(t, e) {
    const s = t && !this.lastExpanded, i = this.config, r = this.isHovered, a = i.alpha === 0, h = (i.index / i.totalPetals * 360 - 90 + i.rotationOffset) * Math.PI / 180;
    let d = Math.cos(h) * i.radius, p = Math.sin(h) * i.radius;
    if (t && e && !r && !a) {
      const g = d - e.x, S = p - e.y, E = Math.sqrt(g * g + S * S), m = 60;
      if (E < m) {
        const L = (1 - E / m) * 6, V = Math.atan2(S, g);
        d += Math.cos(V) * L, p += Math.sin(V) * L;
      }
    }
    const c = i.alpha < 1 ? k(i.hue, i.saturation, i.lightness, i.alpha * 100) : z(i.hue, i.saturation, i.lightness), u = r ? 1.1 : 1, f = t && !s && e && !r ? "transform 150ms ease-out" : `transform ${i.animationDuration}ms ${b} ${t && !r ? i.staggerDelay : 0}ms`;
    v(this.el, {
      backgroundColor: c,
      transform: t ? `translate(${d}px, ${p}px) scale(${u})` : "translate(0, 0) scale(0)",
      opacity: t ? "1" : "0",
      filter: r && !a ? "brightness(1.1)" : "brightness(1)",
      transition: `${f},
                   opacity ${i.animationDuration}ms ${b} ${t && !r ? i.staggerDelay : 0}ms,
                   background-color 200ms ease,
                   box-shadow 200ms ease,
                   filter 200ms ease`,
      boxShadow: i.hasShadow && !a ? r ? "0 4px 12px rgba(0,0,0,0.25)" : "0 2px 6px rgba(0,0,0,0.15)" : "none",
      zIndex: String(i.zIndex),
      pointerEvents: i.pointerEvents
    }), this.el.tabIndex = t ? 0 : -1, this.lastExpanded = t;
  }
  destroy() {
    this.el.remove();
  }
};
var nt = class {
  constructor(t, e, s) {
    l(this, "el");
    l(this, "bgCircle");
    l(this, "colorCircle");
    this.radius = t, this.barWidth = e, this.animationDuration = s;
    const i = (t + e / 2) * 2 + 4;
    this.el = x("svg", {
      width: String(i),
      height: String(i)
    }), this.el.classList.add("bcp-svg"), v(this.el, {
      left: "50%",
      top: "50%",
      marginLeft: `${-i / 2}px`,
      marginTop: `${-i / 2}px`,
      zIndex: "5"
    });
    const r = String(i / 2), a = String(i / 2), o = String(t), h = String(e);
    this.bgCircle = x("circle", {
      cx: r,
      cy: a,
      r: o,
      fill: "none",
      stroke: "rgba(0,0,0,0.06)",
      "stroke-width": h
    }), this.colorCircle = x("circle", {
      cx: r,
      cy: a,
      r: o,
      fill: "none",
      "stroke-width": h
    }), this.el.appendChild(this.bgCircle), this.el.appendChild(this.colorCircle);
  }
  update(t, e, s, i, r) {
    const a = k(t, e, s, i);
    this.colorCircle.setAttribute("stroke", a), v(this.el, {
      opacity: r ? "1" : "0",
      transform: r ? "scale(1)" : "scale(0.8)",
      transition: `opacity ${this.animationDuration}ms ${b}, transform ${this.animationDuration}ms ${b}`
    });
  }
  destroy() {
    this.el.remove();
  }
};
function P(n, t, e, s) {
  const i = s * Math.PI / 180;
  return {
    x: n + e * Math.cos(i),
    y: t + e * Math.sin(i)
  };
}
function at(n, t, e, s, i) {
  const r = P(n, t, e, s), a = P(n, t, e, i), o = Math.abs(i - s) > 180 ? "1" : "0";
  return `M ${r.x} ${r.y} A ${e} ${e} 0 ${o} 1 ${a.x} ${a.y}`;
}
function I(n) {
  switch (n) {
    case "top":
      return -90;
    case "bottom":
      return 90;
    case "left":
      return 180;
    case "right":
    default:
      return 0;
  }
}
function rt(n, t, e, s, i) {
  let a = Math.atan2(t, n) * (180 / Math.PI) - e;
  for (; a > 180; ) a -= 360;
  for (; a < -180; ) a += 360;
  a = Math.max(-s, Math.min(s, a));
  let o;
  return i === "left" ? o = (s - a) / (2 * s) * 100 : o = (a + s) / (2 * s) * 100, Math.round(Math.max(0, Math.min(100, o)));
}
function ot(n, t, e, s, i) {
  return Array.from({ length: e }, (r, a) => {
    const o = a / (e - 1), h = s(o * 100, t), d = 100 - o * 80;
    return i(n, h, d);
  });
}
var ht = 0;
var lt = class {
  constructor(t, e, s, i, r, a = "right") {
    l(this, "el");
    l(this, "bgPath");
    l(this, "gradientPath");
    l(this, "handle");
    l(this, "gradient");
    l(this, "gradientStops", []);
    l(this, "isDragging", false);
    l(this, "svgSize");
    l(this, "center");
    l(this, "arcRadius");
    l(this, "halfSweep", 30);
    l(this, "strokeWidth");
    l(this, "handleRadius");
    l(this, "gradientId");
    l(this, "currentPosition");
    l(this, "currentValue", 50);
    l(this, "currentHue", 0);
    l(this, "currentBaseSaturation", 70);
    l(this, "animationDuration");
    l(this, "boundMouseMove");
    l(this, "boundTouchMove");
    l(this, "boundEnd");
    this.barRadius = t, this.barWidth = e, this.sliderOffset = s, this.onChange = r, this.animationDuration = i, this.currentPosition = a, this.arcRadius = t + s, this.strokeWidth = e, this.handleRadius = e / 2, this.svgSize = (this.arcRadius + this.handleRadius + this.strokeWidth) * 2 + 20, this.center = this.svgSize / 2, this.gradientId = `bcp-arc-grad-${++ht}`, this.el = x("svg", {
      width: String(this.svgSize),
      height: String(this.svgSize)
    }), this.el.classList.add("bcp-svg"), v(this.el, {
      left: "50%",
      top: "50%",
      marginLeft: `${-this.svgSize / 2}px`,
      marginTop: `${-this.svgSize / 2}px`,
      zIndex: "50"
    });
    const o = x("defs");
    this.gradient = x("linearGradient", {
      id: this.gradientId,
      gradientUnits: "userSpaceOnUse"
    });
    for (let h = 0; h < D; h++) {
      const d = x("stop", {
        offset: `${h / (D - 1) * 100}%`,
        "stop-color": "#fff"
      });
      this.gradientStops.push(d), this.gradient.appendChild(d);
    }
    o.appendChild(this.gradient), this.el.appendChild(o), this.bgPath = x("path", {
      fill: "none",
      stroke: "rgba(0,0,0,0.06)",
      "stroke-width": String(this.strokeWidth),
      "stroke-linecap": "round"
    }), this.el.appendChild(this.bgPath), this.gradientPath = x("path", {
      fill: "none",
      stroke: `url(#${this.gradientId})`,
      "stroke-width": String(this.strokeWidth),
      "stroke-linecap": "round"
    }), this.gradientPath.classList.add("bcp-slider-track"), this.gradientPath.addEventListener("click", (h) => {
      this.handleTrackClick(h);
    }), this.el.appendChild(this.gradientPath), this.handle = x("circle", {
      r: String(this.handleRadius),
      fill: "#fff",
      stroke: "white",
      "stroke-width": "2"
    }), this.handle.classList.add("bcp-slider-handle"), this.handle.addEventListener("mousedown", (h) => {
      h.preventDefault(), this.startDrag();
    }), this.handle.addEventListener("touchstart", (h) => {
      h.preventDefault(), this.startDrag();
    }), this.el.appendChild(this.handle), this.boundMouseMove = (h) => this.calculateValueFromEvent(h), this.boundTouchMove = (h) => this.calculateValueFromEvent(h), this.boundEnd = () => this.endDrag(), this.updateGeometry();
  }
  startDrag() {
    this.isDragging = true, window.addEventListener("mousemove", this.boundMouseMove), window.addEventListener("mouseup", this.boundEnd), window.addEventListener("touchmove", this.boundTouchMove, { passive: false }), window.addEventListener("touchend", this.boundEnd);
  }
  endDrag() {
    this.isDragging = false, window.removeEventListener("mousemove", this.boundMouseMove), window.removeEventListener("mouseup", this.boundEnd), window.removeEventListener("touchmove", this.boundTouchMove), window.removeEventListener("touchend", this.boundEnd), this.updateHandleTransition();
  }
  handleTrackClick(t) {
    this.calculateValueFromEvent(t);
  }
  calculateValueFromEvent(t) {
    "touches" in t && t.preventDefault();
    const e = this.el.getBoundingClientRect(), s = e.left + e.width / 2, i = e.top + e.height / 2, r = "touches" in t ? t.touches[0].clientX : t.clientX, a = "touches" in t ? t.touches[0].clientY : t.clientY, o = r - s, h = a - i, d = I(this.currentPosition), p = rt(
      o,
      h,
      d,
      this.halfSweep,
      this.currentPosition
    );
    this.onChange(p);
  }
  updateGeometry() {
    const t = I(this.currentPosition), e = t - this.halfSweep, s = t + this.halfSweep, i = at(
      this.center,
      this.center,
      this.arcRadius,
      e,
      s
    );
    this.bgPath.setAttribute("d", i), this.gradientPath.setAttribute("d", i);
    const r = this.currentPosition === "left" ? s : e, a = this.currentPosition === "left" ? e : s, o = P(
      this.center,
      this.center,
      this.arcRadius,
      r
    ), h = P(
      this.center,
      this.center,
      this.arcRadius,
      a
    );
    it(this.gradient, {
      x1: String(o.x),
      y1: String(o.y),
      x2: String(h.x),
      y2: String(h.y)
    });
  }
  update(t, e, s, i, r) {
    this.currentValue = t, this.currentHue = e, this.currentBaseSaturation = s, r !== this.currentPosition && (this.currentPosition = r, this.updateGeometry());
    const a = ot(
      e,
      s,
      D,
      C,
      z
    );
    for (let m = 0; m < this.gradientStops.length; m++)
      this.gradientStops[m].setAttribute("stop-color", a[m]);
    const o = I(r), h = o - this.halfSweep, d = o + this.halfSweep, p = r === "left" ? d : h, c = r === "left" ? h : d, u = p + t / 100 * (c - p), f = P(
      this.center,
      this.center,
      this.arcRadius,
      u
    ), g = R(t), S = C(t, s), E = z(e, S, g);
    this.handle.setAttribute("cx", String(f.x)), this.handle.setAttribute("cy", String(f.y)), this.handle.setAttribute("fill", E), this.updateHandleTransition(), v(this.el, {
      opacity: i ? "1" : "0",
      transform: i ? "scale(1)" : "scale(0.8)",
      transition: `opacity ${this.animationDuration}ms ${b} ${this.animationDuration / 2}ms, transform ${this.animationDuration}ms ${b} ${this.animationDuration / 2}ms`
    });
  }
  updateHandleTransition() {
    v(this.handle, {
      transition: this.isDragging ? "none" : `cx ${this.animationDuration / 3}ms ease, cy ${this.animationDuration / 3}ms ease`
    });
  }
  destroy() {
    window.removeEventListener("mousemove", this.boundMouseMove), window.removeEventListener("mouseup", this.boundEnd), window.removeEventListener("touchmove", this.boundTouchMove), window.removeEventListener("touchend", this.boundEnd), this.el.remove();
  }
};
var dt = class {
  constructor(t, e, s) {
    l(this, "el");
    this.coreSize = t, this.animationDuration = e, this.onClick = s, this.el = y("button", void 0, {
      type: "button",
      tabIndex: "0"
    }), this.el.className = "bcp-core", this.el.addEventListener("click", () => this.onClick()), v(this.el, {
      width: `${t}px`,
      height: `${t}px`,
      zIndex: "1000"
    });
  }
  update(t, e, s, i) {
    this.el.disabled = i, this.el.setAttribute(
      "aria-label",
      `Color picker${e ? ", expanded" : ""}`
    ), this.el.setAttribute("aria-expanded", String(e)), v(this.el, {
      backgroundColor: t,
      transform: e ? "scale(1)" : s ? "scale(1.05)" : "scale(1)",
      boxShadow: e ? "0 0 0 2px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)" : "0 2px 8px rgba(0,0,0,0.15)",
      transition: `transform ${this.animationDuration}ms ${b}, box-shadow ${this.animationDuration}ms ${b}`
    });
  }
  destroy() {
    this.el.remove();
  }
};
var ct = class {
  constructor(t, e) {
    l(this, "el");
    l(this, "solidBg");
    l(this, "tintEl");
    this.radius = t, this.animationDuration = e;
    const s = t * 2;
    this.el = y("div"), this.el.className = "bcp-bg-wrapper", v(this.el, {
      position: "absolute",
      width: `${s}px`,
      height: `${s}px`,
      pointerEvents: "none",
      zIndex: "0"
    }), this.solidBg = y("div"), this.solidBg.className = "bcp-bg-solid", v(this.solidBg, {
      position: "absolute",
      inset: "0",
      backgroundColor: "#FFFFFF",
      borderRadius: "50%",
      transform: "scale(1)",
      transition: `transform ${e}ms ${b}, opacity ${e}ms ${b}`
    }), this.el.appendChild(this.solidBg), this.tintEl = y("div"), v(this.tintEl, {
      position: "absolute",
      inset: "0",
      borderRadius: "50%",
      transition: `background-color ${e}ms ease`
    }), this.solidBg.appendChild(this.tintEl);
  }
  update(t, e, s, i, r, a) {
    this.animationDuration, v(this.solidBg, {
      transform: i ? "scale(0.9)" : "scale(0.98)",
      opacity: i ? "1" : "0"
    }), v(this.tintEl, {
      backgroundColor: k(t, e, s, 15)
    });
  }
  destroy() {
    this.el.remove();
  }
};
function ut(n, t) {
  if (n === t) return true;
  if (n.length !== t.length) return false;
  for (let e = 0; e < n.length; e++)
    if (n[e] !== t[e]) return false;
  return true;
}
var pt = {
  hue: 330,
  saturation: 70,
  alpha: 50,
  layer: "outer"
};
var gt = class {
  constructor(t, e) {
    l(this, "container");
    l(this, "rootEl");
    l(this, "containerEl");
    l(this, "mousePos", null);
    l(this, "rafId", null);
    l(this, "opts");
    l(this, "internalValue");
    l(this, "controlledValue");
    l(this, "isExpanded", false);
    l(this, "isHovering", false);
    l(this, "hoveredPetal", null);
    l(this, "prevExpanded", false);
    l(this, "shiftOffset", { x: 0, y: 0 });
    l(this, "effectivePosition", "right");
    l(this, "normalizedColors", []);
    l(this, "layers", []);
    l(this, "allColors", []);
    l(this, "layerPrefixCounts", []);
    l(this, "layerRadii", []);
    l(this, "layerRotations", []);
    l(this, "barRadius", 0);
    l(this, "containerSize", 0);
    l(this, "petalRenderers", []);
    l(this, "colorBarRenderer");
    l(this, "arcSliderRenderer", null);
    l(this, "coreButtonRenderer");
    l(this, "backgroundRenderer");
    l(this, "hoverTimeout", null);
    l(this, "closeTimeout", null);
    l(this, "boundClickOutside");
    l(this, "boundMouseMove");
    this.container = t;
    const s = (e == null ? void 0 : e.defaultValue) ?? pt;
    this.opts = {
      colors: (e == null ? void 0 : e.colors) ?? [],
      onChange: (e == null ? void 0 : e.onChange) ?? (() => {
      }),
      onCollapse: (e == null ? void 0 : e.onCollapse) ?? (() => {
      }),
      disabled: (e == null ? void 0 : e.disabled) ?? false,
      openOnHover: (e == null ? void 0 : e.openOnHover) ?? false,
      initialExpanded: (e == null ? void 0 : e.initialExpanded) ?? false,
      animationDuration: (e == null ? void 0 : e.animationDuration) ?? 300,
      showAlphaSlider: (e == null ? void 0 : e.showAlphaSlider) ?? true,
      coreSize: (e == null ? void 0 : e.coreSize) ?? 32,
      petalSize: (e == null ? void 0 : e.petalSize) ?? 32,
      showCoreColor: (e == null ? void 0 : e.showCoreColor) ?? true,
      sliderPosition: e == null ? void 0 : e.sliderPosition,
      adaptivePositioning: (e == null ? void 0 : e.adaptivePositioning) ?? true
    }, this.controlledValue = e == null ? void 0 : e.value, this.internalValue = (e == null ? void 0 : e.value) ?? s, this.isExpanded = this.opts.initialExpanded, this.prevExpanded = this.isExpanded, this.effectivePosition = this.opts.sliderPosition || "right", this.boundClickOutside = this.handleClickOutside.bind(this), this.boundMouseMove = this.handleMouseMove.bind(this), this.computeLayout(), this.render(), this.update(), this.bindEvents();
  }
  // --- Public API ---
  setValue(t) {
    this.controlledValue = t, this.internalValue = t, this.update();
  }
  getValue() {
    const t = this.currentValue, e = t.saturation, s = R(e), i = this.allColors.find((o) => o.h === t.hue), r = (i == null ? void 0 : i.s) ?? 70, a = C(e, r);
    return $(
      t.hue,
      e,
      a,
      r,
      s,
      t.alpha,
      t.layer
    );
  }
  expand() {
    this.setExpanded(true);
  }
  collapse() {
    this.setExpanded(false);
  }
  toggle() {
    this.setExpanded(!this.isExpanded);
  }
  setOptions(t) {
    let e = false;
    t.value !== void 0 && (this.controlledValue = t.value, this.internalValue = t.value), t.onChange !== void 0 && (this.opts.onChange = t.onChange), t.onCollapse !== void 0 && (this.opts.onCollapse = t.onCollapse), t.disabled !== void 0 && (this.opts.disabled = t.disabled), t.openOnHover !== void 0 && (this.opts.openOnHover = t.openOnHover), t.animationDuration !== void 0 && (this.opts.animationDuration = t.animationDuration), t.showCoreColor !== void 0 && (this.opts.showCoreColor = t.showCoreColor), t.sliderPosition !== void 0 && (this.opts.sliderPosition = t.sliderPosition), t.adaptivePositioning !== void 0 && (this.opts.adaptivePositioning = t.adaptivePositioning), t.initialExpanded !== void 0 && (this.opts.initialExpanded = t.initialExpanded), t.colors !== void 0 && !ut(t.colors, this.opts.colors) && (this.opts.colors = t.colors, e = true), t.coreSize !== void 0 && t.coreSize !== this.opts.coreSize && (this.opts.coreSize = t.coreSize, e = true), t.petalSize !== void 0 && t.petalSize !== this.opts.petalSize && (this.opts.petalSize = t.petalSize, e = true), t.showAlphaSlider !== void 0 && t.showAlphaSlider !== this.opts.showAlphaSlider && (this.opts.showAlphaSlider = t.showAlphaSlider, e = true), e && (this.destroyInner(), this.computeLayout(), this.render()), this.update();
  }
  destroy() {
    this.unbindEvents(), this.destroyInner(), this.rootEl && this.rootEl.parentNode && this.rootEl.remove();
  }
  // --- Internal ---
  get currentValue() {
    return this.controlledValue ?? this.internalValue;
  }
  get baseSaturation() {
    const t = this.currentValue;
    if (t.originalSaturation !== void 0)
      return t.originalSaturation;
    const e = this.allColors.find((s) => s.h === t.hue);
    return (e == null ? void 0 : e.s) ?? 70;
  }
  get coreColor() {
    const t = this.currentValue;
    if (this.isExpanded && !this.opts.showCoreColor) return "#FFFFFF";
    const e = t.lightness ?? R(t.saturation), s = t.originalSaturation ?? this.baseSaturation;
    return B(t.hue, s, e);
  }
  get currentLightness() {
    return this.currentValue.lightness ?? (this.currentValue.layer === "inner" ? 85 : 65);
  }
  computeLayout() {
    const t = this.opts.colors;
    this.normalizedColors = t && t.length > 0 ? t.map(Z) : G, this.layers = q(this.normalizedColors), this.allColors = this.layers.flat(), this.layerPrefixCounts = [0];
    for (let e = 1; e < this.layers.length; e++)
      this.layerPrefixCounts.push(
        this.layerPrefixCounts[e - 1] + this.layers[e - 1].length
      );
    this.layerRadii = J(
      this.layers,
      this.opts.coreSize,
      this.opts.petalSize
    ), this.layerRotations = K(this.layers), this.barRadius = Q(
      this.layerRadii,
      this.opts.petalSize,
      this.opts.coreSize,
      X
    ), this.containerSize = tt(
      this.barRadius,
      M,
      this.opts.showAlphaSlider,
      O
    );
  }
  render() {
    this.rootEl || (this.rootEl = y("div"), this.rootEl.className = "bcp-root", this.rootEl.setAttribute("role", "group"), this.rootEl.setAttribute("aria-label", "Color picker"), v(this.rootEl, {
      width: `${this.opts.coreSize}px`,
      height: `${this.opts.coreSize}px`
    }), this.containerEl = y("div"), this.containerEl.className = "bcp-container", v(this.containerEl, {
      left: "50%",
      top: "50%"
    }), this.rootEl.appendChild(this.containerEl), this.container.appendChild(this.rootEl)), this.backgroundRenderer = new ct(
      this.barRadius + M / 2,
      this.opts.animationDuration
    ), this.containerEl.appendChild(this.backgroundRenderer.el), this.colorBarRenderer = new nt(
      this.barRadius,
      M,
      this.opts.animationDuration
    ), this.containerEl.appendChild(this.colorBarRenderer.el), this.petalRenderers = [];
    for (let t = 0; t < this.layers.length; t++) {
      const e = this.layers[t], s = this.layerRadii[t], i = this.layerRotations[t], r = this.layerPrefixCounts[t], a = e.length, o = this.layers.length, h = (o - t) * 100;
      let d = 0, p = 1 / 0;
      for (let c = 0; c < a; c++) {
        const f = ((c / a * 360 - 90 + i) % 360 + 360) % 360, g = Math.min(Math.abs(f - 90), 360 - Math.abs(f - 90));
        g < p && (p = g, d = c);
      }
      for (let c = 0; c < e.length; c++) {
        const u = e[c], f = r * T + c * T;
        if (c === d) {
          const g = new w({
            hue: u.h,
            saturation: u.s,
            lightness: u.l,
            index: c,
            totalPetals: a,
            petalSize: this.opts.petalSize,
            radius: s,
            animationDuration: this.opts.animationDuration,
            staggerDelay: f,
            zIndex: h - 1,
            // Lowest
            rotationOffset: i,
            alpha: 1,
            pointerEvents: "none",
            hasShadow: false,
            noRing: true
            // Crucial: No ring to avoid double-rendering artifacts
          });
          this.petalRenderers.push(g), this.containerEl.appendChild(g.el);
          const S = new w(
            {
              hue: u.h,
              saturation: u.s,
              lightness: u.l,
              index: c,
              totalPetals: a,
              petalSize: this.opts.petalSize,
              radius: s,
              animationDuration: this.opts.animationDuration,
              staggerDelay: f,
              zIndex: A(c, d, a, t, o, true, false),
              rotationOffset: i,
              alpha: 1,
              clip: "left",
              pointerEvents: "none",
              hasShadow: false
            }
          );
          this.petalRenderers.push(S), this.containerEl.appendChild(S.el);
          const E = new w(
            {
              hue: u.h,
              saturation: u.s,
              lightness: u.l,
              index: c,
              totalPetals: a,
              petalSize: this.opts.petalSize,
              radius: s,
              animationDuration: this.opts.animationDuration,
              staggerDelay: f,
              zIndex: A(c, d, a, t, o, false, true),
              rotationOffset: i,
              alpha: 1,
              clip: "right",
              pointerEvents: "none",
              hasShadow: false
            }
          );
          this.petalRenderers.push(E), this.containerEl.appendChild(E.el);
          const m = new w(
            {
              hue: u.h,
              saturation: u.s,
              lightness: u.l,
              index: c,
              totalPetals: a,
              petalSize: this.opts.petalSize,
              radius: s,
              animationDuration: this.opts.animationDuration,
              staggerDelay: f,
              zIndex: h + a + 20,
              rotationOffset: i,
              alpha: 0,
              pointerEvents: "auto",
              hasShadow: false
            },
            () => this.handlePetalClick(u, t),
            () => {
              this.hoveredPetal = { layer: t, index: c }, g.update(this.isExpanded, true, this.mousePos), S.update(this.isExpanded, true, this.mousePos), E.update(this.isExpanded, true, this.mousePos);
            },
            () => {
              this.hoveredPetal = null, g.update(this.isExpanded, false, this.mousePos), S.update(this.isExpanded, false, this.mousePos), E.update(this.isExpanded, false, this.mousePos);
            }
          );
          this.petalRenderers.push(m), this.containerEl.appendChild(m.el);
        } else {
          const g = new w(
            {
              hue: u.h,
              saturation: u.s,
              lightness: u.l,
              index: c,
              totalPetals: a,
              petalSize: this.opts.petalSize,
              radius: s,
              animationDuration: this.opts.animationDuration,
              staggerDelay: f,
              zIndex: A(c, d, a, t, o),
              rotationOffset: i,
              alpha: 1,
              pointerEvents: "auto",
              hasShadow: false
            },
            () => this.handlePetalClick(u, t),
            () => {
              this.hoveredPetal = { layer: t, index: c };
            },
            () => {
              this.hoveredPetal = null;
            }
          );
          this.petalRenderers.push(g), this.containerEl.appendChild(g.el);
        }
      }
    }
    this.opts.showAlphaSlider && (this.arcSliderRenderer = new lt(
      this.barRadius,
      M,
      O,
      this.opts.animationDuration,
      (t) => this.handleSliderChange(t),
      this.effectivePosition
    ), this.containerEl.appendChild(this.arcSliderRenderer.el)), this.coreButtonRenderer = new dt(
      this.opts.coreSize,
      this.opts.animationDuration,
      () => this.handleCoreClick()
    ), this.containerEl.appendChild(this.coreButtonRenderer.el);
  }
  update() {
    const t = this.currentValue, e = this.opts.animationDuration;
    if (this.isExpanded && !this.prevExpanded && this.rootEl) {
      const s = this.rootEl.getBoundingClientRect(), i = et({
        elementRect: s,
        containerSize: this.containerSize,
        currentShiftOffset: { x: 0, y: 0 },
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        sliderPosition: this.opts.sliderPosition,
        adaptivePositioning: this.opts.adaptivePositioning
      });
      this.shiftOffset = i.shiftOffset, this.effectivePosition = i.effectivePosition;
    } else this.isExpanded || (this.shiftOffset = { x: 0, y: 0 }, this.effectivePosition = this.opts.sliderPosition || "right");
    v(this.containerEl, {
      width: `${this.isExpanded ? this.containerSize : this.opts.coreSize}px`,
      height: `${this.isExpanded ? this.containerSize : this.opts.coreSize}px`,
      transform: `translate(calc(-50% + ${this.shiftOffset.x}px), calc(-50% + ${this.shiftOffset.y}px))`,
      transition: `width ${e}ms ${b}, height ${e}ms ${b}, transform ${e}ms ${b}`,
      zIndex: this.isExpanded ? "50" : "0"
    }), this.backgroundRenderer.update(
      t.hue,
      t.saturation,
      this.currentLightness,
      this.isExpanded,
      this.isHovering,
      this.mousePos
    ), this.colorBarRenderer.update(
      t.hue,
      C(t.saturation, this.baseSaturation),
      this.currentLightness,
      t.alpha,
      this.isExpanded
    );
    for (const s of this.petalRenderers)
      s.update(this.isExpanded, void 0, this.mousePos);
    this.arcSliderRenderer && this.arcSliderRenderer.update(
      t.saturation,
      t.hue,
      this.baseSaturation,
      this.isExpanded,
      this.effectivePosition
    ), this.coreButtonRenderer.update(
      this.coreColor,
      this.isExpanded,
      this.isHovering,
      this.opts.disabled
    ), this.prevExpanded && !this.isExpanded && this.fireOnCollapse(), this.prevExpanded = this.isExpanded;
  }
  bindEvents() {
    this.containerEl.addEventListener("mouseenter", () => {
      this.handleMouseEnter();
    }), this.containerEl.addEventListener("mouseleave", () => {
      this.handleMouseLeave();
    }), this.containerEl.addEventListener("mousemove", this.boundMouseMove);
  }
  unbindEvents() {
    document.removeEventListener("mousedown", this.boundClickOutside), this.containerEl.removeEventListener("mousemove", this.boundMouseMove);
  }
  handleMouseMove(t) {
    const e = this.containerEl.getBoundingClientRect();
    this.mousePos = {
      x: t.clientX - (e.left + e.width / 2),
      y: t.clientY - (e.top + e.height / 2)
    }, this.isExpanded && !this.rafId && (this.rafId = requestAnimationFrame(() => {
      this.updateInteractive(), this.rafId = null;
    }));
  }
  updateInteractive() {
    const t = this.currentValue;
    for (const e of this.petalRenderers)
      e.update(this.isExpanded, void 0, this.mousePos);
    this.backgroundRenderer.update(
      t.hue,
      t.saturation,
      this.currentLightness,
      this.isExpanded,
      this.isHovering,
      this.mousePos
    ), this.colorBarRenderer.update(
      t.hue,
      C(t.saturation, this.baseSaturation),
      this.currentLightness,
      t.alpha,
      this.isExpanded
    ), this.arcSliderRenderer && this.arcSliderRenderer.update(
      t.saturation,
      t.hue,
      this.baseSaturation,
      this.isExpanded,
      this.effectivePosition
    ), this.coreButtonRenderer.update(
      this.coreColor,
      this.isExpanded,
      this.isHovering,
      this.opts.disabled
    );
  }
  destroyInner() {
    var t, e, s, i;
    for (const r of this.petalRenderers)
      r.destroy();
    this.petalRenderers = [], (t = this.colorBarRenderer) == null || t.destroy(), (e = this.arcSliderRenderer) == null || e.destroy(), this.arcSliderRenderer = null, (s = this.coreButtonRenderer) == null || s.destroy(), (i = this.backgroundRenderer) == null || i.destroy();
  }
  setExpanded(t) {
    this.isExpanded = t, t ? document.addEventListener("mousedown", this.boundClickOutside) : document.removeEventListener("mousedown", this.boundClickOutside), this.update();
  }
  handleClickOutside(t) {
    this.containerEl && !this.containerEl.contains(t.target) && this.setExpanded(false);
  }
  handleMouseEnter() {
    this.opts.disabled || !this.opts.openOnHover || (this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null), this.isHovering = true, this.hoverTimeout = setTimeout(() => {
      this.setExpanded(true);
    }, Y));
  }
  handleMouseLeave() {
    this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = null), this.isHovering = false, this.opts.openOnHover && (this.closeTimeout = setTimeout(() => {
      this.setExpanded(false);
    }, 200));
  }
  handleCoreClick() {
    this.opts.disabled || this.setExpanded(!this.isExpanded);
  }
  handlePetalClick(t, e) {
    const s = U(t.l), i = e === 0 ? "inner" : "outer", r = t.s, a = {
      hue: t.h,
      saturation: s,
      lightness: t.l,
      originalSaturation: t.s,
      layer: i,
      alpha: this.currentValue.alpha
      // Keep current alpha
    };
    this.controlledValue === void 0 && (this.internalValue = a), this.opts.onChange(
      $(
        t.h,
        s,
        r,
        t.s,
        t.l,
        this.currentValue.alpha,
        i
      )
    ), this.update();
  }
  handleSliderChange(t) {
    const e = R(t), s = C(
      t,
      this.baseSaturation
    ), i = __spreadProps(__spreadValues({}, this.currentValue), {
      saturation: t,
      lightness: e,
      originalSaturation: this.baseSaturation
    });
    this.internalValue = i, this.opts.onChange(
      $(
        this.currentValue.hue,
        t,
        s,
        this.baseSaturation,
        e,
        this.currentValue.alpha,
        this.currentValue.layer
      )
    ), this.update();
  }
  fireOnCollapse() {
    const t = this.currentValue, e = t.saturation, s = R(e), i = this.allColors.find((o) => o.h === t.hue), r = (i == null ? void 0 : i.s) ?? 70, a = C(e, r);
    this.opts.onCollapse(
      $(
        t.hue,
        e,
        a,
        r,
        s,
        t.alpha,
        t.layer
      )
    );
  }
};

export {
  N,
  _,
  G,
  U,
  R,
  j,
  W,
  Z,
  B,
  C,
  z,
  k,
  $,
  q,
  J,
  K,
  Q,
  tt,
  A,
  gt
};
//# sourceMappingURL=chunk-ADX4GDKM.js.map

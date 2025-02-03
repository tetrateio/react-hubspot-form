import me from "react";
var C = { exports: {} }, x = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function je() {
  if (fe) return x;
  fe = 1;
  var i = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function v(j, f, c) {
    var m = null;
    if (c !== void 0 && (m = "" + c), f.key !== void 0 && (m = "" + f.key), "key" in f) {
      c = {};
      for (var _ in f)
        _ !== "key" && (c[_] = f[_]);
    } else c = f;
    return f = c.ref, {
      $$typeof: i,
      type: j,
      key: m,
      ref: f !== void 0 ? f : null,
      props: c
    };
  }
  return x.Fragment = s, x.jsx = v, x.jsxs = v, x;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function Se() {
  return ce || (ce = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ye ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case Te:
          return "Portal";
        case B:
          return "Profiler";
        case X:
          return "StrictMode";
        case $:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return (e.displayName || "Context") + ".Provider";
          case I:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case F:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case W:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function v(e) {
      try {
        s(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), s(e);
      }
    }
    function j() {
    }
    function f() {
      if (w === 0) {
        K = console.log, D = console.info, ee = console.warn, re = console.error, te = console.group, oe = console.groupCollapsed, ne = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: j,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      w++;
    }
    function c() {
      if (w--, w === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: h({}, e, { value: K }),
          info: h({}, e, { value: D }),
          warn: h({}, e, { value: ee }),
          error: h({}, e, { value: re }),
          group: h({}, e, { value: te }),
          groupCollapsed: h({}, e, { value: oe }),
          groupEnd: h({}, e, { value: ne })
        });
      }
      0 > w && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function m(e) {
      if (q === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          q = r && r[1] || "", ae = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + q + e + ae;
    }
    function _(e, r) {
      if (!e || J) return "";
      var t = z.get(e);
      if (t !== void 0) return t;
      J = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = g.H, g.H = null, f();
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var b = function() {
                  throw Error();
                };
                if (Object.defineProperty(b.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(b, []);
                  } catch (E) {
                    var S = E;
                  }
                  Reflect.construct(e, [], b);
                } else {
                  try {
                    b.call();
                  } catch (E) {
                    S = E;
                  }
                  e.call(b.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (E) {
                  S = E;
                }
                (b = e()) && typeof b.catch == "function" && b.catch(function() {
                });
              }
            } catch (E) {
              if (E && S && typeof E.stack == "string")
                return [E.stack, S.stack];
            }
            return [null, null];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          u.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          u.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = u.DetermineComponentFrameRoot(), d = o[0], T = o[1];
        if (d && T) {
          var l = d.split(`
`), p = T.split(`
`);
          for (o = a = 0; a < l.length && !l[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < p.length && !p[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === l.length || o === p.length)
            for (a = l.length - 1, o = p.length - 1; 1 <= a && 0 <= o && l[a] !== p[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (l[a] !== p[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || l[a] !== p[o]) {
                    var y = `
` + l[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, y), y;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        J = !1, g.H = n, c(), Error.prepareStackTrace = t;
      }
      return l = (l = e ? e.displayName || e.name : "") ? m(l) : "", typeof e == "function" && z.set(e, l), l;
    }
    function k(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return _(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return m(e);
      switch (e) {
        case $:
          return m("Suspense");
        case M:
          return m("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return e = _(e.render, !1), e;
          case F:
            return k(e.type);
          case W:
            r = e._payload, e = e._init;
            try {
              return k(e(r));
            } catch {
            }
        }
      return "";
    }
    function A() {
      var e = g.A;
      return e === null ? null : e.getOwner();
    }
    function be(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function ve(e, r) {
      function t() {
        se || (se = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function ge() {
      var e = i(this.type);
      return ue[e] || (ue[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function he(e, r, t, n, u, a) {
      return t = a.ref, e = {
        $$typeof: N,
        type: e,
        key: r,
        props: a,
        _owner: u
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: ge
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function H(e, r, t, n, u, a) {
      if (typeof e == "string" || typeof e == "function" || e === P || e === B || e === X || e === $ || e === M || e === we || typeof e == "object" && e !== null && (e.$$typeof === W || e.$$typeof === F || e.$$typeof === L || e.$$typeof === I || e.$$typeof === Y || e.$$typeof === xe || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (U(o)) {
              for (n = 0; n < o.length; n++)
                V(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else V(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : U(e) ? n = "array" : e !== void 0 && e.$$typeof === N ? (n = "<" + (i(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (Q.call(r, "key")) {
        o = i(e);
        var d = Object.keys(r).filter(function(l) {
          return l !== "key";
        });
        n = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", le[o + n] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          d,
          o
        ), le[o + n] = !0);
      }
      if (o = null, t !== void 0 && (v(t), o = "" + t), be(r) && (v(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var T in r)
          T !== "key" && (t[T] = r[T]);
      } else t = r;
      return o && ve(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), he(e, o, a, u, A(), t);
    }
    function V(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Re) {
        if (U(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            O(n) && G(n, r);
          }
        else if (O(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = Z && e[Z] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            O(e.value) && G(e.value, r);
      }
    }
    function O(e) {
      return typeof e == "object" && e !== null && e.$$typeof === N;
    }
    function G(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = pe(r), !ie[r])) {
        ie[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== A() && (t = null, typeof e._owner.tag == "number" ? t = i(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = g.getCurrentStack;
        g.getCurrentStack = function() {
          var u = k(e.type);
          return n && (u += n() || ""), u;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), g.getCurrentStack = n;
      }
    }
    function pe(e) {
      var r = "", t = A();
      return t && (t = i(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = i(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var _e = me, N = Symbol.for("react.transitional.element"), Te = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), L = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), Z = Symbol.iterator, ye = Symbol.for("react.client.reference"), g = _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, h = Object.assign, xe = Symbol.for("react.client.reference"), U = Array.isArray, w = 0, K, D, ee, re, te, oe, ne;
    j.__reactDisabledLog = !0;
    var q, ae, J = !1, z = new (typeof WeakMap == "function" ? WeakMap : Map)(), Re = Symbol.for("react.client.reference"), se, ue = {}, le = {}, ie = {};
    R.Fragment = P, R.jsx = function(e, r, t, n, u) {
      return H(e, r, t, !1, n, u);
    }, R.jsxs = function(e, r, t, n, u) {
      return H(e, r, t, !0, n, u);
    };
  }()), R;
}
var de;
function Ce() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? C.exports = je() : C.exports = Se()), C.exports;
}
var Ee = Ce();
let ke = 0;
class Oe extends me.Component {
  constructor(s) {
    super(s), this.state = {
      loaded: !1
    }, this.id = ke++, this.createForm = this.createForm.bind(this), this.findFormElement = this.findFormElement.bind(this);
  }
  createForm() {
    if (window.hbspt) {
      if (this.el === null)
        return;
      let s = {
        ...this.props
      };
      delete s.loading, delete s.onSubmit, delete s.onReady;
      let v = {
        ...s,
        target: `#${this.el.getAttribute("id")}`
      };
      return window.hbspt.forms.create(v), !0;
    } else
      setTimeout(this.createForm, 1);
  }
  loadScript() {
    let s = document.createElement("script");
    s.defer = !0, s.onload = () => {
      this.createForm(), this.findFormElement();
    }, s.src = "//js.hsforms.net/forms/v2.js", document.head.appendChild(s);
  }
  findFormElement() {
    if (this.el === null)
      return;
    let s = this.el.querySelector("iframe");
    s ? (this.setState({ loaded: !0 }), this.props.onReady && this.props.onReady(s)) : setTimeout(this.findFormElement, 1);
  }
  componentDidMount() {
    !window.hbspt && !this.props.noScript ? this.loadScript() : (this.createForm(), this.findFormElement());
  }
  componentWillUnmount() {
  }
  render() {
    return /* @__PURE__ */ Ee.jsxs("div", { children: [
      /* @__PURE__ */ Ee.jsx(
        "div",
        {
          ref: (s) => this.el = s,
          id: `reactHubspotForm${this.id}`,
          style: { display: this.state.loaded ? "block" : "none" }
        }
      ),
      !this.state.loaded && this.props.loading
    ] });
  }
}
export {
  Oe as default
};

import X from "react";
var K = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function sr() {
  if (Te)
    return F;
  Te = 1;
  var D = X, u = Symbol.for("react.element"), C = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, A = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(g, c, T) {
    var p, m = {}, y = null, $ = null;
    T !== void 0 && (y = "" + T), c.key !== void 0 && (y = "" + c.key), c.ref !== void 0 && ($ = c.ref);
    for (p in c)
      _.call(c, p) && !I.hasOwnProperty(p) && (m[p] = c[p]);
    if (g && g.defaultProps)
      for (p in c = g.defaultProps, c)
        m[p] === void 0 && (m[p] = c[p]);
    return { $$typeof: u, type: g, key: y, ref: $, props: m, _owner: A.current };
  }
  return F.Fragment = C, F.jsx = P, F.jsxs = P, F;
}
var k = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function ur() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var D = X, u = Symbol.for("react.element"), C = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), g = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Z = Symbol.iterator, Oe = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var S = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var xe = !1, je = !1, Fe = !1, ke = !1, De = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === I || De || e === A || e === T || e === p || ke || e === $ || xe || je || Fe || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === m || e.$$typeof === P || e.$$typeof === g || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case C:
          return "Portal";
        case I:
          return "Profiler";
        case A:
          return "StrictMode";
        case T:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return ee(r) + ".Consumer";
          case P:
            var t = e;
            return ee(t._context) + ".Provider";
          case c:
            return Ie(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case y: {
            var o = e, s = o._payload, i = o._init;
            try {
              return b(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, x = 0, re, te, ne, ae, ie, oe, se;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function $e() {
      {
        if (x === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, ie = console.group, oe = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
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
        x++;
      }
    }
    function We() {
      {
        if (x--, x === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, e, {
              value: re
            }),
            info: R({}, e, {
              value: te
            }),
            warn: R({}, e, {
              value: ne
            }),
            error: R({}, e, {
              value: ae
            }),
            group: R({}, e, {
              value: ie
            }),
            groupCollapsed: R({}, e, {
              value: oe
            }),
            groupEnd: R({}, e, {
              value: se
            })
          });
        }
        x < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = S.ReactCurrentDispatcher, V;
    function W(e, r, t) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            V = n && n[1] || "";
          }
        return `
` + V + e;
      }
    }
    var q = !1, Y;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ye();
    }
    function le(e, r) {
      if (!e || q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = U.current, U.current = null, $e();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (E) {
              n = E;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), v = n.stack.split(`
`), l = a.length - 1, f = v.length - 1; l >= 1 && f >= 0 && a[l] !== v[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (a[l] !== v[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || a[l] !== v[f]) {
                    var h = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, h), h;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        q = !1, U.current = s, We(), Error.prepareStackTrace = o;
      }
      var O = e ? e.displayName || e.name : "", _e = O ? W(O) : "";
      return typeof e == "function" && Y.set(e, _e), _e;
    }
    function Le(e, r, t) {
      return le(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Ne(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case T:
          return W("Suspense");
        case p:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Le(e.render);
          case m:
            return L(e.type, r, t);
          case y: {
            var n = e, o = n._payload, s = n._init;
            try {
              return L(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, fe = {}, ce = S.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, o) {
      {
        var s = Function.call.bind(N);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (M(o), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, M(o), d("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Ue = Array.isArray;
    function B(e) {
      return Ue(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (qe(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), de(e);
    }
    var j = S.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, he, J;
    J = {};
    function Je(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && j.current && r && j.current.stateNode !== r) {
        var t = b(j.current.type);
        J[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(j.current.type), e.ref), J[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          pe || (pe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          he || (he = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, n, o, s, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ze(e, r, t, n, o) {
      {
        var s, i = {}, a = null, v = null;
        t !== void 0 && (ve(t), a = "" + t), Ge(r) && (ve(r.key), a = "" + r.key), Je(r) && (v = r.ref, ze(r, o));
        for (s in r)
          N.call(r, s) && !Be.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (s in l)
            i[s] === void 0 && (i[s] = l[s]);
        }
        if (a || v) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, f), v && Ke(i, f);
        }
        return Xe(e, a, v, o, n, j.current, i);
      }
    }
    var G = S.ReactCurrentOwner, me = S.ReactDebugCurrentFrame;
    function w(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function be() {
      {
        if (G.current) {
          var e = b(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function er(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ge(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + b(e._owner.type) + "."), w(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), w(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (B(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && ge(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Ce(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              H(i.value) && ge(i.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = b(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            w(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), w(null);
            break;
          }
        }
        e.ref !== null && (w(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), w(null));
      }
    }
    function Re(e, r, t, n, o, s) {
      {
        var i = Ae(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Qe(o);
          v ? a += v : a += be();
          var l;
          e === null ? l = "null" : B(e) ? l = "array" : e !== void 0 && e.$$typeof === u ? (l = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var f = Ze(e, r, t, o, s);
        if (f == null)
          return f;
        if (i) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (B(h)) {
                for (var O = 0; O < h.length; O++)
                  ye(h[O], e);
                Object.freeze && Object.freeze(h);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(h, e);
        }
        return e === _ ? tr(f) : rr(f), f;
      }
    }
    function nr(e, r, t) {
      return Re(e, r, t, !0);
    }
    function ar(e, r, t) {
      return Re(e, r, t, !1);
    }
    var ir = ar, or = nr;
    k.Fragment = _, k.jsx = ir, k.jsxs = or;
  }()), k;
}
process.env.NODE_ENV === "production" ? K.exports = sr() : K.exports = ur();
var we = K.exports;
let lr = 0;
class cr extends X.Component {
  constructor(u) {
    super(u), this.state = {
      loaded: !1
    }, this.id = lr++, this.createForm = this.createForm.bind(this), this.findFormElement = this.findFormElement.bind(this);
  }
  createForm() {
    if (window.hbspt) {
      if (this.el === null)
        return;
      let u = {
        ...this.props
      };
      delete u.loading, delete u.onSubmit, delete u.onReady;
      let C = {
        ...u,
        target: `#${this.el.getAttribute("id")}`
      };
      return window.hbspt.forms.create(C), !0;
    } else
      setTimeout(this.createForm, 1);
  }
  loadScript() {
    let u = document.createElement("script");
    u.defer = !0, u.onload = () => {
      this.createForm(), this.findFormElement();
    }, u.src = "//js.hsforms.net/forms/v2.js", document.head.appendChild(u);
  }
  findFormElement() {
    if (this.el === null)
      return;
    let u = this.el.querySelector("iframe");
    u ? (this.setState({ loaded: !0 }), this.props.onReady && this.props.onReady(u)) : setTimeout(this.findFormElement, 1);
  }
  componentDidMount() {
    !window.hbspt && !this.props.noScript ? this.loadScript() : (this.createForm(), this.findFormElement());
  }
  componentWillUnmount() {
  }
  render() {
    return /* @__PURE__ */ we.jsxs("div", { children: [
      /* @__PURE__ */ we.jsx(
        "div",
        {
          ref: (u) => this.el = u,
          id: `reactHubspotForm${this.id}`,
          style: { display: this.state.loaded ? "block" : "none" }
        }
      ),
      !this.state.loaded && this.props.loading
    ] });
  }
}
export {
  cr as default
};

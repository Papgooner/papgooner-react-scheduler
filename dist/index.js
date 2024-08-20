import { jsx as P, jsxs as ne, Fragment as $e } from "react/jsx-runtime";
import * as H from "react";
import We, { useRef as ge, useContext as Ne, useLayoutEffect as Mr, useMemo as Me, useDebugValue as Ut, createElement as sn, createContext as _r, useState as ve, useCallback as ye, useEffect as me, forwardRef as an } from "react";
var be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, rt = {}, cn = {
  get exports() {
    return rt;
  },
  set exports(e) {
    rt = e;
  }
}, oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function ln() {
  if (Xt)
    return oe;
  Xt = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function w(h) {
    if (typeof h == "object" && h !== null) {
      var E = h.$$typeof;
      switch (E) {
        case e:
          switch (h = h.type, h) {
            case t:
            case s:
            case n:
            case c:
            case u:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case i:
                case l:
                case p:
                case m:
                case o:
                  return h;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  return oe.ContextConsumer = i, oe.ContextProvider = o, oe.Element = e, oe.ForwardRef = l, oe.Fragment = t, oe.Lazy = p, oe.Memo = m, oe.Portal = r, oe.Profiler = s, oe.StrictMode = n, oe.Suspense = c, oe.SuspenseList = u, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(h) {
    return w(h) === i;
  }, oe.isContextProvider = function(h) {
    return w(h) === o;
  }, oe.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, oe.isForwardRef = function(h) {
    return w(h) === l;
  }, oe.isFragment = function(h) {
    return w(h) === t;
  }, oe.isLazy = function(h) {
    return w(h) === p;
  }, oe.isMemo = function(h) {
    return w(h) === m;
  }, oe.isPortal = function(h) {
    return w(h) === r;
  }, oe.isProfiler = function(h) {
    return w(h) === s;
  }, oe.isStrictMode = function(h) {
    return w(h) === n;
  }, oe.isSuspense = function(h) {
    return w(h) === c;
  }, oe.isSuspenseList = function(h) {
    return w(h) === u;
  }, oe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === s || h === n || h === c || h === u || h === v || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === m || h.$$typeof === o || h.$$typeof === i || h.$$typeof === l || h.$$typeof === y || h.getModuleId !== void 0);
  }, oe.typeOf = w, oe;
}
var se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function un() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, w = !1, h = !1, E = !1, z = !1, W;
    W = Symbol.for("react.module.reference");
    function D(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === t || I === s || z || I === n || I === c || I === u || E || I === v || y || w || h || typeof I == "object" && I !== null && (I.$$typeof === p || I.$$typeof === m || I.$$typeof === o || I.$$typeof === i || I.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === W || I.getModuleId !== void 0));
    }
    function f(I) {
      if (typeof I == "object" && I !== null) {
        var Q = I.$$typeof;
        switch (Q) {
          case e:
            var le = I.type;
            switch (le) {
              case t:
              case s:
              case n:
              case c:
              case u:
                return le;
              default:
                var re = le && le.$$typeof;
                switch (re) {
                  case a:
                  case i:
                  case l:
                  case p:
                  case m:
                  case o:
                    return re;
                  default:
                    return Q;
                }
            }
          case r:
            return Q;
        }
      }
    }
    var S = i, _ = o, L = e, Y = l, Z = t, ee = p, q = m, O = r, x = s, b = n, F = c, $ = u, R = !1, N = !1;
    function V(I) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(I) {
      return N || (N = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(I) {
      return f(I) === i;
    }
    function M(I) {
      return f(I) === o;
    }
    function A(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function T(I) {
      return f(I) === l;
    }
    function d(I) {
      return f(I) === t;
    }
    function j(I) {
      return f(I) === p;
    }
    function C(I) {
      return f(I) === m;
    }
    function U(I) {
      return f(I) === r;
    }
    function X(I) {
      return f(I) === s;
    }
    function K(I) {
      return f(I) === n;
    }
    function g(I) {
      return f(I) === c;
    }
    function ce(I) {
      return f(I) === u;
    }
    se.ContextConsumer = S, se.ContextProvider = _, se.Element = L, se.ForwardRef = Y, se.Fragment = Z, se.Lazy = ee, se.Memo = q, se.Portal = O, se.Profiler = x, se.StrictMode = b, se.Suspense = F, se.SuspenseList = $, se.isAsyncMode = V, se.isConcurrentMode = te, se.isContextConsumer = k, se.isContextProvider = M, se.isElement = A, se.isForwardRef = T, se.isFragment = d, se.isLazy = j, se.isMemo = C, se.isPortal = U, se.isProfiler = X, se.isStrictMode = K, se.isSuspense = g, se.isSuspenseList = ce, se.isValidElementType = D, se.typeOf = f;
  }()), se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ln() : e.exports = un();
})(cn);
function dn(e) {
  function r(k, M, A, T, d) {
    for (var j = 0, C = 0, U = 0, X = 0, K, g, ce = 0, I = 0, Q, le = Q = K = 0, re = 0, he = 0, Je = 0, fe = 0, nt = A.length, Ke = nt - 1, Ce, J = "", ue = "", pt = "", mt = "", Te; re < nt; ) {
      if (g = A.charCodeAt(re), re === Ke && C + X + U + j !== 0 && (C !== 0 && (g = C === 47 ? 10 : 47), X = U = j = 0, nt++, Ke++), C + X + U + j === 0) {
        if (re === Ke && (0 < he && (J = J.replace(p, "")), 0 < J.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += A.charAt(re);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (J = J.trim(), K = J.charCodeAt(0), Q = 1, fe = ++re; re < nt; ) {
              switch (g = A.charCodeAt(re)) {
                case 123:
                  Q++;
                  break;
                case 125:
                  Q--;
                  break;
                case 47:
                  switch (g = A.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (le = re + 1; le < Ke; ++le)
                          switch (A.charCodeAt(le)) {
                            case 47:
                              if (g === 42 && A.charCodeAt(le - 1) === 42 && re + 2 !== le) {
                                re = le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (g === 47) {
                                re = le + 1;
                                break e;
                              }
                          }
                        re = le;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; re++ < Ke && A.charCodeAt(re) !== g; )
                    ;
              }
              if (Q === 0)
                break;
              re++;
            }
            switch (Q = A.substring(fe, re), K === 0 && (K = (J = J.replace(m, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < he && (J = J.replace(p, "")), g = J.charCodeAt(1), g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    he = M;
                    break;
                  default:
                    he = F;
                }
                if (Q = r(M, he, Q, g, d + 1), fe = Q.length, 0 < R && (he = t(F, J, Je), Te = a(3, Q, he, M, O, q, fe, g, d, T), J = he.join(""), Te !== void 0 && (fe = (Q = Te.trim()).length) === 0 && (g = 0, Q = "")), 0 < fe)
                  switch (g) {
                    case 115:
                      J = J.replace(S, i);
                    case 100:
                    case 109:
                    case 45:
                      Q = J + "{" + Q + "}";
                      break;
                    case 107:
                      J = J.replace(z, "$1 $2"), Q = J + "{" + Q + "}", Q = b === 1 || b === 2 && o("@" + Q, 3) ? "@-webkit-" + Q + "@" + Q : "@" + Q;
                      break;
                    default:
                      Q = J + Q, T === 112 && (Q = (ue += Q, ""));
                  }
                else
                  Q = "";
                break;
              default:
                Q = r(M, t(M, J, Je), Q, T, d + 1);
            }
            pt += Q, Q = Je = he = le = K = 0, J = "", g = A.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (J = (0 < he ? J.replace(p, "") : J).trim(), 1 < (fe = J.length))
              switch (le === 0 && (K = J.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (fe = (J = J.replace(" ", ":")).length), 0 < R && (Te = a(1, J, M, k, O, q, ue.length, T, d, T)) !== void 0 && (fe = (J = Te.trim()).length) === 0 && (J = "\0\0"), K = J.charCodeAt(0), g = J.charCodeAt(1), K) {
                case 0:
                  break;
                case 64:
                  if (g === 105 || g === 99) {
                    mt += J + A.charAt(re);
                    break;
                  }
                default:
                  J.charCodeAt(fe - 1) !== 58 && (ue += s(J, K, g, J.charCodeAt(2)));
              }
            Je = he = le = K = 0, J = "", g = A.charCodeAt(++re);
        }
      }
      switch (g) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + K === 0 && T !== 107 && 0 < J.length && (he = 1, J += "\0"), 0 < R * V && a(0, J, M, k, O, q, ue.length, T, d, T), q = 1, O++;
          break;
        case 59:
        case 125:
          if (C + X + U + j === 0) {
            q++;
            break;
          }
        default:
          switch (q++, Ce = A.charAt(re), g) {
            case 9:
            case 32:
              if (X + j + C === 0)
                switch (ce) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ce = "";
                    break;
                  default:
                    g !== 32 && (Ce = " ");
                }
              break;
            case 0:
              Ce = "\\0";
              break;
            case 12:
              Ce = "\\f";
              break;
            case 11:
              Ce = "\\v";
              break;
            case 38:
              X + C + j === 0 && (he = Je = 1, Ce = "\f" + Ce);
              break;
            case 108:
              if (X + C + j + x === 0 && 0 < le)
                switch (re - le) {
                  case 2:
                    ce === 112 && A.charCodeAt(re - 3) === 58 && (x = ce);
                  case 8:
                    I === 111 && (x = I);
                }
              break;
            case 58:
              X + C + j === 0 && (le = re);
              break;
            case 44:
              C + U + X + j === 0 && (he = 1, Ce += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (X = X === g ? 0 : X === 0 ? g : X);
              break;
            case 91:
              X + C + U === 0 && j++;
              break;
            case 93:
              X + C + U === 0 && j--;
              break;
            case 41:
              X + C + j === 0 && U--;
              break;
            case 40:
              if (X + C + j === 0) {
                if (K === 0)
                  switch (2 * ce + 3 * I) {
                    case 533:
                      break;
                    default:
                      K = 1;
                  }
                U++;
              }
              break;
            case 64:
              C + U + X + j + le + Q === 0 && (Q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < X + j + U))
                switch (C) {
                  case 0:
                    switch (2 * g + 3 * A.charCodeAt(re + 1)) {
                      case 235:
                        C = 47;
                        break;
                      case 220:
                        fe = re, C = 42;
                    }
                    break;
                  case 42:
                    g === 47 && ce === 42 && fe + 2 !== re && (A.charCodeAt(fe + 2) === 33 && (ue += A.substring(fe, re + 1)), Ce = "", C = 0);
                }
          }
          C === 0 && (J += Ce);
      }
      I = ce, ce = g, re++;
    }
    if (fe = ue.length, 0 < fe) {
      if (he = M, 0 < R && (Te = a(2, ue, he, k, O, q, fe, T, d, T), Te !== void 0 && (ue = Te).length === 0))
        return mt + ue + pt;
      if (ue = he.join(",") + "{" + ue + "}", b * x !== 0) {
        switch (b !== 2 || o(ue, 2) || (x = 0), x) {
          case 111:
            ue = ue.replace(D, ":-moz-$1") + ue;
            break;
          case 112:
            ue = ue.replace(W, "::-webkit-input-$1") + ue.replace(W, "::-moz-$1") + ue.replace(W, ":-ms-input-$1") + ue;
        }
        x = 0;
      }
    }
    return mt + ue + pt;
  }
  function t(k, M, A) {
    var T = M.trim().split(h);
    M = T;
    var d = T.length, j = k.length;
    switch (j) {
      case 0:
      case 1:
        var C = 0;
        for (k = j === 0 ? "" : k[0] + " "; C < d; ++C)
          M[C] = n(k, M[C], A).trim();
        break;
      default:
        var U = C = 0;
        for (M = []; C < d; ++C)
          for (var X = 0; X < j; ++X)
            M[U++] = n(k[X] + " ", T[C], A).trim();
    }
    return M;
  }
  function n(k, M, A) {
    var T = M.charCodeAt(0);
    switch (33 > T && (T = (M = M.trim()).charCodeAt(0)), T) {
      case 38:
        return M.replace(E, "$1" + k.trim());
      case 58:
        return k.trim() + M.replace(E, "$1" + k.trim());
      default:
        if (0 < 1 * A && 0 < M.indexOf("\f"))
          return M.replace(E, (k.charCodeAt(0) === 58 ? "" : "$1") + k.trim());
    }
    return k + M;
  }
  function s(k, M, A, T) {
    var d = k + ";", j = 2 * M + 3 * A + 4 * T;
    if (j === 944) {
      k = d.indexOf(":", 9) + 1;
      var C = d.substring(k, d.length - 1).trim();
      return C = d.substring(0, k).trim() + C + ";", b === 1 || b === 2 && o(C, 1) ? "-webkit-" + C + C : C;
    }
    if (b === 0 || b === 2 && !o(d, 1))
      return d;
    switch (j) {
      case 1015:
        return d.charCodeAt(10) === 97 ? "-webkit-" + d + d : d;
      case 951:
        return d.charCodeAt(3) === 116 ? "-webkit-" + d + d : d;
      case 963:
        return d.charCodeAt(5) === 110 ? "-webkit-" + d + d : d;
      case 1009:
        if (d.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + d + d;
      case 978:
        return "-webkit-" + d + "-moz-" + d + d;
      case 1019:
      case 983:
        return "-webkit-" + d + "-moz-" + d + "-ms-" + d + d;
      case 883:
        if (d.charCodeAt(8) === 45)
          return "-webkit-" + d + d;
        if (0 < d.indexOf("image-set(", 11))
          return d.replace(ee, "$1-webkit-$2") + d;
        break;
      case 932:
        if (d.charCodeAt(4) === 45)
          switch (d.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + d.replace("-grow", "") + "-webkit-" + d + "-ms-" + d.replace("grow", "positive") + d;
            case 115:
              return "-webkit-" + d + "-ms-" + d.replace("shrink", "negative") + d;
            case 98:
              return "-webkit-" + d + "-ms-" + d.replace("basis", "preferred-size") + d;
          }
        return "-webkit-" + d + "-ms-" + d + d;
      case 964:
        return "-webkit-" + d + "-ms-flex-" + d + d;
      case 1023:
        if (d.charCodeAt(8) !== 99)
          break;
        return C = d.substring(d.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + d + "-ms-flex-pack" + C + d;
      case 1005:
        return y.test(d) ? d.replace(v, ":-webkit-") + d.replace(v, ":-moz-") + d : d;
      case 1e3:
        switch (C = d.substring(13).trim(), M = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(M)) {
          case 226:
            C = d.replace(f, "tb");
            break;
          case 232:
            C = d.replace(f, "tb-rl");
            break;
          case 220:
            C = d.replace(f, "lr");
            break;
          default:
            return d;
        }
        return "-webkit-" + d + "-ms-" + C + d;
      case 1017:
        if (d.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (M = (d = k).length - 10, C = (d.charCodeAt(M) === 33 ? d.substring(0, M) : d).substring(k.indexOf(":", 7) + 1).trim(), j = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8))
              break;
          case 115:
            d = d.replace(C, "-webkit-" + C) + ";" + d;
            break;
          case 207:
          case 102:
            d = d.replace(C, "-webkit-" + (102 < j ? "inline-" : "") + "box") + ";" + d.replace(C, "-webkit-" + C) + ";" + d.replace(C, "-ms-" + C + "box") + ";" + d;
        }
        return d + ";";
      case 938:
        if (d.charCodeAt(5) === 45)
          switch (d.charCodeAt(6)) {
            case 105:
              return C = d.replace("-items", ""), "-webkit-" + d + "-webkit-box-" + C + "-ms-flex-" + C + d;
            case 115:
              return "-webkit-" + d + "-ms-flex-item-" + d.replace(L, "") + d;
            default:
              return "-webkit-" + d + "-ms-flex-line-pack" + d.replace("align-content", "").replace(L, "") + d;
          }
        break;
      case 973:
      case 989:
        if (d.charCodeAt(3) !== 45 || d.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (Z.test(k) === !0)
          return (C = k.substring(k.indexOf(":") + 1)).charCodeAt(0) === 115 ? s(k.replace("stretch", "fill-available"), M, A, T).replace(":fill-available", ":stretch") : d.replace(C, "-webkit-" + C) + d.replace(C, "-moz-" + C.replace("fill-", "")) + d;
        break;
      case 962:
        if (d = "-webkit-" + d + (d.charCodeAt(5) === 102 ? "-ms-" + d : "") + d, A + T === 211 && d.charCodeAt(13) === 105 && 0 < d.indexOf("transform", 10))
          return d.substring(0, d.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + d;
    }
    return d;
  }
  function o(k, M) {
    var A = k.indexOf(M === 1 ? ":" : "{"), T = k.substring(0, M !== 3 ? A : 10);
    return A = k.substring(A + 1, k.length - 1), N(M !== 2 ? T : T.replace(Y, "$1"), A, M);
  }
  function i(k, M) {
    var A = s(M, M.charCodeAt(0), M.charCodeAt(1), M.charCodeAt(2));
    return A !== M + ";" ? A.replace(_, " or ($1)").substring(4) : "(" + M + ")";
  }
  function a(k, M, A, T, d, j, C, U, X, K) {
    for (var g = 0, ce = M, I; g < R; ++g)
      switch (I = $[g].call(u, k, ce, A, T, d, j, C, U, X, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = I;
      }
    if (ce !== M)
      return ce;
  }
  function l(k) {
    switch (k) {
      case void 0:
      case null:
        R = $.length = 0;
        break;
      default:
        if (typeof k == "function")
          $[R++] = k;
        else if (typeof k == "object")
          for (var M = 0, A = k.length; M < A; ++M)
            l(k[M]);
        else
          V = !!k | 0;
    }
    return l;
  }
  function c(k) {
    return k = k.prefix, k !== void 0 && (N = null, k ? typeof k != "function" ? b = 1 : (b = 2, N = k) : b = 0), c;
  }
  function u(k, M) {
    var A = k;
    if (33 > A.charCodeAt(0) && (A = A.trim()), te = A, A = [te], 0 < R) {
      var T = a(-1, M, A, A, O, q, 0, 0, 0, 0);
      T !== void 0 && typeof T == "string" && (M = T);
    }
    var d = r(F, A, M, 0, 0);
    return 0 < R && (T = a(-2, d, A, A, O, q, d.length, 0, 0, 0), T !== void 0 && (d = T)), te = "", x = 0, q = O = 1, d;
  }
  var m = /^\0+/g, p = /[\0\r\f]/g, v = /: */g, y = /zoo|gra/, w = /([,: ])(transform)/g, h = /,\r+?/g, E = /([\t\r\n ])*\f?&/g, z = /@(k\w+)\s*(\S*)\s*/, W = /::(place)/g, D = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, S = /\(\s*(.*)\s*\)/g, _ = /([\s\S]*?);/g, L = /-self|flex-/g, Y = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Z = /stretch|:\s*\w+\-(?:conte|avail)/, ee = /([^-])(image-set\()/, q = 1, O = 1, x = 0, b = 1, F = [], $ = [], R = 0, N = null, V = 0, te = "";
  return u.use = l, u.set = c, e !== void 0 && c(e), u;
}
var hn = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function fn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var pn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Jt = /* @__PURE__ */ fn(
  function(e) {
    return pn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ct = {}, mn = {
  get exports() {
    return Ct;
  },
  set exports(e) {
    Ct = e;
  }
}, ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function vn() {
  if (Kt)
    return ie;
  Kt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function W(f) {
    if (typeof f == "object" && f !== null) {
      var S = f.$$typeof;
      switch (S) {
        case r:
          switch (f = f.type, f) {
            case l:
            case c:
            case n:
            case o:
            case s:
            case m:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case u:
                case y:
                case v:
                case i:
                  return f;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  function D(f) {
    return W(f) === c;
  }
  return ie.AsyncMode = l, ie.ConcurrentMode = c, ie.ContextConsumer = a, ie.ContextProvider = i, ie.Element = r, ie.ForwardRef = u, ie.Fragment = n, ie.Lazy = y, ie.Memo = v, ie.Portal = t, ie.Profiler = o, ie.StrictMode = s, ie.Suspense = m, ie.isAsyncMode = function(f) {
    return D(f) || W(f) === l;
  }, ie.isConcurrentMode = D, ie.isContextConsumer = function(f) {
    return W(f) === a;
  }, ie.isContextProvider = function(f) {
    return W(f) === i;
  }, ie.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, ie.isForwardRef = function(f) {
    return W(f) === u;
  }, ie.isFragment = function(f) {
    return W(f) === n;
  }, ie.isLazy = function(f) {
    return W(f) === y;
  }, ie.isMemo = function(f) {
    return W(f) === v;
  }, ie.isPortal = function(f) {
    return W(f) === t;
  }, ie.isProfiler = function(f) {
    return W(f) === o;
  }, ie.isStrictMode = function(f) {
    return W(f) === s;
  }, ie.isSuspense = function(f) {
    return W(f) === m;
  }, ie.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === c || f === o || f === s || f === m || f === p || typeof f == "object" && f !== null && (f.$$typeof === y || f.$$typeof === v || f.$$typeof === i || f.$$typeof === a || f.$$typeof === u || f.$$typeof === h || f.$$typeof === E || f.$$typeof === z || f.$$typeof === w);
  }, ie.typeOf = W, ie;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function yn() {
  return Qt || (Qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function W(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === c || g === o || g === s || g === m || g === p || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === v || g.$$typeof === i || g.$$typeof === a || g.$$typeof === u || g.$$typeof === h || g.$$typeof === E || g.$$typeof === z || g.$$typeof === w);
    }
    function D(g) {
      if (typeof g == "object" && g !== null) {
        var ce = g.$$typeof;
        switch (ce) {
          case r:
            var I = g.type;
            switch (I) {
              case l:
              case c:
              case n:
              case o:
              case s:
              case m:
                return I;
              default:
                var Q = I && I.$$typeof;
                switch (Q) {
                  case a:
                  case u:
                  case y:
                  case v:
                  case i:
                    return Q;
                  default:
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var f = l, S = c, _ = a, L = i, Y = r, Z = u, ee = n, q = y, O = v, x = t, b = o, F = s, $ = m, R = !1;
    function N(g) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), V(g) || D(g) === l;
    }
    function V(g) {
      return D(g) === c;
    }
    function te(g) {
      return D(g) === a;
    }
    function k(g) {
      return D(g) === i;
    }
    function M(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function A(g) {
      return D(g) === u;
    }
    function T(g) {
      return D(g) === n;
    }
    function d(g) {
      return D(g) === y;
    }
    function j(g) {
      return D(g) === v;
    }
    function C(g) {
      return D(g) === t;
    }
    function U(g) {
      return D(g) === o;
    }
    function X(g) {
      return D(g) === s;
    }
    function K(g) {
      return D(g) === m;
    }
    ae.AsyncMode = f, ae.ConcurrentMode = S, ae.ContextConsumer = _, ae.ContextProvider = L, ae.Element = Y, ae.ForwardRef = Z, ae.Fragment = ee, ae.Lazy = q, ae.Memo = O, ae.Portal = x, ae.Profiler = b, ae.StrictMode = F, ae.Suspense = $, ae.isAsyncMode = N, ae.isConcurrentMode = V, ae.isContextConsumer = te, ae.isContextProvider = k, ae.isElement = M, ae.isForwardRef = A, ae.isFragment = T, ae.isLazy = d, ae.isMemo = j, ae.isPortal = C, ae.isProfiler = U, ae.isStrictMode = X, ae.isSuspense = K, ae.isValidElementType = W, ae.typeOf = D;
  }()), ae;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = vn() : e.exports = yn();
})(mn);
var Yt = Ct, gn = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, wn = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, bn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Pr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, zt = {};
zt[Yt.ForwardRef] = bn;
zt[Yt.Memo] = Pr;
function er(e) {
  return Yt.isMemo(e) ? Pr : zt[e.$$typeof] || gn;
}
var xn = Object.defineProperty, Cn = Object.getOwnPropertyNames, tr = Object.getOwnPropertySymbols, Sn = Object.getOwnPropertyDescriptor, $n = Object.getPrototypeOf, rr = Object.prototype;
function Ar(e, r, t) {
  if (typeof r != "string") {
    if (rr) {
      var n = $n(r);
      n && n !== rr && Ar(e, n, t);
    }
    var s = Cn(r);
    tr && (s = s.concat(tr(r)));
    for (var o = er(e), i = er(r), a = 0; a < s.length; ++a) {
      var l = s[a];
      if (!wn[l] && !(t && t[l]) && !(i && i[l]) && !(o && o[l])) {
        var c = Sn(r, l);
        try {
          xn(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var En = Ar;
function Se() {
  return (Se = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var nr = function(e, r) {
  for (var t = [e[0]], n = 0, s = r.length; n < s; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, St = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !rt.typeOf(e);
}, lt = Object.freeze([]), Re = Object.freeze({});
function Fe(e) {
  return typeof e == "function";
}
function $t(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ft(e) {
  return e && typeof e.styledComponentId == "string";
}
var Be = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Bt = typeof window < "u" && "HTMLElement" in window, kn = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Mn = {}, _n = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Pn() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(s) {
    e = e.replace(/%[a-z]/, s);
  }), e;
}
function Pe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Pn.apply(void 0, [_n[e]].concat(t)).trim());
}
var An = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, s = 0; s < t; s++)
      n += this.groupSizes[s];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var s = this.groupSizes, o = s.length, i = o; t >= i; )
        (i <<= 1) < 0 && Pe(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(s), this.length = i;
      for (var a = o; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), c = 0, u = n.length; c < u; c++)
      this.tag.insertRule(l, n[c]) && (this.groupSizes[t]++, l++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], s = this.indexOfGroup(t), o = s + n;
      this.groupSizes[t] = 0;
      for (var i = s; i < o; i++)
        this.tag.deleteRule(s);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var s = this.groupSizes[t], o = this.indexOfGroup(t), i = o + s, a = o; a < i; a++)
      n += this.tag.getRule(a) + `/*!sc*/
`;
    return n;
  }, e;
}(), at = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), et = 1, ot = function(e) {
  if (at.has(e))
    return at.get(e);
  for (; ut.has(et); )
    et++;
  var r = et++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Pe(16, "" + r), at.set(e, r), ut.set(r, e), r;
}, Tn = function(e) {
  return ut.get(e);
}, On = function(e, r) {
  r >= et && (et = r + 1), at.set(e, r), ut.set(r, e);
}, Rn = "style[" + Be + '][data-styled-version="5.3.8"]', In = new RegExp("^" + Be + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Dn = function(e, r, t) {
  for (var n, s = t.split(","), o = 0, i = s.length; o < i; o++)
    (n = s[o]) && e.registerName(r, n);
}, Nn = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], s = 0, o = t.length; s < o; s++) {
    var i = t[s].trim();
    if (i) {
      var a = i.match(In);
      if (a) {
        var l = 0 | parseInt(a[1], 10), c = a[2];
        l !== 0 && (On(c, l), Dn(e, c, a[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, Ln = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Tr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), s = function(a) {
    for (var l = a.childNodes, c = l.length; c >= 0; c--) {
      var u = l[c];
      if (u && u.nodeType === 1 && u.hasAttribute(Be))
        return u;
    }
  }(t), o = s !== void 0 ? s.nextSibling : null;
  n.setAttribute(Be, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = Ln();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, o), n;
}, Zn = function() {
  function e(t) {
    var n = this.element = Tr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(s) {
      if (s.sheet)
        return s.sheet;
      for (var o = document.styleSheets, i = 0, a = o.length; i < a; i++) {
        var l = o[i];
        if (l.ownerNode === s)
          return l;
      }
      Pe(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Wn = function() {
  function e(t) {
    var n = this.element = Tr(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var s = document.createTextNode(n), o = this.nodes[t];
      return this.element.insertBefore(s, o || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Yn = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), or = Bt, zn = { isServer: !Bt, useCSSOMInjection: !kn }, dt = function() {
  function e(t, n, s) {
    t === void 0 && (t = Re), n === void 0 && (n = {}), this.options = Se({}, zn, {}, t), this.gs = n, this.names = new Map(s), this.server = !!t.isServer, !this.server && Bt && or && (or = !1, function(o) {
      for (var i = document.querySelectorAll(Rn), a = 0, l = i.length; a < l; a++) {
        var c = i[a];
        c && c.getAttribute(Be) !== "active" && (Nn(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(t) {
    return ot(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Se({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (s = (n = this.options).isServer, o = n.useCSSOMInjection, i = n.target, t = s ? new Yn(i) : o ? new Zn(i) : new Wn(i), new An(t)));
    var t, n, s, o, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (ot(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var s = /* @__PURE__ */ new Set();
      s.add(n), this.names.set(t, s);
    }
  }, r.insertRules = function(t, n, s) {
    this.registerName(t, n), this.getTag().insertRules(ot(t), s);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(ot(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), s = n.length, o = "", i = 0; i < s; i++) {
        var a = Tn(i);
        if (a !== void 0) {
          var l = t.names.get(a), c = n.getGroup(i);
          if (l && c && l.size) {
            var u = Be + ".g" + i + '[id="' + a + '"]', m = "";
            l !== void 0 && l.forEach(function(p) {
              p.length > 0 && (m += p + ",");
            }), o += "" + c + u + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), Fn = /(a)(d)/gi, sr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Et(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = sr(r % 52) + t;
  return (sr(r % 52) + t).replace(Fn, "$1-$2");
}
var Le = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Or = function(e) {
  return Le(5381, e);
};
function Rr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Fe(t) && !Ft(t))
      return !1;
  }
  return !0;
}
var Bn = Or("5.3.8"), Hn = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Rr(r), this.componentId = t, this.baseHash = Le(Bn, t), this.baseStyle = n, dt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var s = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(s, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var i = Ye(this.rules, r, t, n).join(""), a = Et(Le(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(s, a)) {
          var l = n(i, "." + a, void 0, s);
          t.insertRules(s, a, l);
        }
        o.push(a), this.staticRulesId = a;
      }
    else {
      for (var c = this.rules.length, u = Le(this.baseHash, n.hash), m = "", p = 0; p < c; p++) {
        var v = this.rules[p];
        if (typeof v == "string")
          m += v, process.env.NODE_ENV !== "production" && (u = Le(u, v + p));
        else if (v) {
          var y = Ye(v, r, t, n), w = Array.isArray(y) ? y.join("") : y;
          u = Le(u, w + p), m += w;
        }
      }
      if (m) {
        var h = Et(u >>> 0);
        if (!t.hasNameForId(s, h)) {
          var E = n(m, "." + h, void 0, s);
          t.insertRules(s, h, E);
        }
        o.push(h);
      }
    }
    return o.join(" ");
  }, e;
}(), jn = /^\s*\/\/.*$/gm, Vn = [":", "[", ".", "#"];
function Gn(e) {
  var r, t, n, s, o = e === void 0 ? Re : e, i = o.options, a = i === void 0 ? Re : i, l = o.plugins, c = l === void 0 ? lt : l, u = new dn(a), m = [], p = function(w) {
    function h(E) {
      if (E)
        try {
          w(E + "}");
        } catch {
        }
    }
    return function(E, z, W, D, f, S, _, L, Y, Z) {
      switch (E) {
        case 1:
          if (Y === 0 && z.charCodeAt(0) === 64)
            return w(z + ";"), "";
          break;
        case 2:
          if (L === 0)
            return z + "/*|*/";
          break;
        case 3:
          switch (L) {
            case 102:
            case 112:
              return w(W[0] + z), "";
            default:
              return z + (Z === 0 ? "/*|*/" : "");
          }
        case -2:
          z.split("/*|*/}").forEach(h);
      }
    };
  }(function(w) {
    m.push(w);
  }), v = function(w, h, E) {
    return h === 0 && Vn.indexOf(E[t.length]) !== -1 || E.match(s) ? w : "." + r;
  };
  function y(w, h, E, z) {
    z === void 0 && (z = "&");
    var W = w.replace(jn, ""), D = h && E ? E + " " + h + " { " + W + " }" : W;
    return r = z, t = h, n = new RegExp("\\" + t + "\\b", "g"), s = new RegExp("(\\" + t + "\\b){2,}"), u(E || !h ? "" : h, D);
  }
  return u.use([].concat(c, [function(w, h, E) {
    w === 2 && E.length && E[0].lastIndexOf(t) > 0 && (E[0] = E[0].replace(n, v));
  }, p, function(w) {
    if (w === -2) {
      var h = m;
      return m = [], h;
    }
  }])), y.hash = c.length ? c.reduce(function(w, h) {
    return h.name || Pe(15), Le(w, h.name);
  }, 5381).toString() : "", y;
}
var Ir = We.createContext();
Ir.Consumer;
var Dr = We.createContext(), Un = (Dr.Consumer, new dt()), kt = Gn();
function Nr() {
  return Ne(Ir) || Un;
}
function Lr() {
  return Ne(Dr) || kt;
}
var Zr = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(s, o) {
      o === void 0 && (o = kt);
      var i = n.name + o.hash;
      s.hasNameForId(n.id, i) || s.insertRules(n.id, i, o(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Pe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = kt), this.name + r.hash;
  }, e;
}(), Xn = /([A-Z])/, qn = /([A-Z])/g, Jn = /^ms-/, Kn = function(e) {
  return "-" + e.toLowerCase();
};
function ir(e) {
  return Xn.test(e) ? e.replace(qn, Kn).replace(Jn, "-ms-") : e;
}
var ar = function(e) {
  return e == null || e === !1 || e === "";
};
function Ye(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var s, o = [], i = 0, a = e.length; i < a; i += 1)
      (s = Ye(e[i], r, t, n)) !== "" && (Array.isArray(s) ? o.push.apply(o, s) : o.push(s));
    return o;
  }
  if (ar(e))
    return "";
  if (Ft(e))
    return "." + e.styledComponentId;
  if (Fe(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && rt.isElement(l) && console.warn($t(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ye(l, r, t, n);
  }
  var c;
  return e instanceof Zr ? t ? (e.inject(t, n), e.getName(n)) : e : St(e) ? function u(m, p) {
    var v, y, w = [];
    for (var h in m)
      m.hasOwnProperty(h) && !ar(m[h]) && (Array.isArray(m[h]) && m[h].isCss || Fe(m[h]) ? w.push(ir(h) + ":", m[h], ";") : St(m[h]) ? w.push.apply(w, u(m[h], h)) : w.push(ir(h) + ": " + (v = h, (y = m[h]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || v in hn ? String(y).trim() : y + "px") + ";"));
    return p ? [p + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var cr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ht(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return Fe(e) || St(e) ? cr(Ye(nr(lt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : cr(Ye(nr(e, t)));
}
var lr = /invalid hook call/i, st = /* @__PURE__ */ new Set(), Wr = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var s = !0;
      console.error = function(o) {
        if (lr.test(o))
          s = !1, st.delete(t);
        else {
          for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            a[l - 1] = arguments[l];
          n.apply(void 0, [o].concat(a));
        }
      }, ge(), s && !st.has(t) && (console.warn(t), st.add(t));
    } catch (o) {
      lr.test(o.message) && st.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Yr = function(e, r, t) {
  return t === void 0 && (t = Re), e.theme !== t.theme && e.theme || r || t.theme;
}, Qn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, eo = /(^-|-$)/g;
function vt(e) {
  return e.replace(Qn, "-").replace(eo, "");
}
var jt = function(e) {
  return Et(Or(e) >>> 0);
};
function it(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Mt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, to = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ro(e, r, t) {
  var n = e[t];
  Mt(r) && Mt(n) ? zr(n, r) : e[t] = r;
}
function zr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var s = 0, o = t; s < o.length; s++) {
    var i = o[s];
    if (Mt(i))
      for (var a in i)
        to(a) && ro(e, i[a], a);
  }
  return e;
}
var He = We.createContext();
He.Consumer;
function no(e) {
  var r = Ne(He), t = Me(function() {
    return function(n, s) {
      if (!n)
        return Pe(14);
      if (Fe(n)) {
        var o = n(s);
        return process.env.NODE_ENV === "production" || o !== null && !Array.isArray(o) && typeof o == "object" ? o : Pe(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Pe(8) : s ? Se({}, s, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? We.createElement(He.Provider, { value: t }, e.children) : null;
}
var yt = {};
function Fr(e, r, t) {
  var n = Ft(e), s = !it(e), o = r.attrs, i = o === void 0 ? lt : o, a = r.componentId, l = a === void 0 ? function(z, W) {
    var D = typeof z != "string" ? "sc" : vt(z);
    yt[D] = (yt[D] || 0) + 1;
    var f = D + "-" + jt("5.3.8" + D + yt[D]);
    return W ? W + "-" + f : f;
  }(r.displayName, r.parentComponentId) : a, c = r.displayName, u = c === void 0 ? function(z) {
    return it(z) ? "styled." + z : "Styled(" + $t(z) + ")";
  }(e) : c, m = r.displayName && r.componentId ? vt(r.displayName) + "-" + r.componentId : r.componentId || l, p = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, v = r.shouldForwardProp;
  n && e.shouldForwardProp && (v = r.shouldForwardProp ? function(z, W, D) {
    return e.shouldForwardProp(z, W, D) && r.shouldForwardProp(z, W, D);
  } : e.shouldForwardProp);
  var y, w = new Hn(t, m, n ? e.componentStyle : void 0), h = w.isStatic && i.length === 0, E = function(z, W) {
    return function(D, f, S, _) {
      var L = D.attrs, Y = D.componentStyle, Z = D.defaultProps, ee = D.foldedComponentIds, q = D.shouldForwardProp, O = D.styledComponentId, x = D.target;
      process.env.NODE_ENV !== "production" && Ut(O);
      var b = function(T, d, j) {
        T === void 0 && (T = Re);
        var C = Se({}, d, { theme: T }), U = {};
        return j.forEach(function(X) {
          var K, g, ce, I = X;
          for (K in Fe(I) && (I = I(C)), I)
            C[K] = U[K] = K === "className" ? (g = U[K], ce = I[K], g && ce ? g + " " + ce : g || ce) : I[K];
        }), [C, U];
      }(Yr(f, Ne(He), Z) || Re, f, L), F = b[0], $ = b[1], R = function(T, d, j, C) {
        var U = Nr(), X = Lr(), K = d ? T.generateAndInjectStyles(Re, U, X) : T.generateAndInjectStyles(j, U, X);
        return process.env.NODE_ENV !== "production" && Ut(K), process.env.NODE_ENV !== "production" && !d && C && C(K), K;
      }(Y, _, F, process.env.NODE_ENV !== "production" ? D.warnTooManyClasses : void 0), N = S, V = $.$as || f.$as || $.as || f.as || x, te = it(V), k = $ !== f ? Se({}, f, {}, $) : f, M = {};
      for (var A in k)
        A[0] !== "$" && A !== "as" && (A === "forwardedAs" ? M.as = k[A] : (q ? q(A, Jt, V) : !te || Jt(A)) && (M[A] = k[A]));
      return f.style && $.style !== f.style && (M.style = Se({}, f.style, {}, $.style)), M.className = Array.prototype.concat(ee, O, R !== O ? R : null, f.className, $.className).filter(Boolean).join(" "), M.ref = N, sn(V, M);
    }(y, z, W, h);
  };
  return E.displayName = u, (y = We.forwardRef(E)).attrs = p, y.componentStyle = w, y.displayName = u, y.shouldForwardProp = v, y.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : lt, y.styledComponentId = m, y.target = n ? e.target : e, y.withComponent = function(z) {
    var W = r.componentId, D = function(S, _) {
      if (S == null)
        return {};
      var L, Y, Z = {}, ee = Object.keys(S);
      for (Y = 0; Y < ee.length; Y++)
        L = ee[Y], _.indexOf(L) >= 0 || (Z[L] = S[L]);
      return Z;
    }(r, ["componentId"]), f = W && W + "-" + (it(z) ? z : vt($t(z)));
    return Fr(z, Se({}, D, { attrs: p, componentId: f }), t);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(z) {
    this._foldedDefaultProps = n ? zr({}, e.defaultProps, z) : z;
  } }), process.env.NODE_ENV !== "production" && (Wr(u, m), y.warnTooManyClasses = function(z, W) {
    var D = {}, f = !1;
    return function(S) {
      if (!f && (D[S] = !0, Object.keys(D).length >= 200)) {
        var _ = W ? ' with the id of "' + W + '"' : "";
        console.warn("Over 200 classes were generated for component " + z + _ + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, D = {};
      }
    };
  }(u, m)), y.toString = function() {
    return "." + y.styledComponentId;
  }, s && En(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var _t = function(e) {
  return function r(t, n, s) {
    if (s === void 0 && (s = Re), !rt.isValidElementType(n))
      return Pe(1, String(n));
    var o = function() {
      return t(n, s, Ht.apply(void 0, arguments));
    };
    return o.withConfig = function(i) {
      return r(t, n, Se({}, s, {}, i));
    }, o.attrs = function(i) {
      return r(t, n, Se({}, s, { attrs: Array.prototype.concat(s.attrs, i).filter(Boolean) }));
    }, o;
  }(Fr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  _t[e] = _t(e);
});
var oo = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Rr(t), dt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, s, o) {
    var i = o(Ye(this.rules, n, s, o).join(""), ""), a = this.componentId + t;
    s.insertRules(a, a, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, s, o) {
    t > 2 && dt.registerId(this.componentId + t), this.removeStyles(t, s), this.createStyles(t, n, s, o);
  }, e;
}();
function so(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var s = Ht.apply(void 0, [e].concat(t)), o = "sc-global-" + jt(JSON.stringify(s)), i = new oo(s, o);
  function a(c) {
    var u = Nr(), m = Lr(), p = Ne(He), v = ge(u.allocateGSInstance(o)).current;
    return process.env.NODE_ENV !== "production" && We.Children.count(c.children) && console.warn("The global style component " + o + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && s.some(function(y) {
      return typeof y == "string" && y.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), u.server && l(v, c, u, p, m), Mr(function() {
      if (!u.server)
        return l(v, c, u, p, m), function() {
          return i.removeStyles(v, u);
        };
    }, [v, c, u, p, m]), null;
  }
  function l(c, u, m, p, v) {
    if (i.isStatic)
      i.renderStyles(c, Mn, m, v);
    else {
      var y = Se({}, u, { theme: Yr(u, p, a.defaultProps) });
      i.renderStyles(c, y, m, v);
    }
  }
  return process.env.NODE_ENV !== "production" && Wr(o), We.memo(a);
}
function io(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var s = Ht.apply(void 0, [e].concat(t)).join(""), o = jt(s);
  return new Zr(o, s);
}
var Vt = function() {
  return Ne(He);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const B = _t, Qe = "reactSchedulerOutsideWrapper", ao = so`

  #${Qe} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Qe} *,
 #${Qe} *:before,
 #${Qe} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, de = {
  navHeight: "44px",
  colors: {
    black: "#1C222F",
    grey400: "#D2D2D2",
    grey600: "#777777",
    blue900: "#3B3C5F",
    blue100: "#F8F8FD",
    blue300: "#C9E5FF",
    blue400: "#0A11EB",
    blue200: "#E6F3FF",
    red400: "#EF4444",
    white: "#FFFFFF"
  }
}, Ve = `
margin: 0;
padding: 0;
`, Br = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
B.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const pe = 50, Ae = 24, Ge = 16, Ze = 40, je = Ze + Ge + Ae, ke = 84, xe = 56, Ie = 196, _e = 12, ur = 52, dr = de.colors.blue100, De = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, Ee = 3, co = 1.6, lo = 4.5, Pt = 12, uo = "reactSchedulerCanvasHeaderWrapper", Hr = "reactSchedulerCanvasWrapper", Gt = Qe, ho = 4, fo = 48, Oe = 5, po = 40, mo = 8, jr = Ae / 2 + 2, Vr = Ge / 2 + Ae + 1, hr = 2, fr = 4, ze = 60, vo = "rgb(114,141,226)";
var ht = {}, yo = {
  get exports() {
    return ht;
  },
  set exports(e) {
    ht = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(be, function() {
    var t = 1e3, n = 6e4, s = 36e5, o = "millisecond", i = "second", a = "minute", l = "hour", c = "day", u = "week", m = "month", p = "quarter", v = "year", y = "date", w = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, z = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var x = ["th", "st", "nd", "rd"], b = O % 100;
      return "[" + O + (x[(b - 20) % 10] || x[b] || x[0]) + "]";
    } }, W = function(O, x, b) {
      var F = String(O);
      return !F || F.length >= x ? O : "" + Array(x + 1 - F.length).join(b) + O;
    }, D = { s: W, z: function(O) {
      var x = -O.utcOffset(), b = Math.abs(x), F = Math.floor(b / 60), $ = b % 60;
      return (x <= 0 ? "+" : "-") + W(F, 2, "0") + ":" + W($, 2, "0");
    }, m: function O(x, b) {
      if (x.date() < b.date())
        return -O(b, x);
      var F = 12 * (b.year() - x.year()) + (b.month() - x.month()), $ = x.clone().add(F, m), R = b - $ < 0, N = x.clone().add(F + (R ? -1 : 1), m);
      return +(-(F + (b - $) / (R ? $ - N : N - $)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: m, y: v, w: u, d: c, D: y, h: l, m: a, s: i, ms: o, Q: p }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, f = "en", S = {};
    S[f] = z;
    var _ = function(O) {
      return O instanceof ee;
    }, L = function O(x, b, F) {
      var $;
      if (!x)
        return f;
      if (typeof x == "string") {
        var R = x.toLowerCase();
        S[R] && ($ = R), b && (S[R] = b, $ = R);
        var N = x.split("-");
        if (!$ && N.length > 1)
          return O(N[0]);
      } else {
        var V = x.name;
        S[V] = x, $ = V;
      }
      return !F && $ && (f = $), $ || !F && f;
    }, Y = function(O, x) {
      if (_(O))
        return O.clone();
      var b = typeof x == "object" ? x : {};
      return b.date = O, b.args = arguments, new ee(b);
    }, Z = D;
    Z.l = L, Z.i = _, Z.w = function(O, x) {
      return Y(O, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var ee = function() {
      function O(b) {
        this.$L = L(b.locale, null, !0), this.parse(b);
      }
      var x = O.prototype;
      return x.parse = function(b) {
        this.$d = function(F) {
          var $ = F.date, R = F.utc;
          if ($ === null)
            return new Date(NaN);
          if (Z.u($))
            return new Date();
          if ($ instanceof Date)
            return new Date($);
          if (typeof $ == "string" && !/Z$/i.test($)) {
            var N = $.match(h);
            if (N) {
              var V = N[2] - 1 || 0, te = (N[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(N[1], V, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, te)) : new Date(N[1], V, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, te);
            }
          }
          return new Date($);
        }(b), this.$x = b.x || {}, this.init();
      }, x.init = function() {
        var b = this.$d;
        this.$y = b.getFullYear(), this.$M = b.getMonth(), this.$D = b.getDate(), this.$W = b.getDay(), this.$H = b.getHours(), this.$m = b.getMinutes(), this.$s = b.getSeconds(), this.$ms = b.getMilliseconds();
      }, x.$utils = function() {
        return Z;
      }, x.isValid = function() {
        return this.$d.toString() !== w;
      }, x.isSame = function(b, F) {
        var $ = Y(b);
        return this.startOf(F) <= $ && $ <= this.endOf(F);
      }, x.isAfter = function(b, F) {
        return Y(b) < this.startOf(F);
      }, x.isBefore = function(b, F) {
        return this.endOf(F) < Y(b);
      }, x.$g = function(b, F, $) {
        return Z.u(b) ? this[F] : this.set($, b);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(b, F) {
        var $ = this, R = !!Z.u(F) || F, N = Z.p(b), V = function(C, U) {
          var X = Z.w($.$u ? Date.UTC($.$y, U, C) : new Date($.$y, U, C), $);
          return R ? X : X.endOf(c);
        }, te = function(C, U) {
          return Z.w($.toDate()[C].apply($.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(U)), $);
        }, k = this.$W, M = this.$M, A = this.$D, T = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case v:
            return R ? V(1, 0) : V(31, 11);
          case m:
            return R ? V(1, M) : V(0, M + 1);
          case u:
            var d = this.$locale().weekStart || 0, j = (k < d ? k + 7 : k) - d;
            return V(R ? A - j : A + (6 - j), M);
          case c:
          case y:
            return te(T + "Hours", 0);
          case l:
            return te(T + "Minutes", 1);
          case a:
            return te(T + "Seconds", 2);
          case i:
            return te(T + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(b) {
        return this.startOf(b, !1);
      }, x.$set = function(b, F) {
        var $, R = Z.p(b), N = "set" + (this.$u ? "UTC" : ""), V = ($ = {}, $[c] = N + "Date", $[y] = N + "Date", $[m] = N + "Month", $[v] = N + "FullYear", $[l] = N + "Hours", $[a] = N + "Minutes", $[i] = N + "Seconds", $[o] = N + "Milliseconds", $)[R], te = R === c ? this.$D + (F - this.$W) : F;
        if (R === m || R === v) {
          var k = this.clone().set(y, 1);
          k.$d[V](te), k.init(), this.$d = k.set(y, Math.min(this.$D, k.daysInMonth())).$d;
        } else
          V && this.$d[V](te);
        return this.init(), this;
      }, x.set = function(b, F) {
        return this.clone().$set(b, F);
      }, x.get = function(b) {
        return this[Z.p(b)]();
      }, x.add = function(b, F) {
        var $, R = this;
        b = Number(b);
        var N = Z.p(F), V = function(M) {
          var A = Y(R);
          return Z.w(A.date(A.date() + Math.round(M * b)), R);
        };
        if (N === m)
          return this.set(m, this.$M + b);
        if (N === v)
          return this.set(v, this.$y + b);
        if (N === c)
          return V(1);
        if (N === u)
          return V(7);
        var te = ($ = {}, $[a] = n, $[l] = s, $[i] = t, $)[N] || 1, k = this.$d.getTime() + b * te;
        return Z.w(k, this);
      }, x.subtract = function(b, F) {
        return this.add(-1 * b, F);
      }, x.format = function(b) {
        var F = this, $ = this.$locale();
        if (!this.isValid())
          return $.invalidDate || w;
        var R = b || "YYYY-MM-DDTHH:mm:ssZ", N = Z.z(this), V = this.$H, te = this.$m, k = this.$M, M = $.weekdays, A = $.months, T = function(U, X, K, g) {
          return U && (U[X] || U(F, R)) || K[X].slice(0, g);
        }, d = function(U) {
          return Z.s(V % 12 || 12, U, "0");
        }, j = $.meridiem || function(U, X, K) {
          var g = U < 12 ? "AM" : "PM";
          return K ? g.toLowerCase() : g;
        }, C = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: k + 1, MM: Z.s(k + 1, 2, "0"), MMM: T($.monthsShort, k, A, 3), MMMM: T(A, k), D: this.$D, DD: Z.s(this.$D, 2, "0"), d: String(this.$W), dd: T($.weekdaysMin, this.$W, M, 2), ddd: T($.weekdaysShort, this.$W, M, 3), dddd: M[this.$W], H: String(V), HH: Z.s(V, 2, "0"), h: d(1), hh: d(2), a: j(V, te, !0), A: j(V, te, !1), m: String(te), mm: Z.s(te, 2, "0"), s: String(this.$s), ss: Z.s(this.$s, 2, "0"), SSS: Z.s(this.$ms, 3, "0"), Z: N };
        return R.replace(E, function(U, X) {
          return X || C[U] || N.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(b, F, $) {
        var R, N = Z.p(F), V = Y(b), te = (V.utcOffset() - this.utcOffset()) * n, k = this - V, M = Z.m(this, V);
        return M = (R = {}, R[v] = M / 12, R[m] = M, R[p] = M / 3, R[u] = (k - te) / 6048e5, R[c] = (k - te) / 864e5, R[l] = k / s, R[a] = k / n, R[i] = k / t, R)[N] || k, $ ? M : Z.a(M);
      }, x.daysInMonth = function() {
        return this.endOf(m).$D;
      }, x.$locale = function() {
        return S[this.$L];
      }, x.locale = function(b, F) {
        if (!b)
          return this.$L;
        var $ = this.clone(), R = L(b, F, !0);
        return R && ($.$L = R), $;
      }, x.clone = function() {
        return Z.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), q = ee.prototype;
    return Y.prototype = q, [["$ms", o], ["$s", i], ["$m", a], ["$H", l], ["$W", c], ["$M", m], ["$y", v], ["$D", y]].forEach(function(O) {
      q[O[1]] = function(x) {
        return this.$g(x, O[0], O[1]);
      };
    }), Y.extend = function(O, x) {
      return O.$i || (O(x, ee, Y), O.$i = !0), Y;
    }, Y.locale = L, Y.isDayjs = _, Y.unix = function(O) {
      return Y(1e3 * O);
    }, Y.en = S[f], Y.Ls = S, Y.p = {}, Y;
  });
})(yo);
const G = ht, pr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Gr = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, Ur = (e, r) => G(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), Xr = (e) => ({
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Gr(e),
  isCurrentDay: e.isSame(G(), "day"),
  year: parseInt(e.format("YYYY"))
}), qr = (e, r, t, n, s, o) => {
  e.strokeStyle = de.colors.grey400, o ? e.fillStyle = de.colors.blue200 : s ? e.fillStyle = "transparent" : e.fillStyle = de.colors.blue100, e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, xe), e.strokeRect(r + 0.5, t + 0.5, n, xe);
}, go = (e, r, t, n) => {
  for (let s = 0; s < r; s++)
    for (let o = 0; o <= t; o++) {
      const i = G(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        o,
        "days"
      ), a = i.isSame(G(), "day");
      qr(e, o * pe, s * xe, pe, Gr(i), a);
    }
}, wo = (e, r, t) => {
  e.setLineDash([5, 5]), e.strokeStyle = de.colors.grey400, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, bo = (e, r, t, n) => {
  let s = 0, o = -(n.dayOfMonth - 1) * _e;
  for (let i = 0; i <= t; i++) {
    const l = G(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      i,
      "weeks"
    ).isSame(G(), "week");
    for (let c = 0; c < r; c++)
      qr(e, s, c * xe, ke, !0, l);
    s += ke;
  }
  for (let i = 0; i < t; i++) {
    const a = Ur(n, i) * _e;
    wo(e, o, r * xe), o += a;
  }
}, xo = (e, r, t, n, s) => {
  e.clearRect(0, 0, e.canvas.width, e.canvas.height), document.getElementById(Hr) && (r === 1 ? go(e, t, n, s) : bo(e, t, n, s));
};
var At = {}, Co = {
  get exports() {
    return At;
  },
  set exports(e) {
    At = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(be, function() {
    var t = "week", n = "year";
    return function(s, o, i) {
      var a = o.prototype;
      a.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var u = i(this).startOf(n).add(1, n).date(c), m = i(this).endOf(t);
          if (u.isBefore(m))
            return 1;
        }
        var p = i(this).startOf(n).date(c).startOf(t).subtract(1, "millisecond"), v = this.diff(p, t, !0);
        return v < 0 ? i(this).startOf("week").week() : Math.ceil(v);
      }, a.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(Co);
const So = At;
var Tt = {}, $o = {
  get exports() {
    return Tt;
  },
  set exports(e) {
    Tt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(be, function() {
    return function(t, n, s) {
      n.prototype.dayOfYear = function(o) {
        var i = Math.round((s(this).startOf("day") - s(this).startOf("year")) / 864e5) + 1;
        return o == null ? i : this.add(o - i, "day");
      };
    };
  });
})($o);
const Eo = Tt;
var Ot = {}, ko = {
  get exports() {
    return Ot;
  },
  set exports(e) {
    Ot = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(be, function() {
    var t = "day";
    return function(n, s, o) {
      var i = function(c) {
        return c.add(4 - c.isoWeekday(), t);
      }, a = s.prototype;
      a.isoWeekYear = function() {
        return i(this).year();
      }, a.isoWeek = function(c) {
        if (!this.$utils().u(c))
          return this.add(7 * (c - this.isoWeek()), t);
        var u, m, p, v, y = i(this), w = (u = this.isoWeekYear(), m = this.$u, p = (m ? o.utc : o)().year(u).startOf("year"), v = 4 - p.isoWeekday(), p.isoWeekday() > 4 && (v += 7), p.add(v, t));
        return y.diff(w, "week") + 1;
      }, a.isoWeekday = function(c) {
        return this.$utils().u(c) ? this.day() || 7 : this.day(this.day() % 7 ? c : c - 7);
      };
      var l = a.startOf;
      a.startOf = function(c, u) {
        var m = this.$utils(), p = !!m.u(u) || u;
        return m.p(c) === "isoweek" ? p ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(c, u);
      };
    };
  });
})(ko);
const Mo = Ot;
var Rt = {}, _o = {
  get exports() {
    return Rt;
  },
  set exports(e) {
    Rt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(be, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, a, l) {
        var c = s(o), u = s(i), m = (l = l || "()")[0] === "(", p = l[1] === ")";
        return (m ? this.isAfter(c, a) : !this.isBefore(c, a)) && (p ? this.isBefore(u, a) : !this.isAfter(u, a)) || (m ? this.isBefore(c, a) : !this.isAfter(c, a)) && (p ? this.isAfter(u, a) : !this.isBefore(u, a));
      };
    };
  });
})(_o);
const Po = Rt;
var It = {}, Ao = {
  get exports() {
    return It;
  },
  set exports(e) {
    It = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(be, function() {
    var t, n, s = 1e3, o = 6e4, i = 36e5, a = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, u = 2592e6, m = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, p = { years: c, months: u, days: a, hours: i, minutes: o, seconds: s, milliseconds: 1, weeks: 6048e5 }, v = function(f) {
      return f instanceof D;
    }, y = function(f, S, _) {
      return new D(f, _, S.$l);
    }, w = function(f) {
      return n.p(f) + "s";
    }, h = function(f) {
      return f < 0;
    }, E = function(f) {
      return h(f) ? Math.ceil(f) : Math.floor(f);
    }, z = function(f) {
      return Math.abs(f);
    }, W = function(f, S) {
      return f ? h(f) ? { negative: !0, format: "" + z(f) + S } : { negative: !1, format: "" + f + S } : { negative: !1, format: "" };
    }, D = function() {
      function f(_, L, Y) {
        var Z = this;
        if (this.$d = {}, this.$l = Y, _ === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), L)
          return y(_ * p[w(L)], this);
        if (typeof _ == "number")
          return this.$ms = _, this.parseFromMilliseconds(), this;
        if (typeof _ == "object")
          return Object.keys(_).forEach(function(O) {
            Z.$d[w(O)] = _[O];
          }), this.calMilliseconds(), this;
        if (typeof _ == "string") {
          var ee = _.match(m);
          if (ee) {
            var q = ee.slice(2).map(function(O) {
              return O != null ? Number(O) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var S = f.prototype;
      return S.calMilliseconds = function() {
        var _ = this;
        this.$ms = Object.keys(this.$d).reduce(function(L, Y) {
          return L + (_.$d[Y] || 0) * p[Y];
        }, 0);
      }, S.parseFromMilliseconds = function() {
        var _ = this.$ms;
        this.$d.years = E(_ / c), _ %= c, this.$d.months = E(_ / u), _ %= u, this.$d.days = E(_ / a), _ %= a, this.$d.hours = E(_ / i), _ %= i, this.$d.minutes = E(_ / o), _ %= o, this.$d.seconds = E(_ / s), _ %= s, this.$d.milliseconds = _;
      }, S.toISOString = function() {
        var _ = W(this.$d.years, "Y"), L = W(this.$d.months, "M"), Y = +this.$d.days || 0;
        this.$d.weeks && (Y += 7 * this.$d.weeks);
        var Z = W(Y, "D"), ee = W(this.$d.hours, "H"), q = W(this.$d.minutes, "M"), O = this.$d.seconds || 0;
        this.$d.milliseconds && (O += this.$d.milliseconds / 1e3);
        var x = W(O, "S"), b = _.negative || L.negative || Z.negative || ee.negative || q.negative || x.negative, F = ee.format || q.format || x.format ? "T" : "", $ = (b ? "-" : "") + "P" + _.format + L.format + Z.format + F + ee.format + q.format + x.format;
        return $ === "P" || $ === "-P" ? "P0D" : $;
      }, S.toJSON = function() {
        return this.toISOString();
      }, S.format = function(_) {
        var L = _ || "YYYY-MM-DDTHH:mm:ss", Y = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return L.replace(l, function(Z, ee) {
          return ee || String(Y[Z]);
        });
      }, S.as = function(_) {
        return this.$ms / p[w(_)];
      }, S.get = function(_) {
        var L = this.$ms, Y = w(_);
        return Y === "milliseconds" ? L %= 1e3 : L = Y === "weeks" ? E(L / p[Y]) : this.$d[Y], L === 0 ? 0 : L;
      }, S.add = function(_, L, Y) {
        var Z;
        return Z = L ? _ * p[w(L)] : v(_) ? _.$ms : y(_, this).$ms, y(this.$ms + Z * (Y ? -1 : 1), this);
      }, S.subtract = function(_, L) {
        return this.add(_, L, !0);
      }, S.locale = function(_) {
        var L = this.clone();
        return L.$l = _, L;
      }, S.clone = function() {
        return y(this.$ms, this);
      }, S.humanize = function(_) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!_);
      }, S.milliseconds = function() {
        return this.get("milliseconds");
      }, S.asMilliseconds = function() {
        return this.as("milliseconds");
      }, S.seconds = function() {
        return this.get("seconds");
      }, S.asSeconds = function() {
        return this.as("seconds");
      }, S.minutes = function() {
        return this.get("minutes");
      }, S.asMinutes = function() {
        return this.as("minutes");
      }, S.hours = function() {
        return this.get("hours");
      }, S.asHours = function() {
        return this.as("hours");
      }, S.days = function() {
        return this.get("days");
      }, S.asDays = function() {
        return this.as("days");
      }, S.weeks = function() {
        return this.get("weeks");
      }, S.asWeeks = function() {
        return this.as("weeks");
      }, S.months = function() {
        return this.get("months");
      }, S.asMonths = function() {
        return this.as("months");
      }, S.years = function() {
        return this.get("years");
      }, S.asYears = function() {
        return this.as("years");
      }, f;
    }();
    return function(f, S, _) {
      t = _, n = _().$utils(), _.duration = function(Z, ee) {
        var q = _.locale();
        return y(Z, { $l: q }, ee);
      }, _.isDuration = v;
      var L = S.prototype.add, Y = S.prototype.subtract;
      S.prototype.add = function(Z, ee) {
        return v(Z) && (Z = Z.asMilliseconds()), L.bind(this)(Z, ee);
      }, S.prototype.subtract = function(Z, ee) {
        return v(Z) && (Z = Z.asMilliseconds()), Y.bind(this)(Z, ee);
      };
    };
  });
})(Ao);
const To = It;
var Oo = "Expected a function", mr = 0 / 0, Ro = "[object Symbol]", Io = /^\s+|\s+$/g, Do = /^[-+]0x[0-9a-f]+$/i, No = /^0b[01]+$/i, Lo = /^0o[0-7]+$/i, Zo = parseInt, Wo = typeof be == "object" && be && be.Object === Object && be, Yo = typeof self == "object" && self && self.Object === Object && self, zo = Wo || Yo || Function("return this")(), Fo = Object.prototype, Bo = Fo.toString, Ho = Math.max, jo = Math.min, gt = function() {
  return zo.Date.now();
};
function Vo(e, r, t) {
  var n, s, o, i, a, l, c = 0, u = !1, m = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Oo);
  r = vr(r) || 0, Dt(t) && (u = !!t.leading, m = "maxWait" in t, o = m ? Ho(vr(t.maxWait) || 0, r) : o, p = "trailing" in t ? !!t.trailing : p);
  function v(S) {
    var _ = n, L = s;
    return n = s = void 0, c = S, i = e.apply(L, _), i;
  }
  function y(S) {
    return c = S, a = setTimeout(E, r), u ? v(S) : i;
  }
  function w(S) {
    var _ = S - l, L = S - c, Y = r - _;
    return m ? jo(Y, o - L) : Y;
  }
  function h(S) {
    var _ = S - l, L = S - c;
    return l === void 0 || _ >= r || _ < 0 || m && L >= o;
  }
  function E() {
    var S = gt();
    if (h(S))
      return z(S);
    a = setTimeout(E, w(S));
  }
  function z(S) {
    return a = void 0, p && n ? v(S) : (n = s = void 0, i);
  }
  function W() {
    a !== void 0 && clearTimeout(a), c = 0, n = l = s = a = void 0;
  }
  function D() {
    return a === void 0 ? i : z(gt());
  }
  function f() {
    var S = gt(), _ = h(S);
    if (n = arguments, s = this, l = S, _) {
      if (a === void 0)
        return y(l);
      if (m)
        return a = setTimeout(E, r), v(l);
    }
    return a === void 0 && (a = setTimeout(E, r)), i;
  }
  return f.cancel = W, f.flush = D, f;
}
function Dt(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Go(e) {
  return !!e && typeof e == "object";
}
function Uo(e) {
  return typeof e == "symbol" || Go(e) && Bo.call(e) == Ro;
}
function vr(e) {
  if (typeof e == "number")
    return e;
  if (Uo(e))
    return mr;
  if (Dt(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Dt(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Io, "");
  var t = No.test(e);
  return t || Lo.test(e) ? Zo(e.slice(2), t ? 2 : 8) : Do.test(e) ? mr : +e;
}
var Nt = Vo;
const ct = [0, 1], Xo = (e) => ct.includes(e), ft = (e, r) => {
  const t = r === 0 ? Math.ceil(window.innerWidth / ke) * 3 : Math.ceil(window.innerWidth / pe) * 3, n = r === 0 ? e.subtract(t / 3 + 3, "weeks").set("day", 1) : e.subtract(t / 3 + 3, "days"), s = r === 0 ? n.add(t, "weeks") : n.add(t, "days");
  return {
    startDate: n,
    endDate: s
  };
}, qo = (e, r) => {
  const t = ft(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, wt = (e) => e === 0 ? Math.ceil(window.innerWidth / ke) * Ee : Math.ceil(window.innerWidth / pe) * Ee, Jr = _r({
  handleGoNext: () => {
  },
  handleScrollNext: () => {
  },
  handleGoPrev: () => {
  },
  handleScrollPrev: () => {
  },
  handleGoToday: () => {
  },
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  handleFilterData: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: G(),
  isLoading: !1,
  cols: 0,
  startDate: {
    dayName: "",
    dayOfMonth: 0,
    weekOfYear: 0,
    month: 0,
    monthName: "",
    isCurrentDay: !1,
    isBusinessDay: !1,
    year: 0
  },
  dayOfYear: 0,
  recordsThreshold: 0,
  config: {
    zoom: 0
  }
});
G.extend(So);
G.extend(Eo);
G.extend(Mo);
G.extend(Po);
G.extend(To);
const Jo = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: s = G(),
  onRangeChange: o,
  onFilterData: i,
  onClearFilterData: a
}) => {
  const { zoom: l, maxRecordsPerPage: c = 50 } = n, [u, m] = ve(l), [p, v] = ve(G()), [y, w] = ve(!1), [h, E] = ve(wt(u)), z = ct[u] !== ct[ct.length - 1], W = u !== 0, D = Me(() => qo(p, u), [p, u]), f = ft(p, u).startDate, S = G(f).dayOfYear(), _ = Xr(f), L = ge(null), [Y, Z] = ve([{ x: 0, y: 0 }]), ee = 2, q = ye(
    (T, d = "smooth") => {
      var j, C, U, X;
      switch (T) {
        case "back":
          return (j = L.current) == null ? void 0 : j.scrollTo({
            behavior: d,
            left: u === 0 ? ke * Ee : pe * Ee
          });
        case "forward":
          return (C = L.current) == null ? void 0 : C.scrollTo({
            behavior: d,
            left: u === 0 ? window.innerWidth + (h / Ee - Ee + ee) * ke : window.innerWidth + (h / Ee - Ee + ee) * pe
          });
        case "middle":
          return (U = L.current) == null ? void 0 : U.scrollTo({
            behavior: d,
            left: window.innerWidth
          });
        default:
          return (X = L.current) == null ? void 0 : X.scrollTo({
            behavior: d,
            left: window.innerWidth
          });
      }
    },
    [h, u]
  ), O = (T) => {
    Z(T);
  }, x = ye(
    (T) => {
      Nt(() => {
        switch (T) {
          case "back":
            v((j) => j.subtract(fr, "weeks"));
            break;
          case "forward":
            v((j) => j.add(fr, "weeks"));
            break;
          case "middle":
            v(G());
            break;
        }
        o == null || o(D);
      }, 300)();
    },
    [o, D]
  );
  me(() => {
    L.current = document.getElementById(Gt);
  }, []), me(() => {
    const T = () => E(wt(u));
    return window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
  }, [u]), me(() => {
    o == null || o(D);
  }, [o, D]), me(() => {
    w(!1);
  }, [s]), me(() => {
    y || (q("middle", "auto"), w(!0), v(s));
  }, [s, y, q]);
  const b = () => {
    t || (v((T) => T.add(hr, "weeks")), o == null || o(D));
  }, F = ye(() => {
    t || (x("forward"), q("forward"));
  }, [t, x, q]), $ = () => {
    t || (v((T) => T.subtract(hr, "weeks")), o == null || o(D));
  }, R = ye(() => {
    !y || t || (x("back"), q("back"));
  }, [y, t, x, q]), N = ye(() => {
    t || (x("middle"), q("middle"));
  }, [t, x, q]), V = () => k(u + 1), te = () => k(u - 1), k = (T) => {
    Xo(T) && (m(T), E(wt(T)), o == null || o(D));
  }, M = () => i == null ? void 0 : i(), { Provider: A } = Jr;
  return /* @__PURE__ */ P(
    A,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: b,
        handleScrollNext: F,
        handleGoPrev: $,
        handleScrollPrev: R,
        handleGoToday: N,
        zoomIn: V,
        zoomOut: te,
        zoom: u,
        isNextZoom: z,
        isPrevZoom: W,
        date: p,
        isLoading: t,
        cols: h,
        startDate: _,
        dayOfYear: S,
        handleFilterData: M,
        tilesCoords: Y,
        updateTilesCoords: O,
        recordsThreshold: c,
        onClearFilterData: a
      },
      children: r
    }
  );
}, Ue = () => Ne(Jr), Kr = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Ko = B.div`
  height: calc(100vh - headerHeight);
`, Qo = B.div`
  position: relative;
`, es = B.canvas``;
B.canvas``;
const yr = B.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, ts = an(function({ zoom: r, rows: t, data: n, onTileClick: s }, o) {
  const { handleScrollNext: i, handleScrollPrev: a, date: l, isLoading: c, cols: u, startDate: m } = Ue(), p = ge(null), v = ge(null), y = ge(null), w = ye(
    (h) => {
      const E = window.innerWidth * Ee, z = t * xe + 1;
      Kr(h, E, z), xo(h, r, t, u, m);
    },
    [u, m, t, r]
  );
  return me(() => {
    if (!p.current)
      return;
    const h = p.current.getContext("2d");
    if (!h)
      return;
    const E = () => w(h);
    return window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, [w]), me(() => {
    const h = p.current;
    if (!h)
      return;
    h.style.letterSpacing = "1px";
    const E = h.getContext("2d");
    E && w(E);
  }, [l, t, r, w]), me(() => {
    if (!v.current)
      return;
    const h = new IntersectionObserver(
      (E) => E[0].isIntersecting ? i() : null
    );
    return h.observe(v.current), () => h.disconnect();
  }, [i]), me(() => {
    if (!y.current)
      return;
    const h = new IntersectionObserver(
      (E) => E[0].isIntersecting ? a() : null,
      { rootMargin: `0px 0px 0px -${Ie}px` }
    );
    return h.observe(y.current), () => h.disconnect();
  }, [a]), /* @__PURE__ */ P(Ko, { id: Hr, children: /* @__PURE__ */ ne(Qo, { ref: o, children: [
    /* @__PURE__ */ P(yr, { position: "left", ref: y }),
    /* @__PURE__ */ P(Sr, { isLoading: c, position: "left" }),
    /* @__PURE__ */ P(es, { ref: p }),
    /* @__PURE__ */ P(Oi, { data: n, zoom: r, onTileClick: s }),
    /* @__PURE__ */ P(yr, { ref: v, position: "right" }),
    /* @__PURE__ */ P(Sr, { isLoading: c, position: "right" })
  ] }) });
}), Qr = (e) => {
  const r = G.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, en = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((s) => {
    r += s.minutes;
    const o = Math.floor(r / ze);
    t += s.hours + o, n += r % ze, n >= ze && (t++, n -= ze);
  }), { hours: t, minutes: n };
}, tn = (e, r) => {
  const t = r === 0 ? po : mo, n = () => {
    let o = t - e.hours - 1, i = ze - e.minutes;
    return i === ze && (o++, i = 0), { hours: Math.max(0, o), minutes: o < 0 ? 0 : i };
  }, s = () => {
    const o = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, o), minutes: o < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: s()
  };
}, rs = (e, r, t) => {
  const n = r.isoWeek(), s = e.map((c) => {
    const u = G(c.startDate).isoWeek(), m = G(c.startDate).isoWeekday(), p = G(c.endDate).isoWeek(), v = G(c.endDate).isoWeekday(), { hours: y, minutes: w } = Qr(c.occupancy);
    if (n === u) {
      const h = (Oe + 1 - m) * y, E = (Oe + 1 - m) * w;
      return { hours: Math.max(0, h), minutes: E };
    } else if (n === p) {
      const h = v > Oe ? Oe * y : v * y, E = v > Oe ? Oe * w : v * w;
      return { hours: h, minutes: E };
    } else if (G(r).isBetween(c.startDate, c.endDate))
      return { hours: Oe * y, minutes: Oe * w };
    return { hours: 0, minutes: 0 };
  }), { hours: o, minutes: i } = en(s), { free: a, overtime: l } = tn({ hours: o, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, o), minutes: Math.max(0, i) },
    free: a,
    overtime: l
  };
}, ns = (e, r, t, n) => {
  const s = r.isoWeekday(), o = e.map((u) => {
    const { hours: m, minutes: p } = Qr(u.occupancy);
    return s <= (n ? 7 : 5) ? { hours: m, minutes: p } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: a } = en(o), { free: l, overtime: c } = tn({ hours: i, minutes: a }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, a) },
    free: l,
    overtime: c
  };
}, os = (e, r, t, n, s = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const o = e.flat(2).filter((i) => n === 0 ? G(i.startDate).isBetween(
    G(t),
    G(t).add(6, "days"),
    "day",
    "[]"
  ) || G(t).isBetween(G(i.startDate), G(i.endDate), "day", "[]") : G(t).isBetween(i.startDate, i.endDate, "day", "[]"));
  return n === 0 ? rs(o, t, n) : ns(o, t, n, s);
}, ss = (e, r, t, n, s, o = !1) => {
  const i = s === 0 ? ke : pe, a = Math.ceil(r.x / i), l = G(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(
    a - 1,
    s === 0 ? "weeks" : "days"
  ), c = Math.ceil(r.y / xe), u = t.findIndex((y, w, h) => h.slice(0, w + 1).reduce((z, W) => z + W, 0) >= c), m = a * i, p = (c - 1) * xe + xe, v = os(
    n[u],
    u,
    l,
    s,
    o
  );
  return { coords: { x: m, y: p }, resourceIndex: u, disposition: v };
}, is = (e, r, t, n) => {
  const s = [];
  let o = 0, i = [], a = 0;
  return r.length > n ? (r.forEach((l, c) => {
    const u = { id: e[c].id, label: e[c].label, data: l };
    a >= n && (s.push(i), o += i.length, i = [], a = 0), a++, i.push(u);
  }), t.slice(o).length <= n && (i = [], r.slice(o).forEach((l, c) => {
    const u = {
      id: e[c + o].id,
      label: e[c + o].label,
      data: l
    };
    i.push(u), c === r.length - o - 1 && s.push(i);
  })), s) : (r.forEach((l, c) => {
    const u = { id: e[c].id, label: e[c].label, data: l };
    i.push(u);
  }), s.push(i), s);
}, as = (e, r) => {
  const t = [];
  for (const n of e) {
    let s = !1;
    if (t.length)
      for (const o of t) {
        let i = !1;
        for (let a = 0; a < o.length; a++) {
          if (G(n.startDate).isBetween(o[a].startDate, o[a].endDate, null, "[]") || G(n.endDate).isBetween(o[a].startDate, o[a].endDate, null, "[]")) {
            i = !0;
            break;
          }
          if (G(n.startDate).isBefore(r.startDate, "day") && G(n.endDate).isAfter(r.endDate, "day")) {
            i = !0;
            break;
          }
        }
        if (!i) {
          o.push(n), s = !0;
          break;
        }
      }
    s || t.push([n]);
  }
  return t;
}, cs = (e, r) => {
  const t = [[], []], [n, s] = e.reduce((o, i) => {
    const a = as(i.data, r);
    return o[0].push(a), o[1].push(Math.max(a.length, 1)), o;
  }, t);
  return { projectsPerPerson: n, rowsPerPerson: s };
}, ls = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, us = (e, r) => {
  const { recordsThreshold: t } = Ue(), [n, s] = ve(0), [o, i] = ve(0), a = ge(null);
  me(() => {
    a.current = document.getElementById(Gt);
  }, []);
  const { projectsPerPerson: l, rowsPerPerson: c } = Me(
    () => cs(e, r),
    [e, r]
  ), u = Me(
    () => is(e, l, c, t),
    [e, l, t, c]
  ), m = ye(() => {
    u[o].length && a.current && (a.current.scroll({ top: 0 }), s((E) => E + u[Math.max(o, 0)].length), i((E) => Math.min(E + 1, u.length - 1)), window.scroll({ top: 0 }));
  }, [o, u]), p = ye(() => {
    u[o].length && (s((E) => Math.max(E - u[o - 1].length, 0)), i((E) => Math.max(E - 1, 0)));
  }, [o, u]), v = ye(() => {
    s(0), i(0);
  }, []), y = n + u[o].length, w = Me(
    () => c.slice(n, y),
    [y, c, n]
  ), h = Me(() => !l || !l.length ? [] : l.slice(n, y), [y, l, n]);
  return {
    page: u[o],
    currentPageNum: o,
    pagesAmount: u.length,
    projectsPerPerson: h,
    rowsPerItem: w,
    totalRowsPerPage: ls(u[o]),
    next: m,
    previous: p,
    reset: v
  };
};
var Lt = {}, ds = {
  get exports() {
    return Lt;
  },
  set exports(e) {
    Lt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(be, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], s = t % 100;
      return "[" + t + (n[(s - 20) % 10] || n[s] || n[0]) + "]";
    } };
  });
})(ds);
const hs = Lt;
var Zt = {}, fs = {
  get exports() {
    return Zt;
  },
  set exports(e) {
    Zt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ht);
  })(be, function(t) {
    function n(p) {
      return p && typeof p == "object" && "default" in p ? p : { default: p };
    }
    var s = n(t);
    function o(p) {
      return p % 10 < 5 && p % 10 > 1 && ~~(p / 10) % 10 != 1;
    }
    function i(p, v, y) {
      var w = p + " ";
      switch (y) {
        case "m":
          return v ? "minuta" : "minutę";
        case "mm":
          return w + (o(p) ? "minuty" : "minut");
        case "h":
          return v ? "godzina" : "godzinę";
        case "hh":
          return w + (o(p) ? "godziny" : "godzin");
        case "MM":
          return w + (o(p) ? "miesiące" : "miesięcy");
        case "yy":
          return w + (o(p) ? "lata" : "lat");
      }
    }
    var a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), c = /D MMMM/, u = function(p, v) {
      return c.test(v) ? a[p.month()] : l[p.month()];
    };
    u.s = l, u.f = a;
    var m = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: u, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(p) {
      return p + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(m, null, !0), m;
  });
})(fs);
const ps = Zt, ms = {
  feelingEmpty: "I feel so empty...",
  free: "Free",
  loadNext: "Next",
  loadPrevious: "Previous",
  over: "over",
  taken: "Taken",
  topbar: {
    filters: "Filters",
    next: "next",
    prev: "prev",
    today: "Today",
    view: "View"
  },
  search: "search",
  week: "week"
}, vs = {
  feelingEmpty: "Czuję się taki pusty...",
  free: "Wolne",
  loadNext: "Następne",
  loadPrevious: "Poprzednie",
  over: "ponad",
  taken: "Zajęte",
  topbar: {
    filters: "Filtry",
    next: "następny",
    prev: "poprzedni",
    today: "Dziś",
    view: "Widok"
  },
  search: "szukaj",
  week: "tydzień"
}, tt = [
  {
    id: "en",
    name: "ENGLISH",
    lang: ms,
    translateCode: "en-GB"
  },
  {
    id: "pl",
    name: "POLISH",
    lang: vs,
    translateCode: "pl-PL"
  }
], rn = _r({
  locales: tt,
  currentLocale: tt[0],
  setCurrentLocale: () => {
  }
}), ys = ({ children: e, lang: r }) => {
  const [t, n] = ve("en"), s = ye(() => {
    const c = tt.find((u) => u.id === t);
    return (c == null ? void 0 : c.id) === "en" ? G.locale({ ...hs }) : G.locale({ ...ps }), c || tt[0];
  }, [t]), [o, i] = ve(s()), a = (c) => {
    localStorage.setItem("locale", c.translateCode), i(c);
  };
  me(() => {
    const c = localStorage.getItem("locale"), u = r ?? c ?? "en";
    localStorage.setItem("locale", u), n(u), i(s());
  }, [s, r]);
  const { Provider: l } = rn;
  return /* @__PURE__ */ P(l, { value: { currentLocale: o, locales: tt, setCurrentLocale: a }, children: e });
}, Xe = () => Ne(rn).currentLocale.lang, gs = (e) => /* @__PURE__ */ H.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ H.createElement("defs", null, /* @__PURE__ */ H.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ H.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ H.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ H.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ H.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ H.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ H.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ H.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ H.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ H.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ H.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ H.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ H.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ H.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ws = B.div`
  position: absolute;
  height: 440px;
  width: 514px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`, bs = B.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
`, xs = () => {
  const { feelingEmpty: e } = Xe();
  return /* @__PURE__ */ ne(ws, { children: [
    /* @__PURE__ */ P(gs, {}),
    /* @__PURE__ */ P(bs, { children: e })
  ] });
}, Cs = B.div`
  position: relative;
  display: flex;
`, Ss = B.div`
  position: relative;
  margin-left: ${Ie};
  display: flex;
  flex-direction: column;
  contain: paint;
`, gr = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, $s = ({
  data: e,
  onTileClick: r,
  onItemClick: t,
  topBarWidth: n,
  renderDefaultButtons: s,
  buttonsToReplaceDefaults: o,
  additionalToolbarItems: i
}) => {
  const [a, l] = ve(gr), [c, u] = ve(e), [m, p] = ve(!1), [v, y] = ve(""), {
    zoom: w,
    startDate: h,
    date: E,
    config: { includeTakenHoursOnWeekendsInDayView: z }
  } = Ue(), W = ge(null), D = Me(() => ft(E, w), [E, w]), {
    page: f,
    projectsPerPerson: S,
    totalRowsPerPage: _,
    rowsPerItem: L,
    currentPageNum: Y,
    pagesAmount: Z,
    next: ee,
    previous: q,
    reset: O
  } = us(c, D), x = ge(
    Nt(
      (R, N, V, te, k) => {
        if (!W.current)
          return;
        const { left: M, top: A } = W.current.getBoundingClientRect(), T = { x: R.clientX - M, y: R.clientY - A }, {
          coords: { x: d, y: j },
          resourceIndex: C,
          disposition: U
        } = ss(
          N,
          T,
          V,
          te,
          k,
          z
        );
        l({ coords: { x: d, y: j }, resourceIndex: C, disposition: U }), p(!0);
      },
      300
    )
  ), b = ge(
    Nt((R, N) => {
      O(), u(
        R.filter(
          (V) => V.label.title.toLowerCase().includes(N.toLowerCase())
        )
      );
    }, 500)
  ), F = (R) => {
    const N = R.target.value;
    y(N), b.current.cancel(), b.current(e, N);
  }, $ = ye(() => {
    x.current.cancel(), p(!1), l(gr);
  }, []);
  return me(() => {
    const R = (V) => x.current(V, h, L, S, w), N = W.current;
    if (N)
      return N.addEventListener("mousemove", R), N.addEventListener("mouseleave", $), () => {
        N.removeEventListener("mousemove", R), N.removeEventListener("mouseleave", $);
      };
  }, [x, $, S, L, h, w]), me(() => {
    v || u(e);
  }, [e, v]), /* @__PURE__ */ ne(Cs, { children: [
    /* @__PURE__ */ P(
      ii,
      {
        data: f,
        pageNum: Y,
        pagesAmount: Z,
        rows: L,
        onLoadNext: ee,
        onLoadPrevious: q,
        searchInputValue: v,
        onSearchInputChange: F,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ ne(Ss, { children: [
      /* @__PURE__ */ P(Ci, { zoom: w, topBarWidth: n, renderDefaultButtons: s, additionalToolbarItems: i, buttonsToReplaceDefaults: o }),
      e.length ? /* @__PURE__ */ P(
        ts,
        {
          data: f,
          zoom: w,
          rows: _,
          ref: W,
          onTileClick: r
        }
      ) : /* @__PURE__ */ P(xs, {}),
      m && (a == null ? void 0 : a.resourceIndex) > -1 && /* @__PURE__ */ P(Zi, { tooltipData: a, zoom: w })
    ] })
  ] });
}, nn = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, Es = B.div`
  width: calc(${({ width: e }) => e}px - ${Ie}px);
  position: sticky;
  top: 0;
  left: ${Ie}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.white};
  z-index: 3;
`, ks = B.div`
  display: flex;
  gap: 1.875rem;
`, wr = B.button`
  ${nn};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  :not(:disabled) {
    cursor: pointer;
  }
`, br = B.button`
  ${nn};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;

  // &::before,
  // &::after {
  //   content: "";
  //   position: absolute;
  //   width: 1px;
  //   height: 1.5rem;
  //   background-color: ${({ theme: e }) => e.colors.blue900};
  // }
  // &::before {
  //   left: -1.125rem;
  // }
  // &::after {
  //   right: -1.125rem;
  // }
`, Ms = B.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
`, _s = B.div`
  display: flex;
`, Ps = ({
  width: e,
  renderDefaultButtons: r,
  additionalToolbarItems: t,
  buttonsToReplaceDefaults: n
}) => {
  const { topbar: s } = Xe(), {
    data: o,
    config: i,
    handleGoNext: a,
    handleGoPrev: l,
    handleGoToday: c,
    zoomIn: u,
    zoomOut: m,
    isNextZoom: p,
    isPrevZoom: v,
    handleFilterData: y,
    onClearFilterData: w
  } = Ue(), { colors: h } = Vt(), { filterButtonState: E = -1 } = i, z = (Y) => {
    Y.stopPropagation(), w == null || w();
  }, {
    navBtnWrapper: W = () => /* @__PURE__ */ P($e, {}),
    navBtn: D = () => /* @__PURE__ */ P($e, {}),
    todayBtn: f = () => /* @__PURE__ */ P($e, {}),
    zoomBtnWrapper: S = () => /* @__PURE__ */ P($e, {}),
    zoomOutBtn: _ = () => /* @__PURE__ */ P($e, {}),
    zoomInBtn: L = () => /* @__PURE__ */ P($e, {})
  } = n || {};
  return /* @__PURE__ */ ne(Es, { width: e, children: [
    /* @__PURE__ */ P(_s, { children: E >= 0 && /* @__PURE__ */ ne(
      bt,
      {
        variant: E ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: y,
        children: [
          s.filters,
          !!E && /* @__PURE__ */ P("span", { onClick: z, children: /* @__PURE__ */ P(we, { iconName: "close", height: "16", width: "16" }) })
        ]
      }
    ) }),
    r != null && r.navigationButtons ? /* @__PURE__ */ ne(ks, { children: [
      /* @__PURE__ */ ne(wr, { disabled: !(o != null && o.length), onClick: l, children: [
        /* @__PURE__ */ P(we, { iconName: "arrowLeft", height: "15", fill: "#3B3C5F" }),
        s.prev
      ] }),
      /* @__PURE__ */ P(br, { onClick: c, children: s.today }),
      /* @__PURE__ */ ne(wr, { disabled: !(o != null && o.length), onClick: a, children: [
        s.next,
        /* @__PURE__ */ P(we, { iconName: "arrowRight", height: "15", fill: h.blue900 })
      ] })
    ] }) : (n == null ? void 0 : n.navBtnWrapper) && /* @__PURE__ */ P(W, { children: D && /* @__PURE__ */ ne($e, { children: [
      /* @__PURE__ */ ne(D, { disabled: !(o != null && o.length), onClick: l, children: [
        /* @__PURE__ */ P(we, { iconName: "arrowLeft", height: "15", fill: "#3B3C5F" }),
        s.prev
      ] }),
      /* @__PURE__ */ P(br, { onClick: c, children: s.today }),
      /* @__PURE__ */ ne(D, { disabled: !(o != null && o.length), onClick: a, children: [
        s.next,
        /* @__PURE__ */ P(we, { iconName: "arrowRight", height: "15", fill: h.blue900 })
      ] })
    ] }) }),
    r != null && r.zoomButtons ? /* @__PURE__ */ ne(Ms, { children: [
      s.view,
      /* @__PURE__ */ P(
        bt,
        {
          isDisabled: !v,
          onClick: m,
          isFullRounded: !0,
          iconName: "subtract",
          width: "14"
        }
      ),
      /* @__PURE__ */ P(
        bt,
        {
          isDisabled: !p,
          onClick: u,
          isFullRounded: !0,
          iconName: "add",
          width: "14"
        }
      )
    ] }) : (n == null ? void 0 : n.zoomBtnWrapper) && /* @__PURE__ */ ne(S, { children: [
      s.view,
      _ && /* @__PURE__ */ P(_, { disabled: !v, onClick: m }),
      L && /* @__PURE__ */ P(L, { disabled: !p, onClick: u })
    ] }),
    t == null ? void 0 : t.map((Y) => Y)
  ] });
}, As = (e) => /* @__PURE__ */ H.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Ts = (e) => /* @__PURE__ */ H.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Os = (e) => /* @__PURE__ */ H.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Rs = (e) => /* @__PURE__ */ H.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Is = (e) => /* @__PURE__ */ H.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ds = (e) => /* @__PURE__ */ H.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Ns = (e) => /* @__PURE__ */ H.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Ls = (e) => /* @__PURE__ */ H.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Zs = (e) => /* @__PURE__ */ H.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z", fill: "#0A11EB" })), Ws = (e) => /* @__PURE__ */ H.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z", fill: "#0A11EB" })), Ys = (e) => /* @__PURE__ */ H.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), zs = (e) => /* @__PURE__ */ H.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ H.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z", fill: "white" })), Fs = {
  add: As,
  subtract: Ts,
  filter: Os,
  arrowLeft: Rs,
  arrowRight: Is,
  defaultAvatar: Ds,
  calendarWarning: Ns,
  calendarFree: Ls,
  arrowDown: Ws,
  arrowUp: Zs,
  search: Ys,
  close: zs
}, we = ({ iconName: e, width: r, height: t, fill: n, className: s }) => {
  const { colors: o } = Vt(), i = Fs[e];
  return i ? /* @__PURE__ */ P(
    i,
    {
      style: { transition: ".5s ease" },
      fill: n ?? o.blue400,
      width: r,
      height: t,
      className: s
    }
  ) : null;
}, Bs = B.button`
  outline: none;
  background: ${({ theme: e, variant: r }) => r === "filled" ? e.colors.blue400 : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid
    ${({ theme: e, disabled: r }) => r ? e.colors.grey600 : e.colors.blue400};
  border-radius: ${({ isFullRounded: e }) => e ? "50%" : "4px"};
  cursor: pointer;
  color: ${({ theme: e, variant: r }) => r === "filled" ? e.colors.white : e.colors.blue400};
  font-size: 14px;
  gap: 4px;
  padding: ${({ hasChildren: e }) => e ? "0 10px" : "0"};
  transition: 0.5s ease;
`, bt = ({
  iconName: e,
  width: r,
  height: t,
  fill: n,
  className: s,
  onClick: o,
  children: i,
  isFullRounded: a,
  isDisabled: l,
  variant: c = "outlined"
}) => {
  const { colors: u } = Vt();
  return /* @__PURE__ */ ne(
    Bs,
    {
      onClick: o,
      isFullRounded: a,
      hasChildren: !!i,
      disabled: l,
      variant: c,
      children: [
        /* @__PURE__ */ P(
          we,
          {
            iconName: e,
            width: r,
            height: t,
            fill: l ? u.grey600 : n,
            className: s
          }
        ),
        i
      ]
    }
  );
}, Hs = B.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: white;
`, js = B.div`
  position: relative;
`, zi = ({
  data: e,
  config: r,
  startDate: t,
  onRangeChange: n,
  onTileClick: s,
  onFilterData: o,
  onClearFilterData: i,
  onItemClick: a,
  isLoading: l,
  renderDefaultButtons: c,
  buttonsToReplaceDefaults: u,
  additionalToolbarItems: m
}) => {
  var E;
  const p = Me(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      ...r
    }),
    [r]
  ), v = ge(null), [y, w] = ve((E = v.current) == null ? void 0 : E.clientWidth), h = Me(() => G(t), [t]);
  return me(() => {
    const z = () => {
      v.current && w(v.current.clientWidth);
    };
    return z(), window.addEventListener("resize", z), () => window.removeEventListener("resize", z);
  }, []), v.current, /* @__PURE__ */ ne($e, { children: [
    /* @__PURE__ */ P(ao, {}),
    /* @__PURE__ */ P(no, { theme: de, children: /* @__PURE__ */ P(ys, { lang: p.lang, children: /* @__PURE__ */ P(
      Jo,
      {
        data: e,
        isLoading: !!l,
        config: p,
        onRangeChange: n,
        defaultStartDate: h,
        onFilterData: o,
        onClearFilterData: i,
        children: /* @__PURE__ */ P(
          Hs,
          {
            showScroll: !!e.length,
            id: Gt,
            ref: v,
            children: /* @__PURE__ */ P(js, { children: /* @__PURE__ */ P(
              $s,
              {
                data: e,
                onTileClick: s,
                topBarWidth: y ?? 0,
                onItemClick: a,
                renderDefaultButtons: c,
                buttonsToReplaceDefaults: u,
                additionalToolbarItems: m
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, Vs = B.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.grey400}` : "none"};
`, Gs = B.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme: e }) => e.colors.white};
  border: 1px solid ${({ theme: e }) => e.colors.blue400};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.blue400};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ isVisible: e }) => e ? "1" : "0"};
  pointer-events: ${({ isVisible: e }) => e ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: e }) => e.colors.blue200};
  }
`, Us = B.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Xs = B.p`
  ${Ve}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, xr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: s,
  pagesAmount: o
}) => {
  const { loadNext: i, loadPrevious: a } = Xe(), l = e === "next" ? `${i} ${s + 2}/${o}` : `${a} ${s}/${o}`;
  return /* @__PURE__ */ P(Vs, { intent: e, children: /* @__PURE__ */ ne(Gs, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ P(Us, { children: t }),
    /* @__PURE__ */ P(Xs, { children: l })
  ] }) });
}, qs = B.div`
  min-width: ${Ie + "px"};
  max-width: ${Ie + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.white};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Js = B.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Ie}px;
  background-color: ${({ theme: e }) => e.colors.white};
  z-index: 3;
`, Ks = B.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.grey600};
  }
`, Qs = B.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: e }) => e.colors.blue100};
  border: 1px solid
    ${({ theme: e, isFocused: r }) => r ? e.colors.blue400 : e.colors.grey400};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`, ei = B.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${xe}px;
  height: calc(${xe}px * ${({ rows: e }) => e});
  border-top: 1px solid ${({ theme: e }) => e.colors.grey400};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.blue200};
  }
`, ti = B.div`
  display: flex;
  align-items: center;
`, ri = B.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, ni = B.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, oi = B.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Cr = B.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: e }) => e ? 1 + "px" : 0.5 + "px"};
  line-height: ${({ isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: e }) => e ? de.colors.black : de.colors.grey600};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, si = ({ id: e, item: r, rows: t, onItemClick: n }) => /* @__PURE__ */ P(
  ei,
  {
    title: r.title + " | " + r.subtitle,
    clickable: typeof n == "function",
    rows: t,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ ne(ti, { children: [
      /* @__PURE__ */ P(ri, { children: r.icon ? /* @__PURE__ */ P(ni, { src: r.icon, alt: "Icon" }) : /* @__PURE__ */ P(we, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ ne(oi, { children: [
        /* @__PURE__ */ P(Cr, { isMain: !0, children: r.title }),
        /* @__PURE__ */ P(Cr, { children: r.subtitle })
      ] })
    ] })
  }
), ii = ({
  data: e,
  rows: r,
  onLoadNext: t,
  onLoadPrevious: n,
  pageNum: s,
  pagesAmount: o,
  searchInputValue: i,
  onSearchInputChange: a,
  onItemClick: l
}) => {
  const [c, u] = ve(!1), { search: m } = Xe(), p = () => u((v) => !v);
  return /* @__PURE__ */ ne(qs, { children: [
    /* @__PURE__ */ ne(Js, { children: [
      /* @__PURE__ */ ne(Qs, { isFocused: c, children: [
        /* @__PURE__ */ P(
          Ks,
          {
            placeholder: m,
            value: i,
            onChange: a,
            onFocus: p,
            onBlur: p
          }
        ),
        /* @__PURE__ */ P(we, { iconName: "search" })
      ] }),
      /* @__PURE__ */ P(
        xr,
        {
          intent: "previous",
          isVisible: s !== 0,
          onClick: n,
          icon: /* @__PURE__ */ P(we, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: s,
          pagesAmount: o
        }
      )
    ] }),
    e.map((v, y) => /* @__PURE__ */ P(
      si,
      {
        id: v.id,
        item: v.label,
        rows: r[y],
        onItemClick: l
      },
      v.id
    )),
    /* @__PURE__ */ P(
      xr,
      {
        intent: "next",
        isVisible: s !== o - 1,
        onClick: t,
        icon: /* @__PURE__ */ P(we, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: s,
        pagesAmount: o
      }
    )
  ] });
}, ai = B.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
  background-color: ${({ theme: e }) => e.colors.blue200};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, ci = io`
from{
    left: -100%;
}
to{
    left: 100%;
}`, li = B.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${ci} 1s infinite;
`, ui = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ P(ai, { position: r, children: /* @__PURE__ */ P(li, {}) }) : null, Sr = ui, di = de.colors.white, qe = (e) => {
  const {
    ctx: r,
    x: t,
    y: n,
    width: s,
    height: o,
    textYPos: i,
    label: a,
    font: l,
    isBottomRow: c,
    fillStyle: u,
    topText: m,
    bottomText: p
  } = e;
  if (r.beginPath(), r.strokeStyle = de.colors.grey400, r.setLineDash([]), a && l && i) {
    r.fillStyle = di, r.fillRect(t, n, s, o), r.strokeRect(t + 0.5, n + 0.5, s, o), r.font = l;
    const v = t + s / 2 - r.measureText(a).width / 2;
    r.textBaseline = "middle", r.fillStyle = de.colors.grey600, r.fillText(a, v, i);
  }
  if (c && u && m && p) {
    r.fillStyle = u, r.fillRect(t, n, s, o), r.strokeRect(t + 0.5, n + 0.5, s, o), r.font = m.font;
    const v = t + s / 2 - r.measureText(m.label).width / 2;
    r.fillStyle = m.color, r.fillText(m.label, v, m.y), r.font = p.font;
    const y = t + s / 2 - r.measureText(p.label).width / 2;
    r.fillStyle = p.color, r.fillText(p.label, y, p.y);
  }
}, on = (e) => {
  const { isCurrent: r, isBusinessDay: t, variant: n } = e;
  return n === "yearView" ? r ? de.colors.blue300 : dr : r ? de.colors.blue300 : t ? dr : de.colors.blue200;
}, Wt = (e) => {
  const { isCurrent: r, isBusinessDay: t, variant: n } = e;
  return r ? n === "bottomRow" ? de.colors.grey600 : de.colors.blue400 : t ? n === "bottomRow" ? de.colors.grey600 : de.colors.black : de.colors.grey600;
}, hi = (e, r, t) => {
  const n = je - Ze / co, s = je - Ze / lo, o = Ae + Ge;
  let i = 0;
  for (let a = 0; a < r; a++) {
    const l = Xr(
      G(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    );
    qe({
      ctx: e,
      x: i,
      y: o,
      width: pe,
      height: Ze,
      isBottomRow: !0,
      fillStyle: on({ isCurrent: l.isCurrentDay, isBusinessDay: l.isBusinessDay }),
      topText: {
        y: n,
        label: l.dayName.toUpperCase(),
        font: De.bottomRow.name,
        color: Wt({ isCurrent: l.isCurrentDay, isBusinessDay: l.isBusinessDay })
      },
      bottomText: {
        y: s,
        label: `${l.dayOfMonth}`,
        font: De.bottomRow.number,
        color: Wt({
          isCurrent: l.isCurrentDay,
          isBusinessDay: l.isBusinessDay,
          variant: "bottomRow"
        })
      }
    }), i += pe;
  }
}, fi = (e, r, t) => {
  let n = -(t.dayOfMonth - 1) * _e;
  const s = Ae;
  let i = t.month;
  for (let a = 0; a < r; a++) {
    i >= Pt && (i = 0);
    const l = Ur(t, a) * _e;
    qe({
      ctx: e,
      x: n,
      y: s,
      width: l,
      height: Ge,
      textYPos: Vr,
      label: G().month(i).format("MMMM").toUpperCase(),
      font: De.bottomRow.number
    }), n += l, i++;
  }
}, pi = (e, r) => {
  let n = 0, s = 0, o = 0, i = G(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  n = -r.dayOfMonth * pe + pe;
  for (let a = 0; a < Pt; a++)
    i > Pt - 1 && (i = 0, o++), s = G(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(a, "months").daysInMonth() * pe, qe({
      ctx: e,
      x: n,
      y: 0,
      width: s,
      height: Ae,
      textYPos: jr,
      label: G(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM").toUpperCase() + ` ${G(`${r.year + o}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("YYYY")}`,
      font: De.topRow
    }), n += s, i++;
}, mi = (e, r, t) => {
  const n = 7 * pe, s = Ae, o = e.canvas.width / n + n, i = r.weekOfYear;
  let a = 0;
  for (let l = 0; l < o; l++) {
    const c = G(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (i + l) % ur;
    u <= 0 && (u += ur), c !== 1 && l === 0 && (a = -c * pe + pe), qe({
      ctx: e,
      x: a,
      y: s,
      width: n,
      height: Ge,
      textYPos: Vr,
      label: `${t.toUpperCase()} ${u}`,
      font: De.middleRow
    }), a += n;
  }
}, vi = (e, r, t, n) => {
  const s = je - Ze / 1.6, o = je - Ze / 4.5, i = Ae + Ge;
  let a = 0;
  for (let l = 0; l < r; l++) {
    const c = G(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      l,
      "weeks"
    ), u = c.isSame(G(), "week");
    qe({
      ctx: e,
      x: a,
      y: i,
      width: ke,
      height: Ze,
      isBottomRow: !0,
      fillStyle: on({ isCurrent: u, variant: "yearView" }),
      topText: {
        y: s,
        label: c.isoWeek().toString(),
        font: De.bottomRow.name,
        color: Wt({ isCurrent: u })
      },
      bottomText: {
        y: o,
        label: n.toUpperCase(),
        font: De.middleRow,
        color: de.colors.grey600
      }
    }), a += ke;
  }
}, yi = (e, r, t) => {
  const s = r.year, o = e.canvas.width * 2;
  let i = 0, a = 0, l = (pr(s) - t + 1) * _e, c = 0;
  for (; i + c <= o; )
    a > 0 && (l = pr(s + a) * _e), c + l > o && a > 0 && (l = Math.ceil((o - c) / _e) * _e), qe({
      ctx: e,
      x: i,
      y: 0,
      width: l,
      height: Ae,
      textYPos: jr,
      label: (s + a).toString(),
      font: De.topRow
    }), i += l, c += l, a++;
}, gi = (e, r, t, n, s, o) => {
  r === 0 ? (yi(e, n, o), fi(e, t, n), vi(e, t, n, s)) : (pi(e, n), mi(e, n, s), hi(e, t, n));
}, wi = B.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, bi = B.div`
  height: ${je}px;
  display: block;
`, xi = B.canvas``, Ci = ({ zoom: e, topBarWidth: r, renderDefaultButtons: t, buttonsToReplaceDefaults: n, additionalToolbarItems: s }) => {
  const { week: o } = Xe(), { date: i, cols: a, dayOfYear: l, startDate: c } = Ue(), u = ge(null), m = ye(
    (p) => {
      const v = window.innerWidth * Ee, y = je + 1;
      Kr(p, v, y), gi(p, e, a, c, o, l);
    },
    [a, l, c, o, e]
  );
  return me(() => {
    if (!u.current)
      return;
    const p = u.current.getContext("2d");
    if (!p)
      return;
    const v = () => m(p);
    return window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [m]), me(() => {
    const p = u.current;
    if (!p)
      return;
    p.style.letterSpacing = "1px";
    const v = p.getContext("2d");
    v && m(v);
  }, [i, e, m]), /* @__PURE__ */ ne(wi, { children: [
    /* @__PURE__ */ P(Ps, { width: r, renderDefaultButtons: t, additionalToolbarItems: s, buttonsToReplaceDefaults: n }),
    /* @__PURE__ */ P(bi, { id: uo, children: /* @__PURE__ */ P(xi, { ref: u }) })
  ] });
}, Si = (e, r, t) => {
  const n = t === 0 ? _e : pe, s = () => {
    const o = (e.startDate.diff(r.startDate, "day") + 1) * n;
    return Math.max(0, o);
  };
  if (e.startDate.isAfter(r.startDate) && e.endDate.isBefore(r.endDate)) {
    const o = e.endDate.diff(e.startDate, "day") * n + n;
    return { x: s(), width: o };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isBefore(r.endDate)) {
    const o = e.endDate.diff(r.startDate, "day") * n + n;
    return { x: s(), width: o };
  }
  if (e.startDate.isAfter(r.startDate) && e.endDate.isAfter(r.endDate)) {
    const o = r.endDate.diff(e.startDate, "day") * n + n;
    return { x: s(), width: o };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isAfter(r.endDate)) {
    const o = r.endDate.diff(r.startDate, "day") * n + n;
    return { x: s(), width: o };
  }
  return { x: s(), width: 0 };
}, $i = (e, r, t, n, s, o) => {
  const i = e * xe + ho, a = G(n).hour(0).minute(0), l = G(s).hour(23).minute(59);
  return {
    ...Si(
      { startDate: a, endDate: l },
      { startDate: r, endDate: t },
      o
    ),
    y: i
  };
}, Ei = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let s = 1; s < 6; s += 2)
    r.push(parseInt(e.slice(s, s + 2), 16) / 255);
  const t = r.map(
    (s) => s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, ki = B.button`
  ${Ve}
  height: ${fo}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: white;
  width: 100%;
  cursor: pointer;
`, Mi = B.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, xt = B.p`
  ${Ve}
  ${Br}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, _i = B.p`
  ${Ve}
  ${Br}
`, Pi = B.div`
  position: sticky;
  left: ${Ie + 16}px;
  overflow: hidden;
`, Ai = ({ row: e, data: r, zoom: t, onTileClick: n }) => {
  var c;
  const { date: s } = Ue(), o = ft(s, t), { y: i, x: a, width: l } = $i(
    e,
    o.startDate,
    o.endDate,
    r.startDate,
    r.endDate,
    t
  );
  return /* @__PURE__ */ P(
    ki,
    {
      style: {
        left: `${a}px`,
        top: `${i}px`,
        backgroundColor: `${r.bgColor ?? vo}`,
        width: `${l}px`,
        color: Ei(r.bgColor ?? "")
      },
      onClick: () => n == null ? void 0 : n(r),
      children: /* @__PURE__ */ P(Mi, { children: /* @__PURE__ */ ne(Pi, { children: [
        /* @__PURE__ */ P(xt, { bold: !0, children: r.title }),
        /* @__PURE__ */ P(xt, { children: r.subtitle }),
        /* @__PURE__ */ P(_i, { children: r.description }),
        /* @__PURE__ */ ne(xt, { children: [
          "Attendees: ",
          ((c = r.attendees) == null ? void 0 : c.length) || "0"
        ] })
      ] }) })
    }
  );
}, Ti = ({ data: e, zoom: r, onTileClick: t }) => {
  const n = ye(() => {
    let s = 0;
    return e.map((o, i) => (i > 0 && (s += Math.max(e[i - 1].data.length, 1)), o.data.map(
      (a, l) => a.map((c) => /* @__PURE__ */ P(
        Ai,
        {
          row: l + s,
          data: c,
          zoom: r,
          onTileClick: t
        },
        `${c.id}, ${i}`
      ))
    ))).flat(2);
  }, [e, t, r]);
  return /* @__PURE__ */ P($e, { children: n() });
}, Oi = Ti;
B.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
B.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
B.label`
  font-size: 14px;
`;
B.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
B.input`
  height: 18px;
  width: 18px;
`;
B.button`
  width: 100%;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  color: #0a11eb;
  cursor: pointer;
  &:hover {
    background-color: #c9e5ff;
  }
`;
B.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const Ri = B.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: e }) => e.colors.blue900};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, Ii = B.div`
  width: 100%;
`, Di = B.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: e }) => e.colors.blue900};
`, Ni = B.div``, $r = B.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, Er = B.div`
  ${Ve}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.white};
  line-height: 12px;
  letter-spacing: 0.5px;
`, kr = B.p`
  ${Ve}
  margin-left: 4px;
  color: ${({ theme: e }) => e.colors.white};
`, Li = B.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.red400};
`, Zi = ({ tooltipData: e, zoom: r }) => {
  const { taken: t, free: n, over: s } = Xe(), { coords: o, disposition: i } = e, a = ge(null), l = r === 0 ? ke : pe;
  return Mr(() => {
    if (!a.current)
      return;
    const { width: c } = a.current.getBoundingClientRect(), u = c / 2 + l / 2;
    a.current.style.left = `${o.x - u}px`, a.current.style.top = `${o.y + 8}px`;
  }, [o.x, l, i.overtime, o.y]), /* @__PURE__ */ ne(Ri, { ref: a, children: [
    /* @__PURE__ */ P(Ii, { children: /* @__PURE__ */ ne(Ni, { children: [
      /* @__PURE__ */ ne($r, { children: [
        /* @__PURE__ */ P(we, { iconName: "calendarWarning", height: "14" }),
        /* @__PURE__ */ ne(Er, { children: [
          /* @__PURE__ */ P(kr, { children: `${t}: ${i.taken.hours}h ${i.taken.minutes}m` }),
          (i.overtime.hours > 0 || i.overtime.minutes > 0) && /* @__PURE__ */ ne($e, { children: [
            " ",
            "-",
            " ",
            /* @__PURE__ */ P(Li, { children: `${i.overtime.hours}h ${i.overtime.minutes}m ${s}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ ne($r, { children: [
        /* @__PURE__ */ P(we, { iconName: "calendarFree", height: "14" }),
        /* @__PURE__ */ P(Er, { children: /* @__PURE__ */ P(kr, { children: `${n}: ${i.free.hours}h ${i.free.minutes}m` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ P(Di, {})
  ] });
};
export {
  zi as Scheduler
};

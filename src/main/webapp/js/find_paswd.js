/* SVN.committedRevision=e829f75 */
/*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */
(function (c, d) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = c.document ? d(c, true) : function (a) {
            if (!a.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return d(a)
        }
    } else {
        d(c)
    }
}(typeof window !== "undefined" ? window : this, function (cY, dr) {
    var c6 = [];
    var dt = c6.slice;
    var dx = c6.concat;
    var eJ = c6.push;
    var dH = c6.indexOf;
    var ct = {};
    var b9 = ct.toString;
    var ch = ct.hasOwnProperty;
    var dv = {};
    var dh = "1.11.3",
        b8 = function (b, a) {
            return new b8.fn.init(b, a)
        },
        em = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        c2 = /^-ms-/,
        ed = /-([\da-z])/gi,
        dw = function (b, a) {
            return a.toUpperCase()
        };
    b8.fn = b8.prototype = {
        jquery: dh,
        constructor: b8,
        selector: "",
        length: 0,
        toArray: function () {
            return dt.call(this)
        },
        get: function (a) {
            return a != null ? (a < 0 ? this[a + this.length] : this[a]) : dt.call(this)
        },
        pushStack: function (b) {
            var a = b8.merge(this.constructor(), b);
            a.prevObject = this;
            a.context = this.context;
            return a
        },
        each: function (a, b) {
            return b8.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(b8.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(dt.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (b) {
            var a = this.length,
                c = +b + (b < 0 ? a : 0);
            return this.pushStack(c >= 0 && c < a ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: eJ,
        sort: c6.sort,
        splice: c6.splice
    };
    b8.extend = b8.fn.extend = function () {
        var l, g, j, h, a, c, k = arguments[0] || {},
            f = 1,
            d = arguments.length,
            b = false;
        if (typeof k === "boolean") {
            b = k;
            k = arguments[f] || {};
            f++
        }
        if (typeof k !== "object" && !b8.isFunction(k)) {
            k = {}
        }
        if (f === d) {
            k = this;
            f--
        }
        for (; f < d; f++) {
            if ((a = arguments[f]) != null) {
                for (h in a) {
                    l = k[h];
                    j = a[h];
                    if (k === j) {
                        continue
                    }
                    if (b && j && (b8.isPlainObject(j) || (g = b8.isArray(j)))) {
                        if (g) {
                            g = false;
                            c = l && b8.isArray(l) ? l : []
                        } else {
                            c = l && b8.isPlainObject(l) ? l : {}
                        }
                        k[h] = b8.extend(b, c, j)
                    } else {
                        if (j !== undefined) {
                            k[h] = j
                        }
                    }
                }
            }
        }
        return k
    };
    b8.extend({
        expando: "jQuery" + (dh + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {
        },
        isFunction: function (a) {
            return b8.type(a) === "function"
        },
        isArray: Array.isArray || function (a) {
            return b8.type(a) === "array"
        },
        isWindow: function (a) {
            return a != null && a == a.window
        },
        isNumeric: function (a) {
            return !b8.isArray(a) && (a - parseFloat(a) + 1) >= 0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) {
                return false
            }
            return true
        },
        isPlainObject: function (b) {
            var a;
            if (!b || b8.type(b) !== "object" || b.nodeType || b8.isWindow(b)) {
                return false
            }
            try {
                if (b.constructor && !ch.call(b, "constructor") && !ch.call(b.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (c) {
                return false
            }
            if (dv.ownLast) {
                for (a in b) {
                    return ch.call(b, a)
                }
            }
            for (a in b) {
            }
            return a === undefined || ch.call(b, a)
        },
        type: function (a) {
            if (a == null) {
                return a + ""
            }
            return typeof a === "object" || typeof a === "function" ? ct[b9.call(a)] || "object" : typeof a
        },
        globalEval: function (a) {
            if (a && b8.trim(a)) {
                (cY.execScript || function (b) {
                    cY["eval"].call(cY, b)
                })(a)
            }
        },
        camelCase: function (a) {
            return a.replace(c2, "ms-").replace(ed, dw)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (f, a, h) {
            var c, g = 0,
                b = f.length,
                d = dQ(f);
            if (h) {
                if (d) {
                    for (; g < b; g++) {
                        c = a.apply(f[g], h);
                        if (c === false) {
                            break
                        }
                    }
                } else {
                    for (g in f) {
                        c = a.apply(f[g], h);
                        if (c === false) {
                            break
                        }
                    }
                }
            } else {
                if (d) {
                    for (; g < b; g++) {
                        c = a.call(f[g], g, f[g]);
                        if (c === false) {
                            break
                        }
                    }
                } else {
                    for (g in f) {
                        c = a.call(f[g], g, f[g]);
                        if (c === false) {
                            break
                        }
                    }
                }
            }
            return f
        },
        trim: function (a) {
            return a == null ? "" : (a + "").replace(em, "")
        },
        makeArray: function (b, c) {
            var a = c || [];
            if (b != null) {
                if (dQ(Object(b))) {
                    b8.merge(a, typeof b === "string" ? [b] : b)
                } else {
                    eJ.call(a, b)
                }
            }
            return a
        },
        inArray: function (b, d, c) {
            var a;
            if (d) {
                if (dH) {
                    return dH.call(d, b, c)
                }
                a = d.length;
                c = c ? c < 0 ? Math.max(0, a + c) : c : 0;
                for (; c < a; c++) {
                    if (c in d && d[c] === b) {
                        return c
                    }
                }
            }
            return -1
        },
        merge: function (a, d) {
            var c = +d.length,
                f = 0,
                b = a.length;
            while (f < c) {
                a[b++] = d[f++]
            }
            if (c !== c) {
                while (d[f] !== undefined) {
                    a[b++] = d[f++]
                }
            }
            a.length = b;
            return a
        },
        grep: function (g, c, f) {
            var a, b = [],
                j = 0,
                h = g.length,
                d = !f;
            for (; j < h; j++) {
                a = !c(g[j], j);
                if (a !== d) {
                    b.push(g[j])
                }
            }
            return b
        },
        map: function (h, g, c) {
            var a, f = 0,
                d = h.length,
                j = dQ(h),
                b = [];
            if (j) {
                for (; f < d; f++) {
                    a = g(h[f], f, c);
                    if (a != null) {
                        b.push(a)
                    }
                }
            } else {
                for (f in h) {
                    a = g(h[f], f, c);
                    if (a != null) {
                        b.push(a)
                    }
                }
            }
            return dx.apply([], b)
        },
        guid: 1,
        proxy: function (c, d) {
            var b, f, a;
            if (typeof d === "string") {
                a = c[d];
                d = c;
                c = a
            }
            if (!b8.isFunction(c)) {
                return undefined
            }
            b = dt.call(arguments, 2);
            f = function () {
                return c.apply(d || this, b.concat(dt.call(arguments)))
            };
            f.guid = c.guid = c.guid || b8.guid++;
            return f
        },
        now: function () {
            return +(new Date())
        },
        support: dv
    });
    b8.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (b, a) {
        ct["[object " + a + "]"] = a.toLowerCase()
    });

    function dQ(c) {
        var a = "length" in c && c.length,
            b = b8.type(c);
        if (b === "function" || b8.isWindow(c)) {
            return false
        }
        if (c.nodeType === 1 && a) {
            return true
        }
        return b === "array" || a === 0 || typeof a === "number" && a > 0 && (a - 1) in c
    }

    var dX =
        /*!
         * Sizzle CSS Selector Engine v2.2.0-pre
         * http://sizzlejs.com/
         *
         * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-12-16
         */
        (function (f) {
            var an, k, aB, Z, X, I, Y, v, d, W, V, ac, h, D, A, J, o, F, l, t = "sizzle" + 1 * new Date(),
                ak = f.document,
                ap = 0,
                B = 0,
                aD = j(),
                u = j(),
                g = j(),
                al = function (aE, aF) {
                    if (aE === aF) {
                        V = true
                    }
                    return 0
                },
                ag = 1 << 31,
                ah = ({}).hasOwnProperty,
                w = [],
                at = w.pop,
                a = w.push,
                O = w.push,
                H = w.slice,
                aa = function (aH, aE) {
                    var aF = 0,
                        aG = aH.length;
                    for (; aF < aG; aF++) {
                        if (aH[aF] === aE) {
                            return aF
                        }
                    }
                    return -1
                },
                M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ay = "[\\x20\\t\\r\\n\\f]",
                U = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                T = U.replace("w", "w#"),
                aw = "\\[" + ay + "*(" + U + ")(?:" + ay + "*([*^$|!~]?=)" + ay + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + T + "))|)" + ay + "*\\]",
                S = ":(" + U + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + aw + ")*)|.*)\\)|)",
                x = new RegExp(ay + "+", "g"),
                au = new RegExp("^" + ay + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ay + "+$", "g"),
                ao = new RegExp("^" + ay + "*," + ay + "*"),
                q = new RegExp("^" + ay + "*([>+~]|" + ay + ")" + ay + "*"),
                y = new RegExp("=" + ay + "*([^\\]'\"]*?)" + ay + "*\\]", "g"),
                R = new RegExp(S),
                ai = new RegExp("^" + T + "$"),
                az = {
                    ID: new RegExp("^#(" + U + ")"),
                    CLASS: new RegExp("^\\.(" + U + ")"),
                    TAG: new RegExp("^(" + U.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + aw),
                    PSEUDO: new RegExp("^" + S),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ay + "*(even|odd|(([+-]|)(\\d*)n|)" + ay + "*(?:([+-]|)" + ay + "*(\\d+)|))" + ay + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + M + ")$", "i"),
                    needsContext: new RegExp("^" + ay + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ay + "*((?:-\\d)?\\d*)" + ay + "*\\)|)(?=[^-]|$)", "i")
                },
                af = /^(?:input|select|textarea|button)$/i,
                z = /^h\d$/i,
                c = /^[^{]+\{\s*\[native \w/,
                n = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                aA = /[+~]/,
                ae = /'|\\/g,
                ar = new RegExp("\\\\([\\da-f]{1,6}" + ay + "?|(" + ay + ")|.)", "ig"),
                K = function (aH, aE, aG) {
                    var aF = "0x" + aE - 65536;
                    return aF !== aF || aG ? aE : aF < 0 ? String.fromCharCode(aF + 65536) : String.fromCharCode(aF >> 10 | 55296, aF & 1023 | 56320)
                },
                aj = function () {
                    ac()
                };
            try {
                O.apply((w = H.call(ak.childNodes)), ak.childNodes);
                w[ak.childNodes.length].nodeType
            } catch (r) {
                O = {
                    apply: w.length ? function (aE, aF) {
                        a.apply(aE, H.call(aF))
                    } : function (aH, aE) {
                        var aG = aH.length,
                            aF = 0;
                        while ((aH[aG++] = aE[aF++])) {
                        }
                        aH.length = aG - 1
                    }
                }
            }

            function G(aP, aI, aL, aG) {
                var aK, aS, aR, aN, aM, aE, aF, aJ, aH, aO;
                if ((aI ? aI.ownerDocument || aI : ak) !== h) {
                    ac(aI)
                }
                aI = aI || h;
                aL = aL || [];
                aN = aI.nodeType;
                if (typeof aP !== "string" || !aP || aN !== 1 && aN !== 9 && aN !== 11) {
                    return aL
                }
                if (!aG && A) {
                    if (aN !== 11 && (aK = n.exec(aP))) {
                        if ((aR = aK[1])) {
                            if (aN === 9) {
                                aS = aI.getElementById(aR);
                                if (aS && aS.parentNode) {
                                    if (aS.id === aR) {
                                        aL.push(aS);
                                        return aL
                                    }
                                } else {
                                    return aL
                                }
                            } else {
                                if (aI.ownerDocument && (aS = aI.ownerDocument.getElementById(aR)) && l(aI, aS) && aS.id === aR) {
                                    aL.push(aS);
                                    return aL
                                }
                            }
                        } else {
                            if (aK[2]) {
                                O.apply(aL, aI.getElementsByTagName(aP));
                                return aL
                            } else {
                                if ((aR = aK[3]) && k.getElementsByClassName) {
                                    O.apply(aL, aI.getElementsByClassName(aR));
                                    return aL
                                }
                            }
                        }
                    }
                    if (k.qsa && (!J || !J.test(aP))) {
                        aJ = aF = t;
                        aH = aI;
                        aO = aN !== 1 && aP;
                        if (aN === 1 && aI.nodeName.toLowerCase() !== "object") {
                            aE = I(aP);
                            if ((aF = aI.getAttribute("id"))) {
                                aJ = aF.replace(ae, "\\$&")
                            } else {
                                aI.setAttribute("id", aJ)
                            }
                            aJ = "[id='" + aJ + "'] ";
                            aM = aE.length;
                            while (aM--) {
                                aE[aM] = aJ + C(aE[aM])
                            }
                            aH = aA.test(aP) && P(aI.parentNode) || aI;
                            aO = aE.join(",")
                        }
                        if (aO) {
                            try {
                                O.apply(aL, aH.querySelectorAll(aO));
                                return aL
                            } catch (aQ) {
                            } finally {
                                if (!aF) {
                                    aI.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
                return v(aP.replace(au, "$1"), aI, aL, aG)
            }

            function j() {
                var aE = [];

                function aF(aH, aG) {
                    if (aE.push(aH + " ") > aB.cacheLength) {
                        delete aF[aE.shift()]
                    }
                    return (aF[aH + " "] = aG)
                }

                return aF
            }

            function aC(aE) {
                aE[t] = true;
                return aE
            }

            function av(aG) {
                var aE = h.createElement("div");
                try {
                    return !!aG(aE)
                } catch (aF) {
                    return false
                } finally {
                    if (aE.parentNode) {
                        aE.parentNode.removeChild(aE)
                    }
                    aE = null
                }
            }

            function p(aF, aH) {
                var aG = aF.split("|"),
                    aE = aF.length;
                while (aE--) {
                    aB.attrHandle[aG[aE]] = aH
                }
            }

            function ax(aG, aH) {
                var aE = aH && aG,
                    aF = aE && aG.nodeType === 1 && aH.nodeType === 1 && (~aH.sourceIndex || ag) - (~aG.sourceIndex || ag);
                if (aF) {
                    return aF
                }
                if (aE) {
                    while ((aE = aE.nextSibling)) {
                        if (aE === aH) {
                            return -1
                        }
                    }
                }
                return aG ? 1 : -1
            }

            function m(aE) {
                return function (aF) {
                    var aG = aF.nodeName.toLowerCase();
                    return aG === "input" && aF.type === aE
                }
            }

            function Q(aE) {
                return function (aF) {
                    var aG = aF.nodeName.toLowerCase();
                    return (aG === "input" || aG === "button") && aF.type === aE
                }
            }

            function E(aE) {
                return aC(function (aF) {
                    aF = +aF;
                    return aC(function (aH, aI) {
                        var aK, aG = aE([], aH.length, aF),
                            aJ = aG.length;
                        while (aJ--) {
                            if (aH[(aK = aG[aJ])]) {
                                aH[aK] = !(aI[aK] = aH[aK])
                            }
                        }
                    })
                })
            }

            function P(aE) {
                return aE && typeof aE.getElementsByTagName !== "undefined" && aE
            }

            k = G.support = {};
            X = G.isXML = function (aF) {
                var aE = aF && (aF.ownerDocument || aF).documentElement;
                return aE ? aE.nodeName !== "HTML" : false
            };
            ac = G.setDocument = function (aF) {
                var aH, aG, aE = aF ? aF.ownerDocument || aF : ak;
                if (aE === h || aE.nodeType !== 9 || !aE.documentElement) {
                    return h
                }
                h = aE;
                D = aE.documentElement;
                aG = aE.defaultView;
                if (aG && aG !== aG.top) {
                    if (aG.addEventListener) {
                        aG.addEventListener("unload", aj, false)
                    } else {
                        if (aG.attachEvent) {
                            aG.attachEvent("onunload", aj)
                        }
                    }
                }
                A = !X(aE);
                k.attributes = av(function (aI) {
                    aI.className = "i";
                    return !aI.getAttribute("className")
                });
                k.getElementsByTagName = av(function (aI) {
                    aI.appendChild(aE.createComment(""));
                    return !aI.getElementsByTagName("*").length
                });
                k.getElementsByClassName = c.test(aE.getElementsByClassName);
                k.getById = av(function (aI) {
                    D.appendChild(aI).id = t;
                    return !aE.getElementsByName || !aE.getElementsByName(t).length
                });
                if (k.getById) {
                    aB.find.ID = function (aI, aJ) {
                        if (typeof aJ.getElementById !== "undefined" && A) {
                            var aK = aJ.getElementById(aI);
                            return aK && aK.parentNode ? [aK] : []
                        }
                    };
                    aB.filter.ID = function (aI) {
                        var aJ = aI.replace(ar, K);
                        return function (aK) {
                            return aK.getAttribute("id") === aJ
                        }
                    }
                } else {
                    delete aB.find.ID;
                    aB.filter.ID = function (aI) {
                        var aJ = aI.replace(ar, K);
                        return function (aK) {
                            var aL = typeof aK.getAttributeNode !== "undefined" && aK.getAttributeNode("id");
                            return aL && aL.value === aJ
                        }
                    }
                }
                aB.find.TAG = k.getElementsByTagName ? function (aJ, aI) {
                    if (typeof aI.getElementsByTagName !== "undefined") {
                        return aI.getElementsByTagName(aJ)
                    } else {
                        if (k.qsa) {
                            return aI.querySelectorAll(aJ)
                        }
                    }
                } : function (aN, aJ) {
                    var aI, aK = [],
                        aL = 0,
                        aM = aJ.getElementsByTagName(aN);
                    if (aN === "*") {
                        while ((aI = aM[aL++])) {
                            if (aI.nodeType === 1) {
                                aK.push(aI)
                            }
                        }
                        return aK
                    }
                    return aM
                };
                aB.find.CLASS = k.getElementsByClassName && function (aI, aJ) {
                    if (A) {
                        return aJ.getElementsByClassName(aI)
                    }
                };
                o = [];
                J = [];
                if ((k.qsa = c.test(aE.querySelectorAll))) {
                    av(function (aI) {
                        D.appendChild(aI).innerHTML = "<a id='" + t + "'></a><select id='" + t + "-\f]' msallowcapture=''><option selected=''></option></select>";
                        if (aI.querySelectorAll("[msallowcapture^='']").length) {
                            J.push("[*^$]=" + ay + "*(?:''|\"\")")
                        }
                        if (!aI.querySelectorAll("[selected]").length) {
                            J.push("\\[" + ay + "*(?:value|" + M + ")")
                        }
                        if (!aI.querySelectorAll("[id~=" + t + "-]").length) {
                            J.push("~=")
                        }
                        if (!aI.querySelectorAll(":checked").length) {
                            J.push(":checked")
                        }
                        if (!aI.querySelectorAll("a#" + t + "+*").length) {
                            J.push(".#.+[+~]")
                        }
                    });
                    av(function (aI) {
                        var aJ = aE.createElement("input");
                        aJ.setAttribute("type", "hidden");
                        aI.appendChild(aJ).setAttribute("name", "D");
                        if (aI.querySelectorAll("[name=d]").length) {
                            J.push("name" + ay + "*[*^$|!~]?=")
                        }
                        if (!aI.querySelectorAll(":enabled").length) {
                            J.push(":enabled", ":disabled")
                        }
                        aI.querySelectorAll("*,:x");
                        J.push(",.*:")
                    })
                }
                if ((k.matchesSelector = c.test((F = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)))) {
                    av(function (aI) {
                        k.disconnectedMatch = F.call(aI, "div");
                        F.call(aI, "[s!='']:x");
                        o.push("!=", S)
                    })
                }
                J = J.length && new RegExp(J.join("|"));
                o = o.length && new RegExp(o.join("|"));
                aH = c.test(D.compareDocumentPosition);
                l = aH || c.test(D.contains) ? function (aK, aL) {
                    var aI = aK.nodeType === 9 ? aK.documentElement : aK,
                        aJ = aL && aL.parentNode;
                    return aK === aJ || !!(aJ && aJ.nodeType === 1 && (aI.contains ? aI.contains(aJ) : aK.compareDocumentPosition && aK.compareDocumentPosition(aJ) & 16))
                } : function (aI, aJ) {
                    if (aJ) {
                        while ((aJ = aJ.parentNode)) {
                            if (aJ === aI) {
                                return true
                            }
                        }
                    }
                    return false
                };
                al = aH ? function (aJ, aK) {
                    if (aJ === aK) {
                        V = true;
                        return 0
                    }
                    var aI = !aJ.compareDocumentPosition - !aK.compareDocumentPosition;
                    if (aI) {
                        return aI
                    }
                    aI = (aJ.ownerDocument || aJ) === (aK.ownerDocument || aK) ? aJ.compareDocumentPosition(aK) : 1;
                    if (aI & 1 || (!k.sortDetached && aK.compareDocumentPosition(aJ) === aI)) {
                        if (aJ === aE || aJ.ownerDocument === ak && l(ak, aJ)) {
                            return -1
                        }
                        if (aK === aE || aK.ownerDocument === ak && l(ak, aK)) {
                            return 1
                        }
                        return W ? (aa(W, aJ) - aa(W, aK)) : 0
                    }
                    return aI & 4 ? -1 : 1
                } : function (aO, aP) {
                    if (aO === aP) {
                        V = true;
                        return 0
                    }
                    var aI, aL = 0,
                        aJ = aO.parentNode,
                        aM = aP.parentNode,
                        aN = [aO],
                        aK = [aP];
                    if (!aJ || !aM) {
                        return aO === aE ? -1 : aP === aE ? 1 : aJ ? -1 : aM ? 1 : W ? (aa(W, aO) - aa(W, aP)) : 0
                    } else {
                        if (aJ === aM) {
                            return ax(aO, aP)
                        }
                    }
                    aI = aO;
                    while ((aI = aI.parentNode)) {
                        aN.unshift(aI)
                    }
                    aI = aP;
                    while ((aI = aI.parentNode)) {
                        aK.unshift(aI)
                    }
                    while (aN[aL] === aK[aL]) {
                        aL++
                    }
                    return aL ? ax(aN[aL], aK[aL]) : aN[aL] === ak ? -1 : aK[aL] === ak ? 1 : 0
                };
                return aE
            };
            G.matches = function (aE, aF) {
                return G(aE, null, null, aF)
            };
            G.matchesSelector = function (aF, aH) {
                if ((aF.ownerDocument || aF) !== h) {
                    ac(aF)
                }
                aH = aH.replace(y, "='$1']");
                if (k.matchesSelector && A && (!o || !o.test(aH)) && (!J || !J.test(aH))) {
                    try {
                        var aG = F.call(aF, aH);
                        if (aG || k.disconnectedMatch || aF.document && aF.document.nodeType !== 11) {
                            return aG
                        }
                    } catch (aE) {
                    }
                }
                return G(aH, h, null, [aF]).length > 0
            };
            G.contains = function (aF, aE) {
                if ((aF.ownerDocument || aF) !== h) {
                    ac(aF)
                }
                return l(aF, aE)
            };
            G.attr = function (aF, aH) {
                if ((aF.ownerDocument || aF) !== h) {
                    ac(aF)
                }
                var aG = aB.attrHandle[aH.toLowerCase()],
                    aE = aG && ah.call(aB.attrHandle, aH.toLowerCase()) ? aG(aF, aH, !A) : undefined;
                return aE !== undefined ? aE : k.attributes || !A ? aF.getAttribute(aH) : (aE = aF.getAttributeNode(aH)) && aE.specified ? aE.value : null
            };
            G.error = function (aE) {
                throw new Error("Syntax error, unrecognized expression: " + aE)
            };
            G.uniqueSort = function (aE) {
                var aI, aH = [],
                    aG = 0,
                    aF = 0;
                V = !k.detectDuplicates;
                W = !k.sortStable && aE.slice(0);
                aE.sort(al);
                if (V) {
                    while ((aI = aE[aF++])) {
                        if (aI === aE[aF]) {
                            aG = aH.push(aF)
                        }
                    }
                    while (aG--) {
                        aE.splice(aH[aG], 1)
                    }
                }
                W = null;
                return aE
            };
            Z = G.getText = function (aH) {
                var aI, aF = "",
                    aE = 0,
                    aG = aH.nodeType;
                if (!aG) {
                    while ((aI = aH[aE++])) {
                        aF += Z(aI)
                    }
                } else {
                    if (aG === 1 || aG === 9 || aG === 11) {
                        if (typeof aH.textContent === "string") {
                            return aH.textContent
                        } else {
                            for (aH = aH.firstChild; aH; aH = aH.nextSibling) {
                                aF += Z(aH)
                            }
                        }
                    } else {
                        if (aG === 3 || aG === 4) {
                            return aH.nodeValue
                        }
                    }
                }
                return aF
            };
            aB = G.selectors = {
                cacheLength: 50,
                createPseudo: aC,
                match: az,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (aE) {
                        aE[1] = aE[1].replace(ar, K);
                        aE[3] = (aE[3] || aE[4] || aE[5] || "").replace(ar, K);
                        if (aE[2] === "~=") {
                            aE[3] = " " + aE[3] + " "
                        }
                        return aE.slice(0, 4)
                    },
                    CHILD: function (aE) {
                        aE[1] = aE[1].toLowerCase();
                        if (aE[1].slice(0, 3) === "nth") {
                            if (!aE[3]) {
                                G.error(aE[0])
                            }
                            aE[4] = +(aE[4] ? aE[5] + (aE[6] || 1) : 2 * (aE[3] === "even" || aE[3] === "odd"));
                            aE[5] = +((aE[7] + aE[8]) || aE[3] === "odd")
                        } else {
                            if (aE[3]) {
                                G.error(aE[0])
                            }
                        }
                        return aE
                    },
                    PSEUDO: function (aF) {
                        var aG, aE = !aF[6] && aF[2];
                        if (az.CHILD.test(aF[0])) {
                            return null
                        }
                        if (aF[3]) {
                            aF[2] = aF[4] || aF[5] || ""
                        } else {
                            if (aE && R.test(aE) && (aG = I(aE, true)) && (aG = aE.indexOf(")", aE.length - aG) - aE.length)) {
                                aF[0] = aF[0].slice(0, aG);
                                aF[2] = aE.slice(0, aG)
                            }
                        }
                        return aF.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function (aE) {
                        var aF = aE.replace(ar, K).toLowerCase();
                        return aE === "*" ? function () {
                            return true
                        } : function (aG) {
                            return aG.nodeName && aG.nodeName.toLowerCase() === aF
                        }
                    },
                    CLASS: function (aF) {
                        var aE = aD[aF + " "];
                        return aE || (aE = new RegExp("(^|" + ay + ")" + aF + "(" + ay + "|$)")) && aD(aF, function (aG) {
                            return aE.test(typeof aG.className === "string" && aG.className || typeof aG.getAttribute !== "undefined" && aG.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (aE, aF, aG) {
                        return function (aI) {
                            var aH = G.attr(aI, aE);
                            if (aH == null) {
                                return aF === "!="
                            }
                            if (!aF) {
                                return true
                            }
                            aH += "";
                            return aF === "=" ? aH === aG : aF === "!=" ? aH !== aG : aF === "^=" ? aG && aH.indexOf(aG) === 0 : aF === "*=" ? aG && aH.indexOf(aG) > -1 : aF === "$=" ? aG && aH.slice(-aG.length) === aG : aF === "~=" ? (" " + aH.replace(x, " ") + " ").indexOf(aG) > -1 : aF === "|=" ? aH === aG || aH.slice(0, aG.length + 1) === aG + "-" : false
                        }
                    },
                    CHILD: function (aG, aL, aE, aK, aF) {
                        var aH = aG.slice(0, 3) !== "nth",
                            aJ = aG.slice(-4) !== "last",
                            aI = aL === "of-type";
                        return aK === 1 && aF === 0 ? function (aM) {
                            return !!aM.parentNode
                        } : function (aS, aY, aP) {
                            var aQ, aM, aR, aN, aU, aV, aT = aH !== aJ ? "nextSibling" : "previousSibling",
                                aO = aS.parentNode,
                                aW = aI && aS.nodeName.toLowerCase(),
                                aX = !aP && !aI;
                            if (aO) {
                                if (aH) {
                                    while (aT) {
                                        aR = aS;
                                        while ((aR = aR[aT])) {
                                            if (aI ? aR.nodeName.toLowerCase() === aW : aR.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        aV = aT = aG === "only" && !aV && "nextSibling"
                                    }
                                    return true
                                }
                                aV = [aJ ? aO.firstChild : aO.lastChild];
                                if (aJ && aX) {
                                    aM = aO[t] || (aO[t] = {});
                                    aQ = aM[aG] || [];
                                    aU = aQ[0] === ap && aQ[1];
                                    aN = aQ[0] === ap && aQ[2];
                                    aR = aU && aO.childNodes[aU];
                                    while ((aR = ++aU && aR && aR[aT] || (aN = aU = 0) || aV.pop())) {
                                        if (aR.nodeType === 1 && ++aN && aR === aS) {
                                            aM[aG] = [ap, aU, aN];
                                            break
                                        }
                                    }
                                } else {
                                    if (aX && (aQ = (aS[t] || (aS[t] = {}))[aG]) && aQ[0] === ap) {
                                        aN = aQ[1]
                                    } else {
                                        while ((aR = ++aU && aR && aR[aT] || (aN = aU = 0) || aV.pop())) {
                                            if ((aI ? aR.nodeName.toLowerCase() === aW : aR.nodeType === 1) && ++aN) {
                                                if (aX) {
                                                    (aR[t] || (aR[t] = {}))[aG] = [ap, aN]
                                                }
                                                if (aR === aS) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                aN -= aF;
                                return aN === aK || (aN % aK === 0 && aN / aK >= 0)
                            }
                        }
                    },
                    PSEUDO: function (aE, aF) {
                        var aH,
                            aG = aB.pseudos[aE] || aB.setFilters[aE.toLowerCase()] || G.error("unsupported pseudo: " + aE);
                        if (aG[t]) {
                            return aG(aF)
                        }
                        if (aG.length > 1) {
                            aH = [aE, aE, "", aF];
                            return aB.setFilters.hasOwnProperty(aE.toLowerCase()) ? aC(function (aK, aI) {
                                var aL, aM = aG(aK, aF),
                                    aJ = aM.length;
                                while (aJ--) {
                                    aL = aa(aK, aM[aJ]);
                                    aK[aL] = !(aI[aL] = aM[aJ])
                                }
                            }) : function (aI) {
                                return aG(aI, 0, aH)
                            }
                        }
                        return aG
                    }
                },
                pseudos: {
                    not: aC(function (aH) {
                        var aG = [],
                            aF = [],
                            aE = Y(aH.replace(au, "$1"));
                        return aE[t] ? aC(function (aN, aI, aK, aM) {
                            var aJ, aO = aE(aN, null, aM, []),
                                aL = aN.length;
                            while (aL--) {
                                if ((aJ = aO[aL])) {
                                    aN[aL] = !(aI[aL] = aJ)
                                }
                            }
                        }) : function (aI, aJ, aK) {
                            aG[0] = aI;
                            aE(aG, null, aK, aF);
                            aG[0] = null;
                            return !aF.pop()
                        }
                    }),
                    has: aC(function (aE) {
                        return function (aF) {
                            return G(aE, aF).length > 0
                        }
                    }),
                    contains: aC(function (aE) {
                        aE = aE.replace(ar, K);
                        return function (aF) {
                            return (aF.textContent || aF.innerText || Z(aF)).indexOf(aE) > -1
                        }
                    }),
                    lang: aC(function (aE) {
                        if (!ai.test(aE || "")) {
                            G.error("unsupported lang: " + aE)
                        }
                        aE = aE.replace(ar, K).toLowerCase();
                        return function (aF) {
                            var aG;
                            do {
                                if ((aG = A ? aF.lang : aF.getAttribute("xml:lang") || aF.getAttribute("lang"))) {
                                    aG = aG.toLowerCase();
                                    return aG === aE || aG.indexOf(aE + "-") === 0
                                }
                            } while ((aF = aF.parentNode) && aF.nodeType === 1);
                            return false
                        }
                    }),
                    target: function (aF) {
                        var aE = f.location && f.location.hash;
                        return aE && aE.slice(1) === aF.id
                    },
                    root: function (aE) {
                        return aE === D
                    },
                    focus: function (aE) {
                        return aE === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(aE.type || aE.href || ~aE.tabIndex)
                    },
                    enabled: function (aE) {
                        return aE.disabled === false
                    },
                    disabled: function (aE) {
                        return aE.disabled === true
                    },
                    checked: function (aF) {
                        var aE = aF.nodeName.toLowerCase();
                        return (aE === "input" && !!aF.checked) || (aE === "option" && !!aF.selected)
                    },
                    selected: function (aE) {
                        if (aE.parentNode) {
                            aE.parentNode.selectedIndex
                        }
                        return aE.selected === true
                    },
                    empty: function (aE) {
                        for (aE = aE.firstChild; aE; aE = aE.nextSibling) {
                            if (aE.nodeType < 6) {
                                return false
                            }
                        }
                        return true
                    },
                    parent: function (aE) {
                        return !aB.pseudos.empty(aE)
                    },
                    header: function (aE) {
                        return z.test(aE.nodeName)
                    },
                    input: function (aE) {
                        return af.test(aE.nodeName)
                    },
                    button: function (aE) {
                        var aF = aE.nodeName.toLowerCase();
                        return aF === "input" && aE.type === "button" || aF === "button"
                    },
                    text: function (aE) {
                        var aF;
                        return aE.nodeName.toLowerCase() === "input" && aE.type === "text" && ((aF = aE.getAttribute("type")) == null || aF.toLowerCase() === "text")
                    },
                    first: E(function () {
                        return [0]
                    }),
                    last: E(function (aF, aE) {
                        return [aE - 1]
                    }),
                    eq: E(function (aG, aE, aF) {
                        return [aF < 0 ? aF + aE : aF]
                    }),
                    even: E(function (aG, aE) {
                        var aF = 0;
                        for (; aF < aE; aF += 2) {
                            aG.push(aF)
                        }
                        return aG
                    }),
                    odd: E(function (aG, aE) {
                        var aF = 1;
                        for (; aF < aE; aF += 2) {
                            aG.push(aF)
                        }
                        return aG
                    }),
                    lt: E(function (aG, aH, aE) {
                        var aF = aE < 0 ? aE + aH : aE;
                        for (; --aF >= 0;) {
                            aG.push(aF)
                        }
                        return aG
                    }),
                    gt: E(function (aG, aH, aE) {
                        var aF = aE < 0 ? aE + aH : aE;
                        for (; ++aF < aH;) {
                            aG.push(aF)
                        }
                        return aG
                    })
                }
            };
            aB.pseudos.nth = aB.pseudos.eq;
            for (an in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) {
                aB.pseudos[an] = m(an)
            }
            for (an in {
                submit: true,
                reset: true
            }) {
                aB.pseudos[an] = Q(an)
            }

            function ad() {
            }

            ad.prototype = aB.filters = aB.pseudos;
            aB.setFilters = new ad();
            I = G.tokenize = function (aF, aK) {
                var aH, aE, aM, aL, aN, aI, aJ, aG = u[aF + " "];
                if (aG) {
                    return aK ? 0 : aG.slice(0)
                }
                aN = aF;
                aI = [];
                aJ = aB.preFilter;
                while (aN) {
                    if (!aH || (aE = ao.exec(aN))) {
                        if (aE) {
                            aN = aN.slice(aE[0].length) || aN
                        }
                        aI.push((aM = []))
                    }
                    aH = false;
                    if ((aE = q.exec(aN))) {
                        aH = aE.shift();
                        aM.push({
                            value: aH,
                            type: aE[0].replace(au, " ")
                        });
                        aN = aN.slice(aH.length)
                    }
                    for (aL in aB.filter) {
                        if ((aE = az[aL].exec(aN)) && (!aJ[aL] || (aE = aJ[aL](aE)))) {
                            aH = aE.shift();
                            aM.push({
                                value: aH,
                                type: aL,
                                matches: aE
                            });
                            aN = aN.slice(aH.length)
                        }
                    }
                    if (!aH) {
                        break
                    }
                }
                return aK ? aN.length : aN ? G.error(aF) : u(aF, aI).slice(0)
            };

            function C(aH) {
                var aE = 0,
                    aF = aH.length,
                    aG = "";
                for (; aE < aF; aE++) {
                    aG += aH[aE].value
                }
                return aG
            }

            function L(aJ, aF, aE) {
                var aH = aF.dir,
                    aI = aE && aH === "parentNode",
                    aG = B++;
                return aF.first ? function (aK, aL, aM) {
                    while ((aK = aK[aH])) {
                        if (aK.nodeType === 1 || aI) {
                            return aJ(aK, aL, aM)
                        }
                    }
                } : function (aL, aN, aO) {
                    var aK, aM, aP = [ap, aG];
                    if (aO) {
                        while ((aL = aL[aH])) {
                            if (aL.nodeType === 1 || aI) {
                                if (aJ(aL, aN, aO)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while ((aL = aL[aH])) {
                            if (aL.nodeType === 1 || aI) {
                                aM = aL[t] || (aL[t] = {});
                                if ((aK = aM[aH]) && aK[0] === ap && aK[1] === aG) {
                                    return (aP[2] = aK[2])
                                } else {
                                    aM[aH] = aP;
                                    if ((aP[2] = aJ(aL, aN, aO))) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function am(aE) {
                return aE.length > 1 ? function (aH, aI, aG) {
                    var aF = aE.length;
                    while (aF--) {
                        if (!aE[aF](aH, aI, aG)) {
                            return false
                        }
                    }
                    return true
                } : aE[0]
            }

            function aq(aF, aH, aI) {
                var aE = 0,
                    aG = aH.length;
                for (; aE < aG; aE++) {
                    G(aF, aH[aE], aI)
                }
                return aI
            }

            function ab(aJ, aI, aH, aG, aN) {
                var aF, aK = [],
                    aE = 0,
                    aM = aJ.length,
                    aL = aI != null;
                for (; aE < aM; aE++) {
                    if ((aF = aJ[aE])) {
                        if (!aH || aH(aF, aG, aN)) {
                            aK.push(aF);
                            if (aL) {
                                aI.push(aE)
                            }
                        }
                    }
                }
                return aK
            }

            function N(aF, aG, aJ, aE, aI, aH) {
                if (aE && !aE[t]) {
                    aE = N(aE)
                }
                if (aI && !aI[t]) {
                    aI = N(aI, aH)
                }
                return aC(function (aT, aK, aO, aU) {
                    var aW, aV, aQ, aN = [],
                        aS = [],
                        aP = aK.length,
                        aR = aT || aq(aG || "*", aO.nodeType ? [aO] : aO, []),
                        aM = aF && (aT || !aG) ? ab(aR, aN, aF, aO, aU) : aR,
                        aL = aJ ? aI || (aT ? aF : aP || aE) ? [] : aK : aM;
                    if (aJ) {
                        aJ(aM, aL, aO, aU)
                    }
                    if (aE) {
                        aW = ab(aL, aS);
                        aE(aW, [], aO, aU);
                        aV = aW.length;
                        while (aV--) {
                            if ((aQ = aW[aV])) {
                                aL[aS[aV]] = !(aM[aS[aV]] = aQ)
                            }
                        }
                    }
                    if (aT) {
                        if (aI || aF) {
                            if (aI) {
                                aW = [];
                                aV = aL.length;
                                while (aV--) {
                                    if ((aQ = aL[aV])) {
                                        aW.push((aM[aV] = aQ))
                                    }
                                }
                                aI(null, (aL = []), aW, aU)
                            }
                            aV = aL.length;
                            while (aV--) {
                                if ((aQ = aL[aV]) && (aW = aI ? aa(aT, aQ) : aN[aV]) > -1) {
                                    aT[aW] = !(aK[aW] = aQ)
                                }
                            }
                        }
                    } else {
                        aL = ab(aL === aK ? aL.splice(aP, aL.length) : aL);
                        if (aI) {
                            aI(null, aK, aL, aU)
                        } else {
                            O.apply(aK, aL)
                        }
                    }
                })
            }

            function s(aJ) {
                var aO, aL, aN, aK = aJ.length,
                    aG = aB.relative[aJ[0].type],
                    aF = aG || aB.relative[" "],
                    aM = aG ? 1 : 0,
                    aI = L(function (aP) {
                        return aP === aO
                    }, aF, true),
                    aH = L(function (aP) {
                        return aa(aO, aP) > -1
                    }, aF, true),
                    aE = [function (aP, aQ, aR) {
                        var aS = (!aG && (aR || aQ !== d)) || ((aO = aQ).nodeType ? aI(aP, aQ, aR) : aH(aP, aQ, aR));
                        aO = null;
                        return aS
                    }];
                for (; aM < aK; aM++) {
                    if ((aL = aB.relative[aJ[aM].type])) {
                        aE = [L(am(aE), aL)]
                    } else {
                        aL = aB.filter[aJ[aM].type].apply(null, aJ[aM].matches);
                        if (aL[t]) {
                            aN = ++aM;
                            for (; aN < aK; aN++) {
                                if (aB.relative[aJ[aN].type]) {
                                    break
                                }
                            }
                            return N(aM > 1 && am(aE), aM > 1 && C(aJ.slice(0, aM - 1).concat({
                                value: aJ[aM - 2].type === " " ? "*" : ""
                            })).replace(au, "$1"), aL, aM < aN && s(aJ.slice(aM, aN)), aN < aK && s((aJ = aJ.slice(aN))), aN < aK && C(aJ))
                        }
                        aE.push(aL)
                    }
                }
                return am(aE)
            }

            function b(aE, aF) {
                var aH = aF.length > 0,
                    aI = aE.length > 0,
                    aG = function (aY, aP, aJ, aN, aO) {
                        var aT, aL, aV, aR = 0,
                            aS = "0",
                            aK = aY && [],
                            aU = [],
                            aX = d,
                            aM = aY || aI && aB.find.TAG("*", aO),
                            aW = (ap += aX == null ? 1 : Math.random() || 0.1),
                            aQ = aM.length;
                        if (aO) {
                            d = aP !== h && aP
                        }
                        for (; aS !== aQ && (aT = aM[aS]) != null; aS++) {
                            if (aI && aT) {
                                aL = 0;
                                while ((aV = aE[aL++])) {
                                    if (aV(aT, aP, aJ)) {
                                        aN.push(aT);
                                        break
                                    }
                                }
                                if (aO) {
                                    ap = aW
                                }
                            }
                            if (aH) {
                                if ((aT = !aV && aT)) {
                                    aR--
                                }
                                if (aY) {
                                    aK.push(aT)
                                }
                            }
                        }
                        aR += aS;
                        if (aH && aS !== aR) {
                            aL = 0;
                            while ((aV = aF[aL++])) {
                                aV(aK, aU, aP, aJ)
                            }
                            if (aY) {
                                if (aR > 0) {
                                    while (aS--) {
                                        if (!(aK[aS] || aU[aS])) {
                                            aU[aS] = at.call(aN)
                                        }
                                    }
                                }
                                aU = ab(aU)
                            }
                            O.apply(aN, aU);
                            if (aO && !aY && aU.length > 0 && (aR + aF.length) > 1) {
                                G.uniqueSort(aN)
                            }
                        }
                        if (aO) {
                            ap = aW;
                            d = aX
                        }
                        return aK
                    };
                return aH ? aC(aG) : aG
            }

            Y = G.compile = function (aH, aE) {
                var aJ, aF = [],
                    aG = [],
                    aI = g[aH + " "];
                if (!aI) {
                    if (!aE) {
                        aE = I(aH)
                    }
                    aJ = aE.length;
                    while (aJ--) {
                        aI = s(aE[aJ]);
                        if (aI[t]) {
                            aF.push(aI)
                        } else {
                            aG.push(aI)
                        }
                    }
                    aI = g(aH, b(aG, aF));
                    aI.selector = aH
                }
                return aI
            };
            v = G.select = function (aN, aE, aM, aJ) {
                var aL, aG, aO, aF, aI, aH = typeof aN === "function" && aN,
                    aK = !aJ && I((aN = aH.selector || aN));
                aM = aM || [];
                if (aK.length === 1) {
                    aG = aK[0] = aK[0].slice(0);
                    if (aG.length > 2 && (aO = aG[0]).type === "ID" && k.getById && aE.nodeType === 9 && A && aB.relative[aG[1].type]) {
                        aE = (aB.find.ID(aO.matches[0].replace(ar, K), aE) || [])[0];
                        if (!aE) {
                            return aM
                        } else {
                            if (aH) {
                                aE = aE.parentNode
                            }
                        }
                        aN = aN.slice(aG.shift().value.length)
                    }
                    aL = az.needsContext.test(aN) ? 0 : aG.length;
                    while (aL--) {
                        aO = aG[aL];
                        if (aB.relative[(aF = aO.type)]) {
                            break
                        }
                        if ((aI = aB.find[aF])) {
                            if ((aJ = aI(aO.matches[0].replace(ar, K), aA.test(aG[0].type) && P(aE.parentNode) || aE))) {
                                aG.splice(aL, 1);
                                aN = aJ.length && C(aG);
                                if (!aN) {
                                    O.apply(aM, aJ);
                                    return aM
                                }
                                break
                            }
                        }
                    }
                }
                (aH || Y(aN, aK))(aJ, aE, !A, aM, aA.test(aN) && P(aE.parentNode) || aE);
                return aM
            };
            k.sortStable = t.split("").sort(al).join("") === t;
            k.detectDuplicates = !!V;
            ac();
            k.sortDetached = av(function (aE) {
                return aE.compareDocumentPosition(h.createElement("div")) & 1
            });
            if (!av(function (aE) {
                aE.innerHTML = "<a href='#'></a>";
                return aE.firstChild.getAttribute("href") === "#"
            })) {
                p("type|href|height|width", function (aF, aG, aE) {
                    if (!aE) {
                        return aF.getAttribute(aG, aG.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!k.attributes || !av(function (aE) {
                aE.innerHTML = "<input/>";
                aE.firstChild.setAttribute("value", "");
                return aE.firstChild.getAttribute("value") === ""
            })) {
                p("value", function (aF, aG, aE) {
                    if (!aE && aF.nodeName.toLowerCase() === "input") {
                        return aF.defaultValue
                    }
                })
            }
            if (!av(function (aE) {
                return aE.getAttribute("disabled") == null
            })) {
                p(M, function (aG, aH, aE) {
                    var aF;
                    if (!aE) {
                        return aG[aH] === true ? aH.toLowerCase() : (aF = aG.getAttributeNode(aH)) && aF.specified ? aF.value : null
                    }
                })
            }
            return G
        })(cY);
    b8.find = dX;
    b8.expr = dX.selectors;
    b8.expr[":"] = b8.expr.pseudos;
    b8.unique = dX.uniqueSort;
    b8.text = dX.getText;
    b8.isXMLDoc = dX.isXML;
    b8.contains = dX.contains;
    var d6 = b8.expr.match.needsContext;
    var dy = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
    var c1 = /^.[^:#\[\.,]*$/;

    function di(c, b, a) {
        if (b8.isFunction(b)) {
            return b8.grep(c, function (d, f) {
                return !!b.call(d, f, d) !== a
            })
        }
        if (b.nodeType) {
            return b8.grep(c, function (d) {
                return (d === b) !== a
            })
        }
        if (typeof b === "string") {
            if (c1.test(b)) {
                return b8.filter(b, c, a)
            }
            b = b8.filter(b, c)
        }
        return b8.grep(c, function (d) {
            return (b8.inArray(d, b) >= 0) !== a
        })
    }

    b8.filter = function (c, b, d) {
        var a = b[0];
        if (d) {
            c = ":not(" + c + ")"
        }
        return b.length === 1 && a.nodeType === 1 ? b8.find.matchesSelector(a, c) ? [a] : [] : b8.find.matches(c, b8.grep(b, function (f) {
            return f.nodeType === 1
        }))
    };
    b8.fn.extend({
        find: function (f) {
            var a, c = [],
                d = this,
                b = d.length;
            if (typeof f !== "string") {
                return this.pushStack(b8(f).filter(function () {
                    for (a = 0; a < b; a++) {
                        if (b8.contains(d[a], this)) {
                            return true
                        }
                    }
                }))
            }
            for (a = 0; a < b; a++) {
                b8.find(f, d[a], c)
            }
            c = this.pushStack(b > 1 ? b8.unique(c) : c);
            c.selector = this.selector ? this.selector + " " + f : f;
            return c
        },
        filter: function (a) {
            return this.pushStack(di(this, a || [], false))
        },
        not: function (a) {
            return this.pushStack(di(this, a || [], true))
        },
        is: function (a) {
            return !!di(this, typeof a === "string" && d6.test(a) ? b8(a) : a || [], false).length
        }
    });
    var ci, eA = cY.document,
        dS = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        cz = b8.fn.init = function (b, d) {
            var a, c;
            if (!b) {
                return this
            }
            if (typeof b === "string") {
                if (b.charAt(0) === "<" && b.charAt(b.length - 1) === ">" && b.length >= 3) {
                    a = [null, b, null]
                } else {
                    a = dS.exec(b)
                }
                if (a && (a[1] || !d)) {
                    if (a[1]) {
                        d = d instanceof b8 ? d[0] : d;
                        b8.merge(this, b8.parseHTML(a[1], d && d.nodeType ? d.ownerDocument || d : eA, true));
                        if (dy.test(a[1]) && b8.isPlainObject(d)) {
                            for (a in d) {
                                if (b8.isFunction(this[a])) {
                                    this[a](d[a])
                                } else {
                                    this.attr(a, d[a])
                                }
                            }
                        }
                        return this
                    } else {
                        c = eA.getElementById(a[2]);
                        if (c && c.parentNode) {
                            if (c.id !== a[2]) {
                                return ci.find(b)
                            }
                            this.length = 1;
                            this[0] = c
                        }
                        this.context = eA;
                        this.selector = b;
                        return this
                    }
                } else {
                    if (!d || d.jquery) {
                        return (d || ci).find(b)
                    } else {
                        return this.constructor(d).find(b)
                    }
                }
            } else {
                if (b.nodeType) {
                    this.context = this[0] = b;
                    this.length = 1;
                    return this
                } else {
                    if (b8.isFunction(b)) {
                        return typeof ci.ready !== "undefined" ? ci.ready(b) : b(b8)
                    }
                }
            }
            if (b.selector !== undefined) {
                this.selector = b.selector;
                this.context = b.context
            }
            return b8.makeArray(b, this)
        };
    cz.prototype = b8.fn;
    ci = b8(eA);
    var er = /^(?:parents|prev(?:Until|All))/,
        c4 = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    b8.extend({
        dir: function (f, a, c) {
            var b = [],
                d = f[a];
            while (d && d.nodeType !== 9 && (c === undefined || d.nodeType !== 1 || !b8(d).is(c))) {
                if (d.nodeType === 1) {
                    b.push(d)
                }
                d = d[a]
            }
            return b
        },
        sibling: function (c, a) {
            var b = [];
            for (; c; c = c.nextSibling) {
                if (c.nodeType === 1 && c !== a) {
                    b.push(c)
                }
            }
            return b
        }
    });
    b8.fn.extend({
        has: function (b) {
            var c, d = b8(b, this),
                a = d.length;
            return this.filter(function () {
                for (c = 0; c < a; c++) {
                    if (b8.contains(this, d[c])) {
                        return true
                    }
                }
            })
        },
        closest: function (f, c) {
            var b, g = 0,
                h = this.length,
                d = [],
                a = d6.test(f) || typeof f !== "string" ? b8(f, c || this.context) : 0;
            for (; g < h; g++) {
                for (b = this[g]; b && b !== c; b = b.parentNode) {
                    if (b.nodeType < 11 && (a ? a.index(b) > -1 : b.nodeType === 1 && b8.find.matchesSelector(b, f))) {
                        d.push(b);
                        break
                    }
                }
            }
            return this.pushStack(d.length > 1 ? b8.unique(d) : d)
        },
        index: function (a) {
            if (!a) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
            }
            if (typeof a === "string") {
                return b8.inArray(this[0], b8(a))
            }
            return b8.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (b, a) {
            return this.pushStack(b8.unique(b8.merge(this.get(), b8(b, a))))
        },
        addBack: function (a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function db(a, b) {
        do {
            a = a[b]
        } while (a && a.nodeType !== 1);
        return a
    }

    b8.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return b8.dir(a, "parentNode")
        },
        parentsUntil: function (c, a, b) {
            return b8.dir(c, "parentNode", b)
        },
        next: function (a) {
            return db(a, "nextSibling")
        },
        prev: function (a) {
            return db(a, "previousSibling")
        },
        nextAll: function (a) {
            return b8.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return b8.dir(a, "previousSibling")
        },
        nextUntil: function (c, a, b) {
            return b8.dir(c, "nextSibling", b)
        },
        prevUntil: function (c, a, b) {
            return b8.dir(c, "previousSibling", b)
        },
        siblings: function (a) {
            return b8.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return b8.sibling(a.firstChild)
        },
        contents: function (a) {
            return b8.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : b8.merge([], a.childNodes)
        }
    }, function (b, a) {
        b8.fn[b] = function (c, f) {
            var d = b8.map(this, a, c);
            if (b.slice(-5) !== "Until") {
                f = c
            }
            if (f && typeof f === "string") {
                d = b8.filter(f, d)
            }
            if (this.length > 1) {
                if (!c4[b]) {
                    d = b8.unique(d)
                }
                if (er.test(b)) {
                    d = d.reverse()
                }
            }
            return this.pushStack(d)
        }
    });
    var cP = (/\S+/g);
    var d8 = {};

    function co(a) {
        var b = d8[a] = {};
        b8.each(a.match(cP) || [], function (c, d) {
            b[d] = true
        });
        return b
    }

    b8.Callbacks = function (a) {
        a = typeof a === "string" ? (d8[a] || co(a)) : b8.extend({}, a);
        var h, j, m, g, l, k, d = [],
            c = !a.once && [],
            f = function (n) {
                j = a.memory && n;
                m = true;
                l = k || 0;
                k = 0;
                g = d.length;
                h = true;
                for (; d && l < g; l++) {
                    if (d[l].apply(n[0], n[1]) === false && a.stopOnFalse) {
                        j = false;
                        break
                    }
                }
                h = false;
                if (d) {
                    if (c) {
                        if (c.length) {
                            f(c.shift())
                        }
                    } else {
                        if (j) {
                            d = []
                        } else {
                            b.disable()
                        }
                    }
                }
            },
            b = {
                add: function () {
                    if (d) {
                        var n = d.length;
                        (function o(p) {
                            b8.each(p, function (r, s) {
                                var q = b8.type(s);
                                if (q === "function") {
                                    if (!a.unique || !b.has(s)) {
                                        d.push(s)
                                    }
                                } else {
                                    if (s && s.length && q !== "string") {
                                        o(s)
                                    }
                                }
                            })
                        })(arguments);
                        if (h) {
                            g = d.length
                        } else {
                            if (j) {
                                k = n;
                                f(j)
                            }
                        }
                    }
                    return this
                },
                remove: function () {
                    if (d) {
                        b8.each(arguments, function (n, p) {
                            var o;
                            while ((o = b8.inArray(p, d, o)) > -1) {
                                d.splice(o, 1);
                                if (h) {
                                    if (o <= g) {
                                        g--
                                    }
                                    if (o <= l) {
                                        l--
                                    }
                                }
                            }
                        })
                    }
                    return this
                },
                has: function (n) {
                    return n ? b8.inArray(n, d) > -1 : !!(d && d.length)
                },
                empty: function () {
                    d = [];
                    g = 0;
                    return this
                },
                disable: function () {
                    d = c = j = undefined;
                    return this
                },
                disabled: function () {
                    return !d
                },
                lock: function () {
                    c = undefined;
                    if (!j) {
                        b.disable()
                    }
                    return this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (n, o) {
                    if (d && (!m || c)) {
                        o = o || [];
                        o = [n, o.slice ? o.slice() : o];
                        if (h) {
                            c.push(o)
                        } else {
                            f(o)
                        }
                    }
                    return this
                },
                fire: function () {
                    b.fireWith(this, arguments);
                    return this
                },
                fired: function () {
                    return !!m
                }
            };
        return b
    };
    b8.extend({
        Deferred: function (f) {
            var a = [
                    ["resolve", "done", b8.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", b8.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", b8.Callbacks("memory")]
                ],
                d = "pending",
                c = {
                    state: function () {
                        return d
                    },
                    always: function () {
                        b.done(arguments).fail(arguments);
                        return this
                    },
                    then: function () {
                        var g = arguments;
                        return b8.Deferred(function (h) {
                            b8.each(a, function (j, k) {
                                var l = b8.isFunction(g[j]) && g[j];
                                b[k[1]](function () {
                                    var m = l && l.apply(this, arguments);
                                    if (m && b8.isFunction(m.promise)) {
                                        m.promise().done(h.resolve).fail(h.reject).progress(h.notify)
                                    } else {
                                        h[k[0] + "With"](this === c ? h.promise() : this, l ? [m] : arguments)
                                    }
                                })
                            });
                            g = null
                        }).promise()
                    },
                    promise: function (g) {
                        return g != null ? b8.extend(g, c) : c
                    }
                },
                b = {};
            c.pipe = c.then;
            b8.each(a, function (j, k) {
                var g = k[2],
                    h = k[3];
                c[k[1]] = g.add;
                if (h) {
                    g.add(function () {
                        d = h
                    }, a[j ^ 1][2].disable, a[2][2].lock)
                }
                b[k[0]] = function () {
                    b[k[0] + "With"](this === b ? c : this, arguments);
                    return this
                };
                b[k[0] + "With"] = g.fireWith
            });
            c.promise(b);
            if (f) {
                f.call(b, b)
            }
            return b
        },
        when: function (f) {
            var h = 0,
                k = dt.call(arguments),
                l = k.length,
                j = l !== 1 || (f && b8.isFunction(f.promise)) ? l : 0,
                a = j === 1 ? f : b8.Deferred(),
                g = function (n, m, o) {
                    return function (p) {
                        m[n] = this;
                        o[n] = arguments.length > 1 ? dt.call(arguments) : p;
                        if (o === b) {
                            a.notifyWith(m, o)
                        } else {
                            if (!(--j)) {
                                a.resolveWith(m, o)
                            }
                        }
                    }
                },
                b, d, c;
            if (l > 1) {
                b = new Array(l);
                d = new Array(l);
                c = new Array(l);
                for (; h < l; h++) {
                    if (k[h] && b8.isFunction(k[h].promise)) {
                        k[h].promise().done(g(h, c, k)).fail(a.reject).progress(g(h, d, b))
                    } else {
                        --j
                    }
                }
            }
            if (!j) {
                a.resolveWith(c, k)
            }
            return a.promise()
        }
    });
    var cp;
    b8.fn.ready = function (a) {
        b8.ready.promise().done(a);
        return this
    };
    b8.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function (a) {
            if (a) {
                b8.readyWait++
            } else {
                b8.ready(true)
            }
        },
        ready: function (a) {
            if (a === true ? --b8.readyWait : b8.isReady) {
                return
            }
            if (!eA.body) {
                return setTimeout(b8.ready)
            }
            b8.isReady = true;
            if (a !== true && --b8.readyWait > 0) {
                return
            }
            cp.resolveWith(eA, [b8]);
            if (b8.fn.triggerHandler) {
                b8(eA).triggerHandler("ready");
                b8(eA).off("ready")
            }
        }
    });

    function dY() {
        if (eA.addEventListener) {
            eA.removeEventListener("DOMContentLoaded", eH, false);
            cY.removeEventListener("load", eH, false)
        } else {
            eA.detachEvent("onreadystatechange", eH);
            cY.detachEvent("onload", eH)
        }
    }

    function eH() {
        if (eA.addEventListener || event.type === "load" || eA.readyState === "complete") {
            dY();
            b8.ready()
        }
    }

    b8.ready.promise = function (b) {
        if (!cp) {
            cp = b8.Deferred();
            if (eA.readyState === "complete") {
                setTimeout(b8.ready)
            } else {
                if (eA.addEventListener) {
                    eA.addEventListener("DOMContentLoaded", eH, false);
                    cY.addEventListener("load", eH, false)
                } else {
                    eA.attachEvent("onreadystatechange", eH);
                    cY.attachEvent("onload", eH);
                    var c = false;
                    try {
                        c = cY.frameElement == null && eA.documentElement
                    } catch (d) {
                    }
                    if (c && c.doScroll) {
                        (function a() {
                            if (!b8.isReady) {
                                try {
                                    c.doScroll("left")
                                } catch (f) {
                                    return setTimeout(a, 50)
                                }
                                dY();
                                b8.ready()
                            }
                        })()
                    }
                }
            }
        }
        return cp.promise(b)
    };
    var cn = typeof undefined;
    var dG;
    for (dG in b8(dv)) {
        break
    }
    dv.ownLast = dG !== "0";
    dv.inlineBlockNeedsLayout = false;
    b8(function () {
        var d, c, b, a;
        b = eA.getElementsByTagName("body")[0];
        if (!b || !b.style) {
            return
        }
        c = eA.createElement("div");
        a = eA.createElement("div");
        a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        b.appendChild(a).appendChild(c);
        if (typeof c.style.zoom !== cn) {
            c.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            dv.inlineBlockNeedsLayout = d = c.offsetWidth === 3;
            if (d) {
                b.style.zoom = 1
            }
        }
        b.removeChild(a)
    });
    (function () {
        var b = eA.createElement("div");
        if (dv.deleteExpando == null) {
            dv.deleteExpando = true;
            try {
                delete b.test
            } catch (a) {
                dv.deleteExpando = false
            }
        }
        b = null
    })();
    b8.acceptData = function (c) {
        var a = b8.noData[(c.nodeName + " ").toLowerCase()],
            b = +c.nodeType || 1;
        return b !== 1 && b !== 9 ? false : !a || a !== true && c.getAttribute("classid") === a
    };
    var ex = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        da = /([A-Z])/g;

    function a7(d, f, c) {
        if (c === undefined && d.nodeType === 1) {
            var a = "data-" + f.replace(da, "-$1").toLowerCase();
            c = d.getAttribute(a);
            if (typeof c === "string") {
                try {
                    c = c === "true" ? true : c === "false" ? false : c === "null" ? null : +c + "" === c ? +c : ex.test(c) ? b8.parseJSON(c) : c
                } catch (b) {
                }
                b8.data(d, f, c)
            } else {
                c = undefined
            }
        }
        return c
    }

    function cO(a) {
        var b;
        for (b in a) {
            if (b === "data" && b8.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return false
            }
        }
        return true
    }

    function eB(l, k, f, g) {
        if (!b8.acceptData(l)) {
            return
        }
        var c, j, b = b8.expando,
            a = l.nodeType,
            h = a ? b8.cache : l,
            d = a ? l[b] : l[b] && b;
        if ((!d || !h[d] || (!g && !h[d].data)) && f === undefined && typeof k === "string") {
            return
        }
        if (!d) {
            if (a) {
                d = l[b] = c6.pop() || b8.guid++
            } else {
                d = b
            }
        }
        if (!h[d]) {
            h[d] = a ? {} : {
                toJSON: b8.noop
            }
        }
        if (typeof k === "object" || typeof k === "function") {
            if (g) {
                h[d] = b8.extend(h[d], k)
            } else {
                h[d].data = b8.extend(h[d].data, k)
            }
        }
        j = h[d];
        if (!g) {
            if (!j.data) {
                j.data = {}
            }
            j = j.data
        }
        if (f !== undefined) {
            j[b8.camelCase(k)] = f
        }
        if (typeof k === "string") {
            c = j[k];
            if (c == null) {
                c = j[b8.camelCase(k)]
            }
        } else {
            c = j
        }
        return c
    }

    function et(g, h, f) {
        if (!b8.acceptData(g)) {
            return
        }
        var a, b, d = g.nodeType,
            j = d ? b8.cache : g,
            c = d ? g[b8.expando] : b8.expando;
        if (!j[c]) {
            return
        }
        if (h) {
            a = f ? j[c] : j[c].data;
            if (a) {
                if (!b8.isArray(h)) {
                    if (h in a) {
                        h = [h]
                    } else {
                        h = b8.camelCase(h);
                        if (h in a) {
                            h = [h]
                        } else {
                            h = h.split(" ")
                        }
                    }
                } else {
                    h = h.concat(b8.map(h, b8.camelCase))
                }
                b = h.length;
                while (b--) {
                    delete a[h[b]]
                }
                if (f ? !cO(a) : !b8.isEmptyObject(a)) {
                    return
                }
            }
        }
        if (!f) {
            delete j[c].data;
            if (!cO(j[c])) {
                return
            }
        }
        if (d) {
            b8.cleanData([g], true)
        } else {
            if (dv.deleteExpando || j != j.window) {
                delete j[c]
            } else {
                j[c] = null
            }
        }
    }

    b8.extend({
        cache: {},
        noData: {
            "applet ": true,
            "embed ": true,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            a = a.nodeType ? b8.cache[a[b8.expando]] : a[b8.expando];
            return !!a && !cO(a)
        },
        data: function (a, b, c) {
            return eB(a, b, c)
        },
        removeData: function (a, b) {
            return et(a, b)
        },
        _data: function (a, b, c) {
            return eB(a, b, c, true)
        },
        _removeData: function (a, b) {
            return et(a, b, true)
        }
    });
    b8.fn.extend({
        data: function (f, a) {
            var g, h, b, c = this[0],
                d = c && c.attributes;
            if (f === undefined) {
                if (this.length) {
                    b = b8.data(c);
                    if (c.nodeType === 1 && !b8._data(c, "parsedAttrs")) {
                        g = d.length;
                        while (g--) {
                            if (d[g]) {
                                h = d[g].name;
                                if (h.indexOf("data-") === 0) {
                                    h = b8.camelCase(h.slice(5));
                                    a7(c, h, b[h])
                                }
                            }
                        }
                        b8._data(c, "parsedAttrs", true)
                    }
                }
                return b
            }
            if (typeof f === "object") {
                return this.each(function () {
                    b8.data(this, f)
                })
            }
            return arguments.length > 1 ? this.each(function () {
                b8.data(this, f, a)
            }) : c ? a7(c, f, b8.data(c, f)) : undefined
        },
        removeData: function (a) {
            return this.each(function () {
                b8.removeData(this, a)
            })
        }
    });
    b8.extend({
        queue: function (d, a, c) {
            var b;
            if (d) {
                a = (a || "fx") + "queue";
                b = b8._data(d, a);
                if (c) {
                    if (!b || b8.isArray(c)) {
                        b = b8._data(d, a, b8.makeArray(c))
                    } else {
                        b.push(c)
                    }
                }
                return b || []
            }
        },
        dequeue: function (f, c) {
            c = c || "fx";
            var a = b8.queue(f, c),
                b = a.length,
                g = a.shift(),
                d = b8._queueHooks(f, c),
                h = function () {
                    b8.dequeue(f, c)
                };
            if (g === "inprogress") {
                g = a.shift();
                b--
            }
            if (g) {
                if (c === "fx") {
                    a.unshift("inprogress")
                }
                delete d.stop;
                g.call(f, h, d)
            }
            if (!b && d) {
                d.empty.fire()
            }
        },
        _queueHooks: function (c, a) {
            var b = a + "queueHooks";
            return b8._data(c, b) || b8._data(c, b, {
                empty: b8.Callbacks("once memory").add(function () {
                    b8._removeData(c, a + "queue");
                    b8._removeData(c, b)
                })
            })
        }
    });
    b8.fn.extend({
        queue: function (b, a) {
            var c = 2;
            if (typeof b !== "string") {
                a = b;
                b = "fx";
                c--
            }
            if (arguments.length < c) {
                return b8.queue(this[0], b)
            }
            return a === undefined ? this : this.each(function () {
                var d = b8.queue(this, b, a);
                b8._queueHooks(this, b);
                if (b === "fx" && d[0] !== "inprogress") {
                    b8.dequeue(this, b)
                }
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                b8.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (h, g) {
            var j, a = 1,
                c = b8.Deferred(),
                d = this,
                b = this.length,
                f = function () {
                    if (!(--a)) {
                        c.resolveWith(d, [d])
                    }
                };
            if (typeof h !== "string") {
                g = h;
                h = undefined
            }
            h = h || "fx";
            while (b--) {
                j = b8._data(d[b], h + "queueHooks");
                if (j && j.empty) {
                    a++;
                    j.empty.add(f)
                }
            }
            f();
            return c.promise(g)
        }
    });
    var e = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
    var c3 = ["Top", "Right", "Bottom", "Left"];
    var c7 = function (a, b) {
        a = b || a;
        return b8.css(a, "display") === "none" || !b8.contains(a.ownerDocument, a)
    };
    var cK = b8.access = function (l, k, c, j, g, a, b) {
        var h = 0,
            f = l.length,
            d = c == null;
        if (b8.type(c) === "object") {
            g = true;
            for (h in c) {
                b8.access(l, k, h, c[h], true, a, b)
            }
        } else {
            if (j !== undefined) {
                g = true;
                if (!b8.isFunction(j)) {
                    b = true
                }
                if (d) {
                    if (b) {
                        k.call(l, j);
                        k = null
                    } else {
                        d = k;
                        k = function (o, m, n) {
                            return d.call(b8(o), n)
                        }
                    }
                }
                if (k) {
                    for (; h < f; h++) {
                        k(l[h], c, b ? j : j.call(l[h], h, k(l[h], c)))
                    }
                }
            }
        }
        return g ? l : d ? k.call(l) : f ? k(l[0], c) : a
    };
    var eD = (/^(?:checkbox|radio)$/i);
    (function () {
        var a = eA.createElement("input"),
            b = eA.createElement("div"),
            d = eA.createDocumentFragment();
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        dv.leadingWhitespace = b.firstChild.nodeType === 3;
        dv.tbody = !b.getElementsByTagName("tbody").length;
        dv.htmlSerialize = !!b.getElementsByTagName("link").length;
        dv.html5Clone = eA.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        a.type = "checkbox";
        a.checked = true;
        d.appendChild(a);
        dv.appendChecked = a.checked;
        b.innerHTML = "<textarea>x</textarea>";
        dv.noCloneChecked = !!b.cloneNode(true).lastChild.defaultValue;
        d.appendChild(b);
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        dv.checkClone = b.cloneNode(true).cloneNode(true).lastChild.checked;
        dv.noCloneEvent = true;
        if (b.attachEvent) {
            b.attachEvent("onclick", function () {
                dv.noCloneEvent = false
            });
            b.cloneNode(true).click()
        }
        if (dv.deleteExpando == null) {
            dv.deleteExpando = true;
            try {
                delete b.test
            } catch (c) {
                dv.deleteExpando = false
            }
        }
    })();
    (function () {
        var c, a, b = eA.createElement("div");
        for (c in {
            submit: true,
            change: true,
            focusin: true
        }) {
            a = "on" + c;
            if (!(dv[c + "Bubbles"] = a in cY)) {
                b.setAttribute(a, "t");
                dv[c + "Bubbles"] = b.attributes[a].expando === false
            }
        }
        b = null
    })();
    var cJ = /^(?:input|select|textarea)$/i,
        c0 = /^key/,
        cD = /^(?:mouse|pointer|contextmenu)|click/,
        cd = /^(?:focusinfocus|focusoutblur)$/,
        ck = /^([^.]*)(?:\.(.+)|)$/;

    function dq() {
        return true
    }

    function cv() {
        return false
    }

    function ez() {
        try {
            return eA.activeElement
        } catch (a) {
        }
    }

    b8.event = {
        global: {},
        add: function (n, l, k, b, m) {
            var r, d, c, a, h, q, f, o, g, j, s, p = b8._data(n);
            if (!p) {
                return
            }
            if (k.handler) {
                a = k;
                k = a.handler;
                m = a.selector
            }
            if (!k.guid) {
                k.guid = b8.guid++
            }
            if (!(d = p.events)) {
                d = p.events = {}
            }
            if (!(q = p.handle)) {
                q = p.handle = function (t) {
                    return typeof b8 !== cn && (!t || b8.event.triggered !== t.type) ? b8.event.dispatch.apply(q.elem, arguments) : undefined
                };
                q.elem = n
            }
            l = (l || "").match(cP) || [""];
            c = l.length;
            while (c--) {
                r = ck.exec(l[c]) || [];
                g = s = r[1];
                j = (r[2] || "").split(".").sort();
                if (!g) {
                    continue
                }
                h = b8.event.special[g] || {};
                g = (m ? h.delegateType : h.bindType) || g;
                h = b8.event.special[g] || {};
                f = b8.extend({
                    type: g,
                    origType: s,
                    data: b,
                    handler: k,
                    guid: k.guid,
                    selector: m,
                    needsContext: m && b8.expr.match.needsContext.test(m),
                    namespace: j.join(".")
                }, a);
                if (!(o = d[g])) {
                    o = d[g] = [];
                    o.delegateCount = 0;
                    if (!h.setup || h.setup.call(n, b, j, q) === false) {
                        if (n.addEventListener) {
                            n.addEventListener(g, q, false)
                        } else {
                            if (n.attachEvent) {
                                n.attachEvent("on" + g, q)
                            }
                        }
                    }
                }
                if (h.add) {
                    h.add.call(n, f);
                    if (!f.handler.guid) {
                        f.handler.guid = k.guid
                    }
                }
                if (m) {
                    o.splice(o.delegateCount++, 0, f)
                } else {
                    o.push(f)
                }
                b8.event.global[g] = true
            }
            n = null
        },
        remove: function (o, l, f, n, q) {
            var b, k, r, m, c, d, h, a, g, j, s, p = b8.hasData(o) && b8._data(o);
            if (!p || !(d = p.events)) {
                return
            }
            l = (l || "").match(cP) || [""];
            c = l.length;
            while (c--) {
                r = ck.exec(l[c]) || [];
                g = s = r[1];
                j = (r[2] || "").split(".").sort();
                if (!g) {
                    for (g in d) {
                        b8.event.remove(o, g + l[c], f, n, true)
                    }
                    continue
                }
                h = b8.event.special[g] || {};
                g = (n ? h.delegateType : h.bindType) || g;
                a = d[g] || [];
                r = r[2] && new RegExp("(^|\\.)" + j.join("\\.(?:.*\\.|)") + "(\\.|$)");
                m = b = a.length;
                while (b--) {
                    k = a[b];
                    if ((q || s === k.origType) && (!f || f.guid === k.guid) && (!r || r.test(k.namespace)) && (!n || n === k.selector || n === "**" && k.selector)) {
                        a.splice(b, 1);
                        if (k.selector) {
                            a.delegateCount--
                        }
                        if (h.remove) {
                            h.remove.call(o, k)
                        }
                    }
                }
                if (m && !a.length) {
                    if (!h.teardown || h.teardown.call(o, j, p.handle) === false) {
                        b8.removeEvent(o, g, p.handle)
                    }
                    delete d[g]
                }
            }
            if (b8.isEmptyObject(d)) {
                delete p.handle;
                b8._removeData(o, "events")
            }
        },
        trigger: function (n, g, p, o) {
            var f, l, a, q, c, h, j, m = [p || eA],
                b = ch.call(n, "type") ? n.type : n,
                k = ch.call(n, "namespace") ? n.namespace.split(".") : [];
            a = h = p = p || eA;
            if (p.nodeType === 3 || p.nodeType === 8) {
                return
            }
            if (cd.test(b + b8.event.triggered)) {
                return
            }
            if (b.indexOf(".") >= 0) {
                k = b.split(".");
                b = k.shift();
                k.sort()
            }
            l = b.indexOf(":") < 0 && "on" + b;
            n = n[b8.expando] ? n : new b8.Event(b, typeof n === "object" && n);
            n.isTrigger = o ? 2 : 3;
            n.namespace = k.join(".");
            n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            n.result = undefined;
            if (!n.target) {
                n.target = p
            }
            g = g == null ? [n] : b8.makeArray(g, [n]);
            c = b8.event.special[b] || {};
            if (!o && c.trigger && c.trigger.apply(p, g) === false) {
                return
            }
            if (!o && !c.noBubble && !b8.isWindow(p)) {
                q = c.delegateType || b;
                if (!cd.test(q + b)) {
                    a = a.parentNode
                }
                for (; a; a = a.parentNode) {
                    m.push(a);
                    h = a
                }
                if (h === (p.ownerDocument || eA)) {
                    m.push(h.defaultView || h.parentWindow || cY)
                }
            }
            j = 0;
            while ((a = m[j++]) && !n.isPropagationStopped()) {
                n.type = j > 1 ? q : c.bindType || b;
                f = (b8._data(a, "events") || {})[n.type] && b8._data(a, "handle");
                if (f) {
                    f.apply(a, g)
                }
                f = l && a[l];
                if (f && f.apply && b8.acceptData(a)) {
                    n.result = f.apply(a, g);
                    if (n.result === false) {
                        n.preventDefault()
                    }
                }
            }
            n.type = b;
            if (!o && !n.isDefaultPrevented()) {
                if ((!c._default || c._default.apply(m.pop(), g) === false) && b8.acceptData(p)) {
                    if (l && p[b] && !b8.isWindow(p)) {
                        h = p[l];
                        if (h) {
                            p[l] = null
                        }
                        b8.event.triggered = b;
                        try {
                            p[b]()
                        } catch (d) {
                        }
                        b8.event.triggered = undefined;
                        if (h) {
                            p[l] = h
                        }
                    }
                }
            }
            return n.result
        },
        dispatch: function (l) {
            l = b8.event.fix(l);
            var f, k, a, j, g, b = [],
                c = dt.call(arguments),
                h = (b8._data(this, "events") || {})[l.type] || [],
                d = b8.event.special[l.type] || {};
            c[0] = l;
            l.delegateTarget = this;
            if (d.preDispatch && d.preDispatch.call(this, l) === false) {
                return
            }
            b = b8.event.handlers.call(this, l, h);
            f = 0;
            while ((j = b[f++]) && !l.isPropagationStopped()) {
                l.currentTarget = j.elem;
                g = 0;
                while ((a = j.handlers[g++]) && !l.isImmediatePropagationStopped()) {
                    if (!l.namespace_re || l.namespace_re.test(a.namespace)) {
                        l.handleObj = a;
                        l.data = a.data;
                        k = ((b8.event.special[a.origType] || {}).handle || a.handler).apply(j.elem, c);
                        if (k !== undefined) {
                            if ((l.result = k) === false) {
                                l.preventDefault();
                                l.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (d.postDispatch) {
                d.postDispatch.call(this, l)
            }
            return l.result
        },
        handlers: function (k, g) {
            var h, b, j, d, c = [],
                f = g.delegateCount,
                a = k.target;
            if (f && a.nodeType && (!k.button || k.type !== "click")) {
                for (; a != this; a = a.parentNode || this) {
                    if (a.nodeType === 1 && (a.disabled !== true || k.type !== "click")) {
                        j = [];
                        for (d = 0; d < f; d++) {
                            b = g[d];
                            h = b.selector + " ";
                            if (j[h] === undefined) {
                                j[h] = b.needsContext ? b8(h, this).index(a) >= 0 : b8.find(h, this, null, [a]).length
                            }
                            if (j[h]) {
                                j.push(b)
                            }
                        }
                        if (j.length) {
                            c.push({
                                elem: a,
                                handlers: j
                            })
                        }
                    }
                }
            }
            if (f < g.length) {
                c.push({
                    elem: this,
                    handlers: g.slice(f)
                })
            }
            return c
        },
        fix: function (f) {
            if (f[b8.expando]) {
                return f
            }
            var h, a, b, g = f.type,
                d = f,
                c = this.fixHooks[g];
            if (!c) {
                this.fixHooks[g] = c = cD.test(g) ? this.mouseHooks : c0.test(g) ? this.keyHooks : {}
            }
            b = c.props ? this.props.concat(c.props) : this.props;
            f = new b8.Event(d);
            h = b.length;
            while (h--) {
                a = b[h];
                f[a] = d[a]
            }
            if (!f.target) {
                f.target = d.srcElement || eA
            }
            if (f.target.nodeType === 3) {
                f.target = f.target.parentNode
            }
            f.metaKey = !!f.metaKey;
            return c.filter ? c.filter(f, d) : f
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                if (a.which == null) {
                    a.which = b.charCode != null ? b.charCode : b.keyCode
                }
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (g, h) {
                var f, d, c, a = h.button,
                    b = h.fromElement;
                if (g.pageX == null && h.clientX != null) {
                    d = g.target.ownerDocument || eA;
                    c = d.documentElement;
                    f = d.body;
                    g.pageX = h.clientX + (c && c.scrollLeft || f && f.scrollLeft || 0) - (c && c.clientLeft || f && f.clientLeft || 0);
                    g.pageY = h.clientY + (c && c.scrollTop || f && f.scrollTop || 0) - (c && c.clientTop || f && f.clientTop || 0)
                }
                if (!g.relatedTarget && b) {
                    g.relatedTarget = b === g.target ? h.toElement : b
                }
                if (!g.which && a !== undefined) {
                    g.which = (a & 1 ? 1 : (a & 2 ? 3 : (a & 4 ? 2 : 0)))
                }
                return g
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function () {
                    if (this !== ez() && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (a) {
                        }
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === ez() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (b8.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                },
                _default: function (a) {
                    return b8.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    if (a.result !== undefined && a.originalEvent) {
                        a.originalEvent.returnValue = a.result
                    }
                }
            }
        },
        simulate: function (f, c, d, a) {
            var b = b8.extend(new b8.Event(), d, {
                type: f,
                isSimulated: true,
                originalEvent: {}
            });
            if (a) {
                b8.event.trigger(b, null, c)
            } else {
                b8.event.dispatch.call(c, b)
            }
            if (b.isDefaultPrevented()) {
                d.preventDefault()
            }
        }
    };
    b8.removeEvent = eA.removeEventListener ? function (a, b, c) {
        if (a.removeEventListener) {
            a.removeEventListener(b, c, false)
        }
    } : function (d, a, c) {
        var b = "on" + a;
        if (d.detachEvent) {
            if (typeof d[b] === cn) {
                d[b] = null
            }
            d.detachEvent(b, c)
        }
    };
    b8.Event = function (a, b) {
        if (!(this instanceof b8.Event)) {
            return new b8.Event(a, b)
        }
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type;
            this.isDefaultPrevented = a.defaultPrevented || a.defaultPrevented === undefined && a.returnValue === false ? dq : cv
        } else {
            this.type = a
        }
        if (b) {
            b8.extend(this, b)
        }
        this.timeStamp = a && a.timeStamp || b8.now();
        this[b8.expando] = true
    };
    b8.Event.prototype = {
        isDefaultPrevented: cv,
        isPropagationStopped: cv,
        isImmediatePropagationStopped: cv,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = dq;
            if (!a) {
                return
            }
            if (a.preventDefault) {
                a.preventDefault()
            } else {
                a.returnValue = false
            }
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = dq;
            if (!a) {
                return
            }
            if (a.stopPropagation) {
                a.stopPropagation()
            }
            a.cancelBubble = true
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = dq;
            if (a && a.stopImmediatePropagation) {
                a.stopImmediatePropagation()
            }
            this.stopPropagation()
        }
    };
    b8.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        b8.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (f) {
                var h, c = this,
                    d = f.relatedTarget,
                    g = f.handleObj;
                if (!d || (d !== c && !b8.contains(c, d))) {
                    f.type = g.origType;
                    h = g.handler.apply(this, arguments);
                    f.type = b
                }
                return h
            }
        }
    });
    if (!dv.submitBubbles) {
        b8.event.special.submit = {
            setup: function () {
                if (b8.nodeName(this, "form")) {
                    return false
                }
                b8.event.add(this, "click._submit keypress._submit", function (b) {
                    var c = b.target,
                        a = b8.nodeName(c, "input") || b8.nodeName(c, "button") ? c.form : undefined;
                    if (a && !b8._data(a, "submitBubbles")) {
                        b8.event.add(a, "submit._submit", function (d) {
                            d._submit_bubble = true
                        });
                        b8._data(a, "submitBubbles", true)
                    }
                })
            },
            postDispatch: function (a) {
                if (a._submit_bubble) {
                    delete a._submit_bubble;
                    if (this.parentNode && !a.isTrigger) {
                        b8.event.simulate("submit", this.parentNode, a, true)
                    }
                }
            },
            teardown: function () {
                if (b8.nodeName(this, "form")) {
                    return false
                }
                b8.event.remove(this, "._submit")
            }
        }
    }
    if (!dv.changeBubbles) {
        b8.event.special.change = {
            setup: function () {
                if (cJ.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        b8.event.add(this, "propertychange._change", function (a) {
                            if (a.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        b8.event.add(this, "click._change", function (a) {
                            if (this._just_changed && !a.isTrigger) {
                                this._just_changed = false
                            }
                            b8.event.simulate("change", this, a, true)
                        })
                    }
                    return false
                }
                b8.event.add(this, "beforeactivate._change", function (b) {
                    var a = b.target;
                    if (cJ.test(a.nodeName) && !b8._data(a, "changeBubbles")) {
                        b8.event.add(a, "change._change", function (c) {
                            if (this.parentNode && !c.isSimulated && !c.isTrigger) {
                                b8.event.simulate("change", this.parentNode, c, true)
                            }
                        });
                        b8._data(a, "changeBubbles", true)
                    }
                })
            },
            handle: function (a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || (b.type !== "radio" && b.type !== "checkbox")) {
                    return a.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function () {
                b8.event.remove(this, "._change");
                return !cJ.test(this.nodeName)
            }
        }
    }
    if (!dv.focusinBubbles) {
        b8.each({
            focus: "focusin",
            blur: "focusout"
        }, function (c, b) {
            var a = function (d) {
                b8.event.simulate(b, d.target, b8.event.fix(d), true)
            };
            b8.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this,
                        f = b8._data(d, b);
                    if (!f) {
                        d.addEventListener(c, a, true)
                    }
                    b8._data(d, b, (f || 0) + 1)
                },
                teardown: function () {
                    var d = this.ownerDocument || this,
                        f = b8._data(d, b) - 1;
                    if (!f) {
                        d.removeEventListener(c, a, true);
                        b8._removeData(d, b)
                    } else {
                        b8._data(d, b, f)
                    }
                }
            }
        })
    }
    b8.fn.extend({
        on: function (h, f, c, d, a) {
            var g, b;
            if (typeof h === "object") {
                if (typeof f !== "string") {
                    c = c || f;
                    f = undefined
                }
                for (g in h) {
                    this.on(g, f, c, h[g], a)
                }
                return this
            }
            if (c == null && d == null) {
                d = f;
                c = f = undefined
            } else {
                if (d == null) {
                    if (typeof f === "string") {
                        d = c;
                        c = undefined
                    } else {
                        d = c;
                        c = f;
                        f = undefined
                    }
                }
            }
            if (d === false) {
                d = cv
            } else {
                if (!d) {
                    return this
                }
            }
            if (a === 1) {
                b = d;
                d = function (j) {
                    b8().off(j);
                    return b.apply(this, arguments)
                };
                d.guid = b.guid || (b.guid = b8.guid++)
            }
            return this.each(function () {
                b8.event.add(this, h, d, c, f)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (f, c, b) {
            var a, d;
            if (f && f.preventDefault && f.handleObj) {
                a = f.handleObj;
                b8(f.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler);
                return this
            }
            if (typeof f === "object") {
                for (d in f) {
                    this.off(d, c, f[d])
                }
                return this
            }
            if (c === false || typeof c === "function") {
                b = c;
                c = undefined
            }
            if (b === false) {
                b = cv
            }
            return this.each(function () {
                b8.event.remove(this, f, b, c)
            })
        },
        trigger: function (b, a) {
            return this.each(function () {
                b8.event.trigger(b, a, this)
            })
        },
        triggerHandler: function (b, c) {
            var a = this[0];
            if (a) {
                return b8.event.trigger(b, c, a, true)
            }
        }
    });

    function dA(b) {
        var c = el.split("|"),
            a = b.createDocumentFragment();
        if (a.createElement) {
            while (c.length) {
                a.createElement(c.pop())
            }
        }
        return a
    }

    var el = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        eh = / jQuery\d+="(?:null|\d+)"/g,
        dR = new RegExp("<(?:" + el + ")[\\s/>]", "i"),
        dD = /^\s+/,
        dP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        du = /<([\w:]+)/,
        cL = /<tbody/i,
        eo = /<|&#?\w+;/,
        dL = /<(?:script|style|link)/i,
        d7 = /checked\s*(?:[^=]|=\s*.checked.)/i,
        d1 = /^$|\/(?:java|ecma)script/i,
        d3 = /^true\/(.*)/,
        d5 = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        dd = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: dv.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        cB = dA(eA),
        eb = cB.appendChild(eA.createElement("div"));
    dd.optgroup = dd.option;
    dd.tbody = dd.tfoot = dd.colgroup = dd.caption = dd.thead;
    dd.th = dd.td;

    function dN(d, b) {
        var g, c, f = 0,
            a = typeof d.getElementsByTagName !== cn ? d.getElementsByTagName(b || "*") : typeof d.querySelectorAll !== cn ? d.querySelectorAll(b || "*") : undefined;
        if (!a) {
            for (a = [], g = d.childNodes || d;
                 (c = g[f]) != null; f++) {
                if (!b || b8.nodeName(c, b)) {
                    a.push(c)
                } else {
                    b8.merge(a, dN(c, b))
                }
            }
        }
        return b === undefined || b && b8.nodeName(d, b) ? b8.merge([d], a) : a
    }

    function cH(a) {
        if (eD.test(a.type)) {
            a.defaultChecked = a.checked
        }
    }

    function eF(a, b) {
        return b8.nodeName(a, "table") && b8.nodeName(b.nodeType !== 11 ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function dM(a) {
        a.type = (b8.find.attr(a, "type") !== null) + "/" + a.type;
        return a
    }

    function d9(a) {
        var b = d3.exec(a.type);
        if (b) {
            a.type = b[1]
        } else {
            a.removeAttribute("type")
        }
        return a
    }

    function dI(b, c) {
        var a, d = 0;
        for (;
            (a = b[d]) != null; d++) {
            b8._data(a, "globalEval", !c || b8._data(c[d], "globalEval"))
        }
    }

    function es(g, j) {
        if (j.nodeType !== 1 || !b8.hasData(g)) {
            return
        }
        var f, c, b, a = b8._data(g),
            d = b8._data(j, a),
            h = a.events;
        if (h) {
            delete d.handle;
            d.events = {};
            for (f in h) {
                for (c = 0, b = h[f].length; c < b; c++) {
                    b8.event.add(j, f, h[f][c])
                }
            }
        }
        if (d.data) {
            d.data = b8.extend({}, d.data)
        }
    }

    function cN(c, a) {
        var b, d, f;
        if (a.nodeType !== 1) {
            return
        }
        b = a.nodeName.toLowerCase();
        if (!dv.noCloneEvent && a[b8.expando]) {
            f = b8._data(a);
            for (d in f.events) {
                b8.removeEvent(a, d, f.handle)
            }
            a.removeAttribute(b8.expando)
        }
        if (b === "script" && a.text !== c.text) {
            dM(a).text = c.text;
            d9(a)
        } else {
            if (b === "object") {
                if (a.parentNode) {
                    a.outerHTML = c.outerHTML
                }
                if (dv.html5Clone && (c.innerHTML && !b8.trim(a.innerHTML))) {
                    a.innerHTML = c.innerHTML
                }
            } else {
                if (b === "input" && eD.test(c.type)) {
                    a.defaultChecked = a.checked = c.checked;
                    if (a.value !== c.value) {
                        a.value = c.value
                    }
                } else {
                    if (b === "option") {
                        a.defaultSelected = a.selected = c.defaultSelected
                    } else {
                        if (b === "input" || b === "textarea") {
                            a.defaultValue = c.defaultValue
                        }
                    }
                }
            }
        }
    }

    b8.extend({
        clone: function (h, f, k) {
            var j, g, a, d, c, b = b8.contains(h.ownerDocument, h);
            if (dv.html5Clone || b8.isXMLDoc(h) || !dR.test("<" + h.nodeName + ">")) {
                a = h.cloneNode(true)
            } else {
                eb.innerHTML = h.outerHTML;
                eb.removeChild(a = eb.firstChild)
            }
            if ((!dv.noCloneEvent || !dv.noCloneChecked) && (h.nodeType === 1 || h.nodeType === 11) && !b8.isXMLDoc(h)) {
                j = dN(a);
                c = dN(h);
                for (d = 0;
                     (g = c[d]) != null; ++d) {
                    if (j[d]) {
                        cN(g, j[d])
                    }
                }
            }
            if (f) {
                if (k) {
                    c = c || dN(h);
                    j = j || dN(a);
                    for (d = 0;
                         (g = c[d]) != null; d++) {
                        es(g, j[d])
                    }
                } else {
                    es(h, a)
                }
            }
            j = dN(a, "script");
            if (j.length > 0) {
                dI(j, !b && dN(h, "script"))
            }
            j = c = g = null;
            return a
        },
        buildFragment: function (o, q, g, a) {
            var f, n, h, b, l, c, m, j = o.length,
                p = dA(q),
                k = [],
                d = 0;
            for (; d < j; d++) {
                n = o[d];
                if (n || n === 0) {
                    if (b8.type(n) === "object") {
                        b8.merge(k, n.nodeType ? [n] : n)
                    } else {
                        if (!eo.test(n)) {
                            k.push(q.createTextNode(n))
                        } else {
                            b = b || p.appendChild(q.createElement("div"));
                            l = (du.exec(n) || ["", ""])[1].toLowerCase();
                            m = dd[l] || dd._default;
                            b.innerHTML = m[1] + n.replace(dP, "<$1></$2>") + m[2];
                            f = m[0];
                            while (f--) {
                                b = b.lastChild
                            }
                            if (!dv.leadingWhitespace && dD.test(n)) {
                                k.push(q.createTextNode(dD.exec(n)[0]))
                            }
                            if (!dv.tbody) {
                                n = l === "table" && !cL.test(n) ? b.firstChild : m[1] === "<table>" && !cL.test(n) ? b : 0;
                                f = n && n.childNodes.length;
                                while (f--) {
                                    if (b8.nodeName((c = n.childNodes[f]), "tbody") && !c.childNodes.length) {
                                        n.removeChild(c)
                                    }
                                }
                            }
                            b8.merge(k, b.childNodes);
                            b.textContent = "";
                            while (b.firstChild) {
                                b.removeChild(b.firstChild)
                            }
                            b = p.lastChild
                        }
                    }
                }
            }
            if (b) {
                p.removeChild(b)
            }
            if (!dv.appendChecked) {
                b8.grep(dN(k, "input"), cH)
            }
            d = 0;
            while ((n = k[d++])) {
                if (a && b8.inArray(n, a) !== -1) {
                    continue
                }
                h = b8.contains(n.ownerDocument, n);
                b = dN(p.appendChild(n), "script");
                if (h) {
                    dI(b)
                }
                if (g) {
                    f = 0;
                    while ((n = b[f++])) {
                        if (d1.test(n.type || "")) {
                            g.push(n)
                        }
                    }
                }
            }
            b = null;
            return p
        },
        cleanData: function (m, b) {
            var h, c, j, g, l = 0,
                a = b8.expando,
                k = b8.cache,
                f = dv.deleteExpando,
                d = b8.event.special;
            for (;
                (h = m[l]) != null; l++) {
                if (b || b8.acceptData(h)) {
                    j = h[a];
                    g = j && k[j];
                    if (g) {
                        if (g.events) {
                            for (c in g.events) {
                                if (d[c]) {
                                    b8.event.remove(h, c)
                                } else {
                                    b8.removeEvent(h, c, g.handle)
                                }
                            }
                        }
                        if (k[j]) {
                            delete k[j];
                            if (f) {
                                delete h[a]
                            } else {
                                if (typeof h.removeAttribute !== cn) {
                                    h.removeAttribute(a)
                                } else {
                                    h[a] = null
                                }
                            }
                            c6.push(j)
                        }
                    }
                }
            }
        }
    });
    b8.fn.extend({
        text: function (a) {
            return cK(this, function (b) {
                return b === undefined ? b8.text(this) : this.empty().append((this[0] && this[0].ownerDocument || eA).createTextNode(b))
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (b) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var a = eF(this, b);
                    a.appendChild(b)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (b) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var a = eF(this, b);
                    a.insertBefore(b, a.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this)
                }
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                }
            })
        },
        remove: function (c, a) {
            var b, f = c ? b8.filter(c, this) : this,
                d = 0;
            for (;
                (b = f[d]) != null; d++) {
                if (!a && b.nodeType === 1) {
                    b8.cleanData(dN(b))
                }
                if (b.parentNode) {
                    if (a && b8.contains(b.ownerDocument, b)) {
                        dI(dN(b, "script"))
                    }
                    b.parentNode.removeChild(b)
                }
            }
            return this
        },
        empty: function () {
            var b, a = 0;
            for (;
                (b = this[a]) != null; a++) {
                if (b.nodeType === 1) {
                    b8.cleanData(dN(b, false))
                }
                while (b.firstChild) {
                    b.removeChild(b.firstChild)
                }
                if (b.options && b8.nodeName(b, "select")) {
                    b.options.length = 0
                }
            }
            return this
        },
        clone: function (a, b) {
            a = a == null ? false : a;
            b = b == null ? a : b;
            return this.map(function () {
                return b8.clone(this, a, b)
            })
        },
        html: function (a) {
            return cK(this, function (c) {
                var d = this[0] || {},
                    f = 0,
                    g = this.length;
                if (c === undefined) {
                    return d.nodeType === 1 ? d.innerHTML.replace(eh, "") : undefined
                }
                if (typeof c === "string" && !dL.test(c) && (dv.htmlSerialize || !dR.test(c)) && (dv.leadingWhitespace || !dD.test(c)) && !dd[(du.exec(c) || ["", ""])[1].toLowerCase()]) {
                    c = c.replace(dP, "<$1></$2>");
                    try {
                        for (; f < g; f++) {
                            d = this[f] || {};
                            if (d.nodeType === 1) {
                                b8.cleanData(dN(d, false));
                                d.innerHTML = c
                            }
                        }
                        d = 0
                    } catch (b) {
                    }
                }
                if (d) {
                    this.empty().append(c)
                }
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0];
            this.domManip(arguments, function (b) {
                a = this.parentNode;
                b8.cleanData(dN(this));
                if (a) {
                    a.replaceChild(b, this)
                }
            });
            return a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, true)
        },
        domManip: function (g, a) {
            g = dx.apply([], g);
            var n, m, p, k, c, h, o = 0,
                l = this.length,
                d = this,
                b = l - 1,
                f = g[0],
                j = b8.isFunction(f);
            if (j || (l > 1 && typeof f === "string" && !dv.checkClone && d7.test(f))) {
                return this.each(function (r) {
                    var q = d.eq(r);
                    if (j) {
                        g[0] = f.call(this, r, q.html())
                    }
                    q.domManip(g, a)
                })
            }
            if (l) {
                h = b8.buildFragment(g, this[0].ownerDocument, false, this);
                n = h.firstChild;
                if (h.childNodes.length === 1) {
                    h = n
                }
                if (n) {
                    k = b8.map(dN(h, "script"), dM);
                    p = k.length;
                    for (; o < l; o++) {
                        m = h;
                        if (o !== b) {
                            m = b8.clone(m, true, true);
                            if (p) {
                                b8.merge(k, dN(m, "script"))
                            }
                        }
                        a.call(this[o], m, o)
                    }
                    if (p) {
                        c = k[k.length - 1].ownerDocument;
                        b8.map(k, d9);
                        for (o = 0; o < p; o++) {
                            m = k[o];
                            if (d1.test(m.type || "") && !b8._data(m, "globalEval") && b8.contains(c, m)) {
                                if (m.src) {
                                    if (b8._evalUrl) {
                                        b8._evalUrl(m.src)
                                    }
                                } else {
                                    b8.globalEval((m.text || m.textContent || m.innerHTML || "").replace(d5, ""))
                                }
                            }
                        }
                    }
                    h = n = null
                }
            }
            return this
        }
    });
    b8.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (b, a) {
        b8.fn[b] = function (j) {
            var h, f = 0,
                g = [],
                c = b8(j),
                d = c.length - 1;
            for (; f <= d; f++) {
                h = f === d ? this : this.clone(true);
                b8(c[f])[a](h);
                eJ.apply(g, h.get())
            }
            return this.pushStack(g)
        }
    });
    var cU, cy = {};

    function dz(c, b) {
        var a, f = b8(b.createElement(c)).appendTo(b.body),
            d = cY.getDefaultComputedStyle && (a = cY.getDefaultComputedStyle(f[0])) ? a.display : b8.css(f[0], "display");
        f.detach();
        return d
    }

    function cW(c) {
        var a = eA,
            b = cy[c];
        if (!b) {
            b = dz(c, a);
            if (b === "none" || !b) {
                cU = (cU || b8("<iframe frameborder='0' width='0' height='0'/>")).appendTo(a.documentElement);
                a = (cU[0].contentWindow || cU[0].contentDocument).document;
                a.write();
                a.close();
                b = dz(c, a);
                cU.detach()
            }
            cy[c] = b
        }
        return b
    }

    (function () {
        var a;
        dv.shrinkWrapBlocks = function () {
            if (a != null) {
                return a
            }
            a = false;
            var c, b, d;
            b = eA.getElementsByTagName("body")[0];
            if (!b || !b.style) {
                return
            }
            c = eA.createElement("div");
            d = eA.createElement("div");
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            b.appendChild(d).appendChild(c);
            if (typeof c.style.zoom !== cn) {
                c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
                c.appendChild(eA.createElement("div")).style.width = "5px";
                a = c.offsetWidth !== 3
            }
            b.removeChild(d);
            return a
        }
    })();
    var c5 = (/^margin/);
    var ev = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i");
    var cb, d4, ef = /^(top|right|bottom|left)$/;
    if (cY.getComputedStyle) {
        cb = function (a) {
            if (a.ownerDocument.defaultView.opener) {
                return a.ownerDocument.defaultView.getComputedStyle(a, null)
            }
            return cY.getComputedStyle(a, null)
        };
        d4 = function (g, c, d) {
            var a, h, f, b, j = g.style;
            d = d || cb(g);
            b = d ? d.getPropertyValue(c) || d[c] : undefined;
            if (d) {
                if (b === "" && !b8.contains(g.ownerDocument, g)) {
                    b = b8.style(g, c)
                }
                if (ev.test(b) && c5.test(c)) {
                    a = j.width;
                    h = j.minWidth;
                    f = j.maxWidth;
                    j.minWidth = j.maxWidth = j.width = b;
                    b = d.width;
                    j.width = a;
                    j.minWidth = h;
                    j.maxWidth = f
                }
            }
            return b === undefined ? b : b + ""
        }
    } else {
        if (eA.documentElement.currentStyle) {
            cb = function (a) {
                return a.currentStyle
            };
            d4 = function (g, h, f) {
                var d, c, a, j, b = g.style;
                f = f || cb(g);
                j = f ? f[h] : undefined;
                if (j == null && b && b[h]) {
                    j = b[h]
                }
                if (ev.test(j) && !ef.test(h)) {
                    d = b.left;
                    c = g.runtimeStyle;
                    a = c && c.left;
                    if (a) {
                        c.left = g.currentStyle.left
                    }
                    b.left = h === "fontSize" ? "1em" : j;
                    j = b.pixelLeft + "px";
                    b.left = d;
                    if (a) {
                        c.left = a
                    }
                }
                return j === undefined ? j : j + "" || "auto"
            }
        }
    }

    function ep(b, a) {
        return {
            get: function () {
                var c = b();
                if (c == null) {
                    return
                }
                if (c) {
                    delete this.get;
                    return
                }
                return (this.get = a).apply(this, arguments)
            }
        }
    }

    (function () {
        var g, f, h, d, j, c, a;
        g = eA.createElement("div");
        g.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        h = g.getElementsByTagName("a")[0];
        f = h && h.style;
        if (!f) {
            return
        }
        f.cssText = "float:left;opacity:.5";
        dv.opacity = f.opacity === "0.5";
        dv.cssFloat = !!f.cssFloat;
        g.style.backgroundClip = "content-box";
        g.cloneNode(true).style.backgroundClip = "";
        dv.clearCloneStyle = g.style.backgroundClip === "content-box";
        dv.boxSizing = f.boxSizing === "" || f.MozBoxSizing === "" || f.WebkitBoxSizing === "";
        b8.extend(dv, {
            reliableHiddenOffsets: function () {
                if (c == null) {
                    b()
                }
                return c
            },
            boxSizingReliable: function () {
                if (j == null) {
                    b()
                }
                return j
            },
            pixelPosition: function () {
                if (d == null) {
                    b()
                }
                return d
            },
            reliableMarginRight: function () {
                if (a == null) {
                    b()
                }
                return a
            }
        });

        function b() {
            var n, m, l, k;
            m = eA.getElementsByTagName("body")[0];
            if (!m || !m.style) {
                return
            }
            n = eA.createElement("div");
            l = eA.createElement("div");
            l.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            m.appendChild(l).appendChild(n);
            n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
            d = j = false;
            a = true;
            if (cY.getComputedStyle) {
                d = (cY.getComputedStyle(n, null) || {}).top !== "1%";
                j = (cY.getComputedStyle(n, null) || {
                    width: "4px"
                }).width === "4px";
                k = n.appendChild(eA.createElement("div"));
                k.style.cssText = n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                k.style.marginRight = k.style.width = "0";
                n.style.width = "1px";
                a = !parseFloat((cY.getComputedStyle(k, null) || {}).marginRight);
                n.removeChild(k)
            }
            n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            k = n.getElementsByTagName("td");
            k[0].style.cssText = "margin:0;border:0;padding:0;display:none";
            c = k[0].offsetHeight === 0;
            if (c) {
                k[0].style.display = "";
                k[1].style.display = "none";
                c = k[0].offsetHeight === 0
            }
            m.removeChild(l)
        }
    })();
    b8.swap = function (f, c, b, g) {
        var h, a, d = {};
        for (a in c) {
            d[a] = f.style[a];
            f.style[a] = c[a]
        }
        h = b.apply(f, g || []);
        for (a in c) {
            f.style[a] = d[a]
        }
        return h
    };
    var dp = /alpha\([^)]*\)/i,
        eC = /opacity\s*=\s*([^)]*)/,
        df = /^(none|table(?!-c[ea]).+)/,
        c9 = new RegExp("^(" + e + ")(.*)$", "i"),
        eE = new RegExp("^([+-])=(" + e + ")", "i"),
        cR = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dB = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        cf = ["Webkit", "O", "Moz", "ms"];

    function cM(c, f) {
        if (f in c) {
            return f
        }
        var a = f.charAt(0).toUpperCase() + f.slice(1),
            b = f,
            d = cf.length;
        while (d--) {
            f = cf[d] + a;
            if (f in c) {
                return f
            }
        }
        return b
    }

    function cw(g, d) {
        var c, b, f, a = [],
            j = 0,
            h = g.length;
        for (; j < h; j++) {
            b = g[j];
            if (!b.style) {
                continue
            }
            a[j] = b8._data(b, "olddisplay");
            c = b.style.display;
            if (d) {
                if (!a[j] && c === "none") {
                    b.style.display = ""
                }
                if (b.style.display === "" && c7(b)) {
                    a[j] = b8._data(b, "olddisplay", cW(b.nodeName))
                }
            } else {
                f = c7(b);
                if (c && c !== "none" || !f) {
                    b8._data(b, "olddisplay", f ? c : b8.css(b, "display"))
                }
            }
        }
        for (j = 0; j < h; j++) {
            b = g[j];
            if (!b.style) {
                continue
            }
            if (!d || b.style.display === "none" || b.style.display === "") {
                b.style.display = d ? a[j] || "" : "none"
            }
        }
        return g
    }

    function cE(b, d, c) {
        var a = c9.exec(d);
        return a ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : d
    }

    function a8(f, h, c, a, d) {
        var g = c === (a ? "border" : "content") ? 4 : h === "width" ? 1 : 0,
            b = 0;
        for (; g < 4; g += 2) {
            if (c === "margin") {
                b += b8.css(f, c + c3[g], true, d)
            }
            if (a) {
                if (c === "content") {
                    b -= b8.css(f, "padding" + c3[g], true, d)
                }
                if (c !== "margin") {
                    b -= b8.css(f, "border" + c3[g] + "Width", true, d)
                }
            } else {
                b += b8.css(f, "padding" + c3[g], true, d);
                if (c !== "padding") {
                    b += b8.css(f, "border" + c3[g] + "Width", true, d)
                }
            }
        }
        return b
    }

    function cr(f, a, d) {
        var g = true,
            c = a === "width" ? f.offsetWidth : f.offsetHeight,
            h = cb(f),
            b = dv.boxSizing && b8.css(f, "boxSizing", false, h) === "border-box";
        if (c <= 0 || c == null) {
            c = d4(f, a, h);
            if (c < 0 || c == null) {
                c = f.style[a]
            }
            if (ev.test(c)) {
                return c
            }
            g = b && (dv.boxSizingReliable() || c === f.style[a]);
            c = parseFloat(c) || 0
        }
        return (c + a8(f, a, d || (b ? "border" : "content"), g, h)) + "px"
    }

    b8.extend({
        cssHooks: {
            opacity: {
                get: function (c, a) {
                    if (a) {
                        var b = d4(c, "opacity");
                        return b === "" ? "1" : b
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": dv.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (j, l, b, h) {
            if (!j || j.nodeType === 3 || j.nodeType === 8 || !j.style) {
                return
            }
            var f, c, a, g = b8.camelCase(l),
                k = j.style;
            l = b8.cssProps[g] || (b8.cssProps[g] = cM(k, g));
            a = b8.cssHooks[l] || b8.cssHooks[g];
            if (b !== undefined) {
                c = typeof b;
                if (c === "string" && (f = eE.exec(b))) {
                    b = (f[1] + 1) * f[2] + parseFloat(b8.css(j, l));
                    c = "number"
                }
                if (b == null || b !== b) {
                    return
                }
                if (c === "number" && !b8.cssNumber[g]) {
                    b += "px"
                }
                if (!dv.clearCloneStyle && b === "" && l.indexOf("background") === 0) {
                    k[l] = "inherit"
                }
                if (!a || !("set" in a) || (b = a.set(j, b, h)) !== undefined) {
                    try {
                        k[l] = b
                    } catch (d) {
                    }
                }
            } else {
                if (a && "get" in a && (f = a.get(j, false, h)) !== undefined) {
                    return f
                }
                return k[l]
            }
        },
        css: function (g, d, a, f) {
            var h, c, b, j = b8.camelCase(d);
            d = b8.cssProps[j] || (b8.cssProps[j] = cM(g.style, j));
            b = b8.cssHooks[d] || b8.cssHooks[j];
            if (b && "get" in b) {
                c = b.get(g, true, a)
            }
            if (c === undefined) {
                c = d4(g, d, f)
            }
            if (c === "normal" && d in dB) {
                c = dB[d]
            }
            if (a === "" || a) {
                h = parseFloat(c);
                return a === true || b8.isNumeric(h) ? h || 0 : c
            }
            return c
        }
    });
    b8.each(["height", "width"], function (b, a) {
        b8.cssHooks[a] = {
            get: function (d, f, c) {
                if (f) {
                    return df.test(b8.css(d, "display")) && d.offsetWidth === 0 ? b8.swap(d, cR, function () {
                        return cr(d, a, c)
                    }) : cr(d, a, c)
                }
            },
            set: function (f, d, c) {
                var g = c && cb(f);
                return cE(f, d, c ? a8(f, a, c, dv.boxSizing && b8.css(f, "boxSizing", false, g) === "border-box", g) : 0)
            }
        }
    });
    if (!dv.opacity) {
        b8.cssHooks.opacity = {
            get: function (a, b) {
                return eC.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : b ? "1" : ""
            },
            set: function (d, c) {
                var f = d.style,
                    a = d.currentStyle,
                    b = b8.isNumeric(c) ? "alpha(opacity=" + c * 100 + ")" : "",
                    g = a && a.filter || f.filter || "";
                f.zoom = 1;
                if ((c >= 1 || c === "") && b8.trim(g.replace(dp, "")) === "" && f.removeAttribute) {
                    f.removeAttribute("filter");
                    if (c === "" || a && !a.filter) {
                        return
                    }
                }
                f.filter = dp.test(g) ? g.replace(dp, b) : g + " " + b
            }
        }
    }
    b8.cssHooks.marginRight = ep(dv.reliableMarginRight, function (a, b) {
        if (b) {
            return b8.swap(a, {
                display: "inline-block"
            }, d4, [a, "marginRight"])
        }
    });
    b8.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (b, a) {
        b8.cssHooks[b + a] = {
            expand: function (d) {
                var f = 0,
                    g = {},
                    c = typeof d === "string" ? d.split(" ") : [d];
                for (; f < 4; f++) {
                    g[b + c3[f] + a] = c[f] || c[f - 2] || c[0]
                }
                return g
            }
        };
        if (!c5.test(b)) {
            b8.cssHooks[b + a].set = cE
        }
    });
    b8.fn.extend({
        css: function (b, a) {
            return cK(this, function (f, j, d) {
                var g, k, c = {},
                    h = 0;
                if (b8.isArray(j)) {
                    g = cb(f);
                    k = j.length;
                    for (; h < k; h++) {
                        c[j[h]] = b8.css(f, j[h], false, g)
                    }
                    return c
                }
                return d !== undefined ? b8.style(f, j, d) : b8.css(f, j)
            }, b, a, arguments.length > 1)
        },
        show: function () {
            return cw(this, true)
        },
        hide: function () {
            return cw(this)
        },
        toggle: function (a) {
            if (typeof a === "boolean") {
                return a ? this.show() : this.hide()
            }
            return this.each(function () {
                if (c7(this)) {
                    b8(this).show()
                } else {
                    b8(this).hide()
                }
            })
        }
    });

    function ew(f, a, c, b, d) {
        return new ew.prototype.init(f, a, c, b, d)
    }

    b8.Tween = ew;
    ew.prototype = {
        constructor: ew,
        init: function (f, a, d, c, b, g) {
            this.elem = f;
            this.prop = d;
            this.easing = b || "swing";
            this.options = a;
            this.start = this.now = this.cur();
            this.end = c;
            this.unit = g || (b8.cssNumber[d] ? "" : "px")
        },
        cur: function () {
            var a = ew.propHooks[this.prop];
            return a && a.get ? a.get(this) : ew.propHooks._default.get(this)
        },
        run: function (c) {
            var a, b = ew.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = a = b8.easing[this.easing](c, this.options.duration * c, 0, 1, this.options.duration)
            } else {
                this.pos = a = c
            }
            this.now = (this.end - this.start) * a + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (b && b.set) {
                b.set(this)
            } else {
                ew.propHooks._default.set(this)
            }
            return this
        }
    };
    ew.prototype.init.prototype = ew.prototype;
    ew.propHooks = {
        _default: {
            get: function (a) {
                var b;
                if (a.elem[a.prop] != null && (!a.elem.style || a.elem.style[a.prop] == null)) {
                    return a.elem[a.prop]
                }
                b = b8.css(a.elem, a.prop, "");
                return !b || b === "auto" ? 0 : b
            },
            set: function (a) {
                if (b8.fx.step[a.prop]) {
                    b8.fx.step[a.prop](a)
                } else {
                    if (a.elem.style && (a.elem.style[b8.cssProps[a.prop]] != null || b8.cssHooks[a.prop])) {
                        b8.style(a.elem, a.prop, a.now + a.unit)
                    } else {
                        a.elem[a.prop] = a.now
                    }
                }
            }
        }
    };
    ew.propHooks.scrollTop = ew.propHooks.scrollLeft = {
        set: function (a) {
            if (a.elem.nodeType && a.elem.parentNode) {
                a.elem[a.prop] = a.now
            }
        }
    };
    b8.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    };
    b8.fx = ew.prototype.init;
    b8.fx.step = {};
    var cu, b7, d2 = /^(?:toggle|show|hide)$/,
        ey = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        i = /queueHooks$/,
        dO = [dW],
        cQ = {
            "*": [function (k, d) {
                var a = this.createTween(k, d),
                    f = a.cur(),
                    g = ey.exec(d),
                    b = g && g[3] || (b8.cssNumber[k] ? "" : "px"),
                    j = (b8.cssNumber[k] || b !== "px" && +f) && ey.exec(b8.css(a.elem, k)),
                    h = 1,
                    c = 20;
                if (j && j[3] !== b) {
                    b = b || j[3];
                    g = g || [];
                    j = +f || 1;
                    do {
                        h = h || ".5";
                        j = j / h;
                        b8.style(a.elem, k, j + b)
                    } while (h !== (h = a.cur() / f) && h !== 1 && --c)
                }
                if (g) {
                    j = a.start = +j || +f || 0;
                    a.unit = b;
                    a.end = g[1] ? j + (g[1] + 1) * g[2] : +g[2]
                }
                return a
            }]
        };

    function dl() {
        setTimeout(function () {
            cu = undefined
        });
        return (cu = b8.now())
    }

    function cl(d, a) {
        var c, b = {
                height: d
            },
            f = 0;
        a = a ? 1 : 0;
        for (; f < 4; f += 2 - a) {
            c = c3[f];
            b["margin" + c] = b["padding" + c] = d
        }
        if (a) {
            b.opacity = b.width = d
        }
        return b
    }

    function cq(f, b, g) {
        var a, c = (cQ[b] || []).concat(cQ["*"]),
            d = 0,
            h = c.length;
        for (; d < h; d++) {
            if ((a = c[d].call(g, b, f))) {
                return a
            }
        }
    }

    function dW(o, l, b) {
        var g, k, m, d, c, f, q, h, n = this,
            j = {},
            a = o.style,
            r = o.nodeType && c7(o),
            p = b8._data(o, "fxshow");
        if (!b.queue) {
            c = b8._queueHooks(o, "fx");
            if (c.unqueued == null) {
                c.unqueued = 0;
                f = c.empty.fire;
                c.empty.fire = function () {
                    if (!c.unqueued) {
                        f()
                    }
                }
            }
            c.unqueued++;
            n.always(function () {
                n.always(function () {
                    c.unqueued--;
                    if (!b8.queue(o, "fx").length) {
                        c.empty.fire()
                    }
                })
            })
        }
        if (o.nodeType === 1 && ("height" in l || "width" in l)) {
            b.overflow = [a.overflow, a.overflowX, a.overflowY];
            q = b8.css(o, "display");
            h = q === "none" ? b8._data(o, "olddisplay") || cW(o.nodeName) : q;
            if (h === "inline" && b8.css(o, "float") === "none") {
                if (!dv.inlineBlockNeedsLayout || cW(o.nodeName) === "inline") {
                    a.display = "inline-block"
                } else {
                    a.zoom = 1
                }
            }
        }
        if (b.overflow) {
            a.overflow = "hidden";
            if (!dv.shrinkWrapBlocks()) {
                n.always(function () {
                    a.overflow = b.overflow[0];
                    a.overflowX = b.overflow[1];
                    a.overflowY = b.overflow[2]
                })
            }
        }
        for (g in l) {
            k = l[g];
            if (d2.exec(k)) {
                delete l[g];
                m = m || k === "toggle";
                if (k === (r ? "hide" : "show")) {
                    if (k === "show" && p && p[g] !== undefined) {
                        r = true
                    } else {
                        continue
                    }
                }
                j[g] = p && p[g] || b8.style(o, g)
            } else {
                q = undefined
            }
        }
        if (!b8.isEmptyObject(j)) {
            if (p) {
                if ("hidden" in p) {
                    r = p.hidden
                }
            } else {
                p = b8._data(o, "fxshow", {})
            }
            if (m) {
                p.hidden = !r
            }
            if (r) {
                b8(o).show()
            } else {
                n.done(function () {
                    b8(o).hide()
                })
            }
            n.done(function () {
                var s;
                b8._removeData(o, "fxshow");
                for (s in j) {
                    b8.style(o, s, j[s])
                }
            });
            for (g in j) {
                d = cq(r ? p[g] : 0, g, n);
                if (!(g in p)) {
                    p[g] = d.start;
                    if (r) {
                        d.end = d.start;
                        d.start = g === "width" || g === "height" ? 1 : 0
                    }
                }
            }
        } else {
            if ((q === "none" ? cW(o.nodeName) : q) === "inline") {
                a.display = q
            }
        }
    }

    function d0(g, f) {
        var h, a, c, b, d;
        for (h in g) {
            a = b8.camelCase(h);
            c = f[a];
            b = g[h];
            if (b8.isArray(b)) {
                c = b[1];
                b = g[h] = b[0]
            }
            if (h !== a) {
                g[a] = b;
                delete g[h]
            }
            d = b8.cssHooks[a];
            if (d && "expand" in d) {
                b = d.expand(b);
                delete g[a];
                for (h in b) {
                    if (!(h in g)) {
                        g[h] = b[h];
                        f[h] = c
                    }
                }
            } else {
                f[a] = c
            }
        }
    }

    function cX(k, j, b) {
        var a, m, g = 0,
            l = dO.length,
            c = b8.Deferred().always(function () {
                delete h.elem
            }),
            h = function () {
                if (m) {
                    return false
                }
                var n = cu || dl(),
                    q = Math.max(0, f.startTime + f.duration - n),
                    s = q / f.duration || 0,
                    o = 1 - s,
                    r = 0,
                    p = f.tweens.length;
                for (; r < p; r++) {
                    f.tweens[r].run(o)
                }
                c.notifyWith(k, [f, o, q]);
                if (o < 1 && p) {
                    return q
                } else {
                    c.resolveWith(k, [f]);
                    return false
                }
            },
            f = c.promise({
                elem: k,
                props: b8.extend({}, j),
                opts: b8.extend(true, {
                    specialEasing: {}
                }, b),
                originalProperties: j,
                originalOptions: b,
                startTime: cu || dl(),
                duration: b.duration,
                tweens: [],
                createTween: function (n, p) {
                    var o = b8.Tween(k, f.opts, n, p, f.opts.specialEasing[n] || f.opts.easing);
                    f.tweens.push(o);
                    return o
                },
                stop: function (o) {
                    var p = 0,
                        n = o ? f.tweens.length : 0;
                    if (m) {
                        return this
                    }
                    m = true;
                    for (; p < n; p++) {
                        f.tweens[p].run(1)
                    }
                    if (o) {
                        c.resolveWith(k, [f, o])
                    } else {
                        c.rejectWith(k, [f, o])
                    }
                    return this
                }
            }),
            d = f.props;
        d0(d, f.opts.specialEasing);
        for (; g < l; g++) {
            a = dO[g].call(f, k, d, f.opts);
            if (a) {
                return a
            }
        }
        b8.map(d, cq, f);
        if (b8.isFunction(f.opts.start)) {
            f.opts.start.call(k, f)
        }
        b8.fx.timer(b8.extend(h, {
            elem: k,
            anim: f,
            queue: f.opts.queue
        }));
        return f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    b8.Animation = b8.extend(cX, {
        tweener: function (a, c) {
            if (b8.isFunction(a)) {
                c = a;
                a = ["*"]
            } else {
                a = a.split(" ")
            }
            var d, b = 0,
                f = a.length;
            for (; b < f; b++) {
                d = a[b];
                cQ[d] = cQ[d] || [];
                cQ[d].unshift(c)
            }
        },
        prefilter: function (a, b) {
            if (b) {
                dO.unshift(a)
            } else {
                dO.push(a)
            }
        }
    });
    b8.speed = function (d, c, a) {
        var b = d && typeof d === "object" ? b8.extend({}, d) : {
            complete: a || !a && c || b8.isFunction(d) && d,
            duration: d,
            easing: a && c || c && !b8.isFunction(c) && c
        };
        b.duration = b8.fx.off ? 0 : typeof b.duration === "number" ? b.duration : b.duration in b8.fx.speeds ? b8.fx.speeds[b.duration] : b8.fx.speeds._default;
        if (b.queue == null || b.queue === true) {
            b.queue = "fx"
        }
        b.old = b.complete;
        b.complete = function () {
            if (b8.isFunction(b.old)) {
                b.old.call(this)
            }
            if (b.queue) {
                b8.dequeue(this, b.queue)
            }
        };
        return b
    };
    b8.fn.extend({
        fadeTo: function (b, c, d, a) {
            return this.filter(c7).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, a)
        },
        animate: function (f, g, c, b) {
            var h = b8.isEmptyObject(f),
                d = b8.speed(g, c, b),
                a = function () {
                    var j = cX(this, b8.extend({}, f), d);
                    if (h || b8._data(this, "finish")) {
                        j.stop(true)
                    }
                };
            a.finish = a;
            return h || d.queue === false ? this.each(a) : this.queue(d.queue, a)
        },
        stop: function (d, a, b) {
            var c = function (g) {
                var f = g.stop;
                delete g.stop;
                f(b)
            };
            if (typeof d !== "string") {
                b = a;
                a = d;
                d = undefined
            }
            if (a && d !== false) {
                this.queue(d || "fx", [])
            }
            return this.each(function () {
                var f = true,
                    j = d != null && d + "queueHooks",
                    g = b8.timers,
                    h = b8._data(this);
                if (j) {
                    if (h[j] && h[j].stop) {
                        c(h[j])
                    }
                } else {
                    for (j in h) {
                        if (h[j] && h[j].stop && i.test(j)) {
                            c(h[j])
                        }
                    }
                }
                for (j = g.length; j--;) {
                    if (g[j].elem === this && (d == null || g[j].queue === d)) {
                        g[j].anim.stop(b);
                        f = false;
                        g.splice(j, 1)
                    }
                }
                if (f || !b) {
                    b8.dequeue(this, d)
                }
            })
        },
        finish: function (a) {
            if (a !== false) {
                a = a || "fx"
            }
            return this.each(function () {
                var g, c = b8._data(this),
                    h = c[a + "queue"],
                    b = c[a + "queueHooks"],
                    d = b8.timers,
                    f = h ? h.length : 0;
                c.finish = true;
                b8.queue(this, a, []);
                if (b && b.stop) {
                    b.stop.call(this, true)
                }
                for (g = d.length; g--;) {
                    if (d[g].elem === this && d[g].queue === a) {
                        d[g].anim.stop(true);
                        d.splice(g, 1)
                    }
                }
                for (g = 0; g < f; g++) {
                    if (h[g] && h[g].finish) {
                        h[g].finish.call(this)
                    }
                }
                delete c.finish
            })
        }
    });
    b8.each(["toggle", "show", "hide"], function (c, a) {
        var b = b8.fn[a];
        b8.fn[a] = function (d, f, g) {
            return d == null || typeof d === "boolean" ? b.apply(this, arguments) : this.animate(cl(a, true), d, f, g)
        }
    });
    b8.each({
        slideDown: cl("show"),
        slideUp: cl("hide"),
        slideToggle: cl("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (b, a) {
        b8.fn[b] = function (f, c, d) {
            return this.animate(a, f, c, d)
        }
    });
    b8.timers = [];
    b8.fx.tick = function () {
        var b, c = b8.timers,
            a = 0;
        cu = b8.now();
        for (; a < c.length; a++) {
            b = c[a];
            if (!b() && c[a] === b) {
                c.splice(a--, 1)
            }
        }
        if (!c.length) {
            b8.fx.stop()
        }
        cu = undefined
    };
    b8.fx.timer = function (a) {
        b8.timers.push(a);
        if (a()) {
            b8.fx.start()
        } else {
            b8.timers.pop()
        }
    };
    b8.fx.interval = 13;
    b8.fx.start = function () {
        if (!b7) {
            b7 = setInterval(b8.fx.tick, b8.fx.interval)
        }
    };
    b8.fx.stop = function () {
        clearInterval(b7);
        b7 = null
    };
    b8.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    b8.fn.delay = function (a, b) {
        a = b8.fx ? b8.fx.speeds[a] || a : a;
        b = b || "fx";
        return this.queue(b, function (d, f) {
            var c = setTimeout(d, a);
            f.stop = function () {
                clearTimeout(c)
            }
        })
    };
    (function () {
        var f, c, b, a, d;
        c = eA.createElement("div");
        c.setAttribute("className", "t");
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = c.getElementsByTagName("a")[0];
        b = eA.createElement("select");
        d = b.appendChild(eA.createElement("option"));
        f = c.getElementsByTagName("input")[0];
        a.style.cssText = "top:1px";
        dv.getSetAttribute = c.className !== "t";
        dv.style = /top/.test(a.getAttribute("style"));
        dv.hrefNormalized = a.getAttribute("href") === "/a";
        dv.checkOn = !!f.value;
        dv.optSelected = d.selected;
        dv.enctype = !!eA.createElement("form").enctype;
        b.disabled = true;
        dv.optDisabled = !d.disabled;
        f = eA.createElement("input");
        f.setAttribute("value", "");
        dv.input = f.getAttribute("value") === "";
        f.value = "t";
        f.setAttribute("type", "radio");
        dv.radioValue = f.value === "t"
    })();
    var cm = /\r/g;
    b8.fn.extend({
        val: function (d) {
            var c, a, b, f = this[0];
            if (!arguments.length) {
                if (f) {
                    c = b8.valHooks[f.type] || b8.valHooks[f.nodeName.toLowerCase()];
                    if (c && "get" in c && (a = c.get(f, "value")) !== undefined) {
                        return a
                    }
                    a = f.value;
                    return typeof a === "string" ? a.replace(cm, "") : a == null ? "" : a
                }
                return
            }
            b = b8.isFunction(d);
            return this.each(function (h) {
                var g;
                if (this.nodeType !== 1) {
                    return
                }
                if (b) {
                    g = d.call(this, h, b8(this).val())
                } else {
                    g = d
                }
                if (g == null) {
                    g = ""
                } else {
                    if (typeof g === "number") {
                        g += ""
                    } else {
                        if (b8.isArray(g)) {
                            g = b8.map(g, function (j) {
                                return j == null ? "" : j + ""
                            })
                        }
                    }
                }
                c = b8.valHooks[this.type] || b8.valHooks[this.nodeName.toLowerCase()];
                if (!c || !("set" in c) || c.set(this, g, "value") === undefined) {
                    this.value = g
                }
            })
        }
    });
    b8.extend({
        valHooks: {
            option: {
                get: function (b) {
                    var a = b8.find.attr(b, "value");
                    return a != null ? a : b8.trim(b8.text(b))
                }
            },
            select: {
                get: function (k) {
                    var h, g, a = k.options,
                        d = k.selectedIndex,
                        f = k.type === "select-one" || d < 0,
                        b = f ? null : [],
                        j = f ? d + 1 : a.length,
                        c = d < 0 ? j : f ? d : 0;
                    for (; c < j; c++) {
                        g = a[c];
                        if ((g.selected || c === d) && (dv.optDisabled ? !g.disabled : g.getAttribute("disabled") === null) && (!g.parentNode.disabled || !b8.nodeName(g.parentNode, "optgroup"))) {
                            h = b8(g).val();
                            if (f) {
                                return h
                            }
                            b.push(h)
                        }
                    }
                    return b
                },
                set: function (g, d) {
                    var c, f, h = g.options,
                        a = b8.makeArray(d),
                        b = h.length;
                    while (b--) {
                        f = h[b];
                        if (b8.inArray(b8.valHooks.option.get(f), a) >= 0) {
                            try {
                                f.selected = c = true
                            } catch (j) {
                                f.scrollHeight
                            }
                        } else {
                            f.selected = false
                        }
                    }
                    if (!c) {
                        g.selectedIndex = -1
                    }
                    return h
                }
            }
        }
    });
    b8.each(["radio", "checkbox"], function () {
        b8.valHooks[this] = {
            set: function (b, a) {
                if (b8.isArray(a)) {
                    return (b.checked = b8.inArray(b8(b).val(), a) >= 0)
                }
            }
        };
        if (!dv.checkOn) {
            b8.valHooks[this].get = function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    });
    var eG, ec, cZ = b8.expr.attrHandle,
        cA = /^(?:checked|selected)$/i,
        cV = dv.getSetAttribute,
        ej = dv.input;
    b8.fn.extend({
        attr: function (b, a) {
            return cK(this, b8.attr, b, a, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                b8.removeAttr(this, a)
            })
        }
    });
    b8.extend({
        attr: function (d, f, c) {
            var b, g, a = d.nodeType;
            if (!d || a === 3 || a === 8 || a === 2) {
                return
            }
            if (typeof d.getAttribute === cn) {
                return b8.prop(d, f, c)
            }
            if (a !== 1 || !b8.isXMLDoc(d)) {
                f = f.toLowerCase();
                b = b8.attrHooks[f] || (b8.expr.match.bool.test(f) ? ec : eG)
            }
            if (c !== undefined) {
                if (c === null) {
                    b8.removeAttr(d, f)
                } else {
                    if (b && "set" in b && (g = b.set(d, c, f)) !== undefined) {
                        return g
                    } else {
                        d.setAttribute(f, c + "");
                        return c
                    }
                }
            } else {
                if (b && "get" in b && (g = b.get(d, f)) !== null) {
                    return g
                } else {
                    g = b8.find.attr(d, f);
                    return g == null ? undefined : g
                }
            }
        },
        removeAttr: function (f, d) {
            var c, b, g = 0,
                a = d && d.match(cP);
            if (a && f.nodeType === 1) {
                while ((c = a[g++])) {
                    b = b8.propFix[c] || c;
                    if (b8.expr.match.bool.test(c)) {
                        if (ej && cV || !cA.test(c)) {
                            f[b] = false
                        } else {
                            f[b8.camelCase("default-" + c)] = f[b] = false
                        }
                    } else {
                        b8.attr(f, c, "")
                    }
                    f.removeAttribute(cV ? c : b)
                }
            }
        },
        attrHooks: {
            type: {
                set: function (b, a) {
                    if (!dv.radioValue && a === "radio" && b8.nodeName(b, "input")) {
                        var c = b.value;
                        b.setAttribute("type", a);
                        if (c) {
                            b.value = c
                        }
                        return a
                    }
                }
            }
        }
    });
    ec = {
        set: function (a, c, b) {
            if (c === false) {
                b8.removeAttr(a, b)
            } else {
                if (ej && cV || !cA.test(b)) {
                    a.setAttribute(!cV && b8.propFix[b] || b, b)
                } else {
                    a[b8.camelCase("default-" + b)] = a[b] = true
                }
            }
            return b
        }
    };
    b8.each(b8.expr.match.bool.source.match(/\w+/g), function (b, c) {
        var a = cZ[c] || b8.find.attr;
        cZ[c] = ej && cV || !cA.test(c) ? function (h, j, d) {
            var f, g;
            if (!d) {
                g = cZ[j];
                cZ[j] = f;
                f = a(h, j, d) != null ? j.toLowerCase() : null;
                cZ[j] = g
            }
            return f
        } : function (g, d, f) {
            if (!f) {
                return g[b8.camelCase("default-" + d)] ? d.toLowerCase() : null
            }
        }
    });
    if (!ej || !cV) {
        b8.attrHooks.value = {
            set: function (a, c, b) {
                if (b8.nodeName(a, "input")) {
                    a.defaultValue = c
                } else {
                    return eG && eG.set(a, c, b)
                }
            }
        }
    }
    if (!cV) {
        eG = {
            set: function (d, c, a) {
                var b = d.getAttributeNode(a);
                if (!b) {
                    d.setAttributeNode((b = d.ownerDocument.createAttribute(a)))
                }
                b.value = c += "";
                if (a === "value" || c === d.getAttribute(a)) {
                    return c
                }
            }
        };
        cZ.id = cZ.name = cZ.coords = function (d, a, c) {
            var b;
            if (!c) {
                return (b = d.getAttributeNode(a)) && b.value !== "" ? b.value : null
            }
        };
        b8.valHooks.button = {
            get: function (c, a) {
                var b = c.getAttributeNode(a);
                if (b && b.specified) {
                    return b.value
                }
            },
            set: eG.set
        };
        b8.attrHooks.contenteditable = {
            set: function (a, c, b) {
                eG.set(a, c === "" ? false : c, b)
            }
        };
        b8.each(["width", "height"], function (b, a) {
            b8.attrHooks[a] = {
                set: function (c, d) {
                    if (d === "") {
                        c.setAttribute(a, "auto");
                        return d
                    }
                }
            }
        })
    }
    if (!dv.style) {
        b8.attrHooks.style = {
            get: function (a) {
                return a.style.cssText || undefined
            },
            set: function (b, a) {
                return (b.style.cssText = a + "")
            }
        }
    }
    var dT = /^(?:input|select|textarea|button|object)$/i,
        eu = /^(?:a|area)$/i;
    b8.fn.extend({
        prop: function (b, a) {
            return cK(this, b8.prop, b, a, arguments.length > 1)
        },
        removeProp: function (a) {
            a = b8.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = undefined;
                    delete this[a]
                } catch (b) {
                }
            })
        }
    });
    b8.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (f, g, c) {
            var h, b, d, a = f.nodeType;
            if (!f || a === 3 || a === 8 || a === 2) {
                return
            }
            d = a !== 1 || !b8.isXMLDoc(f);
            if (d) {
                g = b8.propFix[g] || g;
                b = b8.propHooks[g]
            }
            if (c !== undefined) {
                return b && "set" in b && (h = b.set(f, c, g)) !== undefined ? h : (f[g] = c)
            } else {
                return b && "get" in b && (h = b.get(f, g)) !== null ? h : f[g]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = b8.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : dT.test(a.nodeName) || eu.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    if (!dv.hrefNormalized) {
        b8.each(["href", "src"], function (b, a) {
            b8.propHooks[a] = {
                get: function (c) {
                    return c.getAttribute(a, 4)
                }
            }
        })
    }
    if (!dv.optSelected) {
        b8.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                if (b) {
                    b.selectedIndex;
                    if (b.parentNode) {
                        b.parentNode.selectedIndex
                    }
                }
                return null
            }
        }
    }
    b8.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        b8.propFix[this.toLowerCase()] = this
    });
    if (!dv.enctype) {
        b8.propFix.enctype = "encoding"
    }
    var cC = /[\t\r\n\f]/g;
    b8.fn.extend({
        addClass: function (b) {
            var h, j, a, k, g, l, f = 0,
                d = this.length,
                c = typeof b === "string" && b;
            if (b8.isFunction(b)) {
                return this.each(function (m) {
                    b8(this).addClass(b.call(this, m, this.className))
                })
            }
            if (c) {
                h = (b || "").match(cP) || [];
                for (; f < d; f++) {
                    j = this[f];
                    a = j.nodeType === 1 && (j.className ? (" " + j.className + " ").replace(cC, " ") : " ");
                    if (a) {
                        g = 0;
                        while ((k = h[g++])) {
                            if (a.indexOf(" " + k + " ") < 0) {
                                a += k + " "
                            }
                        }
                        l = b8.trim(a);
                        if (j.className !== l) {
                            j.className = l
                        }
                    }
                }
            }
            return this
        },
        removeClass: function (b) {
            var h, j, a, k, g, l, f = 0,
                d = this.length,
                c = arguments.length === 0 || typeof b === "string" && b;
            if (b8.isFunction(b)) {
                return this.each(function (m) {
                    b8(this).removeClass(b.call(this, m, this.className))
                })
            }
            if (c) {
                h = (b || "").match(cP) || [];
                for (; f < d; f++) {
                    j = this[f];
                    a = j.nodeType === 1 && (j.className ? (" " + j.className + " ").replace(cC, " ") : "");
                    if (a) {
                        g = 0;
                        while ((k = h[g++])) {
                            while (a.indexOf(" " + k + " ") >= 0) {
                                a = a.replace(" " + k + " ", " ")
                            }
                        }
                        l = b ? b8.trim(a) : "";
                        if (j.className !== l) {
                            j.className = l
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function (c, b) {
            var a = typeof c;
            if (typeof b === "boolean" && a === "string") {
                return b ? this.addClass(c) : this.removeClass(c)
            }
            if (b8.isFunction(c)) {
                return this.each(function (d) {
                    b8(this).toggleClass(c.call(this, d, this.className, b), b)
                })
            }
            return this.each(function () {
                if (a === "string") {
                    var f, g = 0,
                        h = b8(this),
                        d = c.match(cP) || [];
                    while ((f = d[g++])) {
                        if (h.hasClass(f)) {
                            h.removeClass(f)
                        } else {
                            h.addClass(f)
                        }
                    }
                } else {
                    if (a === cn || a === "boolean") {
                        if (this.className) {
                            b8._data(this, "__className__", this.className)
                        }
                        this.className = this.className || c === false ? "" : b8._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function (b) {
            var a = " " + b + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(cC, " ").indexOf(a) >= 0) {
                    return true
                }
            }
            return false
        }
    });
    b8.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function (b, a) {
        b8.fn[a] = function (d, c) {
            return arguments.length > 0 ? this.on(a, null, d, c) : this.trigger(a)
        }
    });
    b8.fn.extend({
        hover: function (b, a) {
            return this.mouseenter(b).mouseleave(a || b)
        },
        bind: function (b, c, a) {
            return this.on(b, null, c, a)
        },
        unbind: function (b, a) {
            return this.off(b, null, a)
        },
        delegate: function (b, a, c, d) {
            return this.on(a, b, c, d)
        },
        undelegate: function (b, a, c) {
            return arguments.length === 1 ? this.off(b, "**") : this.off(a, b || "**", c)
        }
    });
    var cF = b8.now();
    var dK = (/\?/);
    var dm = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    b8.parseJSON = function (b) {
        if (cY.JSON && cY.JSON.parse) {
            return cY.JSON.parse(b + "")
        }
        var c, d = null,
            a = b8.trim(b + "");
        return a && !b8.trim(a.replace(dm, function (g, j, h, f) {
            if (c && j) {
                d = 0
            }
            if (d === 0) {
                return g
            }
            c = h || j;
            d += !f - !h;
            return ""
        })) ? (Function("return " + a))() : b8.error("Invalid JSON: " + b)
    };
    b8.parseXML = function (c) {
        var a, d;
        if (!c || typeof c !== "string") {
            return null
        }
        try {
            if (cY.DOMParser) {
                d = new DOMParser();
                a = d.parseFromString(c, "text/xml")
            } else {
                a = new ActiveXObject("Microsoft.XMLDOM");
                a.async = "false";
                a.loadXML(c)
            }
        } catch (b) {
            a = undefined
        }
        if (!a || !a.documentElement || a.getElementsByTagName("parsererror").length) {
            b8.error("Invalid XML: " + c)
        }
        return a
    };
    var cT, eq, cI = /#.*$/,
        dk = /([?&])_=[^&]*/,
        cs = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        ea = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        dU = /^(?:GET|HEAD)$/,
        dj = /^\/\//,
        eI = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        dE = {},
        cx = {},
        cc = "*/".concat("*");
    try {
        eq = location.href
    } catch (dZ) {
        eq = eA.createElement("a");
        eq.href = "";
        eq = eq.href
    }
    cT = eI.exec(eq.toLowerCase()) || [];

    function dF(a) {
        return function (c, b) {
            if (typeof c !== "string") {
                b = c;
                c = "*"
            }
            var g, f = 0,
                d = c.toLowerCase().match(cP) || [];
            if (b8.isFunction(b)) {
                while ((g = d[f++])) {
                    if (g.charAt(0) === "+") {
                        g = g.slice(1) || "*";
                        (a[g] = a[g] || []).unshift(b)
                    } else {
                        (a[g] = a[g] || []).push(b)
                    }
                }
            }
        }
    }

    function dJ(f, h, b, g) {
        var a = {},
            d = (f === cx);

        function c(k) {
            var j;
            a[k] = true;
            b8.each(f[k] || [], function (m, n) {
                var l = n(h, b, g);
                if (typeof l === "string" && !d && !a[l]) {
                    h.dataTypes.unshift(l);
                    c(l);
                    return false
                } else {
                    if (d) {
                        return !(j = l)
                    }
                }
            });
            return j
        }

        return c(h.dataTypes[0]) || !a["*"] && c("*")
    }

    function eg(f, d) {
        var c, a, b = b8.ajaxSettings.flatOptions || {};
        for (a in d) {
            if (d[a] !== undefined) {
                (b[a] ? f : (c || (c = {})))[a] = d[a]
            }
        }
        if (c) {
            b8.extend(true, f, c)
        }
        return f
    }

    function cj(a, b, f) {
        var k, g, h, d, j = a.contents,
            c = a.dataTypes;
        while (c[0] === "*") {
            c.shift();
            if (g === undefined) {
                g = a.mimeType || b.getResponseHeader("Content-Type")
            }
        }
        if (g) {
            for (d in j) {
                if (j[d] && j[d].test(g)) {
                    c.unshift(d);
                    break
                }
            }
        }
        if (c[0] in f) {
            h = c[0]
        } else {
            for (d in f) {
                if (!c[0] || a.converters[d + " " + c[0]]) {
                    h = d;
                    break
                }
                if (!k) {
                    k = d
                }
            }
            h = h || k
        }
        if (h) {
            if (h !== c[0]) {
                c.unshift(h)
            }
            return f[h]
        }
    }

    function dc(a, k, d, n) {
        var h, l, c, j, m, b = {},
            f = a.dataTypes.slice();
        if (f[1]) {
            for (c in a.converters) {
                b[c.toLowerCase()] = a.converters[c]
            }
        }
        l = f.shift();
        while (l) {
            if (a.responseFields[l]) {
                d[a.responseFields[l]] = k
            }
            if (!m && n && a.dataFilter) {
                k = a.dataFilter(k, a.dataType)
            }
            m = l;
            l = f.shift();
            if (l) {
                if (l === "*") {
                    l = m
                } else {
                    if (m !== "*" && m !== l) {
                        c = b[m + " " + l] || b["* " + l];
                        if (!c) {
                            for (h in b) {
                                j = h.split(" ");
                                if (j[1] === l) {
                                    c = b[m + " " + j[0]] || b["* " + j[0]];
                                    if (c) {
                                        if (c === true) {
                                            c = b[h]
                                        } else {
                                            if (b[h] !== true) {
                                                l = j[0];
                                                f.unshift(j[1])
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (c !== true) {
                            if (c && a["throws"]) {
                                k = c(k)
                            } else {
                                try {
                                    k = c(k)
                                } catch (g) {
                                    return {
                                        state: "parsererror",
                                        error: c ? g : "No conversion from " + m + " to " + l
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: k
        }
    }

    b8.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: eq,
            type: "GET",
            isLocal: ea.test(cT[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": cc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": b8.parseJSON,
                "text xml": b8.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function (a, b) {
            return b ? eg(eg(a, b8.ajaxSettings), b) : eg(b8.ajaxSettings, a)
        },
        ajaxPrefilter: dF(dE),
        ajaxTransport: dF(cx),
        ajax: function (d, h) {
            if (typeof d === "object") {
                h = d;
                d = undefined
            }
            h = h || {};
            var t, r, y, m, a, j, q, g, b = b8.ajaxSetup({}, h),
                k = b.context || b,
                v = b.context && (k.nodeType || k.jquery) ? b8(k) : b8.event,
                l = b8.Deferred(),
                o = b8.Callbacks("once memory"),
                x = b.statusCode || {},
                u = {},
                n = {},
                f = 0,
                c = "canceled",
                s = {
                    readyState: 0,
                    getResponseHeader: function (z) {
                        var A;
                        if (f === 2) {
                            if (!g) {
                                g = {};
                                while ((A = cs.exec(m))) {
                                    g[A[1].toLowerCase()] = A[2]
                                }
                            }
                            A = g[z.toLowerCase()]
                        }
                        return A == null ? null : A
                    },
                    getAllResponseHeaders: function () {
                        return f === 2 ? m : null
                    },
                    setRequestHeader: function (z, A) {
                        var B = z.toLowerCase();
                        if (!f) {
                            z = n[B] = n[B] || z;
                            u[z] = A
                        }
                        return this
                    },
                    overrideMimeType: function (z) {
                        if (!f) {
                            b.mimeType = z
                        }
                        return this
                    },
                    statusCode: function (z) {
                        var A;
                        if (z) {
                            if (f < 2) {
                                for (A in z) {
                                    x[A] = [x[A], z[A]]
                                }
                            } else {
                                s.always(z[s.status])
                            }
                        }
                        return this
                    },
                    abort: function (z) {
                        var A = z || c;
                        if (q) {
                            q.abort(A)
                        }
                        w(0, A);
                        return this
                    }
                };
            l.promise(s).complete = o.add;
            s.success = s.done;
            s.error = s.fail;
            b.url = ((d || b.url || eq) + "").replace(cI, "").replace(dj, cT[1] + "//");
            b.type = h.method || h.type || b.method || b.type;
            b.dataTypes = b8.trim(b.dataType || "*").toLowerCase().match(cP) || [""];
            if (b.crossDomain == null) {
                t = eI.exec(b.url.toLowerCase());
                b.crossDomain = !!(t && (t[1] !== cT[1] || t[2] !== cT[2] || (t[3] || (t[1] === "http:" ? "80" : "443")) !== (cT[3] || (cT[1] === "http:" ? "80" : "443"))))
            }
            if (b.data && b.processData && typeof b.data !== "string") {
                b.data = b8.param(b.data, b.traditional)
            }
            dJ(dE, b, h, s);
            if (f === 2) {
                return s
            }
            j = b8.event && b.global;
            if (j && b8.active++ === 0) {
                b8.event.trigger("ajaxStart")
            }
            b.type = b.type.toUpperCase();
            b.hasContent = !dU.test(b.type);
            y = b.url;
            if (!b.hasContent) {
                if (b.data) {
                    y = (b.url += (dK.test(y) ? "&" : "?") + b.data);
                    delete b.data
                }
                if (b.cache === false) {
                    b.url = dk.test(y) ? y.replace(dk, "$1_=" + cF++) : y + (dK.test(y) ? "&" : "?") + "_=" + cF++
                }
            }
            if (b.ifModified) {
                if (b8.lastModified[y]) {
                    s.setRequestHeader("If-Modified-Since", b8.lastModified[y])
                }
                if (b8.etag[y]) {
                    s.setRequestHeader("If-None-Match", b8.etag[y])
                }
            }
            if (b.data && b.hasContent && b.contentType !== false || h.contentType) {
                s.setRequestHeader("Content-Type", b.contentType)
            }
            s.setRequestHeader("Accept", b.dataTypes[0] && b.accepts[b.dataTypes[0]] ? b.accepts[b.dataTypes[0]] + (b.dataTypes[0] !== "*" ? ", " + cc + "; q=0.01" : "") : b.accepts["*"]);
            for (r in b.headers) {
                s.setRequestHeader(r, b.headers[r])
            }
            if (b.beforeSend && (b.beforeSend.call(k, s, b) === false || f === 2)) {
                return s.abort()
            }
            c = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                s[r](b[r])
            }
            q = dJ(cx, b, h, s);
            if (!q) {
                w(-1, "No Transport")
            } else {
                s.readyState = 1;
                if (j) {
                    v.trigger("ajaxSend", [s, b])
                }
                if (b.async && b.timeout > 0) {
                    a = setTimeout(function () {
                        s.abort("timeout")
                    }, b.timeout)
                }
                try {
                    f = 1;
                    q.send(u, w)
                } catch (p) {
                    if (f < 2) {
                        w(-1, p)
                    } else {
                        throw p
                    }
                }
            }

            function w(z, I, H, B) {
                var D, E, G, A, F, C = I;
                if (f === 2) {
                    return
                }
                f = 2;
                if (a) {
                    clearTimeout(a)
                }
                q = undefined;
                m = B || "";
                s.readyState = z > 0 ? 4 : 0;
                D = z >= 200 && z < 300 || z === 304;
                if (H) {
                    A = cj(b, s, H)
                }
                A = dc(b, A, s, D);
                if (D) {
                    if (b.ifModified) {
                        F = s.getResponseHeader("Last-Modified");
                        if (F) {
                            b8.lastModified[y] = F
                        }
                        F = s.getResponseHeader("etag");
                        if (F) {
                            b8.etag[y] = F
                        }
                    }
                    if (z === 204 || b.type === "HEAD") {
                        C = "nocontent"
                    } else {
                        if (z === 304) {
                            C = "notmodified"
                        } else {
                            C = A.state;
                            E = A.data;
                            G = A.error;
                            D = !G
                        }
                    }
                } else {
                    G = C;
                    if (z || !C) {
                        C = "error";
                        if (z < 0) {
                            z = 0
                        }
                    }
                }
                s.status = z;
                s.statusText = (I || C) + "";
                if (D) {
                    l.resolveWith(k, [E, C, s])
                } else {
                    l.rejectWith(k, [s, C, G])
                }
                s.statusCode(x);
                x = undefined;
                if (j) {
                    v.trigger(D ? "ajaxSuccess" : "ajaxError", [s, b, D ? E : G])
                }
                o.fireWith(k, [s, C]);
                if (j) {
                    v.trigger("ajaxComplete", [s, b]);
                    if (!(--b8.active)) {
                        b8.event.trigger("ajaxStop")
                    }
                }
            }

            return s
        },
        getJSON: function (b, a, c) {
            return b8.get(b, a, c, "json")
        },
        getScript: function (b, a) {
            return b8.get(b, undefined, a, "script")
        }
    });
    b8.each(["get", "post"], function (a, b) {
        b8[b] = function (c, f, d, g) {
            if (b8.isFunction(f)) {
                g = g || d;
                d = f;
                f = undefined
            }
            return b8.ajax({
                url: c,
                type: b,
                dataType: g,
                data: f,
                success: d
            })
        }
    });
    b8._evalUrl = function (a) {
        return b8.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        })
    };
    b8.fn.extend({
        wrapAll: function (b) {
            if (b8.isFunction(b)) {
                return this.each(function (c) {
                    b8(this).wrapAll(b.call(this, c))
                })
            }
            if (this[0]) {
                var a = b8(b, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    a.insertBefore(this[0])
                }
                a.map(function () {
                    var c = this;
                    while (c.firstChild && c.firstChild.nodeType === 1) {
                        c = c.firstChild
                    }
                    return c
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (b8.isFunction(a)) {
                return this.each(function (b) {
                    b8(this).wrapInner(a.call(this, b))
                })
            }
            return this.each(function () {
                var b = b8(this),
                    c = b.contents();
                if (c.length) {
                    c.wrapAll(a)
                } else {
                    b.append(a)
                }
            })
        },
        wrap: function (b) {
            var a = b8.isFunction(b);
            return this.each(function (c) {
                b8(this).wrapAll(a ? b.call(this, c) : b)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                if (!b8.nodeName(this, "body")) {
                    b8(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });
    b8.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || (!dv.reliableHiddenOffsets() && ((a.style && a.style.display) || b8.css(a, "display")) === "none")
    };
    b8.expr.filters.visible = function (a) {
        return !b8.expr.filters.hidden(a)
    };
    var ds = /%20/g,
        c8 = /\[\]$/,
        de = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        ca = /^(?:input|select|textarea|keygen)/i;

    function ek(f, c, a, d) {
        var b;
        if (b8.isArray(c)) {
            b8.each(c, function (g, h) {
                if (a || c8.test(f)) {
                    d(f, h)
                } else {
                    ek(f + "[" + (typeof h === "object" ? g : "") + "]", h, a, d)
                }
            })
        } else {
            if (!a && b8.type(c) === "object") {
                for (b in c) {
                    ek(f + "[" + b + "]", c[b], a, d)
                }
            } else {
                d(f, c)
            }
        }
    }

    b8.param = function (c, f) {
        var d, a = [],
            b = function (h, g) {
                g = b8.isFunction(g) ? g() : (g == null ? "" : g);
                a[a.length] = encodeURIComponent(h) + "=" + encodeURIComponent(g)
            };
        if (f === undefined) {
            f = b8.ajaxSettings && b8.ajaxSettings.traditional
        }
        if (b8.isArray(c) || (c.jquery && !b8.isPlainObject(c))) {
            b8.each(c, function () {
                b(this.name, this.value)
            })
        } else {
            for (d in c) {
                ek(d, c[d], f, b)
            }
        }
        return a.join("&").replace(ds, "+")
    };
    b8.fn.extend({
        serialize: function () {
            return b8.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = b8.prop(this, "elements");
                return a ? b8.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !b8(this).is(":disabled") && ca.test(this.nodeName) && !dn.test(a) && (this.checked || !eD.test(a))
            }).map(function (a, c) {
                var b = b8(this).val();
                return b == null ? null : b8.isArray(b) ? b8.map(b, function (d) {
                    return {
                        name: c.name,
                        value: d.replace(de, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: b.replace(de, "\r\n")
                }
            }).get()
        }
    });
    b8.ajaxSettings.xhr = cY.ActiveXObject !== undefined ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && dV() || en()
    } : dV;
    var ei = 0,
        dC = {},
        b5 = b8.ajaxSettings.xhr();
    if (cY.attachEvent) {
        cY.attachEvent("onunload", function () {
            for (var a in dC) {
                dC[a](undefined, true)
            }
        })
    }
    dv.cors = !!b5 && ("withCredentials" in b5);
    b5 = dv.ajax = !!b5;
    if (b5) {
        b8.ajaxTransport(function (b) {
            if (!b.crossDomain || dv.cors) {
                var a;
                return {
                    send: function (d, h) {
                        var g, f = b.xhr(),
                            c = ++ei;
                        f.open(b.type, b.url, b.async, b.username, b.password);
                        if (b.xhrFields) {
                            for (g in b.xhrFields) {
                                f[g] = b.xhrFields[g]
                            }
                        }
                        if (b.mimeType && f.overrideMimeType) {
                            f.overrideMimeType(b.mimeType)
                        }
                        if (!b.crossDomain && !d["X-Requested-With"]) {
                            d["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (g in d) {
                            if (d[g] !== undefined) {
                                f.setRequestHeader(g, d[g] + "")
                            }
                        }
                        f.send((b.hasContent && b.data) || null);
                        a = function (o, j) {
                            var k, l, n;
                            if (a && (j || f.readyState === 4)) {
                                delete dC[c];
                                a = undefined;
                                f.onreadystatechange = b8.noop;
                                if (j) {
                                    if (f.readyState !== 4) {
                                        f.abort()
                                    }
                                } else {
                                    n = {};
                                    k = f.status;
                                    if (typeof f.responseText === "string") {
                                        n.text = f.responseText
                                    }
                                    try {
                                        l = f.statusText
                                    } catch (m) {
                                        l = ""
                                    }
                                    if (!k && b.isLocal && !b.crossDomain) {
                                        k = n.text ? 200 : 404
                                    } else {
                                        if (k === 1223) {
                                            k = 204
                                        }
                                    }
                                }
                            }
                            if (n) {
                                h(k, l, n, f.getAllResponseHeaders())
                            }
                        };
                        if (!b.async) {
                            a()
                        } else {
                            if (f.readyState === 4) {
                                setTimeout(a)
                            } else {
                                f.onreadystatechange = dC[c] = a
                            }
                        }
                    },
                    abort: function () {
                        if (a) {
                            a(undefined, true)
                        }
                    }
                }
            }
        })
    }

    function dV() {
        try {
            return new cY.XMLHttpRequest()
        } catch (a) {
        }
    }

    function en() {
        try {
            return new cY.ActiveXObject("Microsoft.XMLHTTP")
        } catch (a) {
        }
    }

    b8.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                b8.globalEval(a);
                return a
            }
        }
    });
    b8.ajaxPrefilter("script", function (a) {
        if (a.cache === undefined) {
            a.cache = false
        }
        if (a.crossDomain) {
            a.type = "GET";
            a.global = false
        }
    });
    b8.ajaxTransport("script", function (c) {
        if (c.crossDomain) {
            var b, a = eA.head || b8("head")[0] || eA.documentElement;
            return {
                send: function (f, d) {
                    b = eA.createElement("script");
                    b.async = true;
                    if (c.scriptCharset) {
                        b.charset = c.scriptCharset
                    }
                    b.src = c.url;
                    b.onload = b.onreadystatechange = function (g, h) {
                        if (h || !b.readyState || /loaded|complete/.test(b.readyState)) {
                            b.onload = b.onreadystatechange = null;
                            if (b.parentNode) {
                                b.parentNode.removeChild(b)
                            }
                            b = null;
                            if (!h) {
                                d(200, "success")
                            }
                        }
                    };
                    a.insertBefore(b, a.firstChild)
                },
                abort: function () {
                    if (b) {
                        b.onload(undefined, true)
                    }
                }
            }
        }
    });
    var cg = [],
        ee = /(=)\?(?=&|$)|\?\?/;
    b8.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = cg.pop() || (b8.expando + "_" + (cF++));
            this[a] = true;
            return a
        }
    });
    b8.ajaxPrefilter("json jsonp", function (g, f, d) {
        var b, a, h,
            c = g.jsonp !== false && (ee.test(g.url) ? "url" : typeof g.data === "string" && !(g.contentType || "").indexOf("application/x-www-form-urlencoded") && ee.test(g.data) && "data");
        if (c || g.dataTypes[0] === "jsonp") {
            b = g.jsonpCallback = b8.isFunction(g.jsonpCallback) ? g.jsonpCallback() : g.jsonpCallback;
            if (c) {
                g[c] = g[c].replace(ee, "$1" + b)
            } else {
                if (g.jsonp !== false) {
                    g.url += (dK.test(g.url) ? "&" : "?") + g.jsonp + "=" + b
                }
            }
            g.converters["script json"] = function () {
                if (!h) {
                    b8.error(b + " was not called")
                }
                return h[0]
            };
            g.dataTypes[0] = "json";
            a = cY[b];
            cY[b] = function () {
                h = arguments
            };
            d.always(function () {
                cY[b] = a;
                if (g[b]) {
                    g.jsonpCallback = f.jsonpCallback;
                    cg.push(b)
                }
                if (h && b8.isFunction(a)) {
                    a(h[0])
                }
                h = a = undefined
            });
            return "script"
        }
    });
    b8.parseHTML = function (c, f, d) {
        if (!c || typeof c !== "string") {
            return null
        }
        if (typeof f === "boolean") {
            d = f;
            f = false
        }
        f = f || eA;
        var a = dy.exec(c),
            b = !d && [];
        if (a) {
            return [f.createElement(a[1])]
        }
        a = b8.buildFragment([c], f, b);
        if (b && b.length) {
            b8(b).remove()
        }
        return b8.merge([], a.childNodes)
    };
    var b6 = b8.fn.load;
    b8.fn.load = function (h, g, d) {
        if (typeof h !== "string" && b6) {
            return b6.apply(this, arguments)
        }
        var c, j, b, a = this,
            f = h.indexOf(" ");
        if (f >= 0) {
            c = b8.trim(h.slice(f, h.length));
            h = h.slice(0, f)
        }
        if (b8.isFunction(g)) {
            d = g;
            g = undefined
        } else {
            if (g && typeof g === "object") {
                b = "POST"
            }
        }
        if (a.length > 0) {
            b8.ajax({
                url: h,
                type: b,
                dataType: "html",
                data: g
            }).done(function (k) {
                j = arguments;
                a.html(c ? b8("<div>").append(b8.parseHTML(k)).find(c) : k)
            }).complete(d && function (k, l) {
                a.each(d, j || [k.responseText, l, k])
            })
        }
        return this
    };
    b8.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        b8.fn[b] = function (c) {
            return this.on(b, c)
        }
    });
    b8.expr.filters.animated = function (a) {
        return b8.grep(b8.timers, function (b) {
            return a === b.elem
        }).length
    };
    var dg = cY.document.documentElement;

    function cS(a) {
        return b8.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false
    }

    b8.offset = {
        setOffset: function (l, a, j) {
            var f, n, o, k, m, c, b, g = b8.css(l, "position"),
                h = b8(l),
                d = {};
            if (g === "static") {
                l.style.position = "relative"
            }
            m = h.offset();
            o = b8.css(l, "top");
            c = b8.css(l, "left");
            b = (g === "absolute" || g === "fixed") && b8.inArray("auto", [o, c]) > -1;
            if (b) {
                f = h.position();
                k = f.top;
                n = f.left
            } else {
                k = parseFloat(o) || 0;
                n = parseFloat(c) || 0
            }
            if (b8.isFunction(a)) {
                a = a.call(l, j, m)
            }
            if (a.top != null) {
                d.top = (a.top - m.top) + k
            }
            if (a.left != null) {
                d.left = (a.left - m.left) + n
            }
            if ("using" in a) {
                a.using.call(l, d)
            } else {
                h.css(d)
            }
        }
    };
    b8.fn.extend({
        offset: function (a) {
            if (arguments.length) {
                return a === undefined ? this : this.each(function (h) {
                    b8.offset.setOffset(this, a, h)
                })
            }
            var d, c, f = {
                    top: 0,
                    left: 0
                },
                g = this[0],
                b = g && g.ownerDocument;
            if (!b) {
                return
            }
            d = b.documentElement;
            if (!b8.contains(d, g)) {
                return f
            }
            if (typeof g.getBoundingClientRect !== cn) {
                f = g.getBoundingClientRect()
            }
            c = cS(b);
            return {
                top: f.top + (c.pageYOffset || d.scrollTop) - (d.clientTop || 0),
                left: f.left + (c.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
            }
        },
        position: function () {
            if (!this[0]) {
                return
            }
            var d, c, b = {
                    top: 0,
                    left: 0
                },
                a = this[0];
            if (b8.css(a, "position") === "fixed") {
                c = a.getBoundingClientRect()
            } else {
                d = this.offsetParent();
                c = this.offset();
                if (!b8.nodeName(d[0], "html")) {
                    b = d.offset()
                }
                b.top += b8.css(d[0], "borderTopWidth", true);
                b.left += b8.css(d[0], "borderLeftWidth", true)
            }
            return {
                top: c.top - b.top - b8.css(a, "marginTop", true),
                left: c.left - b.left - b8.css(a, "marginLeft", true)
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || dg;
                while (a && (!b8.nodeName(a, "html") && b8.css(a, "position") === "static")) {
                    a = a.offsetParent
                }
                return a || dg
            })
        }
    });
    b8.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (c, a) {
        var b = /Y/.test(a);
        b8.fn[c] = function (d) {
            return cK(this, function (j, f, g) {
                var h = cS(j);
                if (g === undefined) {
                    return h ? (a in h) ? h[a] : h.document.documentElement[f] : j[f]
                }
                if (h) {
                    h.scrollTo(!b ? g : b8(h).scrollLeft(), b ? g : b8(h).scrollTop())
                } else {
                    j[f] = g
                }
            }, c, d, arguments.length, null)
        }
    });
    b8.each(["top", "left"], function (a, b) {
        b8.cssHooks[b] = ep(dv.pixelPosition, function (d, c) {
            if (c) {
                c = d4(d, b);
                return ev.test(c) ? b8(d).position()[b] + "px" : c
            }
        })
    });
    b8.each({
        Height: "height",
        Width: "width"
    }, function (b, a) {
        b8.each({
            padding: "inner" + b,
            content: a,
            "": "outer" + b
        }, function (d, c) {
            b8.fn[c] = function (f, g) {
                var h = arguments.length && (d || typeof f !== "boolean"),
                    j = d || (f === true || g === true ? "margin" : "border");
                return cK(this, function (l, m, k) {
                    var n;
                    if (b8.isWindow(l)) {
                        return l.document.documentElement["client" + b]
                    }
                    if (l.nodeType === 9) {
                        n = l.documentElement;
                        return Math.max(l.body["scroll" + b], n["scroll" + b], l.body["offset" + b], n["offset" + b], n["client" + b])
                    }
                    return k === undefined ? b8.css(l, m, j) : b8.style(l, m, k, j)
                }, a, h ? f : undefined, h, null)
            }
        })
    });
    b8.fn.size = function () {
        return this.length
    };
    b8.fn.andSelf = b8.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function () {
            return b8
        })
    }
    var ce = cY.jQuery,
        cG = cY.$;
    b8.noConflict = function (a) {
        if (cY.$ === b8) {
            cY.$ = cG
        }
        if (a && cY.jQuery === b8) {
            cY.jQuery = ce
        }
        return b8
    };
    if (typeof dr === cn) {
        cY.jQuery = cY.$ = b8
    }
    return b8
}));
/*!
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function (W, aa, T) {
    W.migrateMute = 1;
    var ac = {};
    W.migrateWarnings = [];
    if (!W.migrateMute && aa.console && aa.console.log) {
        aa.console.log("JQMIGRATE: Logging is active")
    }
    if (W.migrateTrace === T) {
        W.migrateTrace = true
    }
    W.migrateReset = function () {
        ac = {};
        W.migrateWarnings.length = 0
    };

    function af(a) {
        var b = aa.console;
        if (!ac[a]) {
            ac[a] = true;
            W.migrateWarnings.push(a);
            if (b && b.warn && !W.migrateMute) {
                b.warn("JQMIGRATE: " + a);
                if (W.migrateTrace && b.trace) {
                    b.trace()
                }
            }
        }
    }

    function ae(e, c, a, d) {
        if (Object.defineProperty) {
            try {
                Object.defineProperty(e, c, {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                        af(d);
                        return a
                    },
                    set: function (f) {
                        af(d);
                        a = f
                    }
                });
                return
            } catch (b) {
            }
        }
        W._definePropertyBroken = true;
        e[c] = a
    }

    if (document.compatMode === "BackCompat") {
        af("jQuery is not compatible with Quirks Mode")
    }
    var ag = W("<input/>", {
            size: 1
        }).attr("size") && W.attrFn,
        Y = W.attr,
        J = W.attrHooks.value && W.attrHooks.value.get || function () {
            return null
        },
        Q = W.attrHooks.value && W.attrHooks.value.set || function () {
            return T
        },
        S = /^(?:input|button)$/i,
        K = /^[238]$/,
        V = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        ai = /^(?:checked|selected)$/i;
    ae(W, "attrFn", ag || {}, "jQuery.attrFn is deprecated");
    W.attr = function (b, d, a, c) {
        var e = d.toLowerCase(),
            f = b && b.nodeType;
        if (c) {
            if (Y.length < 4) {
                af("jQuery.fn.attr( props, pass ) is deprecated")
            }
            if (b && !K.test(f) && (ag ? d in ag : W.isFunction(W.fn[d]))) {
                return W(b)[d](a)
            }
        }
        if (d === "type" && a !== T && S.test(b.nodeName) && b.parentNode) {
            af("Can't change the 'type' of an input or button in IE 6/7/8")
        }
        if (!W.attrHooks[e] && V.test(e)) {
            W.attrHooks[e] = {
                get: function (i, j) {
                    var g, h = W.prop(i, j);
                    return h === true || typeof h !== "boolean" && (g = i.getAttributeNode(j)) && g.nodeValue !== false ? j.toLowerCase() : T
                },
                set: function (i, g, j) {
                    var h;
                    if (g === false) {
                        W.removeAttr(i, j)
                    } else {
                        h = W.propFix[j] || j;
                        if (h in i) {
                            i[h] = true
                        }
                        i.setAttribute(j, j.toLowerCase())
                    }
                    return j
                }
            };
            if (ai.test(e)) {
                af("jQuery.fn.attr('" + e + "') may use property instead of attribute")
            }
        }
        return Y.call(W, b, d, a)
    };
    W.attrHooks.value = {
        get: function (b, c) {
            var a = (b.nodeName || "").toLowerCase();
            if (a === "button") {
                return J.apply(this, arguments)
            }
            if (a !== "input" && a !== "option") {
                af("jQuery.fn.attr('value') no longer gets properties")
            }
            return c in b ? b.value : null
        },
        set: function (c, b) {
            var a = (c.nodeName || "").toLowerCase();
            if (a === "button") {
                return Q.apply(this, arguments)
            }
            if (a !== "input" && a !== "option") {
                af("jQuery.fn.attr('value', val) no longer sets properties")
            }
            c.value = b
        }
    };
    var U, I, G = W.fn.init,
        ak = W.parseJSON,
        O = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    W.fn.init = function (b, c, d) {
        var a;
        if (b && typeof b === "string" && !W.isPlainObject(c) && (a = O.exec(W.trim(b))) && a[0]) {
            if (b.charAt(0) !== "<") {
                af("$(html) HTML strings must start with '<' character")
            }
            if (a[3]) {
                af("$(html) HTML text after last tag is ignored")
            }
            if (a[0].charAt(0) === "#") {
                af("HTML string cannot start with a '#' character");
                W.error("JQMIGRATE: Invalid selector string (XSS)")
            }
            if (c && c.context) {
                c = c.context
            }
            if (W.parseHTML) {
                return G.call(this, W.parseHTML(a[2], c, true), c, d)
            }
        }
        return G.apply(this, arguments)
    };
    W.fn.init.prototype = W.fn;
    W.parseJSON = function (a) {
        if (!a && a !== null) {
            af("jQuery.parseJSON requires a valid JSON string");
            return null
        }
        return ak.apply(this, arguments)
    };
    W.uaMatch = function (a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    if (!W.browser) {
        U = W.uaMatch(navigator.userAgent);
        I = {};
        if (U.browser) {
            I[U.browser] = true;
            I.version = U.version
        }
        if (I.chrome) {
            I.webkit = true
        } else {
            if (I.webkit) {
                I.safari = true
            }
        }
        W.browser = I
    }
    ae(W, "browser", W.browser, "jQuery.browser is deprecated");
    W.sub = function () {
        function c(e, d) {
            return new c.fn.init(e, d)
        }

        W.extend(true, c, this);
        c.superclass = this;
        c.fn = c.prototype = this();
        c.fn.constructor = c;
        c.sub = this.sub;
        c.fn.init = function a(e, d) {
            if (d && d instanceof W && !(d instanceof c)) {
                d = c(d)
            }
            return W.fn.init.call(this, e, d, b)
        };
        c.fn.init.prototype = c.fn;
        var b = c(document);
        af("jQuery.sub() is deprecated");
        return c
    };
    W.ajaxSetup({
        converters: {
            "text json": W.parseJSON
        }
    });
    var Z = W.fn.data;
    W.fn.data = function (d) {
        var a, b, c = this[0];
        if (c && d === "events" && arguments.length === 1) {
            a = W.data(c, d);
            b = W._data(c, d);
            if ((a === T || a === b) && b !== T) {
                af("Use of jQuery.fn.data('events') is deprecated");
                return b
            }
        }
        return Z.apply(this, arguments)
    };
    var ab = /\/(java|ecma)script/i,
        R = W.fn.andSelf || W.fn.addBack;
    W.fn.andSelf = function () {
        af("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
        return R.apply(this, arguments)
    };
    if (!W.clean) {
        W.clean = function (i, h, b, f) {
            h = h || document;
            h = !h.nodeType && h[0] || h;
            h = h.ownerDocument || h;
            af("jQuery.clean() is deprecated");
            var e, g, d, a, c = [];
            W.merge(c, W.buildFragment(i, h).childNodes);
            if (b) {
                d = function (j) {
                    if (!j.type || ab.test(j.type)) {
                        return f ? f.push(j.parentNode ? j.parentNode.removeChild(j) : j) : b.appendChild(j)
                    }
                };
                for (e = 0;
                     (g = c[e]) != null; e++) {
                    if (!(W.nodeName(g, "script") && d(g))) {
                        b.appendChild(g);
                        if (typeof g.getElementsByTagName !== "undefined") {
                            a = W.grep(W.merge([], g.getElementsByTagName("script")), d);
                            c.splice.apply(c, [e + 1, 0].concat(a));
                            e += a.length
                        }
                    }
                }
            }
            return c
        }
    }
    var X = W.event.add,
        M = W.event.remove,
        L = W.event.trigger,
        N = W.fn.toggle,
        al = W.fn.live,
        ah = W.fn.die,
        ad = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        aj = new RegExp("\\b(?:" + ad + ")\\b"),
        P = /(?:^|\s)hover(\.\S+|)\b/,
        H = function (a) {
            if (typeof (a) !== "string" || W.event.special.hover) {
                return a
            }
            if (P.test(a)) {
                af("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")
            }
            return a && a.replace(P, "mouseenter$1 mouseleave$1")
        };
    if (W.event.props && W.event.props[0] !== "attrChange") {
        W.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement")
    }
    if (W.event.dispatch) {
        ae(W.event, "handle", W.event.dispatch, "jQuery.event.handle is undocumented and deprecated")
    }
    W.event.add = function (d, a, e, c, b) {
        if (d !== document && aj.test(a)) {
            af("AJAX events should be attached to document: " + a)
        }
        X.call(this, d, H(a || ""), e, c, b)
    };
    W.event.remove = function (c, e, d, b, a) {
        M.call(this, c, H(e) || "", d, b, a)
    };
    W.fn.error = function () {
        var a = Array.prototype.slice.call(arguments, 0);
        af("jQuery.fn.error() is deprecated");
        a.splice(0, 0, "error");
        if (arguments.length) {
            return this.bind.apply(this, a)
        }
        this.triggerHandler.apply(this, a);
        return this
    };
    W.fn.toggle = function (b, d) {
        if (!W.isFunction(b) || !W.isFunction(d)) {
            return N.apply(this, arguments)
        }
        af("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments,
            f = b.guid || W.guid++,
            c = 0,
            a = function (h) {
                var g = (W._data(this, "lastToggle" + b.guid) || 0) % c;
                W._data(this, "lastToggle" + b.guid, g + 1);
                h.preventDefault();
                return e[g].apply(this, arguments) || false
            };
        a.guid = f;
        while (c < e.length) {
            e[c++].guid = f
        }
        return this.click(a)
    };
    W.fn.live = function (c, a, b) {
        af("jQuery.fn.live() is deprecated");
        if (al) {
            return al.apply(this, arguments)
        }
        W(this.context).on(c, this.selector, a, b);
        return this
    };
    W.fn.die = function (b, a) {
        af("jQuery.fn.die() is deprecated");
        if (ah) {
            return ah.apply(this, arguments)
        }
        W(this.context).off(b, this.selector || "**", a);
        return this
    };
    W.event.trigger = function (d, c, a, b) {
        if (!a && !aj.test(d)) {
            af("Global events are undocumented and deprecated")
        }
        return L.call(this, d, c, a || document, b)
    };
    W.each(ad.split("|"), function (a, b) {
        W.event.special[b] = {
            setup: function () {
                var c = this;
                if (c !== document) {
                    W.event.add(document, b + "." + W.guid, function () {
                        W.event.trigger(b, null, c, true)
                    });
                    W._data(this, b, W.guid++)
                }
                return false
            },
            teardown: function () {
                if (this !== document) {
                    W.event.remove(document, b + "." + W._data(this, b))
                }
                return false
            }
        }
    })
})(jQuery, window);
var commonSymbol = "[\\.\\,\\`\\~\\!\\@\\#\\$\\%\\\\^\\&\\*\\(\\)\\-\\_\\=\\+\\[\\{\\]\\}\\\\|\\;\\:\\‘\\’\\“\\”\\<\\>\\/\\?]+";
var spliter = ",";

function showoff(b) {
    var a = b.split("_");
    if (a[0] != "password") {
        jQuery("#" + a[0] + "_error").hide();
        jQuery("#" + a[0] + "_tip").show()
    }
    jQuery("#" + b + "").hide()
}

function trim(a) {
    return a.replace(/(^\s*)|(\s*$)/g, "")
}

function ltrim(a) {
    return a.replace(/(^\s*)/g, "")
}

function rtrim(a) {
    return a.replace(/(\s*$)/g, "")
}

function isSameWord(b) {
    var d;
    if (b != null && b != "") {
        d = b.charCodeAt(0);
        d = "\\" + d.toString(8);
        var c = "[" + d + "]{" + (b.length) + "}";
        var a = new RegExp(c);
        return a.test(b)
    }
    return true
}

function hideOtherTips(a) {
    if (jQuery("#" + a + "").val() == "") {
        jQuery("#" + a + "_error").hide();
        jQuery("#" + a + "_tip").show()
    }
    jQuery("#" + a + "").parents("li").removeClass("cur_error")
}

function check_email() {
    var a = jQuery("#email").val();
    if (a == "" || a == "请输入邮箱地址") {
        return 1
    }
    var b = /^\w[\w\$\^\(\)\[\]\{\}\.\-\+,]{0,100}@([a-zA-Z0-9][\w\-]*\.)+[a-zA-Z]{2,6}$/;
    if (!b.test(a)) {
        return 2
    }
    if (a.length > 90) {
        return 3
    }
    if ((/@yahoo.cn$\b/).test(a.toLowerCase()) || (/@yahoo.com.cn$\b/).test(a.toLowerCase())) {
        return 4
    }
    return 0
}

function checkEmailOnBlur() {
    var a = check_email();
    if (a == 1) {
        showEmailError("不能为空")
    } else {
        if (a == 2) {
            showEmailError("格式错误，请输入正确的邮箱")
        } else {
            if (a == 3) {
                showEmailError("邮箱长度不能超过90位字符")
            } else {
                if (a == 4) {
                    showEmailError("雅虎中国邮箱已停用，请更换邮箱注册")
                } else {
                    $.ajax({
                        type: "POST",
                        url: "/check/register_check_email.do",
                        data: {
                            userEmail: encrypt.encrypt($("#email").val()),
                            is_jab: "true",
                            captchaToken: window.jab ? window.jab.getData() : "",
                            jab_st: window.jab_st
                        },
                        success: function (b) {
                            if (b.checkResult == 0) {
                                jQuery("#email_tip").hide();
                                jQuery("#email_error").hide();
                                $("#email_desc").css("display", "block");
                                jQuery("#email").parents("li").removeClass("cur_error")
                            } else {
                                if (b.checkResult == 1) {
                                    showEmailError("该邮箱已存在，<a href='/src/main/webapp/passport/login_input.do'>登录</a>")
                                } else {
                                    if (b.checkResult == 2) {
                                        showEmailError("格式错误，请输入正确的邮箱")
                                    } else {
                                        showEmailError("邮箱校验失败，请稍后重试")
                                    }
                                }
                            }
                        }
                    })
                }
            }
        }
    }
}

function check_phone() {
    var a = jQuery("#phone").val();
    if (a == "" || a == "请输入手机号码") {
        return 1
    }
    var b = /^1\d{10}$/;
    if (!b.test(a)) {
        return 2
    }
    return 0
}

function check_pwd1(d) {
    var b = $("#" + d).val();
    if (b == "") {
        return 1
    }
    if (b.length > 20) {
        return 2
    }
    if (b.length < 6) {
        return 3
    }
    var e = /\s+/;
    if (e.test(b)) {
        return 4
    }
    var g = /^[0-9]+$/;
    if (g.test(b)) {
        return 5
    }
    var h = /^[a-zA-Z]+$/;
    if (h.test(b)) {
        return 6
    }
    var c = /^[^0-9A-Za-z]+$/;
    if (c.test(b)) {
        return 7
    }
    if (isSameWord(b)) {
        return 8
    }
    var a = "^[\\da-zA-Z\\.\\,\\`\\~\\!\\@\\#\\$\\%\\\\^\\&\\*\\(\\)\\-\\_\\=\\+\\[\\{\\]\\}\\\\|\\;\\:\\'\\'\\\"\\\"\\<\\>\\/\\?]+$";
    var f = new RegExp(a);
    if (!f.test(b)) {
        return 10
    }
    return 0
}

function check_pwd2(a) {
    var c = $("#" + a).val();
    var b = $("#" + a + "2").val();
    if (b == "") {
        return 1
    }
    if (c != b) {
        return 2
    }
    return 0
}

function check_referer() {
    var a = $("#referer").val().replace(/(^ *)|( *$)/g, "");
    if (a != "") {
        if ($("#refererDesc").html().indexOf("image") == -1) {
            return 1
        }
    }
}

function showErrorInfo(b, a) {
    jQuery("#" + b + "").html("<u></u>" + a + "").show();
    jQuery("#" + b + "").parents("li").addClass("cur_error");
    var c = b.split("_");
    jQuery("#" + c[0] + "_desc").hide()
}

function showPassError(a, b) {
    jQuery("#" + a + "_tip").hide();
    jQuery("#" + a + "_Level").hide();
    showErrorInfo(a + "_error", b)
}

function showPass2Error(a, b) {
    jQuery("#" + a + "2_tip").hide();
    showErrorInfo(a + "2_error", b)
}

function showEmailError(a) {
    jQuery("#email_tip").hide();
    showErrorInfo("email_error", a)
}

function showPhoneError(a) {
    jQuery("#phone_tip").hide();
    showErrorInfo("phone_error", a)
}

function checkCodeOnBlur(b) {
    var a = jQuery("#" + b).val();
    if (a == "" || a.length != 4) {
        $("#" + b + "_wrong").show();
        jQuery("#" + b + "_wrong").parents("li").addClass("cur_error")
    }
}

function checkPhoneOnBlur() {
    var a = check_phone();
    if (a == 1) {
        showPhoneError("不能为空")
    } else {
        if (a == 2) {
            showPhoneError("格式错误，请输入正确的手机号码")
        } else {
            var b = encrypt.encrypt($("#phone").val());
            $.ajax({
                type: "POST",
                url: "/check/check_phone.do",
                data: {
                    validPhone: b
                },
                success: function (c) {
                    if (c.checkResult == 0) {
                        jQuery("#phone_tip").hide();
                        $("#phone_desc").css("display", "block");
                        jQuery("#phone").parents("li").removeClass("cur_error")
                    } else {
                        if (c.checkResult == 1) {
                            showPhoneError("该手机号已存在，<a href='/src/main/webapp/passport/login_input.do'>登录</a>")
                        } else {
                            if (c.checkResult == -1) {
                                alert("系统异常,请稍后再试")
                            }
                        }
                    }
                }
            })
        }
    }
}

function checkPasswordOnBlur(c) {
    hideOtherTips(c);
    var a = check_pwd1(c);
    if (a != 0) {
        jQuery("#" + c + "2").attr("readonly", "readonly")
    }
    if (a == 1) {
        showPassError(c, "密码不能为空")
    } else {
        if (a == 2) {
            showPassError(c, "密码为6-20位字符")
        } else {
            if (a == 3) {
                showPassError(c, "密码为6-20位字符")
            } else {
                if (a == 4) {
                    showPassError(c, "密码中不允许有空格")
                } else {
                    if (a == 5) {
                        showPassError(c, "密码不能全为数字")
                    } else {
                        if (a == 6) {
                            showPassError(c, "密码不能全为字母，请包含至少1个数字或符号 ")
                        } else {
                            if (a == 7) {
                                showPassError(c, "密码不能全为符号")
                            } else {
                                if (a == 8) {
                                    showPassError(c, "密码不能全为相同字符或数字")
                                } else {
                                    var b;
                                    if (c.indexOf("password_mobile") > -1) {
                                        b = {
                                            account: encrypt.encrypt($("#phone").val()),
                                            password: encrypt.encrypt($("#" + c).val())
                                        }
                                    } else {
                                        b = {
                                            account: encrypt.encrypt($("#email").val()),
                                            password: encrypt.encrypt($("#" + c).val())
                                        }
                                    }
                                    jQuery.ajax({
                                        type: "POST",
                                        url: "/check/check_unsafeInfo.do",
                                        data: b,
                                        success: function (d) {
                                            switch (d.checkResult) {
                                                case 1:
                                                    showPassError(c, "您的密码存在安全隐患,请更改 ");
                                                    break;
                                                case 0:
                                                    jQuery("#" + c + "2").removeAttr("readonly");
                                                    break;
                                                default:
                                                    jQuery("#" + c + "2").removeAttr("readonly");
                                                    break
                                            }
                                        }
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function checkPasswordFormatForFindPWD(a) {
    hideOtherTips(a);
    var b = check_pwd1(a);
    if (b != 0) {
        jQuery("#" + a + "2").attr("readonly", "readonly")
    }
    if (b == 1) {
        showPassError(a, "密码不能为空")
    } else {
        if (b == 2) {
            showPassError(a, "密码为6-20位字符")
        } else {
            if (b == 3) {
                showPassError(a, "密码为6-20位字符")
            } else {
                if (b == 4) {
                    showPassError(a, "密码中不允许有空格")
                } else {
                    if (b == 5) {
                        showPassError(a, "密码不能全为数字")
                    } else {
                        if (b == 6) {
                            showPassError(a, "密码不能全为字母，请包含至少1个数字或符号 ")
                        } else {
                            if (b == 7) {
                                showPassError(a, "密码不能全为符号")
                            } else {
                                if (b == 8) {
                                    showPassError(a, "密码不能全为相同字符或数字")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function checkPassword2OnBlur(b) {
    var a = check_pwd2(b);
    if (a == 1) {
        showPass2Error(b, "确认密码不能为空 ")
    } else {
        if (a == 2) {
            showPass2Error(b, "两次密码输入不一致")
        } else {
            $("#" + b + "2_desc").show();
            jQuery("#" + b + "2").parents("li").removeClass("cur_error")
        }
    }
}

function checkRefererOnBlur() {
    var a = $("#referer").val().replace(/(^ *)|( *$)/g, "");
    if (a != "") {
        $("#refererDesc").load("/check/check_referer.do?userAccount=" + encodeURI($("#referer").val()));
        return false
    }
}

function getPassPoint(b) {
    var a = jQuery(b).val();
    var c = checkPassLength(a);
    c = c + checkPassSymbol(a);
    c = c + checkPassNumAndWord(a);
    c = c + (checkPassAll(a));
    c = c + checkPassAlpha(a);
    c = c + checkPassNum(a);
    return c
}

function getPassWordPoint(b) {
    var a = checkPassLength(b);
    a = a + checkPassSymbol(b);
    a = a + checkPassNumAndWord(b);
    a = a + (checkPassAll(b));
    a = a + checkPassAlpha(b);
    a = a + checkPassNum(b);
    return a
}

function checkPassLength(a) {
    if (a.length > 6 && a.length < 8) {
        return 10
    }
    if (a.length >= 8) {
        return 25
    }
    return 0
}

function checkPassSymbol(a) {
    if (getSymbolPattern(2).test(a)) {
        return 25
    } else {
        if (getSymbolPattern(1).test(a)) {
            return 10
        }
    }
    return 0
}

function getSymbolPattern(b) {
    var c = "" + commonSymbol.substr(0, commonSymbol.length - 1) + "{" + b + ",}";
    var a = new RegExp(c);
    return a
}

var patternNumAlpha = /^(?=.*\d.*)(?=.*[a-zA-Z].*)./;

function checkPassNumAndWord(a) {
    if (patternNumAlpha.test(a)) {
        return 5
    }
    return 0
}

function isDigit(b) {
    var a = /(?=.*[0-9])/;
    return getCompareResult(a, b)
}

function isBigWord(b) {
    var a = /(?=.*[A-Z])/;
    return getCompareResult(a, b)
}

function isSymbol(b) {
    var a = "(?=.*" + commonSymbol.substr(0, commonSymbol.length - 1) + ")";
    var c = new RegExp(a);
    return getCompareResult(c, b)
}

function isSmallWord(b) {
    var a = /(?=.*[a-z])/;
    return getCompareResult(a, b)
}

function getCompareResult(a, b) {
    if (a.test(b)) {
        return true
    }
    return false
}

function checkPassAll(a) {
    if (isDigit(a) && isBigWord(a) && isSmallWord(a) && isSymbol(a)) {
        return 5
    }
    if (patternNumAlpha.test(a)) {
        if (isSymbol(a)) {
            return 3
        } else {
            return 2
        }
    }
    return 0
}

function checkPassAlpha(a) {
    var b = /^[a-z]+$|^[A-Z]+$/;
    if (b.test(a)) {
        return 10
    }
    var c = /.*?[A-Z]+?.*?[a-z]+?.*?|.*?[a-z]+?.*[A-Z]+?.*?/;
    if (c.test(a)) {
        return 25
    }
    return 0
}

function checkPassNum(a) {
    if (getNumPattern(3).test(a)) {
        return 20
    }
    if (getNumPattern(1).test(a)) {
        return 10
    }
    return 0
}

function getNumPattern(b) {
    var c = "[0-9]{" + b + ",}";
    var a = new RegExp(c);
    return a
}

function refresh_valid_code(b, d) {
    var a = $("img[name='valid_code_pic']");
    if (a) {
        var c = "/passport/valid_code.do";
        if (valid_code_service_flag == 1) {
            getValidateSigAndSetImageSrc(a, b, d)
        } else {
            a.attr("src", c + "?t=" + Math.random())
        }
    }
}

function refresh_valid_code1() {
    var b = $("#valid_code_pic");
    if (b) {
        var a = "/passport/valid_code.do";
        if (valid_code_service_flag == 1) {
            getValidateSigAndSetImageSrc(b)
        } else {
            b.attr("src", a + "?t=" + Math.random())
        }
    }
}

function getValidateSigAndSetImageSrc(a, b, c) {
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        url: "https://captcha.yhd.com/public/getsig.do?t=" + Math.random(),
        success: function (e) {
            var d = e.sig;
            if (typeof c === "function") {
                c.call(b, d)
            } else {
                jQuery("#validateSig").val(d);
                var f = "https://captcha.yhd.com/public/getjpg.do?sig=" + d;
                a.attr("src", f)
            }
        }
    })
}

function checkAccount_beforeFind() {
    if ($("#login_account").val() == "" || $("#login_account").val() == "请输入邮箱地址" || $("#login_account").val() == "请输入手机号/邮箱/用户名") {
        $("#account_desc").text("请输入您的账号");
        $("#login_account").focus();
        $("#account_desc").show();
        return false
    }
    if ($("#vcd").val() == "") {
        $("#vcd").focus();
        $("#vcd_desc").show();
        jQuery("#vcd_desc").parents("li").addClass("cur_error");
        return false
    }
    if ($("#vcd").val().length != 4) {
        $("#vcd").focus();
        $("#vcd_desc").attr("style", "display:inline-block");
        return false
    }
    return true
}

function doEnter() {
    $("#vcd,#login_button").keydown(function (a) {
        a.stopPropagation();
        if (a.keyCode == 13) {
            if (jQuery.browser.msie && jQuery.browser.version == "6.0") {
                double_submit()
            } else {
                jQuery("#login_button").click()
            }
        }
    })
}

function confirmUser() {
    if (!checkAccount_beforeFind()) {
        return false
    }
    var c = {
        account: $("#login_account").val(),
        validCode: $("#vcd").val(),
        sig: jQuery("#validateSig").val()
    };
    var b = "/passport/confirmUserForFindPwd.do";
    var a = "/passport/chooseFindType.do";
    jQuery.post(b, c, function (d) {
        if (d) {
            if (d.errorCode == "00000000") {
                window.location = a
            }
            if (d.errorCode == "00000001") {
                refresh_valid_code1();
                $("#vcd").focus();
                $("#vcd_desc").show();
                jQuery("#vcd_desc").parents("li").addClass("cur_error");
                return
            }
            if (d.errorCode == "00000002") {
                refresh_valid_code1();
                $("#account_desc").text("您输入的账号未找到记录");
                $("#account_desc").show();
                $("#login_account").focus();
                return
            }
            if (d.errorCode == "00000003") {
                refresh_valid_code1();
                $("#account_desc").text("您的账户异常，预计1个工作日内处理完毕");
                $("#account_desc").show();
                $("#login_account").focus();
                return
            }
            if (d.errorCode == "00000004") {
                refresh_valid_code1();
                $("#account_desc").text("未注册邮箱及绑定手机，请致电400-007-1111找回密码");
                $("#account_desc").show();
                $("#login_account").focus();
                return
            }
            if (d.errorCode == "00000012") {
                refresh_valid_code1();
                $("#account_desc").text("您的账号有安全风险已冻结，请致电400-007-1111解冻");
                $("#account_desc").show();
                $("#login_account").focus();
                return
            }
        }
    })
}

function checkRefererLink() {
    var a = location.search;
    if (a.indexOf("rlink") != -1) {
        $("#referer").attr("readonly", "readonly")
    }
}

function checkPassWordContent(b) {
    jQuery("#" + b).parents("li").removeClass("cur_error");
    var a = jQuery("#" + b).val();
    if (a.length > 0) {
        changePassStrong(b)
    } else {
        hideOtherTips(b)
    }
}

function passwordOnFocus(b) {
    var a = jQuery("#" + b);
    if (a.val() == "") {
        hideOtherTips(b);
        return
    }
    checkPassWordContent(b);
    hideOtherTips(b + "2");
    showoff(b + "2_desc")
}

function changePassStrong(b) {
    var a = jQuery("#" + b);
    if (check_pwd1(b) == 0) {
        jQuery("#" + b + "2").removeAttr("readonly");
        jQuery("#" + b + "2").css("background-color", a.css("background-color"))
    } else {
        jQuery("#" + b + "2").attr("readonly", "readonly");
        jQuery("#" + b + "2").css("background-color", "#D2D2D5")
    }
    if (a.val().length == 0) {
        jQuery("#" + b + "_Level").hide();
        hideOtherTips(b);
        return
    } else {
        jQuery("#" + b + "_tip").hide();
        jQuery("#" + b + "_error").hide()
    }
}

function updatePwdPage() {
    var b = jQuery("#validPhoneCode").val();
    if (b == "" || b.length != 6) {
        $("#validPhoneCode_wrong").show();
        jQuery("#validPhoneCode_wrong").parents("li").addClass("cur_error");
        return
    }
    var c = {
        mobileValidCode: b
    };
    var a = "/passport/validateMobileCheckCode.do";
    jQuery.post(a, c, function (d) {
        if (d) {
            if (d.errorCode == "00000000") {
                window.location = "../src/main/webapp/passport/updatePwdUseMobileInput.do";
                return
            }
            if (d.errorCode == "00000008") {
                $("#validPhoneCode_wrong").show();
                jQuery("#validPhoneCode_wrong").parents("li").addClass("cur_error");
                return
            }
            if (d.errorCode == "00000009") {
                $("#validPhoneCode_wrong").show();
                jQuery("#validPhoneCode_wrong").parents("li").addClass("cur_error");
                return
            }
            if (d.errorCode == "00000010") {
                $("#validPhoneCode_wrong").show();
                jQuery("#validPhoneCode_wrong").parents("li").addClass("cur_error");
                return
            }
            if (d.errorCode == "00000011") {
                $("#validPhoneCode_wrong").show();
                jQuery("#validPhoneCode_wrong").parents("li").addClass("cur_error");
                return
            }
        }
    })
}

function updatePwdSubmit() {
    var b = check_pwd1("password");
    if (b == 1) {
        showPassError("password", "密码不能为空");
        return false
    }
    if (b == 2) {
        showPassError("password", "密码为6-20位字符");
        return false
    }
    if (b == 3) {
        showPassError("password", "密码为6-20位字符");
        return false
    }
    if (b == 4) {
        showPassError("password", "密码中不允许有空格");
        return false
    }
    if (b == 5) {
        showPassError("password", "密码不能全为数字");
        return false
    }
    if (b == 6) {
        showPassError("password", "密码不能全为字母，请包含至少1个数字或符号 ");
        return false
    }
    if (b == 7) {
        showPassError("password", "密码不能全为符号");
        return false
    }
    if (b == 8) {
        showPassError("password", "密码不能全为相同字符或数字");
        return false
    }
    var a = check_pwd2("password");
    if (a == 1) {
        showPass2Error("password", "确认密码不能为空");
        return false
    } else {
        if (a == 2) {
            showPass2Error("password", "两次密码输入不一致");
            return false
        }
    }
    return true
};
var JSEncryptExports = {};
(function (a6) {
    var dQ;
    var dg = 244837814094590;
    var dE = ((dg & 16777215) == 15715070);

    function a8(c, b, a) {
        if (c != null) {
            if ("number" == typeof c) {
                this.fromNumber(c, b, a)
            } else {
                if (b == null && "string" != typeof c) {
                    this.fromString(c, 256)
                } else {
                    this.fromString(c, b)
                }
            }
        }
    }

    function dG() {
        return new a8(null)
    }

    function dh(b, d, f, c, g, e) {
        while (--e >= 0) {
            var a = d * this[b++] + f[c] + g;
            g = Math.floor(a / 67108864);
            f[c++] = a & 67108863
        }
        return g
    }

    function cX(d, h, g, e, k, f) {
        var b = h & 32767,
            j = h >> 15;
        while (--f >= 0) {
            var c = this[d] & 32767;
            var i = this[d++] >> 15;
            var a = j * c + i * b;
            c = b * c + ((a & 32767) << 15) + g[e] + (k & 1073741823);
            k = (c >>> 30) + (a >>> 15) + j * i + (k >>> 30);
            g[e++] = c & 1073741823
        }
        return k
    }

    function d6(d, h, g, e, k, f) {
        var b = h & 16383,
            j = h >> 14;
        while (--f >= 0) {
            var c = this[d] & 16383;
            var i = this[d++] >> 14;
            var a = j * c + i * b;
            c = b * c + ((a & 16383) << 14) + g[e] + k;
            k = (c >> 28) + (a >> 14) + j * i;
            g[e++] = c & 268435455
        }
        return k
    }

    if (dE && (navigator.appName == "Microsoft Internet Explorer")) {
        a8.prototype.am = cX;
        dQ = 30
    } else {
        if (dE && (navigator.appName != "Netscape")) {
            a8.prototype.am = dh;
            dQ = 26
        } else {
            a8.prototype.am = d6;
            dQ = 28
        }
    }
    a8.prototype.DB = dQ;
    a8.prototype.DM = ((1 << dQ) - 1);
    a8.prototype.DV = (1 << dQ);
    var cL = 52;
    a8.prototype.FV = Math.pow(2, cL);
    a8.prototype.F1 = cL - dQ;
    a8.prototype.F2 = 2 * dQ - cL;
    var dk = "0123456789abcdefghijklmnopqrstuvwxyz";
    var b1 = new Array();
    var dt, dw;
    dt = "0".charCodeAt(0);
    for (dw = 0; dw <= 9; ++dw) {
        b1[dt++] = dw
    }
    dt = "a".charCodeAt(0);
    for (dw = 10; dw < 36; ++dw) {
        b1[dt++] = dw
    }
    dt = "A".charCodeAt(0);
    for (dw = 10; dw < 36; ++dw) {
        b1[dt++] = dw
    }

    function dp(a) {
        return dk.charAt(a)
    }

    function cy(c, b) {
        var a = b1[c.charCodeAt(b)];
        return (a == null) ? -1 : a
    }

    function dX(b) {
        for (var a = this.t - 1; a >= 0; --a) {
            b[a] = this[a]
        }
        b.t = this.t;
        b.s = this.s
    }

    function d8(a) {
        this.t = 1;
        this.s = (a < 0) ? -1 : 0;
        if (a > 0) {
            this[0] = a
        } else {
            if (a < -1) {
                this[0] = a + DV
            } else {
                this.t = 0
            }
        }
    }

    function bX(a) {
        var b = dG();
        b.fromInt(a);
        return b
    }

    function cR(f, g) {
        var c;
        if (g == 16) {
            c = 4
        } else {
            if (g == 8) {
                c = 3
            } else {
                if (g == 256) {
                    c = 8
                } else {
                    if (g == 2) {
                        c = 1
                    } else {
                        if (g == 32) {
                            c = 5
                        } else {
                            if (g == 4) {
                                c = 2
                            } else {
                                this.fromRadix(f, g);
                                return
                            }
                        }
                    }
                }
            }
        }
        this.t = 0;
        this.s = 0;
        var b = f.length,
            d = false,
            e = 0;
        while (--b >= 0) {
            var a = (c == 8) ? f[b] & 255 : cy(f, b);
            if (a < 0) {
                if (f.charAt(b) == "-") {
                    d = true
                }
                continue
            }
            d = false;
            if (e == 0) {
                this[this.t++] = a
            } else {
                if (e + c > this.DB) {
                    this[this.t - 1] |= (a & ((1 << (this.DB - e)) - 1)) << e;
                    this[this.t++] = (a >> (this.DB - e))
                } else {
                    this[this.t - 1] |= a << e
                }
            }
            e += c;
            if (e >= this.DB) {
                e -= this.DB
            }
        }
        if (c == 8 && (f[0] & 128) != 0) {
            this.s = -1;
            if (e > 0) {
                this[this.t - 1] |= ((1 << (this.DB - e)) - 1) << e
            }
        }
        this.clamp();
        if (d) {
            a8.ZERO.subTo(this, this)
        }
    }

    function cA() {
        var a = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == a) {
            --this.t
        }
    }

    function cr(g) {
        if (this.s < 0) {
            return "-" + this.negate().toString(g)
        }
        var b;
        if (g == 16) {
            b = 4
        } else {
            if (g == 8) {
                b = 3
            } else {
                if (g == 2) {
                    b = 1
                } else {
                    if (g == 32) {
                        b = 5
                    } else {
                        if (g == 4) {
                            b = 2
                        } else {
                            return this.toRadix(g)
                        }
                    }
                }
            }
        }
        var d = (1 << b) - 1,
            e, h = false,
            c = "",
            a = this.t;
        var f = this.DB - (a * this.DB) % b;
        if (a-- > 0) {
            if (f < this.DB && (e = this[a] >> f) > 0) {
                h = true;
                c = dp(e)
            }
            while (a >= 0) {
                if (f < b) {
                    e = (this[a] & ((1 << f) - 1)) << (b - f);
                    e |= this[--a] >> (f += this.DB - b)
                } else {
                    e = (this[a] >> (f -= b)) & d;
                    if (f <= 0) {
                        f += this.DB;
                        --a
                    }
                }
                if (e > 0) {
                    h = true
                }
                if (h) {
                    c += dp(e)
                }
            }
        }
        return h ? c : "0"
    }

    function eb() {
        var a = dG();
        a8.ZERO.subTo(this, a);
        return a
    }

    function c6() {
        return (this.s < 0) ? this.negate() : this
    }

    function dC(b) {
        var a = this.s - b.s;
        if (a != 0) {
            return a
        }
        var c = this.t;
        a = c - b.t;
        if (a != 0) {
            return (this.s < 0) ? -a : a
        }
        while (--c >= 0) {
            if ((a = this[c] - b[c]) != 0) {
                return a
            }
        }
        return 0
    }

    function c5(c) {
        var b = 1,
            a;
        if ((a = c >>> 16) != 0) {
            c = a;
            b += 16
        }
        if ((a = c >> 8) != 0) {
            c = a;
            b += 8
        }
        if ((a = c >> 4) != 0) {
            c = a;
            b += 4
        }
        if ((a = c >> 2) != 0) {
            c = a;
            b += 2
        }
        if ((a = c >> 1) != 0) {
            c = a;
            b += 1
        }
        return b
    }

    function dd() {
        if (this.t <= 0) {
            return 0
        }
        return this.DB * (this.t - 1) + c5(this[this.t - 1] ^ (this.s & this.DM))
    }

    function b3(a, c) {
        var b;
        for (b = this.t - 1; b >= 0; --b) {
            c[b + a] = this[b]
        }
        for (b = a - 1; b >= 0; --b) {
            c[b] = 0
        }
        c.t = this.t + a;
        c.s = this.s
    }

    function dR(a, c) {
        for (var b = a; b < this.t; ++b) {
            c[b - a] = this[b]
        }
        c.t = Math.max(this.t - a, 0);
        c.s = this.s
    }

    function ck(e, c) {
        var g = e % this.DB;
        var d = this.DB - g;
        var h = (1 << d) - 1;
        var b = Math.floor(e / this.DB),
            f = (this.s << g) & this.DM,
            a;
        for (a = this.t - 1; a >= 0; --a) {
            c[a + b + 1] = (this[a] >> d) | f;
            f = (this[a] & h) << g
        }
        for (a = b - 1; a >= 0; --a) {
            c[a] = 0
        }
        c[b] = f;
        c.t = this.t + b + 1;
        c.s = this.s;
        c.clamp()
    }

    function ca(f, c) {
        c.s = this.s;
        var b = Math.floor(f / this.DB);
        if (b >= this.t) {
            c.t = 0;
            return
        }
        var g = f % this.DB;
        var d = this.DB - g;
        var e = (1 << g) - 1;
        c[0] = this[b] >> g;
        for (var a = b + 1; a < this.t; ++a) {
            c[a - b - 1] |= (this[a] & e) << d;
            c[a - b] = this[a] >> g
        }
        if (g > 0) {
            c[this.t - b - 1] |= (this.s & e) << d
        }
        c.t = this.t - b;
        c.clamp()
    }

    function dv(c, b) {
        var d = 0,
            e = 0,
            a = Math.min(c.t, this.t);
        while (d < a) {
            e += this[d] - c[d];
            b[d++] = e & this.DM;
            e >>= this.DB
        }
        if (c.t < this.t) {
            e -= c.s;
            while (d < this.t) {
                e += this[d];
                b[d++] = e & this.DM;
                e >>= this.DB
            }
            e += this.s
        } else {
            e += this.s;
            while (d < c.t) {
                e -= c[d];
                b[d++] = e & this.DM;
                e >>= this.DB
            }
            e -= c.s
        }
        b.s = (e < 0) ? -1 : 0;
        if (e < -1) {
            b[d++] = this.DV + e
        } else {
            if (e > 0) {
                b[d++] = e
            }
        }
        b.t = d;
        b.clamp()
    }

    function d5(c, b) {
        var d = this.abs(),
            e = c.abs();
        var a = d.t;
        b.t = a + e.t;
        while (--a >= 0) {
            b[a] = 0
        }
        for (a = 0; a < e.t; ++a) {
            b[a + d.t] = d.am(0, e[a], b, a, 0, d.t)
        }
        b.s = 0;
        b.clamp();
        if (this.s != c.s) {
            a8.ZERO.subTo(b, b)
        }
    }

    function c7(a) {
        var c = this.abs();
        var d = a.t = 2 * c.t;
        while (--d >= 0) {
            a[d] = 0
        }
        for (d = 0; d < c.t - 1; ++d) {
            var b = c.am(d, c[d], a, 2 * d, 0, 1);
            if ((a[d + c.t] += c.am(d + 1, 2 * c[d], a, 2 * d + 1, b, c.t - d - 1)) >= c.DV) {
                a[d + c.t] -= c.DV;
                a[d + c.t + 1] = 1
            }
        }
        if (a.t > 0) {
            a[a.t - 1] += c.am(d, c[d], a, 2 * d, 0, 1)
        }
        a.s = 0;
        a.clamp()
    }

    function cc(n, k, l) {
        var d = n.abs();
        if (d.t <= 0) {
            return
        }
        var j = this.abs();
        if (j.t < d.t) {
            if (k != null) {
                k.fromInt(0)
            }
            if (l != null) {
                this.copyTo(l)
            }
            return
        }
        if (l == null) {
            l = dG()
        }
        var m = dG(),
            q = this.s,
            r = n.s;
        var e = this.DB - c5(d[d.t - 1]);
        if (e > 0) {
            d.lShiftTo(e, m);
            j.lShiftTo(e, l)
        } else {
            d.copyTo(m);
            j.copyTo(l)
        }
        var h = m.t;
        var o = m[h - 1];
        if (o == 0) {
            return
        }
        var i = o * (1 << this.F1) + ((h > 1) ? m[h - 2] >> this.F2 : 0);
        var a = this.FV / i,
            b = (1 << this.F1) / i,
            c = 1 << this.F2;
        var f = l.t,
            g = f - h,
            p = (k == null) ? dG() : k;
        m.dlShiftTo(g, p);
        if (l.compareTo(p) >= 0) {
            l[l.t++] = 1;
            l.subTo(p, l)
        }
        a8.ONE.dlShiftTo(h, p);
        p.subTo(m, m);
        while (m.t < h) {
            m[m.t++] = 0
        }
        while (--g >= 0) {
            var s = (l[--f] == o) ? this.DM : Math.floor(l[f] * a + (l[f - 1] + c) * b);
            if ((l[f] += m.am(0, s, l, g, 0, h)) < s) {
                m.dlShiftTo(g, p);
                l.subTo(p, l);
                while (l[f] < --s) {
                    l.subTo(p, l)
                }
            }
        }
        if (k != null) {
            l.drShiftTo(h, k);
            if (q != r) {
                a8.ZERO.subTo(k, k)
            }
        }
        l.t = h;
        l.clamp();
        if (e > 0) {
            l.rShiftTo(e, l)
        }
        if (q < 0) {
            a8.ZERO.subTo(l, l)
        }
    }

    function du(a) {
        var b = dG();
        this.abs().divRemTo(a, null, b);
        if (this.s < 0 && b.compareTo(a8.ZERO) > 0) {
            a.subTo(b, b)
        }
        return b
    }

    function ds(a) {
        this.m = a
    }

    function b2(a) {
        if (a.s < 0 || a.compareTo(this.m) >= 0) {
            return a.mod(this.m)
        } else {
            return a
        }
    }

    function cK(a) {
        return a
    }

    function d4(a) {
        a.divRemTo(this.m, null, a)
    }

    function df(b, a, c) {
        b.multiplyTo(a, c);
        this.reduce(c)
    }

    function b6(a, b) {
        a.squareTo(b);
        this.reduce(b)
    }

    ds.prototype.convert = b2;
    ds.prototype.revert = cK;
    ds.prototype.reduce = d4;
    ds.prototype.mulTo = df;
    ds.prototype.sqrTo = b6;

    function c0() {
        if (this.t < 1) {
            return 0
        }
        var a = this[0];
        if ((a & 1) == 0) {
            return 0
        }
        var b = a & 3;
        b = (b * (2 - (a & 15) * b)) & 15;
        b = (b * (2 - (a & 255) * b)) & 255;
        b = (b * (2 - (((a & 65535) * b) & 65535))) & 65535;
        b = (b * (2 - a * b % this.DV)) % this.DV;
        return (b > 0) ? this.DV - b : -b
    }

    function dV(a) {
        this.m = a;
        this.mp = a.invDigit();
        this.mpl = this.mp & 32767;
        this.mph = this.mp >> 15;
        this.um = (1 << (a.DB - 15)) - 1;
        this.mt2 = 2 * a.t
    }

    function dO(a) {
        var b = dG();
        a.abs().dlShiftTo(this.m.t, b);
        b.divRemTo(this.m, null, b);
        if (a.s < 0 && b.compareTo(a8.ZERO) > 0) {
            this.m.subTo(b, b)
        }
        return b
    }

    function z(a) {
        var b = dG();
        a.copyTo(b);
        this.reduce(b);
        return b
    }

    function ct(c) {
        while (c.t <= this.mt2) {
            c[c.t++] = 0
        }
        for (var a = 0; a < this.m.t; ++a) {
            var d = c[a] & 32767;
            var b = (d * this.mpl + (((d * this.mph + (c[a] >> 15) * this.mpl) & this.um) << 15)) & c.DM;
            d = a + this.m.t;
            c[d] += this.m.am(0, b, c, a, 0, this.m.t);
            while (c[d] >= c.DV) {
                c[d] -= c.DV;
                c[++d]++
            }
        }
        c.clamp();
        c.drShiftTo(this.m.t, c);
        if (c.compareTo(this.m) >= 0) {
            c.subTo(this.m, c)
        }
    }

    function cE(a, b) {
        a.squareTo(b);
        this.reduce(b)
    }

    function d0(b, a, c) {
        b.multiplyTo(a, c);
        this.reduce(c)
    }

    dV.prototype.convert = dO;
    dV.prototype.revert = z;
    dV.prototype.reduce = ct;
    dV.prototype.mulTo = d0;
    dV.prototype.sqrTo = cE;

    function c2() {
        return ((this.t > 0) ? (this[0] & 1) : this.s) == 0
    }

    function dy(g, d) {
        if (g > 4294967295 || g < 1) {
            return a8.ONE
        }
        var f = dG(),
            b = dG(),
            e = d.convert(this),
            c = c5(g) - 1;
        e.copyTo(f);
        while (--c >= 0) {
            d.sqrTo(f, b);
            if ((g & (1 << c)) > 0) {
                d.mulTo(b, e, f)
            } else {
                var a = f;
                f = b;
                b = a
            }
        }
        return d.revert(f)
    }

    function d2(a, c) {
        var b;
        if (a < 256 || c.isEven()) {
            b = new ds(c)
        } else {
            b = new dV(c)
        }
        return this.exp(a, b)
    }

    a8.prototype.copyTo = dX;
    a8.prototype.fromInt = d8;
    a8.prototype.fromString = cR;
    a8.prototype.clamp = cA;
    a8.prototype.dlShiftTo = b3;
    a8.prototype.drShiftTo = dR;
    a8.prototype.lShiftTo = ck;
    a8.prototype.rShiftTo = ca;
    a8.prototype.subTo = dv;
    a8.prototype.multiplyTo = d5;
    a8.prototype.squareTo = c7;
    a8.prototype.divRemTo = cc;
    a8.prototype.invDigit = c0;
    a8.prototype.isEven = c2;
    a8.prototype.exp = dy;
    a8.prototype.toString = cr;
    a8.prototype.negate = eb;
    a8.prototype.abs = c6;
    a8.prototype.compareTo = dC;
    a8.prototype.bitLength = dd;
    a8.prototype.mod = du;
    a8.prototype.modPowInt = d2;
    a8.ZERO = bX(0);
    a8.ONE = bX(1);

    function b0() {
        var a = dG();
        this.copyTo(a);
        return a
    }

    function dj() {
        if (this.s < 0) {
            if (this.t == 1) {
                return this[0] - this.DV
            } else {
                if (this.t == 0) {
                    return -1
                }
            }
        } else {
            if (this.t == 1) {
                return this[0]
            } else {
                if (this.t == 0) {
                    return 0
                }
            }
        }
        return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0]
    }

    function dZ() {
        return (this.t == 0) ? this.s : (this[0] << 24) >> 24
    }

    function ec() {
        return (this.t == 0) ? this.s : (this[0] << 16) >> 16
    }

    function dn(a) {
        return Math.floor(Math.LN2 * this.DB / Math.log(a))
    }

    function cw() {
        if (this.s < 0) {
            return -1
        } else {
            if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) {
                return 0
            } else {
                return 1
            }
        }
    }

    function dA(d) {
        if (d == null) {
            d = 10
        }
        if (this.signum() == 0 || d < 2 || d > 36) {
            return "0"
        }
        var c = this.chunkSize(d);
        var b = Math.pow(d, c);
        var f = bX(b),
            g = dG(),
            e = dG(),
            a = "";
        this.divRemTo(f, g, e);
        while (g.signum() > 0) {
            a = (b + e.intValue()).toString(d).substr(1) + a;
            g.divRemTo(f, g, e)
        }
        return e.intValue().toString(d) + a
    }

    function cH(a, d) {
        this.fromInt(0);
        if (d == null) {
            d = 10
        }
        var f = this.chunkSize(d);
        var e = Math.pow(d, f),
            h = false,
            i = 0,
            b = 0;
        for (var g = 0; g < a.length; ++g) {
            var c = cy(a, g);
            if (c < 0) {
                if (a.charAt(g) == "-" && this.signum() == 0) {
                    h = true
                }
                continue
            }
            b = d * b + c;
            if (++i >= f) {
                this.dMultiply(e);
                this.dAddOffset(b, 0);
                i = 0;
                b = 0
            }
        }
        if (i > 0) {
            this.dMultiply(Math.pow(d, i));
            this.dAddOffset(b, 0)
        }
        if (h) {
            a8.ZERO.subTo(this, this)
        }
    }

    function cJ(c, b, d) {
        if ("number" == typeof b) {
            if (c < 2) {
                this.fromInt(1)
            } else {
                this.fromNumber(c, d);
                if (!this.testBit(c - 1)) {
                    this.bitwiseTo(a8.ONE.shiftLeft(c - 1), c4, this)
                }
                if (this.isEven()) {
                    this.dAddOffset(1, 0)
                }
                while (!this.isProbablePrime(b)) {
                    this.dAddOffset(2, 0);
                    if (this.bitLength() > c) {
                        this.subTo(a8.ONE.shiftLeft(c - 1), this)
                    }
                }
            }
        } else {
            var e = new Array(),
                a = c & 7;
            e.length = (c >> 3) + 1;
            b.nextBytes(e);
            if (a > 0) {
                e[0] &= ((1 << a) - 1)
            } else {
                e[0] = 0
            }
            this.fromString(e, 256)
        }
    }

    function cB() {
        var c = this.t,
            b = new Array();
        b[0] = this.s;
        var d = this.DB - (c * this.DB) % 8,
            e, a = 0;
        if (c-- > 0) {
            if (d < this.DB && (e = this[c] >> d) != (this.s & this.DM) >> d) {
                b[a++] = e | (this.s << (this.DB - d))
            }
            while (c >= 0) {
                if (d < 8) {
                    e = (this[c] & ((1 << d) - 1)) << (8 - d);
                    e |= this[--c] >> (d += this.DB - 8)
                } else {
                    e = (this[c] >> (d -= 8)) & 255;
                    if (d <= 0) {
                        d += this.DB;
                        --c
                    }
                }
                if ((e & 128) != 0) {
                    e |= -256
                }
                if (a == 0 && (this.s & 128) != (e & 128)) {
                    ++a
                }
                if (a > 0 || e != this.s) {
                    b[a++] = e
                }
            }
        }
        return b
    }

    function dY(a) {
        return (this.compareTo(a) == 0)
    }

    function cO(a) {
        return (this.compareTo(a) < 0) ? this : a
    }

    function cQ(a) {
        return (this.compareTo(a) > 0) ? this : a
    }

    function cn(d, f, b) {
        var a, c, e = Math.min(d.t, this.t);
        for (a = 0; a < e; ++a) {
            b[a] = f(this[a], d[a])
        }
        if (d.t < this.t) {
            c = d.s & this.DM;
            for (a = e; a < this.t; ++a) {
                b[a] = f(this[a], c)
            }
            b.t = this.t
        } else {
            c = this.s & this.DM;
            for (a = e; a < d.t; ++a) {
                b[a] = f(c, d[a])
            }
            b.t = d.t
        }
        b.s = f(this.s, d.s);
        b.clamp()
    }

    function dI(a, b) {
        return a & b
    }

    function ce(a) {
        var b = dG();
        this.bitwiseTo(a, dI, b);
        return b
    }

    function c4(a, b) {
        return a | b
    }

    function cY(a) {
        var b = dG();
        this.bitwiseTo(a, c4, b);
        return b
    }

    function cZ(a, b) {
        return a ^ b
    }

    function dl(a) {
        var b = dG();
        this.bitwiseTo(a, cZ, b);
        return b
    }

    function cg(a, b) {
        return a & ~b
    }

    function dM(a) {
        var b = dG();
        this.bitwiseTo(a, cg, b);
        return b
    }

    function ee() {
        var b = dG();
        for (var a = 0; a < this.t; ++a) {
            b[a] = this.DM & ~this[a]
        }
        b.t = this.t;
        b.s = ~this.s;
        return b
    }

    function b9(b) {
        var a = dG();
        if (b < 0) {
            this.rShiftTo(-b, a)
        } else {
            this.lShiftTo(b, a)
        }
        return a
    }

    function bY(b) {
        var a = dG();
        if (b < 0) {
            this.lShiftTo(-b, a)
        } else {
            this.rShiftTo(b, a)
        }
        return a
    }

    function cf(a) {
        if (a == 0) {
            return -1
        }
        var b = 0;
        if ((a & 65535) == 0) {
            a >>= 16;
            b += 16
        }
        if ((a & 255) == 0) {
            a >>= 8;
            b += 8
        }
        if ((a & 15) == 0) {
            a >>= 4;
            b += 4
        }
        if ((a & 3) == 0) {
            a >>= 2;
            b += 2
        }
        if ((a & 1) == 0) {
            ++b
        }
        return b
    }

    function cj() {
        for (var a = 0; a < this.t; ++a) {
            if (this[a] != 0) {
                return a * this.DB + cf(this[a])
            }
        }
        if (this.s < 0) {
            return this.t * this.DB
        }
        return -1
    }

    function dT(a) {
        var b = 0;
        while (a != 0) {
            a &= a - 1;
            ++b
        }
        return b
    }

    function t() {
        var a = 0,
            b = this.s & this.DM;
        for (var c = 0; c < this.t; ++c) {
            a += dT(this[c] ^ b)
        }
        return a
    }

    function bV(b) {
        var a = Math.floor(b / this.DB);
        if (a >= this.t) {
            return (this.s != 0)
        }
        return ((this[a] & (1 << (b % this.DB))) != 0)
    }

    function eh(a, c) {
        var b = a8.ONE.shiftLeft(a);
        this.bitwiseTo(b, c, b);
        return b
    }

    function b7(a) {
        return this.changeBit(a, c4)
    }

    function dz(a) {
        return this.changeBit(a, cg)
    }

    function dP(a) {
        return this.changeBit(a, cZ)
    }

    function db(c, b) {
        var d = 0,
            e = 0,
            a = Math.min(c.t, this.t);
        while (d < a) {
            e += this[d] + c[d];
            b[d++] = e & this.DM;
            e >>= this.DB
        }
        if (c.t < this.t) {
            e += c.s;
            while (d < this.t) {
                e += this[d];
                b[d++] = e & this.DM;
                e >>= this.DB
            }
            e += this.s
        } else {
            e += this.s;
            while (d < c.t) {
                e += c[d];
                b[d++] = e & this.DM;
                e >>= this.DB
            }
            e += c.s
        }
        b.s = (e < 0) ? -1 : 0;
        if (e > 0) {
            b[d++] = e
        } else {
            if (e < -1) {
                b[d++] = this.DV + e
            }
        }
        b.t = d;
        b.clamp()
    }

    function cT(a) {
        var b = dG();
        this.addTo(a, b);
        return b
    }

    function cU(a) {
        var b = dG();
        this.subTo(a, b);
        return b
    }

    function cq(a) {
        var b = dG();
        this.multiplyTo(a, b);
        return b
    }

    function c1() {
        var a = dG();
        this.squareTo(a);
        return a
    }

    function cD(a) {
        var b = dG();
        this.divRemTo(a, b, null);
        return b
    }

    function dm(a) {
        var b = dG();
        this.divRemTo(a, null, b);
        return b
    }

    function dD(b) {
        var a = dG(),
            c = dG();
        this.divRemTo(b, a, c);
        return new Array(a, c)
    }

    function cP(a) {
        this[this.t] = this.am(0, a - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp()
    }

    function dK(b, a) {
        if (b == 0) {
            return
        }
        while (this.t <= a) {
            this[this.t++] = 0
        }
        this[a] += b;
        while (this[a] >= this.DV) {
            this[a] -= this.DV;
            if (++a >= this.t) {
                this[this.t++] = 0
            }
            ++this[a]
        }
    }

    function cN() {
    }

    function dL(a) {
        return a
    }

    function bU(b, a, c) {
        b.multiplyTo(a, c)
    }

    function dq(a, b) {
        a.squareTo(b)
    }

    cN.prototype.convert = dL;
    cN.prototype.revert = dL;
    cN.prototype.mulTo = bU;
    cN.prototype.sqrTo = dq;

    function dN(a) {
        return this.exp(a, new cN())
    }

    function cV(d, b, c) {
        var a = Math.min(this.t + d.t, b);
        c.s = 0;
        c.t = a;
        while (a > 0) {
            c[--a] = 0
        }
        var e;
        for (e = c.t - this.t; a < e; ++a) {
            c[a + this.t] = this.am(0, d[a], c, a, 0, this.t)
        }
        for (e = Math.min(d.t, b); a < e; ++a) {
            this.am(0, d[a], c, a, 0, b - a)
        }
        c.clamp()
    }

    function d1(c, b, a) {
        --b;
        var d = a.t = this.t + c.t - b;
        a.s = 0;
        while (--d >= 0) {
            a[d] = 0
        }
        for (d = Math.max(b - this.t, 0); d < c.t; ++d) {
            a[this.t + d - b] = this.am(b - d, c[d], a, 0, 0, this.t + d - b)
        }
        a.clamp();
        a.drShiftTo(1, a)
    }

    function dH(a) {
        this.r2 = dG();
        this.q3 = dG();
        a8.ONE.dlShiftTo(2 * a.t, this.r2);
        this.mu = this.r2.divide(a);
        this.m = a
    }

    function dr(a) {
        if (a.s < 0 || a.t > 2 * this.m.t) {
            return a.mod(this.m)
        } else {
            if (a.compareTo(this.m) < 0) {
                return a
            } else {
                var b = dG();
                a.copyTo(b);
                this.reduce(b);
                return b
            }
        }
    }

    function a7(a) {
        return a
    }

    function dU(a) {
        a.drShiftTo(this.m.t - 1, this.r2);
        if (a.t > this.m.t + 1) {
            a.t = this.m.t + 1;
            a.clamp()
        }
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
        while (a.compareTo(this.r2) < 0) {
            a.dAddOffset(1, this.m.t + 1)
        }
        a.subTo(this.r2, a);
        while (a.compareTo(this.m) >= 0) {
            a.subTo(this.m, a)
        }
    }

    function de(a, b) {
        a.squareTo(b);
        this.reduce(b)
    }

    function dB(b, a, c) {
        b.multiplyTo(a, c);
        this.reduce(c)
    }

    dH.prototype.convert = dr;
    dH.prototype.revert = a7;
    dH.prototype.reduce = dU;
    dH.prototype.mulTo = dB;
    dH.prototype.sqrTo = de;

    function cW(e, d) {
        var c = e.bitLength(),
            n, l = bX(1),
            k;
        if (c <= 0) {
            return l
        } else {
            if (c < 18) {
                n = 1
            } else {
                if (c < 48) {
                    n = 3
                } else {
                    if (c < 144) {
                        n = 4
                    } else {
                        if (c < 768) {
                            n = 5
                        } else {
                            n = 6
                        }
                    }
                }
            }
        }
        if (c < 8) {
            k = new ds(d)
        } else {
            if (d.isEven()) {
                k = new dH(d)
            } else {
                k = new dV(d)
            }
        }
        var a = new Array(),
            f = 3,
            m = n - 1,
            j = (1 << n) - 1;
        a[1] = k.convert(this);
        if (n > 1) {
            var b = dG();
            k.sqrTo(a[1], b);
            while (f <= j) {
                a[f] = dG();
                k.mulTo(b, a[f - 2], a[f]);
                f += 2
            }
        }
        var p = e.t - 1,
            h, g = true,
            i = dG(),
            o;
        c = c5(e[p]) - 1;
        while (p >= 0) {
            if (c >= m) {
                h = (e[p] >> (c - m)) & j
            } else {
                h = (e[p] & ((1 << (c + 1)) - 1)) << (m - c);
                if (p > 0) {
                    h |= e[p - 1] >> (this.DB + c - m)
                }
            }
            f = n;
            while ((h & 1) == 0) {
                h >>= 1;
                --f
            }
            if ((c -= f) < 0) {
                c += this.DB;
                --p
            }
            if (g) {
                a[h].copyTo(l);
                g = false
            } else {
                while (f > 1) {
                    k.sqrTo(l, i);
                    k.sqrTo(i, l);
                    f -= 2
                }
                if (f > 0) {
                    k.sqrTo(l, i)
                } else {
                    o = l;
                    l = i;
                    i = o
                }
                k.mulTo(i, a[h], l)
            }
            while (p >= 0 && (e[p] & (1 << c)) == 0) {
                k.sqrTo(l, i);
                o = l;
                l = i;
                i = o;
                if (--c < 0) {
                    c = this.DB - 1;
                    --p
                }
            }
        }
        return k.revert(l)
    }

    function ef(b) {
        var d = (this.s < 0) ? this.negate() : this.clone();
        var f = (b.s < 0) ? b.negate() : b.clone();
        if (d.compareTo(f) < 0) {
            var c = d;
            d = f;
            f = c
        }
        var a = d.getLowestSetBit(),
            e = f.getLowestSetBit();
        if (e < 0) {
            return d
        }
        if (a < e) {
            e = a
        }
        if (e > 0) {
            d.rShiftTo(e, d);
            f.rShiftTo(e, f)
        }
        while (d.signum() > 0) {
            if ((a = d.getLowestSetBit()) > 0) {
                d.rShiftTo(a, d)
            }
            if ((a = f.getLowestSetBit()) > 0) {
                f.rShiftTo(a, f)
            }
            if (d.compareTo(f) >= 0) {
                d.subTo(f, d);
                d.rShiftTo(1, d)
            } else {
                f.subTo(d, f);
                f.rShiftTo(1, f)
            }
        }
        if (e > 0) {
            f.lShiftTo(e, f)
        }
        return f
    }

    function cp(b) {
        if (b <= 0) {
            return 0
        }
        var a = this.DV % b,
            d = (this.s < 0) ? b - 1 : 0;
        if (this.t > 0) {
            if (a == 0) {
                d = this[0] % b
            } else {
                for (var c = this.t - 1; c >= 0; --c) {
                    d = (a * d + this[c]) % b
                }
            }
        }
        return d
    }

    function bZ(g) {
        var h = g.isEven();
        if ((this.isEven() && h) || g.signum() == 0) {
            return a8.ZERO
        }
        var b = g.clone(),
            c = this.clone();
        var d = bX(1),
            e = bX(0),
            a = bX(0),
            f = bX(1);
        while (b.signum() != 0) {
            while (b.isEven()) {
                b.rShiftTo(1, b);
                if (h) {
                    if (!d.isEven() || !e.isEven()) {
                        d.addTo(this, d);
                        e.subTo(g, e)
                    }
                    d.rShiftTo(1, d)
                } else {
                    if (!e.isEven()) {
                        e.subTo(g, e)
                    }
                }
                e.rShiftTo(1, e)
            }
            while (c.isEven()) {
                c.rShiftTo(1, c);
                if (h) {
                    if (!a.isEven() || !f.isEven()) {
                        a.addTo(this, a);
                        f.subTo(g, f)
                    }
                    a.rShiftTo(1, a)
                } else {
                    if (!f.isEven()) {
                        f.subTo(g, f)
                    }
                }
                f.rShiftTo(1, f)
            }
            if (b.compareTo(c) >= 0) {
                b.subTo(c, b);
                if (h) {
                    d.subTo(a, d)
                }
                e.subTo(f, e)
            } else {
                c.subTo(b, c);
                if (h) {
                    a.subTo(d, a)
                }
                f.subTo(e, f)
            }
        }
        if (c.compareTo(a8.ONE) != 0) {
            return a8.ZERO
        }
        if (f.compareTo(g) >= 0) {
            return f.subtract(g)
        }
        if (f.signum() < 0) {
            f.addTo(g, f)
        } else {
            return f
        }
        if (f.signum() < 0) {
            return f.add(g)
        } else {
            return f
        }
    }

    var cI = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
    var cC = (1 << 26) / cI[cI.length - 1];

    function da(c) {
        var b, d = this.abs();
        if (d.t == 1 && d[0] <= cI[cI.length - 1]) {
            for (b = 0; b < cI.length; ++b) {
                if (d[0] == cI[b]) {
                    return true
                }
            }
            return false
        }
        if (d.isEven()) {
            return false
        }
        b = 1;
        while (b < cI.length) {
            var a = cI[b],
                e = b + 1;
            while (e < cI.length && a < cC) {
                a *= cI[e++]
            }
            a = d.modInt(a);
            while (b < e) {
                if (a % cI[b++] == 0) {
                    return false
                }
            }
        }
        return d.millerRabin(c)
    }

    function c8(h) {
        var g = this.subtract(a8.ONE);
        var b = g.getLowestSetBit();
        if (b <= 0) {
            return false
        }
        var e = g.shiftRight(b);
        h = (h + 1) >> 1;
        if (h > cI.length) {
            h = cI.length
        }
        var c = dG();
        for (var d = 0; d < h; ++d) {
            c.fromInt(cI[Math.floor(Math.random() * cI.length)]);
            var a = c.modPow(e, this);
            if (a.compareTo(a8.ONE) != 0 && a.compareTo(g) != 0) {
                var f = 1;
                while (f++ < b && a.compareTo(g) != 0) {
                    a = a.modPowInt(2, this);
                    if (a.compareTo(a8.ONE) == 0) {
                        return false
                    }
                }
                if (a.compareTo(g) != 0) {
                    return false
                }
            }
        }
        return true
    }

    a8.prototype.chunkSize = dn;
    a8.prototype.toRadix = dA;
    a8.prototype.fromRadix = cH;
    a8.prototype.fromNumber = cJ;
    a8.prototype.bitwiseTo = cn;
    a8.prototype.changeBit = eh;
    a8.prototype.addTo = db;
    a8.prototype.dMultiply = cP;
    a8.prototype.dAddOffset = dK;
    a8.prototype.multiplyLowerTo = cV;
    a8.prototype.multiplyUpperTo = d1;
    a8.prototype.modInt = cp;
    a8.prototype.millerRabin = c8;
    a8.prototype.clone = b0;
    a8.prototype.intValue = dj;
    a8.prototype.byteValue = dZ;
    a8.prototype.shortValue = ec;
    a8.prototype.signum = cw;
    a8.prototype.toByteArray = cB;
    a8.prototype.equals = dY;
    a8.prototype.min = cO;
    a8.prototype.max = cQ;
    a8.prototype.and = ce;
    a8.prototype.or = cY;
    a8.prototype.xor = dl;
    a8.prototype.andNot = dM;
    a8.prototype.not = ee;
    a8.prototype.shiftLeft = b9;
    a8.prototype.shiftRight = bY;
    a8.prototype.getLowestSetBit = cj;
    a8.prototype.bitCount = t;
    a8.prototype.testBit = bV;
    a8.prototype.setBit = b7;
    a8.prototype.clearBit = dz;
    a8.prototype.flipBit = dP;
    a8.prototype.add = cT;
    a8.prototype.subtract = cU;
    a8.prototype.multiply = cq;
    a8.prototype.divide = cD;
    a8.prototype.remainder = dm;
    a8.prototype.divideAndRemainder = dD;
    a8.prototype.modPow = cW;
    a8.prototype.modInverse = bZ;
    a8.prototype.pow = dN;
    a8.prototype.gcd = ef;
    a8.prototype.isProbablePrime = da;
    a8.prototype.square = c1;

    function cS() {
        this.i = 0;
        this.j = 0;
        this.S = new Array()
    }

    function dF(b) {
        var c, d, a;
        for (c = 0; c < 256; ++c) {
            this.S[c] = c
        }
        d = 0;
        for (c = 0; c < 256; ++c) {
            d = (d + this.S[c] + b[c % b.length]) & 255;
            a = this.S[c];
            this.S[c] = this.S[d];
            this.S[d] = a
        }
        this.i = 0;
        this.j = 0
    }

    function cl() {
        var a;
        this.i = (this.i + 1) & 255;
        this.j = (this.j + this.S[this.i]) & 255;
        a = this.S[this.i];
        this.S[this.i] = this.S[this.j];
        this.S[this.j] = a;
        return this.S[(a + this.S[this.i]) & 255]
    }

    cS.prototype.init = dF;
    cS.prototype.next = cl;

    function di() {
        return new cS()
    }

    var dc = 256;
    var cu;
    var c3;
    var dx;
    if (c3 == null) {
        c3 = new Array();
        dx = 0;
        var dJ;
        if (window.crypto && window.crypto.getRandomValues) {
            var dS = new Uint32Array(256);
            window.crypto.getRandomValues(dS);
            for (dJ = 0; dJ < dS.length; ++dJ) {
                c3[dx++] = dS[dJ] & 255
            }
        }
        var cs = function (b) {
            this.count = this.count || 0;
            if (this.count >= 256 || dx >= dc) {
                if (window.removeEventListener) {
                    window.removeEventListener("mousemove", cs)
                } else {
                    if (window.detachEvent) {
                        window.detachEvent("onmousemove", cs)
                    }
                }
                return
            }
            this.count += 1;
            var a = b.x + b.y;
            c3[dx++] = a & 255
        };
        if (window.addEventListener) {
            window.addEventListener("mousemove", cs)
        } else {
            if (window.attachEvent) {
                window.attachEvent("onmousemove", cs)
            }
        }
    }

    function d7() {
        if (cu == null) {
            cu = di();
            while (dx < dc) {
                var a = Math.floor(65536 * Math.random());
                c3[dx++] = a & 255
            }
            cu.init(c3);
            for (dx = 0; dx < c3.length; ++dx) {
                c3[dx] = 0
            }
            dx = 0
        }
        return cu.next()
    }

    function cb(b) {
        var a;
        for (a = 0; a < b.length; ++a) {
            b[a] = d7()
        }
    }

    function dW() {
    }

    dW.prototype.nextBytes = cb;

    function d9(b, a) {
        return new a8(b, a)
    }

    function ch(a, b) {
        var c = "";
        var d = 0;
        while (d + b < a.length) {
            c += a.substring(d, d + b) + "\n";
            d += b
        }
        return c + a.substring(d, a.length)
    }

    function ed(a) {
        if (a < 16) {
            return "0" + a.toString(16)
        } else {
            return a.toString(16)
        }
    }

    function d3(c, f) {
        if (f < c.length + 11) {
            console.error("Message too long for RSA");
            return null
        }
        var g = new Array();
        var b = c.length - 1;
        while (b >= 0 && f > 0) {
            var d = c.charCodeAt(b--);
            if (d < 128) {
                g[--f] = d
            } else {
                if ((d > 127) && (d < 2048)) {
                    g[--f] = (d & 63) | 128;
                    g[--f] = (d >> 6) | 192
                } else {
                    g[--f] = (d & 63) | 128;
                    g[--f] = ((d >> 6) & 63) | 128;
                    g[--f] = (d >> 12) | 224
                }
            }
        }
        g[--f] = 0;
        var e = new dW();
        var a = new Array();
        while (f > 2) {
            a[0] = 0;
            while (a[0] == 0) {
                e.nextBytes(a)
            }
            g[--f] = a[0]
        }
        g[--f] = 2;
        g[--f] = 0;
        return new a8(g)
    }

    function b5() {
        this.n = null;
        this.e = 0;
        this.d = null;
        this.p = null;
        this.q = null;
        this.dmp1 = null;
        this.dmq1 = null;
        this.coeff = null
    }

    function cM(b, a) {
        if (b != null && a != null && b.length > 0 && a.length > 0) {
            this.n = d9(b, 16);
            this.e = parseInt(a, 16)
        } else {
            console.error("Invalid RSA public key")
        }
    }

    function bT(a) {
        return a.modPowInt(this.e, this.n)
    }

    function cx(a) {
        var c = d3(a, (this.n.bitLength() + 7) >> 3);
        if (c == null) {
            return null
        }
        var b = this.doPublic(c);
        if (b == null) {
            return null
        }
        var d = b.toString(16);
        if ((d.length & 1) == 0) {
            return d
        } else {
            return "0" + d
        }
    }

    b5.prototype.doPublic = bT;
    b5.prototype.setPublic = cM;
    b5.prototype.encrypt = cx;

    function cG(b, d) {
        var e = b.toByteArray();
        var a = 0;
        while (a < e.length && e[a] == 0) {
            ++a
        }
        if (e.length - a != d - 1 || e[a] != 2) {
            return null
        }
        ++a;
        while (e[a] != 0) {
            if (++a >= e.length) {
                return null
            }
        }
        var f = "";
        while (++a < e.length) {
            var c = e[a] & 255;
            if (c < 128) {
                f += String.fromCharCode(c)
            } else {
                if ((c > 191) && (c < 224)) {
                    f += String.fromCharCode(((c & 31) << 6) | (e[a + 1] & 63));
                    ++a
                } else {
                    f += String.fromCharCode(((c & 15) << 12) | ((e[a + 1] & 63) << 6) | (e[a + 2] & 63));
                    a += 2
                }
            }
        }
        return f
    }

    function cv(h, i) {
        var g = new dW();
        var c = h >> 1;
        this.e = parseInt(i, 16);
        var f = new a8(i, 16);
        for (; ;) {
            for (; ;) {
                this.p = new a8(h - c, 1, g);
                if (this.p.subtract(a8.ONE).gcd(f).compareTo(a8.ONE) == 0 && this.p.isProbablePrime(10)) {
                    break
                }
            }
            for (; ;) {
                this.q = new a8(c, 1, g);
                if (this.q.subtract(a8.ONE).gcd(f).compareTo(a8.ONE) == 0 && this.q.isProbablePrime(10)) {
                    break
                }
            }
            if (this.p.compareTo(this.q) <= 0) {
                var a = this.p;
                this.p = this.q;
                this.q = a
            }
            var b = this.p.subtract(a8.ONE);
            var e = this.q.subtract(a8.ONE);
            var d = b.multiply(e);
            if (d.gcd(f).compareTo(a8.ONE) == 0) {
                this.n = this.p.multiply(this.q);
                this.d = f.modInverse(d);
                this.dmp1 = this.d.mod(b);
                this.dmq1 = this.d.mod(e);
                this.coeff = this.q.modInverse(this.p);
                break
            }
        }
    }

    function cd(c) {
        var a = d9(c, 16);
        var b = this.doPrivate(a);
        if (b == null) {
            return null
        }
        return cG(b, (this.n.bitLength() + 7) >> 3)
    }

    b5.prototype.generate = cv;
    b5.prototype.decrypt = cd;
    (function () {
        var c = function (j, d, k) {
            var f = new dW();
            var i = j >> 1;
            this.e = parseInt(d, 16);
            var g = new a8(d, 16);
            var e = this;
            var h = function () {
                var m = function () {
                    if (e.p.compareTo(e.q) <= 0) {
                        var p = e.p;
                        e.p = e.q;
                        e.q = p
                    }
                    var r = e.p.subtract(a8.ONE);
                    var q = e.q.subtract(a8.ONE);
                    var o = r.multiply(q);
                    if (o.gcd(g).compareTo(a8.ONE) == 0) {
                        e.n = e.p.multiply(e.q);
                        e.d = g.modInverse(o);
                        e.dmp1 = e.d.mod(r);
                        e.dmq1 = e.d.mod(q);
                        e.coeff = e.q.modInverse(e.p);
                        setTimeout(function () {
                            k()
                        }, 0)
                    } else {
                        setTimeout(h, 0)
                    }
                };
                var l = function () {
                    e.q = dG();
                    e.q.fromNumberAsync(i, 1, f, function () {
                        e.q.subtract(a8.ONE).gcda(g, function (o) {
                            if (o.compareTo(a8.ONE) == 0 && e.q.isProbablePrime(10)) {
                                setTimeout(m, 0)
                            } else {
                                setTimeout(l, 0)
                            }
                        })
                    })
                };
                var n = function () {
                    e.p = dG();
                    e.p.fromNumberAsync(j - i, 1, f, function () {
                        e.p.subtract(a8.ONE).gcda(g, function (o) {
                            if (o.compareTo(a8.ONE) == 0 && e.p.isProbablePrime(10)) {
                                setTimeout(l, 0)
                            } else {
                                setTimeout(n, 0)
                            }
                        })
                    })
                };
                setTimeout(n, 0)
            };
            setTimeout(h, 0)
        };
        b5.prototype.generateAsync = c;
        var b = function (h, j) {
            var i = (this.s < 0) ? this.negate() : this.clone();
            var k = (h.s < 0) ? h.negate() : h.clone();
            if (i.compareTo(k) < 0) {
                var f = i;
                i = k;
                k = f
            }
            var g = i.getLowestSetBit(),
                e = k.getLowestSetBit();
            if (e < 0) {
                j(i);
                return
            }
            if (g < e) {
                e = g
            }
            if (e > 0) {
                i.rShiftTo(e, i);
                k.rShiftTo(e, k)
            }
            var d = function () {
                if ((g = i.getLowestSetBit()) > 0) {
                    i.rShiftTo(g, i)
                }
                if ((g = k.getLowestSetBit()) > 0) {
                    k.rShiftTo(g, k)
                }
                if (i.compareTo(k) >= 0) {
                    i.subTo(k, i);
                    i.rShiftTo(1, i)
                } else {
                    k.subTo(i, k);
                    k.rShiftTo(1, k)
                }
                if (!(i.signum() > 0)) {
                    if (e > 0) {
                        k.lShiftTo(e, k)
                    }
                    setTimeout(function () {
                        j(k)
                    }, 0)
                } else {
                    setTimeout(d, 0)
                }
            };
            setTimeout(d, 10)
        };
        a8.prototype.gcda = b;
        var a = function (e, h, j, k) {
            if ("number" == typeof h) {
                if (e < 2) {
                    this.fromInt(1)
                } else {
                    this.fromNumber(e, j);
                    if (!this.testBit(e - 1)) {
                        this.bitwiseTo(a8.ONE.shiftLeft(e - 1), c4, this)
                    }
                    if (this.isEven()) {
                        this.dAddOffset(1, 0)
                    }
                    var f = this;
                    var g = function () {
                        f.dAddOffset(2, 0);
                        if (f.bitLength() > e) {
                            f.subTo(a8.ONE.shiftLeft(e - 1), f)
                        }
                        if (f.isProbablePrime(h)) {
                            setTimeout(function () {
                                k()
                            }, 0)
                        } else {
                            setTimeout(g, 0)
                        }
                    };
                    setTimeout(g, 0)
                }
            } else {
                var i = new Array(),
                    d = e & 7;
                i.length = (e >> 3) + 1;
                h.nextBytes(i);
                if (d > 0) {
                    i[0] &= ((1 << d) - 1)
                } else {
                    i[0] = 0
                }
                this.fromString(i, 256)
            }
        };
        a8.prototype.fromNumberAsync = a
    })();
    var L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var cz = "=";

    function cF(a) {
        var d;
        var b;
        var c = "";
        for (d = 0; d + 3 <= a.length; d += 3) {
            b = parseInt(a.substring(d, d + 3), 16);
            c += L.charAt(b >> 6) + L.charAt(b & 63)
        }
        if (d + 1 == a.length) {
            b = parseInt(a.substring(d, d + 1), 16);
            c += L.charAt(b << 2)
        } else {
            if (d + 2 == a.length) {
                b = parseInt(a.substring(d, d + 2), 16);
                c += L.charAt(b >> 2) + L.charAt((b & 3) << 4)
            }
        }
        while ((c.length & 3) > 0) {
            c += cz
        }
        return c
    }

    function ci(b) {
        var d = "";
        var c;
        var a = 0;
        var e;
        for (c = 0; c < b.length; ++c) {
            if (b.charAt(c) == cz) {
                break
            }
            v = L.indexOf(b.charAt(c));
            if (v < 0) {
                continue
            }
            if (a == 0) {
                d += dp(v >> 2);
                e = v & 3;
                a = 1
            } else {
                if (a == 1) {
                    d += dp((e << 2) | (v >> 4));
                    e = v & 15;
                    a = 2
                } else {
                    if (a == 2) {
                        d += dp(e);
                        d += dp(v >> 2);
                        e = v & 3;
                        a = 3
                    } else {
                        d += dp((e << 2) | (v >> 4));
                        d += dp(v & 15);
                        a = 0
                    }
                }
            }
        }
        if (a == 1) {
            d += dp(e << 2)
        }
        return d
    }

    function b8(b) {
        var a = ci(b);
        var d;
        var c = new Array();
        for (d = 0; 2 * d < a.length; ++d) {
            c[d] = parseInt(a.substring(2 * d, 2 * d + 2), 16)
        }
        return c
    }

    /*! asn1-1.0.2.js (c) 2013 Kenji Urushima | kjur.github.com/jsrsasign/license
     */
    ;
    var c9 = c9 || {};
    c9.env = c9.env || {};
    var cm = c9,
        bW = Object.prototype,
        b4 = "[object Function]",
        co = ["toString", "valueOf"];
    c9.env.parseUA = function (c) {
        var b = function (j) {
                var i = 0;
                return parseFloat(j.replace(/\./g, function () {
                    return (i++ == 1) ? "" : "."
                }))
            },
            e = navigator,
            g = {
                ie: 0,
                opera: 0,
                gecko: 0,
                webkit: 0,
                chrome: 0,
                mobile: null,
                air: 0,
                ipad: 0,
                iphone: 0,
                ipod: 0,
                ios: null,
                android: 0,
                webos: 0,
                caja: e && e.cajaVersion,
                secure: false,
                os: null
            },
            d = c || (navigator && navigator.userAgent),
            h = window && window.location,
            f = h && h.href,
            a;
        g.secure = f && (f.toLowerCase().indexOf("https") === 0);
        if (d) {
            if ((/windows|win32/i).test(d)) {
                g.os = "windows"
            } else {
                if ((/macintosh/i).test(d)) {
                    g.os = "macintosh"
                } else {
                    if ((/rhino/i).test(d)) {
                        g.os = "rhino"
                    }
                }
            }
            if ((/KHTML/).test(d)) {
                g.webkit = 1
            }
            a = d.match(/AppleWebKit\/([^\s]*)/);
            if (a && a[1]) {
                g.webkit = b(a[1]);
                if (/ Mobile\//.test(d)) {
                    g.mobile = "Apple";
                    a = d.match(/OS ([^\s]*)/);
                    if (a && a[1]) {
                        a = b(a[1].replace("_", "."))
                    }
                    g.ios = a;
                    g.ipad = g.ipod = g.iphone = 0;
                    a = d.match(/iPad|iPod|iPhone/);
                    if (a && a[0]) {
                        g[a[0].toLowerCase()] = g.ios
                    }
                } else {
                    a = d.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);
                    if (a) {
                        g.mobile = a[0]
                    }
                    if (/webOS/.test(d)) {
                        g.mobile = "WebOS";
                        a = d.match(/webOS\/([^\s]*);/);
                        if (a && a[1]) {
                            g.webos = b(a[1])
                        }
                    }
                    if (/ Android/.test(d)) {
                        g.mobile = "Android";
                        a = d.match(/Android ([^\s]*);/);
                        if (a && a[1]) {
                            g.android = b(a[1])
                        }
                    }
                }
                a = d.match(/Chrome\/([^\s]*)/);
                if (a && a[1]) {
                    g.chrome = b(a[1])
                } else {
                    a = d.match(/AdobeAIR\/([^\s]*)/);
                    if (a) {
                        g.air = a[0]
                    }
                }
            }
            if (!g.webkit) {
                a = d.match(/Opera[\s\/]([^\s]*)/);
                if (a && a[1]) {
                    g.opera = b(a[1]);
                    a = d.match(/Version\/([^\s]*)/);
                    if (a && a[1]) {
                        g.opera = b(a[1])
                    }
                    a = d.match(/Opera Mini[^;]*/);
                    if (a) {
                        g.mobile = a[0]
                    }
                } else {
                    a = d.match(/MSIE\s([^;]*)/);
                    if (a && a[1]) {
                        g.ie = b(a[1])
                    } else {
                        a = d.match(/Gecko\/([^\s]*)/);
                        if (a) {
                            g.gecko = 1;
                            a = d.match(/rv:([^\s\)]*)/);
                            if (a && a[1]) {
                                g.gecko = b(a[1])
                            }
                        }
                    }
                }
            }
        }
        return g
    };
    c9.env.ua = c9.env.parseUA();
    c9.isFunction = function (a) {
        return (typeof a === "function") || bW.toString.apply(a) === b4
    };
    c9._IEEnumFix = (c9.env.ua.ie) ? function (b, c) {
        var d, a, e;
        for (d = 0; d < co.length; d = d + 1) {
            a = co[d];
            e = c[a];
            if (cm.isFunction(e) && e != bW[a]) {
                b[a] = e
            }
        }
    } : function () {
    };
    c9.extend = function (c, b, d) {
        if (!b || !c) {
            throw new Error("extend failed, please check that all dependencies are included.")
        }
        var e = function () {
            },
            a;
        e.prototype = b.prototype;
        c.prototype = new e();
        c.prototype.constructor = c;
        c.superclass = b.prototype;
        if (b.prototype.constructor == bW.constructor) {
            b.prototype.constructor = b
        }
        if (d) {
            for (a in d) {
                if (cm.hasOwnProperty(d, a)) {
                    c.prototype[a] = d[a]
                }
            }
            cm._IEEnumFix(c.prototype, d)
        }
    };
    if (typeof KJUR == "undefined" || !KJUR) {
        KJUR = {}
    }
    if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) {
        KJUR.asn1 = {}
    }
    KJUR.asn1.ASN1Util = new function () {
        this.integerToByteHex = function (a) {
            var b = a.toString(16);
            if ((b.length % 2) == 1) {
                b = "0" + b
            }
            return b
        };
        this.bigIntToMinTwosComplementsHex = function (e) {
            var h = e.toString(16);
            if (h.substr(0, 1) != "-") {
                if (h.length % 2 == 1) {
                    h = "0" + h
                } else {
                    if (!h.match(/^[0-7]/)) {
                        h = "00" + h
                    }
                }
            } else {
                var d = h.substr(1);
                var b = d.length;
                if (b % 2 == 1) {
                    b += 1
                } else {
                    if (!h.match(/^[0-7]/)) {
                        b += 2
                    }
                }
                var g = "";
                for (var c = 0; c < b; c++) {
                    g += "f"
                }
                var a = new a8(g, 16);
                var f = a.xor(e).add(a8.ONE);
                h = f.toString(16).replace(/^-/, "")
            }
            return h
        }
    };
    KJUR.asn1.ASN1Object = function () {
        var b = true;
        var c = null;
        var d = "00";
        var e = "00";
        var a = "";
        this.getLengthHexFromValue = function () {
            if (typeof this.hV == "undefined" || this.hV == null) {
                throw "this.hV is null or undefined."
            }
            if (this.hV.length % 2 == 1) {
                throw "value hex must be even length: n=" + a.length + ",v=" + this.hV
            }
            var f = this.hV.length / 2;
            var g = f.toString(16);
            if (g.length % 2 == 1) {
                g = "0" + g
            }
            if (f < 128) {
                return g
            } else {
                var h = g.length / 2;
                if (h > 15) {
                    throw "ASN.1 length too long to represent by 8x: n = " + f.toString(16)
                }
                var i = 128 + h;
                return i.toString(16) + g
            }
        };
        this.getEncodedHex = function () {
            if (this.hTLV == null || this.isModified) {
                this.hV = this.getFreshValueHex();
                this.hL = this.getLengthHexFromValue();
                this.hTLV = this.hT + this.hL + this.hV;
                this.isModified = false
            }
            return this.hTLV
        };
        this.getValueHex = function () {
            this.getEncodedHex();
            return this.hV
        };
        this.getFreshValueHex = function () {
            return ""
        }
    };
    KJUR.asn1.DERAbstractString = function (a) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
        var c = null;
        var b = null;
        this.getString = function () {
            return this.s
        };
        this.setString = function (d) {
            this.hTLV = null;
            this.isModified = true;
            this.s = d;
            this.hV = stohex(this.s)
        };
        this.setStringHex = function (d) {
            this.hTLV = null;
            this.isModified = true;
            this.s = null;
            this.hV = d
        };
        this.getFreshValueHex = function () {
            return this.hV
        };
        if (typeof a != "undefined") {
            if (typeof a.str != "undefined") {
                this.setString(a.str)
            } else {
                if (typeof a.hex != "undefined") {
                    this.setStringHex(a.hex)
                }
            }
        }
    };
    c9.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERAbstractTime = function (a) {
        KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
        var c = null;
        var b = null;
        this.localDateToUTC = function (d) {
            utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            var e = new Date(utc);
            return e
        };
        this.formatDate = function (l, j) {
            var g = this.zeroPadding;
            var k = this.localDateToUTC(l);
            var i = String(k.getFullYear());
            if (j == "utc") {
                i = i.substr(2, 2)
            }
            var m = g(String(k.getMonth() + 1), 2);
            var h = g(String(k.getDate()), 2);
            var f = g(String(k.getHours()), 2);
            var e = g(String(k.getMinutes()), 2);
            var d = g(String(k.getSeconds()), 2);
            return i + m + h + f + e + d + "Z"
        };
        this.zeroPadding = function (d, e) {
            if (d.length >= e) {
                return d
            }
            return new Array(e - d.length + 1).join("0") + d
        };
        this.getString = function () {
            return this.s
        };
        this.setString = function (d) {
            this.hTLV = null;
            this.isModified = true;
            this.s = d;
            this.hV = stohex(this.s)
        };
        this.setByDateValue = function (i, g, e, f, d, j) {
            var h = new Date(Date.UTC(i, g - 1, e, f, d, j, 0));
            this.setByDate(h)
        };
        this.getFreshValueHex = function () {
            return this.hV
        }
    };
    c9.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERAbstractStructured = function (b) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
        var a = null;
        this.setByASN1ObjectArray = function (c) {
            this.hTLV = null;
            this.isModified = true;
            this.asn1Array = c
        };
        this.appendASN1Object = function (c) {
            this.hTLV = null;
            this.isModified = true;
            this.asn1Array.push(c)
        };
        this.asn1Array = new Array();
        if (typeof b != "undefined") {
            if (typeof b.array != "undefined") {
                this.asn1Array = b.array
            }
        }
    };
    c9.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERBoolean = function () {
        KJUR.asn1.DERBoolean.superclass.constructor.call(this);
        this.hT = "01";
        this.hTLV = "0101ff"
    };
    c9.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERInteger = function (a) {
        KJUR.asn1.DERInteger.superclass.constructor.call(this);
        this.hT = "02";
        this.setByBigInteger = function (b) {
            this.hTLV = null;
            this.isModified = true;
            this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(b)
        };
        this.setByInteger = function (b) {
            var c = new a8(String(b), 10);
            this.setByBigInteger(c)
        };
        this.setValueHex = function (b) {
            this.hV = b
        };
        this.getFreshValueHex = function () {
            return this.hV
        };
        if (typeof a != "undefined") {
            if (typeof a.bigint != "undefined") {
                this.setByBigInteger(a.bigint)
            } else {
                if (typeof a["int"] != "undefined") {
                    this.setByInteger(a["int"])
                } else {
                    if (typeof a.hex != "undefined") {
                        this.setValueHex(a.hex)
                    }
                }
            }
        }
    };
    c9.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERBitString = function (a) {
        KJUR.asn1.DERBitString.superclass.constructor.call(this);
        this.hT = "03";
        this.setHexValueIncludingUnusedBits = function (b) {
            this.hTLV = null;
            this.isModified = true;
            this.hV = b
        };
        this.setUnusedBitsAndHexValue = function (d, c) {
            if (d < 0 || 7 < d) {
                throw "unused bits shall be from 0 to 7: u = " + d
            }
            var b = "0" + d;
            this.hTLV = null;
            this.isModified = true;
            this.hV = b + c
        };
        this.setByBinaryString = function (c) {
            c = c.replace(/0+$/, "");
            var d = 8 - c.length % 8;
            if (d == 8) {
                d = 0
            }
            for (var f = 0; f <= d; f++) {
                c += "0"
            }
            var g = "";
            for (var f = 0; f < c.length - 1; f += 8) {
                var b = c.substr(f, 8);
                var e = parseInt(b, 2).toString(16);
                if (e.length == 1) {
                    e = "0" + e
                }
                g += e
            }
            this.hTLV = null;
            this.isModified = true;
            this.hV = "0" + d + g
        };
        this.setByBooleanArray = function (c) {
            var b = "";
            for (var d = 0; d < c.length; d++) {
                if (c[d] == true) {
                    b += "1"
                } else {
                    b += "0"
                }
            }
            this.setByBinaryString(b)
        };
        this.newFalseArray = function (c) {
            var d = new Array(c);
            for (var b = 0; b < c; b++) {
                d[b] = false
            }
            return d
        };
        this.getFreshValueHex = function () {
            return this.hV
        };
        if (typeof a != "undefined") {
            if (typeof a.hex != "undefined") {
                this.setHexValueIncludingUnusedBits(a.hex)
            } else {
                if (typeof a.bin != "undefined") {
                    this.setByBinaryString(a.bin)
                } else {
                    if (typeof a.array != "undefined") {
                        this.setByBooleanArray(a.array)
                    }
                }
            }
        }
    };
    c9.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);
    KJUR.asn1.DEROctetString = function (a) {
        KJUR.asn1.DEROctetString.superclass.constructor.call(this, a);
        this.hT = "04"
    };
    c9.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERNull = function () {
        KJUR.asn1.DERNull.superclass.constructor.call(this);
        this.hT = "05";
        this.hTLV = "0500"
    };
    c9.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERObjectIdentifier = function (a) {
        var c = function (e) {
            var d = e.toString(16);
            if (d.length == 1) {
                d = "0" + d
            }
            return d
        };
        var b = function (d) {
            var e = "";
            var h = new a8(d, 10);
            var i = h.toString(2);
            var g = 7 - i.length % 7;
            if (g == 7) {
                g = 0
            }
            var j = "";
            for (var f = 0; f < g; f++) {
                j += "0"
            }
            i = j + i;
            for (var f = 0; f < i.length - 1; f += 7) {
                var k = i.substr(f, 7);
                if (f != i.length - 7) {
                    k = "1" + k
                }
                e += c(parseInt(k, 2))
            }
            return e
        };
        KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
        this.hT = "06";
        this.setValueHex = function (d) {
            this.hTLV = null;
            this.isModified = true;
            this.s = null;
            this.hV = d
        };
        this.setValueOidString = function (d) {
            if (!d.match(/^[0-9.]+$/)) {
                throw "malformed oid string: " + d
            }
            var h = "";
            var f = d.split(".");
            var g = parseInt(f[0]) * 40 + parseInt(f[1]);
            h += c(g);
            f.splice(0, 2);
            for (var e = 0; e < f.length; e++) {
                h += b(f[e])
            }
            this.hTLV = null;
            this.isModified = true;
            this.s = null;
            this.hV = h
        };
        this.setValueName = function (d) {
            if (typeof KJUR.asn1.x509.OID.name2oidList[d] != "undefined") {
                var e = KJUR.asn1.x509.OID.name2oidList[d];
                this.setValueOidString(e)
            } else {
                throw "DERObjectIdentifier oidName undefined: " + d
            }
        };
        this.getFreshValueHex = function () {
            return this.hV
        };
        if (typeof a != "undefined") {
            if (typeof a.oid != "undefined") {
                this.setValueOidString(a.oid)
            } else {
                if (typeof a.hex != "undefined") {
                    this.setValueHex(a.hex)
                } else {
                    if (typeof a.name != "undefined") {
                        this.setValueName(a.name)
                    }
                }
            }
        }
    };
    c9.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERUTF8String = function (a) {
        KJUR.asn1.DERUTF8String.superclass.constructor.call(this, a);
        this.hT = "0c"
    };
    c9.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERNumericString = function (a) {
        KJUR.asn1.DERNumericString.superclass.constructor.call(this, a);
        this.hT = "12"
    };
    c9.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERPrintableString = function (a) {
        KJUR.asn1.DERPrintableString.superclass.constructor.call(this, a);
        this.hT = "13"
    };
    c9.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERTeletexString = function (a) {
        KJUR.asn1.DERTeletexString.superclass.constructor.call(this, a);
        this.hT = "14"
    };
    c9.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERIA5String = function (a) {
        KJUR.asn1.DERIA5String.superclass.constructor.call(this, a);
        this.hT = "16"
    };
    c9.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERUTCTime = function (a) {
        KJUR.asn1.DERUTCTime.superclass.constructor.call(this, a);
        this.hT = "17";
        this.setByDate = function (b) {
            this.hTLV = null;
            this.isModified = true;
            this.date = b;
            this.s = this.formatDate(this.date, "utc");
            this.hV = stohex(this.s)
        };
        if (typeof a != "undefined") {
            if (typeof a.str != "undefined") {
                this.setString(a.str)
            } else {
                if (typeof a.hex != "undefined") {
                    this.setStringHex(a.hex)
                } else {
                    if (typeof a.date != "undefined") {
                        this.setByDate(a.date)
                    }
                }
            }
        }
    };
    c9.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);
    KJUR.asn1.DERGeneralizedTime = function (a) {
        KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, a);
        this.hT = "18";
        this.setByDate = function (b) {
            this.hTLV = null;
            this.isModified = true;
            this.date = b;
            this.s = this.formatDate(this.date, "gen");
            this.hV = stohex(this.s)
        };
        if (typeof a != "undefined") {
            if (typeof a.str != "undefined") {
                this.setString(a.str)
            } else {
                if (typeof a.hex != "undefined") {
                    this.setStringHex(a.hex)
                } else {
                    if (typeof a.date != "undefined") {
                        this.setByDate(a.date)
                    }
                }
            }
        }
    };
    c9.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);
    KJUR.asn1.DERSequence = function (a) {
        KJUR.asn1.DERSequence.superclass.constructor.call(this, a);
        this.hT = "30";
        this.getFreshValueHex = function () {
            var b = "";
            for (var d = 0; d < this.asn1Array.length; d++) {
                var c = this.asn1Array[d];
                b += c.getEncodedHex()
            }
            this.hV = b;
            return this.hV
        }
    };
    c9.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);
    KJUR.asn1.DERSet = function (a) {
        KJUR.asn1.DERSet.superclass.constructor.call(this, a);
        this.hT = "31";
        this.getFreshValueHex = function () {
            var d = new Array();
            for (var b = 0; b < this.asn1Array.length; b++) {
                var c = this.asn1Array[b];
                d.push(c.getEncodedHex())
            }
            d.sort();
            this.hV = d.join("");
            return this.hV
        }
    };
    c9.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);
    KJUR.asn1.DERTaggedObject = function (a) {
        KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
        this.hT = "a0";
        this.hV = "";
        this.isExplicit = true;
        this.asn1Object = null;
        this.setASN1Object = function (d, b, c) {
            this.hT = b;
            this.isExplicit = d;
            this.asn1Object = c;
            if (this.isExplicit) {
                this.hV = this.asn1Object.getEncodedHex();
                this.hTLV = null;
                this.isModified = true
            } else {
                this.hV = null;
                this.hTLV = c.getEncodedHex();
                this.hTLV = this.hTLV.replace(/^../, b);
                this.isModified = false
            }
        };
        this.getFreshValueHex = function () {
            return this.hV
        };
        if (typeof a != "undefined") {
            if (typeof a.tag != "undefined") {
                this.hT = a.tag
            }
            if (typeof a.explicit != "undefined") {
                this.isExplicit = a.explicit
            }
            if (typeof a.obj != "undefined") {
                this.asn1Object = a.obj;
                this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)
            }
        }
    };
    c9.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
    (function (c) {
        var b = {},
            a;
        b.decode = function (i) {
            var g;
            if (a === c) {
                var f = "0123456789ABCDEF",
                    j = " \f\n\r\t\u00A0\u2028\u2029";
                a = [];
                for (g = 0; g < 16; ++g) {
                    a[f.charAt(g)] = g
                }
                f = f.toLowerCase();
                for (g = 10; g < 16; ++g) {
                    a[f.charAt(g)] = g
                }
                for (g = 0; g < j.length; ++g) {
                    a[j.charAt(g)] = -1
                }
            }
            var h = [],
                e = 0,
                k = 0;
            for (g = 0; g < i.length; ++g) {
                var d = i.charAt(g);
                if (d == "=") {
                    break
                }
                d = a[d];
                if (d == -1) {
                    continue
                }
                if (d === c) {
                    throw "Illegal character at offset " + g
                }
                e |= d;
                if (++k >= 2) {
                    h[h.length] = e;
                    e = 0;
                    k = 0
                } else {
                    e <<= 4
                }
            }
            if (k) {
                throw "Hex encoding incomplete: 4 bits missing"
            }
            return h
        };
        window.Hex = b
    })();
    (function (c) {
        var b = {},
            a;
        b.decode = function (i) {
            var f;
            if (a === c) {
                var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    j = "= \f\n\r\t\u00A0\u2028\u2029";
                a = [];
                for (f = 0; f < 64; ++f) {
                    a[g.charAt(f)] = f
                }
                for (f = 0; f < j.length; ++f) {
                    a[j.charAt(f)] = -1
                }
            }
            var h = [];
            var e = 0,
                k = 0;
            for (f = 0; f < i.length; ++f) {
                var d = i.charAt(f);
                if (d == "=") {
                    break
                }
                d = a[d];
                if (d == -1) {
                    continue
                }
                if (d === c) {
                    throw "Illegal character at offset " + f
                }
                e |= d;
                if (++k >= 4) {
                    h[h.length] = (e >> 16);
                    h[h.length] = (e >> 8) & 255;
                    h[h.length] = e & 255;
                    e = 0;
                    k = 0
                } else {
                    e <<= 6
                }
            }
            switch (k) {
                case 1:
                    throw "Base64 encoding incomplete: at least 2 bits missing";
                case 2:
                    h[h.length] = (e >> 10);
                    break;
                case 3:
                    h[h.length] = (e >> 16);
                    h[h.length] = (e >> 8) & 255;
                    break
            }
            return h
        };
        b.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/;
        b.unarmor = function (d) {
            var e = b.re.exec(d);
            if (e) {
                if (e[1]) {
                    d = e[1]
                } else {
                    if (e[2]) {
                        d = e[2]
                    } else {
                        throw "RegExp out of sync"
                    }
                }
            }
            return b.decode(d)
        };
        window.Base64 = b
    })();
    (function (d) {
        var f = 100,
            e = "\u2026",
            b = {
                tag: function (h, g) {
                    var i = document.createElement(h);
                    i.className = g;
                    return i
                },
                text: function (g) {
                    return document.createTextNode(g)
                }
            };

        function c(h, g) {
            if (h instanceof c) {
                this.enc = h.enc;
                this.pos = h.pos
            } else {
                this.enc = h;
                this.pos = g
            }
        }

        c.prototype.get = function (g) {
            if (g === d) {
                g = this.pos++
            }
            if (g >= this.enc.length) {
                throw "Requesting byte offset " + g + " on a stream of length " + this.enc.length
            }
            return this.enc[g]
        };
        c.prototype.hexDigits = "0123456789ABCDEF";
        c.prototype.hexByte = function (g) {
            return this.hexDigits.charAt((g >> 4) & 15) + this.hexDigits.charAt(g & 15)
        };
        c.prototype.hexDump = function (g, k, j) {
            var h = "";
            for (var i = g; i < k; ++i) {
                h += this.hexByte(this.get(i));
                if (j !== true) {
                    switch (i & 15) {
                        case 7:
                            h += "  ";
                            break;
                        case 15:
                            h += "\n";
                            break;
                        default:
                            h += " "
                    }
                }
            }
            return h
        };
        c.prototype.parseStringISO = function (g, j) {
            var h = "";
            for (var i = g; i < j; ++i) {
                h += String.fromCharCode(this.get(i))
            }
            return h
        };
        c.prototype.parseStringUTF = function (g, k) {
            var i = "";
            for (var j = g; j < k;) {
                var h = this.get(j++);
                if (h < 128) {
                    i += String.fromCharCode(h)
                } else {
                    if ((h > 191) && (h < 224)) {
                        i += String.fromCharCode(((h & 31) << 6) | (this.get(j++) & 63))
                    } else {
                        i += String.fromCharCode(((h & 15) << 12) | ((this.get(j++) & 63) << 6) | (this.get(j++) & 63))
                    }
                }
            }
            return i
        };
        c.prototype.parseStringBMP = function (g, k) {
            var h = "";
            for (var i = g; i < k; i += 2) {
                var l = this.get(i);
                var j = this.get(i + 1);
                h += String.fromCharCode((l << 8) + j)
            }
            return h
        };
        c.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
        c.prototype.parseTime = function (g, i) {
            var h = this.parseStringISO(g, i),
                j = this.reTime.exec(h);
            if (!j) {
                return "Unrecognized time: " + h
            }
            h = j[1] + "-" + j[2] + "-" + j[3] + " " + j[4];
            if (j[5]) {
                h += ":" + j[5];
                if (j[6]) {
                    h += ":" + j[6];
                    if (j[7]) {
                        h += "." + j[7]
                    }
                }
            }
            if (j[8]) {
                h += " UTC";
                if (j[8] != "Z") {
                    h += j[8];
                    if (j[9]) {
                        h += ":" + j[9]
                    }
                }
            }
            return h
        };
        c.prototype.parseInteger = function (g, k) {
            var l = k - g;
            if (l > 4) {
                l <<= 3;
                var i = this.get(g);
                if (i === 0) {
                    l -= 8
                } else {
                    while (i < 128) {
                        i <<= 1;
                        --l
                    }
                }
                return "(" + l + " bit)"
            }
            var h = 0;
            for (var j = g; j < k; ++j) {
                h = (h << 8) | this.get(j)
            }
            return h
        };
        c.prototype.parseBitString = function (i, h) {
            var m = this.get(i),
                o = ((h - i - 1) << 3) - m,
                j = "(" + o + " bit)";
            if (o <= 20) {
                var k = m;
                j += " ";
                for (var n = h - 1; n > i; --n) {
                    var l = this.get(n);
                    for (var g = k; g < 8; ++g) {
                        j += (l >> g) & 1 ? "1" : "0"
                    }
                    k = 0
                }
            }
            return j
        };
        c.prototype.parseOctetString = function (g, j) {
            var k = j - g,
                h = "(" + k + " byte) ";
            if (k > f) {
                j = g + f
            }
            for (var i = g; i < j; ++i) {
                h += this.hexByte(this.get(i))
            }
            if (k > f) {
                h += e
            }
            return h
        };
        c.prototype.parseOID = function (i, g) {
            var l = "",
                j = 0,
                k = 0;
            for (var m = i; m < g; ++m) {
                var n = this.get(m);
                j = (j << 7) | (n & 127);
                k += 7;
                if (!(n & 128)) {
                    if (l === "") {
                        var h = j < 80 ? j < 40 ? 0 : 1 : 2;
                        l = h + "." + (j - h * 40)
                    } else {
                        l += "." + ((k >= 31) ? "bigint" : j)
                    }
                    j = k = 0
                }
            }
            return l
        };

        function a(h, g, i, k, j) {
            this.stream = h;
            this.header = g;
            this.length = i;
            this.tag = k;
            this.sub = j
        }

        a.prototype.typeName = function () {
            if (this.tag === d) {
                return "unknown"
            }
            var g = this.tag >> 6,
                i = (this.tag >> 5) & 1,
                h = this.tag & 31;
            switch (g) {
                case 0:
                    switch (h) {
                        case 0:
                            return "EOC";
                        case 1:
                            return "BOOLEAN";
                        case 2:
                            return "INTEGER";
                        case 3:
                            return "BIT_STRING";
                        case 4:
                            return "OCTET_STRING";
                        case 5:
                            return "NULL";
                        case 6:
                            return "OBJECT_IDENTIFIER";
                        case 7:
                            return "ObjectDescriptor";
                        case 8:
                            return "EXTERNAL";
                        case 9:
                            return "REAL";
                        case 10:
                            return "ENUMERATED";
                        case 11:
                            return "EMBEDDED_PDV";
                        case 12:
                            return "UTF8String";
                        case 16:
                            return "SEQUENCE";
                        case 17:
                            return "SET";
                        case 18:
                            return "NumericString";
                        case 19:
                            return "PrintableString";
                        case 20:
                            return "TeletexString";
                        case 21:
                            return "VideotexString";
                        case 22:
                            return "IA5String";
                        case 23:
                            return "UTCTime";
                        case 24:
                            return "GeneralizedTime";
                        case 25:
                            return "GraphicString";
                        case 26:
                            return "VisibleString";
                        case 27:
                            return "GeneralString";
                        case 28:
                            return "UniversalString";
                        case 30:
                            return "BMPString";
                        default:
                            return "Universal_" + h.toString(16)
                    }
                case 1:
                    return "Application_" + h.toString(16);
                case 2:
                    return "[" + h + "]";
                case 3:
                    return "Private_" + h.toString(16)
            }
        };
        a.prototype.reSeemsASCII = /^[ -~]+$/;
        a.prototype.content = function () {
            if (this.tag === d) {
                return null
            }
            var g = this.tag >> 6,
                j = this.tag & 31,
                h = this.posContent(),
                k = Math.abs(this.length);
            if (g !== 0) {
                if (this.sub !== null) {
                    return "(" + this.sub.length + " elem)"
                }
                var i = this.stream.parseStringISO(h, h + Math.min(k, f));
                if (this.reSeemsASCII.test(i)) {
                    return i.substring(0, 2 * f) + ((i.length > 2 * f) ? e : "")
                } else {
                    return this.stream.parseOctetString(h, h + k)
                }
            }
            switch (j) {
                case 1:
                    return (this.stream.get(h) === 0) ? "false" : "true";
                case 2:
                    return this.stream.parseInteger(h, h + k);
                case 3:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(h, h + k);
                case 4:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(h, h + k);
                case 6:
                    return this.stream.parseOID(h, h + k);
                case 16:
                case 17:
                    return "(" + this.sub.length + " elem)";
                case 12:
                    return this.stream.parseStringUTF(h, h + k);
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 26:
                    return this.stream.parseStringISO(h, h + k);
                case 30:
                    return this.stream.parseStringBMP(h, h + k);
                case 23:
                case 24:
                    return this.stream.parseTime(h, h + k)
            }
            return null
        };
        a.prototype.toString = function () {
            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + ((this.sub === null) ? "null" : this.sub.length) + "]"
        };
        a.prototype.print = function (h) {
            if (h === d) {
                h = ""
            }
            document.writeln(h + this);
            if (this.sub !== null) {
                h += "  ";
                for (var g = 0, i = this.sub.length; g < i; ++g) {
                    this.sub[g].print(h)
                }
            }
        };
        a.prototype.toPrettyString = function (i) {
            if (i === d) {
                i = ""
            }
            var g = i + this.typeName() + " @" + this.stream.pos;
            if (this.length >= 0) {
                g += "+"
            }
            g += this.length;
            if (this.tag & 32) {
                g += " (constructed)"
            } else {
                if (((this.tag == 3) || (this.tag == 4)) && (this.sub !== null)) {
                    g += " (encapsulates)"
                }
            }
            g += "\n";
            if (this.sub !== null) {
                i += "  ";
                for (var h = 0, j = this.sub.length; h < j; ++h) {
                    g += this.sub[h].toPrettyString(i)
                }
            }
            return g
        };
        a.prototype.toDOM = function () {
            var l = b.tag("div", "node");
            l.asn1 = this;
            var p = b.tag("div", "head");
            var n = this.typeName().replace(/_/g, " ");
            p.innerHTML = n;
            var h = this.content();
            if (h !== null) {
                h = String(h).replace(/</g, "&lt;");
                var i = b.tag("span", "preview");
                i.appendChild(b.text(h));
                p.appendChild(i)
            }
            l.appendChild(p);
            this.node = l;
            this.head = p;
            var o = b.tag("div", "value");
            n = "Offset: " + this.stream.pos + "<br/>";
            n += "Length: " + this.header + "+";
            if (this.length >= 0) {
                n += this.length
            } else {
                n += (-this.length) + " (undefined)"
            }
            if (this.tag & 32) {
                n += "<br/>(constructed)"
            } else {
                if (((this.tag == 3) || (this.tag == 4)) && (this.sub !== null)) {
                    n += "<br/>(encapsulates)"
                }
            }
            if (h !== null) {
                n += "<br/>Value:<br/><b>" + h + "</b>";
                if ((typeof oids === "object") && (this.tag == 6)) {
                    var k = oids[h];
                    if (k) {
                        if (k.d) {
                            n += "<br/>" + k.d
                        }
                        if (k.c) {
                            n += "<br/>" + k.c
                        }
                        if (k.w) {
                            n += "<br/>(warning!)"
                        }
                    }
                }
            }
            o.innerHTML = n;
            l.appendChild(o);
            var m = b.tag("div", "sub");
            if (this.sub !== null) {
                for (var j = 0, g = this.sub.length; j < g; ++j) {
                    m.appendChild(this.sub[j].toDOM())
                }
            }
            l.appendChild(m);
            p.onclick = function () {
                l.className = (l.className == "node collapsed") ? "node" : "node collapsed"
            };
            return l
        };
        a.prototype.posStart = function () {
            return this.stream.pos
        };
        a.prototype.posContent = function () {
            return this.stream.pos + this.header
        };
        a.prototype.posEnd = function () {
            return this.stream.pos + this.header + Math.abs(this.length)
        };
        a.prototype.fakeHover = function (g) {
            this.node.className += " hover";
            if (g) {
                this.head.className += " hover"
            }
        };
        a.prototype.fakeOut = function (g) {
            var h = / ?hover/;
            this.node.className = this.node.className.replace(h, "");
            if (g) {
                this.head.className = this.head.className.replace(h, "")
            }
        };
        a.prototype.toHexDOM_sub = function (i, j, h, g, l) {
            if (g >= l) {
                return
            }
            var k = b.tag("span", j);
            k.appendChild(b.text(h.hexDump(g, l)));
            i.appendChild(k)
        };
        a.prototype.toHexDOM = function (k) {
            var h = b.tag("span", "hex");
            if (k === d) {
                k = h
            }
            this.head.hexNode = h;
            this.head.onmouseover = function () {
                this.hexNode.className = "hexCurrent"
            };
            this.head.onmouseout = function () {
                this.hexNode.className = "hex"
            };
            h.asn1 = this;
            h.onmouseover = function () {
                var m = !k.selected;
                if (m) {
                    k.selected = this.asn1;
                    this.className = "hexCurrent"
                }
                this.asn1.fakeHover(m)
            };
            h.onmouseout = function () {
                var m = (k.selected == this.asn1);
                this.asn1.fakeOut(m);
                if (m) {
                    k.selected = null;
                    this.className = "hex"
                }
            };
            this.toHexDOM_sub(h, "tag", this.stream, this.posStart(), this.posStart() + 1);
            this.toHexDOM_sub(h, (this.length >= 0) ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent());
            if (this.sub === null) {
                h.appendChild(b.text(this.stream.hexDump(this.posContent(), this.posEnd())))
            } else {
                if (this.sub.length > 0) {
                    var g = this.sub[0];
                    var i = this.sub[this.sub.length - 1];
                    this.toHexDOM_sub(h, "intro", this.stream, this.posContent(), g.posStart());
                    for (var j = 0, l = this.sub.length; j < l; ++j) {
                        h.appendChild(this.sub[j].toHexDOM(k))
                    }
                    this.toHexDOM_sub(h, "outro", this.stream, i.posEnd(), this.posEnd())
                }
            }
            return h
        };
        a.prototype.toHexString = function (g) {
            return this.stream.hexDump(this.posStart(), this.posEnd(), true)
        };
        a.decodeLength = function (g) {
            var i = g.get(),
                j = i & 127;
            if (j == i) {
                return j
            }
            if (j > 3) {
                throw "Length over 24 bits not supported at position " + (g.pos - 1)
            }
            if (j === 0) {
                return -1
            }
            i = 0;
            for (var h = 0; h < j; ++h) {
                i = (i << 8) | g.get()
            }
            return i
        };
        a.hasContent = function (l, m, g) {
            if (l & 32) {
                return true
            }
            if ((l < 3) || (l > 4)) {
                return false
            }
            var h = new c(g);
            if (l == 3) {
                h.get()
            }
            var i = h.get();
            if ((i >> 6) & 1) {
                return false
            }
            try {
                var j = a.decodeLength(h);
                return ((h.pos - g.pos) + j == m)
            } catch (k) {
                return false
            }
        };
        a.decode = function (p) {
            if (!(p instanceof c)) {
                p = new c(p, 0)
            }
            var g = new c(p),
                n = p.get(),
                i = a.decodeLength(p),
                j = p.pos - g.pos,
                m = null;
            if (a.hasContent(n, i, p)) {
                var l = p.pos;
                if (n == 3) {
                    p.get()
                }
                m = [];
                if (i >= 0) {
                    var k = l + i;
                    while (p.pos < k) {
                        m[m.length] = a.decode(p)
                    }
                    if (p.pos != k) {
                        throw "Content size is not correct for container starting at offset " + l
                    }
                } else {
                    try {
                        for (; ;) {
                            var o = a.decode(p);
                            if (o.tag === 0) {
                                break
                            }
                            m[m.length] = o
                        }
                        i = l - p.pos
                    } catch (h) {
                        throw "Exception while decoding undefined length content: " + h
                    }
                }
            } else {
                p.pos += i
            }
            return new a(g, j, i, n, m)
        };
        a.test = function () {
            var g = [{
                value: [39],
                expected: 39
            }, {
                value: [129, 201],
                expected: 201
            }, {
                value: [131, 254, 220, 186],
                expected: 16702650
            }];
            for (var j = 0, l = g.length; j < l; ++j) {
                var h = 0,
                    i = new c(g[j].value, 0),
                    k = a.decodeLength(i);
                if (k != g[j].expected) {
                    document.write("In test[" + j + "] expected " + g[j].expected + " got " + k + "\n")
                }
            }
        };
        window.ASN1 = a
    })();
    ASN1.prototype.getHexStringValue = function () {
        var b = this.toHexString();
        var a = this.header * 2;
        var c = this.length * 2;
        return b.substr(a, c)
    };
    b5.prototype.parseKey = function (a) {
        try {
            var d = 0;
            var o = 0;
            var i = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
            var f = i.test(a) ? Hex.decode(a) : Base64.unarmor(a);
            var n = ASN1.decode(f);
            if (n.sub.length === 9) {
                d = n.sub[1].getHexStringValue();
                this.n = d9(d, 16);
                o = n.sub[2].getHexStringValue();
                this.e = parseInt(o, 16);
                var l = n.sub[3].getHexStringValue();
                this.d = d9(l, 16);
                var j = n.sub[4].getHexStringValue();
                this.p = d9(j, 16);
                var k = n.sub[5].getHexStringValue();
                this.q = d9(k, 16);
                var e = n.sub[6].getHexStringValue();
                this.dmp1 = d9(e, 16);
                var c = n.sub[7].getHexStringValue();
                this.dmq1 = d9(c, 16);
                var m = n.sub[8].getHexStringValue();
                this.coeff = d9(m, 16)
            } else {
                if (n.sub.length === 2) {
                    var g = n.sub[1];
                    var b = g.sub[0];
                    d = b.sub[0].getHexStringValue();
                    this.n = d9(d, 16);
                    o = b.sub[1].getHexStringValue();
                    this.e = parseInt(o, 16)
                } else {
                    return false
                }
            }
            return true
        } catch (h) {
            return false
        }
    };
    b5.prototype.getPublicBaseKey = function () {
        var b = {
            array: [new KJUR.asn1.DERObjectIdentifier({
                oid: "1.2.840.113549.1.1.1"
            }), new KJUR.asn1.DERNull()]
        };
        var d = new KJUR.asn1.DERSequence(b);
        b = {
            array: [new KJUR.asn1.DERInteger({
                bigint: this.n
            }), new KJUR.asn1.DERInteger({
                "int": this.e
            })]
        };
        var c = new KJUR.asn1.DERSequence(b);
        b = {
            hex: "00" + c.getEncodedHex()
        };
        var a = new KJUR.asn1.DERBitString(b);
        b = {
            array: [d, a]
        };
        var e = new KJUR.asn1.DERSequence(b);
        return e.getEncodedHex()
    };
    b5.prototype.getPublicBaseKeyB64 = function () {
        return cF(this.getPublicBaseKey())
    };
    b5.prototype.wordwrap = function (a, b) {
        b = b || 64;
        if (!a) {
            return a
        }
        var c = "(.{1," + b + "})( +|$\n?)|(.{1," + b + "})";
        return a.match(RegExp(c, "g")).join("\n")
    };
    b5.prototype.getPublicKey = function () {
        var a = "-----BEGIN PUBLIC KEY-----\n";
        a += this.wordwrap(this.getPublicBaseKeyB64()) + "\n";
        a += "-----END PUBLIC KEY-----";
        return a
    };
    b5.prototype.hasPublicKeyProperty = function (a) {
        a = a || {};
        return (a.hasOwnProperty("n") && a.hasOwnProperty("e"))
    };
    b5.prototype.parsePropertiesFrom = function (a) {
        this.n = a.n;
        this.e = a.e;
        if (a.hasOwnProperty("d")) {
            this.d = a.d;
            this.p = a.p;
            this.q = a.q;
            this.dmp1 = a.dmp1;
            this.dmq1 = a.dmq1;
            this.coeff = a.coeff
        }
    };
    var eg = function (a) {
        b5.call(this);
        if (a) {
            if (typeof a === "string") {
                this.parseKey(a)
            } else {
                if (this.hasPublicKeyProperty(a)) {
                    this.parsePropertiesFrom(a)
                }
            }
        }
    };
    eg.prototype = new b5();
    eg.prototype.constructor = eg;
    var ea = function (a) {
        a = a || {};
        this.default_key_size = parseInt(a.default_key_size) || 1024;
        this.default_public_exponent = a.default_public_exponent || "010001";
        this.log = a.log || false;
        this.key = null
    };
    ea.prototype.setKey = function (a) {
        if (this.log && this.key) {
            console.warn("A key was already set, overriding existing.")
        }
        this.key = new eg(a)
    };
    ea.prototype.setPublicKey = function (a) {
        this.setKey(a)
    };
    ea.prototype.decrypt = function (a) {
        try {
            return this.getKey().decrypt(ci(a))
        } catch (b) {
            return false
        }
    };
    ea.prototype.encrypt = function (a) {
        try {
            return cF(this.getKey().encrypt(a))
        } catch (b) {
            return false
        }
    };
    ea.prototype.getKey = function (a) {
        if (!this.key) {
            this.key = new eg();
            if (a && {}.toString.call(a) === "[object Function]") {
                this.key.generateAsync(this.default_key_size, this.default_public_exponent, a);
                return
            }
            this.key.generate(this.default_key_size, this.default_public_exponent)
        }
        return this.key
    };
    ea.prototype.getPublicKey = function () {
        return this.getKey().getPublicKey()
    };
    ea.prototype.getPublicKeyB64 = function () {
        return this.getKey().getPublicBaseKeyB64()
    };
    a6.JSEncrypt = ea
})(JSEncryptExports);
var JSEncrypt = JSEncryptExports.JSEncrypt;
var encrypt = new JSEncrypt();
var pubkey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDXQG8rnxhslm+2f7Epu3bB0inrnCaTHhUQCYE+2X+qWQgcpn+Hvwyks3A67mvkIcyvV0ED3HFDf+ANoMWV1Ex56dKqOmSUmjrk7s5cjQeiIsxX7Q3hSzO61/kLpKNH+NE6iAPpm96Fg15rCjbm+5rR96DhLNG7zt2JgOd2o1wXkQIDAQAB";
encrypt.setPublicKey(pubkey);
var timer1 = null;
var timer2 = null;
var timerCheckValidCode;
var vcdPCType = 1;
var SCaptcha;
var jRegist = {
    ieLower: $.browser.msie && $.browser.version == 6 || false,
    helpCenterHover: function () {
        $(".help_wrap", ".regist_header_right ").hover(function () {
            $(this).addClass("help_wrap_hover")
        }, function () {
            $(this).removeClass("help_wrap_hover")
        })
    },
    maxWidth: function (c, d) {
        if (jRegist.ieLower) {
            var b = $(c).width();
            var a = parseInt(d);
            if (b > a) {
                $(c).width(a)
            }
        }
    },
    focusInput: function () {
        $(".ysame_input").focus(function () {
            var b = $(this).next(".y_same_label"),
                a = b.outerWidth(true);
            b.animate({
                left: -a - 20
            }, 160)
        })
    },
    capsLock: function (b) {
        var a = false;
        $(document).keydown(function (c) {
            if (c.keyCode == 20) {
                if (a == false) {
                    a = true;
                    $(".y_set_password").addClass("caplock_open")
                } else {
                    a = false;
                    $(".y_set_password").removeClass("caplock_open")
                }
            }
        })
    },
    tipsShowHide: function () {
        $(".y_regist_tips").each(function (a) {
            var c = $("li", ".y_regist_form").height();
            var d = $(this).height();
            var b = (c - d) / 2;
            $(this).css("top", b);
            jRegist.maxWidth(this, 160)
        })
    },
    checkStrong: function (b) {
        var a = checkPassword.getPwdPoint($(b).val());
        if (a > 80) {
            return 3
        } else {
            if (a > 40) {
                return 2
            } else {
                return 1
            }
        }
    },
    pswdShow: function () {
        $(".y_regist_form").delegate(".y_set_password", "keyup", function () {
            liItem = $(this).parents("li");
            strenth = jRegist.checkStrong($(this));
            liItem.removeClass("ifocus");
            if (strenth == 1) {
                $(".y_regist_tips_keywords").hide();
                liItem.find(".strength_l").show()
            } else {
                if (strenth == 2) {
                    $(".y_regist_tips_keywords").hide();
                    liItem.find(".strength_m").show()
                } else {
                    if (strenth == 3) {
                        $(".y_regist_tips_keywords").hide();
                        liItem.find(".strength_h").show()
                    }
                }
            }
        })
    },
    loadingBtn: function () {
        $(".y_regist_form").delegate(".y_agreement_btn", "click", function () {
            if ($(this).hasClass("y_agreement_btn_loading")) {
                return false
            }
            jRegist.registerByPhoneSubmit();
            return false
        })
    },
    registSucceed: function (f, d) {
        var a = $("#default_pop");
        if (f == "dm") {
            a = $("#sale_pop")
        }
        var c = a.outerHeight(true);
        var b = a.outerWidth(true);
        var e = $(document).height();
        a.css({
            "margin-left": -b / 2,
            "margin-top": -c / 2
        });
        $(".regist_popWin_closeBtn").on("click", function () {
            window.location.href = d
        });
        var g = $(".popWin_tips span", ".regist_success ").text();
        setInterval(function () {
            if (g > 0) {
                g--;
                $(".popWin_tips span", ".regist_success ").text(g)
            }
        }, 1000);
        if (!f || f == "default") {
            setTimeout(function () {
                window.location.href = d
            }, 3000)
        }
        a.show();
        $("body").append("<div class=pop_mask></div>");
        $(".pop_mask").css("height", e);
        return false
    },
    messageBind: function () {
        $("#userName").blur(function () {
            if (registCheck.check_account_regx($(this).val()) == 0) {
                jRegist.is_account_register()
            }
        });
        $("#userName").focus(function () {
            tip.show_default_message($(this), "4-20位字符，可由中文、英文、数字或符号“_”组成")
        });
        $("#phone").change(function () {
            sms.change_state_disable();
            if (registCheck.check_phone_regx($(this).val())) {
                jRegist.is_phone_register()
            }
        });
        $("#phone").keyup(function () {
            if (!registCheck.check_phone_regx($(this).val())) {
                tip.show_default_message($(this), "请填写正确的手机号码，以便 接收订单通知，找回密码等")
            } else {
                $(this).parents("li").removeClass("ifocus")
            }
        });
        $("#phone").blur(function () {
            if (!registCheck.check_phone_regx($(this).val())) {
                tip.show_error_message($(this), "格式错误，请输入正确的手机号码")
            } else {
                if (!$(this).parents("li").hasClass("ipt_wrong")) {
                    $(this).parents("li").removeClass("ifocus")
                }
            }
        });
        $("#phone").focus(function () {
            if (!$(this).parents("li").hasClass("ipt_wrong") && !$(this).parents("li").hasClass("ipt_right")) {
                tip.show_default_message($(this), "请填写正确的手机号码，以便 接收订单通知，找回密码等")
            }
        });
        $("#changevalidate").click(function () {
            jRegist.refresh_valid_code()
        });
        $("#validCode").keyup(function () {
            if (vcdPCType != 2) {
                if ($("#validCode").val().length != 4) {
                    return
                }
                jRegist.check_validate_code()
            }
        });
        $("#validCode").blur(function () {
            if (vcdPCType == 2) {
                if ($("#validCode").val().length == 0) {
                    return
                }
                jRegist.check_validate_code()
            }
        });
        $(".receive_code").click(function () {
            jRegist.send_receive_code(sms.send_receive_callback)
        });
        $("#validPhoneCode").focus(function () {
            if (!registCheck.is_input_error($("#phone"))) {
                if (sms.is_audio_msg()) {
                    tip.show_default_message($(this), "请注意接听来电获取验证码")
                } else {
                    tip.show_default_message($(this), "如无法接受验证码，请重启手机并确认短信未被拦截！4G用户请关闭4G网络进行接收")
                }
            }
        });
        $("#validPhoneCode").blur(function () {
            if (!sms.is_audio_msg()) {
                tip.hide_error_message($(this))
            }
        });
        $("#password").blur(function () {
            registCheck.check_password_regx()
        });
        $("#password").focus(function () {
            $(".y_regist_tips_keywords").hide();
            tip.show_default_message($(this), "6-20个大小写英文字母、符号或数字的组合")
        });
        $("#password2").blur(function () {
            registCheck.check_password2()
        });
        $("#password2").focus(function () {
            tip.show_default_message($(this), "请再次输入密码")
        });
        $("#password2").keyup(function () {
            registCheck.check_password2()
        })
    },
    check_validate_code: function () {
        return;
        var d = $("#validCode").val();
        var b = $("#validateSig").val();
        var a = {
            validCode: d,
            sig: b
        };
        var c = "/passport/register_param_validate.do";
        $.ajax({
            type: "post",
            url: c,
            data: a,
            success: function (e) {
                if (e.errorCode != 0) {
                    if (vcdPCType == 2) {
                        tip.show_error_message($("#validCode"), "请输入验证码正确的运算结果")
                    } else {
                        tip.show_error_message($("#validCode"), "请输入正确的验证码")
                    }
                    if (e.refresh && e.refresh == 1) {
                        jRegist.refresh_valid_code()
                    }
                } else {
                    tip.hide_error_message($("#validCode"));
                    sms.change_state_require();
                    jRegist.send_receive_code(sms.auto_send_receive_callback)
                }
            }
        })
    },
    getCaptchaUrl: function () {
        var a = "https://captcha.yhd.com";
        var c = window.location.host;
        var b = /([a-z0-9_-]+\.)*(yhd|yihaodian|1mall|111)\.(com\.hk)$/;
        if (b.test(c)) {
            a = "https://captcha.yihaodian.com.hk"
        }
        return a
    },
    show_slide_captcha: function () {
        SCaptcha.setSlide();
        SCaptcha.show();
        sms.change_state_disable()
    },
    refresh_valid_code: function () {
        var a = {
            phone: $("#phone").val(),
            source: 3
        };
        $.ajax({
            type: "post",
            data: a,
            url: "/publicPassport/getCaptcha.do",
            success: function (b) {
                if (b.errorCode == 0) {
                    var d = b.sig;
                    vcdPCType = b.type;
                    $("#validateSig").val(d);
                    var c = b.url;
                    $("#validateImg").attr("src", c)
                } else {
                    $("#code_right").hide();
                    $("#code_wrong").show();
                    LoginUtils.showErrorInfo($("#vcd"), "获取验证码失败")
                }
            }
        })
    },
    is_account_register: function () {
        var a = {
            userName: encrypt.encrypt($("#userName").val()),
            is_jab: "true",
            captchaToken: window.jab ? window.jab.getData() : "",
            jab_st: window.jab_st
        };
        $.ajax({
            type: "POST",
            url: "/check/register_check_name.do",
            data: a,
            success: function (b) {
                if (b.checkResult == 2) {
                    tip.show_error_message($("#userName"), "您输入的用户名格式错误，请重新输入")
                } else {
                    if (b.checkResult == 1) {
                        tip.show_error_message($("#userName"), "您输入的用户名已存在，请重新输入")
                    } else {
                        if (b.checkResult == 3) {
                            tip.show_error_message($("#userName"), "您输入的用户名包含敏感字段，请重新输入")
                        } else {
                            if (b.checkResult == 0) {
                                tip.hide_error_message($("#userName"))
                            }
                        }
                    }
                }
            }
        })
    },
    is_phone_register: function () {
        if (registerValidateUserBehaviorSwitcher) {
            showValidCodeWhenRegistByMobile = false
        }
        if (!registCheck.check_phone_regx($("#phone").val())) {
            tip.show_error_message($("#phone"), "格式错误，请输入正确的手机号码");
            return
        }
        var a = {
            validPhone: encrypt.encrypt($("#phone").val()),
            is_jab: "true",
            captchaToken: window.jab ? window.jab.getData() : "",
            jab_st: window.jab_st
        };
        SCaptcha.disSlide();
        $.ajax({
            type: "POST",
            url: "/check/register_check_phone.do",
            data: a,
            success: function (b) {
                sms.reset_timer_state();
                switch (b.checkResult) {
                    case 0:
                        if (b.showValidCode == 1) {
                            sms.change_state_require()
                        } else {
                            $("#validCodeDiv").hide();
                            $("#validPhoneCodeDiv").show();
                            tip.hide_error_message($("#phone"));
                            showValidCodeWhenRegistByMobile = false;
                            sms.change_state_require()
                        }
                        break;
                    case 1:
                        sms.change_state_disable();
                        tip.show_error_message($("#phone"), "该手机号已存在，<a href='/src/main/webapp/passport/login_input.do'>登录</a>");
                        break;
                    case 2:
                        sms.change_state_disable();
                        tip.show_error_message($("#phone"), "格式错误，请输入正确的手机号码");
                        break;
                    default:
                        sms.change_state_disable();
                        tip.show_error_message($("#phone"), "手机号码校验失败，请刷新页面或稍后重试")
                }
            }
        })
    },
    registerByPhoneSubmit: function () {
        $(".y_agreement_btn").addClass("y_agreement_btn_loading");
        $(".y_agreement_btn").text("注册中");
        var c = $("#userName").val();
        var e = $("#phone").val();
        var g = $("#password").val();
        var d = $("#password2").val();
        var a = $("#validPhoneCode").val();
        if (registCheck.check_account_regx(c) != 0) {
            tip.show_error_message($("#userName"), "格式错误，请输入正确的用户名");
            jRegist.phone_button_recover();
            return
        }
        if (!registCheck.check_phone_regx(e)) {
            tip.show_error_message($("#phone"), "格式错误，请输入正确的手机号");
            jRegist.phone_button_recover();
            return
        }
        if (!registCheck.check_password_regx()) {
            jRegist.phone_button_recover();
            return
        }
        if (g != d) {
            tip.show_error_message($("#password2"), "两次密码输入不一致");
            jRegist.phone_button_recover();
            return
        }
        if (SCaptcha.isSlide() && SCaptcha.isShowing()) {
            jRegist.phone_button_recover();
            jRegist.show_slide_captcha();
            return
        }
        if (a.length != 6) {
            tip.show_error_message($("#validPhoneCode"), "请输入6位短信验证码");
            jRegist.phone_button_recover();
            return
        }
        c = encrypt.encrypt(c);
        e = encrypt.encrypt(e);
        g = encrypt.encrypt(g);
        d = encrypt.encrypt(d);
        var b = {
            userName: c,
            validPhone: e,
            "user.password": g,
            password2: d,
            validCode: a,
            returnUrl: $("#returnUrl").val()
        };
        var f = "/passport/registerByPhone.do";
        $.ajax({
            type: "POST",
            url: f,
            data: b,
            success: function (k) {
                if (k.errorCode != 0) {
                    jRegist.phone_button_recover()
                }
                switch (k.errorCode) {
                    case 0:
                        if (k.isCs == "1") {
                            var h = "https://passport.yihaodian.com.hk/passport/cookie_synchronization.do";
                            var j = k.returnUrl;
                            if (k.hk) {
                                h = URLPrefix.passport + "/passport/cookie_synchronization.do"
                            }
                            cookie_sync.cookieSynchronization(h, j);
                            setTimeout(jRegist.phone_button_recover, 2000);
                            break
                        } else {
                            var i = $("#p").val();
                            if (i == "") {
                                i = k.p
                            }
                            if (i == "") {
                                i == "default"
                            }
                            window.location = k.returnUrl;
                            setTimeout(jRegist.phone_button_recover, 2000);
                            break
                        }
                    case 1:
                        tip.show_error_message($("#phone"), "不能为空");
                        break;
                    case 2:
                        tip.show_error_message($("#validPhoneCode"), "短信验证码错误");
                        break;
                    case 41:
                        tip.show_error_message($("#validPhoneCode"), "短信验证码已过期，请重新获取");
                        break;
                    case 15:
                        tip.show_error_message($("#phone"), "格式错误，请输入正确的手机号");
                        break;
                    case 16:
                        tip.show_error_message($("#phone"), "该手机号已存在，<a href='/src/main/webapp/passport/login_input.do'>登录</a>");
                        break;
                    case 4:
                        tip.show_error_message($("#password2"), "两次密码输入不一致");
                        break;
                    case 5:
                        tip.show_error_message($("#password"), "您的密码存在安全隐患,请更改");
                        break;
                    case 13:
                        alert("系统繁忙，请稍后再试");
                        break;
                    case 58:
                        tip.show_error_message($("#userName"), "您输入的用户名格式错误，请重新输入");
                        break;
                    case 57:
                        tip.show_error_message($("#userName"), "您输入的用户名已存在，请重新输入");
                        break;
                    case 65:
                        tip.show_error_message($("#userName"), "您输入的用户名包含敏感字段，请重新输入");
                        break;
                    case 14:
                        window.location = k.returnUrl;
                        break
                }
            }
        })
    },
    send_receive_code: function (b) {
        if (!sms.is_send_able()) {
            if (SCaptcha.isSlide() && $(".receive_code").hasClass("r_disable_code")) {
                SCaptcha.show()
            }
            return false
        } else {
            var a = {
                validPhone: encrypt.encrypt($("#phone").val()),
                validCode: $("#validCode").val(),
                sig: $("#validateSig").val(),
                is_jab: "true",
                captchaToken: window.jab ? window.jab.getData() : "",
                jab_st: window.jab_st,
                slideData: SCaptcha.getData()
            };
            SCaptcha.disSlide();
            $.ajax({
                type: "POST",
                url: "/passport/sendCheckCodeForRegister2.do",
                async: true,
                data: a,
                success: function (c) {
                    if (c.showValidCode == 1) {
                        showValidCodeWhenRegistByMobile = true;
                        jRegist.show_slide_captcha();
                        return
                    }
                    switch (c.errorCode) {
                        case 0:
                            sms.hide_audio_msg();
                            b.call();
                            break;
                        case 1000:
                            b.call();
                            sms.show_audio_msg();
                            break;
                        case 1:
                            tip.show_error_message($("#phone"), "手机号不能为空");
                            break;
                        case 20:
                            showValidCodeWhenRegistByMobile = true;
                            jRegist.show_slide_captcha();
                            break;
                        case 15:
                            tip.show_error_message($("#phone"), "格式错误，请输入正确的手机号码");
                            break;
                        case 16:
                            tip.show_error_message($("#phone"), "该手机号已存在，<a href='/src/main/webapp/passport/login_input.do'>登录</a>");
                            break;
                        case 17:
                            alert("24小时内最多只能获取短信验证码3次");
                            showValidCodeWhenRegistByMobile = true;
                            SCaptcha.setSlide();
                            sms.change_state_disable();
                            break;
                        case -1:
                            alert("系统繁忙，请稍后再试");
                            break
                    }
                }
            })
        }
    },
    phone_button_recover: function () {
        $(".y_agreement_btn").removeClass("y_agreement_btn_loading");
        $(".y_agreement_btn").text("同意协议并注册")
    },
    init_slide_captcha: function () {
        var a = {
            env: "pc-register",
            registBtn: "register_button",
            beforeCheck: function () {
                return registCheck.check_phone_regx($("#phone").val())
            },
            hidePicCaptcha: function () {
                $("#validCodeDiv").hide()
            },
            onValidateSuccess: function () {
                sms.change_state_require();
                jRegist.send_receive_code(sms.auto_send_receive_callback)
            }
        };
        SCaptcha = new SlideCaptcha(a)
    },
    init: function () {
        jRegist.focusInput();
        jRegist.capsLock();
        jRegist.tipsShowHide();
        jRegist.pswdShow();
        jRegist.loadingBtn();
        jRegist.messageBind();
        jRegist.helpCenterHover();
        jRegist.init_slide_captcha()
    }
};
registCheck = {
    check_account_regx: function (a) {
        if (a == "") {
            tip.show_error_message($("#userName"), "用户名不能为空");
            return 1
        }
        if (a.length > 20 || a.length < 4) {
            tip.show_error_message($("#userName"), "请输入正确的用户名,用户名应为4-20位字符");
            return 2
        }
        if (/^\d+$/.test(a)) {
            tip.show_error_message($("#userName"), "请输入正确的用户名,用户名不能全为数字");
            return 3
        }
        if (!/^[\u4E00-\u9FA5a-zA-Z0-9_]+$/.test(a)) {
            tip.show_error_message($("#userName"), "用户名格式错误,请输入正确的用户名");
            return 4
        }
        return 0
    },
    check_phone_regx: function (a) {
        if (a == null || a == "") {
            return false
        }
        var b = /^1[0-9]{10}$/;
        if (!b.test(a)) {
            return false
        }
        return true
    },
    check_password_regx: function () {
        var a = check_pwd1("password");
        switch (a) {
            case 0:
                tip.hide_error_message($("#password"));
                return true;
            case 1:
                tip.show_error_message($("#password"), "密码不能为空");
                break;
            case 2:
                tip.show_error_message($("#password"), "密码应为6-20位字符");
                break;
            case 3:
                tip.show_error_message($("#password"), "密码应为6-20位字符");
                break;
            case 4:
                tip.show_error_message($("#password"), "密码中不允许有空格");
                break;
            case 5:
                tip.show_error_message($("#password"), "密码不能全为数字");
                break;
            case 6:
                tip.show_error_message($("#password"), "密码不能全为字母，请包含至少1个数字或符号 ");
                break;
            case 7:
                tip.show_error_message($("#password"), "密码不能全为符号");
                break;
            case 8:
                tip.show_error_message($("#password"), "密码不能全为相同字符或数字");
                break;
            default:
                tip.show_error_message($("#password"), "6-20个大小写英文字母、符号或数字的组合")
        }
        $(".y_regist_tips_keywords").hide();
        return false
    },
    check_password2: function () {
        var b = $("#password").val();
        var a = $("#password2").val();
        if (registCheck.check_password_regx()) {
            if (b != a) {
                tip.show_error_message($("#password2"), "两次密码输入不一致")
            } else {
                tip.hide_error_message($("#password2"))
            }
        }
    },
    is_input_error: function (a) {
        if (a.parents("li").hasClass("ipt_wrong")) {
            return true
        }
        return false
    }
};

function submit_tag() {
    var a = "";
    var b = "";
    $(".preference_list a.cur").each(function (e, f) {
        a = $(f).find("input[name='tagCode']").val();
        b += a + ","
    });
    if (b.length > 0) {
        b = b.substring(0, b.length - 1)
    } else {
        alert("请选择您的喜好！");
        return
    }
    var d = "/passport/submitUserTag.do";
    var c = {
        tagStr: b
    };
    jQuery.post(d, c, function (g) {
        if (g) {
            if (g.errorCode == 0) {
                var e = $("#p").val();
                var f = $("#returnUrl").val();
                jRegist.registSucceed(e, f)
            } else {
                alert("保存失败！")
            }
        }
    })
}

function Timer() {
    this.timer = null;
    this.startInterval = function (c, b) {
        var a = function () {
        };
        if (typeof b == "function") {
            a = b
        }
        this.timer = setInterval(a, 1000)
    };
    this.start = function (c, b) {
        var a = function () {
        };
        if (typeof b == "function") {
            a = b
        }
        this.timer = setTimeout(a, 60 * 1000)
    };
    this.stop = function () {
        if (this.timer != null) {
            clearInterval(this.timer);
            this.timer = null
        }
    }
}

sms = {
    send_receive_callback: function () {
        sms.change_state_resend();
        sms.start_time_count()
    },
    auto_send_receive_callback: function () {
        $("#validCodeDiv").hide();
        $("#validPhoneCodeDiv").show();
        sms.change_state_resend();
        sms.start_time_count()
    },
    is_send_able: function () {
        if ($(".receive_code").hasClass("r_resend_code")) {
            return false
        }
        if ($(".receive_code").hasClass("r_disable_code")) {
            return false
        }
        return true
    },
    change_state_disable: function () {
        $(".receive_code").removeClass("r_require_code");
        $(".receive_code").removeClass("r_resend_code");
        $(".receive_code").addClass("r_disable_code");
        $(".receive_code").html("<span>获取验证码</span>")
    },
    change_state_require: function () {
        $(".receive_code").addClass("r_require_code");
        $(".receive_code").removeClass("r_resend_code");
        $(".receive_code").removeClass("r_disable_code");
        $(".receive_code").html("<span>获取验证码</span>")
    },
    change_state_resend: function () {
        $(".receive_code").removeClass("r_require_code");
        $(".receive_code").addClass("r_resend_code");
        $(".receive_code").removeClass("r_disable_code");
        $(".receive_code").html("重新发送(<i>60</i>)")
    },
    reset_timer_state: function () {
        if (timer1 != null) {
            timer1.stop()
        }
        if (timer2 != null) {
            timer2.stop()
        }
    },
    start_time_count: function () {
        var b = function () {
            var c = $("i", ".same_code_btn").text();
            if (c > 0) {
                c--;
                $("i", ".same_code_btn").text(c)
            }
        };
        sms.reset_timer_state();
        timer1 = new Timer();
        timer1.startInterval({}, b);
        var a = function () {
            sms.change_state_require()
        };
        timer2 = new Timer();
        timer2.start({}, a)
    },
    show_audio_msg: function () {
        var a = $("#validPhoneCode").next(".y_same_label");
        a.text("语音验证码");
        tip.show_default_message($("#validPhoneCode"), "请注意接听来电获取验证码")
    },
    is_audio_msg: function () {
        if ($("#validPhoneCode").next(".y_same_label").text() == "语音验证码") {
            return true
        } else {
            return false
        }
    },
    hide_audio_msg: function () {
        $("#validPhoneCode").next(".y_same_label").text("短信验证码");
        tip.hide_error_message($("#validPhoneCode"))
    }
};
tip = {
    message_fix: function (f) {
        var b = $("li", ".y_regist_form").height();
        var e = f.parents("li").find(".y_regist_tips").height();
        var i = (b - e) / 2;
        f.parents("li").find(".y_regist_tips").css("top", i);
        var g = !-[1];
        var a = document.documentMode;
        var j = !!window.ActiveXObject;
        var k = j && a == 9;
        if (g || k) {
            var d = f.parents("li").find(".y_regist_tips");
            var c = d.outerWidth(true);
            var h = d.outerHeight(true);
            if (d) {
                d.stop().animate({
                    opacity: 1,
                    width: c,
                    height: h
                }, 300, function () {
                })
            }
        }
    },
    message_fix2: function (d) {
        var c = !-[1];
        var f = document.documentMode;
        var g = !!window.ActiveXObject;
        var a = g && f == 9;
        if (c || a) {
            var b = d.parents("li").find(".y_regist_tips");
            var e = b.outerWidth(true);
            var h = b.outerHeight(true);
            if (b) {
                b.stop().animate({
                    opacity: 0,
                    width: 0,
                    height: 0
                }, 300, function () {
                    b.css({
                        width: e,
                        height: h
                    })
                })
            }
        }
    },
    show_error_message: function (a, b) {
        a.parents("li").addClass("ipt_wrong");
        a.parents("li").removeClass("ipt_right");
        a.parents("li").find(".y_regist_tips").removeClass("y_regist_tips_black");
        a.parents("li").find(".y_regist_tips").addClass("y_regist_tips_red");
        if (b != null) {
            a.parents("li").find(".y_tips_words").first().html(b);
            tip.message_fix(a);
            a.parents("li").addClass("ifocus")
        }
    },
    hide_error_message: function (a) {
        a.parents("li").removeClass("ipt_wrong");
        a.parents("li").addClass("ipt_right");
        a.parents("li").find(".y_regist_tips").removeClass("y_regist_tips_red");
        a.parents("li").removeClass("ifocus");
        tip.message_fix2(a)
    },
    show_default_message: function (a, b) {
        a.parents("li").removeClass("ipt_wrong");
        a.parents("li").removeClass("ipt_right");
        if (b != null) {
            a.parents("li").find(".y_regist_tips").removeClass("y_regist_tips_red");
            a.parents("li").find(".y_regist_tips").addClass("y_regist_tips_black");
            a.parents("li").find(".y_tips_words").first().html(b);
            tip.message_fix(a);
            a.parents("li").addClass("ifocus")
        }
    }
};
var jFindPw = {
    ieLower: $.browser.msie && $.browser.version == 6 || false,
    maxWidth: function (f, e) {
        if (jFindPw.ieLower) {
            var g = $(f).width();
            var h = parseInt(e);
            if (g > h) {
                $(f).width(h)
            }
        }
    },
    focusInput: function () {
        $(".ysame_input").focus(function () {
            var c = $(this).next(".y_same_label"),
                d = c.outerWidth(true);
            c.animate({
                left: -d - 20
            }, 160)
        });
        $(".ysame_input").blur(function () {
            $(this).parents("li").removeClass("ifocus")
        })
    },
    capsLock: function (c) {
        var d = false;
        $(document).keydown(function (a) {
            if (a.keyCode == 20) {
                if (d == false) {
                    d = true;
                    $(".y_set_password").addClass("caplock_open")
                } else {
                    d = false;
                    $(".y_set_password").removeClass("caplock_open")
                }
            }
        })
    },
    tipsShowHide: function () {
        $(".y_regist_tips").each(function (h) {
            var f = $("li", ".y_regist_form").height();
            var e = $(this).height();
            var g = (f - e) / 2;
            $(this).css("top", g);
            jFindPw.maxWidth(this, 160)
        })
    },
    checkStrong: function (c) {
        var d = checkPassword.getPwdPoint($(c).val());
        if (d >= 80) {
            return 3
        } else {
            if (d >= 50) {
                return 2
            } else {
                return 1
            }
        }
    },
    pswdShow: function () {
        $(".y_regist_form").delegate(".y_set_password", "keyup", function () {
            liItem = $(this).parents("li"), strenth = jRegist.checkStrong($(this));
            liItem.removeClass("ifocus");
            if (strenth == 1) {
                $(".y_regist_tips_keywords").hide();
                liItem.find(".strength_l").show()
            } else {
                if (strenth == 2) {
                    $(".y_regist_tips_keywords").hide();
                    liItem.find(".strength_m").show()
                } else {
                    if (strenth == 3) {
                        $(".y_regist_tips_keywords").hide();
                        liItem.find(".strength_h").show()
                    }
                }
            }
        })
    },
    getCaptchaUrl: function () {
        var f = "https://captcha.yhd.com";
        var d = window.location.host;
        var e = /([a-z0-9_-]+\.)*(yhd|yihaodian|1mall|111)\.(com\.hk)$/;
        if (e.test(d)) {
            f = "https://captcha.yihaodian.com.hk"
        }
        return f
    },
    refresh_valid_code: function () {
        var b = jFindPw.getCaptchaUrl() + "/public/getsig.do?t=" + Math.random();
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            url: b,
            success: function (a) {
                var e = a.sig;
                $("#validateSig").val(e);
                var f = jFindPw.getCaptchaUrl() + "/public/getjpg.do?sig=" + e;
                $("#validateImg").attr("src", f)
            }
        })
    },
    showCaptcha: function (b) {
        window.jab.showCaptcha({
            onValidateSuccess: function (a) {
                jFindPw.confirm_user(a)
            },
            onValidateFail: function (a) {
            }
        }, b)
    },
    async_wait: function (h, e, f) {
        function g(a) {
            setTimeout(function () {
                if (e() || a < 0) {
                    f()
                } else {
                    g(a - 500)
                }
            }, 500)
        }

        if (e()) {
            f()
        } else {
            g(h)
        }
    },
    confirm_user: function (d) {
        if ($("#login_account").val() == "" || $("#login_account").val() == "用户名") {
            tip.show_error_message($("#login_account"), "请输入您的账号");
            return
        }
        var c = function () {
            return window.jab != null
        };
        $("#confirmUser").html("提交中...");
        jFindPw.async_wait(8000, c, function () {
            var a = {
                account: $("#login_account").val(),
                captchaToken: (d ? d : window.jab.getData()),
                jab_st: window.jab_st,
                isCompletePassword: $("#iscompletepassword").val()
            };
            jFindPw.do_confirm_user(a)
        })
    },
    do_confirm_user: function (d) {
        var c = "/passport/confirmUserForFindPwd.do";
        $.ajax({
            type: "POST",
            data: d,
            url: c,
            success: function (a) {
                $("#confirmUser").html("下一步");
                var b = a.validateId;
                switch (a.errorCode) {
                    case "00000000":
                        var f = "/passport/chooseFindType.do?isCompletePassword=" + $("#iscompletepassword").val();
                        window.location = f;
                        return;
                    case "00000001":
                        tip.show_error_message($("#vcd"), "验证码错误");
                        jFindPw.showCaptcha(b);
                        break;
                    case "00000014":
                        jFindPw.showCaptcha(b);
                        break;
                    case "00000002":
                        tip.show_error_message($("#login_account"), "您输入的账户名不存在");
                        break;
                    case "00000003":
                        tip.show_error_message($("#login_account"), "您的账户异常，预计1个工作日内处理完毕");
                        break;
                    case "00000004":
                        tip.show_error_message($("#login_account"), "未注册邮箱及绑定手机，请致电400-007-1111找回密码");
                        break;
                    case "00000012":
                        tip.show_error_message($("#login_account"), "您的账号有安全风险已冻结，请致电400-007-1111解冻");
                        break
                }
            }
        })
    },
    send_receive_code: function () {
        if (!sms.is_send_able()) {
            return false
        } else {
            $.ajax({
                type: "POST",
                url: "/passport/sendMobileCheckCode.do",
                async: false,
                success: function (b) {
                    switch (b.errorCode) {
                        case 0:
                            sms.change_state_resend();
                            sms.start_time_count();
                            break;
                        case 1000:
                            tip.show_error_message($("#validPhoneCode"), "24小时内最多只能获取验证码5次");
                            break;
                        case 1001:
                            tip.show_error_message($("#validPhoneCode"), "短信发送太频繁了");
                            break;
                        case 1002:
                            tip.show_error_message($("#validPhoneCode"), "短信发送失败");
                            break
                    }
                }
            })
        }
    },
    check_receive_code: function () {
        var f = $("#validPhoneCode").val();
        if (f == "" || f.length != 6) {
            tip.show_error_message($("#validPhoneCode"), "短信验证码错误");
            return
        }
        var e = {
            mobileValidCode: f,
            isCompletePassword: $("#iscompletepassword").val()
        };
        var d = "/passport/validateMobileCheckCode.do";
        jQuery.post(d, e, function (a) {
            switch (a.errorCode) {
                case "00000000":
                    window.location = "/passport/updatePwdUseMobileInput.do?isCompletePassword=" + $("#iscompletepassword").val();
                    break;
                case "00000008":
                    tip.show_error_message($("#validPhoneCode"), "验证码已过期");
                    break;
                case "00000009":
                    tip.show_error_message($("#validPhoneCode"), "验证码错误");
                    break;
                case "00000010":
                    tip.show_error_message($("#validPhoneCode"), "验证码错误");
                    break;
                case "00000011":
                    tip.show_error_message($("#validPhoneCode"), "验证码已过期");
                    break
            }
        })
    },
    update_pwd_by_phone: function () {
        var d = $("#password").val();
        var c = $("#password2").val();
        if (!registCheck.check_password_regx()) {
            return false
        }
        if (d != c) {
            tip.show_error_message($("#password2"), "两次密码输入不一致");
            return false
        }
        d = encrypt.encrypt(d);
        c = encrypt.encrypt(c);
        $("#rpassword").val(d);
        $("#rpassword2").val(c);
        $("#updatapwdform").submit()
    },
    update_pwd_by_email: function () {
        var d = $("#password").val();
        var c = $("#password2").val();
        if (!registCheck.check_password_regx()) {
            return false
        }
        if (d != c) {
            tip.show_error_message($("#password2"), "两次密码输入不一致");
            return false
        }
        d = encrypt.encrypt(d);
        c = encrypt.encrypt(c);
        $("#rpassword").val(d);
        $("#rpassword2").val(c);
        $("#updatapwdform").submit()
    },
    mesBind: function () {
        $("#login_account").focus(function () {
            if ($("#iscompletepassword").val() == 1) {
                tip.show_default_message($(this), "请输入领券时手机号")
            } else {
                tip.show_default_message($(this), "请输入手机号/邮箱/用户名")
            }
        });
        $("#vcd").focus(function () {
            tip.hide_error_message($(this))
        });
        $("#changevalidate").click(function () {
            jFindPw.refresh_valid_code()
        });
        $("#confirmUser").click(function () {
            jFindPw.confirm_user()
        });
        $("#validPhoneCode").focus(function () {
            tip.show_default_message($(this), "	 如无法接受验证码，请重启手机并确认短信未被拦截！4G用户请关闭4G网络进行接收")
        });
        $(".receive_code").click(function () {
            jFindPw.send_receive_code()
        });
        $("#checkPhoneCode").click(function () {
            jFindPw.check_receive_code()
        });
        $("#password").blur(function () {
            registCheck.check_password_regx()
        });
        $("#password").focus(function () {
            $(".y_regist_tips_keywords").hide();
            tip.show_default_message($(this), "6-20个大小写英文字母、符号或数字的组合")
        });
        $("#password2").blur(function () {
            registCheck.check_password2()
        });
        $("#password2").focus(function () {
            tip.show_default_message($(this), "请再次输入密码")
        });
        $("#password2").keyup(function () {
            registCheck.check_password2()
        });
        $("#updatePwdByPhone").click(function () {
            jFindPw.update_pwd_by_phone()
        });
        $("#updatePwdByEmail").click(function () {
            jFindPw.update_pwd_by_email()
        })
    },
    init: function () {
        jFindPw.focusInput();
        jFindPw.capsLock();
        jFindPw.tipsShowHide();
        jFindPw.pswdShow();
        jFindPw.mesBind();
        jFindPw.refresh_valid_code()
    }
};
var checkPassword = {
    pwdObject: {
        pwd: "",
        pwdLength: 0,
        upperAlpCount: 0,
        lowerAlpCount: 0,
        numCount: 0,
        charCount: 0
    },
    getPwdPoint: function (b) {
        this.pwdObject.pwd = b.replace("\\s", "");
        this.pwdObject.pwdLength = this.pwdObject.pwd.length;
        var a = 0;
        a += this.pwdLengthCheck();
        a += this.pwdUpperCheck();
        a += this.pwdLowerCheck();
        a += this.pwdNumCheck();
        a += this.pwdCharCheck();
        a += this.pwdLowerRequest();
        a += this.pwdOnlyHasAlp();
        a += this.pwdOnlyHasNum();
        a += this.pwdSameLetterCheck();
        a += this.pwdSeriseUpperAlp();
        a += this.pwdSeriseLowerAlp();
        a += this.pwdSeriseNum();
        a += this.pwdSeriseAlp2Three();
        a += this.pwdSeriseNum2Three();
        return a
    },
    pwdLengthCheck: function () {
        return this.pwdObject.pwdLength * 4
    },
    pwdUpperCheck: function () {
        var b = 0;
        var a = this.pwdObject.pwd.match(/[A-Z]/g);
        if (a) {
            b = a.length
        }
        this.pwdObject.upperAlpCount = b;
        if (b <= 0) {
            return 0
        }
        return (this.pwdObject.pwdLength - b) * 2
    },
    pwdLowerCheck: function () {
        var b = 0;
        var a = this.pwdObject.pwd.match(/[a-z]/g);
        if (a) {
            b = a.length
        }
        this.pwdObject.lowerAlpCount = b;
        if (b <= 0) {
            return 0
        }
        return (this.pwdObject.pwdLength - b) * 2
    },
    pwdNumCheck: function () {
        var b = 0;
        var a = this.pwdObject.pwd.match(/[0-9]/g);
        if (a) {
            b = a.length
        }
        this.pwdObject.numCount = b;
        if (b == this.pwdObject.pwdLength) {
            return 0
        }
        return this.pwdObject.numCount * 2
    },
    pwdCharCheck: function () {
        this.pwdObject.charCount = this.pwdObject.pwdLength - this.pwdObject.upperAlpCount - this.pwdObject.lowerAlpCount - this.pwdObject.numCount;
        return this.pwdObject.charCount * 6
    },
    pwdLowerRequest: function () {
        var a = 0;
        if (this.pwdObject.pwdLength >= 6) {
            a++
        }
        if (this.pwdObject.upperAlpCount > 0) {
            a++
        }
        if (this.pwdObject.lowerAlpCount > 0) {
            a++
        }
        if (this.pwdObject.numCount > 0) {
            a++
        }
        if (this.pwdObject.charCount > 0) {
            a++
        }
        if (a < 4) {
            a = 0
        }
        return a * 2
    },
    pwdOnlyHasAlp: function () {
        if (this.pwdObject.pwdLength == (this.pwdObject.upperAlpCount + this.pwdObject.lowerAlpCount)) {
            return -this.pwdObject.pwdLength
        }
        return 0
    },
    pwdOnlyHasNum: function () {
        if (this.pwdObject.pwdLength == this.pwdObject.numCount) {
            return -this.pwdObject.pwdLength
        }
        return 0
    },
    pwdSeriseUpperAlp: function () {
        var d = 0;
        var c = this.pwdObject.pwd;
        var b = /[A-Z]/;
        for (var a = 0; a < c.length - 1; a++) {
            if (b.test(c[a]) && b.test(c[a + 1])) {
                d++
            }
        }
        return -2 * d
    },
    pwdSeriseLowerAlp: function () {
        var d = 0;
        var c = this.pwdObject.pwd;
        var b = /[a-z]/;
        for (var a = 0; a < c.length - 1; a++) {
            if (b.test(c[a]) && b.test(c[a + 1])) {
                d++
            }
        }
        return -2 * d
    },
    pwdSeriseNum: function () {
        var d = 0;
        var c = this.pwdObject.pwd;
        var b = /[0-9]/;
        for (var a = 0; a < c.length - 1; a++) {
            if (b.test(c[a]) && b.test(c[a + 1])) {
                d++
            }
        }
        return -2 * d
    },
    pwdSeriseAlp2Three: function () {
        var d = 0;
        var c = this.pwdObject.pwd.toLocaleLowerCase();
        var b = /[a-z]/;
        for (var a = 0; a < c.length - 2; a++) {
            if (b.test(c[a]) && (c.charCodeAt(a + 1) == (c.charCodeAt(a) + 1)) && (c.charCodeAt(a + 2) == (c.charCodeAt(a) + 2))) {
                d++
            }
        }
        return -3 * d
    },
    pwdSeriseNum2Three: function () {
        var d = 0;
        var c = this.pwdObject.pwd;
        var b = /[0-9]/;
        for (var a = 0; a < c.length - 2; a++) {
            if (b.test(c[a]) && (c.charCodeAt(a + 1) == (c.charCodeAt(a) + 1)) && (c.charCodeAt(a + 2) == (c.charCodeAt(a) + 2))) {
                d++
            }
        }
        return -3 * d
    },
    pwdSameLetterCheck: function () {
        var d = {};
        var c = this.pwdObject.pwd.toLocaleLowerCase();
        for (var f = 0; f < c.length; f++) {
            if (d[c[f]]) {
                d[c[f]]++
            } else {
                d[c[f]] = 1
            }
        }
        var a = 0;
        for (var b in d) {
            var e = d[b];
            if (e > 0) {
                a += e * (e - 1)
            }
        }
        return -a
    }
};
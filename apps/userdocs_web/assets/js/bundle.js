/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/chrome_app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../deps/phoenix/priv/static/phoenix.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/johnd/OneDrive/Documents/GitHub/userdocs_umbrella/deps/phoenix/priv/static/phoenix.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  return function (e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var o = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
      return i;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    (function (t) {
      e.exports = t.Phoenix = n(2);
    }).call(this, n(1));
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function i(e) {
      return function (e) {
        if (Array.isArray(e)) return a(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || s(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }

    function r(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            i = !0,
            o = !1,
            r = void 0;

        try {
          for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
        } catch (e) {
          o = !0, r = e;
        } finally {
          try {
            i || null == a.return || a.return();
          } finally {
            if (o) throw r;
          }
        }

        return n;
      }(e, t) || s(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function s(e, t) {
      if (e) {
        if ("string" == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
      }
    }

    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];

      return i;
    }

    function c(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    function h(e, t, n) {
      return t && u(e.prototype, t), n && u(e, n), e;
    }

    n.r(t), n.d(t, "Channel", function () {
      return A;
    }), n.d(t, "Serializer", function () {
      return M;
    }), n.d(t, "Socket", function () {
      return J;
    }), n.d(t, "LongPoll", function () {
      return H;
    }), n.d(t, "Ajax", function () {
      return D;
    }), n.d(t, "Presence", function () {
      return B;
    });

    var l = "undefined" != typeof self ? self : null,
        f = "undefined" != typeof window ? window : null,
        d = l || f || void 0,
        p = 0,
        v = 1,
        y = 2,
        m = 3,
        g = "closed",
        k = "errored",
        b = "joined",
        j = "joining",
        C = "leaving",
        R = "phx_close",
        S = "phx_error",
        T = "phx_join",
        w = "phx_reply",
        E = "phx_leave",
        x = [R, S, T, w, E],
        O = "longpoll",
        P = "websocket",
        L = function (e) {
      if ("function" == typeof e) return e;
      return function () {
        return e;
      };
    },
        _ = function () {
      function e(t, n, i, o) {
        c(this, e), this.channel = t, this.event = n, this.payload = i || function () {
          return {};
        }, this.receivedResp = null, this.timeout = o, this.timeoutTimer = null, this.recHooks = [], this.sent = !1;
      }

      return h(e, [{
        key: "resend",
        value: function (e) {
          this.timeout = e, this.reset(), this.send();
        }
      }, {
        key: "send",
        value: function () {
          this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload(),
            ref: this.ref,
            join_ref: this.channel.joinRef()
          }));
        }
      }, {
        key: "receive",
        value: function (e, t) {
          return this.hasReceived(e) && t(this.receivedResp.response), this.recHooks.push({
            status: e,
            callback: t
          }), this;
        }
      }, {
        key: "reset",
        value: function () {
          this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1;
        }
      }, {
        key: "matchReceive",
        value: function (e) {
          var t = e.status,
              n = e.response;
          e.ref;
          this.recHooks.filter(function (e) {
            return e.status === t;
          }).forEach(function (e) {
            return e.callback(n);
          });
        }
      }, {
        key: "cancelRefEvent",
        value: function () {
          this.refEvent && this.channel.off(this.refEvent);
        }
      }, {
        key: "cancelTimeout",
        value: function () {
          clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
        }
      }, {
        key: "startTimeout",
        value: function () {
          var e = this;
          this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, function (t) {
            e.cancelRefEvent(), e.cancelTimeout(), e.receivedResp = t, e.matchReceive(t);
          }), this.timeoutTimer = setTimeout(function () {
            e.trigger("timeout", {});
          }, this.timeout);
        }
      }, {
        key: "hasReceived",
        value: function (e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      }, {
        key: "trigger",
        value: function (e, t) {
          this.channel.trigger(this.refEvent, {
            status: e,
            response: t
          });
        }
      }]), e;
    }(),
        A = function () {
      function e(t, n, i) {
        var o = this;
        c(this, e), this.state = g, this.topic = t, this.params = L(n || {}), this.socket = i, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new _(this, T, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new I(function () {
          o.socket.isConnected() && o.rejoin();
        }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(function () {
          return o.rejoinTimer.reset();
        })), this.stateChangeRefs.push(this.socket.onOpen(function () {
          o.rejoinTimer.reset(), o.isErrored() && o.rejoin();
        })), this.joinPush.receive("ok", function () {
          o.state = b, o.rejoinTimer.reset(), o.pushBuffer.forEach(function (e) {
            return e.send();
          }), o.pushBuffer = [];
        }), this.joinPush.receive("error", function () {
          o.state = k, o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.onClose(function () {
          o.rejoinTimer.reset(), o.socket.hasLogger() && o.socket.log("channel", "close ".concat(o.topic, " ").concat(o.joinRef())), o.state = g, o.socket.remove(o);
        }), this.onError(function (e) {
          o.socket.hasLogger() && o.socket.log("channel", "error ".concat(o.topic), e), o.isJoining() && o.joinPush.reset(), o.state = k, o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.joinPush.receive("timeout", function () {
          o.socket.hasLogger() && o.socket.log("channel", "timeout ".concat(o.topic, " (").concat(o.joinRef(), ")"), o.joinPush.timeout), new _(o, E, L({}), o.timeout).send(), o.state = k, o.joinPush.reset(), o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.on(w, function (e, t) {
          o.trigger(o.replyEventName(t), e);
        });
      }

      return h(e, [{
        key: "join",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          if (this.joinedOnce) throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
          return this.timeout = e, this.joinedOnce = !0, this.rejoin(), this.joinPush;
        }
      }, {
        key: "onClose",
        value: function (e) {
          this.on(R, e);
        }
      }, {
        key: "onError",
        value: function (e) {
          return this.on(S, function (t) {
            return e(t);
          });
        }
      }, {
        key: "on",
        value: function (e, t) {
          var n = this.bindingRef++;
          return this.bindings.push({
            event: e,
            ref: n,
            callback: t
          }), n;
        }
      }, {
        key: "off",
        value: function (e, t) {
          this.bindings = this.bindings.filter(function (n) {
            return !(n.event === e && (void 0 === t || t === n.ref));
          });
        }
      }, {
        key: "canPush",
        value: function () {
          return this.socket.isConnected() && this.isJoined();
        }
      }, {
        key: "push",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.timeout;
          if (!this.joinedOnce) throw new Error("tried to push '".concat(e, "' to '").concat(this.topic, "' before joining. Use channel.join() before pushing events"));
          var i = new _(this, e, function () {
            return t;
          }, n);
          return this.canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)), i;
        }
      }, {
        key: "leave",
        value: function () {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = C;

          var n = function () {
            e.socket.hasLogger() && e.socket.log("channel", "leave ".concat(e.topic)), e.trigger(R, "leave");
          },
              i = new _(this, E, L({}), t);

          return i.receive("ok", function () {
            return n();
          }).receive("timeout", function () {
            return n();
          }), i.send(), this.canPush() || i.trigger("ok", {}), i;
        }
      }, {
        key: "onMessage",
        value: function (e, t, n) {
          return t;
        }
      }, {
        key: "isLifecycleEvent",
        value: function (e) {
          return x.indexOf(e) >= 0;
        }
      }, {
        key: "isMember",
        value: function (e, t, n, i) {
          return this.topic === e && (!i || i === this.joinRef() || !this.isLifecycleEvent(t) || (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
            topic: e,
            event: t,
            payload: n,
            joinRef: i
          }), !1));
        }
      }, {
        key: "joinRef",
        value: function () {
          return this.joinPush.ref;
        }
      }, {
        key: "rejoin",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = j, this.joinPush.resend(e));
        }
      }, {
        key: "trigger",
        value: function (e, t, n, i) {
          var o = this.onMessage(e, t, n, i);
          if (t && !o) throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");

          for (var r = this.bindings.filter(function (t) {
            return t.event === e;
          }), s = 0; s < r.length; s++) {
            r[s].callback(o, n, i || this.joinRef());
          }
        }
      }, {
        key: "replyEventName",
        value: function (e) {
          return "chan_reply_".concat(e);
        }
      }, {
        key: "isClosed",
        value: function () {
          return this.state === g;
        }
      }, {
        key: "isErrored",
        value: function () {
          return this.state === k;
        }
      }, {
        key: "isJoined",
        value: function () {
          return this.state === b;
        }
      }, {
        key: "isJoining",
        value: function () {
          return this.state === j;
        }
      }, {
        key: "isLeaving",
        value: function () {
          return this.state === C;
        }
      }]), e;
    }(),
        M = {
      encode: function (e, t) {
        var n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return t(JSON.stringify(n));
      },
      decode: function (e, t) {
        var n = r(JSON.parse(e), 5);
        return t({
          join_ref: n[0],
          ref: n[1],
          topic: n[2],
          event: n[3],
          payload: n[4]
        });
      }
    },
        J = function () {
      function e(t) {
        var n = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c(this, e), this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: []
        }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i.timeout || 1e4, this.transport = i.transport || d.WebSocket || H, this.defaultEncoder = M.encode, this.defaultDecoder = M.decode, this.closeWasClean = !1, this.unloaded = !1, this.binaryType = i.binaryType || "arraybuffer", this.transport !== H ? (this.encode = i.encode || this.defaultEncoder, this.decode = i.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), f && f.addEventListener && f.addEventListener("unload", function (e) {
          n.conn && (n.unloaded = !0, n.abnormalClose("unloaded"));
        }), this.heartbeatIntervalMs = i.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = function (e) {
          return i.rejoinAfterMs ? i.rejoinAfterMs(e) : [1e3, 2e3, 5e3][e - 1] || 1e4;
        }, this.reconnectAfterMs = function (e) {
          return n.unloaded ? 100 : i.reconnectAfterMs ? i.reconnectAfterMs(e) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e - 1] || 5e3;
        }, this.logger = i.logger || null, this.longpollerTimeout = i.longpollerTimeout || 2e4, this.params = L(i.params || {}), this.endPoint = "".concat(t, "/").concat(P), this.vsn = i.vsn || "2.0.0", this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new I(function () {
          n.teardown(function () {
            return n.connect();
          });
        }, this.reconnectAfterMs);
      }

      return h(e, [{
        key: "protocol",
        value: function () {
          return location.protocol.match(/^https/) ? "wss" : "ws";
        }
      }, {
        key: "endPointURL",
        value: function () {
          var e = D.appendParams(D.appendParams(this.endPoint, this.params()), {
            vsn: this.vsn
          });
          return "/" !== e.charAt(0) ? e : "/" === e.charAt(1) ? "".concat(this.protocol(), ":").concat(e) : "".concat(this.protocol(), "://").concat(location.host).concat(e);
        }
      }, {
        key: "disconnect",
        value: function (e, t, n) {
          this.closeWasClean = !0, this.reconnectTimer.reset(), this.teardown(e, t, n);
        }
      }, {
        key: "connect",
        value: function (e) {
          var t = this;
          e && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = L(e)), this.conn || (this.closeWasClean = !1, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function () {
            return t.onConnOpen();
          }, this.conn.onerror = function (e) {
            return t.onConnError(e);
          }, this.conn.onmessage = function (e) {
            return t.onConnMessage(e);
          }, this.conn.onclose = function (e) {
            return t.onConnClose(e);
          });
        }
      }, {
        key: "log",
        value: function (e, t, n) {
          this.logger(e, t, n);
        }
      }, {
        key: "hasLogger",
        value: function () {
          return null !== this.logger;
        }
      }, {
        key: "onOpen",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.open.push([t, e]), t;
        }
      }, {
        key: "onClose",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.close.push([t, e]), t;
        }
      }, {
        key: "onError",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.error.push([t, e]), t;
        }
      }, {
        key: "onMessage",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.message.push([t, e]), t;
        }
      }, {
        key: "onConnOpen",
        value: function () {
          this.hasLogger() && this.log("transport", "connected to ".concat(this.endPointURL())), this.unloaded = !1, this.closeWasClean = !1, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(function (e) {
            return (0, r(e, 2)[1])();
          });
        }
      }, {
        key: "resetHeartbeat",
        value: function () {
          var e = this;
          this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(function () {
            return e.sendHeartbeat();
          }, this.heartbeatIntervalMs));
        }
      }, {
        key: "teardown",
        value: function (e, t, n) {
          var i = this;
          if (!this.conn) return e && e();
          this.waitForBufferDone(function () {
            i.conn && (t ? i.conn.close(t, n || "") : i.conn.close()), i.waitForSocketClosed(function () {
              i.conn && (i.conn.onclose = function () {}, i.conn = null), e && e();
            });
          });
        }
      }, {
        key: "waitForBufferDone",
        value: function (e) {
          var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          5 !== n && this.conn && this.conn.bufferedAmount ? setTimeout(function () {
            t.waitForBufferDone(e, n + 1);
          }, 150 * n) : e();
        }
      }, {
        key: "waitForSocketClosed",
        value: function (e) {
          var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          5 !== n && this.conn && this.conn.readyState !== m ? setTimeout(function () {
            t.waitForSocketClosed(e, n + 1);
          }, 150 * n) : e();
        }
      }, {
        key: "onConnClose",
        value: function (e) {
          this.hasLogger() && this.log("transport", "close", e), this.triggerChanError(), clearInterval(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(function (t) {
            return (0, r(t, 2)[1])(e);
          });
        }
      }, {
        key: "onConnError",
        value: function (e) {
          this.hasLogger() && this.log("transport", e), this.triggerChanError(), this.stateChangeCallbacks.error.forEach(function (t) {
            return (0, r(t, 2)[1])(e);
          });
        }
      }, {
        key: "triggerChanError",
        value: function () {
          this.channels.forEach(function (e) {
            e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(S);
          });
        }
      }, {
        key: "connectionState",
        value: function () {
          switch (this.conn && this.conn.readyState) {
            case p:
              return "connecting";

            case v:
              return "open";

            case y:
              return "closing";

            default:
              return "closed";
          }
        }
      }, {
        key: "isConnected",
        value: function () {
          return "open" === this.connectionState();
        }
      }, {
        key: "remove",
        value: function (e) {
          this.off(e.stateChangeRefs), this.channels = this.channels.filter(function (t) {
            return t.joinRef() !== e.joinRef();
          });
        }
      }, {
        key: "off",
        value: function (e) {
          for (var t in this.stateChangeCallbacks) this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(function (t) {
            var n = r(t, 1)[0];
            return -1 === e.indexOf(n);
          });
        }
      }, {
        key: "channel",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = new A(e, t, this);
          return this.channels.push(n), n;
        }
      }, {
        key: "push",
        value: function (e) {
          var t = this;

          if (this.hasLogger()) {
            var n = e.topic,
                i = e.event,
                o = e.payload,
                r = e.ref,
                s = e.join_ref;
            this.log("push", "".concat(n, " ").concat(i, " (").concat(s, ", ").concat(r, ")"), o);
          }

          this.isConnected() ? this.encode(e, function (e) {
            return t.conn.send(e);
          }) : this.sendBuffer.push(function () {
            return t.encode(e, function (e) {
              return t.conn.send(e);
            });
          });
        }
      }, {
        key: "makeRef",
        value: function () {
          var e = this.ref + 1;
          return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
        }
      }, {
        key: "sendHeartbeat",
        value: function () {
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef) return this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void this.abnormalClose("heartbeat timeout");
            this.pendingHeartbeatRef = this.makeRef(), this.push({
              topic: "phoenix",
              event: "heartbeat",
              payload: {},
              ref: this.pendingHeartbeatRef
            });
          }
        }
      }, {
        key: "abnormalClose",
        value: function (e) {
          this.closeWasClean = !1, this.conn.close(1e3, e);
        }
      }, {
        key: "flushSendBuffer",
        value: function () {
          this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(function (e) {
            return e();
          }), this.sendBuffer = []);
        }
      }, {
        key: "onConnMessage",
        value: function (e) {
          var t = this;
          this.decode(e.data, function (e) {
            var n = e.topic,
                i = e.event,
                o = e.payload,
                s = e.ref,
                a = e.join_ref;
            s && s === t.pendingHeartbeatRef && (t.pendingHeartbeatRef = null), t.hasLogger() && t.log("receive", "".concat(o.status || "", " ").concat(n, " ").concat(i, " ").concat(s && "(" + s + ")" || ""), o);

            for (var c = 0; c < t.channels.length; c++) {
              var u = t.channels[c];
              u.isMember(n, i, o, a) && u.trigger(i, o, s, a);
            }

            for (var h = 0; h < t.stateChangeCallbacks.message.length; h++) {
              (0, r(t.stateChangeCallbacks.message[h], 2)[1])(e);
            }
          });
        }
      }, {
        key: "leaveOpenTopic",
        value: function (e) {
          var t = this.channels.find(function (t) {
            return t.topic === e && (t.isJoined() || t.isJoining());
          });
          t && (this.hasLogger() && this.log("transport", 'leaving duplicate topic "'.concat(e, '"')), t.leave());
        }
      }]), e;
    }(),
        H = function () {
      function e(t) {
        c(this, e), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.onopen = function () {}, this.onerror = function () {}, this.onmessage = function () {}, this.onclose = function () {}, this.pollEndpoint = this.normalizeEndpoint(t), this.readyState = p, this.poll();
      }

      return h(e, [{
        key: "normalizeEndpoint",
        value: function (e) {
          return e.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + P), "$1/" + O);
        }
      }, {
        key: "endpointURL",
        value: function () {
          return D.appendParams(this.pollEndpoint, {
            token: this.token
          });
        }
      }, {
        key: "closeAndRetry",
        value: function () {
          this.close(), this.readyState = p;
        }
      }, {
        key: "ontimeout",
        value: function () {
          this.onerror("timeout"), this.closeAndRetry();
        }
      }, {
        key: "poll",
        value: function () {
          var e = this;
          this.readyState !== v && this.readyState !== p || D.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), function (t) {
            if (t) {
              var n = t.status,
                  i = t.token,
                  o = t.messages;
              e.token = i;
            } else n = 0;

            switch (n) {
              case 200:
                o.forEach(function (t) {
                  return e.onmessage({
                    data: t
                  });
                }), e.poll();
                break;

              case 204:
                e.poll();
                break;

              case 410:
                e.readyState = v, e.onopen(), e.poll();
                break;

              case 403:
                e.onerror(), e.close();
                break;

              case 0:
              case 500:
                e.onerror(), e.closeAndRetry();
                break;

              default:
                throw new Error("unhandled poll status ".concat(n));
            }
          });
        }
      }, {
        key: "send",
        value: function (e) {
          var t = this;
          D.request("POST", this.endpointURL(), "application/json", e, this.timeout, this.onerror.bind(this, "timeout"), function (e) {
            e && 200 === e.status || (t.onerror(e && e.status), t.closeAndRetry());
          });
        }
      }, {
        key: "close",
        value: function (e, t) {
          this.readyState = m, this.onclose();
        }
      }]), e;
    }(),
        D = function () {
      function e() {
        c(this, e);
      }

      return h(e, null, [{
        key: "request",
        value: function (e, t, n, i, o, r, s) {
          if (d.XDomainRequest) {
            var a = new XDomainRequest();
            this.xdomainRequest(a, e, t, i, o, r, s);
          } else {
            var c = new d.XMLHttpRequest();
            this.xhrRequest(c, e, t, n, i, o, r, s);
          }
        }
      }, {
        key: "xdomainRequest",
        value: function (e, t, n, i, o, r, s) {
          var a = this;
          e.timeout = o, e.open(t, n), e.onload = function () {
            var t = a.parseJSON(e.responseText);
            s && s(t);
          }, r && (e.ontimeout = r), e.onprogress = function () {}, e.send(i);
        }
      }, {
        key: "xhrRequest",
        value: function (e, t, n, i, o, r, s, a) {
          var c = this;
          e.open(t, n, !0), e.timeout = r, e.setRequestHeader("Content-Type", i), e.onerror = function () {
            a && a(null);
          }, e.onreadystatechange = function () {
            if (e.readyState === c.states.complete && a) {
              var t = c.parseJSON(e.responseText);
              a(t);
            }
          }, s && (e.ontimeout = s), e.send(o);
        }
      }, {
        key: "parseJSON",
        value: function (e) {
          if (!e || "" === e) return null;

          try {
            return JSON.parse(e);
          } catch (t) {
            return console && console.log("failed to parse JSON response", e), null;
          }
        }
      }, {
        key: "serialize",
        value: function (e, t) {
          var n = [];

          for (var i in e) if (e.hasOwnProperty(i)) {
            var r = t ? "".concat(t, "[").concat(i, "]") : i,
                s = e[i];
            "object" === o(s) ? n.push(this.serialize(s, r)) : n.push(encodeURIComponent(r) + "=" + encodeURIComponent(s));
          }

          return n.join("&");
        }
      }, {
        key: "appendParams",
        value: function (e, t) {
          if (0 === Object.keys(t).length) return e;
          var n = e.match(/\?/) ? "&" : "?";
          return "".concat(e).concat(n).concat(this.serialize(t));
        }
      }]), e;
    }();

    D.states = {
      complete: 4
    };

    var B = function () {
      function e(t) {
        var n = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c(this, e);
        var o = i.events || {
          state: "presence_state",
          diff: "presence_diff"
        };
        this.state = {}, this.pendingDiffs = [], this.channel = t, this.joinRef = null, this.caller = {
          onJoin: function () {},
          onLeave: function () {},
          onSync: function () {}
        }, this.channel.on(o.state, function (t) {
          var i = n.caller,
              o = i.onJoin,
              r = i.onLeave,
              s = i.onSync;
          n.joinRef = n.channel.joinRef(), n.state = e.syncState(n.state, t, o, r), n.pendingDiffs.forEach(function (t) {
            n.state = e.syncDiff(n.state, t, o, r);
          }), n.pendingDiffs = [], s();
        }), this.channel.on(o.diff, function (t) {
          var i = n.caller,
              o = i.onJoin,
              r = i.onLeave,
              s = i.onSync;
          n.inPendingSyncState() ? n.pendingDiffs.push(t) : (n.state = e.syncDiff(n.state, t, o, r), s());
        });
      }

      return h(e, [{
        key: "onJoin",
        value: function (e) {
          this.caller.onJoin = e;
        }
      }, {
        key: "onLeave",
        value: function (e) {
          this.caller.onLeave = e;
        }
      }, {
        key: "onSync",
        value: function (e) {
          this.caller.onSync = e;
        }
      }, {
        key: "list",
        value: function (t) {
          return e.list(this.state, t);
        }
      }, {
        key: "inPendingSyncState",
        value: function () {
          return !this.joinRef || this.joinRef !== this.channel.joinRef();
        }
      }], [{
        key: "syncState",
        value: function (e, t, n, i) {
          var o = this,
              r = this.clone(e),
              s = {},
              a = {};
          return this.map(r, function (e, n) {
            t[e] || (a[e] = n);
          }), this.map(t, function (e, t) {
            var n = r[e];

            if (n) {
              var i = t.metas.map(function (e) {
                return e.phx_ref;
              }),
                  c = n.metas.map(function (e) {
                return e.phx_ref;
              }),
                  u = t.metas.filter(function (e) {
                return c.indexOf(e.phx_ref) < 0;
              }),
                  h = n.metas.filter(function (e) {
                return i.indexOf(e.phx_ref) < 0;
              });
              u.length > 0 && (s[e] = t, s[e].metas = u), h.length > 0 && (a[e] = o.clone(n), a[e].metas = h);
            } else s[e] = t;
          }), this.syncDiff(r, {
            joins: s,
            leaves: a
          }, n, i);
        }
      }, {
        key: "syncDiff",
        value: function (e, t, n, o) {
          var r = t.joins,
              s = t.leaves,
              a = this.clone(e);
          return n || (n = function () {}), o || (o = function () {}), this.map(r, function (e, t) {
            var o = a[e];

            if (a[e] = t, o) {
              var r,
                  s = a[e].metas.map(function (e) {
                return e.phx_ref;
              }),
                  c = o.metas.filter(function (e) {
                return s.indexOf(e.phx_ref) < 0;
              });
              (r = a[e].metas).unshift.apply(r, i(c));
            }

            n(e, o, t);
          }), this.map(s, function (e, t) {
            var n = a[e];

            if (n) {
              var i = t.metas.map(function (e) {
                return e.phx_ref;
              });
              n.metas = n.metas.filter(function (e) {
                return i.indexOf(e.phx_ref) < 0;
              }), o(e, n, t), 0 === n.metas.length && delete a[e];
            }
          }), a;
        }
      }, {
        key: "list",
        value: function (e, t) {
          return t || (t = function (e, t) {
            return t;
          }), this.map(e, function (e, n) {
            return t(e, n);
          });
        }
      }, {
        key: "map",
        value: function (e, t) {
          return Object.getOwnPropertyNames(e).map(function (n) {
            return t(n, e[n]);
          });
        }
      }, {
        key: "clone",
        value: function (e) {
          return JSON.parse(JSON.stringify(e));
        }
      }]), e;
    }(),
        I = function () {
      function e(t, n) {
        c(this, e), this.callback = t, this.timerCalc = n, this.timer = null, this.tries = 0;
      }

      return h(e, [{
        key: "reset",
        value: function () {
          this.tries = 0, clearTimeout(this.timer);
        }
      }, {
        key: "scheduleTimeout",
        value: function () {
          var e = this;
          clearTimeout(this.timer), this.timer = setTimeout(function () {
            e.tries = e.tries + 1, e.callback();
          }, this.timerCalc(this.tries + 1));
        }
      }]), e;
    }();
  }]);
});

/***/ }),

/***/ "../../../deps/phoenix_html/priv/static/phoenix_html.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/johnd/OneDrive/Documents/GitHub/userdocs_umbrella/deps/phoenix_html/priv/static/phoenix_html.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var PolyfillEvent = eventConstructor();

  function eventConstructor() {
    if (typeof window.CustomEvent === "function") return window.CustomEvent; // IE<=9 Support

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    return CustomEvent;
  }

  function buildHiddenInput(name, value) {
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    return input;
  }

  function handleClick(element) {
    var to = element.getAttribute("data-to"),
        method = buildHiddenInput("_method", element.getAttribute("data-method")),
        csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")),
        form = document.createElement("form"),
        target = element.getAttribute("target");
    form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
    form.action = to;
    form.style.display = "hidden";
    if (target) form.target = target;
    form.appendChild(csrf);
    form.appendChild(method);
    document.body.appendChild(form);
    form.submit();
  }

  window.addEventListener("click", function (e) {
    var element = e.target;

    while (element && element.getAttribute) {
      var phoenixLinkEvent = new PolyfillEvent('phoenix.link.click', {
        "bubbles": true,
        "cancelable": true
      });

      if (!element.dispatchEvent(phoenixLinkEvent)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      }

      if (element.getAttribute("data-method")) {
        handleClick(element);
        e.preventDefault();
        return false;
      } else {
        element = element.parentNode;
      }
    }
  }, false);
  window.addEventListener('phoenix.link.click', function (e) {
    var message = e.target.getAttribute("data-confirm");

    if (message && !window.confirm(message)) {
      e.preventDefault();
    }
  }, false);
})();

/***/ }),

/***/ "../../../deps/phoenix_live_view/priv/static/phoenix_live_view.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/johnd/OneDrive/Documents/GitHub/userdocs_umbrella/deps/phoenix_live_view/priv/static/phoenix_live_view.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  return function (e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var r = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: i
      });
    }, n.r = function (e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 2);
  }([function (e, t, n) {
    "use strict";

    n.r(t);
    var i,
        r = 11;
    var o = "http://www.w3.org/1999/xhtml",
        a = "undefined" == typeof document ? void 0 : document,
        u = !!a && "content" in a.createElement("template"),
        c = !!a && a.createRange && "createContextualFragment" in a.createRange();

    function s(e) {
      return e = e.trim(), u ? function (e) {
        var t = a.createElement("template");
        return t.innerHTML = e, t.content.childNodes[0];
      }(e) : c ? function (e) {
        return i || (i = a.createRange()).selectNode(a.body), i.createContextualFragment(e).childNodes[0];
      }(e) : function (e) {
        var t = a.createElement("body");
        return t.innerHTML = e, t.childNodes[0];
      }(e);
    }

    function l(e, t) {
      var n,
          i,
          r = e.nodeName,
          o = t.nodeName;
      return r === o || (n = r.charCodeAt(0), i = o.charCodeAt(0), n <= 90 && i >= 97 ? r === o.toUpperCase() : i <= 90 && n >= 97 && o === r.toUpperCase());
    }

    function d(e, t, n) {
      e[n] !== t[n] && (e[n] = t[n], e[n] ? e.setAttribute(n, "") : e.removeAttribute(n));
    }

    var h = {
      OPTION: function (e, t) {
        var n = e.parentNode;

        if (n) {
          var i = n.nodeName.toUpperCase();
          "OPTGROUP" === i && (i = (n = n.parentNode) && n.nodeName.toUpperCase()), "SELECT" !== i || n.hasAttribute("multiple") || (e.hasAttribute("selected") && !t.selected && (e.setAttribute("selected", "selected"), e.removeAttribute("selected")), n.selectedIndex = -1);
        }

        d(e, t, "selected");
      },
      INPUT: function (e, t) {
        d(e, t, "checked"), d(e, t, "disabled"), e.value !== t.value && (e.value = t.value), t.hasAttribute("value") || e.removeAttribute("value");
      },
      TEXTAREA: function (e, t) {
        var n = t.value;
        e.value !== n && (e.value = n);
        var i = e.firstChild;

        if (i) {
          var r = i.nodeValue;
          if (r == n || !n && r == e.placeholder) return;
          i.nodeValue = n;
        }
      },
      SELECT: function (e, t) {
        if (!t.hasAttribute("multiple")) {
          for (var n, i, r = -1, o = 0, a = e.firstChild; a;) if ("OPTGROUP" === (i = a.nodeName && a.nodeName.toUpperCase())) a = (n = a).firstChild;else {
            if ("OPTION" === i) {
              if (a.hasAttribute("selected")) {
                r = o;
                break;
              }

              o++;
            }

            !(a = a.nextSibling) && n && (a = n.nextSibling, n = null);
          }

          e.selectedIndex = r;
        }
      }
    },
        f = 1,
        v = 11,
        p = 3,
        g = 8;

    function m() {}

    function y(e) {
      if (e) return e.getAttribute && e.getAttribute("id") || e.id;
    }

    var b = function (e) {
      return function (t, n, i) {
        if (i || (i = {}), "string" == typeof n) if ("#document" === t.nodeName || "HTML" === t.nodeName || "BODY" === t.nodeName) {
          var r = n;
          (n = a.createElement("html")).innerHTML = r;
        } else n = s(n);
        var u = i.getNodeKey || y,
            c = i.onBeforeNodeAdded || m,
            d = i.onNodeAdded || m,
            b = i.onBeforeElUpdated || m,
            k = i.onElUpdated || m,
            w = i.onBeforeNodeDiscarded || m,
            E = i.onNodeDiscarded || m,
            x = i.onBeforeElChildrenUpdated || m,
            S = !0 === i.childrenOnly,
            A = Object.create(null),
            C = [];

        function P(e) {
          C.push(e);
        }

        function L(e, t, n) {
          !1 !== w(e) && (t && t.removeChild(e), E(e), function e(t, n) {
            if (t.nodeType === f) for (var i = t.firstChild; i;) {
              var r = void 0;
              n && (r = u(i)) ? P(r) : (E(i), i.firstChild && e(i, n)), i = i.nextSibling;
            }
          }(e, n));
        }

        function T(e) {
          d(e);

          for (var t = e.firstChild; t;) {
            var n = t.nextSibling,
                i = u(t);

            if (i) {
              var r = A[i];
              r && l(t, r) ? (t.parentNode.replaceChild(r, t), I(r, t)) : T(t);
            } else T(t);

            t = n;
          }
        }

        function I(t, n, i) {
          var r = u(n);

          if (r && delete A[r], !i) {
            if (!1 === b(t, n)) return;
            if (e(t, n), k(t), !1 === x(t, n)) return;
          }

          "TEXTAREA" !== t.nodeName ? function (e, t) {
            var n,
                i,
                r,
                o,
                s,
                d = t.firstChild,
                v = e.firstChild;

            e: for (; d;) {
              for (o = d.nextSibling, n = u(d); v;) {
                if (r = v.nextSibling, d.isSameNode && d.isSameNode(v)) {
                  d = o, v = r;
                  continue e;
                }

                i = u(v);
                var m = v.nodeType,
                    y = void 0;

                if (m === d.nodeType && (m === f ? (n ? n !== i && ((s = A[n]) ? r === s ? y = !1 : (e.insertBefore(s, v), i ? P(i) : L(v, e, !0), v = s) : y = !1) : i && (y = !1), (y = !1 !== y && l(v, d)) && I(v, d)) : m !== p && m != g || (y = !0, v.nodeValue !== d.nodeValue && (v.nodeValue = d.nodeValue))), y) {
                  d = o, v = r;
                  continue e;
                }

                i ? P(i) : L(v, e, !0), v = r;
              }

              if (n && (s = A[n]) && l(s, d)) e.appendChild(s), I(s, d);else {
                var b = c(d);
                !1 !== b && (b && (d = b), d.actualize && (d = d.actualize(e.ownerDocument || a)), e.appendChild(d), T(d));
              }
              d = o, v = r;
            }

            !function (e, t, n) {
              for (; t;) {
                var i = t.nextSibling;
                (n = u(t)) ? P(n) : L(t, e, !0), t = i;
              }
            }(e, v, i);
            var k = h[e.nodeName];
            k && k(e, t);
          }(t, n) : h.TEXTAREA(t, n);
        }

        !function e(t) {
          if (t.nodeType === f || t.nodeType === v) for (var n = t.firstChild; n;) {
            var i = u(n);
            i && (A[i] = n), e(n), n = n.nextSibling;
          }
        }(t);
        var D = t,
            _ = D.nodeType,
            N = n.nodeType;
        if (!S) if (_ === f) N === f ? l(t, n) || (E(t), D = function (e, t) {
          for (var n = e.firstChild; n;) {
            var i = n.nextSibling;
            t.appendChild(n), n = i;
          }

          return t;
        }(t, function (e, t) {
          return t && t !== o ? a.createElementNS(t, e) : a.createElement(e);
        }(n.nodeName, n.namespaceURI))) : D = n;else if (_ === p || _ === g) {
          if (N === _) return D.nodeValue !== n.nodeValue && (D.nodeValue = n.nodeValue), D;
          D = n;
        }
        if (D === n) E(t);else {
          if (n.isSameNode && n.isSameNode(D)) return;
          if (I(D, n, S), C) for (var R = 0, O = C.length; R < O; R++) {
            var H = A[C[R]];
            H && L(H, H.parentNode, !1);
          }
        }
        return !S && D !== t && t.parentNode && (D.actualize && (D = D.actualize(t.ownerDocument || a)), t.parentNode.replaceChild(D, t)), D;
      };
    }(function (e, t) {
      var n,
          i,
          o,
          a,
          u = t.attributes;

      if (t.nodeType !== r && e.nodeType !== r) {
        for (var c = u.length - 1; c >= 0; c--) i = (n = u[c]).name, o = n.namespaceURI, a = n.value, o ? (i = n.localName || i, e.getAttributeNS(o, i) !== a && ("xmlns" === n.prefix && (i = n.name), e.setAttributeNS(o, i, a))) : e.getAttribute(i) !== a && e.setAttribute(i, a);

        for (var s = e.attributes, l = s.length - 1; l >= 0; l--) i = (n = s[l]).name, (o = n.namespaceURI) ? (i = n.localName || i, t.hasAttributeNS(o, i) || e.removeAttributeNS(o, i)) : t.hasAttribute(i) || e.removeAttribute(i);
      }
    });

    function k(e) {
      return I(e) || S(e) || D(e) || T();
    }

    function w(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, i);
      }

      return n;
    }

    function E(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function x(e) {
      return function (e) {
        if (Array.isArray(e)) return _(e);
      }(e) || S(e) || D(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function S(e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    }

    function A(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function C(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    function P(e, t, n) {
      return t && C(e.prototype, t), n && C(e, n), e;
    }

    function L(e, t) {
      return I(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            i = !0,
            r = !1,
            o = void 0;

        try {
          for (var a, u = e[Symbol.iterator](); !(i = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
        } catch (e) {
          r = !0, o = e;
        } finally {
          try {
            i || null == u.return || u.return();
          } finally {
            if (r) throw o;
          }
        }

        return n;
      }(e, t) || D(e, t) || T();
    }

    function T() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function I(e) {
      if (Array.isArray(e)) return e;
    }

    function D(e, t) {
      if (e) {
        if ("string" == typeof e) return _(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0;
      }
    }

    function _(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];

      return i;
    }

    function N(e) {
      "@babel/helpers - typeof";

      return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }

    n.d(t, "debug", function () {
      return $;
    }), n.d(t, "Rendered", function () {
      return te;
    }), n.d(t, "LiveSocket", function () {
      return ne;
    }), n.d(t, "Browser", function () {
      return ie;
    }), n.d(t, "DOM", function () {
      return re;
    }), n.d(t, "View", function () {
      return ue;
    });

    var R = [1e3, 3e3],
        O = "data-phx-view",
        H = ["phx-click-loading", "phx-change-loading", "phx-submit-loading", "phx-keydown-loading", "phx-keyup-loading", "phx-blur-loading", "phx-focus-loading"],
        j = "data-phx-component",
        M = "data-phx-ref",
        B = "[".concat(O, "]"),
        U = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time"],
        J = ["checkbox", "radio"],
        F = "data-phx-static",
        V = 1,
        q = "phx-",
        W = {
      debounce: 300,
      throttle: 300
    },
        K = function (e, t) {
      return console.error && console.error(e, t);
    };

    var $ = function (e, t, n, i) {
      e.liveSocket.isDebugEnabled() && console.log("".concat(e.id, " ").concat(t, ": ").concat(n, " - "), i);
    },
        X = function (e) {
      return "function" == typeof e ? e : function () {
        return e;
      };
    },
        z = function (e) {
      return JSON.parse(JSON.stringify(e));
    },
        G = function (e, t, n) {
      do {
        if (e.matches("[".concat(t, "]"))) return e;
        e = e.parentElement || e.parentNode;
      } while (null !== e && 1 === e.nodeType && !(n && n.isSameNode(e) || e.matches(B)));

      return null;
    },
        Y = function (e) {
      return null !== e && "object" === N(e) && !(e instanceof Array);
    },
        Q = function (e) {
      for (var t in e) return !1;

      return !0;
    },
        Z = function (e, t) {
      return e && t(e);
    },
        ee = function (e) {
      var t,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = new FormData(e),
          r = new URLSearchParams(),
          o = function (e) {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (e = D(e))) {
            var t = 0,
                n = function () {};

            return {
              s: n,
              n: function () {
                return t >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[t++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: n
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var i,
            r,
            o = !0,
            a = !1;
        return {
          s: function () {
            i = e[Symbol.iterator]();
          },
          n: function () {
            var e = i.next();
            return o = e.done, e;
          },
          e: function (e) {
            a = !0, r = e;
          },
          f: function () {
            try {
              o || null == i.return || i.return();
            } finally {
              if (a) throw r;
            }
          }
        };
      }(i.entries());

      try {
        for (o.s(); !(t = o.n()).done;) {
          var a = L(t.value, 2),
              u = a[0],
              c = a[1];
          r.append(u, c);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }

      for (var s in n) r.append(s, n[s]);

      return r.toString();
    },
        te = function () {
      function e(t, n) {
        A(this, e), this.viewId = t, this.rendered = {}, this.mergeDiff(n);
      }

      return P(e, null, [{
        key: "extract",
        value: function (e) {
          var t = e.r,
              n = e.e,
              i = e.t;
          return delete e.r, delete e.e, delete e.t, {
            diff: e,
            title: i,
            reply: t || null,
            events: n || []
          };
        }
      }]), P(e, [{
        key: "parentViewId",
        value: function () {
          return this.viewId;
        }
      }, {
        key: "toString",
        value: function (e) {
          return this.recursiveToString(this.rendered, this.rendered.c, e);
        }
      }, {
        key: "recursiveToString",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.c,
              n = arguments.length > 2 ? arguments[2] : void 0,
              i = {
            buffer: "",
            components: t,
            onlyCids: n = n ? new Set(n) : null
          };
          return this.toOutputBuffer(e, i), i.buffer;
        }
      }, {
        key: "componentCIDs",
        value: function (e) {
          return Object.keys(e.c || {}).map(function (e) {
            return parseInt(e);
          });
        }
      }, {
        key: "isComponentOnlyDiff",
        value: function (e) {
          return !!e.c && 1 === Object.keys(e).length;
        }
      }, {
        key: "getComponent",
        value: function (e, t) {
          return e.c[t];
        }
      }, {
        key: "mergeDiff",
        value: function (e) {
          var t = e.c;

          if (delete e.c, this.rendered = this.recursiveMerge(this.rendered, e), this.rendered.c = this.rendered.c || {}, t) {
            var n = this.rendered.c;

            for (var i in t) {
              var r = t[i],
                  o = r,
                  a = o.s;

              if ("number" == typeof a) {
                for (; "number" == typeof a;) a = (o = a > 0 ? t[a] : n[-a]).s;

                o = z(o), this.doRecursiveMerge(o, r), o.s = a;
              } else o = n[i] || {}, o = this.recursiveMerge(o, r);

              t[i] = o;
            }

            for (var u in t) n[u] = t[u];

            e.c = t;
          }
        }
      }, {
        key: "recursiveMerge",
        value: function (e, t) {
          return void 0 !== t.s ? t : (this.doRecursiveMerge(e, t), e);
        }
      }, {
        key: "doRecursiveMerge",
        value: function (e, t) {
          for (var n in t) {
            var i = t[n],
                r = e[n];
            Y(i) && void 0 === i.s && Y(r) ? this.doRecursiveMerge(r, i) : e[n] = i;
          }
        }
      }, {
        key: "componentToString",
        value: function (e) {
          return this.recursiveCIDToString(this.rendered.c, e);
        }
      }, {
        key: "pruneCIDs",
        value: function (e) {
          var t = this;
          e.forEach(function (e) {
            return delete t.rendered.c[e];
          });
        }
      }, {
        key: "get",
        value: function () {
          return this.rendered;
        }
      }, {
        key: "isNewFingerprint",
        value: function () {
          return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).s;
        }
      }, {
        key: "toOutputBuffer",
        value: function (e, t) {
          if (e.d) return this.comprehensionToBuffer(e, t);
          var n = e.s;
          t.buffer += n[0];

          for (var i = 1; i < n.length; i++) this.dynamicToBuffer(e[i - 1], t), t.buffer += n[i];
        }
      }, {
        key: "comprehensionToBuffer",
        value: function (e, t) {
          for (var n = e.d, i = e.s, r = 0; r < n.length; r++) {
            var o = n[r];
            t.buffer += i[0];

            for (var a = 1; a < i.length; a++) this.dynamicToBuffer(o[a - 1], t), t.buffer += i[a];
          }
        }
      }, {
        key: "dynamicToBuffer",
        value: function (e, t) {
          "number" == typeof e ? t.buffer += this.recursiveCIDToString(t.components, e, t.onlyCids) : Y(e) ? this.toOutputBuffer(e, t) : t.buffer += e;
        }
      }, {
        key: "recursiveCIDToString",
        value: function (e, t, n) {
          var i = this,
              r = e[t] || K("no component for CID ".concat(t), e),
              o = document.createElement("template");
          o.innerHTML = this.recursiveToString(r, e, n);
          var a = o.content,
              u = n && !n.has(t),
              c = L(Array.from(a.childNodes).reduce(function (e, n, r) {
            var a = L(e, 2),
                c = a[0],
                s = a[1];
            return n.nodeType === Node.ELEMENT_NODE ? n.getAttribute(j) ? [c, !0] : (n.setAttribute(j, t), n.id || (n.id = "".concat(i.parentViewId(), "-").concat(t, "-").concat(r)), u && (n.setAttribute("data-phx-skip", ""), n.innerHTML = ""), [!0, s]) : "" !== n.nodeValue.trim() ? (K("only HTML element tags are allowed at the root of components.\n\n" + 'got: "'.concat(n.nodeValue.trim(), '"\n\n') + "within:\n", o.innerHTML.trim()), n.replaceWith(i.createSpan(n.nodeValue, t)), [!0, s]) : (n.remove(), [c, s]);
          }, [!1, !1]), 2),
              s = c[0],
              l = c[1];
          return s || l ? !s && l ? (K("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", o.innerHTML.trim()), o.innerHTML) : o.innerHTML : (K("expected at least one HTML element tag inside a component, but the component is empty:\n", o.innerHTML.trim()), this.createSpan("", t).outerHTML);
        }
      }, {
        key: "createSpan",
        value: function (e, t) {
          var n = document.createElement("span");
          return n.innerText = e, n.setAttribute(j, t), n;
        }
      }]), e;
    }(),
        ne = function () {
      function e(t, n) {
        var i = this,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (A(this, e), this.unloaded = !1, !n || "Object" === n.constructor.name) throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');
        this.socket = new n(t, r), this.bindingPrefix = r.bindingPrefix || q, this.opts = r, this.params = X(r.params || {}), this.viewLogger = r.viewLogger, this.metadataCallbacks = r.metadata || {}, this.defaults = Object.assign(z(W), r.defaults || {}), this.activeElement = null, this.prevActive = null, this.silenced = !1, this.main = null, this.linkRef = 0, this.roots = {}, this.href = window.location.href, this.pendingLink = null, this.currentLocation = z(window.location), this.hooks = r.hooks || {}, this.loaderTimeout = r.loaderTimeout || V, this.boundTopLevelEvents = !1, this.domCallbacks = r.dom || {
          onBeforeElUpdated: X()
        }, window.addEventListener("unload", function (e) {
          i.unloaded = !0;
        }), this.socket.onOpen(function () {
          i.isUnloaded() && window.location.reload();
        });
      }

      return P(e, [{
        key: "isProfileEnabled",
        value: function () {
          return "true" === sessionStorage.getItem("phx:live-socket:profiling");
        }
      }, {
        key: "isDebugEnabled",
        value: function () {
          return "true" === sessionStorage.getItem("phx:live-socket:debug");
        }
      }, {
        key: "enableDebug",
        value: function () {
          sessionStorage.setItem("phx:live-socket:debug", "true");
        }
      }, {
        key: "enableProfiling",
        value: function () {
          sessionStorage.setItem("phx:live-socket:profiling", "true");
        }
      }, {
        key: "disableDebug",
        value: function () {
          sessionStorage.removeItem("phx:live-socket:debug");
        }
      }, {
        key: "disableProfiling",
        value: function () {
          sessionStorage.removeItem("phx:live-socket:profiling");
        }
      }, {
        key: "enableLatencySim",
        value: function (e) {
          this.enableDebug(), console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable"), sessionStorage.setItem("phx:live-socket:latency-sim", e);
        }
      }, {
        key: "disableLatencySim",
        value: function () {
          sessionStorage.removeItem("phx:live-socket:latency-sim");
        }
      }, {
        key: "getLatencySim",
        value: function () {
          var e = sessionStorage.getItem("phx:live-socket:latency-sim");
          return e ? parseInt(e) : null;
        }
      }, {
        key: "getSocket",
        value: function () {
          return this.socket;
        }
      }, {
        key: "connect",
        value: function () {
          var e = this,
              t = function () {
            e.joinRootViews() && (e.bindTopLevelEvents(), e.socket.connect());
          };

          ["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0 ? t() : document.addEventListener("DOMContentLoaded", function () {
            return t();
          });
        }
      }, {
        key: "disconnect",
        value: function (e) {
          this.socket.disconnect(e);
        }
      }, {
        key: "triggerDOM",
        value: function (e, t) {
          var n;
          (n = this.domCallbacks)[e].apply(n, x(t));
        }
      }, {
        key: "time",
        value: function (e, t) {
          if (!this.isProfileEnabled() || !console.time) return t();
          console.time(e);
          var n = t();
          return console.timeEnd(e), n;
        }
      }, {
        key: "log",
        value: function (e, t, n) {
          if (this.viewLogger) {
            var i = L(n(), 2),
                r = i[0],
                o = i[1];
            this.viewLogger(e, t, r, o);
          } else if (this.isDebugEnabled()) {
            var a = L(n(), 2),
                u = a[0],
                c = a[1];
            $(e, t, u, c);
          }
        }
      }, {
        key: "onChannel",
        value: function (e, t, n) {
          var i = this;
          e.on(t, function (e) {
            var t = i.getLatencySim();
            t ? (console.log("simulating ".concat(t, "ms of latency from server to client")), setTimeout(function () {
              return n(e);
            }, t)) : n(e);
          });
        }
      }, {
        key: "wrapPush",
        value: function (e) {
          var t = this.getLatencySim();
          if (!t) return e();
          console.log("simulating ".concat(t, "ms of latency from client to server"));
          var n = {
            receives: [],
            receive: function (e, t) {
              this.receives.push([e, t]);
            }
          };
          return setTimeout(function () {
            n.receives.reduce(function (e, t) {
              var n = L(t, 2),
                  i = n[0],
                  r = n[1];
              return e.receive(i, r);
            }, e());
          }, t), n;
        }
      }, {
        key: "reloadWithJitter",
        value: function (e) {
          var t = this;
          e.destroy(), this.disconnect();
          var n = R[0],
              i = R[1],
              r = Math.floor(Math.random() * (i - n + 1)) + n,
              o = ie.updateLocal(e.name(), "consecutive-reloads", 0, function (e) {
            return e + 1;
          });
          this.log(e, "join", function () {
            return ["encountered ".concat(o, " consecutive reloads")];
          }), o > 10 && (this.log(e, "join", function () {
            return ["exceeded ".concat(10, " consecutive reloads. Entering failsafe mode")];
          }), r = 3e4), setTimeout(function () {
            t.hasPendingLink() ? window.location = t.pendingLink : window.location.reload();
          }, r);
        }
      }, {
        key: "getHookCallbacks",
        value: function (e) {
          return this.hooks[e];
        }
      }, {
        key: "isUnloaded",
        value: function () {
          return this.unloaded;
        }
      }, {
        key: "isConnected",
        value: function () {
          return this.socket.isConnected();
        }
      }, {
        key: "getBindingPrefix",
        value: function () {
          return this.bindingPrefix;
        }
      }, {
        key: "binding",
        value: function (e) {
          return "".concat(this.getBindingPrefix()).concat(e);
        }
      }, {
        key: "channel",
        value: function (e, t) {
          return this.socket.channel(e, t);
        }
      }, {
        key: "joinRootViews",
        value: function () {
          var e = this,
              t = !1;
          return re.all(document, "".concat(B, ":not([").concat("data-phx-parent-id", "])"), function (n) {
            if (!e.getRootById(n.id)) {
              var i = e.joinRootView(n, e.getHref());
              e.root = e.root || i, n.getAttribute("data-phx-main") && (e.main = i);
            }

            t = !0;
          }), t;
        }
      }, {
        key: "redirect",
        value: function (e, t) {
          this.disconnect(), ie.redirect(e, t);
        }
      }, {
        key: "replaceMain",
        value: function (e, t) {
          var n = this,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.setPendingLink(e),
              o = this.main.el;
          this.main.showLoader(this.loaderTimeout), this.main.destroy(), ie.fetchPage(e, function (a, u) {
            if (200 !== a) return n.redirect(e);
            var c = document.createElement("template");
            c.innerHTML = u;
            var s = c.content.childNodes[0];
            if (!s || !n.isPhxView(s)) return n.redirect(e);
            n.joinRootView(s, e, t, function (e, t) {
              1 === t && (n.commitPendingLink(r) ? (o.replaceWith(e.el), n.main = e, i && i()) : e.destroy());
            });
          });
        }
      }, {
        key: "isPhxView",
        value: function (e) {
          return e.getAttribute && null !== e.getAttribute(O);
        }
      }, {
        key: "joinRootView",
        value: function (e, t, n, i) {
          var r = new ue(e, this, null, t, n);
          return this.roots[r.id] = r, r.join(i), r;
        }
      }, {
        key: "owner",
        value: function (e, t) {
          var n = this,
              i = Z(e.closest(B), function (e) {
            return n.getViewByEl(e);
          });
          i && t(i);
        }
      }, {
        key: "withinOwners",
        value: function (e, t) {
          var n = this;
          this.owner(e, function (i) {
            var r = e.getAttribute(n.binding("target"));
            null === r ? t(i, e) : i.withinTargets(r, t);
          });
        }
      }, {
        key: "getViewByEl",
        value: function (e) {
          var t = e.getAttribute("data-phx-root-id");
          return Z(this.getRootById(t), function (t) {
            return t.getDescendentByEl(e);
          });
        }
      }, {
        key: "getRootById",
        value: function (e) {
          return this.roots[e];
        }
      }, {
        key: "destroyAllViews",
        value: function () {
          for (var e in this.roots) this.roots[e].destroy(), delete this.roots[e];
        }
      }, {
        key: "destroyViewByEl",
        value: function (e) {
          var t = this.getRootById(e.getAttribute("data-phx-root-id"));
          t && t.destroyDescendent(e.id);
        }
      }, {
        key: "setActiveElement",
        value: function (e) {
          var t = this;

          if (this.activeElement !== e) {
            this.activeElement = e;

            var n = function () {
              e === t.activeElement && (t.activeElement = null), e.removeEventListener("mouseup", t), e.removeEventListener("touchend", t);
            };

            e.addEventListener("mouseup", n), e.addEventListener("touchend", n);
          }
        }
      }, {
        key: "getActiveElement",
        value: function () {
          return document.activeElement === document.body ? this.activeElement || document.activeElement : document.activeElement || document.body;
        }
      }, {
        key: "dropActiveElement",
        value: function (e) {
          this.prevActive && e.ownsElement(this.prevActive) && (this.prevActive = null);
        }
      }, {
        key: "restorePreviouslyActiveFocus",
        value: function () {
          this.prevActive && this.prevActive !== document.body && this.prevActive.focus();
        }
      }, {
        key: "blurActiveElement",
        value: function () {
          this.prevActive = this.getActiveElement(), this.prevActive !== document.body && this.prevActive.blur();
        }
      }, {
        key: "bindTopLevelEvents",
        value: function () {
          var e = this;
          this.boundTopLevelEvents || (this.boundTopLevelEvents = !0, window.addEventListener("pageshow", function (t) {
            t.persisted && (e.withPageLoading({
              to: window.location.href,
              kind: "redirect"
            }), window.location.reload());
          }), this.bindClicks(), this.bindNav(), this.bindForms(), this.bind({
            keyup: "keyup",
            keydown: "keydown"
          }, function (t, n, i, r, o, a, u) {
            var c = r.getAttribute(e.binding("key")),
                s = t.key && t.key.toLowerCase();
            c && c.toLowerCase() !== s || i.pushKey(r, o, n, a, function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(n), !0).forEach(function (t) {
                  E(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
              }

              return e;
            }({
              key: t.key
            }, e.eventMeta(n, t, r)));
          }), this.bind({
            blur: "focusout",
            focus: "focusin"
          }, function (t, n, i, r, o, a, u) {
            u || i.pushEvent(n, r, o, a, e.eventMeta(n, t, r));
          }), this.bind({
            blur: "blur",
            focus: "focus"
          }, function (t, n, i, r, o, a, u) {
            u && "window" !== !u && i.pushEvent(n, r, o, a, e.eventMeta(n, t, r));
          }));
        }
      }, {
        key: "eventMeta",
        value: function (e, t, n) {
          var i = this.metadataCallbacks[e];
          return i ? i(t, n) : {};
        }
      }, {
        key: "setPendingLink",
        value: function (e) {
          return this.linkRef++, this.pendingLink = e, this.linkRef;
        }
      }, {
        key: "commitPendingLink",
        value: function (e) {
          return this.linkRef === e && (this.href = this.pendingLink, this.pendingLink = null, !0);
        }
      }, {
        key: "getHref",
        value: function () {
          return this.href;
        }
      }, {
        key: "hasPendingLink",
        value: function () {
          return !!this.pendingLink;
        }
      }, {
        key: "bind",
        value: function (e, t) {
          var n = this,
              i = function (i) {
            var r = e[i];
            n.on(r, function (e) {
              var r = n.binding(i),
                  o = n.binding("window-".concat(i)),
                  a = e.target.getAttribute && e.target.getAttribute(r);
              a ? n.debounce(e.target, e, function () {
                n.withinOwners(e.target, function (n, r) {
                  t(e, i, n, e.target, r, a, null);
                });
              }) : re.all(document, "[".concat(o, "]"), function (r) {
                var a = r.getAttribute(o);
                n.debounce(r, e, function () {
                  n.withinOwners(r, function (n, o) {
                    t(e, i, n, r, o, a, "window");
                  });
                });
              });
            });
          };

          for (var r in e) i(r);
        }
      }, {
        key: "bindClicks",
        value: function () {
          var e = this;
          [!0, !1].forEach(function (t) {
            var n = t ? e.binding("capture-click") : e.binding("click");
            window.addEventListener("click", function (i) {
              var r = null,
                  o = (r = t ? i.target.matches("[".concat(n, "]")) ? i.target : i.target.querySelector("[".concat(n, "]")) : G(i.target, n)) && r.getAttribute(n);
              o && ("#" === r.getAttribute("href") && i.preventDefault(), e.debounce(r, i, function () {
                e.withinOwners(r, function (t, n) {
                  t.pushEvent("click", r, n, o, e.eventMeta("click", i, r));
                });
              }));
            }, t);
          });
        }
      }, {
        key: "bindNav",
        value: function () {
          var e = this;

          if (ie.canPushState()) {
            history.scrollRestoration && (history.scrollRestoration = "manual");
            var t = null;
            window.addEventListener("scroll", function (e) {
              clearTimeout(t), t = setTimeout(function () {
                ie.updateCurrentState(function (e) {
                  return Object.assign(e, {
                    scroll: window.scrollY
                  });
                });
              }, 100);
            }), window.addEventListener("popstate", function (t) {
              if (e.registerNewLocation(window.location)) {
                var n = t.state || {},
                    i = n.type,
                    r = n.id,
                    o = n.root,
                    a = n.scroll,
                    u = window.location.href;
                e.main.isConnected() && "patch" === i && r === e.main.id ? e.main.pushLinkPatch(u, null) : e.replaceMain(u, null, function () {
                  o && e.replaceRootHistory(), "number" == typeof a && setTimeout(function () {
                    window.scrollTo(0, a);
                  }, 0);
                });
              }
            }, !1), window.addEventListener("click", function (t) {
              var n = G(t.target, "data-phx-link"),
                  i = n && n.getAttribute("data-phx-link"),
                  r = t.metaKey || t.ctrlKey || 1 === t.button;

              if (i && e.isConnected() && e.main && !r) {
                var o = n.href,
                    a = n.getAttribute("data-phx-link-state");
                if (t.preventDefault(), e.pendingLink !== o) if ("patch" === i) e.pushHistoryPatch(o, a, n);else {
                  if ("redirect" !== i) throw new Error("expected ".concat("data-phx-link", ' to be "patch" or "redirect", got: ').concat(i));
                  e.historyRedirect(o, a);
                }
              }
            }, !1);
          }
        }
      }, {
        key: "withPageLoading",
        value: function (e, t) {
          re.dispatchEvent(window, "phx:page-loading-start", e);

          var n = function () {
            return re.dispatchEvent(window, "phx:page-loading-stop", e);
          };

          return t ? t(n) : n;
        }
      }, {
        key: "pushHistoryPatch",
        value: function (e, t, n) {
          var i = this;
          this.withPageLoading({
            to: e,
            kind: "patch"
          }, function (r) {
            i.main.pushLinkPatch(e, n, function () {
              i.historyPatch(e, t), r();
            });
          });
        }
      }, {
        key: "historyPatch",
        value: function (e, t) {
          ie.pushState(t, {
            type: "patch",
            id: this.main.id
          }, e), this.registerNewLocation(window.location);
        }
      }, {
        key: "historyRedirect",
        value: function (e, t, n) {
          var i = this,
              r = window.scrollY;
          this.withPageLoading({
            to: e,
            kind: "redirect"
          }, function (o) {
            i.replaceMain(e, n, function () {
              ie.pushState(t, {
                type: "redirect",
                id: i.main.id,
                scroll: r
              }, e), i.registerNewLocation(window.location), o();
            });
          });
        }
      }, {
        key: "replaceRootHistory",
        value: function () {
          ie.pushState("replace", {
            root: !0,
            type: "patch",
            id: this.main.id
          });
        }
      }, {
        key: "registerNewLocation",
        value: function (e) {
          var t = this.currentLocation;
          return t.pathname + t.search !== e.pathname + e.search && (this.currentLocation = z(e), !0);
        }
      }, {
        key: "bindForms",
        value: function () {
          var e = this,
              t = 0;
          this.on("submit", function (t) {
            var n = t.target.getAttribute(e.binding("submit"));
            n && (t.preventDefault(), t.target.disabled = !0, e.withinOwners(t.target, function (e, i) {
              return e.submitForm(t.target, i, n);
            }));
          }, !1);

          for (var n = function () {
            var n = r[i];
            e.on(n, function (i) {
              var r = i.target,
                  o = r.form && r.form.getAttribute(e.binding("change"));

              if (o && ("number" !== r.type || !r.validity || !r.validity.badInput)) {
                var a = t;
                t++;
                var u = re.private(r, "prev-iteration") || {},
                    c = u.at,
                    s = u.type;
                c === a - 1 && n !== s || (re.putPrivate(r, "prev-iteration", {
                  at: a,
                  type: n
                }), e.debounce(r, i, function () {
                  e.withinOwners(r.form, function (t, n) {
                    re.putPrivate(r, "phx-has-focused", !0), re.isTextualInput(r) || e.setActiveElement(r), t.pushInput(r, n, o, i.target);
                  });
                }));
              }
            }, !1);
          }, i = 0, r = ["change", "input"]; i < r.length; i++) n();
        }
      }, {
        key: "debounce",
        value: function (e, t, n) {
          var i = this.binding("debounce"),
              r = this.binding("throttle"),
              o = this.defaults.debounce.toString(),
              a = this.defaults.throttle.toString();
          re.debounce(e, t, i, o, r, a, n);
        }
      }, {
        key: "silenceEvents",
        value: function (e) {
          this.silenced = !0, e(), this.silenced = !1;
        }
      }, {
        key: "on",
        value: function (e, t) {
          var n = this;
          window.addEventListener(e, function (e) {
            n.silenced || t(e);
          });
        }
      }]), e;
    }(),
        ie = {
      canPushState: function () {
        return void 0 !== history.pushState;
      },
      dropLocal: function (e, t) {
        return window.localStorage.removeItem(this.localKey(e, t));
      },
      updateLocal: function (e, t, n, i) {
        var r = this.getLocal(e, t),
            o = this.localKey(e, t),
            a = null === r ? n : i(r);
        return window.localStorage.setItem(o, JSON.stringify(a)), a;
      },
      getLocal: function (e, t) {
        return JSON.parse(window.localStorage.getItem(this.localKey(e, t)));
      },
      fetchPage: function (e, t) {
        var n = new XMLHttpRequest();
        n.open("GET", e, !0), n.timeout = 3e4, n.setRequestHeader("content-type", "text/html"), n.setRequestHeader("cache-control", "max-age=0, no-cache, no-store, must-revalidate, post-check=0, pre-check=0"), n.setRequestHeader("x-requested-with", "live-link"), n.onerror = function () {
          return t(400);
        }, n.ontimeout = function () {
          return t(504);
        }, n.onreadystatechange = function () {
          if (4 === n.readyState) {
            var i = new URL(e),
                r = i.pathname + i.search,
                o = Z(n.getResponseHeader("x-response-url") || n.responseURL, function (e) {
              return new URL(e);
            }),
                a = o ? o.pathname + o.search : null;
            return "live-link" !== n.getResponseHeader("x-requested-with") ? t(400) : null === o || a != r ? t(302) : 200 !== n.status ? t(n.status) : void t(200, n.responseText);
          }
        }, n.send();
      },
      updateCurrentState: function (e) {
        this.canPushState() && history.replaceState(e(history.state || {}), "", window.location.href);
      },
      pushState: function (e, t, n) {
        if (this.canPushState()) {
          if (n !== window.location.href) {
            if ("redirect" == t.type && t.scroll) {
              var i = history.state || {};
              i.scroll = t.scroll, history.replaceState(i, "", window.location.href);
            }

            delete t.scroll, history[e + "State"](t, "", n || null);
            var r = this.getHashTargetEl(window.location.hash);
            r ? r.scrollIntoView() : "redirect" === t.type && window.scroll(0, 0);
          }
        } else this.redirect(n);
      },
      setCookie: function (e, t) {
        document.cookie = "".concat(e, "=").concat(t);
      },
      getCookie: function (e) {
        return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)".concat(e, "s*=s*([^;]*).*$)|^.*$")), "$1");
      },
      redirect: function (e, t) {
        t && ie.setCookie("__phoenix_flash__", t + "; max-age=60000; path=/"), window.location = e;
      },
      localKey: function (e, t) {
        return "".concat(e, "-").concat(t);
      },
      getHashTargetEl: function (e) {
        var t = e.toString().substring(1);
        if ("" !== t) return document.getElementById(t) || document.querySelector('a[name="'.concat(t, '"]'));
      }
    },
        re = {
      byId: function (e) {
        return document.getElementById(e) || K("no id found for ".concat(e));
      },
      removeClass: function (e, t) {
        e.classList.remove(t), 0 === e.classList.length && e.removeAttribute("class");
      },
      all: function (e, t, n) {
        var i = Array.from(e.querySelectorAll(t));
        return n ? i.forEach(n) : i;
      },
      findComponentNodeList: function (e, t) {
        var n = this.all(e, B),
            i = this.all(e, "[".concat(j, '="').concat(t, '"]'));
        return 0 === n.length ? i : i.filter(function (e) {
          return !n.some(function (t) {
            return t.contains(e);
          });
        });
      },
      findPhxChildrenInFragment: function (e, t) {
        var n = document.createElement("template");
        return n.innerHTML = e, this.findPhxChildren(n.content, t);
      },
      isPhxUpdate: function (e, t, n) {
        return e.getAttribute && n.indexOf(e.getAttribute(t)) >= 0;
      },
      findPhxChildren: function (e, t) {
        return this.all(e, "".concat(B, "[").concat("data-phx-parent-id", '="').concat(t, '"]'));
      },
      findParentCIDs: function (e, t) {
        var n = this,
            i = new Set(t);
        return t.reduce(function (t, i) {
          var r = "[".concat(j, '="').concat(i, '"] [').concat(j, "]");
          return n.all(e, r).map(function (e) {
            return parseInt(e.getAttribute(j));
          }).forEach(function (e) {
            return t.delete(e);
          }), t;
        }, i);
      },
      private: function (e, t) {
        return e.phxPrivate && e.phxPrivate[t];
      },
      deletePrivate: function (e, t) {
        e.phxPrivate && delete e.phxPrivate[t];
      },
      putPrivate: function (e, t, n) {
        e.phxPrivate || (e.phxPrivate = {}), e.phxPrivate[t] = n;
      },
      copyPrivates: function (e, t) {
        t.phxPrivate && (e.phxPrivate = z(t.phxPrivate));
      },
      putTitle: function (e) {
        var t = document.querySelector("title").dataset,
            n = t.prefix,
            i = t.suffix;
        document.title = "".concat(n || "").concat(e).concat(i || "");
      },
      debounce: function (e, t, n, i, r, o, a) {
        var u = this,
            c = e.getAttribute(n),
            s = e.getAttribute(r);
        "" === c && (c = i), "" === s && (s = o);
        var l = c || s;

        switch (l) {
          case null:
            return a();

          case "blur":
            return void (this.once(e, "debounce-blur") && e.addEventListener("blur", function () {
              return a();
            }));

          default:
            var d = parseInt(l),
                h = this.incCycle(e, "debounce-trigger", function () {
              return s ? u.deletePrivate(e, "throttled") : a();
            });
            if (isNaN(d)) return K("invalid throttle/debounce value: ".concat(l));

            if (s) {
              var f = !1;

              if ("keydown" === t.type) {
                var v = this.private(e, "debounce-prev-key");
                this.putPrivate(e, "debounce-prev-key", t.key), f = v !== t.key;
              }

              if (!f && this.private(e, "throttled")) return !1;
              a(), this.putPrivate(e, "throttled", !0), setTimeout(function () {
                return u.triggerCycle(e, "debounce-trigger");
              }, d);
            } else setTimeout(function () {
              return u.triggerCycle(e, "debounce-trigger", h);
            }, d);

            e.form && this.once(e.form, "bind-debounce") && e.form.addEventListener("submit", function (t) {
              Array.from(new FormData(e.form).entries(), function (t) {
                var n = L(t, 2),
                    i = n[0],
                    r = (n[1], e.form.querySelector('[name="'.concat(i, '"]')));
                u.incCycle(r, "debounce-trigger"), u.deletePrivate(r, "throttled");
              });
            }), this.once(e, "bind-debounce") && e.addEventListener("blur", function (t) {
              return u.triggerCycle(e, "debounce-trigger");
            });
        }
      },
      triggerCycle: function (e, t, n) {
        var i = L(this.private(e, t), 2),
            r = i[0],
            o = i[1];
        n || (n = r), n === r && (this.incCycle(e, t), o());
      },
      once: function (e, t) {
        return !0 !== this.private(e, t) && (this.putPrivate(e, t, !0), !0);
      },
      incCycle: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
            i = L(this.private(e, t) || [0, n], 2),
            r = i[0];
        i[1];
        return r++, this.putPrivate(e, t, [r, n]), r;
      },
      discardError: function (e, t, n) {
        var i = t.getAttribute && t.getAttribute(n),
            r = i && e.querySelector("#".concat(i));
        r && (this.private(r, "phx-has-focused") || this.private(r.form, "phx-has-submitted") || t.classList.add("phx-no-feedback"));
      },
      isPhxChild: function (e) {
        return e.getAttribute && e.getAttribute("data-phx-parent-id");
      },
      dispatchEvent: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = new CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: n
        });
        e.dispatchEvent(i);
      },
      cloneNode: function (e, t) {
        if (void 0 === t) return e.cloneNode(!0);
        var n = e.cloneNode(!1);
        return n.innerHTML = t, n;
      },
      mergeAttrs: function (e, t) {
        for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], i = t.attributes, r = i.length - 1; r >= 0; r--) {
          var o = i[r].name;
          n.indexOf(o) < 0 && e.setAttribute(o, t.getAttribute(o));
        }

        for (var a = e.attributes, u = a.length - 1; u >= 0; u--) {
          var c = a[u].name;
          t.hasAttribute(c) || e.removeAttribute(c);
        }
      },
      mergeFocusedInput: function (e, t) {
        e instanceof HTMLSelectElement || re.mergeAttrs(e, t, ["value"]), t.readOnly ? e.setAttribute("readonly", !0) : e.removeAttribute("readonly");
      },
      hasSelectionRange: function (e) {
        return e.setSelectionRange && ("text" === e.type || "textarea" === e.type);
      },
      restoreFocus: function (e, t, n) {
        if (re.isTextualInput(e)) {
          var i = e.matches(":focus");
          e.readOnly && e.blur(), i || e.focus(), this.hasSelectionRange(e) && e.setSelectionRange(t, n);
        }
      },
      isFormInput: function (e) {
        return /^(?:input|select|textarea)$/i.test(e.tagName) && "button" !== e.type;
      },
      syncAttrsToProps: function (e) {
        e instanceof HTMLInputElement && J.indexOf(e.type.toLocaleLowerCase()) >= 0 && (e.checked = null !== e.getAttribute("checked"));
      },
      isTextualInput: function (e) {
        return U.indexOf(e.type) >= 0;
      },
      isNowTriggerFormExternal: function (e, t) {
        return e.getAttribute && null !== e.getAttribute(t);
      },
      syncPendingRef: function (e, t, n) {
        var i = e.getAttribute(M);
        return null === i || (re.isFormInput(e) || null !== e.getAttribute(n) ? (re.putPrivate(e, M, t), !1) : (H.forEach(function (n) {
          e.classList.contains(n) && t.classList.add(n);
        }), t.setAttribute(M, i), !0));
      },
      cleanChildNodes: function (e, t) {
        if (re.isPhxUpdate(e, t, ["append", "prepend"])) {
          var n = [];
          e.childNodes.forEach(function (e) {
            e.id || (e.nodeType === Node.TEXT_NODE && "" === e.nodeValue.trim() || K("only HTML element tags with an id are allowed inside containers with phx-update.\n\n" + 'removing illegal node: "'.concat((e.outerHTML || e.nodeValue).trim(), '"\n\n')), n.push(e));
          }), n.forEach(function (e) {
            return e.remove();
          });
        }
      }
    },
        oe = function () {
      function e(t, n, i) {
        A(this, e);
        var r = new Set(),
            o = new Set(x(n.children).map(function (e) {
          return e.id;
        })),
            a = [];
        Array.from(t.children).forEach(function (e) {
          if (e.id && (r.add(e.id), o.has(e.id))) {
            var t = e.previousElementSibling && e.previousElementSibling.id;
            a.push({
              elementId: e.id,
              previousElementId: t
            });
          }
        }), this.containerId = n.id, this.updateType = i, this.elementsToModify = a, this.elementIdsToAdd = x(o).filter(function (e) {
          return !r.has(e);
        });
      }

      return P(e, [{
        key: "perform",
        value: function () {
          var e = re.byId(this.containerId);
          this.elementsToModify.forEach(function (t) {
            t.previousElementId ? Z(document.getElementById(t.previousElementId), function (e) {
              Z(document.getElementById(t.elementId), function (t) {
                t.previousElementSibling && t.previousElementSibling.id == e.id || e.insertAdjacentElement("afterend", t);
              });
            }) : Z(document.getElementById(t.elementId), function (t) {
              null == t.previousElementSibling || e.insertAdjacentElement("afterbegin", t);
            });
          }), "prepend" == this.updateType && this.elementIdsToAdd.reverse().forEach(function (t) {
            Z(document.getElementById(t), function (t) {
              return e.insertAdjacentElement("afterbegin", t);
            });
          });
        }
      }]), e;
    }(),
        ae = function () {
      function e(t, n, i, r, o) {
        A(this, e), this.view = t, this.liveSocket = t.liveSocket, this.container = n, this.id = i, this.rootID = t.root.id, this.html = r, this.targetCID = o, this.cidPatch = "number" == typeof this.targetCID, this.callbacks = {
          beforeadded: [],
          beforeupdated: [],
          beforediscarded: [],
          beforephxChildAdded: [],
          afteradded: [],
          afterupdated: [],
          afterdiscarded: [],
          afterphxChildAdded: []
        };
      }

      return P(e, null, [{
        key: "patchEl",
        value: function (e, t, n) {
          b(e, t, {
            childrenOnly: !1,
            onBeforeElUpdated: function (e, t) {
              if (n && n.isSameNode(e) && re.isFormInput(e)) return re.mergeFocusedInput(e, t), !1;
            }
          });
        }
      }]), P(e, [{
        key: "before",
        value: function (e, t) {
          this.callbacks["before".concat(e)].push(t);
        }
      }, {
        key: "after",
        value: function (e, t) {
          this.callbacks["after".concat(e)].push(t);
        }
      }, {
        key: "trackBefore",
        value: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];

          this.callbacks["before".concat(e)].forEach(function (e) {
            return e.apply(void 0, n);
          });
        }
      }, {
        key: "trackAfter",
        value: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];

          this.callbacks["after".concat(e)].forEach(function (e) {
            return e.apply(void 0, n);
          });
        }
      }, {
        key: "markPrunableContentForRemoval",
        value: function () {
          re.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", function (e) {
            e.setAttribute("data-phx-remove", "");
          });
        }
      }, {
        key: "perform",
        value: function () {
          var e = this,
              t = this.view,
              n = this.liveSocket,
              i = this.container,
              r = this.html,
              o = this.isCIDPatch() ? this.targetCIDContainer() : i;

          if (!this.isCIDPatch() || o) {
            var a = n.getActiveElement(),
                u = a && re.hasSelectionRange(a) ? a : {},
                c = u.selectionStart,
                s = u.selectionEnd,
                l = n.binding("update"),
                d = n.binding("feedback-for"),
                h = n.binding("disable-with"),
                f = n.binding("trigger-action"),
                v = [],
                p = [],
                g = [],
                m = null,
                y = n.time("premorph container prep", function () {
              return e.buildDiffHTML(i, r, l, o);
            });
            return this.trackBefore("added", i), this.trackBefore("updated", i, i), n.time("morphdom", function () {
              b(o, y, {
                childrenOnly: null === o.getAttribute(j),
                onBeforeNodeAdded: function (t) {
                  return re.discardError(o, t, d), e.trackBefore("added", t), t;
                },
                onNodeAdded: function (n) {
                  re.isNowTriggerFormExternal(n, f) && (m = n), re.isPhxChild(n) && t.ownsElement(n) && e.trackAfter("phxChildAdded", n), v.push(n);
                },
                onNodeDiscarded: function (t) {
                  re.isPhxChild(t) && n.destroyViewByEl(t), e.trackAfter("discarded", t);
                },
                onBeforeNodeDiscarded: function (t) {
                  return !(!t.getAttribute || null === t.getAttribute("data-phx-remove")) || (null === t.parentNode || !re.isPhxUpdate(t.parentNode, l, ["append", "prepend"]) || !t.id) && !e.skipCIDSibling(t) && (e.trackBefore("discarded", t), !0);
                },
                onElUpdated: function (e) {
                  re.isNowTriggerFormExternal(e, f) && (m = e), p.push(e);
                },
                onBeforeElUpdated: function (t, n) {
                  if (re.cleanChildNodes(n, l), e.skipCIDSibling(n)) return !1;
                  if ("ignore" === t.getAttribute(l)) return e.trackBefore("updated", t, n), re.mergeAttrs(t, n), p.push(t), !1;
                  if ("number" === t.type && t.validity && t.validity.badInput) return !1;
                  if (!re.syncPendingRef(t, n, h)) return !1;

                  if (re.isPhxChild(n)) {
                    var i = t.getAttribute(F);
                    return re.mergeAttrs(t, n), t.setAttribute(F, i), t.setAttribute("data-phx-root-id", e.rootID), !1;
                  }

                  return re.copyPrivates(n, t), re.discardError(o, n, d), a && t.isSameNode(a) && re.isFormInput(t) && !e.forceFocusedSelectUpdate(t, n) ? (e.trackBefore("updated", t, n), re.mergeFocusedInput(t, n), re.syncAttrsToProps(t), p.push(t), !1) : (re.isPhxUpdate(n, l, ["append", "prepend"]) && g.push(new oe(t, n, n.getAttribute(l))), re.syncAttrsToProps(n), e.trackBefore("updated", t, n), !0);
                }
              });
            }), n.isDebugEnabled() && function () {
              for (var e = new Set(), t = document.querySelectorAll("*[id]"), n = 0, i = t.length; n < i; n++) e.has(t[n].id) ? console.error("Multiple IDs detected: ".concat(t[n].id, ". Ensure unique element ids.")) : e.add(t[n].id);
            }(), g.length > 0 && n.time("post-morph append/prepend restoration", function () {
              g.forEach(function (e) {
                return e.perform();
              });
            }), n.silenceEvents(function () {
              return re.restoreFocus(a, c, s);
            }), re.dispatchEvent(document, "phx:update"), v.forEach(function (t) {
              return e.trackAfter("added", t);
            }), p.forEach(function (t) {
              return e.trackAfter("updated", t);
            }), m && (n.disconnect(), m.submit()), !0;
          }
        }
      }, {
        key: "forceFocusedSelectUpdate",
        value: function (e, t) {
          return !0 === e.multiple || e.innerHTML != t.innerHTML;
        }
      }, {
        key: "isCIDPatch",
        value: function () {
          return this.cidPatch;
        }
      }, {
        key: "skipCIDSibling",
        value: function (e) {
          return e.nodeType === Node.ELEMENT_NODE && null !== e.getAttribute("data-phx-skip");
        }
      }, {
        key: "targetCIDContainer",
        value: function () {
          if (this.isCIDPatch()) {
            var e = k(re.findComponentNodeList(this.container, this.targetCID)),
                t = e[0];
            return 0 === e.slice(1).length ? t : t && t.parentNode;
          }
        }
      }, {
        key: "buildDiffHTML",
        value: function (e, t, n, i) {
          var r = this,
              o = this.isCIDPatch(),
              a = o && i.getAttribute(j) === this.targetCID.toString();
          if (!o || a) return t;
          var u = null,
              c = document.createElement("template");
          u = re.cloneNode(i);
          var s = k(re.findComponentNodeList(u, this.targetCID)),
              l = s[0],
              d = s.slice(1);
          return c.innerHTML = t, d.forEach(function (e) {
            return e.remove();
          }), Array.from(u.childNodes).forEach(function (e) {
            e.id && e.nodeType === Node.ELEMENT_NODE && e.getAttribute(j) !== r.targetCID.toString() && (e.setAttribute("data-phx-skip", ""), e.innerHTML = "");
          }), Array.from(c.content.childNodes).forEach(function (e) {
            return u.insertBefore(e, l);
          }), l.remove(), u.outerHTML;
        }
      }]), e;
    }(),
        ue = function () {
      function e(t, n, i, r, o) {
        var a = this;
        A(this, e), this.liveSocket = n, this.flash = o, this.parent = i, this.root = i ? i.root : this, this.el = t, this.id = this.el.id, this.view = this.el.getAttribute(O), this.ref = 0, this.childJoins = 0, this.loaderTimer = null, this.pendingDiffs = [], this.href = r, this.joinCount = this.parent ? this.parent.joinCount - 1 : 0, this.joinPending = !0, this.destroyed = !1, this.joinCallback = function () {}, this.stopCallback = function () {}, this.pendingJoinOps = this.parent ? null : [], this.viewHooks = {}, this.children = this.parent ? null : {}, this.root.children[this.id] = {}, this.channel = this.liveSocket.channel("lv:".concat(this.id), function () {
          return {
            url: a.href,
            params: a.connectParams(),
            session: a.getSession(),
            static: a.getStatic(),
            flash: a.flash
          };
        }), this.showLoader(this.liveSocket.loaderTimeout), this.bindChannel();
      }

      return P(e, [{
        key: "isMain",
        value: function () {
          return this.liveSocket.main === this;
        }
      }, {
        key: "connectParams",
        value: function () {
          var e = this.liveSocket.params(this.view),
              t = re.all(document, "[".concat(this.binding("track-static"), "]")).map(function (e) {
            return e.src || e.href;
          }).filter(function (e) {
            return "string" == typeof e;
          });
          return t.length > 0 && (e._track_static = t), e._mounts = this.joinCount, e;
        }
      }, {
        key: "name",
        value: function () {
          return this.view;
        }
      }, {
        key: "isConnected",
        value: function () {
          return this.channel.canPush();
        }
      }, {
        key: "getSession",
        value: function () {
          return this.el.getAttribute("data-phx-session");
        }
      }, {
        key: "getStatic",
        value: function () {
          var e = this.el.getAttribute(F);
          return "" === e ? null : e;
        }
      }, {
        key: "destroy",
        value: function () {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {};
          this.destroyAllChildren(), this.destroyed = !0, delete this.root.children[this.id], this.parent && delete this.root.children[this.parent.id][this.id], clearTimeout(this.loaderTimer);

          var n = function () {
            for (var n in t(), e.viewHooks) e.viewHooks[n].__trigger__("beforeDestroy"), e.destroyHook(e.viewHooks[n]);
          };

          this.log("destroyed", function () {
            return ["the child has been removed from the parent"];
          }), this.channel.leave().receive("ok", n).receive("error", n).receive("timeout", n);
        }
      }, {
        key: "setContainerClasses",
        value: function () {
          var e;
          this.el.classList.remove("phx-connected", "phx-disconnected", "phx-error"), (e = this.el.classList).add.apply(e, arguments);
        }
      }, {
        key: "isLoading",
        value: function () {
          return this.el.classList.contains("phx-disconnected");
        }
      }, {
        key: "showLoader",
        value: function (e) {
          var t = this;
          if (clearTimeout(this.loaderTimer), e) this.loaderTimer = setTimeout(function () {
            return t.showLoader();
          }, e);else {
            for (var n in this.viewHooks) this.viewHooks[n].__trigger__("disconnected");

            this.setContainerClasses("phx-disconnected");
          }
        }
      }, {
        key: "hideLoader",
        value: function () {
          clearTimeout(this.loaderTimer), this.setContainerClasses("phx-connected");
        }
      }, {
        key: "triggerReconnected",
        value: function () {
          for (var e in this.viewHooks) this.viewHooks[e].__trigger__("reconnected");
        }
      }, {
        key: "log",
        value: function (e, t) {
          this.liveSocket.log(this, e, t);
        }
      }, {
        key: "withinTargets",
        value: function (e, t) {
          var n = this;

          if (/^(0|[1-9]\d*)$/.test(e)) {
            var i = re.findComponentNodeList(this.el, e);
            0 === i.length ? K("no component found matching phx-target of ".concat(e)) : t(this, i[0]);
          } else {
            var r = Array.from(document.querySelectorAll(e));
            0 === r.length && K('nothing found matching the phx-target selector "'.concat(e, '"')), r.forEach(function (e) {
              return n.liveSocket.owner(e, function (n) {
                return t(n, e);
              });
            });
          }
        }
      }, {
        key: "applyDiff",
        value: function (e, t, n) {
          this.log(e, function () {
            return ["", z(t)];
          });
          var i = te.extract(t),
              r = i.diff,
              o = i.reply,
              a = i.events,
              u = i.title;
          return u && re.putTitle(u), n({
            diff: r,
            reply: o,
            events: a
          }), o;
        }
      }, {
        key: "onJoin",
        value: function (e) {
          var t = this,
              n = e.rendered;
          this.joinCount++, this.childJoins = 0, this.joinPending = !0, this.flash = null, ie.dropLocal(this.name(), "consecutive-reloads"), this.applyDiff("mount", n, function (n) {
            var i = n.diff,
                r = n.events;
            t.rendered = new te(t.id, i);
            var o = t.renderContainer(null, "join");
            t.dropPendingRefs();
            var a = t.formsForRecovery(o);
            t.joinCount > 1 && a.length > 0 ? a.forEach(function (e, n) {
              t.pushFormRecovery(e, function (e) {
                n === a.length - 1 && t.onJoinComplete(e, o, r);
              });
            }) : t.onJoinComplete(e, o, r);
          });
        }
      }, {
        key: "dropPendingRefs",
        value: function () {
          re.all(this.el, "[".concat(M, "]"), function (e) {
            return e.removeAttribute(M);
          });
        }
      }, {
        key: "onJoinComplete",
        value: function (e, t, n) {
          var i = this,
              r = e.live_patch;
          if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending()) return this.applyJoinPatch(r, t, n);
          0 === re.findPhxChildrenInFragment(t, this.id).filter(function (e) {
            var t = e.id && i.el.querySelector("#".concat(e.id)),
                n = t && t.getAttribute(F);
            return n && e.setAttribute(F, n), i.joinChild(e);
          }).length ? this.parent ? (this.root.pendingJoinOps.push([this, function () {
            return i.applyJoinPatch(r, t, n);
          }]), this.parent.ackJoin(this)) : (this.onAllChildJoinsComplete(), this.applyJoinPatch(r, t, n)) : this.root.pendingJoinOps.push([this, function () {
            return i.applyJoinPatch(r, t, n);
          }]);
        }
      }, {
        key: "attachTrueDocEl",
        value: function () {
          this.el = re.byId(this.id), this.el.setAttribute("data-phx-root-id", this.root.id);
        }
      }, {
        key: "dispatchEvents",
        value: function (e) {
          e.forEach(function (e) {
            var t = L(e, 2),
                n = t[0],
                i = t[1];
            window.dispatchEvent(new CustomEvent("phx:hook:".concat(n), {
              detail: i
            }));
          });
        }
      }, {
        key: "applyJoinPatch",
        value: function (e, t, n) {
          var i = this;
          this.attachTrueDocEl();
          var r = new ae(this, this.el, this.id, t, null);

          if (r.markPrunableContentForRemoval(), this.performPatch(r, !1), this.joinNewChildren(), re.all(this.el, "[".concat(this.binding("hook"), "]"), function (e) {
            var t = i.addHook(e);
            t && t.__trigger__("mounted");
          }), this.joinPending = !1, this.dispatchEvents(n), this.applyPendingUpdates(), e) {
            var o = e.kind,
                a = e.to;
            this.liveSocket.historyPatch(a, o);
          }

          this.hideLoader(), this.joinCount > 1 && this.triggerReconnected(), this.stopCallback();
        }
      }, {
        key: "triggerBeforeUpdateHook",
        value: function (e, t) {
          this.liveSocket.triggerDOM("onBeforeElUpdated", [e, t]);
          var n = this.getHook(e),
              i = n && "ignore" === e.getAttribute(this.binding("update"));
          if (n && !e.isEqualNode(t) && (!i || !function (e, t) {
            return JSON.stringify(e) === JSON.stringify(t);
          }(e.dataset, t.dataset))) return n.__trigger__("beforeUpdate"), n;
        }
      }, {
        key: "triggerUpdatedHook",
        value: function (e) {
          e.__trigger__("updated");
        }
      }, {
        key: "performPatch",
        value: function (e, t) {
          var n = this,
              i = [],
              r = !1,
              o = new Set();
          return e.after("added", function (e) {
            var t = n.addHook(e);
            t && t.__trigger__("mounted");
          }), e.after("phxChildAdded", function (e) {
            return r = !0;
          }), e.before("updated", function (e, t) {
            n.triggerBeforeUpdateHook(e, t) && o.add(e.id);
          }), e.after("updated", function (e) {
            o.has(e.id) && n.triggerUpdatedHook(n.getHook(e));
          }), e.before("discarded", function (e) {
            var t = n.getHook(e);
            t && t.__trigger__("beforeDestroy");
          }), e.after("discarded", function (e) {
            var t = n.componentID(e);
            "number" == typeof t && -1 === i.indexOf(t) && i.push(t);
            var r = n.getHook(e);
            r && n.destroyHook(r);
          }), e.perform(), t && this.maybePushComponentsDestroyed(i), r;
        }
      }, {
        key: "joinNewChildren",
        value: function () {
          var e = this;
          re.findPhxChildren(this.el, this.id).forEach(function (t) {
            return e.joinChild(t);
          });
        }
      }, {
        key: "getChildById",
        value: function (e) {
          return this.root.children[this.id][e];
        }
      }, {
        key: "getDescendentByEl",
        value: function (e) {
          return e.id === this.id ? this : this.children[e.getAttribute("data-phx-parent-id")][e.id];
        }
      }, {
        key: "destroyDescendent",
        value: function (e) {
          for (var t in this.root.children) for (var n in this.root.children[t]) if (n === e) return this.root.children[t][n].destroy();
        }
      }, {
        key: "joinChild",
        value: function (t) {
          if (!this.getChildById(t.id)) {
            var n = new e(t, this.liveSocket, this);
            return this.root.children[this.id][n.id] = n, n.join(), this.childJoins++, !0;
          }
        }
      }, {
        key: "isJoinPending",
        value: function () {
          return this.joinPending;
        }
      }, {
        key: "ackJoin",
        value: function (e) {
          this.childJoins--, 0 === this.childJoins && (this.parent ? this.parent.ackJoin(this) : this.onAllChildJoinsComplete());
        }
      }, {
        key: "onAllChildJoinsComplete",
        value: function () {
          this.joinCallback(), this.pendingJoinOps.forEach(function (e) {
            var t = L(e, 2),
                n = t[0],
                i = t[1];
            n.isDestroyed() || i();
          }), this.pendingJoinOps = [];
        }
      }, {
        key: "update",
        value: function (e, t) {
          var n = this;
          if (this.isJoinPending() || this.liveSocket.hasPendingLink()) return this.pendingDiffs.push({
            diff: e,
            events: t
          });
          this.rendered.mergeDiff(e);
          var i = !1;
          this.rendered.isComponentOnlyDiff(e) ? this.liveSocket.time("component patch complete", function () {
            re.findParentCIDs(n.el, n.rendered.componentCIDs(e)).forEach(function (t) {
              n.componentPatch(n.rendered.getComponent(e, t), t) && (i = !0);
            });
          }) : Q(e) || this.liveSocket.time("full patch complete", function () {
            var t = n.renderContainer(e, "update"),
                r = new ae(n, n.el, n.id, t, null);
            i = n.performPatch(r, !0);
          }), this.dispatchEvents(t), i && this.joinNewChildren();
        }
      }, {
        key: "renderContainer",
        value: function (e, t) {
          var n = this;
          return this.liveSocket.time("toString diff (".concat(t, ")"), function () {
            var t = n.el.tagName,
                i = e ? n.rendered.componentCIDs(e) : null,
                r = n.rendered.toString(i);
            return "<".concat(t, ">").concat(r, "</").concat(t, ">");
          });
        }
      }, {
        key: "componentPatch",
        value: function (e, t) {
          if (Q(e)) return !1;
          var n = this.rendered.componentToString(t),
              i = new ae(this, this.el, this.id, n, t);
          return this.performPatch(i, !0);
        }
      }, {
        key: "getHook",
        value: function (e) {
          return this.viewHooks[se.elementID(e)];
        }
      }, {
        key: "addHook",
        value: function (e) {
          if (!se.elementID(e) && e.getAttribute) {
            var t = e.getAttribute(this.binding("hook"));

            if (!t || this.ownsElement(e)) {
              var n = this.liveSocket.getHookCallbacks(t);

              if (n) {
                e.id || K('no DOM ID for hook "'.concat(t, '". Hooks require a unique ID on each element.'), e);
                var i = new se(this, e, n);
                return this.viewHooks[se.elementID(i.el)] = i, i;
              }

              null !== t && K('unknown hook found for "'.concat(t, '"'), e);
            }
          }
        }
      }, {
        key: "destroyHook",
        value: function (e) {
          e.__trigger__("destroyed"), e.__cleanup__(), delete this.viewHooks[se.elementID(e.el)];
        }
      }, {
        key: "applyPendingUpdates",
        value: function () {
          var e = this;
          this.pendingDiffs.forEach(function (t) {
            var n = t.diff,
                i = t.events;
            return e.update(n, i);
          }), this.pendingDiffs = [];
        }
      }, {
        key: "onChannel",
        value: function (e, t) {
          var n = this;
          this.liveSocket.onChannel(this.channel, e, function (e) {
            n.isJoinPending() ? n.root.pendingJoinOps.push([n, function () {
              return t(e);
            }]) : t(e);
          });
        }
      }, {
        key: "bindChannel",
        value: function () {
          var e = this;
          this.liveSocket.onChannel(this.channel, "diff", function (t) {
            e.applyDiff("update", t, function (t) {
              var n = t.diff,
                  i = t.events;
              return e.update(n, i);
            });
          }), this.onChannel("redirect", function (t) {
            var n = t.to,
                i = t.flash;
            return e.onRedirect({
              to: n,
              flash: i
            });
          }), this.onChannel("live_patch", function (t) {
            return e.onLivePatch(t);
          }), this.onChannel("live_redirect", function (t) {
            return e.onLiveRedirect(t);
          }), this.channel.onError(function (t) {
            return e.onError(t);
          }), this.channel.onClose(function () {
            return e.onClose();
          });
        }
      }, {
        key: "destroyAllChildren",
        value: function () {
          for (var e in this.root.children[this.id]) this.getChildById(e).destroy();
        }
      }, {
        key: "onLiveRedirect",
        value: function (e) {
          var t = e.to,
              n = e.kind,
              i = e.flash,
              r = this.expandURL(t);
          this.liveSocket.historyRedirect(r, n, i);
        }
      }, {
        key: "onLivePatch",
        value: function (e) {
          var t = e.to,
              n = e.kind;
          this.href = this.expandURL(t), this.liveSocket.historyPatch(t, n);
        }
      }, {
        key: "expandURL",
        value: function (e) {
          return e.startsWith("/") ? "".concat(window.location.protocol, "//").concat(window.location.host).concat(e) : e;
        }
      }, {
        key: "onRedirect",
        value: function (e) {
          var t = e.to,
              n = e.flash;
          this.liveSocket.redirect(t, n);
        }
      }, {
        key: "isDestroyed",
        value: function () {
          return this.destroyed;
        }
      }, {
        key: "join",
        value: function (e) {
          var t = this;
          this.parent || (this.stopCallback = this.liveSocket.withPageLoading({
            to: this.href,
            kind: "initial"
          })), this.joinCallback = function () {
            return e && e(t, t.joinCount);
          }, this.liveSocket.wrapPush(function () {
            return t.channel.join().receive("ok", function (e) {
              return t.onJoin(e);
            }).receive("error", function (e) {
              return t.onJoinError(e);
            }).receive("timeout", function () {
              return t.onJoinError({
                reason: "timeout"
              });
            });
          });
        }
      }, {
        key: "onJoinError",
        value: function (e) {
          return (e.redirect || e.live_redirect) && (this.joinPending = !1, this.channel.leave()), e.redirect ? this.onRedirect(e.redirect) : e.live_redirect ? this.onLiveRedirect(e.live_redirect) : (this.log("error", function () {
            return ["unable to join", e];
          }), this.liveSocket.reloadWithJitter(this));
        }
      }, {
        key: "onClose",
        value: function () {
          if (!this.isDestroyed()) {
            if (this.isJoinPending() || this.liveSocket.hasPendingLink()) return this.liveSocket.reloadWithJitter(this);
            this.destroyAllChildren(), this.liveSocket.dropActiveElement(this), document.activeElement && document.activeElement.blur(), this.liveSocket.isUnloaded() && this.showLoader(200);
          }
        }
      }, {
        key: "onError",
        value: function (e) {
          this.onClose(), this.log("error", function () {
            return ["view crashed", e];
          }), this.liveSocket.isUnloaded() || this.displayError();
        }
      }, {
        key: "displayError",
        value: function () {
          this.isMain() && re.dispatchEvent(window, "phx:page-loading-start", {
            to: this.href,
            kind: "error"
          }), this.showLoader(), this.setContainerClasses("phx-disconnected", "phx-error");
        }
      }, {
        key: "pushWithReply",
        value: function (e, t, n) {
          var i = this,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {},
              o = L(e ? e() : [null, []], 2),
              a = o[0],
              u = L(o[1], 1)[0],
              c = function () {};

          return u && null !== u.getAttribute(this.binding("page-loading")) && (c = this.liveSocket.withPageLoading({
            kind: "element",
            target: u
          })), "number" != typeof n.cid && delete n.cid, this.liveSocket.wrapPush(function () {
            return i.channel.push(t, n, 3e4).receive("ok", function (e) {
              var t = null;
              null !== a && i.undoRefs(a), e.diff && (t = i.applyDiff("update", e.diff, function (e) {
                var t = e.diff,
                    n = e.events;
                i.update(t, n);
              })), e.redirect && i.onRedirect(e.redirect), e.live_patch && i.onLivePatch(e.live_patch), e.live_redirect && i.onLiveRedirect(e.live_redirect), c(), r(e, t);
            });
          });
        }
      }, {
        key: "undoRefs",
        value: function (e) {
          var t = this;
          re.all(this.el, "[".concat(M, '="').concat(e, '"]'), function (e) {
            e.removeAttribute(M), null !== e.getAttribute("data-phx-readonly") && (e.readOnly = !1, e.removeAttribute("data-phx-readonly")), null !== e.getAttribute("data-phx-disabled") && (e.disabled = !1, e.removeAttribute("data-phx-disabled")), H.forEach(function (t) {
              return re.removeClass(e, t);
            });
            var n = e.getAttribute("data-phx-disable-with-restore");
            null !== n && (e.innerText = n, e.removeAttribute("data-phx-disable-with-restore"));
            var i = re.private(e, M);

            if (i) {
              var r = t.triggerBeforeUpdateHook(e, i);
              ae.patchEl(e, i, t.liveSocket.getActiveElement()), r && t.triggerUpdatedHook(r), re.deletePrivate(e, M);
            }
          });
        }
      }, {
        key: "putRef",
        value: function (e, t) {
          var n = this.ref++,
              i = this.binding("disable-with");
          return e.forEach(function (e) {
            e.classList.add("phx-".concat(t, "-loading")), e.setAttribute(M, n);
            var r = e.getAttribute(i);
            null !== r && (e.getAttribute("data-phx-disable-with-restore") || e.setAttribute("data-phx-disable-with-restore", e.innerText), e.innerText = r);
          }), [n, e];
        }
      }, {
        key: "componentID",
        value: function (e) {
          var t = e.getAttribute && e.getAttribute(j);
          return t ? parseInt(t) : null;
        }
      }, {
        key: "targetComponentID",
        value: function (e, t) {
          return e.getAttribute(this.binding("target")) ? this.closestComponentID(t) : null;
        }
      }, {
        key: "closestComponentID",
        value: function (e) {
          var t = this;
          return e ? Z(e.closest("[".concat(j, "]")), function (e) {
            return t.ownsElement(e) && t.componentID(e);
          }) : null;
        }
      }, {
        key: "pushHookEvent",
        value: function (e, t, n, i) {
          var r = L(this.putRef([], "hook"), 2),
              o = r[0],
              a = r[1];
          return this.pushWithReply(function () {
            return [o, a];
          }, "event", {
            type: "hook",
            event: t,
            value: n,
            cid: this.closestComponentID(e)
          }, function (e, t) {
            return i(t, o);
          }), o;
        }
      }, {
        key: "extractMeta",
        value: function (e, t) {
          for (var n = this.binding("value-"), i = 0; i < e.attributes.length; i++) {
            var r = e.attributes[i].name;
            r.startsWith(n) && (t[r.replace(n, "")] = e.getAttribute(r));
          }

          return void 0 !== e.value && (t.value = e.value, "INPUT" === e.tagName && J.indexOf(e.type) >= 0 && !e.checked && delete t.value), t;
        }
      }, {
        key: "pushEvent",
        value: function (e, t, n, i, r) {
          var o = this;
          this.pushWithReply(function () {
            return o.putRef([t], e);
          }, "event", {
            type: e,
            event: i,
            value: this.extractMeta(t, r),
            cid: this.targetComponentID(t, n)
          });
        }
      }, {
        key: "pushKey",
        value: function (e, t, n, i, r) {
          var o = this;
          this.pushWithReply(function () {
            return o.putRef([e], n);
          }, "event", {
            type: n,
            event: i,
            value: this.extractMeta(e, r),
            cid: this.targetComponentID(e, t)
          });
        }
      }, {
        key: "pushInput",
        value: function (e, t, n, i, r) {
          var o = this;
          this.pushWithReply(function () {
            return o.putRef([e, e.form], "change");
          }, "event", {
            type: "form",
            event: n,
            value: ee(e.form, {
              _target: i.name
            }),
            cid: this.targetComponentID(e.form, t)
          }, r);
        }
      }, {
        key: "pushFormSubmit",
        value: function (e, t, n, i) {
          var r = this,
              o = function (e) {
            return !G(e, "".concat(r.binding("update"), "=ignore"), e.form);
          };

          this.pushWithReply(function () {
            var t = re.all(e, "[".concat(r.binding("disable-with"), "]")),
                n = re.all(e, "button").filter(o),
                i = re.all(e, "input,textarea,select").filter(o);
            return n.forEach(function (e) {
              e.setAttribute("data-phx-disabled", e.disabled), e.disabled = !0;
            }), i.forEach(function (e) {
              e.setAttribute("data-phx-readonly", e.readOnly), e.readOnly = !0;
            }), e.setAttribute(r.binding("page-loading"), ""), r.putRef([e].concat(t).concat(n).concat(i), "submit");
          }, "event", {
            type: "form",
            event: n,
            value: ee(e),
            cid: this.targetComponentID(e, t)
          }, i);
        }
      }, {
        key: "pushFormRecovery",
        value: function (e, t) {
          var n = this;
          this.liveSocket.withinOwners(e, function (i, r) {
            var o = e.elements[0],
                a = e.getAttribute(n.binding("auto-recover")) || e.getAttribute(n.binding("change"));
            i.pushInput(o, r, a, o, t);
          });
        }
      }, {
        key: "pushLinkPatch",
        value: function (e, t, n) {
          var i = this,
              r = this.liveSocket.setPendingLink(e),
              o = t ? function () {
            return i.putRef([t], "click");
          } : null;
          this.pushWithReply(o, "link", {
            url: e
          }, function (t) {
            t.link_redirect ? i.liveSocket.replaceMain(e, null, n, r) : i.liveSocket.commitPendingLink(r) && (i.href = e, i.applyPendingUpdates(), n && n());
          }).receive("timeout", function () {
            return i.liveSocket.redirect(window.location.href);
          });
        }
      }, {
        key: "formsForRecovery",
        value: function (e) {
          var t = this,
              n = this.binding("change"),
              i = document.createElement("template");
          return i.innerHTML = e, re.all(this.el, "form[".concat(n, "]")).filter(function (e) {
            return t.ownsElement(e);
          }).filter(function (e) {
            return "ignore" !== e.getAttribute(t.binding("auto-recover"));
          }).filter(function (e) {
            return i.content.querySelector("form[".concat(n, '="').concat(e.getAttribute(n), '"]'));
          });
        }
      }, {
        key: "maybePushComponentsDestroyed",
        value: function (e) {
          var t = this,
              n = e.filter(function (e) {
            return 0 === re.findComponentNodeList(t.el, e).length;
          });
          n.length > 0 && this.pushWithReply(null, "cids_destroyed", {
            cids: n
          }, function () {
            t.rendered.pruneCIDs(n);
          });
        }
      }, {
        key: "ownsElement",
        value: function (e) {
          return e.getAttribute("data-phx-parent-id") === this.id || Z(e.closest(B), function (e) {
            return e.id;
          }) === this.id;
        }
      }, {
        key: "submitForm",
        value: function (e, t, n) {
          var i = this;
          re.putPrivate(e, "phx-has-submitted", !0), this.liveSocket.blurActiveElement(this), this.pushFormSubmit(e, t, n, function () {
            i.liveSocket.restorePreviouslyActiveFocus();
          });
        }
      }, {
        key: "binding",
        value: function (e) {
          return this.liveSocket.binding(e);
        }
      }]), e;
    }(),
        ce = 1,
        se = function () {
      function e(t, n, i) {
        for (var r in A(this, e), this.__view = t, this.__liveSocket = t.liveSocket, this.__callbacks = i, this.__listeners = new Set(), this.el = n, this.viewName = t.name(), this.el.phxHookId = this.constructor.makeID(), this.__callbacks) this[r] = this.__callbacks[r];
      }

      return P(e, null, [{
        key: "makeID",
        value: function () {
          return ce++;
        }
      }, {
        key: "elementID",
        value: function (e) {
          return e.phxHookId;
        }
      }]), P(e, [{
        key: "pushEvent",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
          return this.__view.pushHookEvent(null, e, t, n);
        }
      }, {
        key: "pushEventTo",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};
          return this.__view.withinTargets(e, function (e, r) {
            return e.pushHookEvent(r, t, n, i);
          });
        }
      }, {
        key: "handleEvent",
        value: function (e, t) {
          var n = function (n, i) {
            return i ? e : t(n.detail);
          };

          return window.addEventListener("phx:hook:".concat(e), n), this.__listeners.add(n), n;
        }
      }, {
        key: "removeHandleEvent",
        value: function (e) {
          var t = e(null, !0);
          window.removeEventListener("phx:hook:".concat(t), e), this.__listeners.delete(e);
        }
      }, {
        key: "__cleanup__",
        value: function () {
          var e = this;

          this.__listeners.forEach(function (t) {
            return e.removeHandleEvent(t);
          });
        }
      }, {
        key: "__trigger__",
        value: function (e) {
          var t = this.__callbacks[e];
          t && t.call(this);
        }
      }]), e;
    }();

    t.default = ne;
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    (function (t) {
      t.Phoenix || (t.Phoenix = {}), e.exports = t.Phoenix.LiveView = n(0);
    }).call(this, n(1));
  }]);
});

/***/ }),

/***/ "./css/app.scss":
/*!**********************!*\
  !*** ./css/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./js/chrome_app.js":
/*!**************************!*\
  !*** ./js/chrome_app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ "./css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phoenix_html */ "../../../deps/phoenix_html/priv/static/phoenix_html.js");
/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phoenix_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phoenix */ "../../../deps/phoenix/priv/static/phoenix.js");
/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phoenix__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var phoenix_live_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! phoenix_live_view */ "../../../deps/phoenix_live_view/priv/static/phoenix_live_view.js");
/* harmony import */ var phoenix_live_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(phoenix_live_view__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands.js */ "./js/commands.js");
// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
 // webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//






chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Extension received message");
  console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
  console.log("handling message in the listener");
  Object(_commands_js__WEBPACK_IMPORTED_MODULE_5__["handle_message"])(message, {
    environment: 'extension'
  });
});
var updateEvent = new CustomEvent('update', {
  bubbles: false,
  detail: {}
});
var Hooks = {};
Hooks.fileTransfer = {
  mounted: function mounted() {
    var _this = this;

    this.el.addEventListener("message", function (e) {
      console.log("Got a file");

      _this.pushEventTo('#screenshot-handler-component', "create_screenshot", e.detail);
    });
  }
};
Hooks.selectorTransfer = {
  mounted: function mounted() {
    var _this2 = this;

    this.el.addEventListener("selector", function (e) {
      console.log("Got a selector");
      console.log(e.detail);

      _this2.pushEventTo('#selector-handler', "transfer_selector", e.detail);
    });
  }
};
Hooks.configure = {
  mounted: function mounted() {
    this.handleEvent("configure", function (message) {
      Object(_commands_js__WEBPACK_IMPORTED_MODULE_5__["handle_message"])(message, {
        environment: 'extension'
      });
    });
  }
};
Hooks.testSelector = {
  mounted: function mounted() {
    this.handleEvent("test_selector", function (message) {
      console.log("Testing Selector");
      console.log(message);
      chrome.storage.local.get(['activeTabId'], function (result) {
        message.payload.activeTabId = result.activeTabId;
        Object(_commands_js__WEBPACK_IMPORTED_MODULE_5__["handle_message"])(message, {
          environment: 'extension'
        });
      });
    });
  }
};
Hooks.jobRunner = {
  mounted: function mounted() {
    var _this3 = this;

    this.handleEvent("message", function (message) {
      var type = message.type;

      if (type === 'process') {
        var thisProcessId = _this3.el.attributes["phx-value-process-id"].value;
        var messageProcessId = message.payload.process.id;

        if (thisProcessId == messageProcessId) {
          chrome.storage.local.get(['activeTabId', 'activeWindowId'], function (result) {
            message.payload.activeTabId = result.activeTabId;
            message.payload.activeWindowId = result.activeWindowId;
            Object(_commands_js__WEBPACK_IMPORTED_MODULE_5__["handle_message"])(message, {
              environment: 'extension'
            });
          });
        }
      }
    }), this.el.addEventListener("message", function (e) {
      console.log("Got a job update");
      var payload = {
        status: e.detail.status,
        error: e.detail.error
      };

      _this3.pushEventTo('#' + e.detail.element_id, "update_status", payload);
    });
  }
};
Hooks.executeStep = {
  mounted: function mounted() {
    var _this4 = this;

    this.handleEvent("message", function (message) {
      var type = message.type;

      if (type === 'step') {
        var thisStepId = _this4.el.attributes["phx-value-step-id"].value;
        var messageStepId = message.payload.process.steps[0].id;

        if (thisStepId == messageStepId) {
          chrome.storage.local.get(['activeTabId', 'activeWindowId'], function (result) {
            message.payload.activeTabId = result.activeTabId;
            message.payload.activeWindowId = result.activeWindowId;
            Object(_commands_js__WEBPACK_IMPORTED_MODULE_5__["handle_message"])(message, {
              environment: 'extension'
            });
          });
        }
      }
    }), this.el.addEventListener("message", function (e) {
      console.log("Got a step update");
      console.log(e.detail);
      var payload = {
        status: e.detail.status,
        error: e.detail.error
      };

      _this4.pushEventTo('#' + e.detail.element_id, "update_job_status", payload);
    });
  }
};
Hooks.CopySelector = {
  mounted: function mounted() {
    this.el.addEventListener("click", function (e) {
      console.log("Copying Selector");
      console.log(e.srcElement.attributes);
      var selector = document.getElementById("selector-transfer-field").value;
      var strategy = document.getElementById("strategy-transfer-field").value;
      var selectorId = e.srcElement.attributes["selector"].value;
      var strategyId = e.srcElement.attributes["strategy"].value;
      var selectorField = document.getElementById(selectorId);
      var strategyField = document.getElementById(strategyId);
      selectorField.value = selector;
      strategyField.value = strategy;
    });
  }
};
console.log("Before xhr cookie");
console.log((' ' + document.cookie).slice(1));
var xhr = new XMLHttpRequest();
xhr.responseType = 'document';
xhr.open('GET', 'http://user-docs.com:4000/process_administrator', true);

xhr.onload = function (e) {
  document.documentElement.replaceChild(this.response.head, document.head);
  document.documentElement.replaceChild(this.response.body, document.body);
  console.log("After xhrc cookie");
  console.log((' ' + document.cookie).slice(1));
  var csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  var newCookie = document.querySelector("[data-phx-main='true']").getAttribute("data-phx-session");
  console.log(newCookie);
  console.log(csrfToken);
  var newCookieString = "_userdocs_web_key=" + newCookie + ";domain=.davenport.rocks;";
  console.log(newCookieString);
  document.cookie = newCookieString;
  console.log("After setting cookie");
  console.log(document.cookie);
  var liveSocket = new phoenix_live_view__WEBPACK_IMPORTED_MODULE_4__["LiveSocket"]("ws://app.davenport.rocks:4000/live", phoenix__WEBPACK_IMPORTED_MODULE_2__["Socket"], {
    params: {
      _csrf_token: csrfToken
    },
    hooks: Hooks
  });
  window.addEventListener("phx:page-loading-start", function (info) {
    return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
  });
  window.addEventListener("phx:page-loading-stop", function (info) {
    return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
  });
  liveSocket.connect();
  window.liveSocket = liveSocket;
};

xhr.send();
/*
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:4000', true)
xhr.responseType = 'document'
xhr.onload = function(e) {
  console.log(this.response)
  let sess = new XMLHttpRequest();
  sess.open('GET', 'http://localhost:4000/api/v1/session', true)
  sess.onload = function(e) {
    console.log(this.response)

    document.cookie = "_userdocs_web_key" + this.response.cookie
    
    let liveSocket = new LiveSocket("ws://localhost:4000/live", Socket, {
      params: { _csrf_token: this.response.csrfToken},
      hooks: Hooks
    })
  
    window.addEventListener("phx:page-loading-start", info => NProgress.start())
    window.addEventListener("phx:page-loading-stop", info => NProgress.done())
    
    liveSocket.connect()
    
    window.liveSocket = liveSocket
  }
  sess.send()
}
xhr.send()
*/

/***/ }),

/***/ "./js/commands.js":
/*!************************!*\
  !*** ./js/commands.js ***!
  \************************/
/*! exports provided: handle_message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_message", function() { return handle_message; });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);


function handle_message(message, configuration) {
  var log_string = "Received " + message.type + " message.  ";
  console.log(log_string);

  if (message.type == 'process') {
    message.payload.type = 'process';
    handle_job(message.payload, configuration);
  } else if (message.type == 'step') {
    message.payload.type = 'step';
    handle_step(message.payload, configuration);
  } else if (message.type == 'configuration') {
    configure_environment(message.payload);
  }
}

function configure_environment(payload) {
  console.log("Current Configuration");
  chrome.storage.local.set({
    strategy: payload.strategy
  }, function () {
    console.log('Selector Strategy is set to ' + payload.strategy.name);
  });
}

function handle_job(job, configuration) {
  var status = job.status;
  var log_string = "handling job " + job.id + " step " + job.current_step_id + " sequence " + job.current_sequence + " status " + status;
  console.log(log_string);

  if (status === 'not_started') {
    start_job(job, configuration, handle_job);
    updateJobStatus(job);
  } else if (status == 'running') {
    run_current_step(job, configuration, handle_job);
  } else if (status == 'failed') {
    var step = current_step(job);
    updateStepStatus(step);
    updateJobStatus(job);
  } else if (status == 'complete') {
    var _step = current_step(job);

    updateStepStatus(_step);
    updateJobStatus(job);
  }
}

function handle_step(job, configuration) {
  var status = job.status;
  console.log("Handling Step");
  console.log(job);

  if (status === 'not_started') {
    start_job(job, configuration, handle_step);
  } else if (status == 'running') {
    run_current_step(job, configuration, handle_step);
  } else if (status == 'failed') {
    var step = current_step(job);
    updateStepStatus(step);
  } else if (status == 'complete') {
    var _step2 = current_step(job);

    updateStepStatus(_step2);
  }
}

function start_job(job, configuration, proceed) {
  var steps = job.process.steps;
  var log_string = "Starting Job";
  console.log(log_string);
  job.status = 'running';
  job.current_step_id = steps[0].id;
  job.current_sequence = 1;
  proceed(job, configuration);
}

function run_current_step(job, configuration, proceed) {
  var step = current_step(job);
  var apply = current_sequence(job, step);
  apply(job, configuration, proceed);
}

function current_step(job) {
  var steps = job.process.steps;
  return steps.filter(function (step) {
    return step.id === job.current_step_id;
  })[0];
}

function current_step_index(job) {
  var steps = job.process.steps;
  return steps.findIndex(function (step) {
    return step.id === job.current_step_id;
  });
}

function current_sequence(job, step) {
  var log_string = "Locating current sequence of " + step.step_type.name;
  console.log(step);
  var step_type_name = step.step_type.name;
  var sequence_id = job.current_sequence;
  return commands()[step_type_name][sequence_id];
}

function success(job, configuration, proceed) {
  console.log("Step Succeeded");
  job.current_sequence = job.current_sequence + 1;
  proceed(job, configuration);
}

function updateStepStatus(step) {
  // # TODO: Remove this convention and replace with something I pass in
  console.log("Updating step status");
  var step_element_id = "step-" + step.id + "-runner";
  var step_element = document.getElementById(step_element_id);
  step.element_id = step_element_id;
  console.log(step);
  step_element.dispatchEvent(new CustomEvent("message", {
    bubbles: false,
    detail: step
  }));
}

function updateJobStatus(job) {
  // # TODO: Remove this convention and replace with something I pass in
  console.log("Updating Job Status");
  var job_element_id = "process-" + job.process.id + "-runner";
  var job_element = document.getElementById(job_element_id);
  job.element_id = job_element_id;
  job_element.dispatchEvent(new CustomEvent("message", {
    bubbles: false,
    detail: job
  }));
}

function failStep(job, error, configuration, proceed) {
  console.log("Step Failed");
  console.log(error);
  var step = current_step(job);
  step.status = "failed";
  step.error = error;

  if (configuration.environment == 'extension') {
    console.log("In Extension");
    failJob(job, "Step " + step.id + " failed", configuration, proceed);
  } else if (configuration.environment == 'browser') {
    console.log("In Browser");
    failJob(job, "Step " + step.id + " failed", configuration, proceed);
  }
}

function failJob(job, error, configuration, proceed) {
  console.log("Job Failed");
  job.status = "failed";
  job.error = error;

  if (configuration.environment == 'extension') {
    proceed(job, configuration);
  } else if (configuration.environment == 'browser') {
    chrome.runtime.sendMessage(job);
  }
}

function commands() {
  return {
    "Click": {
      1: startStep,
      2: sendToBrowser,
      3: waitForElement,
      4: click,
      5: sendToExtension,
      6: completeStep
    },
    "Navigate": {
      1: startStep,
      2: navigate,
      3: waitForLoad,
      4: completeStep
    },
    "Fill Field": {
      1: startStep,
      2: sendToBrowser,
      3: waitForElement,
      4: fillField,
      5: sendToExtension,
      6: completeStep
    },
    "Set Size Explicit": {
      1: startStep,
      2: setSize,
      3: completeStep
    },
    "Full Screen Screenshot": {
      1: startStep,
      2: fullScreenShot,
      3: completeStep
    },
    "Element Screenshot": {
      1: startStep,
      2: sendToBrowser,
      3: collectElementDimensions,
      4: sendToExtension,
      5: fullScreenShot,
      6: completeStep
    },
    "Apply Annotation": {
      1: startStep,
      2: sendToBrowser,
      3: waitForElement,
      4: applyAnnotation,
      5: sendToExtension,
      6: completeStep
    },
    "Clear Annotations": {
      1: startStep,
      2: sendToBrowser,
      3: clearAnnotations,
      4: sendToExtension,
      5: completeStep
    },
    "Set Selector": {
      1: sendToExtension,
      2: setSelector
    },
    "Test Selector": {
      1: sendToBrowser,
      2: testSelector
    }
  };
}

function collectElementDimensions(job, configuration, proceed) {
  var step = current_step(job);
  var step_index = current_step_index(job);
  var selector = step.element.selector;
  var strategy = step.element.strategy;
  var element = getElement(strategy, selector);
  step.element.size = element.getBoundingClientRect();
  job.process.steps[step_index] = step;
  success(job, configuration, proceed);
}

function annotations() {
  return {
    "Outline": outline,
    "Badge": badge
  };
}

function clearAnnotations(job, configuration, proceed) {
  var step = current_step(job);

  try {
    for (var i = 0; i < window.active_annotations.length; i++) {
      document.body.removeChild(window.active_annotations[i]);
    }

    window.active_annotations = [];
    success(job, configuration, proceed);
  } catch (error) {
    step.status = "failed";
    step.error = error;
    failStep(job, error, configuration, proceed);
  }
}

function applyAnnotation(job, configuration, proceed) {
  var step = current_step(job);
  var name = step.annotation.annotation_type.name;
  console.log("applying annotation");
  /*
  console.log(step)
  console.log(step.annotation.annotation_type.name)
  console.log(annotations())
  */

  var apply = annotations()[name];

  try {
    apply(job, configuration, proceed);
    success(job, configuration, proceed);
  } catch (error) {
    failStep(job, error, configuration, proceed);
  }
}

function blur(job, configuration) {}

function badge(job, configuration, proceed) {
  console.log("Applying badge annotation");
  var step = current_step(job);
  var selector = step.element.selector;
  var strategy = step.element.strategy;
  var element = getElement(strategy, selector);
  var badge_x = step.annotation.x_orientation;
  var badge_y = step.annotation.y_orientation;
  var size = step.annotation.size;
  var labelText = step.annotation.label;
  var color = step.annotation.color;
  var xOffset = step.annotation.x_offset;
  var yOffset = step.annotation.y_offset;
  var fontSize = step.annotation.font_size;
  var wrapper = document.createElement('div');
  var badge = document.createElement('span');
  var label = document.createElement('span');
  var rect = element.getBoundingClientRect();
  var x_calcs = {
    L: Math.round(rect.left - size + xOffset).toString() + 'px',
    M: Math.round(rect.left + rect.width / 2 - size + xOffset).toString() + 'px',
    R: Math.round(rect.right - size + xOffset).toString() + 'px'
  };
  var y_calcs = {
    T: Math.round(rect.top - size + yOffset).toString() + 'px',
    M: Math.round(rect.bottom - rect.height / 2 - size + yOffset).toString() + 'px',
    B: Math.round(rect.bottom - size + yOffset).toString() + 'px'
  };
  var x = x_calcs[badge_x];
  var y = y_calcs[badge_y];
  console.log("Placing a badge at " + x.toString() + ", " + y.toString());
  wrapper.style.display = 'static';
  wrapper.style.justifyContent = 'center';
  wrapper.style.alignItems = 'center';
  wrapper.style.minHeight = '';
  wrapper.style.position = 'fixed';
  wrapper.style.top = y;
  wrapper.style.left = x;
  wrapper.style.zIndex = 999999;
  badge.style.position = 'relative';
  badge.style.display = 'inline-table';
  badge.style.width = (2 * size).toString() + 'px';
  badge.style.height = (2 * size).toString() + 'px';
  badge.style.borderRadius = '50%';
  badge.style.fontSize = fontSize.toString() + 'px';
  badge.style.textAlign = 'center';
  badge.style.background = color;
  label.style.position = 'relative';
  label.style.top = ((size * 2 - fontSize) / 2).toString() + 'px';
  label.textContent = labelText;
  label.style.color = 'white';

  try {
    document.body.appendChild(wrapper);
    wrapper.appendChild(badge);
    badge.appendChild(label);
    window.active_annotations.push(wrapper);
  } catch (error) {
    step.status = "failed";
    step.error = error;
    failStep(job, error, configuration, proceed);
  }
}

function outline(job, configuration, proceed) {
  var step = current_step(job);
  var selector = step.element.selector;
  var strategy = step.element.strategy;
  var outlineColor = step.annotation.color;
  var thickness = step.annotation.thickness + 'px';
  var element = getElement(strategy, selector);
  var rect = element.getBoundingClientRect();
  var outline = document.createElement('div');
  outline.style.position = 'fixed';
  outline.style.width = Math.round(rect.width).toString() + 'px';
  outline.style.height = Math.round(rect.height).toString() + 'px';
  outline.style.outline = outlineColor + ' solid ' + thickness;
  outline.style.top = Math.round(rect.top).toString() + 'px';
  outline.style.left = Math.round(rect.left).toString() + 'px';
  outline.style.zIndex = 99999;

  try {
    document.body.appendChild(outline);
    window.active_annotations.push(outline);
  } catch (error) {
    step.status = "failed";
    step.error = error;
    failStep(job, error, configuration, proceed);
  }
}

function fullScreenShot(job, configuration, proceed) {
  var activeWindowId = job.activeWindowId;
  var step = current_step(job);
  console.log("Taking a full screen screenshot");

  try {
    chrome.tabs.captureVisibleTab(activeWindowId, function (result) {
      console.log("Finished capturing Result");
      console.log(result);

      if (result) {
        step.encoded_image = result;
        document.getElementById("screenshot-handler-component").dispatchEvent(new CustomEvent("message", {
          bubbles: false,
          detail: step
        }));
        success(job, configuration, proceed);
      } else if (result == undefined) {
        step.status = "failed";
        var error = "No Screenshot Returned";
        step.error = error;
        failStep(job, error, configuration, proceed);
      }
    });
  } catch (error) {
    step.status = "failed";
    step.error = error;
    failStep(job, error, configuration, proceed);
  }
}

function setSize(job, configuration, proceed) {
  var activeWindowId = job.activeWindowId;
  var step = current_step(job);
  var payload = {
    width: step.width,
    height: step.height
  };
  console.log("Setting size in " + activeWindowId);
  console.log(payload);

  try {
    chrome.windows.update(activeWindowId, payload);
    success(job, configuration, proceed);
  } catch (error) {
    step.status = "failed";
    step.error = error;
    failStep(job, error, configuration, proceed);
  }
}

function navigate(job, configuration, proceed) {
  var activeTabId = job.activeTabId;
  var step = current_step(job);
  var payload = {
    url: step.url
  };
  var log_string = "Executing a navigate step to " + activeTabId;
  console.log(log_string);

  try {
    chrome.tabs.update(activeTabId, payload, function (result) {
      console.log("Triggered Navigation");
      success(job, configuration, proceed);
    });
  } catch (error) {
    step.status = "failed";
    step.error = error;
    failStep(job, error, configuration, proceed);
  }
}

function fillField(job, configuration, proceed) {
  console.log("Filling a field");
  var step = current_step(job);
  var selector = step.element.selector;
  var strategy = step.element.strategy;
  var text = step.text;
  var element = getElement(strategy, selector);
  var event = new Event('input', {
    bubbles: true
  });

  try {
    console.log("Writing to field");
    element.value = text;
    element.dispatchEvent(event);
    success(job, configuration, proceed);
  } catch (error) {
    step.status = "failed";
    step.error = error;
    failStep(job, error, configuration, proceed);
  }
}

function waitForLoad(job, configuration, proceed) {
  console.log("waiting for load");
  var activeTabId = job.activeTabId;
  var timeout = setTimeout(function () {
    clearInterval(interval);
    console.log("Not found");
    failStep(job, "Page not Loaded", configuration, proceed);
  }, 3000);
  var interval = setInterval(function () {
    chrome.tabs.get(activeTabId, function (r) {
      if (r.status == 'complete') {
        clearTimeout(timeout);
        clearInterval(interval);
        console.log("Page Loaded");
        success(job, configuration, proceed);
      }
    });
  }, 100);
}

function startStep(job, configuration, proceed) {
  var step = current_step(job); // TODO: This is a convention.  Find a cleaner way to pass from backend

  var step_element_id = "step-" + step.id + "-runner";
  var step_element = document.getElementById(step_element_id);
  var step_index = current_step_index(job);
  var steps = job.process.steps;
  console.log("Starting a " + step.type + " step");
  step.status = "running";
  step.element_id = step_element_id;

  try {
    step_element.dispatchEvent(new CustomEvent("message", {
      bubbles: false,
      detail: step
    }));
    steps[step_index] = step;
    success(job, configuration, proceed);
  } catch (error) {
    failStep(job, error, configuration, proceed);
  }
}

function completeStep(job, configuration, proceed) {
  var step = current_step(job);
  var step_index = current_step_index(job); // TODO: This is a convention.  Find a cleaner way to pass from backend

  var step_element_id = "step-" + step.id + "-runner";
  var step_element = document.getElementById(step_element_id);
  var event = new CustomEvent("message", {
    bubbles: false,
    detail: step
  });
  var steps = job.process.steps;
  var log_string = "Completing step " + step_element_id;
  console.log(log_string);
  step.status = "complete";

  try {
    step_element.dispatchEvent(event);
    var next_step = steps[step_index + 1];
    console.log(next_step);

    if (next_step) {
      // If there's another step, we update and call handle_job
      job.current_step_id = next_step.id;
      job.current_sequence = 1;
      proceed(job, configuration);
    } else {
      // If there's not, we're going to complete the job
      completeJob(job, configuration, proceed);
    }
  } catch (error) {
    failStep(job, error, configuration, proceed);
  }
}

function completeJob(job, configuration, proceed) {
  job.status = 'complete';
  proceed(job, configuration);
}

function sendToBrowser(job, configuration, proceed) {
  console.log("Send to browser");

  if (configuration.environment == 'extension') {
    console.log("Sending to browser"); // console.log(job.activeTabId)

    var message = {
      type: job.type,
      payload: job
    };

    try {
      job.current_sequence = job.current_sequence + 1;
      chrome.tabs.sendMessage(job.activeTabId, message);
      console.log("Step sent to browser");
    } catch (error) {
      failStep(job, error, configuration, proceed);
    }
  } else {
    success(job, configuration, proceed);
  }
}

function sendToExtension(job, configuration, proceed) {
  console.log("Send to extension");

  if (configuration.environment == 'browser') {
    console.log("sending to browser");
    var message = {
      type: job.type,
      payload: job
    };

    try {
      job.current_sequence = job.current_sequence + 1;
      chrome.runtime.sendMessage(message);
      console.log("Sent to Extension");
    } catch (error) {
      failStep(job, error, configuration, proceed);
    }
  } else {
    success(job, configuration, proceed);
  }
}

function waitForElement(job, configuration, proceed) {
  var step = current_step(job);
  var selector = step.element.selector;
  var strategy = step.element.strategy;
  console.log(strategy);
  var element = null;
  var log_string = "Waiting for element, strategy: " + strategy.name + " selector: " + selector;
  console.log(log_string);
  var timeout = setTimeout(function () {
    clearInterval(interval);
    failStep(job, "Element not found", configuration, proceed);
  }, 3000);
  var interval = setInterval(function () {
    element = getElement(strategy, selector);

    if (element) {
      step.status = "running_prechecks";
      clearTimeout(timeout);
      clearInterval(interval);
      console.log(element);
      console.log("found");
      success(job, configuration, proceed);
    }
  }, 100);
}

function click(job, configuration, proceed) {
  var step = current_step(job);
  var selector = step.element.selector;
  var strategy = step.element.strategy;

  try {
    console.log("Getting element");
    getElement(strategy, selector).click();
    success(job, configuration, proceed);
  } catch (error) {
    step.status = "failed";
    step.error = error;
    failStep(job, error, configuration, proceed);
  }
}

function getElement(strategy, selector) {
  console.log("Getting Element with strategy " + strategy.name + " and Selector " + selector);
  var element = null;

  if (strategy.name == 'xpath') {
    element = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  } else if (strategy.name == 'id') {
    element = document.getElementById(selector);
  } else if (strategy.name == 'css') {
    element = document.querySelector(selector);
  }

  console.log(element);
  return element;
}

function getSelector(job, configuration, proceed) {
  console.log("Getting Selector");
  success(job, configuration, proceed);
}

function setSelector(job, configuration, proceed) {
  var step = current_step(job);
  var payload = {
    selector: step.selector,
    strategy: step.strategy
  };
  console.log("Setting Strategy to " + payload.strategy + " and Selector to " + payload.selector);
  document.getElementById("selector-handler").dispatchEvent(new CustomEvent("selector", {
    bubbles: false,
    detail: payload
  }));
  success(job, configuration, proceed);
}

function testSelector(job, configuration, proceed) {
  var step = current_step(job);
  var selector = step.selector;
  var strategy = step.strategy;
  console.log("22 Testing " + strategy + " Selector " + selector);
  console.log(step);

  if (strategy.name === 'xpath') {
    console.log("xpath");
    document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.backgroundColor = "#FDFF47";
  } else if (strategy.name === 'css') {
    document.querySelector(selector).style.backgroundColor = "#FDFF47";
  }
}



/***/ }),

/***/ "./node_modules/nprogress/nprogress.js":
/*!*********************************************!*\
  !*** ./node_modules/nprogress/nprogress.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
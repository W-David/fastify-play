"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/whatwg-mimetype/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/whatwg-mimetype/lib/utils.js"(exports) {
      "use strict";
      exports.removeLeadingAndTrailingHTTPWhitespace = (string) => {
        return string.replace(/^[ \t\n\r]+/u, "").replace(/[ \t\n\r]+$/u, "");
      };
      exports.removeTrailingHTTPWhitespace = (string) => {
        return string.replace(/[ \t\n\r]+$/u, "");
      };
      exports.isHTTPWhitespaceChar = (char) => {
        return char === " " || char === "	" || char === "\n" || char === "\r";
      };
      exports.solelyContainsHTTPTokenCodePoints = (string) => {
        return /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(string);
      };
      exports.soleyContainsHTTPQuotedStringTokenCodePoints = (string) => {
        return /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(string);
      };
      exports.asciiLowercase = (string) => {
        return string.replace(/[A-Z]/ug, (l) => l.toLowerCase());
      };
      exports.collectAnHTTPQuotedString = (input, position) => {
        let value = "";
        position++;
        while (true) {
          while (position < input.length && input[position] !== '"' && input[position] !== "\\") {
            value += input[position];
            ++position;
          }
          if (position >= input.length) {
            break;
          }
          const quoteOrBackslash = input[position];
          ++position;
          if (quoteOrBackslash === "\\") {
            if (position >= input.length) {
              value += "\\";
              break;
            }
            value += input[position];
            ++position;
          } else {
            break;
          }
        }
        return [value, position];
      };
    }
  });

  // node_modules/whatwg-mimetype/lib/mime-type-parameters.js
  var require_mime_type_parameters = __commonJS({
    "node_modules/whatwg-mimetype/lib/mime-type-parameters.js"(exports, module2) {
      "use strict";
      var {
        asciiLowercase,
        solelyContainsHTTPTokenCodePoints,
        soleyContainsHTTPQuotedStringTokenCodePoints
      } = require_utils();
      module2.exports = class MIMETypeParameters {
        constructor(map) {
          this._map = map;
        }
        get size() {
          return this._map.size;
        }
        get(name2) {
          name2 = asciiLowercase(String(name2));
          return this._map.get(name2);
        }
        has(name2) {
          name2 = asciiLowercase(String(name2));
          return this._map.has(name2);
        }
        set(name2, value) {
          name2 = asciiLowercase(String(name2));
          value = String(value);
          if (!solelyContainsHTTPTokenCodePoints(name2)) {
            throw new Error(`Invalid MIME type parameter name "${name2}": only HTTP token code points are valid.`);
          }
          if (!soleyContainsHTTPQuotedStringTokenCodePoints(value)) {
            throw new Error(`Invalid MIME type parameter value "${value}": only HTTP quoted-string token code points are valid.`);
          }
          return this._map.set(name2, value);
        }
        clear() {
          this._map.clear();
        }
        delete(name2) {
          name2 = asciiLowercase(String(name2));
          return this._map.delete(name2);
        }
        forEach(callbackFn, thisArg) {
          this._map.forEach(callbackFn, thisArg);
        }
        keys() {
          return this._map.keys();
        }
        values() {
          return this._map.values();
        }
        entries() {
          return this._map.entries();
        }
        [Symbol.iterator]() {
          return this._map[Symbol.iterator]();
        }
      };
    }
  });

  // node_modules/whatwg-mimetype/lib/parser.js
  var require_parser = __commonJS({
    "node_modules/whatwg-mimetype/lib/parser.js"(exports, module2) {
      "use strict";
      var {
        removeLeadingAndTrailingHTTPWhitespace,
        removeTrailingHTTPWhitespace,
        isHTTPWhitespaceChar,
        solelyContainsHTTPTokenCodePoints,
        soleyContainsHTTPQuotedStringTokenCodePoints,
        asciiLowercase,
        collectAnHTTPQuotedString
      } = require_utils();
      module2.exports = (input) => {
        input = removeLeadingAndTrailingHTTPWhitespace(input);
        let position = 0;
        let type = "";
        while (position < input.length && input[position] !== "/") {
          type += input[position];
          ++position;
        }
        if (type.length === 0 || !solelyContainsHTTPTokenCodePoints(type)) {
          return null;
        }
        if (position >= input.length) {
          return null;
        }
        ++position;
        let subtype = "";
        while (position < input.length && input[position] !== ";") {
          subtype += input[position];
          ++position;
        }
        subtype = removeTrailingHTTPWhitespace(subtype);
        if (subtype.length === 0 || !solelyContainsHTTPTokenCodePoints(subtype)) {
          return null;
        }
        const mimeType = {
          type: asciiLowercase(type),
          subtype: asciiLowercase(subtype),
          parameters: /* @__PURE__ */ new Map()
        };
        while (position < input.length) {
          ++position;
          while (isHTTPWhitespaceChar(input[position])) {
            ++position;
          }
          let parameterName = "";
          while (position < input.length && input[position] !== ";" && input[position] !== "=") {
            parameterName += input[position];
            ++position;
          }
          parameterName = asciiLowercase(parameterName);
          if (position < input.length) {
            if (input[position] === ";") {
              continue;
            }
            ++position;
          }
          let parameterValue = null;
          if (input[position] === '"') {
            [parameterValue, position] = collectAnHTTPQuotedString(input, position);
            while (position < input.length && input[position] !== ";") {
              ++position;
            }
          } else {
            parameterValue = "";
            while (position < input.length && input[position] !== ";") {
              parameterValue += input[position];
              ++position;
            }
            parameterValue = removeTrailingHTTPWhitespace(parameterValue);
            if (parameterValue === "") {
              continue;
            }
          }
          if (parameterName.length > 0 && solelyContainsHTTPTokenCodePoints(parameterName) && soleyContainsHTTPQuotedStringTokenCodePoints(parameterValue) && !mimeType.parameters.has(parameterName)) {
            mimeType.parameters.set(parameterName, parameterValue);
          }
        }
        return mimeType;
      };
    }
  });

  // node_modules/whatwg-mimetype/lib/serializer.js
  var require_serializer = __commonJS({
    "node_modules/whatwg-mimetype/lib/serializer.js"(exports, module2) {
      "use strict";
      var { solelyContainsHTTPTokenCodePoints } = require_utils();
      module2.exports = (mimeType) => {
        let serialization = `${mimeType.type}/${mimeType.subtype}`;
        if (mimeType.parameters.size === 0) {
          return serialization;
        }
        for (let [name2, value] of mimeType.parameters) {
          serialization += ";";
          serialization += name2;
          serialization += "=";
          if (!solelyContainsHTTPTokenCodePoints(value) || value.length === 0) {
            value = value.replace(/(["\\])/ug, "\\$1");
            value = `"${value}"`;
          }
          serialization += value;
        }
        return serialization;
      };
    }
  });

  // node_modules/whatwg-mimetype/lib/mime-type.js
  var require_mime_type = __commonJS({
    "node_modules/whatwg-mimetype/lib/mime-type.js"(exports, module2) {
      "use strict";
      var MIMETypeParameters = require_mime_type_parameters();
      var parse = require_parser();
      var serialize = require_serializer();
      var {
        asciiLowercase,
        solelyContainsHTTPTokenCodePoints
      } = require_utils();
      module2.exports = class MIMEType {
        constructor(string) {
          string = String(string);
          const result = parse(string);
          if (result === null) {
            throw new Error(`Could not parse MIME type string "${string}"`);
          }
          this._type = result.type;
          this._subtype = result.subtype;
          this._parameters = new MIMETypeParameters(result.parameters);
        }
        static parse(string) {
          try {
            return new this(string);
          } catch (e) {
            return null;
          }
        }
        get essence() {
          return `${this.type}/${this.subtype}`;
        }
        get type() {
          return this._type;
        }
        set type(value) {
          value = asciiLowercase(String(value));
          if (value.length === 0) {
            throw new Error("Invalid type: must be a non-empty string");
          }
          if (!solelyContainsHTTPTokenCodePoints(value)) {
            throw new Error(`Invalid type ${value}: must contain only HTTP token code points`);
          }
          this._type = value;
        }
        get subtype() {
          return this._subtype;
        }
        set subtype(value) {
          value = asciiLowercase(String(value));
          if (value.length === 0) {
            throw new Error("Invalid subtype: must be a non-empty string");
          }
          if (!solelyContainsHTTPTokenCodePoints(value)) {
            throw new Error(`Invalid subtype ${value}: must contain only HTTP token code points`);
          }
          this._subtype = value;
        }
        get parameters() {
          return this._parameters;
        }
        toString() {
          return serialize(this);
        }
        isJavaScript({ prohibitParameters = false } = {}) {
          switch (this._type) {
            case "text": {
              switch (this._subtype) {
                case "ecmascript":
                case "javascript":
                case "javascript1.0":
                case "javascript1.1":
                case "javascript1.2":
                case "javascript1.3":
                case "javascript1.4":
                case "javascript1.5":
                case "jscript":
                case "livescript":
                case "x-ecmascript":
                case "x-javascript": {
                  return !prohibitParameters || this._parameters.size === 0;
                }
                default: {
                  return false;
                }
              }
            }
            case "application": {
              switch (this._subtype) {
                case "ecmascript":
                case "javascript":
                case "x-ecmascript":
                case "x-javascript": {
                  return !prohibitParameters || this._parameters.size === 0;
                }
                default: {
                  return false;
                }
              }
            }
            default: {
              return false;
            }
          }
        }
        isXML() {
          return this._subtype === "xml" && (this._type === "text" || this._type === "application") || this._subtype.endsWith("+xml");
        }
        isHTML() {
          return this._subtype === "html" && this._type === "text";
        }
      };
    }
  });

  // node_modules/eventemitter3/index.js
  var require_eventemitter3 = __commonJS({
    "node_modules/eventemitter3/index.js"(exports, module2) {
      "use strict";
      var has = Object.prototype.hasOwnProperty;
      var prefix = "~";
      function Events() {
      }
      if (Object.create) {
        Events.prototype = /* @__PURE__ */ Object.create(null);
        if (!new Events().__proto__) prefix = false;
      }
      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }
      function addListener(emitter, event, fn, context, once) {
        if (typeof fn !== "function") {
          throw new TypeError("The listener must be a function");
        }
        var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
        if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
        else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
        else emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
      }
      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0) emitter._events = new Events();
        else delete emitter._events[evt];
      }
      function EventEmitter2() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      EventEmitter2.prototype.eventNames = function eventNames() {
        var names = [], events, name2;
        if (this._eventsCount === 0) return names;
        for (name2 in events = this._events) {
          if (has.call(events, name2)) names.push(prefix ? name2.slice(1) : name2);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
      };
      EventEmitter2.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event, handlers = this._events[evt];
        if (!handlers) return [];
        if (handlers.fn) return [handlers.fn];
        for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
          ee[i] = handlers[i].fn;
        }
        return ee;
      };
      EventEmitter2.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event, listeners = this._events[evt];
        if (!listeners) return 0;
        if (listeners.fn) return 1;
        return listeners.length;
      };
      EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return false;
        var listeners = this._events[evt], len = arguments.length, args, i;
        if (listeners.fn) {
          if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }
          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length, j;
          for (i = 0; i < length; i++) {
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);
                break;
              case 2:
                listeners[i].fn.call(listeners[i].context, a1);
                break;
              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);
                break;
              case 4:
                listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                break;
              default:
                if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }
        return true;
      };
      EventEmitter2.prototype.on = function on(event, fn, context) {
        return addListener(this, event, fn, context, false);
      };
      EventEmitter2.prototype.once = function once(event, fn, context) {
        return addListener(this, event, fn, context, true);
      };
      EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return this;
        if (!fn) {
          clearEvent(this, evt);
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i = 0, events = [], length = listeners.length; i < length; i++) {
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
              events.push(listeners[i]);
            }
          }
          if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
          else clearEvent(this, evt);
        }
        return this;
      };
      EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt]) clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };
      EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
      EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
      EventEmitter2.prefixed = prefix;
      EventEmitter2.EventEmitter = EventEmitter2;
      if ("undefined" !== typeof module2) {
        module2.exports = EventEmitter2;
      }
    }
  });

  // node_modules/backo2/index.js
  var require_backo2 = __commonJS({
    "node_modules/backo2/index.js"(exports, module2) {
      module2.exports = Backoff;
      function Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 1e4;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
      }
      Backoff.prototype.duration = function() {
        var ms = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var rand = Math.random();
          var deviation = Math.floor(rand * this.jitter * ms);
          ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, this.max) | 0;
      };
      Backoff.prototype.reset = function() {
        this.attempts = 0;
      };
      Backoff.prototype.setMin = function(min) {
        this.ms = min;
      };
      Backoff.prototype.setMax = function(max) {
        this.max = max;
      };
      Backoff.prototype.setJitter = function(jitter) {
        this.jitter = jitter;
      };
    }
  });

  // node_modules/subscriptions-transport-ws/dist/utils/is-string.js
  var require_is_string = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/utils/is-string.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function isString(value) {
        return typeof value === "string";
      }
      exports.default = isString;
    }
  });

  // node_modules/subscriptions-transport-ws/dist/utils/is-object.js
  var require_is_object = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/utils/is-object.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function isObject2(value) {
        return value !== null && typeof value === "object";
      }
      exports.default = isObject2;
    }
  });

  // node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js
  var require_nodejsCustomInspectSymbol = __commonJS({
    "node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var nodejsCustomInspectSymbol = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
      var _default = nodejsCustomInspectSymbol;
      exports.default = _default;
    }
  });

  // node_modules/graphql/jsutils/inspect.js
  var require_inspect = __commonJS({
    "node_modules/graphql/jsutils/inspect.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = inspect;
      var _nodejsCustomInspectSymbol = _interopRequireDefault(require_nodejsCustomInspectSymbol());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      var MAX_ARRAY_LENGTH = 10;
      var MAX_RECURSIVE_DEPTH = 2;
      function inspect(value) {
        return formatValue(value, []);
      }
      function formatValue(value, seenValues) {
        switch (_typeof(value)) {
          case "string":
            return JSON.stringify(value);
          case "function":
            return value.name ? "[function ".concat(value.name, "]") : "[function]";
          case "object":
            if (value === null) {
              return "null";
            }
            return formatObjectValue(value, seenValues);
          default:
            return String(value);
        }
      }
      function formatObjectValue(value, previouslySeenValues) {
        if (previouslySeenValues.indexOf(value) !== -1) {
          return "[Circular]";
        }
        var seenValues = [].concat(previouslySeenValues, [value]);
        var customInspectFn = getCustomFn(value);
        if (customInspectFn !== void 0) {
          var customValue = customInspectFn.call(value);
          if (customValue !== value) {
            return typeof customValue === "string" ? customValue : formatValue(customValue, seenValues);
          }
        } else if (Array.isArray(value)) {
          return formatArray(value, seenValues);
        }
        return formatObject(value, seenValues);
      }
      function formatObject(object, seenValues) {
        var keys = Object.keys(object);
        if (keys.length === 0) {
          return "{}";
        }
        if (seenValues.length > MAX_RECURSIVE_DEPTH) {
          return "[" + getObjectTag(object) + "]";
        }
        var properties = keys.map(function(key) {
          var value = formatValue(object[key], seenValues);
          return key + ": " + value;
        });
        return "{ " + properties.join(", ") + " }";
      }
      function formatArray(array, seenValues) {
        if (array.length === 0) {
          return "[]";
        }
        if (seenValues.length > MAX_RECURSIVE_DEPTH) {
          return "[Array]";
        }
        var len = Math.min(MAX_ARRAY_LENGTH, array.length);
        var remaining = array.length - len;
        var items = [];
        for (var i = 0; i < len; ++i) {
          items.push(formatValue(array[i], seenValues));
        }
        if (remaining === 1) {
          items.push("... 1 more item");
        } else if (remaining > 1) {
          items.push("... ".concat(remaining, " more items"));
        }
        return "[" + items.join(", ") + "]";
      }
      function getCustomFn(object) {
        var customInspectFn = object[String(_nodejsCustomInspectSymbol.default)];
        if (typeof customInspectFn === "function") {
          return customInspectFn;
        }
        if (typeof object.inspect === "function") {
          return object.inspect;
        }
      }
      function getObjectTag(object) {
        var tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
        if (tag === "Object" && typeof object.constructor === "function") {
          var name2 = object.constructor.name;
          if (typeof name2 === "string" && name2 !== "") {
            return name2;
          }
        }
        return tag;
      }
    }
  });

  // node_modules/graphql/jsutils/invariant.js
  var require_invariant = __commonJS({
    "node_modules/graphql/jsutils/invariant.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = invariant;
      function invariant(condition, message) {
        var booleanCondition = Boolean(condition);
        if (!booleanCondition) {
          throw new Error(message != null ? message : "Unexpected invariant triggered.");
        }
      }
    }
  });

  // node_modules/graphql/jsutils/defineInspect.js
  var require_defineInspect = __commonJS({
    "node_modules/graphql/jsutils/defineInspect.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = defineInspect;
      var _invariant = _interopRequireDefault(require_invariant());
      var _nodejsCustomInspectSymbol = _interopRequireDefault(require_nodejsCustomInspectSymbol());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function defineInspect(classObject) {
        var fn = classObject.prototype.toJSON;
        typeof fn === "function" || (0, _invariant.default)(0);
        classObject.prototype.inspect = fn;
        if (_nodejsCustomInspectSymbol.default) {
          classObject.prototype[_nodejsCustomInspectSymbol.default] = fn;
        }
      }
    }
  });

  // node_modules/graphql/language/ast.js
  var require_ast = __commonJS({
    "node_modules/graphql/language/ast.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isNode = isNode;
      exports.Token = exports.Location = void 0;
      var _defineInspect = _interopRequireDefault(require_defineInspect());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Location = /* @__PURE__ */ function() {
        function Location2(startToken, endToken, source) {
          this.start = startToken.start;
          this.end = endToken.end;
          this.startToken = startToken;
          this.endToken = endToken;
          this.source = source;
        }
        var _proto = Location2.prototype;
        _proto.toJSON = function toJSON() {
          return {
            start: this.start,
            end: this.end
          };
        };
        return Location2;
      }();
      exports.Location = Location;
      (0, _defineInspect.default)(Location);
      var Token = /* @__PURE__ */ function() {
        function Token2(kind, start, end, line, column, prev, value) {
          this.kind = kind;
          this.start = start;
          this.end = end;
          this.line = line;
          this.column = column;
          this.value = value;
          this.prev = prev;
          this.next = null;
        }
        var _proto2 = Token2.prototype;
        _proto2.toJSON = function toJSON() {
          return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
          };
        };
        return Token2;
      }();
      exports.Token = Token;
      (0, _defineInspect.default)(Token);
      function isNode(maybeNode) {
        return maybeNode != null && typeof maybeNode.kind === "string";
      }
    }
  });

  // node_modules/graphql/language/visitor.js
  var require_visitor = __commonJS({
    "node_modules/graphql/language/visitor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.visit = visit;
      exports.visitInParallel = visitInParallel;
      exports.getVisitFn = getVisitFn;
      exports.BREAK = exports.QueryDocumentKeys = void 0;
      var _inspect = _interopRequireDefault(require_inspect());
      var _ast = require_ast();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var QueryDocumentKeys = {
        Name: [],
        Document: ["definitions"],
        OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
        VariableDefinition: ["variable", "type", "defaultValue", "directives"],
        Variable: ["name"],
        SelectionSet: ["selections"],
        Field: ["alias", "name", "arguments", "directives", "selectionSet"],
        Argument: ["name", "value"],
        FragmentSpread: ["name", "directives"],
        InlineFragment: ["typeCondition", "directives", "selectionSet"],
        FragmentDefinition: [
          "name",
          // Note: fragment variable definitions are experimental and may be changed
          // or removed in the future.
          "variableDefinitions",
          "typeCondition",
          "directives",
          "selectionSet"
        ],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ["values"],
        ObjectValue: ["fields"],
        ObjectField: ["name", "value"],
        Directive: ["name", "arguments"],
        NamedType: ["name"],
        ListType: ["type"],
        NonNullType: ["type"],
        SchemaDefinition: ["description", "directives", "operationTypes"],
        OperationTypeDefinition: ["type"],
        ScalarTypeDefinition: ["description", "name", "directives"],
        ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        FieldDefinition: ["description", "name", "arguments", "type", "directives"],
        InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
        InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
        DirectiveDefinition: ["description", "name", "arguments", "locations"],
        SchemaExtension: ["directives", "operationTypes"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"]
      };
      exports.QueryDocumentKeys = QueryDocumentKeys;
      var BREAK = Object.freeze({});
      exports.BREAK = BREAK;
      function visit(root, visitor) {
        var visitorKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : QueryDocumentKeys;
        var stack = void 0;
        var inArray = Array.isArray(root);
        var keys = [root];
        var index = -1;
        var edits = [];
        var node = void 0;
        var key = void 0;
        var parent = void 0;
        var path = [];
        var ancestors = [];
        var newRoot = root;
        do {
          index++;
          var isLeaving = index === keys.length;
          var isEdited = isLeaving && edits.length !== 0;
          if (isLeaving) {
            key = ancestors.length === 0 ? void 0 : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
              if (inArray) {
                node = node.slice();
              } else {
                var clone = {};
                for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
                  var k = _Object$keys2[_i2];
                  clone[k] = node[k];
                }
                node = clone;
              }
              var editOffset = 0;
              for (var ii = 0; ii < edits.length; ii++) {
                var editKey = edits[ii][0];
                var editValue = edits[ii][1];
                if (inArray) {
                  editKey -= editOffset;
                }
                if (inArray && editValue === null) {
                  node.splice(editKey, 1);
                  editOffset++;
                } else {
                  node[editKey] = editValue;
                }
              }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
          } else {
            key = parent ? inArray ? index : keys[index] : void 0;
            node = parent ? parent[key] : newRoot;
            if (node === null || node === void 0) {
              continue;
            }
            if (parent) {
              path.push(key);
            }
          }
          var result = void 0;
          if (!Array.isArray(node)) {
            if (!(0, _ast.isNode)(node)) {
              throw new Error("Invalid AST Node: ".concat((0, _inspect.default)(node), "."));
            }
            var visitFn = getVisitFn(visitor, node.kind, isLeaving);
            if (visitFn) {
              result = visitFn.call(visitor, node, key, parent, path, ancestors);
              if (result === BREAK) {
                break;
              }
              if (result === false) {
                if (!isLeaving) {
                  path.pop();
                  continue;
                }
              } else if (result !== void 0) {
                edits.push([key, result]);
                if (!isLeaving) {
                  if ((0, _ast.isNode)(result)) {
                    node = result;
                  } else {
                    path.pop();
                    continue;
                  }
                }
              }
            }
          }
          if (result === void 0 && isEdited) {
            edits.push([key, node]);
          }
          if (isLeaving) {
            path.pop();
          } else {
            var _visitorKeys$node$kin;
            stack = {
              inArray,
              index,
              keys,
              edits,
              prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
            index = -1;
            edits = [];
            if (parent) {
              ancestors.push(parent);
            }
            parent = node;
          }
        } while (stack !== void 0);
        if (edits.length !== 0) {
          newRoot = edits[edits.length - 1][1];
        }
        return newRoot;
      }
      function visitInParallel(visitors) {
        var skipping = new Array(visitors.length);
        return {
          enter: function enter(node) {
            for (var i = 0; i < visitors.length; i++) {
              if (skipping[i] == null) {
                var fn = getVisitFn(
                  visitors[i],
                  node.kind,
                  /* isLeaving */
                  false
                );
                if (fn) {
                  var result = fn.apply(visitors[i], arguments);
                  if (result === false) {
                    skipping[i] = node;
                  } else if (result === BREAK) {
                    skipping[i] = BREAK;
                  } else if (result !== void 0) {
                    return result;
                  }
                }
              }
            }
          },
          leave: function leave(node) {
            for (var i = 0; i < visitors.length; i++) {
              if (skipping[i] == null) {
                var fn = getVisitFn(
                  visitors[i],
                  node.kind,
                  /* isLeaving */
                  true
                );
                if (fn) {
                  var result = fn.apply(visitors[i], arguments);
                  if (result === BREAK) {
                    skipping[i] = BREAK;
                  } else if (result !== void 0 && result !== false) {
                    return result;
                  }
                }
              } else if (skipping[i] === node) {
                skipping[i] = null;
              }
            }
          }
        };
      }
      function getVisitFn(visitor, kind, isLeaving) {
        var kindVisitor = visitor[kind];
        if (kindVisitor) {
          if (!isLeaving && typeof kindVisitor === "function") {
            return kindVisitor;
          }
          var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
          if (typeof kindSpecificVisitor === "function") {
            return kindSpecificVisitor;
          }
        } else {
          var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
          if (specificVisitor) {
            if (typeof specificVisitor === "function") {
              return specificVisitor;
            }
            var specificKindVisitor = specificVisitor[kind];
            if (typeof specificKindVisitor === "function") {
              return specificKindVisitor;
            }
          }
        }
      }
    }
  });

  // node_modules/graphql/language/blockString.js
  var require_blockString = __commonJS({
    "node_modules/graphql/language/blockString.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.dedentBlockStringValue = dedentBlockStringValue;
      exports.getBlockStringIndentation = getBlockStringIndentation;
      exports.printBlockString = printBlockString;
      function dedentBlockStringValue(rawString) {
        var lines = rawString.split(/\r\n|[\n\r]/g);
        var commonIndent = getBlockStringIndentation(rawString);
        if (commonIndent !== 0) {
          for (var i = 1; i < lines.length; i++) {
            lines[i] = lines[i].slice(commonIndent);
          }
        }
        var startLine = 0;
        while (startLine < lines.length && isBlank(lines[startLine])) {
          ++startLine;
        }
        var endLine = lines.length;
        while (endLine > startLine && isBlank(lines[endLine - 1])) {
          --endLine;
        }
        return lines.slice(startLine, endLine).join("\n");
      }
      function isBlank(str) {
        for (var i = 0; i < str.length; ++i) {
          if (str[i] !== " " && str[i] !== "	") {
            return false;
          }
        }
        return true;
      }
      function getBlockStringIndentation(value) {
        var _commonIndent;
        var isFirstLine = true;
        var isEmptyLine = true;
        var indent = 0;
        var commonIndent = null;
        for (var i = 0; i < value.length; ++i) {
          switch (value.charCodeAt(i)) {
            case 13:
              if (value.charCodeAt(i + 1) === 10) {
                ++i;
              }
            case 10:
              isFirstLine = false;
              isEmptyLine = true;
              indent = 0;
              break;
            case 9:
            case 32:
              ++indent;
              break;
            default:
              if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
                commonIndent = indent;
              }
              isEmptyLine = false;
          }
        }
        return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
      }
      function printBlockString(value) {
        var indentation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        var preferMultipleLines = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        var isSingleLine = value.indexOf("\n") === -1;
        var hasLeadingSpace = value[0] === " " || value[0] === "	";
        var hasTrailingQuote = value[value.length - 1] === '"';
        var hasTrailingSlash = value[value.length - 1] === "\\";
        var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
        var result = "";
        if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
          result += "\n" + indentation;
        }
        result += indentation ? value.replace(/\n/g, "\n" + indentation) : value;
        if (printAsMultipleLines) {
          result += "\n";
        }
        return '"""' + result.replace(/"""/g, '\\"""') + '"""';
      }
    }
  });

  // node_modules/graphql/language/printer.js
  var require_printer = __commonJS({
    "node_modules/graphql/language/printer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.print = print;
      var _visitor = require_visitor();
      var _blockString = require_blockString();
      function print(ast) {
        return (0, _visitor.visit)(ast, {
          leave: printDocASTReducer
        });
      }
      var MAX_LINE_LENGTH = 80;
      var printDocASTReducer = {
        Name: function Name(node) {
          return node.value;
        },
        Variable: function Variable(node) {
          return "$" + node.name;
        },
        // Document
        Document: function Document(node) {
          return join(node.definitions, "\n\n") + "\n";
        },
        OperationDefinition: function OperationDefinition(node) {
          var op = node.operation;
          var name2 = node.name;
          var varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
          var directives = join(node.directives, " ");
          var selectionSet = node.selectionSet;
          return !name2 && !directives && !varDefs && op === "query" ? selectionSet : join([op, join([name2, varDefs]), directives, selectionSet], " ");
        },
        VariableDefinition: function VariableDefinition(_ref) {
          var variable = _ref.variable, type = _ref.type, defaultValue = _ref.defaultValue, directives = _ref.directives;
          return variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "));
        },
        SelectionSet: function SelectionSet(_ref2) {
          var selections = _ref2.selections;
          return block(selections);
        },
        Field: function Field(_ref3) {
          var alias = _ref3.alias, name2 = _ref3.name, args = _ref3.arguments, directives = _ref3.directives, selectionSet = _ref3.selectionSet;
          var prefix = wrap("", alias, ": ") + name2;
          var argsLine = prefix + wrap("(", join(args, ", "), ")");
          if (argsLine.length > MAX_LINE_LENGTH) {
            argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
          }
          return join([argsLine, join(directives, " "), selectionSet], " ");
        },
        Argument: function Argument(_ref4) {
          var name2 = _ref4.name, value = _ref4.value;
          return name2 + ": " + value;
        },
        // Fragments
        FragmentSpread: function FragmentSpread(_ref5) {
          var name2 = _ref5.name, directives = _ref5.directives;
          return "..." + name2 + wrap(" ", join(directives, " "));
        },
        InlineFragment: function InlineFragment(_ref6) {
          var typeCondition = _ref6.typeCondition, directives = _ref6.directives, selectionSet = _ref6.selectionSet;
          return join(["...", wrap("on ", typeCondition), join(directives, " "), selectionSet], " ");
        },
        FragmentDefinition: function FragmentDefinition(_ref7) {
          var name2 = _ref7.name, typeCondition = _ref7.typeCondition, variableDefinitions = _ref7.variableDefinitions, directives = _ref7.directives, selectionSet = _ref7.selectionSet;
          return (
            // Note: fragment variable definitions are experimental and may be changed
            // or removed in the future.
            "fragment ".concat(name2).concat(wrap("(", join(variableDefinitions, ", "), ")"), " ") + "on ".concat(typeCondition, " ").concat(wrap("", join(directives, " "), " ")) + selectionSet
          );
        },
        // Value
        IntValue: function IntValue(_ref8) {
          var value = _ref8.value;
          return value;
        },
        FloatValue: function FloatValue(_ref9) {
          var value = _ref9.value;
          return value;
        },
        StringValue: function StringValue(_ref10, key) {
          var value = _ref10.value, isBlockString = _ref10.block;
          return isBlockString ? (0, _blockString.printBlockString)(value, key === "description" ? "" : "  ") : JSON.stringify(value);
        },
        BooleanValue: function BooleanValue(_ref11) {
          var value = _ref11.value;
          return value ? "true" : "false";
        },
        NullValue: function NullValue() {
          return "null";
        },
        EnumValue: function EnumValue(_ref12) {
          var value = _ref12.value;
          return value;
        },
        ListValue: function ListValue(_ref13) {
          var values = _ref13.values;
          return "[" + join(values, ", ") + "]";
        },
        ObjectValue: function ObjectValue(_ref14) {
          var fields = _ref14.fields;
          return "{" + join(fields, ", ") + "}";
        },
        ObjectField: function ObjectField(_ref15) {
          var name2 = _ref15.name, value = _ref15.value;
          return name2 + ": " + value;
        },
        // Directive
        Directive: function Directive(_ref16) {
          var name2 = _ref16.name, args = _ref16.arguments;
          return "@" + name2 + wrap("(", join(args, ", "), ")");
        },
        // Type
        NamedType: function NamedType(_ref17) {
          var name2 = _ref17.name;
          return name2;
        },
        ListType: function ListType(_ref18) {
          var type = _ref18.type;
          return "[" + type + "]";
        },
        NonNullType: function NonNullType(_ref19) {
          var type = _ref19.type;
          return type + "!";
        },
        // Type System Definitions
        SchemaDefinition: addDescription(function(_ref20) {
          var directives = _ref20.directives, operationTypes = _ref20.operationTypes;
          return join(["schema", join(directives, " "), block(operationTypes)], " ");
        }),
        OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
          var operation = _ref21.operation, type = _ref21.type;
          return operation + ": " + type;
        },
        ScalarTypeDefinition: addDescription(function(_ref22) {
          var name2 = _ref22.name, directives = _ref22.directives;
          return join(["scalar", name2, join(directives, " ")], " ");
        }),
        ObjectTypeDefinition: addDescription(function(_ref23) {
          var name2 = _ref23.name, interfaces = _ref23.interfaces, directives = _ref23.directives, fields = _ref23.fields;
          return join(["type", name2, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
        }),
        FieldDefinition: addDescription(function(_ref24) {
          var name2 = _ref24.name, args = _ref24.arguments, type = _ref24.type, directives = _ref24.directives;
          return name2 + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "));
        }),
        InputValueDefinition: addDescription(function(_ref25) {
          var name2 = _ref25.name, type = _ref25.type, defaultValue = _ref25.defaultValue, directives = _ref25.directives;
          return join([name2 + ": " + type, wrap("= ", defaultValue), join(directives, " ")], " ");
        }),
        InterfaceTypeDefinition: addDescription(function(_ref26) {
          var name2 = _ref26.name, interfaces = _ref26.interfaces, directives = _ref26.directives, fields = _ref26.fields;
          return join(["interface", name2, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
        }),
        UnionTypeDefinition: addDescription(function(_ref27) {
          var name2 = _ref27.name, directives = _ref27.directives, types = _ref27.types;
          return join(["union", name2, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
        }),
        EnumTypeDefinition: addDescription(function(_ref28) {
          var name2 = _ref28.name, directives = _ref28.directives, values = _ref28.values;
          return join(["enum", name2, join(directives, " "), block(values)], " ");
        }),
        EnumValueDefinition: addDescription(function(_ref29) {
          var name2 = _ref29.name, directives = _ref29.directives;
          return join([name2, join(directives, " ")], " ");
        }),
        InputObjectTypeDefinition: addDescription(function(_ref30) {
          var name2 = _ref30.name, directives = _ref30.directives, fields = _ref30.fields;
          return join(["input", name2, join(directives, " "), block(fields)], " ");
        }),
        DirectiveDefinition: addDescription(function(_ref31) {
          var name2 = _ref31.name, args = _ref31.arguments, repeatable = _ref31.repeatable, locations = _ref31.locations;
          return "directive @" + name2 + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ");
        }),
        SchemaExtension: function SchemaExtension(_ref32) {
          var directives = _ref32.directives, operationTypes = _ref32.operationTypes;
          return join(["extend schema", join(directives, " "), block(operationTypes)], " ");
        },
        ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
          var name2 = _ref33.name, directives = _ref33.directives;
          return join(["extend scalar", name2, join(directives, " ")], " ");
        },
        ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
          var name2 = _ref34.name, interfaces = _ref34.interfaces, directives = _ref34.directives, fields = _ref34.fields;
          return join(["extend type", name2, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
        },
        InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
          var name2 = _ref35.name, interfaces = _ref35.interfaces, directives = _ref35.directives, fields = _ref35.fields;
          return join(["extend interface", name2, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
        },
        UnionTypeExtension: function UnionTypeExtension(_ref36) {
          var name2 = _ref36.name, directives = _ref36.directives, types = _ref36.types;
          return join(["extend union", name2, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
        },
        EnumTypeExtension: function EnumTypeExtension(_ref37) {
          var name2 = _ref37.name, directives = _ref37.directives, values = _ref37.values;
          return join(["extend enum", name2, join(directives, " "), block(values)], " ");
        },
        InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
          var name2 = _ref38.name, directives = _ref38.directives, fields = _ref38.fields;
          return join(["extend input", name2, join(directives, " "), block(fields)], " ");
        }
      };
      function addDescription(cb) {
        return function(node) {
          return join([node.description, cb(node)], "\n");
        };
      }
      function join(maybeArray) {
        var _maybeArray$filter$jo;
        var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function(x) {
          return x;
        }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
      }
      function block(array) {
        return wrap("{\n", indent(join(array, "\n")), "\n}");
      }
      function wrap(start, maybeString) {
        var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
        return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
      }
      function indent(str) {
        return wrap("  ", str.replace(/\n/g, "\n  "));
      }
      function isMultiline(str) {
        return str.indexOf("\n") !== -1;
      }
      function hasMultilineItems(maybeArray) {
        return maybeArray != null && maybeArray.some(isMultiline);
      }
    }
  });

  // node_modules/graphql/language/kinds.js
  var require_kinds = __commonJS({
    "node_modules/graphql/language/kinds.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Kind = void 0;
      var Kind = Object.freeze({
        // Name
        NAME: "Name",
        // Document
        DOCUMENT: "Document",
        OPERATION_DEFINITION: "OperationDefinition",
        VARIABLE_DEFINITION: "VariableDefinition",
        SELECTION_SET: "SelectionSet",
        FIELD: "Field",
        ARGUMENT: "Argument",
        // Fragments
        FRAGMENT_SPREAD: "FragmentSpread",
        INLINE_FRAGMENT: "InlineFragment",
        FRAGMENT_DEFINITION: "FragmentDefinition",
        // Values
        VARIABLE: "Variable",
        INT: "IntValue",
        FLOAT: "FloatValue",
        STRING: "StringValue",
        BOOLEAN: "BooleanValue",
        NULL: "NullValue",
        ENUM: "EnumValue",
        LIST: "ListValue",
        OBJECT: "ObjectValue",
        OBJECT_FIELD: "ObjectField",
        // Directives
        DIRECTIVE: "Directive",
        // Types
        NAMED_TYPE: "NamedType",
        LIST_TYPE: "ListType",
        NON_NULL_TYPE: "NonNullType",
        // Type System Definitions
        SCHEMA_DEFINITION: "SchemaDefinition",
        OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
        // Type Definitions
        SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
        OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
        FIELD_DEFINITION: "FieldDefinition",
        INPUT_VALUE_DEFINITION: "InputValueDefinition",
        INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
        UNION_TYPE_DEFINITION: "UnionTypeDefinition",
        ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
        ENUM_VALUE_DEFINITION: "EnumValueDefinition",
        INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
        // Directive Definitions
        DIRECTIVE_DEFINITION: "DirectiveDefinition",
        // Type System Extensions
        SCHEMA_EXTENSION: "SchemaExtension",
        // Type Extensions
        SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
        OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
        INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
        UNION_TYPE_EXTENSION: "UnionTypeExtension",
        ENUM_TYPE_EXTENSION: "EnumTypeExtension",
        INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
      });
      exports.Kind = Kind;
    }
  });

  // node_modules/graphql/utilities/getOperationAST.js
  var require_getOperationAST = __commonJS({
    "node_modules/graphql/utilities/getOperationAST.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getOperationAST = getOperationAST;
      var _kinds = require_kinds();
      function getOperationAST(documentAST, operationName) {
        var operation = null;
        for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
          var definition = _documentAST$definiti2[_i2];
          if (definition.kind === _kinds.Kind.OPERATION_DEFINITION) {
            var _definition$name;
            if (operationName == null) {
              if (operation) {
                return null;
              }
              operation = definition;
            } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
              return definition;
            }
          }
        }
        return operation;
      }
    }
  });

  // node_modules/symbol-observable/lib/ponyfill.js
  var require_ponyfill = __commonJS({
    "node_modules/symbol-observable/lib/ponyfill.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = symbolObservablePonyfill;
      function symbolObservablePonyfill(root) {
        var result;
        var _Symbol = root.Symbol;
        if (typeof _Symbol === "function") {
          if (_Symbol.observable) {
            result = _Symbol.observable;
          } else {
            result = _Symbol("observable");
            _Symbol.observable = result;
          }
        } else {
          result = "@@observable";
        }
        return result;
      }
    }
  });

  // node_modules/symbol-observable/lib/index.js
  var require_lib = __commonJS({
    "node_modules/symbol-observable/lib/index.js"(exports, module2) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _ponyfill = require_ponyfill();
      var _ponyfill2 = _interopRequireDefault(_ponyfill);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var root;
      if (typeof self !== "undefined") {
        root = self;
      } else if (typeof window !== "undefined") {
        root = window;
      } else if (typeof global !== "undefined") {
        root = global;
      } else if (typeof module2 !== "undefined") {
        root = module2;
      } else {
        root = Function("return this")();
      }
      var result = (0, _ponyfill2["default"])(root);
      exports["default"] = result;
    }
  });

  // node_modules/subscriptions-transport-ws/dist/protocol.js
  var require_protocol = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/protocol.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.GRAPHQL_SUBSCRIPTIONS = exports.GRAPHQL_WS = void 0;
      var GRAPHQL_WS = "graphql-ws";
      exports.GRAPHQL_WS = GRAPHQL_WS;
      var GRAPHQL_SUBSCRIPTIONS = "graphql-subscriptions";
      exports.GRAPHQL_SUBSCRIPTIONS = GRAPHQL_SUBSCRIPTIONS;
    }
  });

  // node_modules/subscriptions-transport-ws/dist/defaults.js
  var require_defaults = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/defaults.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WS_TIMEOUT = exports.MIN_WS_TIMEOUT = void 0;
      var MIN_WS_TIMEOUT = 1e3;
      exports.MIN_WS_TIMEOUT = MIN_WS_TIMEOUT;
      var WS_TIMEOUT = 3e4;
      exports.WS_TIMEOUT = WS_TIMEOUT;
    }
  });

  // node_modules/subscriptions-transport-ws/dist/message-types.js
  var require_message_types = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/message-types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var MessageTypes = function() {
        function MessageTypes2() {
          throw new Error("Static Class");
        }
        MessageTypes2.GQL_CONNECTION_INIT = "connection_init";
        MessageTypes2.GQL_CONNECTION_ACK = "connection_ack";
        MessageTypes2.GQL_CONNECTION_ERROR = "connection_error";
        MessageTypes2.GQL_CONNECTION_KEEP_ALIVE = "ka";
        MessageTypes2.GQL_CONNECTION_TERMINATE = "connection_terminate";
        MessageTypes2.GQL_START = "start";
        MessageTypes2.GQL_DATA = "data";
        MessageTypes2.GQL_ERROR = "error";
        MessageTypes2.GQL_COMPLETE = "complete";
        MessageTypes2.GQL_STOP = "stop";
        MessageTypes2.SUBSCRIPTION_START = "subscription_start";
        MessageTypes2.SUBSCRIPTION_DATA = "subscription_data";
        MessageTypes2.SUBSCRIPTION_SUCCESS = "subscription_success";
        MessageTypes2.SUBSCRIPTION_FAIL = "subscription_fail";
        MessageTypes2.SUBSCRIPTION_END = "subscription_end";
        MessageTypes2.INIT = "init";
        MessageTypes2.INIT_SUCCESS = "init_success";
        MessageTypes2.INIT_FAIL = "init_fail";
        MessageTypes2.KEEP_ALIVE = "keepalive";
        return MessageTypes2;
      }();
      exports.default = MessageTypes;
    }
  });

  // node_modules/subscriptions-transport-ws/dist/client.js
  var require_client = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/client.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SubscriptionClient = void 0;
      var _global = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : {};
      var NativeWebSocket = _global.WebSocket || _global.MozWebSocket;
      var Backoff = require_backo2();
      var eventemitter3_1 = require_eventemitter3();
      var is_string_1 = require_is_string();
      var is_object_1 = require_is_object();
      var printer_1 = require_printer();
      var getOperationAST_1 = require_getOperationAST();
      var symbol_observable_1 = require_lib();
      var protocol_1 = require_protocol();
      var defaults_1 = require_defaults();
      var message_types_1 = require_message_types();
      var SubscriptionClient2 = function() {
        function SubscriptionClient3(url, options, webSocketImpl, webSocketProtocols) {
          var _a = options || {}, _b = _a.connectionCallback, connectionCallback = _b === void 0 ? void 0 : _b, _c = _a.connectionParams, connectionParams = _c === void 0 ? {} : _c, _d = _a.minTimeout, minTimeout = _d === void 0 ? defaults_1.MIN_WS_TIMEOUT : _d, _e = _a.timeout, timeout = _e === void 0 ? defaults_1.WS_TIMEOUT : _e, _f = _a.reconnect, reconnect = _f === void 0 ? false : _f, _g = _a.reconnectionAttempts, reconnectionAttempts = _g === void 0 ? Infinity : _g, _h = _a.lazy, lazy = _h === void 0 ? false : _h, _j = _a.inactivityTimeout, inactivityTimeout = _j === void 0 ? 0 : _j, _k = _a.wsOptionArguments, wsOptionArguments = _k === void 0 ? [] : _k;
          this.wsImpl = webSocketImpl || NativeWebSocket;
          if (!this.wsImpl) {
            throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");
          }
          this.wsProtocols = webSocketProtocols || protocol_1.GRAPHQL_WS;
          this.connectionCallback = connectionCallback;
          this.url = url;
          this.operations = {};
          this.nextOperationId = 0;
          this.minWsTimeout = minTimeout;
          this.wsTimeout = timeout;
          this.unsentMessagesQueue = [];
          this.reconnect = reconnect;
          this.reconnecting = false;
          this.reconnectionAttempts = reconnectionAttempts;
          this.lazy = !!lazy;
          this.inactivityTimeout = inactivityTimeout;
          this.closedByUser = false;
          this.backoff = new Backoff({ jitter: 0.5 });
          this.eventEmitter = new eventemitter3_1.EventEmitter();
          this.middlewares = [];
          this.client = null;
          this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator();
          this.connectionParams = this.getConnectionParams(connectionParams);
          this.wsOptionArguments = wsOptionArguments;
          if (!this.lazy) {
            this.connect();
          }
        }
        Object.defineProperty(SubscriptionClient3.prototype, "status", {
          get: function() {
            if (this.client === null) {
              return this.wsImpl.CLOSED;
            }
            return this.client.readyState;
          },
          enumerable: false,
          configurable: true
        });
        SubscriptionClient3.prototype.close = function(isForced, closedByUser) {
          if (isForced === void 0) {
            isForced = true;
          }
          if (closedByUser === void 0) {
            closedByUser = true;
          }
          this.clearInactivityTimeout();
          if (this.client !== null) {
            this.closedByUser = closedByUser;
            if (isForced) {
              this.clearCheckConnectionInterval();
              this.clearMaxConnectTimeout();
              this.clearTryReconnectTimeout();
              this.unsubscribeAll();
              this.sendMessage(void 0, message_types_1.default.GQL_CONNECTION_TERMINATE, null);
            }
            this.client.close();
            this.client.onopen = null;
            this.client.onclose = null;
            this.client.onerror = null;
            this.client.onmessage = null;
            this.client = null;
            this.eventEmitter.emit("disconnected");
            if (!isForced) {
              this.tryReconnect();
            }
          }
        };
        SubscriptionClient3.prototype.request = function(request) {
          var _a;
          var getObserver = this.getObserver.bind(this);
          var executeOperation2 = this.executeOperation.bind(this);
          var unsubscribe = this.unsubscribe.bind(this);
          var opId;
          this.clearInactivityTimeout();
          return _a = {}, _a[symbol_observable_1.default] = function() {
            return this;
          }, _a.subscribe = function(observerOrNext, onError, onComplete) {
            var observer = getObserver(observerOrNext, onError, onComplete);
            opId = executeOperation2(request, function(error, result) {
              if (error === null && result === null) {
                if (observer.complete) {
                  observer.complete();
                }
              } else if (error) {
                if (observer.error) {
                  observer.error(error[0]);
                }
              } else {
                if (observer.next) {
                  observer.next(result);
                }
              }
            });
            return {
              unsubscribe: function() {
                if (opId) {
                  unsubscribe(opId);
                  opId = null;
                }
              }
            };
          }, _a;
        };
        SubscriptionClient3.prototype.on = function(eventName, callback, context) {
          var handler = this.eventEmitter.on(eventName, callback, context);
          return function() {
            handler.off(eventName, callback, context);
          };
        };
        SubscriptionClient3.prototype.onConnected = function(callback, context) {
          return this.on("connected", callback, context);
        };
        SubscriptionClient3.prototype.onConnecting = function(callback, context) {
          return this.on("connecting", callback, context);
        };
        SubscriptionClient3.prototype.onDisconnected = function(callback, context) {
          return this.on("disconnected", callback, context);
        };
        SubscriptionClient3.prototype.onReconnected = function(callback, context) {
          return this.on("reconnected", callback, context);
        };
        SubscriptionClient3.prototype.onReconnecting = function(callback, context) {
          return this.on("reconnecting", callback, context);
        };
        SubscriptionClient3.prototype.onError = function(callback, context) {
          return this.on("error", callback, context);
        };
        SubscriptionClient3.prototype.unsubscribeAll = function() {
          var _this = this;
          Object.keys(this.operations).forEach(function(subId) {
            _this.unsubscribe(subId);
          });
        };
        SubscriptionClient3.prototype.applyMiddlewares = function(options) {
          var _this = this;
          return new Promise(function(resolve, reject) {
            var queue = function(funcs, scope) {
              var next = function(error) {
                if (error) {
                  reject(error);
                } else {
                  if (funcs.length > 0) {
                    var f = funcs.shift();
                    if (f) {
                      f.applyMiddleware.apply(scope, [options, next]);
                    }
                  } else {
                    resolve(options);
                  }
                }
              };
              next();
            };
            queue(__spreadArray([], _this.middlewares, true), _this);
          });
        };
        SubscriptionClient3.prototype.use = function(middlewares) {
          var _this = this;
          middlewares.map(function(middleware) {
            if (typeof middleware.applyMiddleware === "function") {
              _this.middlewares.push(middleware);
            } else {
              throw new Error("Middleware must implement the applyMiddleware function.");
            }
          });
          return this;
        };
        SubscriptionClient3.prototype.getConnectionParams = function(connectionParams) {
          return function() {
            return new Promise(function(resolve, reject) {
              if (typeof connectionParams === "function") {
                try {
                  return resolve(connectionParams.call(null));
                } catch (error) {
                  return reject(error);
                }
              }
              resolve(connectionParams);
            });
          };
        };
        SubscriptionClient3.prototype.executeOperation = function(options, handler) {
          var _this = this;
          if (this.client === null) {
            this.connect();
          }
          var opId = this.generateOperationId();
          this.operations[opId] = { options, handler };
          this.applyMiddlewares(options).then(function(processedOptions) {
            _this.checkOperationOptions(processedOptions, handler);
            if (_this.operations[opId]) {
              _this.operations[opId] = { options: processedOptions, handler };
              _this.sendMessage(opId, message_types_1.default.GQL_START, processedOptions);
            }
          }).catch(function(error) {
            _this.unsubscribe(opId);
            handler(_this.formatErrors(error));
          });
          return opId;
        };
        SubscriptionClient3.prototype.getObserver = function(observerOrNext, error, complete) {
          if (typeof observerOrNext === "function") {
            return {
              next: function(v) {
                return observerOrNext(v);
              },
              error: function(e) {
                return error && error(e);
              },
              complete: function() {
                return complete && complete();
              }
            };
          }
          return observerOrNext;
        };
        SubscriptionClient3.prototype.createMaxConnectTimeGenerator = function() {
          var minValue = this.minWsTimeout;
          var maxValue = this.wsTimeout;
          return new Backoff({
            min: minValue,
            max: maxValue,
            factor: 1.2
          });
        };
        SubscriptionClient3.prototype.clearCheckConnectionInterval = function() {
          if (this.checkConnectionIntervalId) {
            clearInterval(this.checkConnectionIntervalId);
            this.checkConnectionIntervalId = null;
          }
        };
        SubscriptionClient3.prototype.clearMaxConnectTimeout = function() {
          if (this.maxConnectTimeoutId) {
            clearTimeout(this.maxConnectTimeoutId);
            this.maxConnectTimeoutId = null;
          }
        };
        SubscriptionClient3.prototype.clearTryReconnectTimeout = function() {
          if (this.tryReconnectTimeoutId) {
            clearTimeout(this.tryReconnectTimeoutId);
            this.tryReconnectTimeoutId = null;
          }
        };
        SubscriptionClient3.prototype.clearInactivityTimeout = function() {
          if (this.inactivityTimeoutId) {
            clearTimeout(this.inactivityTimeoutId);
            this.inactivityTimeoutId = null;
          }
        };
        SubscriptionClient3.prototype.setInactivityTimeout = function() {
          var _this = this;
          if (this.inactivityTimeout > 0 && Object.keys(this.operations).length === 0) {
            this.inactivityTimeoutId = setTimeout(function() {
              if (Object.keys(_this.operations).length === 0) {
                _this.close();
              }
            }, this.inactivityTimeout);
          }
        };
        SubscriptionClient3.prototype.checkOperationOptions = function(options, handler) {
          var query = options.query, variables = options.variables, operationName = options.operationName;
          if (!query) {
            throw new Error("Must provide a query.");
          }
          if (!handler) {
            throw new Error("Must provide an handler.");
          }
          if (!(0, is_string_1.default)(query) && !(0, getOperationAST_1.getOperationAST)(query, operationName) || operationName && !(0, is_string_1.default)(operationName) || variables && !(0, is_object_1.default)(variables)) {
            throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.");
          }
        };
        SubscriptionClient3.prototype.buildMessage = function(id, type, payload) {
          var payloadToReturn = payload && payload.query ? __assign(__assign({}, payload), { query: typeof payload.query === "string" ? payload.query : (0, printer_1.print)(payload.query) }) : payload;
          return {
            id,
            type,
            payload: payloadToReturn
          };
        };
        SubscriptionClient3.prototype.formatErrors = function(errors) {
          if (Array.isArray(errors)) {
            return errors;
          }
          if (errors && errors.errors) {
            return this.formatErrors(errors.errors);
          }
          if (errors && errors.message) {
            return [errors];
          }
          return [{
            name: "FormatedError",
            message: "Unknown error",
            originalError: errors
          }];
        };
        SubscriptionClient3.prototype.sendMessage = function(id, type, payload) {
          this.sendMessageRaw(this.buildMessage(id, type, payload));
        };
        SubscriptionClient3.prototype.sendMessageRaw = function(message) {
          switch (this.status) {
            case this.wsImpl.OPEN:
              var serializedMessage = JSON.stringify(message);
              try {
                JSON.parse(serializedMessage);
              } catch (e) {
                this.eventEmitter.emit("error", new Error("Message must be JSON-serializable. Got: " + message));
              }
              this.client.send(serializedMessage);
              break;
            case this.wsImpl.CONNECTING:
              this.unsentMessagesQueue.push(message);
              break;
            default:
              if (!this.reconnecting) {
                this.eventEmitter.emit("error", new Error("A message was not sent because socket is not connected, is closing or is already closed. Message was: " + JSON.stringify(message)));
              }
          }
        };
        SubscriptionClient3.prototype.generateOperationId = function() {
          return String(++this.nextOperationId);
        };
        SubscriptionClient3.prototype.tryReconnect = function() {
          var _this = this;
          if (!this.reconnect || this.backoff.attempts >= this.reconnectionAttempts) {
            return;
          }
          if (!this.reconnecting) {
            Object.keys(this.operations).forEach(function(key) {
              _this.unsentMessagesQueue.push(_this.buildMessage(key, message_types_1.default.GQL_START, _this.operations[key].options));
            });
            this.reconnecting = true;
          }
          this.clearTryReconnectTimeout();
          var delay = this.backoff.duration();
          this.tryReconnectTimeoutId = setTimeout(function() {
            _this.connect();
          }, delay);
        };
        SubscriptionClient3.prototype.flushUnsentMessagesQueue = function() {
          var _this = this;
          this.unsentMessagesQueue.forEach(function(message) {
            _this.sendMessageRaw(message);
          });
          this.unsentMessagesQueue = [];
        };
        SubscriptionClient3.prototype.checkConnection = function() {
          if (this.wasKeepAliveReceived) {
            this.wasKeepAliveReceived = false;
            return;
          }
          if (!this.reconnecting) {
            this.close(false, true);
          }
        };
        SubscriptionClient3.prototype.checkMaxConnectTimeout = function() {
          var _this = this;
          this.clearMaxConnectTimeout();
          this.maxConnectTimeoutId = setTimeout(function() {
            if (_this.status !== _this.wsImpl.OPEN) {
              _this.reconnecting = true;
              _this.close(false, true);
            }
          }, this.maxConnectTimeGenerator.duration());
        };
        SubscriptionClient3.prototype.connect = function() {
          var _a;
          var _this = this;
          this.client = new ((_a = this.wsImpl).bind.apply(_a, __spreadArray([void 0, this.url, this.wsProtocols], this.wsOptionArguments, false)))();
          this.checkMaxConnectTimeout();
          this.client.onopen = function() {
            return __awaiter2(_this, void 0, void 0, function() {
              var connectionParams, error_1;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    if (!(this.status === this.wsImpl.OPEN)) return [3, 4];
                    this.clearMaxConnectTimeout();
                    this.closedByUser = false;
                    this.eventEmitter.emit(this.reconnecting ? "reconnecting" : "connecting");
                    _a2.label = 1;
                  case 1:
                    _a2.trys.push([1, 3, , 4]);
                    return [4, this.connectionParams()];
                  case 2:
                    connectionParams = _a2.sent();
                    this.sendMessage(void 0, message_types_1.default.GQL_CONNECTION_INIT, connectionParams);
                    this.flushUnsentMessagesQueue();
                    return [3, 4];
                  case 3:
                    error_1 = _a2.sent();
                    this.sendMessage(void 0, message_types_1.default.GQL_CONNECTION_ERROR, error_1);
                    this.flushUnsentMessagesQueue();
                    return [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          };
          this.client.onclose = function() {
            if (!_this.closedByUser) {
              _this.close(false, false);
            }
          };
          this.client.onerror = function(err) {
            _this.eventEmitter.emit("error", err);
          };
          this.client.onmessage = function(_a2) {
            var data = _a2.data;
            _this.processReceivedData(data);
          };
        };
        SubscriptionClient3.prototype.processReceivedData = function(receivedData) {
          var parsedMessage;
          var opId;
          try {
            parsedMessage = JSON.parse(receivedData);
            opId = parsedMessage.id;
          } catch (e) {
            throw new Error("Message must be JSON-parseable. Got: " + receivedData);
          }
          if ([
            message_types_1.default.GQL_DATA,
            message_types_1.default.GQL_COMPLETE,
            message_types_1.default.GQL_ERROR
          ].indexOf(parsedMessage.type) !== -1 && !this.operations[opId]) {
            this.unsubscribe(opId);
            return;
          }
          switch (parsedMessage.type) {
            case message_types_1.default.GQL_CONNECTION_ERROR:
              if (this.connectionCallback) {
                this.connectionCallback(parsedMessage.payload);
              }
              break;
            case message_types_1.default.GQL_CONNECTION_ACK:
              this.eventEmitter.emit(this.reconnecting ? "reconnected" : "connected", parsedMessage.payload);
              this.reconnecting = false;
              this.backoff.reset();
              this.maxConnectTimeGenerator.reset();
              if (this.connectionCallback) {
                this.connectionCallback();
              }
              break;
            case message_types_1.default.GQL_COMPLETE:
              var handler = this.operations[opId].handler;
              delete this.operations[opId];
              handler.call(this, null, null);
              break;
            case message_types_1.default.GQL_ERROR:
              this.operations[opId].handler(this.formatErrors(parsedMessage.payload), null);
              delete this.operations[opId];
              break;
            case message_types_1.default.GQL_DATA:
              var parsedPayload = !parsedMessage.payload.errors ? parsedMessage.payload : __assign(__assign({}, parsedMessage.payload), { errors: this.formatErrors(parsedMessage.payload.errors) });
              this.operations[opId].handler(null, parsedPayload);
              break;
            case message_types_1.default.GQL_CONNECTION_KEEP_ALIVE:
              var firstKA = typeof this.wasKeepAliveReceived === "undefined";
              this.wasKeepAliveReceived = true;
              if (firstKA) {
                this.checkConnection();
              }
              if (this.checkConnectionIntervalId) {
                clearInterval(this.checkConnectionIntervalId);
                this.checkConnection();
              }
              this.checkConnectionIntervalId = setInterval(this.checkConnection.bind(this), this.wsTimeout);
              break;
            default:
              throw new Error("Invalid message type!");
          }
        };
        SubscriptionClient3.prototype.unsubscribe = function(opId) {
          if (this.operations[opId]) {
            delete this.operations[opId];
            this.setInactivityTimeout();
            this.sendMessage(opId, message_types_1.default.GQL_STOP, void 0);
          }
        };
        return SubscriptionClient3;
      }();
      exports.SubscriptionClient = SubscriptionClient2;
    }
  });

  // node_modules/@apollo/sandbox/EmbeddedSandbox-9c13854a.js
  var import_whatwg_mimetype = __toESM(require_mime_type(), 1);

  // node_modules/zen-observable-ts/module.js
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var hasSymbols = function() {
    return typeof Symbol === "function";
  };
  var hasSymbol = function(name2) {
    return hasSymbols() && Boolean(Symbol[name2]);
  };
  var getSymbol = function(name2) {
    return hasSymbol(name2) ? Symbol[name2] : "@@" + name2;
  };
  if (hasSymbols() && !hasSymbol("observable")) {
    Symbol.observable = Symbol("observable");
  }
  var SymbolIterator = getSymbol("iterator");
  var SymbolObservable = getSymbol("observable");
  var SymbolSpecies = getSymbol("species");
  function getMethod(obj, key) {
    var value = obj[key];
    if (value == null) return void 0;
    if (typeof value !== "function") throw new TypeError(value + " is not a function");
    return value;
  }
  function getSpecies(obj) {
    var ctor = obj.constructor;
    if (ctor !== void 0) {
      ctor = ctor[SymbolSpecies];
      if (ctor === null) {
        ctor = void 0;
      }
    }
    return ctor !== void 0 ? ctor : Observable;
  }
  function isObservable(x) {
    return x instanceof Observable;
  }
  function hostReportError(e) {
    if (hostReportError.log) {
      hostReportError.log(e);
    } else {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function enqueue(fn) {
    Promise.resolve().then(function() {
      try {
        fn();
      } catch (e) {
        hostReportError(e);
      }
    });
  }
  function cleanupSubscription(subscription) {
    var cleanup = subscription._cleanup;
    if (cleanup === void 0) return;
    subscription._cleanup = void 0;
    if (!cleanup) {
      return;
    }
    try {
      if (typeof cleanup === "function") {
        cleanup();
      } else {
        var unsubscribe = getMethod(cleanup, "unsubscribe");
        if (unsubscribe) {
          unsubscribe.call(cleanup);
        }
      }
    } catch (e) {
      hostReportError(e);
    }
  }
  function closeSubscription(subscription) {
    subscription._observer = void 0;
    subscription._queue = void 0;
    subscription._state = "closed";
  }
  function flushSubscription(subscription) {
    var queue = subscription._queue;
    if (!queue) {
      return;
    }
    subscription._queue = void 0;
    subscription._state = "ready";
    for (var i = 0; i < queue.length; ++i) {
      notifySubscription(subscription, queue[i].type, queue[i].value);
      if (subscription._state === "closed") break;
    }
  }
  function notifySubscription(subscription, type, value) {
    subscription._state = "running";
    var observer = subscription._observer;
    try {
      var m = getMethod(observer, type);
      switch (type) {
        case "next":
          if (m) m.call(observer, value);
          break;
        case "error":
          closeSubscription(subscription);
          if (m) m.call(observer, value);
          else throw value;
          break;
        case "complete":
          closeSubscription(subscription);
          if (m) m.call(observer);
          break;
      }
    } catch (e) {
      hostReportError(e);
    }
    if (subscription._state === "closed") cleanupSubscription(subscription);
    else if (subscription._state === "running") subscription._state = "ready";
  }
  function onNotify(subscription, type, value) {
    if (subscription._state === "closed") return;
    if (subscription._state === "buffering") {
      subscription._queue.push({
        type,
        value
      });
      return;
    }
    if (subscription._state !== "ready") {
      subscription._state = "buffering";
      subscription._queue = [{
        type,
        value
      }];
      enqueue(function() {
        return flushSubscription(subscription);
      });
      return;
    }
    notifySubscription(subscription, type, value);
  }
  var Subscription = /* @__PURE__ */ function() {
    function Subscription2(observer, subscriber) {
      this._cleanup = void 0;
      this._observer = observer;
      this._queue = void 0;
      this._state = "initializing";
      var subscriptionObserver = new SubscriptionObserver(this);
      try {
        this._cleanup = subscriber.call(void 0, subscriptionObserver);
      } catch (e) {
        subscriptionObserver.error(e);
      }
      if (this._state === "initializing") this._state = "ready";
    }
    var _proto = Subscription2.prototype;
    _proto.unsubscribe = function unsubscribe() {
      if (this._state !== "closed") {
        closeSubscription(this);
        cleanupSubscription(this);
      }
    };
    _createClass(Subscription2, [{
      key: "closed",
      get: function() {
        return this._state === "closed";
      }
    }]);
    return Subscription2;
  }();
  var SubscriptionObserver = /* @__PURE__ */ function() {
    function SubscriptionObserver2(subscription) {
      this._subscription = subscription;
    }
    var _proto2 = SubscriptionObserver2.prototype;
    _proto2.next = function next(value) {
      onNotify(this._subscription, "next", value);
    };
    _proto2.error = function error(value) {
      onNotify(this._subscription, "error", value);
    };
    _proto2.complete = function complete() {
      onNotify(this._subscription, "complete");
    };
    _createClass(SubscriptionObserver2, [{
      key: "closed",
      get: function() {
        return this._subscription._state === "closed";
      }
    }]);
    return SubscriptionObserver2;
  }();
  var Observable = /* @__PURE__ */ function() {
    function Observable2(subscriber) {
      if (!(this instanceof Observable2)) throw new TypeError("Observable cannot be called as a function");
      if (typeof subscriber !== "function") throw new TypeError("Observable initializer must be a function");
      this._subscriber = subscriber;
    }
    var _proto3 = Observable2.prototype;
    _proto3.subscribe = function subscribe(observer) {
      if (typeof observer !== "object" || observer === null) {
        observer = {
          next: observer,
          error: arguments[1],
          complete: arguments[2]
        };
      }
      return new Subscription(observer, this._subscriber);
    };
    _proto3.forEach = function forEach(fn) {
      var _this = this;
      return new Promise(function(resolve, reject) {
        if (typeof fn !== "function") {
          reject(new TypeError(fn + " is not a function"));
          return;
        }
        function done() {
          subscription.unsubscribe();
          resolve();
        }
        var subscription = _this.subscribe({
          next: function(value) {
            try {
              fn(value, done);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    };
    _proto3.map = function map(fn) {
      var _this2 = this;
      if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
      var C = getSpecies(this);
      return new C(function(observer) {
        return _this2.subscribe({
          next: function(value) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            observer.complete();
          }
        });
      });
    };
    _proto3.filter = function filter(fn) {
      var _this3 = this;
      if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
      var C = getSpecies(this);
      return new C(function(observer) {
        return _this3.subscribe({
          next: function(value) {
            try {
              if (!fn(value)) return;
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            observer.complete();
          }
        });
      });
    };
    _proto3.reduce = function reduce(fn) {
      var _this4 = this;
      if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
      var C = getSpecies(this);
      var hasSeed = arguments.length > 1;
      var hasValue = false;
      var seed = arguments[1];
      var acc = seed;
      return new C(function(observer) {
        return _this4.subscribe({
          next: function(value) {
            var first = !hasValue;
            hasValue = true;
            if (!first || hasSeed) {
              try {
                acc = fn(acc, value);
              } catch (e) {
                return observer.error(e);
              }
            } else {
              acc = value;
            }
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            if (!hasValue && !hasSeed) return observer.error(new TypeError("Cannot reduce an empty sequence"));
            observer.next(acc);
            observer.complete();
          }
        });
      });
    };
    _proto3.concat = function concat() {
      var _this5 = this;
      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }
      var C = getSpecies(this);
      return new C(function(observer) {
        var subscription;
        var index = 0;
        function startNext(next) {
          subscription = next.subscribe({
            next: function(v) {
              observer.next(v);
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              if (index === sources.length) {
                subscription = void 0;
                observer.complete();
              } else {
                startNext(C.from(sources[index++]));
              }
            }
          });
        }
        startNext(_this5);
        return function() {
          if (subscription) {
            subscription.unsubscribe();
            subscription = void 0;
          }
        };
      });
    };
    _proto3.flatMap = function flatMap(fn) {
      var _this6 = this;
      if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
      var C = getSpecies(this);
      return new C(function(observer) {
        var subscriptions = [];
        var outer = _this6.subscribe({
          next: function(value) {
            if (fn) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
            }
            var inner = C.from(value).subscribe({
              next: function(value2) {
                observer.next(value2);
              },
              error: function(e) {
                observer.error(e);
              },
              complete: function() {
                var i = subscriptions.indexOf(inner);
                if (i >= 0) subscriptions.splice(i, 1);
                completeIfDone();
              }
            });
            subscriptions.push(inner);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            completeIfDone();
          }
        });
        function completeIfDone() {
          if (outer.closed && subscriptions.length === 0) observer.complete();
        }
        return function() {
          subscriptions.forEach(function(s) {
            return s.unsubscribe();
          });
          outer.unsubscribe();
        };
      });
    };
    _proto3[SymbolObservable] = function() {
      return this;
    };
    Observable2.from = function from(x) {
      var C = typeof this === "function" ? this : Observable2;
      if (x == null) throw new TypeError(x + " is not an object");
      var method = getMethod(x, SymbolObservable);
      if (method) {
        var observable = method.call(x);
        if (Object(observable) !== observable) throw new TypeError(observable + " is not an object");
        if (isObservable(observable) && observable.constructor === C) return observable;
        return new C(function(observer) {
          return observable.subscribe(observer);
        });
      }
      if (hasSymbol("iterator")) {
        method = getMethod(x, SymbolIterator);
        if (method) {
          return new C(function(observer) {
            enqueue(function() {
              if (observer.closed) return;
              for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done; ) {
                var item = _step.value;
                observer.next(item);
                if (observer.closed) return;
              }
              observer.complete();
            });
          });
        }
      }
      if (Array.isArray(x)) {
        return new C(function(observer) {
          enqueue(function() {
            if (observer.closed) return;
            for (var i = 0; i < x.length; ++i) {
              observer.next(x[i]);
              if (observer.closed) return;
            }
            observer.complete();
          });
        });
      }
      throw new TypeError(x + " is not observable");
    };
    Observable2.of = function of() {
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }
      var C = typeof this === "function" ? this : Observable2;
      return new C(function(observer) {
        enqueue(function() {
          if (observer.closed) return;
          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (observer.closed) return;
          }
          observer.complete();
        });
      });
    };
    _createClass(Observable2, null, [{
      key: SymbolSpecies,
      get: function() {
        return this;
      }
    }]);
    return Observable2;
  }();
  if (hasSymbols()) {
    Object.defineProperty(Observable, Symbol("extensions"), {
      value: {
        symbol: SymbolObservable,
        hostReportError
      },
      configurable: true
    });
  }

  // node_modules/@apollo/sandbox/EmbeddedSandbox-9c13854a.js
  var import_eventemitter3 = __toESM(require_eventemitter3(), 1);

  // node_modules/graphql-ws/lib/utils.mjs
  function extendedTypeof(val) {
    if (val === null) {
      return "null";
    }
    if (Array.isArray(val)) {
      return "array";
    }
    return typeof val;
  }
  function isObject(val) {
    return extendedTypeof(val) === "object";
  }
  function areGraphQLErrors(obj) {
    return Array.isArray(obj) && // must be at least one error
    obj.length > 0 && // error has at least a message
    obj.every((ob) => "message" in ob);
  }
  function limitCloseReason(reason, whenTooLong) {
    return reason.length < 124 ? reason : whenTooLong;
  }

  // node_modules/graphql-ws/lib/common.mjs
  var GRAPHQL_TRANSPORT_WS_PROTOCOL = "graphql-transport-ws";
  var CloseCode;
  (function(CloseCode2) {
    CloseCode2[CloseCode2["InternalServerError"] = 4500] = "InternalServerError";
    CloseCode2[CloseCode2["InternalClientError"] = 4005] = "InternalClientError";
    CloseCode2[CloseCode2["BadRequest"] = 4400] = "BadRequest";
    CloseCode2[CloseCode2["BadResponse"] = 4004] = "BadResponse";
    CloseCode2[CloseCode2["Unauthorized"] = 4401] = "Unauthorized";
    CloseCode2[CloseCode2["Forbidden"] = 4403] = "Forbidden";
    CloseCode2[CloseCode2["SubprotocolNotAcceptable"] = 4406] = "SubprotocolNotAcceptable";
    CloseCode2[CloseCode2["ConnectionInitialisationTimeout"] = 4408] = "ConnectionInitialisationTimeout";
    CloseCode2[CloseCode2["ConnectionAcknowledgementTimeout"] = 4504] = "ConnectionAcknowledgementTimeout";
    CloseCode2[CloseCode2["SubscriberAlreadyExists"] = 4409] = "SubscriberAlreadyExists";
    CloseCode2[CloseCode2["TooManyInitialisationRequests"] = 4429] = "TooManyInitialisationRequests";
  })(CloseCode || (CloseCode = {}));
  var MessageType;
  (function(MessageType2) {
    MessageType2["ConnectionInit"] = "connection_init";
    MessageType2["ConnectionAck"] = "connection_ack";
    MessageType2["Ping"] = "ping";
    MessageType2["Pong"] = "pong";
    MessageType2["Subscribe"] = "subscribe";
    MessageType2["Next"] = "next";
    MessageType2["Error"] = "error";
    MessageType2["Complete"] = "complete";
  })(MessageType || (MessageType = {}));
  function validateMessage(val) {
    if (!isObject(val)) {
      throw new Error(`Message is expected to be an object, but got ${extendedTypeof(val)}`);
    }
    if (!val.type) {
      throw new Error(`Message is missing the 'type' property`);
    }
    if (typeof val.type !== "string") {
      throw new Error(`Message is expects the 'type' property to be a string, but got ${extendedTypeof(val.type)}`);
    }
    switch (val.type) {
      case MessageType.ConnectionInit:
      case MessageType.ConnectionAck:
      case MessageType.Ping:
      case MessageType.Pong: {
        if (val.payload != null && !isObject(val.payload)) {
          throw new Error(`"${val.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${val.payload}"`);
        }
        break;
      }
      case MessageType.Subscribe: {
        if (typeof val.id !== "string") {
          throw new Error(`"${val.type}" message expects the 'id' property to be a string, but got ${extendedTypeof(val.id)}`);
        }
        if (!val.id) {
          throw new Error(`"${val.type}" message requires a non-empty 'id' property`);
        }
        if (!isObject(val.payload)) {
          throw new Error(`"${val.type}" message expects the 'payload' property to be an object, but got ${extendedTypeof(val.payload)}`);
        }
        if (typeof val.payload.query !== "string") {
          throw new Error(`"${val.type}" message payload expects the 'query' property to be a string, but got ${extendedTypeof(val.payload.query)}`);
        }
        if (val.payload.variables != null && !isObject(val.payload.variables)) {
          throw new Error(`"${val.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${extendedTypeof(val.payload.variables)}`);
        }
        if (val.payload.operationName != null && extendedTypeof(val.payload.operationName) !== "string") {
          throw new Error(`"${val.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${extendedTypeof(val.payload.operationName)}`);
        }
        if (val.payload.extensions != null && !isObject(val.payload.extensions)) {
          throw new Error(`"${val.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${extendedTypeof(val.payload.extensions)}`);
        }
        break;
      }
      case MessageType.Next: {
        if (typeof val.id !== "string") {
          throw new Error(`"${val.type}" message expects the 'id' property to be a string, but got ${extendedTypeof(val.id)}`);
        }
        if (!val.id) {
          throw new Error(`"${val.type}" message requires a non-empty 'id' property`);
        }
        if (!isObject(val.payload)) {
          throw new Error(`"${val.type}" message expects the 'payload' property to be an object, but got ${extendedTypeof(val.payload)}`);
        }
        break;
      }
      case MessageType.Error: {
        if (typeof val.id !== "string") {
          throw new Error(`"${val.type}" message expects the 'id' property to be a string, but got ${extendedTypeof(val.id)}`);
        }
        if (!val.id) {
          throw new Error(`"${val.type}" message requires a non-empty 'id' property`);
        }
        if (!areGraphQLErrors(val.payload)) {
          throw new Error(`"${val.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(val.payload)}`);
        }
        break;
      }
      case MessageType.Complete: {
        if (typeof val.id !== "string") {
          throw new Error(`"${val.type}" message expects the 'id' property to be a string, but got ${extendedTypeof(val.id)}`);
        }
        if (!val.id) {
          throw new Error(`"${val.type}" message requires a non-empty 'id' property`);
        }
        break;
      }
      default:
        throw new Error(`Invalid message 'type' property "${val.type}"`);
    }
    return val;
  }
  function parseMessage(data, reviver) {
    return validateMessage(typeof data === "string" ? JSON.parse(data, reviver) : data);
  }
  function stringifyMessage(msg, replacer) {
    validateMessage(msg);
    return JSON.stringify(msg, replacer);
  }

  // node_modules/graphql-ws/lib/client.mjs
  var __await = function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  };
  var __asyncGenerator = function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function verb(n) {
      if (g[n]) i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  };
  function createClient(options) {
    const {
      url,
      connectionParams,
      lazy = true,
      onNonLazyError = console.error,
      lazyCloseTimeout: lazyCloseTimeoutMs = 0,
      keepAlive = 0,
      disablePong,
      connectionAckWaitTimeout = 0,
      retryAttempts = 5,
      retryWait = async function randomisedExponentialBackoff(retries2) {
        let retryDelay = 1e3;
        for (let i = 0; i < retries2; i++) {
          retryDelay *= 2;
        }
        await new Promise((resolve) => setTimeout(resolve, retryDelay + // add random timeout from 300ms to 3s
        Math.floor(Math.random() * (3e3 - 300) + 300)));
      },
      shouldRetry = isLikeCloseEvent,
      isFatalConnectionProblem,
      on,
      webSocketImpl,
      /**
       * Generates a v4 UUID to be used as the ID using `Math`
       * as the random number generator. Supply your own generator
       * in case you need more uniqueness.
       *
       * Reference: https://gist.github.com/jed/982883
       */
      generateID = function generateUUID() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
      },
      jsonMessageReplacer: replacer,
      jsonMessageReviver: reviver
    } = options;
    let ws;
    if (webSocketImpl) {
      if (!isWebSocket(webSocketImpl)) {
        throw new Error("Invalid WebSocket implementation provided");
      }
      ws = webSocketImpl;
    } else if (typeof WebSocket !== "undefined") {
      ws = WebSocket;
    } else if (typeof global !== "undefined") {
      ws = global.WebSocket || // @ts-expect-error: Support more browsers
      global.MozWebSocket;
    } else if (typeof window !== "undefined") {
      ws = window.WebSocket || // @ts-expect-error: Support more browsers
      window.MozWebSocket;
    }
    if (!ws)
      throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
    const WebSocketImpl = ws;
    const emitter = (() => {
      const message = /* @__PURE__ */ (() => {
        const listeners2 = {};
        return {
          on(id, listener) {
            listeners2[id] = listener;
            return () => {
              delete listeners2[id];
            };
          },
          emit(message2) {
            var _a;
            if ("id" in message2)
              (_a = listeners2[message2.id]) === null || _a === void 0 ? void 0 : _a.call(listeners2, message2);
          }
        };
      })();
      const listeners = {
        connecting: (on === null || on === void 0 ? void 0 : on.connecting) ? [on.connecting] : [],
        opened: (on === null || on === void 0 ? void 0 : on.opened) ? [on.opened] : [],
        connected: (on === null || on === void 0 ? void 0 : on.connected) ? [on.connected] : [],
        ping: (on === null || on === void 0 ? void 0 : on.ping) ? [on.ping] : [],
        pong: (on === null || on === void 0 ? void 0 : on.pong) ? [on.pong] : [],
        message: (on === null || on === void 0 ? void 0 : on.message) ? [message.emit, on.message] : [message.emit],
        closed: (on === null || on === void 0 ? void 0 : on.closed) ? [on.closed] : [],
        error: (on === null || on === void 0 ? void 0 : on.error) ? [on.error] : []
      };
      return {
        onMessage: message.on,
        on(event, listener) {
          const l = listeners[event];
          l.push(listener);
          return () => {
            l.splice(l.indexOf(listener), 1);
          };
        },
        emit(event, ...args) {
          for (const listener of [...listeners[event]]) {
            listener(...args);
          }
        }
      };
    })();
    function errorOrClosed(cb) {
      const listening = [
        // errors are fatal and more critical than close events, throw them first
        emitter.on("error", (err) => {
          listening.forEach((unlisten) => unlisten());
          cb(err);
        }),
        // closes can be graceful and not fatal, throw them second (if error didnt throw)
        emitter.on("closed", (event) => {
          listening.forEach((unlisten) => unlisten());
          cb(event);
        })
      ];
    }
    let connecting, locks = 0, lazyCloseTimeout, retrying = false, retries = 0, disposed = false;
    async function connect() {
      clearTimeout(lazyCloseTimeout);
      const [socket, throwOnClose] = await (connecting !== null && connecting !== void 0 ? connecting : connecting = new Promise((connected, denied) => (async () => {
        if (retrying) {
          await retryWait(retries);
          if (!locks) {
            connecting = void 0;
            return denied({ code: 1e3, reason: "All Subscriptions Gone" });
          }
          retries++;
        }
        emitter.emit("connecting", retrying);
        const socket2 = new WebSocketImpl(typeof url === "function" ? await url() : url, GRAPHQL_TRANSPORT_WS_PROTOCOL);
        let connectionAckTimeout, queuedPing;
        function enqueuePing() {
          if (isFinite(keepAlive) && keepAlive > 0) {
            clearTimeout(queuedPing);
            queuedPing = setTimeout(() => {
              if (socket2.readyState === WebSocketImpl.OPEN) {
                socket2.send(stringifyMessage({ type: MessageType.Ping }));
                emitter.emit("ping", false, void 0);
              }
            }, keepAlive);
          }
        }
        errorOrClosed((errOrEvent) => {
          connecting = void 0;
          clearTimeout(connectionAckTimeout);
          clearTimeout(queuedPing);
          denied(errOrEvent);
          if (errOrEvent instanceof TerminatedCloseEvent) {
            socket2.close(4499, "Terminated");
            socket2.onerror = null;
            socket2.onclose = null;
          }
        });
        socket2.onerror = (err) => emitter.emit("error", err);
        socket2.onclose = (event) => emitter.emit("closed", event);
        socket2.onopen = async () => {
          try {
            emitter.emit("opened", socket2);
            const payload = typeof connectionParams === "function" ? await connectionParams() : connectionParams;
            if (socket2.readyState !== WebSocketImpl.OPEN)
              return;
            socket2.send(stringifyMessage(payload ? {
              type: MessageType.ConnectionInit,
              payload
            } : {
              type: MessageType.ConnectionInit
              // payload is completely absent if not provided
            }, replacer));
            if (isFinite(connectionAckWaitTimeout) && connectionAckWaitTimeout > 0) {
              connectionAckTimeout = setTimeout(() => {
                socket2.close(CloseCode.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
              }, connectionAckWaitTimeout);
            }
            enqueuePing();
          } catch (err) {
            emitter.emit("error", err);
            socket2.close(CloseCode.InternalClientError, limitCloseReason(err instanceof Error ? err.message : new Error(err).message, "Internal client error"));
          }
        };
        let acknowledged = false;
        socket2.onmessage = ({ data }) => {
          try {
            const message = parseMessage(data, reviver);
            emitter.emit("message", message);
            if (message.type === "ping" || message.type === "pong") {
              emitter.emit(message.type, true, message.payload);
              if (message.type === "pong") {
                enqueuePing();
              } else if (!disablePong) {
                socket2.send(stringifyMessage(message.payload ? {
                  type: MessageType.Pong,
                  payload: message.payload
                } : {
                  type: MessageType.Pong
                  // payload is completely absent if not provided
                }));
                emitter.emit("pong", false, message.payload);
              }
              return;
            }
            if (acknowledged)
              return;
            if (message.type !== MessageType.ConnectionAck)
              throw new Error(`First message cannot be of type ${message.type}`);
            clearTimeout(connectionAckTimeout);
            acknowledged = true;
            emitter.emit("connected", socket2, message.payload, retrying);
            retrying = false;
            retries = 0;
            connected([
              socket2,
              new Promise((_, reject) => errorOrClosed(reject))
            ]);
          } catch (err) {
            socket2.onmessage = null;
            emitter.emit("error", err);
            socket2.close(CloseCode.BadResponse, limitCloseReason(err instanceof Error ? err.message : new Error(err).message, "Bad response"));
          }
        };
      })()));
      if (socket.readyState === WebSocketImpl.CLOSING)
        await throwOnClose;
      let release = () => {
      };
      const released = new Promise((resolve) => release = resolve);
      return [
        socket,
        release,
        Promise.race([
          // wait for
          released.then(() => {
            if (!locks) {
              const complete = () => socket.close(1e3, "Normal Closure");
              if (isFinite(lazyCloseTimeoutMs) && lazyCloseTimeoutMs > 0) {
                lazyCloseTimeout = setTimeout(() => {
                  if (socket.readyState === WebSocketImpl.OPEN)
                    complete();
                }, lazyCloseTimeoutMs);
              } else {
                complete();
              }
            }
          }),
          // or
          throwOnClose
        ])
      ];
    }
    function shouldRetryConnectOrThrow(errOrCloseEvent) {
      if (isLikeCloseEvent(errOrCloseEvent) && (isFatalInternalCloseCode(errOrCloseEvent.code) || [
        CloseCode.InternalServerError,
        CloseCode.InternalClientError,
        CloseCode.BadRequest,
        CloseCode.BadResponse,
        CloseCode.Unauthorized,
        // CloseCode.Forbidden, might grant access out after retry
        CloseCode.SubprotocolNotAcceptable,
        // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
        // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
        CloseCode.SubscriberAlreadyExists,
        CloseCode.TooManyInitialisationRequests
        // 4499, // Terminated, probably because the socket froze, we want to retry
      ].includes(errOrCloseEvent.code)))
        throw errOrCloseEvent;
      if (disposed)
        return false;
      if (isLikeCloseEvent(errOrCloseEvent) && errOrCloseEvent.code === 1e3)
        return locks > 0;
      if (!retryAttempts || retries >= retryAttempts)
        throw errOrCloseEvent;
      if (!shouldRetry(errOrCloseEvent))
        throw errOrCloseEvent;
      if (isFatalConnectionProblem === null || isFatalConnectionProblem === void 0 ? void 0 : isFatalConnectionProblem(errOrCloseEvent))
        throw errOrCloseEvent;
      return retrying = true;
    }
    if (!lazy) {
      (async () => {
        locks++;
        for (; ; ) {
          try {
            const [, , throwOnClose] = await connect();
            await throwOnClose;
          } catch (errOrCloseEvent) {
            try {
              if (!shouldRetryConnectOrThrow(errOrCloseEvent))
                return;
            } catch (errOrCloseEvent2) {
              return onNonLazyError === null || onNonLazyError === void 0 ? void 0 : onNonLazyError(errOrCloseEvent2);
            }
          }
        }
      })();
    }
    function subscribe(payload, sink) {
      const id = generateID(payload);
      let done = false, errored = false, releaser = () => {
        locks--;
        done = true;
      };
      (async () => {
        locks++;
        for (; ; ) {
          try {
            const [socket, release, waitForReleaseOrThrowOnClose] = await connect();
            if (done)
              return release();
            const unlisten = emitter.onMessage(id, (message) => {
              switch (message.type) {
                case MessageType.Next: {
                  sink.next(message.payload);
                  return;
                }
                case MessageType.Error: {
                  errored = true, done = true;
                  sink.error(message.payload);
                  releaser();
                  return;
                }
                case MessageType.Complete: {
                  done = true;
                  releaser();
                  return;
                }
              }
            });
            socket.send(stringifyMessage({
              id,
              type: MessageType.Subscribe,
              payload
            }, replacer));
            releaser = () => {
              if (!done && socket.readyState === WebSocketImpl.OPEN)
                socket.send(stringifyMessage({
                  id,
                  type: MessageType.Complete
                }, replacer));
              locks--;
              done = true;
              release();
            };
            await waitForReleaseOrThrowOnClose.finally(unlisten);
            return;
          } catch (errOrCloseEvent) {
            if (!shouldRetryConnectOrThrow(errOrCloseEvent))
              return;
          }
        }
      })().then(() => {
        if (!errored)
          sink.complete();
      }).catch((err) => {
        sink.error(err);
      });
      return () => {
        if (!done)
          releaser();
      };
    }
    return {
      on: emitter.on,
      subscribe,
      iterate(request) {
        const pending = [];
        const deferred = {
          done: false,
          error: null,
          resolve: () => {
          }
        };
        const dispose = subscribe(request, {
          next(val) {
            pending.push(val);
            deferred.resolve();
          },
          error(err) {
            deferred.done = true;
            deferred.error = err;
            deferred.resolve();
          },
          complete() {
            deferred.done = true;
            deferred.resolve();
          }
        });
        const iterator = function iterator2() {
          return __asyncGenerator(this, arguments, function* iterator_1() {
            for (; ; ) {
              if (!pending.length) {
                yield __await(new Promise((resolve) => deferred.resolve = resolve));
              }
              while (pending.length) {
                yield yield __await(pending.shift());
              }
              if (deferred.error) {
                throw deferred.error;
              }
              if (deferred.done) {
                return yield __await(void 0);
              }
            }
          });
        }();
        iterator.throw = async (err) => {
          if (!deferred.done) {
            deferred.done = true;
            deferred.error = err;
            deferred.resolve();
          }
          return { done: true, value: void 0 };
        };
        iterator.return = async () => {
          dispose();
          return { done: true, value: void 0 };
        };
        return iterator;
      },
      async dispose() {
        disposed = true;
        if (connecting) {
          const [socket] = await connecting;
          socket.close(1e3, "Normal Closure");
        }
      },
      terminate() {
        if (connecting) {
          emitter.emit("closed", new TerminatedCloseEvent());
        }
      }
    };
  }
  var TerminatedCloseEvent = class extends Error {
    constructor() {
      super(...arguments);
      this.name = "TerminatedCloseEvent";
      this.message = "4499: Terminated";
      this.code = 4499;
      this.reason = "Terminated";
      this.wasClean = false;
    }
  };
  function isLikeCloseEvent(val) {
    return isObject(val) && "code" in val && "reason" in val;
  }
  function isFatalInternalCloseCode(code) {
    if ([
      1e3,
      1001,
      1006,
      1005,
      1012,
      1013,
      1014
      // Bad Gateway
    ].includes(code))
      return false;
    return code >= 1e3 && code <= 1999;
  }
  function isWebSocket(val) {
    return typeof val === "function" && "constructor" in val && "CLOSED" in val && "CLOSING" in val && "CONNECTING" in val && "OPEN" in val;
  }

  // node_modules/@apollo/sandbox/EmbeddedSandbox-9c13854a.js
  var import_subscriptions_transport_ws = __toESM(require_client(), 1);
  var EMBEDDABLE_SANDBOX_URL = (__testLocal__ = false) => __testLocal__ ? "https://embed.apollo.local:3000/sandbox/explorer" : "https://sandbox.embed.apollographql.com/sandbox/explorer";
  var SCHEMA_ERROR = "SchemaError";
  var SCHEMA_RESPONSE = "SchemaResponse";
  var EXPLORER_QUERY_MUTATION_REQUEST = "ExplorerRequest";
  var EXPLORER_QUERY_MUTATION_RESPONSE = "ExplorerResponse";
  var EXPLORER_SUBSCRIPTION_REQUEST = "ExplorerSubscriptionRequest";
  var EXPLORER_SUBSCRIPTION_RESPONSE = "ExplorerSubscriptionResponse";
  var EXPLORER_SUBSCRIPTION_TERMINATION = "ExplorerSubscriptionTermination";
  var EXPLORER_SET_SOCKET_ERROR = "ExplorerSetSocketError";
  var EXPLORER_SET_SOCKET_STATUS = "ExplorerSetSocketStatus";
  var IFRAME_DOM_ID = (uniqueId) => `apollo-embed-${uniqueId}`;
  var EXPLORER_LISTENING_FOR_HANDSHAKE = "ExplorerListeningForHandshake";
  var HANDSHAKE_RESPONSE = "HandshakeResponse";
  var SET_PARTIAL_AUTHENTICATION_TOKEN_FOR_PARENT = "SetPartialAuthenticationTokenForParent";
  var TRIGGER_LOGOUT_IN_PARENT = "TriggerLogoutInParent";
  var EXPLORER_LISTENING_FOR_PARTIAL_TOKEN = "ExplorerListeningForPartialToken";
  var PARTIAL_AUTHENTICATION_TOKEN_RESPONSE = "PartialAuthenticationTokenResponse";
  var PREFLIGHT_OAUTH_REQUEST = "PreflightOAuthRequest";
  var PREFLIGHT_OAUTH_PROVIDER_RESPONSE = "PreflightOAuthProviderResponse";
  var PREFLIGHT_OAUTH_RESPONSE = "PreflightOAuthResponse";
  var INTROSPECTION_QUERY_WITH_HEADERS = "IntrospectionQueryWithHeaders";
  var PARENT_LOGOUT_SUCCESS = "ParentLogoutSuccess";
  var defaultHandleRequest = ({
    legacyIncludeCookies
  }) => {
    const handleRequestWithCookiePref = (endpointUrl, options) => fetch(endpointUrl, Object.assign(Object.assign({}, options), legacyIncludeCookies ? {
      credentials: "include"
    } : (
      // if the user doesn't pass this value then we should use the credentials option sent from the
      // studio postMessage request. otherwise this would overwrite it.
      legacyIncludeCookies !== void 0 ? {
        credentials: "omit"
      } : {}
    )));
    return handleRequestWithCookiePref;
  };
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function readMultipartWebStream(response, mimeType) {
    if (response.body === null) {
      throw new Error("Missing body");
    } else if (typeof response.body.tee !== "function") {
      throw new Error("Streaming bodies not supported by provided fetch implementation");
    }
    const decoder = new TextDecoder("utf-8");
    let buffer = "";
    const messageBoundary = `--${mimeType.parameters.get("boundary") || "-"}`;
    const subscriptionTerminationMessageBoundary = "--graphql--";
    const reader = response.body.getReader();
    return {
      closeReadableStream: () => reader.cancel(),
      observable: new Observable((observer) => {
        function readMultipartStream() {
          reader.read().then((iteration) => {
            var _a, _b, _c;
            if (iteration.done) {
              (_a = observer.complete) === null || _a === void 0 ? void 0 : _a.call(observer);
              return;
            }
            const chunk = decoder.decode(iteration.value);
            buffer += chunk;
            let boundaryIndex = buffer.indexOf(messageBoundary);
            while (boundaryIndex > -1) {
              const message = buffer.slice(0, boundaryIndex);
              buffer = buffer.slice(boundaryIndex + messageBoundary.length);
              if (message.trim()) {
                const newLineSequence = "\r\n\r\n";
                let messageStartIndex;
                if (message.lastIndexOf(newLineSequence) !== message.indexOf(newLineSequence)) {
                  const heartbeatStartIndex = message.indexOf(newLineSequence) + newLineSequence.length;
                  messageStartIndex = message.substring(heartbeatStartIndex).indexOf(newLineSequence) + heartbeatStartIndex;
                } else {
                  messageStartIndex = message.indexOf(newLineSequence);
                }
                const chunkHeaders = Object.fromEntries(message.slice(0, messageStartIndex).split("\n").map((line) => {
                  const i = line.indexOf(":");
                  if (i > -1) {
                    const name2 = line.slice(0, i).trim();
                    const value = line.slice(i + 1).trim();
                    return [name2, value];
                  } else {
                    return null;
                  }
                }).filter((h) => !!h));
                if (((_b = chunkHeaders["content-type"]) === null || _b === void 0 ? void 0 : _b.toLowerCase().indexOf("application/json")) === -1) {
                  throw new Error("Unsupported patch content type");
                }
                const bodyText = message.slice(messageStartIndex);
                try {
                  (_c = observer.next) === null || _c === void 0 ? void 0 : _c.call(observer, Object.assign({
                    data: JSON.parse(bodyText),
                    headers: chunkHeaders,
                    size: chunk.length
                  }, chunk.indexOf(subscriptionTerminationMessageBoundary) > -1 ? {
                    shouldTerminate: true
                  } : {}));
                } catch (err) {
                  throw err;
                }
              }
              boundaryIndex = buffer.indexOf(messageBoundary);
            }
            readMultipartStream();
          }).catch((err) => {
            var _a, _b;
            if (err.name === "AbortError") return;
            if (err.result && err.result.errors && err.result.data) {
              (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, {
                data: err.result,
                size: Infinity
              });
            }
            (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, err);
          });
        }
        readMultipartStream();
      })
    };
  }
  var serializeFetchParameter = (p, label) => {
    let serialized;
    try {
      serialized = JSON.stringify(p);
    } catch (e) {
      const parseError = new Error(`Network request failed. ${label} is not serializable`);
      throw parseError;
    }
    return serialized;
  };
  var constructMultipartForm = ({
    fileVariables: inputtedFileVariables,
    requestBody
  }) => __awaiter(void 0, void 0, void 0, function* () {
    const fileVariables = inputtedFileVariables.map((fileVariable) => Object.assign(Object.assign({}, fileVariable), {
      files: fileVariable.files.map(({
        arrayBuffer,
        fileName
      }) => new File([new Blob([arrayBuffer])], fileName))
    }));
    const map = {};
    let i = 0;
    const filesToAppend = [];
    let variablesWithNullsForFiles = requestBody.variables;
    fileVariables.forEach(({
      files,
      variableKey,
      isMultiFile
    }, fileVariableIndex) => {
      if (files === null || files === void 0 ? void 0 : files.length) {
        variablesWithNullsForFiles = Object.assign(Object.assign({}, variablesWithNullsForFiles), {
          [variableKey]: isMultiFile ? new Array(files.length).fill(null) : null
        });
        Array.from(files).forEach((file) => {
          map[i] = [`${fileVariables.length > 1 ? `${fileVariableIndex}.` : ""}variables.${variableKey}${isMultiFile ? `.${i}` : ""}`];
          filesToAppend.push([i.toString(), file, file.name]);
          i++;
        });
      }
    });
    const form = new FormData();
    form.append("operations", serializeFetchParameter({
      query: requestBody.query,
      operationName: requestBody.operationName,
      variables: variablesWithNullsForFiles
    }, "Payload"));
    form.append("map", JSON.stringify(map));
    filesToAppend.forEach((item) => {
      form.append(item[0], item[1], item[2]);
    });
    return form;
  });
  function getHeadersWithContentType(headers) {
    const headersWithContentType = headers !== null && headers !== void 0 ? headers : {};
    if (Object.keys(headersWithContentType).every((key) => key.toLowerCase() !== "content-type")) {
      headersWithContentType["content-type"] = "application/json";
    }
    return headersWithContentType;
  }
  function sendPostMessageToEmbed({
    message,
    embeddedIFrameElement,
    embedUrl
  }) {
    var _a;
    (_a = embeddedIFrameElement === null || embeddedIFrameElement === void 0 ? void 0 : embeddedIFrameElement.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(message, embedUrl);
  }
  function executeOperation({
    endpointUrl,
    handleRequest,
    headers,
    includeCookies,
    operationId,
    operation,
    operationName,
    variables,
    fileVariables,
    embeddedIFrameElement,
    embedUrl,
    isMultipartSubscription,
    multipartSubscriptionClient
  }) {
    return __awaiter(this, void 0, void 0, function* () {
      const requestBody = {
        query: operation,
        variables,
        operationName
      };
      let promise;
      if (fileVariables && fileVariables.length > 0) {
        const form = yield constructMultipartForm({
          fileVariables,
          requestBody
        });
        promise = handleRequest(endpointUrl, Object.assign({
          method: "POST",
          headers: headers !== null && headers !== void 0 ? headers : {},
          body: form
        }, includeCookies ? {
          credentials: "include"
        } : {}));
      } else {
        promise = handleRequest(endpointUrl, Object.assign({
          method: "POST",
          headers: getHeadersWithContentType(headers),
          body: JSON.stringify(requestBody)
        }, !!includeCookies ? {
          credentials: "include"
        } : {
          credentials: "omit"
        }));
      }
      promise.then((response) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const responseHeaders = {};
        response.headers.forEach((value, key) => {
          responseHeaders[key] = value;
        });
        const contentType = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get("content-type");
        const mimeType = contentType && new import_whatwg_mimetype.default(contentType);
        if (mimeType && mimeType.type === "multipart" && mimeType.subtype === "mixed") {
          multipartSubscriptionClient === null || multipartSubscriptionClient === void 0 ? void 0 : multipartSubscriptionClient.emit("connected");
          const {
            observable,
            closeReadableStream
          } = readMultipartWebStream(response, mimeType);
          let isFirst = true;
          const observableSubscription = observable.subscribe({
            next(data) {
              if ("payload" in data.data) {
                if ("shouldTerminate" in data && data.shouldTerminate) {
                  observableSubscription.unsubscribe();
                  closeReadableStream();
                  sendPostMessageToEmbed({
                    message: {
                      name: EXPLORER_SET_SOCKET_STATUS,
                      status: "disconnected"
                    },
                    embeddedIFrameElement,
                    embedUrl
                  });
                }
                sendPostMessageToEmbed({
                  message: {
                    name: EXPLORER_SUBSCRIPTION_RESPONSE,
                    // Include the same operation ID in the response message's name
                    // so the Explorer knows which operation it's associated with
                    operationId,
                    response: {
                      data: data.data,
                      status: response.status,
                      headers: isFirst ? [responseHeaders, ...Array.isArray(data.headers) ? data.headers : data.headers ? [data.headers] : []] : data.headers,
                      size: data.size
                    }
                  },
                  embeddedIFrameElement,
                  embedUrl
                });
              } else {
                sendPostMessageToEmbed({
                  message: {
                    name: EXPLORER_QUERY_MUTATION_RESPONSE,
                    // Include the same operation ID in the response message's name
                    // so the Explorer knows which operation it's associated with
                    operationId,
                    response: {
                      incremental: data.data.incremental,
                      data: data.data.data,
                      errors: data.data.errors,
                      extensions: data.data.extensions,
                      path: data.data.path,
                      status: response.status,
                      headers: isFirst ? [responseHeaders, ...Array.isArray(data.headers) ? data.headers : data.headers ? [data.headers] : []] : data.headers,
                      hasNext: true,
                      size: data.size
                    }
                  },
                  embeddedIFrameElement,
                  embedUrl
                });
              }
              isFirst = false;
            },
            error(err) {
              const error = err && typeof err === "object" && "message" in err && typeof err.message === "string" ? Object.assign({
                message: err.message
              }, "stack" in err && typeof err.stack === "string" ? {
                stack: err.stack
              } : {}) : void 0;
              sendPostMessageToEmbed({
                message: {
                  name: isMultipartSubscription ? EXPLORER_SUBSCRIPTION_RESPONSE : EXPLORER_QUERY_MUTATION_RESPONSE,
                  // Include the same operation ID in the response message's name
                  // so the Explorer knows which operation it's associated with
                  operationId,
                  response: Object.assign({
                    data: null,
                    error
                  }, !isMultipartSubscription ? {
                    hasNext: false
                  } : {})
                },
                embeddedIFrameElement,
                embedUrl
              });
            },
            complete() {
              sendPostMessageToEmbed({
                message: {
                  name: isMultipartSubscription ? EXPLORER_SUBSCRIPTION_RESPONSE : EXPLORER_QUERY_MUTATION_RESPONSE,
                  // Include the same operation ID in the response message's name
                  // so the Explorer knows which operation it's associated with
                  operationId,
                  response: Object.assign({
                    data: null,
                    status: response.status,
                    headers: isFirst ? responseHeaders : void 0
                  }, !isMultipartSubscription ? {
                    hasNext: false
                  } : {})
                },
                embeddedIFrameElement,
                embedUrl
              });
            }
          });
          if (multipartSubscriptionClient) {
            multipartSubscriptionClient.stopListeningCallback = () => {
              closeReadableStream();
              observableSubscription.unsubscribe();
            };
          }
        } else {
          const json = yield response.json();
          multipartSubscriptionClient === null || multipartSubscriptionClient === void 0 ? void 0 : multipartSubscriptionClient.emit("error");
          multipartSubscriptionClient === null || multipartSubscriptionClient === void 0 ? void 0 : multipartSubscriptionClient.emit("disconnected");
          sendPostMessageToEmbed({
            message: {
              name: isMultipartSubscription ? EXPLORER_SUBSCRIPTION_RESPONSE : EXPLORER_QUERY_MUTATION_RESPONSE,
              // Include the same operation ID in the response message's name
              // so the Explorer knows which operation it's associated with
              operationId,
              response: Object.assign(Object.assign({}, json), {
                status: response.status,
                headers: responseHeaders,
                hasNext: false
              })
            },
            embeddedIFrameElement,
            embedUrl
          });
        }
      })).catch((err) => {
        multipartSubscriptionClient === null || multipartSubscriptionClient === void 0 ? void 0 : multipartSubscriptionClient.emit("error", err);
        multipartSubscriptionClient === null || multipartSubscriptionClient === void 0 ? void 0 : multipartSubscriptionClient.emit("disconnected");
        const error = err && typeof err === "object" && "message" in err && typeof err.message === "string" ? Object.assign({
          message: err.message
        }, "stack" in err && typeof err.stack === "string" ? {
          stack: err.stack
        } : {}) : void 0;
        sendPostMessageToEmbed({
          message: {
            name: isMultipartSubscription ? EXPLORER_SUBSCRIPTION_RESPONSE : EXPLORER_QUERY_MUTATION_RESPONSE,
            // Include the same operation ID in the response message's name
            // so the Explorer knows which operation it's associated with
            operationId,
            response: Object.assign({
              data: null,
              error
            }, !isMultipartSubscription ? {
              hasNext: false
            } : {})
          },
          embeddedIFrameElement,
          embedUrl
        });
      });
    });
  }
  function executeIntrospectionRequest({
    endpointUrl,
    headers,
    includeCookies,
    introspectionRequestBody,
    embeddedIFrameElement,
    embedUrl,
    handleRequest,
    operationId
  }) {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        query,
        operationName
      } = JSON.parse(introspectionRequestBody);
      return handleRequest(endpointUrl, Object.assign({
        method: "POST",
        headers: getHeadersWithContentType(headers),
        body: JSON.stringify({
          query,
          operationName
        })
      }, !!includeCookies ? {
        credentials: "include"
      } : {
        credentials: "omit"
      })).then((response) => response.json()).then((response) => {
        if (response.errors && response.errors.length) {
          sendPostMessageToEmbed({
            message: {
              name: SCHEMA_ERROR,
              errors: response.errors,
              operationId
            },
            embeddedIFrameElement,
            embedUrl
          });
        }
        sendPostMessageToEmbed({
          message: {
            name: SCHEMA_RESPONSE,
            schema: response.data,
            operationId
          },
          embeddedIFrameElement,
          embedUrl
        });
      }).catch((error) => {
        sendPostMessageToEmbed({
          message: {
            name: SCHEMA_ERROR,
            error,
            operationId
          },
          embeddedIFrameElement,
          embedUrl
        });
      });
    });
  }
  var handleAuthenticationPostMessage = ({
    event,
    embeddedIFrameElement,
    embedUrl
  }) => {
    const {
      data
    } = event;
    if (data.name === PREFLIGHT_OAUTH_REQUEST) {
      const handleEmbedPostMessage = (event2) => {
        if (event2.data.name === PREFLIGHT_OAUTH_PROVIDER_RESPONSE) {
          window.removeEventListener("message", handleEmbedPostMessage);
          sendPostMessageToEmbed({
            message: {
              name: PREFLIGHT_OAUTH_RESPONSE,
              queryParams: event2.data.queryParams
            },
            embeddedIFrameElement,
            embedUrl
          });
        }
      };
      window.addEventListener("message", handleEmbedPostMessage);
      window.open(data.oauthUrl, void 0, "_blank");
    }
    if (data.name === SET_PARTIAL_AUTHENTICATION_TOKEN_FOR_PARENT) {
      const partialEmbedApiKeysString = window.localStorage.getItem("apolloStudioEmbeddedExplorerEncodedApiKey");
      const partialEmbedApiKeys = partialEmbedApiKeysString ? JSON.parse(partialEmbedApiKeysString) : {};
      partialEmbedApiKeys[data.localStorageKey] = data.partialToken;
      window.localStorage.setItem("apolloStudioEmbeddedExplorerEncodedApiKey", JSON.stringify(partialEmbedApiKeys));
    }
    if (data.name === TRIGGER_LOGOUT_IN_PARENT) {
      const partialEmbedApiKeysString = window.localStorage.getItem("apolloStudioEmbeddedExplorerEncodedApiKey");
      const partialEmbedApiKeys = partialEmbedApiKeysString ? JSON.parse(partialEmbedApiKeysString) : {};
      delete partialEmbedApiKeys[data.localStorageKey];
      window.localStorage.setItem("apolloStudioEmbeddedExplorerEncodedApiKey", JSON.stringify(partialEmbedApiKeys));
      sendPostMessageToEmbed({
        message: {
          name: PARENT_LOGOUT_SUCCESS
        },
        embeddedIFrameElement,
        embedUrl
      });
    }
    if (data.name === EXPLORER_LISTENING_FOR_PARTIAL_TOKEN && data.localStorageKey) {
      const partialEmbedApiKeysString = window.localStorage.getItem("apolloStudioEmbeddedExplorerEncodedApiKey");
      const partialEmbedApiKeys = partialEmbedApiKeysString ? JSON.parse(partialEmbedApiKeysString) : {};
      if (partialEmbedApiKeys && partialEmbedApiKeys[data.localStorageKey]) {
        sendPostMessageToEmbed({
          message: {
            name: PARTIAL_AUTHENTICATION_TOKEN_RESPONSE,
            partialToken: partialEmbedApiKeys[data.localStorageKey]
          },
          embeddedIFrameElement,
          embedUrl
        });
      }
    }
  };
  function assertUnreachable(x) {
    throw new Error(`Didn't expect to get here ${x}`);
  }
  var SubscriptionClient = class {
    constructor(url, headers, protocol) {
      this.unsubscribeFunctions = [];
      this.protocol = protocol;
      this.url = url;
      this.headers = headers;
    }
    get graphWsClient() {
      var _a, _b;
      const client = (_a = this._graphWsClient) !== null && _a !== void 0 ? _a : createClient({
        url: this.url,
        lazy: true,
        connectionParams: (_b = this.headers) !== null && _b !== void 0 ? _b : {},
        keepAlive: 1e4
      });
      this._graphWsClient = client;
      return client;
    }
    get transportSubscriptionClient() {
      var _a, _b;
      const client = (_a = this._transportSubscriptionClient) !== null && _a !== void 0 ? _a : new import_subscriptions_transport_ws.SubscriptionClient(this.url, {
        reconnect: true,
        lazy: true,
        connectionParams: (_b = this.headers) !== null && _b !== void 0 ? _b : {}
      });
      this._transportSubscriptionClient = client;
      return client;
    }
    get multipartClient() {
      var _a;
      const client = (_a = this._multipartClient) !== null && _a !== void 0 ? _a : Object.assign(new import_eventemitter3.default(), {
        stopListeningCallback: void 0
      });
      this._multipartClient = client;
      return client;
    }
    onConnected(callback) {
      if (this.protocol === "http-multipart") {
        this.multipartClient.on("connected", callback);
        return () => this.multipartClient.off("connected", callback);
      }
      if (this.protocol === "graphql-ws") {
        return this.graphWsClient.on("connected", callback);
      }
      if (this.protocol === "subscriptions-transport-ws") {
        return this.transportSubscriptionClient.onConnected(callback);
      }
      assertUnreachable(this.protocol);
    }
    onConnecting(callback) {
      if (this.protocol === "http-multipart") {
        return;
      }
      if (this.protocol === "graphql-ws") {
        return this.graphWsClient.on("connecting", callback);
      }
      if (this.protocol === "subscriptions-transport-ws") {
        return this.transportSubscriptionClient.onConnecting(callback);
      }
      assertUnreachable(this.protocol);
    }
    onError(callback) {
      if (this.protocol === "http-multipart") {
        this.multipartClient.on("error", callback);
        return () => this.multipartClient.off("error", callback);
      }
      if (this.protocol === "graphql-ws") {
        return this.graphWsClient.on("error", (error) => callback(error));
      }
      if (this.protocol === "subscriptions-transport-ws") {
        return this.transportSubscriptionClient.onError((e) => callback(e));
      }
      assertUnreachable(this.protocol);
    }
    onReconnecting(callback) {
      if (this.protocol === "http-multipart") {
        return;
      }
      if (this.protocol === "graphql-ws") {
        return;
      }
      if (this.protocol === "subscriptions-transport-ws") {
        return this.transportSubscriptionClient.onReconnecting(callback);
      }
      assertUnreachable(this.protocol);
    }
    onReconnected(callback) {
      if (this.protocol === "http-multipart") {
        return;
      }
      if (this.protocol === "graphql-ws") {
        return;
      }
      if (this.protocol === "subscriptions-transport-ws") {
        return this.transportSubscriptionClient.onReconnected(callback);
      }
      assertUnreachable(this.protocol);
    }
    onDisconnected(callback) {
      if (this.protocol === "http-multipart") {
        this.multipartClient.on("disconnected", callback);
        return () => this.multipartClient.off("disconnected", callback);
      }
      if (this.protocol === "graphql-ws") {
        return this.graphWsClient.on("closed", callback);
      }
      if (this.protocol === "subscriptions-transport-ws") {
        return this.transportSubscriptionClient.onDisconnected(callback);
      }
      assertUnreachable(this.protocol);
    }
    dispose() {
      var _a, _b;
      if (this.protocol === "http-multipart") {
        (_b = (_a = this.multipartClient).stopListeningCallback) === null || _b === void 0 ? void 0 : _b.call(_a);
        return;
      }
      if (this.protocol === "graphql-ws") {
        return this.graphWsClient.dispose();
      }
      if (this.protocol === "subscriptions-transport-ws") {
        return this.transportSubscriptionClient.close();
      }
      assertUnreachable(this.protocol);
    }
    request(params) {
      return {
        subscribe: (subscribeParams) => __awaiter(this, void 0, void 0, function* () {
          var _a, _b, _c, _d;
          if (this.protocol === "http-multipart" && params.httpMultipartParams) {
            yield executeOperation({
              operation: params.query,
              operationName: params.operationName,
              variables: params.variables,
              headers: (_a = this.headers) !== null && _a !== void 0 ? _a : {},
              includeCookies: (_c = (_b = params.httpMultipartParams) === null || _b === void 0 ? void 0 : _b.includeCookies) !== null && _c !== void 0 ? _c : false,
              endpointUrl: this.url,
              embeddedIFrameElement: params.embeddedIFrameElement,
              embedUrl: params.embedUrl,
              operationId: params.operationId,
              handleRequest: (_d = params.httpMultipartParams) === null || _d === void 0 ? void 0 : _d.handleRequest,
              isMultipartSubscription: true,
              multipartSubscriptionClient: this.multipartClient
            });
          }
          if (this.protocol === "graphql-ws") {
            this.unsubscribeFunctions.push(this.graphWsClient.subscribe(params, Object.assign(Object.assign({}, subscribeParams), {
              next: (data) => {
                var _a2;
                return (_a2 = subscribeParams.next) === null || _a2 === void 0 ? void 0 : _a2.call(subscribeParams, data);
              },
              error: (error) => {
                var _a2;
                return (_a2 = subscribeParams.error) === null || _a2 === void 0 ? void 0 : _a2.call(subscribeParams, error);
              },
              complete: () => {
              }
            })));
          }
          if (this.protocol === "subscriptions-transport-ws") {
            return this.transportSubscriptionClient.request(params).subscribe(subscribeParams);
          } else {
            return void 0;
          }
        })
      };
    }
    unsubscribeAll() {
      var _a, _b;
      if (this.protocol === "http-multipart") {
        (_b = (_a = this.multipartClient).stopListeningCallback) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      if (this.protocol === "graphql-ws") {
        this.unsubscribeFunctions.forEach((off) => {
          off();
        });
        this.unsubscribeFunctions = [];
      }
      if (this.protocol === "subscriptions-transport-ws") {
        return this.transportSubscriptionClient.unsubscribeAll();
      }
    }
  };
  function setParentSocketError({
    error,
    embeddedIFrameElement,
    embedUrl
  }) {
    sendPostMessageToEmbed({
      message: {
        name: EXPLORER_SET_SOCKET_ERROR,
        error
      },
      embeddedIFrameElement,
      embedUrl
    });
  }
  function setParentSocketStatus({
    status,
    embeddedIFrameElement,
    embedUrl
  }) {
    sendPostMessageToEmbed({
      message: {
        name: EXPLORER_SET_SOCKET_STATUS,
        status
      },
      embeddedIFrameElement,
      embedUrl
    });
  }
  function executeSubscription({
    operation,
    operationName,
    variables,
    headers,
    embeddedIFrameElement,
    operationId,
    embedUrl,
    subscriptionUrl,
    protocol,
    httpMultipartParams
  }) {
    const client = new SubscriptionClient(subscriptionUrl, headers !== null && headers !== void 0 ? headers : {}, protocol);
    const checkForSubscriptionTermination = (event) => {
      if (event.data.name === EXPLORER_SUBSCRIPTION_TERMINATION) {
        client.unsubscribeAll();
        window.removeEventListener("message", checkForSubscriptionTermination);
      }
    };
    window.addEventListener("message", checkForSubscriptionTermination);
    client.onError((e) => setParentSocketError({
      error: JSON.parse(JSON.stringify(e)),
      embeddedIFrameElement,
      embedUrl
    }));
    client.onConnected(() => {
      setParentSocketError({
        error: void 0,
        embeddedIFrameElement,
        embedUrl
      });
      setParentSocketStatus({
        status: "connected",
        embeddedIFrameElement,
        embedUrl
      });
    });
    client.onReconnected(() => {
      setParentSocketError({
        error: void 0,
        embeddedIFrameElement,
        embedUrl
      });
      setParentSocketStatus({
        status: "connected",
        embeddedIFrameElement,
        embedUrl
      });
    });
    client.onConnecting(() => setParentSocketStatus({
      status: "connecting",
      embeddedIFrameElement,
      embedUrl
    }));
    client.onReconnecting(() => setParentSocketStatus({
      status: "connecting",
      embeddedIFrameElement,
      embedUrl
    }));
    client.onDisconnected(() => setParentSocketStatus({
      status: "disconnected",
      embeddedIFrameElement,
      embedUrl
    }));
    client.request({
      query: operation,
      variables: variables !== null && variables !== void 0 ? variables : {},
      operationName,
      embeddedIFrameElement,
      embedUrl,
      httpMultipartParams,
      operationId
    }).subscribe(
      // we only use these callbacks for websockets, for http multipart subs
      // we do all responding in executeOperation, since this is where we set
      // up the Observable
      {
        next(data) {
          sendPostMessageToEmbed({
            message: {
              name: EXPLORER_SUBSCRIPTION_RESPONSE,
              // Include the same operation ID in the response message's name
              // so the Explorer knows which operation it's associated with
              operationId,
              // we use different versions of graphql in Explorer & here,
              // Explorer expects an Object, which is what this is in reality
              response: {
                data
              }
            },
            embeddedIFrameElement,
            embedUrl
          });
        },
        error: (error) => {
          sendPostMessageToEmbed({
            message: {
              name: EXPLORER_SUBSCRIPTION_RESPONSE,
              // Include the same operation ID in the response message's name
              // so the Explorer knows which operation it's associated with
              operationId,
              response: {
                error: JSON.parse(JSON.stringify(error))
              }
            },
            embeddedIFrameElement,
            embedUrl
          });
        }
      }
    );
    return {
      dispose: () => window.removeEventListener("message", checkForSubscriptionTermination)
    };
  }
  function setupSandboxEmbedRelay({
    handleRequest,
    embeddedSandboxIFrameElement,
    __testLocal__
  }) {
    const embedUrl = EMBEDDABLE_SANDBOX_URL(__testLocal__);
    const onPostMessageReceived = (event) => {
      handleAuthenticationPostMessage({
        event,
        embedUrl,
        embeddedIFrameElement: embeddedSandboxIFrameElement
      });
      const data = typeof event.data === "object" ? event.data : void 0;
      if (data && "name" in data) {
        if (data.name === EXPLORER_LISTENING_FOR_HANDSHAKE) {
          sendPostMessageToEmbed({
            message: {
              name: HANDSHAKE_RESPONSE,
              parentHref: window.location.href
            },
            embeddedIFrameElement: embeddedSandboxIFrameElement,
            embedUrl
          });
        }
        if (data.name === INTROSPECTION_QUERY_WITH_HEADERS) {
          const {
            introspectionRequestBody,
            introspectionRequestHeaders,
            includeCookies,
            sandboxEndpointUrl,
            operationId
          } = data;
          if (sandboxEndpointUrl) {
            executeIntrospectionRequest({
              endpointUrl: sandboxEndpointUrl,
              introspectionRequestBody,
              headers: introspectionRequestHeaders,
              includeCookies,
              embeddedIFrameElement: embeddedSandboxIFrameElement,
              embedUrl,
              handleRequest,
              operationId
            });
          }
        }
        const isQueryOrMutation = data.name === EXPLORER_QUERY_MUTATION_REQUEST;
        const isSubscription = data.name === EXPLORER_SUBSCRIPTION_REQUEST;
        if ((isQueryOrMutation || isSubscription) && data.operation && data.operationId) {
          const {
            operation,
            variables,
            operationName,
            operationId,
            headers
          } = data;
          if (isQueryOrMutation) {
            const {
              endpointUrl,
              includeCookies
            } = data;
            if (!endpointUrl) {
              throw new Error("Something went wrong, we should not have gotten here. The sandbox endpoint url was not sent.");
            }
            executeOperation({
              endpointUrl,
              handleRequest,
              headers,
              includeCookies,
              embeddedIFrameElement: embeddedSandboxIFrameElement,
              operationId,
              operation,
              variables,
              fileVariables: "fileVariables" in data ? data.fileVariables : void 0,
              operationName,
              embedUrl,
              isMultipartSubscription: false
            });
          } else if (isSubscription) {
            const {
              httpMultipartParams
            } = data;
            executeSubscription({
              operation,
              operationName,
              variables,
              headers,
              embeddedIFrameElement: embeddedSandboxIFrameElement,
              operationId,
              embedUrl,
              subscriptionUrl: data.subscriptionUrl,
              protocol: data.protocol,
              httpMultipartParams: Object.assign(Object.assign({}, httpMultipartParams), {
                handleRequest
              })
            });
          }
        }
      }
    };
    window.addEventListener("message", onPostMessageReceived);
    return {
      dispose: () => window.removeEventListener("message", onPostMessageReceived)
    };
  }
  var name = "@apollo/sandbox";
  var version = "2.6.0";
  var author = "packages@apollographql.com";
  var license = "MIT";
  var repository = {
    type: "git",
    url: "https://github.com/apollographql/embeddable-explorer/sandbox"
  };
  var homepage = "https://github.com/apollographql/embeddable-explorer/sandbox#readme";
  var main = "dist/index.cjs";
  var module = "dist/index.mjs";
  var typings = "dist/src/index.d.ts";
  var engines = {
    node: ">=12.0",
    npm: ">=7.0"
  };
  var volta = {
    node: "16.13.0",
    npm: "8.3.1"
  };
  var scripts = {
    build: "npm run build:cjs-esm",
    "build:cjs-esm": "rm -rf dist && rollup -c buildHelpers/rollup.cjs-esm.config.js && cp src/index.cjs dist/index.cjs && cp src/react/index.cjs dist/react/index.cjs && node ./buildHelpers/prepareDist.js sandbox",
    "build:umd": "rm -rf dist && rollup -c buildHelpers/rollup.umd.config.js",
    lint: "eslint --ext .js,.jsx,.ts,.tsx .",
    size: "size-limit",
    analyze: "size-limit --why",
    "typescript:check": "tsc --noEmit",
    "prettier:check": "prettier --check .",
    "prettier:fix": "prettier --write ."
  };
  var husky = {
    hooks: {
      "pre-commit": "npm run lint"
    }
  };
  var prettier = {
    printWidth: 80,
    semi: true,
    singleQuote: true,
    trailingComma: "es5",
    endOfLine: "auto"
  };
  var peerDependencies = {
    react: "^16.8.0 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0"
  };
  var peerDependenciesMeta = {
    react: {
      optional: true
    },
    "react-dom": {
      optional: true
    }
  };
  var dependencies = {
    "@types/whatwg-mimetype": "^3.0.0",
    eventemitter3: "3.1.0",
    "graphql-ws": "^5.9.0",
    "subscriptions-transport-ws": "^0.11.0",
    "whatwg-mimetype": "^3.0.0",
    "zen-observable-ts": "^1.1.0"
  };
  var packageJSON = {
    name,
    version,
    author,
    license,
    repository,
    homepage,
    main,
    module,
    typings,
    engines,
    volta,
    scripts,
    husky,
    prettier,
    "size-limit": [
      {
        path: "dist/index.production.min.js",
        limit: "10 KB"
      },
      {
        path: "dist/index.mjs",
        limit: "10 KB"
      }
    ],
    peerDependencies,
    peerDependenciesMeta,
    dependencies
  };
  var idCounter = 0;
  var EmbeddedSandbox = class {
    constructor(options) {
      var _a;
      this.options = options;
      this.__testLocal__ = !!this.options.__testLocal__;
      this.validateOptions();
      this.handleRequest = (_a = this.options.handleRequest) !== null && _a !== void 0 ? _a : defaultHandleRequest({
        legacyIncludeCookies: this.options.includeCookies
      });
      this.uniqueEmbedInstanceId = idCounter++;
      this.embeddedSandboxIFrameElement = this.injectEmbed();
      this.disposable = setupSandboxEmbedRelay({
        embeddedSandboxIFrameElement: this.embeddedSandboxIFrameElement,
        handleRequest: this.handleRequest,
        __testLocal__: !!this.__testLocal__
      });
    }
    dispose() {
      var _a;
      (_a = document.getElementById(IFRAME_DOM_ID(this.uniqueEmbedInstanceId))) === null || _a === void 0 ? void 0 : _a.remove();
      this.disposable.dispose();
    }
    injectEmbed() {
      var _a, _b, _c, _d, _e, _f;
      let element;
      const {
        target,
        runTelemetry
      } = this.options;
      const {
        includeCookies,
        sharedHeaders
      } = this.options.initialState || {};
      const queryParams = Object.assign(Object.assign(Object.assign({
        runtime: this.options.runtime,
        endpoint: this.options.initialEndpoint,
        subscriptionEndpoint: this.options.initialSubscriptionEndpoint,
        sendOperationHeadersInIntrospection: (_a = this.options.sendOperationHeadersInIntrospection) !== null && _a !== void 0 ? _a : true
      }, this.options.initialState && "collectionId" in this.options.initialState ? {
        defaultCollectionEntryId: this.options.initialState.operationId,
        defaultCollectionId: this.options.initialState.collectionId
      } : {}), this.options.initialState && "document" in this.options.initialState ? {
        defaultDocument: this.options.initialState.document ? encodeURIComponent(this.options.initialState.document) : void 0,
        defaultVariables: this.options.initialState.variables ? encodeURIComponent(JSON.stringify(this.options.initialState.variables, null, 2)) : void 0,
        defaultHeaders: this.options.initialState.headers ? encodeURIComponent(JSON.stringify(this.options.initialState.headers)) : void 0
      } : {}), {
        sharedHeaders: sharedHeaders ? encodeURIComponent(JSON.stringify(sharedHeaders)) : void 0,
        defaultIncludeCookies: includeCookies,
        hideCookieToggle: (_b = this.options.hideCookieToggle) !== null && _b !== void 0 ? _b : true,
        parentSupportsSubscriptions: true,
        version: packageJSON.version,
        runTelemetry: runTelemetry === void 0 ? true : runTelemetry,
        initialRequestQueryPlan: (_c = this.options.initialRequestQueryPlan) !== null && _c !== void 0 ? _c : false,
        shouldDefaultAutoupdateSchema: (_e = (_d = this.options.initialState) === null || _d === void 0 ? void 0 : _d.pollForSchemaUpdates) !== null && _e !== void 0 ? _e : true,
        endpointIsEditable: this.options.endpointIsEditable
      });
      const queryString = Object.entries(queryParams).filter(([_, value]) => value !== void 0).map(([key, value]) => `${key}=${value}`).join("&");
      if (typeof target === "string") {
        element = (_f = document === null || document === void 0 ? void 0 : document.querySelector) === null || _f === void 0 ? void 0 : _f.call(document, target);
      } else {
        element = target;
      }
      const iframeElement = document.createElement("iframe");
      iframeElement.src = `${EMBEDDABLE_SANDBOX_URL(this.__testLocal__)}?${queryString}`;
      iframeElement.id = IFRAME_DOM_ID(this.uniqueEmbedInstanceId);
      if (this.options.allowDynamicStyles !== false) {
        iframeElement.setAttribute("style", "height: 100%; width: 100%; border: none;");
      }
      element === null || element === void 0 ? void 0 : element.appendChild(iframeElement);
      fetch(`${window.location.origin}/favicon.ico`).then((response) => {
        if (response.status === 404) {
          var existingLink = document.querySelector('link[rel*="icon"]');
          if (!existingLink) {
            var darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            ["icon", "apple-touch-icon"].forEach((id) => {
              var link = document.createElement("link");
              link.rel = id;
              link.href = `https://embeddable-explorer.cdn.apollographql.com/_latest/public/assets/favicon${darkMode ? "-dark" : ""}.png`;
              document.head.appendChild(link);
            });
          }
        }
      }).catch(() => {
      });
      return iframeElement;
    }
    validateOptions() {
      var _a;
      if (!this.options.target) {
        throw new Error('"target" is required');
      }
      if (this.options.includeCookies !== void 0) {
        console.warn("Passing `includeCookies` is deprecated. If you would like to set a default includeCookies value, please use `initialState.includeCookies` instead.");
      }
      if (this.options.includeCookies !== void 0 && (this.options.hideCookieToggle !== void 0 || ((_a = this.options.initialState) === null || _a === void 0 ? void 0 : _a.includeCookies) !== void 0)) {
        throw new Error("Passing `includeCookies` is deprecated and will override your sandbox connection settings configuration.");
      }
    }
  };

  // node_modules/@apollo/sandbox/index.mjs
  var import_whatwg_mimetype2 = __toESM(require_mime_type(), 1);
  var import_eventemitter32 = __toESM(require_eventemitter3(), 1);
  var import_subscriptions_transport_ws2 = __toESM(require_client(), 1);

  // apollo/load.js
  function run() {
    new EmbeddedSandbox({
      target: "#embedded-sandbox",
      initialEndpoint: "http://localhost:3000"
    });
  }
  run();
})();
/*! Bundled license information:

@apollo/sandbox/EmbeddedSandbox-9c13854a.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/

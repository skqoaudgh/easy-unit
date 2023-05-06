var _WEIGHT;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SYSTEM = {
  TIME: 'time',
  WEIGHT: 'weight',
  DISTANCE: 'distance',
  TEMPERATURE: 'temperature',
  AREA: 'area'
};
var WEIGHT = (_WEIGHT = {}, _defineProperty(_WEIGHT, SYSTEM.TIME, {
  ms: 0.001,
  s: 1,
  m: 60,
  h: 3600
}), _defineProperty(_WEIGHT, SYSTEM.WEIGHT, {
  mg: 0.001,
  g: 1,
  kg: 1000,
  t: 1000000
}), _defineProperty(_WEIGHT, SYSTEM.DISTANCE, {
  mm: 0.1,
  cm: 1,
  m: 100,
  km: 100000
}), _defineProperty(_WEIGHT, SYSTEM.AREA, {
  'm^2': 1,
  a: 100,
  ha: 10000
}), _WEIGHT);
var FORMULA = _defineProperty({}, SYSTEM.TEMPERATURE, {
  C: function C(F) {
    return (Number(F) - 32) / 1.8;
  },
  F: function F(C) {
    return Number(C) * 1.8 + 32;
  }
});
var getSystem = function getSystem(from, to) {
  if (typeof from !== 'string' || typeof to !== 'string') {
    throw new Error('parameter expected a string');
  }
  for (var _i = 0, _Object$entries = Object.entries(WEIGHT); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    var units = Object.keys(value);
    if (units.includes(from) && units.includes(to)) {
      return key;
    }
  }
  for (var _i2 = 0, _Object$entries2 = Object.entries(FORMULA); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
      _key = _Object$entries2$_i[0],
      _value = _Object$entries2$_i[1];
    var _units = Object.keys(_value);
    if (_units.includes(from) && _units.includes(to)) {
      return _key;
    }
  }
  return null;
};
var getUnit = function getUnit(value) {
  if (typeof value !== 'string') {
    throw new Error('parameter expected a string');
  }
  var unit = value.replace(/(-|[0-9]|\.|\,)+([\S]+)?/, '$2').trim();
  if (!unit || /[^\^]\d/.test(unit)) {
    return null;
  }
  return unit;
};
var canCalculateWithWeight = function canCalculateWithWeight(system) {
  var weightSystmes = Object.keys(WEIGHT);
  return weightSystmes.includes(system);
};
var convertUnitByWeight = function convertUnitByWeight(_ref) {
  var system = _ref.system,
    base = _ref.base,
    from = _ref.from,
    to = _ref.to;
  var curWeight = WEIGHT[system][from];
  var targetWeight = WEIGHT[system][to];
  var result = base * (curWeight / targetWeight);
  return result;
};
var converUnitByFormula = function converUnitByFormula(_ref2) {
  var system = _ref2.system,
    base = _ref2.base,
    from = _ref2.from,
    to = _ref2.to;
  var formula = from !== to ? FORMULA[system][to] : function (base) {
    return base;
  };
  return formula(base);
};
var convert = function convert(_ref3) {
  var system = _ref3.system,
    base = _ref3.base,
    from = _ref3.from,
    to = _ref3.to;
  if (canCalculateWithWeight(system)) {
    return convertUnitByWeight({
      system: system,
      base: base,
      from: from,
      to: to
    });
  }
  return converUnitByFormula({
    system: system,
    base: base,
    from: from,
    to: to
  });
};
var _base = /*#__PURE__*/new WeakMap();
var _unit = /*#__PURE__*/new WeakMap();
var Converter = /*#__PURE__*/function () {
  function Converter() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    _classCallCheck(this, Converter);
    _classPrivateFieldInitSpec(this, _base, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _unit, {
      writable: true,
      value: null
    });
    _classPrivateFieldSet(this, _unit, getUnit(value) || unit);
    _classPrivateFieldSet(this, _base, parseFloat(String(value)));
  }
  _createClass(Converter, [{
    key: "to",
    value: function to(unit) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref4$digit = _ref4.digit,
        digit = _ref4$digit === void 0 ? null : _ref4$digit,
        _ref4$printUnit = _ref4.printUnit,
        printUnit = _ref4$printUnit === void 0 ? true : _ref4$printUnit;
      if (typeof unit !== 'string') {
        throw new Error('parameter unit expected a string');
      }
      if (digit && typeof digit !== 'number') {
        throw new Error('parameter digit expected a number');
      }
      if (digit === 0 || digit > 100) {
        throw new Error('parameter digit expected greater than 0 and less than 100');
      }
      if (typeof printUnit !== 'boolean') {
        throw new Error('parameter printUnit expected a boolean');
      }
      var system = getSystem(_classPrivateFieldGet(this, _unit), unit);
      if (!system) {
        console.log(_classPrivateFieldGet(this, _unit), unit);
        throw new Error('parameter expected a same system with base unit');
      }
      var value = convert({
        system: system,
        base: _classPrivateFieldGet(this, _base),
        from: _classPrivateFieldGet(this, _unit),
        to: unit
      });
      var result = !digit ? value : Number(value).toFixed(digit);
      return !printUnit ? Number(result) : "".concat(result).concat(unit);
    }
  }, {
    key: "add",
    value: function add(value) {
      if (typeof value !== 'string') {
        throw new Error('parameter printUnit expected a string');
      }
      var unit = getUnit(value) || _classPrivateFieldGet(this, _unit);
      var system = getSystem(_classPrivateFieldGet(this, _unit), unit);
      if (!system) {
        throw new Error('parameter expected a same system with base unit');
      }
      var toValue = convert({
        system: system,
        base: parseFloat(value),
        from: unit,
        to: _classPrivateFieldGet(this, _unit)
      });
      var result = _classPrivateFieldGet(this, _base) + parseFloat(toValue);
      _classPrivateFieldSet(this, _base, result);
      return "".concat(result).concat(_classPrivateFieldGet(this, _unit));
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(_classPrivateFieldGet(this, _base)).concat(_classPrivateFieldGet(this, _unit));
    }
  }]);
  return Converter;
}();
export { Converter as default };

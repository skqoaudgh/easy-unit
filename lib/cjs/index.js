'use strict';

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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SYSTEM = {
  TIME: 'time'
};
var WEIGHT = _defineProperty({}, SYSTEM.TIME, {
  s: 1,
  m: 60,
  h: 3600
});
var getSystem = function getSystem(unit) {
  if (typeof unit !== 'string') {
    throw new Error('parameter expected a string');
  }
  switch (unit) {
    case 'h':
    case 'm':
    case 's':
      return SYSTEM.TIME;
    default:
      return null;
  }
};
var getUnit = function getUnit(value) {
  if (typeof value !== 'string') {
    throw new Error('parameter expected a string');
  }
  var unit = value.replace(/([0-9]|\.|\,)+([\S]+)?/, '$2').trim();
  if (!unit || /\d/.test(unit)) {
    return null;
  }
  return unit;
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
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$digit = _ref.digit,
        digit = _ref$digit === void 0 ? null : _ref$digit,
        _ref$printUnit = _ref.printUnit,
        printUnit = _ref$printUnit === void 0 ? false : _ref$printUnit;
      if (typeof unit !== 'string') {
        throw new Error('parameter unit expected a string');
      }
      if (digit && typeof digit !== 'number') {
        throw new Error('parameter digit expected a number');
      }
      if (digit === 0) {
        throw new Error('parameter digit expected greater than 0');
      }
      if (typeof printUnit !== 'boolean') {
        throw new Error('parameter printUnit expected a boolean');
      }
      var curSystem = getSystem(_classPrivateFieldGet(this, _unit));
      var targetSystem = getSystem(unit);
      if (curSystem !== targetSystem) {
        console.log(curSystem, targetSystem);
        throw new Error('parameter expected a same system with baes unit');
      }
      var curWeight = WEIGHT[curSystem][_classPrivateFieldGet(this, _unit)];
      var targetWeight = WEIGHT[curSystem][unit];
      var value = _classPrivateFieldGet(this, _base) * (curWeight / targetWeight);
      var result = !digit ? value : Number(value).toFixed(digit);
      return !printUnit ? Number(result) : "".concat(result).concat(unit);
    }
  }]);
  return Converter;
}();
module.exports = Converter;

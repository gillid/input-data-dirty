'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputDataDirty = function () {
    function InputDataDirty() {
        _classCallCheck(this, InputDataDirty);
    }

    _createClass(InputDataDirty, null, [{
        key: 'init',
        value: function init() {
            var elements = InputDataDirty.collect();
            elements.each(function () {
                InputDataDirty.bind((0, _jquery2.default)(this));
                InputDataDirty.setIsDirty((0, _jquery2.default)(this));
            });
        }
    }, {
        key: 'collect',
        value: function collect() {
            return (0, _jquery2.default)('input[data-dirty]').add('select[data-dirty]').add('textarea[data-dirty]');
        }
    }, {
        key: 'bind',
        value: function bind(element) {
            var events = ['input', 'paste', 'cut', 'drop', 'change', 'focusout'];

            events = events.map(function (event) {
                return event + '.data-dirty';
            });

            element.off(events.join(' ')).on(events.join(' '), function () {
                InputDataDirty.setIsDirty((0, _jquery2.default)(this));
            });
        }
    }, {
        key: 'setIsDirty',
        value: function setIsDirty(element) {
            setTimeout(function () {
                var isDirty = element.val().length > 0;
                console.log(isDirty);

                element.attr('data-dirty', isDirty);
            }, 10);
        }
    }]);

    return InputDataDirty;
}();

exports.default = InputDataDirty;
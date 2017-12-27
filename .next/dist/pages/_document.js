'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/apple/Documents/project/custom-server-koa-app/pages/_document.js?entry';


var MyDocument = function (_Document) {
    (0, _inherits3.default)(MyDocument, _Document);

    function MyDocument() {
        (0, _classCallCheck3.default)(this, MyDocument);

        return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
    }

    (0, _createClass3.default)(MyDocument, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('html', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement(_document.Head, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, 'My page'), this.props.styleTags), _react2.default.createElement('body', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'My Page', _react2.default.createElement(_document.Main, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement(_document.NextScript, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            })));
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var renderPage = _ref.renderPage;

            var sheet = new _styledComponents.ServerStyleSheet();
            var page = renderPage(function (App) {
                return function (props) {
                    return sheet.collectStyles(_react2.default.createElement(App, (0, _extends3.default)({}, props, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    })));
                };
            });
            var styleTags = sheet.getStyleElement();
            return (0, _extends3.default)({}, page, { styleTags: styleTags });
        }
    }]);

    return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIlNlcnZlclN0eWxlU2hlZXQiLCJNeURvY3VtZW50IiwicHJvcHMiLCJzdHlsZVRhZ3MiLCJyZW5kZXJQYWdlIiwic2hlZXQiLCJwYWdlIiwiY29sbGVjdFN0eWxlcyIsImdldFN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBUzs7Ozs7OztJQUVZLEE7Ozs7Ozs7Ozs7O2lDQVFQLEFBQ047bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0MsaUJBQUEsQUFBSyxNQUhWLEFBQ0EsQUFFZ0IsQUFFaEIsNEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRUEsMkJBQUEsQUFBQzs7OEJBQUQ7Z0NBRkEsQUFFQSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDOzs4QkFBRDtnQ0FUSixBQUNJLEFBS0EsQUFHQSxBQUlQO0FBSk87QUFBQTs7Ozs4Q0FqQmdDO2dCQUFkLEFBQWMsa0JBQWQsQUFBYyxBQUNwQzs7Z0JBQU0sUUFBTixBQUFjLEFBQUksQUFDbEI7Z0JBQU0sa0JBQWtCLGVBQUE7dUJBQU8saUJBQUE7aUNBQVMsQUFBTSw0Q0FBYyxBQUFDLGdDQUFELEFBQVM7O3NDQUFUO3dDQUE3QixBQUFTLEFBQW9CO0FBQUE7QUFBQSxzQkFBQSxDQUFwQjtBQUFoQjtBQUF4QixBQUFhLEFBQ2IsYUFEYTtnQkFDUCxZQUFZLE1BQWxCLEFBQWtCLEFBQU0sQUFDeEI7OENBQUEsQUFBWSxRQUFNLFdBQWxCLEFBQ0g7Ozs7O0FBTm1DLEE7O2tCQUFuQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXBwbGUvRG9jdW1lbnRzL3Byb2plY3QvY3VzdG9tLXNlcnZlci1rb2EtYXBwIn0=
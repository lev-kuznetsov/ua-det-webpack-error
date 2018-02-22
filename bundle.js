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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ua_device_detector__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ua_device_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ua_device_detector__);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;/* global window */
/* global angular */
/* global module */

(function (module, require, window, angular) {
    "use strict";

    var BROWSERS = {
        CHROME: "chrome",
        FIREFOX: "firefox",
        SAFARI: "safari",
        OPERA: "opera",
        IE: "ie",
        MS_EDGE: "ms-edge",
        FB_MESSENGER: "fb-messenger",
        CORDOVA: "cordova",
        UNKNOWN: "unknown"
    };

    var DEVICES = {
        ANDROID: "android",
        I_PAD: "ipad",
        IPHONE: "iphone",
        I_POD: "ipod",
        BLACKBERRY: "blackberry",
        FIREFOX_OS: "firefox-os",
        CHROME_BOOK: "chrome-book",
        WINDOWS_PHONE: "windows-phone",
        PS4: "ps4",
        VITA: "vita",
        CHROMECAST: "chromecast",
        APPLE_TV: "apple-tv",
        GOOGLE_TV: "google-tv",
        UNKNOWN: "unknown"
    };

    var OS = {
        WINDOWS: "windows",
        MAC: "mac",
        IOS: "ios",
        ANDROID: "android",
        LINUX: "linux",
        UNIX: "unix",
        FIREFOX_OS: "firefox-os",
        CHROME_OS: "chrome-os",
        WINDOWS_PHONE: "windows-phone",
        UNKNOWN: "unknown"
    };

    var OS_VERSIONS = {
        WINDOWS_3_11: "windows-3-11",
        WINDOWS_95: "windows-95",
        WINDOWS_ME: "windows-me",
        WINDOWS_98: "windows-98",
        WINDOWS_CE: "windows-ce",
        WINDOWS_2000: "windows-2000",
        WINDOWS_XP: "windows-xp",
        WINDOWS_SERVER_2003: "windows-server-2003",
        WINDOWS_VISTA: "windows-vista",
        WINDOWS_7: "windows-7",
        WINDOWS_8_1: "windows-8-1",
        WINDOWS_8: "windows-8",
        WINDOWS_10: "windows-10",
        WINDOWS_PHONE_7_5: "windows-phone-7-5",
        WINDOWS_PHONE_8_1: "windows-phone-8-1",
        WINDOWS_PHONE_10: "windows-phone-10",
        WINDOWS_NT_4_0: "windows-nt-4-0",
        MACOSX_15: "mac-os-x-15",
        MACOSX_14: "mac-os-x-14",
        MACOSX_13: "mac-os-x-13",
        MACOSX_12: "mac-os-x-12",
        MACOSX_11: "mac-os-x-11",
        MACOSX_10: "mac-os-x-10",
        MACOSX_9: "mac-os-x-9",
        MACOSX_8: "mac-os-x-8",
        MACOSX_7: "mac-os-x-7",
        MACOSX_6: "mac-os-x-6",
        MACOSX_5: "mac-os-x-5",
        MACOSX_4: "mac-os-x-4",
        MACOSX_3: "mac-os-x-3",
        MACOSX_2: "mac-os-x-2",
        MACOSX: "mac-os-x",
        UNKNOWN: "unknown"
    };

    var OS_RE = {
        WINDOWS: { and: [{ or: [/\bWindows|(Win\d\d)\b/, /\bWin 9x\b/] }, { not: /\bWindows Phone\b/ }] },
        MAC: { and: [/\bMac OS\b/, { not: /Windows Phone/ }] },
        IOS: { and: [{ or: [/\biPad\b/, /\biPhone\b/, /\biPod\b/] }, { not: /Windows Phone/ }] },
        ANDROID: { and: [/\bAndroid\b/, { not: /Windows Phone/ }] },
        LINUX: /\bLinux\b/,
        UNIX: /\bUNIX\b/,
        FIREFOX_OS: { and: [/\bFirefox\b/, /Mobile\b/] },
        CHROME_OS: /\bCrOS\b/,
        WINDOWS_PHONE: { or: [/\bIEMobile\b/, /\bWindows Phone\b/] },
        PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
        VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
    };

    var BROWSERS_RE = {
        CHROME: { and: [{ or: [/\bChrome\b/, /\bCriOS\b/,/\bHeadlessChrome\b/] }, { not: { or: [/\bOPR\b/, /\bEdge\b/, /\bCordova\b/] } }] },
        FIREFOX: { and: [{ or: [/\bFirefox\b/, /\bFxiOS\b/] }, { not: /\bCordova\b/ }] },
        SAFARI: { and: [/^((?!CriOS).)*\Safari\b.*$/, { not: { or: [/\bOPR\b/, /\bEdge\b/, /Windows Phone/, /\bCordova\b/, /\bChrome\b/] } }] },
        OPERA: { or: [/Opera\b/, /\bOPR\b/] },
        IE: { or: [/\bMSIE\b/, /\bTrident\b/, /^Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\)$/] },
        MS_EDGE: { or: [/\bEdge\b/] },
        PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
        VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/,
        CORDOVA: /\bCordova\b/,
        FB_MESSENGER: /\bFBAN\/MessengerForiOS\b/
    };

    var DEVICES_RE = {
        ANDROID: { and: [/\bAndroid\b/, { not: /Windows Phone/ }] },
        I_PAD: /\biPad\b/,
        IPHONE: { and: [/\biPhone\b/, { not: /Windows Phone/ }] },
        I_POD: /\biPod\b/,
        BLACKBERRY: /\bblackberry\b/,
        FIREFOX_OS: { and: [/\bFirefox\b/, /\bMobile\b/] },
        CHROME_BOOK: /\bCrOS\b/,
        WINDOWS_PHONE: { or: [/\bIEMobile\b/, /\bWindows Phone\b/] },
        PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
        CHROMECAST: /\bCrKey\b/,
        APPLE_TV: /^iTunes-AppleTV\/4.1$/,
        GOOGLE_TV: /\bGoogleTV\b/,
        VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
    };

    var OS_VERSIONS_RE = {
        WINDOWS_3_11: /Win16/,
        WINDOWS_95: /(Windows 95|Win95|Windows_95)/,
        WINDOWS_ME: /(Win 9x 4.90|Windows ME)/,
        WINDOWS_98: /(Windows 98|Win98)/,
        WINDOWS_CE: /Windows CE/,
        WINDOWS_2000: /(Windows NT 5.0|Windows 2000)/,
        WINDOWS_XP: /(Windows NT 5.1|Windows XP)/,
        WINDOWS_SERVER_2003: /Windows NT 5.2/,
        WINDOWS_VISTA: /Windows NT 6.0/,
        WINDOWS_7: /(Windows 7|Windows NT 6.1)/,
        WINDOWS_8_1: /(Windows 8.1|Windows NT 6.3)/,
        WINDOWS_8: /(Windows 8|Windows NT 6.2)/,
        WINDOWS_10: /(Windows NT 10.0)/,
        WINDOWS_PHONE_7_5: /(Windows Phone OS 7.5)/,
        WINDOWS_PHONE_8_1: /(Windows Phone 8.1)/,
        WINDOWS_PHONE_10: /(Windows Phone 10)/,
        WINDOWS_NT_4_0: { and: [/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/, { not: /Windows NT 10.0/ }] },
        MACOSX: /(MAC OS X\s*[^ 0-9])/,
        MACOSX_3: /(Darwin 10.3|Mac OS X 10.3)/,
        MACOSX_4: /(Darwin 10.4|Mac OS X 10.4)/,
        MACOSX_5: /(Mac OS X 10.5)/,
        MACOSX_6: /(Mac OS X 10.6)/,
        MACOSX_7: /(Mac OS X 10.7)/,
        MACOSX_8: /(Mac OS X 10.8)/,
        MACOSX_9: /(Mac OS X 10.9)/,
        MACOSX_10: /(Mac OS X 10.10)/,
        MACOSX_11: /(Mac OS X 10.11)/,
        MACOSX_12: /(Mac OS X 10.12)/,
        MACOSX_13: /(Mac OS X 10.13)/,
        MACOSX_14: /(Mac OS X 10.14)/,
        MACOSX_15: /(Mac OS X 10.15)/
    };

    var BROWSER_VERSIONS_RE_MAP = {
        CHROME: [/\bChrome\/([\d\.]+)\b/, /\bCriOS\/([\d\.]+)\b/,/\bHeadlessChrome Safari\/([\d\.]+)\b/],
        FIREFOX: [/\bFirefox\/([\d\.]+)\b/, /\bFxiOS\/([\d\.]+)\b/],
        SAFARI: /\bVersion\/([\d\.]+)\b/,
        OPERA: [/\bVersion\/([\d\.]+)\b/, /\bOPR\/([\d\.]+)\b/],
        IE: [/\bMSIE ([\d\.]+\w?)\b/, /\brv:([\d\.]+\w?)\b/],
        CORDOVA: /\bCordova\/([\d\.]+)\b/,
        MS_EDGE: /\bEdge\/([\d\.]+)\b/
    };

    var BROWSER_VERSIONS_RE = Object.keys(BROWSER_VERSIONS_RE_MAP).reduce(function (obj, key) {
        obj[BROWSERS[key]] = BROWSER_VERSIONS_RE_MAP[key];
        return obj;
    }, {});

    /* ES5 polyfills Start*/

    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    if (!Object.keys) {
        Object.keys = (function () {
            'use strict';
            var hasOwnProperty = Object.prototype.hasOwnProperty,
                hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ],
                dontEnumsLength = dontEnums.length;

            return function (obj) {
                if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                    throw new TypeError('Object.keys called on non-object');
                }

                var result = [], prop, i;

                for (prop in obj) {
                    if (hasOwnProperty.call(obj, prop)) {
                        result.push(prop);
                    }
                }

                if (hasDontEnumBug) {
                    for (i = 0; i < dontEnumsLength; i++) {
                        if (hasOwnProperty.call(obj, dontEnums[i])) {
                            result.push(dontEnums[i]);
                        }
                    }
                }
                return result;
            };
        }());
    }

    // Production steps of ECMA-262, Edition 5, 15.4.4.21
    // Reference: http://es5.github.io/#x15.4.4.21
    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function (callback /*, initialValue*/) {
            'use strict';
            if (this == null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            var t = Object(this), len = t.length >>> 0, k = 0, value;
            if (arguments.length == 2) {
                value = arguments[1];
            } else {
                while (k < len && !(k in t)) {
                    k++;
                }
                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }
                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        };
    }
    /* ES5 polyfills End*/

    function parseUserAgent(options) {
        var reTree = !!options ? options.reTree : {};
        var customDetectors = !!options ? options.customDetectors : [];
        var ua = !!options ? options.userAgent : "";

        var deviceInfo = {
            raw: {
                userAgent: ua,
                os: {},
                browser: {},
                device: {}
            }
        };

        deviceInfo.raw.os = Object.keys(OS).reduce(function (obj, item) {
            obj[OS[item]] = reTree.test(ua, OS_RE[item]);
            return obj;
        }, {});

        deviceInfo.raw.browser = Object.keys(BROWSERS).reduce(function (obj, item) {
            obj[BROWSERS[item]] = reTree.test(ua, BROWSERS_RE[item]);
            return obj;
        }, {});

        deviceInfo.raw.device = Object.keys(DEVICES).reduce(function (obj, item) {
            obj[DEVICES[item]] = reTree.test(ua, DEVICES_RE[item]);
            return obj;
        }, {});

        deviceInfo.raw.os_version = Object.keys(OS_VERSIONS).reduce(function (obj, item) {
            obj[OS_VERSIONS[item]] = reTree.test(ua, OS_VERSIONS_RE[item]);
            return obj;
        }, {});

        deviceInfo.os = [
            OS.WINDOWS,
            OS.IOS,
            OS.MAC,
            OS.ANDROID,
            OS.LINUX,
            OS.UNIX,
            OS.FIREFOX_OS,
            OS.CHROME_OS,
            OS.WINDOWS_PHONE
        ].reduce(function (previousValue, currentValue) {
            return (previousValue === OS.UNKNOWN && deviceInfo.raw.os[currentValue]) ? currentValue : previousValue;
        }, OS.UNKNOWN);

        deviceInfo.browser = [
            BROWSERS.CHROME,
            BROWSERS.FIREFOX,
            BROWSERS.SAFARI,
            BROWSERS.OPERA,
            BROWSERS.IE,
            BROWSERS.MS_EDGE,
            BROWSERS.CORDOVA,
            BROWSERS.FB_MESSENGER
        ].reduce(function (previousValue, currentValue) {
            return (previousValue === BROWSERS.UNKNOWN && deviceInfo.raw.browser[currentValue]) ? currentValue : previousValue;
        }, BROWSERS.UNKNOWN);

        deviceInfo.device = [
            DEVICES.ANDROID,
            DEVICES.I_PAD,
            DEVICES.IPHONE,
            DEVICES.I_POD,
            DEVICES.BLACKBERRY,
            DEVICES.FIREFOX_OS,
            DEVICES.CHROME_BOOK,
            DEVICES.WINDOWS_PHONE,
            DEVICES.PS4,
            DEVICES.CHROMECAST,
            DEVICES.APPLE_TV,
            DEVICES.GOOGLE_TV,
            DEVICES.VITA
        ].reduce(function (previousValue, currentValue) {
            return (previousValue === DEVICES.UNKNOWN && deviceInfo.raw.device[currentValue]) ? currentValue : previousValue;
        }, DEVICES.UNKNOWN);

        deviceInfo.os_version = [
            OS_VERSIONS.WINDOWS_3_11,
            OS_VERSIONS.WINDOWS_95,
            OS_VERSIONS.WINDOWS_ME,
            OS_VERSIONS.WINDOWS_98,
            OS_VERSIONS.WINDOWS_CE,
            OS_VERSIONS.WINDOWS_2000,
            OS_VERSIONS.WINDOWS_XP,
            OS_VERSIONS.WINDOWS_SERVER_2003,
            OS_VERSIONS.WINDOWS_VISTA,
            OS_VERSIONS.WINDOWS_7,
            OS_VERSIONS.WINDOWS_8_1,
            OS_VERSIONS.WINDOWS_8,
            OS_VERSIONS.WINDOWS_10,
            OS_VERSIONS.WINDOWS_PHONE_7_5,
            OS_VERSIONS.WINDOWS_PHONE_8_1,
            OS_VERSIONS.WINDOWS_PHONE_10,
            OS_VERSIONS.WINDOWS_NT_4_0,
            OS_VERSIONS.MACOSX,
            OS_VERSIONS.MACOSX_3,
            OS_VERSIONS.MACOSX_4,
            OS_VERSIONS.MACOSX_5,
            OS_VERSIONS.MACOSX_6,
            OS_VERSIONS.MACOSX_7,
            OS_VERSIONS.MACOSX_8,
            OS_VERSIONS.MACOSX_9,
            OS_VERSIONS.MACOSX_10,
            OS_VERSIONS.MACOSX_11,
            OS_VERSIONS.MACOSX_12,
            OS_VERSIONS.MACOSX_13,
            OS_VERSIONS.MACOSX_14,
            OS_VERSIONS.MACOSX_15
        ].reduce(function (previousValue, currentValue) {
            return (previousValue === OS_VERSIONS.UNKNOWN && deviceInfo.raw.os_version[currentValue]) ? currentValue : previousValue;
        }, OS_VERSIONS.UNKNOWN);

        deviceInfo.browser_version = "0";
        if (deviceInfo.browser !== BROWSERS.UNKNOWN) {
            var re = BROWSER_VERSIONS_RE[deviceInfo.browser];
            var res = reTree.exec(ua, re);
            if (!!res) {
                deviceInfo.browser_version = res[1];
            }
        }

        deviceInfo.isMobile = function () {
            return [
                DEVICES.ANDROID,
                DEVICES.I_PAD,
                DEVICES.IPHONE,
                DEVICES.I_POD,
                DEVICES.BLACKBERRY,
                DEVICES.FIREFOX_OS,
                DEVICES.WINDOWS_PHONE,
                DEVICES.VITA
            ].some(function (item) {
                return deviceInfo.device == item;
            });
        };

        deviceInfo.isTablet = function () {
            return [
                DEVICES.I_PAD,
                DEVICES.FIREFOX_OS
            ].some(function (item) {
                return deviceInfo.device == item;
            });
        };

        deviceInfo.isDesktop = function () {
            return [
                DEVICES.PS4,
                DEVICES.CHROME_BOOK,
                DEVICES.UNKNOWN
            ].some(function (item) {
                return deviceInfo.device == item;
            });
        };

        deviceInfo.custom = customDetectors.reduce(function (custom, customDetector) {
            custom[customDetector.name] = reTree.test(ua, customDetector.re);
            return custom;
        }, {});
        
        return deviceInfo;
    }

    if (!!angular) {
        angular.module("uaDeviceDetector", ["reTree"])
            .constant("OS_RE", OS_RE)
            .constant("BROWSERS_RE", BROWSERS_RE)
            .constant("DEVICES_RE", DEVICES_RE)
            .constant("OS_VERSIONS_RE", OS_VERSIONS_RE)
            .constant("BROWSER_VERSIONS_RE_MAP", BROWSER_VERSIONS_RE_MAP)
            .constant("BROWSER_VERSIONS_RE", BROWSER_VERSIONS_RE)
            .constant("BROWSERS", BROWSERS)
            .constant("DEVICES", DEVICES)
            .constant("OS", OS)
            .constant("OS_VERSIONS", OS_VERSIONS)
            .factory("uaDeviceDetector", ["reTree", function (reTree) {
                return {
                    parseUserAgent: function (ua, customDetectors) {
                        return parseUserAgent({ reTree: reTree || {}, customDetectors: customDetectors || [], userAgent: ua || "" });
                    },
                    BROWSERS: BROWSERS,
                    DEVICES: DEVICES,
                    OS: OS
                };
            }]);
    }

    if (!!window) {
        window.uaDeviceDetector = {
            parseUserAgent: function (ua, customDetectors) {
                return parseUserAgent({ reTree: window.reTree || {}, customDetectors: customDetectors || [], userAgent: ua || "" });
            },
            BROWSERS: BROWSERS,
            DEVICES: DEVICES,
            OS: OS
        };
    }

    if (!!module && !!!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {
        var reTree = __webpack_require__(5);
        module.exports = {
            parseUserAgent: function (ua, customDetectors) {
                return parseUserAgent({ reTree: reTree || {}, customDetectors: customDetectors || [], userAgent: ua || "" });
            },
            BROWSERS: BROWSERS,
            DEVICES: DEVICES,
            OS: OS
        };
    }
})( false ? null : module, typeof require === 'undefined' ? null : require, typeof window === 'undefined' ? null : window, typeof angular === 'undefined' ? null : angular);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 4;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* global window */
/* global angular */
/* global module */

(function (module, window, angular) {
    "use strict";

    function test(string, regex) {
        if (typeof regex === 'string' || regex instanceof String) {
            regex=new RegExp(regex);
        }

        if (regex instanceof RegExp) {
            return regex.test(string);
        }
        else if (regex && Array.isArray(regex.and)) {
            return regex.and.every(function (item) {
                return test(string, item);
            });
        }
        else if (regex && Array.isArray(regex.or)) {
            return regex.or.some(function (item) {
                return test(string, item);
            });
        }
        else if (regex && regex.not) {
            return !test(string, regex.not);
        }
        else {
            return false;
        }
    }

    function exec(string, regex) {
        if (typeof regex === 'string' || regex instanceof String) {
            regex=new RegExp(regex);
        }

        if (regex instanceof RegExp) {
            return regex.exec(string);
        }
        else if (regex && Array.isArray(regex)) {
            return regex.reduce(function (res, item) {
                return (!!res) ? res : exec(string, item);
            }, null);
        }
        else {
            return null;
        }
    }

    if (!!angular) {
        angular.module("reTree", []).factory("reTree", [function () {
            return {
                test: test,
                exec: exec
            };
        }]);
    }

    if (!!window) {
        window.reTree = {
            test: test,
            exec: exec
        };
    }

    if (!!module) {
        module.exports = {
            test: test,
            exec: exec
        };
    }
})( false ? null : module, typeof window === 'undefined' ? null : window, typeof angular === 'undefined' ? null : angular);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGY1Y2EwYjdjMGYyNDBkN2QyZjEiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWEtZGV2aWNlLWRldGVjdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91YS1kZXZpY2UtZGV0ZWN0b3IvdWEtZGV2aWNlLWRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91YS1kZXZpY2UtZGV0ZWN0b3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VhLWRldmljZS1kZXRlY3Rvci9ub2RlX21vZHVsZXMvcmUtdHJlZS9yZS10cmVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOzs7Ozs7OzhDQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsUUFBUSw4Q0FBOEMsR0FBRywyQkFBMkIsR0FBRztBQUN6RyxjQUFjLHNCQUFzQix1QkFBdUIsR0FBRztBQUM5RCxjQUFjLFFBQVEsNkNBQTZDLEdBQUcsdUJBQXVCLEdBQUc7QUFDaEcsa0JBQWtCLHVCQUF1Qix1QkFBdUIsR0FBRztBQUNuRTtBQUNBO0FBQ0EscUJBQXFCLG1DQUFtQztBQUN4RDtBQUNBLHdCQUF3Qiw0Q0FBNEM7QUFDcEU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVEsdURBQXVELEdBQUcsT0FBTyw2Q0FBNkMsRUFBRSxHQUFHO0FBQzVJLGtCQUFrQixRQUFRLG1DQUFtQyxHQUFHLHFCQUFxQixHQUFHO0FBQ3hGLGlCQUFpQixzQ0FBc0MsT0FBTyw0RUFBNEUsRUFBRSxHQUFHO0FBQy9JLGdCQUFnQiw2QkFBNkI7QUFDN0MsYUFBYSxvRUFBb0UsT0FBTyxXQUFXO0FBQ25HLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix1QkFBdUIsdUJBQXVCLEdBQUc7QUFDbkU7QUFDQSxpQkFBaUIsc0JBQXNCLHVCQUF1QixHQUFHO0FBQ2pFO0FBQ0E7QUFDQSxxQkFBcUIscUNBQXFDO0FBQzFEO0FBQ0Esd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzREFBc0QseUJBQXlCLEdBQUc7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQkFBaUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJOztBQUViO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUJBQXFCLCtEQUErRDtBQUNuSSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDRCQUE0QiwrREFBK0Q7QUFDbEksYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscUJBQXFCLCtEQUErRDtBQUMzSCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDbGREO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSwyQjs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhmNWNhMGI3YzBmMjQwZDdkMmYxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIuL3VhLWRldmljZS1kZXRlY3Rvci5qc1wiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3VhLWRldmljZS1kZXRlY3Rvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWwgd2luZG93ICovXG4vKiBnbG9iYWwgYW5ndWxhciAqL1xuLyogZ2xvYmFsIG1vZHVsZSAqL1xuXG4oZnVuY3Rpb24gKG1vZHVsZSwgcmVxdWlyZSwgd2luZG93LCBhbmd1bGFyKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgQlJPV1NFUlMgPSB7XG4gICAgICAgIENIUk9NRTogXCJjaHJvbWVcIixcbiAgICAgICAgRklSRUZPWDogXCJmaXJlZm94XCIsXG4gICAgICAgIFNBRkFSSTogXCJzYWZhcmlcIixcbiAgICAgICAgT1BFUkE6IFwib3BlcmFcIixcbiAgICAgICAgSUU6IFwiaWVcIixcbiAgICAgICAgTVNfRURHRTogXCJtcy1lZGdlXCIsXG4gICAgICAgIEZCX01FU1NFTkdFUjogXCJmYi1tZXNzZW5nZXJcIixcbiAgICAgICAgQ09SRE9WQTogXCJjb3Jkb3ZhXCIsXG4gICAgICAgIFVOS05PV046IFwidW5rbm93blwiXG4gICAgfTtcblxuICAgIHZhciBERVZJQ0VTID0ge1xuICAgICAgICBBTkRST0lEOiBcImFuZHJvaWRcIixcbiAgICAgICAgSV9QQUQ6IFwiaXBhZFwiLFxuICAgICAgICBJUEhPTkU6IFwiaXBob25lXCIsXG4gICAgICAgIElfUE9EOiBcImlwb2RcIixcbiAgICAgICAgQkxBQ0tCRVJSWTogXCJibGFja2JlcnJ5XCIsXG4gICAgICAgIEZJUkVGT1hfT1M6IFwiZmlyZWZveC1vc1wiLFxuICAgICAgICBDSFJPTUVfQk9PSzogXCJjaHJvbWUtYm9va1wiLFxuICAgICAgICBXSU5ET1dTX1BIT05FOiBcIndpbmRvd3MtcGhvbmVcIixcbiAgICAgICAgUFM0OiBcInBzNFwiLFxuICAgICAgICBWSVRBOiBcInZpdGFcIixcbiAgICAgICAgQ0hST01FQ0FTVDogXCJjaHJvbWVjYXN0XCIsXG4gICAgICAgIEFQUExFX1RWOiBcImFwcGxlLXR2XCIsXG4gICAgICAgIEdPT0dMRV9UVjogXCJnb29nbGUtdHZcIixcbiAgICAgICAgVU5LTk9XTjogXCJ1bmtub3duXCJcbiAgICB9O1xuXG4gICAgdmFyIE9TID0ge1xuICAgICAgICBXSU5ET1dTOiBcIndpbmRvd3NcIixcbiAgICAgICAgTUFDOiBcIm1hY1wiLFxuICAgICAgICBJT1M6IFwiaW9zXCIsXG4gICAgICAgIEFORFJPSUQ6IFwiYW5kcm9pZFwiLFxuICAgICAgICBMSU5VWDogXCJsaW51eFwiLFxuICAgICAgICBVTklYOiBcInVuaXhcIixcbiAgICAgICAgRklSRUZPWF9PUzogXCJmaXJlZm94LW9zXCIsXG4gICAgICAgIENIUk9NRV9PUzogXCJjaHJvbWUtb3NcIixcbiAgICAgICAgV0lORE9XU19QSE9ORTogXCJ3aW5kb3dzLXBob25lXCIsXG4gICAgICAgIFVOS05PV046IFwidW5rbm93blwiXG4gICAgfTtcblxuICAgIHZhciBPU19WRVJTSU9OUyA9IHtcbiAgICAgICAgV0lORE9XU18zXzExOiBcIndpbmRvd3MtMy0xMVwiLFxuICAgICAgICBXSU5ET1dTXzk1OiBcIndpbmRvd3MtOTVcIixcbiAgICAgICAgV0lORE9XU19NRTogXCJ3aW5kb3dzLW1lXCIsXG4gICAgICAgIFdJTkRPV1NfOTg6IFwid2luZG93cy05OFwiLFxuICAgICAgICBXSU5ET1dTX0NFOiBcIndpbmRvd3MtY2VcIixcbiAgICAgICAgV0lORE9XU18yMDAwOiBcIndpbmRvd3MtMjAwMFwiLFxuICAgICAgICBXSU5ET1dTX1hQOiBcIndpbmRvd3MteHBcIixcbiAgICAgICAgV0lORE9XU19TRVJWRVJfMjAwMzogXCJ3aW5kb3dzLXNlcnZlci0yMDAzXCIsXG4gICAgICAgIFdJTkRPV1NfVklTVEE6IFwid2luZG93cy12aXN0YVwiLFxuICAgICAgICBXSU5ET1dTXzc6IFwid2luZG93cy03XCIsXG4gICAgICAgIFdJTkRPV1NfOF8xOiBcIndpbmRvd3MtOC0xXCIsXG4gICAgICAgIFdJTkRPV1NfODogXCJ3aW5kb3dzLThcIixcbiAgICAgICAgV0lORE9XU18xMDogXCJ3aW5kb3dzLTEwXCIsXG4gICAgICAgIFdJTkRPV1NfUEhPTkVfN181OiBcIndpbmRvd3MtcGhvbmUtNy01XCIsXG4gICAgICAgIFdJTkRPV1NfUEhPTkVfOF8xOiBcIndpbmRvd3MtcGhvbmUtOC0xXCIsXG4gICAgICAgIFdJTkRPV1NfUEhPTkVfMTA6IFwid2luZG93cy1waG9uZS0xMFwiLFxuICAgICAgICBXSU5ET1dTX05UXzRfMDogXCJ3aW5kb3dzLW50LTQtMFwiLFxuICAgICAgICBNQUNPU1hfMTU6IFwibWFjLW9zLXgtMTVcIixcbiAgICAgICAgTUFDT1NYXzE0OiBcIm1hYy1vcy14LTE0XCIsXG4gICAgICAgIE1BQ09TWF8xMzogXCJtYWMtb3MteC0xM1wiLFxuICAgICAgICBNQUNPU1hfMTI6IFwibWFjLW9zLXgtMTJcIixcbiAgICAgICAgTUFDT1NYXzExOiBcIm1hYy1vcy14LTExXCIsXG4gICAgICAgIE1BQ09TWF8xMDogXCJtYWMtb3MteC0xMFwiLFxuICAgICAgICBNQUNPU1hfOTogXCJtYWMtb3MteC05XCIsXG4gICAgICAgIE1BQ09TWF84OiBcIm1hYy1vcy14LThcIixcbiAgICAgICAgTUFDT1NYXzc6IFwibWFjLW9zLXgtN1wiLFxuICAgICAgICBNQUNPU1hfNjogXCJtYWMtb3MteC02XCIsXG4gICAgICAgIE1BQ09TWF81OiBcIm1hYy1vcy14LTVcIixcbiAgICAgICAgTUFDT1NYXzQ6IFwibWFjLW9zLXgtNFwiLFxuICAgICAgICBNQUNPU1hfMzogXCJtYWMtb3MteC0zXCIsXG4gICAgICAgIE1BQ09TWF8yOiBcIm1hYy1vcy14LTJcIixcbiAgICAgICAgTUFDT1NYOiBcIm1hYy1vcy14XCIsXG4gICAgICAgIFVOS05PV046IFwidW5rbm93blwiXG4gICAgfTtcblxuICAgIHZhciBPU19SRSA9IHtcbiAgICAgICAgV0lORE9XUzogeyBhbmQ6IFt7IG9yOiBbL1xcYldpbmRvd3N8KFdpblxcZFxcZClcXGIvLCAvXFxiV2luIDl4XFxiL10gfSwgeyBub3Q6IC9cXGJXaW5kb3dzIFBob25lXFxiLyB9XSB9LFxuICAgICAgICBNQUM6IHsgYW5kOiBbL1xcYk1hYyBPU1xcYi8sIHsgbm90OiAvV2luZG93cyBQaG9uZS8gfV0gfSxcbiAgICAgICAgSU9TOiB7IGFuZDogW3sgb3I6IFsvXFxiaVBhZFxcYi8sIC9cXGJpUGhvbmVcXGIvLCAvXFxiaVBvZFxcYi9dIH0sIHsgbm90OiAvV2luZG93cyBQaG9uZS8gfV0gfSxcbiAgICAgICAgQU5EUk9JRDogeyBhbmQ6IFsvXFxiQW5kcm9pZFxcYi8sIHsgbm90OiAvV2luZG93cyBQaG9uZS8gfV0gfSxcbiAgICAgICAgTElOVVg6IC9cXGJMaW51eFxcYi8sXG4gICAgICAgIFVOSVg6IC9cXGJVTklYXFxiLyxcbiAgICAgICAgRklSRUZPWF9PUzogeyBhbmQ6IFsvXFxiRmlyZWZveFxcYi8sIC9Nb2JpbGVcXGIvXSB9LFxuICAgICAgICBDSFJPTUVfT1M6IC9cXGJDck9TXFxiLyxcbiAgICAgICAgV0lORE9XU19QSE9ORTogeyBvcjogWy9cXGJJRU1vYmlsZVxcYi8sIC9cXGJXaW5kb3dzIFBob25lXFxiL10gfSxcbiAgICAgICAgUFM0OiAvXFxiTW96aWxsYVxcLzUuMCBcXChQbGF5U3RhdGlvbiA0XFxiLyxcbiAgICAgICAgVklUQTogL1xcYk1vemlsbGFcXC81LjAgXFwoUGxheShTfHMpdGF0aW9uIFZpdGFcXGIvXG4gICAgfTtcblxuICAgIHZhciBCUk9XU0VSU19SRSA9IHtcbiAgICAgICAgQ0hST01FOiB7IGFuZDogW3sgb3I6IFsvXFxiQ2hyb21lXFxiLywgL1xcYkNyaU9TXFxiLywvXFxiSGVhZGxlc3NDaHJvbWVcXGIvXSB9LCB7IG5vdDogeyBvcjogWy9cXGJPUFJcXGIvLCAvXFxiRWRnZVxcYi8sIC9cXGJDb3Jkb3ZhXFxiL10gfSB9XSB9LFxuICAgICAgICBGSVJFRk9YOiB7IGFuZDogW3sgb3I6IFsvXFxiRmlyZWZveFxcYi8sIC9cXGJGeGlPU1xcYi9dIH0sIHsgbm90OiAvXFxiQ29yZG92YVxcYi8gfV0gfSxcbiAgICAgICAgU0FGQVJJOiB7IGFuZDogWy9eKCg/IUNyaU9TKS4pKlxcU2FmYXJpXFxiLiokLywgeyBub3Q6IHsgb3I6IFsvXFxiT1BSXFxiLywgL1xcYkVkZ2VcXGIvLCAvV2luZG93cyBQaG9uZS8sIC9cXGJDb3Jkb3ZhXFxiLywgL1xcYkNocm9tZVxcYi9dIH0gfV0gfSxcbiAgICAgICAgT1BFUkE6IHsgb3I6IFsvT3BlcmFcXGIvLCAvXFxiT1BSXFxiL10gfSxcbiAgICAgICAgSUU6IHsgb3I6IFsvXFxiTVNJRVxcYi8sIC9cXGJUcmlkZW50XFxiLywgL15Nb3ppbGxhXFwvNVxcLjAgXFwoV2luZG93cyBOVCAxMFxcLjA7IFdpbjY0OyB4NjRcXCkkL10gfSxcbiAgICAgICAgTVNfRURHRTogeyBvcjogWy9cXGJFZGdlXFxiL10gfSxcbiAgICAgICAgUFM0OiAvXFxiTW96aWxsYVxcLzUuMCBcXChQbGF5U3RhdGlvbiA0XFxiLyxcbiAgICAgICAgVklUQTogL1xcYk1vemlsbGFcXC81LjAgXFwoUGxheShTfHMpdGF0aW9uIFZpdGFcXGIvLFxuICAgICAgICBDT1JET1ZBOiAvXFxiQ29yZG92YVxcYi8sXG4gICAgICAgIEZCX01FU1NFTkdFUjogL1xcYkZCQU5cXC9NZXNzZW5nZXJGb3JpT1NcXGIvXG4gICAgfTtcblxuICAgIHZhciBERVZJQ0VTX1JFID0ge1xuICAgICAgICBBTkRST0lEOiB7IGFuZDogWy9cXGJBbmRyb2lkXFxiLywgeyBub3Q6IC9XaW5kb3dzIFBob25lLyB9XSB9LFxuICAgICAgICBJX1BBRDogL1xcYmlQYWRcXGIvLFxuICAgICAgICBJUEhPTkU6IHsgYW5kOiBbL1xcYmlQaG9uZVxcYi8sIHsgbm90OiAvV2luZG93cyBQaG9uZS8gfV0gfSxcbiAgICAgICAgSV9QT0Q6IC9cXGJpUG9kXFxiLyxcbiAgICAgICAgQkxBQ0tCRVJSWTogL1xcYmJsYWNrYmVycnlcXGIvLFxuICAgICAgICBGSVJFRk9YX09TOiB7IGFuZDogWy9cXGJGaXJlZm94XFxiLywgL1xcYk1vYmlsZVxcYi9dIH0sXG4gICAgICAgIENIUk9NRV9CT09LOiAvXFxiQ3JPU1xcYi8sXG4gICAgICAgIFdJTkRPV1NfUEhPTkU6IHsgb3I6IFsvXFxiSUVNb2JpbGVcXGIvLCAvXFxiV2luZG93cyBQaG9uZVxcYi9dIH0sXG4gICAgICAgIFBTNDogL1xcYk1vemlsbGFcXC81LjAgXFwoUGxheVN0YXRpb24gNFxcYi8sXG4gICAgICAgIENIUk9NRUNBU1Q6IC9cXGJDcktleVxcYi8sXG4gICAgICAgIEFQUExFX1RWOiAvXmlUdW5lcy1BcHBsZVRWXFwvNC4xJC8sXG4gICAgICAgIEdPT0dMRV9UVjogL1xcYkdvb2dsZVRWXFxiLyxcbiAgICAgICAgVklUQTogL1xcYk1vemlsbGFcXC81LjAgXFwoUGxheShTfHMpdGF0aW9uIFZpdGFcXGIvXG4gICAgfTtcblxuICAgIHZhciBPU19WRVJTSU9OU19SRSA9IHtcbiAgICAgICAgV0lORE9XU18zXzExOiAvV2luMTYvLFxuICAgICAgICBXSU5ET1dTXzk1OiAvKFdpbmRvd3MgOTV8V2luOTV8V2luZG93c185NSkvLFxuICAgICAgICBXSU5ET1dTX01FOiAvKFdpbiA5eCA0LjkwfFdpbmRvd3MgTUUpLyxcbiAgICAgICAgV0lORE9XU185ODogLyhXaW5kb3dzIDk4fFdpbjk4KS8sXG4gICAgICAgIFdJTkRPV1NfQ0U6IC9XaW5kb3dzIENFLyxcbiAgICAgICAgV0lORE9XU18yMDAwOiAvKFdpbmRvd3MgTlQgNS4wfFdpbmRvd3MgMjAwMCkvLFxuICAgICAgICBXSU5ET1dTX1hQOiAvKFdpbmRvd3MgTlQgNS4xfFdpbmRvd3MgWFApLyxcbiAgICAgICAgV0lORE9XU19TRVJWRVJfMjAwMzogL1dpbmRvd3MgTlQgNS4yLyxcbiAgICAgICAgV0lORE9XU19WSVNUQTogL1dpbmRvd3MgTlQgNi4wLyxcbiAgICAgICAgV0lORE9XU183OiAvKFdpbmRvd3MgN3xXaW5kb3dzIE5UIDYuMSkvLFxuICAgICAgICBXSU5ET1dTXzhfMTogLyhXaW5kb3dzIDguMXxXaW5kb3dzIE5UIDYuMykvLFxuICAgICAgICBXSU5ET1dTXzg6IC8oV2luZG93cyA4fFdpbmRvd3MgTlQgNi4yKS8sXG4gICAgICAgIFdJTkRPV1NfMTA6IC8oV2luZG93cyBOVCAxMC4wKS8sXG4gICAgICAgIFdJTkRPV1NfUEhPTkVfN181OiAvKFdpbmRvd3MgUGhvbmUgT1MgNy41KS8sXG4gICAgICAgIFdJTkRPV1NfUEhPTkVfOF8xOiAvKFdpbmRvd3MgUGhvbmUgOC4xKS8sXG4gICAgICAgIFdJTkRPV1NfUEhPTkVfMTA6IC8oV2luZG93cyBQaG9uZSAxMCkvLFxuICAgICAgICBXSU5ET1dTX05UXzRfMDogeyBhbmQ6IFsvKFdpbmRvd3MgTlQgNC4wfFdpbk5UNC4wfFdpbk5UfFdpbmRvd3MgTlQpLywgeyBub3Q6IC9XaW5kb3dzIE5UIDEwLjAvIH1dIH0sXG4gICAgICAgIE1BQ09TWDogLyhNQUMgT1MgWFxccypbXiAwLTldKS8sXG4gICAgICAgIE1BQ09TWF8zOiAvKERhcndpbiAxMC4zfE1hYyBPUyBYIDEwLjMpLyxcbiAgICAgICAgTUFDT1NYXzQ6IC8oRGFyd2luIDEwLjR8TWFjIE9TIFggMTAuNCkvLFxuICAgICAgICBNQUNPU1hfNTogLyhNYWMgT1MgWCAxMC41KS8sXG4gICAgICAgIE1BQ09TWF82OiAvKE1hYyBPUyBYIDEwLjYpLyxcbiAgICAgICAgTUFDT1NYXzc6IC8oTWFjIE9TIFggMTAuNykvLFxuICAgICAgICBNQUNPU1hfODogLyhNYWMgT1MgWCAxMC44KS8sXG4gICAgICAgIE1BQ09TWF85OiAvKE1hYyBPUyBYIDEwLjkpLyxcbiAgICAgICAgTUFDT1NYXzEwOiAvKE1hYyBPUyBYIDEwLjEwKS8sXG4gICAgICAgIE1BQ09TWF8xMTogLyhNYWMgT1MgWCAxMC4xMSkvLFxuICAgICAgICBNQUNPU1hfMTI6IC8oTWFjIE9TIFggMTAuMTIpLyxcbiAgICAgICAgTUFDT1NYXzEzOiAvKE1hYyBPUyBYIDEwLjEzKS8sXG4gICAgICAgIE1BQ09TWF8xNDogLyhNYWMgT1MgWCAxMC4xNCkvLFxuICAgICAgICBNQUNPU1hfMTU6IC8oTWFjIE9TIFggMTAuMTUpL1xuICAgIH07XG5cbiAgICB2YXIgQlJPV1NFUl9WRVJTSU9OU19SRV9NQVAgPSB7XG4gICAgICAgIENIUk9NRTogWy9cXGJDaHJvbWVcXC8oW1xcZFxcLl0rKVxcYi8sIC9cXGJDcmlPU1xcLyhbXFxkXFwuXSspXFxiLywvXFxiSGVhZGxlc3NDaHJvbWUgU2FmYXJpXFwvKFtcXGRcXC5dKylcXGIvXSxcbiAgICAgICAgRklSRUZPWDogWy9cXGJGaXJlZm94XFwvKFtcXGRcXC5dKylcXGIvLCAvXFxiRnhpT1NcXC8oW1xcZFxcLl0rKVxcYi9dLFxuICAgICAgICBTQUZBUkk6IC9cXGJWZXJzaW9uXFwvKFtcXGRcXC5dKylcXGIvLFxuICAgICAgICBPUEVSQTogWy9cXGJWZXJzaW9uXFwvKFtcXGRcXC5dKylcXGIvLCAvXFxiT1BSXFwvKFtcXGRcXC5dKylcXGIvXSxcbiAgICAgICAgSUU6IFsvXFxiTVNJRSAoW1xcZFxcLl0rXFx3PylcXGIvLCAvXFxicnY6KFtcXGRcXC5dK1xcdz8pXFxiL10sXG4gICAgICAgIENPUkRPVkE6IC9cXGJDb3Jkb3ZhXFwvKFtcXGRcXC5dKylcXGIvLFxuICAgICAgICBNU19FREdFOiAvXFxiRWRnZVxcLyhbXFxkXFwuXSspXFxiL1xuICAgIH07XG5cbiAgICB2YXIgQlJPV1NFUl9WRVJTSU9OU19SRSA9IE9iamVjdC5rZXlzKEJST1dTRVJfVkVSU0lPTlNfUkVfTUFQKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgIG9ialtCUk9XU0VSU1trZXldXSA9IEJST1dTRVJfVkVSU0lPTlNfUkVfTUFQW2tleV07XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSwge30pO1xuXG4gICAgLyogRVM1IHBvbHlmaWxscyBTdGFydCovXG5cbiAgICAvLyBGcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9rZXlzXG4gICAgaWYgKCFPYmplY3Qua2V5cykge1xuICAgICAgICBPYmplY3Qua2V5cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgICAgICAgICAgICAgIGhhc0RvbnRFbnVtQnVnID0gISh7IHRvU3RyaW5nOiBudWxsIH0pLnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpLFxuICAgICAgICAgICAgICAgIGRvbnRFbnVtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ3RvU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlT2YnLFxuICAgICAgICAgICAgICAgICAgICAnaGFzT3duUHJvcGVydHknLFxuICAgICAgICAgICAgICAgICAgICAnaXNQcm90b3R5cGVPZicsXG4gICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICAgICAgICAgICAgICAgICAgICdjb25zdHJ1Y3RvcidcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGRvbnRFbnVtc0xlbmd0aCA9IGRvbnRFbnVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmICh0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nIHx8IG9iaiA9PT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIG5vbi1vYmplY3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gW10sIHByb3AsIGk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0RvbnRFbnVtQnVnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkb250RW51bXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBkb250RW51bXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9udEVudW1zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpKTtcbiAgICB9XG5cbiAgICAvLyBQcm9kdWN0aW9uIHN0ZXBzIG9mIEVDTUEtMjYyLCBFZGl0aW9uIDUsIDE1LjQuNC4yMVxuICAgIC8vIFJlZmVyZW5jZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS40LjQuMjFcbiAgICBpZiAoIUFycmF5LnByb3RvdHlwZS5yZWR1Y2UpIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uIChjYWxsYmFjayAvKiwgaW5pdGlhbFZhbHVlKi8pIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5wcm90b3R5cGUucmVkdWNlIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKSwgbGVuID0gdC5sZW5ndGggPj4+IDAsIGsgPSAwLCB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGsgPCBsZW4gJiYgIShrIGluIHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGsgPj0gbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0W2srK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGsgaW4gdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCB0W2tdLCBrLCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qIEVTNSBwb2x5ZmlsbHMgRW5kKi9cblxuICAgIGZ1bmN0aW9uIHBhcnNlVXNlckFnZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlVHJlZSA9ICEhb3B0aW9ucyA/IG9wdGlvbnMucmVUcmVlIDoge307XG4gICAgICAgIHZhciBjdXN0b21EZXRlY3RvcnMgPSAhIW9wdGlvbnMgPyBvcHRpb25zLmN1c3RvbURldGVjdG9ycyA6IFtdO1xuICAgICAgICB2YXIgdWEgPSAhIW9wdGlvbnMgPyBvcHRpb25zLnVzZXJBZ2VudCA6IFwiXCI7XG5cbiAgICAgICAgdmFyIGRldmljZUluZm8gPSB7XG4gICAgICAgICAgICByYXc6IHtcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IHVhLFxuICAgICAgICAgICAgICAgIG9zOiB7fSxcbiAgICAgICAgICAgICAgICBicm93c2VyOiB7fSxcbiAgICAgICAgICAgICAgICBkZXZpY2U6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZGV2aWNlSW5mby5yYXcub3MgPSBPYmplY3Qua2V5cyhPUykucmVkdWNlKGZ1bmN0aW9uIChvYmosIGl0ZW0pIHtcbiAgICAgICAgICAgIG9ialtPU1tpdGVtXV0gPSByZVRyZWUudGVzdCh1YSwgT1NfUkVbaXRlbV0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGRldmljZUluZm8ucmF3LmJyb3dzZXIgPSBPYmplY3Qua2V5cyhCUk9XU0VSUykucmVkdWNlKGZ1bmN0aW9uIChvYmosIGl0ZW0pIHtcbiAgICAgICAgICAgIG9ialtCUk9XU0VSU1tpdGVtXV0gPSByZVRyZWUudGVzdCh1YSwgQlJPV1NFUlNfUkVbaXRlbV0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGRldmljZUluZm8ucmF3LmRldmljZSA9IE9iamVjdC5rZXlzKERFVklDRVMpLnJlZHVjZShmdW5jdGlvbiAob2JqLCBpdGVtKSB7XG4gICAgICAgICAgICBvYmpbREVWSUNFU1tpdGVtXV0gPSByZVRyZWUudGVzdCh1YSwgREVWSUNFU19SRVtpdGVtXSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgZGV2aWNlSW5mby5yYXcub3NfdmVyc2lvbiA9IE9iamVjdC5rZXlzKE9TX1ZFUlNJT05TKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgaXRlbSkge1xuICAgICAgICAgICAgb2JqW09TX1ZFUlNJT05TW2l0ZW1dXSA9IHJlVHJlZS50ZXN0KHVhLCBPU19WRVJTSU9OU19SRVtpdGVtXSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgZGV2aWNlSW5mby5vcyA9IFtcbiAgICAgICAgICAgIE9TLldJTkRPV1MsXG4gICAgICAgICAgICBPUy5JT1MsXG4gICAgICAgICAgICBPUy5NQUMsXG4gICAgICAgICAgICBPUy5BTkRST0lELFxuICAgICAgICAgICAgT1MuTElOVVgsXG4gICAgICAgICAgICBPUy5VTklYLFxuICAgICAgICAgICAgT1MuRklSRUZPWF9PUyxcbiAgICAgICAgICAgIE9TLkNIUk9NRV9PUyxcbiAgICAgICAgICAgIE9TLldJTkRPV1NfUEhPTkVcbiAgICAgICAgXS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIChwcmV2aW91c1ZhbHVlID09PSBPUy5VTktOT1dOICYmIGRldmljZUluZm8ucmF3Lm9zW2N1cnJlbnRWYWx1ZV0pID8gY3VycmVudFZhbHVlIDogcHJldmlvdXNWYWx1ZTtcbiAgICAgICAgfSwgT1MuVU5LTk9XTik7XG5cbiAgICAgICAgZGV2aWNlSW5mby5icm93c2VyID0gW1xuICAgICAgICAgICAgQlJPV1NFUlMuQ0hST01FLFxuICAgICAgICAgICAgQlJPV1NFUlMuRklSRUZPWCxcbiAgICAgICAgICAgIEJST1dTRVJTLlNBRkFSSSxcbiAgICAgICAgICAgIEJST1dTRVJTLk9QRVJBLFxuICAgICAgICAgICAgQlJPV1NFUlMuSUUsXG4gICAgICAgICAgICBCUk9XU0VSUy5NU19FREdFLFxuICAgICAgICAgICAgQlJPV1NFUlMuQ09SRE9WQSxcbiAgICAgICAgICAgIEJST1dTRVJTLkZCX01FU1NFTkdFUlxuICAgICAgICBdLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHByZXZpb3VzVmFsdWUgPT09IEJST1dTRVJTLlVOS05PV04gJiYgZGV2aWNlSW5mby5yYXcuYnJvd3NlcltjdXJyZW50VmFsdWVdKSA/IGN1cnJlbnRWYWx1ZSA6IHByZXZpb3VzVmFsdWU7XG4gICAgICAgIH0sIEJST1dTRVJTLlVOS05PV04pO1xuXG4gICAgICAgIGRldmljZUluZm8uZGV2aWNlID0gW1xuICAgICAgICAgICAgREVWSUNFUy5BTkRST0lELFxuICAgICAgICAgICAgREVWSUNFUy5JX1BBRCxcbiAgICAgICAgICAgIERFVklDRVMuSVBIT05FLFxuICAgICAgICAgICAgREVWSUNFUy5JX1BPRCxcbiAgICAgICAgICAgIERFVklDRVMuQkxBQ0tCRVJSWSxcbiAgICAgICAgICAgIERFVklDRVMuRklSRUZPWF9PUyxcbiAgICAgICAgICAgIERFVklDRVMuQ0hST01FX0JPT0ssXG4gICAgICAgICAgICBERVZJQ0VTLldJTkRPV1NfUEhPTkUsXG4gICAgICAgICAgICBERVZJQ0VTLlBTNCxcbiAgICAgICAgICAgIERFVklDRVMuQ0hST01FQ0FTVCxcbiAgICAgICAgICAgIERFVklDRVMuQVBQTEVfVFYsXG4gICAgICAgICAgICBERVZJQ0VTLkdPT0dMRV9UVixcbiAgICAgICAgICAgIERFVklDRVMuVklUQVxuICAgICAgICBdLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHByZXZpb3VzVmFsdWUgPT09IERFVklDRVMuVU5LTk9XTiAmJiBkZXZpY2VJbmZvLnJhdy5kZXZpY2VbY3VycmVudFZhbHVlXSkgPyBjdXJyZW50VmFsdWUgOiBwcmV2aW91c1ZhbHVlO1xuICAgICAgICB9LCBERVZJQ0VTLlVOS05PV04pO1xuXG4gICAgICAgIGRldmljZUluZm8ub3NfdmVyc2lvbiA9IFtcbiAgICAgICAgICAgIE9TX1ZFUlNJT05TLldJTkRPV1NfM18xMSxcbiAgICAgICAgICAgIE9TX1ZFUlNJT05TLldJTkRPV1NfOTUsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5XSU5ET1dTX01FLFxuICAgICAgICAgICAgT1NfVkVSU0lPTlMuV0lORE9XU185OCxcbiAgICAgICAgICAgIE9TX1ZFUlNJT05TLldJTkRPV1NfQ0UsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5XSU5ET1dTXzIwMDAsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5XSU5ET1dTX1hQLFxuICAgICAgICAgICAgT1NfVkVSU0lPTlMuV0lORE9XU19TRVJWRVJfMjAwMyxcbiAgICAgICAgICAgIE9TX1ZFUlNJT05TLldJTkRPV1NfVklTVEEsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5XSU5ET1dTXzcsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5XSU5ET1dTXzhfMSxcbiAgICAgICAgICAgIE9TX1ZFUlNJT05TLldJTkRPV1NfOCxcbiAgICAgICAgICAgIE9TX1ZFUlNJT05TLldJTkRPV1NfMTAsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5XSU5ET1dTX1BIT05FXzdfNSxcbiAgICAgICAgICAgIE9TX1ZFUlNJT05TLldJTkRPV1NfUEhPTkVfOF8xLFxuICAgICAgICAgICAgT1NfVkVSU0lPTlMuV0lORE9XU19QSE9ORV8xMCxcbiAgICAgICAgICAgIE9TX1ZFUlNJT05TLldJTkRPV1NfTlRfNF8wLFxuICAgICAgICAgICAgT1NfVkVSU0lPTlMuTUFDT1NYLFxuICAgICAgICAgICAgT1NfVkVSU0lPTlMuTUFDT1NYXzMsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5NQUNPU1hfNCxcbiAgICAgICAgICAgIE9TX1ZFUlNJT05TLk1BQ09TWF81LFxuICAgICAgICAgICAgT1NfVkVSU0lPTlMuTUFDT1NYXzYsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5NQUNPU1hfNyxcbiAgICAgICAgICAgIE9TX1ZFUlNJT05TLk1BQ09TWF84LFxuICAgICAgICAgICAgT1NfVkVSU0lPTlMuTUFDT1NYXzksXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5NQUNPU1hfMTAsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5NQUNPU1hfMTEsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5NQUNPU1hfMTIsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5NQUNPU1hfMTMsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5NQUNPU1hfMTQsXG4gICAgICAgICAgICBPU19WRVJTSU9OUy5NQUNPU1hfMTVcbiAgICAgICAgXS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIChwcmV2aW91c1ZhbHVlID09PSBPU19WRVJTSU9OUy5VTktOT1dOICYmIGRldmljZUluZm8ucmF3Lm9zX3ZlcnNpb25bY3VycmVudFZhbHVlXSkgPyBjdXJyZW50VmFsdWUgOiBwcmV2aW91c1ZhbHVlO1xuICAgICAgICB9LCBPU19WRVJTSU9OUy5VTktOT1dOKTtcblxuICAgICAgICBkZXZpY2VJbmZvLmJyb3dzZXJfdmVyc2lvbiA9IFwiMFwiO1xuICAgICAgICBpZiAoZGV2aWNlSW5mby5icm93c2VyICE9PSBCUk9XU0VSUy5VTktOT1dOKSB7XG4gICAgICAgICAgICB2YXIgcmUgPSBCUk9XU0VSX1ZFUlNJT05TX1JFW2RldmljZUluZm8uYnJvd3Nlcl07XG4gICAgICAgICAgICB2YXIgcmVzID0gcmVUcmVlLmV4ZWModWEsIHJlKTtcbiAgICAgICAgICAgIGlmICghIXJlcykge1xuICAgICAgICAgICAgICAgIGRldmljZUluZm8uYnJvd3Nlcl92ZXJzaW9uID0gcmVzWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGV2aWNlSW5mby5pc01vYmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgREVWSUNFUy5BTkRST0lELFxuICAgICAgICAgICAgICAgIERFVklDRVMuSV9QQUQsXG4gICAgICAgICAgICAgICAgREVWSUNFUy5JUEhPTkUsXG4gICAgICAgICAgICAgICAgREVWSUNFUy5JX1BPRCxcbiAgICAgICAgICAgICAgICBERVZJQ0VTLkJMQUNLQkVSUlksXG4gICAgICAgICAgICAgICAgREVWSUNFUy5GSVJFRk9YX09TLFxuICAgICAgICAgICAgICAgIERFVklDRVMuV0lORE9XU19QSE9ORSxcbiAgICAgICAgICAgICAgICBERVZJQ0VTLlZJVEFcbiAgICAgICAgICAgIF0uc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2VJbmZvLmRldmljZSA9PSBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZGV2aWNlSW5mby5pc1RhYmxldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgREVWSUNFUy5JX1BBRCxcbiAgICAgICAgICAgICAgICBERVZJQ0VTLkZJUkVGT1hfT1NcbiAgICAgICAgICAgIF0uc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2VJbmZvLmRldmljZSA9PSBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZGV2aWNlSW5mby5pc0Rlc2t0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIERFVklDRVMuUFM0LFxuICAgICAgICAgICAgICAgIERFVklDRVMuQ0hST01FX0JPT0ssXG4gICAgICAgICAgICAgICAgREVWSUNFUy5VTktOT1dOXG4gICAgICAgICAgICBdLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlSW5mby5kZXZpY2UgPT0gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRldmljZUluZm8uY3VzdG9tID0gY3VzdG9tRGV0ZWN0b3JzLnJlZHVjZShmdW5jdGlvbiAoY3VzdG9tLCBjdXN0b21EZXRlY3Rvcikge1xuICAgICAgICAgICAgY3VzdG9tW2N1c3RvbURldGVjdG9yLm5hbWVdID0gcmVUcmVlLnRlc3QodWEsIGN1c3RvbURldGVjdG9yLnJlKTtcbiAgICAgICAgICAgIHJldHVybiBjdXN0b207XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkZXZpY2VJbmZvO1xuICAgIH1cblxuICAgIGlmICghIWFuZ3VsYXIpIHtcbiAgICAgICAgYW5ndWxhci5tb2R1bGUoXCJ1YURldmljZURldGVjdG9yXCIsIFtcInJlVHJlZVwiXSlcbiAgICAgICAgICAgIC5jb25zdGFudChcIk9TX1JFXCIsIE9TX1JFKVxuICAgICAgICAgICAgLmNvbnN0YW50KFwiQlJPV1NFUlNfUkVcIiwgQlJPV1NFUlNfUkUpXG4gICAgICAgICAgICAuY29uc3RhbnQoXCJERVZJQ0VTX1JFXCIsIERFVklDRVNfUkUpXG4gICAgICAgICAgICAuY29uc3RhbnQoXCJPU19WRVJTSU9OU19SRVwiLCBPU19WRVJTSU9OU19SRSlcbiAgICAgICAgICAgIC5jb25zdGFudChcIkJST1dTRVJfVkVSU0lPTlNfUkVfTUFQXCIsIEJST1dTRVJfVkVSU0lPTlNfUkVfTUFQKVxuICAgICAgICAgICAgLmNvbnN0YW50KFwiQlJPV1NFUl9WRVJTSU9OU19SRVwiLCBCUk9XU0VSX1ZFUlNJT05TX1JFKVxuICAgICAgICAgICAgLmNvbnN0YW50KFwiQlJPV1NFUlNcIiwgQlJPV1NFUlMpXG4gICAgICAgICAgICAuY29uc3RhbnQoXCJERVZJQ0VTXCIsIERFVklDRVMpXG4gICAgICAgICAgICAuY29uc3RhbnQoXCJPU1wiLCBPUylcbiAgICAgICAgICAgIC5jb25zdGFudChcIk9TX1ZFUlNJT05TXCIsIE9TX1ZFUlNJT05TKVxuICAgICAgICAgICAgLmZhY3RvcnkoXCJ1YURldmljZURldGVjdG9yXCIsIFtcInJlVHJlZVwiLCBmdW5jdGlvbiAocmVUcmVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VVc2VyQWdlbnQ6IGZ1bmN0aW9uICh1YSwgY3VzdG9tRGV0ZWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VVc2VyQWdlbnQoeyByZVRyZWU6IHJlVHJlZSB8fCB7fSwgY3VzdG9tRGV0ZWN0b3JzOiBjdXN0b21EZXRlY3RvcnMgfHwgW10sIHVzZXJBZ2VudDogdWEgfHwgXCJcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgQlJPV1NFUlM6IEJST1dTRVJTLFxuICAgICAgICAgICAgICAgICAgICBERVZJQ0VTOiBERVZJQ0VTLFxuICAgICAgICAgICAgICAgICAgICBPUzogT1NcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfV0pO1xuICAgIH1cblxuICAgIGlmICghIXdpbmRvdykge1xuICAgICAgICB3aW5kb3cudWFEZXZpY2VEZXRlY3RvciA9IHtcbiAgICAgICAgICAgIHBhcnNlVXNlckFnZW50OiBmdW5jdGlvbiAodWEsIGN1c3RvbURldGVjdG9ycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZVVzZXJBZ2VudCh7IHJlVHJlZTogd2luZG93LnJlVHJlZSB8fCB7fSwgY3VzdG9tRGV0ZWN0b3JzOiBjdXN0b21EZXRlY3RvcnMgfHwgW10sIHVzZXJBZ2VudDogdWEgfHwgXCJcIiB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBCUk9XU0VSUzogQlJPV1NFUlMsXG4gICAgICAgICAgICBERVZJQ0VTOiBERVZJQ0VTLFxuICAgICAgICAgICAgT1M6IE9TXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCEhbW9kdWxlICYmICEhcmVxdWlyZSkge1xuICAgICAgICB2YXIgcmVUcmVlID0gcmVxdWlyZShcInJlLXRyZWVcIik7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICAgICAgcGFyc2VVc2VyQWdlbnQ6IGZ1bmN0aW9uICh1YSwgY3VzdG9tRGV0ZWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlVXNlckFnZW50KHsgcmVUcmVlOiByZVRyZWUgfHwge30sIGN1c3RvbURldGVjdG9yczogY3VzdG9tRGV0ZWN0b3JzIHx8IFtdLCB1c2VyQWdlbnQ6IHVhIHx8IFwiXCIgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQlJPV1NFUlM6IEJST1dTRVJTLFxuICAgICAgICAgICAgREVWSUNFUzogREVWSUNFUyxcbiAgICAgICAgICAgIE9TOiBPU1xuICAgICAgICB9O1xuICAgIH1cbn0pKHR5cGVvZiBtb2R1bGUgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG1vZHVsZSwgdHlwZW9mIHJlcXVpcmUgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVpcmUsIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdywgdHlwZW9mIGFuZ3VsYXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGFuZ3VsYXIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdWEtZGV2aWNlLWRldGVjdG9yL3VhLWRldmljZS1kZXRlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IDQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdWEtZGV2aWNlLWRldGVjdG9yXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbi8qIGdsb2JhbCBhbmd1bGFyICovXG4vKiBnbG9iYWwgbW9kdWxlICovXG5cbihmdW5jdGlvbiAobW9kdWxlLCB3aW5kb3csIGFuZ3VsYXIpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGZ1bmN0aW9uIHRlc3Qoc3RyaW5nLCByZWdleCkge1xuICAgICAgICBpZiAodHlwZW9mIHJlZ2V4ID09PSAnc3RyaW5nJyB8fCByZWdleCBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICAgICAgcmVnZXg9bmV3IFJlZ0V4cChyZWdleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIHJldHVybiByZWdleC50ZXN0KHN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVnZXggJiYgQXJyYXkuaXNBcnJheShyZWdleC5hbmQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVnZXguYW5kLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3Qoc3RyaW5nLCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlZ2V4ICYmIEFycmF5LmlzQXJyYXkocmVnZXgub3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVnZXgub3Iuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0KHN0cmluZywgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWdleCAmJiByZWdleC5ub3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGVzdChzdHJpbmcsIHJlZ2V4Lm5vdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjKHN0cmluZywgcmVnZXgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZWdleCA9PT0gJ3N0cmluZycgfHwgcmVnZXggaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgIHJlZ2V4PW5ldyBSZWdFeHAocmVnZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVnZXguZXhlYyhzdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlZ2V4ICYmIEFycmF5LmlzQXJyYXkocmVnZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVnZXgucmVkdWNlKGZ1bmN0aW9uIChyZXMsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCEhcmVzKSA/IHJlcyA6IGV4ZWMoc3RyaW5nLCBpdGVtKTtcbiAgICAgICAgICAgIH0sIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISFhbmd1bGFyKSB7XG4gICAgICAgIGFuZ3VsYXIubW9kdWxlKFwicmVUcmVlXCIsIFtdKS5mYWN0b3J5KFwicmVUcmVlXCIsIFtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlc3Q6IHRlc3QsXG4gICAgICAgICAgICAgICAgZXhlYzogZXhlY1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfV0pO1xuICAgIH1cblxuICAgIGlmICghIXdpbmRvdykge1xuICAgICAgICB3aW5kb3cucmVUcmVlID0ge1xuICAgICAgICAgICAgdGVzdDogdGVzdCxcbiAgICAgICAgICAgIGV4ZWM6IGV4ZWNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoISFtb2R1bGUpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgICAgICB0ZXN0OiB0ZXN0LFxuICAgICAgICAgICAgZXhlYzogZXhlY1xuICAgICAgICB9O1xuICAgIH1cbn0pKHR5cGVvZiBtb2R1bGUgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG1vZHVsZSwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93LCB0eXBlb2YgYW5ndWxhciA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogYW5ndWxhcik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91YS1kZXZpY2UtZGV0ZWN0b3Ivbm9kZV9tb2R1bGVzL3JlLXRyZWUvcmUtdHJlZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
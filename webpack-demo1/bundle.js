/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _bar = __webpack_require__(1);

	var myModule = _interopRequireWildcard(_bar);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//�����ﱻ���� ͬʱ����������Ĭ�ϵı���ʱ��Ĭ�ϱ�������ǰ�����򱨴���

	//myModule.bar(); //Ĭ�ϵ����Ĳ�����ôд
	(0, myModule.default)(); //����д
	/**
	 * Created by lenovo on 2017/1/10.
	 */
	console.log(myModule.cube(3)); // 27*/
	console.log(myModule.foo); //4.555806215962888ֻ�е�����������myModule��ʱ����������д��
	//import myModule, {foo, bar} from "my-module";��ʱ����foo��myModule.foo��ȫ��ͬ��

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = bar;
	exports.cube = cube;
	/**   bar:������ �������ư�
	 * Created by lenovo on 2017/1/10.
	 */
	function bar() {
	  //�����ﱻ����
	  console.log('hello webpack'); //ÿ���ű�ֻ����һ��Ĭ�ϵ���
	}
	// module "my-module.js"
	function cube(x) {
	  return x * x * x;
	}
	var foo = Math.PI + Math.SQRT2;
	exports.foo = foo;

/***/ }
/******/ ]);
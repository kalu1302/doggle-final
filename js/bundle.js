/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _loading_page = __webpack_require__(1);
	
	var _game_page = __webpack_require__(3);
	
	var _room = __webpack_require__(4);
	
	var _room2 = _interopRequireDefault(_room);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//TODO add all preload needs here
	var manifest = [{ src: "images/testing.jpg", id: "testing" }, { src: "images/wash.png", id: "wash" }, { src: "images/pet.png", id: "pet" }, { src: "images/feed.png", id: "feed" }, { src: "images/submit.png", id: "submit" }]; // import Room from './room';
	
	
	document.addEventListener('DOMContentLoaded', function () {
	
	  var createjs = window.createjs;
	  var canvas = document.getElementById("canvas");
	  var stage = new createjs.Stage("canvas");
	
	  //resize window with screen
	  window.addEventListener('resize', resize, false);
	  resize();
	  function resize() {
	    //TODO define minimum width
	    stage.canvas.width = window.innerWidth;
	    stage.update();
	  }
	
	  (0, _loading_page.LoadingPage)(canvas, stage, manifest, _game_page.GamePage.bind(null, canvas, stage));
	  // GamePage.bind(null,canvas,stage)();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoadingPage = undefined;
	
	var _loading_bar = __webpack_require__(2);
	
	var _loading_bar2 = _interopRequireDefault(_loading_bar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createjs = window.createjs;
	
	var LoadingPage = exports.LoadingPage = function LoadingPage(canvas, stage, manifest, nextpage) {
	
	  var loadProgressLabel = new createjs.Text("", "18px Roboto", "#00BCD4");
	  loadProgressLabel.lineWidth = 200;
	  loadProgressLabel.textAlign = "center";
	  loadProgressLabel.x = canvas.width / 2;
	  loadProgressLabel.y = 50;
	
	  var loadingBar = new _loading_bar2.default();
	
	  stage.addChild(loadProgressLabel, loadingBar);
	
	  //change back to false for production
	  var preload = new createjs.LoadQueue(false);
	  preload.addEventListener("complete", handleComplete);
	  preload.addEventListener("progress", handleProgress);
	  preload.loadManifest(manifest);
	
	  //TODO remove, testing
	  window.preload = preload;
	
	  function handleProgress() {
	
	    var bar = loadingBar.getChildByName("loadingBar");
	    bar.scaleX = preload.progress * loadingBar.width;
	    var loadPercent = Math.round(preload.progress * 100);
	    loadProgressLabel.text = loadPercent + "% Loaded";
	
	    stage.update();
	  }
	
	  function handleComplete() {
	
	    //TODO load manifest items
	
	    loadProgressLabel.text = "START GAME";
	    stage.update();
	
	    canvas.addEventListener("click", handleClick);
	  }
	
	  function handleClick() {
	    stage.removeAllChildren();
	    stage.update();
	    nextpage();
	    $("#canvas").remove();
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Container = window.createjs.Container;
	var Shape = window.createjs.Shape;
	
	var LoadingBar = function (_Container) {
	  _inherits(LoadingBar, _Container);
	
	  function LoadingBar() {
	    _classCallCheck(this, LoadingBar);
	
	    var _this = _possibleConstructorReturn(this, (LoadingBar.__proto__ || Object.getPrototypeOf(LoadingBar)).call(this));
	
	    var canvas = document.getElementById("canvas");
	
	    _this.width = 300;
	    _this.height = 20;
	    _this.padding = 10;
	    _this.color = "#00BCD4";
	    _this.frameColor = "#00BCD4";
	    _this.x = canvas.width / 2 - _this.width / 2;
	    _this.y = 100;
	
	    _this.render();
	    return _this;
	  }
	
	  _createClass(LoadingBar, [{
	    key: "render",
	    value: function render() {
	      var loadingBar = new Shape();
	      loadingBar.graphics.beginFill(this.color).drawRect(0, 0, 1, this.height).endFill();
	      loadingBar.name = "loadingBar";
	
	      var frame = new Shape();
	      frame.graphics.setStrokeStyle(1).beginStroke(this.frameColor).drawRect(-this.padding / 2, -this.padding / 2, this.width + this.padding, this.height + this.padding).endStroke();
	
	      this.addChild(loadingBar, frame);
	    }
	  }]);
	
	  return LoadingBar;
	}(Container);
	
	exports.default = LoadingBar;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GamePage = undefined;
	
	var _room = __webpack_require__(4);
	
	var _room2 = _interopRequireDefault(_room);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createjs = window.createjs;
	// import Input from './input';
	
	// import ColorPicker from './color_picker';
	
	var GamePage = exports.GamePage = function GamePage(canvas, stage) {
	
	  // const name = new Input("Name:");
	  // const color = new ColorPicker("Pet Color:");
	
	  // //TODO add image for start game with click handle
	  // const submit = new createjs.Bitmap("./images/submit.png");
	  // submit.on("click", () => {
	  //   // startRoom(name.value, color.value);
	  //     startRoom("Doggle", "red");
	  // });
	  stage.removeAllChildren();
	  stage.update();
	  var room = new _room2.default();
	  room.createMenu();
	
	  // stage.append(name, color, submit);
	  // stage.addChild(submit);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _doggle = __webpack_require__(5);
	
	var _doggle2 = _interopRequireDefault(_doggle);
	
	var _tingle = __webpack_require__(6);
	
	var _tingle2 = _interopRequireDefault(_tingle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var createjs = window.createjs;
	
	
	var Y_MENU = 100;
	var X_MENU_MARGIN = 50;
	
	var Room = function () {
	  function Room() {
	    _classCallCheck(this, Room);
	
	    this.doggle = new _doggle2.default();
	    this.modal = new _tingle2.default.modal({
	      footer: true,
	      stickyFooter: false,
	      closeLabel: "Close"
	    });
	    // this.canvas = document.getElementById("menu");
	    // this.stage = new createjs.Stage("menu");
	    this.clickColor = this.clickColor.bind(this);
	    this.clickModal = this.clickModal.bind(this);
	  }
	
	  _createClass(Room, [{
	    key: 'createMenu',
	    value: function createMenu() {
	      var _this = this;
	
	      // const x_first = x_mid - (X_MENU_MARGIN + washButton.getBounds().width);
	      // const x_mid = Math.floor(this.canvas.width / 2) - (washButton.getBounds().width / 2);
	      // const x_last = x_mid + (X_MENU_MARGIN + washButton.getBounds().width);
	      //
	      // // const wash = new Image();
	      // // wash.src = "./images/wash.jpg";
	      // let washButton = new createjs.Shape;
	      // // var image = new Image();
	      // // image.src = source;
	      //
	      // // washButton.graphics.beginBitmapFill(wash, "no-repeat").drawCircle(0,0,25);
	      // washButton.graphics.drawCircle(0,0,25);
	      // washButton.x = x_first;
	      // washButton.y = Y_MENU;
	      // washButton.on("click", this.clickWash());
	      //
	      // // const feed = new createjs.Bitmap("../images/feed.png");
	      // // feed.cursor = "pointer";
	      // // feed.y = Y_MENU;
	      // // feed.x = x_mid;
	      // // feed.on("click", this.clickFeed());
	      //
	      // // const pet = new createjs.Bitmap("../images/pet.png");
	      // // pet.cursor = "pointer";
	      // // pet.y = Y_MENU;
	      // // pet.x = x_last;
	      // // pet.on("click", this.clickPet());
	      // //set clickhandle
	      // // this.stage.addChildren(wash, feed, pet);
	      // this.stage.addChildren(wash);
	      var $makeshiftLabel = $("<text>Name Your Doggle:</text>");
	
	      var $namingDoggle = $('<form action="#"><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input" value="Doggle" type="text" id="name"><label class="mdl-textfield__label" for="name"></label></div></form>');
	
	      var pinkButton = document.createElement("BUTTON");
	      var blueButton = document.createElement("BUTTON");
	      var tanButton = document.createElement("BUTTON");
	      pinkButton.addEventListener("click", this.clickColor);
	      blueButton.addEventListener("click", this.clickColor);
	      tanButton.addEventListener("click", this.clickColor);
	      pinkButton.setAttribute("id", "pink");
	      blueButton.setAttribute("id", "blue");
	      tanButton.setAttribute("id", "tan");
	
	      var modalButton = document.createElement("BUTTON");
	      modalButton.addEventListener("click", this.clickModal);
	      modalButton.setAttribute("id", "modal");
	      modalButton.innerHTML = "Help";
	
	      $("#nameDoggle").append($makeshiftLabel, $namingDoggle, pinkButton, blueButton, tanButton, modalButton);
	
	      this.modal.setContent('<h3>Welcome to Doggle!<h3><h5>Name your doggle anything you would like.</h5><h5>Customize your doggle color by clicking the colors.</h5><h5>Click on the doggle to pull up the action menu.</h5>');
	      this.modal.addFooterBtn('Got it!', 'tingle-btn tingle-btn--primary', function () {
	        _this.modal.close();
	      });
	
	      this.modal.open();
	    }
	  }, {
	    key: 'clickModal',
	    value: function clickModal(e) {
	      this.modal.open();
	    }
	  }, {
	    key: 'clickColor',
	    value: function clickColor(e) {
	      $("button").each(function (index, el) {
	        return el.setAttribute("class", "");
	      });
	      e.target.setAttribute("class", "selected");
	    }
	  }, {
	    key: 'clickWash',
	    value: function clickWash() {}
	  }, {
	    key: 'clickFeed',
	    value: function clickFeed() {}
	  }, {
	    key: 'clickPet',
	    value: function clickPet() {}
	  }]);
	
	  return Room;
	}();
	
	exports.default = Room;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var createjs = window.createjs;
	
	var Doggle = function () {
	  function Doggle() {
	    _classCallCheck(this, Doggle);
	
	    this.name = "Doggle";
	    this.color = "#00BCD4";
	    this.x = 0;
	    this.y = 0;
	    this.z = 0;
	    this.happy = 0;
	    //available poses: sit, up, down
	    this.pose = "sit";
	    this.stage = new createjs.Stage("pet");
	    this.image = new createjs.Container();
	  }
	
	  _createClass(Doggle, [{
	    key: "draw",
	    value: function draw() {}
	  }, {
	    key: "sit",
	    value: function sit() {
	      if (this.pose === "up") {
	        //trigger easeljs animation up -> sit
	        this.pose = "sit";
	      } else if (this.pose === "down") {
	        //trigger easeljs down -> sit
	        this.pose = "sit";
	      }
	    }
	  }, {
	    key: "up",
	    value: function up() {
	      if (this.pose !== "up") {
	        //animation is down -> sit -> up
	        this.sit();
	        //easeljs sit -> up animation
	        this.pose = "up";
	      }
	    }
	  }, {
	    key: "down",
	    value: function down() {
	      if (this.pose !== "down") {
	        //animation is up -> sit -> down
	        this.sit();
	        //easeljs sit -> up animation
	        this.pose = "down";
	      }
	    }
	  }, {
	    key: "receive",
	    value: function receive() {
	      //animate eyes and ears
	    }
	  }]);
	
	  return Doggle;
	}();
	
	exports.default = Doggle;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * tingle.js
	 * @author  robin_parisi
	 * @version 0.9.0
	 * @url
	 */
	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	        module.exports = factory();
	    } else {
	        root.tingle = factory();
	    }
	})(undefined, function () {
	
	    /* ----------------------------------------------------------- */
	    /* == modal */
	    /* ----------------------------------------------------------- */
	
	    var transitionEvent = whichTransitionEvent();
	
	    function Modal(options) {
	
	        var defaults = {
	            onClose: null,
	            onOpen: null,
	            beforeClose: null,
	            stickyFooter: false,
	            footer: false,
	            cssClass: [],
	            closeLabel: 'Close'
	        };
	
	        // extends config
	        this.opts = extend({}, defaults, options);
	
	        // init modal
	        this.init();
	    }
	
	    Modal.prototype.init = function () {
	        if (this.modal) {
	            return;
	        }
	
	        _build.call(this);
	        _bindEvents.call(this);
	
	        // insert modal in dom
	        document.body.insertBefore(this.modal, document.body.firstChild);
	
	        if (this.opts.footer) {
	            this.addFooter();
	        }
	    };
	
	    Modal.prototype.destroy = function () {
	        if (this.modal === null) {
	            return;
	        }
	
	        // unbind all events
	        _unbindEvents.call(this);
	
	        // remove modal from dom
	        this.modal.parentNode.removeChild(this.modal);
	
	        this.modal = null;
	    };
	
	    Modal.prototype.open = function () {
	
	        if (this.modal.style.removeProperty) {
	            this.modal.style.removeProperty('display');
	        } else {
	            this.modal.style.removeAttribute('display');
	        }
	
	        // prevent double scroll
	        document.body.classList.add('tingle-enabled');
	
	        // sticky footer
	        this.setStickyFooter(this.opts.stickyFooter);
	
	        // show modal
	        this.modal.classList.add('tingle-modal--visible');
	
	        // onOpen event
	        var self = this;
	
	        if (transitionEvent) {
	            this.modal.addEventListener(transitionEvent, function handler() {
	                if (typeof self.opts.onOpen === 'function') {
	                    self.opts.onOpen.call(self);
	                }
	
	                // detach event after transition end (so it doesn't fire multiple onOpen)
	                self.modal.removeEventListener(transitionEvent, handler, false);
	            }, false);
	        }
	
	        // check if modal is bigger than screen height
	        _checkOverflow.call(this);
	    };
	
	    Modal.prototype.isOpen = function () {
	        return !!this.modal.classList.contains("tingle-modal--visible");
	    };
	
	    Modal.prototype.close = function () {
	
	        //  before close
	        if (typeof this.opts.beforeClose === "function") {
	            var close = this.opts.beforeClose.call(this);
	            if (!close) return;
	        }
	
	        document.body.classList.remove('tingle-enabled');
	
	        this.modal.classList.remove('tingle-modal--visible');
	
	        //Using similar setup as onOpen
	        //Reference to the Modal that's created
	        var self = this;
	
	        if (transitionEvent) {
	            //Track when transition is happening then run onClose on complete
	            this.modal.addEventListener(transitionEvent, function handler() {
	                // detach event after transition end (so it doesn't fire multiple onClose)
	                self.modal.removeEventListener(transitionEvent, handler, false);
	
	                self.modal.style.display = 'none';
	
	                // on close callback
	                if (typeof self.opts.onClose === "function") {
	                    self.opts.onClose.call(this);
	                }
	            }, false);
	        }
	    };
	
	    Modal.prototype.setContent = function (content) {
	        // check type of content : String or Node
	        if (typeof content === 'string') {
	            this.modalBoxContent.innerHTML = content;
	        } else {
	            this.modalBoxContent.innerHTML = "";
	            this.modalBoxContent.appendChild(content);
	        }
	    };
	
	    Modal.prototype.getContent = function () {
	        return this.modalBoxContent;
	    };
	
	    Modal.prototype.addFooter = function () {
	        // add footer to modal
	        _buildFooter.call(this);
	    };
	
	    Modal.prototype.setFooterContent = function (content) {
	        // set footer content
	        this.modalBoxFooter.innerHTML = content;
	    };
	
	    Modal.prototype.getFooterContent = function () {
	        return this.modalBoxFooter;
	    };
	
	    Modal.prototype.setStickyFooter = function (isSticky) {
	        // if the modal is smaller than the viewport height, we don't need sticky
	        if (!this.isOverflow()) {
	            isSticky = false;
	        }
	
	        if (isSticky) {
	            if (this.modalBox.contains(this.modalBoxFooter)) {
	                this.modalBox.removeChild(this.modalBoxFooter);
	                this.modal.appendChild(this.modalBoxFooter);
	                this.modalBoxFooter.classList.add('tingle-modal-box__footer--sticky');
	                _recalculateFooterPosition.call(this);
	                this.modalBoxContent.style['padding-bottom'] = this.modalBoxFooter.clientHeight + 20 + 'px';
	            }
	        } else if (this.modalBoxFooter) {
	            if (!this.modalBox.contains(this.modalBoxFooter)) {
	                this.modal.removeChild(this.modalBoxFooter);
	                this.modalBox.appendChild(this.modalBoxFooter);
	                this.modalBoxFooter.style.width = 'auto';
	                this.modalBoxFooter.style.left = '';
	                this.modalBoxContent.style['padding-bottom'] = '';
	                this.modalBoxFooter.classList.remove('tingle-modal-box__footer--sticky');
	            }
	        }
	    };
	
	    Modal.prototype.addFooterBtn = function (label, cssClass, callback) {
	        var btn = document.createElement("button");
	
	        // set label
	        btn.innerHTML = label;
	
	        // bind callback
	        btn.addEventListener('click', callback);
	
	        if (typeof cssClass === 'string' && cssClass.length) {
	            // add classes to btn
	            cssClass.split(" ").forEach(function (item) {
	                btn.classList.add(item);
	            });
	        }
	
	        this.modalBoxFooter.appendChild(btn);
	
	        return btn;
	    };
	
	    Modal.prototype.resize = function () {
	        console.warn('Resize is deprecated and will be removed in version 1.0');
	    };
	
	    Modal.prototype.isOverflow = function () {
	        var viewportHeight = window.innerHeight;
	        var modalHeight = this.modalBox.clientHeight;
	
	        return modalHeight >= viewportHeight;
	    };
	
	    /* ----------------------------------------------------------- */
	    /* == private methods */
	    /* ----------------------------------------------------------- */
	
	    function _checkOverflow() {
	        // only if the modal is currently shown
	        if (this.modal.classList.contains('tingle-modal--visible')) {
	            if (this.isOverflow()) {
	                this.modal.classList.add('tingle-modal--overflow');
	            } else {
	                this.modal.classList.remove('tingle-modal--overflow');
	            }
	
	            // TODO: remove offset
	            //_offset.call(this);
	            if (!this.isOverflow() && this.opts.stickyFooter) {
	                this.setStickyFooter(false);
	            } else if (this.isOverflow() && this.opts.stickyFooter) {
	                _recalculateFooterPosition.call(this);
	                this.setStickyFooter(true);
	            }
	        }
	    }
	
	    function _recalculateFooterPosition() {
	        if (!this.modalBoxFooter) {
	            return;
	        }
	        this.modalBoxFooter.style.width = this.modalBox.clientWidth + 'px';
	        this.modalBoxFooter.style.left = this.modalBox.offsetLeft + 'px';
	    }
	
	    function _build() {
	
	        // wrapper
	        this.modal = document.createElement('div');
	        this.modal.classList.add('tingle-modal');
	        this.modal.style.display = 'none';
	
	        // custom class
	        this.opts.cssClass.forEach(function (item) {
	            if (typeof item === 'string') {
	                this.modal.classList.add(item);
	            }
	        }, this);
	
	        // close btn
	        this.modalCloseBtn = document.createElement('button');
	        this.modalCloseBtn.classList.add('tingle-modal__close');
	
	        this.modalCloseBtnIcon = document.createElement('span');
	        this.modalCloseBtnIcon.classList.add('tingle-modal__closeIcon');
	        this.modalCloseBtnIcon.innerHTML = '×';
	
	        this.modalCloseBtnLabel = document.createElement('span');
	        this.modalCloseBtnLabel.classList.add('tingle-modal__closeLabel');
	        this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel;
	
	        this.modalCloseBtn.appendChild(this.modalCloseBtnIcon);
	        this.modalCloseBtn.appendChild(this.modalCloseBtnLabel);
	
	        // modal
	        this.modalBox = document.createElement('div');
	        this.modalBox.classList.add('tingle-modal-box');
	
	        // modal box content
	        this.modalBoxContent = document.createElement('div');
	        this.modalBoxContent.classList.add('tingle-modal-box__content');
	
	        this.modalBox.appendChild(this.modalBoxContent);
	        this.modal.appendChild(this.modalCloseBtn);
	        this.modal.appendChild(this.modalBox);
	    }
	
	    function _buildFooter() {
	        this.modalBoxFooter = document.createElement('div');
	        this.modalBoxFooter.classList.add('tingle-modal-box__footer');
	        this.modalBox.appendChild(this.modalBoxFooter);
	    }
	
	    function _bindEvents() {
	
	        this._events = {
	            clickCloseBtn: this.close.bind(this),
	            clickOverlay: _handleClickOutside.bind(this),
	            resize: _checkOverflow.bind(this),
	            keyboardNav: _handleKeyboardNav.bind(this)
	        };
	
	        this.modalCloseBtn.addEventListener('click', this._events.clickCloseBtn);
	        this.modal.addEventListener('mousedown', this._events.clickOverlay);
	        window.addEventListener('resize', this._events.resize);
	        document.addEventListener("keydown", this._events.keyboardNav);
	    }
	
	    function _handleKeyboardNav(event) {
	        // escape key
	        if (event.which === 27 && this.isOpen()) {
	            this.close();
	        }
	    }
	
	    function _handleClickOutside(event) {
	        // if click is outside the modal
	        if (!_findAncestor(event.target, 'tingle-modal') && event.clientX < this.modal.clientWidth) {
	            this.close();
	        }
	    }
	
	    function _findAncestor(el, cls) {
	        while ((el = el.parentElement) && !el.classList.contains(cls)) {}
	        return el;
	    }
	
	    function _unbindEvents() {
	        this.modalCloseBtn.removeEventListener('click', this._events.clickCloseBtn);
	        this.modal.removeEventListener('mousedown', this._events.clickOverlay);
	        window.removeEventListener('resize', this._events.resize);
	        document.removeEventListener("keydown", this._events.keyboardNav);
	    }
	
	    /* ----------------------------------------------------------- */
	    /* == confirm */
	    /* ----------------------------------------------------------- */
	
	    // coming soon
	
	    /* ----------------------------------------------------------- */
	    /* == alert */
	    /* ----------------------------------------------------------- */
	
	    // coming soon
	
	    /* ----------------------------------------------------------- */
	    /* == helpers */
	    /* ----------------------------------------------------------- */
	
	    function extend() {
	        for (var i = 1; i < arguments.length; i++) {
	            for (var key in arguments[i]) {
	                if (arguments[i].hasOwnProperty(key)) {
	                    arguments[0][key] = arguments[i][key];
	                }
	            }
	        }
	        return arguments[0];
	    }
	
	    function whichTransitionEvent() {
	        var t;
	        var el = document.createElement('tingle-test-transition');
	        var transitions = {
	            'transition': 'transitionend',
	            'OTransition': 'oTransitionEnd',
	            'MozTransition': 'transitionend',
	            'WebkitTransition': 'webkitTransitionEnd'
	        };
	
	        for (t in transitions) {
	            if (el.style[t] !== undefined) {
	                return transitions[t];
	            }
	        }
	    }
	
	    /* ----------------------------------------------------------- */
	    /* == return */
	    /* ----------------------------------------------------------- */
	
	    return {
	        modal: Modal
	    };
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
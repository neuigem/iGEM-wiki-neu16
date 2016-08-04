(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ScrollHandler;

ScrollHandler = (function() {
  function ScrollHandler() {
    var h, hType, i, j, len, len1, ref, ref1;
    console.log('initiliazed a ScrollHandler!');
    ref = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    for (i = 0, len = ref.length; i < len; i++) {
      hType = ref[i];
      ref1 = $(hType);
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        h = ref1[j];
        console.log(hType, $(h).attr('id'), $(h).offset().top);
      }
    }
    $('window').scroll(console.log('scrolling!'));
    this.handle();
  }

  ScrollHandler.prototype.handle = function() {
    this.currentScroll = $('body').scrollTop();
    return console.log(this.currentScroll);
  };

  return ScrollHandler;

})();

module.exports = ScrollHandler;


},{}],2:[function(require,module,exports){
ScrollHandler = require('./ScrollHandler');

$(document).ready(function() {

    $('body').scrollspy({
        target: '#tableofcontents'
    });
});

},{"./ScrollHandler":1}]},{},[1,2])


//# sourceMappingURL=maps/bundle.js.map

var Emblem = {
    init: function(el, str) {
      var element = document.querySelector(el);
      var text = str ? str : element.innerHTML;
      element.innerHTML = '';
      for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        var span = document.createElement('span');
        var node = document.createTextNode(letter);
        var r = (360/text.length)*(i);
        var x = (Math.PI/text.length).toFixed(0) * (i);
        var y = (Math.PI/text.length).toFixed(0) * (i);
        span.appendChild(node);
        span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        element.appendChild(span);
      }
    }
  };
  
  Emblem.init('.emblem');

  var Emblem1 = {
    init: function(el, str) {
      var element = document.querySelector(el);
      var text = str ? str : element.innerHTML;
      element.innerHTML = '';
      for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        var span = document.createElement('span');
        var node = document.createTextNode(letter);
        var r = (360/text.length)*(i);
        var x = (Math.PI/text.length).toFixed(0) * (i);
        var y = (Math.PI/text.length).toFixed(0) * (i);
        span.appendChild(node);
        span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        element.appendChild(span);
      }
    }
  };
  
  Emblem.init('.emblem1');

  var Emblem2 = {
    init: function(el, str) {
      var element = document.querySelector(el);
      var text = str ? str : element.innerHTML;
      element.innerHTML = '';
      for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        var span = document.createElement('span');
        var node = document.createTextNode(letter);
        var r = (360/text.length)*(i);
        var x = (Math.PI/text.length).toFixed(0) * (i);
        var y = (Math.PI/text.length).toFixed(0) * (i);
        span.appendChild(node);
        span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        element.appendChild(span);
      }
    }
  };
  
  Emblem.init('.emblem2');
  
  var Emblem3 = {
    init: function(el, str) {
      var element = document.querySelector(el);
      var text = str ? str : element.innerHTML;
      element.innerHTML = '';
      for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        var span = document.createElement('span');
        var node = document.createTextNode(letter);
        var r = (360/text.length)*(i);
        var x = (Math.PI/text.length).toFixed(0) * (i);
        var y = (Math.PI/text.length).toFixed(0) * (i);
        span.appendChild(node);
        span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        element.appendChild(span);
      }
    }
  };
  
  Emblem.init('.emblem3');
  
  var Emblem4 = {
    init: function(el, str) {
      var element = document.querySelector(el);
      var text = str ? str : element.innerHTML;
      element.innerHTML = '';
      for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        var span = document.createElement('span');
        var node = document.createTextNode(letter);
        var r = (360/text.length)*(i);
        var x = (Math.PI/text.length).toFixed(0) * (i);
        var y = (Math.PI/text.length).toFixed(0) * (i);
        span.appendChild(node);
        span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        element.appendChild(span);
      }
    }
  };
  
  Emblem.init('.emblem4');
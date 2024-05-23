//page1 Main Slide
let $constrain = 50;
let $container = document.getElementById("p0");
let $content = document.getElementById("Font_box");

function transforms(x, y, el) {
    let $box = el.getBoundingClientRect();
    let $calcX = -(y - $box.y - ($box.height / 2)) / $constrain;
    let $calcY = (x - $box.x - ($box.width / 2)) / $constrain;

    return "perspective(500px) "
        + "   rotateX("+ $calcX +"deg) "
        + "   rotateY("+ $calcY +"deg) ";
}

function transformElement(el, xyEl) {
    el.style.transform  = transforms.apply(null, xyEl);
}

$container.onmousemove = function(e) {
    let $xy = [e.clientX, e.clientY];
    let $position = $xy.concat([$content]);

    window.requestAnimationFrame(function(){
        transformElement($content, $position);
    });
};
//page2 About Me
let moveText = document.querySelector('.move_cover');

let MouseMove = ({clientX}) => {
  let x = (clientX / innerWidth * 2 - 1) * (innerWidth / 4)

  TweenLite.to('.move_name .text_name', 1, {
    x: x,
    ease: Sine.easeOut
  })
}
moveText.addEventListener('mousemove', MouseMove)
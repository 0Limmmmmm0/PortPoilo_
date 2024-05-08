//page4 project 가로흐름이동
$(window).scroll(function () {
  let ws = $(this).scrollTop();  //현재 스크롤 위치값
  let fixWrap = $('#leftWrap').offset().top;  // 고정박스 위치
  let move = ws - fixWrap;  // 이동하는 구간
  let end = $('.content').width() - $(window).innerWidth();  // 끝지점
  if (ws > fixWrap && ws < fixWrap + end) {
    $('.content').css('transform', `translateX(-${move}px)`);
  } else if (ws >= fixWrap + end) {
    $('.content').css('transform', `translateX(-${end}px)`);
  }
});

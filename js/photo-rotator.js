$(function() {

  var imgArr = new Array( // relative paths of images
    "img/background-0.png", "img/background-1.png", "img/background-2.png", "img/background-3.png", "img/background-4.png", "img/background-5.png", "img/background-6.png"
  );

  var preloadArr = new Array();
  var i;

  /* preload images */
  for(i=0; i < imgArr.length; i++){
    preloadArr[i] = new Image();
    preloadArr[i].src = imgArr[i];
  }

  var currImg = 1;
  var intID = setInterval(changeImg, 5000);

  /* image rotator */
  function changeImg(){
    $('.parallax-background').animate({opacity: 0}, 1000, function(){
      $(this).css('background','url(' + preloadArr[currImg++%preloadArr.length].src +') top center no-repeat');
    }).animate({opacity: 1}, 500);
  }
});

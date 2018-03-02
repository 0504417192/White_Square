function moveLeft(){
	if(sliderSettings.infinite){
		var last = $('.slider-item').last();
		if(last.position().left < slidesContainer.outerWidth()){
			$('.slider-item').first().css('left', slidesContainer.outerWidth()).appendTo(slidesContainer)
		}
	}else{
		var last = $('.slider-item').last();
		if(last.position().left < slidesContainer.outerWidth()){
			return false;
		}
	}
	slides.each(function(i, slide){
		$(slide).animate({
			left: '-='+slideWidth
		}, 1000);
	});	
}
// функция двигает в лево

function moveRight(){
	if(sliderSettings.infinite){
		var first = $('.slider-item').first();
		if(first.position().left >= 0){
			$('.slider-item').last().css('left', -slideWidth).prependTo(slidesContainer)
		}
	}else{
		var first = $('.slider-item').first();
		if(first.position().left >= 0){
			return false;
		}
	}


	slides.each(function(i, slide){
		$(slide).animate({
			left: '+='+slideWidth
		}, 1000);
	});
}
// функция двигает в право

var sliderSettings = {
	infinite: true,
	slidesToShow: 1
};//настройки

var slides = $('.slider-item');
var slidesContainer = $('.slider-wrap');
var slideWidth = slidesContainer.outerWidth() / sliderSettings.slidesToShow;

slides.each(function(i, slideItem){
	$(slideItem).css({
		width: slideWidth,
		left: slideWidth * i
	});
});

$('.left').on('click', moveLeft);

$('.right').on('click', moveRight);

//-----------------------------end slider----------------------

$('.dropdown').on('click', function(){
	$('.dropdown-menu').slideToggle('500', 'linear');
}) ;


//-----------------------------end dropdown toggle--------------
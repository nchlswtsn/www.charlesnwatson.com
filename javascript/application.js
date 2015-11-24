$(document).ready(init);

function init(){
  mixpanel.track('Site viewed')
  $('.col-md-4').hover(titleHighlight);
	$('.project').hover(projectHighlight);
}

function titleHighlight(){
  $(this).children().first().toggleClass('focused');
}

function projectHighlight(){
	$(this).toggleClass('selected');
}

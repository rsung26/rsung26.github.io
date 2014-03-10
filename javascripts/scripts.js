


if( $(window).width() > 767) {
	$(".project-item a").tooltip({ 
		position: { my: "left+15 center", at: "right center" }, 
		content: 'screenshot' }
	);

	$("#lifelines").tooltip( "option", "content", '<img src="images/lifelines.png" width="300px" height="180px"></img>');
	$("#html5-msc").tooltip( "option", "content", '<img src="images/html5-msc.png" width="300px" height="180px"></img>');
	$("#balderdash").tooltip( "option", "content", '<img src="images/balderdash.png" width="300px" height="180px"></img>');
	$("#ga-nlp").tooltip( "option", "content", '<img src="images/ga-nlp.png" width="300px" height="180px"></img>');
}


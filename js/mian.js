Board = function() {

	
	this.prepareBoard = function()
	{
		this.resize();
	}
	
	this.resize = function()
	{
		size = document.width > document.height ? document.height : document.width;
		fieldSize = size*0.8/9;
		$('.board .field').css({'width' : fieldSize, 'height' : fieldSize});
		
	}

	this.prepareBoard();
	
	
}
$(function(){
	var board = new Board();
	
	$(window).resize(function(){
		board.resize();
	});
	
});

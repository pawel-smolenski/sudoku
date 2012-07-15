Board = function() {

	
	this.prepareBoard = function()
	{
		this.build();
		this.resize();
	}
	
	this.build = function(){
		board = document.createElement('table');
		board.className = 'board';
		tbody = document.createElement('tbody');
		
		for(rowNum = 0; rowNum < 9; rowNum++)
		{
			col = document.createElement('tr');
			col.className = 'col';	
			
			for(colNum = 0; colNum < 9; colNum++)
			{
				field = document.createElement('td');
				field.className = 'field';
				
				col.appendChild(field);
			}
			
			tbody.appendChild(col);
		}
		board.appendChild(tbody);
		$('body').append(board);
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

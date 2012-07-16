Board = function() {

	NumberPicker = function()
	{
		this.attached = null;
		this.numberPicker = null;
		
		this.prepare = function(){
			this.build();
		}
		
		this.build = function(){
			this.numberPicker = document.createElement('table');
			this.numberPicker.className = 'number-picker';
			tbody = document.createElement('tbody');
			
			for(rowNum = 0, fieldNum = 1; rowNum < 3; rowNum++)
			{
				col = document.createElement('tr');
				col.className = 'col';	
				
				for(colNum = 0; colNum < 3; colNum++)
				{
					field = document.createElement('td');
					field.className = 'field';
					field.innerHTML = fieldNum++;
					
					col.appendChild(field);
				}
				
				tbody.appendChild(col);
			}
			this.numberPicker.appendChild(tbody);
		}
		
		this.attach = function(parent){
			if(this.isAttached()){
				return;
			}
			
			$(parent).append(this.numberPicker);
			
			this.attached = true;
		}
		
		this.detach = function(){
			if(!this.isAttached){
				return;
			}
			
			$(this.numberPicker).detach();
			
			this.attached = false;
		}
		
		this.isAttached = function()
		{
			return this.attached === true;
		}
		
		this.resize = function(fieldSize){
			$(this.numberPicker).find('.field').css({'width' : fieldSize, 'height' : fieldSize});
		}
		
		this.prepare();
	}
	
	this.board = null;
	this.numberPicker = new NumberPicker();
	
	this.prepareBoard = function()
	{
		this.build();
		this.resize();
		this.registerEventListeners();
		
	}
	
	this.build = function(){
		this.board = document.createElement('table');
		this.board.className = 'board';
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
		this.board.appendChild(tbody);
		$('body').append(this.board);
	}
	
	this.resize = function()
	{
		size = document.width > document.height ? document.height : document.width;
		fieldSize = size*0.8/9;
		$('.board .field').css({'width' : fieldSize, 'height' : fieldSize});
		this.numberPicker.resize(fieldSize*0.7);
	}
	
	this.registerEventListeners = function()
	{
		$(this.board).find('.field').on({
			'click' : function(event){
				event.data.board.numberPicker.detach();
				event.data.board.numberPicker.attach(this);
			}
		}, {'board' : this});
	}
	
	this.prepareBoard();
	
	
}
$(function(){
	var board = new Board();
	
	$(window).resize(function(){
		board.resize();
	});
	
});

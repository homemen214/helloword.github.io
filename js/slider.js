$(document).ready(function(){
	$("#a_btn").button();
	$( "#slider" ).slider();
	$("#recktangle").draggable();
	$("#recktangle").resizable();	
	$("#droppable").droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "droppable2" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
	$("#selcet").selectable();
	$("#b_btn").button();
	
	$("#b_btn").on("click",function(){
		if($("#right").hasClass("ui-selected")){
			alert("right")
		}
	})
});
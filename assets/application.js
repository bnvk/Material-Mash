$(document).ready(function()
{

	// Draggable Materials
	$('.draggable_material').draggable({ opacity: 0.6, helper: 'clone', revert: 'invalid' });


	// Target Drop Spot
	$('#added_materials').droppable(
	{
		disabled	: false,
		addClasses	: false,
		activeClass : 'occurrence_participants_hover',
		hoverClass	: 'occurrence_participants_active',
		drop 		: function(event, ui)
		{
			var material_id		= ui.draggable.attr('id'); 
			var material_html	= ui.draggable.html();
	
			console.log(material);
			
			
	
			$(this).append(material_html);
	
		}
		
	});
	

	$.getJSON("data.json", function(data){
		for(var i in data.data) {
			var m = data.data[i];
			console.debug(m);
			$("#available_materials .materials").append(ich.material(m));
		}
	});
		
});
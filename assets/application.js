$(document).ready(function()
{

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
	
			$(this).append("<li class='span2'>"+material_html+"</li>");
		}
		
	});
	

	$.getJSON("data.json", function(data){
		for(var i in data.data) {
			var m = data.data[i];
			$("#available_materials .materials").append(ich.material(m));
		}

		// Draggable Materials
		$('.draggable_material').draggable({ opacity: 0.6, helper: 'clone', revert: 'invalid' });
	});
		
});
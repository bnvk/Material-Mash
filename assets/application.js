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
	
		
});
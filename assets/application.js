var AllMaterials = [];

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
	
			$('#added_materials_list').append("<li class='span2 material' data-material-id='"+material_id.split("_")[1]+"'>"+material_html+"</li>");
			recalculateTotals();
		}
	});
	

	$.getJSON("data.json", function(data){
		for(var i in data.data) {
			var m = data.data[i];
			AllMaterials[m.Material.id] = m;
			$("#available_materials .materials").append(ich.material(m));
		}

		// Draggable Materials
		$('.draggable_material').draggable({ opacity: 0.6, helper: 'clone', revert: 'invalid' });
	});
		
});

function recalculateTotals() {
	var totalMaterials = $("#added_materials li").length;

	var materials = [];
	$("#added_materials li").each(function(i,e){
		var materialID = $(e).data("material-id");
		materials.push({
			Material: AllMaterials[materialID].Material,
			Makeup: (1/totalMaterials)
		});
	});
	var result = MaterialCalculator.calculate(materials);
	$("#recycled_value").html(Math.round(result.recyclable * 100));
	$("#organic_value").html(Math.round(result.organic * 100));
	$("#toxicity_value").html(Math.round(result.chemistry_total));
	$("#msi_value").html(Math.round(result.total_score));

}

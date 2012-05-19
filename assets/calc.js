
var MaterialCalculator = {
  calculate: function(materials) {
    var result = {
      chemistry_total: 0,
      egei_total: 0,
      water_land_intensity_total: 0,
      physical_waste_total: 0,
      total_score: 0,
      recyclable: 0,
      organic: 0
    };

    for(var i in materials) {
      var m = materials[i];
      result.chemistry_total += (parseFloat(m.Material.chemistry_total) * m.Makeup);
      result.egei_total += (parseFloat(m.Material.egei_total) * m.Makeup);
      result.water_land_intensity_total += (parseFloat(m.Material.water_land_intensity_total) * m.Makeup);
      result.physical_waste_total += (parseFloat(m.Material.physical_waste_total) * m.Makeup);
      result.total_score += (parseFloat(m.Material.total_score) * m.Makeup);
      result.recyclable += (m.Material.recyclable ? m.Makeup : 0);
      result.organic += (m.Material.organic ? m.Makeup : 0);
    }

    return result;
  }
};


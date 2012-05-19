var materials = [];

materials.push({
  Material: {
    id: "4",
    name: "Carbon fiber",
    chemistry_total: "16.40",
    egei_total: "0.00",
    water_land_intensity_total: "9.00",
    physical_waste_total: "11.30",
    total_score: "36.70",
    recyclable: false,
    organic: true
  },
  Makeup: 0.2
});

materials.push({
  Material: {
    id: "1",
    name: "Acrylic fabric",
    chemistry_total: "7.80",
    egei_total: "6.30",
    water_land_intensity_total: "9.00",
    physical_waste_total: "18.30",
    total_score: "41.30",
    recyclable: true,
    organic: false
  },
  Makeup: 0.8
});

(16 * 0.2) + (7 * 0.8)



console.debug(materials);


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

console.debug(MaterialCalculator.calculate(materials));

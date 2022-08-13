
// 3.totale oil price
function totalOil(dieselQuality, petrolQuality, octaneQuality){
    const perLeaterDiesel = 114;
    const perLeaterPetrol = 130;
    const perLeaterOctane = 135;
  
    const dieselLeater = dieselQuality * perLeaterDiesel;
    const petrolLeater = petrolQuality * perLeaterPetrol;
    const octaneLeater = octaneQuality * perLeaterOctane;
  
    const totalOilPrice = dieselLeater + petrolLeater + octaneLeater;
    return  totalOilPrice;
  }
  
  const  totalOilPrice = totalOil(5, 8, 9);
  console.log('total oil price:', totalOilPrice);  
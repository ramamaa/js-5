let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(cars) {
  let filtered = cars.filter((car) => {
    if (car.isAvailable === true) {
      return cars;
    }
  });
  return filtered;
}
let avialableCars = getAvailableCars(cars);
console.log("1. avialable cars ", avialableCars);

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
function getRecentCars(cars) {
  let filtered = cars.filter((car) => {
    if (car.year >= 2018) {
      return cars;
    }
  });
  return filtered;
}
let RecentCars = getRecentCars(cars);
console.log("2. Recent cars (2018-s hoish oniih)", RecentCars);

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
function getExpensiveCars(cars) {
  let filtered = cars.filter((car) => {
    if (car.price >= 50000000) {
      return cars;
    }
  });
  return filtered;
}
let expensiveCars = getExpensiveCars(cars);
console.log("3. 50 say-s unetei cars ", expensiveCars);

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
function getSedans(cars, type) {
  let filtered = cars.filter((car) => {
    if (car.type === type) {
      return cars;
    }
  });
  return filtered;
}
let SedansCar = getSedans(cars, "Sedan");
console.log("4. type Sedan cars", SedansCar);

// 5. Брэндээр шүүж буцаадаг функц бич.
function filterByBrand(cars, brandName) {
  let filtered = cars.filter((car) => {
    if (car.brand === brandName) {
      return cars;
    }
  });
  return filtered;
}
let FilteredBrand = filterByBrand(cars, "Tesla");
console.log("5. Tesla brand-n cars", FilteredBrand);

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
function getHighMileageCars(cars) {
  let filtered = cars.filter((car) => {
    if (car.mileage >= 100000) {
      return cars;
    }
  });
  return filtered;
}
let filteredByMileage = getHighMileageCars(cars);
console.log("6. 100,000 km-s ih ywsan cars", filteredByMileage);

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {
  cars.map((car) => {
    if (car.fuelEfficiency <= 5) {
      car.efficient = true;
    } else car.efficient = false;
  });
  return cars;
}
let addEfficent = addEfficiencyFlag(cars);
console.log("7. car efficient ", addEfficent);

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
function increaseCarPrices(cars) {
  cars.map((car) => {
    car.price = parseInt(1.15 * car.price);
  });
  return cars;
}
let IncreasedPrice = increaseCarPrices(cars);
console.log("8. 15% Increased Price", IncreasedPrice);

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars) {
  let filtered = cars.filter((car) => {
    if (car.mileage <= 50000) {
      return cars;
    }
  });
  return filtered;
}
let lowMileageCars = getLowMileageCars(cars);
console.log("9. Low Mileage Cars", lowMileageCars);

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
function getMostEfficientCar(cars) {
  let mostEfficientCar = cars[0];
  cars.forEach((car) => {
    if (car.fuelEfficiency < mostEfficientCar.fuelEfficiency) {
      mostEfficientCar = car;
    }
  });
  return mostEfficientCar;
}
let mostEfficientCar = getMostEfficientCar(cars);
console.log("10. Most Efficient Car", mostEfficientCar);

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  let mostExpensiveCar = cars[0];
  cars.forEach((car) => {
    if (car.price > mostExpensiveCar.price) {
      mostExpensiveCar = car;
    }
  });
  return mostEfficientCar;
}
let mostExpensiveCar = getMostExpensiveCar(cars);
console.log("11. Most expensive car", mostExpensiveCar);

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
function getTotalMileage(cars) {
  let totalMileage = 0;
  cars.forEach((car) => {
    totalMileage += car.mileage;
  });
  return totalMileage;
}
let totalMileage = getTotalMileage(cars);
console.log("12. Total Mileage", totalMileage);

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars, supplierName) {
  let filtered = cars.filter((car) => {
    if (car.supplier === supplierName) {
      return cars;
    }
  });
  return filtered;
}
let filteredSupplier = filterBySupplier(cars, "AutoJapan");
console.log("13. SupplierName = 'CityMotors'", filteredSupplier);

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {
  let ModelName = cars.map((car) => {
    return car.model;
  });
  return ModelName;
}
let ModelName = getCarModels(cars);
console.log("14. ModelName array", ModelName);

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  // ...
}

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  let filtered = cars.filter((car)=>{
    if (car.engineSize>2) {
      return cars;
    }
  })
  return filtered;
}
console.log("16 engineSize 2.0-s ih cars",getLargeEngineCars(cars));


// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
const getUniqueBrands= (cars) => {
  const Brands = cars.map(car=>{
    return car.brand;
  });
  const uniqueBrands = {};
  Brands.forEach((Brands)=>{
    uniqueBrands[Brands] = true;
  });
  const keysOfUniqueBrands = Object.keys(uniqueBrands);
  return keysOfUniqueBrands;
}
let resultUniqueBrands = getUniqueBrands(cars);
console.log("17 unique", resultUniqueBrands);


// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
 let modelAndYear = cars.map((car)=>{
  return {model: car.model, year: car.year}
 })
 return modelAndYear
}
console.log("18. Model and Year", getModelAndYearList(cars));

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  cars.map((car)=>{
    if (car.fuelEfficiency <4){
      car.tag = "super efficient"
    }
  });
  return cars;
}
console.log("19. add tag Super efficient", tagSuperEfficientCars(cars));


// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  let addID = cars.map((car, i)=>{
    return ({...car, Id: i+1})
  })
  return addID;
}
console.log("20. add Id to Cars",addIdToCars(cars));

// Нэг л products массив дээр ажиллана
let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,

  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];

// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getDiscountedProducts(products) {
  // ...
}

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getOutOfStockProducts(products) {
  // ...
}

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getExpensiveProducts(products) {
  // ...
}

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getComputers(products) {
  // ...
}

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
function filterByBrand(products, brandName) {
  let filtered = products.filter((products)=>{
    return products.brand === brandName;
  })
  return filtered;
}

let filteredBrand = filterByBrand(data, "Apple")
console.log("5. Brand Name", filteredBrand);


// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
function addIsHeavyFlag(products) {
   products.map((product)=>{
    if (product.weight>1) {
        product.isHeavy =true;
    } else product.isHeavy = false;
   })
   return products;
}
let add = addIsHeavyFlag(data)
console.log("6. is heavy",add);


// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
function increasePriceByTenPercent(products) {
  products.map((product)=>{
    product.price = parseInt(product.price*1.1);
  })
  return products;
}
let increasedPrice = increasePriceByTenPercent(data)
console.log("7. Increased Price By Ten Percent", increasedPrice);

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
function addFinalPrice(products) {
  products.map((product)=>{
    if (product.discountPercent>0) {
        product.finalPrice = product.price-(product.price*product.discountPercent)/100
    } else {
        product.finalPrice = product.price
    }
  })
  return products;
}
let finalPrice = addFinalPrice(data)
console.log("8. Final Price", finalPrice);


// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
function getTopRatedProduct(products) {
    let TopRated = products[0] 
//   for (i=0;i+products.length;i++){
//     if (products[i].rating>products[0].rating) {
//         return products[i];
//     }
//   }
    products.forEach(product => {
        if (product.rating>TopRated.rating) {
            TopRated=product;
        }
    });
  return TopRated;
}
let TopRated = getTopRatedProduct(data)
console.log("9. Top Rated Product ", TopRated);


// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
function getCheapestProduct(products) {
  let CheapestRated = products[0] 

    products.forEach(product => {
        if (product.rating<CheapestRated.rating) {
            CheapestRated=product;
        }
    });
  return CheapestRated;
}
let CheapestRated = getCheapestProduct(data)
console.log("10. Cheapest Rated Product", CheapestRated);


// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
function getTotalStock(products) {
    let TotalStock = 0;
    products.forEach((product) => {
        TotalStock += product.stock 
    });
    return TotalStock;
}
let TotalStock = getTotalStock(data)
console.log("11. Total Stock", TotalStock);


// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
function getTotalPrice(products) {
   let TotalStock = 0;
    products.forEach((product) => {
        TotalStock += product.price
    });
    return TotalStock;
}
let TotalPrice = getTotalPrice(data)
console.log("12. Total Price", TotalPrice);

// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
function filterBySupplier(products, supplierName) {
  let filtered = products.filter(product=>{
    return product.supplier=== supplierName;
  })
  return filtered;
}
let filteredSupplier = filterBySupplier(data, "PCMall")
console.log("13. filtered by supplier", filteredSupplier);

// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
function getProductNames(products) {
  // ...
}

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(products) {
  // ...
}

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getLowStockProducts(products) {
  // ...
}

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
function getUniqueSuppliers(products) {
  // ...
}

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
function getNameAndPriceList(products) {
  // ...
}

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getHighlyRatedProducts(products) {
  // ...
}

// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
function addIdToProducts(products) {
  // ...
}

 
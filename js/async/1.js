let url = '1.json';
const products = [{ name: "towel", brand: "zara", price: 1000, ratings: "4", category: "clothing" }, { name: "cricket bat", brand: "reebok", price: 10000, ratings: "17", category: "sports" }, { name: "super", brand: "denver", price: 5000, ratings: "3.5", category: "perfume" }, { name: "jeans", brand: "levis", price: 2000, ratings: "4", category: "clothing" }, { name: "shirt", brand: "raymonds", price: 20000, ratings: "4.5", category: "clothing" }, { name: "diaper", brand: "huggies", price: 100, ratings: "2", category: "hygiene" }, { name: "Gold chain", brand: "tanishq", price: 700000, ratings: "4.7", category: "Accessories" }, { name: "Y15", brand: "oppo", price: 35000, ratings: "4.1", category: "mobile phones" }, { name: "legion", brand: "lenovo", price: 10000, ratings: "4.9", category: "laptop" }, { name: "beanie", brand: "dope", price: 500, ratings: "1", category: "caps" }];

// const ab = products.filter(products => products.brand === "zara");
// console.log(ab)

// const cd =products.filter(products => (products.price==="5000") && (products.brand==="zara","reebok","huggies","oppo") && (products.ratings >=4) );
// console.log(cd)

//  let ab = products.map(product=>product.price + 1)
// console.log(ab)



// const ab = products.sort((a,b)=> (parseInt(a.ratings) > b.ratings ? 1: -1))
// console.log(ab)  

// const ab = products.reduce((total,products)=> total+ products.price ,0)
// console.log(ab)

let ab = products.map(products=> products.price-(products.price* 0.1))
const cd = products.ab.filter(products=> (products.ab.price==="200"&& products.ab.price==="4000"))
console.log(cd)


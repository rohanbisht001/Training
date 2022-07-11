var cart = [
    {
        product: 1,
        brand: "apple",
        price: 120000,
        qty: 1
    },
    {
        product: 2,
        brand: "oppo",
        price: 15000,
        qty: 4
    },
    {
        product: 3,
        brand: "one plus",
        price: 50000,
        qty: 2
    },
    {
        product: 4,
        brand: "Samsung",
        price: 69000,
        qty: 1
    }
   ]
   var total=0;
    function getcartTotal(data){
        
        for(product of data){
            var itotal=0;
            itotal = product.price*product.qty;
            console.log(product.brand,product.qty,"total amount=",itotal);
            total+=product.price*product.qty;
          
           
        }
       console.log("total amount",total);
    } 
    getcartTotal(cart)
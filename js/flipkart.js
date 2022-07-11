async function getproducts() {
    let url = 'flipkart.json';
    try {
        let res = await fetch(url);
        return await res.json();

    } catch (error) {
        console.log(error);
    }
}

async function renderproducts() {
    let products = await getproducts();
    let html = '';
    products.forEach(product => {
        let htmlSegment = `<div class = "user">
                               <img height="700px" width="700px" src = "./${product.product_picture}"/>
                               <div class="name">Name -- "${product.name}"</div>
                                <div class ="brand>Brand --"${product.brand}"</div>
                               <div class = "price">Price -- "${product.price}"</div>
                               <div class = "rating">Ratings - "${product.ratings}"</div>
                               <div class = "category">Category - "${product.category}"</div>
                               <div class = "wishlist">Wishlist - "${product.wishlist}"</div>
                               <div class = "desc"><a href="Click here to buy:${product.description}">${product.description}</a></div>
                               </div>`;
        html += htmlSegment;

    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}
renderproducts()


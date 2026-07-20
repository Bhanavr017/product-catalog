fetch('https://fakestoreapi.com/products')
.then(r=>r.json())
.then(products=>{
const productsContainer=document.getElementById('productsContainer');
const productCount=document.getElementById('productCount');
productCount.innerText=`${products.length} Products`;
products.forEach(product=>{
const productCard=document.createElement('div');
productCard.className='product-card';
productCard.innerHTML=`
<div class="product-image-wrapper">
<img class="product-image" src="${product.image}" alt="${product.title}">
<span class="product-id">#${product.id}</span>
</div>
<div class="product-content">
<p class="product-category">${product.category}</p>
<h3 class="product-title">${product.title}</h3>
<p class="product-description">${product.description}</p>
<div class="product-footer">
<p class="price-label">Price</p>
<p class="product-price">$${product.price}</p>
</div>
</div>`;
productsContainer.appendChild(productCard);
});
})
.catch(()=>document.getElementById('productsContainer').innerHTML='<h2>Unable to load products.</h2>');

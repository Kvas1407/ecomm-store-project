

//Declaring and stacking the designed 6 products into a single Array
const productList= [
    {
    productName: 'Nike Air',
    productDescp: 'A product of NIKE',
    productPrice: '$89',
    productImage: '1.jpg'
    },

    {
    productName: 'Air Shoe',
    productDescp: 'A product of AIR',
    productPrice: '$79',
    productImage: '2.jpg'
    },

    {
    productName: 'Channel Shoe',
    productDescp: 'A product of CHANNEL',
    productPrice: '$69',
    productImage: '3.jpg'
    },

    {
    productName: 'Dior Shoe',
    productDescp: 'A product of DIOR',
    productPrice: '$63',
    productImage: '4.jpg'
    },

    {
    productName: 'Vans',
    productDescp: 'A product of VANS',
    productPrice: '$59',
    productImage: '5.jpg'
    
    },

    {        
    productName: 'Adidas',
    productDescp: 'A product of ADIDAS',
    productPrice: '$44',
    productImage: '6.jpg'
    
    },
]

    const productResult = document.querySelector(`.results`)
    const userInput = document.querySelector('.search-input')
    
    const displayProduct = function(prodArray)
    {
        productResult.innerHTML = '<h2 class="subheading">Results</h2>'
        prodArray.forEach((product) => {

    const oneProduct = document.createElement(`article`)
    oneProduct.classList.add(`product`)
    oneProduct.innerHTML = `
    <header>
            <a href="product.html" target="_blank"><img src="/ecomm-store-project/img/Product-Images/${product.productImage}" alt="${product.productName}" class="img-shoe"></a>
            <h3 class="h3-heading">${product.productName}</h3>
            <data value="39" class="para-product"><del>$90.00</del> <ins>$89.00</ins></data>
            <p class="para-product">${product.productDescp}</p>
            <dl>
              <dt class="filtertype">Rating</dt>
              <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
            </dl>
          </header>
          <form>
            <fieldset>
              <legend class="filtertype">Colours</legend>
              <ul>
                <li class="color-radio"><label><input type="radio" name="colour" value="r"> Red</label></li>
                <li class="color-radio"><label><input type="radio" name="colour" value="w" > White</label></li>
                <li class="color-radio"><label><input type="radio" name="colour" value="b" > Blue</label></li>
              </ul>
            </fieldset>
            <fieldset>
              <legend class="filtertype">Sizes</legend>
              <ol>
                <li  class="color-radio"><label><input type="radio" name="size" value="m"> 9</label></li>
                <li  class="color-radio"><label><input type="radio" name="size" value="l"> 9.5</label></li>
                <li  class="color-radio"><label><input type="radio" name="size" value="xl"> 10</label></li>
              </ol>
            </fieldset>
          </form>
          <footer>
            <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
            <button type="button"><span class="material-icons">favorite</span></button>
          </footer>        
          `

          productResult.appendChild(oneProduct)

        })
    }
        
          
    

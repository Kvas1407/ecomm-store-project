

const mainImage = document.querySelector('#main')
const productGallery = document.querySelector('#productGallery')



const settingImage = function(event){
    const whichOneImage =event.target

  if(whichOneImage.matches('.product-setting'))  {

    let imgSrc = whichOneImage.getAttribute('src')
    let imgAlt = whichOneImage.getAttribute('alt')

    //updating bigger image attributes

    mainImage.setAttribute('src', imgSrc)
    mainImage.setAttribute('alt', imgAlt)

  }

}
productGallery.addEventListener('click', settingImage)


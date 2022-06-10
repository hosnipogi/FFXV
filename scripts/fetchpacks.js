;(() => {
  const title = document.querySelector('.gold-store-popup-title').childNodes[0]
    .innerHTML
  const description = document.querySelector('.gold-store-popup-description')
    .childNodes[0].innerHTML
  const itemsArray = Array.from(
    document.querySelector('.gold-store-popup-item-product-scrollbar-content')
      .childNodes
  )
  const image = document
    .querySelector('.gold-store-popup-image')
    .childNodes[0].getAttribute('src')
  const items = itemsArray.map((item) => {
    const itemsDescDOM = item.querySelector('.scrollbar-item-desc').childNodes
    const itemCount = item.querySelector('.scrollbar-item-count').childNodes[0]
      .innerHTML

    const itemDescription = {
      img: itemsDescDOM[0].lastChild.getAttribute('src'),
      title: itemsDescDOM[1].lastChild.innerHTML,
      itemCount,
    }

    return itemDescription
  })

  let price = document
    .querySelector('.gold-store-popup-content')
    .querySelector('.sale-item-button-content').lastChild.innerHTML

  price = parseFloat(price.substring(price.length, 8))
  let discountedPrice

  switch (price) {
    case 99.99:
      discountedPrice = 50.5
      break
    case 49.99:
      discountedPrice = 26.0
      break
    default:
      discountedPrice = price
  }

  return {
    title,
    description,
    image,
    items,
    price: discountedPrice,
  }
})()

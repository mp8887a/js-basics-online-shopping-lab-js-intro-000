var cart = [];
 var numbers = []
 var sum = 0

function getCart() {
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let min = 1
  let max = 100
  let random = Math.floor(Math.random() * (max - min)) + min

   var itemHash = {
     itemName: item,
     itemPrice: random
   }

   cart.push(itemHash)
   return `${cart[cart.length - 1].itemName} has been added to your cart.`
}

function viewCart() {
 // write your code here
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  } else if (cart.length === 1){
    var oneItem = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
    console.log(oneItem)
  } else if (cart.length === 2){
    var twoItems = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`
    console.log(twoItems)
  } else {
    var cartData = []
    for (var i = 0; i < cart.length-1; i++){
      cartData.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
}
    var threePlusItems = `In your cart, you have ${cartData.join(', ')}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`
  }
  console.log(threePlusItems)
}
viewCart()


function total(){
  let numbers = []
  let sum = 0

  for (var i = 0; i < cart.length; i++) {
    numbers.push(cart[i].itemPrice)
    sum += numbers[i]
  }
  return sum
}

function removeFromCart(item) {
  const itemName = []

  for(var i = 0; i < cart.length; i++){
    itemName.push(cart[i].itemName)
    }

  const index = itemName.indexOf(item)

  if(index > -1){
     cart.splice(index, 1)
     return cart
  } else {
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    const total1 = total()
    cart = []
    return `Your total cost is $${total1}, which will be charged to the card ${cardNumber}.`
  }
}

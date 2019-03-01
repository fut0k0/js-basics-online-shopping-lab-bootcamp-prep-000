var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var thing = {}
  var itemName
  var itemPrice
  thing.itemName = item
  thing.itemPrice = Math.floor((100 * Math.random()) + 1)
  cart.push(thing)
  return thing.itemName + " has been added to your cart."
}

function viewCart() {
  
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + "."
    }
    else {
    var list = []
    for (var i = 0; i < cart.length - 1; i++ ) {
      list[i] = " " + cart[i].itemName + " at $" + cart[i].itemPrice
    }
    list[cart.length - 1] = " and " + cart[cart.length -1].itemName + " at $" + cart[cart.length - 1].itemPrice + "."
    return "In your cart, you have" + list
    }
}

function total() {
  var cost = 0 
  for (var i = 0; i < cart.length; i++) {
    cost = cost + cart[i].itemPrice
  }
  return cost  
}

function removeFromCart(item) {
  var match = 0
  var index = 0
  while (match === 0) {
    if (item === cart[index].itemName) {
      
    }
    
    
    
  }
  
  
}

function placeOrder(cardNumber) {
  // write your code here
}

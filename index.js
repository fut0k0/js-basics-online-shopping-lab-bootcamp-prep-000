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
  } else {
    var list = []
    for (var i = 0; i < cart.length; i++ ) {
      
      
      
    }
    
    
    
  }
  
  
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

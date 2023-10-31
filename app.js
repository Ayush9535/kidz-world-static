var items = [
    {
      name: "This was our pact",
      quantity: 0,
      dollars: 7,
      cents: 49,
    },
    {
      name: "The famous five",
      quantity: 0,
      dollars: 4,
      cents: 59,
    },
    {
      name: "Matilda",
      quantity: 0,
      dollars: 6,
      cents: 80,
    },
    {
      name: "Harry Potter",
      quantity: 0,
      dollars: 10,
      cents: 0,
    },
    {
      name: "For Young Readers",
      quantity: 0,
      dollars: 7,
      cents: 29,
    },
    {
      name: "Wimpy Kid - DIY",
      quantity: 0,
      dollars: 4,
      cents: 99,
    },
    {
      name: "Dart Board",
      quantity: 0,
      dollars: 17,
      cents: 49,
    },
    {
      name: "Connect Four",
      quantity: 0,
      dollars: 19,
      cents: 99,
    },
    {
      name: "Jenga",
      quantity: 0,
      dollars: 20,
      cents: 99,
    },
    {
      name: "Monopoly",
      quantity: 0,
      dollars: 19,
      cents: 49,
    },
    {
      name: "Bookmarks",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Birthday Card",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Stuffed toys",
      quantity: 0,
      dollars: 15,
      cents: 99,
    },
    {
      name: "Dream catcher drawing",
      quantity: 0,
      dollars: 18,
      cents: 49,
    },
  ];


const btn = document.getElementsByClassName("button")
const cartValue = document.getElementById("cart-value")
const cartImage = document.getElementById("cart")

for (let i=0 ; i<btn.length ; i++){
    btn[i].addEventListener("click" , () =>{
        items[i].quantity += 1;
        updateCart()
    })
}
function updateCart(){

    // Initialize the value of cart
    let cart = 0;


    // for loop 
    for (let i=0 ; i<items.length ; i++){
        cart += items[i].quantity;
    }

    cartValue.innerHTML = cart;
    // console.log(cart)

}

let finaldollars = 0;
let finalcents = 0;


// updateCart()


function updatePrice(){
    let total = 0;

    for(let i=0 ; i<items.length ; i++){
        total += items[i].quantity*(items[i].dollars*100 + items[i].cents)
    }
    finaldollars = Math.floor(total/100)
    finalcents = total%100

}   



cart.onclick = () =>{
    updateCart()
    updatePrice()

    

    for (let i=0 ; i<items.length ; i++){
        if(items[i].quantity != 0){
            console.log(
                "Items Name : " + items[i].name + "Items Quantity " + items[i].quantity
            )
        }
    }

    console.log("The Total Amount is " + finaldollars + "$ and " + "The Total Cents is " + finalcents)
}

alert("Welcome to our shop")

var item1= prompt("Enter name of item 1")
var price1= prompt("Enter price of " + item1)

var item2= prompt("Enter name of item 2")
var price2= prompt("Enter price of " + item2)

var item3= prompt("Enter name of item 3")
var price3= prompt("Enter price of " + item3)

var item4= prompt("Enter name of item 4")
var price4= prompt("Enter price of " + item4)

var item5= prompt("Enter name of item 5")
var price5= prompt("Enter price of " + item5)

var item6= prompt("Enter name of item 6")
var price6= prompt("Enter price of " + item6)

price1 = parseFloat(price1) || 0;
price2 = parseFloat(price2) || 0;
price3 = parseFloat(price3) || 0;
price4 = parseFloat(price4) || 0;
price5 = parseFloat(price5) || 0;
price6 = parseFloat(price6) || 0;

var total= price1 + price2 + price3 + price4 + price5 + price6;

var disc = 0;

if (total <= 3000) {disc = 0;}

else if (total >= 5000 && total < 10000) {disc= total * 0.05;}

else if (total >=10000) {disc= total * 0.10;}

var finalAmount = total - disc;

alert("YOUR TOTAL BILL IS\nTotal Amount: Rs. " + total.toFixed(2) +
      "\nDiscount: Rs. " + disc.toFixed(2) +
      "\nFinal Amount: Rs. " + finalAmount.toFixed(2));

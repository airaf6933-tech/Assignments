// chapter 14-16

// var sname = ["Michael", "John", "Tony"]
// var score = ["320", "230", "480"]
// var total = 500

// var p1 = (score[0]/total) * 100
// var p2 = (score[1]/total) * 100
// var p3 = (score[2]/total) * 100

// document.write("The score of " + sname[0] + " is " + score[0] + ".Percentage:" + p1 + "%<br>")
// document.write("The score of " + sname[1] + " is " + score[1] + ".Percentage:" + p2 + "%<br>")
// document.write("The score of " + sname[2] + " is " + score[2] + ".Percentage:" + p3 + "%<br>")

// part a

// var color = ["red", "green", "blue"];

// var newcolor = prompt("What color do you want to add?")

// color.unshift(newcolor)

// document.write("Updated array:" + color)

// part b


// var color = ["red", "green", "blue"];

// var newcolor = prompt("What color do you want to add?")

// color.push(newcolor)

// document.write("Updated array:" + color)

// part c

// var color = ["red", "green", "blue"];

// var newcolor = prompt("What color do you want to add?")
// var newcolor2 = prompt ("What is the 2nd color that you want to add?")

// color.unshift(newcolor, newcolor2)

// document.write("Updated array:" + color )

// part d

// var color = ["red", "green", "blue"];

// color.shift()

// document.write("Updated array:" + color)

// part e

// var color = ["red", "green", "blue"];

// color.pop()

// document.write("Update array:" + color)

// part f

// var color = ["red", "green", "blue"];

// var newcolor = prompt("What color do you want to add?")
// var index = prompt("At which index do you want to add the color?")

// color.splice(index, 0, newcolor)

// document.write("Updated array:" + color)

// part g

// var color = ["red", "green", "blue"]

// var index = prompt("At which index, you want to delete the colors from")

// var number = prompt("How many colors do you want to delete?")

// color.splice(index, number)

// document.write("Updated array:" + color)

// ans10

// var scores = [320, 230, 480, 120]


// document.write("Scores of student is " + scores + "<br>")

// scores.sort(function(a,b){return a - b;})

// document.write("Ordered Scores of student is " + scores) 

// ans11

// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
// var selectedcities = cities.slice(2,4)

// document.write("Cities list:<br>" + cities)

// document.write("<br>Selected cities list:<br>" + selectedcities)

// ans12

// var arr = ["This", "is", "my", "cat"]

// var string = arr.join(" ")

// document.write(string)

// ans13
// var arr = []

// arr.push("keyboard")
// arr.push("mouse")
// arr.push("printer")
// arr.push("monitor")

// document.write("Devices: " + arr + "<br>")

// var item1 = arr.shift()
// document.write("Out: <br>" + item1 + "<br>")

// var item2 = arr.shift()
// document.write("Out: <br>" + item2 + "<br>")

// var item3 = arr.shift()
// document.write("Out: <br>" + item3 + "<br>")

// var item4 = arr.shift()
// document.write("Out: <br>" + item4 + "<br>")

// ans 14

// var arr = []

// arr.push("keyboard")
// arr.push("mouse")
// arr.push("printer")
// arr.push("monitor")

// document.write("Devices: " + arr + "<br>")

// var item1 = arr.pop()
// document.write("Out: <br>" + item1 + "<br>")

// var item2 = arr.pop()
// document.write("Out: <br>" + item2 + "<br>")

// var item3 = arr.pop()
// document.write("Out: <br>" + item3 + "<br>")

// var item4 = arr.pop()
// document.write("Out: <br>" + item4 + "<br>")

// ans15

// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// document.write("<option>" + phones[0] + "</option>");
// document.write("<option>" + phones[1] + "</option>");
// document.write("<option>" + phones[2] + "</option>");
// document.write("<option>" + phones[3] + "</option>");
// document.write("<option>" + phones[4] + "</option>");
// document.write("<option>" + phones[5] + "</option>");
// document.write("</select>");

//chapter 17-20

// ans 1

// var array = [[],[],[]];

// document.write(array)

// ans2

// var array = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ];

// for(i = 0; i < array.length; i++){
//     document.write(array[i] + "<br>")
// }


// ans3

// for(i = 1; i <=10; i++){
//     document.write(i + "<br>")
// }

// ans4

// let number = prompt("Which number table do you want?")
// let length = prompt ("Enter the length of the table")

// for (let i = 1; i <= length; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// ans5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }

// document.write("<br>");

// for (let i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// ans6

// document.write("<b>Counting:</b><br>");
// for (let i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<br><br><b>Reverse counting:</b><br>");
// for (let i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<br><br><b>Even:</b><br>");
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {        
//         document.write(i + ", ");
//     }
// }

// document.write("<br><br><b>Odd:</b><br>");
// for (let i = 1; i <= 19; i++) {
//     if (i % 2 != 0) {       
//         document.write(i + ", ");
//     }
// }

// document.write("<br><br><b>Series:</b><br>");
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {       
//         document.write(i + "k, ");
//     }
// }

// ans8
// var A = [24, 53, 78, 91, 12];

// var largest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// document.write("Array items: " + A + "<br>");
// document.write("The largest number is " + largest);

// ans9

// var A = [24, 53, 78, 91, 12];

// var smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// document.write("Array items: " + A + "<br>");
// document.write("The smallest number is " + smallest);

// ans10
// for (let i = 5; i <= 100; i += 5) {
//     document.write(i + ", ");
// }


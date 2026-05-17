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

// Chapter 21-25

// Q1

// var input1 = prompt("Enter your first name")
// var input2 = prompt("Enter your last name")

// var fullname = input1 + " " + input2

// document.write( "Welcome to our website " + fullname)

// Q2

// var input = prompt("Whats your favourite mobile phone model?")
// var Length = input.length

// document.write("My favourite phone is: " + input + "<br>" + "Length of string: " + Length)

// Q3

// var country = "pakistani"

// var index = country.indexOf("n")

// document.write("String: " + country + "<br>" + "Index of n: " + index)

// Q4

// var str = "Hello World"

// var index = str.lastIndexOf("l")

// document.write("String: " + str + "<br>" + "Last Index of l: " + index)

// Q5

// var str = "Pakistani"

// var character = str.charAt(3)

// document.write("String: " + str + "<br>" + "Character at index 3: " + character)

// Q6

// var input1 = prompt("Enter your first name")
// var input2 = prompt("Enter your last name")

// var fullname = input1.concat(" " + input2)

// document.write( "Welcome to our website " + fullname)

// Q7

// var city1 = "Hyderabad"

// var city2 = city1.replace("Hyder" , "Islam")

// document.write(city2)

// Q8

// var text = "Ali and Sami are best friends. They play football and cricket together."

// var final = text.replaceAll("and","&")

// document.write(final)

// Q9

// var str = "472"

// document.write("Value: " + str + "<br>")
// document.write("Type: " + typeof str + "<br>")

// var num = Number(str)

// document.write("Value: " + num + "<br>")
// document.write("Type: " + typeof num)

// Q10

// var input = prompt("Enter a word")

// var final = input.toUpperCase()

// document.write(final)

// Q11

// var input = prompt("Enter a word:")

// var title = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()

// document.write("User input: " + input + "<br>")
// document.write("Title case: " + title)

// Q12

// var num = 35.36;

// var str = num.toString();
// var result = str.replace(".", "")

// document.write("Number: " + num + "<br>")
// document.write("Result: " + result)

// Q13

// var username = prompt("Enter a username")

// var isValid = true

// for (var i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i)
//     if (code == 33 || code == 44 || code == 46 || code == 64) {
//         isValid = false
//     }
// }

// if (isValid) {
//     document.write("Valid username: " + username)
// } else {
//     alert("Please enter a valid username")
// }

// Q14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]

// var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")

// var found = false
// var foundIndex = -1

// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() == order.toLowerCase()) {
//         found = true
//         foundIndex = i
//     }
// }

// if (found) {
//     document.write(order + " is <b>available</b> at index " + foundIndex + " in our bakery")
// } else {
//     document.write("We are sorry. " + order + " is <b>not available</b> in our bakery")
// }

// Q15

// var password = prompt("Enter a password")

// var hasLetter = false
// var hasNumber = false
// var isValid = true

// if (password.length < 6) {
//     isValid = false
//     document.write("Entered password: " + password + "<br>")
//     document.write("Password must be at least 6 characters long<br>")
//     document.write("Please enter a valid password")
// }

// var firstCode = password.charCodeAt(0)

// if (firstCode >= 48 && firstCode <= 57) {
//     isValid = false
//     document.write("Entered password: " + password + "<br>")
//     document.write("Password can not begin with a number<br>")
//     document.write("Please enter a valid password")
// }

// for (var i = 0; i < password.length; i++) {
//     var code = password.charCodeAt(i)
//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         hasLetter = true
//     }
//     if (code >= 48 && code <= 57) {
//         hasNumber = true
//     }
// }

// if (!hasLetter || !hasNumber) {
//     isValid = false
//     document.write("Entered password: " + password + "<br>")
//     document.write("Password must contain both alphabets and numbers<br>")
//     document.write("Please enter a valid password")
// }

// if (isValid) {
//     document.write("Entered password: " + password + "<br>")
//     document.write("Password is valid!")
// }

// Q16

// var university = "University of Karachi"

// var arr = university.split("")

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>")
// }

// Q17

// var input = prompt("Enter something")

// var lastChar = input.charAt(input.length - 1)

// document.write("User input: " + input + "<br>")
// document.write("Last character of input: " + lastChar)

// Q18

// var text = "The quick brown fox jumps over the lazy dog"

// var count = 0
// var lowerText = text.toLowerCase()
// var word = "the"
// var index = lowerText.indexOf(word)

// while (index !== -1) {
//     count++
//     index = lowerText.indexOf(word, index + 1)
// }

// document.write("Text: " + text + "<br>")
// document.write("There are " + count + " occurrence(s) of word 'the'")

// 26-30

// // Q1

// var num = Number(prompt("Enter a positive number"))

// document.write("number: " + num + "<br>")
// document.write("round off value: " + Math.round(num) + "<br>")
// document.write("floor value: " + Math.floor(num) + "<br>")
// document.write("ceil value: " + Math.ceil(num))

// Q2

// var num = Number(prompt("Enter a negative floating point number"))

// document.write("number: " + num + "<br>")
// document.write("round off value: " + Math.round(num) + "<br>")
// document.write("floor value: " + Math.floor(num) + "<br>")
// document.write("ceil value: " + Math.ceil(num))

// Q3

// var num = Number(prompt("Enter a number"))

// document.write("The absolute value of " + num + " is " + Math.abs(num))

// Q4

// var dice = Math.floor(Math.random() * 6) + 1

// document.write("random dice value: " + dice)

// Q5
// var coin = Math.floor(Math.random() * 2) + 1

// document.write(coin + "<br>")

// if (coin == 2) {
//     document.write("random coin value: Heads")
// } else {
//     document.write("random coin value: Tails")
// }

// Q6

// var num = Math.floor(Math.random() * 100) + 1

// document.write("random number between 1 and 100: " + num)

// Q7

// var input = prompt("Enter your weight in kilograms")

// var weight = parseFloat(input)

// document.write("The weight of user is " + weight + " kilograms")

// Q8

// var secret = Math.floor(Math.random() * 10) + 1

// var guess = Number(prompt("Enter a number between 1 and 10"))

// if (guess == secret) {
//     alert("Congratulations! You guessed it right!")
// } else {
//     alert("Try again!")
// }
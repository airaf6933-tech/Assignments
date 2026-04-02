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
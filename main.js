const date = document.getElementById("date")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

var today = new Date();

console.log(today)

const weekDays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
const allMonths = ["January" , "February" , "March" , "Aprill" , "May" , "June" , "Jully" , "August" , "September" , "October" , "November" , "December"]

date.innerHTML = today.getDate()
day.innerHTML = weekDays[today.getDay()]
month.innerHTML = allMonths[today.getMonth()]
year.innerHTML = today.getFullYear()
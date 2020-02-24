rows = parseInt(prompt("Enter number of rows desired:"))

columns = parseInt(prompt("Enter number of columns desired:"))


for (i = 1; i <= rows; i++) {
  document.write('*')
  for (j = 2; j <= columns; j++) {
    document.write('*')
}
document.write("<br>")
}
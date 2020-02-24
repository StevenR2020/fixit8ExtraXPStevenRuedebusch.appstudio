row = parseInt(prompt("Enter number of rows desired:"))

column = parseInt(prompt("Enter number of columns desired:"))


for (i = 1; i <= row; i++) {
  document.write('*')
  for (j = 2; j <= column; j++) {
    document.write('*')
}
document.write("<br>")
}
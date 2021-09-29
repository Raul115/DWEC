let n = prompt("Write a number greater than 100")
let correct
while (!correct) {
    if (n >= 100) {
        alert("Correct!")
        correct = true
    }
    else if (n == "" || n == null) {
        alert("Canceled")
    }
    else {
        n = prompt("Write the number again.")
    }
}

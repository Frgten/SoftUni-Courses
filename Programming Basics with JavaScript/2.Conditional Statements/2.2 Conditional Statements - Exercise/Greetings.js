function greetings(input) {

    let name = input[0];
    console.log(`Hello, ${name}!`);
}

greetings(['Daniel']);


// Напишете функция, която получава: име, фамилия, възраст и град и печата съобщение от следния вид: 
// "You are <firstName> <lastName>, a <age>-years old person from <town>."

function concatenateData(input) {
    let firstName = input[0]
    let lastName = input[1]
    let age = input[2]
    let town = input[3]

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}


concatenateData(['Daniel', 'Delchev', '24', 'Sofia'])
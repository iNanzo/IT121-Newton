const person = new Object();

person.firstName = "Newton";
person.lastName = "Hoang";
person.age = 25;
person.eyeColor = "Brown";

function getInfo(person) { 
    let info = "";

    for (let key in person) {
        info += `${key}: ${person[key]}\n`;
    }

    return info.trim();
}

console.log(getInfo(person));
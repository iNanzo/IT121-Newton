let car = {
    make: "Toyota",
    model: "Camry",
    year: 2018,
    color: "Gray",
};

function getInfo(car) { 
    let info = "";

    for (let key in car) {
        info += `${key}: ${car[key]}\n`;
    }

    return info.trim();
}

console.log(getInfo(car));
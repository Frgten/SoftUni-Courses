// Учебната година вече е започнала и отговорничката на 10Б клас - Ани трябва да купи определен брой пакетчета с химикали, пакетчета с маркери, както и препарат за почистване на дъска. Тя е редовна клиентка на една книжарница, затова има намаление за нея, което представлява някакъв процент от общата сума. Напишете програма, която изчислява колко пари ще трябва да събере Ани, за да плати сметката, като имате предвид следния ценоразпис: 
// ⦁	Пакет химикали - 5.80 лв. 
// ⦁	Пакет маркери - 7.20 лв. 
// ⦁	Препарат - 1.20 лв (за литър)
// Вход
// От конзолата се четат 4 числа:
// ⦁	Брой пакети химикали - цяло число в интервала [0...100]
// ⦁	Брой пакети маркери - цяло число в интервала [0...100]
// ⦁	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// ⦁	Процент намаление - цяло число в интервала [0...100]


function schoolSuplies(input) {
    let penPrice = 5.80
    let markerPrice = 7.20
    let detergentPrice = 1.20

    let penPacks = penPrice * Number(input[0]);
    let markerPacks = markerPrice * Number(input[1]);
    let detergentTotal = detergentPrice * Number(input[2]);

    let totalPrice = penPacks + markerPacks + detergentTotal
    let discount = 25 / 100
    let discountedPriceTotal = totalPrice - (totalPrice * discount);

    console.log(discountedPriceTotal);

}


schoolSuplies(['2', '3', '4', '25'])
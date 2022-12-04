console.log('at js 13')


// object literal for creating objects

let car={
    name: 'maruti 800',
    maxspeed: 100,
    run:function() {
        console.log('maruti vaga vaga chala gya')
    }
}
// console.log(car)

// we have already know about constructor

// new Date();

// Creating constructor for cars
function GeneralCar(name,topspeed) {
    this.myCar=name;
    this.mySpeed=topspeed;
    this.run= function () {
        console.log(`${this.myCar} is running`)
    };
    this.analyze= function () {
        console.log(`This car is moving slower by ${200-this.mySpeed}Kmph than Lamborgini`)
    }

}
// class GeneralCar {
//     constructor(name, topspeed) {
//         this.myCar = name;
//         this.mySpeed = topspeed;
//         this.run = function () {
//             console.log(`${this.myCar} is running`);
//         };
//         this.analyze = function () {
//             console.log(`This car is moving slower by ${200 - this.mySpeed}Kmph than Lamborgini`);
//         };

//     }
// }
carNew1=new GeneralCar('alto',40)
carNew2=new GeneralCar('swift',70)
console.log(carNew1,carNew2)
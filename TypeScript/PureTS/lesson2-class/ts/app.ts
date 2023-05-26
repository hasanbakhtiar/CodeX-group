class Car{
    public ibrand:string;
    public iyear:number;
    
    constructor(brand:string,year:number){
        this.ibrand=brand;
        this.iyear = year;
    }

    public calculateSpeed(km:number,hour:number) {
        return `${this.ibrand} speed is ${(km/hour).toFixed()}km/h`;
    }
}


var myCar = new Car("BMW",2022);
console.log(myCar.calculateSpeed(200,3));

class Moto extends Car{
    constructor(brand:string,year:number){
        super(brand,year);
    }
}
var myMoto = new Moto("Yamaha",2003);

console.log(myMoto.calculateSpeed(300,2));


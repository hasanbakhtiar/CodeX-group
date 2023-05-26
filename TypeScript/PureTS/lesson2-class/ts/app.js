var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, year) {
        this.ibrand = brand;
        this.iyear = year;
    }
    Car.prototype.calculateSpeed = function (km, hour) {
        return "".concat(this.ibrand, " speed is ").concat((km / hour).toFixed(), "km/h");
    };
    return Car;
}());
var myCar = new Car("BMW", 2022);
console.log(myCar.calculateSpeed(200, 3));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(brand, year) {
        return _super.call(this, brand, year) || this;
    }
    return Moto;
}(Car));
var myMoto = new Moto("Yamaha", 2003);
console.log(myMoto.calculateSpeed(300, 2));

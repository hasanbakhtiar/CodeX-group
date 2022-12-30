// Operators

// Assingment operators
// =
// +=
// -=
// *=
// /=
// %=
// **=

// var a = 5;
// // a**=10; 
// // a=a+10;
// console.log(a);

// +
// -
// *
// /
// %
// **
// ++
// --

// var a = 5;
// var b = 10;
// --a;
// console.log(a);

// ==
// !=
// ===
// !==
// <
// <=
// >
// >=

// var infoOne = "b";
// var infoTwo = "B";
// if (infoOne >= infoTwo) {
//     console.log('this operation is true');
// }else{
//     console.log('this operation is false');
// }


// Logical operators
// && - AND
// || - OR
// !  - NOT

// if (false || false || !true || false) {
//     console.log('this is true');
// }else{
//     console.log('this is false');
// }

// String operators
// +
// +=

// var infoOne = "Javascript";
// infoOne += " Hello";

// console.log(infoOne);


// --------------------------------------------------------------------------------------------------
// Other (Special) Operators (Xüsusi operatorlar) Start

// ,            (vergül)(kodları bir-birindən ayırmaq və sintaksis qanun uyğunluqları icra etmək üçündür )
// var a =5, b = 10;
// console.log(a,b);


// \            (tərs slash)(Qaçındırma operatorudur)
// var info = "JavaScript\"s Book";
// console.log(info); 

// typeof       (tip üçün)(datanın tipini təyin etmək üçündür)
// var a = true;
// console.log(typeof(a));
// ternary 
// ?:           (sual üst-üstə qoşa nöqtə)((şərt) ? ifadə1 : ifadə2)(ternary)
// 5<10 ? console.log('duzdu'):console.log('sehvdir');
// (5 <= 10) ? document.write("Hi") : document.write("Bye");
// şərt            ? true                 : false


// void         (dəyişkənin dəyərini undefined etmək üçündür)
// var a = 5;
// console.log(void(a));
// delete       (objectin dəyərini silmək üçündür)


// var info = {
//     name:"Jhone"
// }
// delete info.name
// console.log(info.name);



// new          (yeni dəyər yaratməq üçündür)
// class a{
//     constructor(name){
//         this.ad = name;
//     }
//     sayHi(){
//         return `Hello ${this.ad}`
//     }
// }

// var b = new a("Morgan");
// console.log(b.sayHi());
// this         (mövcud dəyəri işarələmək üçündür)
// in           (dəyişkənin(object) daxilində dəyərin olub olmamasını yoxlamaq üçündür)

// instanceof   (dəyişkənin(objectin xüsusiyyətinin) içində xüsusiyyət olub olmamasını yoxlamaq üçündür)





    

// Other (Special) Operators (Xüsusi operatorlar) End
// --------------------------------------------------------------------------------------------------



var a = 5,b=10;
var c = a*b;
c-5;
if (c**2 < 100 && !false) {
    console.log(true);
    
}else{
    console.log(false);
}



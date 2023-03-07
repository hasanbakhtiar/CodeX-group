

// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var      -> variable (global)
// const    -> constant (local)
// let      -> let      (local)

// global


// if (true) {
//     // local global
//     const a =5;

//     if (true) {
//         // local
//     console.log(a);

        
//     }

// }

// let a  = 5 ;
// a = 10;
// console.log(a);


// if - eger
// else - deyilse
// else if  - deyilse eger

// if (5>10) {
    
//     console.log('5 is little');
// }else{
//     console.log('10 is big');
// }



let myTime = 9;
  
if (myTime >5 && myTime <=10) {
    console.log('good morning');
    switch (myTime) {
        case 9:
            console.log('go to school');
            break;
    
        default:
            break;
    }
}else if(myTime > 10 && myTime <=17){
    console.log('good afternoon');
}else if(myTime > 17 && myTime <= 22){
    console.log('good evening');
}else if(myTime>22 && myTime <=23){
    console.log('good night');
}else{
    console.log('no time');
}


// var data = 5;

// switch(data){
//     case 5 : 
//     console.log("this is 5");
//     data = 20
//     if (data < 10) {
//         console.log(true);
//     }else{
//         console.log(false);
//     }
//     break;
//     case 15 : 
//     console.log("this is 15");
//     break;
//     case 25 : 
//     console.log("this is 25");
//     break;
//     case 35 : 
//     console.log("this is 35");
//     break;
//     case "Hello" : 
//     console.log("hello everyone");
//     break;
//     default :
//     console.log('this is default');
//     break;
// }



// const time = 5;


// const productOne = ['milk','cheese','bread']; 
// const productTwo = ['meal','holland cheese','german bread']; 
// const productThree = ['fanta','cheese','bread']; 
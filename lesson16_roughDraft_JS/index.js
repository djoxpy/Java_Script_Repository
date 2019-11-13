"use strict";

// const user = {
//     name: 'Ivan',
//     age: 22,
//     isAdmin: false,
//     ipConfig : {
//         ip : '123.23563.354.44',
//         DNS : 2544985455,
//         macAdres : 'dfhbgi54sgiu',
//     }
// };

// const deepCopy = (obj) => {
//     let newUser = {};
//     for(let key in obj) {
//         if (typeof obj[key] === "object") {
//             newUser[key] = deepCopy(obj[key]);
//         }
//         else {
//             newUser[key] = obj[key];
//         }
//     }
//     return newUser;
// };
// let newUser = deepCopy(user);
// console.log(newUser);

// console.log(user);






// const str = 'Simple String';
// const str1 = 'i\m \nIvan';

// console.log(str.toLowerCase());
// console.log(str1);
// console.log(str.length);
// console.log(str[2]);

// let add = 'Купить пива, попить пива';

// console.log(add.indexOf('пить'));
// console.log(add.slice(0, 7));
// console.log(add.slice(0, add.length));

// console.log('r'.codePointAt());
// console.log(' '.codePointAt());




// let arr = [1,2,3,4,2,4,32,5,3,2,1,2,2,666];

// arr.push('qqq');//добавление в конец массива
// arr.pop();//удаление с конца массива

// arr.unshift('zzz', 6 ,353535 , 35);//добавить в начало массива
// arr.shift();//удалить с начала массива

// const deleteElement = arr.pop();
// console.log(deleteElement);

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[arr.length -1]);

// arr[0] = 'ahahahahah';
// console.log(arr);

// delete arr[0];
// console.log(arr);

// let newArr = [];

// for (let i = 0; i<arr.length; i++) {
//     if (arr[i] !== 2) {
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr)




// let arr = [1,2,3,4,2,4,32,5,32,222,1,2,2,666];
// console.log(arr);

// const del = arr.splice(arr.length-2, 1, 'qqqq', 'ffffff'); // (индекс начала, кол-во удаления индексов, добавить элементы)
// console.log(del);

// const x = arr.map((item) => {
//     return item*10;
// }
// )

// console.log(x);

// let find = arr.find(num => num === 32);

// let filter = arr.filter(num => num === 32);

// console.log(find);//возвращает значение
// console.log(filter);//возвращает массив


// let newArr = arr.slice(2, 5);
// console.log(newArr);


// arr.sort(function(a,b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
// })

// console.log(arr);










// let arr = [1,2,3,4,5,];

// let x = [...arr].reverse();

// console.log(arr);
// console.log(x);

// let x = arr.join('*****');//преобразование массива в строку, аргумент - разделить между элементами

// let y = x.split('*****')//возвращает массив состоящий из строк, убирает разделитель

// let z = y.map((num) => +num);

// console.log(x);
// console.log(y);
// console.log(z);

// let x = arr.some(item => {
//     return item === 8;
// });
// console.log(x);


// const str = 'background-color';

// const camelize = (str) => {
//     if (typeof str === 'string') {
//         let arr = [str.split('-');
//         console.log(arr);

//         let modifLet = arr[1].split('');
//         console.log(modifLet);

//         let toUp = modifLet[0].toUpperCase();
//         console.log(toUp);

//         let joinArr = arr  + toUp;
//         console.log(joinArr);

//         let delFirst = modifLet.shift();
//         // console.log(delFirst);

//         console.log(modifLet);


//         let concat = toUp+modifLet;
//         console.log(concat);

//         let concat2 = arr[0]+concat;
//         console.log(concat2);

//         let delSymb = concat2.split(',');
//         console.log(delSymb);

//         let result = delSymb.join('');
//         console.log(result);
       
//     }
// }
// camelize('background-color-solor');





///

// const camelizeSecond = (str) => {
//     if (typeof str === 'string') {

//         let arr = str.split('-');
//         console.log(arr);  

//         let splitArr = arr.map((elem) => {
//             return elem.split('');
//         })
//         console.log(splitArr);

//         let separateArr = arr.map((elem) => {
//             return (elem.split('')).reverse();
//             // return elem.split('');
//         })
//         console.log(separateArr);
        
//         let modif = splitArr.map(function(elem) {
//                 // return (elem[separateArr.length-1]).toUpperCase();
//                 return elem[0].toUpperCase();
//             }
//         )
//         console.log(modif);

//         let deleteLast = separateArr.map((elem) => {
//             return .push();
//         })
//        console.log(deleteLast)

        

//     }
//     }

//     camelizeSecond('background-color-dolor-ghdfhdh');






    ////




    // let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    // function asort(arr) {
    //     const noAngram = new Map();
        
    //     arr.forEach((word) => {
    //         const key = word.toLowerCase().split('').sort((a, b) => a > b ? 1:-1).join(', ');
    //         noAngram.set(key, word);
    //     });

    //     return Array.from(noAngram.values());
    // };

    // console.log(asort(arr));





    // let users = {
    //     name: 'Andr',
    //     age: 666,
    //     id: 2045,
    //     isAdmin: false,
    //     delete: function(id) {
    //         return console.log('Ti v bane, id=' + id)
    //     }
    // };

    // console.log(Object.keys(users));
    // console.log(Object.values(users)[4](999));
    // console.log(Object.entries(users));








    // let userss = {
    //     "John": 100,
    //     "Pete": 300,
    //     "Mary": 250,
    //   };

    //   function sumSalaries(obj) {
    //     let sum = 0;
    //     const values = Object.values(obj);
    //     // console.log(values);
        
    //     values.forEach( (num) => {
    //         sum += num;
    //     });
    //     return sum;
    //   }
      
    //   console.log( sumSalaries(userss) );






    // let user = {
    //     name: "John",
    //     age: 30,
    //   };

    //   let {name, years = user.age, isAdmin = false} = user;
    
    // // console.log(user);
    // alert(name);
    // alert(years);
    // alert(isAdmin);


    //////









    // let start = new Date(); // начинаем отсчёт времени

    // // выполняем некоторые действия
    // for (let i = 0; i < 100000; i++) {
    //   let doSomething = i * i * i;
    // }
    
    // let end = new Date(); // заканчиваем отсчёт времени
    
    // alert( `Цикл отработал за ${end - start} миллисекунд` );




    // let date = new Date(2012, 1, 20, 3, 12);

    // function getWeekDate(date) {
    //     let week = date.getDay()
    //     switch(week) {
    //         case 0: 
    //         console.log('ВС');
    //         break

    //         case 1: 
    //          console.log('ПН');
    //          break

    //         case 2: 
    //          console.log('ВТ');
    //          break

    //         case 3: 
    //          console.log('СР');
    //          break

    //         case 4: 
    //          console.log('ЧТ');
    //          break

    //         case 5: 
    //          console.log('ПТ');
    //          break

    //         case 6: 
    //          console.log('СБ');
    //          break
    //     }
    // }
    // console.log(date)

    // getWeekDate(date)

    // let getDateAgo = (date, days) => {
    //     let ms = date.getTime();
    //     let msDays = days * 1000 * 60 * 60 * 24;
    //     let substr = ms - msDays;
    //     return new Date(substr);
    //     // console.log(newDateAgo);
    // }

    // console.log( getDateAgo(date, 1));
    // console.log( getDateAgo(date, 2));
    // console.log( getDateAgo(date, 365));

    






    // const timeout = setTimeout(() => alert("Privet"), 5000);

    // if (confirm("Da ili net")) {
    //     clearTimeout(timeout);
    // }



    // const timeout = setInterval(() => console.log("Privet"), 1000);

    // if (confirm("Da ili net")) {
    //     clearInterval(timeout);
    // }




    // let downLoadData = setTimeout(function qqq() {
    //     alert('hahaha');

    //     downLoadData = setTimeout(qqq, 2000);
    // }, 2000);

    // let x = setInterval((a, b) => {
    //     // if(i>=b) {
    //     //     clearInterval(timer);
    //     // }

    //     for(let i = a; i < b; i++) {
    //         console.log(i);
    //     }
    // }, 1000);

    // x(1, 10)


    // let timer = setInterval(x(1, 10) , 5000);


/////////







    


// let worker = {
//     someMethod() {
//       return 1;
//     },
  
//     slow(x) {
//       // здесь может быть страшно тяжёлая задача для процессора
//       alert("Called with " + x);
//       return x * this.someMethod(); // (*)
//     }
//   };
  
//   // тот же код, что и выше
//   function cachingDecorator(func) {
//     let cache = new Map();
//     return function(x) {
//       if (cache.has(x)) {
//         return cache.get(x);
//       }
//       let result = func.call(worker, ...[x]); // (**)
//       cache.set(x, result);
//       return result;
//     };
//   }
  
//   alert( worker.slow(1) ); // оригинальный метод работает
  
//   worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим
  
//   alert( worker.slow(2) ); 






////////////





// function work(a, b) {
//     alert( a + b ); // произвольная функция или метод
//   }
  
// function spy(func) {
    
//     function wrapper(...args) {
//         wrapper.calls.push(args)
//         return func.call(this, ...arguments);
//     }

//     wrapper.calls = [];
//     return wrapper;
    
// }

//   work = spy(work);
  
//   work(1, 2); // 3
//   work(4, 5); // 9
  
//   for (let args of work.calls) {
//     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
//   }




// function clg(x) {
//     console.log(x);
// }



// function debounce (func, ms) {
//     let isCanDo = true;

//     return function(...worddd) {
//         if (isCanDo) {
//         func.call(func, worddd);
//         isCanDo = false;
//         setTimeout(() => isCanDo = true, ms)
//     }
// }
// }


// let f = debounce(clg, 1000);

// f('dfkjnhjg'); // выполняется немедленно
// f('dfuhdfughiudf'); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 2110); // проигнорирован (прошло только 400 мс от последнего вызова)




/////////////



// const deepCopy = (obj) => {
//     let newUser = {};
//     for(let key in obj) {
//         if (typeof obj[key] === "object") {
//             newUser[key] = deepCopy(obj[key]);
//         }
//         else {
//             newUser[key] = obj[key];
//         }
//     }
//     return newUser;
// };



// function pow (x = +prompt('chislo', ''), n = +prompt('stepen', '')) {
//     let result = x;
//     if (x===0) alert(1); 
    
//     for(let i = 1; i<n; i++) {
//         result *= x;
//     }
//     alert(result)
// }

// pow()



//////////////






// let user = {
//     name: 'John',
//     surname: 'Trololo',
//     age: 25,
//     isAdmin: false,

//     get getFullName() {
//         return `${this.name} ${this.surname}`
//     },

//     set fullName (value) {
//         [this.name, this.surname] = value.split(" ")
        // const arr = value.split(' ');
        // this.name = arr[0];
        // this.surname = arr[1];
        // return arr;
//     },
// };

// console.log(user.getFullName);

// user.fullName = 'vladik desha'

// console.log(user.name);
// console.log(user.surname);








///////

// const isAdm = Object.getOwnPropertyDescriptor(user, 'isAdmin');

// Object.defineProperty(user, 'isAdmin', { // ---GETTER---
//     value: false,
//     configurable: false,
//     writable: false,
//     enumerable: true,
// })

// console.log(user);

// user.isAdmin = 'dfjbdfdfh';

// console.log(user);





///////////////////////




// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.firstElementChild.nextElementSibling.children);

// const table = document.body.firstElementChild.firstElementChild.children;

// let index = 0;

// [].map.call(table, (tr => {
//     tr.children[index].style.backgroundColor = 'red';
//     index += 1;
// }))

/////////////////////




// ените код Function Expression стрелочной функцией:



// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };

//   console.log(user);




// function isEmpty(obj) {
//     for (let key in obj) {
//         return false
//     }
//     return true
// }



// let schedule = {};

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) ); // false



// let salaries = {
//     John: 100,
//     Ann: 20,
//     Pete: 1,
//     fdgdf: 0.5,
//     // dfhiuh: 2974634,
//   };


// function sum(obj) {
//     let sum = 0;

//     for(let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }

// console.log( sum(salaries) )



////////////////





// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   } 
// }

// console.log(menu);

// multiplyNumeric(menu);

// console.log(menu);



//////////////////




// let calculator = {
//   a: null,
//   b: null,

//   read() {
//     this.a = +prompt('a?', '');
//     this.b = +prompt('b?', '');
//     return this.a, this.b;
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );




///////////////



// let ladder = {
//   step: 0,
//   up: function() {
//     this.step++;
//     return this;
//   },
//   down: function() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     console.log( this.step );
//   }
// };


// ladder.up().up().down().showStep(); 



//////////////////



// function Calculator() {
//   this.a = null;
//   this.b = null;

//   this.read = function() {
  
//     this.a = +prompt('a?', '');
//     this.b = +prompt('b?', '');
// };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
 
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


///////////////////

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//     this.num = +prompt('Сколько добавить?', '0');
//     return this.value += this.num;
//   };
// }

// let accumulator = new Accumulator(2); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

////////////////////////

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert( random(1, 2) );
// alert( random(1, 2) );
// alert( random(1, 2) );



////////////////////////////


// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.firstElementChild.nextElementSibling.children);

// const table = document.body.firstElementChild.firstElementChild.children;

// let index = 0;

// [].map.call(table, (tr => {
//     tr.children[index].style.backgroundColor = 'red';
//     index += 1;
// }))


////////////////////////

// const tab = document.getElementById('mainTable')
// console.log(tab);
// console.log(window.mainTable); //  !!!не используем!!!

// const tbody = tab.firstElementChild;


// const lis = document.querySelectorAll('li');
// console.log(lis);

// [].map.call(lis, (el => {
//   console.log(el.innerText);
// }));

// const lisLength = lis.length;
// console.log(lisLength);



//////////////////////

// function ucFirst(str) {
//   let newStr = str[0].toUpperCase() + str.slice(1);
//   console.log(newStr);
// }


// let ddd = 'dsgdfg';

// ucFirst(ddd);

// console.log(ddd)

//////

// function checkSpam(str) {
//   if (typeof str === 'string') {
//   let newStr = str.toLowerCase();
//   return(newStr.includes('viagra', 0) || newStr.includes('xxx', 0));
//   } else {
//     console.log('Это не строка');
//   };
// };

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));


////////////


// function truncate(str, maxlength = 20) {
//   return (str.length > maxlength) ? str.slice(0, maxlength) + '...' : str;
// };

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 0));



/////////////////



// function extractCurrencyValue(str) {
//   return +str.slice(1);
// };
// console.log( extractCurrencyValue('$120'));
// console.log( extractCurrencyValue('$120') === 120 );



//////////////////////////


// function sumInput() {
//   let arr = [];
//   let num = false;
//   let res = 0;

//   do {
//     num = +prompt('Введите число', 0);
//     arr.push(num);
//   } while (num);
//   console.log(arr)

//   for (const i of arr) {
//     res += i;
//   }
//   alert('Сумма равняется: ' + res);
// };

// sumInput();

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// console.log(arr[0] + arr[1])




////////////////////

// function camelize(str) {
//   return str
//   .split('-') 
//   .map(
//     (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//   )
//   .join('');
// };

// console.log( camelize("background-color") );
// console.log( camelize("list-style-image") );
// console.log( camelize("-webkit-transition") );



////////////////////////////////

// const div1 = document.querySelector('[data-widget-name]');
// console.log(div1);

// const divAttr = div1.getAttribute('data-widget-name');
// console.log(divAttr);

/////////////////////////////////


// let link = document.querySelector('a');
// link.style.color = 'orange';

// let selector = 'a[href*="://"]:not([href^="http://internal.com"])';

// let externalLink = document.body.querySelectorAll(selector);
// console.log(externalLink);

// externalLink.forEach(element => {
//     element.style.color = 'orange';
// });

// //////////////////////////////////
// const elem = document.body.querySelector('#elem');

// function clear(elem) {
//     elem.innerHTML = '';
//  }

//   clear(elem); // очищает список

////////////////////////////////////////////////



// function createList() {
//     let caption = document.createElement('h1');
//     caption.innerHTML = 'Создать список';
//     document.body.append(caption);

//     let ol = document.createElement('ol');
//     document.body.append(ol);
    
//     while(true) {     
//         let text = prompt('Введите текст для названия пункта', '');

//         if(!text) {
//             break;
//         };

//         let li = document.createElement('li');
//         li.textContent = text;
//         ol.append(li);
//     };
        
// };

// createList();


//////////////////////////////////


// function showNotification({top = 0, right = 0, className, html}) {
    

//     const notif = document.createElement('div');
//     notif.className = 'notification';
//     notif.classList.add(className);
    
//     notif.style.top = top + 'px';
//     notif.style.right = right + 'px';
//     notif.innerHTML = html;   
    
//     document.body.append(notif);

//     setTimeout(() => notif.remove(), 1500);
// }  

// //   showNotification({top: 10, right: 10, className: 'welcome', html: 'fdfddf'});
// let i = 0;

//   function qqq() {
//       setInterval(() => {
//         showNotification({top: 10, right: 10, className: "welcome", html: 'KYKY NAHYI ' + i++ + 'sec'});
//       }, 1000);
//   }

//   qqq();


//////////////////////////////

///////ООП///////



function sequence(start, step) {
    let x = start;
    let adder = step;

        return function () {
            x += adder;
            return x;
        };
};

const generator = sequence(10, 4);
// console.log(generator());
// console.log(generator());



function fizzbuzz(n) {
    for(let i = 0; i<=n; i++) {
        if (i%3===0 && i%5===0) {
            console.log(i);  
        }
        else if (i%3===0) {console.log(i);}
        else if (i%5===0) {console.log(i);}
        else {console.log(n);
        }
    }
}

// fizzbuzz(45);


function anagram(str1, str2) {
    const obj = {};
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');

    obj = { [sortedStr1]: str1, [sortedStr2]: str2};

    return Object.values(obj).length === 1;
};

// anagram('qwerty', 'zxcvbn')

const arr1 = [1, 3, 5, 6, 7, 2]

function map(fn, array) {
    const newArr = [];
    for( let i = 0; i < array.length ;i++) {
        newArr.push( fn(array[i]) );
    }

    return newArr;
};


function spliceCustom(arr, pos, deleteCount) {
    // let i = pos;
    for (pos; pos <= deleteCount; i++) {
        arr[pos].pop();
    }
    return arr;
}

// spliceCustom(arr1, 2, 2);



const tr = document.querySelector('.hidden');
tr.style.visibility = 'hidden';

const form = document.querySelector('.form');
form.addEventListener('submit', adder);

const id = document.querySelector('[name = id]');
const name = document.querySelector('[name = name]');
const surname = document.querySelector('[name = surname]');



function adder(e) {
    e.preventDefault();
    const id1 = id.value;
    const name1 = name.value;
    const surname1 = surname.value;
     
    
}




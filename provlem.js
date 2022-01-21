 function check() {
     var year = parseInt(document.getElementById('year').value);
     var msg = document.getElementById('msg')
     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
         msg.innerHTML = `Rupo said ${year} is a leap year`;
     } else {
         msg.innerHTML = `Rupo said ${year} is not a leap year`;
     }
 }
































































 // // program to check leap year
 // function checkLeapYear(year) {

 //     //three conditions to find out the leap year
 //     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
 //         console.log(year + ' is a leap year');
 //     } else {
 //         alert(year + ' is not a leap year');
 //     }
 // }

 // // take input


 // var total = checkLeapYear(2018);
 // console.log(total);
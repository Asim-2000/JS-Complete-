// function x() {
//     for (let i = 1; i <= 5; i++){
//         setTimeout(function () {
//             console.log(i);
//         },i*1000)
//     }
//     console.log("Namaste let Javascript (let makes a separate variable for each iteration due to block scope)")
// }
// x()

// function y() {
//     for (var i = 1; i <= 5; i++){
//         setTimeout(function () {
//             console.log(i);
//         },i*1000)
//     }
//     console.log("Namaste var Javascript (refrence to same variable each time)")
// }
// y()


function z() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
          setTimeout(function () {
            console.log(x);
          }, x * 1000);
        }
        close(i);  
    }
    console.log("Namaste var Javascript (refrence to different variable each time)");
         
        
}

z()
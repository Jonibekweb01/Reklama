// 1-Masala

// let array = [3, 5, 9, 12, 15];

// var arrayRedu = array.reduce((newArray, i) => {
//     if (i % 3 == 0 && i % 5 == 0) {
//         return newArray += "FizzBuzz";
//     }
//     if (i % 3 == 0) {
//         return newArray += "Fizz";
//     }
//     if (i % 5 == 0) {
//         return newArray += "Buzz";
//     }
// }, []);

// console.log(arrayRedu);

// 2-Masala

// let count = 1;
// const timeSet = setInterval(() => {
//     console.log(count++);
// }, 1000)

// setTimeout(() => {
//     clearTimeout(timeSet)
// }, 6000);

// const elInput = document.querySelector('input');
// const elForm = document.querySelector('form');

// elForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let inputVal = elInput.value;
//     let zero = setInterval(() => {
//         inputVal--;
//     }, 1000);

//     let res = setTimeout(() => {
//         clearInterval(zero)
//     }, inputVal * 1000);

//     console.log(res);
//     // setTimeout(() => {
//     // })
// })

// let elForm = document.querySelector('.js-form');
// let elInput = document.querySelector('.js-inp');
// let elResult = document.querySelector('.js-res');

// let count = 0;

// elForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let inpVal = elInput.value;

//     let setTime = setInterval(() => {
//         inpVal--;
//         elResult.textContent = inpVal;
//     }, 1000)
//     setTimeout(() => {
//         clearInterval(setTime);
//         elResult.textContent = inpVal;
//     }, inpVal * 1000)

// })
let elRun = document.querySelector('.js-run');
let elRes = document.querySelector('.js-res');

elRun.addEventListener('click', function () {
    elRun.style.opacity = "1";

    let setTime = setInterval(() => {
        elRes.textContent--;
    }, 1000);
    setTimeout(() => {
        clearInterval(setTime);
        elRes.textContent = "X";
    }, 5000);
    elRes.textContent == "X" ? elRun.style.display = "none" : "Qilinmadi"
})
let num = document.querySelector("div strong")
let btns = document.querySelectorAll(".btns button")
let decrease = document.querySelector("#decrease")
let reset = document.querySelector("#reset")
let increase = document.querySelector("#increase")

// let changeNum = function (e) {
//     if (e == "reset") {
//         num.innerHTML = "0"
//         num.style.color = "balck";
//     } else if (e == "increase") {
//         num.innerHTML = Number(num.innerHTML) + 1
//     } else{
//         num.innerHTML = Number(num.innerHTML) - 1
//     }
//     if (num.innerHTML > 0) {
//         num.style.color = "green"
//     } else if (num.innerHTML < 0) {
//         num.style.color = "red"
//     } else {
//         num.style.color = "black"
//     }
// }
// function getClickedButtonId(event) {
//     let clickedButton = event.target;
//     return changeNum(clickedButton.id);
// }
// increase.addEventListener("click", getClickedButtonId)
// decrease.addEventListener("click", getClickedButtonId)
// reset.addEventListener("click", getClickedButtonId)


btns.forEach((btn) => {
    btn.addEventListener("click", (id) => {
        const buttonId = id.target;
        if (buttonId.id == "increase") {
            num.innerHTML = Number(num.innerHTML) + 1;
        } else if (buttonId.id == "decrease") {
            num.innerHTML = Number(num.innerHTML) - 1;
        } else{
            num.innerHTML = 0;
        }
        if (num.innerHTML < 0) {
            num.style.color = "red";
        } else if (num.innerHTML > 0) {
            num.style.color = "green"
        } else {
            num.style.color = "black"
        }
    })
})
let sms = document.querySelector(".sms");
let pop = document.querySelector(".pop");
let btnpop = document.querySelector(".pop button");
let h1pop = document.querySelector(".pop h1");
let imjs = document.querySelector(".imjs");
let imj = document.querySelectorAll(".imjs span");
imj.forEach((x) => {
    x.onclick = () => {
        sms.value += x.innerHTML;
    }
})
function send() {
if (document.querySelector(".sms").value != "") {
    document.querySelector(".errs").innerHTML = ""
    pop.classList.add('popx')
    let time = window.setInterval(() => {
        h1pop.innerHTML--;
        if (h1pop.innerHTML == 0) {
            h1pop.innerHTML = 8;
            pop.classList.remove("popx");
            clearInterval(time);
        }
    }, 1000);
        
        fetch(`https://api.telegram.org/bot6632015469:AAGTwNTfYp7M-Rgjqih7NlXWeZXo7waluPU/sendMessage?chat_id=6662346056&text=${sms.value}`).then(res => res.json()).then(data => {
            document.querySelector(".errs").innerHTML = data.ok ? "done..." : "something error! try again";
        }).catch (err => document.querySelector(".errs").innerHTML = "check your internet!");
        sms.value = "";
        
} else {
    document.querySelector(".errs").innerHTML = "write a text please!"
}
}

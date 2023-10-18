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
        var prams = {
            name: "saraha",
            email: "asmaahmd7x@gmail.com",
            message: document.querySelector(".sms").value,
        };
        let service_id = "service_cb87tb5";
        let template_id = "template_ml3cair";
        emailjs.send(
            service_id, template_id, prams
        ).then(res => {
            document.querySelector(".sms").value = "";
            document.querySelector(".errs").innerHTML = "done ---"
        }) .catch (err => document.querySelector(".errs").innerHTML = "check your internet!");
} else {
    document.querySelector(".errs").innerHTML = "write a text please!"
}
}

const namee = document.getElementById("namee");
const number = document.getElementById("number");
const message = document.getElementById("message");
const form = document.getElementById("submit-form");
const btn = document.getElementById("btn");
const Email = document.getElementById("email");

const loading = document.getElementById("loading");

const nameL = document.getElementById("name-l");
const numberL = document.getElementById("number-l");
const messageL = document.getElementById("messageL");
const messL = document.getElementById("messageL");
const emailL = document.getElementById("email-l");

let val = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (namee.value === "") {
    nameL.innerText = "Name cannot be empty";
  } else if (/\d/.test(namee.value)) {
    nameL.innerText = "Name should be alphabets";
  } else {
    nameL.innerText = "";
  }

  if (number.value.length === 0) {
    numberL.innerText = "Number cannot be Empty";
  } else {
    numberL.innerText = "";
  }

  if (message.value === "") {
    messageL.innerText = "This field cannot be empty";
  } else {
    messageL.innerText = "";
  }
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (Email.value === "") {
    emailL.innerText = "This feild cannot be empty";
  } else if (Email.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
    emailL.innerText = "";
  } else {
    emailL.innerText = "Should use a valid email.";
  }

  if (
    namee.value === "" ||
    !isNaN(namee.value) ||
    number.value.length !== 10 ||
    message.value === "" ||
    Email.value === "" ||
    Email.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) == false ||
    /\d/.test(namee.value) == true
  ) {
    val = 1;
  } else {
    val = 0;
  }

  console.log(val + ">>>>>>>>>>>>>>>>>.");

  if (val == 0) {
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyBDN_AeZsAtss-TkPdwkEpvTwOBLcL4TEdi5XtrQ_uKfNRfq01w0-SLsVRr9HaCdfZ/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        },
        error:function (err){
            alert("Something Error")
        }
    })
  }
});

namee.addEventListener("input", (e) => {
  console.log("wer");
  if (namee.value === "") {
    nameL.innerText = "Name cannot be empty";
  } else if (/\d/.test(namee.value)) {
    nameL.innerText = "Name should be alphabets";
  } else {
    nameL.innerText = "";
  }
});

number.addEventListener("input", (e) => {
  console.log("jks");
  if (number.value.length > 10) {
    numberL.innerText = "Number should be a 10 digit number";
  } else {
    numberL.innerText = "";
  }
});

emailL.addEventListener("input", (e) => {
  if (Email.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
    emailL.innerText = "";
  } else {
    emailL.innerText = "Should use a valid email.";
  }
});

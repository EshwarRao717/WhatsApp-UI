const messages = document.getElementById("messages");
const input = document.getElementById("msgInput");
const chatName = document.getElementById("chatName");

function sendMsg(){
let text = input.value.trim();

if(text === "") return;

let div = document.createElement("div");
div.classList.add("msg","right");

let time = new Date().getHours() + ":" + 
String(new Date().getMinutes()).padStart(2,'0');

div.innerHTML = text + "<span>"+time+"</span>";

messages.appendChild(div);

input.value = "";

messages.scrollTop = messages.scrollHeight;
}

function openChat(name){
chatName.innerText = name;

messages.innerHTML = `
<div class="msg left">Hello ${name}!<span>10:00</span></div>
<div class="msg right">Hi 👋<span>10:01</span></div>
`;

document.querySelectorAll(".chat").forEach(chat=>{
chat.classList.remove("active");
});

event.currentTarget.classList.add("active");
}

/* Search */

document.getElementById("searchInput").addEventListener("keyup",function(){

let val = this.value.toLowerCase();

document.querySelectorAll(".chat").forEach(chat=>{

let name = chat.innerText.toLowerCase();

chat.style.display = name.includes(val) ? "flex" : "none";

});

});
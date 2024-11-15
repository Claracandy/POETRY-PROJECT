alert()
document.title = "my webpage"
document.body.style.backgroundColor="green"



const username = "poetry code ";
const welcomemsg = document.getElementById("welcome-msg");
welcomemsg.textContent += username === "" ? 'Guest' : username;


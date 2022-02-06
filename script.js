

//var socket = io('http://localhost:3000');
var socket = io('/');

var audio_recieve = new Audio('I Phone Sms Notification.mp3');
//var audio_sent=new Audio('Samsung notification sound - Telepathy.mp3')
document.getElementById('form').addEventListener('submit',(e)=>{
e.preventDefault();
const name=document.getElementById('Name').value;
const messagee=document.getElementById('text').value;

socket.emit('message',name,messagee)
//audio_sent.play();
//displaymessage(name,messagee)

})



socket.on('recieve',(name,messagee)=>{
    displaymessage(name,messagee)
    audio_recieve.play();
})








function displaymessage(name,messagee)
{
    const h1=document.createElement('code');
    
h1.innerHTML=`

${name} :  ${messagee}</br>
`
const message=document.querySelector('.message');
message.appendChild(h1);
document.getElementById('text').value='';
document.getElementById('text').focus();
}



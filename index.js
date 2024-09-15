var quotes= [
{quote : " Be yourself; everyone else is already taken"},
{quote:"'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my wors"},
{quote:"So many books, so little time"},
{quote:"A room without books is like a body without a soul."},
{quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"},
{quote:"You only live once, but if you do it right, once is enough.”"},
{quote:"the change that you wish to see in the world.”"}]
var lastgeneratednumber;
var alreadyDisplayed=[]
function getquote(){
if(alreadyDisplayed.length==quotes.length)
{alreadyDisplayed=[]}
do{var newGeneratedNumber=Math.floor(Math.random()*quotes.length)}
while(lastgeneratednumber==newGeneratedNumber || alreadyDisplayed.includes(newGeneratedNumber))
    lastgeneratednumber=newGeneratedNumber;
alreadyDisplayed.push(newGeneratedNumber);
console.log(alreadyDisplayed);
console.log(newGeneratedNumber);
document.getElementById("gg").innerHTML=quotes[newGeneratedNumber].quote




} 

















""
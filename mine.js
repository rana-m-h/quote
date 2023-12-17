
var quoteContent = document.getElementById("quote")
var author = document.getElementById("name")



var quote=[


{
advice:'“Be yourself; everyone else is already taken.”',
name:'- Oscar Wilde',

},
{
advice:'“So many books, so little time.”',
name:'― Frank Zappa',

},
{
advice:'“A room without books is like a body without a soul.”',
name:'― Marcus Tullius Cicero',

},
{
advice:'“You only live once, but if you do it right, once is enough.”',
name:'― Mae West',

},
{
advice:'“Be the change that you wish to see in the world.”',
name:'― Mahatma Gandhi',

},
{
advice:'“If you tell the truth, you dont have to remember anything.”',
name:'― Mark Twain',

},

]


var oldIndex;

function quotes(){
 
var random=Number.parseInt(Math.random()*quote.length);
while(oldIndex==random)
    random=Number.parseInt(Math.random()*quote.length);

oldIndex = random

quoteContent.innerHTML = quote[random].advice
author.innerHTML = quote[random].name




} 
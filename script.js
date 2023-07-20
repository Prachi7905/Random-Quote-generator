const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetButton=document.getElementById("tweet");

const getNewQuote = async () =>
{
    
    var url="https://type.fit/api/quotes";    


    const response=await fetch(url);
    console.log(typeof response);
    const allQuotes = await response.json();


    const indx = Math.floor(Math.random()*allQuotes.length);

    const quote=allQuotes[indx].text;


    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }


    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;
}
getNewQuote();
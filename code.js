function roll()
{
    var n=Math.floor(Math.random()*6)+1;
    var randomimg="images/dice"+n+".png"
    document.querySelector("#d1").setAttribute("src",randomimg);
    var m=Math.floor(Math.random()*6)+1;
    var randomimg="images/dice"+m+".png"
    document.querySelector("#d2").setAttribute("src",randomimg);
    if(n>m)
    {
        document.querySelector("#message").innerHTML="Congrats🥳 Player 1 Won🎉🎉";
    }
    else if(n==m)
    {
        document.querySelector("#message").innerHTML="😒 Match Draw 😒";
    }
    else
    {
        document.querySelector("#message").innerHTML="Congrats🥳 Player 2 Won🎉🎉";
    }

}
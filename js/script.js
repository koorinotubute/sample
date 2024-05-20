
$("button").bind("click",function(){

    const textList = document.getElementsByClassName("text");
    let startTag = "<p class='message'>";
    let endTag = "</p>";

    let element = startTag + textList.item(0).value + "<br>"+textList.item(1).value +"<br>"+textList.item(2).value +"<br>"+"　　　　貴族マロン"+
    endTag;
    
    $(".sheet").append(element);

});

//$("button").bind("hover",function(){

   // $("img/詠む2.gif").removeClass("hide");
//});
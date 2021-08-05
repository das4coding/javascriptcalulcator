//var txtbox = document.getElementById("txtbox");
function loadfunc(){
    document.getElementById("txtbox").value = "";
    num1 = undefined;
    num2 = undefined;
}

//button 0
document.getElementById("btn0").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 0;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value += 0;
    }
    

});


//button 00
document.getElementById("btn00").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 00;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value += 00;
    }
    ;

});


//button 000
document.getElementById("btn000").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 000;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value +=000;
    }
    

});



//button 1
document.getElementById("btn1").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 1;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value += 1;
    }
    

});

//button 2
document.getElementById("btn2").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 2;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value += 2;
    }
    

});

//button 3
document.getElementById("btn3").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 3;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value += 3;
    }
    

});

//button 4
document.getElementById("btn4").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 4;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value += 4;
    }
    
});

//button 5
document.getElementById("btn5").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 5;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value += 5;
    }
    

});

//button 6
document.getElementById("btn6").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 6;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value += 6;
    }
    

});

//button 7
document.getElementById("btn7").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 7;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value += 7;
    }
    

});


//button 8
document.getElementById("btn8").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 8;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value += 8;
    }
    
});

//button 9
document.getElementById("btn9").addEventListener("click",function(){
    if(num2 == undefined){
        document.getElementById("txtbox").value += 9;
    }
    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").value += 9;
    }
    

});


//button clear
document.getElementById("btnclear").addEventListener("click",function(){
    document.getElementById("txtbox").value = "";
    num1 = undefined;
    num2 = undefined;

});

var num1 ;
var num2;
var opt = "";

//addition 
document.getElementById("btnplus").addEventListener("click",function(){
    
    if  (num1 == undefined )
    {//alert("num1 "+num1);
        
        num1 = parseFloat(document.getElementById("txtbox").value);
        document.getElementById("txtbox").value = "";
    }
    
    else if(num1 != undefined)
    {
        num2 = parseFloat(document.getElementById("txtbox").value);
        num1 = document.getElementById("txtbox").value = num1 + num2;
        
    }

    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        num2 = document.getElementById("txtbox").value = num1 + num2;
    }
});

//minus 
document.getElementById("btnmin").addEventListener("click",function(){
    
    if  (num1 == undefined )
    {//alert("num1 "+num1);
        
        num1 = parseFloat(document.getElementById("txtbox").value);
        document.getElementById("txtbox").value = "";
    }
    
    else if(num1 != undefined)
    {
        num2 = parseFloat(document.getElementById("txtbox").value);
        num1 = document.getElementById("txtbox").value = num1 - num2;
        
    }

    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        num2 = document.getElementById("txtbox").value = num1 - num2;
    }
});


//multi 
document.getElementById("btnmulti").addEventListener("click",function(){
    
    if  (num1 == undefined )
    {//alert("num1 "+num1);
        
        num1 = parseFloat(document.getElementById("txtbox").value);
        document.getElementById("txtbox").value = "";
    }
    
    else if(num1 != undefined)
    {
        num2 = parseFloat(document.getElementById("txtbox").value);
        num1 = document.getElementById("txtbox").value = num1 * num2;
        
    }

    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        num2 = document.getElementById("txtbox").value = num1 * num2;
    }
});



//div 
document.getElementById("btndiv").addEventListener("click",function(){
    
    if  (num1 == undefined )
    {//alert("num1 "+num1);
        
        num1 = parseFloat(document.getElementById("txtbox").value);
        document.getElementById("txtbox").value = "";
    }
    
    else if(num1 != undefined)
    {
        num2 = parseFloat(document.getElementById("txtbox").value);
            num1 = document.getElementById("txtbox").value = num1 / num2;
        
    }

    else if(num2 != undefined)
    {
        document.getElementById("txtbox").value = "";
        num2 = document.getElementById("txtbox").value = num1 / num2;
    }
});


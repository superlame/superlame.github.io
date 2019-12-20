$(document).ready(function(){

    var money = 0;
    var credit = 0;
    
    var balls = {
        
        red: 0,
        blue: 0,
        yellow: 0,
        green: 0,
        purple: 0
        
    }
 
    
    //CLICK TO GAIN MONEY
$("#gain").click(function(){
    
    money = money + 1;
    
 $("#money").html("$" + numberformat.format(money));
    
})
    
    
    //GAIN CREDIT
    
$("#insert").click(function(){
  
    if(money >= 10) {
        
        money = money - 10;
        credit = credit + 1;
        
         $("#money").html("$" + numberformat.format(money));
         $("#credit").html("Credit: " + numberformat.format(credit));
    }
    
})
    
    //ROLL 4 GUMBALL

$("#roll").click(function(){
    
  if(credit >= 1) {
   
      credit = credit - 1;
      $("#credit").html("Credit: " + numberformat.format(credit));

      var result = Math.floor((Math.random() * 5) + 1);
     
      if (result === 1) {
          
         //   $("#result").html("Result: " + "Red");
          $("#circle").css("background-color","red");

          balls.red = balls.red + 1;
          
      }       if (result === 2) {
          
          //  $("#result").html("Result: " + "Blue");
           $("#circle").css("background-color","blue");

          balls.blue = balls.blue + 1;
          
      }       if (result === 3) {
          
          //  $("#result").html("Result: " + "Yellow");
           $("#circle").css("background-color","yellow");

          balls.yellow = balls.yellow + 1;
          
      }      if (result === 4) {
          balls.green = balls.green + 1;
          
          //  $("#result").html("Result: " + "Green");
           $("#circle").css("background-color","green");

      }      if (result === 5) {
          balls.purple = balls.purple + 1;
          
         //   $("#result").html("Result: " + "Purple");
           $("#circle").css("background-color","purple");

      }
      
      console.log(result)
  
      //UPDATE COLLECTION
      $("#redcount").html(balls.red);
      $("#bluecount").html(balls.blue);
      $("#yellowcount").html(balls.yellow);
      $("#greencount").html(balls.green);
      $("#purplecount").html(balls.purple);

      
      
  }
    
})
    
    
    
});

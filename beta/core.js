$(function(){

  var seedcreated = false;

  var user = {
    u: 0,
    x: 0,
    tick: 1000,
    click: 10,
    max: 25,
    auto: 0
  }

  var settings = {
    theme: 1
  }

  var t1a = {
    cost: 30,
    check: false
  }

  var t2a = {
    cost: 75,
    check: false
  }

  var t1c = {
    cost: 25,
    check: false
  }

  var t2c = {
    cost: 50,
    check: false
  }

  var t3c = {
    cost: 450,
    check: false
  }

  var t1m = {
    cost: 250,
    check: false
  }

  var t1s = {
    cost: 150, //x
    check: false
  }


  var settingsopen = false;


  //TIME FOR MESSY CODE

  // MATTER CONVERTER (ALSO HACKY)
  var uinput = document.getElementById("converter-input")
  var uivalue = 0

  $("#convert").click(function(){
    convert()
  })

  var matteroutput = 0;

  function convert() {
    uivalue = document.getElementById("converter-input").value
    uinput.value = '';
    if (user.u >= uivalue) {
      user.u -= uivalue;
      matteroutput = Math.ceil(uivalue/5);
      $("#xoutput").html(matteroutput);
      user.x += matteroutput;
      $("#x").html(user.x);
      update()
    }
  }

  $("#settings").click(function(){
    if (settingsopen === false) {
    $("#settingspane").fadeIn("fast")
    settingsopen = true;
  } else {
    $("#settingspane").fadeOut("fast")
    settingsopen = false;
  }

  })

  $("#theme").click(function(){
    if (settings.theme === 1) {
      $(this).html("DARK");
      $("link[rel=stylesheet]").attr({href : "dark.css"});
      settings.theme = 2;
    } else {
      $(this).html("LIGHT");
      $("link[rel=stylesheet]").attr({href : "styles.css"});
      settings.theme = 1;
    }
  })

  //AUTOMATIC GENERATION

  setInterval(function(){
    if (user.auto >= 1 && user.u+user.auto < user.max) {
      user.u += user.auto;
      update();
    }
  },user.tick)

  //UNLOCK THINGS

function check() {
  if (user.u >= t1a.cost && t1a.check === false) {
    $("#t1a").removeClass("locked");
    $("#t1a").addClass("unlocked");
  } else {
    $("#t1a").removeClass("unlocked");
    $("#t1a").addClass("locked");
  }

  if (user.u >= t2a.cost && t2a.check === false) {
    $("#t2a").removeClass("locked");
    $("#t2a").addClass("unlocked");
  } else {
    $("#t2a").removeClass("unlocked");
    $("#t2a").addClass("locked");
  }


  if (user.u >= t1c.cost && t1c.check === false) {
    $("#t1c").removeClass("locked");
    $("#t1c").addClass("unlocked");
  }

  if (user.u >= t2c.cost && t2c.check === false) {
    $("#t2c").removeClass("locked");
    $("#t2c").addClass("unlocked");
  } else {
    $("#t2c").removeClass("unlocked");
    $("#t2c").addClass("locked");
  }

  if (user.u >= t3c.cost && t3c.check === false) {
    $("#t3c").removeClass("locked");
    $("#t3c").addClass("unlocked");
  } else {
    $("#t3c").removeClass("unlocked");
    $("#t3c").addClass("locked");
  }

  if (user.x >= t1s.cost && t1s.check === false) {
    $("#t1s").removeClass("locked");
    $("#t1s").addClass("unlocked");
  } else {
    $("#t1s").removeClass("unlocked");
    $("#t1s").addClass("locked");
  }

  if (user.u >= t1m.cost && t1m.check === false) {
    $("#t1m").removeClass("locked");
    $("#t1m").addClass("unlocked");
  } else {
    $("#t1m").removeClass("unlocked");
    $("#t1m").addClass("locked");
  }


}

  setInterval(function(){
      check()
  },1)

  //MAX CAPACITY

  setInterval(function(){
    if (user.u >= user.max) {
      $("#funds").addClass("full")
    } else {
      $("#funds").removeClass("full")
    }
  },1)

  function update() {
    $("#count").html(user.u)
    $("#auto").html(user.auto)
    $("#max").html(user.max)
    $("#x").html(user.x);
  }

  $("#more").mousedown(function(){

    if (user.u < user.max) {
    user.u += user.click;
  }
    update()

  })

  //PURCHASE

  $("#t1s").click(function(){
    if (user.x >= t1s.cost && t1s.check === false) {
    user.x -= t1s.cost;
    t1s.check = true;
    $(this).removeClass("unlocked")
    $(this).addClass("locked")
    $(this).html("PURCHASED")
    $("#bottomright").fadeIn("fast");
    update()
  }
  })

  $("#t1c").click(function(){
    if (user.u >= t1c.cost && t1c.check === false) {
      t1c.check = true;
      $(this).removeClass("unlocked")
      $(this).addClass("locked")
      $(this).html("PURCHASED")
      user.u -= t1c.cost;
      user.max = 50;
      $("#ah1").show()
      $("#t1a").show()
      $("#mch").show()
      $("#t1m").show()
      $("#t1a").removeClass("unlocked")
      $("#t1a").addClass("locked")
      $("#log1c").fadeIn()
      update()
    //  setTimeout(function(){
        $("#t2c").show();
    //  },1000)
    }
  })

  $("#t1m").click(function(){
    if (user.u >= t1m.cost && t1m.check === false) {
    t1m.check = true;
    user.u -= t1m.cost;
    $(this).removeClass("unlocked")
    $(this).addClass("locked")
    $(this).html("PURCHASED")
    $("#sch").fadeIn()
    $("#t1s").fadeIn()
    $("#converter").fadeIn()
    update()
  }
  })

  $("#t2c").click(function(){
    if (user.u >= t2c.cost && t2c.check === false) {
      t2c.check = true;
      $(this).removeClass("unlocked")
      $(this).addClass("locked")
      $(this).html("PURCHASED")
      user.u -= t2c.cost;
      user.max = 500;
      $("#t3c").fadeIn()
      //$("#log2c").fadeIn()
      update()
    }
  })

  $("#t3c").click(function(){
    if (user.u >= t3c.cost && t3c.check === false) {
      t3c.check = true;
      $(this).removeClass("unlocked")
      $(this).addClass("locked")
      $(this).html("PURCHASED")
      user.u -= t3c.cost;
      user.max = 2500;
      //$("#log2c").fadeIn()
      update()
    }
  })


  $("#t1a").click(function(){
    if (user.u >= t1a.cost && t1a.check === false) {
      t1a.check = true;
      $(this).removeClass("unlocked")
      $(this).addClass("locked")
      $(this).html("PURCHASED")
      $("#t2a").fadeIn()
      user.u -= t1a.cost;
      user.auto += 1;
      check()
      $("#log1a").fadeIn()
      update()
    }
  })

  $("#t2a").click(function(){
    if (user.u >= t2a.cost && t2a.check === false) {
      t2a.check = true;
      $(this).removeClass("unlocked")
      $(this).addClass("locked")
      $(this).html("PURCHASED")
      //$("#t3a").fadeIn()
      user.u -= t2a.cost;
      user.auto += 5;
      check()
      update()
    }
  })

  //HORRIFYINGLY HACKY GAMBLING SYSTEM

  var betplaced = false;
  var seedcreated = false;
  var withdrawn = false;

  var bet = 0;
  var seed = 0;
  var target = 0;
  var match = 0;
  var reward = 0;

  $("#generate-seed").click(function(){
    $(this).attr("disabled","true");
    $(this).removeClass("cursorpointer");
    gseed();
    win();
  })

  function randomStr(len, arr) {
      var ans = '';
      for (var i = len; i > 0; i--) {
          ans +=
            arr[Math.floor(Math.random() * arr.length)];
      }
      return ans;
  }


  $("#place-bet").click(function(){
    bet = document.getElementById("bet").value;
    var input = document.getElementById("bet")

      if (bet.length > 0 && user.x >= bet) {
          input.value = '';
          $("#userbet").html(bet)
          $("#roll").removeAttr("disabled");
          $("#roll").addClass("cursorpointer");
          betplaced = true;
          user.x -= bet;
          update()
        }
  })

  var targetroll = false;

  function rolltarget() {
    target = randomStr(1, 'ABCDE');
    targetroll = true;
    $("#target").html(target)

    $("#roll").attr("disabled","true");
    $("#roll").removeClass("cursorpointer");

    $("#generate-seed").removeAttr("disabled");
    $("#generate-seed").addClass("cursorpointer");

  }

  function win() {

    if (match === 0) {
      $("#reward").html("Oops, you lost :(");
      $("#withdraw").html("Shame");
      //$("#withdraw").removeAttr("disabled");
      //$("#withdraw").addClass("cursorpointer");
      $("#withdraw").click(function(){

        resetgamble();

      })
    } else {
      $("#withdraw").click(function(){
        if (reward > 0) {
        user.x += reward;
        update();
        resetgamble();
      }
      withdrawn = true;
      $(this).attr("disabled","true");
      $(this).removeClass("cursorpointer");

      })
    }

    if (match === 1) {
      reward = Math.ceil(bet*1.5);
      $("#reward").html("You got 1 match! (+" + reward + ")")
    }

    if (match === 2) {
      reward = Math.ceil(bet*1.75);
      $("#reward").html("You got 2 matches! (+" + reward + ")")
    }

    if (match === 3) {
      reward = Math.ceil(bet*2);
      $("#reward").html("You got 3 matches! (+" + reward + ")")
    }

    if (match === 4) {
      reward = Math.ceil(bet*4);
      $("#reward").html("You got 4 matches! (+" + reward + ")")
    }

    if (match === 5) {
      reward = Math.ceil(bet*10);
      $("#reward").html("You got 5 matches! (+" + reward + ")")
    }

    if (seedcreated === true) {
      $("#withdraw").removeAttr("disabled");
      $("#withdraw").addClass("cursorpointer");
    }
  }

  function resetgamble() {
    betplaced = false;
    seedcreated = false;
    withdrawn = false;

    bet = 0;
    seed = 0;
    target = 0;
    match = 0;
    reward = 0;

    $("#reward").html("???");
    $("#withdraw").html("Withdraw");
    $("#withdraw").attr("disabled","true");
    $("#withdraw").removeClass("cursorpointer");
    $("#generate-seed").attr("disabled","true");
    $("#generate-seed").removeClass("cursorpointer");
    $("#seed").html("");
    $("#target").html("?");
    $("#userbet").html("0");

  }


  $("#roll").click(function(){
    rolltarget()
  })

  function gseed() {
    seed = randomStr(5, 'ABCDE');
    seedcreated = true;
    $("#seed").html(seed);
    match = seed.split(target).length-1;
    $("#withdraw").removeAttr("disabled");
    $("#withdraw").addClass("cursorpointer");

  }


/*  setInterval(function(){
    if (seedcreated === true) {
      $("#generate-seed").attr("disabled","true");
      $("#generate-seed").removeClass("cursorpointer");
    }

    if (seedcreated === false && targetroll === true) {
      $("#generate-seed").removeAttr("disabled");
      $("#generate-seed").addClass("cursorpointer");
    }

    if (betplaced === false) {
      $("#roll").attr("disabled","true");
      $("#roll").removeClass("cursorpointer")
    }
    if (targetroll === false && betplaced === true) {
      $("#roll").removeAttr("disabled");
      $("#roll").addClass("cursorpointer");
    }

  },1) */


})

$(".test2").hide();

$(".submit").click(function(){
let age = Number($(".age").val());
let level = $(".Plevel").val();
    
    if( age <= 16&&level ==="Weak"||level==="weak"||level==="WEAK"){
        $(".output").text("You're An EnderDragon");
         $(".character").attr("src", "https://i.redd.it/hu8z7fmwrqw41.png");
    } else if( age >= 16&&level ==="Weak"||level==="weak"||level==="WEAK"){
        $(".output").text("You're An EnderDragon");
         $(".character").attr("src", "https://i.redd.it/hu8z7fmwrqw41.png");
    } else if (age >=16&&level ==="Godly"||level ==="godly"||level ==="GODLY"){
        $(".output").text("You're Dr.Eggman");
         $(".character").attr("src", "https://img.cinemablend.com/quill/4/3/0/a/7/7/430a77af25e111d715c2a65cf4b9ed09196529fa.jpg");
    } else if (age <=16&&level ==="Godly"||level ==="godly"||level ==="GODLY"){
        $(".output").text("You're Dr.Eggman");
         $(".character").attr("src", "https://img.cinemablend.com/quill/4/3/0/a/7/7/430a77af25e111d715c2a65cf4b9ed09196529fa.jpg");
    } else if (age >=16&&level ==="Boss"||level ==="boss"||level ==="BOSS"){
        $(".output").text("You're Bowser");
         $(".character").attr("src", "https://images.nintendolife.com/729d61e20f031/super-mario-3d-world-plus-bowsers-fury.original.jpg");
    } else if (age <=16&&level ==="Boss"||level ==="boss"||level ==="BOSS"){
        $(".output").text("You're Bowser");
         $(".character").attr("src", "https://images.nintendolife.com/729d61e20f031/super-mario-3d-world-plus-bowsers-fury.original.jpg");
    } else if (age >=16&&level ==="Powerful"||level ==="powerful"||level ==="POWERFUL"){
        $(".output").text("You're King DeDeDe");
         $(".character").attr("src", "https://www.vippng.com/png/detail/242-2427548_niment-king-dedede.png");
    } else if (age <=16&&level ==="Powerful"||level ==="powerful"||level ==="POWERFUL"){
        $(".output").text("You're King DeDeDe");
         $(".character").attr("src", "https://www.vippng.com/png/detail/242-2427548_niment-king-dedede.png");
    } else if (age >=16&&level ==="Strong"||level ==="strong"||level ==="STRONG"){
        $(".output").text("You're Joker");
         $(".character").attr("src", "https://www.qualitycomix.com/images/size_l/news-000008.jpg");
    } else if (age <=16&&level ==="Strong"||level ==="strong"||level ==="STRONG"){
        $(".output").text("You're Joker");
         $(".character").attr("src", "https://www.qualitycomix.com/images/size_l/news-000008.jpg");
    } 
});

$(".reset").click(function(){
    $(".test").hide();
     $(".test2").show();
 	  $(".character").attr("src","https://www.stephenchamberlain.net/wp-content/uploads/2018/06/what-every-villain-needs.jpg");
});


//
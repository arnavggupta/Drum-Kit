
var lengthy=document.querySelectorAll(".drum").length;
for(var i=0;i<lengthy;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var buttonname=this.innerHTML;

   switch(buttonname){
case "w":
    var carsh1= new Audio("sounds/crash.mp3");
    carsh1.play();
    break;

case "a":
    var kick= new Audio("sounds/kick-bass.mp3");
kick.play();
    break;

    case "s":
        var snare= new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case "d":
        var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "j":
        var tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
            default: console.log("aap nhi hoge print");

   }
animation(buttonname);

});

}
document.addEventListener("keydown", function(event){
 var keyname=event.key; 
 switch(keyname){
    case "w":
        var carsh1= new Audio("sounds/crash.mp3");
        carsh1.play();
        break;
    
    case "a":
        var kick= new Audio("sounds/kick-bass.mp3");
    kick.play();
        break;
    
        case "s":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
            case "d":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
            case "j":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
            case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        
                default: console.log("aap nhi hoge print");
    
       }
    
  animation(keyname);
  
  
  
  })



function animation(currentkey){ 

    var activebutton =document.querySelector("."+ currentkey);
    activebutton.classList.add("pressed");


    //  yaha par timeout funcn jo aaya hai vo 100 milisecond baad jo function hai usko activate kr rhaa hai yaha jaise maine 100 dala hai aap uski jagh kuch aur bhi dal skte ho ;
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 200);
}



// /  yaha jo this hai hai vo har ek ki tag ko represent krke bata rha hai hai jitne bhi yaha mere query select se select hue hai inke 
    //  simpler words mai jo bhi button trgeered ho raha hai this uski identity ko bata raha ha boss;    


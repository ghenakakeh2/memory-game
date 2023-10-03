
addnewresult();
document.querySelector(".control-buttons span").onclick=function(){
    let yourname=prompt("Whates your name?");
  
    // if(yourname.valueOf()!=='null'){
    //     document.getElementById('suspense').play();

    // }
   
    
   if(yourname===''||yourname===null){
    yourname="unkown";
    
   }

   
   
   document.querySelector(".info-continer .name span").innerHTML=yourname;
   
   document.querySelector(".control-buttons ").remove();
}




//time to flip the   card
let durretion=1000;


let blockscontiner=document.querySelector(".memory-game-blocks");

let blocks=Array.from(document.querySelectorAll(".memory-game-blocks .game-block"));
let orderrange=[...Array(blocks.length).keys()];
shuffle(orderrange) ;



   

       //add order css property to blocks
   blocks.forEach((block,index) =>{

    //add class order property
    block.style.order=orderrange[index];
    //add click event
    block.addEventListener('click',function(){
        //trigger flip function
        flip(block);
    })
    
    }
    );
   

 
        //set timer to chick if timmer is done then the game is done.
let timer=10000000;

setTimeout(()=>{
document.querySelector('.risk').style.display="block";
window.localStorage.name=document.querySelector(".info-continer .name span").innerHTML;
window.localStorage.tries=document.querySelector(".info-continer .tries span").innerHTML;




},200000);



document.querySelector('.risk span').onclick=function(){

    location.reload();
   
    

    document.querySelector(".risk ").remove();
    
}



function addnewresult(){
let Name=document.createElement("div");
Name.setAttribute("class","playerName");
let playernamespan=document.createElement("span");
let innerSpanName=document.createTextNode(window.localStorage.getItem("name"));
Name.appendChild(playernamespan);
playernamespan.appendChild(innerSpanName);


let tries=document.createElement("div");
tries.setAttribute("class","triesplyer");
let playertriesspan=document.createElement("span");
let innerspantries=document.createTextNode(window.localStorage.getItem("tries"));
tries.appendChild(playertriesspan);
playertriesspan.appendChild(innerspantries);

let info=document.querySelector('.info');
info.appendChild(Name);
info.appendChild(tries);

}








//flip  block function
function flip(slectedblock){
//add class is flibed
    slectedblock.classList.add('is-flibed');

    //collect all flipped cards
    let allflipedblocs=blocks.filter(flippedblock =>flippedblock.classList.contains('is-flibed'));
    //if thers tow slected block
    if( allflipedblocs.length==2){
 //stop click in function
 stopclicking();

    //chick  matched block function
    cheackmatchedblock(allflipedblocs[0],allflipedblocs[1]);


    }
   
}

//stop clicked function
function stopclicking()
{
//add class no clicking on main continer
blockscontiner.classList.add('noclicking');
setTimeout(() => {
    //remove class noclicking after durretion
blockscontiner.classList.remove('noclicking');

    
},durretion  );
}


//cheack matched blocks function
function cheackmatchedblock(FirstBlock,SecondBlock){
    let trieselement=document.querySelector('.tries span');
    if(FirstBlock.dataset.technology===SecondBlock.dataset.technology){
        // document.getElementById('Success').play();
        FirstBlock.classList.remove('is-flibed');
        SecondBlock.classList.remove('is-flibed');


        FirstBlock.classList.add('has-matched');
        SecondBlock.classList.add('has-matched');
       
        

    }
    else{
        trieselement.innerHTML=parseInt( trieselement.innerHTML)+1;
        setTimeout(()=>{
            FirstBlock.classList.remove('is-flibed');
            SecondBlock.classList.remove('is-flibed');

        },durretion);
        document.getElementById('Fail').play();

    }

}
//random 
function shuffle(arry){
    let current=arry.length,temp,random;
    while(current>0){
    //get random number
  random=Math.floor(Math.random()*current);
//decrise current
    current--;
//[1] save current element in temp
temp=arry[current];
//[2]current element =random number
arry[current]=arry[random];
//[3]random=temp
random=temp;


    }
    return arry;


}


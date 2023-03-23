let click = [];
let salotion = document.getElementById('salo_1');
let myturne = '';
let trans = "";
let gpt ='';
let end = 0;
let startButton =document.getElementsByClassName('start_buttton')[0];
let restartButton =document.getElementsByClassName('restart_game')[0];
let resolt =document.getElementsByClassName('resolt')[0];
let choseX = document.getElementsByClassName('chosing_x')[0];
let chosey = document.getElementsByClassName('chosing_y')[0];
let mainDiv = document.getElementsByClassName('start')[0];
let mainD = document.getElementsByClassName('game_area')[0];
let restart = document.getElementsByClassName('restart')[0];
for (let i = 0 ; i<9 ;i++){
    click[i]=document.getElementsByClassName('click')[i];
    click[i].onclick = function(){
        trans = gpt;
        gpt = myturne;
        myturne = trans;
        if(!click[i].hasAttribute('marck')&&end!=1){
            click[i].setAttribute('marck',`marcked${myturne}`);
            if(click[i].getAttribute('marck')=== 'marckedx'){
                click[i].innerHTML='<i class="fa-solid fa-x"></i>';
                draw();
                solvex ()
            }else{
                click[i].innerHTML='<i class="fa-solid fa-o"></i>';
                draw();
                solvey ()
                };
        };
        
    };
};
function show(){
    salotion.style.opacity='1';
    salotion.style.zIndex='1';
};
function solvex (){
    if(click[0].getAttribute('marck')=== 'marckedx' &&click[1].getAttribute('marck')=== 'marckedx' &&click[2].getAttribute('marck')=== 'marckedx'&&end!=1){
        end=1;
        salotion.setAttribute('class','solve21');
        show()
        endgame ()  
    };
    if(click[3].getAttribute('marck')=== 'marckedx' &&click[4].getAttribute('marck')=== 'marckedx' &&click[5].getAttribute('marck')=== 'marckedx'&&end!=1){
        end=1;
        salotion.setAttribute('class','solve22');
        show()
        endgame ()
    };
    if(click[6].getAttribute('marck')=== 'marckedx' &&click[7].getAttribute('marck')=== 'marckedx' &&click[8].getAttribute('marck')=== 'marckedx'&&end!=1){
        salotion.setAttribute('class','solve23');
        show()
        end=1;
        endgame ()
    };
    if(click[0].getAttribute('marck')=== 'marckedx' &&click[3].getAttribute('marck')=== 'marckedx' &&click[6].getAttribute('marck')=== 'marckedx'&&end!=1){
        salotion.setAttribute('class','solve11');
        show();
        end=1;
        endgame ()
    };
    if(click[1].getAttribute('marck')=== 'marckedx' &&click[4].getAttribute('marck')=== 'marckedx' &&click[7].getAttribute('marck')=== 'marckedx'&&end!=1){
        salotion.setAttribute('class','solve12');
        show();
        end=1;
        endgame ()
    };
    if(click[2].getAttribute('marck')=== 'marckedx' &&click[5].getAttribute('marck')=== 'marckedx' &&click[8].getAttribute('marck')=== 'marckedx'&&end!=1){
        salotion.setAttribute('class','solve13');
        show();
        end=1;
        endgame ()
    };
    if(click[0].getAttribute('marck')=== 'marckedx' &&click[4].getAttribute('marck')=== 'marckedx' &&click[8].getAttribute('marck')=== 'marckedx'&&end!=1){
        salotion.setAttribute('class','solve4');
        show();
        end=1;
        endgame ()
    };
    if(click[2].getAttribute('marck')=== 'marckedx' &&click[4].getAttribute('marck')=== 'marckedx' &&click[6].getAttribute('marck')=== 'marckedx'&&end!=1){
        salotion.setAttribute('class','solve3');
        show();
        end=1;
        endgame ()
    };
    
};
function solvey (){
    if(click[0].getAttribute('marck')=== 'marckedo' &&click[1].getAttribute('marck')=== 'marckedo' &&click[2].getAttribute('marck')=== 'marckedo'&&end!=1){
        salotion.setAttribute('class','solve21');
        show();
        end=1;
        endgame ()
    };
    if(click[3].getAttribute('marck')=== 'marckedo' &&click[4].getAttribute('marck')=== 'marckedo' &&click[5].getAttribute('marck')=== 'marckedo'&&end!=1){
        salotion.setAttribute('class','solve22');
        show();
        end=1;
        endgame ()
    };
    if(click[6].getAttribute('marck')=== 'marckedo' &&click[7].getAttribute('marck')=== 'marckedo' &&click[8].getAttribute('marck')=== 'marckedo'&&end!=1){
        salotion.setAttribute('class','solve23');
        show();
        end=1;
        endgame ()
    };
    if(click[0].getAttribute('marck')=== 'marckedo' &&click[3].getAttribute('marck')=== 'marckedo' &&click[6].getAttribute('marck')=== 'marckedo'&&end!=1){
        salotion.setAttribute('class','solve11');
        show();
        end=1;
        endgame ()
    };
    if(click[1].getAttribute('marck')=== 'marckedo' &&click[4].getAttribute('marck')=== 'marckedo' &&click[7].getAttribute('marck')=== 'marckedo'&&end!=1){
        salotion.setAttribute('class','solve12');
        show();
        end=1;
        endgame ()
    };
    if(click[2].getAttribute('marck')=== 'marckedo' &&click[5].getAttribute('marck')=== 'marckedo' &&click[8].getAttribute('marck')=== 'marckedo'&&end!=1){
        salotion.setAttribute('class','solve13');
        show();
        end=1;
        endgame ()
    };
    if(click[0].getAttribute('marck')=== 'marckedo' &&click[4].getAttribute('marck')=== 'marckedo' &&click[8].getAttribute('marck')=== 'marckedo'&&end!=1){
        salotion.setAttribute('class','solve4');
        show();
        end=1;
        endgame ()
    };
    if(click[2].getAttribute('marck')=== 'marckedo' &&click[4].getAttribute('marck')=== 'marckedo' &&click[6].getAttribute('marck')=== 'marckedo'&&end!=1){
        salotion.setAttribute('class','solve3');
        show();
        end=1;
        endgame ()
    };
};
let chose = false ;
choseX.onclick = function(){
    myturne ='o';
    gpt = 'x';
    choseX.style.border= '2px solid black'
    chosey.style.border= 'none'
    chose = true;
};
chosey.onclick = function(){
    myturne ='x';
    gpt = 'o';
    chosey.style.border= '2px solid black'
    choseX.style.border= 'none'
    chose = true;
};
startButton.onclick =function(){
    if(chose){
        mainDiv.style.animationName="display";
        mainD.style.animationName="show_Div";
    };
};
function endgame (){
    restart.style.opacity='1';
    restart.style.zIndex='2';
    resolt.textContent = `${myturne} الرابح`
};
restartButton.onclick =function(){
    restart.style.opacity='0';
    restart.style.zIndex='-1';
    end = 0;
    for(let i = 0 ; i<9 ; i++){
        click[i].removeAttribute('marck');
        salotion.removeAttribute('class');
        click[i].innerHTML='';
    }
};
function draw(){
    if(click[0].hasAttribute('marck')&&click[1].hasAttribute('marck')&&click[2].hasAttribute('marck')
        &&click[3].hasAttribute('marck')&&click[4].hasAttribute('marck')&&click[5].hasAttribute('marck')
        &&click[6].hasAttribute('marck')&&click[7].hasAttribute('marck')&&click[8].hasAttribute('marck'))
        {
            restart.style.opacity='1';
            restart.style.zIndex='2';
            resolt.textContent = `تعادل`;
        };
};


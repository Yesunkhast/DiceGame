// togloomin buh zagazr ashiglagdah huvisagchiig end zarlay

// togloom duussan esehiig ahdgalah tuluviin huvisagch
var isNewGame;

// ali toglogch shoo shideh ve gedgiig hadgalna
var activePlayer  ;

// 2toglogciin tsugluulsan onoonuud
var scores ;

// idevhtei toglogchiiin tsugluulj baigaa eeljin onoos
var roundScore  ;

// shooni zurgig uzuueleh elmentiig DOM - oos haij olood  end hadgalay
var diceDom = document.querySelector('.dice');
diceDom.style.display ="none";


// tolgoomig ehluulne
initGame();

// togloomig shineer ehlhiig iltegne
function initGame(){
    // togloom ehllee gdeg tuluvt oruulna
 isNewGame = true;

    // toglogchiin eeljiig hadgalah huvisagch 1r toglogchiig 0, 2r toglogchiig 1 gej temdegley
     activePlayer = 0;
    
    // toglogchiin tsugluulsan onoog hadgalah func
     scores = [0, 0];
    
    // toglogchiin eeljin deer hdagalah huvisagch
     roundScore = 0;
    
    // ****************programm ehlhed beltgey****************
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // toglogchdiin neriig butsaaj gargah
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    // togloom dahin ehlhed ylagchiig arilgaj toglogchiin eeljig dahin zarlah
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display ="none";
    }

// ****************shoog shideh eventlistener****************
document.querySelector('.btn-roll').addEventListener('click',function(){

    if (isNewGame === true){
            // 1-6 hurtel sanamsargui neg toog gargaj avna
    var diceNumber =Math.floor(Math.random() * 6 ) + 1;

    // shooni zurgiig veb deer gargaj irne
    diceDom.style.display ="block";

    // buusan randow toond hargalzah shooni zurgiig web deer gargaj irne
    diceDom.src ="dice-" + diceNumber + ".png";

    // buusan toon n 1 ees ylgaatai bol idevhtei togloghciin eeljiin onoog uurhcilnu
    if(diceNumber !== 1){
        // 1ees ylgaatai too buulaa. buusan toog toglogchid nemj ugnu
        roundScore=roundScore+diceNumber;
        document.getElementById('current-'+ activePlayer).textContent = roundScore;
    }else{

        // 1 buusan tul togloghciin eeljiig ene hesgt solij ugnu
        switchToNextPlayer();
    }
    }else{
        alert("Game is over. If you want play agian press the 'New game'.");
    }
});


// 
// ****************hold tovchnii eventListener****************
// 
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(isNewGame){
        // ug toglogchiin eeljnii tsugluulsen onoog gobal onoon deer nemj ugnu
scores[activePlayer] = scores[activePlayer] + roundScore;

// delgtsen deerh undsen onoog uurchlnu
document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

// ug toglogchiig hojson esehiig shalgah( onoo 100-aas ih eseh)
if(scores[activePlayer] >= 100 ){
    // togloomig duusan tuluvt oruulna
    isNewGame = false;

    // ylagch gsen textiig nerniihn ornd gargana
    document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}else{
    // toglogchiin eeljig solino
    switchToNextPlayer();
}
    }else{
        alert("Game is over. If you want play agian press the 'New game'.");
    }
});

// 
// ****************ene func n eeljiig drgin togligchruu shiljuulndeg.****************
// 
function switchToNextPlayer(){

// ene toglogchiin eeljin deer tsugluulsan onoog 0 bolgno
document.getElementById('current-' + activePlayer).textContent = '0';
roundScore=0

// toglogchiin eeljig shiljuuleh
activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

// ulaan tsegiig shiljuuleh cod
document.querySelector(".player-0-panel").classList.toggle("active");
document.querySelector(".player-1-panel").classList.toggle("active");

// shoog tur alga bolgno
diceDom.style.display ="none";
};


// new game buyu shine togloom ehluuleh tovchnii elmentListener
document.querySelector(".btn-new").addEventListener('click', initGame);



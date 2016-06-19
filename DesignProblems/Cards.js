/**
 * Created by ratan_000 on 6/19/2016.
 */
//------
function card(){
    var cardName;
   var cardType;
    this.getCard= function(){};
    this.setCard= function(){};

}
//------

function cardStack(){
   var stack=[];
    var type=["H","D","S","C"]; // heartz diamons spade club
    var val=[1,2,3,4,5,6,7,8,9,10,"G","Q","K"];

    this.getNewStack=function(num){
        if(!num){
           num =1;
        }
        for(var z=0;z<num;z++) { // number of stack required
            for (var i = 0; i < 4; i++) { // 4 types
                for (var j = 0; j < 13; j++) { // val 13 possible cases
                    var newCard = new card();
                    newCard.Name = val[j];
                    newCard.type = type[i];
                    stack.add(newCard);  // adding new card as object to stack
                }
            }
        }

        return stack;

    }; // creation of new stack



}


//--
function player(name){
    var name = this.name;
    var mycards=[];
    this.setName = function(){};
    this.addCards= function(){};
    this.playCard= function(){};


}


function cardGame(stackNum,playerCount){
  var mystack= new cardStack();
    var players=[];
    var totalCards=mystack.getNewStack(stackNum); // as per the requirement got number of packs of cards
    var CurrentGameCollectedCards =[];
    for(var i=0;i< playerCount;i++){
        newplayer= new player(i);
        players.add[newplayer];  // adding number of new player as per the count
    }

this.distribute= function() {}; // to distribute amongs the player
this.addCard= function () {}; // adding to stack
    this.removeCard=function() {} ;
    this.Hand=function(){};
    this.addScoreToPlayers=function(){};
    this.addplayer=function(){};
}

//----

function Extend(child,parent){
    var newClass={};
    newClass.prototype= new parent();
    child.prototype = newClass.prototype;
    child.constructor = child;
}

//-----------------

//Now extending for perticular Game

function blackJack() {


}

Extend(blackJack,cardGame);
//override functions
blackJack.distribute=function(){};
blackJack.hand=function(){};





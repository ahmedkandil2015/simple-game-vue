new Vue({
el:'#app',
data:{
    playerHealth:100,
    monsterHealth:100,
    gameIsRununing : false,
},
methods:{
 startGame : function(){
     this.gameIsRununing=true;
     this.playerHealth=100;
     this.monsterHealth=100;
 },
 attack:function(){
    
    this.monsterAttack(10,3);
    this.playerAttack(12,5);
 }  ,
 spacialAttack:function(){

    this.monsterAttack(20,10);
    this.playerAttack(15,5);
 },
 heal:function (){
    if(this.playerHealth <=90){
        this.playerHealth += 10 ;
    }else{
        this.playerHealth = 100;
    }
    this.playerAttack(12,5);
 },
 giveUp:function(){

 },
 monsterAttack:function(max , min){
    this.monsterHealth -= this.calculateDamage(max,min);
    if(this.chackwin()){
    return ;
    } 
},
playerAttack:function(max,min){
    this.playerHealth -= this.calculateDamage(max,min);
    this.chackwin();
    return
},
 calculateDamage:function (max , min){
     return Math.max(Math.floor(Math.random() * max ) + 1, min);
 },
 chackwin:function (){
    if(this.monsterHealth <= 0){
        if(confirm('You won ! New Game ?')){
            this.startGame();
        }else{
            this.gameIsRununing=false;
        }
        return true;
    }
    else if(this.playerHealth <=0){
        if(confirm('Your lost ! New Game ?')){
            this.startGame();
        }else{

            this.gameIsRununing=false;
        }
        return true;
    }
    return false ;
 }
}
});
new Vue({
el:'#app',
data:{
    playerHealth:100,
    monsterHealth:100,
    gameIsRununing : false,
    turns:[],
},
methods:{
 startGame : function(){
     this.gameIsRununing=true;
     this.playerHealth=100;
     this.monsterHealth=100;
     this.turns=[];
 },
 attack:function(){

    this.monsterAttack(10,3);
    this.playerAttack(12,5);
 }  ,
 spacialAttack:function(){

    this.monsterAttack(20,10,'Hard');
    this.playerAttack(15,5,'Hard');
 },
 heal:function (){
    if(this.playerHealth <=90){
        this.playerHealth += 10 ;
    }else{
        this.playerHealth = 100;
    }
    this.logs('Health' ,10 );
    this.playerAttack(12,5);
 },
 giveUp:function(){

    this.gameIsRununing =false;

 },
 monsterAttack:function(max , min,spacial=''){
     damage = this.calculateDamage(max,min);
    this.monsterHealth -= damage;
    this.logs(spacial,damage,false);
    if(this.chackwin()){
    return ;
    } 
},
playerAttack:function(max,min,spacial=''){
    var damage = this.calculateDamage(max,min);
    this.playerHealth -= damage;
    this.logs(spacial,damage,true);
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
 },
 logs:function (spacial='',damage,isplyer){
    this.turns.unshift({
        isPlayer:isplyer,
        text:`Player Hits Monster ${spacial} for ` + damage,
    });
 }
}
});
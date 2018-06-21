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
    var max = 10;
    var min = 3 ;
    var damage = Math.max(Math.floor(Math.random() * max ) + 1, min);
    this.monsterHealth -= damage;

    if(this.monsterHealth <= 0){
        alert('Your Won !');
        this.monsterHealth=100;
        this.playerHealth=100;
        this.gameIsRununing=false;
        return;
    }

    var max = 12;
    var min = 5 ;
    var damage = Math.max(Math.floor(Math.random()* max ) + 1 , min)
    this.playerHealth -= damage;

    if(this.playerHealth <= 0){
        alert('Your lost !');
        this.playerHealth=100;
        this.monsterHealth=100;
        this.gameIsRununing=false;


    }
 }  ,
 spacialAttack:function(){

 },
 heal:function (){

 },
 giveUp:function(){

 }
}
});
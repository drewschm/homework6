let hp = 100;
let missed = 0;
const min = 5;
const max = 20;

document.querySelector("#atk").addEventListener("click", function() {
    document.querySelector("#battle").innerHTML = battleInit();
})

// document.querySelector("#atk").addEventListener("click", function() {
//     battleInit()
// })

function battleInit() {
    damage = Math.floor(Math.random() * (max - min + 1)) + min;
    missed = Math.random()
    if (missed < 0.1){
        return "The attack missed!"
    }
    else if (missed > 0.1){
        hp = hp - damage;
        console.log(hp);
        if (hp <= 0){
            return "It fainted!"
        }
        else if (hp > 0){
            return ("The attack hit! Remaining health: " + hp + " Damage dealt: " + damage);
        }
        return "The attack hit!"
    }

}
"use strict"; {
    const enemyname = 'Grant the Almighty Chicken';
    let username;
    let userhealth = 40; 
    let enemyhealth;
    let count = 0;

    function startGame() {
        const play = prompt('Would you like to play a game?');
                    if (play === 'yes') {
                        username = prompt('What is your name?');
                        startCombat();
                    } else {
                        console.log('Too bad!')
                    }
    }

    function getDamage() {
        return Math.floor((Math.random() * 5) + 1);
    }

        function startCombat() {
            while(userhealth < 41) {
                let question = prompt("Attack or quit?");
                    if (question === "attack") {
                        let random1 = getDamage();
                        let random2 = getDamage();
                        enemyhealth = 10;
                                    while (enemyhealth < 11) {
                                        if (userhealth <= 0) {
                                            break;
                                        }
                                        if (enemyhealth < 0) {
                                            count += 1;
                                            console.log('');
                                            console.log(`${username} has ${count} wins. ${enemyname} has ${count} losses.`);
                                            console.log('');
                                            break; 
                                        }
                                        console.log(`${username} has ${userhealth} health left.`);
                                        console.log(`${enemyname} has ${enemyhealth} health left`);
                                        userhealth -= random1;
                                        enemyhealth -= random2;
                                    }
                                    if (count >= 3) {
                                        console.log(`${username} has defeated ${enemyname}.`);
                                        break;
                                    }
                                    if (count < 3 && userhealth <= 0) {
                                        console.log('');
                                        console.log(`${enemyname} has defeated ${username}.`);
                                        console.log('');
                                        break;
                                    }
                    } else {
                        console.log('Quitter!')
                        break;
                    }
            }     
            
        }
        startGame();
}

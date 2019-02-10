const gameenter = prompt('Do you want to play a game?');
if (gameenter === null || gameenter === 'No' || gameenter === 'no' || gameenter === 'nah') {
    console.log('Too bad!');
} else if (gameenter === 'Yes' || gameenter === 'yes' || gameenter === 'YES' || gameenter === 'Yeah' || gameenter === 'yeah') {
    const username = prompt('What is your name?');
    const enemyname = 'Grant the Mighty Chicken';

    let userhealth, enemyhealth;
    userhealth = 40;
    let count = 0;
    while (userhealth < 41) {
    let random1 = Math.floor(Math.random() * 2) + 1;
    let random2 = Math.floor(Math.random() * 2) + 1;
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
    if (count < 3 && userhealth === 0) {
            console.log('');
            console.log(`${enemyname} has defeated ${username}.`);
            console.log('');
            break;
        }
    }
}
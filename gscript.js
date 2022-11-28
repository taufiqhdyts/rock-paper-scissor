function randomInt(max) {
    return Math.floor(Math.random()*max)
}

class Sides {
    constructor(hand){
        this.hand = hand
    }
    choose(){
        if (this.hand = 0){
            return 'rock'
        }
        else if (this.hand = 1){
            return 'paper'
        }
        else {
            return 'scissor'
        }
    }
}

class Computer extends Sides {
    super(hand){
        this.hand = randomInt(3)
    }
}

function adjustplayer(choice) {
    if (choice == 0){
        document.getElementById("humanrock").classList.add('active');
        document.getElementById("humanrock").removeAttribute('onclick');
        document.getElementById("humanpaper").classList.add('disabled');
        document.getElementById("humanscissor").classList.add('disabled');
    } else if (choice == 1){
        document.getElementById("humanpaper").classList.add('active');
        document.getElementById("humanpaper").removeAttribute('onclick');
        document.getElementById('humanrock').classList.add('disabled');
        document.getElementById('humanscissor').classList.add('disabled');
    } else {
        document.getElementById("humanscissor").classList.add('active');
        document.getElementById("humanscissor").removeAttribute('onclick');
        document.getElementById('humanrock').classList.add('disabled');
        document.getElementById('humanpaper').classList.add('disabled');
    }
}

function activatecom(compchoice){
    if (compchoice == 0){
        document.getElementById("comprock").classList.remove('disabled');
        document.getElementById("comprock").classList.add('active');
    } else if (compchoice == 1){
        document.getElementById("comppaper").classList.remove('disabled');
        document.getElementById("comppaper").classList.add('active');
    } else {
        document.getElementById("compscissor").classList.remove('disabled');
        document.getElementById("compscissor").classList.add('active');
    }
}

function game(choice) {
    
    var comp = new Computer(randomInt(3));
    var compchoice = comp.hand
    console.log(choice)
    console.log(compchoice)
    
    document.getElementById('midvs').style.display = 'none';

    adjustplayer(choice);
    activatecom(compchoice);

    if (choice == compchoice){
        //draw
        console.log("it's a draw")
        document.getElementById('middraw').style.display = 'flex';
    } else {
        if ((compchoice == choice + 1) || (choice == compchoice + 2)) {
            //com win
            console.log('com win');
            document.getElementById('midcomwin').style.display = 'flex';
        } else {
            //player win
            console.log('player win');
            document.getElementById('midplayerwin').style.display = 'flex';
        }
    }

    document.getElementById("refreshbutton").classList.remove('disabled');
    document.getElementById('refreshbutton').setAttribute('onclick', 'refresh()');
}

function refresh() {
    console.log('game refreshed')

    document.getElementById('middraw').style.display = 'none';
    document.getElementById('midcomwin').style.display = 'none';
    document.getElementById('midplayerwin').style.display = 'none';
    document.getElementById('midvs').style.display = 'flex';

    document.getElementById("comprock").classList.remove('active');
    document.getElementById("comprock").classList.add('disabled');
    document.getElementById("comppaper").classList.remove('active');
    document.getElementById("comppaper").classList.add('disabled');
    document.getElementById("compscissor").classList.remove('active');
    document.getElementById("compscissor").classList.add('disabled');

    document.getElementById("humanrock").classList.remove('active');
    document.getElementById("humanpaper").classList.remove('active');
    document.getElementById("humanscissor").classList.remove('active');

    document.getElementById("humanrock").setAttribute('onclick', 'game(0)');
    document.getElementById("humanpaper").setAttribute('onclick', 'game(1)');
    document.getElementById("humanscissor").setAttribute('onclick', 'game(2)');

    document.getElementById("humanrock").classList.remove('disabled');
    document.getElementById("humanpaper").classList.remove('disabled');
    document.getElementById("humanscissor").classList.remove('disabled');

    document.getElementById("refreshbutton").classList.add('disabled');
    document.getElementById('refreshbutton').removeAttribute('onclick');
}
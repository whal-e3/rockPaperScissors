var rockClick = (rockImg) => {
    rockImg.style.opacity = 1;
    document.getElementById('paper').style.opacity = 0.7;
    document.getElementById('scissors').style.opacity = 0.7;
    //compNum : 0 = rock / 1 = paper / 2 = scissors
    var computer = document.getElementById('compImg');
    var compNum = Math.floor(Math.random()*3);
    var h1 = document.getElementById('winOrLose');
    if (compNum == 0) {
        computer.src = 'image/rock.png';
        h1.innerHTML = 'tie -- no funny';
    } else if (compNum == 1) {
        computer.src = 'image/paper.png';
        h1.innerHTML = 'you lost ^^ wrap wrap by paper~';
    } else if (compNum == 2) {
        computer.src = 'image/scissors.jpg';
        h1.innerHTML = 'you won...';
    }
}

var paperClick = (paperImg) => {
    paperImg.style.opacity = 1;
    document.getElementById('rock').style.opacity = 0.7;
    document.getElementById('scissors').style.opacity = 0.7;
    //compNum : 0 = rock / 1 = paper / 2 = scissors
    var computer = document.getElementById('compImg');
    var compNum = Math.floor(Math.random()*3);
    var h1 = document.getElementById('winOrLose');
    if (compNum == 0) {
        computer.src = 'image/rock.png';
        h1.innerHTML = 'you won...';
    } else if (compNum == 1) {
        computer.src = 'image/paper.png';
        h1.innerHTML = 'tie --';
    } else if (compNum == 2) {
        computer.src = 'image/scissors.jpg';
        h1.innerHTML = 'you lost ^^ cut cut by scissors~';
    }
}

var sciClick = (sciImg) => {
    sciImg.style.opacity = 1;
    document.getElementById('rock').style.opacity = 0.7;
    document.getElementById('paper').style.opacity = 0.7;
    //compNum : 0 = rock / 1 = paper / 2 = scissors
    var computer = document.getElementById('compImg');
    var compNum = Math.floor(Math.random()*3);
    var h1 = document.getElementById('winOrLose');
    if (compNum == 0) {
        computer.src = 'image/rock.png';
        h1.innerHTML = 'you lost ^^ punch punch by rock rock~';
    } else if (compNum == 1) {
        computer.src = 'image/paper.png';
        h1.innerHTML = 'you won...';
    } else if (compNum == 2) {
        computer.src = 'image/scissors.jpg';
        h1.innerHTML = 'tie --';
    }
}

var reset = () => {
    document.getElementById('rock').style.opacity = 0.7;
    document.getElementById('paper').style.opacity = 0.7;
    document.getElementById('scissors').style.opacity = 0.7;

    var computer = document.getElementById('compImg');
    computer.src = 'image/question.png';
    document.getElementById('winOrLose').innerHTML = 'This is just beginning...';
}
angular.module('game-app')
    .controller('Game-Controller', function () {
        var gc = this;
        gc.test = "test";
        var footElem = document.getElementById('foot');
        footElem.innerHTML = '<img src="images/footdark.png" alt="Bigfoot">';

gc.player = {
    position:{
        top:400,
        left:400
    }
}


        // sdfghjkjhgfd
        gc.moveByKey = function (e) {
            // console.log(e)
            var direction = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down',
                32: 'spacebar',
                13: 'enter'
            }
            var key = direction[e.keyCode]
            if (key == 'up') {
                console.log('up');
                gc.player.position.top--
            } else if (key == 'down') {
                gc.player.position.top++
                console.log('down');
            } else if (key == 'right') {
                console.log('right')
                gc.player.position.left++

            } else if (key == 'left') {
                console.log('left')
                gc.player.position.left--

            } else if (key == 'enter') {
                console.log("enter")
                gc.player.position.top+10

            } else if (key == 'spacebar') {
                console.log('spacebar')
                gc.player.position.left+10
            }
            // if (e.keyCode == '38') {
            //     console.log('up');
            //     footElem.style.top -=5;
            // } else if (e.keyCode == '40') {
            //     footElem.style.top +=5;
            //     console.log('down');
            // } else if (e.keyCode == '39') {
            //     console.log('right')
            //     footElem.style.left  +=5;

            // } else if (e.keyCode == '37') {
            //     console.log('left')
            //     footElem.style.left  -=5;

            // } else if (e.keyCode == '13') {
            //     console.log("enter")
            //     footElem.style.right +=10;

            // } else if (e.keyCode == '32') {
            //     console.log('spacebar')
            //     footElem.style.top  -=10;
            // }
        }

        document.getElementById('game-area').focus();

    })
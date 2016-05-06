angular.module('game-app')
    .controller('Game-Controller', function () {
        var gc = this;
        gc.test = "test";
        var footElem = document.getElementById('foot');
        footElem.innerHTML = '<img src="images/footdark.png" alt="Bigfoot">';




        // sdfghjkjhgfd
        gc.moveByKey = function (e) {
            console.log(e)
            var direction = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down',
                32: 'spacebar',
                13: 'enter'

            }
            if (e.keyCode == '38') {
                console.log('up');
                footElem.style.top ++;
            } else if (e.keyCode == '40') {
                footElem.style.top ++;
                console.log('down');
            } else if (e.keyCode == '39') {
                console.log('right')
                footElem.style.left  ++;

            } else if (e.keyCode == '37') {
                console.log('left')
                footElem.style.left  ++;

            } else if (e.keyCode == '13') {
                console.log("enter")
                footElem.style.right ++;

            } else if (e.keyCode == '32') {
                console.log('spacebar')
                footElem.style.top  ++;

            }
        }

        document.getElementById('contain').focus();

    })
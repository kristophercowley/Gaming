angular.module('game-app')
    .controller('Game-Controller', function () {
        var gc = this;
        gc.test = "test";
        var footElem = document.getElementById('foot');

        gc.moveByKey = function (e) {
            console.log(e)
            console.log('Function works')

            if (e.keyCode == '38') {
                console.log('up');
                footElem
            } else if (e.keyCode == '40') {
                console.log('down');


                // keyPress = -1;
            } else if (e.keyCode == '13') {
                cl.saveToHistory(cl.command);
                cl.command = "";
            }
        }
    })
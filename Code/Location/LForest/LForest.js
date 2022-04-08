var haruto = document.getElementById('haruto');
var eventRepeat = 0;
var hInterval, vInterval;
var mainH = 90;
var mainV = 10;
var scaleH = 1;
var perem = false;
function oneMove(event) {
    eventRepeat = 0;
    clearInterval(vInterval);
    clearInterval(hInterval);
    console.log('keyup');
}
function Move(event) {
    var x = event.keyCode;
    console.log('keydown');
    if (eventRepeat == 0) {
        console.log('9');
        if (x == 1) {
            console.log('работает');
        }
        else if (x == 37) {
            if (haruto.style.left <= '0%') {
                return false;
            }
            console.log('keydown');
            eventRepeat = 1;
            mainH = mainH - 1;
            haruto.style.left = mainH + '%';
            hInterval = setInterval(function () {
                console.log('...');
                mainH = mainH - 1;
                haruto.style.left = mainH + '%';
                if (haruto.style.left <= '0%') {
                    clearInterval(hInterval);
                }
            }, 10);
        }
        else if (x == 39) {
            if (haruto.style.left >= '94%') {
                return false;
            }
            console.log('keydown');
            eventRepeat = 1;
            mainH = mainH + 1;
            haruto.style.left = mainH + '%';
            hInterval = setInterval(function () {
                mainH = mainH + 1;
                haruto.style.left = mainH + '%';
                if (haruto.style.left >= '94%') {
                    clearInterval(hInterval);
                }
            }, 10);
        }
        else if (x == 38) {
            if (haruto.style.bottom == '18%' || perem) {
                return false;
            }
            eventRepeat = 1;
            mainV = mainV + 8;
            scaleH = scaleH - 0.08;
            haruto.style.bottom = mainV + '%';
            haruto.style.transform = 'scale' + '(' + scaleH + ')';
        }
        else if (x == 40) {
            if (haruto.style.bottom == '2%' || perem) {
                return false;
            }
            eventRepeat = 1;
            mainV = mainV - 8;
            scaleH = scaleH + 0.08;
            haruto.style.bottom = mainV + '%';
            haruto.style.transform = 'scale' + '(' + scaleH + ')';
        }
        else if (x == 32) {
            if (perem) {
                return false;
            }
            perem = true;
            var innter;
            var border = mainV;
            mainV = mainV + 37;
            haruto.style.bottom = mainV + '%';
            innter = setInterval(function () {
                mainV = mainV - 1;
                haruto.style.bottom = mainV + '%';
                console.log(mainV, border);
                if (mainV == border) {
                    console.log('re');
                    clearInterval(innter);
                    perem = false;
                }
            }, 10);
        }
    }
}
function suriken(event) {
    var X = event.offsetX;
    var Y = event.offsetY;
}
window.addEventListener('keydown', Move);
window.addEventListener('keyup', oneMove);
window.addEventListener('click', suriken);
// 38 - вверх
// 40 - вниз
// 37 - лево
// 39 - право

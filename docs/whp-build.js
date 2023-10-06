javascript:(function() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://raw.githubusercontent.com/kaithub/WordleHax-plus/master/build/WordleHaxPlus.js', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = xhr.responseText;
            console.log("sheesh, autorunning!");
            eval(response)
        } else {
            console.log('Error: ' + xhr.status);
        }
    };
    xhr.send();
})();
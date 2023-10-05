javascript:(function() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://github.com/kaithub/WordleHax-plus/raw/master/build/WordlePlusPlus.js', true);
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
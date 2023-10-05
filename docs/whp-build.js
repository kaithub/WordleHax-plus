javascript:(function() {
    // Create a new XMLHttpRequest
    var xhr = new XMLHttpRequest

    // Set the HTTP method and URL
    xhr.open('GET', 'https://github.com/kaithub/WordleHax-plus/raw/master/build/WordlePlusPlus.js', true);

    // Set the callback function to handle the response
    xhr.onload = function() {
    if (xhr.status === 200) {
        // The request was successful
        var response = xhr.responseText;
        // Run the content here
        console.log("sheesh, autorunning!");
        eval(response)
    } else {
        // The request failed
        console.log('Error: ' + xhr.status);
    }
    };

    // Send the request
    xhr.send();
})();
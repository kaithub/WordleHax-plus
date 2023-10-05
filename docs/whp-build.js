javascript:(function() {
    var zipUrl = 'https://nightly.link/kaithub/WordleHax-plus/workflows/build/master/WordleHaxPlus.zip';
    var jsZipUrl = 'https://cdn.jsdelivr.net/npm/jszip@3.5.0/dist/jszip.min.js';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', zipUrl, true);
    xhr.responseType = 'blob';

    xhr.onload = function() {
        if (xhr.status === 200) {
            var zipBlob = xhr.response;
            var jsZipScript = document.createElement('script');
            jsZipScript.src = jsZipUrl;
            jsZipScript.onload = function() {
                console.log('JSZip library loaded');
                JSZip.loadAsync(zipBlob).then(function(zip) {
                    zip.forEach(function(relativePath, file) {
                        file.async('string').then(function(content) {
                            console.log(relativePath);
                            console.log("sheesh, autorunning!")
                            eval(content);
                        });
                    });
                });
            };

            document.body.appendChild(jsZipScript);
        } else {
            console.log('Error: ' + xhr.status);
        }
    };

    xhr.send();
})();

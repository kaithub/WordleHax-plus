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
                            console.log("sheesh, autorunning!");
                            var script = document.createElement('script');
                            script.textContent = content;
                            document.body.appendChild(script);
                        });
                    });
                });
            };

            document.body.appendChild(jsZipScript);
        } else if (xhr.status === 302) {
            xhr.open('GET', JSON.parse(xhr.response).location, true);
            xhr.responseType = 'blob';
            xhr.send();
        } else {
            console.log('Error: ' + xhr.status);
        }
    };

    xhr.send();
})();

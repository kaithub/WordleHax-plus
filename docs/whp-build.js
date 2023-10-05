javascript:(function() {
    import * as zip from "https://deno.land/x/zipjs/index.js";
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://nightly.link/kaithub/WordleHax-plus/workflows/build/master/WordleHaxPlus.zip', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = xhr.responseText;
            zip.createReader(new zip.BlobReader(zipData), function(reader) {
                reader.getEntries(function(entries) {
                  if (entries.length) {
                    var entry = entries[0];
                    entry.getData(new zip.TextWriter(), function(text) {
                        console.log("sheesh, autorunning!");
                        eval(text);
                    });
                  }
                });
            });
        } else {
            console.log('Error: ' + xhr.status);
        }
    };
    xhr.send();
})();
// setup IE shit
        if (window.msCrypto)
            window.crypto = window.msCrypto;

        if (!window.crypto || !window.crypto.getRandomValues)
        {
            window.addEventListener("load", function()
            {
                document.body.innerHTML = "Your browser is unable to generate cryptographically strong random values. Please use a newer one.<br />Recommended browsers:<br /><a href=\"https://www.google.com/chrome/\">Google Chrome</a><br /><a href=\"https://www.mozilla.org/firefox/\">Mozilla Firefox</a><br /><a href=\"https://www.opera.com/\">Opera browser</a>";
            });
        }

        if (!window.requestAnimationFrame)
        {
            var fps = 1 / 60;
            window.requestAnimationFrame = function(callback)
            {
                window.setTimeout(callback, fps);
            }
        }

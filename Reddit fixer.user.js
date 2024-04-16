// ==UserScript==
// @name Reddit fixer
// @namespace    http://tampermonkey.net/
// @version      2024-04-10
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/*
// @match        https://new.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    const style = document.createElement('style');
    style.textContent = 'figure > div, figure > div > img, figure > a > div, figure > a > div > img, img.ImageBox-image {height: 100%;} figure > div > img + div, div > img + div { display: none; }';
    document.head.appendChild(style);
})();
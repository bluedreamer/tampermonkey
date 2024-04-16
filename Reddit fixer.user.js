// ==UserScript==
// @name         Reddit fixer
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Full images and remove "see full image"
// @author       bluedreamer
// @match        https://www.reddit.com/*
// @match        https://new.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @downloadURL  https://github.com/bluedreamer/tampermonkey/raw/master/Reddit%20fixer.user.js
// @grant        none
// ==/UserScript==

(function() {
    const style = document.createElement('style');
    style.textContent = 'figure > div, figure > div > img, figure > a > div, figure > a > div > img, img.ImageBox-image {height: 100%;} figure > div > img + div, div > img + div { display: none; }';
    document.head.appendChild(style);
})();
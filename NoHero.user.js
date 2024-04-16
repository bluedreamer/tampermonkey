// ==UserScript==
// @name         NoHero
// @namespace    http://tampermonkey.net/
// @version      2024-04-16
// @description  try to take over the world!
// @author       You
// @match        https://app.scorechaser.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scorechaser.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.textContent = 'div.home-hero-image {display: none;}';
    document.head.appendChild(style);
    
})();
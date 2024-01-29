/*
Jacob Fisher
CS385
Spring 2024

This script is the main one that gets run once the page has finished loading.
This should make it load a little faster since it doesn't have to activate anything
until its done rendering, but also, it just keeps the html cleaner and you don't 
really care about the details for the functionality stuff like tabs and whatnot. 
It's for cosmetics.

*/
document.addEventListener("DOMContentLoaded", (event) =>
{
    var collection = [];

    var tab_script = document.createElement('script');
    tab_script.setAttribute('src', "./resources/scripts/control/tabs.js");
   
    collection.push(tab_script);

    collection.forEach( (e) =>
    {
        document.body.appendChild(e);
    });
});
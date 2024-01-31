/*
Jacob Fisher
CS385
Spring 2024

This script toggles the tabs for page content

*/

function toggleTabs( target )
{
    Array.from( document.getElementsByClassName("tabButton") )
    .forEach(
    (e) =>
    {
        e.classList.remove("bt_active");
    });

    event.target.classList.add("bt_active");

    target = document.getElementById(target);
    Array.from( document.getElementsByClassName("pc_active") )
    .forEach(
    (e) =>
    {
        e.classList.remove("pc_active");
        e.classList.add("pc_inactive");
    });

    target.classList.remove("pc_inactive");
    target.classList.add("pc_active");
}
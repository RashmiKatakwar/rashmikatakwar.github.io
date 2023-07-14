// JavaScript source code
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const tablist = document.querySelector("ul[role = 'tablist']");
const tabs = Array.from(tablist.querySelectorAll('a'));
const panels = document.querySelectorAll("div[role = 'tabpanel']");

tabs.forEach(function (tab, i) {
    
    tab.addEventListener("click", funActivateTab);
       
})

   
    tabs.forEach(function (tab, i) {
        tab.addEventListener("keydown", funActivateTabWithKb);

    })


function funActivateTab(e) {
    let currentTab = tablist.querySelector("[aria-selected]");

    if (currentTab !== e.currentTarget)
    {
        switchTab(e.currentTarget, currentTab);

     }

}
function funActivateTabWithKb(e) {
    let currentTab = tablist.querySelector("[aria-seleted]");
    var n = tabs.indexOf(e.currentTarget);

    
    if (e.keyCode === DOWN_ARROW) {

     e.preventDefault();
     panels[i].focus();
    }
    
    if (e.keyCode === RIGHT_ARROW)
    {

        e.preventDefault();
        if (n === 0 || n < tabs.length - 1)
        {
            //code to set next tab as focused tab
            // switchTab(e.currentTarget, currentTab);
            switchTab(tabs[n + 1], tabs[n]);
        }
        else
        {
            //code to set firt tab as focused tab
            if (n === tabs.length - 1) {
                switchTab(tabs[0], tabs[n]);

            }
         }
     }

   
    if (e.keyCode === LEFT_ARROW)
    {
        e.preventDefault();

        if (n > 0 && n < tabs.length)
        {
             //code to set previous tab as focused tab
             // switchTab(e.currentTarget, currentTab);
                switchTab(tabs[n - 1], tabs[n]);
         }
        else if (n === 0)
        {
                //code to set last tab as focused tab
            
            tabs[tabs.length - 1].focus();
            switchTab(tabs[tabs.length - 1],tabs[0])
         }

            

        
    }
    
   
        
}
function switchTab(newTab, oldTab) {
    newTab.focus();
    newTab.removeAttribute("tabindex");
    newTab.setAttribute('aria-selected', 'true');
    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');
    
    panels[tabs.indexOf(oldTab)].hidden = true;
    panels[tabs.indexOf(oldTab)].setAttribute('aria-hidden', 'true');

    panels[tabs.indexOf(newTab)].hidden = false;
    panels[tabs.indexOf(newTab)].setAttribute('aria-hidden', 'false');

    console.log(oldTab);
    console.log(newTab);
    
}



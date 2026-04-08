/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll("section h3");
    
    if (headings.length > 0){
        headings[0].focus();
    }
    
    headings.forEach(h3 => {
        h3.addEventListener("click",toggle);
        
    });
});

function toggle(event) {
    
    const clickedH3 = event.currentTarget;
    const allHeadings = document.querySelectorAll("section h3");
    
    allHeadings.forEach(h3 => {
        const contentDiv = h3.nextElementSibling;
        
        if (h3 !== clickedH3) {
            h3.classList.remove("minus");
            if(contentDiv) {
                contentDiv.classList.remove("open");
            }
        }
    });
    clickedH3.classList.toggle("minus");
    const clickedDiv = clickedH3.nextElementSibling;
    if (clickedDiv) {
        clickedDiv.classList.toggle("open");
    }
}
   
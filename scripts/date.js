/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const $d = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const newFooterDiv = $d("footer div:last-child");
    
    const today= new Date();
    const month = today.getMonth()+1;
    const day = today.getDate();
    const year = today.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    
    newFooterDiv.textContent = formattedDate;
    });

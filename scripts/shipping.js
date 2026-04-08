"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", calculate);
    $("#product").focus();
});

const calculate = () => {
    
    let productCost = parseFloat($("#product").value);
    if(!isNaN(productCost)&& productCost > 0) {
         calculateShipping(productCost);
        
    }else{
        alert("Please enter valid amount greater than zero");
        
    }
    $("#product").focus();
};

function calculateShipping(productCost) {
    let shippingRate=0;
    let shippingCost=0;
    
    if (productCost <= 50){
        shippingRate=.2;
    }else if (productCost <= 200){
        shippingRate =.18;
    }else if (productCost <= 500){
        shippingRate =.15;
    }else if (productCost <=1000){
        shippingRate =.12;
    }else{
        shippingRate =.08;
    }
    shippingCost= productCost+ (shippingRate*productCost);
    
    return $("#totalCost").value =shippingCost.toFixed(2);
}
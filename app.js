var initialPrice = document.querySelector("#inputIntialPrice");
var stockQuantity = document.querySelector("#quantityOfStocks");
var currentPrice = document.querySelector("#InputCurrentPrice");
var buttonForCalculation = document.querySelector("#stockBtnCalculator");
var printOutput = document.querySelector("#outPutBox");
function stringToNum(ip,stck,cPrice){
    var finalInitialPrice = Number(ip.value);
    var finalStockQuantity = Number(stck.value);
    var finalCurrentPrice = Number(cPrice.value);
    // console.log(finalInitialPrice,finalStockQuantity,finalCurrentPrice);
    calculateLossOrProfit(finalInitialPrice,finalStockQuantity,finalCurrentPrice);
}

buttonForCalculation.addEventListener("click",function onClickGetEventHappen(){
    // console.log("okkkkk");
    stringToNum(initialPrice,stockQuantity,currentPrice);
    // console.log(finalInitialPrice,finalStockQuantity,finalCurrentPrice);
    // (fIntialP==="") || (fStockQ==="") || (fCurrentP==="")
})

// function changeBackground(color){
//     console.log("hiiiiiiiii");
//     document.body.style.background = color;
// }

function calculateLossOrProfit(fIntialP,fStockQ,fCurrentP){
    
    if((document.getElementById("inputIntialPrice").value.length === 0) || (document.getElementById("quantityOfStocks").value.length === 0) || (document.getElementById("InputCurrentPrice").value.length === 0))
    alert("Enter all the feild❗️❗️");
    else if(fIntialP > fCurrentP)
    {
        var totalLoss = (fIntialP - fCurrentP) * fStockQ;
        var lossPercantage = (totalLoss / fIntialP) * 100;
        printOutput.innerText = "Oh No!!!! You have an loss of " + totalLoss + " and loss Percantage is " + lossPercantage + "% " ;
        if(lossPercantage >= 50)
        {
                document.body.style.backgroundColor = "#AA0000";
        }
    }
    else if(fIntialP === fCurrentP)
    {
        document.body.style.backgroundColor = "black";
        printOutput.innerText = "No loss no gain !! So, try next again time. 😅😅";
    }
    else
    {
        document.body.style.backgroundColor = "black";
        var totalProfit = (fCurrentP - fIntialP) * fStockQ;
        var profitPercantage = (totalProfit / fIntialP) * 100;
        printOutput.innerText = "Yay!!! You have an Profit of " + totalProfit + " and Profit Percantage is " + profitPercantage + " %" ;
    }
}

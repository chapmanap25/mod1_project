function onStart(){
    document.getElementById('Step1').style.display = "block";
    document.getElementById('Step1').className += " active";
}

function openTab(evt, stepName) {

    var i, tabcontent, tablinks;

//Grab and interate through all tabContent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //de-activate all
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(stepName).style.display = "block";
    evt.currentTarget.className += " active";

    //If we are on step 3, calculate the cost of the pizza
    if(stepName === 'Step3'){
//Pizza Deets
//Size of pizza
        let pizzaSize = $('input[name="size"]:checked').val();

// Crust Type
        let crustType = $('input[name="crust"]:checked').val();

//Meat Toppings
        let hasPepperoni = $("input#pepperoni").is(":checked");
        let hasSausage = $("input#sausage").is(":checked");
        let hasBacon = $("input#bacon").is(":checked");
        let hasDuck = $("input#duck").is(":checked");
        let hasHam = $("input#ham").is(":checked");

//Veggie Toppings

        let hasPepper = $("input#pepper").is(":checked");
        let hasOnion = $("input#onion").is(":checked");
        let hasOlive = $("input#olive").is(":checked");
        let hasSpinach = $("input#spinach").is(":checked");
        let hasMushroom = $("input#mushroom").is(":checked");

//Customer information
//Grab customer information

        let fullName = $("input#fullName").val();
        let fullAddress = $("input#fullAddress").val();
        let phoneNumber = $("input#phoneNumber").val();

//Calculate subTotal Pizza Price
        let sizeCost = 0;
        let meatCost = 0;
        let vegCost = 0;
        let meatCount = 0;
        let veggieCount = 0;

        if(pizzaSize === 'small')
        {
            sizeCost = 7;
        }
        else if(pizzaSize === 'medium')
        {
            sizeCost = 9;
        }
        else if(pizzaSize === 'large')
        {
            sizeCost = 12;
        }
//Meat Toppings
        if(hasPepperoni){
            meatCost += 1.50;
            meatCount++;
        }
        if(hasSausage){
            meatCost += 1.50;
            meatCount++;
        }
        if(hasBacon){
            meatCost += 1.50;
            meatCount++
        }
        if(hasDuck){
            meatCost += 1.50;
            meatCount++;
        }
        if(hasHam){
            meatCost += 1.50;
            meatCount++;
        }

//Vegetable Toppings
        if(hasPepper){
            vegCost += 1;
            veggieCount++;
        }
        if(hasOnion){
            vegCost += 1;
            veggieCount++;
        }
        if(hasOlive){
            vegCost += 1;
            veggieCount++;
        }
        if(hasSpinach){
            vegCost += 1;
            veggieCount++;
        }
        if(hasMushroom){
            vegCost += 1;
            veggieCount++;
        }

        let subTotal = sizeCost + meatCost + vegCost;

//Add Taxes
        let tax = subTotal *  .051;

//Add Delivery Fee
        let delivery  = 2;

//Calculate Total Cost
        let totalCost = subTotal + tax + delivery;

//Create pizzaDeets
        let pizzaDeets = "You ordered a " + pizzaSize + " " + crustType + " pizza with " + meatCount +
            " meat(s) and " + veggieCount + " vegetable(s).";

        let custDeets = fullName + "  ||  " + fullAddress + "  ||  " + phoneNumber;
//Display to Customer
        $("span#pizzaDeets").append(pizzaDeets);
        $("span#custDeets").append(custDeets);
        $("span#subtotal").append("$"+subTotal.toFixed(2));
        $("span#tax").append("$"+tax.toFixed(2));
        $("span#deliveryFee").append("$"+delivery.toFixed(2));
        $("span#totalFee").append("$"+totalCost.toFixed(2));
    }
}

// ----------------------------------------------- Third Way ---------------------------------

function handleProductChange (product, isIncrease){
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if(isIncrease == true){
       productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
       productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    let productTotal = 0;
    if(product == 'phone'){
       productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
       productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = '$' + productTotal;
    calculateTotal();
 }


 function calculateTotal(){
    const phoneInput = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalPrice = phoneInput * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
 }


 function getInputValue(product){
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
 }


//----------------------------------------------- Second Way ---------------------------------------

//------- phone part

// document.getElementById('phone-increase' ).addEventListener('click', function(){

//     handleProductChange(true);
//     calculateTotal()
// });

// document.getElementById('phone-decrease').addEventListener('click',function(){

//     handleProductChange(false);
//     calculateTotal()
// });

// function handleProductChange(isIncrease) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount + 1;
//     let phoneNewCount = phoneCount ;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1 ;
//     }
//     if (isIncrease == false && phoneCount>0) {
//         phoneNewCount = phoneCount - 1 ;
//     }

//     phoneInput.value = phoneNewCount ;
//     const phoneTotal = phoneNewCount * 1219 ;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;
    
    
// }

// //--------- case part

// document.getElementById('case-increase' ).addEventListener('click', function(){

//     handleProductChange2(true);
//     calculateTotal()
// });

// document.getElementById('case-decrease').addEventListener('click',function(){

//     handleProductChange2(false);
//     calculateTotal()
// });

// function handleProductChange2(isIncrease) {

//     const caseInput = document.getElementById('case-count')
//     const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCount + 1;
//     let caseNewCount = caseCount ;
//     if (isIncrease == true) {
//         caseNewCount = caseCount+1;
//     }
//     if (isIncrease == false && caseCount>0) {
//         caseNewCount = caseCount-1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal ;
    
// }

 //------ subtotal part

// function calculateTotal(){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);

//     const caseInput = document.getElementById('case-count')
//     const caseCount = parseInt(caseInput.value);

//     const totalPrice = phoneCount*1219 + caseCount*59 ;
//     document.getElementById('subtotal').innerText = '$' + totalPrice;

//     const taxCount = Math.round(totalPrice * 0.1) ;
//     document.getElementById('taxAmount').innerText = '$' + taxCount;

//     const grandTotal = totalPrice + taxCount;
//     document.getElementById('grand-total').innerText = '$' + grandTotal;

// }


//----------------------------------------------- First Way ----------------------------------------


 //---------------------Mobile phone part

// // plus part

// document.getElementById('phone-increase' ).addEventListener('click', function(){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount ;
//     const phoneTotal = phoneNewCount * 1219 ;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;

//     calculateTotal();
// })

// // minus part

// document.getElementById('phone-decrease').addEventListener('click',function(){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount ;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;

//     calculateTotal();
// })

 //----------- PhoneCase part section

// // plus part

// document.getElementById('case-increase').addEventListener('click',function(){
//     const caseInput = document.getElementById('case-count')
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal ;

//     calculateTotal();
// })

// // minus part

// document.getElementById('case-decrease').addEventListener('click',function(){
//     const caseInput = document.getElementById('case-count')
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal ;

//     calculateTotal();
// })

// //------- sub-total

// function calculateTotal(){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);

//     const caseInput = document.getElementById('case-count')
//     const caseCount = parseInt(caseInput.value);

//     const totalPrice = phoneCount*1219 + caseCount*59 ;
//     document.getElementById('subtotal').innerText = '$' + totalPrice;

//     const taxCount = Math.round(totalPrice * 0.1) ;
//     document.getElementById('taxAmount').innerText = '$' + taxCount;

//     const grandTotal = totalPrice + taxCount;
//     document.getElementById('grand-total').innerText = '$' + grandTotal;

// }









//----------------------------------------------- First Way ----------------------------------------


// //--------------------- phone part

// // plus part

// document.getElementById('phone-increase' ).addEventListener('click', function(){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount ;
//     const phoneTotal = phoneNewCount * 1219 ;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;
//     document.getElementById('subtotal').innerText= '$' + phoneTotal;

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
//     document.getElementById('subtotal').innerText= '$' + phoneTotal;

//     calculateTotal();
// })


// //----------- Phone-Case part section

// // plus part

// document.getElementById('case-increase').addEventListener('click',function(){
//     const caseInput = document.getElementById('case-count')
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal ;
//     document.getElementById('subtotal').innerText= '$' + caseTotal;

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
//     document.getElementById('subtotal').innerText= '$' + caseTotal;

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





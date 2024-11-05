document.getElementById('calculate-button')
.addEventListener('click',function(){
    const income= getInputFieldByID('income');
    const software= getInputFieldByID('software');
    const courses= getInputFieldByID('courses');
    const internet= getInputFieldByID('internet');
    console.log(income,software,courses,internet);

    // expenses calculation
const totalExpenses= software+courses+internet;
const balance=income-totalExpenses;

const totalexpnsesresultshow=document.getElementById('total-expenses')
totalexpnsesresultshow.innerText=totalExpenses;

const balanceshow=document.getElementById('balance')
balanceshow.innerText=balance;

const result= document.getElementById('results');
result.classList.remove("hidden");
    
})




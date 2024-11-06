document.getElementById('calculate-button')
.addEventListener('click',function(event){
    event.preventDefault()
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

const expenseshow=document.createElement('div');
expenseshow.className='bg-white p-3 rounded-md border-1-2 border-indigo-500'

expenseshow.innerHTML=`
<p class="text-xs" text-gray-500">${new Date().toLocaleDateString()}</p>
<p class="text-xs" text-gray-500">Income:$ ${income.toFixed(2)}</p>
<p class="text-xs" text-gray-500">Expenses:$ ${totalExpenses.toFixed(2)}</p>
<p class="text-xs" text-gray-500">Balance:$ ${balance.toFixed(2)}</p>

`;
const historycontainer=document.getElementById('history-list');
historycontainer.insertBefore(expenseshow,historycontainer.firstChild);


});




document.getElementById('calculate-savings')
.addEventListener('click',function(event){
    event.preventDefault()

//Reapeat Work

const income= getInputFieldByID('income');
    const software= getInputFieldByID('software');
    const courses= getInputFieldByID('courses');
    const internet= getInputFieldByID('internet');
    console.log(income,software,courses,internet);

    // expenses calculation
const totalExpenses= software+courses+internet;
const balance=income-totalExpenses;

    const savingpercentage= getInputFieldByID('savings')
    const saving=(savingpercentage*balance)/100;
    console.log(saving);
    
 const savingshow=document.getElementById('savings-amount');
 savingshow.innerText=saving;

    
const reamingbalance=balance-(totalExpenses+saving);
console.log(reamingbalance);

const reamingbalanceshow=document.getElementById('remaining-balance');
reamingbalanceshow.innerText=reamingbalance;
    
})

// history desing statusbar
const assistanttab=document.getElementById("assistant-tab")
const historytab=document.getElementById("history-tab")
const expensedForm =document.getElementById("expense-form")
historytab.addEventListener('click',function(){

console.log('history tab click');

historytab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "duration-200",
    "transition-colors"

);

assistanttab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "duration-200",
    "transition-colors"
)
expensedForm.classList.add('hidden');
const historylistshow=document.getElementById('history-section')
historylistshow.classList.remove('hidden')

});



assistanttab.addEventListener('click',function(){

    console.log('assistant button click');
    assistanttab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
        "duration-200",
        "transition-colors"
    )


  historytab.classList.remove(

    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "duration-200",
    "transition-colors"
  );
  expensedForm.classList.remove('hidden');
})
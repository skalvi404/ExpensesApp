function getInputFieldByID(id){
    const inputValue=document.getElementById(id).value;
    const inputValueNumber= parseFloat(inputValue);
    return inputValueNumber;
}
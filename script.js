function checkNumber(){
    var input = document.getElementById('checker').value
    var output='';
    if (input%2==0){
        output='This is an Even Number'
    }else{
        output='This is an Odd Number'
    }
document.getElementById('result').innerHTML=output;
}
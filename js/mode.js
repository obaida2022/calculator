function insert(num){
    var myString = document.form.textView.value;
    var lastChart = myString[myString.length - 1];
    if(myString.length < 30){
        if(!isNaN(lastChart)  || lastChart == null || !isNaN(num)){
            document.form.textView.value = myString +num;

        }
        else if (num != lastChart) {
            document.form.textView.value = myString.replace(lastChart, num);
            
        }
    }
}


function equle() {
    var sum = document.form.textView.value;
    document.form.textView.value = eval(sum);
}

function clean(){
    document.form.textView.value = '';
}

function back(){
    var exp = document.form.textView.value;
    document.form.textView.value = exp.substring(0, exp.length - 1);
}
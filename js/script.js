function insert(num) {
    document.querySelector("div.header input[name=textview]").placeholder='';
    document.querySelector("div.header input[name=textview]").style.textAlign='right';
    document.form.textview.value =
    document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
    document.querySelector("div.header input[name=textview]").placeholder='';
    document.querySelector("div.header input[name=textview]").style.textAlign='right';
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'Backspace') {
      var exp = document.form.textview.value;
      document.form.textview.value = exp.substring(0,exp.length-1);
      document.querySelector("div.header input[name=textview]").placeholder='';
      document.querySelector("div.header input[name=textview]").style.textAlign='right';
    }
});

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        try {
            document.form.textview.value = eval(exp);
        } catch (err) {
            document.form.textview.value = "";
            document.querySelector("div.header input[name=textview]").placeholder='error';
            document.querySelector("div.header input[name=textview]").style.textAlign='center';
        }
    }
}
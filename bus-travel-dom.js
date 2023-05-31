var checkedRadio = document.querySelector('input[name="peak"]:checked');
var btn = document.querySelector('#test');

btn.addEventListener('click', function(){
    console.log(checkedRadio);
});
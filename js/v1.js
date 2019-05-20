let output = document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    //Get input value 

    let val1 = parseInt(document.getElementById('value-1').value);
    let val2 = parseInt(document.getElementById('value-2').value);

    let operator = document.getElementById('option').value;

  
    if (operator === 'add') {
        ans = val1 + val2;
    } else if (operator === 'sub') {
        ans = val1 - val2;
    } else if (operator === 'mul') {
        ans = val1 * val2;
    } else {
        ans = val1 / val2;
    }
    document.getElementById('output').innerHTML = ans;
});
// document.getElementById('output').innerHTML = ans;













//get the current year for copyright
$('#year').text(new Date().getFullYear());
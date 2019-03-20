var arr = '';
function uppercase() {
    arr = '';
    var userText = document.getElementById('userText').value;
    if (userText.length > 0) {
        var userTextArr = userText.split(' ');
        for (var i = 0; i < userTextArr.length; i++) {
            var now = userTextArr[i];
            var upperCase = now[0].toUpperCase() + now.slice(1);
            arr += upperCase + ' ';
        }
    } else {
        alert('Введи строку, всё остальное я сделаю сам');
    }
    if (arr.length > 0) {
        alert(arr);
    }
}

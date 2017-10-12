//http://jsonplaceholder.typicode.com/
//http://jsfiddle.net/serdidg/pphzjh25/1/
//http://forundex.ru/web/Poluchenie-json-i-vivod-v-tablicu-54009

function addTable(post_data) {
    //newTable = document.createElement("table");
    //document.body.appendChild(newTable);

    var strData = JSON.stringify(post_data);
    var realJSON = strData.replace(/([\w]+):/g, '"$1":');
    console.log(realJSON)
    var dataObj = JSON.parse(realJSON);
    for (var i = 0; i < dataObj.length; i++) {
        var row = '<tr><td>' + dataObj[i].id + '</td><td>' + dataObj[i].name + '</td><td>' + dataObj[i].username + '</td><td>' + dataObj[i].email + '</td></tr>';
        $('table').append(row);
    }
}

$('.div-run-test-button').click(function() {
    var textfeld_value = $('.div-input-test-urle').val();
    //var username = $("input#username").val();
    //var password = $("input#password").val();  
    var user = 'admin';
    var password = 'admin';

    var auth = btoa('username:password');
    console.log(textfeld_value);
    console.log(auth);
    console.log(user);

    $.ajax(textfeld_value, {
        method: 'GET'
    }).then(function(data) {
        console.log(data.length);
        console.log(data.id);
        console.log(data.body);
        addTable(data)
        $('.div-input-test-urle').val("UserID=" + data.userId)
    });
});
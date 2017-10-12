//http://jsonplaceholder.typicode.com/
//http://jsfiddle.net/serdidg/pphzjh25/1/
//http://forundex.ru/web/Poluchenie-json-i-vivod-v-tablicu-54009

function addTable(post_data) {
	 

	var  table_head = ["id", "name", "username", "email", "address", "phone", "website", "company"],
         newTable = document.createElement("table");
	for (var y = 0; y <= post_data.length; y++){
		var newRow = newTable.insertRow(y);
		for (var x = 0; x < table_head.length; x++){
		var newCell = newRow.insertCell(x);
		if (y===0 && x >= 0){
		newCell.innerHTML = table_head[x];
		}
		else {
		for (var i = 1; i < post_data.length; i++){
			for (var j = 0; j <= Object.keys(post_data[0]).length; j++){
				if (y===i && x===j){
					newCell.innerHTML = post_data[i].name;
			}
		}
		}
		}
		}
		}
		document.body.appendChild(newTable);
}


$('.div-run-test-button').click(function(){
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
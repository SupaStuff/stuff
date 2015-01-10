$(document).ready(function(){
	var friday1 = (new Date(document.getElementById('friday1').innerHTML)).getTime();
	var today = (new Date()).getTime();
	var diff_ms = today-friday1;
	var week = Math.ceil(diff_ms/(1000*60*60*24*7))+1;
	$('#weekNo').text(week);
	
	var savings = 0;
	
	for(var i = 0; i<=week; i++) savings += i;
	
	var actual = Number(document.getElementById('actual').value);
	
	for(var i = 1; i<=4; i++)
	{
		$('#deposit'+i).text("$"+week*i);
		$('#savings'+i).text("$"+savings*i);
		$('#actual'+i).text("$"+(actual+(week*i)));
	}
});

$(document).on('change', '#actual', function(){
	var week = Number(document.getElementById('weekNo').innerHTML);
	var actual = Number(document.getElementById('actual').value);
	
	for(var i = 1; i<=4; i++) $('#actual'+i).text("$"+(actual+(week*i)));
});
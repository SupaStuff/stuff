$(document).ready(function(){
	var friday1 = (new Date(document.getElementById('friday1').innerHTML)).getTime();
	var today = (new Date()).getTime();
	var diff_ms = today-friday1;
	var week = Math.ceil(diff_ms/(1000*60*60*24*7))+1;
	$('#weekNo').text(week);
	
	var retroWeek = 53-week;
	
	var savings = 0;
	var retroSavings = 0;
	for(var i = 0; i<=week; i++) savings += i;
	for(var i = 52; i>=retroWeek; i--) retroSavings += i;
	
	for(var i = 1; i<=4; i++)
	{
		$('#deposit'+i).text("$"+week*i);
		$('#savings'+i).text("$"+savings*i);
		
		$('#retrodeposit'+i).text("$"+retroWeek*i);
		$('#retrosavings'+i).text("$"+retroSavings*i);
	}
	
	
});

$(document).on('change', '#actual', function(){
	var week = Number(document.getElementById('weekNo').innerHTML);
	var actual = Number(document.getElementById('actual').value);
	
	for(var i = 1; i<=4; i++) $('#actual'+i).text("$"+(actual+(week*i)));
});

$(document).on('change', '#retroactual', function(){
	var week = 53-Number(document.getElementById('weekNo').innerHTML);
	var actual = Number(document.getElementById('retroactual').value);
	
	for(var i = 1; i<=4; i++) $('#retroactual'+i).text("$"+(actual+(week*i)));
});
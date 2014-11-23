$(document).on('click', '#btn', function(){
    var n = $('#n').val();

    bread(500, n);
});

function bread(spent, n)
{
	var bal = 0;
	spent *= 0.01;
	$('#money').text('');
	for(var i=0; i<=n; i++){
		bal += Math.pow(1.25, i);
		$('#money').append($('<p>Awards balance after ' + i + ' months = $' + (spent*bal).toFixed(2)
		+ 'Next month\'s bonus = $' + (0.25*spent*bal).toFixed(2) + '</p>'));
	}
}
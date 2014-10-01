$(document).on('click', '#btn', function(){
    var min = $('#min').val();
    var max = $('#max').val();
    var n = $('#n').val();

    calculate(min, max, n);
});

$(document).on('click', '#randy', function () {

    for (var i = 0; i < 10; i++) {
        var min = Math.floor(randy(100, 2500));
        var max = Math.floor(randy(100, 2500));
        var n = randy(1, 5);

        calculate(min, max, n);
    }
});

function calculate(min, max, n)
{
    var brut = brute(min, max, n);
    var corect = correct(min, max, n);
    var wrng = wrong(min, max, n);

    console.log(brut);
    console.log(corect);
    console.log(wrng);

    $('#brute div').prepend($('<p>thickness = ' + brut + '</p>'));
    $('#correct div').prepend($('<p>thickness = ' + corect + '</p>'));
    $('#wrong div').prepend($('<p>thickness = ' + wrng + '</p>'));
    $('#match div').prepend($('<p>' + ((corect == wrng) ? 'Match!' : '**************Wrong****************') + '</p>'));
}

function brute(min, max, n)
{
    var tmin = [], tmax = [], match = [], last = 11;
    for (var m = 0; m < last; m++) tmin.push((m + 0.5) * min / (2 * n));
    for (var m = 0; m < last; m++) tmax.push((m) * max / (2 * n));

    $.each(tmin, function (x, currentMin) {
        if ($.inArray(currentMin, tmax) != -1) match.push(currentMin);
    });

    var $table1 = $('<table><caption>m1 vs t</caption><th>m1</th><th>t</th></table>');
    $('#brute div').prepend($table1);
    $.each(tmax, function (m, t) {
        var $row = $('<tr></tr>');
        $table1.append($row);

        var $m = $('<td></td>');
        $m.text(m);
        $row.append($m);

        var $t = $('<td></td>');
        $t.text(t);
        $row.append(t);
    });

    var $table2 = $('<table><caption>m2 vs t</caption><th>m2</th><th>t</th></table>');
    $('#brute div').prepend($table2);
    $.each(tmin, function (m, t) {
        var $row = $('<tr></tr>');
        $table2.append($row);

        var $m = $('<td></td>');
        $m.text(m);
        $row.append($m);

        var $t = $('<td></td>');
        $t.text(t);
        $row.append(t);
    });

    return (match.length > 0) ? match[0] : null;
}

function correct(min, max, n)
{
    var m1 = 0.1, m2 = -1;
    while (m1 % 1 !== 0)
    {
        if (m2 > 20) break;
        m2++;
        m1 = (m2 + 0.5) * min / max;
    }
    return (m2 <= 20) ? m1 * max / (2 * n) : null;
}

function wrong(min, max, n) { return min * max / (4 * n * (max - min)); }


/*copied from some dude*/
function randy(min, max) {
    return Math.random() * (max - min + 1) + min;
}
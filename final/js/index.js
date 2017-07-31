var rand = function(start, end) {
    var n = end - start + 1;
    var r = Math.random() * n;
    var f = Math.floor(r);
    return f + start;
}


$('#data').empty();
card = [];
var poker = [];
for (var i = 1; i <= 52; i++) {
    poker.push(i);
}

// 洗牌
for (var i = 1; i <= 520; i++) {
    var r = rand(1, 52) - 1;
    var t = poker[0];
    poker[0] = poker[r];
    poker[r] = t;
}

for (var i = 0; i < 52; i++) {
    card.push(poker[i]);
}

$('#go').on('click', function() {
    window.location.href = "./game.html";
});

$('#back').on('click', function() {
    window.location.href = "./index.html";
});

var count = 0;
var count1 = 0;
var ace = 0;
var ace1 = 0;
var win = 0,
    lose = 0,
    tie = 0;
var i = 4;

$('#start').on('click', function() {
    document.getElementById('data1').innerHTML = "";
    $img = $('<img>').attr('src', './poker/pic' + card[0] + '.png');
    $col = $('<div>').attr('class', 'col-1 text-center').append($img);
    $('#data').append($col);

    $img = $('<img>').attr('src', './poker/back.png');
    $col = $('<div>').attr('class', 'col-1 text-center').append($img);
    $('#data1').append($col);

    $img = $('<img>').attr('src', './poker/pic' + card[2] + '.png');
    $col = $('<div>').attr('class', 'col-1 text-center').append($img);
    $('#data').append($col);

    $img = $('<img>').attr('src', './poker/pic' + card[3] + '.png ');
    $col = $('<div>').attr('class', 'col-1 text-center').append($img);
    $('#data1').append($col);

    var c1 = card[0] - 1;
    point1 = Math.floor(c1 / 4) + 1;
    if (point1 > 10) {
        point1 = 10;
    }
    if (point1 == 1) {
        if (count + 11 <= 21) {
            point1 = 11;
            ace++;
        } else {
            point1 = 1;
        }
    }
    count = count + point1;
    var c1 = card[2] - 1;
    point1 = Math.floor(c1 / 4) + 1;
    if (point1 > 10) {
        point1 = 10;
    }
    if (point1 == 1) {
        if (count + 11 <= 21) {
            point1 = 11;
            ace++;
        } else {
            point1 = 1;
        }
    }
    count = count + point1;
    var c2 = card[1] - 1;
    point2 = Math.floor(c2 / 4) + 1;
    if (point2 > 10) {
        point2 = 10;
    }
    if (point2 == 1) {
        if (count + 11 <= 21) {
            point2 = 11;
            ace1++;
        } else {
            point2 = 1;
        }
    }
    count1 = count1 + point2;
    var c2 = card[3] - 1;
    point2 = Math.floor(c2 / 4) + 1;
    if (point2 > 10) {
        point2 = 10;
    }
    if (point2 == 1) {
        if (count + 11 <= 21) {
            point2 = 11;
            ace1++;
        } else {
            point2 = 1;
        }
    }
    count1 = count1 + point2;
    $('#count').val(count);

    if (count == 21) {
        $('#result').val("BLACK JACK!!!");
        win++;
    }
    if (count > 21) {
        $('#result').val("YOU LOSE!!!");
        lose++;
    }
    $('#win').val(win);
    $('#lose').val(lose);
    $('#tie').val(tie);
});

$('#ask').on('click', function() {
    $img = $('<img>').attr('src', './poker/pic' + card[i] + '.png');
    $col = $('<div>').attr('class', 'col-1 text-center').append($img);
    $('#data').append($col);


    var c = card[i] - 1;
    point = Math.floor(c / 4) + 1;
    if (point > 10) {
        point = 10;
    }
    //判斷A為1或11
    if (point == 1) {
        if (count + 11 <= 21) {
            point = 11;
            ace++;
        } else {
            point = 1;
        }
    }
    count = count + point;
    $('#count').val(count);
    i++;
    if (count == 21) {
        $('#result').val("YOU WIN!!!");
        win++;
    }
    if (count > 21) {
        if (ace == 0) {
            $('#result').val("YOU LOSE!!!");
            lose++;
        } else if (ace == 1) {
            count -= 10;
            $('#count').val(count);
            ace = ace - 1;
        }
    }
    if (i == 7 && count < 21) {
        $('#result').val("YOU WIN!!!");
        win++;
    }
    $('#win').val(win);
    $('#lose').val(lose);
    $('#tie').val(tie);
});

$('#stop').on('click', function() {
    document.getElementById('data1').innerHTML = "";
    $img = $('<img>').attr('src', './poker/pic' + card[1] + '.png');
    $col = $('<div>').attr('class', 'col-1 text-center').append($img);
    $('#data1').append($col);
    $img = $('<img>').attr('src', './poker/pic' + card[3] + '.png');
    $col = $('<div>').attr('class', 'col-1 text-center').append($img);
    $('#data1').append($col);
    if (count1 == 21) {
        $('#result').val("YOU LOSE!!!");
        lose++;
    }
    while (count1 < 17) {
        $img = $('<img>').attr('src', './poker/pic' + card[i] + '.png');
        $col = $('<div>').attr('class', 'col-1 text-center').append($img);
        $('#data1').append($col);

        var c = card[i] - 1;
        point1 = Math.floor(c / 4) + 1;
        if (point1 > 10) {
            point1 = 10;
        }
        //判斷A為1或11
        if (point1 == 1) {
            if (count1 + 11 <= 21) {
                point1 = 11;
                ace1++;
            } else {
                point1 = 1;
            }
        }
        count1 = count1 + point1;
        $('#count1').val(count1);
        i++;
    }
    if (count1 > count && count1 <= 21) {
        $('#count').val(count + "<" + count1);
        $('#result').val("YOU LOSE!!!");
        lose++;
    }
    if (count1 < count && count <= 21) {
        $('#count').val(count + ">" + count1);
        $('#result').val("YOU WIN!!!");
        win++;
    }
    if (count1 > 21) {
        if (ace1 == 0) {
            $('#result').val("YOU WIN!!!");
            win++;
        } else if (ace1 == 1) {
            count1 -= 10;
            ace1 = ace1 - 1;
        }
    }
    if (count1 == count) {
        $('#count').val(count + "=" + count1);
        $('#result').val("Tie Game");
        tie++;
    }
    $('#win').val(win);
    $('#lose').val(lose);
    $('#tie').val(tie);
});

$('#next').on('click', function() {
    document.getElementById('data1').innerHTML = "";
    document.getElementById('data').innerHTML = "";
    document.getElementById('count').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    count = 0;
    count1 = 0;
    $('#count').val(count);
    $('#data').empty();
    card = [];
    var poker = [];
    for (var i = 1; i <= 52; i++) {
        poker.push(i);
    }

    // 洗牌
    for (var i = 1; i <= 520; i++) {
        var r = rand(1, 52) - 1;
        var t = poker[0];
        poker[0] = poker[r];
        poker[r] = t;
    }

    for (var i = 0; i < 52; i++) {
        card.push(poker[i]);
    }
    i = 4;
});

$('#reset').on('click', function() {
    window.location.reload();
});
$('#count').val(count);
$('#win').val(win);
$('#lose').val(lose);
$('#tie').val(tie);
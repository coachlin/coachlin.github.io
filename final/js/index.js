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

for (var i = 0; i < 10; i++) {
    card.push(poker[i]);
}
var i = 0;
var count = 0;
var count1 = 0;


$('#ask').on('click', function() {

    $img = $('<img>').attr('src', './poker/pic' + card[i] + '.png');
    $col = $('<div>').attr('class', 'col-1 text-center').append($img);
    $('#data').append($col);


    var c = card[i] - 1;
    point = Math.floor(c / 4) + 1;
    if (point > 10) {
        point = 10;
    }
    count = count + point;
    $('#count').val(count);
    i++;
    if (count == 21) {
        $('#count').val("BLACK JACK!!!");
    }
    if (count > 21) {
        $('#count').val("YOU LOOSE!!!");
    }
});

$('#stop').on('click', function() {

    $img = $('<img>').attr('src', './poker/pic' + card[i] + '.png');
    $col = $('<div>').attr('class', 'col-1 text-center').append($img);
    $('#data1').append($col);


    var c = card[i] - 1;
    point = Math.floor(c / 4) + 1;
    if (point > 10) {
        point = 10;
    }
    count1 = count1 + point;
    $('#count1').val(count1);
    i++;
    if (count1 == 21) {
        $('#count1').val("BLACK JACK!!!");
    }
    if (count1 > 21) {
        $('#count1').val("YOU LOOSE!!!");
    }
});
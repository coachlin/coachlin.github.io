// 請 jQuery 抓 button 元件，並且設定當 click 事件發生後，要執行的程式碼
$('button').on('click', function() {
    var a1 = $('#a1').val()
    var a2 = $('#a2').val()
    var a3 = $('#a3').val()
    var b1 = $('#b1').val()
    var b2 = $('#b2').val()
    var b3 = $('#b3').val()
    var c1 = $('#c1').val()
    var c2 = $('#c2').val()
    var c3 = $('#c3').val()
    var d1 = a2 * b3 - a3 * b2
    var d2 = a3 * b1 - a1 * b3
    var d3 = a1 * b2 - a2 * b1
    var volume = c1 * d1 + c2 * d2 + c3 * d3
    volume1 = Math.abs(volume)
    $('#result').val(volume1)
})
$('#addClass').on('click', function () {
    $(this).addClass('addedClass');
});

$('#removeClass').on('click', function () {
    $(this).removeClass('blue');
});

$('#toggleClass').on('click', function () {
    $(this).toggleClass('green');
});

$('#getAttr').on('click', function () {
    console.log( $(this).attr("class") );
});

$('#setAttr').on('click', function () {
    $(this).attr('title', 'Set Attribute');
});

$('#alert').bind('click', function () {
    alert('Hello! :P');
});

$('#triggerAlert').on('click', function () {
    $('#alert').trigger('click');
});


$('#cloneThis').on('click', function () {
    $(this).clone().text('Cloned').insertAfter(this);
});

$('#closestElement').on('click', function () {
    console.log($(this).closest('li'));
});

$('#eachBtnText').on('click', function () {
   $('button').each(function () {
       var arr = [];
       for (var j=0; j<= $(this).length; j++) {
           arr[j] = $(this).text();
           console.log(arr[j] + ' ');
       }
   });
});

$('#findMe').on('click', function () {
    console.log($(this).find());
});

$('#fadeInText').on('click', function () {
   $('#fadeInText + p').fadeIn();
});

$('#fadeOutText').on('click', function () {
   $('#fadeOutText + p').fadeOut();
});

$('#hideText').on('click', function () {
    $('#hideText + p').hide(400);
});

$('#showText').on('click', function () {
   $('#showText + p').show('slow');
});

$('#dataAboutMe').on('click', function () {
    var p = $('#dataAboutMe:first');
    var position = p.position();
    var my = $('#dataAboutMe');
    var parent = my.parent();
   console.log(
       'Ширина: ' + $(this).width() + 'px ' +
       'Высота: ' + $(this).height() + 'px ' +
       'Left: ' + position.left + ' ' +
       'Top: ' + position.top + ' ' +
       'Родитель: ' + parent.attr('class') + ' ' +
       'Сосед слева: ' + $(this).prev().attr('class') + ' ' +
       'Сосед справа: ' + $(this).next().attr('class') + ' ' +
       'Текст: ' + $(this).text()
   );
});

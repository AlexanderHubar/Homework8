$('#name').change(function() {
    console.log($(this).attr('name') + ': '+ $(this).val());
});
$('#surname').change(function() {
    console.log($(this).attr('name') + ': ' + $(this).val());
});
$('input[name=gender]').change(function () {
    console.log($(this).attr('name') + ': ' + $(this).attr('value'))
});
$('#age').change(function () {
    console.log($(this).attr('name') + ': ' + $(this).val())
});
$('#cars').change(function () {
    console.log ($(this).attr('name') + ': ' + $(this).val());
});
$('input[name=affairs]').change(function () {
    console.log ($(this).attr('name') + ': ' + $(this).val());
});
$('input[name=books]').change(function () {
    console.log ($(this).attr('name') + ': ' + $(this).val());
});
$('#spam:checked').change(function () {
   console.log($(this).attr('name') + ': ' + $(this).is(':checked') );
});

$('#form').submit(function () {
    var data = $('#form').serializeArray();
    console.log('Значения формы: ');
    $.each(data,function(){
        console.log(this.name+' = '+this.value);
    });
    return false;
});

$( "#name" ).keydown(function() {
    $(this).css('border-color','#71db4a');
});

$( "#surname" ).keyup(function() {
    $(this).css('background-color','#baeda8');
});
const listAmen = [];
$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if (this.checked) {
      console.log($(this).attr('data-id'));
      listAmen.push($(this).attr('data-id'));
    } else {
      listAmen.splice(listAmen.indexOf($(this).attr('data-id'), 1));
    }
    $('.amenities h4').css('display', 'inline-block');
    $('.amenities h4').append($(this).attr('data-name') + ' ');
  });
});

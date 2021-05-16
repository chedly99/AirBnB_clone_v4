const listAmen = []; $(document).ready(function () {
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

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  type: 'post',
  data: ('{}'),
  contentType: 'application/json',
  success: function (data) {
    for (const place of data) {
      $('SECTION.places').append(
          `<ARTICLE>
          <div class= "title_box">
          <h2> ${place.name} </h2>
          <div class="price_by_night">$ ${place.price_by_night}
          </div>
          </div>
          <div class="information">
          <div class="max_guest"> ${place.max_guest} Guest${(place.max_guest !== 1 ? 's' : '')}
          </div>
          <div class="number_rooms"> ${place.number_rooms} Bedroom${(place.number_rooms !== 1 ? 's' : '')}
          </div>
          <div class="number_bathrooms"> ${place.number_bathrooms} Bathroom${(place.number_bathrooms !== 1 ? 's' : '')}
          </div>
          </div>
          <div class="user">
          <div class="description"> ${place.description} </div>
          </ARTICLE>`
      );
    }
  }
});

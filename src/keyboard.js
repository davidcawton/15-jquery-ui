
export default function() {
  var enter = $('.text-area');

  $('.key-btn').on('click', function() {
    var char = $(this).html();
    enter.html(enter.html() + char);
  });
}

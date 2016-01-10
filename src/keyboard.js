
export default function() {
  var enter = $('.text-area');
  var keys = $('.key-btn');
  var tabBtn = $('#key-btn__tab');
  var retBtn = $('key-btn__return');
  var delBtn = $('.delete');
  var spaceBtn = $('.key-btn__space');

  $('.key-btn').on('click', function() {
    var char = $(this).html();
    enter.html(enter.html() + char);
  });

  delBtn.on('click', function() {
    var html = enter.html();
    enter.html(html.substr(0, html.length - 1));
  });

  retBtn.on('click', function() {
    var char = '\n';
    enter.html(enter.html() + char);
  });

  tabBtn.on('click', function() {
    var char = '\t';
    enter.html(enter.html() + char);
  });

}

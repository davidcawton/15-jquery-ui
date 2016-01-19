
export default function() {
  var enter = $('.text-area');
  var keys = $('.key-btn');
  var tabBtn = $('.tab');
  var retBtn = $('.return');
  var delBtn = $('.delete');
  var spaceBtn = $('.space');
  var shift = false;
  var capslock = false;

  $('.key-btn').on('click', function() {
    var char = $(this).html();
    enter.html(enter.html() + char);
  });

  delBtn.on('click', function() {
    var html = enter.html();
    enter.html(html.substr(0, html.length - 1));
  });

  retBtn.on('click', function() {
    var char = `\n`;
    enter.html(enter.html() + char);
  });

  tabBtn.on('click', function() {
    var char = `\t`;
    enter.html(enter.html() + char);
  });

  spaceBtn.on('click', function() {
    var char = ` `;
    enter.html(enter.html() + char);
  });

}

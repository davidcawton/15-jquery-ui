
export default function() {
  var enter = $(`.text-area`);
  var shift = false;
  var capslock = false;

  $(`.keysboard-keys li`).click(function() {
    var char = $(this).html();
    enter.html(enter.html() + char);
  });
};

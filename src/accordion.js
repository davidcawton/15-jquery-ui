export default function() {
  var accord = $('.accordion__bar');
  var list = $('.accordion__bar-ul');

  accord.on('click', function() {
    $(`.accordion__bar-ul`).slideUp();
    $(this).next(list).slideDown();

    ev.preventDefualt();
  });
};

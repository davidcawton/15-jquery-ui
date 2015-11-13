export default function() {
  var accord = $('.accordion__bar');
  var list = $('.accordion__bar-ul');

  accord.on('click', function() {
    $(this).next(list).slideToggle();
  });
};

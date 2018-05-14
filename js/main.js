function menuToggle() {
    $(this).toggleClass('hamburgerBtn--xMode');
    $('.header__nav').slideToggle(300);
}

function showModal(e) {
    const modal = $(this).data('modal');

    document.querySelector('body').classList.add('u-modal-visible');
    document.querySelector('div[data-modal="' + modal +'"]').classList.add('modal__container--visible');

    e.preventDefault();
}

function hideModal(e) {
    if (!$(e.target).hasClass('modal')) {
        document.querySelector('.modal__container--visible').classList.remove('modal__container--visible');
        document.querySelector('body').classList.remove('u-modal-visible');
    }
}

$('.hamburgerBtn').on('click', menuToggle);
$('.js-modal-trigger').on('click', showModal);
$('.modal__container').on('click', hideModal);
$('.modal').on('click', function(e) {
    e.stopPropagation();
});
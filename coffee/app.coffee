$ ->
  console.log 'How much wood could a woodchuck chuck if a woodchuck could chuck wood?'

  # modal
  modal = $('.modal')
  $('nav .email').click ->
    modal.fadeIn('fast')
    modal.addClass('modal-open')
  $('.modal .close-modal').click ->
    modal.fadeOut('fast')

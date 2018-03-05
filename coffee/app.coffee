$ ->
  console.log 'How much wood could a woodchuck chuck if a woodchuck could chuck wood?'

  # modal
  modal = $('.modal')
  $('.email').click ->
    modal.fadeIn('fast')
    modal.addClass('modal-open')
  $('.modal .close-modal').click ->
    modal.fadeOut('fast')

  # email
  $('.modal .form-submit').click (e) ->
    e.preventDefault()
    $.ajax
      url: '//formspree.io/paul.ballas@gmail.com'
      method: 'POST'
      dataType: 'json'
      data: $('#email_paul').serialize()
      success: (result) ->
        $('.form-item').fadeOut('fast')
        $('.on-success').fadeIn()
        setTimeout (->
          modal.fadeOut('fast')
        ), 2000
    return false

$(function(){var o;return console.log("How much wood could a woodchuck chuck if a woodchuck could chuck wood?"),o=$(".modal"),$(".email").click(function(){return o.fadeIn("fast"),o.addClass("modal-open")}),$(".modal .close-modal").click(function(){return o.fadeOut("fast")}),$(".modal .form-submit").click(function(a){return a.preventDefault(),$.ajax({url:"//formspree.io/paul.ballas@gmail.com",method:"POST",dataType:"json",data:$("#email_paul").serialize(),success:function(a){return $(".form-item").fadeOut("fast"),$(".on-success").fadeIn(),setTimeout(function(){return o.fadeOut("fast")},2e3)}}),!1})});
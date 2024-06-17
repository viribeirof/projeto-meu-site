
function validateForm() {
 
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("foneError").innerText = "";
  document.getElementById("messageError").innerText = "";


  var nome = document.getElementById("inputNome").value;
  var email = document.getElementById("inputEmail").value;
  var telefone = document.getElementById("inputTelefone").value;
  var mensagem = document.getElementById("inputMensagem").value;


  if (!validateEmail(email)) {
    document.getElementById("emailError").innerText = "E-mail inválido";
    return;
  }

  if (mensagem.trim() === "") {
    document.getElementById("messageError").innerText = "A mensagem não pode estar vazia";
    return;
  }
   if (nome.trim() === "") {
    document.getElementById("messageError").innerText = "O nome não pode estar vazio";
    return;
  }
  if (telefone.trim() === "") {
    document.getElementById("messageError").innerText = "O telefone não pode estar vazio";
    return;
  }
  
  alert("E-mail enviado com sucesso! Responderemos em breve.");
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

window.addEventListener("scroll", function () {
    var navcor = document.getElementById("navcor");

    if (window.scrollY > 50) {
      navcor.classList.add("scrolled");
    } else {
      navcor.classList.remove("scrolled");
    }
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      $('.progress-bar').each(function () {
        var section = $($(this).data('section'));
        var sectionTop = section.offset().top;
        var sectionHeight = section.height();
        var windowTop = $(window).scrollTop();
        var scrollPercentage = ((windowTop - sectionTop) / (sectionHeight - $(window).height()) * 100).toFixed(2);
        scrollPercentage = Math.min(100, Math.max(0, scrollPercentage));
        $(this).css('width', scrollPercentage + '%');
      });
    });
  });





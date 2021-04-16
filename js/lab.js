/*----abrir Janela Modal----------*/
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click",function(e){
    e.preventDefault()
    modalC.style.opacity = "1"
    modalC.style.visibility = "visible"
    modal.classList.toggle("modal-close")
})

/*----fechar Janela Modal----------*/
    cerrar.addEventListener("click", function(){
        modal.classList.toggle("modal-close")
        
        setTimeout(function(){
            modalC.style.opacity = "0"
            modalC.style.visibility = "hidden"
        },1000)
    })

/*----CPF----- NÃO ENTRA LETRAS
                  AVISA SE ESTIVER EM INVÁLIDO--------------------------------------------------*/ 

function VerificaCPF() {
    let strCpf = $("#cpf").val();

    var soma = 0;
    var resto;
    if (strCpf == '') {
        return false
    }

    if (strCpf == "00000000000" || strCpf.length != 11) {
        $('#cpf').css({backgroundColor: "#fb8080"});
        return false;
    }

    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(10, 11))) {
        $('#cpf').css({backgroundColor: "#fb8080"});
        return false;
    }

    $('#cpf').css({backgroundColor: "#a5f1bc"});
    return true;
}
/*foco cinza no input*/ 
$('#cpf').focus(function () {
    $('#cpf').css({backgroundColor: "#e7e7e7"});
})

/*-------CNPJ-----------Não aceita letras------Apenas numeros 
com 14 digitos != de números repetidos-----------------------------*/
/*cnpj de valido de teste 63.665.104/0001-35*/ 


function VerificaCNPJ() {
    let cnpj = $("#cnpj").val();

    var soma = 0;
    var resto;
    if (cnpj == '') {
        return false
    }

    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || cnpj.length != 14) {
        
        $('#cnpj').css({backgroundColor: "#fb8080"});
        return false;
    }

    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)){
        $('#cnpj').css({backgroundColor: "#fb8080"});
          return false;
      }
           
      $('#cnpj').css({backgroundColor: "#a5f1bc"});
      return true;
    
}
    /*-------*/

$('#cnpj').focus(function () {
    $('#cnpj').css({backgroundColor: "#e7e7e7"});
})

/*------------------Scroll suave topo--------------------------------------*/
/* Forma 1 (deu conflito com o bootstrap mas funciona):

    $(".ancora").on("click", function(){
        $("html,body").animate({
            scrollTop:0
        },800)
    }) */

    jQuery(document).ready(function ($) {
        $(".ancora").click(function (event) {
          event.preventDefault();
          $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
        });
      });
/*---------------Botão Scroll Topo--------------------*/
  $(window).scroll(function(){ 
      
      var posicao = $(this).scrollTop();
      console.log(posicao)
      if(posicao >= 220)
      $(".ancora").show()
      else
      $(".ancora").hide()
  })
  /*-------------------Cards--------------*/

  function animeScroll(){
    var tela = $(window).height() * 3/4;
    var distanciaTopo = $(document).scrollTop();
    $(".anime_inicial").each(function(){
 
        itemTopo = $(this).offset().top     
                                    //ou usar -tela
        if(distanciaTopo > itemTopo - 750){   //ou colocar -200 ou -100 etc, p/ajustar como preferir.             
           $(this).addClass("anime_final")
        }else{
            $(this).removeClass("anime_final")
        }
    })
}
animeScroll();
$(window).scroll(function(){
    animeScroll()
})
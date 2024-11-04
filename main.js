$(document).ready(function () {
    $("#carrosel-imagens").slick({
        autoplay: true
    })

    $(".menu-burger").click(function () {
        $("nav").slideToggle();
    })

    $("#telefone-input").mask("(00) 00000-0000", {
        placeholder: "(55) 12345-1234"
    })

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            nome: {
                required: true
            },
            Mensagem: {
                required: true
            },
            veiculo: {
                required: false,

            }
        },
        messages: {
            nome: "Por favor, insira seu nome completo"
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos não preenchidos/incorretos!`)
            }
        }
    })

    $(".lista-veículos button").click(function () {
        const destino = $("#contato");
        const nomeVeiculo = $(this).parent().find("h3").text();

        $("#veiculo-input").val(nomeVeiculo);

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})
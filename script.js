// ===============================
// MENU MOBILE
// ===============================

function abrirMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("ativo");

}


// Fecha o menu quando clicar em um link

const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("menu")
            .classList.remove("ativo");

    });

});


// ===============================
// FILTRO DE PROJETOS
// ===============================

const filtros = document.querySelectorAll(".filtro");

const projetos = document.querySelectorAll(".projeto-card");


filtros.forEach(filtro => {

    filtro.addEventListener("click", () => {

        // Remove o estado ativo dos outros botões

        filtros.forEach(item => {

            item.classList.remove("ativo");

        });


        // Ativa o botão clicado

        filtro.classList.add("ativo");


        const categoria = filtro.dataset.filtro;


        projetos.forEach(projeto => {

            const categorias =
                projeto.dataset.categoria;


            // Mostrar todos

            if (categoria === "todos") {

                projeto.classList.remove("oculto");

                return;

            }


            // Verifica se o projeto pertence à categoria

            if (categorias.includes(categoria)) {

                projeto.classList.remove("oculto");

            } else {

                projeto.classList.add("oculto");

            }

        });

    });

});


// ===============================
// ANIMAÇÃO AO ENTRAR NA TELA
// ===============================

const elementosAnimados =
    document.querySelectorAll(
        ".solucao-card, .projeto-card, .servico"
    );


const observador =
    new IntersectionObserver(
        (elementos) => {

            elementos.forEach(elemento => {

                if (elemento.isIntersecting) {

                    elemento.target.style.opacity = "1";

                    elemento.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


elementosAnimados.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(20px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});
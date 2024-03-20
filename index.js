document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.conteudo').classList.add('animation-start');
});

document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.logo');
    const imagens = ["./1.svg", "./2.svg"];
    let indexImagemAtual = 0;
  
    const novaImagem = new Image();
    novaImagem.src = novaImagem.alt = imagens[indexImagemAtual];
    novaImagem.classList.add('dda');
    logo.appendChild(novaImagem);
  
    window.addEventListener('scroll', function () {
      const alturaJanela = window.innerHeight;
      const quantidadeScroll = window.scrollY;
      const quantasVezes100vh = Math.floor(quantidadeScroll / alturaJanela);
  
      if (quantasVezes100vh % 2 !== indexImagemAtual % 2) {
        novaImagem.src = novaImagem.alt = imagens[++indexImagemAtual % imagens.length];
      }
    });
  });

// Inicializa a animação de rolagem
function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.mudar1');

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.9;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;

                if (isSectionVisible) {
                    section.classList.add('mudar');
                } else {
                    section.classList.remove('mudar');
                }
            });
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}

// Chama a função para inicializar a animação de rolagem
initAnimacaoScroll();

// Mostra as informações do projeto
function mostrarInfoProjeto(projectId) {
    var projectInfo = document.getElementById(projectId + 'Info');
    if (projectInfo) {
        projectInfo.style.display = 'flex';
    }
}

// Fecha as informações do projeto
function fecharInfoProjeto(projectId) {
    var projectInfo = document.getElementById(projectId + 'Info');
    if (projectInfo) {
        projectInfo.style.display = 'none';
    }
}

// Inicializa a animação de rolagem para elementos com a classe 'js-scroll'
function initAnimacaoScrollJS() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;

                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}

function initAnimacaoScrollJS() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;

                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}

// Chama a função para inicializar a animação de rolagem para elementos com a classe 'js-scroll'
initAnimacaoScrollJS();

function mostrar(){
    const containerSobreMim = document.querySelector(".container-sobremim")


    if(containerSobreMim.classList.contains("invisivel")){
        containerSobreMim.classList.remove("invisivel")
        containerSobreMim.classList.add("aberto")
    }else{
        containerSobreMim.classList.remove("aberto")
        containerSobreMim.classList.add("invisivel")
    }
}




document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link');
    const cores = ["cor1", "cor2"]; // Substitua "cor1" e "cor2" pelas classes de cores desejadas
    let indexCorAtual = 0;
  
    window.addEventListener('scroll', function () {
      const alturaJanela = window.innerHeight;
      const quantidadeScroll = window.scrollY;
      const quantasVezes100vh = Math.floor(quantidadeScroll / alturaJanela);
  
      if (quantasVezes100vh % 2 !== indexCorAtual % 2) {
        indexCorAtual++;
        indexCorAtual %= cores.length;
  
        // Remover todas as classes de cor e adicionar a nova classe
        links.forEach(link => link.classList.remove(...cores));
        links.forEach(link => link.classList.add(cores[indexCorAtual]));
      }
    });
  });



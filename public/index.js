const BTN_MODAL_ABOUT_ME = document.getElementById("BtnSobreMim");
const CONTAINER_ABOUT_ME = document.getElementById("containerSobreMim");
const BTN_CLOSER_MODAL_ABOUT_ME = document.getElementById("buttonSuperior");
const COLOR_ICON_MUTATION = ["cor1", "cor2"];
const LINKS_NAV_BAR = document.querySelectorAll('.linkNavBar');

const MODAL_BANK = document.getElementById("BankInfo");
const BTN_OPEN_MODAL_BANK = document.getElementById("projectBank");
const BTN_CLOSED_MODAL_BANK = document.getElementById("closedBank");

const MODAL_CARS = document.getElementById("CarrosInfo");
const BTN_OPEN_MODAL_CARS = document.getElementById("projectCars");
const BTN_CLOSED_MODAL_CARS = document.getElementById("closedCars");

const MODAL_AV = document.getElementById("A-VInfo");
const BTN_OPEN_MODAL_AV = document.getElementById("ProjectVirtualAssistent");
const BTN_CLOSED_MODAL_AV = document.getElementById("closedAV");

const MODAL_PROJECTB = document.getElementById("projectBInfo");
const BTN_OPEN_MODAL_PROJECTB = document.getElementById("projectB");
const BTN_CLOSED_MODAL_PROJECTB = document.getElementById("closedProjectb");

const IMAGENS_LOGO = ["../assets/imgs/essential/1.svg", "../assets/imgs/essential/2.svg"];
const LOGO = document.querySelector('#logoNavBar');


const modalProject = (btnOpen, modal, btnClosed) => {
    btnOpen.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    btnClosed.addEventListener("click", () => {
        modal.style.display = "none";
    });
};

const changeLogoNavBar = () => {
    let indexImagemAtual = 0;
  
    const novaImagem = new Image();
    novaImagem.src = novaImagem.alt = IMAGENS_LOGO[indexImagemAtual];
    novaImagem.classList.add('dda');
    LOGO.appendChild(novaImagem);
  
    window.addEventListener('scroll', function () {
      const alturaJanela = window.innerHeight;
      const quantidadeScroll = window.scrollY;
      const quantasVezes100vh = Math.floor(quantidadeScroll / alturaJanela);
  
      if (quantasVezes100vh % 2 !== indexImagemAtual % 2) {
        novaImagem.src = novaImagem.alt = IMAGENS_LOGO[++indexImagemAtual % IMAGENS_LOGO.length];
      }
    });
}

const toggleVisibilityAboutMe = (buttonOpen, container, buttonCloser) => {
    buttonOpen.addEventListener("click", () => {
        if (container.classList.contains("invisible")) {
            container.classList.remove("invisible");
            container.classList.add("visible");
        }
    });
    buttonCloser.addEventListener("click", () => {
        if (container.classList.contains("visible")) {
            container.classList.remove("visible");
            container.classList.add("invisible");
        }
    })
}

function initAnimacaoScrollJS() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.8;

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

function mostrarInfoProjeto(projectId) {
    var projectInfo = document.getElementById(projectId + 'Info');
    if (projectInfo) {
        projectInfo.style.display = 'flex';
    }
}

const Mutation_Icon = () => {
    let indexCorAtual = 0;
  
    window.addEventListener('scroll', function () {
      const alturaJanela = window.innerHeight;
      const quantidadeScroll = window.scrollY;
      const quantasVezes100vh = Math.floor(quantidadeScroll / alturaJanela);
  
      if (quantasVezes100vh % 2 !== indexCorAtual % 2) {
        indexCorAtual++;
        indexCorAtual %= COLOR_ICON_MUTATION.length;
        LINKS_NAV_BAR.forEach(link => link.classList.remove(...COLOR_ICON_MUTATION));
        LINKS_NAV_BAR.forEach(link => link.classList.add(COLOR_ICON_MUTATION[indexCorAtual]));
      }
    });
}


function mostrarInfoProjeto(projectId,btnPress) {
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



const initialization = () => {
    changeLogoNavBar();
    initAnimacaoScrollJS();
    modalProject(BTN_OPEN_MODAL_BANK,MODAL_BANK,BTN_CLOSED_MODAL_BANK);
    modalProject(BTN_OPEN_MODAL_CARS,MODAL_CARS,BTN_CLOSED_MODAL_CARS);
    modalProject(BTN_OPEN_MODAL_AV,MODAL_AV,BTN_CLOSED_MODAL_AV);
    modalProject(BTN_OPEN_MODAL_PROJECTB,MODAL_PROJECTB,BTN_CLOSED_MODAL_PROJECTB);
    document.addEventListener('DOMContentLoaded', Mutation_Icon)
    toggleVisibilityAboutMe(BTN_MODAL_ABOUT_ME, CONTAINER_ABOUT_ME, BTN_CLOSER_MODAL_ABOUT_ME);
}

initialization();
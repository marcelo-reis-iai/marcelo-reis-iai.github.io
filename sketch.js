//este template inclui já exemplos de como capturar o som do vosso microfone e a vossa câmara
//Oficina de Produtos Multimédia, 12ºI, Instituto das Artes e da Imagem
//Prof. Marcelo Reis, 2021



//antes das funções deve-se definir as variáveis globais que vão usar no resto do código, ver 'let' e 'var'
//let mic;
//let capture; 

let img;
let sizeX = 100;
let sizeY = 100;

//função que serve para fazerem o load das vossas imagens, sons e outros conteúdos
function preload() {
    img = loadImage('image12i.png');

}

//função que corre uma vez antes do draw
function setup() {
    createCanvas(displayWidth, displayHeight);
    getAudioContext().resume();
    background(0);


}

// função que corre todos os frames
function draw() {
    background(0, 10);

    translate(-(sizeX / 2), -(sizeY / 2));
    image(img, mouseX, mouseY, sizeX, sizeY);

}
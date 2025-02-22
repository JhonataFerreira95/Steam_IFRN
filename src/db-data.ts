export const IMG_CARD: any = [

    {
        id: 1,
        nome:"Klyngher Emidio",
        description: 'Apaixonado por Tecnologia e Filosofia. Estudante do IFRN',
        iconUrl:'https://img.freepik.com/fotos-premium/coruja-mecanica-blindada-de-robo-iron-owl-colagem-de-metal-estilizado-de-coruja_21085-1041.jpg',
        github: "https://github.com/KLYNGHER"
    },
    {
        id: 2,
        nome:"Erick Souza",
        description: "Viciado em CS, entusiasta do mercado de skins, gamer não tóxico",
        iconUrl: 'https://avatars.githubusercontent.com/u/91682209?v=4',
        github: "https://github.com/ericksouza95"
    },
    
    {
        id: 3,
        nome: "Jhonata Ferreira",
        description: 'Estudante do IFRN, Dev BACK-END, como foco em Ruby on rails. Atualmente tentanto desenvolver o FRONT-END com angular.',
        iconUrl: 'https://avatars.githubusercontent.com/u/87663377?v=4',
        github: 'https://github.com/JhonataFerreira95'
    }

 

];


export function findImgCardById(img_cardId:number) {
    return IMG_CARD.find((img_card: { id: number; }) => img_card.id === img_cardId);
}
export const IMG_CARD: any = [

    {
        id: 1,
        nome:"Klyngher Emidio",
        description: 'Apaixonado por Tecnologia e Filosofia. Estudante do IFRN',
        iconUrl:'https://instagram.fnat16-1.fna.fbcdn.net/v/t51.2885-19/322940290_848726036407954_183691494473872978_n.jpg?_nc_ht=instagram.fnat16-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2AGEzaS8o-mZBFJBoM9k1ETjrRlrxoqJSjFVzrIcPAPnKA3bt9jgHG97j9Nk6jFO_r4L5ly1g0QXnDQq02AN6sXc&_nc_ohc=13GaeZzEtwYQ7kNvgHdJMvF&_nc_gid=df79f16043b749588fcf520117630386&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYAaMLTzDzBppi08HZi8wiK06Qc3pnHmbCH-pGv79IV9PQ&oe=67B7DED0&_nc_sid=7a9f4b',
        github: 'https://github.com/KLYNGHER'
    },
    {
        id: 2,
        nome:"Erick Souza",
        description: "Viciado em CS, entusiasta do mercado de skins, gamer não tóxico",
        iconUrl: '',
        github: '"https://github.com/ericksouza95"'
    },
    
    {
        id: 3,
        nome: "Jhonata Ferreira",
        description: 'estudante do IFRN, Dev BACK-END, como foco em Ruby on rails. Atualmente tentanto desenvolver o FRONT-END com angular.',
        iconUrl: 'https://avatars.githubusercontent.com/u/87663377?v=4',
        github: 'https://github.com/JhonataFerreira95'
    }

 

];


export function findImgCardById(img_cardId:number) {
    return IMG_CARD.find((img_card: { id: number; }) => img_card.id === img_cardId);
}
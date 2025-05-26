import { type Product } from "../interface/Product";

export const mockProducts: Product[] = [
    {
        id: 1,
        name: 'Notebook Pro',
        price: 5500.00,
        imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/media-gallery/in3520-xnb-01-bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full',
        description: 'Um notebook potente para todas as suas tarefas.'
    },
    {
        id: 2,
        name: 'Mouse Gamer',
        price: 250.00,
        imageUrl: 'https://img.freepik.com/vetores-gratis/mouse-de-computador-sem-fio-com-ilustracao-3d-de-luzes-led-desenho-animado-da-ferramenta-para-jogar-em-casa-ou-trabalhar-no-estilo-3d-do-escritorio-em-fundo-branco-tecnologia-conceito-de-equipamento_778687-694.jpg?semt=ais_hybrid&w=740',
        description: 'Precisão e conforto para suas longas sessões de jogos.'
    },
    {
        id: 3,
        name: 'Teclado Mecânico',
        price: 450.00,
        imageUrl: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/puglbucx/file.png',
        description: 'Alta performance e durabilidade com switches mecânicos.'
    },
    {
        id: 4,
        name: 'Monitor 4K',
        price: 2300.00,
        imageUrl: 'https://static.vecteezy.com/ti/vetor-gratis/p1/17605578-smart-tv-com-resolucao-de-tela-4k-monitor-ultra-hd-isolado-na-ilustracao-branca-vetor.jpg',
        description: 'Imagens incrivelmente nítidas e cores vibrantes.'
    },
    {
        id: 5,
        name: 'Webcam HD',
        price: 180.00,
        imageUrl: 'https://images.tcdn.com.br/img/img_prod/486750/webcam_full_hd_1080p_usb_2_0_4317_1_61e39ce2b18cc2608848132177b2950c.jpg',
        description: 'Videochamadas com qualidade de imagem superior.'
    },
];
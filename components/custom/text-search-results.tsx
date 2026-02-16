import { cacheLife, cacheTag } from 'next/cache'

interface TextSearchResultsProps {
    query: string
}

export default async function TextSearchResults({
    query,
}: TextSearchResultsProps) {
    'use cache'
    cacheLife({ revalidate: 259200, stale: 3600 })
    cacheTag(`search-${query}`)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const results = [
        {
            id: 58584,
            imageName:
                '8c15154ecc5d204845f2a84665da84c7db31f2478e9af98d49c4bbe37db780cc',
            altText:
                "Animação com fundo estrelado. Texto alternando: 'BOA NOITE!' e 'BOA' em amarelo, criando um efeito festivo e suave.",
            stickerTitle: 'BOA NOITE! Estrelas e Boa Noite!',
        },
        {
            id: 262830,
            imageName:
                '65cf542735d8e99b5ec76ee7e7a0e811a5e686f7e69397c792dff5707d408a14',
            altText:
                "Mulher em posição íntima sobre outra pessoa, movendo-se sedutoramente; legenda amarela na base diz 'Estou te esperando amor'.",
            stickerTitle: 'Estou te esperando amor — sedução',
        },
        {
            id: 19529,
            imageName: 'c950cbc0364fd7b08fb9286ea71fbfd2',
            altText:
                'Figurinha de Boa Noite com letras grandes em rosa e ilustração de uma rosa na mesma cor sobre fundo transparente',
            stickerTitle: 'Boa Noite com Rosa',
        },
        {
            id: 187137,
            imageName:
                '0bced7efabea92cea62fec3fbf802c13885be92677fbf770e644d415328fb45b',
            altText:
                "Pessoa dormindo em uma cama do Minecraft, rosto real sobre travesseiro, coberta vermelha; aparece o texto 'goodnight' e pequenos 'z' de sono.",
            stickerTitle: 'goodnight dormindo no Minecraft',
        },
        {
            id: 172169,
            imageName:
                '737eea95e7375d80e6fe542fa02ec2bccdc82cc29b37786bc9e6e1bc81465ac6',
            altText:
                "Figurinha de Raiden em fundo escuro com texto: 'lágrimas choradas e punheta batida, durmo de pau mole e consciência limpa. Boa noite pra quem fica.'",
            stickerTitle: 'lágrimas choradas e punheta batida, Raiden',
        },
        {
            id: 155908,
            imageName:
                'ae6f184e21565f31e022b850dd7b56223ba7e22b554f9c86a42b9722e77c0a1f',
            altText:
                "Cena noturna com cachoeira azul iluminada por brilho dourado pulsante; água em queda cintilante e o texto 'Deus abençoe sua noite!' em destaque.",
            stickerTitle: 'Deus abençoe sua noite!',
        },
        {
            id: 317235,
            imageName:
                '4baf706c08a27edb6a61730c6e8004ff245f49f23a2f9332474c1016de9c2135',
            altText:
                "Coração vermelho cintilante com estrelas piscando sobre fundo escuro, texto dourado 'Boa Noite', 'Círculo Verde' no centro e 'Deus Te Abençoe' abaixo.",
            stickerTitle: 'Círculo Verde • Boa Noite Deus Te Abençoe',
        },
        {
            id: 19505,
            imageName: 'c2d4e3f93635d311126e46ef3290ffdf',
            altText:
                "Figurinha com a mensagem 'Boa Noite! Fica com Deus!' em letras azul claro estilizadas e brilhantes com contorno preto sobre fundo transparente, transmitindo uma mensagem positiva e tranquilizadora.",
            stickerTitle: 'Boa Noite! Fica com Deus!',
        },
        {
            id: 104279,
            imageName:
                'b902051bdee23c7e4496ce3f5b8066ea57da4109931c4691a882d3b3291508a5',
            altText:
                "Texto em fundo cinza: 'Boa noite pra vocês, hoje o crime tá triste e cheio de neurose...'. Emojis de tristeza e irritação.",
            stickerTitle:
                'Boa noite pra vocês, hoje o crime tá triste e cheio de neurose...',
        },
        {
            id: 144228,
            imageName:
                'c05b5c2c4a73ff8bdb1bda397c2fa027d11348b813470a171c1011651ccce086',
            altText:
                "Gatinho pequeno cinza e branco sobre um cobertor macio, olhar curioso; texto em branco cursivo na imagem: 'Boa noite'.",
            stickerTitle: 'Gatinho Boa noite',
        },
        {
            id: 246016,
            imageName:
                'c74540b6fe62525818bd1dabc15fe3fab1b48ed62cee738b4d5ca5a630f3d3db',
            altText:
                'Jerry, o rato, encabulado, encolhe-se timidamente sob um cobertor, cora, esconde o rosto com as patas e espreita sem jeito.',
            stickerTitle: 'Jerry encabulado',
        },
        {
            id: 58062,
            imageName:
                'b1133bb9d0f64adfcbf4476a08653225842cd5921a3b4fa9671dd41413863c27',
            altText:
                "Figurinha com fundo preto e texto em pink: 'BOA NOITE! Deus te abençoe'. Acompanha estrelas prateadas e corações, transmitindo uma mensagem de bênçãos.",
            stickerTitle: 'Boa noite! Deus te abençoe!',
        },
        {
            id: 135339,
            imageName:
                'd4a7919f402786e1de9b163f0a7718371947e4424949736248a9cc0fb57532d4',
            altText:
                "Animação de Odete Roitman, com Débora Bloch, repetindo a frase 'Boa noite, meu bem...' em diferentes expressões e poses.",
            stickerTitle: 'Odete Roitman Boa noite\nmeu bem...',
        },
        {
            id: 166734,
            imageName:
                '07f2d740c6d4f923e09673340d51f2a2ede1408975288e7c0a4a582a17000ce8',
            altText:
                "Figurinha de jovem com boné fazendo joinha; texto branco: 'Ano ta acabando e qm tem problema cmg enfia o rojão no cu e voa. Boa noite'",
            stickerTitle: 'Ano ta acabando | Boa noite',
        },
        {
            id: 308732,
            imageName:
                '72e970e32f9e2de1d58c9fce831d8df10336e2075c1138296028f2169b4abf04',
            altText:
                'Casal se abraça e troca beijos delicados, rostos corados e olhos fechados, movimentos suaves e atmosfera acolhedora e romântica.',
            stickerTitle: 'Puuung beijo e abraço apaixonado',
        },
        {
            id: 247672,
            imageName:
                '6088e4c152eb9d86dacbcfb28c2df0227bf58acc1252e39aa94beb3e64e762d2',
            altText:
                'Naruto Uzumaki dormindo de lado, abraçado, respira lentamente na cama com cobertor azul, expressão serena.',
            stickerTitle: 'Naruto Uzumaki dormindo abraçado',
        },
        {
            id: 224944,
            imageName:
                '352128c334dde4701f35e497382ebe311612f9b19a8bc53ec05dcb36f7a13a80',
            altText:
                "Gato enrolado em cobertor branco sobre cama, rosto visível e olhos grandes, expressão serena, cenário interno — tom 'boa noite', sem texto visível.",
            stickerTitle: 'Gato enrolado no cobertor',
        },
        {
            id: 235504,
            imageName:
                '042999a39d2fabb9fae9eb78bd50236045ae041a3f0ce1efb9d109c924172111',
            altText:
                "Figurinha com foto de um jovem sorrindo e boné; texto sobreposto: 'Indo dormir sem um boa noite amor te amo, não sei o que eu fiz para merecer isso'",
            stickerTitle: 'Indo dormir sem um boa noite (amor te amo)',
        },
        {
            id: 317216,
            imageName:
                '0b1d8132a42786c9776b20ae9d5a00d6b94428229e370a04d895d7eb3c88477b',
            altText:
                'Pôr do sol dourado se transforma em coração luminoso; pequenos corações flutuam enquanto Neige surge sorrindo dentro do brilho.',
            stickerTitle: 'Neige | surge no pôr do sol com coração',
        },
        {
            id: 316423,
            imageName:
                '4ee07cb87a5f209e29cebc35cbce65f1f555aee1381195e2126a6c4e6be9df77',
            altText:
                'Casal adulto sentado na cama ao amanhecer, abraçado e trocando um beijo apaixonado, iluminação suave pela janela; sem texto visível.',
            stickerTitle: 'shellypundao beijo apaixonado',
        },
        {
            id: 130500,
            imageName:
                'c0917b068d7b28bfb44b940501840e9c39dfd135be8f3f93e6f213e1e08d23d7',
            altText:
                "Animação de gatinhos fofos se abraçando e trocando corações. Texto visível: 'Boa noite - BOA NOITE' e 'Com carinho'.",
            stickerTitle: 'Gatinhos Boa noite - BOA NOITE',
        },
        {
            id: 196927,
            imageName:
                'c649e00b263889fadd8338fe346525397553559c946105e6af58cded69072ac9',
            altText:
                "Figurinha com Sonic deformado em posição agachada; texto superior 'Boa noite para todas as mulheres' e inferior 'e homens vao se fude'.",
            stickerTitle: 'Boa noite para todas as mulheres - Sonic',
        },
        {
            id: 280816,
            imageName:
                '782740d24d537bb9c5098cb25fd437f8e04f96b4385fa8e064935cad944b2c85',
            altText:
                'Filhote Simba do Rei Leão dorme sorrindo sob cobertor, respirando e mexendo a boca em sonho; sem texto visível.',
            stickerTitle: 'Simba dormindo sorrindo',
        },
        {
            id: 311020,
            imageName:
                'ded264d6a655f458923d8546427d725bcb721c7a91762025fe8ca63b173579a3',
            altText:
                'Pica-Pau deitado na cama, coberto por cobertor verde, lendo um livro com capa vermelha (sem texto legível), sorrindo e olhando de lado, relaxado.',
            stickerTitle: 'Pica-Pau lendo na cama',
        },
        {
            id: 19525,
            imageName: '786a52aa045a34a8a66928aa6b87a4a3',
            altText:
                "Figurinha 'Boa Noite - Deus te abençoe!' com letras grandes e brilhantes em azul, decorada com corações e estrelas, expressando carinho e positividade",
            stickerTitle: 'Boa Noite - Deus te abençoe!',
        },
        {
            id: 84620,
            imageName:
                '5087237bac526872e03f5a5a99dca943aadefe57240919328d4ac650038d62eb',
            altText:
                "Figurinha com um urso koala azul dormindo em uma rede com fundo amarelo. Texto: 'BOA NOITE!'",
            stickerTitle: 'Boa Noite! Urso Koala Dormindo',
        },
        {
            id: 223561,
            imageName:
                '14ce4082a9b28461db4f7ccdaf9fa61711cc0bf0689c83b923d59b414b3198cb',
            altText:
                'Gatinho malhado deitado sendo acariciado por mãos humanas; fecha os olhos, faz pequenas patadas com as patas e relaxa, expressão sonolenta.',
            stickerTitle: 'Gato malhado sendo acariciado',
        },
        {
            id: 306390,
            imageName:
                '4b7ce271f6e7fcbc1c4fb3d04bc8b27db3a1e090babad476d7fea1b48c7c275e',
            altText:
                "Figurinha de desenho animado mostrando personagem dormindo, abraçada a um cobertor, corações rosas e texto 'indo sonhar com você'.",
            stickerTitle: 'indo sonhar com você — boa noite',
        },
        {
            id: 110865,
            imageName:
                'c700d8a264c844e9afdb3b43f28bdc062f60cbd093a5a34d7d6dd667a38006d8',
            altText:
                "Figurinha com a saudação 'Boa noite' e a frase 'Motivo do meu tesão', acompanhada da conta @cafajestando.",
            stickerTitle: 'Boa noite Motivo do meu tesão',
        },
        {
            id: 187218,
            imageName:
                '03826a282e840e92976a8813cd0d891393846614195a0200dca3cb9b224c84ec',
            altText:
                'Gatinho creme/branquinho puxa uma manta vermelha-alaranjada, se cobre e se enrosca, aconchegando-se para dormir sob tecido florido.',
            stickerTitle: 'chuni puxando a coberta pra dormir',
        },
        {
            id: 61712,
            imageName:
                '6d2adf49af7ad9e2238d21c502f1f068af78ee1be6439f620bf2fb227c6f1125',
            altText:
                "Figurinha com um personagem infantil sorridente, vestindo um macacão azul, segurando um coração vermelho. Texto: 'BOA NOITE DORME BEM SE CUIDA ATÉ A MANHÃ BONS SONHOS'.",
            stickerTitle: 'Boa Noite! Dorme Bem e Bons Sonhos!',
        },
        {
            id: 165648,
            imageName:
                'ed84df6705c52fd401d6804a8c572b8874c5a5570567f3e75a481ea38761c025',
            altText:
                'Casal de anime abraça-se apertado num corredor à luz azul noturna; mãos percorrem costas e nuca num gesto terno. Sem texto visível.',
            stickerTitle: 'Abraço apertado | casal anime',
        },
        {
            id: 132910,
            imageName:
                '59d8a74688f7ad088b97b0efdbbd5de933e88dad54dbd2d4debb06852582fe39',
            altText:
                "Animação de pôr do sol com texto 'Deus Abençoe! Boa noite!' piscando em várias instâncias, transmitindo boas energias e paz.",
            stickerTitle: 'Deus Abençoe ! Boa noite!',
        },
        {
            id: 43973,
            imageName:
                '6f650229dd134101a70d8571bacfa334b68a14651509f1fbd1620e8ac5d73bf2',
            altText:
                "Figurinha com fundo simples. Texto em destaque: 'Boa Noite!' em vermelho e, abaixo, 'Que o Espírito Santo cuide de nossas vidas' em amarelo.",
            stickerTitle: 'Boa Noite! Que o Espírito Santo cuide',
        },
        {
            id: 236224,
            imageName:
                '65660c400532495adae78c19f694f6f17d9f5219b6b7d0927c719bb74af23452',
            altText:
                "Personagem Pocoyo bocejando e fechando os olhos, fazendo gesto de dormir enquanto aparece o texto 'Boa noite' em branco, fundo rosa.",
            stickerTitle: 'Pocoyo Boa noite',
        },
        {
            id: 317170,
            imageName:
                'a1f622f5706458ad63536079ab0963f97730b92f8864fbb4d7e54778d5edcb00',
            altText:
                'Mulher dormindo de lado, abraçada a um travesseiro, respirando suavemente e virando levemente, atmosfera calma e aconchegante.',
            stickerTitle: 'Mulher dormindo abraçada',
        },
        {
            id: 208204,
            imageName:
                'd31d9a1497416ef22333c9a7880bcd910f79ac723f68738ddbf0eb8ad6adcda4',
            altText:
                'Dois personagens fofos, um branco e um marrom, abraçados sob um cobertor rosa na cama, trocam carinhos e corações; texto: ME AND BABY EVERY NIGHT',
            stickerTitle: 'ME AND BABY EVERY NIGHT casal abraçado na cama',
        },
        {
            id: 47124,
            imageName:
                '59bf62d95ef8f40e9acf9e8614b7ed480f858fa65b366fc9e4399efe912bfda8',
            altText:
                "Figurinha com fundo azul escuro e uma pena azul, apresentando o texto 'Boa noite!' em caligrafia elegante. Ideal para mensagens noturnas.",
            stickerTitle: 'Boa noite ',
        },
        {
            id: 59213,
            imageName:
                'c33fa91557fbf3928df1210989f27f67065f5c09a6bfe5e42a9278ac70ce7843',
            altText:
                "Imagem com o escudo do Flamengo e elementos do Sport Club Corinthians, fundo vermelho e preto com 'BOA NOITE' em destaque.",
            stickerTitle:
                'Sport Club Corinthians Paulista & Flamengo - BOA NOITE',
        },
        {
            id: 242550,
            imageName:
                'f661b77c7612b5bc8a11d9427ce1f4ac71132d539db519fef30551c7842ad3ea',
            altText:
                'Bebê enrolado em cobertor rosa boceja e se aconchega, movendo levemente o braço e o rosto enquanto dorme num ambiente escuro.',
            stickerTitle: 'fabrisienra bebê dormindo',
        },
        {
            id: 177698,
            imageName:
                '4d1a538f0f97817a64f5cdeb1f2a9a2fe46d7ad978770981d5f9dc8bb6b86ba5',
            altText:
                'Coração vermelho cintilante pulsa com faíscas douradas e estrelas coloridas; textos: Boa Noite - Deus Te Abençoe',
            stickerTitle: 'Boa Noite Deus Te Abençoe',
        },
        {
            id: 19506,
            imageName: '1e5ae4bf241a289139ad22c349839581',
            altText:
                "Figurinha de Boa Noite com imagem estilizada de planeta em azul e rosa e frase 'Boa Noite' em letras cursivas",
            stickerTitle: 'Boa Noite',
        },
        {
            id: 192595,
            imageName:
                'eb783a18c711caccfa7baf8759bee8acfe09d744ee5818c4e036f745660ffd70',
            altText:
                'Gatos aconchegados: um gato bege envolve carinhosamente um cinza, roçando e fechando os olhos num sono tranquilo.',
            stickerTitle: 'Gatos se aconchegando',
        },
        {
            id: 41469,
            imageName:
                '7d86c58e4ae75794bb5ec71cef8ab32512df6d3881c8a81cdad56a352490d40c',
            altText:
                "Uma figurinha fofa com um gatinho branco em uma cesta decorada com rosas vermelhas e flores. Abaixo, o texto 'Boa Noite!'.",
            stickerTitle: 'Felina e Flores: Boa Noite!',
        },
        {
            id: 46850,
            imageName:
                '3917b4db32c3c61993224e885a2a457e5a10131ac6cdc0f72358d7671af3b80e',
            altText:
                "Figurinha com um ursinho amoroso, flores vermelhas e corações, com a frase 'Boa noite!' destacada. Ideal para mensagens carinhosas.",
            stickerTitle: 'Boa noite com ursinho e flores',
        },
        {
            id: 243631,
            imageName:
                '741896c74f27b4637e48c0550327952ed644519ac9a8d54a28f1fb1a68fe05bc',
            altText:
                'Noite estrelada: uma estrela cadente risca o céu, deixando um rastro luminoso que atravessa sobre silhueta de colinas.',
            stickerTitle: 'estrela cadente riscando o céu',
        },
        {
            id: 47122,
            imageName:
                'e4e754df4da911d9d4c24e74c91e61a9eb0df6216761447273ec2dfac4d0cb68',
            altText:
                "Figurinha com fundo preto e textos em destaque. Diz 'BOA NOITE' em laranja, e 'A PAZ DE CRISTO Jesus!' em amarelo, com emoticons de mãos.",
            stickerTitle: 'Boa Noite - A Paz de Cristo Jesus!',
        },
        {
            id: 129130,
            imageName:
                '84c06efeadddcf45e0707cda7044a6430513afe1aa429085b94a2772c5c7b7f9',
            altText:
                "Animação com Marceline e Princesa Jujuba em uma cama roxa. Texto 'goodnight' aparece, ressaltando um clima de descanso e amizade.",
            stickerTitle: 'Marceline goodnight',
        },
        {
            id: 287493,
            imageName:
                '41a9b29c3704376e78a28209d95a6c8a19ecbb3fd8caf2573632c86b5cc70572',
            altText:
                'Marceline e Princesa Jujuba aconchegadas sob um cobertor, sorrindo e tomando chá juntas à noite; sem texto visível.',
            stickerTitle: 'Marceline e Princesa Jujuba tomando chá',
        },
        {
            id: 214555,
            imageName:
                'd6be5c1d58be51d22efd68ac79866dadf027cefa8f7e557f91058c773219e610',
            altText:
                "Figurinha de dois homens de terno e gravata beijando-se de perfil diante de fundo cinza; selo azul e amarelo com o texto 'Boa noite'.",
            stickerTitle: 'Boa noite - beijo entre homens',
        },
        {
            id: 279392,
            imageName:
                'c26c212fc569fc52eedff5ddf97fcc2fb5f7a4a68dc4f016b91beb554ecca8b4',
            altText:
                'Fogueira crepitante lança luz trêmula sobre um cavaleiro cansado apoiado na espada; chamas e sombras oscilam sob muro noturno.',
            stickerTitle: 'Cavaleiro descansando na fogueira',
        },
        {
            id: 255554,
            imageName:
                '4b0a0e1c799fc3a1fed3e3ae1f39104c362bad7e04256b93f832ad375bb9848c',
            altText:
                "Figurinha de gato enrolado em cobertor na cama, rosto arredondado e olhos grandes; texto amarelo 'VOU DORMIR' indicando boa noite.",
            stickerTitle: 'VOU DORMIR gato enrolado',
        },
        {
            id: 27771,
            imageName:
                'd6e744ef64d032fb5d86d88f01fbdc0b98f343856f2411d40385df60e0724f2c',
            altText:
                'Gato bravo exigindo boa noite - figurinha engraçada de raiva',
            stickerTitle: 'Cadê meu boa noite ',
        },
        {
            id: 19513,
            imageName: '27f5ce5541c19d894927b705bbade6b5',
            altText:
                "Figurinha do Seu Madruga do Chaves vestido como apresentador de notícias com terno preto, gravata vermelha e chapéu branco listrado, texto 'Boa Noite'",
            stickerTitle: 'Boa Noite - Seu Madruga',
        },
        {
            id: 234151,
            imageName:
                '0859509fd7560491902c53a10cc2efec1b51a622dfd7915321c2e0f4b1421958',
            altText:
                'Cena em preto e branco de um homem beijando o pescoço de uma mulher, com aproximações e toques nas mãos, atmosfera sensual e noturna.',
            stickerTitle: 'Beijo no pescoço sensual',
        },
        {
            id: 183830,
            imageName:
                'ca21e5342feff76b22a12956ed4b7f5729f510783f753f20737fe7516d68c999',
            altText:
                "Silhuetas em preto: xamã dança com um animal que se ergue e abaixa, segurando disco e cajado sob uma lua crescente; marca 'Px12'.",
            stickerTitle: 'Xamã com animal e lua',
        },
        {
            id: 192029,
            imageName:
                'e035c7bb668994cab51a1d21c243f226e8b3292f330e1fa0edc464a3bf2727ed',
            altText:
                'Ilustração estilo Puung de casal se aconchegando na cama: ele abraça e beija a testa dela, ambos adormecendo num abraço caloroso de boa noite.',
            stickerTitle: 'puuung abraço de boa noite',
        },
        {
            id: 192019,
            imageName:
                '33f14c7ab8c563cbfdd80b358b0e544dda3f606e02cf72613b58a2a8298bd950',
            altText:
                'Casal deitado; ela se enrosca em conchinha, abraça e beija o rosto dele, ambos sorriem e adormecem juntos em silêncio aconchegante.',
            stickerTitle: 'Puuung conchinha e carinho',
        },
        {
            id: 249251,
            imageName:
                '39a078d2e3d7858bb65acabff93d6a9629b9aaa3e3aee7350c8e745dfadf8829',
            altText:
                "Figurinha do Sport Club Corinthians Paulista com tigre ao lado do escudo, fundo azul e texto branco 'Boa noite família'.",
            stickerTitle: 'Sport Club Corinthians Paulista | Boa noite família',
        },
        {
            id: 211056,
            imageName:
                '277a646e7d869345d4ae1da84af680c9fe217c49c48efae4f8becaac7b40a034',
            altText:
                "Pocoyo de azul, braços na cintura, expressão levemente irritada, com texto branco em negrito: 'vai dormir e para de me encher o saco'.",
            stickerTitle: 'Pocoyo | vai dormir e para de me encher o saco',
        },
        {
            id: 175777,
            imageName:
                '405101be82bc6be03125a3194ac5127ce44d1f621715b95bd9c7e742300714a8',
            altText:
                'Figurinha roxa com texto branco: as magrinha faz gostoso, e as gordinha amassa o ovo. Boa noite fml — emojis de máscaras e mãos em paz.',
            stickerTitle: 'as magrinha faz gostoso',
        },
        {
            id: 74669,
            imageName:
                '89f7bf676c28c0e583e7a07aa41e8285021e55a93c2a53a3d568403fd9db93fc',
            altText:
                "Imagem com fundo estrelado, Jesus em destaque com seguidores ao redor, acompanhado do texto 'Boa noite com Jesus!' e 'Salve Jesus!'.",
            stickerTitle: 'Boa noite com Jesus!',
        },
        {
            id: 191248,
            imageName:
                'b26bdb33dc4860c976286effa3aa800d220a92c64c89e925be091123a7bf59e5',
            altText:
                'Casal deitado em preto e branco, abraçados na cama; respirações suaves e troca de carinho enquanto a mulher encosta a cabeça no peito do homem.',
            stickerTitle: 'Casal abraçado na cama',
        },
        {
            id: 195160,
            imageName:
                '739bb11eb28f7a2ac38dd43d5ee50bd4e95d219597b5e19844b10a3e432c27ff',
            altText:
                "Noite estrelada com corações cintilantes sobre flores roxas; texto 'Boa noite!' e frase 'Tenha uma noite repleta de carinho e de lindos sonhos!'",
            stickerTitle: 'Boa noite! Tenha uma noite repleta de carinho',
        },
        {
            id: 19517,
            imageName: '0fe4ce9f3e3486c72829b78f026e7b5e',
            altText:
                'Figurinha de Boa Noite com criança segurando ursinho de pelúcia e flores azuis, texto decorativo',
            stickerTitle: 'Boa Noite',
        },
        {
            id: 109501,
            imageName:
                '9e8c999ac7e318c6d99b58ed57957ce39fb2d88cc3776e79671a928237a16073',
            altText:
                "Retrato de um homem de terno com olhar sedutor, sobre fundo desfocado; texto em rosa 'Boa noite bucetuda'. Figurinha com tom de cantada noturna.",
            stickerTitle: 'Boa noite bucetuda (olhar sedutor)',
        },
    ]

    return     <div className="flex flex-col gap-4 items-center">
    <p className="text-green-600 text-lg bg-green-500/10 p-4 rounded-md">It worked! Reload this page to confirm there is no bug.</p>

    <div className="flex p-8 gap-4">
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">ID</th>
                    <th className="py-2 px-4 border-b">Image Name</th>
                    <th className="py-2 px-4 border-b">Title</th>
                    <th className="py-2 px-4 border-b">Alt Text</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => (
                    <tr key={result.id}>
                        <td className="py-2 px-4 border-b">{result.id}</td>
                        <td className="py-2 px-4 border-b">{result.imageName}</td>
                        <td className="py-2 px-4 border-b">{result.stickerTitle}</td>
                        <td className="py-2 px-4 border-b">{result.altText}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
}

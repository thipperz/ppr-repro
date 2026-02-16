export default async function RenderResults() {
    /* The error occurs independently of this cache setup. 
    'use cache'
    cacheLife({ revalidate: 259200, stale: 3600 })
    cacheTag(`search-${query}`)*/

    await new Promise((resolve) => setTimeout(resolve, 3000))

    //mocked results
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

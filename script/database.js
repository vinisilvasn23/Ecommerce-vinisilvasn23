// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "./images/Celulares/Moto E32.png",
    nameItem: "Smartphone Motorola Moto E32 64GB",
    description:
      `Fino, elegante e completo, 
      sistema de câmera tripla com inteligência artificial e Captura Dupla...`,
    value: "1399,90",
    addCart: "Adicionar ao carrinho",
    marca: "Motorola",
    tag: ["Celulares"],
  },
  {
    id: 2,
    img: "./images/Celulares/Moto G22.png",
    nameItem: "Smartphone Motorola Moto G22 128GB",
    description:
      `Quad Câmera com sensor de 50 MP + Selfie de 16 MP
      Navegação suave com tela imersiva de 6,5″ HD+ com 90 Hz
      128 GB de armazenamento interno`,
    value: "1429,80",
    addCart: "Adicionar ao carrinho",
    marca: "Motorola",
    tag: ["Celulares"],
  },
  {
    id: 3,
    img: "./images/Celulares/iphone 13.png",
    nameItem: "Apple iPhone 13 128 GB",
    description:
      `Tela Super Retina XDR de 6,1 polegadas
      O modo cinematic adiciona profundidade de campo rasa e muda o foco automaticamente em seus vídeos...`,
    value: "4634,99",
    addCart: "Adicionar ao carrinho",
    marca: "Apple",
    tag: ["Celulares"],
  },
  {
    id: 4,
    img: "./images/Celulares/iphone 14.png",
    nameItem: "Apple iPhone 14 Plus (128 GB)",
    description:
      `Modo Cinema, agora em 4K Dolby Vision até 30 qps
      Modo Ação para vídeos em movimento com mais estabilidade
      Tecnologia de segurança...`,
    value: "6999,99",
    addCart: "Adicionar ao carrinho",
    marca: "Apple",
    tag: ["Celulares"],
  },
  {
    id: 5,
    img: "./images/Celulares/note 11.png",
    nameItem: "Smartphone Xiaomi Redmi Note 11S",
    description:
      `6GB RAM, 128GB de armazenamento.
      O conjunto de 4 câmeras IA tem como protagonista 
      a câmera de 108MP equipada com um sensor de imagem de 1/1,52 para imagens ultra nítidas impressionantes...`,
    value: "1303,99",
    addCart: "Adicionar ao carrinho",
    marca: "Xiaomi",
    tag: ["Celulares"],
  },
  {
    id: 6,
    img: "./images/Celulares/poco x5.png",
    nameItem: "Xiaomi POCO X5 5G",
    description:
      `8GB RAM, 256GB de armazenamento.
      Potente núcleo com nova rede 5G: POCO X5 utiliza o Snapdragon 695 
      construído sobre o processo de 6nm da TSMC e uma nova arquitetura, juntamente com o Cortex-A78...`,
    value: "1980,99",
    addCart: "Adicionar ao carrinho",
    marca: "Xiaomi",
    tag: ["Celulares"],
  },
  {
    id: 8,
    img: "./images/Celulares/fone x.png",
    nameItem: "Fone de Ouvido Intrauricular Xiaomi",
    description:
      `O fone queridinho do mercado agora em nova versão.
      Conheça o novo Redmi Airdots 3 que veio para conquistar o mercado com sua elegância e qualidade...`,
    value: "270,50",
    addCart: "Adicionar ao carrinho",
    marca: "Xiaomi",
    tag: ["Acessórios"],
  },
  {
    id: 9,
    img: "./images/Celulares/monitor 1.png",
    nameItem: "FYHXele 27 Gamer Monitor de jogos de 2K 165Hz",
    description:
      `QHD 2560*1440P/165Hz
      IPS monitorar with 100%sRGB para lhe proporcionar uma experiência de jogo mais colorida
      função de rotação, ângulo de rotação 30°...`,
    value: "2100,55",
    addCart: "Adicionar ao carrinho",
    marca: "FYHXele",
    tag: ["Monitores"],
  },
  {
    id: 10,
    img: "./images/Celulares/lg m.png",
    nameItem: "Monitor Gamer LG Ultrawide 29UM69G",
    description:
      `O LG UltraWide Pro Gamer oferece 30% mais tela para uma incrível 
      imersão visual, dando a vantagem que você precisa para ganhar de seus adversários...`,
    value: "1199,90",
    addCart: "Adicionar ao carrinho",
    marca: "LG",
    tag: ["Monitores"],
  },
  {
    id: 11,
    img: "./images/Celulares/headset.png",
    nameItem: "Headset Sem Fio ASTRO Gaming A50",
    description:
      `ASTRO Audio V2 e Dolby Audio integrado 15 horas de autonomia da bateria Balanço de voz no jogo 
      Software Astro Command Center MixAmp integrado compatível com XB1. PC e MAC...`,
    value: "1779,99",
    addCart: "Adicionar ao carrinho",
    marca: "Astro",
    tag: ["Acessórios"],
  },
  {
    id: 12,
    img: "./images/Celulares/2.png",
    nameItem: "Teclado Mecânico Gamer Pro K7 Rainbow",
    description:
      `Teclado gamer mecânico modelo Pro K7 Rainbow Fortrek
      Iluminação de LED RGB Rainbow com 22 modos de iluminação (13 efeitos + 9 estáticos)...`,
    value: "179,99",
    addCart: "Adicionar ao carrinho",
    marca: "Fortrek",
    tag: ["Acessórios"],
  },
  {
    id: 13,
    img: "./images/Celulares/3.png",
    nameItem: "Monitor Gamer LG Ultrawide 29UM69G",
    description:
      `Tela 23.8" Full-HD IPS (1920X1080)
      Taxa de atualização de 144Hz a 165Hz
      Tempo de resposta: de 2ms até 0,5ms....`,
    value: "2699,99",
    addCart: "Adicionar ao carrinho",
    marca: "Acer",
    tag: ["Monitores"],
  },
  {
    id: 14,
    img: "./images/Celulares/6.png",
    nameItem: "ACER Notebook Gamer Nitro 5 AN515-57-585H",
    description:
      `Processador Intel Core i5-11400H - Six Core – 11ª Geração
      Tela de 15,6” IPS de 144HZ com resolução Full HD
      Sistema Operacional Windows 11
      GPU Nvidia GeForce GTX 1650 com 4 GB de memória dedicada GDDR6 (TGP de 50W)....`,
    value: "4699,55",
    addCart: "Adicionar ao carrinho",
    marca: "Acer",
    tag: ["Notebooks"],
  },
  {
    id: 15,
    img: "./images/Celulares/5.png",
    nameItem: "Notebook Gamer Acer Nitro 5 AN517-54-56Q0 Ci5",
    description:
      `Processador Intel Core i5-11400H - Six Core – 11ª Geração Tela de 17,3” 
      IPS de 144HZ com resolução Full HD Sistema Operacional Windows 11 
      GPU Nvidia GeForce GTX 1650 com 4 GB de memória dedicada GDDR6 (TGP de 50W)....`,
    value: "4749,70",
    addCart: "Adicionar ao carrinho",
    marca: "Acer",
    tag: ["Notebooks"],
  },
  {
    id: 16,
    img: "./images/Celulares/7.png",
    nameItem: "DELL Notebook Gamer G15-i1000-D20P",
    description:
      `10ª geração de Intel Core i5-10500H cache de 12MB, até 4.5 GHz, 6 cores
      Memória de 8GB 1x8GB, DDR4, 2933MHz; Expansível até 32GB, 2 slots soDIMM
      SSD de 512GB PCIe NVMe M.2....`,
    value: "4649,99",
    addCart: "Adicionar ao carrinho",
    marca: "Dell",
    tag: ["Notebooks"],
  },

];

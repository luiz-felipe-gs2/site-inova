export interface Vet {
  id: string;
  name: string;
  position: string;
  crmv: string;
  image: string;
  curriculum: string[];
  specialties?: string[];
}

export const VETS_DATA: Vet[] = [
  {
    "id": "vet-1",
    "name": "DRA. CAROLINE ESTANISLAU",
    "position": "Ortopedia, Neurologia e Cirurgia",
    "crmv": "CRMV-SP: 20.129",
    "image": "/images/vets/Caroline_Estanislau_Inova.png",
    "curriculum": [
      "– Graduação em medicina veterinária pela UNESP – Botucatu/SP",
      "– Residência em cirurgia de pequenos animais pela UNESP – Botucatu/SP",
      "– Pós-Graduação em Neurologia e Ortopedia pelo Instituto Bioeticus – Botucatu/SP",
      "– Curso de “Ultrassonografia Articular” pela Ortopedia 360º"
    ],
    "specialties": [
      "Ortopedia",
      "Neurologia",
      "Cirurgia"
    ]
  },
  {
    "id": "vet-2",
    "name": "DRA. CRISTIANE ESTANISLAU",
    "position": "Oftalmologia, Clínica e Cirurgia",
    "crmv": "CRMV-SP: 26.637",
    "image": "/images/vets/Cristiane_Estanislau_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Residência em Cirurgia de Pequenos Animais pela UNESP – Botucatu/SP",
      "– Pós-graduação em Clínica Médica pela USP – São Paulo/SP",
      "– Mestrado em Oftalmologia Veterinária pela UNESP – Botucatu/SP",
      "– Pós-graduação em Oftalmologia Veterinária pela Anclivepa – São Paulo/SP",
      "– Gestão e liderança empreendedora pela VetCoaches – São Paulo/SP",
      "– Gestão de Pessoas pela PUC -São Paulo/SP"
    ],
    "specialties": [
      "Oftalmologia",
      "Cirurgia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-3",
    "name": "DR. FELIPE ZANUZZO",
    "position": "Anestesiologia e Intensivismo",
    "crmv": "CRMV-SP: 26.760",
    "image": "/images/vets/Felipe_Zanuzzo_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Jaboticabal/SP",
      "– Residência em Anestesiologia Veterinária pela UNESP – Botucatu/SP",
      "– Mestrado em Anestesiologia pela UNESP – Botucatu/SP",
      "– Diplomado como Especialista em Anestesiologia pela CFMV",
      "– Professor de Pós-Graduação em Anestesiologia e Terapia Intensiva"
    ],
    "specialties": [
      "Anestesiologia",
      "Intensivista",
      "Intensivismo"
    ]
  },
  {
    "id": "vet-4",
    "name": "DRA. MARINA CHAR",
    "position": "Gastroenterologia e Endoscopia",
    "crmv": "CRMV -SP: 24.443",
    "image": "/images/vets/Marina_Char_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Residência em Cirurgia em Pequenos Animais pela FMVZ UNESP – Botucatu/SP",
      "– Pós-graduação em Gastroenterologia de Cães e Gatos pelo Instituto Qualittas – São Paulo/SP",
      "– Estágio na Seção Técnica de Endoscopia na Faculdade de Medicina pela FMB UNESP – Botucatu/SP",
      "– I Curso de Videocirurgia em Pequenos Animais pela FCAV UNESP – Jaboticabal/SP",
      "– Atualização em Videoendoscopia Gastrointestinal e Respiratória pelo Instituto Qualittas – São Paulo/SP",
      "– Simpósio de Gastrenterologia na Clínica Médica de Pequenos Animais pela FMVZ UNESP – Botucatu/SP"
    ],
    "specialties": [
      "Gastroenterologia",
      "Endoscopia"
    ]
  },
  {
    "id": "vet-5",
    "name": "DR. ALISSON MUNIS",
    "position": "Clínica Médica",
    "crmv": "CRMV-SP: 52.422",
    "image": "/images/vets/Alisson_Munis_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Faculdade de Ciências Sociais e Agrárias de Itapeva/SP",
      "– Pós-Graduação em Dermatologia em Cães e Gatos pela Faculdade Unyleya"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-6",
    "name": "DRA. AMANDA OLIVEIRA",
    "position": "Clínica Médica",
    "crmv": "CRMV-SP: 68.654",
    "image": "/images/vets/Amanda_Gabriele_Oliveira_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Faculdade Anhanguera – Sorocaba/SP"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-7",
    "name": "DRA. ANA CAROLINE COSTA",
    "position": "Clínica Médica - Trainee",
    "crmv": "CRMV-SP: 68.672",
    "image": "/images/vets/Ana_Caroline_Oliveira_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Faculdade Anhanguera – Sorocaba/SP",
      "– Curso de Imersão nas Doenças Infecciosas dos Felinos pela CatExpert",
      "– Curso de Emergência em Pequenos Animais pela UNESP – Araçatuba/SP",
      "– Curso de Manejo de Feridas pela Veteduka",
      "– Iniciação Científica em Reprodução de Pequenos Animais pela USP – São Paulo/SP"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-8",
    "name": "DRA. ANA CRISTINA COSTACURTA",
    "position": "Medicina Intensiva / Intensivista",
    "crmv": "CRMV-SP: 33.089",
    "image": "/images/vets/Ana_Cristina_Costacurta_Inova.jpg",
    "curriculum": [
      "– Bacharel em Medicina Veterinária pelo Centro Regional Universitário de Espírito Santo do Pinhal/SP",
      "– Pós-graduação em Medicina Veterinária Intensiva pela PAV – São Paulo/SP",
      "– Curso de Medicina Veterinária Intensiva – Cetac/Intensivet",
      "– Curso de Cardiologia Veterinária – VESP",
      "– Medicina de Urgência e Intensiva de Pequenos Animais – EQUALIS",
      "– Aspectos Clínicos das Doenças Transmitidas por Vetores – BAYER",
      "– Curso de Credenciamento e Capacitação em Células Tronco e Terapia Celular em Pequeno Animais – REGENERA STEM CELLS"
    ],
    "specialties": [
      "Intensivista",
      "Intensivismo"
    ]
  },
  {
    "id": "vet-9",
    "name": "DRA. BÁRBARA TOMOTO",
    "position": "Pneumologia",
    "crmv": "CRMV-SP: 37.638",
    "image": "/images/vets/Barbara_Tomoto_Inova.jpg",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Faculdade de Jaguariúna (FAJ) – Jaguariúna/SP",
      "– Aprimoramento em Cirurgia Geral de Tecidos Moles pela Bioethicus – Botucatu/SP",
      "– Pós-Graduação em Pneumologia Veterinária pela UFAPE – São Paulo/SP",
      "– Aprimoramento em Afecções Respiratórias de Cães e Gatos pela Pneumopet"
    ],
    "specialties": [
      "Pneumologia"
    ]
  },
  {
    "id": "vet-11",
    "name": "DRA. BEATRIZ BERBEL",
    "position": "Dermatologia e Clínica Médica",
    "crmv": "CRMV-SP: 33.745",
    "image": "/images/vets/Beatriz_Berbel_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Residência em Clínica Médica de Pequenos Animais pela UNESP – Botucatu/SP",
      "– Pós-graduação em Dermatologia Veterinária pela Universidade Anhembi Morumbi – São Paulo/SP",
      "– Mestrado em Clínica Médica com enfoque em Dermatologia de Pequenos Animais pela UNESP – Botucatu/SP"
    ],
    "specialties": [
      "Dermatologia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-12",
    "name": "DRA. BRUNA FRANÇA",
    "position": "Gastroenterologia, Endoscopia e Clínica Médica",
    "crmv": "CRMV-SP: 50.251",
    "image": "/images/vets/Bruna_França_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNIFAJ – Jaguariúna/SP",
      "– Pós-graduação em Gastroenterologia pela UFAPE (em andamento)",
      "– Curso de Gastroenterologia em Cães e Gatos pela UFAPE",
      "– Curso rápido de endoscopia digestiva e respiratória pela UFAPE",
      "– Curso sobre Giardíase em cães e gatos pela MelloVet",
      "– Cursos de Atualizações sobre Gastroenterologia / Hepatopatias de Cães e Gatos pela Catexpert e UFAPE",
      "– Membro da Associação Brasileira de Gastroenterologia Animal e Colégio Brasileiro de Endoscopia e Vídeocirurgia Veterinária."
    ],
    "specialties": [
      "Gastroenterologia",
      "Endoscopia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-13",
    "name": "DR. BRUNO CRITELLI",
    "position": "Neurologia e Clínica Médica",
    "crmv": "CRMV-SP: 39.434",
    "image": "/images/vets/Bruno_Critelli_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Residência em Clínica Médica de Pequenos Animais pela UNESP – Botucatu/SP",
      "– Pós-Graduação em Neurologia pelo Instituto Bioethicus – Botucatu/SP",
      "– Associado efetivo da Associação Brasileira de Neurologia Veterinária (ABNV)",
      "– Pós-Graduação em Tomografia Computadorizada e Ressonância Magnética de Pequenos Animais pela Anclivepa – São Paulo/SP (em andamento)"
    ],
    "specialties": [
      "Neurologia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-14",
    "name": "DRA. CARLA LEMOS",
    "position": "Clínica Médica - Trainee",
    "crmv": "CRMV-SP: 65.749",
    "image": "/images/vets/Carla_Lemos_Inova.png",
    "curriculum": [
      "– GraduaÇÃO em Medicina Veterinária pela Universidade de Sorocaba (UNISO)",
      "– Trainee da Inova Hospital Veterinário",
      "– Pós-graduação em Clínica Médica de Pequenos Animais pela Anhembi Morumbi (em andamento)"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-15",
    "name": "DRA. CAROLINA FERNANDA NASCIMENTO CORRÊA",
    "position": "Neurologia e Internação",
    "crmv": "CRMV-SP: 48.630",
    "image": "/images/vets/Carolina_Fernanada_Nascimento_Correa_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Programa de Trainee Veterinário Hospital Veterinário Inova",
      "– Atuação dedicada à Neurologia Clínica e Internação Veterinária",
      "– Curso de Emergências Neurológicas em Pequenos Animais pela VetSoul",
      "– Pós-Graduação em Neurologia pelo Instituto Bioethicus – Botucatu/SP"
    ],
    "specialties": [
      "Neurologia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-16",
    "name": "DRA. CAROLINA LATINI",
    "position": "Cardiologia e Pneumologia",
    "crmv": "CRMV-SP: 44.837",
    "image": "/images/vets/Carolina_Latini_Inova.jpg",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Residência em Clínica Médica de Pequenos Animais pela UNESP – Botucatu/SP",
      "– Pós-graduação em Cardiologia Veterinária pela PAV – São Paulo",
      "– Mestrado em Cardiologia Veterinária pela UNESP – Botucatu/SP",
      "– Curso de aprimoramento em ecocardiograma pela Naya Especialidades – São Paulo/SP",
      "– Curso de aprimoramento em ecocardiograma e eletrocardiograma pela EcosVet",
      "– Pós-graduação em Pneumologia Veterinária pela Ufape – São Paulo/SP"
    ],
    "specialties": [
      "Cardiologia",
      "Pneumologia"
    ]
  },
  {
    "id": "vet-17",
    "name": "DRA. CAROLINA MEIRELLES",
    "position": "Medicina Intensiva / Intensivista",
    "crmv": "CRMV-SP: 37.102",
    "image": "/images/vets/Carolina_Meirelles_Inova.png",
    "curriculum": [
      "– Graduação e Bacharel em Medicina Vetetinaria pela Universidade de São Paulo/SP",
      "– Curso extensivo de aprimoramento em terapia intensiva pela UFAPE/SP",
      "– Cursos ABC Trauma e ABC Cuidados Intensivos pela LAVECCS",
      "– Pós-Graduação em Medicina Veterinária Intensiva pela PAV/SP",
      "– Curso de Gestão e Liderança pela Escola Conquer",
      "– Cursos de Cuidados Palitivos em Medicina Veterinária e em Medicina Humana",
      "– Membro da Academia Brasileira de Medicina Veterinária Intensiva (BVECCS)",
      "– Ministra cursos, treinamentos e assessoria técnica em internações também pela empresa Critical Vets"
    ],
    "specialties": [
      "Intensivista",
      "Intensivismo"
    ]
  },
  {
    "id": "vet-18",
    "name": "DRA. CAROLINE VIEIRA",
    "position": "Oncologia e Clínica Médica",
    "crmv": "CRMV-SP: 56.607",
    "image": "/images/vets/Caroline_Vieira_Inova.png",
    "curriculum": [
      "– Graduação em medicina veterinária pela UNISO – Sorocaba/SP",
      "– Aprimoramento em cirurgia de tecidos moles pela UNESP Jaboticabal/ SP",
      "– Pós-graduação em Oncologia pela Bioethicus (em andamento)"
    ],
    "specialties": [
      "Oncologia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-19",
    "name": "DRA. CINTHIA FIGUEIREDO",
    "position": "Clínica Médica - Trainee",
    "crmv": "CRMV-SP: 61.170",
    "image": "/images/vets/Cinthia_Figueiredo_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Anhanguera – Sorocaba/SP"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-20",
    "name": "DRA. CLARISSE CARDOSO",
    "position": "Anestesiologia",
    "crmv": "CRMV-SP: 30.057",
    "image": "/images/vets/Clarisse_Cardoso_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UENP – Bandeirantes/PR",
      "– Residência em Anestesiologia pela UniCesumar – Maringá/PR",
      "– Mestrado em Anestesiologia pela UNIFRAN – Franca/SP",
      "– Curso de Bloqueios Locorregionais Guiados por Ultrassom e Neurolocalizador pela IMANVET",
      "– Associada ao colégio Brasileiro de Anestesiologia Veterinária"
    ],
    "specialties": [
      "Anestesiologia"
    ]
  },
  {
    "id": "vet-21",
    "name": "DR. CRISTIANO MELO",
    "position": "Anestesiologia",
    "crmv": "CRMV-SP: 42.095",
    "image": "/images/vets/Cristiano_Melo_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela USP – Pirassununga/SP",
      "– Residência em Anestesiologia Veterinária pela UNESP – Botucatu/SP",
      "– Especialização em Intensivismo (em andamento)"
    ],
    "specialties": [
      "Anestesiologia"
    ]
  },
  {
    "id": "vet-22",
    "name": "DR. DANIEL CHERUTTI",
    "position": "Clínica e Cirurgia Geral",
    "crmv": "CRMV-SP: 31.379",
    "image": "/images/vets/Daniel_Cherutti_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Unicastelo",
      "– Curso EAD em Clínica Geral pelo Portal Educação",
      "– Pós-graduação em Clínica Médica e Cirurgica pelo Instituto Qualittas",
      "– Pós-graduação Cirurgia Geral de Tecidos Moles em Cães e Gatos pela FAMESP"
    ],
    "specialties": [
      "Cirurgia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-23",
    "name": "DRA. DANIELA SANTANA",
    "position": "Cardiologia e Pneumologia",
    "crmv": "CRMV-SP: 35.879",
    "image": "/images/vets/Daniela_Santana_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UEMA",
      "– Residência em Clínica Médica de Pequenos Animais pela UNESP – Botucatu/SP",
      "– Mestrado em Cardiologia Veterinária pela UNESP – Botucatu/SP",
      "– Pós-graduação em Pneumologia de Cães e Gatos pela ANCLIVEPA – São Paulo/SP",
      "– Pós-graduação em Afecções Respiratórias de cães e gatos pela ANCLIVEPA",
      "– Coordenadora da Pós-graduação em Pneumologia de Cães e Gatos – PAV",
      "– Professora de Pós-graduação em Pneumologia e Clínica Médica",
      "– Capacitação em Ecocardiografia de cães e gatos – NAYA (em andamento)"
    ],
    "specialties": [
      "Cardiologia",
      "Pneumologia"
    ]
  },
  {
    "id": "vet-24",
    "name": "DRA. DANIELA SCATENA",
    "position": "Odontologia Veterinária",
    "crmv": "CRMV-SP: 19.821",
    "image": "/images/vets/Daniela_Scatena_Inova.jpg",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Universidade Metodista de São Paulo",
      "– Pós-graduação em Odontologia de Cães e Gatos pela ANCLIVEPA – São Paulo/SP"
    ],
    "specialties": [
      "Odontologia"
    ]
  },
  {
    "id": "vet-26",
    "name": "DRA. ESTEFANI ZEQUE",
    "position": "ANÁLISES CLÍNICAS",
    "crmv": "CRMV-SP: 68.105",
    "image": "/images/vets/Estefani_Zeque_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Anhanguera – Sorocaba/SP"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-27",
    "name": "DR. FILIPE TANNUS",
    "position": "Ortopedia, Clínica e Cirurgia Geral",
    "crmv": "CRMV-SP:44.842",
    "image": "/images/vets/Filipe_Tannus_inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Residência em Cirurgia de Pequenos Animais pela UNESP – Botucatu/SP",
      "– Pós-Graduação em Cirurgia de Pequenos Animais pela UFAPE/SP",
      "– Certificação em Principles in Small Animal Fractures Management – AOVET",
      "– Membro do grupo Ortopedia360",
      "– Membro AOVET"
    ],
    "specialties": [
      "Ortopedia",
      "Cirurgia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-28",
    "name": "DR. FRANCISCO RIBEIRO",
    "position": "Diagnóstico por Imagem",
    "crmv": "CRMV-SP: 34.515",
    "image": "/images/vets/Francisco_Ribeiro_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Residência em Clínica Médica de Pequenos Animais pela UNESP – Botucatu/SP",
      "– Mestrado em Clínica Médica de Pequenos Animais pela UNESP – Botucatu/SP",
      "– Curso de Ultrassonografia Abdominal e Pélvica em Pequenos Animais pela Echoa – Campinas/SP",
      "– Pós-graduação em Diagnóstico por Imagem pela PAV – São Paulo/SP"
    ],
    "specialties": [
      "Diagnóstico por Imagem"
    ]
  },
  {
    "id": "vet-31",
    "name": "DRA. GABRIELA MELO",
    "position": "Nefrologia e Urologia",
    "crmv": "CRMV-SP: 50.259",
    "image": "/images/vets/Gabriela_Melo_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNIFAJ – Jaguariúna/SP",
      "– Pós-graduação em Nefrologia e Urologia de pequenos animais pela Unyleya"
    ],
    "specialties": [
      "Nefrologia"
    ]
  },
    {
    "id": "vet-32",
    "name": "DRA. GUILHERME CIRINO",
    "position": "Clínica Médica - Trainee",
    "crmv": "CRMV-SP: 61.839",
    "image": "/images/vets/Guilherme_Cirino_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela FMVZ",
      "– Faculdade de Medicina Veterinária e Zootecnia – UNESP Botucatu/SP"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-33",
    "name": "DR. GUSTAVO EUCLIDES",
    "position": "Clínica Médica",
    "crmv": "CRMV-SP: 70.629",
    "image": "/images/vets/Gustavo_Eucliedes_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Pós-graduação em Cirurgia Geral pela Anclivepa – São Paulo/SP"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-34",
    "name": "DR. HERBERT ALMEIDA",
    "position": "Cardiologia e Clínica Médica",
    "crmv": "CRMV-SP: 52924",
    "image": "/images/vets/Herbert_Almeida_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Pós-graduação em Cardiologia Veterinária pela UFAPE (em andamento)"
    ],
    "specialties": [
      "Cardiologia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-35",
    "name": "DRA. IZABELLA DELFINO",
    "position": "Diagnóstico por Imagem",
    "crmv": "CRMV-SP: 52.293",
    "image": "/images/vets/Izabella%20Delfino_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Pós-graduação em Diagnóstico por Imagem pela PAV – São Paulo/SP",
      "– MBA em Liderança Transformadora pela Unyleya"
    ],
    "specialties": [
      "Diagnóstico por Imagem"
    ]
  },
  {
    "id": "vet-36",
    "name": "DRA. IZABELLA PEREIRA",
    "position": "Internação",
    "crmv": "CRMV-SP: 52.567",
    "image": "/images/vets/Izabella_Pereira_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Pós-graduação em Emergência e Cuidados Intensivos em Pequenos Animais (em andamento)"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-37",
    "name": "DRA. JACQUELINE ABRAHÃO",
    "position": "Hematologia e Clínica Médica",
    "crmv": "CRMV-SP: 44.855",
    "image": "/images/vets/Jacqueline_Abraão_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Pós-graduação em Clínica Médica e Cirúrgica de Pequenos Animais – Instituto Qualittas – São Paulo/SP",
      "– Pós-graduação em Hematologia Veterinária pela Intercursos UFAPE"
    ],
    "specialties": [
      "Hematologia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-38",
    "name": "DRA. JAQUELINE MARTINS",
    "position": "Emergência e Anestesiologia",
    "crmv": "CRMV-SP: 60.815",
    "image": "/images/vets/Jaqueline_Martins_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Curso MI – Medicina Interna do Paciente Grave pela Intensivet",
      "– Pós-graduação em Anestesiologia Veterinária pela UFAPE – São Paulo/SP"
    ],
    "specialties": [
      "Anestesiologia"
    ]
  },
  {
    "id": "vet-40",
    "name": "DRA. JULIA PACHECO",
    "position": "Fisioterapia e Ozônioterapia",
    "crmv": "CRMV-SP: 47.904",
    "image": "/images/vets/Julia_Pacheco_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– XIII Curso Intensivo de Fisioterapia pela FisioCare – São Paulo/SP",
      "– Capacitação em Reabilitação Física e Ozonioterapia em Pequenos Animais",
      "– Pós-graduação em Fisioterapia e Reabilitação Veterinária pela IBVET – Indaiatuba/SP"
    ],
    "specialties": [
      "Fisioterapia"
    ]
  },
  {
    "id": "vet-41",
    "name": "DRA. KARINE QUEIROZ",
    "position": "Clínica Médica",
    "crmv": "CRMV-SP  60.122",
    "image": "/images/vets/Karine_Queiroz_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Curso teórico-prático Intensivo de Ultrassonografia Abdominal pela NEXVET"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-43",
    "name": "DRA. KEVELLIN SILVA",
    "position": "Medicina Felina e Clínica Médica",
    "crmv": "CRMV-SP  56.650",
    "image": "/images/vets/Kevellin_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Universidade Cruzeiro do Sul (CEUNSP)",
      "– XV Curso Extensivo de Fisiatria Veterinária pela FisioCare Pet",
      "– 35º Curso Intensivo de Fisioterapia Veterinária pela FisioCare Pet",
      "– Ozônioterapia e Tópicos Avançados em Ozonioterapia Veterinária pelo Instituto Bioethicus",
      "– Cannabis Medicinal pelo Instituto Bioethicus",
      "– Termografia pelo Instituto Bioethicus",
      "– Implante de Ouro pelo Instituto Bioethicus",
      "– Pós-Graduação em Clínica Médica de Gatos pela Faculdade de Minas Gerais",
      "– Programa Academia de Medicina Felina – Drª Polyana Paixão",
      "– 1º Simpósio Internacional de Emergência em Medicina Felina – Dr. Reginaldo Pereira"
    ],
    "specialties": [
      "Medicina Felina",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-45",
    "name": "DRA. LAÍS CARVALHO",
    "position": "Clínica Médica e Endocrinologia",
    "crmv": "CRMV-SP  52.296",
    "image": "/images/vets/Lais_Carvalho_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Pós-graduação em Endocrinologia e Metabologia pela Anclivepa – São Paulo/SP",
      "– Associação Nacional de Clínicos Veterinários de Pequenos Animais (Anclivepa)",
      "– Curso Hot topics em Endocrinologia Felina pela MV MINDS",
      "– Programa de Trainees Inova (duração de 1 ano e meio)",
      "– Membro da Associação Brasileira de Endocrinologia Veterinária (ABEV)"
    ],
    "specialties": [
      "Endocrinologia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-47",
    "name": "DRA. LAÍSE YAMASHIRO",
    "position": "Oftalmologia",
    "crmv": "CRMV-SP  35.821",
    "image": "/images/vets/Laise_Yamashiro_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Araçatuba/SP",
      "– Residência em Cirurgia de Pequenos Animais pela UNESP – Araçatuba/SP",
      "– Mestrado em Cirurgia Geral de Pequenos Animais pela UNESP – Jaboticabal/SP",
      "– Pós graduação em Oftalmologia Veterinária pela Anclivepa-SP",
      "– Monitora da Pós Graduação de Oftalmologia Veterinária Anclivepa- SP"
    ],
    "specialties": [
      "Oftalmologia"
    ]
  },
  {
    "id": "vet-48",
    "name": "DRA. LAURA SILVEIRA",
    "position": "Diagnóstico por Imagem",
    "crmv": "CRMV-SP  56.798",
    "image": "/images/vets/Laura_Silveira_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Curso intensivo de ultrassonografia abdominal em pequenos animais NEXVET",
      "– Pós-graduação em Diagnóstico por Imagem pela UFAPE (em andamento)"
    ],
    "specialties": [
      "Diagnóstico por Imagem"
    ]
  },
  {
    "id": "vet-49",
    "name": "DRA. LILIANA ROSA",
    "position": "Oncologia, Paliativismo e Cirurgia",
    "crmv": "CRMV-SP 26.856",
    "image": "/images/vets/Liliana_Rosa_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Pós-graduação em Clínica Médica e Cirúrgica pelo Instituto Qualittas – São Paulo/SP",
      "– Pós-graduação em Cirurgia de Tecidos Moles pela Anclivepa – São Paulo/SP",
      "– Pós-graduação em Oncologia Veterinária pelo Instituto Bioethicus – Botucatu/SP"
    ],
    "specialties": [
      "Oncologia",
      "Cirurgia"
    ]
  },
  {
    "id": "vet-50",
    "name": "DRA. LISIANE CHAR",
    "position": "Odontologia, Clínica Médica e Cirurgia Geral",
    "crmv": "CRMV-SP: 23.995",
    "image": "/images/vets/Lisiane_Char_Inova.png",
    "curriculum": [
      "– Graduação em Medicinina Veterinária pela UNESP – Botucatu/SP– Residência em Cirurgia de Pequenos Animais pela UNESP – Botucatu/SP– Pós-Graduação em Odontologia Veterinária pela Anclivepa – São Paulo/SP",
      "– Membro da Associação Brasileira de Odontologia Veterinária"
    ],
    "specialties": [
      "Odontologia",
      "Cirurgia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-51",
    "name": "DR. LUIGI MACIEL",
    "position": "Ortopedia, Neurologia e Cirurgia",
    "crmv": "CRMV-SP: 49.817",
    "image": "/images/vets/Luigi_Maciel_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela FMVZ pela UNESP – Botucatu/SP",
      "– Residência em Cirurgia de Pequenos Animais com ênfase em Ortopedia pela UNESP – Botucatu/SP",
      "– Membro da plataforma Orthopedia 360.",
      "– Participação como monitor em diversos cursos na área de ortopedia e neurocirurgia pelo Instituto Bioethicus."
    ],
    "specialties": [
      "Ortopedia",
      "Neurologia",
      "Cirurgia"
    ]
  },
  {
    "id": "vet-52",
    "name": "DR. LUCAS MORAES",
    "position": "Diagnóstico por Imagem",
    "crmv": "CRMV-SP: 41.866",
    "image": "/images/vets/Lucas_Moraes_Inova.png",
    "curriculum": [
      "– Graduação Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Curso Intensivo em Ultrassonografia Veterinária pela Echoa"
    ],
    "specialties": [
      "Diagnóstico por Imagem"
    ]
  },
  {
    "id": "vet-53",
    "name": "DRA. LUÍSA VESTINA",
    "position": "Dermatologia",
    "crmv": "CRMV-SP: 39.514",
    "image": "/images/vets/Luísa_Vestina_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Pós-Graduação em Dermatologia Veterinária pela Anhembi Morumbi",
      "– Sócia ativa da Sociedade Brasileira de Dermatologia Veterinária",
      "– Curso de Microagulhamento Veterinário pela Unicarevet",
      "– Curso de Laserterapia pelo Instituto Bioethicus",
      "– Curso avançado de Otologia Veterinária pela Anclivepa",
      "– Curso de Otologia pela Equalis",
      "– Curso de Alergologia pela Equalis"
    ],
    "specialties": [
      "Dermatologia"
    ]
  },
  {
    "id": "vet-54",
    "name": "DR. LUIZ CARLOS DE CASTILHO JR.",
    "position": "Endocrinologia e Clínica Médica",
    "crmv": "CRMV-SP: 37.398",
    "image": "/images/vets/Luiz_Castilho_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Residência em Clínica Médica pela UNESP – Botucatu/SP",
      "– Pós-graduação em Endocrinologia Veterinária pela Anclivepa – São Paulo/SP"
    ],
    "specialties": [
      "Endocrinologia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-55",
    "name": "DRA. MARIA CLARA LAUDINO",
    "position": "Nefrologia e Clínica Médica",
    "crmv": "CRMV-SP: 62.085",
    "image": "/images/vets/Maria_Clara_Laudino_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pelo Instituto Federal Catarineses Campus Concórdia",
      "– Pós-graduação em Clínica Médica de Pequenos Animais pela Anhembi Morumbi – São Paulo / SP",
      "– Programa de Trainees Inova – Aprimoramento Veterinário em clínica médica – duração de 2 anos",
      "– Pós-graduação em Nefrologia pelo Instituto PAV (em andamento)"
    ],
    "specialties": [
      "Nefrologia",
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-56",
    "name": "DRA. MARIA FERNANDA FERRAZ",
    "position": "Oftalmologia",
    "crmv": "CRMV-SP: 33.675",
    "image": "/images/vets/Maria_Fernanda_Ferraz_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Universidade Estadual de Londrina (UEL) – Londrina/PR",
      "– Aperfeiçoamento em Oftalmologia Veterinária pelo Instituto Qualittas – São Paulo/SP",
      "– Pós-graduação em Oftalmologia Veterinária pela Anclivepa – São Paulo/SP",
      "– Curso de Ultrassom Ocular pelo GENOV",
      "– Curso Híbrido Teórico-Prático de Eletrorretinografia em Pequenos Animais"
    ],
    "specialties": [
      "Oftalmologia"
    ]
  },
  {
    "id": "vet-57",
    "name": "DRA. MARIANA SCUDELER",
    "position": "Odontologia e Cirurgia Odontológica",
    "crmv": "CRMV-SP: 28.928",
    "image": "/images/vets/Mariana_Scudeler_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Universidade Estadual de Maringá (UEM) – Maringá/SP",
      "– Pós-graduação em Odontologia Veterinária pela Anclivepa – São Paulo/SP",
      "– Membro da Associação Brasileira de Odontologia Veterinária – ABOV",
      "– Aprimoramento em Medicina Intensiva pela Cetacvet – São Paulo/SP",
      "– Aprimoramento em Radiologia Veterinária – IVI Instituto Veterinário de Imagem – São Paulo/SP"
    ],
    "specialties": [
      "Odontologia",
      "Cirurgia"
    ]
  },
  {
    "id": "vet-60",
    "name": "DRA. NATÁLIA DIAS",
    "position": "Nefrologia e Urologia",
    "crmv": "CRMV-SP: 33.869",
    "image": "/images/vets/Natalia_Dias_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Residência em Clínica Médica pela UNESP – Botucatu/SP",
      "– Mestrado em Clínica Médica pela UNESP – Botucatu/SP",
      "– Pós-graduação em Clínica Médica de cães em gatos pela ANCLIVEPA/SP",
      "– Pós-graduação em Nefrologia e Urologia de cães e gatos pela ANCLIVEPA/SP"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-61",
    "name": "DRA. NATÁLIA NALESSO",
    "position": "Ortopedia , Neurologia, Clínica Médica e Cirurgia Geral",
    "crmv": "CRMV-SP: 33.867",
    "image": "/images/vets/Natália_Nalesso_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Residência em Cirurgia de Pequenos Animais pela UNESP – Botucatu/SP",
      "– Mestrado em Cirurgia de Pequenos Animais pela UNESP – Botucatu/SP",
      "– Especialização em Neurologia Veterinária pelo Instituto Bioethicus",
      "– Especialização em Ortopedia pela Associação Nacional de Clínicos Veterinários Anclivepa",
      "– Membro do Ortopedia 360",
      "– Aovet Prínciples in Small Animal Fracture Management",
      "– Estágio no VCA Manhattan Veterinária Group"
    ],
    "specialties": [
      "Ortopedia",
      "Neurologia",
      "Cirurgia"
    ]
  },
  {
    "id": "vet-62",
    "name": "DRA. NATASHA ZUCAS",
    "position": "Diagnóstico por Imagem",
    "crmv": "CRMV-SP: 37.934",
    "image": "/images/vets/Natasha_Zucas_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela USP – São Paulo/SP",
      "– Pós-graduação em Diagnóstico por Imagem de Pequenos Animais pelo Instituto Brasileiro de Veterinária – IBVET",
      "– Aprimoramento em Radiodiagnóstico Veterinário pelo Instituto Veterinário de Imagem – IVI",
      "– Capacitação em Ultrassonografia Intervencionista pela NAUS – Núcleo de Aperfeiçoamento em Ultrassonografia Veterinária",
      "– Participação em diversos cursos e workshops de atualização em medicina veterinária, incluindo temas de ultrassonografia abdominal de pequenos animais, ultrassonografia em felinos, ultrassonografia gestacional em pequenos animais, clínica médica e diagnóstico veterinário."
    ],
    "specialties": [
      "Diagnóstico por Imagem"
    ]
  },
  {
    "id": "vet-63",
    "name": "DRA. NATÉRCIA RIBEIRO",
    "position": "Oftalmologia",
    "crmv": "CRMV-SP: 19.663",
    "image": "/images/vets/Natércia_Ribeiro_Inova.png",
    "curriculum": [],
    "specialties": [
      "Oftalmologia"
    ]
  },
  {
    "id": "vet-64",
    "name": "DRA. PAULA CAMPBELL",
    "position": "Diagnóstico por Imagem",
    "crmv": "CRMV-SP: 53.847",
    "image": "/images/vets/Paula_Campbell_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Universidade Federal de Viçosa (UFV)",
      "– Residência em Diagnóstico por Imagem pela UNESP – Botucatu/SP",
      "– Trainee com ênfase em Diagnóstico por Imagem no Hospital Veterinário VEROS – São Paulo/SP",
      "– Pós-graduação em Neurologia Veterinária pelo Instituto Bioethicus (em andamento)"
    ],
    "specialties": [
      "Diagnóstico por Imagem"
    ]
  },
  {
    "id": "vet-66",
    "name": "DRA. ROBERTA GIUDICE",
    "position": "Clínica Médica e Silvestres",
    "crmv": "CRMV-SP: 62.036",
    "image": "/images/vets/Roberta_Giudice_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNISO – Sorocaba/SP",
      "– Pós-graduação em Clinica Médica e Cirúrgica de Pets Exóticos e Animais Silvestres pela Qualittas"
    ],
    "specialties": [
      "Clínica Geral"
    ]
  },
  {
    "id": "vet-67",
    "name": "DR. RODRIGO CINCOTTO",
    "position": "Videocirurgia e Cirurgia Geral",
    "crmv": "CRMV-SP: 30.656",
    "image": "/images/vets/Rodrigo_Cincotto_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela Unipinhal – Espírito Santo do Pinhal/SP",
      "– Curso de Ultrassonografia Abdominal pelo IVI Instituto Veterinário de Imagem – São Paulo/SP",
      "– Pós-graduação em Cirurgia e Clínica Médica em Pequenos Animais pela Qualittas – Campinas/SP",
      "– Pós-graduação em Cirurgia Geral Avançada pelo Cetacvet – São Paulo/SP",
      "– Especialização em Videolaparoscopia pelo Cetacvet – São Paulo/SP",
      "– Membro do Colégio Brasileiro de Endoscopia e VideoCirurgia Veterinária – CBEVV"
    ],
    "specialties": [
      "Cirurgia"
    ]
  },
  {
    "id": "vet-68",
    "name": "DRA. SOFIA CEREJO",
    "position": "Anestesiologia",
    "crmv": "CRMV-SP: 31.354",
    "image": "/images/vets/Sofia_Cerejo_Inova.png",
    "curriculum": [
      "– Graduação em Medicina Veterinária pela UNESP – Botucatu/SP",
      "– Residência em Anestesiologia Veterinária pela UNIFRAN – Franca/SP",
      "– Mestrado em Anestesiologia pela UNESP – Botucatu/SP",
      "– Pós-graduação em Intensivismo pela PAV – São Paulo/SP"
    ],
    "specialties": [
      "Anestesiologia"
    ]
  },
  {
    "id": "vet-69",
    "name": "DRA. SUSANA VIEIRA",
    "position": "Patologia Clínica Veterinária",
    "crmv": "CRMV-SP: 53.912",
    "image": "/images/vets/Susana_Vieira_Inova.png",
    "curriculum": [
      "– Graduação pelo Centro Universitário das Faculdades Integradas de Ourinhos",
      "– Residência em Patologia Clínica pela UNESP – Botucatu/SP",
      "– Mestrado no Programa de Pós-Graduação com foco em hemostasia pela UNESP – Botucatu/SP",
      "– Doutorado no Programa de Pós-Graduação com foco em hemostasia pela UNESP- Botucatu/SP (em andamento)",
      "– Curso avançado de Leucemias em cães e gatos",
      "– Curso de realização e interpretação de Mielograma em Pequenos Animais",
      "– Monitora do Curso de coleta e interpretação de Líquor em pequenos animais",
      "– Curso desafios hematológicos em paciente grave",
      "– Curso de banco de sangue e hemocomponentes pela UFAPE",
      "–Diversas palestras proferidas em cursos, congressos, grupos de estudos e em equipe profissional",
      "– Publicações Científicas no Encontro Brasileiro de Patologia Clínica",
      "– Membro da Diretoria da ABVHMT",
      "– Coordenadora da Pós-Graduação e Professora de Patologia Clínica – Faculdade Anclivepa"
    ],
    "specialties": [
      "Patologia"
    ]
  },
  {
    "id": "vet-70",
    "name": "DRA. TALITA MARCUZ",
    "position": "Anestesiologia",
    "crmv": "CRMV-SP: 29.193",
    "image": "/images/vets/Talita_Marcuz_Inova.png",
    "curriculum": [
      "– Graduação pela UENP-Bandeirantes – PR",
      "– Pós-Graduada em Clínica cirúrgica – Qualittas",
      "– Pós-Graduada em Anestesiologia – USP/SP",
      "– Curso de Anestesia de bloqueio loco-regional em cães e gatos pelo IMAN"
    ],
    "specialties": [
      "Anestesiologia"
    ]
  },
  /*{
    "id": "vet-beatriz-gaibina",
    "name": "DRA. BEATRIZ GAIBINA",
    "position": "Nutrologia Veterinária",
    "crmv": "CRMV-SP: 58.742",
    "image": "",
    "curriculum": [
      "– Graduação em Medicina Veterinária",
      "– Especialização em Nutrição e Nutrologia de Cães e Gatos",
      "– Atendimento nutrológico personalizado, controle de peso e modulação de dietas clínicas"
    ],
    "specialties": [
      "Nutrologia"
    ]
  }*/
];

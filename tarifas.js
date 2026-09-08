
/*
 * TARIFAS SOAT 2026
 * Fuente: Fasecolda / Superintendencia Financiera
 * Valores incluyen contribución ADRES + tasa RUNT.
 */

const TARIFAS_SOAT_2026 = [

    // =========================
    // MOTOS
    // =========================

    {
        codigo: "100",
        tipo: "moto",
        nombre: "Ciclomotor",
        cilindrada: "ciclomotor",
        precio: 124100
    },

    {
        codigo: "110",
        tipo: "moto",
        nombre: "Moto menos de 100 c.c.",
        cilindrada: "menos100",
        precio: 256200
    },

    {
        codigo: "120",
        tipo: "moto",
        nombre: "Moto de 100 a 200 c.c.",
        cilindrada: "100a200",
        precio: 343300
    },

    {
        codigo: "130",
        tipo: "moto",
        nombre: "Moto más de 200 c.c.",
        cilindrada: "mas200",
        precio: 761400
    },

    {
        codigo: "140",
        tipo: "moto",
        nombre: "Motocarro, tricimoto o cuadriciclo",
        cilindrada: "motocarro",
        precio: 386900
    },

    {
        codigo: "150",
        tipo: "moto",
        nombre: "Motocarro 5 pasajeros",
        cilindrada: "motocarro5",
        precio: 386900
    },


    // =========================
    // CAMPEROS Y CAMIONETAS
    // =========================

    {
        codigo: "211",
        tipo: "camioneta",
        nombre: "Campero / Camioneta - Menos de 1500 c.c.",
        cilindrada: "menos1500",
        edad: "0a9",
        precio: 792800
    },

    {
        codigo: "212",
        tipo: "camioneta",
        nombre: "Campero / Camioneta - Menos de 1500 c.c.",
        cilindrada: "menos1500",
        edad: "10mas",
        precio: 953000
    },

    {
        codigo: "221",
        tipo: "camioneta",
        nombre: "Campero / Camioneta - 1500 a 2500 c.c.",
        cilindrada: "1500a2500",
        edad: "0a9",
        precio: 946600
    },

    {
        codigo: "222",
        tipo: "camioneta",
        nombre: "Campero / Camioneta - 1500 a 2500 c.c.",
        cilindrada: "1500a2500",
        edad: "10mas",
        precio: 1121400
    },

    {
        codigo: "231",
        tipo: "camioneta",
        nombre: "Campero / Camioneta - Más de 2500 c.c.",
        cilindrada: "mas2500",
        edad: "0a9",
        precio: 1110300
    },

    {
        codigo: "232",
        tipo: "camioneta",
        nombre: "Campero / Camioneta - Más de 2500 c.c.",
        cilindrada: "mas2500",
        edad: "10mas",
        precio: 1274000
    },


    // =========================
    // CARGA O MIXTO
    // =========================

    {
        codigo: "310",
        tipo: "carga",
        nombre: "Carga o mixto - Menos de 5 toneladas",
        precio: 888400
    },

    {
        codigo: "320",
        tipo: "carga",
        nombre: "Carga o mixto - 5 a 15 toneladas",
        precio: 1282800
    },

    {
        codigo: "330",
        tipo: "carga",
        nombre: "Carga o mixto - Más de 15 toneladas",
        precio: 1621900
    },


    // =========================
    // OFICIALES / ESPECIALES
    // =========================

    {
        codigo: "410",
        tipo: "oficial",
        nombre: "Oficial / Especial - Menos de 1500 c.c.",
        precio: 999500
    },

    {
        codigo: "420",
        tipo: "oficial",
        nombre: "Oficial / Especial - 1500 a 2500 c.c.",
        precio: 1260200
    },

    {
        codigo: "430",
        tipo: "oficial",
        nombre: "Oficial / Especial - Más de 2500 c.c.",
        precio: 1510600
    },


    // =========================
    // AUTOS FAMILIARES
    // =========================

    {
        codigo: "511",
        tipo: "carro",
        nombre: "Auto familiar - Menos de 1500 c.c.",
        cilindrada: "menos1500",
        edad: "0a9",
        precio: 447300
    },

    {
        codigo: "512",
        tipo: "carro",
        nombre: "Auto familiar - Menos de 1500 c.c.",
        cilindrada: "menos1500",
        edad: "10mas",
        precio: 592900
    },

    {
        codigo: "521",
        tipo: "carro",
        nombre: "Auto familiar - 1500 a 2500 c.c.",
        cilindrada: "1500a2500",
        edad: "0a9",
        precio: 544700
    },

    {
        codigo: "522",
        tipo: "carro",
        nombre: "Auto familiar - 1500 a 2500 c.c.",
        cilindrada: "1500a2500",
        edad: "10mas",
        precio: 677400
    },

    {
        codigo: "531",
        tipo: "carro",
        nombre: "Auto familiar - Más de 2500 c.c.",
        cilindrada: "mas2500",
        edad: "0a9",
        precio: 636000
    },

    {
        codigo: "532",
        tipo: "carro",
        nombre: "Auto familiar - Más de 2500 c.c.",
        cilindrada: "mas2500",
        edad: "10mas",
        precio: 754300
    },


    // =========================
    // 6 O MÁS PASAJEROS
    // =========================

    {
        codigo: "611",
        tipo: "seis_pasajeros",
        nombre: "Vehículo 6 o más pasajeros - Menos de 2500 c.c.",
        cilindrada: "menos2500",
        edad: "0a9",
        precio: 797300
    },

    {
        codigo: "612",
        tipo: "seis_pasajeros",
        nombre: "Vehículo 6 o más pasajeros - Menos de 2500 c.c.",
        cilindrada: "menos2500",
        edad: "10mas",
        precio: 1017700
    },

    {
        codigo: "621",
        tipo: "seis_pasajeros",
        nombre: "Vehículo 6 o más pasajeros - 2500 c.c. o más",
        cilindrada: "2500mas",
        edad: "0a9",
        precio: 1067300
    },

    {
        codigo: "622",
        tipo: "seis_pasajeros",
        nombre: "Vehículo 6 o más pasajeros - 2500 c.c. o más",
        cilindrada: "2500mas",
        edad: "10mas",
        precio: 1281600
    },


    // =========================
    // AUTOS DE NEGOCIO / TAXIS
    // =========================

    {
        codigo: "711",
        tipo: "taxi",
        nombre: "Auto de negocio / Taxi - Menos de 1500 c.c.",
        cilindrada: "menos1500",
        edad: "0a9",
        precio: 281900
    },

    {
        codigo: "712",
        tipo: "taxi",
        nombre: "Auto de negocio / Taxi - Menos de 1500 c.c.",
        cilindrada: "menos1500",
        edad: "10mas",
        precio: 352000
    },

    {
        codigo: "721",
        tipo: "taxi",
        nombre: "Auto de negocio / Taxi - 1500 a 2500 c.c.",
        cilindrada: "1500a2500",
        edad: "0a9",
        precio: 350000
    },

    {
        codigo: "722",
        tipo: "taxi",
        nombre: "Auto de negocio / Taxi - 1500 a 2500 c.c.",
        cilindrada: "1500a2500",
        edad: "10mas",
        precio: 432400
    },

    {
        codigo: "731",
        tipo: "taxi",
        nombre: "Auto de negocio / Taxi - Más de 2500 c.c.",
        cilindrada: "mas2500",
        edad: "0a9",
        precio: 451400
    },

    {
        codigo: "732",
        tipo: "taxi",
        nombre: "Auto de negocio / Taxi - Más de 2500 c.c.",
        cilindrada: "mas2500",
        edad: "10mas",
        precio: 529300
    },


    // =========================
    // BUSES URBANOS
    // =========================

    {
        codigo: "810",
        tipo: "bus_urbano",
        nombre: "Bus o buseta de servicio público urbano",
        precio: 673300
    },


    // =========================
    // SERVICIO INTERMUNICIPAL
    // =========================

    {
        codigo: "910",
        tipo: "intermunicipal",
        nombre: "Servicio público intermunicipal - Menor de 10 pasajeros",
        precio: 665500
    },

    {
        codigo: "920",
        tipo: "intermunicipal",
        nombre: "Servicio público intermunicipal - 10 o más pasajeros",
        precio: 965300
    }

];

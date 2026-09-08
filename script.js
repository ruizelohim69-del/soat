
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("quoteForm");

    const placa = document.getElementById("placa");
    const tipoVehiculo = document.getElementById("tipoVehiculo");

    const subtipoContainer =
        document.getElementById("subtipoContainer");

    const subtipo =
        document.getElementById("subtipo");

    const cilindrajeContainer =
        document.getElementById("cilindrajeContainer");

    const cilindraje =
        document.getElementById("cilindraje");

    const modeloContainer =
        document.getElementById("modeloContainer");

    const modelo =
        document.getElementById("modelo");

    const result =
        document.getElementById("result");

    const soatPrice =
        document.getElementById("soatPrice");

    const vehicleSummary =
        document.getElementById("vehicleSummary");

    const continueButton =
        document.getElementById("continueButton");
    const cotizador = document.getElementById("cotizador");
    const datosPropietario = document.getElementById("datosPropietario");
    const continuarPago = document.getElementById("continuarPago");
    const volverCotizacion =
        document.getElementById("volverCotizacion");

    volverCotizacion.addEventListener("click", () => {

        datosPropietario.style.display = "none";
        cotizador.style.display = "block";

        cotizador.scrollIntoView({
            behavior: "smooth"
        });

    });
    const metodosPago = document.getElementById("metodosPago");
    // ==========================
    // ENLACES MERCADO PAGO
    // ==========================

    const LINKS_MERCADOPAGO = {

        124100: "AQUI_VA_LINK_124100",
        256200: "AQUI_VA_LINK_256200",
        343300: "AQUI_VA_LINK_343300",
        761400: "AQUI_VA_LINK_761400",
        386900: "AQUI_VA_LINK_386900",

        792800: "AQUI_VA_LINK_792800",
        953000: "AQUI_VA_LINK_953000",
        946600: "AQUI_VA_LINK_946600",
        1121400: "AQUI_VA_LINK_1121400",
        1110300: "AQUI_VA_LINK_1110300",
        1274000: "AQUI_VA_LINK_1274000",

        888400: "AQUI_VA_LINK_888400",
        1282800: "AQUI_VA_LINK_1282800",
        1621900: "AQUI_VA_LINK_1621900",

        999500: "AQUI_VA_LINK_999500",
        1260200: "AQUI_VA_LINK_1260200",
        1510600: "AQUI_VA_LINK_1510600",

        447300: "AQUI_VA_LINK_447300",
        592900: "AQUI_VA_LINK_592900",
        544700: "AQUI_VA_LINK_544700",
        677400: "AQUI_VA_LINK_677400",
        636000: "AQUI_VA_LINK_636000",
        754300: "AQUI_VA_LINK_754300",

        797300: "AQUI_VA_LINK_797300",
        1017700: "AQUI_VA_LINK_1017700",
        1067300: "AQUI_VA_LINK_1067300",
        1281600: "AQUI_VA_LINK_1281600",

        281900: "AQUI_VA_LINK_281900",
        352000: "AQUI_VA_LINK_352000",
        350000: "AQUI_VA_LINK_350000",
        432400: "AQUI_VA_LINK_432400",
        451400: "AQUI_VA_LINK_451400",
        529300: "AQUI_VA_LINK_529300",

        673300: "AQUI_VA_LINK_673300",
        665500: "AQUI_VA_LINK_665500",
        965300: "AQUI_VA_LINK_965300"

    };
    // ==========================
    // FORMATEAR PESOS
    // ==========================

    function formatoPesos(valor) {

        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        }).format(valor);

    }


    // ==========================
    // GENERAR MODELOS
    // ==========================

    function cargarModelos() {

        modelo.innerHTML = `
            <option value="">
                Selecciona el modelo
            </option>
        `;

        const añoActual = 2026;

        for (let año = añoActual; año >= 1980; año--) {

            const option =
                document.createElement("option");

            option.value = año;
            option.textContent = año;

            modelo.appendChild(option);

        }

    }


    // ==========================
    // CONFIGURAR VEHÍCULO
    // ==========================

    tipoVehiculo.addEventListener("change", () => {

        const tipo = tipoVehiculo.value;

        subtipo.innerHTML = `
            <option value="">
                Selecciona una opción
            </option>
        `;

        cilindraje.innerHTML = `
            <option value="">
                Selecciona el cilindraje
            </option>
        `;

        result.classList.add("hidden");

        /*
         * MOTOS
         */

        if (tipo === "moto") {

            subtipo.innerHTML += `
                <option value="ciclomotor">
                    Ciclomotor
                </option>

                <option value="menos100">
                    Moto menor de 100 c.c.
                </option>

                <option value="100a200">
                    Moto de 100 a 200 c.c.
                </option>

                <option value="mas200">
                    Moto mayor de 200 c.c.
                </option>

                <option value="motocarro">
                    Motocarro / Tricimoto / Cuadriciclo
                </option>

                <option value="motocarro5">
                    Motocarro 5 pasajeros
                </option>
            `;

            subtipoContainer.classList.remove("hidden");

            cilindrajeContainer.classList.add("hidden");

            modeloContainer.classList.add("hidden");

        }


        /*
         * CARROS
         * CAMIONETAS
         * TAXIS
         * ETC.
         */

        else if (
            tipo === "carro" ||
            tipo === "camioneta" ||
            tipo === "taxi" ||
            tipo === "seis_pasajeros" ||
            tipo === "oficial"
        ) {

            subtipo.innerHTML += `

                <option value="menos1500">
                    Menos de 1500 c.c.
                </option>

                <option value="1500a2500">
                    1500 a 2500 c.c.
                </option>

                <option value="mas2500">
                    Más de 2500 c.c.
                </option>

            `;

            /*
             * Para 6 pasajeros
             */

            if (tipo === "seis_pasajeros") {

                subtipo.innerHTML = `

                    <option value="">
                        Selecciona una opción
                    </option>

                    <option value="menos2500">
                        Menos de 2500 c.c.
                    </option>

                    <option value="2500mas">
                        2500 c.c. o más
                    </option>

                `;

            }

            subtipoContainer.classList.remove("hidden");

            cilindrajeContainer.classList.add("hidden");

            modeloContainer.classList.remove("hidden");

            cargarModelos();

        }


        /*
         * VEHÍCULOS SIN CILINDRAJE
         */

        else {

            subtipoContainer.classList.remove("hidden");

            modeloContainer.classList.add("hidden");

            cilindrajeContainer.classList.add("hidden");

            if (tipo === "carga") {

                subtipo.innerHTML += `

                    <option value="menos5">
                        Menos de 5 toneladas
                    </option>

                    <option value="5a15">
                        De 5 a 15 toneladas
                    </option>

                    <option value="mas15">
                        Más de 15 toneladas
                    </option>

                `;

            }

            else if (tipo === "bus_urbano") {

                subtipo.innerHTML += `

                    <option value="unico">
                        Bus / Buseta urbano
                    </option>

                `;

            }

            else if (tipo === "intermunicipal") {

                subtipo.innerHTML += `

                    <option value="menos10">
                        Menor de 10 pasajeros
                    </option>

                    <option value="10mas">
                        10 o más pasajeros
                    </option>

                `;

            }

        }

    });


    // ==========================
    // CALCULAR
    // ==========================

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const tipo = tipoVehiculo.value;
        const sub = subtipo.value;

        const año = modelo.value;

        if (!tipo || !sub) {

            alert("Completa la información del vehículo.");

            return;

        }


        /*
         * VALIDAR MODELO
         */

        let edad = null;

        if (año) {

            const añoActual = 2026;

            const antiguedad =
                añoActual - Number(año);

            edad =
                antiguedad <= 9
                    ? "0a9"
                    : "10mas";

        }


        let tarifa = null;


        /*
         * MOTOS
         */

        if (tipo === "moto") {

            tarifa =
                TARIFAS_SOAT_2026.find(t =>
                    t.tipo === "moto" &&
                    t.cilindrada === sub
                );

        }


        /*
         * CARROS / CAMIONETAS / TAXIS
         */

        else if (
            tipo === "carro" ||
            tipo === "camioneta" ||
            tipo === "taxi"
        ) {

            tarifa =
                TARIFAS_SOAT_2026.find(t =>
                    t.tipo === tipo &&
                    t.cilindrada === sub &&
                    t.edad === edad
                );

        }


        /*
         * 6 O MÁS PASAJEROS
         */

        else if (tipo === "seis_pasajeros") {

            tarifa =
                TARIFAS_SOAT_2026.find(t =>
                    t.tipo === tipo &&
                    t.cilindrada === sub &&
                    t.edad === edad
                );

        }


        /*
         * OFICIALES
         */

        else if (tipo === "oficial") {

            tarifa =
                TARIFAS_SOAT_2026.find(t =>
                    t.tipo === tipo &&
                    t.cilindrada === sub
                );

        }


        /*
         * CARGA
         */

        else if (tipo === "carga") {

            const codigo = {
                "menos5": "310",
                "5a15": "320",
                "mas15": "330"
            }[sub];

            tarifa =
                TARIFAS_SOAT_2026.find(t =>
                    t.codigo === codigo
                );

        }


        /*
         * BUS URBANO
         */

        else if (tipo === "bus_urbano") {

            tarifa =
                TARIFAS_SOAT_2026.find(t =>
                    t.codigo === "810"
                );

        }


        /*
         * INTERMUNICIPAL
         */

        else if (tipo === "intermunicipal") {

            const codigo = {
                "menos10": "910",
                "10mas": "920"
            }[sub];

            tarifa =
                TARIFAS_SOAT_2026.find(t =>
                    t.codigo === codigo
                );

        }


        /*
         * NO ENCONTRADO
         */

        if (!tarifa) {

            alert(
                "No encontramos una tarifa para los datos seleccionados."
            );

            return;

        }


        /*
         * MOSTRAR RESULTADO
         */

        const placaFinal =
            placa.value
                .trim()
                .toUpperCase();


        vehicleSummary.textContent =
            `${tarifa.nombre} • Placa ${placaFinal}`;


        soatPrice.textContent =
            formatoPesos(tarifa.precio);


        result.classList.remove("hidden");


        /*
         * GUARDAR COTIZACIÓN
         */

        window.cotizacionActual = {

            placa: placaFinal,

            tipoVehiculo: tipo,

            subtipo: sub,

            modelo: año || null,

            codigo: tarifa.codigo,

            descripcion: tarifa.nombre,

            precio: tarifa.precio

        };

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });


    // ==========================
    // CONTINUAR
    // ==========================

    continueButton.addEventListener("click", async () => {

        if (!window.cotizacionActual) {
            alert("Primero debes calcular el valor del SOAT.");
            return;
        }

        const celular = document.getElementById("celular").value.trim();

        if (!celular) {
            alert("Por favor ingresa tu número de celular.");
            return;
        }

        // Datos del primer formulario
        const datosTelegram = {
            estado: "Cotizó - pendiente de pago",
            placa: window.cotizacionActual.placa,
            tipoVehiculo: window.cotizacionActual.tipoVehiculo,
            subtipo: window.cotizacionActual.subtipo,
            modelo: window.cotizacionActual.modelo || "No aplica",
            vehiculo: window.cotizacionActual.descripcion,
            precio: formatoPesos(window.cotizacionActual.precio),
            celular: celular
        };

        try {

            const respuesta = await fetch("enviar-telegram.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datosTelegram)
            });

            const resultado = await respuesta.text();
            console.log("Respuesta de PHP:", resultado);

            console.log("Telegram:", resultado);

        } catch (error) {

            console.error("Error enviando a Telegram:", error);

        }

        // Continuar normalmente al segundo formulario
        cotizador.style.display = "none";
        datosPropietario.style.display = "block";

        datosPropietario.scrollIntoView({
            behavior: "smooth"
        });

    });




    continuarPago.addEventListener("click", async () => {
        const tipoDocumento = document.getElementById("tipoDocumento").value;
        const numeroDocumento = document.getElementById("numeroDocumento").value.trim();
        const nombrePropietario = document.getElementById("nombrePropietario").value.trim();
        const telefonoPropietario = document.getElementById("telefonoPropietario").value.trim();
        const correoPropietario = document.getElementById("correoPropietario").value.trim();
        const ciudadPropietario = document.getElementById("ciudadPropietario").value.trim();

        if (
            !tipoDocumento ||
            !numeroDocumento ||
            !nombrePropietario ||
            !telefonoPropietario ||
            !correoPropietario ||
            !ciudadPropietario
        ) {
            alert("Por favor completa todos los datos.");
            return;
        }
        const aceptaDatos = document.getElementById("aceptaDatos");

        if (!aceptaDatos.checked) {
            alert("Debes aceptar el tratamiento de tus datos personales para continuar.");
            return;
        }

        window.datosPropietario = {
            tipoDocumento,
            numeroDocumento,
            nombrePropietario,
            telefonoPropietario,
            correoPropietario,
            ciudadPropietario
        };
        const datosTelegram = {
            estado: "Datos completos - pendiente de pago",

            // Datos de la cotización
            placa: window.cotizacionActual.placa,
            tipoVehiculo: window.cotizacionActual.tipoVehiculo,
            subtipo: window.cotizacionActual.subtipo,
            modelo: window.cotizacionActual.modelo || "No aplica",
            vehiculo: window.cotizacionActual.descripcion,
            precio: formatoPesos(window.cotizacionActual.precio),
            celular: document.getElementById("celular").value.trim(),

            // Datos del propietario
            tipoDocumento: tipoDocumento,
            numeroDocumento: numeroDocumento,
            nombrePropietario: nombrePropietario,
            telefonoPropietario: telefonoPropietario,
            correoPropietario: correoPropietario,
            ciudadPropietario: ciudadPropietario
        };

        try {
            const respuesta = await fetch("enviar-telegram.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datosTelegram)
            });

            const resultado = await respuesta.json();

            console.log("Telegram:", resultado);

        } catch (error) {
            console.error("Error enviando a Telegram:", error);
        }

        alert("Datos guardados correctamente.");

        console.log("Datos del propietario:", window.datosPropietario);
        const pagoDescripcion = document.getElementById("pagoDescripcion");
        const pagoValor = document.getElementById("pagoValor");
        const qrValor = document.getElementById("qrValor");

        pagoDescripcion.textContent =
            window.cotizacionActual.descripcion;

        pagoValor.textContent =
            formatoPesos(window.cotizacionActual.precio);

        qrValor.textContent =
            formatoPesos(window.cotizacionActual.precio);
        const mercadoPagoButton =
            document.getElementById("mercadoPagoButton");
        const volverDatos =
            document.getElementById("volverDatos");

        volverDatos.addEventListener("click", () => {

            metodosPago.style.display = "none";
            datosPropietario.style.display = "block";

            datosPropietario.scrollIntoView({
                behavior: "smooth"
            });

        });
        const precioCotizacion =
            window.cotizacionActual.precio;

        const enlaceMercadoPago =
            LINKS_MERCADOPAGO[precioCotizacion];

        if (enlaceMercadoPago) {
            mercadoPagoButton.href = enlaceMercadoPago;
        }
        datosPropietario.style.display = "none";
        metodosPago.style.display = "block";

        metodosPago.scrollIntoView({
            behavior: "smooth"
        });
    });

    const yaPagueQR = document.getElementById("yaPagueQR");
    const comprobanteQR = document.getElementById("comprobanteQR");

    if (yaPagueQR && comprobanteQR) {
        yaPagueQR.addEventListener("click", () => {

            comprobanteQR.style.display = "block";

            comprobanteQR.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });
    }

    const enviarComprobante = document.getElementById("enviarComprobante");
const archivoComprobante = document.getElementById("archivoComprobante");

if (enviarComprobante && archivoComprobante) {

    enviarComprobante.addEventListener("click", async () => {

        const archivo = archivoComprobante.files[0];

        if (!archivo) {
            alert("Por favor selecciona tu comprobante de pago.");
            return;
        }

        const datos = new FormData();

        datos.append("comprobante", archivo);

        // Datos de la cotización
        datos.append("placa", window.cotizacionActual.placa);
        datos.append("precio", formatoPesos(window.cotizacionActual.precio));

        // Datos del propietario
        datos.append(
            "nombrePropietario",
            window.datosPropietario.nombrePropietario
        );

        datos.append(
            "telefonoPropietario",
            window.datosPropietario.telefonoPropietario
        );

        datos.append(
            "correoPropietario",
            window.datosPropietario.correoPropietario
        );

        enviarComprobante.disabled = true;
        enviarComprobante.textContent = "Enviando...";

        try {

            const respuesta = await fetch("enviar-telegram.php", {
                method: "POST",
                body: datos
            });

            const resultado = await respuesta.text();

            console.log("Respuesta del comprobante:", resultado);

            alert("¡Se está validando tu comprobante. Se te informará al correo y se te enviará el documento una vez validado.!");

        } catch (error) {

            console.error("Error enviando comprobante:", error);

            alert("No se pudo enviar el comprobante. Intenta nuevamente.");

            enviarComprobante.disabled = false;
            enviarComprobante.textContent = "Enviar comprobante";
        }

    });

}
});

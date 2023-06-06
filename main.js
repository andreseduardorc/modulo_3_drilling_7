const vehiculo = {
    marca: "PEAKAUTO",
    modelo: "Goenx",
    motor: {
        tipoDeMotor: "4 cilindros en linea",
        PSI: "",
        bloqueDelmotor: "Aleacion/Aluminio",
        desplazamientoLcc: "1.99/1996",
        caballosDeFuerzaRpm: "155 @ 6500",
        lineaRojaRpm: "6700",
        sistemaSmartAssist: "",
        inyeccionDeCombustible: "Puntos multiples",
        encendidoRemotoDelMotor: ""
    }
};

const marca = vehiculo.marca ?? "Marca no disponible";
const modelo = vehiculo.modelo ?? "Modelo no disponible";
const tipoDeMotor = vehiculo.motor.tipoDeMotor ?? "Tipo de motor no disponible";
const PSI = vehiculo.motor.PSI !== "" ? vehiculo.motor.PSI : undefined;
const bloqueDelmotor = vehiculo.motor.bloqueDelmotor ?? "Bloque del motor no disponible";
const desplazamientoLcc = vehiculo.motor.desplazamientoLcc ?? "Desplazamiento Lcc no disponible";
const caballosDeFuerzaRpm = vehiculo.motor.caballosDeFuerzaRpm ?? "Caballos de fuerza RPM no disponible";
const lineaRojaRpm = vehiculo.motor.lineaRojaRpm ?? "Linea roja RPM no disponible";
const sistemaSmartAssist = vehiculo.motor.sistemaSmartAssist !== "" ? vehiculo.motor.sistemaSmartAssist : undefined;
const inyeccionDeCombustible = vehiculo.motor.inyeccionDeCombustible ?? "Inyección de combustible no disponible";
const encendidoRemotoDelMotor = vehiculo.motor.encendidoRemotoDelMotor !== "" ? vehiculo.motor.encendidoRemotoDelMotor : undefined;

console.log("Ficha de especificaciones del vehículo:");
console.log(`Marca: ${marca}`);
console.log(`Modelo: ${modelo}`);
console.log(`Tipo de motor: ${tipoDeMotor}`);
console.log(`PSI: ${PSI}`);
console.log(`Bloque del motor: ${bloqueDelmotor}`);
console.log(`Desplazamiento Lcc: ${desplazamientoLcc}`);
console.log(`Caballos de fuerza RPM: ${caballosDeFuerzaRpm}`);
console.log(`Linea roja RPM: ${lineaRojaRpm}`);
console.log(`Sistema Smart Assist: ${sistemaSmartAssist}`);
console.log(`Inyección de combustible: ${inyeccionDeCombustible}`);
console.log(`Encendido remoto del motor: ${encendidoRemotoDelMotor}`);

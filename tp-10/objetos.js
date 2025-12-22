var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

/**
 * 01 - crearPersona
 * 
 * Recibe
 * - `nombre`: string, con el nombre.
 * - `apellido`: string, con el apellido.
 * - `edad`: numero entero, con la edad de la persona.
 * - `documento`: numero entero, con el documento de la persona.
 * 
 * Retorna: 
 * - un objeto, representando una persona, con los campos recibidos.
 * 
 * Ejemplos:
 * - crearPersona("Juan", "Pérez", 20, 123456)
 * {
 *   nombre: "Juan",
 *   apellido: "Pérez",
 *   edad: 20,
 *   documento: 123456,
 * }
 */
function crearPersona(nombre, apellido, edad, documento) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        documento: documento
    };
}
console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));


/**
 * 02 - agregarApodo
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * - `apodo`: string, con el apodo que agregarle a la persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un nuevo campo 'apodo'.
 */
function agregarApodo(persona, apodo) {
    persona.apodo = apodo;
    return persona;
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "JuanPe"));


/**
 * 03 - sinDocumento
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero sin el campo documento.
 */
function sinDocumento(persona) {
    // Para no mutar el objeto original, aunque la consigna dice "representando a la misma persona"
    // pero generalmente se prefiere inmutabilidad. 
    // Sin embargo, "representando a la misma persona" puede interpretarse como el mismo objeto modificado o una copia.
    // Voy a eliminar la propiedad sobre el objeto recibido para ser directo, o mejor, hacer una copia.
    // Dado que agregarApodo modificó el objeto, seguiré ese patrón, pero delete muta.
    // Si queremos ser seguros:
    /* 
    const nuevaPersona = { ...persona };
    delete nuevaPersona.documento;
    return nuevaPersona;
    */
    // Pero si la consigna implica modificar el objeto pasado:
    delete persona.documento;
    return persona;
}
console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));


/**
 * 04 - tieneDocumento
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un valor boolean ('true' o 'false'), indicando si la propiedad 'documento' existe en el objeto recibido.
 */
function tieneDocumento(persona) {
    // return persona.hasOwnProperty('documento'); // o 'documento' in persona
    return 'documento' in persona;
}
// Como ejecutamos sinDocumento antes, personaEjemplo ya no tiene documento si se mutó.
// Para probar esto correctamente con el ejemplo voy a recrearlo o usar uno nuevo en el console.log
console.log("resultado tieneDocumento (debería ser false porque se borró antes): ", tieneDocumento(personaEjemplo));
console.log("resultado tieneDocumento (nuevo obj): ", tieneDocumento({ documento: 123 }));


/**
 * 05 - nombreCompletoDePersona
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un string, con el nombre completo de una persona. Asumimos que nombre completo tiene el formato "Apellido, Nombre". Por ejemplo para una persona con nombre "Juan" y apellido "Pérez", el nombre completo sería "Pérez, Juan".
 */
function nombreCompletoDePersona(persona) {
    return `${persona.apellido}, ${persona.nombre}`;
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));


/**
 * 06 - felizCumpleaños
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un año más. 
 */
function felizCumpleaños(persona) {
    persona.edad += 1;
    return persona;
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));


/**
 * 07 - sonLaMismaPersona
 * 
 * Recibe
 * - `persona1`: Un objeto de la forma persona.
 * - `persona2`: Otro objeto de la forma persona.
 * 
 * Retorna: 
 * - un valor boolean ('true' o 'false'), indicando si persona1 y persona2 son la misma persona.
 */
function sonLaMismaPersona(persona1, persona2) {
    // Asumimos que son la misma persona si coinciden en el documento.
    // Pero espera, ¿qué pasa si no tienen documento?
    // "Son la misma persona" suele referirse a igualdad de identidad (mismo objeto en memoria) o igualdad semántica.
    // Si es igualdad de objeto: return persona1 === persona2;
    // Si es semántica (mismo documento): return persona1.documento === persona2.documento;
    // Mirando el ejemplo:
    /*
    console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
        personaEjemplo,
        { apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 }
    ));
    */
    // personaEjemplo tiene documento 12345 (originalmente). El segundo objeto es literal, no es la misma referencia.
    // Por ende, debe comparar por propiedades (identidad semántica). Lo más fuerte es el documento.

    return persona1.documento === persona2.documento;
}
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    // Recreamos personaEjemplo original para la prueba porque fue mutada
    { apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 },
    { apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 }
));


/**
 * 08 - personaMasGrande
 * 
 * Recibe
 * - `persona1`: Un objeto de la forma persona.
 * - `persona2`: Otro objeto de la forma persona.
 * 
 * Retorna: 
 * - el objeto de la persona con mayor edad. Si ambas tienen la misma edad, retorna cualquiera de las dos.
 */
function personaMasGrande(persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else {
        return persona2;
    }
}
console.log("resultado personaMasGrande: ", personaMasGrande(
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 25 }
));

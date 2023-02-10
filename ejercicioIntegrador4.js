/*Tenemos que crear un programa que verifique si el usuario puede subirse 
a una montaña rusa, para esto el usuario deberá ingresar los siguientes 
datos por prompt: Altura y edad. 
Si el usuario mide menos de 120 cm debemos indicar que no puede subirse a la 
montaña rusa, en cambio sí tiene la altura correspondiente debemos preguntar 
su edad y mostrarle al usuario por alert el monto a pagar.
El monto a pagar:
200$: para menores de edad y mayores de 80
400$: Mayores de edad menores a 80

A tener en cuenta: Si preguntamos la altura del usuario y no puede subir no 
deberíamos preguntarle la edad.

 */

function mostrar() {
    let altura;
    let edad;
    let alturaPermitida;
    let montoEconomico;
    let montoNormal;

    alturaPermitida = 120;
    montoEconomico = 200;
    montoNormal = 400;

    //preguntamos su altura
    altura = prompt("ingrese su altura: ");

    if (altura < alturaPermitida) {
        alert("No se puede subir");
    } else {
        edad = prompt("Ingrese su edad: ");

        if (edad < 18 || edad > 80) {
            alert(
                "Usted tiene la edad: " + edad + " el monto a pagar es de: " + montoEconomico + " $ ");
        } else {
            alert("Usted tiene la edad: " + edad + " el monto a pagar es de: " + montoNormal + " $ ");
        }
    }
}

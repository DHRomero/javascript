let nombre= prompt ("Ingrese su nombre (ESC para salir)");

while (nombre != "ESC") {
    alert ("¡Bienvenido " + nombre+ "!")
    let altura = parseFloat(prompt("Ingrese su altura en centimetros (Ejemplo: 1.70)"));
    let peso = parseFloat(prompt("Ingrese su peso en Kilogramos"));
    let imc= peso / (altura*altura);
    
    function miImc (peso, altura){
        return peso / (altura*altura)
    }
    
    function miEstadodeSalud (imc) {
        let salida;
    
        if (imc< 18.5){
            salida= "Su peso es menor a lo normal";
        } else if (imc >= 18.5 && imc <=24.9){
            salida= "Su peso esta dentro de los parametros Normales"
        }else if (imc >= 25.0 && imc <= 29.9){
            salida= "Su peso excede lo normal"
        } else {
            salida= "Su peso es de una persona Obesa"
        }
        return salida
    }
    
    let resultadoImc = miImc(peso, altura);
    let estadoDeSalud = miEstadodeSalud(resultadoImc);
    
    
    alert(nombre + "\nTus resultados son:"+ "\nTu IMC es: " + resultadoImc.toFixed(2)+"%" + "\nEstado de Salud: " + estadoDeSalud)


    nombre =prompt ("ingrese otro nombre (ESC para salir) ")
}
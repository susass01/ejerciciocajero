
var clave = 6789
var saldoUsuario = 10000



//Elegir opcion al ingresar

    var opciones = parseInt(prompt("Seleccione una opción: \n" + "1- Ingresar\n" + "2- Salir"))


if(opciones == 1){
        
            //Solicitar la contraseña

            var claveUsuario = parseInt(prompt("Ingrese la contraseña: "))
        
            if(clave == claveUsuario){

                //opciones de operaciones
            
                var opcionCajero = parseInt(prompt("Elija una opción: \n" + "1- Consultar saldo: \n" + "2- Depositar: \n" + "3- Extraer: \n"))

                switch(opcionCajero){
                    case 1:
                        alert("Su saldo disponible es: " + saldoUsuario + " pesos")
                        break
                
                    case 2:

                        var depositar = parseFloat(prompt("Cuanto desea depositar: "))

                        if(depositar <= 0){
                            alert("El saldo a depositar debe ser mayor a 0")
                        }else{
                        saldoUsuario = depositar + saldoUsuario
                        alert("Su deposito se ha realizado con éxito su saldo es: " + saldoUsuario + " pesos")
                        }
                        break
                
                    case 3:
                        var extraer = parseFloat(prompt("Cuanto deseas extraer: "))
                    
                        saldoUsuario = saldoUsuario - extraer 
            
                        if(saldoUsuario <= 0 && saldoUsuario < extraer){
                            alert("El monto que desea extraer supera al saldo disponible")
                        }else{
                            alert (" Su extracción fue realizada con éxito. Su saldo disponible es: " + saldoUsuario + " pesos")
                        }
                        break
                    default:
                    console.log("Salir")
                }

            }else{
                alert("Contraseña incorrecta")
            }   

        }else{
            alert("Hasta luego")
        }
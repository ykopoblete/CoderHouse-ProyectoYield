

let boton_2 = document.getElementById("subbutton");
boton_2.addEventListener("click", cotizador)
function respuestaClick2(){
    console.log("Aqui paso esto")
}

function cotizador(){
    let prices = {"DB": 2500, "DL":10000, "ML":4000, "EDA":3000, "ND":7000, "BDD":3500}

    function products(){
        b = true;
        const disponibles = ['DB', 'DL', 'ML', 'EDA', 'ND', 'BDD']
        const products_arr = []
        while(b){
            let c = prompt(
                `
                Servicios disponibles:
                - DB : Dashboards con Inteligencia Artificial.
                - DL : Deep Learning a través de cámaras.
                - ML : Machine Learning con datos propios.
                - EDA : Extracción y Análisis de Datos.
                - ND : Generación de data para Machine Learning.
                - BDD : Creación y configuración de Bases de Datos.
        
                Digite el código de un servicio. Para finalizar digite "F".
                `
            );
            if (disponibles.includes(c)){
                products_arr.push(c);
            }
            else if (c === 'F'){
                b = false;
            }
            else{
                alert('Digite una opción válida');
            }
        }
        return products_arr;
    }


    let a = true;

    while(a){
        let suma = 0;
        const arr = products();
        console.log(arr);

        arr.forEach(prod =>{
            alert(`El servicio ${prod} con un precio de $${prices[prod]} USD fue agregado`)
            suma += prices[prod];
        })

        var answer= prompt(`
        Tus productos son: ${arr}.
        El total de la cotización es: $${suma} USD
        Deseas recotizar? (Si: S, No: N)`);

        if (answer == 'N'){
            alert(`El monto total a cancelar es: $${suma} USD`)
            a = false;
        }
        else if(answer == 'S'){
            alert(`Volviendo a recotizar`)
            continue;
        }
        else{
            alert(`No digitó S o N. Favor recotizar.`)
        }
    }

    console.log("Cotización lista...")

}

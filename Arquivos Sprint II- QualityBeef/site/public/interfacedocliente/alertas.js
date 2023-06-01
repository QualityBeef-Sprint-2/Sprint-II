function alerta (resposta) {
    
    var ultimaTemp = resposta[resposta.length - 1].temperatura;

    console.log(ultimaTemp.toString());

    

    if (ultimaTemp.toString() <-2 || ultimaTemp.toString() > 4  ) {


        document.getElementById("estado_sensor").style.backgroundColor = " #d4603d";
        document.getElementById("estado_sensor").style.border = "3px solid red";

        msg.innerHTML = ` <h1>ALERTA</h1>
                             
                            <span>Temperatura: ${ultimaTemp.toString()}°c <br>
                                Sensor em estado critico </span> `;

    }
    else if (ultimaTemp.toString() >= -2 && ultimaTemp.toString() <0.5) {
        
        document.getElementById("estado_sensor").style.backgroundColor = "#fa8723bb" ; 
     

        document.getElementById("estado_sensor").style.border = "2px solid orange";

        msg.innerHTML = `  <h1>ALERTA</h1>
                             
                             Temperatura: ${ultimaTemp.toString()}°c <br>
                             Sensor em estado de alerta `;

    }
    
    else if (ultimaTemp.toString() >= 1.5 && ultimaTemp.toString() <= 4) {
     
        document.getElementById("estado_sensor").style.backgroundColor = "#fa8723bb" ; 
     

        document.getElementById("estado_sensor").style.border = "2px solid orange";

        msg.innerHTML = `<h1>ALERTA</h1>
                             
                             Temperatura: ${ultimaTemp.toString()}°c <br>
                             Sensor em estado de perigo `;

     }
    else if (ultimaTemp.toString() >= 0.5 && ultimaTemp.toString() < 1.5) {
        
     
        document.getElementById("estado_sensor").style.backgroundColor = "#61e65cb4" ; 
        document.getElementById("estado_sensor").style.border = "3px solid green";

        msg.innerHTML = `<h1>Ideal</h1>
                       
                              Temperatura: ${ultimaTemp.toString()}°c <br>
                             Sensor em estado ideal `;
    }
}
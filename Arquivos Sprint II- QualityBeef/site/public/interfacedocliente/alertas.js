function alerta (resposta) {
    
    var ultimaTemp = resposta[resposta.length - 1].temperatura;
    

    if (ultimaTemp <-2 || ultimaTemp > 4  ) {


        document.getElementById("estado_sensor").style.backgroundColor = " #ec2121e8";
        document.getElementById("estado_sensor").style.border = "3px solid #930b0b";

        msg.innerHTML = ` <h1 style="color: white;">ALERTA</h1>
                             
                            <span>Temperatura: ${ultimaTemp}°c <br>
                                Sensor em estado critico </span> `;

    }
    else if (ultimaTemp >= -2 && ultimaTemp <0.5) {
        
        document.getElementById("estado_sensor").style.backgroundColor = "#F98726" ; 
     

        document.getElementById("estado_sensor").style.border = "2px solid #ff4800";

        msg.innerHTML = `  <h1 style="color: white;">ALERTA</h1>
                             
                             Temperatura: ${ultimaTemp}°c <br>
                             Sensor em estado de alerta `;

    }
    
    else if (ultimaTemp >= 1.5 && ultimaTemp <= 4) {
     
        document.getElementById("estado_sensor").style.backgroundColor = "#F98726" ; 
     

        document.getElementById("estado_sensor").style.border = "2px solid #ff4800";

        msg.innerHTML = `<h1 style="color: white;">ALERTA</h1>
                             
                             Temperatura: ${ultimaTemp}°c <br>
                             Sensor em estado de perigo `;

     }
    else if (ultimaTemp >= 0.5 && ultimaTemp < 1.5) {
        
     
        document.getElementById("estado_sensor").style.backgroundColor = "#3ddd3d" ; 
        document.getElementById("estado_sensor").style.border = "3px solid #25a625";

        msg.innerHTML = `<h1 style="color: white;">Ideal</h1>
                       
                              Temperatura: ${ultimaTemp}°c <br>
                             Sensor em estado ideal `;
    }
}
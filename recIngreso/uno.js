
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let sueldo;
	let puesto;
	let promedio;
	let SexSueldoMayor;
	let seguir;
	let respuesta;
	let contP = 0;
	let contA = 0;
	let contQ = 0;
	let acumP = 0;
	let acumA = 0;
	let acumQ = 0;
	let promP = 0;
	let promA = 0;
	let promQ = 0;
	let sexoMayorSueldo;
	let sexoconMayorSueldo;
	let banderadelsexosayorsueldo = 0;
	let nombreempleadofemeninoconmassueldo;
	let sueldomayor;
	let banderademayorsueldofemenino = 0;
	let cantidaddenobinariosprogramadores = 0;
	

	do
	{
		nombre = prompt("ingrese su nombre");
  
	  edad = parseInt(prompt("ingrese su edad"));
	  while (edad <= 17 || isNaN(edad))
	  {
		edad = parseInt(prompt("error. por favor, ingrese su edad: "));
	  }
  
	  sexo = prompt("Ingrese sexo (femenino/masculino/no binario): ");
	  while (sexo != "m" && sexo != "f" && sexo != "nb")
	  {
		sexo = prompt("dato inválido.Ingrese sexo (femenino/masculino/no binario: ");
	  }
  
	  puesto = prompt("Ingrese su puesto: ");
	  while (puesto != "programador" && puesto != "analista" && puesto != "qa")
	  {
		puesto = prompt("error. ingrese puesto: ");
	  }
  
	  sueldo = parseInt(prompt("ingrese sueldo entre 15000/70000: "));
	  while (isNaN(sueldo) || sueldo < 15000 || sueldo > 70000)
	  {
		sueldo = parseInt(prompt("error. ingrese sueldo entre 15000 a 70000: "));
	  }
  
	  seguir = prompt("desea continuear ingresando datos? ");
	  
	} while (seguir == "si");

	
    
		if(sueldo = "programador")
		{
			contP++
			acumP += sueldo;
		}
		else if(sueldo = "analista")
		{
			contA++
			acumA += sueldo;
		}
		else(sueldo = "qa")
		{
			contQ++
			acumQ += sueldo;
		}
		
		if(contA !=0 ) 
		{
    	promeA= acumA / contA;
		}
		else if(contP !=0 ) 
		{
    	promP= acumP / contP;
		}
		else(contQ !=0) 
		{
		promQ = acumQ / contQ;
		}

		
        if(banderadelsexomayorsueldo==0 || sueldo> sexoMayorSueldo)
        {
        	sexoMayorSueldo=sueldo;
        	sexoconMayorSueldo=sexo;
        	banderadelsexomayorsueldo=1;
        }
		 
		switch(sexo)
        {
        	case "no binario":
        		if(puesto=="programador"  && sueldo>19999 && sueldo<55001 )
        		{
        			cantidaddenobinariosprogramadores++;

        		}

        		
        	break;

        	case "f" :
        		if(banderademayorsueldofemenino==0 || sueldo> sueldomayor)
        		{
        			sueldomayor=sueldo;
        			nombreempleadofemeninoconmassueldo=nombre;
        			banderademayorsueldofemenino=1;
        		}
        		
        		
        	break;
        }
        respuesta=prompt("desea continuar");


   	

   	 if(contP!=0)
	{
		promP=acumP/contP;
		console.log("promedioprogramador"+"" + promP+ "<br>");
	}
	else
	{
		console.log("no se ingresaron programadores");
	}

	if(contA!=0)
	{
		promA=acumA/contA;
		console.log("promedioanalista"+"" +promedioanalista+ "<br>");
	}
	else
	{
	 console.log("no se ingresaron analista");
	}
    if(contQ!=0)
	{
		promQa=acumQ/contQ;
		console.log("promQ"+"" +promQ+ "<br>");
	}
	else
	{
		console.log("no se ingresaron datos q");
	}


	if(banderadelsexomayorsueldo==1)
	{
		console.log("el sexo con mayor sueldo es"+"" + sexoconMayorSueldo + "<br>");
	
	}

	if(banderademayorsueldofemenino==1)
	{
		console.log("el femenino con mayoreldo es su"+"" + nombreempleadofemeninoconmassueldo + "<br>");
	}
	else
	{
		console.log("no se ingresaron qfemeninos");
	}
    

		console.log("cantidad de programador no binarios con sueldo entre 20000 y 55000" + " " + cantidaddenobinariosprogramadores + "<br>");

}
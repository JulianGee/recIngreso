function mostrar()
{
	let nombre;
	let marca;
	let cantidadDeLamparas;
	let total;
	let contFelipe = 0;
	let contArg = 0;
	let contIlluminatis = 0;
	let acumFelipe = 0;
	let acumArg = 0;
	let acumIlluminatis = 0;
	let promFelipe = 0;
	let promArg = 0;
	let promIlluminatis = 0;
	let desc10;
	let desc5;
	let totalDesc;
	let marcaMaxVentas;
	let precioXUnidad;
	let precioFinal;
	let totalVentas = 0;
	seguir = "si"
	

	do
	{

		nombre = prompt("Ingrese el nombre del cliente").toLowerCase();
		cantidadDeLamparas = parseInt(prompt("Ingrese la cantidad de lamparas:"));
		while (isNaN(cantidadDeLamparas) || cantidadDeLamparas <= 0)
		{
			cantidadDeLamparas = parseInt(prompt("Error. Ingrese la cantidad de lamparas:"));
		}

		marca = prompt("Ingrese marca: felipelamparas / argentinaluz / illuminatis").toLowerCase();
		while (marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis")
		{
			marca = prompt("Error. Ingrese marca: felipelamparas / argentinaluz / illuminatis").toLowerCase();
		}

		precioXUnidad = parseInt(prompt("Ingrese el precio por unidad"));
		while (isNaN(precioXUnidad) || precioXUnidad <= 0)
		{
			precioXUnidad = parseInt(prompt("Error. Ingrese el precio por unidad"));
		}

		total = precioXUnidad * cantidadDeLamparas;
		totalVentas += total

		if (marca == "felipelamparas" && cantidadDeLamparas > 5)
		{
			desc10 = total * 10 / 100
			precioFinal = total - desc10
			totalDesc += desc10
		}
		else if (marca == "argentinaluz" && cantidadDeLamparas >= 3)
		{
			desc5 = total * 5 / 100
			precioFinal = total - desc5
			totalDesc += desc5
		}


		if (marca == "felipelamparas")
		{
			acumFelipe += cantidadDeLamparas
			contFelipe++
		} else if (marca == "argentinaluz")
		{
			acumArg += cantidadDeLamparas
			contArg++
		} else
		{
			acumIlluminatis += cantidadDeLamparas
			contIlluminatis++
		}

		if (contFelipe > contArg && contFelipe > contIlluminatis)
		{
			marcaMaxVentas = "FelipeLamparas"
		} else if (contArg >= contFelipe && contArg > contIlluminatis)
		{
			marcaMaxVentas = "ArgetinaLuz"
		} else
		{
			marcaMaxVentas = "Illuminatis"
		}



		seguir = prompt("Desea seguir?:  s/n")
	} while (seguir == "s");

	if (contFelipe != 0)
	{
		promFelipe = acumFelipe / contFelipe
	}
	if (contArg != 0)
	{
		promArg = acumArg / contArg
	}
	if (contIlluminatis != 0)
	{
		promIlluminatis = acumIlluminatis / contIlluminatis
	}


	console.log("La empresa recaudo $" + totalVentas);
	if (totalDesc != 0)
	{
		console.log("La empresa perdio $" + totalDesc + " por descuentos");
	}
	console.log("El promedio de la marca FelipeLamparas es de " + promFelipe);
	console.log("El promedio de la marca ArgentinaLuz es de " + promArg);
	console.log("El promedio de la marca Illuminatis es de " + promIlluminatis);
	console.log("La marca que mas vendio es " + marcaMaxVentas);

}

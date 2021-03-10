function mostrar()
{
    let nombre;
    let carrera;
    let sexo;
    let nota;
    let edad;
    let cantidadMaterias;
    let mejorPromedioFisica;
    let nombreMejorPromedioFisica;
    let nombreAlumnaJoven;
    let edadAlumnaJoven;
    let edadMasMaterias;
    let nombreMasMaterias;
    let masMaterias;
    let flagPromedioFisica = 0;
    let flagAlumnaJoven = 0;
    let flagMasMaterias = 0;
    let flagestudianteMasMaterias;



    for(let i= 0; i < 3; i++)
    {

        nombre = prompt("Ingrese nombre: ");
        while(!(isNaN(nombre)))
        {
        nombre = prompt("Error, ingrese nombre: ");	
        }

        carrera = prompt("Ingrese carrera (quimica, fisica o sistemas) : ");
        while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas")
        {
        carrera = prompt("Error, ingrese carrera (quimica, fisica o sistemas) : ");
        }
    
        sexo = prompt("Ingrese sexo (masculino, femenino o no binario) : ");
        while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
        {
        sexo = prompt("Error, ingrese sexo (masculino, femenino o no binario) : ");
        }

        cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias (entre 1 y 5)"));
        while(cantidadMaterias <1 || cantidadMaterias >5 || isNaN(cantidadMaterias))
        {
        cantidadMaterias = parseInt(prompt("Error, ingrese cantidad de materias (entre 1 y 5)"));
        }

        nota = parseInt(prompt("Ingrese nota (entre 0 y 10)"));
        while(nota <0 || nota >10 || isNaN(nota))
        {
        nota = parseInt(prompt("Error, ingrese nota (entre 0 y 10)"));
        }

        edad = parseInt(prompt("Ingrese edad: "));
        while(isNaN(edad) || edad <= 17)
        {
        edad = parseInt(prompt("Error, Ingrese edad: "));
        }

        if(carrera == "fisica")
        {   if(flagPromedioFisica || nota > mejorPromedioFisica)
            {
            ejorPromedioFisica = nota;
            nombreMejorPromedioFisica = nombre;
            flagPromedioFisica = 0;
            }
        }
            if(sexo == "femenino")
            {   if(flagAlumnaJoven || edad < edadAlumnaJoven)
                {
                edadAlumnaJoven = edad;
                nombreAlumnaJoven = nombre;
                flagAlumnaJoven = 0;
                }   
            }

            if(carrera !="QUIMICA")
            {
                if(flagestudianteMasMaterias || materias > estudianteMasM )
                {
                    nombreMasM = nombre;
                    edadMasM = edad;
                    estudianteMasM = materias;
                    flagestudianteMasMaterias = 0;
                }
            }      
    }
    

        if(flagPromedioFisica != 0)
        {
        console.log(" No se ingresaron alumnos que estudien fisica")
        }
        else
        {
        console.log(" El nombre del mejor promedio de los alumnos que estudian Fisica es: " + nombreMejorPromedioFisica + " con un promedio de " + mejorPromedioFisica);
        }

        if(flagAlumnaJoven != 0)
        {
        console.log(" No se ingresaron alumnas");
        }

        else
        {
        console.log(" El nombre de la alumna mas joven es: " + nombreAlumnaJoven + " con una edad de " + edadAlumnaJoven);
        }

        if(flagMasMaterias != 0)
        {
        console.log(" Sólo se ingresaron alumnos que cursan química") 
        }

        else
        {
        console.log(" La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica es: " + edadMasMaterias + " y " + nombreMasMaterias + " con una cantidad de materias de " + masMaterias);
        }

}



let f22Raptor = {

  name: 'F-22 Raptor',
  manufacturer: 'Lockheed Martin',
  firstFlight: '1990-09-29',
  length: 62.1, // feet
  wingspan: 44.8, // feet
  height: 16.7, // feet
  emptyWeight: 43500, // pounds
  maxSpeed: 1195, // mph
  serviceCeiling: 65000, // feet
  range: 1600, // miles
  engines: '2 × Pratt & Whitney F119-PW-100 turbofans',
  weapons: ['M61 Vulcan', 'AIM-120C AMRAAM', 'AIM-9X Sidewinder'],
  avionics: 'AN/APG-77 radar, AN/ALR-94 ESM, AN/AAR-56 IRST',
  crew: 1,
  countryOrigin: 'United States'
  };

    console.log(f22Raptor);
    console.log(f22Raptor.name);
    console.log(f22Raptor.manufacturer);
    console.log(f22Raptor.firstFlight);
    console.log(f22Raptor.length);
    console.log(Object.keys(f22Raptor)); 
    console.log(Object.values(f22Raptor));
    console.log(Object.entries(f22Raptor));

    for([clave, valor] of Object.entries(f22Raptor)){
        console.log(clave, valor);
    };

    //añadimos nueva llave valor
    f22Raptor.maxAltitude = 65000; // using dot notation añadimos llave valor
    console.log(f22Raptor);
    //añadimos con corchetes
    f22Raptor['minaltitude']= 12000;
    console.table(f22Raptor);


    //destruction sacamos las propiedades del objeto como un avariable

    let {name, manufacturer, firstFlight, length, wingspan, height, emptyWeight, maxSpeed, serviceCeiling, range, engines, weapons, avionics, crew, countryOrigin} = f22Raptor;
    console.log(name, manufacturer, firstFlight, length, wingspan, height, emptyWeight, maxSpeed, serviceCeiling, range, engines, weapons, avionics, crew, countryOrigin);

  //nuevo objeto
    let generalPlaneCharacteristics = {
      wings: 'fixed',
      propulsion: 'jet',
      landingGear: 'retractable',
      controlSurfaces: 'ailerons, elevators, rudder'
    };


  // unir en un nuevo objeto otros objetos spread operatorr
  
    const avionCombate={...f22Raptor, ...generalPlaneCharacteristics};
    console.log(avionCombate);

    //array de objetos
    let aviones = [
      {
        "nombre": "F-22 Raptor",
        "fabricante": "Lockheed Martin",
        "primerVuelo": "1990-09-29",
        "longitud": 62.1, // pies
        "envergadura": 44.8, // pies
        "altura": 16.7, // pies
        "pesoVacio": 43500, // libras
        "velocidadMaxima": 1195, // mph
        "techoDeServicio": 65000, // pies
        "alcance": 1600, // millas
        "motores": "2 × Pratt & Whitney F119-PW-100 turbofans",
        "armamento": ["M61 Vulcan", "AIM-120C AMRAAM", "AIM-9X Sidewinder"],
        "avionica": "AN/APG-77 radar, AN/ALR-94 ESM, AN/AAR-56 IRST",
        "tripulacion": 1,
        "paisDeOrigen": "Estados Unidos",
        "altitudMinima": 100 // pies
      },
      {
        "nombre": "F-16 Fighting Falcon",
        "fabricante": "Lockheed Martin",
        "primerVuelo": "1974-02-02",
        "longitud": 49.3, // pies
        "envergadura": 32.8, // pies
        "altura": 16.7, // pies
        "pesoVacio": 19000, // libras
        "velocidadMaxima": 1350, // mph
        "techoDeServicio": 50000, // pies
        "alcance": 2000, // millas
        "motores": "1 × General Electric F110-GE-129 turbofan",
        "armamento": ["M61 Vulcan", "AIM-120C AMRAAM", "AIM-9X Sidewinder"],
        "avionica": "AN/APG-68 radar, AN/ALR-56 IRST",
        "tripulacion": 1,
        "paisDeOrigen": "Estados Unidos",
        "altitudMinima": 50 // pies
      },
      {
        "nombre": "Eurofighter Typhoon",
        "fabricante": "Eurofighter GmbH",
        "primerVuelo": "1994-03-27",
        "longitud": 47.7, // pies
        "envergadura": 35.9, // pies
        "altura": 17.4, // pies
        "pesoVacio": 24000, // libras
        "velocidadMaxima": 1450, // mph
        "techoDeServicio": 55000, // pies
        "alcance": 1800, // millas
        "motores": "2 × Eurojet EJ200 turbofans",
        "armamento": ["Mauser BK-27", "AIM-120C AMRAAM", "AIM-9X Sidewinder"],
        "avionica": "EADS/Cassidian CAPTOR radar, EADS/Indra ALR-400 ESM",
        "tripulacion": 1,
        "paisDeOrigen": "Reino Unido",
        "altitudMinima": 30 // pies
      }
    ];

    //accedemos por corchetes. nombre llave

    console.log(aviones[0].nombre);
    console.log(aviones[1].nombre);
    console.log(aviones[2].nombre);
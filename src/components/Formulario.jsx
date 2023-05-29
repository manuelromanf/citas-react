import { useEffect, useState } from "react";
import { Error } from "./error";



export const Formulario = ({pacientes, setPacientes}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const generarId = () =>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if([nombre, propietario, email, fecha, sintomas].includes('') ){
      console.log('hay un campo vacio')

      setError(true)
      return;
    } 

    setError(false)

    // objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      id: generarId()
    }

    setPacientes([...pacientes, objetoPaciente]);

    // reiniciar form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

    <p className="font-bold mt-5 text-center mb-10">
      Añade Pacientes y {''}
      <span className="text-indigo-600 font-bold">Administralos</span>
    </p>

    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" 
      action="">

    { error && <Error><p> Todos los campos son obligatorios</p></Error> }

      <div className="mb-5">
          <label className="block text-gray uppercase font-bold" htmlFor="mascota">
            Nombre Mascota
          </label>
          
          <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              id="mascota"
              type="text" 
              name="mascota" 
              placeholder="Nombre de la mascota" 
              value={nombre}
              onChange={ (e) => setNombre(e.target.value)}
          />
      </div>

      <div className="mb-5">
          <label className="block text-gray uppercase font-bold" htmlFor="propietario">
            Nombre Propietario
          </label>
          
          <input 
              id="propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="text" 
              placeholder="Nombre del Propietario" 
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value)}
        />
      </div>

      <div className="mb-5">
          <label className="block text-gray uppercase font-bold" htmlFor="email">
            email
          </label>
          
          <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="email"  
              placeholder="Email contacto Propietario" 
              id="email"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
          />
      </div>

      <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">
            Alta
          </label>
          
          <input 
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="date"  
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)}
          />
      </div>

      <div className="mb-5">
          <label className="block text-gray uppercase font-bold" htmlFor="sintomas">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
          />
      </div>

      <input 
        type="submit" 
        className="text-indigo-600 font-bold hover:text-indigo-800 uppercase text-center cursor-pointer hover:underline transition-color"  
        value="Agregar paciente"
      />
        
    </form>
    </div>
  )
}


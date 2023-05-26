
export const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

    <p className="font-bold mt-5 text-center mb-10">
      Añade Pacientes y {''}
      <span className="text-indigo-600 font-bold">Administralos</span>
    </p>
    <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" action="">
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
          />
      </div>

      <input 
        type="submit" 
        className="text-indigo-600 font-bold uppercase text-center cursor-pointer hover:underline transition-color"  
        value="Agregar paciente"
      />
        
    </form>
    </div>
  )
}


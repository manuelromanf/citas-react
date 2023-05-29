import { Pacientes } from "./Pacientes"

export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className="md:w-1/2 lg:w3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="font-bold mt-5 text-center mb-10">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
          {pacientes.map( (pacientes ) =>  (
            <Pacientes 
              pacientes={pacientes}
              key={pacientes.id}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
              />
            )
          )}
        </>
      ) : (
      <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
        <p className="font-bold mt-5 text-center mb-10">
          Comienza agregnado pacientes {''}
          <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
        </p>
      </>
      )}

    </div>
  )
}

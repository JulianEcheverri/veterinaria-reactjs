import React from 'react'
import Cita from './cita'
import PropTypes from 'prop-types' //se usa proptypes para documentar la app, tipando cada parte del componente 

const ListaCitas = ({citas, eliminarCita}) => {
    //mostrar mensaje si hay citas
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aquí';
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="lista-citas">
                   {
                       citas.map(item => {
                        return (
                            <Cita 
                                key={item.id}
                                cita= {item}
                                eliminarCita = {eliminarCita}
                            />
                            )
                       })
                   }
                </div>
            </div>
        </div>
    );
}

ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default ListaCitas;

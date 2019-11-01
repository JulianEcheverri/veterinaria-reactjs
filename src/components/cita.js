import React from 'react'
import PropTypes from 'prop-types' //se usa proptypes para documentar la app, tipando cada parte del componente 

const Cita = ({cita, eliminarCita}) => {
    return (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{cita.Mascota}</h3>
                <p className="card-text"><span>Nombre dueño: </span> {cita.Propietario}</p>
                <p className="card-text"><span>Fecha: </span> {cita.Fecha}</p>
                <p className="card-text"><span>Hora: </span> {cita.Hora}</p>
                <p className="card-text"><span>Sintomas: </span></p>
                <p className="card-text">{cita.Sintomas}</p>
                <button 
                    className="btn btn-danger bnt-sm"
                    //si declaro la sintaxis de esta forma -->{eliminarCita(cita.id)} NO se esperara el evento click y se correra la funcion inmediatamente
                    onClick= {() => eliminarCita(cita.id)}
                    >Eliminar
                </button>
            </div>
        </div>
    )
}


Cita.propTypes = {
    cita : PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Cita;

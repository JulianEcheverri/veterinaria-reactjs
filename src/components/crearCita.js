import React, { Component } from 'react'
import uuid from 'uuid' //agregando libreria
import PropTypes from 'prop-types' //se usa proptypes para documentar la app, tipando cada parte del componente 

//se crea un state inicial vacio para cuando se envie el formulario, se reinicie el state mediante el render
const stateInicial = {
    cita: {
        Mascota: '',
        Propietario: '',
        Fecha: '',
        Hora: '',
        Sintomas : ''
    },
    error: false
}


class CrearCita extends Component {
    //se copia el state inicial
    state = {...stateInicial}      

    //metodo para obtener los datos en los eventos OnChange, cuando escribe en los inputs
    handleChange = e =>{
        //console.log(`${e.target.name}: ${e.target.value}`);

        // colotar lo que el usuario estribe en el state
        this.setState({
            cita: {
                ...this.state.cita, //copiar el array y asignarlo en el state y solo remplazar el valor copiado para no sobreescribir --- sintaxis spread operator para copiar arrays
                [e.target.name] : e.target.value //es para mapear el objeto del state
            }
        })
    }


    //metodo para obtener los datos del envio del formulario (submit)
    handleSubmit = e =>{
        e.preventDefault();
       
       //extraer los valores del state
        const {Mascota, Propietario, Fecha, Hora, Sintomas} = this.state.cita;

       //validar que todos los campos esten llenos (se puede hacer mediante el valitation del navegador pero esta es la forma de hacerlo en reactJs)
       if(Mascota === '' || Propietario === '' || Fecha === '' || Hora === '' || Sintomas === '' ){
        
        //setState siempre para cambiar valor de propiedad de State, NUNCAA directamente
            this.setState({
                error: true
            });
            return; //detiene la ejecuccion
       }

       //generar objeto con los datos usando la copia del state con spread operator
       const nuevaCita = {...this.state.cita};

       //luego le asignamos un id con la funcionalidad de la libreria instalada que enumera los datos
       nuevaCita.id = uuid();


        //Agregar la cita al state de App,js

        //para acceder a los props del class component usamos la palabra 'props'
        //el flujo de datos solo fluye del componente padre al componente hijo; sin embargo, para pasar datos del componente hijo al padre, se crea una funcion que reciba datos
        //y se le envia al componente hijo donde sera cargada
        //cargamos la funcion que fue enviada desde el componente padre
        this.props.crearNuevaCita(nuevaCita);

        //colocar el stateInicial en el state para reiniciar el fomulario
        this.setState({
            ...stateInicial
        })
    }


    render() {
        //extraer valor del return
        const {error} = this.state;

        //crear formulario
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center"> Todos los campos son obligatorios</div> : null }

                    <form
                    //react usa los eventlisenter para obtener los datos ingresados
                    onSubmit={this.handleSubmit}
                    >
                        {/* </div> form-group */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="Mascota"
                                    //se usan los eventos en react
                                    onChange={this.handleChange}  //react usa los eventlisenter para obtener los datos ingresados
                                    value = {this.state.cita.Mascota}                                  
                                />
                            </div>
                        </div>
                        {/* </div> form-group */}

                        {/* </div> form-group */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="Propietario"
                                    onChange={this.handleChange}  //react usa los eventlisenter para obtener los datos ingresados
                                    value = {this.state.cita.Propietario}      
                                />
                            </div>
                        </div>
                        {/* </div> form-group */}

                        {/* </div> form-group */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Fecha"
                                    name="Fecha"
                                    onChange={this.handleChange}  //react usa los eventlisenter para obtener los datos ingresados
                                    value = {this.state.cita.Fecha}      
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Hora"
                                    name="Hora"
                                    onChange={this.handleChange}  //react usa los eventlisenter para obtener los datos ingresados
                                    value = {this.state.cita.Hora}      
                                />
                            </div>
                        </div>
                        {/* </div> form-group */}

                        {/* </div> form-group */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Describe los sintomas Sintomas"
                                    name="Sintomas"
                                    onChange={this.handleChange}  //react usa los eventlisenter para obtener los datos ingresados
                                    value = {this.state.cita.Sintomas}      
                                />
                            </div>
                        </div>
                        {/* </div> form-group */}
                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita"></input>
                    </form>
                </div>
            </div>
        )
    }
}

CrearCita.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
}


export default CrearCita

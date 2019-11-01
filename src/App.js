import React,{Component} from 'react';
import './bootstrap.min.css'
import Header from './components/header.js'
import CrearCita from './components/crearCita'
import ListaCitas from './components/listaCitas'

//usamos  netlity para hacer el deplyment del proyeto
// deploy es el proceso de desarrollar y exportar a un SVGPathSegCurvetoQuadraticSmoothRel, publicar el sitio completo
//llevar el sitio web al publico
//https://www.netlify.com/
// npm run build  para realizar el compilado y hacer el deplyment



class App extends Component{
  state = {
    //array de objetos que tendra todas las citas creadas
    citas:[]
  }

  //cuando la aplicacion carga --- se hara esto para cargar datos en el local storage similar al document.ready
  componentDidMount(){
    const citasLs = localStorage.getItem('citas');
    if(citasLs){
      this.setState({
        citas: JSON.parse(citasLs)
      })
    }
  }

  // cuando eliminamos o agregamos una nueva cita ---update 
  componentDidUpdate(){
    // por cada agregar o eliminar objetos se almacenara en el local storage mediante el metodo de ciclo de vida del component 
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }



  //el flujo de datos solo fluye del componente padre al componente hijo; sin embargo, para pasar datos del componente hijo al padre, se crea una funcion que reciba datos
  //y se le envia al componente hijo donde sera cargada
  crearNuevaCita = datos =>{
    
    //copiar el state actual
    const cita = [...this.state.citas, datos]; // se realiza una copia y se agrega una nueva cita que viene de la funcion, es como un push a un arreglo

    //agregamos el state
    this.setState({
      citas:cita
    })
    //console.log(datos);
  }

  //creamos funcion para eliminar cita que va a recibir el id de la cita y funcionara con el evento onClick del botton
  eliminarCita = id =>{
    // console.log(id);

    //tomar copia del state
    const citasActuales = [...this.state.citas];

    //utilizar filter para sacar el Id
    //el filter retorna el objeto o los objetos que coincida con la condicion, se escribe diferente por que se quiere obtener los objetos que no son el id ingresado
    const citas = citasActuales.filter(x => x.id !== id); 

    // actualizar el state
    this.setState({
        citas
    })
  }

  render(){
    return (
      <div className="container">
        <Header 
             titulo = 'Administrador Pacientes Veterinaria'  
          />
          <div className="row">
            <div className="col-md-12 mx-auto">
            <CrearCita 
            //el flujo de datos solo fluye del componente padre al componente hijo; sin embargo, para pasar datos del componente hijo al padre, se crea una funcion que reciba datos
            //y se le envia al componente hijo donde sera cargada
              crearNuevaCita = {this.crearNuevaCita}
            />
            </div>
            <div className="mt-5 col-md-10 mx-auto">
              <ListaCitas 
                citas = {this.state.citas}
                eliminarCita = {this.eliminarCita}
              />
            </div>
          </div>
      </div>
    );
  }
}
export default App
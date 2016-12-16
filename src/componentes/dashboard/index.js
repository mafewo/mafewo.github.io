import React, { Component } from 'react';
import Listado from '../listado'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { listado: [] }
    }
    componentWillMount() {  
    fetch('https://api.myjson.com/bins/19xrvp')
      .then((response) => {
        return response.json()
      })
      .then((recurso) => {
        this.setState({ listado: recurso.listado })
        console.log(recurso.listado)
      })
  }
    render() {
    if (this.state.listado.length > 0) {
      return (
        <div className="container-fluid">
          <Listado listado={this.state.listado} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando imagenes...</p>
    }
  }
}
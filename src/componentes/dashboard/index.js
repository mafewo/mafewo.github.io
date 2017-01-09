import React, { Component } from 'react';
import Listado from '../listado'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { listado: [] }
    }
    componentWillMount() {  
    fetch('https://api.myjson.com/bins/a4aij')
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
          <Listado listado={this.state.listado} />
      )
    } else {
      return (  
        <div className="col s12 m10 offset-m1 l6 offset-l3 center">
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>)
    }
  }
}
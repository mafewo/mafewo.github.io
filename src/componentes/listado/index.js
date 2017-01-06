import React, { Component } from 'react';
import Item from '../item'

export default class Listado extends Component {

  render() {
    return (
	<div id="pictures-container" className="col s12 m10 offset-m1 l6 offset-l3">
          {
            this.props.listado.map((listado) => {
              return <Item key={ listado.id }
                                  nombre={ listado.nombre }
                                  img={ listado.url }
                                  descripcion={ listado.descripcion } />
            })
          }
      </div>
    )
  }
}

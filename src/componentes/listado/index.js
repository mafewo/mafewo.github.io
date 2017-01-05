import React, { Component } from 'react';
import Item from '../item'

export default class Listado extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="media-list">
          {
            this.props.listado.map((listado) => {
              return <Item key={ listado.id }
                                  nombre={ listado.nombre }
                                  img={ listado.url }
                                  descripcion={ listado.descripcion } />
            })
          }
        </div>
      </div>
    )
  }
}

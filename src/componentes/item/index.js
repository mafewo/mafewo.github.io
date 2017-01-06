import React, { Component } from 'react';

export default class Item extends Component {

  render() {
    return(
<div className="card">
    <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" alt={`${this.props.nombre}`} src={`${this.props.img}`} />
    </div>
    <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{this.props.nombre}<i className="material-icons right">more_vert</i></span>
        <p><a href="#">Detalle</a></p>
    </div>
    <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{this.props.nombre}<i className="material-icons right">close</i></span>
        <p>{this.props.descripcion}</p>
    </div>
</div>
    )
  }
}

import React, { Component } from 'react';

export default class Item extends Component {

  render() {
    return(
      <div className="media">
        <div className="media-body">
          <h4>{this.props.nombre}</h4>
          <p>
            {this.props.descripcion} &nbsp;
            <figure className="media-left">
                <img className="media-object" alt={`${this.props.nombre}`} src={`${this.props.img}`} />
            </figure>

          </p>
        </div>
      </div>
    )
  }
}

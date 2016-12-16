import React, { Component } from 'react';

export default class Item extends Component {

  render() {
    return(
      <li className="media">
        <div className="media-body">
          <h4>{this.props.nombre}</h4>
          <p>
            {this.props.descripcion} &nbsp;
            <span className="label label-info">{this.props.img}</span>
            <figure className="media-left">
                <img className="media-object" src={`${this.props.img}`} />
            </figure>

          </p>
        </div>
        <hr/>
      </li>
    )
  }
}

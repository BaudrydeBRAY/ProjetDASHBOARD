import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/albums/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }


  render() {
    return (
        <tr>
          <td>
            {this.props.obj.Nom}
          </td>
          <td>
            {this.props.obj.Artiste}
          </td>
          <td>
            {this.props.obj.Date}
          </td>
          <td>
            {this.props.obj.Style}
          </td>
          <td>
            {this.props.obj.NombredeTitres}
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Mettre à jour</Link>
          </td>
          <td>
          <button onClick={this.delete} className="btn btn-danger">Supprimer</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;
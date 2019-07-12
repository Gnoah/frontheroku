import React, { Component } from 'react'; 
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Delete.css'

class Table extends Component {
  render() {
  return(
    <div>
      <table>
      <tr > 
          <td className="tex">
            {this.props.obj.nom}
          </td> 
          <td className="tex">        
            {this.props.obj.email}
          </td>
          <td className="tex">        
            {this.props.obj.photo}
          </td>
          <td>
          <button className="btn btn-danger"
            onClick={()=>{
                confirmAlert({
                  customUI: ({ onClose }) => {
                    return (
                      <div id="bt" className='custom-ui'>

                        <div>
                           <div id="ground">
                              <h4>Confirmer la suppression</h4>
                              <form action={"http://localhost:8080/?_method=DELETE"} method="POST" enctype="application/x-www-form-urlencoded">
                                <input type="hidden" name="_method" value="DELETE" />
                                <table>
                                  <tr>
                                    <td> <span>{this.props.obj.nom.charAt(0).toUpperCase() + this.props.obj.nom.substring(1).toLowerCase()}</span></td>&nbsp;&nbsp;
                                    <td> <span>{this.props.obj.email.charAt(0).toUpperCase() + this.props.obj.email.substring(1).toLowerCase()}</span> </td>
                                    <td> <span>{this.props.obj.photo.charAt(0).toUpperCase() + this.props.obj.photo.substring(1).toLowerCase()}</span> </td>
                                  </tr>
                                </table>
                                <input type="hidden" name="id" value={this.props.obj.id}/> <br/>
                                <div id="centr">
                                    <button type="submit" className="btn btn-secondary btn-sm">OUI</button>
                                    <button className="btn btn-secondary btn-sm" onClick={onClose}>NON</button>
                                </div>
                             
                              </form>
                          </div>
                            
                        </div>
                      </div>
                    );
                  }
                });
               
            }}
            > X</button> 
        </td>
    </tr>
    </table>
    </div>
  )
    
  }
}

export default Table;
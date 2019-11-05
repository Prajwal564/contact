import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";


class contact extends Component {
    constructor(props){
        super(props);
        this.state ={
            showList : false
        };
    }
    onclickHandler = () =>{
        this.setState({showList : !this.state.showList});
    };
    onDeleteClick = (id, dispatch) => {
        console.log('here', id);

        dispatch({
            type : 'DELETE_CONTACT' ,
            payload : id
        });
    };
  render() {
    const { id ,name, email, phone } = this.props;

    const { showList} = this.state;

    return(
        <Consumer>
            { value =>{
                const { dispatch } = value;
                return(
                    <div className="card card-body mb-3">
                        <h4>
                            {name} <i  style = {{cursor:'pointer'}}
                                       onClick={this.onclickHandler}
                                       className="fas fa-sort-down" />
                            <i className="fas fa-times"
                               style={ {cursor:'pointer', float:'right', color: 'red'}}
                               onClick = {this.onDeleteClick.bind(this, id, dispatch)}/>
                        </h4>
                        {showList ? (
                            <ul className="list-group">
                                <li className="list-group-item">Email:{email}</li>
                                <li className="list-group-item">Phone:{phone}</li>
                            </ul>
                        ):null}

                    </div>
                )
            }
            }

        </Consumer>
    );

  }
}
contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default contact;

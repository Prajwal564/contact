import React, {Component} from 'react';


const Context = React.createContext();

const reducer = (state, action) => {

    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        default:
            return state;

    }
}


export class Provider extends Component {
    state = {
        contacts: [
            {
                id: "1",
                name: "John Wick",
                email: "johnwick@gmail.com",
                phone: "555-555-555"
            },
            {
                id: "2",
                name: "Karen Smith",
                email: "karensmith@gmail.com",
                phone: "444-555-555"
            },
            {
                id: "3",
                name: "Paul Stevens",
                email: "paulstevens@gmail.com",
                phone: "333-555-555"
            }
        ],
        dispatch: (action) => this.setState(state => reducer(state, action))

    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}</Context.Provider>

        );
    }

}

export const Consumer = Context.Consumer;
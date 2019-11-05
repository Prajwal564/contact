import React, { Component } from "react";
import Contact from "../Components/contact";
import { Consumer } from '../context';

class contacts extends Component {




  render() {

    return(
        <Consumer>
            { value => {
              const { contacts } = value;
              return(
                  <React.Fragment>
                      {contacts.map(contact => (
                          <Contact
                              key={contact.id}
                              id={contact.id}
                              name={contact.name}
                              email={contact.email}
                              phone={contact.phone}

                          />
                      ))}
                  </React.Fragment>
              )
            }}

        </Consumer>
    )

  }
}

export default contacts;

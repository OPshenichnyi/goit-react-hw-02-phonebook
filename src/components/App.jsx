import { Component } from "react"
import { ContactForm } from "./contactForm/contactForm";
import { ContactList } from "./contactList/contactList";



export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: ''
  };

  addConacts = (data) => {
    this.setState(prevState => ({contacts: prevState.contacts.concat(data)}))
  }

  removeContact = (id) => {
    const findId = this.state.contacts.findIndex(option => option.id === id)
    this.setState(prevState => ({ contacts: prevState.contacts.splice(findId, 1) }))
    console.log(findId);
  }

  render() {
    
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 26,
          color: '#010101'
        }}
      >
        <ContactForm 
          addConacts={this.addConacts}
        >
        </ContactForm>
        <h2>Contacts</h2>
        <ContactList
          phoneBook={this.state.contacts}
          removeContact={this.removeContact}
        >
        </ContactList>     

      </div>
    );
  }
};

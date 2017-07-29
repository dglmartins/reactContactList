import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {

  state = {
    screen: 'list', // list, create
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      //this is the same as this.setState({contacts: contacts})
      this.setState({ contacts })
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => (c.id !== contact.id))
    }))
    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        {/* this is short hand if code..if(this.state.screen === 'list'{}) */}
        {this.state.screen === 'list' && (
          <ListContacts
            onDeleteContact={this.removeContact} contacts={this.state.contacts}
          />
        )}
        {this.state.screen === 'create' && (
          <CreateContact/>
        )}

      </div>
    )
  }
}

export default App;

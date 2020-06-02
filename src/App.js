import React, {Component} from 'react';
import ContactCard from "./ContactCard";
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <ContactCard
          name="Suzy"
          cellNum="8462548838"
          workNum="8003053221"
          email="soozy@aolloa.com"
        />
        <ContactCard
          name="Arin"
          cellNum="6142589746"
          workNum="8003053221"
          email="egoraptor@gollygeemail.org"
        />
        <ContactCard
          name="Dan"
          cellNum="9456221017"
          workNum="3477392264"
          email="danfromnsp@ninjamail.net"
        />
      </>
    );
  }
}

export default App;

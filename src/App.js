import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonComponent } from 'webiu-npm'
import {ContactComponent} from 'webiu-npm'

function App() {
  return (
    <div>
      <ButtonComponent heading="Button Component" buttonText="Button" />
      <ContactComponent contactMessage="Contact us" subscribeMessage="Subscribe to our news" />
    </div>
  );
}

export default App;

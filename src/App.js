import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div className="App">
        <h1>Animações do React</h1>
        <button className="Button"
          onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <br />
        <Transition 
          in={this.state.showBlock} 
          mountOnEnter
          unmountOnExit
          timeout={1000}>
          {state => (
          <div style={{
            backgroundColor: 'red',
            width: 100,
            height: 100,
            margin: 'auto',
            opacity: state === 'exiting' ? 0 : 1,
            transition: 'opacity 1s ease-out'
          }}></div> )}
        </Transition>
            <Modal  show={this.state.modalIsOpen} closed={this.closeModal}/>
        {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen}/> : null }
        <button className="Button" onClick={this.showModal}>Abrir Modal</button>
        <h3>Animando Listas</h3>
        <List />
      </div>
    );
  }
}

export default App;

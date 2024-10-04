import React, { Component } from "react";
import styled from "styled-components";

class Modal extends Component {
  state = {
    isOpen: false,
  };

  handleKeyDown = (event) => {
    if (event.key === "Escape" && this.state.isOpen) {
      this.CloseModal();
    }
  };

  OpenModal = () => {
    this.setState({ isOpen: true });
  };

  CloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <>
        <button onClick={this.OpenModal}>Відкрити модалку</button>
        {this.state.isOpen && (
          <form>
            <button onClick={this.CloseModal}>X</button>
            <p>відкрита модалка</p>
          </form>
        )}
      </>
    );
  }
}

export default Modal;
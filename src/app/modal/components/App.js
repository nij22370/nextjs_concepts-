"use client";

import { useState } from "react";
import Modal from "./modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <h2>Fancy Modal</h2>
          <p>This is modal content</p>
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
}
{
  /**"use client"

Ensures this component runs client-side because React modals and state need the browser environment.

useState(false)

Creates a piece of state called isOpen to track if the modal is open. Initially, it is false.

Button:

<button onClick={() => setIsOpen(true)}>Open Modal</button>


Clicking the button sets isOpen to true, opening the modal.

Modal Component:

<Modal open={isOpen} onClose={() => setIsOpen(false)}>...</Modal>


Passes open and onClose props to the modal.

open={isOpen} → modal will show if isOpen is true.

onClose={() => setIsOpen(false)} → closes the modal when called.

Other Content:

<div style={OTHER_CONTENT_STYLES}>Other Content</div>


This is a normal div displayed behind or next to the modal. Z-index ensures layering. */
}

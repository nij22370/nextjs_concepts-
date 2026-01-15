"use client";

import { createPortal } from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "40px",
  zIndex: 1000,
  borderRadius: "8px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 999,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </>,
    document.body
  );
}
{
  /**createPortal

Portals let you render a component outside the normal DOM hierarchy.

This is useful for modals so that they appear on top of all content, regardless of parent z-index.

Overlay:

<div style={OVERLAY_STYLES} onClick={onClose} />


Dark semi-transparent background behind the modal.

Clicking it triggers onClose → closes the modal.

Modal Box:

<div style={MODAL_STYLES}>
    <button onClick={onClose}>Close</button>
    {children}
</div>


The white box in the center of the screen.

Contains a close button and any children passed from the App component.

Conditional Render:

if (!open) return null;


If open is false, modal doesn’t render at all.

Styles:

position: fixed → modal stays in the center even when scrolling.

zIndex: 1000 → ensures the modal appears above everything. */
}
{
  /**createPortal is a React function that allows you to render a component somewhere else in the DOM outside the normal parent hierarchy.

Normally, when you render a component:

<div>
  <Child />
</div>


Child will be inside the <div> in the DOM. Its HTML will live inside its parent.

With createPortal, you can render it anywhere else, like directly in <body>:

createPortal(<Child />, document.body); */
}

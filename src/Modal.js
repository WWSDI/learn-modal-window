import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const modal = document.querySelector("#modal");
  const el = document.createElement("div");

  useEffect(() => {
    modal.appendChild(el);

    // cleanup fn: remove the modal
    return () => modal.removeChild(el);
  }, []);

  return createPortal(children, el);
}

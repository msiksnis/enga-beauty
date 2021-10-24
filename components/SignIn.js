import { useState } from "react";
import Modal from "./Modal";

export default function SignIn({ setShowModal }) {
  return (
    <div>
      <Modal />
      <span
        className="poppins opacity-70 mr-6 cursor-pointer hover:opacity-100"
        onClick={() => setShowModal(true)}
      >
        SIGN IN
      </span>
    </div>
  );
}

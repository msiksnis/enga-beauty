import { useState } from "react";
import Modal from "./Modal";

export default function SignIn({ setShowModal }) {
  return (
    <div>
      <Modal />
      <span
        className="poppins opacity-70 hover:opacity-100 mr-6 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        SIGN IN
      </span>
    </div>
  );
}

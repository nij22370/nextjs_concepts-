"use client";
import { useState } from "react";
import Modal from "../component/modal/page";

export default function MainModal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-xl font-semibold">
        Click the button to open the modal
      </h1>

      <button
        onClick={() => setModalOpen(true)}
        className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
      >
        Open
      </button>

      {modalOpen ? <Modal closeModal={setModalOpen} /> : null}
    </div>
  );
}

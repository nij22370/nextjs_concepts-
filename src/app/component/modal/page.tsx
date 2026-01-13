type ModalProps = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ closeModal }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl animate-scaleIn">
        {/* Close button */}
        <button
          onClick={() => closeModal(false)}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="mb-3 text-xl font-semibold text-gray-900">
          Are you sure you want to continue?
        </h2>

        {/* Body */}
        <p className="mb-6 text-sm text-gray-600">
          This next page is awesome! You should move forward.
        </p>

        {/* Footer */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => closeModal(false)}
            className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium hover:bg-gray-300"
          >
            Cancel
          </button>

          <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

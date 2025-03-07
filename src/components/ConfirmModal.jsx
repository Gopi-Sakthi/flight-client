import Modal from "./Modal";

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirm Deletion">
      <p className="mb-4">{message}</p>
      <div className="flex justify-end gap-4">
        <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg">
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;

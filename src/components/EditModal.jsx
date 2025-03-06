import { useState } from "react";
import FormModal from "./FormModal";

const EditModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (data) => {
    
  };

  return (
    <div
      className="h-20 flex items-center justify-center">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => setModalOpen(true)}
      >
        Edit
      </button>
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditModal;

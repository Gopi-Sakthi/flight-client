import { useRef, useState } from "react";
import Modal from "./Modal";

const FormModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const editFormRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4 ">Edit Passenger Details</h2>
      <form
        onSubmit={handleSubmit}
        ref={editFormRef}
        className="flex items-center justify-center gap-5"
      >
        <div className="mb-4">
          <label className="block text-sm">Origin</label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            name="firstname"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Destination</label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            name="firstname"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Date</label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            name="firstname"
            value={formData.name}
            onChange={handleChange}
            required
            type="date"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">First Name</label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            name="firstname"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Last Name</label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            name="lastname"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Age</label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            name="age"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
        <label className="block text-sm">Gender</label>
          <select className="max-w-[17.125rem] h-[2.625rem] px-3 py-2 border rounded-lg">
            <option value="" disabled selected>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-400 text-white p-2 w-20 h-12 rounded-2xl"
        >
          Save
        </button>
      </form>
    </Modal>
  );
};

export default FormModal;

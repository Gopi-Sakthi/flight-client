const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-10 ">
            <div className="bg-white rounded-lg shadow-lg p-6  relative w-11/12">
                <button className="absolute top-5 right-5 text-gray-500 hover:text-red-500 hover:text-lg "
                    onClick={onClose}
                >
                    &#x2715; {/* Close button */}
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
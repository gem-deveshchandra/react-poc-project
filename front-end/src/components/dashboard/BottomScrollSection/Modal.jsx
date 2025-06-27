

const Modal = ({ open, onClose, children }) => {
    if (!open) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };
  export default Modal;
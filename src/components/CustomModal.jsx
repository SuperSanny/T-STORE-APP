/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
const CustomModal = ({ isOpen, closeModal, title, className, customDiv }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 blur-background">
        <div className="modal-container relative">
          <div className="bg-white w-80 md:w-96 py-5 px-5 shadow-lg">
            <h2 className={`text-md font-semibold mb-2 ${className}`}>
              {title}
            </h2>
            <div>{customDiv}</div>
          </div>
          <div className="primary-80 absolute top-3 right-3">
            <button onClick={closeModal}>
              <RxCross2 className="hover:scale-125 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;

import Modals from "./Modal";

function ModalWrapper() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-[#ECECEC] opacity-60" />
      <div className="modal-position">
        <Modals />
      </div>
    </>
  );
}

export default ModalWrapper;

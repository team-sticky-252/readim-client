import { useOutletContext } from "react-router-dom";
import Modal from "./Modal";

function ModalWrapper() {
  const [firstClickTimeMs, setFirstClickTimeMs] = useOutletContext();
  const [clickTimeDifferenceMs, setClickTimeDifferenceMs] = useOutletContext();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-[#ECECEC] opacity-60" />
      <div className="modal-position">
        <Modal
          firstClickTimeMs={firstClickTimeMs}
          setFirstClickTimeMs={setFirstClickTimeMs}
          setClickTimeDifferenceMs={setClickTimeDifferenceMs}
        />
      </div>
    </>
  );
}

export default ModalWrapper;

import { useNavigate, useParams, useOutletContext } from "react-router-dom";

import TestModal from "./TestModal";
import DescriptionModal from "./DescriptionModal";
import ResultModal from "./ResultModal";

function ModalWrapper() {
  const [firstClickTimeMs, setFirstClickTimeMs] = useOutletContext();
  const [clickTimeDifferenceMs, setClickTimeDifferenceMs] = useOutletContext();

  const navigate = useNavigate();
  const { modalId: statement } = useParams();

  const navigateNextPage = (modalStatement) => {
    switch (modalStatement) {
      case "welcome":
        navigate("/modal/guide");
        break;
      case "guide": {
        setFirstClickTimeMs(new Date().getTime());
        navigate("/modal/test");
        break;
      }
      case "test": {
        setClickTimeDifferenceMs(new Date().getTime() - firstClickTimeMs);
        navigate("/modal/result");
        break;
      }
      case "warning":
        navigate("/modal/guide");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full opacity-60" />
      <div className="modal-position">
        {statement === "test" && (
          <TestModal
            firstClickTimeMs={firstClickTimeMs}
            setFirstClickTimeMs={setFirstClickTimeMs}
            setClickTimeDifferenceMs={setClickTimeDifferenceMs}
            navigateNextPage={navigateNextPage}
          />
        )}
        {statement === "result" && (
          <ResultModal
            clickTimeDifferenceMs={clickTimeDifferenceMs}
            navigateNextPage={navigateNextPage}
          />
        )}
        {statement !== "test" && statement !== "result" && (
          <DescriptionModal
            navigateNextPage={navigateNextPage}
            statement={statement}
          />
        )}
      </div>
    </>
  );
}

export default ModalWrapper;

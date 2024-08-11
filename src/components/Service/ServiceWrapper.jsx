import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import TestService from "./TestService";
import DescriptionService from "./DescriptionService";
import ResultService from "./ResultService";

function ServiceWrapper() {
  const [firstClickTimeMs, setFirstClickTimeMs] = useState(null);
  const [clickTimeDifferenceMs, setClickTimeDifferenceMs] = useState(null);

  const navigate = useNavigate();
  const { serviceId: statement } = useParams();

  const navigateNextPage = (serviceStatement) => {
    switch (serviceStatement) {
      case "welcome":
        navigate("/service/guide");
        break;
      case "guide": {
        const currentTime = new Date().getTime();
        setFirstClickTimeMs(currentTime);
        navigate("/service/test");
        break;
      }
      case "test": {
        const currentTime = new Date().getTime();
        if (firstClickTimeMs) {
          setClickTimeDifferenceMs(currentTime - firstClickTimeMs);
        }
        navigate("/service/result");
        break;
      }
      case "warning":
        navigate("/service/guide");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div>
      {statement === "test" && (
        <TestService
          firstClickTimeMs={firstClickTimeMs}
          setFirstClickTimeMs={setFirstClickTimeMs}
          setClickTimeDifferenceMs={setClickTimeDifferenceMs}
          navigateNextPage={navigateNextPage}
        />
      )}
      {statement === "result" && (
        <ResultService
          clickTimeDifferenceMs={clickTimeDifferenceMs}
          navigateNextPage={navigateNextPage}
        />
      )}
      {statement !== "test" && statement !== "result" && (
        <DescriptionService
          navigateNextPage={navigateNextPage}
          statement={statement}
        />
      )}
    </div>
  );
}

export default ServiceWrapper;

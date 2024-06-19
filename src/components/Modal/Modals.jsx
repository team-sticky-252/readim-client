import { useNavigate, useParams } from "react-router-dom";
import { GoX } from "react-icons/go";
import CONTENTS from "../../utils/ModalContents";

function Modals() {
  const { modalId: statement } = useParams();
  const modalTitle = CONTENTS.title[statement];
  const modalbutton = CONTENTS.button[statement];
  const navigate = useNavigate();

  const navigateButton = () => {
    switch (statement) {
      case "welcome":
        navigate("/modal/guide");
        break;
      case "guide":
        navigate("/modal/test");
        break;
      case "test":
        navigate("/");
        break;
      case "warning":
        navigate("/modal/guide");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div
      className={`w-[42rem] ${statement !== "test" ? "h-[18rem]" : "h-[30rem]"} bg-white shadow-md shadow-black/25 rounded-3xl`}
    >
      <button
        onClick={() =>
          statement !== "warning" ? navigate("/modal/warning") : navigate("/")
        }
        className="rounded-md hover:bg-medium-gray right-[1.25rem] absolute top-[1.25rem]"
        aria-label="closeButton"
      >
        <GoX color="#AAAAAA" size={30} />
      </button>
      <h1 className="w-11/12 p-3.5 relative text-[2.50rem] font-semibold left-[1.25rem] top-[1rem]">
        {modalTitle}
      </h1>
      {statement !== "test" ? (
        <div className="h-40 mb-4 overflow-y-scroll max-w-none px-[2rem] whitespace-pre-line">
          <p className="mt-3 whitespace-pre-line ">
            {CONTENTS.message[statement]}
          </p>
        </div>
      ) : (
        <div className="px-[2rem] whitespace-pre-line mb-4 overflow-y-scroll prose prose-lg h-72 max-w-none">
          {CONTENTS.message[statement]}
        </div>
      )}
      <button
        onClick={navigateButton}
        className="right-[1.25rem] absolute bottom-[1.25rem] w-20 bg-white shadow-md h-10 shadow-black/25 rounded-xl hover:bg-medium-gray"
      >
        {modalbutton}
      </button>
    </div>
  );
}

export default Modals;

import ToastMessage from "./ToastMessage";
import TextButton from "../shared/Button/TextButton";

import messageList from "../../utils/message.json";

function ToastContainer() {
  return (
    <aside className="fixed p-3 overflow-x-hidden overflow-y-auto max-h-screen-margin-24 bottom-5 right-5 w-88">
      <div className="h-6">
        <TextButton onClick={() => {}}>
          <span className="text-slate-700">모두 지우기</span>
        </TextButton>
      </div>
      <ul className="flex flex-col-reverse flex-wrap-reverse items-center flex-nowrap">
        {messageList.map(({ id, message, link }) => (
          <ToastMessage key={id} message={message} link={link} />
        ))}
      </ul>
    </aside>
  );
}

export default ToastContainer;

import { useRef } from "react";

function UrlInputContainer() {
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";

    const computedStyle = getComputedStyle(textarea.current);
    const lineHeight = parseInt(computedStyle.lineHeight, 10);
    const maxHeight = lineHeight * 3;
    const newHeight = Math.min(textarea.current.scrollHeight, maxHeight);

    textarea.current.style.height = `${newHeight}px`;
  };

  return (
    <div className="border-[1px] border-light-gray flex items-center justify-center m-auto mx-auto bg-white shadow-md w-fit rounded-xl mb-10">
      <textarea
        ref={textarea}
        rows={1}
        onChange={handleResizeHeight}
        className="m-3 mx-5 outline-none w-[35rem] font-thin text-base resize-none"
      />
    </div>
  );
}

export default UrlInputContainer;

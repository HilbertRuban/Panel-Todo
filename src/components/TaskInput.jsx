import React, { useState, useEffect, useRef } from "react";

const AutoTextArea = (props) => {
  const textAreaRef = useRef(null);
  const [text, setText] = useState("");
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setParentHeight(`${textAreaRef.current.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
  }, [text]);

  const onChangeHandler = (event) => {
    setParentHeight(`${textAreaRef.current.scrollHeight}px`);
    setText(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <>
      <div className={`min-h-${parentHeight}`}>
        <textarea
          className={`resize-none px-2 tracking-[3px] w-[100%] overflow-y-hidden focus:outline-0 border-b-4 border-b-slate-500`}
          {...props}
          ref={textAreaRef}
          rows={1}
          style={{
            height: textAreaHeight,
          }}
          onChange={onChangeHandler}
          disabled={disabled}
        />

        {/*      */}
      </div>
    </>
  );
};

export default AutoTextArea;

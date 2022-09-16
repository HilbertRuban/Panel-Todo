import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const AutoTextArea = (props) => {
  const textAreaRef = useRef(null);
  const [text, setText] = useState("");
  const [strikeThrough, setStrikeThrough] = useState(false);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const [disabled, setDisabled] = useState(true);

  // console.log(props.item,'item from task input');
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
  const handleDelete = () => {
    let showStrike = !strikeThrough;
    setStrikeThrough(showStrike);
    if(showStrike) {
      console.log('yes');
      let id = [...props.dataId, props.item.id];
      props.setDataId(id);
    }else {
      setStrikeThrough(false);
      props.setDataId((data) => data.filter((id) => id !== props.item.id));
    }
    // if()
  }

  return (
    <>
      <div className={`min-h-${parentHeight}`}>
        <textarea
          value={props.item.task_post}
          className={`relative  resize-none pt-12 px-2 tracking-[3px] w-[100%] h-[75px] ${
            strikeThrough ? "line-through" : ""
          } bg-white overflow-y-hidden focus:outline-0 border-b-4 border-b-slate-500  text_pad-input`}
          {...props}
          ref={textAreaRef}
          rows={1}
          style={{
            height: textAreaHeight,
          }}
          onChange={onChangeHandler}
          disabled={disabled}
        />
        <div className="flex justify-end items-center gap-[10px] absolute top-[0px] right-[10px] icon_display">
          <FontAwesomeIcon
            className="text-slate-400 text-[25px] mr-[10px] cursor-pointer hover:text-slate-600"
            icon={faPenToSquare}
          />
          <FontAwesomeIcon
            onClick={handleDelete}
            className="text-red-300 text-[25px] cursor-pointer hover:text-red-500"
            icon={faTrash}
          />
        </div>
      </div>
    </>
  );
};

export default AutoTextArea;

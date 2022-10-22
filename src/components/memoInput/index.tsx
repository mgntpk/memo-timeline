import React,{useCallback, useRef} from "react";
import styles from "./.module.css";
import getDateStr from "./getDateStr";
import MemoTimeline from "../memoTimeline";
import Home from "../../pages";

const MemoInput = (props: { addMemo: Function }) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    
    const saveMemo = useCallback(() => {
        if (textareaRef.current?.value) {
            const date : Date = new Date;
            const object : { id: number; content: string; date: string; }= {
                id : date.getTime(),
                content : textareaRef.current.value,
                date : getDateStr(date)
            }
            localStorage.memo = JSON.stringify(object);
            console.log("true");
            props.addMemo(object);
        }
    },[textareaRef.current,props.addMemo]);

    return (
        <>
            <div>
                <textarea ref={textareaRef}></textarea>
                <button onClick={saveMemo}>保存</button>
            </div>
        </>
    )
}
export default MemoInput
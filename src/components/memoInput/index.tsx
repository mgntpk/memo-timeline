import React,{useCallback, useRef} from "react";
import styles from "./.module.css";
import getDateStr from "./getDateStr";
import MemoTimeline from "../memoTimeline";
import Home from "../../pages";

const MemoInput = () => {
    const textareaRef = React.useRef(null);
    
    const saveMemo = useCallback(() => {
        if (textareaRef.current.value) {
            const date : Date = new Date;
            const object : { id: number; content: string; date: string; }= {
                id : date.getTime(),
                content : textareaRef.current.value,
                date : getDateStr(date)
            }
            localStorage.memo = JSON.stringify(object);
            console.log("true");
            
            

        }
    },[]);

    return (
        <>
            <div>
                <textarea ref={textareaRef}></textarea>
                <button onClick={saveMemo}></button>
            </div>
        </>
    )
}
export default MemoInput
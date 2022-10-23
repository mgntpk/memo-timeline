import styles from './.module.css'
import Memo from "../memo";
const memoTimeline = (props: { memos: Array<{ id: number; content: string; date: string; }> }) => {
    const memoList = props.memos.map((data: { id: number; content: string; date: string; }) => (
        <Memo
            key = {data.id}
            content = {data.content}
            date = {data.date}
        />
    ));
    return <div className = "timeline">{memoList}</div>
}

export default memoTimeline
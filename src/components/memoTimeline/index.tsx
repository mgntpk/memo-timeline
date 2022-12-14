import styles from "./.module.css";
import Memo from "../memo";
const memoTimeline = (props: {
    memoArray: Array<{ id: number; content: string; date: string }>;
}) => {
    const memoList = props.memoArray.map(
        (data: { id: number; content: string; date: string }) => (
            <Memo key={data.id} content={data.content} date={data.date} />
        )
    );
    return <div className={styles.timeline}>{memoList}</div>;
};

export default memoTimeline;

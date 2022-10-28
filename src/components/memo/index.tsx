import styles from './.module.css'

const memo = (props : { content : string ; date : string ; key : number }) =>  {
    return (
        <div className={styles.container}>
            <div className={styles.memoContainer}>
                <div className={styles.content}>{props.content}</div>
                <div className={styles.date}>{props.date}</div>
            </div>
        </div>
    )
}

export default memo
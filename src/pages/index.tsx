import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import MemoTimeline from "../components/memoTimeline";
import MemoInput from "../components/memoInput";
import { useCallback, useEffect, useState } from "react";

type Memo = {
    id: number;
    content: string;
    date: string;
};

const Home: NextPage = () => {
    const [memoArray, setMemoArray] = useState<Memo[]>([]);

    useEffect(() => {
        const memo = localStorage.getItem("memo");
        if (memo) {
            setMemoArray(JSON.parse(memo));
        }
    }, []);

    const addMemo = useCallback(
        (memo: Memo) => {
            setMemoArray([memo, ...memoArray]);
            localStorage.setItem("memo", JSON.stringify([memo, ...memoArray]));
        },
        [memoArray]
    );

    return (
        <>
            <Head>
                <title>memo-timeline</title>
                <meta name="" content="" />
            </Head>
            <Header />
            <div className={styles.div}>
                <MemoInput addMemo={addMemo} />
                <MemoTimeline memoArray={memoArray} />
            </div>
        </>
    );
};

export default Home;

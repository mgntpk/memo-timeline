import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MemoTimeline from "../components/memoTimeline"
import MemoInput from "../components/memoInput"
import { useCallback, useEffect, useState } from 'react'
const Home: NextPage = () => {
	const [memoArray,setMemoArray] = useState<Array<{ id: number; content: string; date: string; }>>(([]));
	useEffect(() => {
		if(localStorage.memo)setMemoArray(JSON.parse(localStorage.memo));
	}, []);
	const addMemo = useCallback((object:{ id: number; content: string; date: string; }) =>{
		const memoArray_ = [object,...memoArray];
		setMemoArray(memoArray_);
		localStorage.memo = JSON.stringify(memoArray_);
	},[memoArray]);
	
	return (
		<>
			<Head>
				<title>memo-timeline</title>
				<meta name="" content="" />
			</Head>
			<h1>memo-timeline</h1>
			<MemoInput addMemo = {addMemo}/>
			<MemoTimeline memoArray = {memoArray}/>
		</>
	)
}

export default Home

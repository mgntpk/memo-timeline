import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MemoTimeline from "../components/memoTimeline"
import MemoInput from "../components/memoInput"
import { useCallback, useEffect, useState } from 'react'
const Home: NextPage = () => {
	const [memos,setMemos] = useState<any[]>([]);
	useEffect(() => {
		if(localStorage.memo){
			const localStorageMemo : { id: number; content: string; date: string; }= JSON.parse(localStorage.memo);
			setMemos([localStorageMemo]);
		}
	}, []);
	const addMemo = useCallback((object:{ id: number; content: string; date: string; }) =>setMemos((property) => [object,...property]),[setMemos]);
	
	return (
		<>
			<Head>
				<title>memo-timeline</title>
				<meta name="" content="" />
			</Head>
			<h1>memo-timeline</h1>
			<MemoInput addMemo = {addMemo}/>
			<MemoTimeline memos = {memos}/>
		</>
	)
}

export default Home

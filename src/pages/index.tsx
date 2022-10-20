import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MemoTimeline from "../components/memoTimeline"
import MemoInput from "../components/memoInput"
import { useEffect, useState } from 'react'
const Home: NextPage = () => {
	const [memos,setMemos] = useState<any[]>([]);
	useEffect(() => {
		if(localStorage.memo){
			const localStorageMemo : { id: number; content: string; date: string; }= JSON.parse(localStorage.memo);
			setMemos([localStorageMemo]);
		}
	}, []);
	
	return (
		<>
			<Head>
				<title>memo-timeline</title>
				<meta name="" content="" />
			</Head>
			<h1>memo-timeline</h1>
			<MemoInput/>
			<MemoTimeline memos = {memos}/>
		</>
	)
}

export default Home

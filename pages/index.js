import Head from "next/head"
import { BiArrowBack } from "react-icons/bi"
import Link from "next/link"
import { useEffect, useState } from "react"
import ScrollContainer from "react-indiana-drag-scroll"

// Quiz Data
const QuizQue = [
	{
		id: 1,
		question: "What is the name of the AngularJS framework?",
		answer: "Angular",
		options: ["Angular", "AngularJS", "Angular 2", "Angular 4"],
		optionsType: "big",
		image:
			"https://images.unsplash.com/photo-1634581448750-22a591d78099?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
	},
	{
		id: 2,
		question: "What is the name of the React library?",
		answer: "Angular",
		optionsType: "small",
		options: ["React", "React 1", "React 3", "React 4"],
	},
	{
		id: 3,
		question: "What is the name of the React Framework?",
		answer: "Angular",
		optionsType: "small",
		options: ["Angular", "NextJS", "VueJS", "Ionic"],
		image:
			"https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
	},
	{
		id: 4,
		question: "What is the name of the React library?",
		answer: "Angular",
		optionsType: "big",
		options: ["React", "React 1", "React 3", "React 4"],
	},
	{
		id: 5,
		question: "What is the name of the AngularJS framework?",
		answer: "Angular",
		optionsType: "big",
		options: ["Angular", "AngularJS", "Angular 2", "Angular 4"],
		image:
			"https://images.unsplash.com/photo-1634581448750-22a591d78099?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
	},
	{
		id: 6,
		question: "What is the name of the React library?",
		answer: "Angular",
		optionsType: "small",
		options: ["React", "React 1", "React 3", "React 4"],
	},
	{
		id: 7,
		question: "What is the name of the React library?",
		answer: "Angular",
		optionsType: "big",
		options: ["React", "React 1", "React 3", "React 4"],
	},
	{
		id: 8,
		question: "What is the name of the AngularJS framework?",
		answer: "Angular",
		optionsType: "big",
		options: ["Angular", "AngularJS", "Angular 2", "Angular 4"],
		image:
			"https://images.unsplash.com/photo-1634581448750-22a591d78099?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
	},
]

// Screen Header
const Header = () => {
	return (
		<div className="w-full flex items-center justify-between">
			<Link href="#">
				<a>
					<button className="btn-header rounded-r-full text-3xl">
						<BiArrowBack />
					</button>
				</a>
			</Link>
			<div className="flex flex-col items-center text-white">
				<span className="font-semibold">ANGULAR JS</span>
				<span className="font-light text-xs">WORLD QUIZ</span>
			</div>
			<Link href="#">
				<a>
					<button className="btn-header rounded-l-full font-semibold text-base">
						HB: W
					</button>
				</a>
			</Link>
		</div>
	)
}

// View Component for Question
const QuestionView = ({ totalQue, question }) => {
	const [questionData, setQuestionData] = useState()
	useEffect(() => {
		totalQue.map((item) => {
			item.id === question ? setQuestionData(item) : null
		})
	}, [question])

	return (
		<div className="w-full rounded-3xl flex flex-col gap-3 bg-white min-h-auto p-4">
			{questionData?.image ? (
				<div className="w-full h-48 flex bg-[#0BCE63] rounded-2xl overflow-hidden">
					<img
						src={questionData?.image}
						alt="quiz"
						className="w-full h-full object-cover"
					/>
				</div>
			) : null}
			<h3 className="uppercase text-[#858494] pl-1 font-normal">{`Question ${question} of ${totalQue?.length}`}</h3>
			<h1 className="uppercase text-black pl-1 font-semibold">
				{questionData?.question}
			</h1>
			<div
				className={
					questionData?.optionsType === "big"
						? "grid grid-cols-1 gap-2"
						: "grid grid-cols-2 gap-2"
				}
			>
				{questionData?.options?.map((item, index) => (
					<div
						key={index}
						className="flex w-full items-center justify-between cursor-pointer p-4 rounded-xl bg-opacity-30 border border-[#000000] border-opacity-10 hover:bg-[#0BCE63] hover:border-transparent hover:bg-opacity-30 transition ease-in-out duration-300"
					>
						{item}
					</div>
				))}
			</div>
			<button className="flex w-full items-center justify-center bg-[#0BCE63] p-4 text-white rounded-2xl text-xl text-center hover:bg-opacity-25 hover:text-[#0BCE63] transition ease-in-out duration-300 ">
				Answer it
			</button>
		</div>
	)
}

export default function Home() {
	const [question, setQuestion] = useState(1)
	return (
		<div className="w-full bg-slate-100 flex items-center justify-center">
			<Head>
				<title>Quiz</title>
				<meta name="description" content="Sign Up Page of NextMobile" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col items-center w-full sm:w-[390px] min-h-screen bg-[#0BCE63] pb-6 py-4">
				<Header />

				<div className="flex flex-col gap-4 items-center w-full min-h-full bg-[#0BCE63] pb-6 px-3 py-4">
					<ScrollContainer className="w-full flex items-center">
						<div className="w-full flex gap-2 items-center justify-around">
							{QuizQue.map((item) => (
								<div
									key={item.id}
									className={
										question === item.id
											? "bg-white w-9 h-9 rounded-full text-sm font-medium flex items-center justify-center shadow-xl cursor-pointer"
											: " w-9 h-9 rounded-full text-sm font-medium flex items-center justify-center cursor-pointer"
									}
									onClick={() => setQuestion(item.id)}
								>
									{item?.id}
								</div>
							))}
						</div>
					</ScrollContainer>

					<QuestionView totalQue={QuizQue} question={question} />
				</div>
			</div>
		</div>
	)
}

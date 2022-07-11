import Head from "next/head"
import Image from "next/image"
import illustrator from "../assets/images/login.svg"
import facebook from "../assets/images/facebook.svg"
import apple from "../assets/images/apple.svg"
import google from "../assets/images/google.svg"
import SocialLink from "../components/SocialLink"
import styles from "../styles/Home.module.css"
import Input from "../components/Input"
import { MdOutlineAlternateEmail, MdOutlineStore } from "react-icons/md"
import { FiLock } from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"
import Link from "next/link"

export default function Home() {
	return (
		<div className="w-full bg-slate-100 flex items-center justify-center">
			<Head>
				<title>Sign Up Page</title>
				<meta name="description" content="Sign Up Page of NextMobile" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center w-[390px] min-h-[844px] bg-white px-10 pb-6">
				<Image src={illustrator} alt="sign up illustrator" />
				<div className="flex items-start flex-col w-full gap-6">
					<h1 className="text-blue-600 font-bold text-3xl">Sign Up</h1>
					<div className="w-full grid grid-cols-3 gap-4">
						<SocialLink
							image={google}
							alt="google logo"
							link="www.google.com"
						/>
						<SocialLink
							image={facebook}
							alt="google logo"
							link="www.facebook.com"
						/>
						<SocialLink image={apple} alt="apple logo" link="www.apple.com" />
					</div>
					<p className="text-sm text-gray-500 text-center self-center">
						Or, register with email...
					</p>
					<form className="flex flex-col gap-6 w-full">
						<div className="flex flex-col gap-4 w-full">
							<Input
								placeholder="Email ID"
								icon={<MdOutlineAlternateEmail />}
							/>
							<Input placeholder="Password" icon={<FiLock />} />
							<Input placeholder="Full Name" icon={<AiOutlineUser />} />
							<Input placeholder="Company Name" icon={<MdOutlineStore />} />
						</div>
						<button className="btn-primary">Sign Up</button>
						<p className="text-gray-600 flex items-center gap-1 self-center text-sm">
							<span>Already have an account?</span>
							<span className="text-blue-600 hover:underline">
								<Link href="/signin">Sign In</Link>
							</span>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

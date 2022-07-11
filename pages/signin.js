import Head from "next/head"
import Image from "next/image"
import illustrator from "../assets/images/signup.svg"
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

const signin = () => {
	return (
		<div className="w-full bg-slate-100 flex items-center justify-center">
			<Head>
				<title>Sign In</title>
				<meta name="description" content="Next Mobile Sign In Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center w-[390px] min-h-[844px] bg-white px-10 pb-6">
				<Image src={illustrator} alt="sign up illustrator" />
				<div className="flex items-start flex-col w-full gap-6">
					<h1 className="text-blue-600 font-bold text-3xl">Sign In</h1>

					<form className="flex flex-col gap-6 w-full">
						<div className="flex flex-col gap-4 w-full">
							<Input
								placeholder="Email ID"
								icon={<MdOutlineAlternateEmail />}
							/>
							<Input placeholder="Password" icon={<FiLock />} />
							<span className="text-sm text-blue-600 self-end hover:underline cursor-pointer">
								Forgot Password?
							</span>
						</div>
						<button className="btn-primary">Sign In</button>
					</form>
					<p className="text-sm text-gray-500 text-center self-center">
						Or, Login with ...
					</p>
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
					<p className="text-gray-600 flex items-center gap-1 self-center text-sm">
						<span>Not a member?</span>
						<span className="text-blue-600 hover:underline">
							<Link href="/">SignUp</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default signin

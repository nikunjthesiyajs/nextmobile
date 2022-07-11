import Image from "next/image"
import Link from "next/link"
import React from "react"

const SocialLink = ({ image, alt, link }) => {
	return (
		<a href={link}>
			<div className="w-full border border-gray-200 hover:bg-gray-100 flex flex-col items-center justify-center p-2 rounded-lg transition ease-in-out">
				<Image
					src={image}
					alt={alt}
					width={30}
					height={30}
					objectFit="contain"
				/>
			</div>
		</a>
	)
}

export default SocialLink

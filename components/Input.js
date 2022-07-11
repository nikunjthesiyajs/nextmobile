import React from "react"

const Input = ({ placeholder, icon }) => {
	return (
		<div className="flex items-center gap-2 border-b border-gray-200 w-full text-sm text-gray-600">
			<div className="text-lg text-gray-700">{icon}</div>
			<input
				placeholder={placeholder}
				className="w-full h-full py-3 outline-none"
			/>
		</div>
	)
}

export default Input

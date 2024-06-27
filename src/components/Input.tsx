import { FC, useState } from 'react'

interface IInputProps {
	type: string
	placeholder: string
	name: string
	label: string
}

const Input: FC<IInputProps> = ({ type, placeholder, name, label }) => {
	const [showPassword, setShowPassword] = useState(false)

	const toggleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setShowPassword(prev => !prev)
	}
	return (
		<>
			<label className='text-left font-semibold mb-2'>{label}</label>
			<input
				type={showPassword ? 'text' : type}
				name={name}
				placeholder={placeholder}
				className='px-4 py-2 mb-2 rounded-md outline-none focus:border border-blue-500 text-black'
			/>
			{type === 'password' && (
				<span
					onClick={toggleShowPassword}
					className='relative right-[-500px] top-[-40px] text-black  cursor-pointer w-[100px]'
				>
					{showPassword ? 'Скрыть' : 'Показать'}
				</span>
			)}
		</>
	)
}

export default Input

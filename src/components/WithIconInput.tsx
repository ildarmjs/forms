import { FC } from 'react'

interface IWithIconInputProps {
	placeholder: string
	name: string
	label: string
}

const WithIconInput: FC<IWithIconInputProps> = ({
	placeholder,
	name,
	label
}) => {
	return (
		<>
			<label className='text-left font-semibold mb-2'>{label}</label>
			<span className='absolute text-black/65 left-[10px] top-[120px] z-10 font-semibold'>
				@
			</span>
			<input
				type='text'
				placeholder={placeholder}
				name={name}
				className='px-8 py-2 mb-2 rounded-md outline-none focus:border border-blue-500 text-black relative'
			/>
		</>
	)
}

export default WithIconInput

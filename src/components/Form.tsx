import React, { FC, FormEvent, ChangeEvent } from 'react'

interface FormProps {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
	onReset: () => void
	formRef: React.RefObject<HTMLFormElement>
	children: React.ReactNode
}

const Form: FC<FormProps> = ({
	onSubmit,
	onChange,
	onReset,
	formRef,
	children
}) => {
	return (
		<form
			ref={formRef}
			className='flex flex-col'
			onSubmit={onSubmit}
			onChange={onChange}
			onReset={onReset}
		>
			{children}
		</form>
	)
}

export default Form

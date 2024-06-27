import { FC, useRef, useState } from 'react'
import Input from './Input'
import { Link } from 'react-router-dom'
import { IData } from '../types/data.interface'
import Form from './Form'

interface ISigninProps {
	onSubmit?: (data: IData) => void
}

const Signin: FC<ISigninProps> = ({ onSubmit }) => {
	const formRef = useRef<HTMLFormElement>(null)
	const [inputs, setInputs] = useState({
		email: '',
		password: ''
	})

	const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
		setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (formRef.current) {
			formRef.current.reset()
		}
		onSubmit?.(inputs)
	}
	const handleReset = () => {
		console.log('reset', inputs)
		setInputs({ email: '', password: '' })
	}

	return (
		<div className='w-[600px]'>
			<Form
				formRef={formRef}
				onSubmit={handleSubmit}
				onChange={handleChange}
				onReset={handleReset}
			>
				<Input
					name='email'
					type='email'
					placeholder='Введите email'
					label='Ваш email'
				/>
				<Input
					name='password'
					type='password'
					placeholder='Введите пароль'
					label='Ваш пароль'
				/>
				<button
					type='submit'
					className='border-[1.5px] mb-4 border-blue-500 self-start px-10 py-2 rounded-md transition-all hover:bg-blue-500'
				>
					Войти
				</button>
				<p className='self-start'>
					У вас нет аккаунта,{' '}
					<Link className='underline text-blue-500' to={'/signup'}>
						зарегестриуйтесь
					</Link>
				</p>
			</Form>
		</div>
	)
}

export default Signin

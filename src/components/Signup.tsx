import { FC, useRef, useState } from 'react'
import { IData } from '../types/data.interface'
import Input from './Input'
import { Link } from 'react-router-dom'
import RadioBtns from './RadioBtns'
import WithIconInput from './WithIconInput'
import Form from './Form'

interface ISignupProps {
	onSubmit?: (data: IData) => void
}

const Signup: FC<ISignupProps> = ({ onSubmit }) => {
	const formRef = useRef<HTMLFormElement>(null)
	const [error, setError] = useState('')
	const [inputs, setInputs] = useState({
		name: '',
		nickName: '',
		gender: '',
		email: '',
		password: ''
	})

	const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
		if (e.target.name === 'confirmPassword') {
			if (inputs.password !== e.target.value) {
				setError('Пароли не совпадают')
			} else {
				setError('')
			}
		}
		setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { name, nickName, gender, email, password } = inputs
		if (!name || !nickName || !gender || !email || !password) {
			setError('Пожалуйста, заполните все поля')
			return
		}
		if (error) {
			return
		}
		if (formRef.current) {
			formRef.current.reset()
		}
		onSubmit?.(inputs)
	}
	const handleReset = () => {
		console.log('reset', inputs)
		setInputs({ name: '', nickName: '', gender: '', email: '', password: '' })
	}

	return (
		<div className='w-[600px] relative'>
			<Form
				formRef={formRef}
				onSubmit={handleSubmit}
				onChange={handleChange}
				onReset={handleReset}
			>
				<Input
					name='name'
					type='text'
					placeholder='Введите Имя'
					label='Ваше имя'
				/>
				<WithIconInput
					placeholder='Введите ник'
					label='Ваш ник'
					name='nickName'
				/>
				<Input
					name='email'
					type='email'
					placeholder='Введите email'
					label='Ваш email'
				/>
				<RadioBtns options={['Мужской', 'Женский']} />
				<Input
					name='password'
					type='password'
					placeholder='Введите пароль'
					label='Ваш пароль'
				/>
				<Input
					label=''
					name='confirmPassword'
					type='password'
					placeholder='Подтвердите пароль'
				/>
				{error && (
					<div className='text-red-500 absolute left-0 bottom-[95px]'>
						{error}
					</div>
				)}
				<button
					type='submit'
					className='border-[1.5px] mt-4 mb-4 border-blue-500 self-start px-10 py-2 rounded-md transition-all hover:bg-blue-500'
				>
					Войти
				</button>
				<p className='self-start'>
					У вас есть аккаунт?{' '}
					<Link className='underline text-blue-500' to={'/signin'}>
						Войдите в систему
					</Link>
				</p>
			</Form>
		</div>
	)
}

export default Signup

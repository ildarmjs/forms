import { FC } from 'react'

interface IRadioBtnsProps {
	options: string[]
}

const RadioBtns: FC<IRadioBtnsProps> = ({ options }) => {
	return (
		<div className='self-start mb-2'>
			<div>Выберите ваш пол</div>
			<div className='flex gap-5'>
				{options.map(option => (
					<div key={option}>
						<input type='radio' name='gender' value={option} />
						<label htmlFor='html'>{option}</label>
					</div>
				))}
			</div>
		</div>
	)
}

export default RadioBtns

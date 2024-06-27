import './App.css'
import Signin from './components/Signin'
import { IData } from './types/data.interface'

function App() {
	const onSubmit = (data: IData) => {
		console.log(data)
	}

	return <Signin onSubmit={onSubmit} />
}

export default App

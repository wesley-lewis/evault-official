import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/login-official" element={<Login /> } />
				<Route index path="/signup-official" element={<Signup /> } />
			</Routes>
		</BrowserRouter>
	)
}

export default App

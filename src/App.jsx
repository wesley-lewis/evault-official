import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import AllRequests from "./AllRequests"
import Dashboard from "./Dashboard"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/login-official" element={<Login /> } />
				<Route index path="/signup-official" element={<Signup /> } />
				<Route index path="/requests" element={<AllRequests /> } />
				<Route index path="/dashboard" element={<Dashboard /> } />
			</Routes>
		</BrowserRouter>
	)
}

export default App

import {useState} from "react";

function Login() {
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
	const [type, setType] = useState('')

	function handleLoginSubmit(event) {
		event.preventDefault()

		const formData = new FormData(event.target)
		console.log(formData)

		fetch("http://localhost:8000/login-official", {
			method: "POST",
			body: formData,
			headers: {
				"Content-Type": "multipart/form-data",
			}
		})
			.then(resp => {
				if (resp.ok) {
					window.location.href = "www.google.com";
				}
			})
	}
	return (
		<form onSubmit={handleLoginSubmit}>
			<div className="bg-white p-8 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-semibold mb-4">Login</h2>
				<div className="mb-4">
					<label htmlFor="type" className="block text-gray-700">Type</label>
					<input type="text" id="type" name="type" value={type} className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700">Email</label>
					<input type="text" id="email" name="email" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="password" className="block text-gray-700">Password</label>
					<input type="password" id="password" name="password" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" />
				</div>

				<button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
			</div>
		</form>
	)
}

export default Login

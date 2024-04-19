function Signup() {
	function handleSignupSubmit(event) {
	event.preventDefault()

	const formData = new FormData(event.target)
	console.log(formData)

	fetch("http://localhost:8000/signup-official", {
		method: "POST",
		body: formData,
		headers: {
			"Content-Type": "multipart/form-data",
		}
	})
	.then(resp => {
		console.log("outside")
		if (resp.ok) {
			console.log("inside")
			window.location.href = "http://localhost:5137/login.html";
		}
	})
}
	return (
		<form method="POST">
			<div className="bg-white p-8 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-semibold mb-4">Login</h2>
				<div className="mb-4">
					<label htmlFor="type" className="block text-gray-700">Type</label>
					<input type="text" id="type" name="type" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700">Email</label>
					<input type="text" id="email" name="email" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" />
				</div>
				<div className="mb-6">
					<label htmlFor="password" className="block text-gray-700">Password</label>
					<input type="password" id="password" name="password" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" />
				</div>
				<div className="mb-6">
					<label htmlFor="district" className="block text-gray-700">District</label>
					<input type="text" id="district" name="district" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" />
				</div>
				<div className="mb-6">
					<label htmlFor="state" className="block text-gray-700">State</label>
					<input type="text" id="state" name="state" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" />
				</div>
				<button type="submit" onClick={handleSignupSubmit} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Signup</button>
			</div>
		</form>
	)
}

export default Signup

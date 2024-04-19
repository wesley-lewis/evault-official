import { useState } from "react";
import RequestCard from "./RequestCard"

function AllRequests() {
	const [fileRequests, setFileRequests] = useState(null)
	
	const getRequests = () => {
		fetch("http://localhost:8000/file-requests")
		.then(resp => resp.json())
		.then(body => {
			console.log(body)
			setFileRequests(body)
		})
		.catch(err => console.error(err))
	}

	return (
		<div className="ml-10 mt-10 mb-20">
		<button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
		onClick={getRequests}
		>Get Requests</button>

			{fileRequests && fileRequests.map((request, index) => <RequestCard key={index} request={request} />)}
		
		</div>
	)
}

export default AllRequests

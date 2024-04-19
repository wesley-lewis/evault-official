import {useState} from "react"

function RequestCard(data) {
	const [showButtons, setShowButtons] = useState(true)
	const {request} = data
	console.log(request)
	const handleGetFile = (path) => {
		fetch("http://localhost:8000/file/" + path)
		.then(resp => {
			console.log(resp)
			resp.blob()
		})
			.then(blob => {
				const url = window.URL.createObjectURL(blob);

				// Open the URL in a new tab
				window.open(url, '_blank');

				// Clean up by revoking the URL object
				window.URL.revokeObjectURL(url);

			})
	}
	const handleAccept = (caseid) => {
		const url = "http://localhost:8000/accept-vote/" + caseid
		fetch(url)
		setShowButtons(false)
	}
	const handleReject = (caseid) => {
		fetch("http://localhost:8000/reject-vote/"+caseid)
		setShowButtons(false)
	}
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
		<div className="px-6 py-4">
		<div className="font-bold text-xl mb-2">Plaintiff: {request.plaintiff}</div>
		<div className="font-bold text-xl mb-2">Defendant: {request.defendant}</div>
		</div>
		<div className="px-6 py-4">
		<p className="text-gray-700 text-base"><strong>Cause Of Action: </strong> {request.causeOfAction}</p>
		<p className="text-gray-700 text-base"><strong>Date of Action: </strong> {request.dateOfAction}</p>
		</div>
		<button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
		onClick={() => handleGetFile(request.FileLocation)}
		>Get file</button>
		<br />

		{ showButtons && <div className="mt-5">
			<button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-10 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
			onClick={() => handleAccept(request.CaseId)}
		>Accept</button>
			<button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
			onClick={() => handleReject(request.CaseId)}
		>Reject</button>

		</div>
		}
		</div>
	);
}

export default RequestCard;


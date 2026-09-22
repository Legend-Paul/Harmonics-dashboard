import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="page not-found">
			<h2>404 - Page Not Found</h2>
			<p>The page you are looking for does not exist.</p>
			<Link to="/" className="btn-primary">
				Go to Home
			</Link>
		</div>
	);
}

export default NotFound;

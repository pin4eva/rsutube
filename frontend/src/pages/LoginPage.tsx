import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const { data } = await axios.post("http://localhost:8001/login", {
			email,
			password,
		});

		console.log(data);
	};

	return (
		<div>
			<form className="w-50 mx-auto" onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="email">Email</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						name="email"
						className="form-control"
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="password">Password</label>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						name="password"
						className="form-control"
					/>
				</div>
				<button className="btn btn-primary">Login </button>
			</form>
		</div>
	);
};

export default LoginPage;

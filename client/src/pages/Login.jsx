import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Login(props) {
	const { login, user } = useAuth();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	async function loginUser(event) {
		event.preventDefault();

		const response = await fetch("http://localhost:3000/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				password,
			}),
		});

		const data = await response.json();

		if (data.user) {
			localStorage.setItem("token", data.user);
			alert("Login successful");
			login({ name: data.username });
			navigate('/')
		} else {
			alert("Please check your username and password");
		}
	}

	useEffect(() => {
		if (user) {
			navigate('/')
		}
	}, [user])
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Username"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
		</div>
	);
}

export default Login;

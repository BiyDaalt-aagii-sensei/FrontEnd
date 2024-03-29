import React, { useState } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import "./loginform.css";

const Loginform = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Getting access to the navigate function

    const loginHandle = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/login/user', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                const data = await response.json();
                const accessToken = data.access_token;
                localStorage.setItem('accessToken', accessToken); // Save token to localStorage
                toast.success('Login Successful');
                console.log(accessToken)
                navigate('/home'); // Redirecting to the home page
            } else {
                toast.error('Нууц үг эсхүл Нэвтрэх нэр буруу байна');
            }
        } catch (error) {
            console.log('err:', error);
            toast.error('Алдаа гарлаа. Дахин оролдоно уу.');
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={loginHandle}>
                <h1>Нэвтрэх</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Нэвтрэх нэр"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Нууц үг"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        Намайг сана
                    </label>
                    <a href="#">Нууц үг мартсан</a>
                </div>
                <button type="submit">Нэвтрэх</button>
                <div className="register-link">
                    <p>
                        Хэрэв бүртгэлгүй бол <Link to="/signup">Бүртгүүлэх</Link>
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Loginform;

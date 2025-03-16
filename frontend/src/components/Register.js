import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    // 🎨 Updated Styles
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#121212",
    };

    const formStyle = {
        backgroundColor: "#1e1e1e",
        color: "#e0e0e0",
        padding: "50px", // Increased padding for a bigger form
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.1)",
        width: "450px", // Made it wider
        textAlign: "center",
    };

    const headingStyle = {
        fontSize: "26px",
        marginBottom: "20px",
        fontWeight: "bold",
    };

    const inputStyle = {
        width: "100%",
        padding: "14px", // Increased padding for better readability
        margin: "12px 0",
        border: "1px solid #333",
        borderRadius: "6px",
        backgroundColor: "#2a2a2a",
        color: "white",
        fontSize: "18px",
        outline: "none",
        transition: "border 0.3s ease",
        textAlign: "center",
    };

    const buttonStyle = {
        width: "100%",
        padding: "16px", // Made the button bigger
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#1db954",
        color: "white",
        fontSize: "20px",
        cursor: "pointer",
        marginTop: "20px",
        transition: "all 0.3s ease",
        fontWeight: "bold",
    };

    const buttonHoverStyle = {
        backgroundColor: "#17a94c",
        transform: "scale(1.05)",
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/auth/register", credentials);
            alert("Registration Successful!");
            navigate("/login");
        } catch (error) {
            alert(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div style={containerStyle}>
            <form style={formStyle} onSubmit={handleSubmit}>
                <h2 style={headingStyle}>Register</h2>
                <input type="text" name="name" placeholder="Name" style={inputStyle} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" style={inputStyle} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" style={inputStyle} onChange={handleChange} required />
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                        e.target.style.transform = buttonHoverStyle.transform;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = buttonStyle.backgroundColor;
                        e.target.style.transform = "scale(1)";
                    }}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
    
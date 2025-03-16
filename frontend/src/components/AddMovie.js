import { useState } from "react";
import api from "../api";

const AddMovie = () => {
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        releaseYear: "",
        imageUrl: ""
    });

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/movies", movie);
            alert("Movie added!");
            setMovie({ title: "", description: "", releaseYear: "", imageUrl: "" });
        } catch (error) {
            alert("Failed to add movie: " + (error.response?.data?.message || "Unknown error"));
        }
    };

    return (
        <div style={{
            backgroundColor: "#0d0d0d", // Dark black background
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                backgroundColor: "#1e1e1e", // Dark gray form box
                color: "#ffffff",
                padding: "30px",
                borderRadius: "10px",
                maxWidth: "400px",
                width: "100%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                textAlign: "center"
            }}>
                <h2 style={{ marginBottom: "20px" }}>Add Movie</h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title" 
                        value={movie.title} 
                        onChange={handleChange} 
                        required 
                        style={{ 
                            padding: "12px", 
                            borderRadius: "5px", 
                            backgroundColor: "#262626", // Dark input field
                            color: "#ffffff", 
                            border: "none", 
                            outline: "none"
                        }}
                    />
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Description" 
                        value={movie.description} 
                        onChange={handleChange} 
                        required 
                        style={{ 
                            padding: "12px", 
                            borderRadius: "5px", 
                            backgroundColor: "#262626", // Dark input field
                            color: "#ffffff", 
                            border: "none", 
                            outline: "none"
                        }}
                    />
                    <input 
                        type="number" 
                        name="releaseYear" 
                        placeholder="Release Year" 
                        value={movie.releaseYear} 
                        onChange={handleChange} 
                        required 
                        style={{ 
                            padding: "12px", 
                            borderRadius: "5px", 
                            backgroundColor: "#262626", // Dark input field
                            color: "#ffffff", 
                            border: "none", 
                            outline: "none"
                        }}
                    />
                    <input 
                        type="text" 
                        name="imageUrl" 
                        placeholder="Image URL" 
                        value={movie.imageUrl} 
                        onChange={handleChange} 
                        required 
                        style={{ 
                            padding: "12px", 
                            borderRadius: "5px", 
                            backgroundColor: "#262626", // Dark input field
                            color: "#ffffff", 
                            border: "none", 
                            outline: "none"
                        }}
                    />
                    <button 
                        type="submit" 
                        style={{ 
                            padding: "12px", 
                            borderRadius: "5px", 
                            backgroundColor: "#00c853", // Green button
                            color: "#ffffff", 
                            fontWeight: "bold", 
                            border: "none", 
                            cursor: "pointer"
                        }}
                    >
                        Add Movie
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMovie;

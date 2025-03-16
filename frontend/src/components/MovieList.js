import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("https://movies-1-elfz.onrender.com/api/movies")
            .then((res) => {
                console.log("Fetched Movies Response:", res);
                setMovies(res.data);
            })
            .catch((err) => console.error("Error fetching movies:", err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://movies-1-elfz.onrender.com/api/movies/${id}`);
            setMovies(movies.filter(movie => movie._id !== id));
        } catch (error) {
            console.error("Error deleting movie:", error);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,  // Ensures uniform card sizes
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };

    return (
        <Container className="mt-4 px-lg-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 className="text-light text-center mb-4">Movies</h2>
            <div className="mx-auto">
                <Slider {...settings}>
                    {movies.map((movie) => (
                        <div key={movie._id} className="d-flex justify-content-center">
                            <Card className="bg-dark text-light shadow-lg border-0"
                                style={{
                                    width: "260px", 
                                    borderRadius: "12px", 
                                    overflow: "hidden" // Prevents any part of the card from being cut off
                                }}>
                                <div style={{ width: "100%", height: "350px", overflow: "hidden" }}>
                                    <Card.Img 
                                        variant="top" 
                                        src={movie.imageUrl} 
                                        alt={movie.title} 
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        onError={(e) => { 
                                            e.target.onerror = null; 
                                            e.target.src = "https://via.placeholder.com/260x350"; 
                                        }}
                                    />
                                </div>
                                <Card.Body className="d-flex flex-column align-items-center text-center">
                                    <Card.Title className="fw-bold">{movie.title} ({movie.releaseYear})</Card.Title>
                                    <Card.Text className="text-muted" style={{ fontSize: "14px", maxHeight: "60px", overflow: "hidden" }}>
                                        {movie.description}
                                    </Card.Text>
                                    <Button variant="danger" className="w-100 mt-2" onClick={() => handleDelete(movie._id)}>
                                        Remove
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>
        </Container>
    );
};

export default MovieList;

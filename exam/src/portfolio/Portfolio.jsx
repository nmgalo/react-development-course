import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
    )
      .then((res) => res.json())
      .then((data) => setProjects(data.results));
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div className="portfolio_grid">
        {projects.map((item, index) => (
          <Link to="/" key={index}>
            <div
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500/${item.backdrop_path}")`,
              }}
            >
              <div>
                <span>{item.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

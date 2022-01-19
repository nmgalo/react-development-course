import { Helmet } from "react-helmet";

import "./home.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="home_container">
        <div className="me">
          <h1>Hello, I'm Nick</h1>
          <h2>Android developer from georgia</h2>
        </div>
      </div>
    </>
  );
}

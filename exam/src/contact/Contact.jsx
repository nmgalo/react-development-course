import { Helmet } from "react-helmet";

import "./contact.css";

export default function Contact() {
  const handleContactFormSubmit = (event) => {
    alert("Done!");
    event.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div id="contact">
        <div>
          <h1>Contact me</h1>
          <p>email: someone@mail.com</p>
        </div>
        <form action="/" method="post" onSubmit={handleContactFormSubmit}>
          <div>
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div>
            <input type="email" name="email" placeholder="Enter your Email" />
          </div>
          <div>
            <textarea name="message" placeholder="Enter your message" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

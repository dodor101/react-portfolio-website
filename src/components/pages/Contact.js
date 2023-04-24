export default function Contact() {
  return (
    <div>
      <h3 className="contact-text">Contact Me</h3>
      <form className="form-style">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Enter Your Name
          </label>
          <input type="text" className="form-control" id="username" placeholder="Name" required />
          <div id="emailHelp" className="form-text">
            I'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" required />
        </div>
        <div className="mb-3">
          n
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            required
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message me"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="additional-contact">
        <h5>Or</h5>
        <p>Phone</p>
        <small>715-293-0689</small>
        <p>Email</p>
        <small>dodordickenson@gmail.com</small>
      </div>
    </div>
  );
}

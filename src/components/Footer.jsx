import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer mt-auto">
      <div className="container text-center">
        <small>
          &copy; {new Date().getFullYear()} FUN ZONE Theme Park. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;

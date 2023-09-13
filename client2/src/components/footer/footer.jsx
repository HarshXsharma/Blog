import "./footer.css"

const Footer = () => {
  return (
    <div className="subfooter">
        <div className="container flex subfooter-container">
            <span className="hover-link">Privacy policy</span>
            <span className="hover-link">Terms & Condition</span>
            <span className="hover-link">Security Information</span>
            <span className="hover-link"><i className="fa-brands fa-facebook"></i></span>
            <span className="hover-link"><i className="fa-brands fa-twitter"></i></span>
        </div>
    </div>
  )
}

export default Footer
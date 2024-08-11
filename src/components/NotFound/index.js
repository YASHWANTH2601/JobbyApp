import './index.css'
const NotFound = () => (
  <div className="notfound-container">
    <img
      className="img"
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
    />
    <div>
      <h1 className="heading">Page Not Found</h1>
      <p className="para">
        we're sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound

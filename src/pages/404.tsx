const Custom404 = () => {
  return (
    <div className="container">
      <h1>Oops!</h1>
      <h2>404 Not Found</h2>
      <div className="error-details">
        Sorry, an error has occured, Requested page not found!
      </div>
      <div className="error-actions">
        <button>
          <span className="glyphicon glyphicon-home"></span> Take Me Home
        </button>
        <button>
          <span className="glyphicon glyphicon-envelope"></span> Contact Support
        </button>
      </div>
    </div>
  )
}

export default Custom404

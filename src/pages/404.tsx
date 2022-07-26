import routes from '@constants/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Custom404 = () => {
  const router = useRouter()

  return (
    <div className="container">
      <h1>Oops!</h1>
      <h2>404 Not Found</h2>
      <p className="error-details">
        Sorry, an error has occured, Requested page not found!
      </p>
      <div className="error-actions">
        <Link passHref href={routes.HOME} replace>
          <button className="error-cta-home">Take Me Home</button>
        </Link>
        <button className="error-cta-back" onClick={router.back}>
          Go back
        </button>
      </div>
      <p className="error-support">Contact Support</p>
    </div>
  )
}

export default Custom404

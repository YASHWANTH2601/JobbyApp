import {Link, Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  // const onRedirectToJobs = () => {
  //   const {history} = props
  //   history.replace('/jobs')
  // }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="home-paragraph">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link className="retry-btn-link" to="/jobs">
          <button className="home-jobs-button" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
// import Header from '../Header'

// import Cookies from 'js-cookie'
// import {Redirect, Link} from 'react-router-dom'
// import './index.css'
// const Home = () => {
//   const jwtToken = Cookies.get('jwt_token')
//   if (jwtToken === undefined) {
//     return <Redirect to="/login" />
//   }
//   return (
//     <>
//       <Header />
//       <div className="home-container">
//         <div>
//           <h1>Find The Job That Fits Your Life</h1>
//           <p>
//             Millions of people are searching for jobs,salary information,company
//             reviews.Find the job that fits your abilities and potential .
//           </p>
//           <button type="button">Find Jobs</button>
//         </div>
//         <img src="" />
//       </div>
//     </>
//   )
// }

// export default Home

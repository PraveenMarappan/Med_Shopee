import bg from "../public/g.png"
import logo from "../public/logo.png"
import './home.css'
import {Link} from 'react-router-dom'
function Homepage() {
  return (
    <div>
      <div>
          <img src={bg} className='bg'></img>
          <div className='text'>
            <h1>Med Shopee Welcomes You...!</h1>
            <h2>Everybody's <br></br>Health <br></br>Improves <br></br>EveryDay</h2><br></br>
            <p>We Provide all kind of service to our patients according <br></br>to their daily needs starting from special condition</p>
            <br></br>
            <button className="shop"><Link to = "/shop">Shop Now...🛍️</Link></button>
          </div>
          </div>
    </div>
  )
}

export default Homepage

import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <section>
      <div className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>We are just honest hardworking people</h1>

          <p className='lead'>
            any text i don't know and unable to see in the image
          </p>

         <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>

            <Link to='/login' className='btn'>
              Login
  </Link>
  </div>
        </div>
      </div>
      </div>
      <div style={{background:"orange"}}>News Updates</div>
      <br></br>
      <br></br>
      <div className='courses'>
        <ul>
        <h1>Our Courses</h1>
        <li className='one'>1</li>
        <li className='two'>2</li>
        <li className='three'>3</li>
        </ul>
      </div>
      <br></br>
      <br></br>
      <div className='courses'>
        <ul>
        <h1>Our Achivements</h1>
        <li>250</li>
        <li>25</li>
        <li>2500</li>
        <li>340</li>
        </ul>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);

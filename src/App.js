import './App.css';
import logo from "../src/img/login.png"
import email from "../src/img/email.png"
import pass from "../src/img/password.png"

function App() {
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div className='container-image'>
              <img src={logo} alt='' className='profile' />
            </div>
          </div>

          <div>
            <h1>LOGIN</h1>
            <div>
              <img src={email} alt='' className='email' />
              <input type="text" placeholder='Enter Your Emial' className='name' />
            </div>

            <br />
            <div>
              <img src={pass} alt='' className='email' />
              <input type="password" placeholder='Enter Your Password' className='name' />
            </div>

            <div className='login-button'>
              <button style={{ boxShadow: "5px 5px 8px 5px rgb(207, 200, 200)" }}>Login</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

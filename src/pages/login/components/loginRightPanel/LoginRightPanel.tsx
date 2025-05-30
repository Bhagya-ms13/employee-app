// import LoginForm from '../loginForm/loginForm'
import LoginForm from '../loginForm/loginForm'

import './LoginRightPanel.css'

function LoginRightPanel() {
    return (
        <div className="right-panel">
      <div className="login-box">
        <img src="./src/assets/kv-logo.png" alt="Keyvalue Logo" className="logo" />
        
        <LoginForm></LoginForm>
      </div>
    </div>
    )
}

export default LoginRightPanel
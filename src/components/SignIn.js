import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const SignIn = () => {
    return (
        <div class="wrapper fadeInDown">
  <div id="formContent">

    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
      <input type="submit" class="fadeIn fourth" value="Log In" />
    </form>
  </div>
</div>
    )
}


export default SignIn

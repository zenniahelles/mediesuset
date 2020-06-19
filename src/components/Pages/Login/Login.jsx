import React from 'react';
import { observer } from 'mobx-react';
import UserStore from './stores/UserStore';
import LoginForm from './stores/LoginForm';
import SubmitButton from './stores/SubmitButton';
import './Login.scss';
import loginbanner from '../../Images/loginbanner.jpg';

class Login extends React.Component {

  //When app component mounts / finished loading / its checking if the user is logged in or not with session
  async componentDidMount() {

    try {
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    // Catch errorhandling, if api fails
    catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }

  }

  //When app component mounts / finished loading / its checking if the user is logged in or not with session
  async doLogOut() {

    try {
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    }
    // Catch errorhandling, if api fails
    catch (e) {
      console.log(e);
    }

  }

  render() {

    if (UserStore.loading) {
      return (
        <div className="app">
          <div className="container">
            Loading, please wait..
          </div>
        </div>
      );
    }

    else {

      if (UserStore.isLoggedIn) {

        return (
          <div className="app">
            <div className="container">
              Welcome {UserStore.username}

              <SubmitButton
                text={'Log out'}
                disabled={false}
                onClick={() => this.doLogOut()}
              />

            </div>
          </div>
        );
      }

      return (
        <div className="app">
          <div className="container">
            <LoginForm />
          </div>
        </div>
      );
    }
  }
}

export default observer(Login);



// Video Part 1 : https://www.youtube.com/watch?v=4BhhGs0PFHU
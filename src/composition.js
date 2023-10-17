import React from 'react';
import ReactDOM from 'react-dom/client';


class UserNameForm extends React.Component {
    render() {
       return (
          <div>
             <input type="text" />
          </div>
       );
    }
 }
 class CreateUserName extends React.Component {
    render() {  
       return (
          <div>
             <UserNameForm/>
             <button>Create</button>
          </div>
       )
    }
 }
 class UpdateUserName extends React.Component {
    render() {
        return (
          <div>
             <UserNameForm/>
             <button>Update</button>
          </div>
       )
    }
 }
 export default CreateUserName;
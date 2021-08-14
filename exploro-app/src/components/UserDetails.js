import React from "react";
import ReactDOM from "react-dom";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure()

const UserDetails = () =>{

    const {login_par} = useParams();
    
    const getUsersList = (login_par) => {
      let selectedUser = []; 
      fetch(`https://api.github.com/search/users?q=${login_par}`)
        .then(res => res.json())
        .then(resJson => selectedUser = resJson.items[0])
        .then(() => {
          console.log(selectedUser.login)
          // Card Content
          let userName = React.createElement("h5", {className: "card-title font-weight-bold"}, selectedUser.login);
          let userGitHub = React.createElement("a", {href: selectedUser.html_url, className: "text-muted"}, "Usuario en github.com");
          let userNameAndGit = React.createElement("div", {className: "card-body"}, userName, userGitHub);
          // Card Image
          let userAvatar = React.createElement("img", {src: selectedUser.avatar_url, alt:"", height: "300px"}, null);
          // Card User
          let userDet = React.createElement("div", {className: "card mb-3"}, userAvatar, userNameAndGit);
          // Rendering Card User
          return ReactDOM.render(userDet, document.getElementById("selected-user"));
        })
        .catch((err)=> toast.error(err, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false
        }));
    };
    getUsersList(login_par);


    return(
      <React.Fragment>
        <div id="selected-user" className="col-md-6 mx-auto mt-4"></div>
      </React.Fragment>
    )
  
}
export default UserDetails;
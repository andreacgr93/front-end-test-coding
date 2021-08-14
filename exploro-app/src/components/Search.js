import React, {Component} from "react";
import List from "./List";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


toast.configure()

export default class Search extends Component {
  constructor (props){
    super(props)
    this.state = {
      userList: [],
    }
  }
  
  getUsersList = (searchedUser) => {
	fetch(`https://api.github.com/search/users?q=${searchedUser}`)
		.then(res => res.json())
		.then(resJson => this.setState({userList: resJson.items}))
  }

  setSearchedUser = (searchedUser) =>{
	this.getUsersList(searchedUser)
  };

  inputUserRef = React.createRef();

  getSearchedUser = (event) =>{
	  	event.preventDefault();

	  	const searchedUser = this.inputUserRef.current.value;
	  	if(searchedUser.length < 4){
		  	toast.warn("Incluir un mínimo de 4 caracteres", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: false
		})
		}
		else if(searchedUser === "noloro"){
        	toast.warn("Intenta con otro nombre, 'noloro' no se admite", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: false
        })} 
		else{
			this.setSearchedUser(searchedUser);;
    }
  }


  render(){
	
    const usersLoro = this.state.userList.slice(0,10).map((user) => {
		return(
				<List 
					userName={user.login} 
					id={user.id}  
					avatar={user.avatar_url}
					key={user.node_id}
				/>
		)
	});
		

    return (
			<div id="users" className="col-md-8 mx-auto mt-4" >

				<div className="form-group bg-light p-3 rounded">

					<div className="d-flex justify-content-center">
						<h4 className="mt-3 mb-0 text-center"><strong>Usuarios LORO</strong></h4>
						<i className="fa fa-users fa-3x mx-3 text-muted"></i>
					</div>
					<hr className="col-md-10 mx-auto mb-5"/>

					<form onSubmit={this.getSearchedUser}>
						<div className="input-group">
							<input 
								type="text" 
								className="form-control" 
								id="user-input" 
								placeholder="Escribe el nombre de un usuario..."
								ref={this.inputUserRef}
							/>
							<div className="input-group-append">
								<button 
									className="input-group-text" 
									type="submit"
								>
									<i className="fa fa-search"></i>
								</button>
							</div>
						</div>
					</form>

					<div id="list" className="list-group col-md-12 p-0 mt-3" >
						{usersLoro}
					</div>

				</div>

				<br className="mb-3"/>

			</div>
    );
  }
}


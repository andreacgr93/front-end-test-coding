import React, {Component} from "react";
import {getUsersLoro} from "../services/users-loro";
import List from "./List";

export default class Search extends Component {
  constructor (props){
    super(props)
    this.state = {
      userList: [],
      isFetch: true,
    }
  }

  async componentDidMount(){
    const respUsersLoro = await getUsersLoro();
		this.setState({userList: respUsersLoro.items, isFetch: false})
		console.log(respUsersLoro);
  }

  render(){
    

    if (this.state.isFetch){
      return (
			<div className="col-md-8 mx-auto mt-4" >
				<div className="form-group bg-light p-3 rounded d-flex justify-content-center">
					Loading LORO users...
				</div>
			</div>
			)
    }

    const usersLoro = this.state.userList.map((user) => {
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
			<div id="users-from-loro" className="col-md-8 mx-auto mt-4" >

				<div className="form-group bg-light p-3 rounded">

					<div className="d-flex justify-content-center">
						<h4 className="mt-3 mb-0 text-center"><strong>Usuarios LORO</strong></h4>
						<i className="fa fa-users fa-3x mx-3 text-muted"></i>
					</div>
					<hr className="col-md-10 mx-auto mb-5"/>

					<i className="fa fa-address-card-o fa-2x mx-3"></i>
					<label htmlFor="user-input" className="pb-3 mb-2">Encuentra el usuario LORO que buscas</label>

					<div className="input-group">
						<input 
							type="text" 
							className="form-control" 
							id="user-input" 
							placeholder="Escribe el nombre de un usuario..."
						/>
						<div className="input-group-append">
							<button className="input-group-text">
								<i className="fa fa-search"></i>
							</button>
						</div>
					</div>

					<div id="list" className="list-group col-md-12 p-0 mt-3" >
						{usersLoro}
					</div>

				</div>

				<br/>

			</div>
    );
  }
}


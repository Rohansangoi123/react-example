import React from 'react';
import axios from 'axios';
import Login from './Login';
import ReactDOM from 'react-dom';


class MarksheetList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
            list : []
        };
        this.search();
    }
    
    search(){
        console.log("state:", this.state )
        let url = 'https://testwebserviceapp.herokuapp.com/api/user/getUser';
        axios.get(url).then((res) => {
            console.log(res);
            
            this.setState( {list: res.data.response});
        });
    }
    navigate(event){

        ReactDOM.render( 
            <React.StrictMode>
             
             <Login/>
            </React.StrictMode>,
            document.getElementById('root')
        );           
    }

   
    
   
    render() {

        return ( 
            <div>
                <h1 align="center">Marksheet List</h1>
               
                <button  onClick={(event) => this.navigate(event) }>  add user</button>
                <table  width="100%"> 
                    <tbody>
                    <tr>
                        <th>Sr No</th>                            
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Mobile</th>
                        <th>Address</th>
                               <th></th>                                                                                                               
                    </tr>                
                    {
                        this.state.list.map((ele,index) => (
                        <tr>
                            <td>{index + 1 }</td>                            
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.password}</td>
                            <td>{ele.mobile}</td>
                            <td>{ele.address}</td>
                            <button  onClick={"delete item"}>  delete</button>  
                        </tr>
                        ) )
                    } 
                </tbody>    
                </table>                
            </div>
        );
    }
}
export default MarksheetList;
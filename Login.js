import React,{Component}from 'react';
import ReactDOM from 'react-dom';


;

// import App from './App';
// import Table from './Table';


class Login extends Component  {

    constructor(props) {
        super(props);

        //component state 
        this.state = {
          
         
             userid: "",
             email:"",
             name:"",

            
            

            };
           
        
    }
    changeState(event){
      

        let name = event.target.name;
        let value = event.target.value;  
        this.setState({ [name] : value});
    }
    


    signin(){

        if(this.state.name === ""){

            this.setState({ message : "Enter name"});   
           
        }
        else if(this.state.userid === ""){
            this.setState({ message : "Enter User id"}); 
        }
    
        else if(this.state.email === ""){
            this.setState({ message : "Enter email"}); 
        }
        // else if(this.state.mobileNo === ""){
        //     this.setState({ message : "Enter mobile number"}); 
        // }
        else{
            console.log("Valid user")
            this.setState({message:""});

            ReactDOM.render( 
                <React.StrictMode>
      
                </React.StrictMode>,
                document.getElementById('root')
            );           
           
        }
    }
    

   
   
    render() {

        

        return ( 
            <div>
               <center> <h1>Login</h1>
               {/* {this.state.error==="true"&& */
                <h3  style={{color: "red"}}> {this.state.message}</h3>}
               <form >
                 <table align='center'>
                 <tr>
                        <td>Name:</td>
                        <td><input type="text" name="name" placeholder='Name' value={this.state.name} 
                            onChange={(event) => this.changeState(event)} />
                        </td>
                    </tr>
                    <tr>
                        <td>User ID:</td>
                        <td><input type="text" name="userid" placeholder='User Id' value={this.state.userid} 
                            onChange={(event) => this.changeState(event)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type="text"  name="email"placeholder="Email" value={this.state.email} 
                                onChange={(event) => this.changeState(event)} />
                        </td>
                    </tr>
                    {/* <tr>
                        <td>MobileNO</td>
                        <td>
                            <input type="text"  name="number"placeholder="number" value={this.state.name} 
                                onChange={(event) => this.changeState(event)} />
                        </td>
                    </tr> */}
                    <tr>
                        <td colSpan={2}>
                            <button type='button'  onClick={(event) => this.signin(event) }>Signin</button>
                        </td>
                    </tr>
                 </table>
                </form></center>
            </div>
        );
    }
}
export default Login
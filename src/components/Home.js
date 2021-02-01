import React, { Component } from 'react'
import '../components/home.css'
import logo from '../assets/images/logo.png'
import imglogo from '../assets/icons/add-24px.svg'
import profile from '../assets/profile-images/Ellipse -3.png'
import deleteicon from '../assets/icons/delete-black-18dp.svg'
import editicon from '../assets/icons/create-black-18dp.svg'
import axios from 'axios'
import { Link } from 'react-router-dom'



class Home extends Component{

    constructor(props){
        super(props)

        this.state = {
            posts : []   
        }
    }

    

    componentDidMount(){
        this.getService()
    }

    componentDidUpdate(){
        this.getService()
    }
    getService(){
        axios.get('http://localhost:8080/employeepayrollservice')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data.data})
        }).catch(error => {
            console.log(error)
        })

    }


    deleteRow(id, e){
        axios.delete(`http://localhost:8080/employeepayrollservice/delete/${id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
      
            const posts = this.state.posts.filter(item => item.employeeId !== id);
            this.setState({ posts });

          })
      
    }

    editRow(id,e){
        
        axios.get(`http://localhost:8080/employeepayrollservice/get/${id}`)
        .then(response => {
            console.log(response.data.data)   
            localStorage.setItem("details",JSON.stringify(response.data.data))
            this.props.history.push('/update')
                  
        }).catch(error => {
            console.log(error)
        })
        
       
    }


    render(){
        const {posts} =this.state
        return(
            
            <div>
                
                <header class = "header-content header">
                    <div class = "logo-content">
                        <img src = {logo} alt = ""/>
                        <div>
                            <span className = "emp-text">EMPLOYEE</span><br/>
                            <span className = "emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header>
                <div class = "main-content">
                    <div class = "header-content">
                        <div class = "emp-details-text">
                            Employee Details <div class = "emp-count">{posts.length}</div>
                        </div>
                        <Link to='/' class = "add-button">
                        <img src = {imglogo} alt = ""/>Add User
                        </Link>
                    </div>
                    <div class = "table-main">
                        <table class = "table" id = "table-display">
                        <tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Actions</th></tr>
                        {
                            posts.length ?
                            posts.map(post=> 
                                <tr> 
                                    <td><img className= "profile" src = {profile} alt = "hii"/></td>
                                    <td>{post.name}</td>
                                    <td>{post.gender}</td>
                                    <td>{post.departments && post.departments.map(dept => (<div className='dept-label'>{dept}</div>))}</td>
                                    <td>{post.salary}</td>
                                    <td>{post.startDate}</td>
                                    <td>
                                        <img id = {post.employeeId} src = {deleteicon} onClick={(e) => this.deleteRow(post.employeeId, e)} alt = "delete"/>
                                        
                                        <img id = {post.employeeId} src = {editicon}  onClick={(e) => this.editRow(post.employeeId,e)} alt = "edit"/>
                                    </td>
                                </tr>
                            ):
                            null
                        }
                        </table>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home
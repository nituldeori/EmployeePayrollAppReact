import React, { Component } from 'react'
import '../components/Hello.css'
import axios from 'axios'
import path from '../assets/images/logo.png'
import profile1 from '../assets/profile-images/Ellipse -3.png'
import profile2 from '../assets/profile-images/Ellipse -1.png'
import profile3 from '../assets/profile-images/Ellipse -8.png'
import profile4 from '../assets/profile-images/Ellipse -7.png'
import { Link } from 'react-router-dom'



class Hello extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: '',
            profilePic: '',
            gender:'',
            departments : [],
            salary: '40000',
            Day:'01',
            Month:'01',
            Year:'2021',
            note:'',
            startDate: ''
           

        }
    }

    
    defineDate = () => {
        this.state.startDate = this.state.Day+" "+this.state.Month+" "+this.state.Year
        
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    changeHandlerCheckbox = (e) => {
        this.state.departments.push(e.target.value)
    }

    submitHandler = (e) => {
        this.defineDate()
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/employeepayrollservice/create',this.state)
        .then(response => {
            console.log(response)
            this.props.history.push('/home')
        }).catch(error => {
            console.log(error)
        })
        

    }
    render(){
        return(
            <div>
                <header className="header-content header">
                    <div className="logo-content">
                        <img src={path} alt="logo"/>
                        <div>
                            <span className="emp-text">EMPLOYEE</span><br/>
                            <span className="emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header>
                <div className="form-content">
                    <form className="form" action="#" onreset= "resetForm()" onSubmit={this.submitHandler}>
                        <div className="form-head">Employee Payroll Form</div>
                        <div className="row-content">
                            <label className="label text" for="name">Name</label>
                            <input className="input" type="text" value = {this.state.name} onChange={this.changeHandler} id="name" name="name" placeholder="Your Name.." required/>
                            <error-output className="text-error" for="text"></error-output>
                        </div>
                        <div className="row-content">
                            <label className="label text" for="profilePic">Profile image</label>
                            <div className="profile-radio-content">
                            <label>
                                <input type="radio" id="profile1" name="profilePic" value ="../assets/profile-images/Ellipse -3.png"  onChange={this.changeHandler} required/>
                                <img className="profile" id="image1" alt="img" src={profile1}/>
                            </label>
                            <label>
                                <input type="radio" id="profile2" name="profilePic" value = "../assets/profile-images/Ellipse -1.png" onChange={this.changeHandler} required/>
                                <img className="profile" id="image2" alt="img" src={profile2}/>
                            </label>
                            <label>
                                <input type="radio" id="profile3" name="profilePic" value ="../assets/profile-images/Ellipse -8.png"  onChange={this.changeHandler} required/>
                                <img className="profile" id="image3" alt="img" src={profile3}/>
                            </label>
                            <label>
                                <input type="radio" id="profile4" name="profilePic" value ="../assets/profile-images/Ellipse -7.png"  onChange={this.changeHandler} required/>
                                <img className="profile" id="image4" alt="img" src={profile4}/>
                            </label>
                            <error-output className="text-error" for="text"></error-output>
                            </div>
                        </div>
                        <div className="row-content">
                            <label className="label text" for="gender">Gender</label>
                            <div>
                                <input type="radio" onChange={this.changeHandler} id="male" name="gender" value="male"/>
                                <label className="text" for="male">Male</label>
                                <input type="radio" onChange={this.changeHandler} id="female" name="gender" value="female"/>
                                <label className="text" for="female">Female</label>
                                <error-output className="text-error" for="text"></error-output>
                            </div>
                        </div>
                        <div className="row-content">
                            <label className="label text" for="departments">Department</label>
                            <div>
                                <input className = "checkbox" type = "checkbox" id = "sales" onChange={this.changeHandlerCheckbox} name = "department" value = "Sales"/>
                                <label className = "text" for = "sales">Sales</label>
                                <input className = "checkbox" type = "checkbox" id = "finance" onChange={this.changeHandlerCheckbox} name = "department" value = "Finance"/>
                                <label className = "text" for = "finance">Finance</label>
                                <input className = "checkbox" type = "checkbox" id = "engineer" onChange={this.changeHandlerCheckbox} name = "department" value = "Engineer"/>
                                <label className = "text" for = "engineer">Engineer</label>
                                <input className = "checkbox" type = "checkbox" id = "hr" onChange={this.changeHandlerCheckbox} name = "department" value = "HR"/>
                                <label className = "text" for = "hr">HR</label>
                                <input className = "checkbox" type = "checkbox" id = "others" onChange={this.changeHandlerCheckbox} name = "department" value = "Others"/>
                                <label className = "text" for = "others">Others</label>
                        </div>
                            <error-output className="text-error" for="text"></error-output>
                        </div>
                        <div className="row-content">
                            <label className="label text" for="salary">Choose Your Salary: </label>
                            <input className="input" type="range" name="salary" id="salary" onChange={this.changeHandler} min="3000" max="50000" step="100" value={this.state.salary}/>
                            <output className="salary-output text" for="salary">{this.state.salary}</output>
                            <error-output className="text-error" for="text"></error-output>
                        </div>
                        <div className="row-content">
                        <label className="label text" for="startDate">Start Date</label>
                        <div id="date">
                            <select id="day" onChange={this.changeHandler} name="Day">
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select id="month" onChange={this.changeHandler} name="Month">
                                <option value = "01">January</option>
                                <option value = "02">February</option>
                                <option value = "03">March</option>
                                <option value = "04">April</option>
                                <option value = "05">May</option>
                                <option value = "06">June</option>
                                <option value = "07">July</option>
                                <option value = "08">August</option>
                                <option value = "09">September</option>
                                <option value = "10">October</option>
                                <option value = "11">November</option>
                                <option value = "12">December</option>
                            </select>
                            <select id="year" onChange={this.changeHandler} name="Year">
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                            </div>
                            <error-output className="date-error" for="startDate"></error-output>
                        </div>
                        <div className="row-content">
                            <label className="label text" for="note">Notes</label>
                            <textarea id="note" onChange={this.changeHandler} className="input" name="note" placeholder="add notes...."></textarea>
                        </div>
                        <div className="buttonParent">
                            <Link to='/home' className="resetButton button cancelButton">cancel</Link>
                            <div className="submit-reset">
                                <button type="submit" className="button submitButton" id="submitButton">Submit</button>
                                <button type="reset" className="resetButton button">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Hello
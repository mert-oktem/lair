import React, {Component} from "react"

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: {
                contactFirstName: "",
                contactLastName: "",
                contactEmail: "",
                placeOfObservation: "",
                observationDetails: ""
            },
            fNameError:"",
            lNameError:"",
            emailError: "",
            pOError: "",
            oDError: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClearForm = this.handleClearForm.bind(this)
        this.validate = this.validate.bind(this)
    }
    handleChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState( prevState => {
                return {
                    newUser : {
                        ...prevState.newUser, [name]: value
                    }
                }
            }
        )
    }
    handleSubmit(e){
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            let userData = this.state.newUser;
            fetch('https://lair.wmdd.ca/api/contact',{
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                res.json().then(() => {
                    this.handleClearForm();
                })
            })
        }

    }
    validate = () => {
        let  fNameError = "";
        let  lNameError ="";
        let  emailError = "";
        let  pOError = "";
        let  oDError = "";
        if(!this.state.newUser.contactFirstName){
            fNameError =  "First Name cannot be blank";
        }
        else if(this.state.newUser.contactFirstName.length < 3){
            fNameError =  "First Name cannot be less than 3 character";
        }
        if(!this.state.newUser.contactLastName){
            lNameError =  "Last Name cannot be blank";
        }
        else if(this.state.newUser.contactLastName.length < 3){
            lNameError =  "Last Name cannot be less than 3 character";
        }
        if(!this.state.newUser.placeOfObservation){
            pOError =  "Place Of Observation cannot be blank";
        }
        else if(this.state.newUser.placeOfObservation.length < 3){
            pOError =  "Place Of Observation cannot be less than 3 character";
        }
        if(!this.state.newUser.observationDetails){
            oDError =  "Observation Details cannot be blank";
        }
        else if(this.state.newUser.observationDetails.length < 3){
            oDError =  "Observation Details cannot be less than 3 character";
        }
        if(!this.state.newUser.contactEmail.includes("@")){
            emailError = "Invalid Email";
        }
        if(!this.state.newUser.contactEmail.includes(".")){
            emailError = "Invalid Email";
        }
        if(!this.state.newUser.contactEmail){
            emailError = "Email cannot be blank";
        }
        else if(this.state.newUser.contactEmail.length < 3){
            emailError = "Email cannot be less than 3 character";
        }

        if(fNameError || lNameError || emailError || pOError || oDError){
            this.setState({fNameError, lNameError, emailError, pOError, oDError});
            return false;
        }
        return true;
    }
    handleClearForm() {
        this.setState({
            newUser: {
                contactFirstName: "",
                contactLastName: "",
                contactEmail: "",
                placeOfObservation: "",
                observationDetails: ""
            },
            fNameError:"",
            lNameError:"",
            emailError: "",
            pOError: "",
            oDError: ""
        })
        document.getElementById("response-submit").innerHTML = "Thank you for submitting your response !";
    }
    render() {
        return (
            <div className="contact-contactForm-outerdiv">
                <form className="contact-contactForm" id="contact-contactForm">
                    <div className="contact-contactForm-firstName">
                        <input
                            type="text"
                            value={this.state.newUser.contactFirstName}
                            name="contactFirstName"
                            id="contactFirstName"
                            placeholder="First Name"
                            onChange={this.handleChange}
                        />
                        <div className="validate-form">{this.state.fNameError}</div>
                    </div>

                    <div className="contact-contactForm-lastName">
                        <input
                            type="text"
                            value={this.state.newUser.contactLastName}
                            name="contactLastName"
                            id="contactLastName"
                            placeholder="Last Name"
                            onChange={this.handleChange}
                        />
                        <div className="validate-form">{this.state.lNameError}</div>
                    </div>

                    <div className="contact-contactForm-email">
                        <input
                            type="email"
                            value={this.state.newUser.contactEmail}
                            name="contactEmail"
                            id="contactEmail"
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                        <div className="validate-form">{this.state.emailError}</div>
                    </div>

                    <div className="contact-contactForm-where">
                        <input
                            type="text"
                            value={this.state.newUser.placeOfObservation}
                            name="placeOfObservation"
                            id="placeOfObservation"
                            placeholder="Where did you encounter the species?"
                            onChange={this.handleChange}
                        />
                        <div className="validate-form">{this.state.pOError}</div>
                    </div>

                    <div className="contact-contactForm-details">
                        <textarea
                            value={this.state.newUser.observationDetails}
                            name="observationDetails"
                            id="observationDetails"
                            placeholder="Details"
                            onChange={this.handleChange}
                        />
                        <div className="validate-form">{this.state.oDError}</div>
                    </div>

                    <button type="button" onClick={this.handleSubmit}>Send Now</button>
                </form>
                <div id="response-submit"></div>
            </div>
        )
    }
}

export default ContactForm

import React, {Component} from "react"

class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            newUser: {
                contactFirstName: "",
                contactLastName: "",
                contactEmail: "",
                placeOfObservation: "",
                observationDetails: ""
            }

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClearForm = this.handleClearForm.bind(this)
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
        let userData = this.state.newUser;

        fetch('https://lair.wmdd.ca/api/contact',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            //console.log(res)
            res.json().then((data) => {
                console.log("successful")
                this.handleClearForm();
            })
        })

    }
    handleClearForm(e) {

        this.setState({
            newUser: {
                contactFirstName: "",
                contactLastName: "",
                contactEmail: "",
                placeOfObservation: "",
                observationDetails: ""
            }
        })
        document.getElementById("response-submit").innerHTML = "Thank you for submitting your response"
    }
    render() {
        return (
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

                </div>

                <div className="contact-contactForm-details">
                    <textarea
                        value={this.state.newUser.observationDetails}
                        name="observationDetails"
                        id="observationDetails"
                        placeholder="Details"
                        onChange={this.handleChange}
                    />
                </div>

                <button type="button" onClick={this.handleSubmit}>Send Now</button>

                </form>
        )
    }
}

export default ContactForm

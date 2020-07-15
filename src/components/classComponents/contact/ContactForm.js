import React, {Component} from "react"

class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            Email: "",
            where: "",
            details: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value,type} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(){
        console.log("form submitted");
    }

    render() {
        return (
            <form className="contact-contactForm" onSubmit={this.handleSubmit}>
                <div className="contact-contactForm-firstName">
                    <input
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="contact-contactForm-lastName">
                    <input
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />

                </div>

                <div className="contact-contactForm-email">
                    <input
                        type="email"
                        value={this.state.Email}
                        name="Email"
                        placeholder="Email"
                        onChange={this.handleChange}
                    />

                </div>

                <div className="contact-contactForm-where">
                    <input
                        type="text"
                        value={this.state.where}
                        name="where"
                        placeholder="Where did you encounter the species?"
                        onChange={this.handleChange}
                    />

                </div>

                <div className="contact-contactForm-details">
                    <textarea
                        value={this.state.details}
                        name="details"
                        placeholder="Details"
                        onChange={this.handleChange}
                    />

                </div>
                <button>Send Now</button>

                <h4>{this.state.firstName} {this.state.lastName} {this.state.Email} {this.state.where} {this.state.details}</h4>
            </form>
        )
    }
}

export default ContactForm

import React, {Component} from "react"

class NewsletterEmailForm extends Component {
    constructor() {
        super()
        this.state = {

            Email: ""

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit() {
        console.log("form submitted");
    }

    render() {
        return (
            <form className="newsletter-form" onSubmit={this.handleSubmit}>

                <div className="newsletter-form-email">
                    <input
                        type="email"
                        value={this.state.Email}
                        name="Email"
                        placeholder="Please enter your email"
                        onChange={this.handleChange}
                    />

                </div>
                <div className="newsletter-form-submitBtn">
                    <button>JOIN US</button>
                </div>

            </form>
        )
    }
}

export default NewsletterEmailForm

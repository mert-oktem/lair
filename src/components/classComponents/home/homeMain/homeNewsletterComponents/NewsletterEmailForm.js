import React, {Component} from "react"

class NewsletterEmailForm extends Component {
    constructor() {
        super()
        this.state = {
            newSub : {
                subscriberEmail: ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState( prevState => {
                return {
                    newSub : {
                        ...prevState.newSub, [name]: value
                    }
                }
            }
        )
    }

    handleSubmit(e) {

        e.preventDefault();
        let userData = this.state.newSub;

        fetch('https://lair.wmdd.ca/api/newsletter',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {

            res.json().then(() => {
                this.setState({
                    newSub: {
                        subscriberEmail: ""
                    }
                })
                document.getElementById("newsletter-submit").innerHTML = "Thank you for subscribing !";

            })
        })
    }

    render() {
        return (
            <div className="newsletter-form-outerdiv">
                <form className="newsletter-form">

                    <div className="newsletter-form-email">
                        <input
                            type="email"
                            value={this.state.newSub.subscriberEmail}
                            name="subscriberEmail"
                            id="subscriberEmail"
                            placeholder="Please enter your email"
                            onChange={this.handleChange}
                        />

                    </div>
                    <div className="newsletter-form-submitBtn">
                        <button type="button" onClick={this.handleSubmit}>JOIN US</button>
                    </div>

                </form>
                <div id="newsletter-submit"></div>
            </div>

        )
    }
}

export default NewsletterEmailForm

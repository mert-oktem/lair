import React, {Component} from "react"

class NewsletterEmailForm extends Component {
    constructor() {
        super()
        this.state = {
            newSub : {
                subscriberEmail: ""
            },
            newsError: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validate = this.validate.bind(this)
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
        const isValid = this.validate();
        if(isValid){
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
                        },
                        newsError:""
                    })
                    document.getElementById("newsletter-submit").innerHTML = "Thank you for subscribing !";

                })
            })
        }
    }
    validate = () => {
        let newsError = "";
        if(!this.state.newSub.subscriberEmail.includes("@")){
            newsError = "Invalid Email";
        }
        if(!this.state.newSub.subscriberEmail.includes(".")){
            newsError = "Invalid Email";
        }
        if(!this.state.newSub.subscriberEmail){
            newsError = "Email cannot be blank";
        }
        else if(this.state.newSub.subscriberEmail.length < 3){
            newsError = "Email cannot be less than 3 character";
        }

        if(newsError){
            this.setState({newsError});
            return false;
        }
        return true;
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
                        <div className="validate-form">{this.state.newsError}</div>
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

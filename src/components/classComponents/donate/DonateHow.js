import React, {Component} from 'react'
import DonateHowImage from "./DonateHowImage";

class DonateHow extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="donate-how">
                <div className="donate-how-heading"><h2>How Your Donation Will
                    Make a Difference?</h2>
                </div>
                <div className="donate-how-text"><p>It is your donation that enables us to actively keep
                    campaigning for animals in need and improving animal
                    welfare standards worldwide. Specifically, you can see
                    how your donation contributes towards the betterment
                    and welfare of animals below:</p>
                </div>
                <div className="donate-how-amount">
                    <div className="donate-how-amount1">
                        <div className="donate-how-amount1-head"><p>$50</p></div>
                        <div className="donate-how-amount1-text"><p>
                            Provides for adequate medical care,
                            vaccination and neutering of a stray.
                        </p></div>
                    </div>
                    <div className="donate-how-amount2">
                        <div className="donate-how-amount2-head"><p>$100</p></div>
                        <div className="donate-how-amount2-text"><p>
                            Provides emergency medicine for up to
                            7,550 animals in a disaster.
                        </p></div>
                    </div>
                    <div className="donate-how-amount3">
                        <div className="donate-how-amount3-head"><p>$500</p></div>
                        <div className="donate-how-amount3-text"><p>
                            Finances all monthly costs of caring and
                            nurturing of an orphaned orangutan.
                        </p></div>
                    </div>
                </div>
                <DonateHowImage />
            </div>
        )
    }
}

export default DonateHow
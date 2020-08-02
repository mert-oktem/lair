import React, {Component} from 'react'
import DonateHowImage from "./DonateHowImage";

class DonateHow extends Component {

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
                    <div className="donate-how-amount-desc">
                        <div className="donate-how-amount-head"><h1>$50</h1></div>
                        <div className="donate-how-amount-text"><p>
                            Provides for adequate medical care,
                            vaccination and neutering of a stray.
                        </p></div>
                    </div>
                    <div className="donate-how-amount-desc">
                        <div className="donate-how-amount-head"><h1>$100</h1></div>
                        <div className="donate-how-amount-text"><p>
                            Provides emergency medicine for up to
                            7,550 animals in a disaster.
                        </p></div>
                    </div>
                    <div className="donate-how-amount-desc">
                        <div className="donate-how-amount-head"><h1>$500</h1></div>
                        <div className="donate-how-amount-text"><p>
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
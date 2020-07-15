import React, {Component} from 'react'
import * as Parser from 'rss-parser'
import { string } from 'prop-types'

let parser = new Parser()
class TestArticles extends Component{
    constructor(props) {
        super(props);
        this.state = { feed: [] };
    }
    async componentDidMount() {
        const feed = await parser.parseURL('https://www.reddit.com/.rss');
        this.setState({ feed });
    }
    render(){
        return (
            <div className="site-articles-test">
                <h1>RSS Feed</h1>
                this.state.feed.map((item) => (
                <div >
                    <h1>item.title</h1>
                    <a href="">item.link</a>
                </div>
                ))

            </div>
        )
    }

}
export default TestArticles
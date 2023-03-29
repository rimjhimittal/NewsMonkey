import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= []
    constructor(){
        super();
        console.log("Hello construction this side");
        this.state={
            articles: this.articles,
            loading: true
        }
    }

async componentDidMount(){
    console.log("npm");
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=b819fd800df34377b1141fd3a3f69384";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles})
}

  render() {

    console.log("render9");

    return (
        <div className = "container my-2 ">
            <h2>Welcome to my News Application</h2>
            
            <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key= {element.url}>
                    <NewsItem title={element.title?element.title.slice(0, 50):""} description ={element.description?element.description.slice(0, 88):""} imageUrl = {!element.urlToImage?"https://s.abcnews.com/images/Politics/kamala-harris-1-gty-gmh-03282023_1680037110964_hpMain_16x9_992.jpg":element.urlToImage} newsUrl={element.url}/>
                    </div>

    })}
    </div>
</div>
    )
  }

}

export default News
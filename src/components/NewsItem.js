import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description,imageUrl, newsUrl, author, date,source} = this.props;
    return (
      <div className='container my-3'>
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left: '90%'}} >{source}</span>
          <img src={!imageUrl? "https://images.hindustantimes.com/tech/img/2023/05/20/1600x900/exoplanet_1684604246137_1684604260516.png":imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className  ="card-text"><small>By {!author?"unkown":author} on {new Date(date).toGMTString()} </small></p>
            <a href= {newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem 
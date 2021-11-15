import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
;

class Card extends React.Component {
 
  render(){ 
     // let like="btn btn-outline-secondary"
        return( <div className="card" style={{margin:"30px"}}>
        <img className="card-img-top" style={{width:"300px",height:"400px",}} src={this.props.srci} alt="Cardcap"/>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.cast}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Category: {this.props.category}</li>
          <li className="list-group-item">Rate: {this.props.rate}</li>
          <li className="list-group-item">Views: {this.props.views}</li>
        </ul>
        <div className="card-body" >
          <a href="..." ><button  type="button" className="btn btn-outline-primary" style={{marginRight:'20px'}}>Like</button></a>
          <a href="..." ><button type="button" className="btn btn-outline-danger">Dislike</button></a>
        </div>
      </div>);
      }
}
 
export default Card;
import React, {Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Card from './card';
import movie from './movieData';
import './index.css';

class App extends Component {
   ncard(val){
    return( 
  <Card key={val.id}
    srci={val.srci}  
    name={val.name}
    category={val.category}
    rate={val.rate}
    views={val.view}/>
    );}
    
   render() { 
    return <>
    <section className="jumbotron text-center">
      <div className="container">
      <h1 className="jumbotron-heading">Top 5 Bollywood Movies</h1>
        <p className="lead text-muted"></p>
      </div>
    </section>
    <div style={{display:'flex',flexWrap:'wrap',margin:'30px',justifyContent:'space-around'}}>
   {movie.map(this.ncard)}
   </div></>;
  }
}
 
export default App;

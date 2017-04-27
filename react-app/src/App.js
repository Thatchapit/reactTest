import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Pokemon-DB-master/pokedex.json';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data:[
        {
          list: 'ทดสอบ'
        },
        {
          list: 'ทดสอบ2'
        },
        {
          list: 'ทดสอบ3'
        }
      ],
      pokedex: data
    }


  }
  render() {
      console.log(this.state.pokedex);
    return (
    <div>
    <header>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>
          </div>
        </nav>

    </header>
      <div className="container">
        <div className="row">
        {this.state.pokedex.map((item,id)=>
         <div key={id} className="col s12 m2 ">
           <div className="card pokemon">
             <div className="card-image imageSetting" style={{backgroundImage:"url(" + require('./Pokemon-DB-master/img/'+item.id+'.gif')+ ")"}}>
             </div>
             <div className="card-content">

             <h5>HP : {item.base.HP}</h5>
                 <label>Attack : {item.base.Attack}</label><br/>
               <label> Defense : {item.base.Defense}</label>


             </div>
             <div className="card-action">
               <a href="#">{item.ename}</a>
             </div>
           </div>
         </div>
         )}
       </div>
      </div>

    </div>
    );
  }
}

export default App;

/* eslint-disable */

import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
const listImage=['https://www.w3schools.com/howto/img_nature_wide.jpg','https://www.w3schools.com/howto/img_snow_wide.jpg','https://www.w3schools.com/howto/img_lights_wide.jpg','https://www.w3schools.com/howto/img_mountains_wide.jpg']
let addressTimeout
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      viTriChot:0
    }
  }
  changeViTriChot=(index)=>{
    this.setState({
      viTriChot:index
    })
  }
  chuyenToi=()=>{
    let viTriTiepTheo=this.state.viTriChot+1
    if(viTriTiepTheo>=listImage.length) viTriTiepTheo=0
    this.setState({
      viTriChot:viTriTiepTheo
    })
  }
  quayLui=()=>{
    let viTriTiepTheo=this.state.viTriChot-1
    if(viTriTiepTheo<0) viTriTiepTheo=listImage.length-1
    this.setState({
      viTriChot:viTriTiepTheo
    })
  }
  render() {
    return (
      <div className="slideshow-container">
        {
          listImage.map((item,index)=>(
          <span>
            <div>
              <img className={this.state.viTriChot==index?'mySlidesblock fade':'mySlidesnone fade'} src={listImage[index]}></img>
              {/* {this.state.viTriChot===index?`${item}(danghien)`:item} */}
              <button className='dot' onClick={()=>this.changeViTriChot(index)}></button>
            </div>
          </span>
          )
          )
        }
        <button className='next' onClick={this.chuyenToi}>&#10095;</button>
        <button className='prev' onClick={this.quayLui}>&#10094; </button>
      </div>
    )
  }
}




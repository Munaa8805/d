import React, { Component,useState } from 'react';
import classes from './index.css'
import Video from '../../components/video'
import Scroll from '../../components/Scroll/index';
import Tab from '../../components/Tab/index';
import NewsList from"../../components/NewsList/NewsList"
import { MdAutorenew } from "react-icons/md";
import { FaFire, FaStar} from "react-icons/fa";
import { MdEventNote , MdLiveTv} from "react-icons/md";
import NewsListTv from"../../components/NewsListTv/NewsList";
import NewsListProgramme from"../../components/NewsListProgramme/NewsList";


class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {link:"www.sdasd.com"};
  }

  test=(e)=>{
    this.setState({ 
          link:e
      })
  }
 
  render() {
   
    
   
    const list={
        id:1,
        content:[<Scroll item={<NewsListTv/>}/>,<Scroll item={<NewsListProgramme test={this.test} />}/>],
        title:[(<h4><MdLiveTv/>Суваг</h4>),(<h4><MdEventNote/>Хөтөлбөр</h4>)]
    }
     return (
       <div className={classes.conta}>
      
        <Video url="http://103.14.38.107:1935/live/mn2.stream/chunklist_w224495312.m3u8"/>
        <Video url="http://103.14.38.107:1935/live/mnb.stream/chunklist_w2030693925.m3u8"/>
        
      </div>
    )
  }
}
export default Live

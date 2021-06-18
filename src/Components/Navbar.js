import React from 'react'
import { useState,useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TelegramIcon from '@material-ui/icons/Telegram';

export const Navbar = () => {

const[timer,settimer]=useState(60);

const Time=()=>{

if(timer===0){
  settimer(60);
}
else{
  setTimeout(()=>{
    settimer(timer-1);
  },1000)

}
}

useEffect(()=>{
Time();

})


    return (
        <div className="main-nav">
         <div className="content">
           <h1>HODLINFO</h1>
           <span className="topnav-span">Powered By<span className="below-content"> Finstreet</span></span>
           </div>

           <div className="content-mid">
               <button className="btn">INR<ArrowDropDownIcon/></button>
               <button className="btn">BTC<ArrowDropDownIcon/></button>
               <button  className="btn">Buy BTC</button>
           </div>
            

           <div className="content-end">
           <button className="circle-btn">{timer}</button>
             <div className="inside-btn">
             
            <button className="btn-lg"><TelegramIcon/> Connect Telegram</button>
           </div>
           <button className="circle-btn-p">
           <button className="circle-btn-c"></button>
           </button>
           </div>
            


        </div>
    )
}

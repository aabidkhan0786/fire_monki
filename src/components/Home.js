import React from 'react'
import "./styles.css"
// import save from "../Assets/save.gif"
// import link from "../Assets/link.gif"
import error1 from "../Assets/error1.gif"



const Home = () => {
  return (
    <div className='home_sec'>
      <div className='content_sec shadow-lg rounded'>
        <div className='logo my-2 text-center'>
          <span className='logo_wrapper'>
            <span className='logo_big'>f</span>ire <span className='logo_big'>m</span>onki
          </span>
        </div>
        <div className='mid_sec'>
          <div className='div_one p-3'>
            <h5 className=''><u>Shyaam</u>:</h5>
            <div className="chat_div my-1">
              <div>Heyy man!! I have lend my money to Ramu for three months, but it's more than five months
                he doesn't returned me a single penny, neither picking up my phone....
                what to do now 😤😤 </div>
            </div>
            <h5 className='mt-2'><u>Ravi</u>:</h5>
            <div className="chat_div_2 my-1">
              <div>Thank God  😌😌 I have lend money to Ramu through fire monki recently. My Money is safe 🤑🤑  </div>
            </div>
            <h5 className='mt-2'><u>Shyaam</u>:</h5>
            <div className="chat_div my-1">
              <div>What is fire monki ?? and how your money is safe 🤔🤔 </div>
            </div>
            <h5 className='mt-2'><u>Ravi</u>:</h5>
            <div className="chat_div_2 my-1">
              <div>Click here !! It will guide you. You can lend/borrow money in 3 simple steps. Its super user friendly App  🥰🥰  </div>
            </div>
            <h5 className='mt-2'><u>Shyaam</u>:</h5>
            <div className="chat_div my-1">
              <div>Thank you Ravi 🤩🤩 for introducing me to such a platform.</div>
            </div>

          </div>
          <div className='div_two'>
              <div className='msg_sec text-center my-5'>
                <h5 className=''>
                Are you a victim of such scenerio like Shyaam ?
                </h5>
                <img src={error1} alt="symbol" width="100"/>
                <h5>
                  Dont worry you are on a safe platform- <u>Fire Monki</u> 
                </h5>
                <div className='m-5'>              
                <h5  className='text-start'>Our Motto : </h5>
                 <li className='text-start'>Faith </li> 
                 <li className='text-start'>Trust </li> 
                 <li className='text-start'>Confidence</li> 
                </div>                   
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
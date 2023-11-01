import React from 'react'
import logo from '../assets/logo.png'
import Header from './Header'
import box1 from '../assets/{place image here}.png'
import box2 from '../assets/{place image here} (1).png'
import boxr2 from '../assets/{place image here} (3).png'
import { Hero } from './Hero'
import { Aside } from './Aside'
import { Footer } from './Footer'
import  box3  from '../assets/{place image here} (4).png'
import  box4  from '../assets/{place image here} (2).png'
import train from '../assets/cards (1).png'
import graytrain from '../assets/cards.png'
import madlad from '../assets/madlads.jpg'
import madlad2 from '../assets/madlads2.jpeg'
import degod from '../assets/degods.jpeg'
import degod2 from '../assets/degods2.png'
import icons from '../assets/icons.png'
import start from '../assets/label.png'
import start1 from '../assets/label (1).png'
import start2 from '../assets/label 1.png'
import start3 from '../assets/label (2).png'
import '../App.css'
import {BsDiscord} from 'react-icons/bs'
import {BiLogoTelegram} from 'react-icons/bi'
import {AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import {FaRedditAlien} from 'react-icons/fa'

  
const Landpage = () => {
  return (
    <div className='landpage'>
        <Header>
            <img src={logo} alt='logo' />
            <ul>
                <li>list</li>
                <li>list</li>
                <li>list</li>
                <li>list</li>
            </ul>
            <button>Button</button>
        </Header>
        <Hero>
            <img className='box-left' src={box1} alt="white box" />
            <div className='center-hero'>
                <div className='gray-box'>
                    <img className='box-left1' src={box3} alt="gray box one" />
                    <img className='box-left2' src={box4} alt="gray box one" />
                </div>
                <div className='text-box'>
                    <h2>Create, Sell & Collect Your Own Creative NFT</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button>Button</button>
                </div>
                <div className='white-box'>
                    <img className='box-right1' src={box2} alt="second white box" />
                    <img className='box-right2' src={boxr2} alt="third white box" />
                </div>
            </div>
        </Hero>
        <Aside>
            <div>
                <div className='summary'>
                    <h2>Project Summary</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='train'>
                    <img src={train} alt="Box train" />
                    <img src={graytrain} alt="Box train" />
                </div>
                <div className='summary parallax'>
                    <div className='parallax-text'>
                        <h2>Three Key Pointers. Side Parallax Scroll</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className='parallax-image'>
                        <img src={madlad} alt="Your text here" />
                        <img src={madlad2} alt="Your text here" />
                    </div>
                </div>

                <div className='feature'>
                    <div className='feature-text'>
                        <h2>Two Key Features</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ur.</p>
                        <button>Button</button>
                    </div>
                    <div className='feature-image'>
                        <img className='img1' src={degod} alt='first card'/>
                        <img src={degod2} alt='first card'/>
                    </div>
                </div>
            </div>
                
                <div className='summary participate'>
                    <h1>How to Participate</h1>
                    <div className='button'>
                        <button className='black'>Get from Digital eyes</button>
                        <button>Get from Digital eyes</button>
                        <button>Get from Digital eyes</button>
                        <button>Get from Digital eyes</button>
                    </div>
                </div>
                <div className='roadmap'>
                    <div className='events'>
                        <div className='up'>
                            <div className='event-tag'>
                                <div>
                                    <img src={start} alt='roadmap start' />
                                    <h5>Q1 2023</h5>
                                    <p>/Roadmap 1</p>
                                    <p>/Roadmap 2</p>
                                    <p>/Roadmap 3</p>
                                </div>
                            </div>
                            <div className='event-tag'>
                                <div>
                                    <img src={start1} alt='roadmap start' />
                                    <h5>Q1 2023</h5>
                                    <p>/Roadmap 4</p>
                                    <p>/Roadmap 5</p>
                                    <p>/Roadmap 6</p>
                                </div>
                            </div>
                        </div>
``
                        <div className='down'>
                            <div className='event-tag'>
                                <div>
                                    <img src={start2} alt='roadmap start' />
                                    <h5>Q1 2023</h5>
                                    <p>/Roadmap 7</p>
                                    <p>/Roadmap 8</p>
                                    <p>/Roadmap 9</p>
                                </div>
                            </div>
                            <div className='event-tag'>
                                <div>
                                    <img src={start3} alt='roadmap start' />
                                    <h5>Q1 2023</h5>
                                    <p>/Roadmap 10</p>
                                    <p>/Roadmap 11</p>
                                    <p>/Roadmap 12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="community">
                    <div><p className='join'>Join <span>The Community</span></p></div>
                    <div><BsDiscord /><p> Discord</p> </div>
                    <div><BiLogoTelegram/><p> Telegram</p></div>
                    <div><AiOutlineTwitter /><p> Twitter</p></div>
                    <div><AiFillYoutube /><p> Youtube</p></div>
                    <div><FaRedditAlien /><p> Reddit</p></div>
                </div>
        </Aside>
        <Footer>
            <div className='summary footer'>
                <div>
                    <h6>Product</h6>
                    <p>Blueprint</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Versions</p>
                    <p>Invest</p>
                </div>
                <div>
                    <h6>Company</h6>
                    <p>About</p>
                    <p>Partners</p>
                    <p>Careers</p>
                    <p>Medias</p>
                    <p>Contacts</p>
                </div>
                <div>
                    <h6>Support</h6>
                    <p>Help Center</p>
                    <p>Privacy Policy</p>
                    <p>Chat</p>
                    <p>Callback</p>
                    <p>Create a ticket</p>
                </div>
                <div>
                    <h6>Legal</h6>
                    <p>Cookies</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Services</p>
                    <p>Report</p>
                    <p>More</p>
                </div>
            </div>
            <div className='footer2'>
                <p>© 2022 NFT Landing</p>
                <img src= {logo} alt='footer-logo' />
                <img src={icons} alt='icon' />
            </div>
        </Footer>
    </div>
  )
}

export default Landpage
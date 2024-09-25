import React, { useState } from 'react';
import '../Styles/Nav_bar.css';





function Nav_bar (){
  const [isVisible, setIsVisible] = useState(false);
  const toggleSidebar = () => {
    setIsVisible(!isVisible);
};
    return(
      
    <div>
      <header >

      </header>
      <body>
          <nav>
                <ul className={`sidebar ${isVisible ? 'show' : ''}`}>
                
                 <li> <a href="#">Coding2go</a></li>
                 <li> <a href="#">Blog</a></li>
                 <li> <a href="#">Products</a></li>
                 <li> <a href="#">About</a></li>
                 <li> <a href="#">Forum</a></li>
                 <li> <a href="#">Login</a></li>
            </ul>
            <ul>
                 <li> <a href="#">Coding2go</a></li>
                 <li> <a href="#">Blog</a></li>
                 <li> <a href="#">Products</a></li>
                 <li> <a href="#">About</a></li>
                 <li> <a href="#">Forum</a></li>
                 <li> <a href="#">Login</a></li>
                 <li onClick={toggleSidebar}> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>
          </nav>
      </body>


    </div>
    

    );
    

}



export default Nav_bar;
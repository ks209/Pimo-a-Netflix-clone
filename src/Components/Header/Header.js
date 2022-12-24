

import './Header.css';

function Header(){
    return <header>
        <div className='header_inner_shadow'></div>
        <div className="header_billboard">
          <div className="Billboard">
               <img alt='billboard' className='bill' src='https://www.online-station.net/wp-content/uploads/2021/05/TS_Logo_04.19.21_Master_2.png'/>
               </div>
               <h4 className='Des'>"Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions."</h4>
           <div className='header_button'>
            <button className='button play'>► Play</button>
            <button className='button info'>ⓘ More Info</button>
          </div>
        </div>

    </header>
}

export default Header;
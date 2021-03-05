import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <Link to='/' className='logo'>
          {/* <svg
            width={40}
            height={40}
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.58582 2H2V8.58582L8.58582 2ZM10 3.41418L7.41418 6L10 8.58582V3.41418ZM6 7.41418L2 11.4142V20H10V11.4142L6 7.41418ZM12 13.4142V20H18.5858L12 13.4142ZM20 18.5858L12.4142 11L20 3.41418V18.5858ZM12 2V8.58582L18.5858 2H12ZM1 0H21H22V1V21V22H21H1H0V21V1V0H1Z'
              fill='black'
            />
          </svg> */}
          <svg
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M11 11H17.5858L11 17.5858V11Z' fill='black' />
            <path d='M16.4142 15L19 12.4142V17.5858L16.4142 15Z' fill='black' />
            <path
              d='M11 20.4142L15 16.4142L19 20.4142V29H11V20.4142Z'
              fill='black'
            />
            <path d='M21 29V22.4142L27.5858 29H21Z' fill='black' />
            <path d='M21.4142 20L29 27.5858V12.4142L21.4142 20Z' fill='black' />
            <path d='M21 17.5858V11H27.5858L21 17.5858Z' fill='black' />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM9 9V31H31V9H9Z'
              fill='black'
            />
          </svg>
          <br />
          Anastasia Kalenik
        </Link>
        <nav>
          <NavLink exact activeClassName='active-nav-link' to='/'>
            Works
          </NavLink>
          <NavLink exact activeClassName='active-nav-link' to='/about'>
            About
          </NavLink>
          <NavLink exact activeClassName='active-nav-link' to='/contact'>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

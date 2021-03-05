import { Link } from 'react-router-dom';

export const NoMatch = () => {
  return (
    <div className='container'>
      <h1>NoMatch 404</h1>
      <p>
        <Link to='/'>Home page</Link>
      </p>
    </div>
  );
};

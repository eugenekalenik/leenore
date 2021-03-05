import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { workList } from '../constants';

export const Work = () => {
  // @ts-ignore
  const { id } = useParams();
  const { img, title, description, backgroundColor } = workList.find(
    (work) => work.id === id,
  );

  return (
    <div className='work' style={{ backgroundColor, textAlign: 'center' }}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className='col'>
            <img src={img} alt={title} />
          </div>
        </div>
        <br />
        <Link to='/' className='btn'>
          &larr; All Works
        </Link>
      </div>
    </div>
  );
};

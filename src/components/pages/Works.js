import { Link } from 'react-router-dom';
import { workList } from '../../constants';

export const Works = () => {
  return (
    <div className='works'>
      {workList.map(({ id, title, description, backgroundColor, img }) => {
        return (
          <div
            key={id}
            style={{
              backgroundColor,
              padding: '3rem 0',
              borderBottom: '1px solid #eeeeee',
              textAlign: 'center',
            }}>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className="work-img" style={{backgroundImage: `url(${img})`}}></div>
                  {/* <img src={img} alt={title} /> */}
                </div>
                <div className='col'>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link to={`/works/${id}`} className='btn'>
                    Show more &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

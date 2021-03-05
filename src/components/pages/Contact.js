import { PageHeader } from '..';

export const Contact = () => {
  return (
    <>
      <PageHeader title='Contact' />
      <main>
        <div className='container'>
          <p className="lead">
            You can find me in this list of social media:
          </p>
          <ul>
            <li>
              <a href='mailto:email@gmail.com'>email@gmail.com</a>
            </li>
            <li>
              <a href='tel:(555) 555-55-55'>(555) 555-55-55</a>
            </li>
            <li>
              <a href='/'>Instagram</a>
            </li>
            <li>
              <a href='/'>Facebook</a>
            </li>
            <li>
              <a href='/'>Telegram</a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

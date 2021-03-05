import { PageHeader } from '..';

export const About = () => {
  return (
    <>
      <PageHeader title='About' />
      <main>
        <div className='container'>
          <h2>Hello!</h2>
          <p className='lead'>
            My name is <strong>Anastasia Kalenik</strong> and I am a{' '}
            <strong>designer</strong> from Minsk, Belarus. Currently I'm a
            student of the Minsk Art Colledge and my specialization is "Bla
            bla".
          </p>
          <h3>My key skills</h3>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma.com</li>
            <li>Photography</li>
          </ul>
        </div>
      </main>
    </>
  );
};

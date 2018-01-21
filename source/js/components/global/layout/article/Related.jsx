import React from 'react';

const Related = () => {
  return (
    <div className='related'>
      <h3>You may also dig:</h3>
      <ul>
        <li>
          <picture>
            <source srcSet='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf2.jpg' media='(max-width: 413px)' />
            <source srcSet='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/768x577/surf2.jpg' media='(max-width: 3000px)' />
            <img src='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf2.jpg' alt='surf' />
          </picture>
          <h4>Very cool title for a very, very cool article</h4>
        </li>
        <li>
          <picture>
            <source srcSet='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf2.jpg' media='(max-width: 413px)' />
            <source srcSet='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/768x577/surf2.jpg' media='(max-width: 3000px)' />
            <img src='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf2.jpg' alt='surf' />
          </picture>
          <h4>Very cool title for a very, very cool article</h4>
        </li>
      </ul>
    </div>
  );
};

export default Related;

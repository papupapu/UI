import React from 'react';
import PropTypes from 'prop-types';

const PicturePropTypes = {
  cssClassName: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  srcSetList: PropTypes.instanceOf(Array),
};

const PictureDefaultProps = {
  cssClassName: '',
  imgSrc: '',
  imgAlt: '',
  srcSetList: [],
};

const Picture = (
  {
    cssClassName,
    imgSrc,
    imgAlt,
    srcSetList,
  }
) => {
  const pictureClassName = cssClassName && cssClassName !== '' ? cssClassName : null;
  return (
    <picture
      className={ pictureClassName }
    >
      {
      srcSetList && srcSetList.length > 0 &&
        srcSetList.map(
          (el, index) => {
            const i = index;
            return (
              <source
                key={ `${ i }-${ imgAlt }` }
                srcSet={ el.imgSrc }
                media={ el.mediaQuery }
              />
            );
          }
        )
    }
      <img
        src={ imgSrc }
        alt={ imgAlt }
      />
    </picture>
  );
};

Picture.propTypes = PicturePropTypes;
Picture.defaultProps = PictureDefaultProps;
export default Picture;

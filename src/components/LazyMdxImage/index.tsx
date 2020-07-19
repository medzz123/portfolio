import React from 'react';

const Image = ({ alt, src }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const styles = {
    lqip: {
      filter: 'blur(10px)',
      opacity: 1,
    },
  };

  if (imageLoaded) {
    styles.lqip.opacity = 0;
  }

  return (
    <>
      <img
        src={require(`../../content/assets/${src}?lqip`)}
        alt={alt}
        style={styles.lqip}
      />

      <img
        src={require(`../../content/assets/${src}`)}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        style={{ width: '100%' }}
      />
    </>
  );
};

export default Image;

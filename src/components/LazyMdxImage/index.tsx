import React from 'react';

const Image = ({ alt, src }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const styles = {
    lqip: {
      filter: 'blur(10px)',
      opacity: 1,
      width: '100%',
    },
  };

  if (imageLoaded) {
    styles.lqip.opacity = 0;
  }

  return (
    <div style={{ position: 'relative' }}>
      <img src={`/${src}?lqip`} alt={alt} style={styles.lqip} />

      <img
        src={`/${src}`}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        style={{ width: '100%', position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default Image;

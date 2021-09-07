import React from 'react';
import styles from '../../styles/Home.module.css'
import stylesMobile from '../../styles/Home2.module.css'
import Image from 'next/image'

export function Card({img, text}) {
  const [responsiveComponent, setResponsiveComponent] = React.useState({});
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    if (!loaded) {
      const sizeView = screen.width;
      console.log(sizeView);

      sizeView <= 450 ? setResponsiveComponent(stylesMobile) : setResponsiveComponent(styles);
      
      setLoaded(true);
    }

  }, [loaded])

  return (
    <div className={responsiveComponent.newsCard}>
      <strong>
        {text}
      </strong>
      {img &&
        <Image
          src={img}
          width={`${responsiveComponent==styles ? 150 : 110}`}
          height={`${responsiveComponent==styles ? 200 : 160}`}
        />
      }
    </div>
  )
}
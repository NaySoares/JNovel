import React from 'react';
import styles from '../../styles/Home.module.css'
import stylesMobile from '../../styles/Home2.module.css'
import Image from 'next/image'
import Link from 'next/link'
import list from '../list.json'

export function Button({text, img}) {
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
    <Link href={list[1].discordLink}>
      <button className={responsiveComponent.buttonServer}>
        <p>{text}</p>
        {img && responsiveComponent==styles &&
          <Image
            src={img}
            width={28}
            height={20}
          />
        }
      </button>
    </Link>
  )
}
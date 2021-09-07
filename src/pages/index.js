import Head from 'next/head'
import React from 'react';
import styles from '../../styles/Home.module.css'
import stylesMobile from '../../styles/Home2.module.css'

import { ScreenInvite } from '../components/ScreenInvite';
import { ScreenNews } from '../components/ScreenNews';

export default function Home() {
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
    <div className={styles.container}>
      <Head>
        <title>JNovel | ePubs</title>
        <meta name="description" content="Light Novel em epub, baixe agora!" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <main className={responsiveComponent.main}>
        <ScreenInvite/>
        <ScreenNews/>
      </main>
    </div>
  )
}

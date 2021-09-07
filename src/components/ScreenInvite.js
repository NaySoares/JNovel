import React from 'react';
import styles from '../../styles/Home.module.css'
import stylesMobile from '../../styles/Home2.module.css'

import discordIcon from '../assets/discordIconWhite.png';

import { Button } from './Button'


export function ScreenInvite() {
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
    <div className={responsiveComponent.server}>
      <header className={responsiveComponent.headerServer}>
        <h1>JNovel</h1>
      </header>
      <div className={responsiveComponent.content}>
        <span>
          Light Novels em ePub, acesse nosso servidor no Discord
        </span>
        <Button text="ENTRAR" img={discordIcon}/>
      </div>
    </div>
  )
}
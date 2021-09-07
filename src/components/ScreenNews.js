import React from 'react';
import styles from '../../styles/Home.module.css'
import stylesMobile from '../../styles/Home2.module.css'

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import list from '../list.json'

import { Card } from './Card';

export function ScreenNews() {
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
    <div className={responsiveComponent.news}>
      <header className={responsiveComponent.newsHeader}>
        <h2>
          Últimos Lançamentos
        </h2>
      </header> 
      {responsiveComponent==styles ?
      <div className={responsiveComponent.newsContent}>
        <Card text={list[0].img1} img={img1}/>
        <Card/>
        <Card text={list[0].img2} img={img2}/>
        <Card/>
        <Card/>
        <Card text={list[0].img3} img={img3}/>
        <Card/>
        <Card text={list[0].img4} img={img4}/>
      </div>
      :
      <div className={responsiveComponent.newsContent}>
        <Card text={list[0].img1} img={img1}/>
        <Card text={list[0].img2} img={img2}/>
      </div>
      }
    </div>
  )
}
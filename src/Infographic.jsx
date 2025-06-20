import React, { useEffect, useState } from "react";
import * as styles from "./infographic.module.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const Infographic = ({ data }) => {
  config.autoAddCss = false;

  const [isXxxl, setIsXxxl] = useState(window.matchMedia('(min-width: 1400px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1400px)');

    const handleChange = (e) => {
      setIsXxxl(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className={styles.infographic}>
      {data
        .sort((first, last) => first.sort - last.sort)
        .map((item) => {

          const shouldAlignLeft = isXxxl && data.length > 6;
          
          return (
            <div className={`${styles.item} ${shouldAlignLeft ? styles['item__alignLeft'] : ''}`} key={item.id}>
              <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icon} size="2em" />
                </div>
                <div className={styles.text__container}>
                  <div className={styles.text}>
                    <span className={styles.number}>{item.number}</span>
                    <span className={styles.title}>{item.about}</span>
                  </div>
                </div>
            </div>
          );
        })}
    </div>
  );
};

export default Infographic;

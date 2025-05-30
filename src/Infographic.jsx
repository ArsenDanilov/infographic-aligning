import React from 'react';
import * as styles from './infographic.module.scss';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const Infographic = ({data}) => {
  config.autoAddCss = false;
  return (
    <div className={styles.infographic}>
      {data
        .sort((first, last) => first.sort - last.sort)
        .map(item => {
          return (
            <div className={styles.item} key={item.id}>
              <div className={styles.icon}>
                {/* <FontAwesomeIcon icon={icon} size="2em" /> */}
                <FontAwesomeIcon icon={['fas', item.icon]} size="2em" />
              </div>
              <div className={styles.text}>
                <span className={styles.number}>{item.number}</span>
                <span className={styles.title}>{item.about}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Infographic;
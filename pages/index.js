import styles from '../styles/Home.module.css';
import { useState } from 'react';

function renderAlert(showError, limitBuyText, maximum) {
  if (showError) {
    return limitBuyText
      ? `( 已超出${limitBuyText} )`
      : `已超出購買數量，上限${maximum}`;
  }
  if (limitBuyText) {
    return `( ${limitBuyText} )`;
  }
  return '';
}

export default function Home() {
  const [showError, setShowError] = useState(false);
  const [limitBuyText, setLimitBuyText] = useState('限購 5 件'); // 限購 5 件
  const [maximum, setMaximum] = useState(5);

  return (
    <div className={styles.container}>
      {renderAlert(showError, limitBuyText, maximum)}
    </div>
  );
}

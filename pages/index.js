import styles from '../styles/Home.module.css';
import { useState } from 'react';

function renderAlert(showError, productLimitBuyText, maximumOfSinglePurchase) {
  if (showError) {
    return productLimitBuyText
      ? `( 已超出${productLimitBuyText} )`
      : `已超出購買數量，上限${maximumOfSinglePurchase}`;
  }
  if (productLimitBuyText) {
    return `( ${productLimitBuyText} )`;
  }
  return '';
}

export default function Home() {
  const [showError, setShowError] = useState(false);
  const [productLimitBuyText, setProductLimitBuyText] = useState('限購 5 件'); // 限購 5 件
  const [maximumOfSinglePurchase, setMaximumOfSinglePurchase] = useState(5);

  return (
    <div className={styles.container}>
      {renderAlert(showError, productLimitBuyText, maximumOfSinglePurchase)}
    </div>
  );
}

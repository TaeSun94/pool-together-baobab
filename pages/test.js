import { useState } from 'react';

import styles from '../styles/Test.module.css';
import Modal from '../components/Modal/Modal';

function Test() {
  const [isModal, setIsModal] = useState(false);
  const [account, setAccount] = useState(undefined);
  function handlerModal() {
    setIsModal(!isModal);
  }
  async function handlerKaikas() {
    const accounts = await klaytn.enable();
    setAccount(accounts[0]);
  }

  return (
    <div className={styles.container}>
      {/* <button className={styles.btn} onClick={handlerModal}>Connect Wallet</button>
      {
        isModal && (
          <Modal handlerModal={handlerModal} />
        )
      } */}
      {
        isModal ? (
          <div>
            {
              klaytn && (  
                  account ? (
                    <p>{account} </p>
                  ) : (
                    <button className={styles.btn} onClick={handlerKaikas}>Connect to Kaikas</button>
                  )
              )
            }
          </div>
        ) : (
          <button className={styles.btn} onClick={handlerModal}>Connect Wallet</button>
        )
      }
    </div>
  )
}

export default Test;

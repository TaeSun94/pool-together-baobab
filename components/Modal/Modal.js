import { useRef, useState, useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ handlerModal }) => {
  // const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef();

  // function onClose() {
  //   handlerModal();
  // }
  
  // useEffect(() => {
	// 	const handleOutsideModal = (e) => {
	// 		if (isOpen && !modalRef.current.contains(e.target)) onClose();
	// 	};
		
	// 	document.addEventListener('click', handleOutsideModal);

	// 	return () => document.removeEventListener('click', handleOutsideModal);
  // }, [isOpen, onClose]);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer} ref={modalRef}>
        
      </div>
    </div>
  )
}

export default Modal;

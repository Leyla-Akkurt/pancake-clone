import { useState } from 'react';
import { useRef } from 'react';

export function useButton() {
  const [btnState, setBtnState] = useState(true);
  const bodyaRef = useRef(null);
  const bodybRef = useRef(null);
  const headTextRef = useRef(null);
  const [headText, setHeadText] = useState('');

  const handleClick = () => {
    setBtnState((btnState) => !btnState);

    if (btnState) {
      bodybRef.current.style.display = 'none';
      bodyaRef.current.style.display = 'grid';
      setHeadText((headTextRef.current.innerText = ' Syrup Pools'));
    } else {
      bodyaRef.current.style.display = 'none';
      bodybRef.current.style.display = 'grid';
      setHeadText((headTextRef.current.innerText = ' Farms'));
    }
    console.log(btnState);
  };

  return {
    handleClick,
    bodyaRef,
    bodybRef,
    headTextRef,
  };
}

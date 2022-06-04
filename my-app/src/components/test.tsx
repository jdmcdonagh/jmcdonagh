import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useEffect, useRef, useState } from 'react';
import sr from '../utils/sr';
import { srConfig } from '../config';

export const Test = ({...props}: any): any => {
  const [showMessage, setShowMessage] = useState(false);
  const [show, setShow] = useState(false);

  const fadeClass = props.isHome ? 'fadedown' : '';
  const revealTitle = useRef<any>(null);

  useEffect(() => {
    sr!.reveal(revealTitle.current, srConfig({}));
  }, []);

  useEffect(() => {
    setTimeout(()=>setShow(true), 1000);
    console.log(show);
  }, [])

  return (
    <div>
      <button onClick={() => setShowMessage(true)}>Show Message</button>
      <CSSTransition in={show} timeout={100} classNames={'fadedown'} unmountOnExit>
        <p style={{background: 'blue'}}>Auto Close</p>
      </CSSTransition>
      <p ref={revealTitle} style={{background: 'red'}}>Auto Close</p>
      <CSSTransition
        in={showMessage}
        timeout={100}
        classNames="fadedown"
        unmountOnExit
      >
        <p
          style={{background: 'yellow'}}
        >
          <button onClick={() => setShowMessage(false)}>
            Close
          </button>
        </p>
      </CSSTransition>
    </div>
  );
}

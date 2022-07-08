import React from 'react';
// import styled from  'styled-components';
// import './Button.css';
import styles from './Button.module.css';

{/*double back ticks after button below, 'tagged temp lit'  the button now becomes a method on the styled object
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 what we pass between the backticks end up in the button method will return a new button component
 styled packaged has tags for all html elements */ }


{/* BUTTON STYLING WHEN USING STYLED OBJECT FROM COMPONENTS */}

// const Button = styled.button`
//   font: inherit;
//   width: 100%;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//
// @media (min-width: 768px){
// width: auto;
// }
//
//
// &:focus {
//   outline: none;
// }
//
// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
//
// `;

{/* METHOD BELOW IS STANDARD JSX WITH TYPICAL CSS STYLESHEET */}

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };


{/* METHOD BELOW IS BEING USED WITH MODULES- SLIGHTLY DIFFERENT IMPLEMENTATION - NOTICE CLASSNAME */}

const Button = props => {
    return (
        <button type={props.type} className={styles.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;

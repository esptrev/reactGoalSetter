import React, {useState} from 'react';
// import styled from "styled-components";
import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;
//
//
// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'red' : 'black')};
// }
//
// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//   background: ${props => (props.invalid ? '#f6d2ea' : 'transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }
//
// & input:focus {
//   outline: none;
//   background: #f6f4f5;
//   border-color: #8b005d;
// }
//
// `;

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };
    {/* CODE BLOCK BELOW FOR TAGGED TEMP LIT AND STYLE OBJECTS */}
    // return (
    //     <form onSubmit={formSubmitHandler}>
    //         {/* statement below combines temp literal with ternary operator for conditional*/}
    //         <FormControl invalid={!isValid}>
    //             <label >Course Goal</label>
    //             <input type="text" onChange={goalInputChangeHandler}/>
    //         </FormControl>
    //         <Button type="submit">Add Goal</Button>
    //     </form>
    // );

    return (
        <form onSubmit={formSubmitHandler}>
            {/* statement below combines temp literal with ternary operator for conditional*/}
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label >Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;

import React, { useState } from 'react';

import './index.scss';

const Parentheses = () => {
    const [inputValue, setInputValue] = useState('');
    const [listValue, setListValue] = useState([]);
    
    const [response, setResponse] = useState('');

    const changeInput = (e) => {
        setInputValue(e.target.value);
    }

    const errorIndex = () => {
        const inputArr = inputValue.split('');
        let index = -1;

        for(let i = 0; i < inputArr.length; i++){
            if(inputArr[i] !== '(' && inputArr[i] !== null){
                index = i + 1;
                break;
            }
            if(inputArr[i] === '('){
                for(let j = i + 1; j < inputArr.length; j++){
                    if(inputArr[j] === ')'){
                        inputArr[i] = null;
                        inputArr[j] = null;
                        index = i + 1; 
                        break;
                    }
                }
                if(index !== i + 1){
                    index = i + 1;
                    break;
                }
            }
        }

        return index;
    }

    const verifyParentheses = () => {
        listValue.splice(0);

        let isError = false;
        if(inputValue.length === 0) return setResponse('Preencha o campo');

        if(inputValue[0] === ")" || inputValue[inputValue.length - 1] === "(" || inputValue.length % 2 !== 0 ){
            isError = true;
        }
        
        for(let i = 0; i < inputValue.length; i++){
            if(inputValue[i] !== '(' && inputValue[i] !== ')'){
                isError = true;
                break;
            }
            if(inputValue[i] === '('){
                listValue.push(inputValue[i]);
                setListValue(listValue);
            } else {
                if(listValue.length === 0){
                    isError = true;
                    break;
                }
                listValue.splice(listValue.length - 1); 
                setListValue(listValue);
            }
        }

        if(isError || listValue.length !== 0){
            const errorPosition = errorIndex();
            setResponse(`ERRADO (${errorPosition})`);
        } 
        else setResponse('CERTO (-1)');
    }

    return(
        <>
            <div className="inputContainer">
                <label>Parenteses</label>
                <input
                    type="text"
                    name="parenthesesInput"
                    placeholder="Exemplo: '( )( )( )( )'"
                    onChange={changeInput}
                >
                </input>
                <button onClick={() => verifyParentheses()}>
                    VERIFICAR
                </button>
                { response !== '' && (
                    <p
                        style={response.indexOf('ERRADO')  !== -1 ? {backgroundColor: 'rgb(221, 87, 87)'} : {backgroundColor: 'rgb(93, 196, 84)'}}
                    >{response}</p>
                ) }
            </div>
        </>
    )
}

export default Parentheses;
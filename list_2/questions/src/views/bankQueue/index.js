import React, { useState, useEffect } from 'react';
import { Input, Label, Row, Badge } from 'reactstrap';
import jsonTest from '../../input_test/bank_clients.json';

import './index.scss';
import { firstProcessInQueue, defineRow, numberUsersByPriority } from './functions/main.js';
import QueueScreen from './components/queueScreen';

const Bank = () => {
    const [selectValue, setSelectValue] = useState([
        {label: "Não cliente sem prioridade.", value: '0'},
        {label: "Cliente do banco sem prioridade.", value: '1'},
        {label: "Não cliente com prioridade.", value: '2'},
        {label: "Cliente com prioridade.", value: '3'},
    ])
    const [inputValue, setInputValue] = useState(jsonTest);
    const [row, setRow] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [user, setUser] = useState({
        id: "",
        name: "",
        priority: '0'
    });

    const changeClientSelect = (e) => {
        setUser({
            name: user.name,
            priority: e.target.value 
        })
    }

    const changeInput = (e) => {
        setUser({
            name: e.target.value,
            priority: user.priority
        })
    }

    const addUserInQueue = () => {
        setUser({
            name: user.name,
            priority: user.priority
        })
        changeInput({target: {value: user.name}});
        if(user.name === '') return;
        user.id = (inputValue.length + 1).toString();
        inputValue.push(user);
        setInputValue(inputValue);
        newUserInQueue();
    }

    const newUserInQueue = async () => {
        const lists = await firstProcessInQueue(inputValue);
        const lessList = await numberUsersByPriority(lists);
        const newRow  = await defineRow(lists, lessList);
        
        if(newRow.length - 6 < 0){
            setRemaining(0);
        } else {
            setRemaining(newRow.length - 6);
        }
        
        setRow(newRow); 
    }

    const meetUser = () => {
        let newRow = Array.from(row);
        inputValue.map( (userInQueue, index) => {
            if(userInQueue.id === newRow[0]?.id){
                inputValue.splice(index, 1);
            }
        })
        setInputValue(inputValue);
        newRow.splice(0, 1);
        setRow(newRow);
        if(newRow.length - 6 < 0){
            setRemaining(0);
        } else {
            setRemaining(newRow.length - 6);
        }
    }

    useEffect(() => {
        if(row.length === 0 && inputValue.length !== 0){
            console.log("AS");
            newUserInQueue();
        }
    }, [row])

    return(
        <div className="banckContainer">
            <QueueScreen
                lists={row}
                remaining={remaining}
                meet={() => meetUser()}
            />
            <Badge color="dark">{`Restam ${remaining} pessoas na fila.`}</Badge>
            <div className="inputContainer">
                <label>FILA DO BANCO</label>
                <input
                    type="text"
                    name="bankInput"
                    placeholder="Digite o seu nome"
                    onChange={(e) => changeInput(e)}
                />
                <div className="selectContainer">
                    <Input 
                        type="select"
                        name="select"
                        id="select"
                        onChange={(e) => changeClientSelect(e)}
                        defaultValue={4}
                    >
                        <option value={4} disabled>selecione uma opção</option>
                        {
                            selectValue.map( role => {
                                return (
                                    <option value={role.value}>{role.label}</option>
                                )
                            })
                        }
                    </Input>
                </div>
                <button onClick={() => addUserInQueue()}>
                    Entrar na fila
                </button>
            </div>
        </div>
    )
}

export default Bank;
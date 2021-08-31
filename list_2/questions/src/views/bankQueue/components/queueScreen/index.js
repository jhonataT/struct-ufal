import React, { useState, useEffect } from 'react';
import { Table, Badge, Button } from 'reactstrap';

import './index.scss';

const QueueScreen = (props) => {
    const [counterRow, setCounterRow] = useState([1,2,3,4,5,6])

    return (
        <div className="rowContainer">
            <Table>
                <thead>
                    <tr>
                        <th>Ordem</th>
                        <th>Nome</th>
                        <th>ID</th>
                        <th>Prioridade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {
                    counterRow.map((count, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{props.lists[index]?.name || '-'}</td>
                                    <td>{props.lists[index]?.id >= 0 ? props.lists[index]?.id : '-'}</td>
                                    <td>{props.lists[index]?.priority || '-'}</td>
                                    <td>
                                        {
                                            index === 0 ? (
                                                <Button size="sm" style={{padding: '0', backgroundColor: 'transparent', border: '0'}} onClick={props.meet}>
                                                    <Badge style={{backgroundColor: 'rgba(82, 253, 14, 0.35)'}}>Atendimento</Badge>
                                                </Button>
                                            ) : (
                                                <Button size="sm" style={{padding: '0', backgroundColor: 'transparent', border: '0'}}>
                                                    <Badge style={{backgroundColor: 'rgba(249, 253, 14, 0.289)'}}>Aguardando</Badge>
                                                </Button>
                                            )
                                        }
                                        
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
                
            </Table>
        </div>
    )
} 

export default QueueScreen;
import React from 'react'
import Input from './Input'

type State = {
    nome: string,
    email: string
}

type Action =
    | { type: 'setName', payload: string }
    | { type: 'setEmail', payload: string };

function reducer(state: State, action: Action) {
    if (action.type === 'setName') {
        return {
            ...state,
            nome: action.payload
        }
    } else if (action.type === 'setEmail') {
        return {
            ...state,
            email: action.payload
        }
    } else {
        return state
    }
}

const Form = () => {
    const [state, dispatch] = React.useReducer(reducer, {
        nome: '',
        email: '',
    });

    React.useEffect(() => {
        console.log(state);
    }, [state]);


    return (
        <div>
            <h2>Formulário</h2>
            <Input
                label="Nome"
                id="nome"
                onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
                value={state.nome}
            />
            <Input
                label="Email"
                id="email"
                type="email"
                onChange={(e) => dispatch({ type: 'setEmail', payload: e.target.value })}
                value={state.email}
            />
        </div>
    )
}

export default Form
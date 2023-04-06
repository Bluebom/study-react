import React from 'react';

interface Produtos {
    id: number
    nome: string
    preco: string
}

interface Props {
    obj: Produtos
}

const Features: React.FC<Props> = ({obj}) => {
    return (
        <div>
            <h1>{obj.nome}</h1>
        </div>
    );
};

export default Features;

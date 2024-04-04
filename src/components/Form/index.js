import React, { useState } from "react";
import * as C from "./styles";
import Grid from "../Grid";
import FormPix from "../FormPix";

const Form = ({handleAdd, transactionsList, setTransactionsList}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);
    const [isTransference, setTransference] = useState(true);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleFocus = (event) => {
        event.target.select();
    };

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Os meses começam em 0, então adicionamos 1.
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
    
        return `${day}/${month}/${year} ${hours}:${minutes}`;
      };

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const currentDate = new Date();

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: parseFloat(amount.replace(',','.')),
            expense: isExpense,
            transference: isTransference,
            dateTime: formatDate(currentDate),
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} placeholder="Insira o motivo da Transição" onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input 
                        value={amount}
                        onFocus={handleFocus}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input 
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input 
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>
                <C.RadioGroup>
                    <C.Input 
                        type="radio"
                        id="rTransf"
                        defaultChecked
                        name="group2"
                        onChange={() => setTransference(!isTransference)}
                    />
                    <C.Label htmlFor="rTransf">Transferência</C.Label>
                    <C.Input 
                        type="radio"
                        id="rPix"
                        name="group2"
                        onChange={() => setTransference(!isTransference)}
                    />
                    <C.Label htmlFor="rPix">Pix</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>Adicionar</C.Button>
            </C.Container>
            {isTransference === false ? (
                <FormPix />
            ) : null}
            <Grid itens={transactionsList} setItens={setTransactionsList}/>
        </>
    );
};

export default Form;
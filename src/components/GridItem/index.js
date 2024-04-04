import React from "react";
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {

    const formatToCurrency = (value) => {
        // Converte o valor em uma representação monetária formatada
        return parseFloat(value).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            });
    };

    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{formatToCurrency(item.amount)}</C.Td>
            <C.Td>{item.dateTime}</C.Td>
            <C.Td alignCenter>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color="red" />
                ) : (
                    <FaRegArrowAltCircleUp color="green" />
                )}
            </C.Td>
            <C.Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)} />
            </C.Td>
        </C.Tr>
    );
};

export default GridItem;
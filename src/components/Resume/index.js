import React from "react";
import * as C from "./styles";
import ResumeItem from "../ResumeItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
    const totalColor = (value) => {
        const aux = value.toString().replace('R$ ','');
        const valor = parseFloat(aux);

        if(valor !== 0.0){
            if(valor > 0.0){
                return "green";
            }else{
                return "red";
            }
        }else{
            return "black";
        }
    };
    return (
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} color="green" />
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} color="red" />
            <ResumeItem title="Total" Icon={FaDollarSign} value={total} color={totalColor(total)} />
        </C.Container>
    )
};

export default Resume;
import React, { useState } from "react";
import InputForm from "./InputForm";

function TransactionList({transactions}){

    return (
        <div className="table-card">
            <table>
            <thead>
                <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                </tr>
            </thead>
            
                {transactions.map((obj,index)=>{
                return(
                    <tbody key={index}>
                    <tr> 
                     <td>{obj.date}</td>
                     <td>{obj.description}</td>
                     <td>{obj.category}</td>
                     <td>{obj.amount}</td>
                     </tr>
                    </tbody>
                )})}
            
            </table>
        </div>
    )
}

export default TransactionList
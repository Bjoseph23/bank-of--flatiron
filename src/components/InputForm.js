import React, { useState } from "react";


function InputForm({onAddTransaction}){
    const [date,setDate]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')
    const [amount,setAmount]=useState('')

    function handleSubmit(event){
        event.preventDefault()

        const newTransaction ={
            date,
            description,
            category,
            amount,
        }

        onAddTransaction(newTransaction);

    // Clear the form after adding a transaction
    setDate("");
    setDescription("");
    setCategory("");
    setAmount(0);
    }
    return (    
        <div className="card">
     
        <form className="form" onSubmit={handleSubmit}>  
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" value={date} className="input" placeholder="Enter Date" onChange={(e)=> setDate(e.target.value)}/>

            <label htmlFor="Description">Description:</label>
            <input type="text" id="description" value={description} className="input" placeholder="Enter description" onChange={(e)=> setDescription(e.target.value)} />

            <label htmlFor="Category">Category:</label>
            <input type="text" id="category" value={category} className="input" placeholder="Enter Category"onChange={(e)=> setCategory(e.target.value)} />

            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" value={amount} className="input" placeholder="Enter Amount" onChange={(e)=> setAmount(e.target.value)}/>

            <button className="submit" type="submit"  >Add Transaction</button>
        </form>
    </div>
    )
}

export default InputForm
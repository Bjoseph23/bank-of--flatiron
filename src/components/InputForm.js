import React from "react";
//onSubmit={handleSubmit}
function InputForm(){

    function handleSubmit(event){
        event.preventDefault()
    }
    return (    
        <div className="card">
        <form class="form" onSubmit={handleSubmit}>  
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" class="input" placeholder="Enter Date" />

            <label htmlFor="Description">Description:</label>
            <input type="text" id="description" class="input" placeholder="Enter description"  />

            <label htmlFor="Category">Category:</label>
            <input type="text" id="category" class="input" placeholder="Enter Category" />

            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" class="input" placeholder="Enter Amount" />

            <button class="submit" type="submit" onClick={{handleSubmit}}>Add Transaction</button>
        </form>
    </div>
    )
}

export default InputForm
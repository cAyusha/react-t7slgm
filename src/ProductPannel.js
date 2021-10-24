import React from 'react';


function ProductPanel(){

    const [productId, setProductId] = React.useState('');

    const [productName, setProductName] = React.useState('');

    const [productDatePurchased, setProductDatePurchased] = React.useState('');

    function showClickHandler (event){
        let theValue = event.target.value;
        setProductId(theValue);
    }
    function showClickHandler2 (event){
        let theValue = event.target.value;
        setProductName(theValue);
    }

    function showClickHandler3 (event){
        let theValue = event.target.value;
        setProductDatePurchased(theValue);
    }
    function showClickHandler4 () {
        window.alert("[" + "id = "+ productId + ", name = "+productName+ ", datePurchased = "+ productDatePurchased +"]");

    }

    
    function clearClickHandler () {
        setProductId('');
        setProductName('');
        setProductDatePurchased('');
    }


    return(
        <div>

            <input placeholder="Product ID" value={productId}  onChange = { showClickHandler}  ></input>

            <br/>

            <input placeholder="Product Name" value={productName}  onChange = {showClickHandler2}  ></input>

            <br/>

            <input placeholder="Product Date Purchased" value={productDatePurchased}  onChange = {showClickHandler3}  ></input>
            
            <br/>

            <br/>

        

            <br/><br/><br/><br/>

            <button onClick = {clearClickHandler}> clearbutton </button>

        </div>
    );

}

export default ProductPanel;
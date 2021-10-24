import React from 'react';

function Product (prop) {
 
    function toString(prop){
        return "[" + "name = "+ prop.name+ ", id = "+prop.id+ ", datePurchased = "+prop.datePurchased +"]";
    }

    return (
        <div>
            {toString(prop)};  
        </div>
    );
}

export default Product;
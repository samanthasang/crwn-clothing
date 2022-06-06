import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import SHOP_DATA from "./shop.data";

class Shoppage extends Component {
    constructor(props){
        super(props);

        this.state = {
            colloctions: SHOP_DATA
        }

    }


    render() {
        const { colloctions } = this.state;
        return <div className="shop-page">
            {
                colloctions.map( ({ id, ...otherCollectionProps }) => (
                       <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    }
}


export default Shoppage;
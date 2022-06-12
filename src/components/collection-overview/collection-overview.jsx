import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from '../collection-preview/collection-preview'

import "./collection-overview.scss";


const CollectionsOverview = ({ collections}) => (
    <div className='collections-oreview'>
        {
            collections.map( ({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
 
export default connect(mapStateToProps)(CollectionsOverview);
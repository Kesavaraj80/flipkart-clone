import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProductDetails } from '../../redux/actions/productActions';
// import {match} from 'react-router-dom'



const DetailView = ({match}) => {

    const { product } = useSelector(state => state.getProductDetails);
    // const { loading, product } = productDetails;

    const dispatch = useDispatch();
    // console.log('productDetails successfully')

    useEffect(() => {
        // console.log(match.params.id)
        dispatch(getProductDetails(match.params.id));
    }, [dispatch, product, match]);
    return (
        <p>{product.title.longTitle}</p>
    )
}

export default DetailView;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './ProductSlice';

function ProductComponent() {
    const [searchValue, setSearchValue] = React.useState('');

    const {isLoading, data, error} = useSelector(state => state.products)
    const dispatch = useDispatch();
    
    const changeHandler = (e) => {
      const searchWord = e.target.value;
      setSearchValue(searchWord);
      dispatch(getProducts(searchWord));
    }

    return (
        <React.Fragment>
            <input value={searchValue} onChange={(e) => changeHandler(e)} />
            { error && <h3>{error}</h3>}
            { isLoading && <h3>Loading...</h3>}
            { !error && !isLoading && data.map((product, index) =><div key={product.name+index}>{product.name}</div>)}
        </React.Fragment>
    );

}
export default ProductComponent
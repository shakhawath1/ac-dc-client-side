import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-cliffs-05732.herokuapp.com/product/')
            .then(res => res.json())
            .then(data => setProducts(data.reverse()))
    }, [])



    return [products, setProducts];
};

export default useProducts;
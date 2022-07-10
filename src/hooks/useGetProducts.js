import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getdata(){
		const response = await axios(API);
		setProducts(response.data);
		}
		getdata();
	}, []);

	return products;
};

export default useGetProducts;

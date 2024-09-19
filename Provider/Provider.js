import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const ProviderContext = createContext()
const Provider = ({ children }) => {
    const api = process.env.NEXT_PUBLIC_API_URL;
    const [categories, setCategories] = useState([])


    const { data, isLoading: cateLoading, error: cateError, refetch: cateFetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            try {
                const res = await axios.get(`${api}/categories`);
                return res.data

            } catch (error) {
                throw new Error('Error fetching categories: ' + error.message);

            }


        }
    })


    useEffect(() => {
        if (data) {
            setCategories(data)
        }
    }, [data])









    const [catModel, setCatModel] = useState(false);



    const [animalModel, setAnimalModel] = useState(false);

    const animal = ["land animal", "Bird", "fish", "insect"];

    const [selectedFile, setSelectedFile] = useState(null);



    const share = {
        selectedFile, setSelectedFile, catModel, api, setCatModel, animalModel, setAnimalModel, animal,
        cateLoading, cateFetch, cateError,
        categories
    }
    return (
        <ProviderContext.Provider value={share} >
            {children}
        </ProviderContext.Provider>
    );
};

export default Provider;
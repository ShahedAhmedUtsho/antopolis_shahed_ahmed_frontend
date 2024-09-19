import React, { createContext, useState } from 'react';


export const ProviderContext = createContext()
const Provider = ({ children }) => {
    const [catModel, setCatModel] = useState(false);

    const api = process.env.NEXT_PUBLIC_API_URL;
    console.log(api)

    const [animalModel, setAnimalModel] = useState(false);

    const animal = ["land animal", "Bird", "fish", "insect"];

    const [selectedFile, setSelectedFile] = useState(null);



    const share = { selectedFile, setSelectedFile, catModel, api, setCatModel, animalModel, setAnimalModel, animal }
    return (
        <ProviderContext.Provider value={share} >
            {children}
        </ProviderContext.Provider>
    );
};

export default Provider;
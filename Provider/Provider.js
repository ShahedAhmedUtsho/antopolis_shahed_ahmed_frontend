import React, { createContext, useState } from 'react';


export const ProviderContext = createContext()
const Provider = ({ children }) => {
    const [catModel, setCatModel] = useState(false);



    const [animalModel, setAnimalModel] = useState(false);

    const animal = ["land animal", "Bird", "fish", "insect"];

    const [selectedFile, setSelectedFile] = useState(null);



    const share = { selectedFile, setSelectedFile, catModel, setCatModel, animalModel, setAnimalModel, animal }
    return (
        <ProviderContext.Provider value={share} >
            {children}
        </ProviderContext.Provider>
    );
};

export default Provider;
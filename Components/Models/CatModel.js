import useProvider from '@/Hooks/useProvider';
import React from 'react';

const CatModel = () => {
    const { selectedFile, setSelectedFile, catModel, setCatModel, animalModel, setAnimalModel, animal } = useProvider();
    const saveCategoryHandle = (e) => {
        e.preventDefault();

        setCatModel(false)
    }
    return (
        <section className="w-screen h-screen fixed flex justify-center items-center  left-0 top-0 bg-black/50 ">
            <form className="md:w-[380px] md:min-h-[233px] flex flex-col text-black text-lg leading-3 py-9 px-6 border  rounded-3xl bg-white border-[#141414]">
                <h6>
                    Add Category
                </h6>
                <input type="text" placeholder="Name" className=" h-12 bg-gray-200 mt-5 py-3 px-4 text-black placeholder:text-black w-full rounded-lg focus:outline outline-black" />
                <button onClick={saveCategoryHandle} className=" mt-auto text-lg text-white bg-black rounded-lg w-full h-12 ">
                    Save

                </button>


            </form>


        </section>
    );
};

export default CatModel;
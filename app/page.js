'use client'

import { useState } from "react";



export default function Home() {

  const [catModel, setCatModel] = useState(false);

  const [animalModel, setAnimalModel] = useState(false)

  const animal = ["land animal", "Bird", "fish", "insect"]









  const saveCategoryHandle = (e) => {
    e.preventDefault();

    setCatModel(false)
  }
  const saveAnimalHandle = (e) => {
    e.preventDefault()
    setAnimalModel(false)
  }
  return (
    <main className="w-screen min-h-full lg:p-20 md:py-5 md:px-5">
      <section className=" min-h-28 flex justify-between  items-center">
        <aside className="left flex gap-5 ">
          {
            animal.map((item, index) => {
              console.log(typeof item, item === "land animal")
              return (
                <span key={index} className={`inline-block transition-all duration-100 ease-linear ${item === "land animal" && '  !text-green-500 hover:!bg-green-500/20 '} cursor-pointer hover:bg-red-500/20  text-red-500 rounded-full py-3 px-8 border-2 border-current capitalize`}  >
                  {item}

                </span>
              )
            })
          }
        </aside>
        <aside className="right left flex gap-5  ">
          <button onClick={() => { setCatModel(false); setAnimalModel(true) }} className={`inline-block transition-all duration-100 ease-linear   text-white hover:bg-white/95 hover:text-black active:scale-90 cursor-pointer rounded-full py-3 px-8 border-2 border-current capitalize`}  >
            Add Animal

          </button>
          <button onClick={() => { setAnimalModel(false); setCatModel(true); }} className={`inline-block transition-all duration-100 cursor-pointer ease-linear    text-white hover:bg-white/95 active:scale-90 hover:text-black rounded-full py-3 px-8 border-2 border-current capitalize`}  >

            Add Category
          </button>

        </aside>

      </section>
      <section>

      </section>






      {/* model section  */}


      {
        catModel && <section className="w-screen h-screen fixed flex justify-center items-center  left-0 top-0 bg-black/50 ">
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
      }

      {
        animalModel && <section className="w-screen h-screen fixed flex justify-center items-center  left-0 top-0 bg-black/50 ">
          <form className="md:w-[380px] md:min-h-[233px] flex flex-col text-black text-lg leading-3 py-9 px-6 border  rounded-3xl bg-white border-[#141414]">
            <h6>
              Add Category
            </h6>
            <input type="text" placeholder="Name" className=" h-12 bg-gray-200 mt-5 py-3 px-4 text-black placeholder:text-black w-full rounded-lg focus:outline outline-black" />
            <button onClick={saveAnimalHandle} className=" mt-auto text-lg text-white bg-black rounded-lg w-full h-12 ">
              Save

            </button>


          </form>


        </section>
      }



    </main>
  );
}

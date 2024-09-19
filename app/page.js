


export default function Home() {


  const animal = ["land animal", "Bird", "fish", "insect"]



  return (
    <main className="w-screen min-h-full lg:p-20 md:py-5 md:px-5">
      <section className=" min-h-28 flex justify-between  items-center">
        <aside className="left flex gap-5 ">
          {
            animal.map((item, index) => {
              console.log(typeof item, item === "land animal")
              return (
                <span key={index} className={`inline-block ${item === "land animal" && ' !text-green-500'} text-red-500 rounded-full py-3 px-8 border-2 border-current capitalize`}  >
                  {item}

                </span>
              )
            })
          }
        </aside>
        <aside className="right left flex gap-5  ">
          <span className={`inline-block   text-white rounded-full py-3 px-8 border-2 border-current capitalize`}  >
            Add Animal

          </span>
          <span className={`inline-block    text-white  rounded-full py-3 px-8 border-2 border-current capitalize`}  >

            Add Category
          </span>

        </aside>

      </section>
      <section>

      </section>

    </main>
  );
}

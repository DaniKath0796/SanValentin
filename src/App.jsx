import { useState } from "react";
import JSConfetti from 'js-confetti'
//import gatitos from 'src/gatitos'
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)


  const [valueSi, setValueSi] = useState(false)

  let random = [{
    id: 1,
    description: "Di si por favor",
    img: "https://media.tenor.com/SwQT4BBJS0oAAAAi/peach-and-goma-peach-goma.gif"
  },
  {
    id: 1,
    description: "Morchi piénsalo de nuevo.",
    img: "https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif"
  }
    ,
  {
    id: 2,
    description: "Vamos, morchito di que sí.",
    img: "https://media.tenor.com/sjEDvFq1XhgAAAAi/peach-goma-crate-peach.gif"
  },
  {
    id: 3,
    description: "Me vas a hacer llorar???",
    img: "https://media.tenor.com/UUyky5KrsQgAAAAi/peach-and-goma-peach-goma.gif"
  },
  {
    id: 4,
    description: "Te dare muchos besitos",
    img: "https://media.tenor.com/v63_brUy45wAAAAi/peach-goma-love-peach-cat.gif"
  },
  {
    id: 5,
    description: "Morchiiiiiii",
    img: "https://i.pinimg.com/originals/08/79/a7/0879a7dbd761fb5d437b3b7ad70cf1cd.gif"
  },
  {
    id: 6,
    description: "Morchi estoy perdiendo la paciencia",
    img: "https://i.pinimg.com/originals/5a/c2/8e/5ac28e4264ce61d5dd77ca3b78d1fba6.gif"
  },
  {
    id: 7,
    description: "No dejes que el miedo te detenga.",
    img: "https://media.tenor.com/fE2ThIiq1K0AAAAi/peach-goma.gif"
  },
  {
    id: 8,
    description: "Veo que se acabo el amor",
    img: "https://media.tenor.com/_PrIuo9uqTQAAAAi/peach-goma.gif"
  },
  {
    id: 9,
    description: "Confía en mí.",
    img: "https://media.tenor.com/BudmQXf5aI0AAAAi/peach-goma.gif"
  },
  {
    id: 10,
    description: "Si ya no me amas solo dilo.",
    img: "https://media1.tenor.com/m/m6n1J3qVPYEAAAAC/peach-cat-angry.gif"
  }]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index])
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10)
    }
    setRandomValor(random[index]);
  }


  const handleImageLoad = () => {
    setImagenCargada(true);
  }


  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center ">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-white font-bold text-5xl text-center">¿Quieres ser mi San Valentin?</h1>
            <img src={Object.keys(randomValor).length === 0 ?
              "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif" : randomValor.img} alt="San Valentin" className="mx-auto" width={400} height={400} />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button onClick={() => {
                setValueSi(true)

                jsConfetti.addConfetti({
                  emojis: ['💕', '🥰', '❤️', '😽'],
                  emojiSize: 70,
                  confettiNumber: 80,
                })

              }} className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} style={{ height: agrandar }}>
                Si
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentin?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1 className="text-4xl text-white font-bold">Sabia que dirias que si ❤️!</h1>
            <img src="https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif" alt="" className="mx-auto" />
            <span hidden>{document.title = 'Sabia que dirias que si ❤️!'}</span>
          </div>
        )
      }
    </main>
  )
}

export default App

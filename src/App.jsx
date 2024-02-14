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
    img: "src/gatitos/11.gif"
  },
  {
    id: 1,
    description: "Morchi piénsalo de nuevo.",
    img: "src/gatitos/1.gif"
  }
    ,
  {
    id: 2,
    description: "Vamos, morchito di que sí.",
    img: "src/gatitos/2.gif"
  },
  {
    id: 3,
    description: "Me vas a hacer llorar???",
    img: "src/gatitos/3.gif"
  },
  {
    id: 4,
    description: "Te dare muchos besitos",
    img: "src/gatitos/4.gif"
  },
  {
    id: 5,
    description: "Morchiiiiiii",
    img: "src/gatitos/5.gif"
  },
  {
    id: 6,
    description: "Morchi estoy perdiendo la paciencia",
    img: "src/gatitos/6.gif"
  },
  {
    id: 7,
    description: "No dejes que el miedo te detenga.",
    img: "src/gatitos/7.gif"
  },
  {
    id: 8,
    description: "Veo que se acabo el amor",
    img: "src/gatitos/8.gif"
  },
  {
    id: 9,
    description: "Confía en mí.",
    img: "src/gatitos/9.gif"
  },
  {
    id: 10,
    description: "Si ya no me amas solo dilo.",
    img: "src/gatitos/10.gif"
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

import { useEffect, useState } from 'react'
import './App.css'
import pelis from "./movies.js"

function App() {
  const [movie, setMovie] = useState({})
  const [parcial, setParcial] = useState("")
  const [pista, setPista] = useState(0)
  const [ver, setVer] = useState(0)
  const [points, setPoints] = useState(0)
  const [guess, setGuess] = useState("")
  const [start, setStart] = useState(0)
  const [peliculas, setPeliculas] = useState([])
  const [noGo, setNoGo] = useState(0)
  const [record, setRecord] = useState(-100)

  function getEliminarPeli() {
    if(movie.name){
      return peliculas.filter(el => {
        if(el.name == movie.name){
          console.log(el.name);
        }
        return el.name !== movie.name
      })
      
    }
  }

  useEffect(() => {
    if(movie.name){
      getPartialMovie(movie)
    }else{
      setPeliculas(pelis)
    }
  }, [movie])

  function getPartialMovie(movie) {
    let indexes = Array.from({length: movie.name.length} , (x , index) => index)
    for (let i = indexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }
    indexes = indexes.slice(0, Math.floor(movie.name.length / 2))

    let peli = movie.name.split("")
    for (let i = 0; i < indexes.length; i++) {
       if(peli[indexes[i]] != " "){
        peli[indexes[i]] = "_"
       }
    }
    setParcial(peli)
  }

  function handleStart() {
    setPeliculas(pelis)
    setStart(1)
    setMovie(peliculas[Math.floor(Math.random() * peliculas.length)])
  }

  function handleSkip() {
    if(peliculas.length < 1){
      alert(`Terminaron Las Peliculas\nHiciste ${points} puntos`)
      fijarseRecord()
      handleRestart()
    }
    setPeliculas(getEliminarPeli())
    setMovie(peliculas[Math.floor(Math.random() * peliculas.length)])
    setPoints(points - 1)
    setPista(0)
    setVer(0)
    setNoGo(0)
    setGuess("")
  }

  function handleGo(e) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const guess = formData.get("movieName")?.toString()

    if(guess?.toLocaleLowerCase() === movie.name.toLocaleLowerCase()){
      alert("COOOOORRRREEEECTOOOOOO \n+1 punto")
      setPeliculas(getEliminarPeli())
      setMovie(peliculas[Math.floor(Math.random() * peliculas.length)])
      setPista(0)
      setVer(0)
      setPoints(points + 1)
      setGuess("")
    }else{
      setPista(0)
      setVer(0)
      setGuess("")
      setPeliculas(getEliminarPeli())
      setMovie(pelis[Math.floor(Math.random() * pelis.length)])
      setPoints(points - 1)
      alert(`INCORRECTO :(, ERA: \n${movie.name} \n-1 punto`)
    }
    if(peliculas.length < 1){
      alert(`Terminaron Las Peliculas\nHiciste ${points} puntos`)
      fijarseRecord()
      handleRestart()
    } 
  }

  function fijarseRecord() {
    if (record <= points) {
      setRecord(points + 1)
    }
  }

  function handleVer(e) {
    e.preventDefault()
    return 
  }

  function handleRestart() {
    location.reload();
    setPoints(0)
    setNoGo(0)
    setPista(0)
    setVer(0)
    setGuess("")
    setStart(0)
  }

  return (
    <>
        {start == 0 ?  <button onClick={handleStart}>START</button>: 
        (
          <div className='contMain'>
            <div>
              <div>
                <p>PUNTOS: {points}</p>
                <p>RECORD: {record > -100 && record}</p>
              </div>
              {ver == 0 ? <span>{parcial}</span> : <span>{movie.name}</span>}
              <div className='contForm'>
                <form action="" onSubmit={noGo != 2 ? handleGo : handleVer}>
                  <input type="text" value={guess} onChange={e => setGuess(e.target.value)} name='movieName'/>
                  {noGo != 2 && <button type='submit'>GO</button>}
                </form>
                <div className='contSkip'>
                  <button onClick={handleSkip}>Skip (-1)</button>
                  {ver == 0 ? <button onClick={() => {
                    setVer(1)
                    setNoGo(2)
                    }}>Ver</button> : <button onClick={() => setVer(0)}>Ocultar</button>}
                </div>
                <button style={{marginTop: "15px"}} onClick={handleRestart}>Reiniciar</button>
              </div> 
            </div>
            <div className='contPistas'>
              <div className='contPista'>
                <p>AÑO:</p>
                {pista > 0 ? movie.year : <button onClick={() => {
                  setPista(1)
                  setPoints(points - 1)
                }}>Activar pista (-1 Punto)</button>}
              </div>
              <div className='contPista'>
                <p>DIRECTOR:</p>
                {pista > 1 ? movie.author : <button onClick={() => {
                  setPista(2)
                  setPoints(points - 2)
                }}>Activar pista (-2 Puntos)</button>}
              </div>
              <div className='contPista'>
                <p>ACTOR:</p>
                {pista > 2 ? movie.actors : <button onClick={() => 
                  {setPista(3) 
                  setPoints(points - 3)
                  }}>Activar pista (-3 Puntos)</button>}
              </div>
            </div>
          </div>   
        )}
    </>
  )
}

export default App

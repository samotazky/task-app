
const App = () => {
  // čisty Javascript - začiatok
  const data = [
    { id: 1, name: 'Vynést koš' },
    { id: 2, name: 'Uklidit kuchyň' },
    { id: 3, name: 'Zajít do fitka' },
    { id: 4, name: 'Nakoupit' },
    { id: 5, name: 'Nakrmit kočku' },
    ]

    const vymazaneId = 3

    const vyslednePole = data.filter( (jedenUkol) => {
      return jedenUkol.id != vymazaneId
    })

    console.log(vyslednePole);

  // čisty Javascript - koniec
  return(
    <h1>Test</h1>
  )
}

export default App
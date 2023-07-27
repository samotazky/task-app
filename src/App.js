
const App = () => {
  // čisty Javascript - začiatok
  // const vychodziPole = [5, 6, 7, 8, 9]

  // const vyslednePole = vychodziPole.map( (jednoCislo) => {
  //   return jednoCislo + 10
  // })
  
  // console.log(vyslednePole)

  const data = [
    { id: 1, name: 'Vynést koš' },
    { id: 2, name: 'Uklidit kuchyň' },
    { id: 3, name: 'Zajít do fitka' },
    { id: 4, name: 'Nakoupit' },
    { id: 5, name: 'Nakrmit kočku' },
    ]

    const vysledok = data.map( (oneDataObject) => {
      return oneDataObject.name
    })

    console.log(vysledok);
  
  // čisty Javascript - koniec
  return(
    <h1>Test</h1>
  )
}

export default App
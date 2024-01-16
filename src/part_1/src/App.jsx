

const Hello = (peps) => {
  return (
    <div><p>Hello {peps.one}</p></div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <Hello one={name} />
      <Hello one={name} />
      <Hello one={name} />
    </>
  )
}

export default App
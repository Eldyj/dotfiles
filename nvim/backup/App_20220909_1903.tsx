import type { Component } from 'solid-js'

class link
{
  url: string
  name: string
}

const links = (): Array<link> =>
{
  const links: Array<link> = [{url = "/",name = "home"},{url = "/login", name = "login"}]
  return 
}

const Nav: Component = $ =>
{
  return(
    <h1>
      {$.content}
    </h1>
  )
}

const App: Component = () =>
{
  return(
    <>
      hello world!!
    </>
  )
}

export default App

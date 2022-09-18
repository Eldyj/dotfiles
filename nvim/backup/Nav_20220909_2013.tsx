import type { Component } from 'solid-js'

class link
{
  url: String
  name: String
  constructor(name: String)
  {
    this.name = name
    this.onclick = `render(()=> <${this.name}/>, document.getElementById('root') as HTMLElement)`
  }
}

const links = (): Array<Component> =>
{
  let _links: Array<Component>
  for( name in ["Home","News","Login"])
  {
    let Link: Component = () => <a href="#">{name}</a>
    Link.AddEventListener('click',() => {
      render(() => <App>, document.getElementById('root') as HTMLElement)
    })
    _links.push(<Link/>)
  }
  return _links
}

const Nav: Component = () =>
{
  return(
    <nav>
      {(links()}
    </nav>
  )
}

export default Nav

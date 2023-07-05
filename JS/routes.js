export class Router {
  routes = {}
  
  add(routeName, href) {
    this.routes[routeName] = href
  }

  route(e) {
    e = e || window.event
    e.preventDefault()

    window.history.pushState({}, "", e.target.href)

    this.handle()
    this.changeBg()
  }

  changeBg() {
    const {pathname} = window.location
    const body = document.querySelector('body')

    switch (pathname) {
      case "/":
        body.classList.remove('universe-bg')
        body.classList.remove('explorer-bg')
        body.classList.add('home-bg')
        break;
      case "/universe":
        body.classList.remove('home-bg')
        body.classList.remove('explorer-bg')
        body.classList.add('universe-bg')
        break
      case "/explorer":
        body.classList.add('explorer-bg')
        break;
    }
  }

  handle() {
    const {pathname} = window.location
    const route = this.routes[pathname] || this.routes["/"]

    fetch(route).then(data => data.text()).then(html => {
      document.getElementById("app").innerHTML = html
    })
  }
}
const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
          <div>
      <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80" alt="Alone in the unspoilt wilderness" />
      <div>
        Photo by <a href="AUTHOR_LINK">David Marcu</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    </div>
      </Def>
    )
  }
  

module.exports = error404

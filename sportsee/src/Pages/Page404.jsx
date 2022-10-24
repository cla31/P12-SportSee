import React from 'react'
import '../Style/Pages/Page404.css'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <div className="message-erreur">
        <h5>404</h5>
        <span>Oups! La page que vous demandez n'existe pas.</span>
        <Link to="/" className="message">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}

export default Page404

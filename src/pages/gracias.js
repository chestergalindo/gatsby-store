import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
  return (
    <div>
      <SEO title="Compra Exitosa"></SEO>
      <Purchase>
        <h2> Compra exitosa</h2>
        <p>
          vuelve pronto{" "}
          <span role="img" aria-label="emoji">
            😆
          </span>
        </p>
        <Link to="/">
          <Button> volver</Button>
        </Link>
      </Purchase>
    </div>
  )
}

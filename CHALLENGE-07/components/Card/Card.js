import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Card({Firstname, Lastname, Location, photo}) {
  return (
    <>
        <div className="card" style="width: 18rem;">
                { photo !== null &&
                  <Zoom>
                        <img src={photo} width="200"/>
                  </Zoom>
                }
            <div className="card-body">
                <p className="card-text">First Name: {Firstname}</p>
                <p className="card-text">Last Name: {Lastname}</p>
                <p className="card-text">Location: {Location}</p>
            </div>
        </div>
      </>
  )
}

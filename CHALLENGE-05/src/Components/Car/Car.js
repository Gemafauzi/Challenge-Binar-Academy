import React from 'react'
import './Car.css'

import BCR_Car from '../../Assets/bcr_car.svg'

const Car = () => {
  return (
    <div class="first-section">
        <div class="first-section-container">
            <div class="banner">
                <div class="main-title-1">Sewa & Rental Mobil Terbaik di</div>
                <div class="main-title-2">Kawasan Surabaya</div>
                <div class="main-description">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
                {/* <div class="button-sewa">Mulai Sewa Mobil</div> */}
            </div>
            <div class="car-container">
                <img src={BCR_Car} className="car-container-inner"/>
            </div>
        </div>
    </div>
  )
}

export default Car
import React from 'react'
import Mercedes from '../../Assets/Img/Mercedes.png'


const Hero = () => {
  return (
    <div>
        <section className="hero bg-light d-flex align-items-center">
        <div className="container-fluid heroes mt-5 d-flex align-items-center">
            <div className="row px-5">
                <div className="col">
                    <h4 className="font-hel font-bold font-36">Sewa dan Rental Mobil Terbaik di kawasan (Lokasimu)</h4>
                    <p className="font-hel font-14 font-w300">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <div className="col d-none d-lg-block">
                    <img src={Mercedes} alt="" className="car"/>
                    <div className="blue"></div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero
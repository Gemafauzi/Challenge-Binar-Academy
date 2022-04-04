import React, { Component,useState, useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Panel from '../Components/Panel/Panel'
import Footer from '../Components/Footer/Footer'
import SpaceHero from '../Components/SpacerHero/SpaceHero'
import Cars from '../Components/Card/Cars'
import Mercedes from '../Assets/Img/Mercedes.png'
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import { BsPeople } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { FaRegCalendar } from 'react-icons/fa';


const Detail = () => {
  const { id } = useParams();

  let [item, setItem] = useState([]);
  
  const datas = async () => {
      let fetchs = await fetch('https://rent-cars-api.herokuapp.com/customer/car/' + id)
      let datas = await fetchs.json();
      setItem(item=datas)
   }

  useEffect(() => {

    datas();
    
  },[]);


  return (
    <div>
          <Navbar></Navbar>
          <SpaceHero></SpaceHero>
          <Panel form="false"></Panel>
          <div className="container-fluid w-80 mb-5">
            <div className="row">

                <div className="col-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="fw-bold">Tentang Paket</h5>
                            <p>Include</p>

                            <ul className="text-muted">
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                            </ul>

                            <p>Exlude:</p>
                            <ul className="text-muted">
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>

                            <h5 className="fw-bold"> Refund, Reschedule, Overtime</h5>

                            <ul className="text-muted">
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li> Tidak termasuk akomodasi penginapan</li>
                                <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li> Tidak termasuk akomodasi penginapan</li>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li> Tidak termasuk akomodasi penginapan</li>
                            </ul>
                           
                        </div>

                    </div>

                    <div className="row flex-row-reverse mt-4 clearfix">
                        <div className="col-4 float-right">
                            <Link to="/cars/add" className="btn btn-success w-100">
                                <i className="fa-solid fa-square-pen"></i>
                                Lanjutkan pembayaran
                            </Link>
                        </div>
                    

                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div>
                                <img src={item.image} alt="" className="w-100"/>
                            </div>
                            <h5 className="fw-bold">{item.name}/{item.category}</h5>
                            <div className="mb-4 text-muted">
                                <small><BsPeople/> 4 orang</small>
                                <small className="mx-2"><FiSettings/> Manual</small>
                                <small> <FaRegCalendar/> Tahun 2020</small>
                            </div>
                            
                            <div className="row px-2 justify-content-between">
                                <div className="col-7">Total</div>
                                <div className="col-5 fw-bold">Rp. {item.price}</div>
                            </div>

                            <div className="container mt-2 px-0">
                                <Link to="/cars/add" className="btn btn-success w-100">
                                    <i className="fa-solid fa-square-pen"></i>
                                    Lanjutkan pembayaran
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

          </div>
          <Footer></Footer>
    </div>
  )
}

export default Detail
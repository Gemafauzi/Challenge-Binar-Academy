import React from 'react'
import './PanelDisabled.css'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'

const Panel = (props) => {

  return (
    <div className="search-bar-disabled">
        <form id="searc-movie" className="search-bar-dis">

            <div className="search-bar-title">
                {props.cari ? '' : 'Pencarianmu'}
            </div>

            <div className='search-bar-operations'>
                <div className="search-bar-operations-container-disabled">
                    <label className="form-label">Tipe Driver</label>
                    <select id="tipe" className="form-control" disabled>
                        <option></option>
                        <option>Disabled select</option>
                    </select>
                </div>
                
                <div className="search-bar-operations-container-disabled">
                    <label className="form-label">Tanggal</label>
                    <input id="date" type="date" className="form-control" disabled/>
                </div>

                <div className="search-bar-operations-container-disabled">
                    <label className="form-label">Waktu Jemput/Ambil</label>
                    <input id="time" type="time" className="form-control"  disabled/>
                </div>

                <div className="search-bar-operations-container-disabled">
                    <label className="form-label">Jumlah Penumpang</label>
                    <input id="pass" type="number" className="form-control" disabled/>
                </div>
            </div>
        </form>
    </div>
   
  )
}

export default Panel
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./car.css";
import PanelDisabled from "../../Components/PanelDisabled/PanelDisabled";
import { Link } from "react-router-dom";

import IconPeople from "../../Assets/fi_users.svg";
import IconGear from "../../Assets/fi_settings.svg";
import IconCalendar from "../../Assets/fi_calendar.svg";
import Arrow from "../../Assets/fi_arrow-left.svg";
import { useDispatch, useSelector } from "react-redux";
import carCartSlice from "../../Store/carCartSlice";
const Car = (props) => {
  const param = useParams();
  const [car, setCar] = useState(null);

  const carCart = useSelector((store) => store.carCartSlice.carCart);
  const dispatch = useDispatch();
  console.log(carCart);

  useEffect(() => {
    fetch(
      `https://625d73e74c36c753577540cb.mockapi.io/fejs2/api/c5-cars/${param.id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCar({ ...data });
      });
  }, []);

  return (
    <div>
      {car !== null && (
        <>
          <div className="upper-div-container">
            <Link to="/" className="button-back">
              <div className="arrow-image-container">
                <img src={Arrow} className="arrow-image" />
              </div>
              <div className="arrow-text">Kembali</div>
            </Link>
          </div>
          <PanelDisabled />
          <div className="details-container-main">
            <div className="details-container">
              <div className="details-container-left">
                <div className="details-container-left-upper">
                  <p style={{ fontSize: "16px", fontWeight: "600" }}>
                    Tentang Paket
                  </p>
                  <p>Include</p>

                  <ul className="text-muted">
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>

                  <p>Exlude:</p>
                  <ul className="text-muted">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
                <div>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Refund, Reschedule, Overtime
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="text-muted">
                          <li>
                            Tidak termasuk biaya makan sopir Rp 75.000/hari
                          </li>
                          <li>
                            {" "}
                            Jika overtime lebih dari 12 jam akan ada tambahan
                            biaya Rp 20.000/jam
                          </li>
                          <li> Tidak termasuk akomodasi penginapan</li>
                          <li>
                            {" "}
                            Tidak termasuk biaya makan sopir Rp 75.000/hari
                          </li>
                          <li>
                            Jika overtime lebih dari 12 jam akan ada tambahan
                            biaya Rp 20.000/jam
                          </li>
                          <li> Tidak termasuk akomodasi penginapan</li>
                          <li>
                            Tidak termasuk biaya makan sopir Rp 75.000/hari
                          </li>
                          <li>
                            Jika overtime lebih dari 12 jam akan ada tambahan
                            biaya Rp 20.000/jam
                          </li>
                          <li> Tidak termasuk akomodasi penginapan</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="details-container-right">
                <div className="details-container-right-inner">
                  <div className="car-image-container">
                    <img src={car.image} className="car-image" />
                  </div>
                  <div className="car-name">{car.name}</div>
                  <div className="car-details-container">
                    <div className="car-detail-icons">
                      <div className="car-detail-icon">
                        <img src={IconPeople} className="car-icon" />
                      </div>
                      <div className="car-book-text">
                        4 orang (ambil dari API)
                      </div>
                    </div>
                    <div className="car-detail-icons">
                      <div className="car-detail-icon">
                        <img src={IconGear} className="car-icon" />
                      </div>
                      <div className="car-book-text">
                        Manual (ambil dari API)
                      </div>
                    </div>
                    <div className="car-detail-icons">
                      <div className="car-detail-icon">
                        <img src={IconCalendar} className="car-icon" />
                      </div>
                      <div className="car-book-text">
                        Tahun 2020 (ambil dari API)
                      </div>
                    </div>
                  </div>
                  <div className="car-book-price">
                    <div className="car-total">Total</div>
                    <div className="car-price-text">Rp. {car.price}</div>
                  </div>
                  <button
                    className="btn button-right-details-container"
                    disabled={carCart  === car.id}
                    onClick={() =>
                      dispatch(
                        carCartSlice.actions.addCarToCart({ id: car.id })
                      )
                    }
                  >
                    <div type="submit" className="button-right-details">
                      {carCart === car.id
                        ? "Lanjutkan Pembayaran"
                        : "Pilih mobil"}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="button-center-container-outer">
            <button
              className="btn button-center-container"
              disabled={carCart === car.id}
              onClick={() =>
                dispatch(carCartSlice.actions.addCarToCart({ id: car.id }))
              }
            >
              <div type="submit" className="button-center">
                {carCart === car.id ? "Lanjutkan Pembayaran" : "Pilih mobil"}
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Car;

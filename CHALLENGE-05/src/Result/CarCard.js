import React from "react";
import CarDetail from "./CarDetail";
import CarImage from "./CarImage";
import "./result.css";

import IconPeople from "../Assets/fi_users.svg";
import IconGear from "../Assets/fi_settings.svg";
import IconCalendar from "../Assets/fi_calendar.svg";
import carCartSlice from "../Store/carCartSlice";
import { useSelector, useDispatch } from "react-redux";

const CarCard = (props) => {
  const carCartSlice = useSelector((store) => store.carCartSlice.carCart);
  const dispatch = useDispatch();

  return (
    <div className="car_card">
      <div className="car-image-container">
        <img src={props.car.image} className="car-image" />
      </div>
      <div className="car-detail-container">
        <div className="car-name-type">{props.car.name}</div>
        <div className="car-price">Rp. {props.car.price} / hari</div>
        <div className="car-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="car-detail-icons">
          <div className="car-detail-icon">
            <img src={IconPeople} className="car-icon" />
          </div>
          <div className="car-detail-text">4 orang (ganti dari API)</div>
        </div>
        <div className="car-detail-icons">
          <div className="car-detail-icon">
            <img src={IconGear} className="car-icon" />
          </div>
          <div className="car-detail-text">Manual (ganti dari API)</div>
        </div>
        <div className="car-detail-icons">
          <div className="car-detail-icon">
            <img src={IconCalendar} className="car-icon" />
          </div>
          <div className="car-detail-text">Tahun 2020 (ganti dari API)</div>
        </div>
        <button
          className="button-card-container"
          disabled={carCartSlice === props.car.id}
        >
          <div type="submit" className="button-card">
            {carCartSlice === props.car.id
              ? "Lanjutkan Pembayaran"
              : "Pilih mobil"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default CarCard;

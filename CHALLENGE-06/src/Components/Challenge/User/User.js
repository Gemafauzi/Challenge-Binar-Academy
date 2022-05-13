import React from "react";
import style from "./user.module.css";
import sharedStyle from "./additional.module.css";

const User = () => {
	return (
		<>
			<div className={style.landing_page}>
				<div className="row">
					<div className={`col-sm-12 col-lg-6 col-xl-6`}>
						<h1 className={`${sharedStyle.header} ${style.landing_page_header}`}>Sewa Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
						<p className={`${sharedStyle.text_reguler} ${style.landing_page_text}`}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
					</div>
					<div className={`col-sm-12 col-lg-6 col-xl-6`}>
						<img src="/image/img_car.png" alt="" className={style.landing_page_image} />
					</div>
				</div>
			</div>
			<div>
				<form id="search-movie">
					<div className={style.search_container}>
						<div className={style.search_group}>
							<label htmlFor="driver" id="driver">
								Tipe Driver
							</label>
							<select name="driver" id="driver">
								<option value="">Dengan Sopir</option>
								<option value=""> Tanpa Sopir (lepas Kunci)</option>
							</select>
						</div>
						<div className={`${style.search_group} ${style.date} `}>
							<label htmlFor="date">Tanggal </label>
							<input type="date" name="date" id="date"></input>
						</div>
						<div className={style.search_group}>
							<label htmlFor="time" id="time">
								Waktu Jemput
							</label>
							<select name="time" id="time">
								<option value=""> 08.00 WIB </option>
								<option value=""> 09.00 WIB </option>
								<option value=""> 10.00 WIB </option>
								<option value=""> 11.00 WIB </option>
								<option value=""> 12.00 WIB </option>
							</select>
						</div>
						<div className={style.search_group}>
							<label htmlFor="passenger" id="passenger">
								Jumlah Penumpang
							</label>
							<select name="passenger" id="passenger">
								<option value=""> 1-3 Orang </option>
								<option value=""> 4-6 Orang </option>
							</select>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default User;

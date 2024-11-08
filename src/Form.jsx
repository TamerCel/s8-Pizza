import React, { useState } from "react";
import "./App.css";

const boyutlar = ["Küçük", "Orta", "Büyük"];
const hamurlar = ["İnce", "Orta", "Kalın"];
const malzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Salam",
  "Ananas",
  "Kabak",
];

function Form() {
  const [form, setForm] = useState({
    boyut: "",
    hamur: "",
    malzemeler: [],
    siparisNotu: "",
    sayac: 1,
    ekstraTutar: 0,
    toplamTutar: 85.5,
  });
  const [error, setError] = useState({
    boyutHata: "",
    hamurHata: "",
    malzemelerHata: "",
  });


  function hesaplaToplamTutar(yeniMalzemeler, yeniSayac) {
    const malzemeTutar = yeniMalzemeler.length * 5;
    const toplamTutar = (85.5 + malzemeTutar) * yeniSayac;
    setForm((prevForm) => ({
      ...prevForm,
      ekstraTutar: malzemeTutar,
      toplamTutar: toplamTutar,
    }));
  }

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "boyut") {
      value === "Küçük"
        ? setError({ ...error, boyutHata: "lütfen boyut belirtiniz." })
        : setError({ ...error, boyutHata: "" });
    } else if (name === "hamur") {
      value === "Kalın"
        ? setError({ ...error, hamurHata: "lütfen hamur belirtiniz." })
        : setError({ ...error, hamurHata: "" });
    } else if (form.malzemeler.length >= 9) {
      checked
        ? setError({
          ...error,
          malzemelerHata: "En Fazla 10 malzeme seçebilirsiniz.",
        })
        : setError({
          ...error,
          malzemelerHata: "",
        });
    }

    let secilenMalzemeler = [...form.malzemeler];
    if (name === "malzemeler") {
      if (checked) {
        secilenMalzemeler.push(value);
      } else {
        secilenMalzemeler = form.malzemeler.filter(
          (malzeme) => malzeme !== value
        );
      }
      setForm({ ...form, malzemeler: secilenMalzemeler });
      hesaplaToplamTutar(secilenMalzemeler, form.sayac);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  function handleClick(e) {
    const { name } = e.target;
    let yeniSayac = form.sayac;
    if (name === "azalt" && form.sayac > 1) {
      yeniSayac -= 1;
    } else if (name === "arttır" && form.sayac < 10) {
      yeniSayac += 1;
    }
    setForm({ ...form, sayac: yeniSayac });
    hesaplaToplamTutar(form.malzemeler, yeniSayac); // Her arttırma/azaltmada toplamı güncelle
  }

  return (
    <div className="display-flex flex-direction-column gap-3rem width-div-100vw">
      <div className="display-flex flex-direction-column gap-1rem font-barlow color-black max-width-35rem margin-0-auto ">
        <h2>Position Absolute Acı Pizza</h2>
        <div className="display-flex justify-content-sb align-items-end">
          <h1>85.50₺</h1>
          <div className="display-flex justify-content-end width-yüz100 gap-3rem ">
            <p>{`${"4.9"}`}</p>
            <p>{`${"200"}`}</p>
          </div>
        </div>
        <p className="text-align-justify">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre...
        </p>
      </div>

      <div className="display-flex gap-5rem min-width-35rem margin-0-auto">
        <div>
          <h2>
            Boyut Seç<span className="color-star">*</span>
          </h2>
          {boyutlar.map((boyut, ind) => {
            return (
              <label key={ind} className="display-flex gap-1rem">
                <input
                  type="radio"
                  name="boyut"
                  value={boyut}
                  onChange={handleChange}
                />
                {boyut}
              </label>
            );
          })}
          {error && <p style={{ color: "red" }}>{error.boyutHata}</p>}
        </div>

        <div>
          <h2>
            Hamur Seç<span className="color-star">*</span>
          </h2>
          <select name="hamur" onChange={handleChange}>
            <option value="" disabled selected>
              Hamur Kalınlığı
            </option>
            {hamurlar.map((hamur, ind) => {
              return (
                <option key={ind} value={hamur}>
                  {hamur}
                </option>
              );
            })}
          </select>
          {error && <p style={{ color: "red" }}>{error.hamurHata}</p>}
        </div>
      </div>

      <div className="display-flex flex-direction-column max-width-35rem gap-2rem margin-0-auto">
        <div className="display-flex flex-direction-column gap-1rem">
          <h2>Ek Malzemeler</h2>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          {error && <p style={{ color: "red" }}>{error.malzemelerHata}</p>}
        </div>
        <div className="display-flex justify-content-sb gap-1-5rem wrap">
          {malzemeler.map((malzeme, ind) => {
            return (
              <label
                key={ind}
                className="display-flex gap-0-5rem flex-basis-9rem"
              >
                <input
                  type="checkbox"
                  name="malzemeler"
                  value={malzeme}
                  disabled={
                    form.malzemeler.length >= 10 &&
                    !form.malzemeler.includes(malzeme)
                  }
                  onChange={handleChange}
                />
                {malzeme}
              </label>
            );
          })}
          <label className="flex-basis-9rem"></label>
        </div>
      </div>

      <div className="display-flex flex-direction-column min-width-35rem margin-0-auto">
        <label htmlFor="siparisNotu">Sipariş Notu</label>
        <textarea
          className="resize"
          name="siparisNotu"
          id="siparisNotu"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          value={form.siparisNotu}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="display-flex min-width-35rem margin-0-auto">
        <div className="display-flex ">
          <button
            name="azalt"
            disabled={form.sayac < 2}
            onClick={handleClick}
            className="size-square-3 background-color-button text-align-c fontsize-1-5rem font-weigth-bold cursor"
          >
            —
          </button>
          <label
            className="size-square-3-3 display-flex justify-content-center align-items-center "
            type="text"
          >
            {form.sayac}
          </label>
          <button
            name="arttır"
            disabled={form.sayac > 9}
            onClick={handleClick}
            className="size-square-3 background-color-button text-align-c fontsize-1-5rem font-weigth-bold cursor"
          >
            +
          </button>
        </div>

        <div className="width-yüz100">
          <div>
            <label>Sipariş Toplamı</label>
            <div className="display-flex justify-content-sb">
              <label>Ekstra Tutar:</label>
              <label> {form.ekstraTutar} </label>
            </div>
            <div className="display-flex justify-content-sb">
              <label>Toplam Tutar:</label>
              <label> {form.toplamTutar} </label>
            </div>
          </div>
          <button
            onClick={() => hesaplaToplamTutar(form.malzemeler, form.sayac)}
            className="max-width-div-18rem background-color-button text-align-c border-none border-radius-0-3rem"
          >
            Sipariş Ver
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;

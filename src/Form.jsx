import React from 'react'
import './index.css'
const boyutlar = ['Küçük', 'Orta', 'Büyük']; 
const hamurlar = ['İnce', 'Orta', 'Kalın'];
const malzemeler = ['Pepperoni','Tavuk Izgara', 'Mısır', 'Sarımsak' , 'Ananas', 'Sosis', 'Soğan', 'Sucuk', 'Biber' , 'Kabak', 'Kanada Jambonu', 'Domates', 'Jalepeno', 'Sucuk'];
function Form() {
    return (
        <div className='display-flex justify-content align-items text-content gap-10rem flex-direction-column'>
            <div className="font-barlow color-black max-width">
                <div className='display-flex flex-direction-column'>
                    <h2>Position Absolute Acı Pizza</h2>
                    <div className='display-flex flex-direction-row justify-content-sb'>
                        <h1>85.50₺</h1>
                        <div className='display-flex width-100 justify-content-end gap-3rem'>
                            <p>4.9</p>
                            <p>(200)</p>
                        </div>
                    </div>
                    <p className='text-align-start'>
                        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                    </p>
                </div>
                <div className='display-flex gap-9rem'>{/* Boyut - Hamur */}
                    <div>{/* Boyut Seç */}
                        <h2>Boyut Seç<span className='color-star'>*</span></h2>
                        {boyutlar.map((boyut, ind) => {
                            return (
                                <label key={ind} className='display-flex gap-1rem'>
                                    <input type="radio" name="boyut" value="boyut" />
                                    {boyut}
                                </label>
                            )
                        })}
                    </div>
                    <div> {/* Hamur Seç */}
                        <h2>Hamur Seç<span className='color-star'>*</span></h2>
                        <select name="hamur" id="">
                            <option value="" disabled selected>Hamur Kalınlığı</option>
                            {hamurlar.map((hamur, ind) => {
                                return (
                                    <option value={hamur}>{hamur}</option>
                                )
                            })
                            }
                        </select>
                    </div>
                </div>
                </div>
                <div className='display-flex flex-direction-column max-width-35rem gap-3rem margin-0-auto'> {/* Ek Malzemeler */}
        <div className='display-flex flex-direction-column gap-1rem'>
          <h2>Ek Malzemeler</h2>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        <div className='display-flex justify-content-sb gap-1-5rem wrap'>
        {malzemeler.map((malzeme,ind) => {
          return (
          <label key={ind} className='flex-basis-9rem'>
            <input type="checkbox" checked='' />
            {malzeme}
          </label>
          )
        })}
          <label className='flex-basis-9rem'>
          </label>
        </div>
      </div>
    </div>
  )
}
export default Form
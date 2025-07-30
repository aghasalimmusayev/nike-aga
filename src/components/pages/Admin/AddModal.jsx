import React, { useState } from 'react';
import './adminCSS/modal.css';
import { nanoid } from 'nanoid';

function AddModal({ AddClose }) {

  const [formData, setFormData] = useState({
    id: nanoid(),
    Title: "",
    OriginalPrice: 0,
    DiscountPrice: 0,
    sekil: "",
    CategoryName: "",
    Dil: "",
    Müəllif: "",
    stokSayi: 0,
    satildi: 0,
    baxildi: 0,
    description: ""
  });

  return (
    <div className="modal-overlay" onClick={AddClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Kitab elave Et</h2>

        <form onSubmit={postBook}>
          <div className="modal-body">
            <div className="modal-fields">
              <label>
                Başlıq:
                <input name='Title' type="text" value={formData.Title} onChange={handleChange} />
              </label>
              <label>
                Müəllif:
                <input name='Müəllif' type="text" value={formData.Müəllif} onChange={handleChange} />
              </label>
              <label>
                Qiymət:
                <input name='OriginalPrice' type="number" value={formData.OriginalPrice} onChange={handleChange} />
              </label>
              <label>
                Endirimli Qiymət:
                <input name='DiscountPrice' type="number" value={formData.DiscountPrice} onChange={handleChange} />
              </label>
              <label>
                Dil:
                <input name='Dil' type="text" value={formData.Dil} onChange={handleChange} />
              </label>
              <label>
                Kateqoriya:
                <input name='CategoryName' type="text" value={formData.CategoryName} onChange={handleChange} />
              </label>
              <label>
                Stok Sayı:
                <input name='stokSayi' type="number" value={formData.stokSayi} onChange={handleChange} />
              </label>
              <label>
                Şəkil URL:
                <input name='sekil' type="text" value={formData.sekil} onChange={handleChange} />
              </label>
              <label>
                Təsvir:
                <textarea name='description' rows="4" value={formData.description} onChange={handleChange} />
              </label>
            </div>
          </div>
          <div className="modal-actions">
            <button className="save-btn" type='submit'>Gonder</button>
            <button className="cancel-btn" type='button' onClick={AddClose}>Bağla</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddModal;

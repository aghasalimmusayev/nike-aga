import React, { useEffect, useState } from 'react';
import './adminCSS/modal.css';

function EditModal({ editClose, bookId, setBookId }) {

  return (
    <div className="modal-overlay" onClick={editClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Kitabı Redaktə Et</h2>

        <form onSubmit={editThisBook}>
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
            <button className="save-btn" type='submit'>Yadda saxla</button>
            <button className="cancel-btn" type='button' onClick={editClose}>Ləğv et</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;

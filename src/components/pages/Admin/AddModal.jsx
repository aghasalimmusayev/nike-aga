import React, { useState } from 'react';
import './adminCSS/modal.css';
import { nanoid } from 'nanoid';
import { postNewProduct } from '../../../service/adminService';
import { getProducts } from '../../../redux/ProductsSlice';
import { useDispatch } from 'react-redux';
import { showAddSuccess, showError } from '../../Notify';

function AddModal({ AddClose }) {

  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    id: nanoid(),
    title: "",
    price: 0,
    discountPercentage: 0,
    images: [],
    category: "",
    stock: 0,
    description: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "images") {
      setFormData((prev) => ({
        ...prev,
        images: value.split(",").map(img => img.trim())
      }));
    }
    else if (name === "price" || name === "discountPercentage" || name === "stock") {
      const numericValue = value === "" ? 0 : Number(value);
      setFormData((prev) => ({
        ...prev,
        [name]: isNaN(numericValue) ? 0 : numericValue
      }));
    }
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };
  async function createProduct(e) {
    e.preventDefault()
    try {
      const res = await postNewProduct(formData)
      if (res.status === 200 || res.status === 201) {
        dispatch(getProducts())
        AddClose()
        showAddSuccess()
      } else {
        showError('Could not add the production - status: ' + res.status)
      }
    }
    catch (error) {
      console.error('Error caught:', error);
      showError('Could not add the production - Error: ' + (error.message || 'Unknowen error'))
    }
  }
  return (
    <div className="modal-overlay" onClick={AddClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Add new product</h2>

        <form onSubmit={createProduct}>
          <div className="modal-body">
            <div className="modal-fields">
              <label>
                Name:
                <input name='title' type="text" value={formData.title} onChange={handleChange} autoFocus />
              </label>
              <label>
                Price:
                <input name='price' type="text" value={formData.price} onChange={handleChange} />
              </label>
              <label>
                Discounted price:
                <input name='discountPercentage' type="text" value={formData.discountPercentage} onChange={handleChange} />
              </label>
              <label>
                Category:
                <input name='category' type="text" value={formData.category} onChange={handleChange} />
              </label>
              <label>
                Stock:
                <input name='stock' type="text" value={formData.stock} onChange={handleChange} />
              </label>
              <label>
                Image:
                <input name='images' type="text" value={formData.images} onChange={handleChange} placeholder="url1, url2, url3, ..." />
              </label>
              <label>
                Description:
                <textarea name='description' rows="4" value={formData.description} onChange={handleChange} />
              </label>
            </div>
          </div>
          <div className="modal-actions">
            <button className="save-btn" type='submit'>Send data</button>
            <button className="cancel-btn" type='button' onClick={AddClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddModal;

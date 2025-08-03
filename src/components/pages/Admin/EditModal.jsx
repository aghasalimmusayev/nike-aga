import React, { useEffect, useState } from 'react';
import './adminCSS/modal.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../../../service/adminService';
import { getProducts } from '../../../redux/ProductsSlice';

function EditModal({ editClose, productId }) {

  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)
  const selectedProduct = products.find(item => item.id === productId)
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    discountPercentage: 0,
    images: [],
    category: "",
    stock: 0,
    description: ""
  });
  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        title: selectedProduct.title,
        price: selectedProduct.price,
        discountPercentage: selectedProduct.discountPercentage,
        images: selectedProduct.images,
        category: selectedProduct.category,
        stock: selectedProduct.stock,
        description: selectedProduct.description
      })
    }
  }, [selectedProduct])
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
  async function changingProduct(e) {
    e.preventDefault()
    try {
      const res = await editProduct(productId, formData)
      dispatch(getProducts())
      editClose()
      alert('mehsul deyisdirildi')
    }
    catch (error) {
      console.log('Mehsul edit olmadi: ' + error)
      alert('deyisdirilme bas vermedi')
    }
  }


  return (
    <div className="modal-overlay" onClick={editClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Edit the Product</h2>

        <form onSubmit={changingProduct}>
          <div className="modal-body">
            <div className="modal-fields">
              <label>
                Name:
                <input name='title' type="text" value={formData.title} onChange={handleChange} />
              </label>
              <label>
                Price:
                <input name='price' type="text" value={formData.price} onChange={handleChange} />
              </label>
              <label>
                Discounted Price:
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
                Images URL:
                <input name='images' type="text" value={formData.images} onChange={handleChange} />
              </label>
              <label>
                Description:
                <textarea name='description' rows="4" value={formData.description} onChange={handleChange} />
              </label>
            </div>
          </div>
          <div className="modal-actions">
            <button className="save-btn" type='submit'>Save</button>
            <button className="cancel-btn" type='button' onClick={editClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;

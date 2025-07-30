import React, { useEffect, useState } from 'react';
import { SlPencil, SlTrash, SlPlus } from "react-icons/sl";
import './adminCSS/admin.css';
import AdminLoading from './AdminLoading'
import AddModal from './AddModal'
import EditModal from './EditModal';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/ProductsSlice';

function Admin() {

    const { products } = useSelector(state => state.products);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    const stokdaVar = products?.reduce((acc, item) => {
        const stok = Number(item.stock) || 0;
        return acc + stok;
    }, 0);
    const satis = products?.reduce((acc, item) => {
        const satis = Number(item.sold) || 0;
        return acc + satis;
    }, 0);

    const [addOpen, setAddOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)

    function AddClose() {
        setAddOpen(false)
    }
    function addNewBook() {
        setAddOpen(true)
    }

    function editClose() {
        setEditOpen(false)
    }

    return (
        <div className="admin-container">
            <div className="admin-header">
                <h1 className='admin_head'>Adminstrator</h1>
                <button className="add-btn" onClick={addNewBook}>
                    <SlPlus />
                    New product
                </button>
            </div>
            {addOpen && <AddModal AddClose={AddClose} />}
            {editOpen && <EditModal editClose={editClose} />}
            <div className="main_info">
                <div className="main_info_heading">
                    <h3>All products</h3>
                    <p className="main_result blue">{products?.length}</p>
                </div>
                <div className="main_info_heading">
                    <h3>Total Stock</h3>
                    <p className="main_result green">{stokdaVar}</p>
                </div>
                <div className="main_info_heading">
                    <h3>Sold</h3>
                    <p className="main_result purple">{satis}</p>
                </div>
            </div>
            <div className="table-container">
                <table className="books-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Sold</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.length > 0 &&
                            products.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="book-info">
                                            <div className="book-title">{item.title}</div>
                                            <div className="book-category">{item.category}</div>
                                        </div>
                                    </td>
                                    <td>{item.price} ₼</td>
                                    <td>
                                        <span className={`stock ${item.stock > 10 ? 'high' :
                                            item.stock > 0 ? 'medium' : 'low'}`}>
                                            {item.stock}
                                        </span>
                                    </td>
                                    <td>{item.sold || 0}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="edit-btn" >
                                                <SlPencil />
                                            </button>
                                            <button className="delete-btn" >
                                                <SlTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {products?.length == 0 &&
                    <div className="adminLoading">
                        <p className='loading_text'>Loading ...</p>
                        <AdminLoading />
                    </div>}
            </div>
        </div >
    );
}

export default Admin;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Asset.css';
import RegisterSupplier from './RegisterSupplier';
import { getAllSuppliers, createSupplier, getSupplierById } from '../services/SupplierServices';  // Import API functions

const ManageSupplier = ({ onEdit, onDelete, onView }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [supplierList, setSupplierList] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null); // For viewing individual supplier details

  useEffect(() => {
    // Fetch supplier data from backend when component mounts
    getAllSuppliers()
      .then(response => setSupplierList(response.data))
      .catch(error => console.error('Error fetching suppliers:', error));
  }, []);

  const handleAddClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedSupplier(null);  // Clear selected supplier when closing modal
  };

  const handleFormSubmit = (newSupplier) => {
    createSupplier(newSupplier)
      .then(response => {
        setSupplierList([...supplierList, response.data]);  // Add new supplier to the list
        setModalOpen(false);  // Close the modal after submission
      })
      .catch(error => console.error('Error creating supplier:', error));
  };

  const handleViewClick = (id) => {
    getSupplierById(id)
      .then(response => {
        setSelectedSupplier(response.data);  // Set the selected supplier for viewing
        setModalOpen(true);  // Open modal to view details
      })
      .catch(error => console.error('Error fetching supplier details:', error));
  };

  return (
    <div className='content'>
      <div className="asset-table-container">
        <h1 className='supplierh1'>Manage Supplier</h1>
        <button className="add-button" onClick={handleAddClick}>ADD</button>
        <hr />
        <div className="table-wrapper">
          <table className="asset-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Service Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {supplierList.length === 0 ? (
                <tr>
                  <td colSpan="7" className="no-data">No supplier found</td>
                </tr>
              ) : (
                supplierList.map((supplier) => (
                  <tr key={supplier.supplierId}>
                    <td>{supplier.supplierId}</td>
                    <td>{supplier.name}</td>
                    <td>{supplier.address}</td>
                    <td>{supplier.contact}</td>
                    <td>{supplier.email}</td>
                    <td>{new Date(supplier.serviceDate).toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => handleViewClick(supplier.supplierId)}>View</button>
                      <button onClick={() => onEdit(supplier)}>Edit</button>
                      {/* <button onClick={() => onDelete(supplier.supplierId)}>Delete</button> */}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>&times;</button>
            {selectedSupplier ? (
              <div>
                <h2>Supplier Details</h2>
                <p><strong>ID:</strong> {selectedSupplier.supplierId}</p>
                <p><strong>Brand Name:</strong> {selectedSupplier.name}</p>
                <p><strong>Address:</strong> {selectedSupplier.address}</p>
                <p><strong>Contact:</strong> {selectedSupplier.contact}</p>
                <p><strong>Email:</strong> {selectedSupplier.email}</p>
                <p><strong>Service Date:</strong> {new Date(selectedSupplier.serviceDate).toLocaleDateString()}</p>
              </div>
            ) : (
              <RegisterSupplier onSubmit={handleFormSubmit} onClose={handleCloseModal} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

ManageSupplier.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

ManageSupplier.defaultProps = {
  supplier: [],
};

export default ManageSupplier;

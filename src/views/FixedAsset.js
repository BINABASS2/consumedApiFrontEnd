import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Asset.css';
import Modal from './Modal';  // Import the Modal component
import RegisterAsset from './RegisterAsset';  // Import the RegisterAsset component
import { getAllAsset } from 'services/assetService';
// import { useEffect } from 'react/cjs/react.production.min';

const FixedAsset = ({ onEdit, onDelete, onView, onAdd }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Sample assets data (Initial state populated with sample data)
  const [assets, setAssets] = useState([]);

  // useEffect(() =>{
  //   getAsset();
  // }, []);

  const getAsset = () =>  {

    getAllAsset().then((response) => {
      setAssets(response.data);
    }).catch( error => console.error(error));
  } 

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = (newAsset) => {
    // Add new asset to the assets list
    setAssets([...assets, { ...newAsset, id: (assets.length + 1).toString() }]);
    setModalOpen(false); // Close the modal after submission
  };

  return (
    <div className='content'>
      <div className="asset-table-container">
        <h1 className='asseth1'>Manage Asset</h1>
        <button className="add-button" onClick={handleOpenModal}>ADD</button>
        <hr/>
        <div className="table-wrapper">
          <table className="asset-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Purchase Date</th>
                <th>Status</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Supplier</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.length === 0 ? (
                <tr>
                  <td colSpan="8" className="no-data">No assets found</td>
                </tr>
              ) : (
                assets.map((asset) => ( 
                  <tr key={asset.id}>
                    <td>{asset.id}</td>
                    <td>{asset.name}</td>
                    <td>{asset.type}</td>
                    <td>{asset.description}</td>
                    <td>{asset.cost}</td>
                    <td>{asset.purchaseDate}</td>
                    <td>{asset.status}</td>
                    <td>{asset.quantity}</td>
                    <td>{asset.supplier}</td>
                    <td>
                      <button onClick={() => onView(asset)}>View</button>
                      <button onClick={() => onEdit(asset)}>Edit</button>
                      {/* <button onClick={() => onDelete(asset.id)}>Delete</button> */}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <RegisterAsset onSubmit={handleFormSubmit} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

FixedAsset.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

FixedAsset.defaultProps = {
  assets: [],
};

export default FixedAsset;

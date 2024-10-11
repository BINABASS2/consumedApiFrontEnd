import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Asset.css';
import RegisterStaff from './RegisterStaff';
import { getAllStaff, createStaff, getStaffById, updateStaff } from '../services/StaffService'; // Import the service functions

const ManageStaff = ({ onEdit, onDelete }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [staffList, setStaffList] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null); // State for the selected staff
  const [isAdding, setIsAdding] = useState(false); // To differentiate between Add and Edit mode
  const [isEditing, setIsEditing] = useState(false); // To handle editing mode

  useEffect(() => {
    // Fetch staff data from the back-end when the component mounts
    getAllStaff()
      .then(response => setStaffList(response.data))
      .catch(error => console.error('Error fetching staff data:', error));
  }, []);

  const handleAddClick = () => {
    setIsAdding(true);  // Set adding mode
    setIsEditing(false); // Disable editing mode
    setModalOpen(true);  // Open the modal
  };

  const handleEditClick = (staff) => {
    setSelectedStaff(staff);  // Set the selected staff for editing
    setIsAdding(false);  // Disable adding mode
    setIsEditing(true);  // Enable editing mode
    setModalOpen(true);  // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedStaff(null);  // Reset selected staff when closing modal
    setIsAdding(false);  // Reset adding mode
    setIsEditing(false); // Reset editing mode
  };

  const handleFormSubmit = (staffData) => {
    if (isEditing && selectedStaff) {
      // Call the updateStaff function for editing
      updateStaff(selectedStaff.id, staffData)
        .then(response => {
          setStaffList(staffList.map(staff => staff.id === response.data.id ? response.data : staff));  // Update the state with the edited staff
          setModalOpen(false);  // Close the modal after submission
        })
        .catch(error => console.error('Error updating staff:', error));
    } else {
      // Add new staff to the back-end
      createStaff(staffData)
        .then(response => {
          setStaffList([...staffList, response.data]);  // Update the state with the new staff
          setModalOpen(false);  // Close the modal after submission
        })
        .catch(error => console.error('Error creating staff:', error));
    }
  };

  const handleViewClick = (id) => {
    setSelectedStaff(null);
    setIsAdding(false);  // Set view mode
    
    getStaffById(id)
      .then(response => {
        setSelectedStaff(response.data);  // Set the selected staff to state
        setModalOpen(true);               // Open the modal after data is loaded
      })
      .catch(error => console.error('Error fetching staff details:', error));
  };

  return (
    <div className='content'>
      <div className="asset-table-container">
        <h1 className='staffh1'>Manage Staff</h1>
        <button className="add-button" onClick={handleAddClick}>ADD</button>
        <hr />
        <div className="table-wrapper">
          <table className="asset-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Role</th>
                <th>Registered Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {staffList.length === 0 ? (
                <tr>
                  <td colSpan="7" className="no-data">No staff found</td>
                </tr>
              ) : (
                staffList.map((staff) => (
                  <tr key={staff.id}>
                    <td>{staff.id}</td>
                    <td>{staff.full_name}</td>
                    <td>{staff.contact}</td>
                    <td>{staff.email}</td>
                    <td>{staff.role}</td>
                    <td>{new Date(staff.registeredDate).toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => handleViewClick(staff.id)}>View</button>
                      <button onClick={() => handleEditClick(staff)}>Edit</button> {/* Edit button */}
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
            
            {isAdding ? (
              // Show the RegisterStaff form for adding a new staff
              <RegisterStaff onClose={handleCloseModal} onRegister={handleFormSubmit} />
            ) : isEditing && selectedStaff ? (
              // Show the RegisterStaff form for editing the selected staff
              <RegisterStaff
                onClose={handleCloseModal}
                onRegister={handleFormSubmit}
                staff={selectedStaff}  // Pass the selected staff data for editing
                isEditing={true}       // Set edit mode to true
              />
            ) : selectedStaff ? (
              // Show the staff details for viewing
              <div>
                <h2>Staff Details</h2>
                <p><strong>ID:</strong> {selectedStaff.id}</p>
                <p><strong>Full Name:</strong> {selectedStaff.full_name}</p>
                <p><strong>Contact:</strong> {selectedStaff.contact}</p>
                <p><strong>Email:</strong> {selectedStaff.email}</p>
                <p><strong>Role:</strong> {selectedStaff.role}</p>
                <p><strong>Registered Date:</strong> {new Date(selectedStaff.registeredDate).toLocaleDateString()}</p>
              </div>
            ) : (
              <div>Loading staff details...</div>  // Display loading message while data is being fetched
            )}
          </div>
        </div>
      )}
    </div>
  );
};

ManageStaff.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

ManageStaff.defaultProps = {
  staffs: [],
};

export default ManageStaff;

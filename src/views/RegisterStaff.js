import React, { useState, useEffect } from 'react';
import './RegisterAsset.css';
import { Button, Card, CardBody, FormGroup, Form, Input, Row, Col } from 'reactstrap';

const RegisterStaff = ({ onClose, onRegister, staff, isEditing }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    contact: "",
    email: "",
    role: "",
    registered_date: "", // Date will be submitted as well
  });

  useEffect(() => {
    if (isEditing && staff) {
      // Pre-fill the form with the selected staff data when editing
      setFormData({
        full_name: staff.full_name,
        contact: staff.contact,
        email: staff.email,
        role: staff.role,
        registered_date: new Date(staff.registeredDate).toISOString().split('T')[0], // Format date
      });
    }
  }, [isEditing, staff]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      full_name: formData.full_name,
      contact: formData.contact,
      email: formData.email,
      role: formData.role,
      registeredDate: new Date(formData.registered_date).toISOString(), // Format date correctly
    };

    onRegister(formattedData); // Call parent function to submit the form
  };

  return (
    <div className="content">
      <h5 className="title">{isEditing ? "Edit Staff" : "New Staff"}</h5>
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label>Full Name</label>
                  <Input
                    type="text"
                    name="full_name"
                    placeholder="Full Name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Contact</label>
                  <Input
                    name="contact"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Role</label>
                  <Input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Registered At</label>
                  <Input
                    type="date"
                    name="registered_date"
                    placeholder="Registered Date"
                    value={formData.registered_date}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button className="btn-fill" color="primary" type="submit">
              {isEditing ? "Update" : "Register"}
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterStaff;

import React, { useState } from 'react';
import './RegisterAsset.css';
import { Button, Card, CardBody, FormGroup, Form, Input, Row, Col } from 'reactstrap';

const RegisterAsset = ({ onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    value: "",
    purchaseDate: "",
    status: "",
    appreciation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData); // Send the form data to the parent component
    setFormData({
      name: "",
      type: "",
      description: "",
      value: "",
      purchaseDate: "",
      status: "",
      appreciation: ""
    });
    onClose();  // Close the modal after submission
  };

  return (
    <div className="content">
      <h5 className="title">Register Asset</h5>
      <Button onClick={onClose} 
        color="secondary" 
        style={{ 
          fontSize: '15px',
          height: '50px',
          // cursor: 'pointer',
          // fontWeight: 'bold',
        }}>Close
      </Button>

      <Card>
        <CardBody>
        <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label>Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Type</label>
                  <Input
                    type="select"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Type</option>
                    <option value="Fixed">Fixed</option>
                    <option value="Non-Fixed">Variable</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Description</label>
                  <Input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Purchased Value</label>
                  <Input
                    name="purchasedValue"
                    placeholder="Amount"
                    value={formData.purchasedValue}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Purchase Date</label>
                  <Input
                    type="date"
                    name="purchaseDate"
                    placeholder="Purchase Date"
                    value={formData.purchaseDate}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Status</label>
                  <Input
                    type="text"
                    name="status"
                    placeholder="Status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Category</label>
                  <Input
                    type="text"
                    name="status"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Quantity</label>
                  <Input
                    type="text"
                    name="appreciation"
                    placeholder="Quantity"
                    value={formData.appreciation}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Supplier</label>
                  <Input
                    type="text"
                    name="Supplier"
                    placeholder="Supplier"
                    value={formData.Supplier}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button className="btn-fill" color="primary" type="submit">
              Register
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterAsset;

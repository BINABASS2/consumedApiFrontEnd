import React, { useState } from 'react';
import classNames from 'classnames';
import { Line } from 'react-chartjs-2';
import './Dashboard.css'
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from 'reactstrap';
import { chartExample1 } from 'variables/charts.js';

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [assets, setAssets] = useState({
    fixed: [
      { 
        name: 'Desk', 
        description: 'Wooden desk with drawers and hutch', 
        amount: 15, 
        supplier: 'FurnitureDepot' 
      },
      { 
        name: 'Desk', 
        description: 'Glass top desk with chrome legs', 
        amount: 8, 
        supplier: 'OfficePlus' 
      },
      {  
        name: 'Desk', 
        description: 'Height-adjustable wooden desk', 
        amount: 12, 
        supplier: 'Workspace Solutions' 
      },
      {  
        name: 'Desk', 
        description: 'Corner desk with built-in filing cabinets', 
        amount: 6, 
        supplier: 'OfficeMart' 
      },
      { 
        name: 'Desk', 
        description: 'Executive desk with leather inlay and integrated storage', 
        amount: 10, 
        supplier: 'Modern Office' 
      },
      {  
        name: 'Desk', 
        description: 'Compact desk suitable for small spaces, wall-mounted',
        supplier: 'Space Savers' 
      },
      { 
        name: 'Desk', 
        description: 'Wooden desk with adjustable legs and modular design', 
        supplier: 'Elegant Furniture' 
      },
      { 
        name: 'Desk', 
        description: 'Desk with built-in USB ports and LED lighting', 
        supplier: 'WorkWell' 
      },
      { 
        name: 'Desk', 
        description: 'Sit-stand desk with programmable height settings', 
        supplier: 'ErgoDesk' 
      },
      { 
        name: 'Desk', 
        description: 'L-shaped desk with high gloss finish and integrated lighting', 
        supplier: 'LightUp Office' 
      },
      { 
        name: 'Desk', 
        description: 'Desk with custom branding options', 
        amount: 4, 
        supplier: 'Complete' 
      }
    ],
    nonFixed: [
      {
        name: 'Laptop', 
        description: 'Dell XPS 13, Intel i7, 16GB RAM, 512GB SSD', 
        supplier: 'TechStore' 
      },
      {
        name: 'Laptop', 
        description: 'Apple MacBook Air, M2 chip, 8GB RAM, 256GB SSD', 
        supplier: 'MacShop' 
      },
      { 
        name: 'Laptop', 
        description: 'HP Spectre x360, Intel i5, 8GB RAM, 256GB SSD', 
        supplier: 'LaptopWorld' 
      },
      {
        name: 'Laptop', 
        description: 'Lenovo ThinkPad X1, Intel i7, 32GB RAM, 1TB SSD', 
        supplier: 'TechMart' 
      },
      { 
        name: 'Laptop', 
        description: 'Asus ZenBook, AMD Ryzen 7, 16GB RAM, 512GB SSD', 
        supplier: 'GadgetGuru' 
      },
      { 
        name: 'Laptop', 
        description: 'Microsoft Surface Laptop, Intel i5, 8GB RAM, 128GB SSD', 
        supplier: 'SurfaceStore' 
      },
      {
        name: 'Laptop', 
        description: 'Acer Aspire, Intel i3, 4GB RAM, 1TB HDD', 
        supplier: 'PCWorld' 
      },
      {
        name: 'Laptop', 
        description: 'Dell Latitude, Intel i9, 64GB RAM, 2TB SSD', 
        supplier: 'EliteTech' 
      },
      { 
        name: 'Laptop', 
        description: 'Razer Blade, Intel i7, 32GB RAM, 1TB SSD, Gaming', 
        supplier: 'GamingGear' 
      },
      { 
        name: 'Laptop', 
        description: 'Samsung Notebook, AMD Ryzen 5, 16GB RAM, 512GB SSD', 
        supplier: 'SamsungStore' 
      },
      {
        name: 'Laptop', 
        description: 'Google Pixelbook, Intel i5, 8GB RAM, 128GB SSD', 
        supplier: 'GoogleTech' 
      }
    ]
  });

  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  return (

      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Assets</h5>
                    <CardTitle tag="h2">Registered Asset</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Fixed Asset
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Non-Fixed Asset
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Total Staff
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart card-chart-hover">
              <CardHeader>
                <h5 className="card-category">Fixed Asset</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-settings text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart card-chart-hover">
              <CardHeader>
                <h5 className="card-category">Non-Fixed Asset</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" /> 225
                </CardTitle>
              </CardHeader>
              <CardBody>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart card-chart-hover">
              <CardHeader>
                <h5 className="card-category">Total Staff</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-badge text-success" /> 380
                </CardTitle>
              </CardHeader>
              <CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <h6 className="title d-inline">Fixed Asset</h6>
                <p className="card-category d-inline"> currently</p>
              </CardHeader>
              <CardBody>
                <div className="table-scroll">
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary t_header">
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th className="text-center">Supplier</th>
                      </tr>
                    </thead>
                    <tbody className='t_body'>
                      {assets.fixed.length === 0 ? (
                        <tr>
                          <td colSpan="3" className="no-data">No fixed asset found</td>
                        </tr>
                      ) : (
                        assets.fixed.map((asset) => (
                          <tr key={asset.id} >
                            <td>{asset.name}</td>
                            <td>{asset.description}</td>
                            <td className="text-center">{asset.supplier}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <h6 className="title d-inline">Non-Fixed Asset</h6>
                <p className="card-category d-inline"> currently</p>
              </CardHeader>
              <CardBody>
                <div className="table-scroll">
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th className="text-center">Supplier</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assets.nonFixed.length === 0 ? (
                        <tr>
                          <td colSpan="3" className="no-data">No variable asset found</td>
                        </tr>
                      ) : (
                        assets.nonFixed.map((asset) => (
                          <tr key={asset.id}>
                            <td>{asset.name}</td>
                            <td>{asset.description}</td>
                            <td className="text-center">{asset.supplier}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
  );
}

export default Dashboard;

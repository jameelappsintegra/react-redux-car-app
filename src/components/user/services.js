import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';

export default class Services extends Component{
  render(){
    return (
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://images.cnbctv18.com/wp-content/uploads/2020/04/Tesla2-768x512.jpg"
                  alt="New Car"
                />
                <CardBody>
                  <CardTitle>Find New Vehicle</CardTitle>
                  <Button className="btn-success">More</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://www.aboutmanchester.co.uk/wp-content/uploads/2018/07/B1061162-260A-44F9-8F00-411804670D27.png"
                  alt="Finance"
                />
                <CardBody>
                  <CardTitle>Financing</CardTitle>
                  <Button className="btn-success">More</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://d24xizqmfkqp5b.cloudfront.net/articles/images/000/001/215/original/Autoweb-2015-July-Feature-How-to-Test-Drive-002.jpg?2016"
                  alt="Test Drive"
                />
                <CardBody>
                  <CardTitle>Schedule Test Drive</CardTitle>
                  <Button className="btn-success">More</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://awesomedrive.ae/wp-content/uploads/2019/09/Car-Service-Pick-Up-Drop-Off-1024x576.jpg"
                  alt="Service"
                />
                <CardBody>
                  <CardTitle>Schedule Service</CardTitle>
                  <Button className="btn-success">More</Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

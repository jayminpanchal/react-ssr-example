import React, { Component } from 'react';
import Page from '../../component/Page';
import { Row, Col } from 'antd';

class Contact extends Component {
  render() {
    return (
      <Page title="Contact" id="contacts"
        description="This page will have a custom set description">
        <Row type="flex" justify="space-between" align="middle">
          <Col span={12} offset={6}>
            <h2 style={{textAlign:'center'}}>
              Contact Page
            </h2>
            <p style={{textAlign:'center'}}>
                Proident pariatur aute ex dolore duis voluptate mollit nulla. Proident aliqua labore nostrud magna. Aliquip quis duis ea ex aliqua dolor Lorem consequat dolor. Sint ea adipisicing ad eiusmod exercitation esse incididunt quis deserunt nostrud. Fugiat sunt pariatur non reprehenderit sint sit ex. Nisi veniam sint in nostrud nostrud minim minim reprehenderit ipsum id mollit aliqua.
                Dolore ad velit eiusmod magna veniam duis reprehenderit esse ex Lorem sit consequat consequat ullamco. Labore irure et et culpa ad qui sunt laboris commodo sunt nulla. Non reprehenderit culpa quis culpa enim incididunt mollit velit laboris amet. Consequat veniam esse sint dolore irure. Consequat ut ipsum occaecat ea ut qui ullamco et qui. Incididunt dolore elit nisi reprehenderit nulla reprehenderit.
            </p>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default Contact;
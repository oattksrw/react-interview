import React, { useEffect, useState } from 'react';
import { Col, Layout, Row, Typography } from 'antd';
// import { Footer } from 'antd/es/layout/layout';
import Carlist from './components/car-list';
import axios from 'axios';
import { Fields, driveData, onAddReturnType } from './App.type';
import PriceBox from './components/price-box';
import { config } from './utils';

const { Text } = Typography;


const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [cartData, setCartData] = useState<any>({})
  const [carData, setCarData] = useState<Fields[]>()

  useEffect(() => {
    axios.get('https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car', config)
      .then((res) => {
        const list = res?.data?.items
        if (list.length) {
          const newData = list.map((e: driveData) => e.fields)
          setCarData(newData)
        }
      })
  }, [])

  const onAddCar = (data: onAddReturnType) => {
    setCartData({
      ...cartData,
      [data.title]: {
        ...data,
        total: cartData?.[data.title] ? cartData?.[data.title].total + 1 : 1
      }
    })
  }

  const onMinus = (data: onAddReturnType) => {
    setCartData({
      ...cartData,
      [data.title]: {
        ...data,
        total: cartData?.[data.title] && cartData?.[data.title].total > 0 ? cartData?.[data.title].total - 1 : 0
      }
    })
  }


  const transformCartData = () => {
    const data = Object.keys(cartData).map((e) => {
      return cartData[e]
    })
    return data
  }

  const newCartData: Fields[] = transformCartData()

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0073fa',
        }}>
        <Text><h3 style={{ color: '#ffffff' }}>Drive hub</h3></Text>
      </Header>
      <Content>
        <Layout style={{ padding: '88px 24px 24px', backgroundColor: 'white' }}>
          <Row>
            <Col span={12}>
              <h3>Bulk Renting</h3>
              <Carlist list={carData} onAdd={onAddCar} addButton />
            </Col>
            <Col span={6} />
            <Col span={6}>
              <h3>Cart</h3>
              <div
                style={{
                  backgroundColor: '#f5f5f5',
                  padding: '6px',
                  minHeight: '480px',
                  height: '480px',
                  overflow: 'scroll'
                }}
              >
                <Carlist list={newCartData} onAdd={onAddCar} onMinus={onMinus} changValueButton />
                {newCartData && <PriceBox data={newCartData} />}
              </div>

            </Col>
          </Row>

        </Layout>
      </Content>
      <Footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0, textAlign: 'center' }}>drivehub ©2023 Created by Sirawich Surawut</Footer>
    </Layout>
  );
};

export default App;
import React from 'react'
import { Layout, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import BrandImage from './BrandImage'

const AntdHeader = Layout.Header

const Header = () => (
    <AntdHeader className='layout-header'>
        <Row align='middle' className='layout-header__container' type='flex'>
            <Col className='layout-header__brand' span={4}>
                <Link to='/'>
                    <BrandImage />
                </Link>
            </Col>
        </Row>
    </AntdHeader>
)

export default Header

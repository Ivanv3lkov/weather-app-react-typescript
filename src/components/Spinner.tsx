import React from 'react';
import { Spin } from 'antd';

const Spinner: React.FC = () => {
    return (
        <div style={{ textAlign: "center", fontSize: "25px", margin: "2px" }}>
            <Spin tip="Loading..." size="large" />
        </div>
    )
}

export default Spinner;
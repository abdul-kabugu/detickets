
import React from 'react';

import LeftTab from '../components/LeftTab';
import DashbordTab from '../components/DashbordTab';

const Dasboard = () => {
     return <div style={{display: "flex"}}>
       <LeftTab />
       <DashbordTab />
    </div>;
}



export default Dasboard;
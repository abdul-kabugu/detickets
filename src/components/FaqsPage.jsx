import { Collapse } from 'antd';
import React from 'react';
import Navbar from './Navbar';

const FaqsPage = () => {
    const {Panel} = Collapse
    return <div className='faqs-container'>
        <div className='faqs-header'>
        <div className='faqs-navbar'>{<Navbar />}</div>
        <div className='faqs-heading'>
            <h1 className='faqs-title'>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
        </div>
        <div className='faqs-body'>
        <Collapse>
            <Panel header="How do I sell tickets in deTickets" key="1" style={{fontSize: 30, fontFamily:  'Libre Franklin', borderRadius: 14}}>
                <p style={{fontSize: 20, textAlign: "center"}}>We are currently testing the platform with a select number of users and influencers in a closed beta, to ensure a stabile system. You can request an invite with 
                "Get started" above. We are planning an open launch for the public in Q2 2022.</p>
            </Panel>
            <Panel header="Can i buy tickets with credit/debit card" key="2" style={{fontSize: 30, fontFamily:  'Libre Franklin'}}>
                <p style={{fontSize: 20, textAlign: "center"}}>We are currently testing the platform with a select number of users and influencers in a closed beta, to ensure a stabile system. You can request an invite with
                 "Get started" above. We are planning an open launch for the public in Q2 2022.</p></Panel>
            <Panel header="How do I Resell my ticket" key="3"  style={{fontSize: 30, fontFamily:  'Libre Franklin'}}>
                <p style={{fontSize: 20, textAlign: "center"}}>We are currently testing the platform with a select number of users and influencers in a closed beta, to ensure a stabile system. You can request an invite with
                 "Get started" above. We are planning an open launch for the public in Q2 2022.</p>
            </Panel>
            <Panel header="What fees and costs are connected using to using detickets" key="4"  style={{fontSize: 30, fontFamily:  'Libre Franklin'}}>
               <p style={{fontSize: 20, textAlign: "center"}}>We are currently testing the platform with a select number of users and influencers in a closed beta, to ensure a stabile system. You can request an invite with
                "Get started" above. We are planning an open launch for the public in Q2 2022.</p>
            </Panel>
            <Panel header="How do Store my tickets " key="5" style={{fontSize: 30, fontFamily:  'Libre Franklin'}}>
               <p style={{fontSize: 20, textAlign: "center"}}>We are currently testing the platform with a select number of users and influencers in a closed beta, to ensure a stabile system. You can request an invite 
                "Get started" above. We are planning an open launch for the public in Q2 2022.</p>
            </Panel>
            <Panel header="Can i create ticket with expiration date " key="6" style={{fontSize: 30, fontFamily:  'Libre Franklin'}}>
               <p style={{fontSize: 20, textAlign: "center"}}>We are currently testing the platform with a select number of users and influencers in a closed beta, to ensure a stabile system. You can request an invite 
                "Get started" above. We are planning an open launch for the public in Q2 2022.</p>
            </Panel>
            </Collapse>
        </div>
    </div>;
}



export default FaqsPage;
import React from 'react';
import plai from './plai.png';
import './UserCard.css';
const Avatar = () => (
    
    <img 
        src={plai} 
        style={{
            position: 'relative',
            top: '-45px',
            marginBottom: '-30px',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
           
            
        }}
    />
);
const UserName = () => (
    <h3 style={{ color: '#ffffffff', margin: '10px 0' }}>
        ปราบฎา เปลี่ยนน่วม
    </h3>
);
const UserBio = () => (
    <p style={{ color: '#ffffffff', fontSize: '14px' }}>
        รหัสนักศึกษา 660710765<br/>
        สาขาวิชา เทคโนโลยีสารสนเทศ<br/>
        คณะ วิทยาศาสตร์<br/>
    </p>
);
const UserCard = () => {
    return (
        <div className ="user-card"style={{
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            // backgroundColor: '#A9A9A9',
            backgroundColor: '#2e2e2e',
            width: '300px', 
            height: '400px',    
            margin: '20px auto',
            boxSizing: 'border-box', 
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};
export default UserCard;
import React from 'react';
import './widgetSm.css'
import { newUser } from '../../datas'; 
import VisibilityIcon from '@mui/icons-material/Visibility';
const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'> New Join Member</span>
            <ul className='widgetSmList'>
                {newUser.map((user)=>(
                    <li key={user.id} className="widgetSmListItem">
                    <img src={user.img} className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>{user.userName}</span>
                        <span className='widgetSmUserTitle'>{user.title}</span>
                    </div>
                    <button className='widgetSmButtom'>
                        <VisibilityIcon className='widgetSmIcon'/>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default WidgetSm;

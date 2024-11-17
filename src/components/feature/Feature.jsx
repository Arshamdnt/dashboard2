import React, { useState } from 'react';
import "./Feature.css"
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Feature = () => {

        
    return (
        <div className="feature">
            <div className='FeatureItem'>
                <span className='Featuretitle'>Revenue</span>
                <div className='FeatureContainer'>
                 <span className='FeatureMoney'>$2,415</span>
                    <span className='FeatureRate'>
                    -11.4  <ArrowDownwardOutlinedIcon className="featureIcon Negative"/>
                    </span>   
                </div>
                <span className='featureSub'> Compared ti last month</span>
            </div>

            <div className='FeatureItem'>
                <span className='Featuretitle'>Sales</span>
                <div className='FeatureContainer'>
                 <span className='FeatureMoney'>$4,415</span>
                    <span className='FeatureRate'>
                    -1.7  <ArrowDownwardOutlinedIcon className="featureIcon Negative"/>
                    </span>   
                </div>
                <span className='featureSub'> Compared ti last month</span>
            </div>

            <div className='FeatureItem'>
                <span className='Featuretitle'>Cost</span>
                <div className='FeatureContainer'>
                 <span className='FeatureMoney'>$2,225</span>
                    <span className='FeatureRate'>
                    +12.5  <ArrowUpwardIcon className="featureIcon"/>
                    </span>   
                </div>
                <span className='featureSub'> Compared ti last month</span>
            </div>
        </div>
    );
}

export default Feature;

import React from 'react';
import preloader from '../../../assets/img/preloader.svg'

const Preloader: React.FC = () => {
    return (
        <div style={{ width: '400px' }}>
            <img src={preloader} alt='preloader' />
        </div>
    )
}

export default Preloader;
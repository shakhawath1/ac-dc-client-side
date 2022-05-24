import React from 'react';
import world from '../../images/icon/world.svg'
import doller from '../../images/icon/$.svg'
import parts from '../../images/icon/parts.svg'

const BusinessSummary = () => {
    return (
        <div className='m-14'>
            <h3 className='text-2xl text-center font-bold text-rose-800 mb-6'>Business Summary</h3>
            <div className="stats stats-vertical lg:stats-horizontal flex justify-center">

                <div className="stat justify-items-center">
                    <div className="stat-figure text-primary">
                        <img className='w-10' src={world} alt="" />
                    </div>
                    <div className="stat-title">We served</div>
                    <div className="stat-value text-primary">150+</div>
                    <div className="stat-desc">Coustomers</div>
                </div>

                <div className="stat justify-items-center">
                    <div className="stat-figure text-secondary">
                        <img className='w-10' src={doller} alt="" />
                    </div>
                    <div className="stat-title">Annual revenue</div>
                    <div className="stat-value text-success">90M</div>
                    <div className="stat-desc">21% more than last year</div>
                </div>
                <div className="stat justify-items-center">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value text-secondary">45K</div>
                    <div className="stat-desc"></div>
                </div>

                <div className="stat justify-items-center">
                    <div className="stat-figure text-secondary">
                        <img className='w-10' src={parts} alt="" />
                    </div>
                    <div className="stat-value">70+</div>
                    <div className="stat-title">parts & components</div>
                    <div className="stat-desc text-secondary"></div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;
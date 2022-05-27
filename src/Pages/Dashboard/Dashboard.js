import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <label for="my-drawer" class="btn btn-sm btn-ghost drawer-button lg:hidden">|||</label>
                    {/* Page content here */}
                    <h2 className='text-2xl font-bold text-center lg:my-5'>Welcome to your Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard/profile">My Profile</Link></li>
                        <li><Link to="/dashboard/">My Order</Link></li>
                        <li><Link to="/dashboard/addReview">Add Review</Link></li>

                        <li><Link to="/dashboard/manage-all-orders">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
                        <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import Header from '../components/admin/Header';

function AdminScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('amUserInfo')){
            navigate("/");
        }
    }, []);

    return (
        <div>
            <Header />
        </div>
    )
}

export default AdminScreen

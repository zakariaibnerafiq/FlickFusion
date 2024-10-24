'use client'
import { useEffect, useState } from "react"
import axios from "axios";
interface User {
    username: string;
    email: string;
    profilePic: string | null;
    aboutMe: string;
    isAdmin: boolean;
}
const TopNavbar = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('/api/user/profile');
            setUser(response.data); // Set user data from axios response
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false); // Stop loading state
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="px-10 pt-10 flex flex-col">
            <div className="space-y-1">
                <h2 className="text-3xl font-bold tracking-tight text-peach">Welcome to Admin Panel</h2>
                <p className="text-text text-sm"> <span className=" font-semibold">Admin Email:</span> {user?.email}</p>
            </div>
            <div className="shrink-0 bg-base-200 px-10 h-[1px] my-6"></div>
        </div>
    )
}

export default TopNavbar
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
            const response = await axios.get('/api/user');
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
        <div className="flex flex-col flex-1 w-full">
            <div className="z-10 py-4  shadow-md bg-base-700 ">
                <div className="flex items-center justify-between h-full px-6 mx-auto">
                    <div>
                        <h1 className='text-3xl font-bold text-peach'>Admin Panel</h1>
                    </div>
                    <div>
                        <div className='aspect-square w-12 h-12 bg-white rounded-full flex items-center justify-center text-3xl'>
                        {user?.profilePic ? (
                                <img
                                    src={user.profilePic}
                                    alt="Profile"
                                    className="rounded-full w-full h-full object-cover"
                                />
                            ) : (
                                <span className='text-3xl'>P</span> // Fallback if no profilePic
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

    export default TopNavbar
'use client'; // Important for using hooks like useState and useEffect

import React, { useState, useEffect } from 'react';
// Import the component you created
import { Loading } from '@/components/Loading';

/**
 * Simulates a component that takes time to load (e.g., fetching data)
 */
const PageContent = () => {
    return (
        <div className="text-white text-center p-10">
            <h1 className="text-4xl font-extrabold text-green-400">Content Loaded Successfully!</h1>
            <p className="mt-4 text-lg">The application is ready to use.</p>
        </div>
    );
};

export default function Home() {
    // 1. State to track the loading status
    const [isLoading, setIsLoading] = useState(true);

    // 2. useEffect to simulate a 3-second network delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Stop loading after 3 seconds
        }, 3000); 

        // Cleanup function
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen bg-black">
            {isLoading ? (
                // 3. Render the Loading component when data is being fetched
                // We apply fixed inset to cover the whole screen.
                <div className="fixed inset-0 z-50">
                    <Loading />
                </div>
            ) : (
                // 4. Render the page content once loading is complete
                <PageContent />
            )}
        </main>
    );
}
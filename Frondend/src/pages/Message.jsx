import React, { useState, useEffect } from 'react';

const MessagePage = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/messages');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error('There was an error fetching the messages!', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
              <button
          onClick={() => navigate('/dashboard')}
className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-semibold rounded-lg px-6 py-3 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          ← Back to Dashboard
        </button>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Messages</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-yellow-800 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left text-sm font-semibold">Name</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold">Email</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold">Phone Number</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold">Message</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold">Sent At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.length > 0 ? (
                            messages.map((message, index) => (
                                <tr
                                    key={message._id}
                                    className={
                                        index % 2 === 0
                                            ? 'bg-yellow-50 hover:bg-yellow-100'
                                            : 'bg-white hover:bg-yellow-100'
                                    }
                                >
                                    <td className="py-4 px-6 text-sm text-gray-700">{message.name}</td>
                                    <td className="py-4 px-6 text-sm text-gray-700">{message.email}</td>
                                    <td className="py-4 px-6 text-sm text-gray-700">{message.phoneNumber}</td>
                                    <td className="py-4 px-6 text-sm text-gray-700">{message.message}</td>
                                    <td className="py-4 px-6 text-sm text-gray-700">
                                        {new Date(message.createdAt).toLocaleString()}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="py-4 px-6 text-center text-gray-500 text-sm"
                                >
                                    No messages available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MessagePage;

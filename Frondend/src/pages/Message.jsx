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
        <div className="min-h-screen flex items-center justify-center p-6 bg-black">
            <div className="max-w-5xl w-full">
                <h1 className="text-4xl font-extrabold text-yellow-400 mb-8 text-center">Messages</h1>
                <div className="bg-black/60 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-yellow-400/20 p-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-black/60 backdrop-blur-lg rounded-lg">
                            <thead className="bg-yellow-400/10 text-yellow-400">
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
                                                    ? ' hover:bg-yellow-400/20'
                                                    : ' hover:bg-yellow-400/20'
                                            }
                                        >
                                            <td className="py-4 px-6 text-sm text-gray-300">{message.name}</td>
                                            <td className="py-4 px-6 text-sm text-gray-300">{message.email}</td>
                                            <td className="py-4 px-6 text-sm text-gray-300">{message.phoneNumber}</td>
                                            <td className="py-4 px-6 text-sm text-gray-300">{message.message}</td>
                                            <td className="py-4 px-6 text-sm text-gray-300">
                                                {new Date(message.createdAt).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
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
            </div>
        </div>
    );
};

export default MessagePage;

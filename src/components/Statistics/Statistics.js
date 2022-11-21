import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const Statistics = () => {
    const topicsInfo = useLoaderData();

    return (
        <section className='h-[40vh] md:h-[60vh] md:w-[60%] w-[100%] m-auto'>
            <h1 className='my-16 text-4xl font-semibold text-[#172652]'>Statistics of Topics</h1>
            <ResponsiveContainer width='100%'>
                <BarChart
                    data={topicsInfo.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default Statistics;
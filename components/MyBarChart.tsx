// JavaScript source code
// MyBarChart.tsx 파일 내용

"use client";

import React from 'react';
//
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
// MyBarChart.tsx 파일 (Import 문 아래에 추가)

// 2. 그래프에 표시할 데이터 배열을 정의합니다.
const data = [
    { name: 'JavaScript', 점수: 80, 포트폴리오기여도: 60 },
    // ... 기타 데이터
];

const MyBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="점수" fill="#8884d8" />
                <Bar dataKey="포트폴리오기여도" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MyBarChart;
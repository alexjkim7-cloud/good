// JavaScript source code
// MyBarChart.tsx 파일 내용

"use client";

import { Pie, PieChart, ResponsiveContainer } from 'recharts';

// #region Sample data
const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];

// #endregion
export default function TwoLevelPieChart({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
    return (
        // 💡 1. 차트 크기를 제어하는 외부 div 추가 (높이 필수!)
        <div style={{ width: '100%', height: '400px', maxWidth: '500px' }}>

            {/* 💡 2. ResponsiveContainer로 PieChart를 감쌉니다. */}
            <ResponsiveContainer width="100%" height="100%">
                <PieChart
                    // ❌ style 속성에서 width, height, aspectRatio 제거 (ResponsiveContainer가 처리함)
                    // ❌ responsive 속성 제거 (타입 에러의 원인)
                    style={{ maxWidth: '500px', maxHeight: '80vh' }}
                >
                    <Pie
                        data={data01}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius="50%"
                        fill="#8884d8"
                        isAnimationActive={isAnimationActive}
                    />
                    <Pie
                        data={data02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="80%"
                        fill="#82ca9d"
                        label
                        isAnimationActive={isAnimationActive}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div> // 💡 닫는 div 태그
    );
}
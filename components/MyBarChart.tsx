// JavaScript source code
// MyBarChart.tsx 파일 내용

"use client";

import React from 'react';
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

// 2. 그래프에 표시할 데이터 배열을 정의합니다.
// 항목별로 Bar를 분리하기 위해 데이터 구조를 변경합니다.
const data = [
    {
        // X축에 표시될 라벨이 됩니다. (이름을 설정하지 않았다면 비워둬도 무방)
        attribute: '김원준 강점 점수',
        책임감: 95,
        '회복 탄력성': 90,
        '주도성': 85,
        '협력 정신': 80,
        '학습 민첩성': 75
    },
];


const MyBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            // 막대를 겹치지 않고 나란히 표시하기 위해 barCategoryGap을 설정할 수도 있습니다.
            // barCategoryGap="20%"
            >
                <CartesianGrid strokeDasharray="3 3" />
                {/* X축: 'attribute' 키를 사용하여 '김원준 강점 점수' 라벨을 표시합니다. */}
                <XAxis dataKey="attribute" />
                {/* Y축: 100점 만점 기준으로 설정합니다. */}
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />

                {/* 각 항목별로 Bar를 정의하고 고유 색상을 지정합니다. */}
                <Bar dataKey="책임감" fill="#003366" name="책임감 (95점)" />
                <Bar dataKey="회복 탄력성" fill="#006699" name="회복 탄력성 (90점)" />
                <Bar dataKey="주도성" fill="#6699cc" name="주도성 (85점)" />
                <Bar dataKey="협력 정신" fill="#99ccff" name="협력 정신 (80점)" />
                <Bar dataKey="학습 민첩성" fill="#cce6ff" name="학습 민첩성 (75점)" />

            </BarChart>
        </ResponsiveContainer>
    );
};

export default MyBarChart;
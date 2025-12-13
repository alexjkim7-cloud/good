// MyBarChart2.tsx

"use client";

import React, { useMemo } from 'react';
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    PolarRadiusAxis, 
    ResponsiveContainer,
    Tooltip,
    Legend
} from 'recharts';
// MyBarChart2.tsx 파일 상단 (import 구문 아래)에 추가

const radiusOffset = 15; // 라벨을 바깥으로 밀어낼 거리 (픽셀)

const CustomTick = (props: any) => {
    const { payload, x, y, cx, cy } = props;
    const value = payload.value;
    const angle = (Math.atan2(y - cy, x - cx) * 180) / Math.PI;

    // 라벨이 차트 중심에서 벗어나는 방향으로 x, y 좌표를 조정
    const adjustedX = x + radiusOffset * Math.cos((angle * Math.PI) / 180);
    const adjustedY = y + radiusOffset * Math.sin((angle * Math.PI) / 180);

    // 텍스트 앵커(정렬) 설정
    let textAnchor: "start" | "middle" | "end" | "inherit" | undefined = 'middle';
    if (angle > -10 && angle < 10) { // 우측 (의사소통)
        textAnchor = 'start';
    } else if (angle > 170 || angle < -170) { // 좌측 (협력/혁신)
        textAnchor = 'end';
    } else if (angle > 70 && angle < 110) { // 상단 (자기주도)
        textAnchor = 'middle';
    } else if (angle > -110 && angle < -70) { // 하단 (전문지식)
        textAnchor = 'middle';
    }

    return (
        <g transform={`translate(${adjustedX},${adjustedY})`}>
            <text
                x={0}
                y={0}
                dy={4}
                textAnchor={textAnchor}
                fill="#333"
                fontSize={14}
            >
                {value}
            </text>
        </g>
    );
};
// 1. 항목 및 점수 범위 정의
const categories = ['자기주도', '의사소통', '문제해결', '전문지식', '세계시민', '협력/혁신'];
const MIN_SCORE = 80;
const MAX_SCORE = 90;
const MAX_CHART_RADIUS = 100; // 차트의 최대 점수를 100점으로 설정

// 2. 랜덤 데이터 생성 함수
const generateRandomData = () => {
    return categories.map(category => ({
        // Radar Chart의 축 이름 (PolarAngleAxis)
        subject: category,
        // 랜덤 점수 배정 (80 ~ 90)
        score: Math.floor(Math.random() * (MAX_SCORE - MIN_SCORE + 1)) + MIN_SCORE, 
        // Radar Chart의 최대값 설정 (PolarRadiusAxis)
        fullMark: MAX_CHART_RADIUS, 
    }));
};

// 컴포넌트 이름은 SkillRadarChart로 명확하게 정의합니다.
// (page.tsx에서 MyBarChart2로 import 했으므로 export default 사용)
export default function SkillRadarChart() {
    // 컴포넌트가 다시 렌더링 되어도 데이터가 바뀌지 않도록 useMemo로 처리합니다.
    const data = useMemo(() => generateRandomData(), []);

    return (
        // 차트 크기를 명시적으로 지정하는 컨테이너 (높이 400px 필수)
        <div style={{ width: '100%', height: '400px', maxWidth: '600px' }} className="mx-auto">
            
            <ResponsiveContainer width="100%" height="100%">
                
                <RadarChart 
                    cx="50%" // 차트 중심 x 위치
                    cy="50%" // 차트 중심 y 위치
                    outerRadius="80%" // 차트 전체 크기
                    data={data}
                >
                    {/* 💡 극좌표 그리드 (웹 스타일의 그물망) */}
                    <PolarGrid stroke="#e0e0e0" />
                    
                    {/* 💡 각 항목(자기주도, 의사소통 등)을 표시하는 축 */}
                    <PolarAngleAxis 
                        dataKey="subject" 
                        stroke="#333" 
                        fontSize={20}
                        tick={<CustomTick />}
                    />
                    
                    {/* 💡 점수(80~100)를 표시하는 방사형 축 */}
                    <PolarRadiusAxis 
                        angle={90} // 라벨 위치 (90도로 설정하여 위쪽 중앙에 점수 라벨을 표시)
                        domain={[0, MAX_CHART_RADIUS]} // 축 범위 (0부터 100점)
                        stroke="#999" 
                        fontSize={12}
                    />

                    {/* 💡 실제 데이터를 나타내는 레이더 영역 */}
                    <Radar 
                        name="나의 숙련도" 
                        dataKey="score" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                        fillOpacity={0.6}
                    />
                    
                    <Tooltip />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
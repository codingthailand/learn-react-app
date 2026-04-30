'use client';

import { useEffect, useState } from "react";

type Props = {
    title: string;
    isShowDate?: boolean; // optional prop, default to false
};

export default function AppFooter({ title, isShowDate = false }: Props) {
    // let companyName = 'CodingThailand';
    const [companyName, setCompanyName] = useState('CodingThailand');

    useEffect(() => {
        console.log('use effect 1 จะทำงานครั้งแรก และทุกครั้งที่มีการอัปเดตค่า state');
    });

    useEffect(() => {
        console.log('use effect 2 จะทำงานแค่ครั้งแรกครั้งเดียวเท่านั้น');
    }, []);

    useEffect(() => {
        console.log('use effect 3 จะทำงานครั้งแรก และเฉพาะครั้งที่มีการอัปเดตค่า state ที่ส่งเข้ามา');
    }, [companyName]);

    const handleMouseOver = () => {
        // companyName = 'Facebook';
        setCompanyName('Facebook');
    }

    return (
        <div>
            <p>{title} Footer</p>
            <p onMouseOver={handleMouseOver}>{companyName}</p>
            {isShowDate && <p>วันที่: {new Date().toLocaleDateString()}</p>}
        </div>
    );
}
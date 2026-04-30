'use client';

import { useState } from "react";

type Props = {
    title: string;
    isShowDate?: boolean; // optional prop, default to false
};

export default function AppFooter({ title, isShowDate = false }: Props) {
    // let companyName = 'CodingThailand';
    const [companyName, setCompanyName] = useState('CodingThailand');

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
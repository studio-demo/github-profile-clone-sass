import React from 'react';

export interface SafeRenderingProps {
    count: number;
}

export const SafeRendering: React.FC<SafeRenderingProps> = ({ count }) => {
    return <div>The count is {count.toString()}</div>;
};

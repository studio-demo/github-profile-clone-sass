import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { createDisposables } from '@wixc3/create-disposables';

interface RendererProps {
    children: React.ReactNode;
    onMount: (value: unknown) => void;
}

const Renderer: React.FC<RendererProps> = ({ children, onMount }) => {
    useEffect(() => onMount(undefined));

    return <div>{children}</div>;
};

export const testRenderer = () => {
    const disposables = createDisposables();

    return {
        render: async (jsx: JSX.Element): Promise<HTMLDivElement> => {
            const container = document.body.appendChild(document.createElement('div'));
            const root = createRoot(container);
            disposables.add(() => root.unmount());

            await new Promise((resolve) =>
                root.render(<Renderer onMount={resolve}>{jsx}</Renderer>)
            );

            return container;
        },
        dispose: async () => disposables.dispose(),
    };
};

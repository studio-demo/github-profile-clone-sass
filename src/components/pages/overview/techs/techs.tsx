import styles from './techs.module.scss';
import { pythonIcon } from '../../overview/techs/icons/python';
import { cSharpIcon } from '../../overview/techs/icons/CSharp';
import { htmlIcon } from '../../overview/techs/icons/html';
import { reactIcon } from '../../overview/techs/icons/react';
import { nodeIcon } from '../../overview/techs/icons/node';
import { jsIcon } from '../../overview/techs/icons/js';

type techs = 'react' | 'html' | 'node' | 'python' | 'js' | 'csharp';
export interface TechsProps {
    technologies?: techs[];
}

const convertTechToIcon = (tech: string): JSX.Element | undefined => {
    switch (tech) {
        case 'react':
            return reactIcon;
        case 'html':
            return htmlIcon;
        case 'node':
            return nodeIcon;
        case 'python':
            return pythonIcon;
        case 'js':
            return jsIcon;
        case 'csharp':
            return cSharpIcon;
        default:
            return undefined;
    }
};

const TechStacks = ({ technologies }: TechsProps): JSX.Element => {
    return (
        <>
            <div className={styles.techs}>
                {technologies!.slice(0, technologies!.length / 2).map((tech) => convertTechToIcon(tech))}
            </div>
            <div className={styles.techs}>
                {technologies!.slice(technologies!.length / 2).map((tech) => convertTechToIcon(tech))}
            </div>
        </>
    );
};

export const Techs = ({ technologies }: TechsProps) => {
    return (
        <div>
            <p className={styles.title}>Tech Stack</p>
            {technologies ? <TechStacks technologies={technologies} /> : null}
        </div>
    );
};

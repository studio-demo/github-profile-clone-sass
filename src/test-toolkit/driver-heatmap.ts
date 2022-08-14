import { Driver } from './driver';
import styles from './../components/pages/overview/contributions/heatmap/heatmap.module.scss';

export class DriverHeatmap extends Driver {
    getData(): number[][] {
        const weeks = this.selectAll(`.${styles.week}`);
        const data: number[][] = [];

        weeks?.forEach((week) => {
            const weekData: number[] = [];

            new Driver(week as HTMLElement).selectAll('[data-contribution-date]')?.forEach((day) => {
                const title = new Driver(day as HTMLElement).title ?? '';
                const contribution = !isNaN(parseInt(title)) ? parseInt(title) : 0;

                weekData.push(contribution);
            });

            data.push(weekData);
        });

        return data;
    }

    constructor() {
        const HeatmapComponent = document.querySelector('.' + styles.root) as HTMLElement;

        super(HeatmapComponent);
    }
}

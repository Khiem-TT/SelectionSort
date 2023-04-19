export class SelectionSort {
    static list: number[] = [1, 9, 4.5, 6.6, 5.7, -4.5];

    static selectionSort(list: number[]) {
        for (let i = 0; i < list.length - 1; i++) {
            let min = list[i];
            let minIndex = i;
            for (let j = i + 1; j < list.length; j++) {
                if (list[j] < min) {
                    min = list[j];
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [list[i], list[minIndex]] = [list[minIndex], list[i]];
            }
        }
    }
}
export const getHours = () => {
    const hoursOfDayLabelArray = getNumbersArray(0, 24);
    return hoursOfDayLabelArray.map((number) => {
      return `${number.toString().length === 1 ? "0" + number : number}:00`;
    });
  };
  export function getNumbersArray(start: number, end: number) {
    const array = [];
    for (let i = start; i < end; i++) {
      array.push(i);
    }
    return array;
  }
  
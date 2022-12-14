import getDayJP from "./getDayJP";

const getDateStr = (date: Date): string => {
    const yyyy: number = date.getFullYear(),
        mm: string = String(date.getMonth() + 1).padStart(2, "0"),
        dd: string = String(date.getDate()).padStart(2, "0"),
        d: string = getDayJP(date.getDay()),
        HH: String = String(date.getHours()).padStart(2, "0"),
        MM: string = String(date.getMinutes()).padStart(2, "0"),
        SS: string = String(date.getSeconds()).padStart(2, "0");
    return `${yyyy}/${mm}/${dd} (${d}) ${HH}:${MM}:${SS}`;
};
export default getDateStr;

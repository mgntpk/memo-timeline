const getDayJP = (num: number): string => {
    const days: string[] = ["日", "月", "火", "水", "木", "金", "土"];
    return days[num];
};
export default getDayJP;

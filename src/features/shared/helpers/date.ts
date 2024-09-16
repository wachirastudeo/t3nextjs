export const toDateString = (date: number | string | Date)=>{
    return new Date(date).toLocaleString('en-US',{
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    })
}
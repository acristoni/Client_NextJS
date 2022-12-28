export function formatDate(date: string) { //from ISO
    const day = date[8] + date[9]
    const month = date[5] + date[6]
    const year = date.slice(0, 4)

    return `${day}/${month}/${year}`
}
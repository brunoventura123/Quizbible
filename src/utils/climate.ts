export const bg = (): string[] => {
    const hour = new Date().getHours()
    let bgColor: string = '';
    let hello: string = '';

    if (hour >= 0 && hour < 12) {
        bgColor = 'from-blue-400 to-blue-800'
        hello = 'Bom dia 😁'
    } else if (hour >= 12 && hour < 18) {
        bgColor = 'from-orange-400 to-orange-800'
        hello = 'Boa tarde 🤩'
    } else if (hour >= 18) {
        bgColor = 'from-blue-800 to-blue-950'
        hello = 'Boa noite 😀'
    }

    return [bgColor, hello];
}
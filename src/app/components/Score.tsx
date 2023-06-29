type Props = {
    num: number
}

export const Score = ({ num }: Props) => {
    if (num > 5) num = 5
    if (num < 0) num = 0
    const numInt = Math.floor(num)
    const emojis = ['', '😪', '😔', '🙂', '😀', '🤣']
    //let stars;
    /*switch (numInt) {
        case 1:
            stars = '😪'.repeat(numInt) + '😑'.repeat(5 - numInt)
            break
        case 2:
            stars = '😔'.repeat(numInt) + '😑'.repeat(5 - numInt)
            break
        case 3:
            stars = '🙂'.repeat(numInt) + '😑'.repeat(5 - numInt)
            break
        case 4:
            stars = '😀'.repeat(numInt) + '😑'.repeat(5 - numInt)
            break
        case 5:
            stars = '🤣'.repeat(numInt) + '😑'.repeat(5 - numInt)
    }
*/

    const stars = emojis[numInt].repeat(numInt) + '😑'.repeat(5 - numInt)

    return (
        <div className="flex justify-center items-center pt-4">
            <div className="text-5xl p-2 bg-blue-500 rounded-md">{num.toFixed(1)}</div>
            <div className="ml-4 text-5xl flex">
                <div className="flex">{stars}</div>
            </div>
        </div>
    )
}
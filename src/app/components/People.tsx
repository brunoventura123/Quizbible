type Props = {
    roles: string[]
    avatar?: string
    name: string
}
const avatarDefault = 'https://static.vecteezy.com/system/resources/previews/009/313/954/non_2x/default-avatar-profile-in-flat-design-free-png.png'

export const People = ({ roles, avatar = avatarDefault, name }: Props) => {
    const weekDay = () => {
        return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date())

    }
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-sm md:text-lg text-center my-5 ">Musa do verão - {name} - {weekDay()}</h1>
            <img className="w-60 rounded-md" src={avatar} alt={name} />
            <ul className="flex gap-2 md:gap-8 mt-2">
                <li className="list-none">{roles[0]}</li>
                <li>{roles[1]}</li>
                <li>{roles[2]}</li>
            </ul>
        </div>
    )
}
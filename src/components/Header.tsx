
interface iHeader {
    title: string
}

const Header = ({ title }: iHeader) => {
    return <header>{title}</header>
}

export default Header
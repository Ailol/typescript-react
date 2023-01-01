import "../../assets/Header.css";

interface IProps {
    title: string;
}

const Header: React.FC<IProps> = ({ title }) => {
    return (
        <div className="header">
            <span className="header__text">{title} </span>
        </div>
    );
};

export default Header;

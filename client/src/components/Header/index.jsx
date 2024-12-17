import './styles.css';

const Header = () => {
    return (
        <header class="position-absolute top-0 p-3 d-flex justify-content-between w-100">
            <div className="left-side"><p className="fs-4">Hello, Sydney</p></div><div className="right-side"><button className="btn btn-primary">home</button><button className="btn btn-primary mx-3">login</button></div>
        </header>
    );
};

export default Header;
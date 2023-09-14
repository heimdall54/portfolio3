const Loader = () => {
    return (
        <div>
            <div className="container-loader">

                <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                    <circle cx="170" cy="170" r="160" stroke="#ff0000" />
                    <circle cx="170" cy="170" r="135" stroke="#ffffff" />
                    <circle cx="170" cy="170" r="110" stroke="#ff0000" />
                    <circle cx="170" cy="170" r="85" stroke="#ffffff" />
                </svg>

            </div>
        </div>
    );
}

export default Loader;
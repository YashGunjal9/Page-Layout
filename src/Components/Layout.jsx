const Layout = (props) => {
    return (
        <div>

            {/* Header */}
            <header>
                <h1>{props.title}</h1>
            </header>

            {/* Main content */}
            <main>
                {props.children}
            </main>

            {/* Footer */}
            <footer>
                &copy; All Rights Reserved. AstreTech Solution Pvt.Ltd
            </footer>

        </div>
    );
};

export default Layout;

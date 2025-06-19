import "./portfolio.scss"; // Assuming you have a CSS file for styling

const Portfolio = () => {
    return <section id="portfolio">
        <div className="container">
            <h2 className="text-4xl font-bold mb-4">My Work</h2>
            <p className="text-lg mb-8">Here are some of the projects I've worked on:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Project items go here */}
            </div>
        </div>
    </section>;
};

export default Portfolio;
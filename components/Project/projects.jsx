import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./Project-Cards";
import projImg1 from "../../assets/img/projects/project-img1.png";
import projImg2 from "../../assets/img/projects/project-img2.png";
import projImg3 from "../../assets/img/projects/project-img3.png";
import projImg4 from "../../assets/img/projects/project-img4.png";
import projImg5 from "../../assets/img/projects/project-img5.png";
import projImg6 from "../../assets/img/projects/project-img6.png";
import colorSharp2 from "../../assets/img/projects/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Horiseon Website",
            description: "HTML, CSS, and Git: Code Refactor",
            imgUrl: projImg1,
        },
        {
            title: "Portfolio",
            description: "A portfolio of work can showcase my skills and talents to employers looking to fill a part-time or full-time position.",
            imgUrl: projImg2,
        },
        {
            title: "JavaScript: Password Generator",
            description: "This application enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and features dynamically updated HTML and CSS powered by JavaScript code written by me. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.",
            imgUrl: projImg3,
        },
        {
            title: "Work Day Scheduler",
            description: "Simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and features dynamically updated HTML and CSS powered by jQuery.",
            imgUrl: projImg4,
        },
        {
            title: "Meme God",
            description: "This is a responsive front end application that uses 2 Sever-side API to retrieve humourous memes from various sources for the viewers amusement. -This application uses client-side storage to store persistent data.",
            imgUrl: projImg5,
        },
        {
            title: "Weather Dashboard",
            description: "A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. Use the OpenWeather One Call API to retrieve weather data for cities. Read through the documentation for setup and usage instructions. You will use localStorage to store any persistent data.",
            imgUrl: projImg6,
        },
    ];

    return (
        <section className="project" id="project">
        <Container>
            <Row>
            <Col size={12}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                        <Row>
                            {
                            projects.map((project, index) => {
                                return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                            }
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

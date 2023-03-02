import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function About () {
    return (
        // <div className="aboutpage">
        //     <div className="aboutHeader">
        //         <h1>About Us</h1>
        //     </div>
        //     <p>When returning from a spritual journey through the Earth, Monty McMansions decided to dedicate some of his fortune to offering spritiual wellness for others back in his hometown. </p>
        //     <p>As the heir of the industrious McMansions fortune, Monty was never satisfied with the material wealth that provided him everything he desired. </p>
        //     <p>Monty decided to travel around the world to find peace and happiness</p>
        //     <p>Upon his return, he dedicated about 1% of his wealth to open this Mineral SPA to bring joy and spiritual happiness to others</p>
        //     <img src="hotsprings.jpg" alt="hotsprings" />
        // </div>
        <div>
            <Container >
                <Card
                    border="info"
                    style={{
                        background: 'rgb(178, 190, 181,0.5)',
                        justifyContent: 'center',
                        borderRadius: '10px'
                    }}
                >
                    <Card.Header ClassName="blockquote mb-0 card-body">About Us</Card.Header>
                    <Card.Img style={{ width: '50%', margin: 'auto'}} src="hotsprings.jpg" alt="Hot Springs"/>
                    <Card.Body>
                    
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            When returning from a spiritual journey through the Earth, Monty McMansions decided to dedicate some of his fortune to offering spiritual wellness for others back in his hometown.
                        </Card.Text>
                        <Card.Text>
                            As the heir of the industrious McMansions fortune, Monty was never satisfied with the material wealth that provided him everything he desired. 
                        </Card.Text>
                        <Card.Text>
                            Monty decided to travel around the world to find peace and happiness
                        </Card.Text>
                        <Card.Text>
                            Upon his return, he dedicated about 1% of his wealth to open this Mineral SPA to bring joy and spiritual happiness to others
                        </Card.Text> 
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
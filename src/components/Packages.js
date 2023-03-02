import ListGroup from 'react-bootstrap/ListGroup';

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <li>{eachPackage}</li>)

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                    <p>Check out some of our packages! Every package is ethically sourced and organic!</p>
                </div>
                <ListGroup as="ul" >
                    <ListGroup.Item as="li"
                        style={{
                    background: 'rgb(178, 190, 181,0.5)',                   
                    borderRadius: '10px'
                }}>
                    {displayPackages}
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}
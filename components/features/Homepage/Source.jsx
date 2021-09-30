import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
    margin: 1rem 0;
    span {
        width: 25%;
    }
`;

const Button = styled.a`
    padding: 0.5rem 1rem;
    background: ${props => props.color};
    font-weight: bold;
`;


const Source = ({ number, name, firstName, lastName, email }) => {
    console.log(firstName, lastName)
    return (
        <>
            <Row>
                <span>{number}:</span>
                <span>{name}</span>
                <span>{email}</span>
                <Button color="red">Delete</Button>
                <Button href={`/authors/${firstName}-${lastName}/`} color="green">View</Button>
            </Row>
            <hr></hr>
        </>
    )
};

export default Source;
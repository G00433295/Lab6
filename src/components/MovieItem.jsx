import Card from 'react-bootstrap/Card';

export default function MovieItem(props) {

    return (
        <div>
            <h3>{props.mymovie.Title}</h3>
            <p>{props.mymovie.Year}</p>
            <img src={props.mymovie.Poster}></img>

            <Card style={{ width: '200px' , height: '200px'}}>
      <Card.Img variant="top" src={props.mymovie.Poster} />
      <Card.Body>
        <Card.Title>{props.mymovie.Title}</Card.Title>
        <Card.Text>
          {props.mymovie.Year}
        </Card.Text>
      </Card.Body>
      
    </Card>

            </div>
    )
}
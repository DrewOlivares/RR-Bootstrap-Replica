import Card from 'react-bootstrap/Card'

export default function Background() {
    return(
        <div style={{backgroundColor:'#deedd6'}}>
            <Card  className='text-black'>
                <Card.Body>
                <div style={{height:'370px', textAlign:'right'}}>
                <Card.Img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt='Card Image'/>
                </div>
                   <Card.ImgOverlay >
                        <Card.Title>
                            Order groceries for delivery or pickup today
                        </Card.Title>
                        <Card.Text>
                            Whatever you want from local stores, brought right to your door.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card.Body>    
            </Card>
        </div>  
    )
}
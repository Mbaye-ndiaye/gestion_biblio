import React from 'react'
import { AppBar, Toolbar, Typography, InputBase, Button, Card, CardContent, CardMedia, Grid } from '@mui/material'
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import ImageUrl from '../../assets/image/StockCake.jpg'
import Livre1 from '../../assets/image/livre9.jpeg' 
import Livre2 from '../../assets/image/livre1.jpeg'
import Livre3 from '../../assets/image/livre2.jpg'
import Livre4 from '../../assets/image/livre3.jpeg'
import Livre5 from '../../assets/image/livre4.jpeg'
import Livre6 from '../../assets/image/livre5.jpeg'
import Livre7 from '../../assets/image/livre6.jpeg'
import Livre8 from '../../assets/image/livre7.jpeg'
import Livre9 from '../../assets/image/livre8.jpeg'
import { NavLink } from 'react-router-dom'

// Header Component
const Header = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
       Tànkub xam-xam
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <InputBase
          placeholder="Search..."
          style={{ marginRight: '10px' }}
        />
        <SearchIcon />
      </div>
      <NavLink to="/" style={{ textDecoration: "none", textDecorationColor: "black" }} ><Button color="inherit">Login</Button></NavLink>
      
      <Button color="inherit">
        <ShoppingCartIcon /> My basket
      </Button>
    </Toolbar>
  </AppBar>
)

// Featured Book Component
const FeaturedBook = ({ title, author, description, imageUrl }) => (
  <Card style={{ position: 'relative', color: 'white' }}>
    <CardMedia
      component="img"
      height="650"
      image={ImageUrl}
      alt={title}
    />
    <CardContent style={{ position: 'absolute', bottom: 0, width: 400, backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="subtitle1">by {author}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
)

// Book Card Component
const BookCard = ({ title, image, price }) => (
  <Card>
    <CardMedia
      component="img"
      height="350"
      width="300"
      image={image}
      alt={title}
    />
    <CardContent>
      <Typography variant="body2">{title}</Typography>
      <Typography variant="body1" color="primary">${price}</Typography>
    </CardContent>
  </Card>
)

// Main Component
export default function BookStore() {
  return (
    <div>
      <Header />
      <FeaturedBook 
        title="Western Canada"
        author="Jack Altman"
        description="From the ocean-and-mountain backdrop of Vancouver to the exciting landscapes of the Rockies, from the flower gardens of Victoria to Alberta's barren Badlands."
        imageUrl="/placeholder.svg?height=400&width=800"
      />
      <Typography variant="h5" style={{ margin: '20px 0' }}>New arrivals</Typography>
      <Grid container spacing={2} sx={{p: 8}}>
        {[
          { title: "Forbandede yngel", price: 18, image: Livre1 },
          { title: "Sund og slank med 5:2", price: 24, image: Livre2 },
          { title: "Yahya Hassan", price: 17, image: Livre3  },
          { title: "Mat & drikke i CH", price: 27, image: Livre4 },
          { title: "Den hemmelige socialdemokrat", price: 17, image: Livre5 },
          { title: "Den hemmelige socialdemokrat", price: 17, image: Livre6  },
          { title: "Den hemmelige socialdemokrat", price: 17, image: Livre7 },
          { title: "Den hemmelige socialdemokrat", price: 17, image: Livre8  },
          { title: "Den hemmelige socialdemokrat", price: 17, image: Livre9 },
          { title: "Den hemmelige socialdemokrat", price: 17, image: Livre7 },
          { title: "Den hemmelige socialdemokrat", price: 17, image: Livre8  },
          { title: "Den hemmelige socialdemokrat", price: 17, image: Livre9 },
        ].map((book, index) => (
          <Grid item xs={10} sm={6} md={2} key={index}>
            <BookCard {...book} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
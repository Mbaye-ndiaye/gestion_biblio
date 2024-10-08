import React from 'react'
import { AppBar, Toolbar, Typography, InputBase, Button, Card, CardContent, CardMedia, Grid } from '@mui/material'
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'

// Header Component
const Header = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        BOOKS
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <InputBase
          placeholder="Search..."
          style={{ marginRight: '10px' }}
        />
        <SearchIcon />
      </div>
      <Button color="inherit">Johnny</Button>
      <Button color="inherit">Logout</Button>
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
      height="400"
      image={imageUrl}
      alt={title}
    />
    <CardContent style={{ position: 'absolute', bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="subtitle1">by {author}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
)

// Book Card Component
const BookCard = ({ title, imageUrl, price }) => (
  <Card>
    <CardMedia
      component="img"
      height="200"
      image={imageUrl}
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
      <Grid container spacing={3}>
        {[
          { title: "Forbandede yngel", price: 18, imageUrl: "/placeholder.svg?height=200&width=150" },
          { title: "Sund og slank med 5:2", price: 24, imageUrl: "/placeholder.svg?height=200&width=150" },
          { title: "Yahya Hassan", price: 17, imageUrl: "/placeholder.svg?height=200&width=150" },
          { title: "Mat & drikke i CH", price: 27, imageUrl: "/placeholder.svg?height=200&width=150" },
          { title: "Den hemmelige socialdemokrat", price: 17, imageUrl: "/placeholder.svg?height=200&width=150" },
        ].map((book, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <BookCard {...book} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
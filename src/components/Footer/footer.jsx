import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, Language, Phone, Chat } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#1f1f1f', color: '#fff', py: 4, marginTop: "50px" }}>
      <Grid container spacing={4} justifyContent="space-between" alignItems="center" marginX="30px">
        {/* Section 1 - Book Info */}
        <Grid item xs={12} md={3}>
          <Box sx={{ alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#F97316', padding: '8px', borderRadius: '4px', width: "45px" }}>
            <Typography variant="h6" sx={{ color: 'white' }}>tX</Typography>
          </Box>
            <Typography variant="body1">
              Starting off in an eighteenth century London, this book invites readers to an exciting journey. The lifelong fight of the main protagonist's crime solving.
            </Typography>
          </Box>
          <Box>
            <IconButton color="inherit" href="#">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="#">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="#">
              <Language />
            </IconButton>
            <IconButton color="inherit" href="#">
              <img src="/behance-icon.png" alt="Behance" width="24" height="24" />
            </IconButton>
          </Box>
        </Grid>

        {/* Section 2 - Delivery */}
        <Grid item xs={12} md={2} >
          <Typography variant="h6" component="div" sx={{ mb: 2, color: '#72db7f' }}>
            Delivery
          </Typography>
          <Typography variant="body2">Cost of delivery</Typography>
          <Typography variant="body2">Payment Method</Typography>
          <Typography variant="body2">Delivery Areas</Typography>
          <Typography variant="body2">Delivery Dates</Typography>
          <Typography variant="body2">Complaints & Return</Typography>
        </Grid>

        {/* Section 3 - Discovery */}
        <Grid item xs={12} md={2} >
          <Typography variant="h6" component="div" sx={{ mb: 2, color: '#72db7f' }}>
            Discovery
          </Typography>
          <Typography variant="body2">Latest News & Blog</Typography>
          <Typography variant="body2">My Checkout</Typography>
          <Typography variant="body2">Return & Exchange</Typography>
          <Typography variant="body2">Shipping & Delivery</Typography>
          <Typography variant="body2">Track Your Order</Typography>
        </Grid>

        {/* Section 4 - Contact */}
        <Grid item xs={12} md={3} >
          <Typography variant="h6" component="div" sx={{ mb: 2, color: '#72db7f' }}>
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Phone sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#F97316', padding: '8px', borderRadius: '4px', width: "45px" }} />
            <Typography variant="body2">+221 78 309 09 62</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Chat sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#F97316', padding: '8px', borderRadius: '4px', width: "45px" }}/>
            <Typography variant="body2">+221 78 309 09 62</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" sx={{ color: '#aaa' }}>
          © 2024 - All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

import React from 'react';
import {
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link component={Link} to='/' color='inherit'>
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  return (
    <>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Home Page
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            padding: 3
          }}
        >
          <Link to='/pricing'>
            <Button variant='contained' color='primary'>
              Pricing
            </Button>
          </Link>

          <Link to='/pricing'>
            <Button variant='outlined' color='primary'>
              Pricing
            </Button>
          </Link>
        </Box>
        <Container maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    image='https://source.unsplash.com/random'
                    title='Image title'
                    sx={{
                      width: '100%',
                      height: '200px'
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </>
  );
}

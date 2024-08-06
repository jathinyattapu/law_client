import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MiniDrawer = () => {
    return (
      <Box sx={{
          margin: 0,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          padding: '10px 0',  
        }}>
          <Typography variant="body2" color="textSecondary">
            <Link to="/legal-research" style={{ marginRight: '20px', textDecoration: 'none', color: 'inherit' }}>Legal Research</Link>
            <Link to="/knowledge-base" style={{ marginRight: '20px', textDecoration: 'none', color: 'inherit' }}>Knowledge Base</Link>
            <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>Settings</Link>
            <Link to="/sitemap" style={{ textDecoration: 'none', color: 'inherit' }}>Sitemap</Link>
          </Typography>
          <Typography variant="overline" color="textprimary">
          Copyright {new Date().getFullYear()}  © LMS. All Rights Reserved. 
          <Link to="/privacy-policy" href="#" underline="hover">Privacy Policy</Link>.
          </Typography>
        </Box>
    )
}

function LawyerFooter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MiniDrawer} />
        <Route path="/legal-research" render={() => <div>Legal Research Page</div>} />
        <Route path="/knowledge-base" render={() => <div>Knowledge Base Page</div>} />
        <Route path="/settings" render={() => <div>Settings Page</div>} />
        <Route path="/sitemap" render={() => <div>Sitemap</div>} />
      </Switch>
    </Router>
  );
}

export default LawyerFooter;




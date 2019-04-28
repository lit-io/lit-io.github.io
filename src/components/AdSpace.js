import React, { Component } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

class AdSpace extends Component {
  state = {
    products: [
      {
        name: 'Phillips Hue Lightbulbs',
        desc: 'Save up to $20 a month*',
        imgUrl:
          'https://images-na.ssl-images-amazon.com/images/I/41ZzVX0WpuL.jpg',
        link: 'https://www2.meethue.com/en-us/bulbs',
      },
      {
        name: 'Nest Thermostat',
        desc: 'Save up to $145 a year*',
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YeS4FikhiilZtuZf7umopA0DmtJwveez9gX_jVKv1HJd2n87',
        link: 'https://nest.com/thermostats/',
      },
      {
        name: 'Energy Star Refrigerator',
        desc: 'Save $300 over 5 years*',
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpNvzey5rP6umCujtLYxLOx7kY2i_I_HLQ4WcLJ4ngz9DRej2',
        link:
          'https://www.lg.com/us/refrigerators/lg-LFXS24623S-french-3-door-refrigerator',
      },
    ],
  };

  render() {
    return (
      <div className="ad-toggle">
        <ExpansionPanel
          expanded
          style={{ padding: '5px', backgroundColor: '#f5f5f5' }}
        >
          <ExpansionPanelSummary style={{ padding: '0 5px 0 5px' }}>
            <Typography
              style={{
                padding: '0 32px 0 32px',
                width: '100%',
                textAlign: 'center',
                fontSize: '20px',
              }}
            >
              Power Up Your Energy Savings
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            style={{
              display: 'flex',
              justifyItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              flexBasis: '1',
              alignItems: 'center',
            }}
          >
            <Grid container spacing={24}>
              {this.state.products.map((product, idx) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card style={{ padding: '10px', maxWidth: '300' }}>
                      <CardContent style={{ display: 'flex', padding: '10px' }}>
                        <div>
                          <img
                            src={product.imgUrl}
                            style={{
                              height: '5em',
                              width: 'auto',
                              padding: '3px',
                            }}
                            alt="Product"
                          />
                        </div>
                        <div
                          style={{ paddingLeft: '10px', textAlign: 'center' }}
                        >
                          <Typography variant="subtitle1" color="textSecondary">
                            {product.name}
                          </Typography>
                          <Typography
                            style={{ paddingBottom: '5px' }}
                            variant="body1"
                            color="textSecondary"
                          >
                            {product.desc}
                          </Typography>

                          <div>
                            <Button
                              href={product.link}
                              variant="outlined"
                              size="small"
                              color="primary"
                              style={{ paddingTop: '6px' }}
                              target="_blank"
                            >
                              Buy Now
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default AdSpace;

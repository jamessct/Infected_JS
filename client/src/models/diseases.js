var Disease = require("./disease");
var Fact = require('./fact');

var Diseases = function() {

  var tbFact1 = new Fact({
    comment: "The evidence for tuberculosis can be traced back to mummies in Ancient Egypt.",
    image: "http://i.bnet.com/blogs/mummy.jpg"
  });

  var tbFact2 = new Fact({
    comment: "A quarter of all deaths in Europe are estimated to have been caused by tuberculosis infection during the 19th and early 20th century.",
    image: "http://www.ancient-origins.net/sites/default/files/styles/large/public/First-and-Last-Communion.jpg?itok=9hHKG13z"
  });

  var tbFact3 = new Fact({
    comment: "TB is the leading killer of people living with HIV.",
    image: "https://pbs.twimg.com/profile_images/710836583235260417/WzC93R20.jpg"
  });

  var spFact1 = new Fact({
    comment: "Smallpox is transmitted through extended face-to-face contact, or direct contact with infected body fluids or contaminated objects.",
    image: "https://i.ytimg.com/vi/yqUFy-t4MlQ/maxresdefault.jpg"
  });

  var spFact2 = new Fact({
    comment: "Insects and animals do not transmit smallpox. If aerosolized smallpox were to be released, 90% of the virus would die within 24 hours.",
    image: "https://i.ytimg.com/vi/yqUFy-t4MlQ/maxresdefault.jpg"
  });

  var spFact3 = new Fact({
    comment: "Smallpox is the only human based infection that has been completely eradicated from the world. The world has been smallpox free since 1979 after a widescale vaccination programme.",
    image: "http://www.museumofhealthcare.ca/explore/exhibits/vaccinations/smallpox.html"
  });

<<<<<<< HEAD
  // var smallPox = new Disease({
  //   name: "smallPox",
  //   nineteenthCentury: [                
  // {
  //   name: "UK", 
  //   coords: {lat: 55.378051, 
  //            lng: -3.435973},
  //   mortality: "high"             
  //   },  
      
  //   { 
  //     name: "France", 
  //     coords: {lat: 46.227638, 
  //              lng: 2.213749},
  //     mortality: "high"             
  //   },

  //   {
  //     name: "Spain", 
  //     coords: {lat: 40.463667, 
  //             lng: -3.74922},
  //     mortality: "high"             
  //   },

  //    {
  //      name: "USA", 
  //      coords: {lat: 37.09024, 
  //               lng: -95.712891},
  //      mortality: "high"             
  //    },
     
  //    {
  //      name: "South Africa", 
  //      coords: {lat: -30.559482, 
  //               lng: 22.937506},
  //      mortality: "high"             
  //    },

  //    {
  //      name: "DR Congo", 
  //      coords: {lat: -2.930652, 
  //               lng: 23.285279},
  //      mortality: "high"
  //    },

  //     {
  //       name: "Russia", 
  //       coords: {lat: 62.333724,  
  //                lng: 92.189755},
  //       mortality: "high"             
  //     },

  //     {
  //       name: "India", 
  //       coords: {lat: 20.593684, 
  //               lng: 78.96288},
  //       mortality: "high"             
  //     },

  //   {
  //     name: "Argentina", 
  //     coords: {lat: -38.416097, 
  //              lng: -63.616672},
  //     mortality: "high"             
  //   },
    
  //   {
  //     name: "Brazil", 
  //     coords: {lat: -14.235004, 
  //              lng:  -51.92528},
  //     mortality: "high"             
  //   },

  //   {
  //     name: "Mexico", 
  //     coords: {lat: 23.634501, 
  //              lng: -102.552784},
  //     mortality: "high"             
  //   },
     
  //   {
  //     name: "China", 
  //     coords: {lat: 1.352083, 
  //              lng: 103.819836},
  //     mortality: "high"             
  //   }
  //  ]         
  // });
=======
  var zikaFact1 = new Fact({
    comment: "The Zika virus has been linked to a surge in the number of babies born with microcephaly, a birth defect which causes infants to be born with abnormally small heads and brain damage.",
    image: "https://www.statnews.com/wp-content/uploads/2016/05/birthdefectt-800x576.jpg"
  });

  var zikaFact2 = new Fact({
    comment: "There is currently no vaccine or cure for Zika.",
    image: "https://jnswire.s3.amazonaws.com/jns-media/40/ed/138306/shutterstock_363993479.jpg"
  });

  var zikaFact3 = new Fact({
    comment: "Symptoms of Zika in adults are generally mild, and can include a slight fever, rash, red eyes, headache and joint pain in the hands and feet.",
    image: "http://i2.cdn.turner.com/cnnnext/dam/assets/160128185001-zika-mutant-male-mosquitos-mclaughlin-pkg-00020830-large-169.jpg"
  });

  var hivFact1 = new Fact({
    comment: "HIV (Human Immunodeficiency Virus) is a virus that infects the immune system, decreasing its ability to fight off other infections and diseases.",
    image: "https://www.aids.gov/images/aids-infographics/what-is-hiv-aids-1.png"
  });

  var hivFact2 = new Fact({
    comment: "More than 35 million people live with HIV worldwide.",
    image: "http://www.foundcare.org/cache.trustedpartner.com/images/library/Foundcare2010/Content/globe1.jpg"
  });

  var hivFact3 = new Fact({
    comment: "About 30 million people have died from HIV/AIDS-related causes since its discovery in 1981.",
    image: "https://abm-website-assets.s3.amazonaws.com/biosciencetechnology.com/s3fs-public/embedded_image/2016/06/shutterstock_236439424.jpg"
  });

  var smallPox = new Disease({
    name: "smallPox",
    nineteenthCentury: [{
                          name: "UK", 
                          coords: {lat: 55.378051, 
                                   lng: -3.435973},
                          mortality: "medium"             
                          },  
                            
                          { 
                            name: "France", 
                            coords: {lat: 46.227638, 
                                     lng: 2.213749},
                            mortality: "medium"             
                          },

                          {
                            name: "Spain", 
                            coords: {lat: 40.463667, 
                                    lng: -3.74922},
                            mortality: "medium"             
                          },

                           {
                             name: "USA", 
                             coords: {lat: 37.09024, 
                                      lng: -95.712891},
                             mortality: "medium"             
                           },
                           
                           {
                             name: "South Africa", 
                             coords: {lat: -30.559482, 
                                      lng: 22.937506},
                             mortality: "high"             
                           },

                           {
                             name: "DR Congo", 
                             coords: {lat: -2.930652, 
                                      lng: 23.285279},
                             mortality: "high"
                           },

                            {
                              name: "Russia", 
                              coords: {lat: 62.333724,  
                                       lng: 92.189755},
                              mortality: "medium"             
                            },

                            {
                              name: "India", 
                              coords: {lat: 20.593684, 
                                      lng: 78.96288},
                              mortality: "medium"             
                            },

                          {
                            name: "Argentina", 
                            coords: {lat: -38.416097, 
                                     lng: -63.616672},
                            mortality: "medium"             
                          },
                          
                          {
                            name: "Brazil", 
                            coords: {lat: -14.235004, 
                                     lng:  -51.92528},
                            mortality: "medium"             
                          },

                          {
                            name: "Mexico", 
                            coords: {lat: 23.634501, 
                                     lng: -102.552784},
                            mortality: "medium"             
                          },
                           
                          {
                            name: "China", 
                            coords: {lat: 34.560541,  
                                     lng: 102.994444},
                            mortality: "medium"             
                          }],
   
    twentiethCentury: [{
                         name: "UK", 
                         coords: {lat: 55.378051, 
                                  lng: -3.435973},
                         mortality: "none"             
                         },  
                           
                         { 
                           name: "France", 
                           coords: {lat: 46.227638, 
                                    lng: 2.213749},
                           mortality: "none"             
                         },

                         {
                           name: "Spain", 
                           coords: {lat: 40.463667, 
                                   lng: -3.74922},
                           mortality: "none"             
                         },

                          {
                            name: "USA", 
                            coords: {lat: 37.09024, 
                                     lng: -95.712891},
                            mortality: "none"             
                          },
                          
                          {
                            name: "South Africa", 
                            coords: {lat: -30.559482, 
                                     lng: 22.937506},
                            mortality: "low"             
                          },

                          {
                            name: "DR Congo", 
                            coords: {lat: -2.930652, 
                                     lng: 23.285279},
                            mortality: "medium"
                          },

                         {
                           name: "Russia", 
                           coords: {lat: 62.333724,  
                                    lng: 92.189755},
                           mortality: "low"             
                         },

                         {
                           name: "India", 
                           coords: {lat: 20.593684, 
                                   lng: 78.96288},
                           mortality: "none"             
                         },

                         {
                           name: "Argentina", 
                           coords: {lat: -38.416097, 
                                    lng: -63.616672},
                           mortality: "low"             
                         },
                       
                         {
                           name: "Brazil", 
                           coords: {lat: -14.235004, 
                                    lng:  -51.92528},
                           mortality: "low"             
                         },

                         {
                           name: "Mexico", 
                           coords: {lat: 23.634501, 
                                    lng: -102.552784},
                           mortality: "low"             
                         },
                          
                         {
                           name: "China", 
                           coords: {lat: 34.560541,  
                                    lng: 102.994444},
                           mortality: "low"             
                         }],

          presentDay: [{
                         name: "UK", 
                         coords: {lat: 55.378051, 
                                  lng: -3.435973},
                         mortality: "none"             
                         },  
                           
                         { 
                           name: "France", 
                           coords: {lat: 46.227638, 
                                    lng: 2.213749},
                           mortality: "none"             
                         },

                         {
                           name: "Spain", 
                           coords: {lat: 40.463667, 
                                   lng: -3.74922},
                           mortality: "none"             
                         },

                          {
                            name: "USA", 
                            coords: {lat: 37.09024, 
                                     lng: -95.712891},
                            mortality: "none"             
                          },
                          
                          {
                            name: "South Africa", 
                            coords: {lat: -30.559482, 
                                     lng: 22.937506},
                            mortality: "none"             
                          },

                          {
                            name: "DR Congo", 
                            coords: {lat: -2.930652, 
                                     lng: 23.285279},
                            mortality: "none"
                          },

                           {
                             name: "Russia", 
                             coords: {lat: 62.333724,  
                                      lng: 92.189755},
                             mortality: "none"             
                           },

                           {
                             name: "India", 
                             coords: {lat: 20.593684, 
                                     lng: 78.96288},
                             mortality: "none"             
                           },

                         {
                           name: "Argentina", 
                           coords: {lat: -38.416097, 
                                    lng: -63.616672},
                           mortality: "none"             
                         },
                         
                         {
                           name: "Brazil", 
                           coords: {lat: -14.235004, 
                                    lng:  -51.92528},
                           mortality: "none"             
                         },

                         {
                           name: "Mexico", 
                           coords: {lat: 23.634501, 
                                    lng: -102.552784},
                           mortality: "none"             
                         },
                          
                         {
                           name: "China", 
                           coords: {lat: 34.560541,  
                                    lng: 102.994444},
                           mortality: "none"             
                         }]
                      });
>>>>>>> develop

var tuberculosis = new Disease({
  name: "Tuberculosis",        
  nineteenthCentury: [{
                        name: "UK", 
                        coords: {lat: 55.378051, 
                                 lng: -3.435973},
                        mortality: "high"             
                        },  
                          
                        { 
                          name: "France", 
                          coords: {lat: 46.227638, 
                                   lng: 2.213749},
                          mortality: "high"             
                        },

                        {
                          name: "Spain", 
                          coords: {lat: 40.463667, 
                                  lng: -3.74922},
                          mortality: "high"             
                        },

                         {
                           name: "USA", 
                           coords: {lat: 37.09024, 
                                    lng: -95.712891},
                           mortality: "high"             
                         },
                         
                         {
                           name: "South Africa", 
                           coords: {lat: -30.559482, 
                                    lng: 22.937506},
                           mortality: "medium"             
                         },

                         {
                           name: "DR Congo", 
                           coords: {lat: -2.930652, 
                                    lng: 23.285279},
                           mortality: "low"
                         },

                          {
                            name: "Russia", 
                            coords: {lat: 62.333724,  
                                     lng: 92.189755},
                            mortality: "none"             
                          },

                          {
                            name: "India", 
                            coords: {lat: 20.593684, 
                                    lng: 78.96288},
                            mortality: "high"             
                          },

                        {
                          name: "Argentina", 
                          coords: {lat: -38.416097, 
                                   lng: -63.616672},
                          mortality: "medium"             
                        },
                        
                        {
                          name: "Brazil", 
                          coords: {lat: -14.235004, 
                                   lng:  -51.92528},
                          mortality: "medium"             
                        },

                        {
                          name: "Mexico", 
                          coords: {lat: 23.634501, 
                                   lng: -102.552784},
                          mortality: "medium"             
                        },
                         
                        {
                          name: "China", 
                          coords: {lat: 1.352083, 
                                   lng: 103.819836},
                          mortality: "low"             
                        }],
    
    twentiethCentury: [{
                        name: "UK", 
                        coords: {lat: 55.378051, 
                                 lng: -3.435973},
                        mortality: "none"             
                        },  
                          
                        { 
                          name: "France", 
                          coords: {lat: 46.227638, 
                                   lng: 2.213749},
                          mortality: "none"             
                        },

                        {
                          name: "Spain", 
                          coords: {lat: 40.463667, 
                                  lng: -3.74922},
                          mortality: "none"             
                        },

                         {
                           name: "USA", 
                           coords: {lat: 37.09024, 
                                    lng: -95.712891},
                           mortality: "none"             
                         },
                         
                         {
                           name: "South Africa", 
                           coords: {lat: -30.559482, 
                                    lng: 22.937506},
                           mortality: "medium"             
                         },

                         {
                           name: "DR Congo", 
                           coords: {lat: -2.930652, 
                                    lng: 23.285279},
                           mortality: "low"
                         },

                          {
                            name: "Russia", 
                            coords: {lat: 62.333724,  
                                     lng: 92.189755},
                            mortality: "low"             
                          },

                          {
                            name: "India", 
                            coords: {lat: 20.593684, 
                                    lng: 78.96288},
                            mortality: "high"             
                          },

                        {
                          name: "Argentina", 
                          coords: {lat: -38.416097, 
                                   lng: -63.616672},
                          mortality: "low"             
                        },
                        
                        {
                          name: "Brazil", 
                          coords: {lat: -14.235004, 
                                   lng:  -51.92528},
                          mortality: "low"             
                        },

                        {
                          name: "Mexico", 
                          coords: {lat: 23.634501, 
                                   lng: -102.552784},
                          mortality: "low"             
                        },
                         
                        {
                          name: "China", 
                          coords: {lat: 1.352083, 
                                   lng: 103.819836},
                          mortality: "medium"             
                        }],

          presentDay: [{
                        name: "UK", 
                        coords: {lat: 55.378051, 
                                 lng: -3.435973},
                        mortality: "none"             
                        },  
                        
                      { 
                        name: "France", 
                        coords: {lat: 46.227638, 
                                 lng: 2.213749},
                        mortality: "none"             
                      },

                      {
                        name: "Spain", 
                        coords: {lat: 40.463667, 
                                lng: -3.74922},
                        mortality: "none"             
                      },

                       {
                         name: "USA", 
                         coords: {lat: 37.09024, 
                                  lng: -95.712891},
                         mortality: "none"             
                       },
                       
                       {
                         name: "South Africa", 
                         coords: {lat: -30.559482, 
                                  lng: 22.937506},
                         mortality: "medium"             
                       },

                       {
                         name: "DR Congo", 
                         coords: {lat: -2.930652, 
                                  lng: 23.285279},
                         mortality: "medium"
                       },

                        {
                          name: "Russia", 
                          coords: {lat: 62.333724,  
                                   lng: 92.189755},
                          mortality: "low"             
                        },

                        {
                          name: "India", 
                          coords: {lat: 20.593684, 
                                  lng: 78.96288},
                          mortality: "medium"             
                        },

                      {
                        name: "Argentina", 
                        coords: {lat: -38.416097, 
                                 lng: -63.616672},
                        mortality: "none"             
                      },
                      
                      {
                        name: "Brazil", 
                        coords: {lat: -14.235004, 
                                 lng:  -51.92528},
                        mortality: "none"             
                      },

                      {
                        name: "Mexico", 
                        coords: {lat: 23.634501, 
                                 lng: -102.552784},
                        mortality: "none"             
                      },
                       
                      {
                        name: "China", 
                        coords: {lat: 1.352083, 
                                 lng: 103.819836},
                        mortality: "none"             
                      }],
                    });


var zika = new Disease({
  name: "zika",
  nineteenthCentury: [],
  twentiethCentury: [ { 
                        name: "Uganda", 
                        coords: {lat: 1.373333, 
                                 lng: 32.290275},
                        mortality: "low"             
                      },

                      {
                        name: "Nigeria", 
                        coords: {lat: 9.081999, 
                                lng: 8.675277},
                        mortality: "low"             
                      },

                      {
                        name: "Sierra Leone", 
                        coords: {lat: 8.460555, 
                                lng: -11.779889},
                        mortality: "low"             
                      },
                       
                      {
                        name: "Senegal", 
                        coords: {lat: 14.497401, 
                                lng: -14.452362},
                        mortality: "low"             
                      },

                      {
                        name: "Pakistan", 
                        coords: {lat: 30.375321, 
                                lng: 69.345116},
                        mortality: "low"
                      },

                      {
                        name: "Malaysia", 
                        coords: {lat: 4.210484,  
                                lng: 101.975766},
                        mortality: "low"             
                      },

                      {
                        name: "Indonesia", 
                        coords: {lat: -0.789275, 
                                lng: 113.921327},
                        mortality: "low"             
                      } ],

          presentDay: [ { 
                          name: "Mexico", 
                          coords: {lat: 23.634501, 
                                  lng: -102.552784},
                          mortality: "medium"             
                        },

                        {
                          name: "Brazil", 
                          coords: {lat: -14.235004, 
                                  lng: -51.92528},
                          mortality: "high"             
                        },

                        {
                          name: "USA", 
                          coords: {lat: 37.09024, 
                                  lng: -95.712891},
                          mortality: "low"             
                        },
                         
                        {
                          name: "Ecuador", 
                          coords: {lat: -1.831239, 
                                  lng: -78.183406},
                          mortality: "high"             
                        },

                        {
                          name: "Columbia", 
                          coords: {lat: 4.570868, 
                                  lng: -74.297333},
                          mortality: "high"
                        },

                        {
                          name: "Bolivia", 
                          coords: {lat: -16.290154,  
                                  lng: -63.588653},
                          mortality: "high"             
                        },

                        {
                          name: "El Salvador", 
                          coords: {lat: 13.794185, 
                                  lng: -88.89653},
                          mortality: "high"             
                        },

                        { 
                          name: "Costa Rica", 
                          coords: {lat: 9.748917, 
                                  lng:  -83.753428},
                          mortality: "high"             
                        },

                        {
                          name: "Paraguay", 
                          coords: {lat: -23.442503, 
                                  lng: -58.443832},
                          mortality: "high"             
                        },

                        {
                          name: "Thailand", 
                          coords: {lat: 15.870032, 
                                  lng: 100.992541},
                          mortality: "medium"             
                        },
                         
                        {
                          name: "Indonesia", 
                          coords: {lat: -0.789275, 
                                  lng: 113.921327},
                          mortality: "medium"             
                        },

                        {
                          name: "Philippines", 
                          coords: {lat: 12.879721, 
                                  lng: 121.774017},
                          mortality: "medium"
                        },

                        {
                          name: "Malaysia", 
                          coords: {lat: 4.210484,  
                                  lng: 101.975766},
                          mortality: "medium"             
                        },

                        { 
                          name: "Cambodia", 
                          coords: {lat: 12.565679, 
                                  lng: 104.990963},
                          mortality: "medium"             
                        },

                        {
                          name: "Pakistan", 
                          coords: {lat: 30.375321, 
                                  lng: 69.345116},
                          mortality: "low"             
                        },

                        {
                          name: "Nigeria", 
                          coords: {lat: 9.081999, 
                                  lng: 8.675277},
                          mortality: "low"             
                        },
                         
                        {
                          name: "Sierra Leone", 
                          coords: {lat: 8.460555, 
                                  lng: -11.779889},
                          mortality: "low"             
                        },

                        {
                          name: "Senegal", 
                          coords: {lat: 14.497401, 
                                  lng: -14.452362},
                          mortality: "low"
                        },

                        {
                          name: "Uganda", 
                          coords: {lat: 1.373333,  
                                  lng: 32.290275},
                          mortality: "low"             
                        },

                        {
                          name: "China", 
                          coords: {lat: 35.86166, 
                                  lng: 104.195397},
                          mortality: "low"             
                        },

                        {
                          name: "India", 
                          coords: {lat: 20.593684, 
                                  lng: 78.96288},
                          mortality: "low"             
                        },

                        {
                          name: "Russia", 
                          coords: {lat: 61.52401, 
                                  lng: 105.318756},
                          mortality: "low"             
                        },

                        {
                          name: "Spain", 
                          coords: {lat: 40.463667, 
                                  lng: -3.74922},
                          mortality: "low"             
                        },

                        {
                          name: "Germany", 
                          coords: {lat: 51.165691, 
                                  lng: 10.451526},
                          mortality: "low"             
                        } ]    
});

var hiv = new Disease({
  name: "HIV",   
  nineteenthCentury: [],     
  twentiethCentury: [ {
                        name: "UK", 
                        coords: {lat: 55.378051, 
                                lng: -3.435973},
                        mortality: "medium"             
                      },  
                        
                      { 
                        name: "France", 
                        coords: {lat: 46.227638, 
                                lng: 2.213749},
                        mortality: "medium"             
                      },

                      {
                        name: "Spain", 
                        coords: {lat: 40.463667, 
                                lng: -3.74922},
                        mortality: "medium"             
                      },

                      {
                        name: "USA", 
                        coords: {lat: 37.09024, 
                                lng: -95.712891},
                        mortality: "high"             
                      },
                       
                      {
                        name: "South Africa", 
                        coords: {lat: -30.559482, 
                                lng: 22.937506},
                        mortality: "high"             
                      },

                      {
                        name: "DR Congo", 
                        coords: {lat: -2.930652, 
                                lng: 23.285279},
                        mortality: "medium"
                      },

                      {
                        name: "Russia", 
                        coords: {lat: 62.333724,  
                                lng: 92.189755},
                        mortality: "high"             
                      },

                      {
                        name: "India", 
                        coords: {lat: 20.593684, 
                                lng: 78.96288},
                        mortality: "high"             
                      },

                      {
                        name: "Argentina", 
                        coords: {lat: -38.416097, 
                                lng: -63.616672},
                        mortality: "medium"             
                      },
                      
                      {
                        name: "Brazil", 
                        coords: {lat: -14.235004, 
                                lng:  -51.92528},
                        mortality: "high"             
                      },

                      {
                        name: "Mexico", 
                        coords: {lat: 23.634501, 
                                lng: -102.552784},
                        mortality: "medium"             
                      },
                       
                      {
                        name: "China", 
                        coords: {lat: 1.352083, 
                                lng: 103.819836},
                        mortality: "high"             
                      },

                      {
                        name: "Italy", 
                        coords: {lat: 41.87194, 
                                lng: 12.56738},
                        mortality: "medium"             
                      },
                      
                      {
                        name: "Portugal", 
                        coords: {lat: 39.399872, 
                                lng: -8.224454},
                        mortality: "low"             
                      },

                      {
                        name: "Germany", 
                        coords: {lat: 51.165691, 
                                lng: 10.451526},
                        mortality: "medium"             
                      },

                      {
                        name: "Poland", 
                        coords: {lat: 51.919438, 
                                lng: 19.145136},
                        mortality: "low"             
                      },

                      {
                        name: "Ukraine", 
                        coords: {lat: 48.379433, 
                                lng: 31.16558},
                        mortality: "medium"             
                      },

                      {
                        name: "Belarus", 
                        coords: {lat: 53.709807, 
                                lng: 27.953389},
                        mortality: "low"             
                      },

                      {
                        name: "Romania", 
                        coords: {lat: 45.943161, 
                                lng: 24.96676},
                        mortality: "low"             
                      },

                      {
                        name: "Ireland", 
                        coords: {lat: 53.41291, 
                                lng: -8.24389},
                        mortality: "low"             
                      },

                      {
                        name: "Lithuania", 
                        coords: {lat: 55.169438, 
                                lng: 23.881275},
                        mortality: "high"             
                      },

                      {
                        name: "Canada", 
                        coords: {lat: 56.130366, 
                                lng: -106.346771},
                        mortality: "medium"             
                      },

                      {
                        name: "Australia", 
                        coords: {lat: -25.274398, 
                                lng: 133.775136},
                        mortality: "low"             
                      },
                       
                      {
                        name: "Sweden", 
                        coords: {lat: 60.128161, 
                                lng: 18.643501},
                        mortality: "low"             
                      },

                      {
                        name: "Egypt", 
                        coords: {lat: 26.820553, 
                                lng: 30.802498},
                        mortality: "low"             
                      },

                      {
                        name: "Algeria", 
                        coords: {lat: 28.033886, 
                                lng: 1.659626},
                        mortality: "low"             
                      },

                      {
                        name: "Morocco", 
                        coords: {lat: 31.791702, 
                                lng: -7.09262},
                        mortality: "low"             
                      },

                      {
                        name: "Tanzania", 
                        coords: {lat: -6.369028, 
                                lng: 34.888822},
                        mortality: "high"             
                      },
                       
                      {
                        name: "Zambia", 
                        coords: {lat: -13.133897, 
                                lng: 27.849332},
                        mortality: "medium"             
                      },

                      {
                        name: "Mozambique", 
                        coords: {lat: -18.665695, 
                                lng: 35.529562},
                        mortality: "high"             
                      },

                      {
                        name: "Zimbabwe", 
                        coords: {lat: -19.015438, 
                                lng: 29.154857},
                        mortality: "high"             
                      },
                       
                      {
                        name: "Kenya", 
                        coords: {lat: -0.023559, 
                                lng: 37.906193},
                        mortality: "high"             
                      },

                      {
                        name: "Ethiopia", 
                        coords: {lat: 9.145, 
                                lng: 40.489673},
                        mortality: "high"             
                      },

                      {
                        name: "Sudan", 
                        coords: {lat: 12.862807, 
                                lng: 30.217636},
                        mortality: "high"             
                      },

                      {
                        name: "Somalia", 
                        coords: {lat: 5.152149, 
                                lng: 46.199616},
                        mortality: "high"             
                      },

                      {
                        name: "Botswana", 
                        coords: {lat: -22.328474, 
                                lng: 24.684866},
                        mortality: "high"             
                      },

                      {
                        name: "Angola", 
                        coords: {lat: -11.202692, 
                                lng: 17.873887},
                        mortality: "medium"             
                      } ],

          presentDay: [ {
                          name: "UK", 
                          coords: {lat: 55.378051, 
                                  lng: -3.435973},
                          mortality: "low"       
                        },  
                          
                        { 
                          name: "France", 
                          coords: {lat: 46.227638, 
                                  lng: 2.213749},
                          mortality: "low"      
                        },

                        {
                          name: "Spain", 
                          coords: {lat: 40.463667, 
                                  lng: -3.74922},
                          mortality: "low"       
                        },

                        {
                          name: "USA", 
                          coords: {lat: 37.09024, 
                                  lng: -95.712891},
                          mortality: "low"
                        },
                         
                        {
                          name: "South Africa", 
                          coords: {lat: -30.559482, 
                                  lng: 22.937506},
                          mortality: "high"
                        },

                        {
                          name: "DR Congo", 
                          coords: {lat: -2.930652, 
                                  lng: 23.285279},
                          mortality: "medium"
                        },

                        {
                          name: "Russia", 
                          coords: {lat: 62.333724,  
                                  lng: 92.189755},
                          mortality: "medium"
                        },

                        {
                          name: "India", 
                          coords: {lat: 20.593684, 
                                  lng: 78.96288},
                          mortality: "low"
                        },

                        {
                          name: "Argentina", 
                          coords: {lat: -38.416097, 
                                  lng: -63.616672},
                          mortality: "low"
                        },
                        
                        {
                          name: "Brazil", 
                          coords: {lat: -14.235004, 
                                  lng:  -51.92528},
                          mortality: "low"
                        },

                        {
                          name: "Mexico", 
                          coords: {lat: 23.634501, 
                                  lng: -102.552784},
                          mortality: "low"
                        },
                         
                        {
                          name: "China", 
                          coords: {lat: 1.352083, 
                                  lng: 103.819836},
                          mortality: "low"
                        },

                        {
                          name: "Italy", 
                          coords: {lat: 41.87194, 
                                  lng: 12.56738},
                          mortality: "low"
                        },
                        
                        {
                          name: "Portugal", 
                          coords: {lat: 39.399872, 
                                  lng: -8.224454},
                          mortality: "low"
                        },

                        {
                          name: "Germany", 
                          coords: {lat: 51.165691, 
                                  lng: 10.451526},
                          mortality: "low"
                        },

                        {
                          name: "Poland", 
                          coords: {lat: 51.919438, 
                                  lng: 19.145136},
                          mortality: "low"
                        },

                        {
                          name: "Ukraine", 
                          coords: {lat: 48.379433, 
                                  lng: 31.16558},
                          mortality: "low"
                        },

                        {
                          name: "Belarus", 
                          coords: {lat: 53.709807, 
                                  lng: 27.953389},
                          mortality: "low"
                        },

                        {
                          name: "Romania", 
                          coords: {lat: 45.943161, 
                                  lng: 24.96676},
                          mortality: "low"
                        },

                        {
                          name: "Ireland", 
                          coords: {lat: 53.41291, 
                                  lng: -8.24389},
                          mortality: "low"
                        },

                        {
                          name: "Lithuania", 
                          coords: {lat: 55.169438, 
                                  lng: 23.881275},
                          mortality: "low"
                        },

                        {
                          name: "Canada", 
                          coords: {lat: 56.130366, 
                                  lng: -106.346771},
                          mortality: "low"
                        },

                        {
                          name: "Australia", 
                          coords: {lat: -25.274398, 
                                  lng:  133.775136},
                          mortality: "low"
                        },
                         
                        {
                          name: "Sweden", 
                          coords: {lat: 60.128161, 
                                  lng: 18.643501},
                          mortality: "low" 
                        },

                        {
                          name: "Egypt", 
                          coords: {lat: 26.820553, 
                                  lng: 30.802498},
                          mortality: "low"  
                        },

                        {
                          name: "Algeria", 
                          coords: {lat: 28.033886, 
                                  lng: 1.659626},
                          mortality: "low"
                        },

                        {
                          name: "Morocco", 
                          coords: {lat: 31.791702, 
                                  lng: -7.09262},
                          mortality: "low"
                        },

                        {
                          name: "Tanzania", 
                          coords: {lat: -6.369028, 
                                  lng: 34.888822},
                          mortality: "medium"
                        },
                         
                        {
                          name: "Zambia", 
                          coords: {lat: -13.133897, 
                                  lng: 27.849332},
                          mortality: "medium"
                        },

                        {
                          name: "Mozambique", 
                          coords: {lat: -18.665695, 
                                  lng: 35.529562},
                          mortality: "high"
                        },

                        {
                          name: "Zimbabwe", 
                          coords: {lat: -19.015438, 
                                  lng: 29.154857},
                          mortality: "high"
                        },
                         
                        {
                          name: "Kenya", 
                          coords: {lat: -0.023559, 
                                  lng: 37.906193},
                          mortality: "medium"
                        },

                        {
                          name: "Ethiopia", 
                          coords: {lat: 9.145, 
                                  lng: 40.489673},
                          mortality: "high"
                        },

                        {
                          name: "Sudan", 
                          coords: {lat: 12.862807, 
                                  lng: 30.217636},
                          mortality: "medium"
                        },

                        {
                          name: "Somalia", 
                          coords: {lat: 5.152149, 
                                  lng: 46.199616},
                          mortality: "medium"
                        },

                        {
                          name: "Botswana", 
                          coords: {lat: -22.328474, 
                                  lng: 24.684866},
                          mortality: "high"
                        },

                        {
                          name: "Angola", 
                          coords: {lat: -11.202692, 
                                  lng: 17.873887},
                          mortality: "high"
                        } ]
});

smallPox.addFact(spFact1);
smallPox.addFact(spFact2);
smallPox.addFact(spFact3);

tuberculosis.addFact(tbFact1);
tuberculosis.addFact(tbFact2);
tuberculosis.addFact(tbFact3);

zika.addFact(zikaFact1);
zika.addFact(zikaFact2);
zika.addFact(zikaFact3);

hiv.addFact(hivFact1);
hiv.addFact(hivFact2);
hiv.addFact(hivFact3);

return [smallPox, tuberculosis, zika, hiv];

}

Diseases.prototype = {
  all: function(onComplete){

  }
}

module.exports = Diseases;
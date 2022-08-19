// // import React, { Component } from "react";
// // import ReactDOM from "react-dom";
// import "./card.css";
// // import {
// //   CardActions,
// //   CardContent,
// //   CardMedia,
// //   Typography,
// //   Button,
// // } from "@mui/material";
// // // import Box from "@mui/material/Box";
// // // import Card from "@mui/material/Card";
// // // import CardActions from "@mui/material/CardActions";
// // // import CardContent from "@mui/material/CardContent";
// // // import Button from "@mui/material/Button";
// // // import Typography from "@mui/material/Typography";

// // // const bull = (
// // //   <Box
// // //     component="span"
// // //     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
// // //   >
// // //     •
// // //   </Box>
// // // );

// // // const card = (
// // //   <React.Fragment>
// // //     <CardContent>
// // //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
// // //         Word of the Day
// // //       </Typography>
// // //       <Typography variant="h5" component="div">
// // //         be{bull}nev{bull}o{bull}lent
// // //       </Typography>
// // //       <Typography sx={{ mb: 1.5 }} color="text.secondary">
// // //         adjective
// // //       </Typography>
// // //       <Typography variant="body2">
// // //         well meaning and kindly.
// // //         <br />
// // //         {'"a benevolent smile"'}
// // //       </Typography>
// // //     </CardContent>
// // //     <CardActions>
// // //       <Button size="small">Learn More</Button>
// // //     </CardActions>
// // //   </React.Fragment>
// // // );

// // // export default function OutlinedCard() {
// // //   return (
// // //     <Box sx={{ minWidth: 275 }}>
// // //       <Card variant="outlined">{card}</Card>
// // //     </Box>
// // //   );
// // // }

// // class Card extends Component {
// //   render() {
// //     return <div className="card">{this.props.children}</div>;
// //   }
// // }

// // class SelectableCard extends Component {
// //   render() {
// //     var isSelected = this.props.selected ? "selected" : "";
// //     var className = "selectable " + isSelected;
// //     return (
// //       <Card>
// //         <div className={className} onClick={this.props.onClick}>
// //           {this.props.children}
// //           <div className="check">
// //             <span className="checkmark">✔</span>
// //           </div>
// //         </div>
// //       </Card>
// //     );
// //   }
// // }

// // class SelectableTitleCard extends Component {
// //   render() {
// //     var { title, description, selected } = this.props;
// //     return (
// //       <SelectableCard onClick={this.props.onClick} selected={selected}>
// //         <div className="content">
// //           <h1 className="title">{title}</h1>
// //           <p className="description">{description}</p>
// //         </div>
// //       </SelectableCard>
// //     );
// //   }
// // }

// // class SelectableCardList extends Component {
// //   constructor(props) {
// //     super(props);
// //     var selected = props.multiple ? [] : -1;
// //     var initialState = {
// //       selected: selected,
// //     };
// //     this.state = initialState;
// //   }

// //   onItemSelected(index) {
// //     this.setState((prevState, props) => {
// //       if (props.multiple) {
// //         var selectedIndexes = prevState.selected;
// //         var selectedIndex = selectedIndexes.indexOf(index);
// //         if (selectedIndex > -1) {
// //           selectedIndexes.splice(selectedIndex, 1);
// //           props.onChange(selectedIndexes);
// //         } else {
// //           if (!(selectedIndexes.length >= props.maxSelectable)) {
// //             selectedIndexes.push(index);
// //             props.onChange(selectedIndexes);
// //           }
// //         }
// //         return {
// //           selected: selectedIndexes,
// //         };
// //       } else {
// //         props.onChange(index);
// //         return {
// //           selected: index,
// //         };
// //       }
// //     });
// //   }

// //   render() {
// //     var { contents, multiple } = this.props;

// //     var content = contents.map((cardContent, i) => {
// //       var { title, description, selected } = cardContent;
// //       var selected = multiple
// //         ? this.state.selected.indexOf(i) > -1
// //         : this.state.selected == i;
// //       return (
// //         <SelectableTitleCard
// //           key={i}
// //           title={title}
// //           description={description}
// //           selected={selected}
// //           onClick={(e) => this.onItemSelected(i)}
// //         />
// //       );
// //     });
// //     return <div className="cardlist">{content}</div>;
// //   }
// // }

// // class Example extends Component {
// //   onListChanged(selected) {
// //     this.setState({
// //       selected: selected,
// //     });
// //   }
// //   submit() {
// //     window.alert("Selected: " + this.state.selected);
// //   }
// //   render() {
// //     return (
// //       <div className="column">
// //         <h1 className="title">{this.props.title}</h1>
// //         <SelectableCardList
// //           multiple={this.props.multiple}
// //           maxSelectable={this.props.maxSelectable}
// //           contents={this.props.cardContents}
// //           onChange={this.onListChanged.bind(this)}
// //         />
// //         <button className="card" onClick={(e) => this.submit()}>
// //           Get selected
// //         </button>
// //       </div>
// //     );
// //   }
// // }

// // var teams = [
// //   {
// //     title: "FC Barcelona",
// //     description: "Spain",
// //   },
// //   {
// //     title: "Real Madrid",
// //     description: "Spain",
// //   },
// //   {
// //     title: "Bayern Munich",
// //     description: "Germany",
// //   },
// //   {
// //     title: "Juventus",
// //     description: "Italy",
// //   },
// // ];

// // var genres = [
// //   {
// //     title: "Google",
// //     description: "Mountain View, CA",
// //   },
// //   {
// //     title: "Apple",
// //     description: "Cupertino, CA",
// //   },
// //   {
// //     title: "Microsoft",
// //     description: "Redmond, WA",
// //   },
// //   {
// //     title: "Facebook",
// //     description: "Menlo Park, CA",
// //   },
// // ];

// // class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <Example title="Pick a team" cardContents={teams} />
// //         <Example
// //           title="Choose brands (3 max)"
// //           cardContents={genres}
// //           multiple
// //           maxSelectable={3}
// //         />
// //       </div>
// //     );
// //   }
// // }

// // ReactDOM.render(<App />, document.getElementById("app"));
// // export default App;


// // import Card from 'react-bootstrap/Card';

// // function TextExample() {
// //   return (
// //     <Card style={{ width: '18rem' }}>
// //       <Card.Body>
// //         <Card.Title>Card Title</Card.Title>
// //         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
// //         <Card.Text>
// //           Some quick example text to build on the card title and make up the
// //           bulk of the card's content.
// //         </Card.Text>
// //         <Card.Link href="#">Card Link</Card.Link>
// //         <Card.Link href="#">Another Link</Card.Link>
// //       </Card.Body>
// //     </Card>
// //   );
// // }

// // export default TextExample;


// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';

// // const bull = (
// //   <Box
// //     component="span"
// //     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
// //   >
// //     •
// //   </Box>
// // );

// // const card = (
// //   <React.Fragment>
// //     <CardContent>
// //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
// //         Word of the Day
// //       </Typography>
// //       <Typography variant="h5" component="div">
// //         be{bull}nev{bull}o{bull}lent
// //       </Typography>
// //       <Typography sx={{ mb: 1.5 }} color="text.secondary">
// //         adjective
// //       </Typography>
// //       <Typography variant="body2">
// //         well meaning and kindly.
// //         <br />
// //         {'"a benevolent smile"'}
// //       </Typography>
// //     </CardContent>
// //     <CardActions>
// //       <Button size="small">Learn More</Button>
// //     </CardActions>
// //   </React.Fragment>
// // );

// // export default function OutlinedCard() {
// //   return (
// //     <Box sx={{ minWidth: 275 }}>
// //       <Card variant="outlined">{card}</Card>
// //     </Box>
// //   );
// // }


// // import React from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import Card from "@material-ui/core/Card";
// // import CardActions from "@material-ui/core/CardActions";
// // import CardContent from "@material-ui/core/CardContent";
// // import Button from "@material-ui/core/Button";
// // import Typography from "@material-ui/core/Typography";

// // const useStyles = makeStyles({
// //   root: {
// //     minWidth: 200
// //   },
// //   bullet: {
// //     display: "inline-block",
// //     margin: "0 2px",
// //     transform: "scale(0.8)"
// //   },
// //   title: {
// //     fontSize: 14
// //   },
// //   pos: {
// //     marginBottom: 12
// //   }
// // });

// // export default function OutlinedCard() {
// //   const classes = useStyles();
// //   const bull = <span className={classes.bullet}>•</span>;

// //   return (
// //     <Card className={classes.root} variant="outlined">
// //       <CardContent>
// //         <Typography
// //           className={classes.title}
// //           color="textSecondary"
// //           gutterBottom
// //         >
// //           Word of the Day
// //         </Typography>
// //         <Typography variant="h5" component="h2">
// //           be{bull}nev{bull}o{bull}lent
// //         </Typography>
// //         <Typography className={classes.pos} color="textSecondary">
// //           adjective
// //         </Typography>
// //         <Typography variant="body2" component="p">
// //           well meaning and kindly.
// //           <br />
// //           {'"a benevolent smile"'}
// //         </Typography>
// //       </CardContent>
// //       <CardActions>
// //         <Button size="small">Learn More</Button>
// //       </CardActions>
// //     </Card>
// //   );
// // }

// // import React from "react";

// // function CardComponent(){
// //   return (
// //     <div class="container">
// //       <div class="row">
// // 			  <div class="col-xs-12 col-md-4">
// // 				  <div class="color-block-wrapper">
// // 					  <div class="color-block color-block-lblue color-block-icon-list">
// // 						  <div class="color-block-head">
// // 							  Without registering
// // 						  </div>
// // 						  <div class="color-block-text">
// // 							 Online payment 
// //                <br/>
// // 							 by debt number
// // 						  </div>
// // 					  </div>
// // 					<div class="color-block-bottom">
// //           <a href="#" class="btn btn-transparent-lblue">Pay by number</a>
// // 			    </div>
// // 				  </div>
// // 			</div>
// // 			<div class="col-xs-12 col-md-4">
// // 				<div class="color-block-wrapper">
// // 					<div class="color-block color-block-dblue color-block-icon-person">
// // 						<div class="color-block-head">
// // 							Without registering
// // 						</div>
// // 						<div class="color-block-text">
// // 							 Online payment 
// //                <br />
// // 							 by name
// // 						</div>
// // 					</div>
// // 					<div class="color-block-bottom">
// //  <a href="#" class="btn btn-transparent">Pay by name</a>
// // 					</div>
// // 				</div>
// // 			</div>
// // 			<div class="col-xs-12 col-md-4">
// // 				<div class="color-block-wrapper">
// // 					<div class="color-block color-block-green color-block-icon-lock">
// // 						<div class="color-block-head">
// // 							 Without communication
// // 						</div>
// // 						<div class="color-block-text">
// // 							 Payment through personal account
// // 						</div>
// // 					</div>
// // 					<div class="color-block-bottom">
// //  <a href="#" class="btn btn-transparent-green">Personal offer</a>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</div>
// // </div>
// //   )
// // }

// // export default CardComponent;

// import { React } from "react";
// import { Buffer } from "buffer";
// import { Link } from "react-router-dom";

// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
// } from "@mui/material";



// const ProductCard = (props) => {
//   return (
//     <Card
//       sx={{ maxWidth: 345, m: 5, boxShadow: 5, borderRadius: 2, width: 250 }}
//     >
//       <CardMedia
//         component="img"
//         className="image"
//         height="140"
//         alt={props.name}
//         src={`data:image/png;base64,${Buffer.from(props.product.img).toString(
//           "base64"
//         )}`}
//       />

//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {props.product.name}
//         </Typography>

//         <Typography gutterBottom variant="h6" component="div">
//           {props.product.tag}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {props.product.description}
//         </Typography>
//       </CardContent>
//       <CardActions style={{ alignItems: "end" }}>
//         <Button>
//           <Link
//             className="link"
//             to={`/product/${props.product._id}`}
//             state={{ productId: props.product._id }}
//           >
//             View Product
//           </Link>
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default ProductCard;

import React, { useState } from 'react'
import './card.css'
const Cards = () => {


    const cardItems = ['Google','Meta', 'Apple', 'Amzn','India','US','UK','AUS'];
    
    const [items, setItems] = useState({
       ...cardItems.map(item => {return {item, selected:false}})
})

    function handleClick(e){
        if ('card-false' == e.currentTarget.className){
            const idx = e.currentTarget.getAttribute('data-idx');
            const item = e.currentTarget.getAttribute('data-item');
            setItems({...items, [idx]: {item:item,selected:true} })

        }
        else{
            
            const idx = e.currentTarget.getAttribute('data-idx');
            const item = e.currentTarget.getAttribute('data-item');
            setItems({...items, [idx]: {item:item,selected: false} })

        }
    }
    function handleSubmit(){
        console.log(items);
    }
  return (
    <div className='card-container'>
        {
            Object.keys(items).map((item, idx)=>{
                const classnamex = 'card-' + items[item].selected;
                return(
                    <div className= {classnamex} onClick={handleClick} data-item={items[item].item} data-idx = {idx} >
                        {items[item].item}
                    
                    </div>                 
                )
                
            })
            
        }
        <button onClick={handleSubmit} > Submit</button>
    </div>
  )
}

function Card(props){
    const classnamex = 'card' + props.props.selected;
    return(
        <div className= {classnamex}  >
            {props.props.item}
            
        </div>
        
    )
}
export default Cards;
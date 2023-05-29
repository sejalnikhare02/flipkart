import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setData(resp);
        console.log(resp.data, "...data");
      });
    });
  }, []);

  // const Loading =()=>{
  //   return(<>
  //     Loading....
  //   </>)
  // }

  // const ShowProduct = () =>{

  // }

  return (
    <>
      <div className="row justify-content-center">
        <h1>Products</h1>
        {data?.map((prod) => {
          console.log("..prod", prod);
          return (
            <>
              <div className="col-md-3">
                <Card sx={{ maxWidth: 245 }} key={prod.id}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={prod.image}
                      alt={prod.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {prod.title}
                      </Typography>
                      <button style={{ backgroundColor: "green" }}>
                        {prod.rating}
                      </button>
                      <h3>$:{prod.price}</h3>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;

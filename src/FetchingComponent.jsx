import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
  Grid
} from "@mui/material";
import { textAlign } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { context } from './Context'
import { Link } from "react-router-dom";


export const FetchingComponent = () => {

  const { numPages,
    setNumPages,
    actualPage,
    setActualPage,
    characters, 
    setCharacters,
    loading,
    setLoading} = useContext(context)


  return (
    <Stack spacing="2" diretion="column" sx={{ gap: "30px" }}>
      {loading ? (
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Loading
        </Typography>
      ) : (
        <Stack>
          <Stack
            spacing={2}
            direction="row"
            sx={{ justifyContent: "space-evenly", textAlign: "center", marginBottom:"1em" }}
          >
            <Button
              onClick={() => {
                actualPage == 1
                  ? setActualPage(actualPage)
                  : setActualPage(actualPage - 1);
              }}
              variant="contained"
            >
              Previous
            </Button>
            <Typography variant="h4" sx={{ textAlign: "center", color:"#fff" }}>
              {actualPage}
            </Typography>
            <Button
              onClick={() => {
                actualPage == numPages
                  ? setActualPage(actualPage)
                  : setActualPage(actualPage + 1);
              }}
              variant="contained"
            >
              Next
            </Button>
          </Stack>
          {/* <div className="cards-container"></div> */}
          <Grid container sx={{gap:"1em", justifyContent:"center"}}>
            {characters.map((e) => {
              return (
                <Grid item md={3} lg={2} xl={2} sx={{textAlign:"center"}} key={e.id}>
                <Card sx={{ borderRadius: "20px", bgcolor: "#505050", color: "#fff", maxWidth:"250px"}} >
                  {/* NOTA el CardActionArea hace que todo el contenido tenga funcionalidad de botón */}
                  <Link to={`/${e.id}`} className="linked" >
                    <CardContent>
                      <Typography variant="h5" sx={{ textAlign: "center" }} >
                        {e.name}
                      </Typography>
                    </CardContent>
                    <CardMedia component="img" height="250em" image={e.image} sx={{ borderRadius: "15px"}} alt={`${e.name} image`} />
                    <CardContent>
                      <Stack direciont="column">
                        <Typography variant="p" sx={{ textAlign: "center" }} gutterBottom>
                          Location: {e.location.name}
                        </Typography>
                        <Typography variant="p" sx={{ textAlign: "center" }}>
                          Origin: {e.origin.name}
                        </Typography>
                        <Typography variant="p" sx={{ textAlign: "center" }}>
                          Status: {e.status}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Link>
                </Card>
                </Grid> 
              );
            })}
          </Grid>
        </Stack>
      )}
    </Stack>
  );
};

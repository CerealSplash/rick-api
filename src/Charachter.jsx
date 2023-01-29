import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Charachter = ({ data }) => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm")); //Se hace true a partir de -600px

  return (
    <Stack sx={{ marginTop: "2em" }}>
      <div className="container">
        <Stack
          sx={{
            margin: "0 auto",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/" className="link">
            <Button variant="contained" sx={{ width: "100%" }}>
              Go Home
            </Button>
          </Link>
        </Stack>
        {!isMatch ? (
          <Card
            sx={{
              borderRadius: "20px",
              bgcolor: "#505050",
              color: "#fff",
              maxWidth: "100vw",
              //   margin: "0 auto",
              marginTop: "2em",
              padding: "10px",
              display: "flex",
              gap: "1em",
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={data.image}
              sx={{
                borderRadius: "15px",
                maxWidth: "300px",
                margin: "0 auto",
                width: "300px",
              }}
              alt={`${data.name} image`}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4">Name: {data.name}</Typography>
              <hr />
              <Typography variant="h5">Origin: {data.origin.name}</Typography>
              <hr />
              <Typography variant="h5">Specie: {data.species}</Typography>
              <hr />
              <Typography variant="h5">Gender: {data.gender}</Typography>
              <hr />
              <Typography variant="h5">Status: {data.status}</Typography>
              <hr />
              <Typography variant="h5">
                Total aparitions: {data.episode.length}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Card
            sx={{
              borderRadius: "20px",
              bgcolor: "#505050",
              color: "#fff",
              maxWidth: "100vw",
              //   margin: "0 auto",
              marginTop: "2em",
              padding: "10px",
              gap: "1em",
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={data.image}
              alt={`${data.name} image`}
              sx={{
                borderRadius: "15px",
                maxWidth: "300px",
                margin: "0 auto",
                width: "300px",
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4">Name: {data.name}</Typography>
              <hr />
              <Typography variant="h5">Origin: {data.origin.name}</Typography>
              <hr />
              <Typography variant="h5">Specie: {data.species}</Typography>
              <hr />
              <Typography variant="h5">Gender: {data.gender}</Typography>
              <hr />
              <Typography variant="h5">Status: {data.status}</Typography>
              <hr />
              <Typography variant="h5">
                Total aparitions: {data.episode.length}
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </Stack>
  );
};

import { Grid, Typography } from "@material-ui/core";
const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{
        padding: "30px",
        minHeight: "93vh",
      }}
    >
      <Grid item>
        <Typography variant="h2">
          Welcome to Job Portal For All Types of Informal Jobs.
        </Typography>
        <img
          src="https://png.pngtree.com/background/20210710/original/pngtree-recruitment-job-background-banner-picture-image_1039089.jpg"
          // className=".MuiImageListItem-img"
        />
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;

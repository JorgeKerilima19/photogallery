import { Typography, Container, TextField, Divider, Box } from "@mui/material";

export const SearchComponent = () => {
  return (
    <Container>
      <Typography variant="h5" sx={{ paddingBottom: "1.85rem" }}>
        Search
      </Typography>
      <Container disableGutters>
        <TextField
          hiddenLabel
          id="user-to-find"
          variant="outlined"
          size="small"
          InputProps={{ sx: { color: "black" } }}
          sx={{ width: "100%" }}
        />
      </Container>
      <Divider variant="fullWidth" sx={{ marginTop: 2, marginBottom: 2 }} />

      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <Typography variant="subtitle1">Recent</Typography>
        <Typography color="#0095f6" variant="caption">
          Clear All
        </Typography>
      </Box>
      <Container disableGutters>
        {/*Users should be rendered here based on the input  */}
      </Container>
    </Container>
  );
};

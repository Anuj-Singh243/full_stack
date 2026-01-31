import { Button, TextField, Card, CardContent, Typography } from "@mui/material";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Card className="squareCard" elevation={6}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Material UI Example
          </Typography>

          <TextField label="Name" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />

          <Button variant="contained" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

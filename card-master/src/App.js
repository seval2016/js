import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Course from "./Course";
import Container from "@mui/material/Container";
import Angular from "./images/angular.jpg";
import Bootstrap5 from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, obcaecati cum ducimus quisquam ipsum veniam quia modi tempore similique voluptatem dicta at et rerum porro aliquid tempora nostrum repellendus assumenda!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Bootstrap5}
              title="Bootstrap5"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, obcaecati cum ducimus quisquam ipsum veniam quia modi tempore similique voluptatem dicta at et rerum porro aliquid tempora nostrum repellendus assumenda!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={KompleWeb}
              title="KompleWeb"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, obcaecati cum ducimus quisquam ipsum veniam quia modi tempore similique voluptatem dicta at et rerum porro aliquid tempora nostrum repellendus assumenda!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Ccsharp}
              title="Ccsharp"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, obcaecati cum ducimus quisquam ipsum veniam quia modi tempore similique voluptatem dicta at et rerum porro aliquid tempora nostrum repellendus assumenda!"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

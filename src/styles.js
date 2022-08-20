import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#121212"
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(12, 20),
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: "#D50000",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#121212",
    color: "#fff"
  },
  search: {
    margin: theme.spacing(3),
    backgroundColor: "#121212",
    color: "#fff"
  },
}));
export { useStyles };

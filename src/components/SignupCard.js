import React from "react";
import Person from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  makeStyles,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Grid,
  TextField,
  Paper,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import Call from "@material-ui/icons/Call";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const styles = makeStyles(theme => ({
  root: {
    width: "90%",
    display: "flex",
    flexWrap: "wrap"
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },

  margin: {
    margin: theme.spacing(1)
  },
  TextValidator: {
    flexBasis: 200
  },
  Typography: {}
}));
function SignupCard() {
  const classes = styles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    confirmPassword: "",
    showConfirmPassword: false,
    number: "",
    fullname: ""
  });

  React.useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Grid container justify="center" spacing={16}>
      <ValidatorForm>
        <Grid item xs={12}>
          <Paper
            style={{ marginTop: 60, boxShadow: "5px 5px 5px 5px #888888" }}
          >
            <div style={{ padding: 30 }}>
              <Grid item xs={16}>
                <Typography className={classes.Typography} align="center">
                  CREATE YOUR ACCOUNT
                </Typography>
              </Grid>
              <Grid item xs={16}>
                <TextValidator
                  id="fullname"
                  className={clsx(classes.margin, classes.TextValidator)}
                  variant="outlined"
                  type="text"
                  label="Full Name"
                  value={values.fullname}
                  onChange={handleChange("fullname")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          <Person />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={16}>
                <TextValidator
                  id="number"
                  className={clsx(classes.margin, classes.TextValidator)}
                  variant="outlined"
                  type="text"
                  label="Phone number"
                  validators={[
                    "minStringLength:10",
                    "maxStringLength:10"
                    // "matchRegexp:^[789]d{9}$"
                  ]}
                  value={values.number}
                  onChange={handleChange("number")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          <Call />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={16}>
                <TextValidator
                  id="outlined-adornment-password"
                  className={clsx(classes.margin, classes.TextValidator)}
                  variant="outlined"
                  type={values.showPassword ? "text" : "password"}
                  label="Password"
                  value={values.password}
                  onChange={handleChange("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={16}>
                <TextValidator
                  id="confirmPassword"
                  className={clsx(classes.margin, classes.TextValidator)}
                  variant="outlined"
                  type={values.showConfirmPassword ? "text" : "password"}
                  label="ConfirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  validators={["isPasswordMatch", "required"]}
                  errorMessages={[
                    "password mismatch",
                    "This field is required"
                  ]}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Grid item xs={24} align="center">
                  <Button variant="contained" color="secondary" align="center">
                    SUBMIT
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </ValidatorForm>
    </Grid>
  );
}
// SignupCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default SignupCard;

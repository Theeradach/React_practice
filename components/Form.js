import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: 30
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 200
  }
});

class OutlinedInputAdornments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      showPassword: false
    };
  }

  onChange = event => {
    this.setState({ name: event.target.value });
    this.setState({ email: event.target.value });
    this.setState({ phone: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    console.log("Name: " + this.state.name);
    console.log("Email: " + this.state.email);
    console.log("Phone: " + this.state.phone);

    this.setState({
      name: "",
      emali: "",
      phone: ""
    });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <form onSubmit={this.onSubmit}>
          <TextField
            id="outlined-adornment-name"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange("name")}
            helperText="Name"
          />
          <TextField
            id="outlined-adornment-email"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange("email")}
            helperText="Email"
          />
          <TextField
            id="outlined-adornment-phone"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Phone"
            value={this.state.phone}
            onChange={this.handleChange("phone")}
            helperText="Phone"
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>
            }}
          />
          <TextField
            id="outlined-adornment-password"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            type={this.state.showPassword ? "text" : "password"}
            label="Password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableRipple
            className={classNames(classes.margin, classes.bootstrapRoot)}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedInputAdornments);

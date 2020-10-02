import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {setLoginTC} from '../../../redux/login-reducer';
import {AppRootStateType} from '../../../redux/redux-store';
import {NavLink, Redirect} from 'react-router-dom';
import FormButton from '../../../common/FormBtn';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',

  },
  centr: {
    margin: '0 auto'
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function LoginPage() {

  const isAuth = useSelector<AppRootStateType, boolean | undefined>(state => state.login.isAuth)

  const classes = useStyles();
  const dispatch = useDispatch()

  const formik: any = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validate: (values) => {
      if (!values.email) {
        return {
          email: 'Email is required'
        };
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        return {
          email: 'Invalid email address'
        };
      }
    },
    onSubmit: values => {
      const {email, password, rememberMe} = values
      dispatch(setLoginTC(email, password, rememberMe))
    },
  });

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline/>
      <Grid item xs={12} sm={8} md={5} className={classes.centr} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}
                className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <FormControlLabel
              control={<Checkbox id="rememberMe"
                                 name="rememberMe"
                                 onChange={formik.handleChange}
                                 value={formik.values.rememberMe} color="primary"/>}
              label="Remember me"
            />
            <div>Login: sotrudnik_test@mail.ru</div>
            <div>Password: passwordTest</div>
            <FormButton name={'Log in'}/>
            <Grid container>
              <Grid item xs>
                <NavLink to='/passwordRecovery'>
                  <Link
                    variant="body2">
                    Forgot password?
                  </Link>
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to='/register'>
                  <Link
                    variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

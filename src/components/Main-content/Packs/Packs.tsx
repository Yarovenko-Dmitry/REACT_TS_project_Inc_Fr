import React, {useCallback, useEffect, useState} from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {
  addNewPackTC, deletePackTC, getPackOfCardsTC, PackType, updatePackTC
} from '../../../redux/packs-reducer';
import {Typography, Grid, Button, IconButton} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ModalWindow from '../../../common/Modal';
import InputField from '../../../common/InputField';
import FormButton from '../../../common/FormBtn';
import RangeSlider from '../../../common/RangeSlider';
import Pagination from '../../../common/Pagination';
import TableData from '../../../common/Table';
import {Redirect} from 'react-router';
import {getCardsTC} from '../../../redux/cards-reducer';
import {useHistory} from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteIcon from '@material-ui/icons/Delete';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import SchoolIcon from '@material-ui/icons/School';

const theme = createMuiTheme();
const useStyles = makeStyles({
  padding: {
    padding: 0
  }, button: {
    width: '250px', alignContent: 'center',
  }, margin: {
    marginLeft: theme.spacing(5),
  }, distance: {
    width: '150px'
  },
});

const Packs = React.memo(function () {

  let history = useHistory();

  const classes = useStyles();

  const [localPage, setlocalPage] = useState(1);
  const [localRow, setlocalRow] = useState(4);
  const [newName, setNewName] = useState('');
  const [currentPackName, setCurrentPackName] = useState('');
  const [updatePackId, setUpdatePackId] = useState('');

  const [isOpenAddPackModalPopup, setIsOpenAddPackModalPopup] = useState(false);
  const [isOpenModifyPackModalPopup, setIsOpenModifyPackModalPopup] = useState(false);

  const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized);
  const isAuth = useSelector<AppRootStateType, boolean | undefined>(state => state.login.isAuth);
  const userProfile = useSelector<AppRootStateType, any>(state => state.login.userProfile);

  const onChangePage = (newPage: number) => {
    setlocalPage(newPage + 1);
    dispatch(getPackOfCardsTC(newPage + 1, localRow));
  };
  const onChangeRowLength = (row: number) => {
    setlocalRow(row);
    dispatch(getPackOfCardsTC(localPage, row));
  };

  const state = useSelector<AppRootStateType, any>(state => state.packsReducer);
  const {cardPacks, page, pageCount, cardPacksTotalCount} = state;
  // const {isAuth, userProfile} = useSelector<AppRootStateType, any>(state => state.login);
  const dispatch = useDispatch();

  const userEmail = userProfile.email;

  useEffect(() => {
    dispatch(getPackOfCardsTC(localPage, localRow));
  }, [pageCount, page]);

  const onAddNewPackHandler = () => {
    dispatch(addNewPackTC(newName));
    setIsOpenAddPackModalPopup(false);
  };

  const onModifyPackHandler = () => {
    dispatch(updatePackTC(updatePackId, currentPackName));
    setIsOpenModifyPackModalPopup(false);
  };

  const onDeleteHandler = (id: string) => {
    dispatch(deletePackTC(id));
  };

  const onLearningHandler = (id: string) => {
    history.push('/learn/' + id);
  };

  const onOpenHandler = (id: string) => {
    history.push('/сards/' + id);
  };

  const onUpdateHandler = (id: string) => {
    let cardPack: PackType = cardPacks.find((el: PackType) => el._id === id);
    setCurrentPackName(cardPack.name);
  };

  const handleModifyPackModalPopupOpen = (id: string) => {
    setUpdatePackId(id);
    setIsOpenModifyPackModalPopup(true);
    onUpdateHandler(id);
  };

  const handleModifyPackModalPopupClose = () => {
    setIsOpenModifyPackModalPopup(false);
  };

  const handleModifyPopupOpen = () => {
    setIsOpenAddPackModalPopup(true);
  };

  const handleModifyPopupClose = () => {
    setIsOpenAddPackModalPopup(false);
  };

  const tableCell = [{name: 'Name', align: 'inherit'}, {name: 'Card Count', align: 'center'}, {
    name: 'To learn',
    align: 'center'
  }, {name: 'Open', align: 'right'}, {name: 'Delete', align: 'center'}, {
    name: 'Modify',
    align: 'left'
  }, {name: 'Updated', align: 'right'},];

  const randomColor = useCallback(() => {
    let color = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    return color;
  }, []);

  if (isAuth) {
    return (<div>
      <TableContainer component={Paper}>
        <Grid
          style={{marginTop: theme.spacing(2)}}
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={5}>
            <Typography className={classes.margin} variant="h3">Packs</Typography>
          </Grid>
          <Grid item xs={3}>
            <RangeSlider maxRange={20} minRange={0}/>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => handleModifyPopupOpen()}
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddBoxIcon/>}
            >
              ADD PACK
            </Button>
          </Grid>
        </Grid>
        <TableData heading={tableCell}>
          {cardPacks.map((row: PackType) => (<TableRow key={row._id}>
            <TableCell className={classes.distance} component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.cardsCount}</TableCell>
            <TableCell align="center">
              <IconButton style={{color: randomColor()}}
                          onClick={() => onLearningHandler(row._id)}
                          className={classes.padding} aria-label="learn">
                <SchoolIcon fontSize="small"/>
              </IconButton>
            </TableCell>
            <TableCell align="right">
              <IconButton style={{color: randomColor()}}
                          onClick={() => onOpenHandler(row._id)}
                          className={classes.padding} aria-label="add">
                <AddBoxIcon fontSize="small"/>
              </IconButton>
            </TableCell>
            <TableCell align="center">
              <IconButton style={{color: userEmail !== row.user_name ? '#303030' : randomColor()}}
                          disabled={userEmail !== row.user_name}
                          className={classes.padding} aria-label="delete"
                          onClick={() => onDeleteHandler(row._id)}>
                <DeleteIcon fontSize="small"/>
              </IconButton>
            </TableCell>
            <TableCell align="left">
              {/*Modify Button*/}
              <IconButton style={{color: userEmail !== row.user_name ? '#303030' : randomColor()}}
                          disabled={userEmail !== row.user_name}
                          onClick={() => handleModifyPackModalPopupOpen(row._id)}
                          className={classes.padding} aria-label="modify">
                <AutorenewIcon fontSize="small"/>
              </IconButton>
            </TableCell>
            <TableCell align="right">{row.updated.slice(0, -14)}</TableCell>
          </TableRow>))}
        </TableData>
      </TableContainer>
      <Pagination count={cardPacksTotalCount} page={page - 1}
                  rowsPerPageOptions={[4, 10, 20]} onChangePage={onChangePage}
                  rowsPerPage={pageCount} onChangeRowsPerPage={onChangeRowLength}/>
      <ModalWindow handleClose={handleModifyPopupClose} isOpen={isOpenAddPackModalPopup}
                   title={'Add' + ' new pack'}>

        <form onSubmit={onAddNewPackHandler}>
          <Grid container spacing={2}>
            <InputField value={newName}
                        type={'text'} label={'Set new name'}
                        onChange={setNewName}/>
            <FormButton name={'Send'}/>
          </Grid>
        </form>
      </ModalWindow>
      <ModalWindow handleClose={handleModifyPackModalPopupClose} isOpen={isOpenModifyPackModalPopup}
                   title={'Modify' + ' pack name'}>
        <form onSubmit={onModifyPackHandler}>
          <Grid container spacing={2}>
            <InputField
              value={currentPackName}
              type={'text'} label={'Set new pack name'}
              onChange={setCurrentPackName}
            />
            <FormButton name={'Send updated pack name'}/>
          </Grid>
        </form>
      </ModalWindow>
    </div>);
  }

  if (isInitialized) {
    return <Redirect to={'/packs'}/>;
  }
  return <Redirect to={'/login'}/>;


});
export default Packs;
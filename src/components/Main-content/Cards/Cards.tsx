import React, {useCallback, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {Button, Grid, IconButton, Typography} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ModalWindow from '../../../common/Modal';
import InputField from '../../../common/InputField';
import FormButton from '../../../common/FormBtn';
import TableContainer from '@material-ui/core/TableContainer';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import TableData from '../../../common/Table';
import {CardType, deleteCardTC, getNewPageTC, addNewCardTC, updateCardTC} from '../../../redux/cards-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Pagination from '../../../common/Pagination';
import {Redirect, useHistory} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import SchoolIcon from '@material-ui/icons/School';

const theme = createMuiTheme();
theme.spacing(2);

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

const Cards = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const state = useSelector<AppRootStateType, any>(state => state.cardsReducer);
	const {isAuth, userProfile} = useSelector<AppRootStateType, any>(state => state.login);
	const {cards, cardsTotalCount, page, pageCount, id} = state;
	const cardPacks = useSelector<AppRootStateType, any>(state => state.packsReducer.cardPacks);

  const [localPage, setlocalPage] = useState(1);
  const [localRow, setlocalRow] = useState(4);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [isOpenAddCardModalPopup, setIsOpenAddCardModalPopup] = useState(false);
  const [isOpenModifyCardModalPopup, setIsOpenModifyCardModalPopup] = useState(false);
  const [updateCardId, setUpdateCardId] = useState('');
  const [showBtn, setShowBtn] = useState(true);

  // if (cardPacks.length) {
  // 	const userEmail = userProfile.email;
  // 	let findPack = cardPacks.find((elem: any) => elem._id === id);
  // 	if (findPack) {
  // 		findPack.user_name === userEmail ? setShowBtn(true) : setShowBtn(false);
  // 	}
  // }

  const handleDialogOpen = () => {
    setIsOpenAddCardModalPopup(true);
  };

  const handleDialogClose = () => {
    setIsOpenAddCardModalPopup(false);
  };

  const onAddNewPackHandler = () => {
    dispatch(addNewCardTC(question, answer));
    setIsOpenAddCardModalPopup(false);
  };
  let history = useHistory();

  const onLearnHandler = () => {
    history.push("/learn");
  };

  const onDeleteHandler = (id: string) => {
    dispatch(deleteCardTC(id));
  };

  const onUpdateHandler = (id: string) => {
    const card: CardType = cards.find((el: CardType) => el._id === id);
    setCurrentQuestion(card.question);
    setCurrentAnswer(card.answer);
  };

  const onModifyCardHandler = () => {
    dispatch(updateCardTC(updateCardId, currentQuestion, currentAnswer));
    setIsOpenModifyCardModalPopup(false);
  };

  const handleModifyCardModalPopupOpen = (id: string) => {
    setUpdateCardId(id);
    setIsOpenModifyCardModalPopup(true);
    onUpdateHandler(id);
  };

  const handleModifyCardModalPopupClose = () => {
    setIsOpenModifyCardModalPopup(false);
  };

	const onChangePage = (newPage: number) => {
		setlocalPage(newPage + 1);
		dispatch(getNewPageTC(newPage + 1, localRow));
	};
	const onChangeRowLength = (row: number) => {
		setlocalRow(row);
		dispatch(getNewPageTC(localPage, row));
	};

  const tableCell = [
    {name: 'Question', align: 'inherit'},
    {name: 'Answer', align: 'center'},
    {name: 'Grade', align: 'center'},
    {name: 'Delete', align: 'center'},
    {name: 'Modify', align: 'left'},
    {name: 'Updated', align: 'right'},
  ];

  const randomColor = useCallback(() => {
    let color = 'rgb(' + Math.round(Math.random() * 255)
      + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    return color;
  }, []);

  if (isAuth) {
    return (
      <div>
        <TableContainer component={Paper}>
          <Grid
            style={{marginTop: theme.spacing(2)}}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={7}>
              <Typography className={classes.margin} variant="h3">Cards</Typography>
            </Grid>
            {showBtn ? <Grid item xs={2}>
              <Button
                onClick={() => handleDialogOpen()}
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddBoxIcon/>}
              >
                ADD CARD
              </Button>
            </Grid> : null}

            <Grid item xs={2}>
              <Button
                onClick={onLearnHandler}
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SchoolIcon/>}
              >
                To learn
              </Button>
            </Grid>
          </Grid>
          <TableData heading={tableCell}>
            {cards.map((row: CardType) => (
              <TableRow key={row._id}>
                <TableCell className={classes.distance} component="th" scope="row">
                  {row.question}
                </TableCell>
                <TableCell align="center">{row.answer}</TableCell>
                <TableCell align="center">{row.grade}</TableCell>
                <TableCell align="center">
                  <IconButton style={{color: randomColor()}}
                              className={classes.padding} aria-label="delete"
                    onClick={() => onDeleteHandler(row._id)}>
                    <DeleteIcon fontSize="small"/>
                  </IconButton>
                </TableCell>
                <TableCell align="left">
                  <IconButton style={{color: randomColor()}}
                              className={classes.padding} aria-label="modify"
                              onClick={() => handleModifyCardModalPopupOpen(row._id)}>
                    <AutorenewIcon fontSize="small"/>
                  </IconButton>
                </TableCell>
                <TableCell align="right">{row.updated.slice(0, -14)}</TableCell>
              </TableRow>
            ))}
          </TableData>

        </TableContainer>
        <Pagination count={cardsTotalCount} page={page - 1}
                    rowsPerPageOptions={[4, 10, 20]} onChangePage={onChangePage}
                    rowsPerPage={pageCount} onChangeRowsPerPage={onChangeRowLength}/>
        <ModalWindow handleClose={() => handleDialogClose()} isOpen={isOpenAddCardModalPopup} title={'Add' +
        ' new card'}>
          <form onSubmit={() => onAddNewPackHandler()}>
            <Grid container spacing={2}>
              <InputField value={question}
                          type={'text'} label={'Enter question'}
                          onChange={setQuestion}/>
              <InputField value={answer}
                          type={'text'} label={'Enter answer'}
                          onChange={setAnswer}/>
              <FormButton name={'Send'}/>
            </Grid>
          </form>
        </ModalWindow>
        <ModalWindow handleClose={handleModifyCardModalPopupClose} isOpen={isOpenModifyCardModalPopup} title={'Modify' +
        ' card QA'}>
          <form onSubmit={onModifyCardHandler}>
            <Grid container spacing={2}>
              <InputField
                value={currentQuestion}
                type={'text'} label={'Set new question'}
                onChange={setCurrentQuestion}
              />
              <InputField
                value={currentAnswer}
                type={'text'} label={'Set new answer'}
                onChange={setCurrentAnswer}
              />
              <FormButton name={'Send updated card QA'}/>
            </Grid>
          </form>
        </ModalWindow>
      </div>);
  }
  return <Redirect to={'/login'}/>;
};

export default Cards;

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardType, getCardsTC} from '../../../redux/cards-reducer';
import s from './Learn.module.scss';
import {useParams} from 'react-router-dom';
import {Button, createMuiTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {AppRootStateType} from "../../../redux/redux-store";
import ReactCardFlip from "react-card-flip";

const theme = createMuiTheme();
theme.spacing(2);

const useStyles = makeStyles({
    padding: {
        padding: 0
    },
    buttonControl: {
        width: '300px',
        height: '40px',
        alignContent: 'center',
        borderRadius: '10px',
        background: '#2c3258',
        border: '1px solid #e4b61a',
        margin: '40px',
        color: '#e4b61a'
    },
    buttonGrade: {
        color: '#e4b61a',
        margin: '8px',
        borderColor: '#e4b61a',
        textDecoration: 'none',
        padding: '3px 9px',
        fontSize: '0.8125rem',
        border: '1px solid #e4b61a'
    },
    margin: {
        marginLeft: theme.spacing(5),
    },
    card: {
        width: '300px',
        height: '400px',
        margin: '40px',
        border: '1px solid #e4b61a',
        borderRadius: '34px',
        transformStyle: 'preserve-3d',
        position: 'relative',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

type PropsType = {}

const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}


const Learn = (props: PropsType) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [isChecked, setIsChecked] = useState<boolean>(true);
    const [isHovered, setIsHovered] = useState<boolean>(true);
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    // const [first, setFirst] = useState<boolean>(0);
    const {cards} = useSelector((store: AppRootStateType) => store.cardsReducer);
    const {id} = useParams();

    const [card, setCard] = useState<CardType>({
        _id: 'fake',
        cardsPack_id: '',

        answer: 'answer fake',
        question: 'question fake',
        grade: 1,
        shots: 0,

        type: '',
        rating: 0,
        more_id: '',

        created: '',
        updated: '',
    });

    useEffect(() => {
        console.log('LearnContainer useEffect');

        if (first) {
            dispatch(getCardsTC(id));
            setFirst(false);
        }

        console.log('cards', cards)
        if (cards.length > 0) setCard(getCard(cards));

        return () => {
            console.log('LearnContainer useEffect off');
        }
    }, [dispatch, id, cards, first]);

    const onNext = () => {
        setIsChecked(true);

        if (cards.length > 0) {
            setCard(getCard(cards));
        } else {

        }
    }
    const onHoverHandlerEnable = () => {
        setIsFlipped(true)
    }
    const onHoverHandlerDisable = () => {
        setIsFlipped(false)
    }
    return (
        <div className={s.cards_wrapper}>
            {isChecked ? (
                <>
                    <div className={s.card_container}>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            <div className={`${classes.card} ${s.card}`} onMouseEnter={onHoverHandlerEnable}>
                                <h2 className={s.title}>{card.question}</h2>
                            </div>
                            <div className={classes.card} onMouseDown={onHoverHandlerDisable}>
                                <h2 className={s.title}>{card.answer}</h2>
                            </div>
                        </ReactCardFlip>
                    </div>
                    <div>
                        <Button onClick={() => setIsChecked(false)} className={classes.buttonControl}>check</Button>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <div className={classes.card}>
                            {card.answer}
                        </div>
                        {grades.map((g, i) => (
                            <Button key={'grade-' + i} onClick={() => {
                            }} className={classes.buttonGrade}>{g}</Button>
                        ))}
                        <div><Button onClick={onNext} className={classes.buttonControl}>next</Button></div>
                    </div>
                </>
            )
            }
        </div>

    );
};

export default Learn;
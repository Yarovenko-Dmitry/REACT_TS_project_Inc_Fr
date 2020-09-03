import React, {forwardRef, useEffect, useState} from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable, {Icons} from "material-table";
import {useDispatch, useSelector} from "react-redux";
import {getCardTC} from "../redux/card-reducer";
import {AppRootStateType} from "../redux/redux-store";
import {CardsType} from "../api/api";

export const tableIcons: Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};


export const Table = () => {
    const pageCount = useSelector<AppRootStateType,number| undefined>(state => state.card.cardsTotalCount)
    const answer = useSelector<AppRootStateType,Array<CardsType>>(state => state.card.cards)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCardTC())
    }, [dispatch])
    return (
        <div style={{maxWidth: "100%"}}>
            <MaterialTable
                columns={[
                    {title: 'answer', field: 'answer'},
                    {title: 'question', field: 'question'}]}
                data={answer}
                title="Demo Title"
                icons={{...tableIcons}}
                editable={{
                    onRowAdd: (newData: any) =>
                        new Promise((resolve) => {
                            //addNewPackHandler(newData, resolve);
                        }),
                    onRowUpdate: (newData: any, oldData: any) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                            }, 600);
                        }),
                    onRowDelete: (oldData: any) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                            }, 600);
                        }),
                }}
                options={{
                    pageSize: pageCount,
                    pageSizeOptions: [4, 10, 20],
                }}
            />
        </div>
    )
}
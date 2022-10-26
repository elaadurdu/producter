import { CONSTANTS } from "../actions";

import backlog from '../components/images/backlog.png';
import todo from '../components/images/todo.png';
import inprogress from '../components/images/inprogress.png';
import test from '../components/images/test.png';
import highLevelOne from '../components/images/h1.png';
import highLevelTwo from '../components/images/h2.png';
import highLevelThree from '../components/images/h3.png';
import projectPic1 from '../components/images/projectPic1.png';
import projectPic2 from '../components/images/projectPic2.png';
import profilePicture from '../components/images/photoNeil.png';

let listID = 4;
let cardID = 8;

const initialState = [
    {
        title: "Backlog",
        id: `list-${0}`,
        image: backlog,
        totalPoint: "35",
        cards: [
            {
                id: `card-${0}`,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                projectPicture: projectPic1,
                projectNumber: "TSK-01",
                highLevel: highLevelOne,
                point: 8,
                profilePicture: profilePicture
            },
            {
                id: `card-${1}`,
                text: "Cras euismod ullamcorper metus non viverra. Sed rutrum finibus sodales.",
                projectPicture: projectPic1,
                projectNumber: "TSK-01",
                highLevel: highLevelThree,
                point: 8,
                profilePicture: profilePicture
            },

        ]
    },
    {
        title: "To Do",
        id: `list-${1}`,
        image: todo,
        totalPoint: "35",
        cards: [
            {
                id: `card-${2}`,
                text: "Cras semper euismod sagittis.",
                projectPicture: projectPic2,
                projectNumber: "EPC-02",
                highLevel: highLevelThree,
                point: 8,
                profilePicture: profilePicture
            },
            {
                id: `card-${3}`,
                text: "Donec iaculis euismod placerat.",
                projectPicture: projectPic1,
                projectNumber: "TSK-01",
                highLevel: highLevelTwo,
                point: 8,
                profilePicture: profilePicture
            },

        ]
    },
    {
        title: "In Progress",
        id: `list-${2}`,
        image: inprogress,
        totalPoint: "35",
        cards: [
            {
                id: `card-${4}`,
                text: "Integer at orci porta sapien bibendum sodales.",
                projectPicture: projectPic2,
                projectNumber: "EPC-02",
                highLevel: highLevelTwo,
                point: 8,
                profilePicture: profilePicture
            },
            {
                id: `card-${5}`,
                text: "Mauris urna ipsum, ornare vel urna et, euismod faucibus leo.",
                projectPicture: projectPic2,
                projectNumber: "EPC-02",
                highLevel: highLevelOne,
                point: 8,
                profilePicture: profilePicture
            },

        ]
    },
    {
        title: "Test",
        id: `list-${3}`,
        image: test,
        totalPoint: "35",
        cards: [
            {
                id: `card-${6}`,
                text: "Pellentesque lacinia tempus ultrices.",
                projectPicture: projectPic2,
                projectNumber: "EPC-02",
                highLevel: highLevelOne,
                point: 8,
                profilePicture: profilePicture
            },
            {
                id: `card-${7}`,
                text: "Fusce ut porttitor dolor, id elementum mauris.",
                projectPicture: projectPic1,
                projectNumber: "TSK-01",
                highLevel: highLevelTwo,
                point: 8,
                profilePicture: profilePicture
            },

        ]
    },
];
const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.DRAG_HAPPENED: {

            const { droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId } = action.payload;

            const newState = [...state];

            if (droppableIdStart === droppableIdEnd) {

                const list = state.find(list => droppableIdStart === list.id);
                console.log(droppableIdStart, droppableIdEnd, action)
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            if (droppableIdStart !== droppableIdEnd) {

                const listStart = state.find(list => droppableIdStart === list.id);
                const card = listStart.cards.splice(droppableIndexStart, 1);
                const listEnd = state.find(list => droppableIdEnd === list.id);
                listEnd.cards.splice(droppableIndexEnd, 0, ...card)

            }

            return newState;
        }

        default:
            return state;
    }
}
export default listsReducer;
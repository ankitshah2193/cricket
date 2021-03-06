import swal from 'sweetalert';

const initialState = {
    currentBattingTeam: 'India',
    previousBattingTeam: null,
    currentBowlingTeam: 'Australia',
    currentBatsmen: [
        { name: 'Sehwag', isStriker: true },
        { name: 'Sachin', isStriker: false }
    ],
    currentBowler: 'McGrath',
    noOfOvers: 5,
    noOfWickets: 5
};

const resetState = {
    currentBattingTeam: 'India',
    previousBattingTeam: null,
    currentBowlingTeam: 'Australia',
    currentBatsmen: [
        { name: 'Sehwag', isStriker: true },
        { name: 'Sachin', isStriker: false }
    ],
    currentBowler: 'McGrath',
    noOfOvers: 5,
    noOfWickets: 5
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_STRIKER':
            return {
                ...state,
                currentBatsmen: state.currentBatsmen.map(batsman => {
                    return {
                        ...batsman,
                        isStriker: !batsman.isStriker
                    }
                })
            }
        case 'SET_NEW_BATSMAN':
            return {
                ...state,
                currentBatsmen: state.currentBatsmen.map(batsman => {
                    if (batsman.isStriker) {
                        batsman.name = action.batsman;
                    }
                    return batsman;
                })
            }
        case 'SET_NEW_BOWLER':
            return {
                ...state,
                currentBowler: action.bowler
            }
        case 'INNINGS_OVER':
            swal({
                text: "First inning is over!!!!!!!!!!!!",
                icon: "success",
                closeOnClickOutside: false,
                button: "Start new inning",
            });
            return {
                ...state,
                currentBattingTeam: 'Australia',
                previousBattingTeam: 'India',
                currentBowlingTeam: 'India',
                currentBowler: 'Khan',
                currentBatsmen: [
                    { name: 'Gilchrist', isStriker: true },
                    { name: 'Hayden', isStriker: false }
                ]
            }
        case 'DECLARE_WINNER':
            swal({
                text: 'Congratulations, ' + action.winningTeam + ". You have won this match.",
                icon: "success",
                closeOnClickOutside: false,
                button: "Start new game",
            });
            return resetState;

        case 'DECLARE_TIE':
            swal({
                text: "The game is a draw.",
                icon: "success",
                closeOnClickOutside: false,
                button: "Start new game",
            });
            return resetState;


        default:
            break;
    }
    return state;
};

export default game;
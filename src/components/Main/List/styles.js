import { makeStyles } from '@material-ui/core/styles';
import { purple, pink } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: purple[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));
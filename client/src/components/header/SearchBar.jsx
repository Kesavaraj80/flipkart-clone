import { InputBase } from "@mui/material"
// import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    borderRadius: 2,
    backgroundColor: '#fff',
    marginLeft: 10, 
    width: 500,
    display: 'flex',   
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: 5,
    height: '100%', 
    display: 'flex',
    color:'blue'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    fontSize:'unSet',
    width:"100%",
    marginLeft:15,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0)
    },
}));

const SearchBar = () => {
    return (
        <div >
            <Search>
                <StyledInputBase
                    placeholder="Searc for products, brands and more"
                    inputProps={{ 'aria-label': 'search' }}
                />
                  <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
            </Search>
        </div>
    )
}

export default SearchBar;
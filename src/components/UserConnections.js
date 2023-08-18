// DRY code: don't repeat twice
import { Email, GitHub } from "@material-ui/icons";


function UserConnections()
{
    return <>
    <a href="https://github.com/luxkatana" target="_blank" rel="noopener noreferrer"><GitHub/></a>
    <a href="mailto:douknowdeeznu@gmail.com"><Email/></a>
    </>

}

export default UserConnections;

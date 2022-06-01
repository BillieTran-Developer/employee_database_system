import './Loading.css';
import loading from './assets/Loading.gif';

function Loading() {
    return(
        <div>
            <img src={loading} alt="Loading, please wait..." />
        </div>
    )
}

export default Loading;
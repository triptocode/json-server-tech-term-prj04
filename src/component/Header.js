import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <h1>
                {/* <a href="/">Tech 기술 용어</a> */}
                <Link to="/"> Tech 기술 용어 </Link>
            </h1>
            <div className="menu">
                <a href="#x" className="link">
                    단어 추가
                </a>
                <a href="#x" className="link">
                    day 추가
                </a>
            </div>
        </div>
    )
}
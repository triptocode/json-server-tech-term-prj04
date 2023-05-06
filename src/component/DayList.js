// import dummy from "../db/data.json";
// import { Link } from "react-router-dom";

// export default function DayList(){
   
//     console.log(dummy)
  
//     return (
//             <ul className="list_day">
//                 {dummy.days.map(day => (
//                     <li key={day.id}>
//                         <Link to={`/day/${day.day}`}> Day {day.day} </Link>
//                     </li>
//                 ))}
//             </ul>
//     );
// }



//  json Server API에서 받아오는걸로해서 dummy 는 지움
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList(){
//    const [days, setDays] = useState([]);
//    useEffect(() => {
//     fetch("http://localhost:4000/days")
//      .then(res => { return res.json();})
//      .then(data => {setDays(data);});
//    }, []);

// 위코드는 useFetch.js 커스텀훅스를 만들어 사용하면, 아래 한줄로 간단하게 변경됨
    const days = useFetch("http://localhost:4000/days")

    return (
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}> Day {day.day} </Link>
                    </li>
                ))}
            </ul>
    );
}
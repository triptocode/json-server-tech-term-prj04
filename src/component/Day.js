// import dummy from "../db/data.json";

// export default function Day(){


//    return(
//     <>
//     <table>
//         <tbody>
//             {dummy.words.map(word => (
//                 <tr>
//                     <td>{word.eng}</td>
//                     <td>{word.kor}</td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
//     </>
//    )

// }







// import dummy from "../db/data.json";

// export default function Day(){
//     // dummy.words - 전체단어를 day마다 나눠보기 위함
//     // test 방식: inputDay= 1,2,3,4 등 번갈아가며 각 1~4까지 day마다 잘 출력되는지 보기
    
//     const inputDay =3;
//     const wordList= dummy.words.filter(word=>(word.day===inputDay))



//    return(
//     <>
//     <table>
//         <tbody>
//             {wordList.map(word => (
//                 <tr>
//                     <td>{word.eng}</td>
//                     <td>{word.kor}</td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
//     </>
//    )
// }






// import dummy from "../db/data.json";
// import {useParams}from "react-router-dom";
// import Word from "./Word";

// export default function Day(){
   
//     const {inputDay} = useParams();
//   // const wordList= dummy.words.filter(word=>(word.day===inputDay))
//    // 위는 아래코드로 변경: 문자가 들어와도 숫자로 변경할때 Number() 추가 - 쿼리스트링
//    const wordList= dummy.words.filter(word=>(word.day===Number(inputDay)))
   

// return(
//     <>
//     <h2> 오늘의 학습: Day {inputDay}</h2>
//         <table>
//             <tbody>
//                 {wordList.map(word => (
//                   <Word word={word} key={word.id}/>
//                 ))}
//             </tbody>
//         </table>
//     </>
//    )
// }









// import dummy from "../db/data.json";
import {useParams}from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day(){
    const {inputDay} = useParams();
    
//     const [words, setWords] = useState([]);

//      useEffect(() => {
//         fetch(`http://localhost:4000/words?day=${inputDay}`)
//             .then(res => { return res.json();})
//             .then(data => {setWords(data);});
//    }, [inputDay]);

const words = useFetch(`http://localhost:4000/words?day=${inputDay}`)

return(
    <>
    <h2> 오늘의 학습: Day {inputDay}</h2>
        <table>
            <tbody>
                {words.map(word => (
                  <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
    </>
   )
}

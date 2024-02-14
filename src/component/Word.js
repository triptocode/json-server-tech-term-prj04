// import { useState } from "react";

// export default function Word({word}){
//     console.log(word)

//     const [isShow, setIsShow]= useState(false);
//     const [isDone, setIsDone] =useState(word.isDone);

//     function toggleShow(){
//         setIsShow(!isShow);
//     }

//     function toggleIsDone(){
//         setIsDone(!isDone);
//     }

//     return (
//             <tr className={isDone ? "off":""}>
//                 <td><input type="checkbox" checked={isDone} onChange={toggleIsDone}/></td>
//                 <td>{word.eng}</td>
//                 <td>{isShow&&word.kor}</td>
//                 <td>
//                     <button onClick={toggleShow}>뜻 {isShow?"숨김":"보기"}</button>
//                 </td>
//                 <td>
//                     <button className="btn_del">삭제</button>
//                 </td>
//             </tr>
//     )
// }






// // 2) put + delete 중에 delete 만됨 

// import { useState } from "react";

// export default function Word({word : w}){ //파라메타를 word로 받으면 state변수와 겹치므로 w로 바꿔줌

//     const [word, setWord] = useState(w);
//     const [isShow, setIsShow]= useState(false);
//     const [isDone, setIsDone] =useState(word.isDone);

//     function toggleShow(){
//         setIsShow(!isShow);
//     }

//     function toggleDone() {
//       fetch(`http://localhost:4000/words/${word.id}`, {
//         method : 'PUT', // PUT 메소드 사용
//             headers : {
//                'Content-Type' : 'application/json' // JSON 형식으로 보냄
//             },
//             body : JSON.stringify({
//                 ...word, // 기존의 words 데이터에 isDone만 바꿔 바디로 보냄
//                 isDone:!isDone
//             })
//         }).then(res=>{
//             if(res.ok){ // 정상적으로 update됐을 경우 isDone변수 또한 바꿔줌
//               setIsDone(!isDone)
//             }
//       });
//     }
  
//     function del() {
//       if (window.confirm("삭제 하시겠습니까?")) {
//         fetch(`http://localhost:4000/words/${word.id}`, {
//           method: "DELETE",
//         }).then(res => {
//           if (res.ok) {
//             setWord({ 
//               ...word,
//               id: 0, //정상적으로 삭제됐을 경우 word의 id를 0으로 바꿔줌
//             });
//           }
//         });
//       }
//     }
  
//     if (word.id === 0) { // id가 0일 때 null을 리턴하도록 함
//       return null;
//     }
  

//     return (
//             <tr className={isDone ? "off":""}>
//                 <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
//                 <td>{word.eng}</td>
//                 <td>{isShow&&word.kor}</td>
//                 <td>
//                     <button onClick={toggleShow}>뜻 {isShow?"숨김":"보기"}</button>
//                 </td>
//                 <td>
//                     <button onClick={del} className="btn_del">삭제</button>
//                 </td>
//             </tr>
//     )
// }









// 3) delete 만 넣음 
import { useState } from "react";

export default function Word({word: w}){

    const [word, setWord] = useState(w);
    const [isShow, setIsShow]= useState(false);
    const [isDone, setIsDone] =useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        setIsDone(!isDone);
        console.log('onChange감지 --> function toogleDone 함수동작')
    }

   function del() {
        if (window.confirm("삭제 하시겠습니까?")) {
            fetch(`http://localhost:4000/words/${word.id}`, {method: "DELETE"})
                  .then(res => {if (res.ok) { setWord({ ...word, id: 0,});}});
        }
  }

  if (word.id === 0) { return null;}

    return (
            <tr className={isDone ? "off":""}>
                <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
                <td>{word.eng}</td>
                <td>{isShow&&word.kor}</td>
                <td>
                    <button onClick={toggleShow}>뜻 {isShow?"숨김":"보기"}</button>
                    <button onClick={del} className="btn_del">삭제</button>
                </td>
            </tr>
    )
}
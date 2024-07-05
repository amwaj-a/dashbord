import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import NavTop from "./NavTop";
// import Nav from ".Nav";
// import NavTop from "./component/NavTop";
// import Image from ".Image";

export default function AllMyIdeas() {
  const params = localStorage.getItem('id');
  const [dataAll, useData] = useState([]);
  const [dataWithDeleted, usedataWithDeleted] = useState([]);
//   const [hidden,useHeddin]= useState('')
  const [dialog,usedialog]= useState('')
  const [idea, useIdea] = useState("");
  const [register, setregister] = useState([]);
//  const [count, setCount] = useState(0)

const arrayAll=[]
// const navigate= useNavigate()

  React.useEffect(() => {
  get()
  }, []);
const get=()=>{ 
   axios
  .get(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${params}`)
  .then((res) => {
    if(res.data.IdeasReject!==undefined)
    {
      res.data.IdeasReject.map(e=>arrayAll.push(e))
  }
// console.log(res.data);
    useData(res.data);
 
    res.data.Ideas.map(e=>arrayAll.push(e))
    setregister(res.data)
    usedataWithDeleted(arrayAll)
    // console.log();
// console.log(arrayAll);

  });}
  const addIdea = () => {
    if(idea!=''){  axios
      .get(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${params}`)
      .then((res) => {
        // console.log(res.data);
        let arrayIdea = [];
        useData(res.data);
        arrayIdea = res.data.Ideas;
        // console.log(arrayIdea);

        // arrayIdea.ideas = ''
        // arrayIdea.push(res.data.Ideas)
        arrayIdea.push({idea: idea, state: "Waiting" });
        // console.log(arrayIdea);

        // console.log('array get '+arrayIdea);
        // arrayIdea={'ideas':idea}
        // console.log('array input '+arrayIdea);
        // console.log('data '+ dataAll);

        axios
          .put(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${params}`, {
            Ideas: arrayIdea,
          })
          .then((e) => {
            useData(e.data);
            get()
            usedialog("sent successfully");
            useIdea("");
          });
      });}else{
        usedialog("No Sent beacuse Empty");

      }
      setTimeout(() => {
        usedialog('')
      }, 5000);

  };

  const save=()=>{
    axios.put(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${params}`,{
      'name':register.name,
      'user':register.user,
      'avatar':register.avatar
    }).then(e=>{
      get()
    })

  }
  return (
     <>  {localStorage.getItem('email')!=null&&
        <section className='flex max-sm:flex-col h-screen w-full  text-2xl'   >
    {dataAll.name==undefined?
<div className="w-full h-screen justify-center items-center flex">
<span className="loading text-white loading-dots loading-lg"></span>

</div>:
 
    
       


    <>

<div className='w-[15%] flex max-sm:w-full max-sm:justify-start  justify-center'> <Nav/></div>
   
   <div className="bg-[#E7E7E7] max-sm:rounded-sm
   px-8 w-full rounded-s-[2rem] h-full ">
 <NavTop/>
  <br />
      <div  className="card   w-full bg-white card-side  shadow-xl">
        <div className="card-body h-full">
          <h2 className="card-title ">All Ideas</h2>
       
          <div className="">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-lg">
                  <th></th>
                  <th>idea</th>
                  <th>State</th>
                  {/* <th>Favorite Color</th> */}
                </tr>
              </thead>
              {/* {console.log(arrayAll)} */}
              <tbody className="text-lg">
                {/* { */}
                {dataAll.Ideas != undefined &&
                  dataWithDeleted.map((e, index) => (
                    <tr key={e.id} className={e.state=='Accept'
                    ?"text-green-500 bg-base-200":(e.state=='Reject')?"text-red-500 bg-base-200":"bg-base-200"}>
                      {/* {console.log(e)} */}
                      <th>{++index}</th>
                      <td>{e.idea}</td>
                      {/* <td>{e.state}</td> */}
                      <td>{e.state}
                    
      <br />
      {
        e.reason!=undefined&& 
                 <span className="max-w-fit text-base badge-sm">reasone {e.reason}</span>
}
    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}

    </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="card-actions
           justify-end">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn mt-3 bg-accent hover:bg-red-900 text-white"
              onClick={() =>
                 document.getElementById("my_modal_3").showModal()}
            >
              Add New idea
            </button>
          
            <br />
            <br />
            <dialog id="my_modal_3" className="modal ">
              <div className="modal-box flex flex-col ">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">New Idea</h3>

                <textarea
                  value={idea}
                  onChange={(e) => {
                    useIdea(e.target.value);
                  }}
                  className="textarea textarea-bordered"
                  placeholder="idea"
                />
                <br />
                <form method="dialog" className="flex justify-center">
                <button onClick={addIdea} className="btn btn-primary text-lg  px-20 ">
                  send
                </button>
                </form>
              </div>
            </dialog>
          </div>
          <p style={{color:dialog=='sent successfully'?'green':'black'}} className="text-end text-primary text-lg font-bold">{dialog}</p>

        </div>
      </div>

</div>
 </>


  
  } </section>}</> 

  );
}

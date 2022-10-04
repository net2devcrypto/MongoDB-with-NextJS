import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {

  require('dotenv').config();
  const mongokey = process.env.MONGO_API;

  async function createAccount() {
    const username = document.querySelector("[name=user]").value.toString()
    const email = document.querySelector("[name=email]").value.toString()
    axios.post("https://data.mongodb-api.com/app/data-oumzz/endpoint/data/v1/action/insertOne",
    {
      collection: "n2D-collection",
      database:"n2D-database",
      dataSource: "Cluster0",
      document: {
        user: username,
        email: email,
      }, 
    },
    {
      "Content-Type" : "application/json",
      "api-key": mongokey,
    }
    ).catch((error) => {
      console.log('Call failed:'+ error )
    })
    let displaysuccess = "Account Created Successfully"
    document.getElementById("displayresult1").innerHTML = displaysuccess
  }

  async function getEmail() {
    const username = document.querySelector("[name=fromuser]").value.toString()
    const output = axios.post("https://data.mongodb-api.com/app/data-oumzz/endpoint/data/v1/action/findOne",
    {
      collection: "n2D-collection",
      database:"n2D-database",
      dataSource: "Cluster0",
      filter: {
        user: username,
      }, 
    },
    {
      "Content-Type" : "application/json",
      "api-key": mongokey,
    }
    ).catch((error) => {
      console.log('Call failed:'+ error )
    })
    let fromoutput = await output.catch((error) => {
      console.log(error)
    })
    let findemail = fromoutput.data.document.email;
    let displaysuccess = "Email found! : " + findemail
    document.getElementById("displayresult2").innerHTML = displaysuccess
  }

  async function updateUser() {
    const currentusername = document.querySelector("[name=currentuser]").value.toString()
    const output = axios.post("https://data.mongodb-api.com/app/data-oumzz/endpoint/data/v1/action/findOne",
    {
      collection: "n2D-collection",
      database:"n2D-database",
      dataSource: "Cluster0",
      filter: {
        user: currentusername,
      }, 
    },
    {
      "Content-Type" : "application/json",
      "api-key": mongokey,
    }
    ).catch((error) => {
      console.log('Call failed:'+ error )
    })
    let fromoutput = await output.catch((error) => {
      console.log(error)
    })
    if ( fromoutput.data.document == null ) {
      let displayresult = "Username not found"
      document.getElementById("displayresult3").innerHTML = displayresult
    }
    else {
      const newusername = document.querySelector("[name=newuser]").value.toString()
      axios.post("https://data.mongodb-api.com/app/data-oumzz/endpoint/data/v1/action/updateOne",
    {
      collection: "n2D-collection",
      database:"n2D-database",
      dataSource: "Cluster0",
      filter: {
        user: currentusername,
      },
      update: {
        $set: {
          user: newusername
        }
      }
    },
    {
      "Content-Type" : "application/json",
      "api-key": mongokey,
    }
    ).catch((error) => {
      console.log('Call failed:'+ error )
    })
    let displaysuccess = "Username updated!"
    document.getElementById("displayresult3").innerHTML = displaysuccess
  }
  }


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3>Create your Account</h3>
        
        <h5>Create your username</h5>
        <input name="user"></input>
        <h5>Create your email</h5>
        <input name="email"></input>
        <button onClick={createAccount} style={{marginTop:"2px", marginBottom:"2px"}}>Create Account</button>
        <h2 id="displayresult1"></h2>
      </main>
      <div>
      <main className={styles.main}>
        <h3>Find User's Email</h3>
        
        <h5>Type the Username</h5>
        <input name="fromuser"></input>
        <button onClick={getEmail} style={{marginTop:"2px", marginBottom:"2px"}}>Find Email</button>
        <h2 id="displayresult2"></h2>
      </main>
      </div>
      <div>
      <main className={styles.main}>
        <h3>Update Username</h3>
        <h5>Enter current Username</h5>
        <input name="currentuser"></input>
        <h5>Enter new Username</h5>
        <input name="newuser"></input>
        <button onClick={updateUser} style={{marginTop:"2px", marginBottom:"2px"}}>Change Username</button>
        <h2 id="displayresult3"></h2>
      </main>
      </div>
    </div>
  )
}

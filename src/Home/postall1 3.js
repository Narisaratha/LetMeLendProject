import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Form,Button,Row,Col,Nav,container,Card } from 'react-bootstrap';
import expressicon from './home_img/expressicon.svg'
import './postall.css'
import testimg from './home_img/testimg.jpg'
import ty from './home_img/ty.jpg'
import kem from './home_img/kem.jpeg'






function Postall1() {

    const username1 = "Narinaja"
    const username2 = "Mintzaa"
    const username3 = "Aumei"
    const username4 = "Nt123"
    const username5 = "Jkjk"
 
const topicName1 = "ขอยืมตุ๊กตาหน่อยค่ะ"
const itemName1 = "ตุ๊กตา"
const description1 = "ขอยืมตุ๊กตาอะไรก็ได้ค่ะ หมา แมว หมู จะยืมมาทำงานค่า"
const postID1 = "0034"
const reward1 = "20"
const getdate1 = "08/06/2564"
const givedate1 = "09/06/2564"
const place1 = "หน้าป๋วย ตึกSC"

const topicName2 = "ยืมรองเท้านักศึกษาชายครับ"
const itemName2 = "รองเท้า"
const description2 = "ยืมรองเท้านักศึกษาชายครับ จะไปใส่ในพิธีวันเดียว"
const postID2 = "1086"
const reward2 = "50"
const getdate2 = "05/06/2564"
const givedate2 = "06/06/2564"
const place2 = "หอใน B1 ธรรมศาสตร์ รังสิต"


const topicName3 = "ยืมเข็มขัดนักศึกษาหน่อยจ้า"
const itemName3 = "เข็มขัด"
const description3 = "ยืมเข็มขัดไปสอบหน่อยค้าเพื่อน ๆ ใช้เสร็จแล้วจะรีบคืนเลย"
const postID3 = "2312"
const reward3 = "15"
const getdate3 = "08/06/2564"
const givedate3 = "08/06/2564"
const place3 = "หอใน B4 ธรรมศาสตร์ รังสิต"


const topicName4 = "ร้อนๆๆๆ ขอยืมพัดลมมมมมม"
const itemName4 = "พัดลม"
const description4 = "ขอยืมพัดลมพัดแรง ๆ ปลิวไปถึงเชียงใหม่ทีค่ะ"
const postID4 = "0034"
const reward4 = "20"
const getdate4 = "08/06/2564"
const givedate4 = "09/06/2564"
const place4 = "หอใน C8 ธรรมศาสตร์ รังสิต"


const topicName5 = "ขอยืมเครื่องคิดเลขหน่อยค่ะ"
const itemName5 = "เครื่องคิดเลข"
const description5 = "ขอเครื่องคิดเลขที่หาค่าพาย รูท ln ได้ค่ะ"
const postID5 = "3422"
const reward5 = "10"
const getdate5 = "04/06/2564"
const givedate5 = "07/06/2564"
const place5 = "หอใน C3 ธรรมศาสตร์ รังสิต"
 
      

        
return (
                          
                <div className="postall_bodypost">
           
                <Row>
                   
               
                   <div className="postall_post">
                   <Card  className="card" style={{ width: '2rem' },{height: '100%'}}>
                   <a href="/post"><Card.Img className="img_card"  variant="top"  src={kem} /></a>
                   <Card.Body>

                       <div className="postall_card_body">
                       <Card.Title>
                           <div className="postall_head">
                               <a href="/profile"><img  className="postall_userimg" src={ty} width='10%'></img></a>
                               <a className="postall_username" href="/profile"><font color="black">{username3}</font></a>
                           </div>
                       </Card.Title>

                       
                       <Card.Text>
                          <a className="postall_topic" href="/post"><font color="black"><b>{topicName3}</b></font></a>
                       </Card.Text>

                       <Card.Text>
                           <div className="postall_price_date">
                          <a className="postall_price"><b>{reward4} บาท</b></a>
                          <a className="postall_date"><b>ต้องการยืมวันที่ {getdate4}</b></a>
                          </div>
                       </Card.Text>
                       </div>

                       <div className="postall_bottom">
                           <Button href="/chat" className="postall_toget"  variant="primary"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4yMDkgNTEyLjIwOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBkPSJtNDE3LjIxMiAxMzUuMzFoLTM0LjA1MWwtMTMuMzM0IDE0LjU0OGMtMi43MzggMi45ODgtNy43MTkgMS4wNS03LjcxOS0zLjAwM3YtODUuMzgzYzAtMjAuMDUzIDE2LjI1Ni0zNi4zMDkgMzYuMzA5LTM2LjMwOWg2OS41NTNjMjAuMDUzIDAgMzYuMzA5IDE2LjI1NiAzNi4zMDkgMzYuMzA5djM3LjUyOWMwIDIwLjA1My0xNi4yNTYgMzYuMzA5LTM2LjMwOSAzNi4zMDloLTE4Ljc5NnoiIGZpbGw9IiNhNmU3ZjAiIGRhdGEtb3JpZ2luYWw9IiNhNmU3ZjAiIHN0eWxlPSIiPjwvcGF0aD48Zz48cGF0aCBkPSJtMzIxLjQ0NiA3My45OWMtNS4xNzQtNS4xODUtMTIuMzI2LTguMzgtMjAuMjE3LTguMzgtMTUuNzk0IDAtMjguNTg2IDEyLjgwNC0yOC41ODYgMjguNTk4di0zMi40MTljMC03Ljg5MS0zLjIwNi0xNS4wNDQtOC4zOC0yMC4yMDYtNS4xNzQtNS4xODUtMTIuMzE0LTguMzgtMjAuMjE3LTguMzgtMTUuNzk0IDAtMjguNTk3IDEyLjgwNC0yOC41OTcgMjguNTg2di0yNi4xODdjMC03Ljg5MS0zLjE5NS0xNS4wNDQtOC4zNjktMjAuMjE3LTUuMzEyLTUuMzEyLTEyLjcxLTguNTM5LTIwLjg1Mi04LjM2Mi0xNS42MzkuMzM5LTI3Ljk2MiAxMy41Mi0yNy45NjIgMjkuMTYzdjMzLjI1NWMwLTcuODkxLTMuMTk1LTE1LjAzMi04LjM4LTIwLjIxNy01LjE2Mi01LjE2Mi0xMi4zMTQtOC4zNjktMjAuMjA2LTguMzY5LTE1Ljc5NCAwLTI4LjU5OCAxMi44MDQtMjguNTk4IDI4LjU4NnYxMDkuNzE3bC0uMDcyIDMxLjc5IDI2LjI4MSA4OC44NzcgNy41MjIgMTQxLjAzMi0zLjYwOCA2My40NzdoMTYxLjMyYzQuODA4IDAgOC43MDYtMy44OTggOC43MDYtOC43MDZ2LTc0LjgwN2wxMS4wNTItMTYuMTAxYzExLjQyOC0xNi42NTggMTcuNTQ1LTM2LjM4NiAxNy41NDUtNTYuNTkydi0xNTAuNTI2LTEwMy4zOTVjLS4wMDItNy44OTEtMy4xOTctMTUuMDQzLTguMzgyLTIwLjIxN3oiIGZpbGw9IiNmZmU1YzIiIGRhdGEtb3JpZ2luYWw9IiNmZmU1YzIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTg1LjM3NSAzNTQuMTE1YzkuNTUgMCAxNy4yOTEtNy43NDIgMTcuMjkxLTE3LjI5MSAwLTM3LjQ4OS0yMy4wNi03MS4xMjQtNTguMDI1LTg0LjY0NGwtMTQuMzY5LTUuNTU4Yy0xLjcyMi0uNjY2LTIuODU3LTIuMzIyLTIuODU3LTQuMTY5di01Ni4xMzNjMC02LjQxMy0yLjAxMy0xMi4zNi01LjQ0Ny0xNy4yNDktNC43MzEtNi43NjEtMTIuMTc4LTExLjQ4NC0yMC43NjMtMTIuNTk1djI3LjgwN2MtNS40MzUtNy43NjYtMTQuNDUyLTEyLjg0OS0yNC42NjMtMTIuODQ5LTEuOTUzIDAtMy44Ni4xOTItNS43MS41NDctMi4zMTMgNC4yNjMtMy42MjYgOS4xNDktMy42MjYgMTQuMzR2MTMyLjY2M2MwIDEyLjM0NyAzLjE0NCAyNC40MjEgOS4wMzQgMzUuMTMyaDEwOS4xMzV6IiBmaWxsPSIjZmVkMmE0IiBkYXRhLW9yaWdpbmFsPSIjZmVkMmE0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTkwLjQ3MSA0MTEuMTIydjgzLjYyNWMwIDUuMjk0IDQuMjkyIDkuNTg3IDkuNTg3IDkuNTg3aDgxLjcyMXYtMTU3LjQyM2MwLTM3LjQ4OS0yMy4wNi03MS4xMjQtNTguMDI1LTg0LjY0NGwtMTcuMjI3LTYuNjYzdi01OS4xOTZjMC02LjQxMy0yLjAxMy0xMi4zNi01LjQ0Ny0xNy4yNDktNS40MzUtNy43NjYtMTQuNDUyLTEyLjg0OS0yNC42NjMtMTIuODQ5LTguMzEyIDAtMTUuODQgMy4zNjYtMjEuMjg2IDguODEycy04LjgxMiAxMi45NzQtOC44MTIgMjEuMjg2djEzMi42NjNjMCAxNi4xMjQgNS4zNDQgMzEuNzkzIDE1LjE5MSA0NC41NTF6IiBmaWxsPSIjZmZlNWMyIiBkYXRhLW9yaWdpbmFsPSIjZmZlNWMyIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PGcgZmlsbD0iI2ZlZDJhNCI+PHBhdGggZD0ibTkwLjQ3MSA0MTEuMTIydjgzLjYyNWMwIDUuMjk0IDQuMjkyIDkuNTg3IDkuNTg3IDkuNTg3aDE5Mi40NjVjNC44MDggMCA4LjcwNi0zLjg5OCA4LjcwNi04LjcwNnYtNi43MjdjLTUuMzQ5LS4wODItMTI3Ljk1NS0uMTAyLTEzNy4zNzItLjEwMS0xOC45ODMuMDAyLTM0LjM2NS0xNS4zODYtMzQuMzY1LTM0LjM2OXYtNDAuNzQyYzAtOS4zNzUtMy4xMDktMTguNDg2LTguODM5LTI1LjkwNmwtMjAuMTIyLTI2LjA1NWMtOS44NDctMTIuNzU4LTE1LjE5MS0yOC40MjctMTUuMTkxLTQ0LjU1MXYtMTMyLjY2NGMwLTUuNTU0IDEuNTA5LTEwLjc1NCA0LjEzMS0xNS4yMjEtMy45NDktMS45MDUtOC4zNzMtMi45ODMtMTMuMDUzLTIuOTgzLTguMzEyIDAtMTUuODQgMy4zNjYtMjEuMjg2IDguODEyLTUuNDQ3IDUuNDQ3LTguODEyIDEyLjk3NC04LjgxMiAyMS4yODZ2MTMyLjY2M2MwIDE2LjEyNCA1LjM0NCAzMS43OTMgMTUuMTkxIDQ0LjU1MXoiIGZpbGw9IiNmZWQyYTQiIGRhdGEtb3JpZ2luYWw9IiNmZWQyYTQiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTAxLjA4IDY5LjQ0Mi0uMDcyIDExMS4yaDI2LjI4MXYtMTM5LjY4Yy0xNC42NzUgMS4yMTUtMjYuMjA5IDEzLjUwMi0yNi4yMDkgMjguNDh6IiBmaWxsPSIjZmVkMmE0IiBkYXRhLW9yaWdpbmFsPSIjZmVkMmE0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE4Ni44NjEgNy4wMTZjLTE1Ljc5NCAwLTI4LjU5OCAxMi43OTItMjguNTk4IDI4LjU4NnYzMy44MzljMC0uMTc0LS4wMS0uMzQ2LS4wMTMtLjUxOXYxNDIuNDIxaDEuMTk0YzE2LjU3IDAgMzAuMDAyLTEzLjQzMiAzMC4wMDItMzAuMDAydi0xNzQuMjAzYy0uODUyLS4wNzYtMS43MTMtLjEyMi0yLjU4NS0uMTIyeiIgZmlsbD0iI2ZlZDJhNCIgZGF0YS1vcmlnaW5hbD0iI2ZlZDJhNCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNDQuMDQ1IDMzLjIwM2MtMTUuMyAwLTI3Ljc5MyAxMi4wMTUtMjguNTYgMjcuMTE0djE1MS4wMjZoMS40OTNjMTYuNTcgMCAzMC4wMDItMTMuNDMyIDMwLjAwMi0zMC4wMDJsLjAwNC0xNDcuOTgxYy0uOTY1LS4wOTgtMS45NDgtLjE1Ny0yLjkzOS0uMTU3eiIgZmlsbD0iI2ZlZDJhNCIgZGF0YS1vcmlnaW5hbD0iI2ZlZDJhNCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMDEuMjI4IDY1LjYxYy0xNC42NDkgMC0yNi43MDggMTEuMDE3LTI4LjM4IDI1LjIxNXYxMjAuNTE4YzE2LjU3IDAgMzAuMDAyLTEzLjQzMiAzMC4wMDItMzAuMDAydi0xMTUuNjgzYy0uNTM3LS4wMy0xLjA3Ny0uMDQ4LTEuNjIyLS4wNDh6IiBmaWxsPSIjZmVkMmE0IiBkYXRhLW9yaWdpbmFsPSIjZmVkMmE0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L2c+PGc+PHBhdGggZD0ibTY5LjUxNSAzNjUuMzQ0Yy04LjY3OS0xMS4yNDMtMTMuNDU4LTI1LjI1NS0xMy40NTgtMzkuNDU4di0zNS40MWMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41cy03LjUgMy4zNTgtNy41IDcuNXYzNS40MWMwIDE3LjUwMSA1Ljg5IDM0Ljc3IDE2LjU4NCA0OC42MjRsMjcuMDYgMzUuM
                           DU2djk1LjE0M2MwIDQuMTQyIDMuMzU4IDcuNSA3LjUgNy41czcuNS0zLjM1OCA3LjUtNy41di05Ny43MDFjMC0xLjY1OC0uNTUtMy4yNy0xLjU2My00LjU4M3oiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzAwLjU1OSA1Ny45MzVjLTcuNzQgMC0xNC45MDYgMi40NzktMjAuNzY2IDYuNjc0di0yLjk1YzAtMTkuNzIyLTE2LjA0NS0zNS43NjctMzUuNzY3LTM1Ljc2Ny03LjgwMiAwLTE1LjAyNCAyLjUxOS0yMC45MDkgNi43NzUtMS41NzgtMTguMjc1LTE2Ljk0Ny0zMi42NjctMzUuNjI0LTMyLjY2Ny0xOS43MjIgMC0zNS43NjcgMTYuMDQ1LTM1Ljc2NyAzNS43Njd2NC4zNjNjLTUuODYtNC4xOTUtMTMuMDI3LTYuNjc0LTIwLjc2Ny02LjY3NC0xOS43MjIgMC0zNS43NjcgMTYuMDQ1LTM1Ljc2NyAzNS43Njd2OTIuMzE3Yy01LjA3MS0yLjU4OS0xMC44MDUtNC4wNTktMTYuODc5LTQuMDU5LTIwLjU0NCAwLTM3LjI1OCAxNi43MTMtMzcuMjU4IDM3LjI1N3Y2My43NzdjMCA0LjE0MiAzLjM1OCA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNXYtNjMuNzc3YzAtMTIuMjczIDkuOTg1LTIyLjI1NyAyMi4yNTgtMjIuMjU3czIyLjI1NyA5Ljk4NCAyMi4yNTcgMjIuMjU3djU4LjUyM2MwIDMuMDk5IDEuOTA1IDUuODc4IDQuNzk1IDYuOTk1bDE3LjAzNCA2LjU4NmMxNS41NDMgNi4wMSAyOC43NCAxNi40NTMgMzguMTYyIDMwLjE5OHMxNC40MDMgMjkuODE5IDE0LjQwMyA0Ni40ODRjMCA0LjE0MiAzLjM1OCA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNWMwLTE5LjcwNi01Ljg4OS0zOC43MTItMTcuMDMtNTQuOTY1LTExLjE0Mi0xNi4yNTMtMjYuNzQ2LTI4LjYwMS00NS4xMjUtMzUuNzA4bC0xMi4yMzktNC43MzJ2LTUzLjM4MmMwLTcuMDQ3LTEuOTY3LTEzLjY0Mi01LjM4LTE5LjI2OCAwLS4wMTIuMDAyLS4wMjMuMDAyLS4wMzV2LTEwNi4yMTFjMC0xMS40NTEgOS4zMTYtMjAuNzY3IDIwLjc2Ny0yMC43NjdzMjAuNzY3IDkuMzE2IDIwLjc2NyAyMC43Njd2MTA0LjUyNSAyMi4xNjdjMCA0LjE0MiAzLjM1OCA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNXYtMjIuMTY3LTEwNC41MjUtMzMuNDU2YzAtMTEuNDUxIDkuMzE2LTIwLjc2NyAyMC43NjctMjAuNzY3czIwLjc2NyA5LjMxNiAyMC43NjcgMjAuNzY3djI1Ljg5MSAxMTUuMTM2IDE5LjEyMmMwIDQuMTQyIDMuMzU4IDcuNSA3LjUgNy41czcuNS0zLjM1OCA3LjUtNy41di0xOS4xMjItMTE1LjEzNmMwLTExLjQ1MSA5LjMxNi0yMC43NjcgMjAuNzY3LTIwLjc2N3MyMC43NjcgOS4zMTYgMjAuNzY3IDIwLjc2N3YzMi4wNDMgODYuODYyIDE1LjM1MmMwIDQuMTQyIDMuMzU3IDcuNSA3LjUgNy41czcuNS0zLjM1OCA3LjUtNy41di0xNS4zNTItODYuODYyYzAtMTEuNDUxIDkuMzE1LTIwLjc2NyAyMC43NjctMjAuNzY3czIwLjc2NyA5LjMxNiAyMC43NjcgMjAuNzY3djE4MC43OTVjMCA0LjE0MiAzLjM1NyA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNXYtMTgwLjc5NWMtLjAwMi0xOS43MjItMTYuMDQ3LTM1Ljc2Ni0zNS43NjktMzUuNzY2eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMjguODI2IDI5OC45NThjLTQuMTQzIDAtNy41IDMuMzU4LTcuNSA3LjV2MzguMjcxYzAgMTguNTM4LTUuNTQzIDM2LjQxNi0xNi4wMyA1MS43MDJsLTEwLjkyMiAxNS45MjFjLS44NTYgMS4yNDktMS4zMTUgMi43MjgtMS4zMTUgNC4yNDN2ODcuNzM5YzAgNC4xNDIgMy4zNTcgNy41IDcuNSA3LjVzNy41LTMuMzU4IDcuNS03LjV2LTg1LjQxNGw5LjYwNi0xNC4wMDNjMTIuMjA4LTE3Ljc5NCAxOC42NjEtMzguNjA3IDE4LjY2MS02MC4xODh2LTM4LjI3MWMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im00Mi4zMjcgMTA1Ljg4NGMxLjQ0NyAyLjE1OSAzLjgxOSAzLjMyNSA2LjIzNyAzLjMyNSAxLjQzNiAwIDIuODg3LS40MTIgNC4xNjktMS4yNzEgMy40NDEtMi4zMDYgNC4zNi02Ljk2NSAyLjA1NC0xMC40MDZsLS4zMDMtLjQ1MmMtNC4zMzUtNi40NzEtNC4yNDgtMTUuMTA1LjIxOC0yMS40ODcgMi4zNzUtMy4zOTQgMS41NDktOC4wNjktMS44NDQtMTAuNDQ1LTMuMzkzLTIuMzc1LTguMDY5LTEuNTQ5LTEwLjQ0NSAxLjg0NC03Ljk4OSAxMS40MTUtOC4xNDYgMjYuODYyLS4zODkgMzguNDM4eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNS41IDExOS42MDZjLTEzLjU2NS0yMC4yNDYtMTMuMjkyLTQ3LjI2NC42ODEtNjcuMjMgMi4zNzUtMy4zOTQgMS41NDktOC4wNy0xLjg0NC0xMC40NDUtMy4zOTMtMi4zNzYtOC4wNy0xLjU1LTEwLjQ0NSAxLjg0NC04LjY1MiAxMi4zNjItMTMuMzA1IDI2Ljg3MS0xMy40NTggNDEuOTU4czQuMjA2IDI5LjY4OCAxMi42MDQgNDIuMjIybC43NjcgMS4xNDVjMS40NDcgMi4xNiAzLjgyIDMuMzI3IDYuMjM4IDMuMzI3IDEuNDM1IDAgMi44ODYtLjQxMiA0LjE2Ny0xLjI3IDMuNDQxLTIuMzA2IDQuMzYyLTYuOTY0IDIuMDU3LTEwLjQwNXoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzc2LjU0MSAzMjkuNTE5Yy0yLjMwNy0zLjQ0MS02Ljk2Ny00LjM2MS0xMC40MDYtMi4wNTQtMy40NCAyLjMwNi00LjM2IDYuOTY1LTIuMDU1IDEwLjQwNmwuMzA0LjQ1MmM0LjMzNiA2LjQ3IDQuMjQ4IDE1LjEwNS0uMjE4IDIxLjQ4Ni0yLjM3NSAzLjM5NC0xLjU1IDguMDcgMS44NDQgMTAuNDQ1IDEuMzEuOTE3IDIuODEgMS4zNTYgNC4yOTQgMS4zNTYgMi4zNjUgMCA0LjY5Mi0xLjExNiA2LjE1MS0zLjIgNy45ODktMTEuNDE1IDguMTQ2LTI2Ljg2Mi4zOS0zOC40Mzh6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQwNS4wNjEgMzA2LjMwMWMtMi4zMDYtMy40NDEtNi45NjgtNC4zNjEtMTAuNDA1LTIuMDUzLTMuNDQxIDIuMzA2LTQuMzYgNi45NjUtMi4wNTQgMTAuNDA2bC43NjcgMS4xNDRjMTMuNTY2IDIwLjI0NiAxMy4yOTIgNDcuMjY0LS42ODIgNjcuMjMtMi4zNzUgMy4zOTQtMS41NSA4LjA3IDEuODQ0IDEwLjQ0NSAxLjMxLjkxNiAyLjgxIDEuMzU2IDQuMjk0IDEuMzU2IDIuMzY1IDAgNC42OTItMS4xMTYgNi4xNTEtMy4yIDguNjUxLTEyLjM2MSAxMy4zMDYtMjYuODcxIDEzLjQ1OC00MS45NTguMTUzLTE1LjA4Ny00LjIwNS0yOS42ODgtMTIuNjA1LTQyLjIyNHoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDY3Ljk3IDE3LjY2M2gtNjkuNTU0Yy0yNC4xNTYgMC00My44MDkgMTkuNjUzLTQzLjgwOSA0My44MDl2ODUuMzgzYzAgNC45NjMgMi45ODkgOS4zMzMgNy42MTQgMTEuMTMyIDEuNDI3LjU1NSAyLjkwMy44MjQgNC4zNjIuODI0IDMuMjcxIDAgNi40NTMtMS4zNTUgOC43NzItMy44ODZsMTEuMTA0LTEyLjExNWgzMC43NTFjNC4xNDMgMCA3LjUtMy4zNTggNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVoLTM0LjA1MWMtMi4xMDMgMC00LjEwOC44ODItNS41MjkgMi40MzNsLTguMDI0IDguNzU1di03Ny41MjZjMC0xNS44ODUgMTIuOTI0LTI4LjgwOSAyOC44MDktMjguODA5aDY5LjU1NGMxNS44ODUg
                           MCAyOC44MDkgMTIuOTI0IDI4LjgwOSAyOC44MDl2MzcuNTI5YzAgMTUuODg1LTEyLjkyNCAyOC44MDktMjguODA5IDI4LjgwOWgtMTguNzk2Yy00LjE0MyAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU3IDcuNSA3LjUgNy41aDE4Ljc5NmMyNC4xNTYgMCA0My44MDktMTkuNjUzIDQzLjgwOS00My44MDl2LTM3LjUyOWMuMDAxLTI0LjE1Ny0xOS42NTItNDMuODA5LTQzLjgwOC00My44MDl6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQyOS40MzggNTEuNDgzYy00LjE0MyAwLTcuNSAzLjM1OC03LjUgNy41djE1LjQ0NWgtMTYuNjk0di0xNS40NDVjMC00LjE0Mi0zLjM1Ny03LjUtNy41LTcuNXMtNy41IDMuMzU4LTcuNSA3LjV2NDUuODljMCA0LjE0MiAzLjM1NyA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNXYtMTUuNDQ1aDE2LjY5NHYxNS40NDVjMCA0LjE0MiAzLjM1NyA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNXYtNDUuODljMC00LjE0Mi0zLjM1OC03LjUtNy41LTcuNXoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDU1LjUxNiAxMDQuODczYzAgNC4xNDIgMy4zNTcgNy41IDcuNSA3LjVzNy41LTMuMzU4IDcuNS03LjV2LTE4Ljk0NWMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUgMy4zNTgtNy41IDcuNXoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDYzLjAxNiA2OC44OGM0LjE0MyAwIDcuNS0zLjM1OCA3LjUtNy41di01LjgyMmMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUgMy4zNTgtNy41IDcuNXY1LjgyMmMwIDQuMTQyIDMuMzU3IDcuNSA3LjUgNy41eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=="  width='33%' />  ยืมมั้ย</Button>
                           <Button href="/chat" className="postall_tochat" variant="primary"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTEwLjE1Niw0MDEuODQzTDQ4MC40MTksMzE1LjNjMTQuMzM0LTI5LjMwMiwyMS45MDktNjEuODksMjEuOTYtOTQuNjc5YzAuMDg4LTU3LjAxMy0yMS45Ny0xMTAuOTItNjIuMTEyLTE1MS43OSAgICBDNDAwLjExNywyNy45NTMsMzQ2LjYxNSw0Ljk0MiwyODkuNjE1LDQuMDM5QzIzMC41MSwzLjEwNSwxNzQuOTU0LDI1LjU4NywxMzMuMTg3LDY3LjM1MyAgICBjLTQwLjI3NCw0MC4yNzMtNjIuNjEyLDkzLjM2Ni02My4zMTksMTUwLjEwMkMzMC4xNzQsMjQ3LjM0MSw2Ljc0NSwyOTMuOTM2LDYuODIyLDM0My43MDUgICAgYzAuMDM3LDIzLjI5LDUuMjc5LDQ2LjQ0MSwxNS4yMTIsNjcuMzc2TDEuNTUxLDQ3MC42ODljLTMuNTIxLDEwLjI0Ny0wLjk0OSwyMS4zNzMsNi43MTMsMjkuMDM1ICAgIGM1LjM5Miw1LjM5MywxMi41MDEsOC4yNjQsMTkuODEyLDguMjY0YzMuMDc2LDAsNi4xODgtMC41MDgsOS4yMjMtMS41NTFsNTkuNjA5LTIwLjQ4M2MyMC45MzUsOS45MzMsNDQuMDg2LDE1LjE3NSw2Ny4zNzYsMTUuMjEyICAgIGMwLjA4NCwwLDAuMTY0LDAsMC4yNDgsMGM1MC41MS0wLjAwMiw5Ny40Ni0yNC4wMzUsMTI3LjIzNy02NC43MDJjMzAuOTg3LTAuODE2LDYxLjY0Ni04LjMxNyw4OS4zNjMtMjEuODc2bDg2LjU0NCwyOS43MzggICAgYzMuNjA2LDEuMjM5LDcuMzA0LDEuODQzLDEwLjk1OSwxLjg0M2M4LjY4OCwwLDE3LjEzNi0zLjQxMiwyMy41NDUtOS44MjJDNTExLjI4NCw0MjcuMjQyLDUxNC4zNCw0MTQuMDIxLDUxMC4xNTYsNDAxLjg0M3ogICAgIE0xNjQuNTMsNDcwLjY5Yy0wLjA2NSwwLTAuMTM0LDAtMC4xOTksMGMtMjAuNjE0LTAuMDMxLTQxLjA4NS01LjExMy01OS4xOTYtMTQuNjk1Yy0zLjcyNC0xLjk2OS04LjA5Ni0yLjMxLTEyLjA3OC0wLjk0MiAgICBsLTYxLjEyMywyMS4wMDNsMjEuMDAzLTYxLjEyMmMxLjM2OC0zLjk4MywxLjAyOC04LjM1NS0wLjk0Mi0xMi4wNzhjLTkuNTgyLTE4LjExMi0xNC42NjQtMzguNTgyLTE0LjY5Ni01OS4xOTcgICAgYy0wLjA1MS0zMy4xNTksMTIuODQ4LTY0LjU4OCwzNS40MDUtODguMTIyYzcuMzY4LDQ0LjkxNiwyOC43NzUsODYuMzA2LDYxLjk1NywxMTguODk4ICAgIGMzMi45MzcsMzIuMzUxLDc0LjMzOSw1Mi45NDksMTE5LjAxMSw1OS42ODNDMjMwLjA4NCw0NTcuMzY3LDE5OC4yODgsNDcwLjY5LDE2NC41Myw0NzAuNjl6IE00ODAuNjI4LDQxNC43OTcgICAgYy0wLjg2NywwLjg2Ny0xLjg5NSwxLjEwMy0zLjA1MSwwLjcwNWwtOTIuNjQ4LTMxLjgzNmMtMS42MDktMC41NTMtMy4yODMtMC44MjctNC45NTEtMC44MjdjLTIuNDU5LDAtNC45MDksMC41OTUtNy4xMjYsMS43NjkgICAgYy0yNi40NTMsMTMuOTk0LTU2LjM0NSwyMS40MTYtODYuNDQ3LDIxLjQ2MmMtMC4wOTksMC0wLjE4OSwwLTAuMjg4LDBjLTEwMC44NjMsMC0xODQuMTc2LTgxLjkzNC0xODUuNzc0LTE4Mi43NzMgICAgYy0wLjgwNS01MC43ODUsMTguNTEzLTk4LjUxNCw1NC4zOTQtMTM0LjM5NWMzNS44ODEtMzUuODgxLDgzLjYxOC01NS4xOTIsMTM0LjM5Ni01NC4zOTIgICAgYzEwMC45MzYsMS42MDEsMTgyLjkyNiw4NS4wNjgsMTgyLjc3LDE4Ni4wNjNjLTAuMDQ3LDMwLjEwMi03LjQ2OCw1OS45OTUtMjEuNDYxLDg2LjQ0NmMtMS45NywzLjcyMy0yLjMxLDguMDk1LTAuOTQyLDEyLjA3OCAgICBsMzEuODM1LDkyLjY0OEM0ODEuNzMyLDQxMi45MDUsNDgxLjQ5NCw0MTMuOTMyLDQ4MC42MjgsNDE0Ljc5N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM3Ni44OTIsMTM5LjUxMmgtMTgxLjU2Yy04LjQxNiwwLTE1LjIzOCw2LjgyMy0xNS4yMzgsMTUuMjM4YzAsOC40MTYsNi44MjMsMTUuMjM4LDE1LjIzOCwxNS4yMzhoMTgxLjU2ICAgIGM4LjQxNiwwLDE1LjIzOC02LjgyMywxNS4yMzgtMTUuMjM4QzM5Mi4xMywxNDYuMzM1LDM4NS4zMDgsMTM5LjUxMiwzNzYuODkyLDEzOS41MTJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzYuODkyLDIwMi4xODNoLTE4MS41NmMtOC40MTYsMC0xNS4yMzgsNi44MjMtMTUuMjM4LDE1LjIzOHM2LjgyMywxNS4yMzgsMTUuMjM4LDE1LjIzOGgxODEuNTYgICAgYzguNDE2LDAsMTUuMjM4LTYuODIzLDE1LjIzOC0xNS4yMzhTMzg1LjMwOCwyMDIuMTgzLDM3Ni44OTIsMjAyLjE4M3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMwNy4wMDQsMjY0Ljg1MkgxOTUuMzMxYy04LjQxNiwwLTE1LjIzOCw2LjgyMy0xNS4yMzgsMTUuMjM4YzAsOC40MTYsNi44MjMsMTUuMjM4LDE1LjIzOCwxNS4yMzhoMTExLjY3MiAgICBjOC40MTYsMCwxNS4yMzgtNi44MjMsMTUuMjM4LTE1LjIzOEMzMjIuMjQxLDI3MS42NzUsMzE1LjQyLDI2NC44NTIsMzA3LjAwNCwyNjQuODUyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" width='58%' /></Button>
                       </div>
                   </Card.Body>
                   </Card>
                   </div>

               </Row>
               </div>
           

       )
                
}

export default Postall1;
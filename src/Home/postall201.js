

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Row,Col,Nav,container,Card } from 'react-bootstrap';
import expressicon from './home_img/expressicon.svg'
import './postall.css'
import testimg from './home_img/testimg.jpg'
import ty from './home_img/ty.jpg'
import catBag from './home_img/catBag.jpeg'


function Postall201() {
 
    const userimg = ty
    const imgpost = catBag
    const username = "JKloveU"
    const mode = "get"

    const topicName = "ให้เช่ากระเป๋าแมว"
    const itemName = "กระเป๋าแมว"
    const description = "แบบใสได้มาตรฐาน"
    const postID = "0410"
    const price = "3"
    const getdate = "09/06/2564"
    const givedate = "12/06/2564"
    const place = "interzone"
    
    const date = getdate
    const typedate = "ให้ยืมวันที่"
 
        return(

            <div className="postall_bodypost">
           
                 <Row>
                    
                
                    <div className="postall_post">
                    <Card className="card" style={{ width: '2rem' },{height: '100%'}}>
                    <Card.Img className="img_card"  variant="top"  href="/post" src={imgpost} />
                    <Card.Body>

                        <div className="postall_card_body">
                        <Card.Title>
                            <div className="postall_head">
                                <img href="/profile" className="postall_userimg" src={ty} width='10%'></img>
                                <a className="postall_username" href="/profile"><font color="black">{username}</font></a>
                            </div>
                        </Card.Title>

                        
                        <Card.Text>
                           <a className="postall_topic" href="/post"><font color="black"><b>{topicName}</b></font></a>
                        </Card.Text>

                        <Card.Text>
                            <div className="postall_price_date">
                           <a className="postall_price"><b>{price} บาท</b></a>
                           <a className="postall_date"><b>{typedate} {date}</b></a>
                           </div>
                        </Card.Text>
                        </div>

                        <div className="postall_bottom"><Button href="/commentget" className="postall_toget"  variant="primary"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMSA1MTEuOTk5NjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ1NS43MjI2NTYgMjgwLjQxNDA2MmMwIDEyMy41MDM5MDctMTAwLjEzMjgxMiAyMjMuNjI1LTIyMy42MzY3MTggMjIzLjYyNS0zMC4yOTY4NzYgMC01OS4xNzk2ODgtNi4wMjM0MzctODUuNTE5NTMyLTE2Ljk0NTMxMi03Mi4wMDM5MDYtMjkuODI0MjE5LTEyNS4wMzkwNjItOTYuMTc1NzgxLTEzNi4wMDM5MDYtMTc1Ljk0NTMxMi0xLjM5MDYyNS0xMC4wNDI5NjktMi4xMDE1NjItMjAuMzA4NTk0LTIuMTAxNTYyLTMwLjczNDM3NiAwLTEyMy41MTU2MjQgMTAwLjEyMTA5My0yMjMuNjM2NzE4IDIyMy42MjUtMjIzLjYzNjcxOCAxMjMuNTAzOTA2IDAgMjIzLjYzNjcxOCAxMDAuMTIxMDk0IDIyMy42MzY3MTggMjIzLjYzNjcxOHptMCAwIiBmaWxsPSIjOTM3ZGUyIiBkYXRhLW9yaWdpbmFsPSIjOTM3ZGUyIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjMyLjA4NTkzOCA1Ni43NzczNDRjLTExLjgyNDIxOSAwLTIzLjQyOTY4OC45MjU3ODEtMzQuNzU3ODEzIDIuNjkxNDA2IDEwNyAxNi42OTkyMTkgMTg4Ljg4MjgxMyAxMDkuMjUzOTA2IDE4OC44ODI4MTMgMjIwLjk0NTMxMiAwIDExMS42NzU3ODItODEuODc1IDIwNC4yMjY1NjMtMTg4Ljg2MzI4MiAyMjAuOTI5Njg4IDExLjMyMDMxMyAxLjc2NTYyNSAyMi45MTc5NjkgMi42OTUzMTIgMzQuNzM4MjgyIDIuNjk1MzEyIDEyMy41MDM5MDYgMCAyMjMuNjM2NzE4LTEwMC4xMjEwOTMgMjIzLjYzNjcxOC0yMjMuNjI1IDAtMTIzLjUxNTYyNC0xMDAuMTMyODEyLTIyMy42MzY3MTgtMjIzLjYzNjcxOC0yMjMuNjM2NzE4em0wIDAiIGZpbGw9IiM3NTcwZDYiIGRhdGEtb3JpZ2luYWw9IiM3NTcwZDYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00ODMuNjQwNjI1IDI2My44Nzg5MDYtMTI3LjcwMzEyNSA4NC41NjI1Yy05LjA5NzY1NiA2LjAyNzM0NC0yMC4xMTcxODggOC40MTc5NjktMzAuODkwNjI1IDYuNjk1MzEzLTEwLjc5Njg3NS0xLjcxODc1LTIxLjg0Mzc1LjY0MDYyNS0zMC45NjQ4NDQgNi42Nzk2ODdsLTE3LjA4OTg0MyAxMS4zMjQyMTktOTUuNzA3MDMyLTE0MS4wNzQyMTkgMjMuNDgwNDY5LTEwMS40NDE0MDZjMS44MjgxMjUtNy44OTQ1MzEgMi43MzA0NjktMTUuODk4NDM4IDIuNzMwNDY5LTIzLjg3MTA5NCAwLTIwLjYyNS02LjAzMTI1LTQwLjk4NDM3NS0xNy42MDE1NjMtNTguNDYwOTM3LTIuODQzNzUtNC4yOTY4NzUtNC4yMDMxMjUtOS4xNjAxNTctNC4yMDMxMjUtMTMuOTU3MDMxIDAtOC4yMDcwMzIgMy45ODA0NjktMTYuMjUzOTA3IDExLjMzNTkzOC0yMS4xMjUgOS45MTQwNjItNi41NzAzMTMgMjMuMDU0Njg3LTUuMzQ3NjU3IDMxLjU4OTg0NCAyLjkyOTY4N2wxNS4yMTA5MzcgMTQuNzM0Mzc1YzE3LjM5ODQzNyAxNi44Nzg5MDYgMzAuODE2NDA2IDM3LjQyOTY4OCAzOS4yNDYwOTQgNjAuMTU2MjVsOC4yNSAyMi4yMDcwMzEgODQuOTQxNDA2LTU2LjEyMTA5M2MxMy41Nj
                            Y0MDYtOC45ODA0NjkgMzEuOTIxODc1LTUuMDU0Njg4IDQwLjU4MjAzMSA4LjgzOTg0MyA4LjM1NTQ2OSAxMy4zODY3MTkgNC4wNjY0MDYgMzEuMDc0MjE5LTkuMDk3NjU2IDM5Ljc4OTA2My0uMTYwMTU2LjEwNTQ2OC0uMTY3OTY5LjI3MzQzNy0uMTE3MTg4LjQwMjM0NC4wNzQyMTkuMTM2NzE4LjIzNDM3Ni4yMzQzNzQuNDE0MDYzLjE2MDE1NiAzLjM1NTQ2OS0xLjI5Njg3NSA2Ljg2NzE4Ny0xLjkyMTg3NSAxMC4zNTE1NjMtMS45MjE4NzUgNS41NTg1OTMgMCAxMS4wNzAzMTIgMS42MDE1NjIgMTUuNzg1MTU2IDQuNjQ4NDM3IDMuMjQ2MDk0IDIuMTAxNTYzIDYuMTIxMDk0IDQuODk0NTMyIDguMzk0NTMxIDguMzIwMzEzIDQuMzgyODEzIDYuNjI1IDUuNjkxNDA2IDE0LjM5NDUzMSA0LjI1NzgxMyAyMS42MTMyODEtMi4yNTM5MDcgMTEuMzc4OTA2LTEwLjUxOTUzMiAxNy4yMzgyODEtMTIuMTQ0NTMyIDE4LjM0Mzc1LS4yNzczNDQuMTkxNDA2LS4zNTE1NjIuNTcwMzEyLS4xNjAxNTYuODU5Mzc1IDAgLjAxMTcxOS4wMTE3MTkuMDE5NTMxLjAyMzQzOC4wMTk1MzEuMTc5Njg3LjI1NzgxMy41NTA3ODEuMzMyMDMyLjgxNjQwNi4xNjAxNTYgMi4zMTI1LS41NjI1IDQuNjY3OTY4LS44MjgxMjQgNy4wMjczNDQtLjgyODEyNCA1Ljc1IDAgMTEuNDcyNjU2IDEuNjM2NzE4IDE2LjMzNTkzNyA0LjczNDM3NCAzLjI4OTA2MyAyLjEwMTU2MyA2LjE5OTIxOSA0Ljg4MjgxMyA4LjQ0OTIxOSA4LjI4OTA2MyA4LjgzMjAzMSAxMy4zMzIwMzEgNS4xNzk2ODcgMzEuMzA0Njg3LTguMTY0MDYzIDQwLjEzNjcxOS0uMzI4MTI1LjIyMjY1Ni0uNjU2MjUuNDQ1MzEyLS45ODQzNzUuNjU2MjUtLjE5MTQwNi4xNTIzNDQtLjI0NjA5NC4zOTQ1MzEtLjE0ODQzNy41NjY0MDYuMDE5NTMxLjAzOTA2Mi4wNjI1LjA4MjAzMS4xMDU0NjkuMTA1NDY5LjE0ODQzNy4xMTcxODcuMzgyODEyLjEyNS41NzQyMTgtLjAyMzQzOCA4LjI4OTA2My0yLjgyNDIxOSAxNy4zMTI1LTEuNTM5MDYyIDI0LjU3NDIxOSAzLjE2NDA2MyAzLjM0Mzc1IDIuMTQ0NTMxIDYuMzA0Njg3IDUuMDMxMjUgOC42NDg0MzcgOC41NzgxMjUgOC44MzIwMzIgMTMuMzQ3NjU2IDUuMTgzNTk0IDMxLjMxNjQwNi04LjE0ODQzNyA0MC4xNDg0Mzd6bTAgMCIgZmlsbD0iI2ZkZDdiZCIgZGF0YS1vcmlnaW5hbD0iI2ZkZDdiZCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI3OC4yMTQ4NDQgMzk5LjkxNDA2Mi01My44NzEwOTQgMzUuNjc1NzgyLTc3Ljc3NzM0NCA1MS41MDc4MTJjLTcyLjAwMzkwNi0yOS44MjgxMjUtMTI1LjAzOTA2Mi05Ni4xNzU3ODEtMTM2LjAwMzkwNi0xNzUuOTQ5MjE4bDkwLjI2MTcxOS01OS43NzM0MzggNTQuOTQ1MzEyLTM2LjM4NjcxOWM2LjMyNDIxOS00LjE5NTMxMiAxNC44NTkzNzUtMi40NTMxMjUgMTkuMDUwNzgxIDMuODgyODEzbDEwNy4yNzczNDQgMTYxLjk3NjU2MmM0LjE5NTMxMyA2LjMzOTg0NCAyLjQ1MzEyNSAxNC44NjMyODItMy44ODI4MTIgMTkuMDY2NDA2em0wIDAiIGZpbGw9IiM4N2RiZmYiIGRhdGEtb3JpZ2luYWw9IiM4N2RiZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNzguMjE0ODQ0IDM5OS45MTQwNjItNTMuODcxMDk0IDM1LjY3NTc4Mi0xMjMuNTE5NTMxLTE4NC4yMTQ4NDQgNTQuOTQ1MzEyLTM2LjM4NjcxOWM2LjMyNDIxOS00LjE5NTMxMiAxNC44NTkzNzUtMi40NTMxMjUgMTkuMDUwNzgxIDMuODgyODEzbDEwNy4yNzczNDQgMTYxLjk3NjU2MmM0LjE5NTMxMyA2LjMzOTg0NCAyLjQ1MzEyNSAxNC44NjMyODItMy44ODI4MTIgMTkuMDY2NDA2em0wIDAiIGZpbGw9IiM2ZmM3ZmYiIGRhdGEtb3JpZ2luY
                            Ww9IiM2ZmM3ZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmYWM1YWEiPjxwYXRoIGQ9Im00MzQuMTgzNTk0IDEwOS4wMzUxNTYtNDIuNDkyMTg4IDIyLjczODI4MmMtNi4wMzEyNSAzLjIxODc1LTEzLjUwMzkwNiAxLjUzOTA2Mi0xNy41NTg1OTQtMy45NDkyMTlsMzMuNS0yMS42NzU3ODFjLjA3NDIxOS4xNDA2MjQuMjM0Mzc2LjIzNDM3NC40MTQwNjMuMTYwMTU2IDMuMzU1NDY5LTEuMjk2ODc1IDYuODY3MTg3LTEuOTIxODc1IDEwLjM1MTU2My0xLjkyMTg3NSA1LjU2MjUgMCAxMS4wNzAzMTIgMS42MDU0NjkgMTUuNzg1MTU2IDQuNjQ4NDM3em0wIDAiIGZpbGw9IiNmYWM1YWEiIGRhdGEtb3JpZ2luYWw9IiNmYWM1YWEiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDU4LjczNDM3NSAxNjIuMjYxNzE5LTQxLjU2NjQwNiAyMi4yMjY1NjJjLTYuMDMxMjUgMy4yMjY1NjMtMTMuNTAzOTA3IDEuNTUwNzgxLTE3LjU1ODU5NC0zLjkzNzVsMzMuNS0yMS42NzU3ODEgMS40NDUzMTMtLjY3OTY4OGMuMTc5Njg3LjI1NzgxMy41NTA3ODEuMzMyMDMyLjgxNjQwNi4xNjAxNTcgMi4zMTY0MDYtLjU2MjUgNC42NzE4NzUtLjgyODEyNSA3LjAyNzM0NC0uODI4MTI1IDUuNzUzOTA2IDAgMTEuNDc2NTYyIDEuNjMyODEyIDE2LjMzNTkzNyA0LjczNDM3NXptMCAwIiBmaWxsPSIjZmFjNWFhIiBkYXRhLW9yaWdpbmFsPSIjZmFjNWFhIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQ4My4xNDA2MjUgMjE1LjE1NjI1LTM2LjYxMzI4MSAxOS41ODU5MzhjLTYuMDE1NjI1IDMuMjE0ODQzLTEzLjQ5MjE4OCAxLjUzOTA2Mi0xNy41NTQ2ODgtMy45NDkyMTlsMjkuMDE5NTMyLTE4Ljc3NzM0NGMuMTQ4NDM3LjExNzE4Ny4zODI4MTIuMTI1LjU3NDIxOC0uMDIzNDM3IDguMjg5MDYzLTIuODI0MjE5IDE3LjMxMjUtMS41MzkwNjMgMjQuNTc0MjE5IDMuMTY0MDYyem0wIDAiIGZpbGw9IiNmYWM1YWEiIGRhdGEtb3JpZ2luYWw9IiNmYWM1YWEiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDk4LjQyOTY4OCAyMTkuMzM5ODQ0Yy01LjMwODU5NC04LjAxNTYyNS0xMy4zNTU0NjktMTMuNTM5MDYzLTIyLjcxMDkzOC0xNS42MzI4MTMgNi4wMzUxNTYtMTEuNTQyOTY5IDUuNzg5MDYyLTI1Ljk0NTMxMi0xLjg5ODQzOC0zNy41NTA3ODEtNS40Njg3NS04LjI2MTcxOS0xMy43MTg3NS0xMy41OTc2NTYtMjIuNjk5MjE4LTE1LjYxNzE4OCAxLjYwMTU2Mi0zLjA1NDY4NyAyLjc4NTE1Ni02LjM1MTU2MiAzLjQ5MjE4Ny05LjgyODEyNCAxLjk2MDkzOC05LjY2Nzk2OS4wNDY4NzUtMTkuNTE5NTMyLTUuNDAyMzQzLTI3Ljc0MjE4OC01LjMwODU5NC04LjAxOTUzMS0xMy4zNTU0NjktMTMuNTQyOTY5LTIyLjcxMDkzOC0xNS42MzI4MTIgNi4wMzUxNTYtMTEuNTQyOTY5IDUuNzg5MDYyLTI1Ljk0NTMxMy0xLjg5ODQzOC0zNy41NTQ2ODgtMTEuMjM4MjgxLTE2Ljk3MjY1Ni0zNC4xOTkyMTgtMjEuNjQwNjI1LTUxLjE3NTc4MS0xMC4zOTg0MzhsLTM2Ljc1NzgxMiAyNC4zNDM3NWMtMTkuNTkzNzUtOS45Mzc1LTQwLjQzMzU5NC0xNi45ODgyODEtNjIuMDYyNS0yMS4wMDM5MDYtNi44MzU5MzgtMTAuMzc4OTA2LTE0Ljc4NTE1Ny0yMC4wMjczNDQtMjMuNjgzNTk0LTI4LjY1MjM0NGwtMTUuMjA3MDMxLTE0LjczODI4MWMtMTEuMTM2NzE5LTEwLjc5Njg3NS0yOC42MDE1NjMtMTIuNDE3OTY5LTQxLjUzMTI1LTMuODUxNTYyLTE1LjI5Njg3NSAxMC4xMjg5MDYtMTkuNSAzMC44MTY0MDYtOS4zNzEwOTQgNDYuMTEzMjgxLjM5ODQzOC42MDU0NjkuNzg5MDYyIDEuMjE0ODQ0IDEuMTc1NzgxIDEu
                            ODI0MjE5LTQ5Ljg0NzY1NiAxMC4wODU5MzctOTUuMjc3MzQzIDM2LjUzOTA2Mi0xMjguOTAyMzQzIDc1LjMwMDc4MS0zNi40ODgyODIgNDIuMDY2NDA2LTU2LjU4NTkzOCA5NS45NDE0MDYtNTYuNTg1OTM4IDE1MS42OTkyMTkgMCAxMC42ODc1LjczMDQ2OSAyMS4zOTQ1MzEgMi4xNzU3ODEgMzEuODE2NDA2IDExLjEzNjcxOSA4MS4wMTk1MzEgNjUuMTA1NDY5IDE1MC44Mzk4NDQgMTQwLjgzOTg0NCAxODIuMjE4NzUgMjguMDg1OTM3IDExLjY0MDYyNSA1Ny44ODY3MTkgMTcuNTQ2ODc1IDg4LjU2MjUgMTcuNTQ2ODc1IDQ4LjU4MjAzMSAwIDk1LjA4NTkzNy0xNC44Nzg5MDYgMTM0LjQ4ODI4MS00My4wMjM0MzggMzguNTQ2ODc1LTI3LjUzOTA2MiA2Ny4zODY3MTktNjUuNTQyOTY4IDgzLjQwNjI1LTEwOS45MDIzNDMgMS40OTYwOTQtNC4xMzI4MTMtLjY0ODQzNy04LjY5OTIxOS00Ljc4MTI1LTEwLjE5MTQwNy00LjEzNjcxOC0xLjQ5MjE4Ny04LjY5OTIxOC42NDg0MzgtMTAuMTkxNDA2IDQuNzg1MTU3LTE0LjkxNzk2OSA0MS4zMDg1OTMtNDEuNzgxMjUgNzYuNjk5MjE5LTc3LjY5MTQwNiAxMDIuMzUxNTYyLTM2LjY4MzU5NCAyNi4yMDcwMzEtNzkuOTg4MjgyIDQwLjA1ODU5NC0xMjUuMjMwNDY5IDQwLjA1ODU5NC0yMy4zOTA2MjUgMC00Ni4yMzA0NjktMy42OTE0MDYtNjguMDg5ODQ0LTEwLjk3MjY1Nmw2NC43NzM0MzgtNDIuODk0NTMxYy4wMDM5MDYtLjAwMzkwNy4wMDc4MTItLjAwMzkwNy4wMTE3MTktLjAwNzgxMy4wMDM5MDYgMCAuMDAzOTA2LS4wMDM5MDYuMDA3ODEyLS4wMDc4MTNsNTMuODMyMDMxLTM1LjY0ODQzN2guMDAzOTA3YzQuODMyMDMxLTMuMjAzMTI1IDguMTMyODEyLTguMDkzNzUgOS4yODkwNjItMTMuNzc3MzQ0IDEuMTU2MjUtNS42ODM1OTMuMDMxMjUtMTEuNDgwNDY5LTMuMTcxODc1LTE2LjMxMjVsLS43MTA5MzctMS4wNzgxMjUgMTAuNDU3MDMxLTYuOTI1NzgxYzcuNDYwOTM3LTQuOTQxNDA2IDE2LjQzMzU5My02Ljg3ODkwNiAyNS4yNjk1MzEtNS40NjA5MzcgMTIuNzkyOTY5IDIuMDU0Njg3IDI1Ljc4NTE1Ni0uNzU3ODEzIDM2LjU4MjAzMS03LjkxMDE1N2w4Ni43MzQzNzUtNTcuNDM3NWMtLjU5Mzc1IDcuNTIzNDM4LTEuNTcwMzEyIDE1LjAwMzkwNy0yLjkzMzU5NCAyMi4zNTkzNzUtLjgwNDY4NyA0LjMyNDIxOSAyLjA1MDc4MiA4LjQ4MDQ2OSA2LjM3NSA5LjI4MTI1LjQ4ODI4Mi4wOTM3NS45ODA0NjkuMTM2NzE5IDEuNDYwOTM4LjEzNjcxOSAzLjc2MTcxOSAwIDcuMTA1NDY5LTIuNjc5Njg3IDcuODE2NDA2LTYuNTExNzE5IDIuMjA3MDMyLTExLjg3MTA5NCAzLjQ3NjU2My0yNC4wMzEyNSAzLjgwNDY4OC0zNi4yMDcwMzFsMjQuNDQxNDA2LTE2LjE4NzVjOC4yMjI2NTYtNS40NDUzMTMgMTMuODM1OTM4LTEzLjc2OTUzMSAxNS43OTY4NzUtMjMuNDMzNTk0IDEuOTY0ODQ0LTkuNjY3OTY5LjA0Njg3NS0xOS41MTk1MzEtNS4zOTg0MzctMjcuNzQyMTg3em0tMTc3LjIxODc1LTEzNS4zNzg5MDYtMjQuMzI0MjE5IDE2LjEwOTM3NC00Ljc4OTA2My0xMi45MDIzNDNjLTItNS4zODI4MTMtNC4yOTI5NjgtMTAuNjYwMTU3LTYuODMyMDMxLTE1LjgyNDIxOSAxMi4zMzk4NDQgMy4xMjg5MDYgMjQuMzU1NDY5IDcuMzQ3NjU2IDM1Ljk0NTMxMyAxMi42MTcxODh6bS0yNTIuMDk3NjU3IDU1LjE5MTQwNmMzMi4zMTY0MDctMzcuMjUzOTA2IDc2LjMzNTkzOC02Mi4yOTY4NzUgMTI0LjQ5MjE4OC03MC45ODA0NjkgNy43MjY1NjIgMTguNzE4NzUgOS41NzgxMjUgMzkuNjMyODEzIDQuOTYwOTM3IDU5LjU2NjQwNmwtMTkuNDEwMTU2IDgzLjg1NTQ2OWMtMy4wNTA3ODEtMy4yNTc4MTItNy4wMTE3MTktNS41MDM5MDYtMTEuNDcyNjU2LTYuNDEwMTU2LTUuNjg3NS0xLjE2MDE1Ni0xMS40ODA0NjktLjAzMTI1LTE2LjMxMjUgMy4xNzE
                            4NzVsLTU0Ljk4MDQ2OSAzNi40MDYyNWMtLjAwMzkwNiAwLS4wMDM5MDYgMC0uMDA3ODEzLjAwMzkwNiAwIDAtLjAwMzkwNiAwLS4wMDM5MDYuMDAzOTA2bC03OS4yOTY4NzUgNTIuNTExNzE5Yy0uNDMzNTkzLTUuNTkzNzUtLjY2MDE1Ni0xMS4yMzA0NjktLjY2MDE1Ni0xNi44NjMyODEgMC01MS45MjE4NzUgMTguNzE0ODQ0LTEwMi4wOTM3NSA1Mi42OTE0MDYtMTQxLjI2NTYyNXptMjA3LjE5MTQwNyAyNTAuNDQxNDA2Yy0uMzA4NTk0IDEuNTE1NjI1LTEuMTkxNDA3IDIuODI0MjE5LTIuNDg0Mzc2IDMuNjc5Njg4aC4wMDM5MDdsLTQ3LjI4MTI1IDMxLjMwODU5My04Ny43NTM5MDctMTMwLjg3MTA5M2MtMi40NDkyMTgtMy42NTIzNDQtNy4zOTQ1MzEtNC42MjUtMTEuMDQ2ODc0LTIuMTc1NzgyLTMuNjQ4NDM4IDIuNDQ5MjE5LTQuNjI1IDcuMzkwNjI1LTIuMTc1NzgyIDExLjA0Mjk2OWw4Ny42OTkyMTkgMTMwLjc5Njg3NS02Ny40OTYwOTQgNDQuNjk5MjE5Yy02Ny4wNzAzMTItMjkuMzM1OTM4LTExNS4wNjY0MDYtOTEuMjg5MDYzLTEyNi42MDU0NjktMTYzLjM3ODkwN2w3OS4zOTA2MjYtNTIuNDAyMzQzIDkuMTM2NzE4IDEzLjYzMjgxMmMxLjUzOTA2MyAyLjI4OTA2MyA0LjA1NDY4OCAzLjUyNzM0NCA2LjYyMTA5NCAzLjUyNzM0NCAxLjUyMzQzOCAwIDMuMDY2NDA2LS40MzM1OTQgNC40MjU3ODEtMS4zNDc2NTYgMy42NTIzNDQtMi40NDkyMTkgNC42Mjg5MDctNy4zOTQ1MzEgMi4xNzk2ODgtMTEuMDQ2ODc1bC05LjA3NDIxOS0xMy41MzUxNTYgNDguMzIwMzEyLTMxLjg5NDUzMmMxLjI4NTE1Ny0uODU1NDY4IDIuODI4MTI2LTEuMTUyMzQ0IDQuMzQzNzUtLjg0Mzc1IDEuNTE1NjI2LjMwODU5NCAyLjgyNDIxOSAxLjE5MTQwNiAzLjY3OTY4OCAyLjQ4MDQ2OWwxMDcuMjczNDM4IDE2MS45ODQzNzVjLjg1MTU2MiAxLjI4NTE1NiAxLjE1MjM0MyAyLjgyODEyNS44NDM3NSA0LjM0Mzc1em0yMTEuOTIxODc0LTE0NS42ODM1OTRjLTEuMTE3MTg3IDUuNS00LjMwODU5MyAxMC4yMzQzNzUtOC45ODgyODEgMTMuMzMyMDMybC0yNy45NDE0MDYgMTguNTAzOTA2Yy0uMDA3ODEzLjAwMzkwNi0uMDE1NjI1LjAxMTcxOC0uMDI3MzQ0LjAxNTYyNWwtOTkuNzMwNDY5IDY2LjA0Njg3NWMtNy40NjA5MzcgNC45NDE0MDYtMTYuNDMzNTkzIDYuODgyODEyLTI1LjI2OTUzMSA1LjQ2MDkzNy0xMi43ODkwNjItMi4wNTA3ODEtMjUuNzgxMjUuNzU3ODEzLTM2LjU4MjAzMSA3LjkxMDE1N2wtMTAuNDU3MDMxIDYuOTI1NzgxLTg3Ljg1OTM3NS0xMzIuNjY3OTY5IDIyLjcxMDkzNy05OC4xMDU0NjljNS44NDc2NTctMjUuMjczNDM3IDIuNzY1NjI1LTUxLjg5NDUzMS04LjM3NS03NS4wODU5MzctLjEwMTU2Mi0uMjQyMTg4LS4yMTA5MzctLjQ3NjU2My0uMzM1OTM3LS43MDcwMzItMi4xNDA2MjUtNC4zODI4MTItNC41NzAzMTMtOC42MzY3MTgtNy4yODUxNTYtMTIuNzM4MjgxLTUuMjgxMjUtNy45NzY1NjItMy4wODk4NDQtMTguNzYxNzE5IDQuODkwNjI0LTI0LjA0Njg3NSA2Ljc0MjE4OC00LjQ2NDg0NCAxNS44NTE1NjMtMy42MjEwOTQgMjEuNjU2MjUgMi4wMDc4MTNsMTUuMjA3MDMyIDE0Ljc0MjE4N2MxNi40NDkyMTggMTUuOTQ5MjE5IDI5LjM1OTM3NSAzNS43MzA0NjkgMzcuMzI4MTI1IDU3LjIwNzAzMmw4LjI4MTI1IDIyLjMwODU5M2MuMDE1NjI1LjA0Mjk2OS4wMzEyNS4wNzgxMjUuMDQ2ODc1LjExNzE4OC4wMTk1MzEuMDUwNzgxLjA0Mjk2OC4xMDU0NjkuMDYyNS4xNTYyNS4wNTg1OTQuMTM2NzE5LjExMzI4MS4yNjE3MTkuMTcxODc1LjM2NzE4Ny4xNjAxNTYuMzM1OTM4LjMzNTkzNy42Njc5NjkuNTQ2ODc1Ljk4NDM3NSAyLjQyOTY4NyAzLjY2Nzk2OSA3LjM2NzE4NyA0LjY3MTg3NSAxMS4wMzEyNSAyLjI0MjE4OGw4NC45MTAxNTYtNTYuMjI2NTYzYzkuNjU2Mj
                            UtNi4zOTQ1MzEgMjIuNzE0ODQ0LTMuNzQyMTg3IDI5LjEwOTM3NSA1LjkxNDA2M3MzLjc0MjE4NyAyMi43MTQ4NDMtNS45MTQwNjMgMjkuMTA5Mzc1bC03LjM3MTA5MyA0Ljg4MjgxMnMtLjAwMzkwNyAwLS4wMDc4MTMuMDAzOTA2bC0xNi40NDE0MDYgMTAuODkwNjI2Yy0uMDIzNDM4LjAxNTYyNC0uMDM5MDYyLjAzMTI1LS4wNjI1LjA0Mjk2OC0uMDkzNzUuMDY2NDA2LS4xODM1OTQuMTI4OTA2LS4yNTc4MTIuMTkxNDA2LTMuMzk4NDM4IDIuNDk2MDk0LTQuMjc3MzQ0IDcuMjQyMTg4LTEuOTIxODc2IDEwLjc5Njg3NiAyLjQyNTc4MiAzLjY2Nzk2OCA3LjM2NzE4OCA0LjY3MTg3NCAxMS4wMzUxNTcgMi4yNDIxODdsMTYuNDUzMTI1LTEwLjg5ODQzN2M0LjY3NTc4MS0zLjA4OTg0NCAxMC4yNzM0MzctNC4xNzk2ODggMTUuNzY5NTMxLTMuMDYyNSA1LjQ5NjA5NCAxLjExNzE4NyAxMC4yMzQzNzUgNC4zMDg1OTMgMTMuMzI4MTI1IDguOTg4MjgxIDMuMDk3NjU2IDQuNjc1NzgxIDQuMTkxNDA2IDEwLjI4MTI1IDMuMDc0MjE5IDE1Ljc3NzM0My0xLjExNzE4OCA1LjUtNC4zMDg1OTQgMTAuMjM0Mzc2LTguOTg4MjgxIDEzLjMzMjAzMmwtMjMuODIwMzEzIDE1Ljc3NzM0NGMtMy42Njc5NjkgMi40MjU3ODEtNC42NzE4NzUgNy4zNjMyODEtMi4yNDIxODcgMTEuMDMxMjUgMS41MzEyNSAyLjMxMjUgNC4wNjI1IDMuNTY2NDA2IDYuNjQ0NTMxIDMuNTY2NDA2IDEuNTA3ODEyIDAgMy4wMzUxNTYtLjQyOTY4OCA0LjM4NjcxOS0xLjMyNDIxOWwzLjY4NzUtMi40NDE0MDYgMTIuNzU3ODEyLTguNDQ5MjE5YzkuNjYwMTU2LTYuMzk0NTMxIDIyLjcxNDg0NC0zLjc0MjE4OCAyOS4xMDkzNzUgNS45MTQwNjIgNi4zOTQ1MzEgOS42NjAxNTcgMy43NDIxODcgMjIuNzE0ODQ0LTUuOTE0MDYzIDI5LjExMzI4MmwtMTEuODk4NDM3IDcuODc4OTA2Yy0uMDYyNS4wMzkwNjItLjEyNS4wODIwMzEtLjE4NzUuMTI1bC0xMS43MzQzNzUgNy43Njk1MzFjLTMuNjY3OTY5IDIuNDI1NzgxLTQuNjcxODc1IDcuMzY3MTg4LTIuMjQyMTg4IDExLjAzNTE1NyAxLjUzMTI1IDIuMzEyNSA0LjA2MjUgMy41NjY0MDYgNi42NDQ1MzIgMy41NjY0MDYgMS41MDc4MTIgMCAzLjAzNTE1Ni0uNDI5Njg4IDQuMzg2NzE4LTEuMzI0MjE5bDMuNjg3NS0yLjQ0MTQwNnMwLS4wMDM5MDcuMDAzOTA3LS4wMDM5MDdsMTIuNzU3ODEyLTguNDQ1MzEyYzQuNjc1NzgxLTMuMDk3NjU2IDEwLjI3NzM0NC00LjE5MTQwNiAxNS43NzczNDQtMy4wNzAzMTIgNS41IDEuMTEzMjgxIDEwLjIzNDM3NSA0LjMwODU5MyAxMy4zMzIwMzEgOC45ODQzNzQgMy4wOTM3NSA0LjY3NTc4MiA0LjE4MzU5NCAxMC4yODEyNSAzLjA2NjQwNiAxNS43NzczNDR6bTAgMCIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="  width='32%'/>  ยืมหน่อย</Button>
                            <Button href="/chat" className="postall_tochat" variant="primary"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTEwLjE1Niw0MDEuODQzTDQ4MC40MTksMzE1LjNjMTQuMzM0LTI5LjMwMiwyMS45MDktNjEuODksMjEuOTYtOTQuNjc5YzAuMDg4LTU3LjAxMy0yMS45Ny0xMTAuOTItNjIuMTEyLTE1MS43OSAgICBDNDAwLjExNywyNy45NTMsMzQ2LjYxNSw0Ljk0MiwyODkuNjE1LDQuMDM5QzIzMC41MSwzLjEwNSwxNzQuOTU0LDI1LjU4NywxMzMuMTg3LDY3LjM1MyAgICBjLTQwLjI3NCw0MC4yNzMtNjIuNjEyLDkzLjM2Ni02My4zMTksMTUwLjEwMkMzMC4xNzQsMjQ3LjM0MSw2Ljc0NSwyOTMuOTM2LDYuODIyLDM0My43MDUgICAgYzAuMDM3LDIzLjI5LDUuMjc5LDQ2LjQ0MSwxNS4yMTIsNjcuMzc2TDEuNTUxLDQ3MC42ODljLTMuNTIxLDEwLjI0Ny0wLjk0OSwyMS4zNzMsNi43MTMsMjkuMDM1ICAgIGM1LjM5Miw1LjM5MywxMi41MDEsOC4yNjQsMTkuODEyLDguMjY0YzMuMDc2LDAsNi4xODgtMC41MDgsOS4yMjMtMS41NTFsNTkuNjA5LTIwLjQ4M2MyMC45MzUsOS45MzMsNDQuMDg2LDE1LjE3NSw2Ny4zNzYsMTUuMjEyICAgIGMwLjA4NCwwLDAuMTY0LDAsMC4yNDgsMGM1MC41MS0wLjAwMiw5Ny40Ni0yNC4wMzUsMTI3LjIzNy02NC43MDJjMzAuOTg3LTAuODE2LDYxLjY0Ni04LjMxNyw4OS4zNjMtMjEuODc2bDg2LjU0NCwyOS43MzggICAgYzMuNjA2LDEuMjM5LDcuMzA0LDEuODQzLDEwLjk1OSwxLjg0M2M4LjY4OCwwLDE3LjEzNi0zLjQxMiwyMy41NDUtOS44MjJDNTExLjI4NCw0MjcuMjQyLDUxNC4zNCw0MTQuMDIxLDUxMC4xNTYsNDAxLjg0M3ogICAgIE0xNjQuNTMsNDcwLjY5Yy0wLjA2NSwwLTAuMTM0LDAtMC4xOTksMGMtMjAuNjE0LTAuMDMxLTQxLjA4NS01LjExMy01OS4xOTYtMTQuNjk1Yy0zLjcyNC0xLjk2OS04LjA5Ni0yLjMxLTEyLjA3OC0wLjk0MiAgICBsLTYxLjEyMywyMS4wMDNsMjEuMDAzLTYxLjEyMmMxLjM2OC0zLjk4MywxLjAyOC04LjM1NS0wLjk0Mi0xMi4wNzhjLTkuNTgyLTE4LjExMi0xNC42NjQtMzguNTgyLTE0LjY5Ni01OS4xOTcgICAgYy0wLjA1MS0zMy4xNTksMTIuODQ4LTY0LjU4OCwzNS40MDUtODguMTIyYzcuMzY4LDQ0LjkxNiwyOC43NzUsODYuMzA2LDYxLjk1NywxMTguODk4ICAgIGMzMi45MzcsMzIuMzUxLDc0LjMzOSw1Mi45NDksMTE5LjAxMSw1OS42ODNDMjMwLjA4NCw0NTcuMzY3LDE5OC4yODgsNDcwLjY5LDE2NC41Myw0NzAuNjl6IE00ODAuNjI4LDQxNC43OTcgICAgYy0wLjg2NywwLjg2Ny0xLjg5NSwxLjEwMy0zLjA1MSwwLjcwNWwtOTIuNjQ4LTMxLjgzNmMtMS42MDktMC41NTMtMy4yODMtMC44MjctNC45NTEtMC44MjdjLTIuNDU5LDAtNC45MDksMC41OTUtNy4xMjYsMS43NjkgICAgYy0yNi40NTMsMTMuOTk0LTU2LjM0NSwyMS40MTYtODYuNDQ3LDIxLjQ2MmMtMC4wOTksMC0wLjE4OSwwLTAuMjg4LDBjLTEwMC44NjMsMC0xODQuMTc2LTgxLjkzNC0xODUuNzc0LTE4Mi43NzMgICAgYy0wLjgwNS01MC43ODUsMTguNTEzLTk4LjUxNCw1NC4zOTQtMTM0LjM5NWMzNS44ODEtMzUuODgxLDgzLjYxOC01NS4xOTIsMTM0LjM5Ni01NC4zOTIgICAgYzEwMC45MzYsMS42MDEsMTgyLjkyNiw4NS4wNjgsMTgyLjc3LDE4Ni4wNjNjLTAuMDQ3LDMwLjEwMi03LjQ2OCw1OS45OTUtMjEuNDYxLDg2LjQ0NmMtMS45NywzLjcyMy0yLjMxLDguMDk1LTAuOTQyLDEyLjA3OCAgICBsMzEuODM1LDkyLjY0OEM0ODEuNzMyLDQxMi45MDUsNDgxLjQ5NCw0MTMuOTMyLDQ4MC42MjgsNDE0Ljc5N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM3Ni44OTIsMTM5LjUxMmgtMTgxLjU2Yy04LjQxNiwwLTE1LjIzOCw2LjgyMy0xNS4yMzgsMTUuMjM4YzAsOC40MTYsNi44MjMsMTUuMjM4LDE1LjIzOCwxNS4yMzhoMTgxLjU2ICAgIGM4LjQxNiwwLDE1LjIzOC02LjgyMywxNS4yMzgtMTUuMjM4QzM5Mi4xMywxNDYuMzM1LDM4NS4zMDgsMTM5LjUxMiwzNzYuODkyLDEzOS41MTJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzYuODkyLDIwMi4xODNoLTE4MS41NmMtOC40MTYsMC0xNS4yMzgsNi44MjMtMTUuMjM4LDE1LjIzOHM2LjgyMywxNS4yMzgsMTUuMjM4LDE1LjIzOGgxODEuNTYgICAgYzguNDE2LDAsMTUuMjM4LTYuODIzLDE1LjIzOC0xNS4yMzhTMzg1LjMwOCwyMDIuMTgzLDM3Ni44OTIsMjAyLjE4M3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMwNy4wMDQsMjY0Ljg1MkgxOTUuMzMxYy04LjQxNiwwLTE1LjIzOCw2LjgyMy0xNS4yMzgsMTUuMjM4YzAsOC40MTYsNi44MjMsMTUuMjM4LDE1LjIzOCwxNS4yMzhoMTExLjY3MiAgICBjOC40MTYsMCwxNS4yMzgtNi44MjMsMTUuMjM4LTE1LjIzOEMzMjIuMjQxLDI3MS42NzUsMzE1LjQyLDI2NC44NTIsMzA3LjAwNCwyNjQuODUyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" width='58%' /></Button>
                        </div>
                    </Card.Body>
                    </Card>
                    </div>

                </Row>
                </div>
            

        )
}

export default Postall201;
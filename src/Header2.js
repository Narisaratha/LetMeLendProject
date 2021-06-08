
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav } from 'react-bootstrap';
import './header2.css';
import {Link} from 'react-router-dom'
import ty from './Home/home_img/ty.jpg'
import chaticon from './Home/home_img/chaticon.svg'
import React, {Component, useState} from 'react'
const bootstrap = require('bootstrap')


export default class Header2 extends Component {
    render(){

        const username = "Narinaja"


        return(
                <div className="heder2_app__header">
                     <Link to="/home2"><a className="text">ยืมหน่อย</a></Link>          
                    <Form>
                    <div className="heder2_inputsearch">
                        <Form.Group controlId="inputsearch">
                            <Form.Control type="text" placeholder="Search" />
                        </Form.Group>
                    </div>
                   
                        <Button href="/search" className="header2_submit" variant="outline-info"  type="submit">
                        ค้นหา
                        </Button>
                  
                    </Form> 
                        <a href="/profile" >
                        <button className="heder2_profileheader">
                        <img className="header2_user_img" src={ty} width='10%' height='10%' />
                        <div className="header2_username">{username}</div>
                        </button>  
                        </a>
                       
                        <a href="/"><img className="header2_logoutheader" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik01MTAuMzcxLDIyNi41MTNjLTEuMDg4LTIuNjAzLTIuNjQ1LTQuOTcxLTQuNjI5LTYuOTU1bC02My45NzktNjMuOTc5Yy04LjM0MS04LjMyLTIxLjgyNC04LjMyLTMwLjE2NSwwICAgICBjLTguMzQxLDguMzQxLTguMzQxLDIxLjg0NSwwLDMwLjE2NWwyNy41ODQsMjcuNTg0SDMyMC4wMTNjLTExLjc5NywwLTIxLjMzMyw5LjU1Ny0yMS4zMzMsMjEuMzMzczkuNTM2LDIxLjMzMywyMS4zMzMsMjEuMzMzICAgICBoMTE5LjE2OGwtMjcuNTg0LDI3LjU4NGMtOC4zNDEsOC4zNDEtOC4zNDEsMjEuODQ1LDAsMzAuMTY1YzQuMTYsNC4xODEsOS42MjEsNi4yNTEsMTUuMDgzLDYuMjUxczEwLjkyMy0yLjA2OSwxNS4wODMtNi4yNTEgICAgIGw2My45NzktNjMuOTc5YzEuOTg0LTEuOTYzLDMuNTQxLTQuMzMxLDQuNjI5LTYuOTU1QzUxMi41MjUsMjM3LjYwNiw1MTIuNTI1LDIzMS43MTgsNTEwLjM3MSwyMjYuNTEzeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMzYyLjY4LDI5OC42NjdjLTExLjc5NywwLTIxLjMzMyw5LjU1Ny0yMS4zMzMsMjEuMzMzdjEwNi42NjdoLTg1LjMzM1Y4NS4zMzNjMC05LjQwOC02LjE4Ny0xNy43MjgtMTUuMjExLTIwLjQzNyAgICAgbC03NC4wOTEtMjIuMjI5aDE3NC42MzV2MTA2LjY2N2MwLDExLjc3Niw5LjUzNiwyMS4zMzMsMjEuMzMzLDIxLjMzM3MyMS4zMzMtOS41NTcsMjEuMzMzLTIxLjMzM3YtMTI4ICAgICBDMzg0LjAxMyw5LjU1NywzNzQuNDc3LDAsMzYyLjY4LDBIMjEuMzQ3Yy0wLjc2OCwwLTEuNDUxLDAuMzItMi4xOTcsMC40MDVjLTEuMDAzLDAuMTA3LTEuOTIsMC4yNzctMi44OCwwLjUxMiAgICAgYy0yLjI0LDAuNTc2LTQuMjY3LDEuNDUxLTYuMTY1LDIuNjQ1Yy0wLjQ2OSwwLjI5OS0xLjA0NSwwLjMyLTEuNDkzLDAuNjYxQzguNDQsNC4zNTIsOC4zNzYsNC41ODcsOC4yMDUsNC43MTUgICAgIEM1Ljg4LDYuNTQ5LDMuOTM5LDguNzg5LDIuNTMxLDExLjQ1NmMtMC4yOTksMC41NzYtMC4zNjMsMS4xOTUtMC41OTcsMS43OTJjLTAuNjgzLDEuNjIxLTEuNDI5LDMuMi0xLjY4NSw0Ljk5MiAgICAgYy0wLjEwNywwLjY0LDAuMDg1LDEuMjM3LDAuMDY0LDEuODU2Yy0wLjAyMSwwLjQyNy0wLjI5OSwwLjgxMS0wLjI5OSwxLjIzN1Y0NDhjMCwxMC4xNzYsNy4xODksMTguOTIzLDE3LjE1MiwyMC45MDcgICAgIGwyMTMuMzMzLDQyLjY2N2MxLjM4NywwLjI5OSwyLjc5NSwwLjQyNyw0LjE4MSwwLjQyN2M0Ljg4NSwwLDkuNjg1LTEuNjg1LDEzLjUyNS00Ljg0M2M0LjkyOC00LjA1Myw3LjgwOC0xMC4wOTEsNy44MDgtMTYuNDkxICAgICB2LTIxLjMzM0gzNjIuNjhjMTEuNzk3LDAsMjEuMzMzLTkuNTU3LDIxLjMzMy0yMS4zMzNWMzIwQzM4NC4wMTMsMzA4LjIyNCwzNzQuNDc3LDI5OC42NjcsMzYyLjY4LDI5OC42Njd6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" width='5%' height='5%' />
                        </a>
                      
        </div> 
        )


    }
}














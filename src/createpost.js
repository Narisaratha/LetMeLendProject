import React from 'react'
import {Button} from 'react-bootstrap'

export default class Create extends React.Component {

    render() {

        return (
            <>
            <h1>อัลกอแยกไปแสดงหน้าขอยืม หรือให้ยืม</h1>

            <Button href="/createpost2">สร้างโพสต์ขอยืม</Button>
            <Button href="/createpost3">สร้างโพสต์ให้ยืม</Button>
            </>
        )
    }
}
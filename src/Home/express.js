import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Row,Nav,container } from 'react-bootstrap';
import expressicon from './home_img/expressicon.svg'
import './express.css'

import Test from './expressdb'



 function Express() {

    const price = "20"
    const topicName = "ขอยืมที่ชาร์จแบตซัมซุงหน่อยจร้าเพิ่นๆทุกคลล"
    const getdate = "10/05/2564"
    const keyword = "ที่ชาร์จแบต"

    const price1 = "50"
    const topicName1 = "ขอยืมเครื่องคิดเลขใช้สูตรได้ด่วนๆๆค้า"
    const getdate1 = "10/05/2564"
    const keyword1 = "เครื่องคิดเลข"

    const price2 = "25"
    const topicName2 = "อยากได้รีโมตแอร์ใช้ตอนนี้"
    const getdate2 = "10/05/2564"
    const keyword2 = "รีโมตแอร์"

    const price3 = "90"
    const topicName3 = "ใครมีโน้ตบุ๊คให้ยืมบ้างงงงครับ"
    const getdate3 = "11/05/2564"
    const keyword3 = "โน้ตบุ๊ค"

    const price4 = "20"
    const topicName4 = "ยืมกะละมังซักผ้าหน่อยจ้า"
    const getdate4 = "11/05/2564"
    const keyword4 = "กะละมัง"

    const price5 = "15"
    const topicName5 = "ขอยืมไม้ถูพื้นค่ะ"
    const getdate5 = "11/05/2564"
    const keyword5 = "ไม้ถูพื้น"

    const price6 = "15"
    const topicName6 = "ยืมเตารีดหน่อยจ้าาาาาา"
    const getdate6 = "11/05/2564"
    const keyword6 = "เตารีด"

    const price7 = "20"
    const topicName7 = "แถวB4มีใครมีรองเท้าผ้าใบให้ยืมบ้าง"
    const getdate7 = "11/05/2564"
    const keyword7 = "รองเท้าผ้าใบ"

    const price8 = "15"
    const topicName8 = "มีใครมีปลั๊กสามตาบ้างคะ"
    const getdate8 = "12/05/2564"
    const keyword8 = "ปลั๊กสามตา"

    
    return (
          
        <div className="bodyex">
            <div className="ex_container">
            
            <img className="ex_head_icon" src={expressicon} width='5%' />
           
            <div className="textex">
            ขอยืมด่วน <i><font color="red">(ภายใน 24 ชม.)</font></i>
           </div>
           </div>

           <hr width='100%' size='5' color='#770088'></hr>
       
           <div className="order">
                <div className="exorder">
                    <Row>
                    <div className="ex_price"><Col><i>{price} บาท</i></Col></div>
                    <div className="ex_topic"><Col><b><a href="/post"><font color="red">{topicName}</font><font color="gray"><i>  ({keyword})</i></font></a></b></Col></div>
                    <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate}</i></Col></div>
                    </Row> 
                </div>
                <div className="exorder">
                    <Row>
                    <div className="ex_price"><Col><i>{price1} บาท</i></Col></div>
                    <div className="ex_topic"><Col><b><a href="/post"><font color="red">{topicName1}</font><font color="gray"><i>  ({keyword1})</i></font></a></b></Col></div> 
                    <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate1}</i></Col></div>
                    </Row> 
                </div>
                <div className="exorder">
                    <Row>
                    <div className="ex_price"><Col><i>{price2} บาท</i></Col></div>
                    <div className="ex_topic"><Col><b><a href="/post"><font color="red">{topicName2}</font><font color="gray"><i>  ({keyword2})</i></font></a></b></Col></div>
                    <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate2}</i></Col></div>
                    </Row> 
                </div>
                <div className="exorder">
                    <Row>
                    <div className="ex_price"><Col><i>{price3} บาท</i></Col></div>
                    <div className="ex_topic"><Col><b><a href="/post"><font color="red">{topicName3}</font><font color="gray"><i>  ({keyword3})</i></font></a></b></Col></div>
                    <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate3}</i></Col></div>
                    </Row> 
                </div>  
                <div className="exorder">
                    <Row>
                    <div className="ex_price"><Col><i>{price4} บาท</i></Col></div>
                    <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName4}</font><font color="gray"><i>  ({keyword4})</i></font></a></b></Col></div>
                    <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate4}</i></Col></div>
                    </Row> 
                </div>  
                <div className="exorder">
                    <Row>
                    <div className="ex_price"><Col><i>{price5} บาท</i></Col></div>
                    <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName5}</font><font color="gray"><i>  ({keyword5})</i></font></a></b></Col></div>
                    <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate5}</i></Col></div>
                    </Row> 
                </div>   
                <div className="exorder">
                    <Row>
                    <div className="ex_price"><Col><i>{price6} บาท</i></Col></div>
                    <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName6}</font><font color="gray"><i>  ({keyword6})</i></font></a></b></Col></div>
                    <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate6}</i></Col></div>
                    </Row> 
                </div>  
                <div className="exorder">
                    <Row>
                    <div className="ex_price"><Col><i>{price7} บาท</i></Col></div>
                    <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName7}</font><font color="gray"><i>  ({keyword7})</i></font></a></b></Col></div>
                    <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate7}</i></Col></div>
                    </Row> 
                </div>  
                <div className="exorder">
                    <Row>
                    <div className="ex_price"><Col><i>{price8} บาท</i></Col></div>
                    <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName8}</font><font color="gray"><i>  ({keyword8})</i></font></a></b></Col></div>
                    <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate8}</i></Col></div>
                    </Row> 
                </div>     
                 
           </div>
        </div>
    );
}


export default Express;
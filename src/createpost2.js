import './createpost2.css';
import Header from './Header'
import {React , Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Row,Col } from 'react-bootstrap'
import axios from 'axios'

export default class Createpost2 extends Component {
  constructor(){
    super()
    this.state = {
      topicName: '',
      itemName: '',
      description: '',
      reward: '',
      getdate: '',
      givedate: '',
      place: '',
      express: false,
      mode: 'get'
    }
      this.changetopicName = this.changetopicName.bind(this)
      this.changeitemName = this.changeitemName.bind(this)
      this.changedescription = this.changedescription.bind(this)
      this.changereward = this.changereward.bind(this)
      this.changegetdate = this.changegetdate.bind(this)
      this.changegivedate = this.changegivedate.bind(this)
      this.changeplace = this.changeplace.bind(this)
      this.changeexpress = this.changeexpress.bind(this)
      this.changemode = this.changemode.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }

  changetopicName(event) {
    this.setState({
      topicName:event.target.value
    })
  }
  changeitemName(event) {
    this.setState({
      itemName:event.target.value
    })
  }
  changedescription(event) {
    this.setState({
      description:event.target.value
    })
  }
  changereward(event) {
    this.setState({
      reward:event.target.value
    })
  }
  changegetdate(event) {
    this.setState({
      getdate:event.target.value
    })
  }
  changegivedate(event) {
    this.setState({
      givedate:event.target.value
    })
  }
  changeplace(event) {
    this.setState({
      place:event.target.value
    })
  }
  changeexpress(event) {
    this.setState({
      express:event.target.value
    })
  }
  changegettype(event) {
    this.setState({
      gettype:event.target.value
    })
  }
  changemode(event) {
    this.setState({
      mode:event.target.value
    })
  }
  onSubmit(event) {
    this.props.history.push('./home2')
    event.preventDefault()

    const created = {
      topicName: this.state.topicName,
      itemName: this.state.itemName,
      description: this.state.description,
      department: this.state.department,
      postID: this.state.postID,
      reward: this.state.reward,
      getdate: this.state.getdate,
      givedate: this.state.givedate,
      place: this.state.place,
      express: this.state.express,
      mode: this.state.mode
    }

    axios.post('http://localhost:4000/user/create-user', created)
      .then(response => console.log(response.data))

      this.setState({
        topicName: '',
        itemName: '',
        description: '',
        reward: '',
        getdate: '',
        givedate: '',
        place: '',
        express: false,
        mode: 'get'
      })

  }




  render(){
  return (
    <div className="create2_app">    
      <div >
        <Header />
        </div>

      <div className="create2_body_head">ขอยืม</div>

      <div className="create2_body">
        <Form onSubmit={this.onSubmit}>
          <div className="create2_picture">
            
          </div>
        <Row>
         
          
          <div className="create2_upload">
          เพิ่มรูปภาพ
          <input className="uploadimg_input" type="file" />
          <button className="uploadimg" type="submit">Upload</button>
          </div>
         
        <Col>
        <Row>
          <div className="create2_topic">
            <Form.Group controlID="topic">
              <Form.Label>หัวข้อโพสต์</Form.Label>

              <Form.Control type="text"
              placeholder="ระบุหัวข้อ"
              onChange={this.changetopicName}
              value={this.state.topicName} />

            </Form.Group>
          </div>
          </Row>
          <Row>
          <div className="create2_item">
            <Form.Group controlID="item">
              <Form.Label>สิ่งของที่ต้องการยืม</Form.Label>

              <Form.Control type="text"
              placeholder="ระบุสิ่งของ เช่น รองเท้า, เนคไท, พัดลม, ตุ๊กตา"
              onChange={this.changeitemName}
              value={this.state.itemName} />
            </Form.Group>
          </div>
          </Row>
          </Col>
          </Row>

          <div className="create2_detail">
            <Form.Group controlID="detail">
              <Form.Label>รายละเอียดเพิ่มเติม</Form.Label>

              <Form.Control as="textarea" rows={3}
              type="text" placeholder="เพิ่มรายละเอียด"
              onChange={this.changedescription}
              value={this.state.description}/>

            </Form.Group>
          </div>
          <div className="create2_reward">
            <Form.Group controlID="reward">
              <Form.Label>ค่าตอบแทน</Form.Label>

              <Form.Control type="text"
              placeholder="เพิ่มค่าตอบแทน (เหรียญ)"
              onChange={this.changereward}
              value={this.state.reward} />

            </Form.Group>
          </div>
          <div className="create2_date">
            <Form.Group controlID="date">
              
              <div className="create2_getdate">
                  <Form.Label>วันที่ต้องการยืม</Form.Label>

                  <Form.Control type="date"
                  onChange={this.changegetdate}
                  value={this.state.getdate} />

              </div>
              <div className="create2_givedate">
                  <Form.Label>วันที่ต้องการคืน</Form.Label>

                  <Form.Control type="date"
                  onChange={this.changegivedate}
                  value={this.state.givedate} />

              </div>
          </Form.Group>  
          </div>


          <div className="create2_place">
            <Form.Group controlID="place">
              <Form.Label>สถานที่แลกเปลี่ยน</Form.Label>

              <Form.Control type="text"
              placeholder="ระบุสถานที่"
              onChange={this.changeplace}
              value={this.state.place}/>

            </Form.Group>
          </div>
          <div className="create2_highlightPost">
            <Form.Group controlID="highlightPost">
              <Form.Label>ท่านต้องการประกาศบนคำขอยืมพิเศษหรือไม่</Form.Label>
              <div className="create2_radioCon">
                <Form.Check inline type="radio" label="ต้องการ" name="conRadio" id="conRadioY"
                onChange={this.changeexpress}
                value={true} />

                <Form.Check inline type="radio" label="ไม่ต้องการ" name="conRadio" id="conRadioN"
                onChange={this.changeexpress}
                value={false}/>

              </div>
              <div className="create2_warning">
                ***หากเลือกการขอยืมแบบพิเศษต้องกำหนดค่าตอบแทนขั้นต่ำ 10 เหรียญ
              </div>
            </Form.Group>
          </div>
          
            <Button className="createbut2" size="lg" type="submit" value='submit'>
              สร้างโพสต์
            </Button>
      
        </Form>
      </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}
}


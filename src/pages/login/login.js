import React ,{ Component }  from "react";
import { Form ,Input,Icon,Button} from "antd";
import "./index.less"
const { Item } = Form
class Login extends Component{
    handleSubmit = (e)=>{
        e.preventDefault()
         this.props.form.validateFields((err,values)=>{
             if (!err) {
                 console.log('Received values of form: ', values);
             }
         })

    }
    validatePwd = (rule,value,call) =>{
        if(value.length < 4){
            call("密码长度必须大于四位")
        }
        return call()
    }


    render() {
        const { getFieldDecorator }  = this.props.form
         return<div className="login-wrap">
            <p>
                React项目:后台管理系统
            </p>
            <Form className="login-form" onSubmit={this.handleSubmit} wrapperCol={{xs:{span:24},sm:{span:6,offset:9}}}>
                <Item>
                    {getFieldDecorator("username",{
                        rules:[
                            {required:true,message:"请输入用户名"},
                            {min:4,message:"最小长度是4位"},
                            {max:16,message:"最大长度是16位"}
                            ]
                    })(<Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入用户名"
                    />)}
                </Item>
                <Item>
                    { getFieldDecorator("password",{
                        rules:[
                            {required:true,message:"请输入你的密码"},
                            {validator:this.validatePwd}]
                    })(
                        <Input
                            prefix={<Icon type="lock"  style={{color:'rgba(0,0,0,0.25)'}} />}
                            placeholder="请输入你的密码"
                        />
                    )}
                </Item>
                <Item wrapperCol={{ span: 6, offset: 9 }}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Item>
            </Form>
        </div>
    }
}

export default Form.create()(Login)
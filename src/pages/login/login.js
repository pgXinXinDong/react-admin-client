import React ,{ Component }  from "react";
import { Form ,Input,Icon,Button,message} from "antd";
import { connect } from "react-redux"
import {reqLogin} from "@/api/index";
import "./index.less"
const { Item } = Form
class Login extends Component{
    state = {
        loading:false
    }
    enterLoading = ()=>{
        this.setState({
            loading:true
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
         this.props.form.validateFields((err,values)=>{
             if (err) {
                 return
             }
             this.setState({
                 loading:true
             })
             reqLogin()
            // 判断权限


            localStorage.setItem("user2",JSON.stringify(values))


         })

    }
    validatePwd = (rule,value,call) =>{
        if(typeof  value  == 'undefined' || value.length < 4){
            call("密码长度必须大于四位")
        }
         call()
    }


    render() {
        const { getFieldDecorator }  = this.props.form
        const tailFromItemLayout  = {
            wrapperCol:{
                lg:{
                    span:24
                },
                sm:{
                    span:12
                }
            }
        }
         return<div className="login-wrap">
            <p>
                React项目:后台管理系统
            </p>
            <Form className="login-form" onSubmit={this.handleSubmit} {...tailFromItemLayout} >
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
                <Item>
                    <Button type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Item>
            </Form>
        </div>
    }
}
const mapStatetoProps =(state)=>{
    return {state:state}
};

const mapdispatchtoProps = ()=>{
    return{
        login:function (dd) {
            
        }
    }
}

export default @connect(mapStatetoProps,mapdispatchtoProps)
Form.create()(Login)
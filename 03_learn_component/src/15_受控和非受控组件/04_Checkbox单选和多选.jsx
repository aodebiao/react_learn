import React, {Component} from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            username:'',
            password:'',
            isAgree:true,
            hobbies:[
                {value:'sing',text:'唱',isChecked:false},
                {value:'dance',text:'跳',isChecked:false},
                {value:'rap',text:'rap',isChecked:false},
            ],
        }
    }
    handleSubmitClick(e){
        // 阻止默认事件,刷新浏览器
        e.preventDefault()
        // 获取表单数据,
        console.log(this.state.username,this.state.password)
        const hobbies = this.state.hobbies.filter(item => item.isChecked).map(item=>item.value);
        console.log('获取爱好:',hobbies)
        // 提交

    }


    handleInputChange(e){
        const keyName =
        this.setState({[e.target.name]: e.target.value})
    }

    handleAgreeChange(e){
        console.log(e.target.checked)
        this.setState({isAgree:e.target.checked})
    }

    handleHobbiesChange(e,index){
        const hobbies = [...this.state.hobbies]
        hobbies[index].isChecked = e.target.checked
        this.setState({hobbies})

    }
    render() {
        const {username,password,isAgree,hobbies} = this.state
        return (
            <div>
                   <form onSubmit={e => this.handleSubmitClick(e)}>
                       {/*当点击用户里面的文本时(用户名),input框会自动变成选中状态,htmlFor(原生html中,是for属性)要与 input的id对应 */}
                     <div>
                         <label htmlFor='username'>
                             用户名: <input id= 'username' value={username}
                                            onChange={e => this.handleInputChange(e)}
                                            type="text"name='username'/>
                         </label>
                         <label htmlFor='password'>
                             密码: <input id='password' value={password}
                                          onChange={e => this.handleInputChange(e)} type="password" name='password'/>
                         </label>
                     </div>
                       <label htmlFor="agree">
                           <input id='agree' type="checkbox"
                                  checked={isAgree}
                                  onChange={e => this.handleAgreeChange(e)}/>
                           同意协议
                       </label>

                       {/*多选*/}
                       <div>
                           您的爱好:
                           {
                              hobbies.map((item,index)=>{
                                  return (
                               <label htmlFor={item.value} key={item.value}>
                                      <input type="checkbox" id={item.value}
                                             checked={item.isChecked}
                                      onChange={e => this.handleHobbiesChange(e,index)}/>
                                   <span>{item.text}</span>
                               </label>

                                  )
                              })
                           }
                       </div>
                       
                       {/*select*/}
                       <select name="" id="">
                           <option value="apple">苹果</option>
                           <option value="orange">橘子</option>
                           <option value="banana">香蕉</option>
                       </select>

                       <div>
                           <button type='submit'>注册</button>
                       </div>
                   </form>
            </div>
        );
    }
}

export default App;
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo,IADDAction,ISetVisibilityAction,ITOGGLEAction,setVisibilityFilter, toggleTodo,  } from '../actions';
import {IStoreState,TODO, VisibleFilters,  } from '../types';

// 创建类型接口
export interface IProps {
    state: IStoreState,
    add: (text: string) => IADDAction,
    toggle: (id: number) => ITOGGLEAction,
    setFilter: (filter: VisibleFilters) => ISetVisibilityAction
}


let input: HTMLInputElement | null;
// 使用接口代替 PropTypes 进行类型校验
class Counter extends React.Component<IProps> {
    // constructor(props:IProps){
    //     super(props)
    //     this.state={
    //         temp
    //     }
    // }

  public handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input!.value.trim()) {
            return;
        }
        this.props.add(input!.value);
        input!.value = '';
    }

    // public handleToggle=(e:React.MouseEvent)=>(id:number)=>{
    //     this.props.toggle(id);
    // }

    public render() {

        const { state, toggle, setFilter } = this.props;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input ref={node => input = node} />
                    <button type="submit">添加</button>
                </form>
                {state.dataList.map((elem: TODO) => {
                    switch (state.visibilityFilter) {
                        case 'SHOW_COMPLETED':
                            return elem.status ?(<li key={elem.id} style={{ textDecoration: 'line-through' }} onClick={e => toggle(elem.id)}>{elem.text}</li>):''
                        case "SHOW_ACTIVE":
                            return !elem.status ? (<li key={elem.id} onClick={e => toggle(elem.id)}>{elem.text}</li>):''
                        default:
                            return (<li key={elem.id} style={{ textDecoration: elem.status ? 'line-through' : 'none' }} onClick={e => toggle(elem.id)}>{elem.text}</li>)
                    }

                })}
                <div>
                    <button onClick={e => setFilter(VisibleFilters.SHOW_ALL)}>all</button>
                    <button onClick={e => setFilter(VisibleFilters.SHOW_ACTIVE)}>active</button>
                    <button onClick={e => setFilter(VisibleFilters.SHOW_COMPLETED)}>completed</button>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state: IStoreState) => ({
    state
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    add: (text: string) => dispatch(addTodo(text)),
    setFilter: (filter: VisibleFilters) => dispatch(setVisibilityFilter(filter)),
    toggle: (id: number) => dispatch(toggleTodo(id)),
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

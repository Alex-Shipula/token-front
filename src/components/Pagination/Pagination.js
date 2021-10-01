import React, { useState,Component } from "react"
//styles
import './Pagination.css'
class Pagination extends Component {
    
    constructor(props) {
        super(props);
        let pageCountArr =[];
        for (var i = 0; i < (this.props.pageCount?this.props.pageCount:0); i++) {
            pageCountArr.push(i);
            // ещё какие-то выражения
         }
         this.state={curPage:(this.props.curPage?this.props.curPage:1),
            pageCount:(this.props.pageCount?this.props.pageCount:0),
           pageCountArr: pageCountArr}
            ;

        
    } 
    componentDidMount() {
        
        let pageCountArr =[];
        for (var i = 0; i < (this.props.pageCount?this.props.pageCount:0); i++) {
            pageCountArr.push(i);
            // ещё какие-то выражения
         }
         this.setState({curPage:(parseInt(this.props.curPage)?parseInt(this.props.curPage):1)});
            this.setState( {pageCount:(this.props.pageCount?this.props.pageCount:0)});
            this.setState({pageCountArr: pageCountArr});

        
    }
    componentWillReceiveProps(nextProps) {
        let pageCountArr =[];
        for (var i = 0; i < (nextProps.pageCount?nextProps.pageCount:0); i++) {
            pageCountArr.push(i);
            // ещё какие-то выражения
         }
         this.setState( {curPage:(parseInt(nextProps.curPage)?parseInt(nextProps.curPage):1)});
         this.setState( {pageCount:(nextProps.pageCount?nextProps.pageCount:0)});
         this.setState( {pageCountArr: pageCountArr});
           
      }
    
 render(){
    return(
        <div className="container pagi">
            <nav aria-label="...">
                <ul className="pagination pagination-sm">
                {this.state.pageCountArr.map((page, i) => {  
                           
                            if((i<4)||(i>(this.state.pageCount-4))||((i>(this.state.curPage-3))&&(i<(this.state.curPage+3)))){
                            return (
                                <li className={((i+1)==this.state.curPage)?"page-item disabled":"page-item"} >
                            <a onClick={(e) => {e.preventDefault(); this.props.pageClick(e.target.innerHTML);}} className="page-link" href="#" tabindex="-1" >{(i+1)}</a>
                        </li>
                                
                                ) 
                            }
                            else if((i>4)&&(i<(this.state.pageCount-8))&&((i<(this.state.curPage-7))||(i>(this.state.curPage+7)))){
                                return (
                                    ""
                                    ) 
                            }
                            else{
                                return (
                                    "."
                                    ) 
                            }
                            
        })}
                    
                </ul>
            </nav>
        </div>
    )
}
}

export default Pagination
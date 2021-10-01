import React, { useState,Component } from "react"
class Profile extends Component {
    constructor(props) {
        super(props);
        

        
    } 
    componentDidMount(props) {
        
        
        
    }
    componentWillReceiveProps(nextProps) {
       
           
      }
    
 render(){
    return(
        <div className="container topContainer">
            <div className="row topConFirst">
                <div className="col-md mydogsLeft">
                    <div className="logo">
                        <img src="./img/my-profile-logo.png" alt=""></img>
                    </div>
                    <div className="nameOfProfile">
                        <div className="profName">Name of profile</div>
                        <div className="profStatus">Status</div>
                    </div>
                </div>
                <div className="col-md d-flex justify-content-end align-items-center">
                    <a href="#" className="gradientButton">Profile`s dogs</a>
                    <a href="#" className="disable">Dogs for sale</a>
                </div>
            </div>
            <div className="row topConDrops">
                <div className="col-md d-flex">
                    <div style={((((this.props.currentUser==undefined)?0:this.props.currentUser)==0)?{}:{display:"none"})} className="searchBox">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text"  onChange={(e) => {e.preventDefault(); this.props.changeName(e.target.value);}} className="form-control" placeholder="Username" aria-label="Username"
                                    aria-describedby="basic-addon1"/>
                            </div>
                        </form>
                    </div>
                    {/* <!-- Dropdown --> */}
                    <div className="dropdown show filterShow">
                        
                        <select onChange={(e) => {e.preventDefault(); this.props.changeBreed(e.target.value);}} name="selectbreed" id="BodyContent_electbreed" class="rounded-control sorting-select filter-breed">
	<option value="">All Breeds</option>
	<option value="Basenji">Basenji</option>
	<option value="Beagle">Beagle</option>
	<option value="Border Collie">Border Collie</option>
	<option value="Boxer">Boxer</option>
	<option value="Corgi">Corgi</option>
	<option value="Dachshund">Dachshund</option>
	<option value="French Bulldog">French Bulldog</option>
	<option value="German Shepard">German Shepard</option>
	<option value="Golder Retriever">Golder Retriever</option>
	<option value="Grey Wolf">Grey Wolf</option>
	<option value="Hellhound">Hellhound</option>
	<option value="Husky">Husky</option>
	<option value="Labrador">Labrador</option>
	<option value="Labrador BK">Labrador BK</option>
	<option value="Maltese">Maltese</option>
	<option value="Pitbull terrier">Pitbull terrier</option>
	<option value="Poodle">Poodle</option>
	<option value="Pug">Pug</option>
	<option value="Rottweiler">Rottweiler</option>
	<option value="Schnauzer">Schnauzer</option>
	<option value="Shiba Inu">Shiba Inu</option>
	<option value="St. Bernard">St. Bernard</option>
	<option value="Yorkshire Terrier">Yorkshire Terrier</option>
</select>
<select onChange={(e) => {e.preventDefault(); this.props.changeGen(e.target.value);}} class="rounded-control sorting-select filter-generation ">
                    <option value="-1">All Gens</option>
                    <option value="0">Gen: 0</option>
                    <option value="1">Gen: 1</option>
                    <option value="2">Gen: 2</option>
                    <option value="3">Gen: 3</option>
                    <option value="4">Gen: 4</option>
                    <option value="5">Gen: 5</option>
                </select>
                <select onChange={(e) => {e.preventDefault(); this.props.changeNFT(e.target.value);}} class="rounded-control sorting-select filter-generation ">
                    <option value="-1">All Dogs</option>
                    <option value="0">Not in NFT</option>
                    <option value="1">In NFT</option>
                    
                </select>
                    </div>

                </div>
                <div className="col-md d-flex justify-content-end">
                    <div className="dropdown show">
                       
                    </div>
                </div>
            </div>
        </div>
    )
 }

}

export default Profile
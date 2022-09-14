
const HouseItem = (imgUrl) => {
    return(
        <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
                <img src={imgUrl.imgUrl} alt="House"/>
            </div>
        </div>
    )
};

export default HouseItem;
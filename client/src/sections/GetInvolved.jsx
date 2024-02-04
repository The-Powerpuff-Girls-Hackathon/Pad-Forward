import privacyImage from "../../public/images/privacy.png";
import deliveryImage from "../../public/images/delivery.png";
import supportImage from "../../public/images/support.png";
import "./GetInvolved.scss";

const GetInvolved = ({ data }) => {
    const { firstTitle, firstDescription, secondTitle, secondDescription, thirdTitle, thirdDescription } = data;
    return (
        <>
            <div className="summary-board">
                <div className="content-row">
                    <div
                        className="image"
                        style={{ backgroundImage: `url(${privacyImage})` }}
                    ></div>
                    <div className="text">
                        <h2>{firstTitle}</h2>
                        <p>{firstDescription}</p>
                    </div>
                </div>
                <div className="content-row reverse">
                    <div className="text">
                    <h2>{secondTitle}</h2>
                    <p>{secondDescription}</p>
                    </div>
                    <div
                        className="image"
                        style={{ backgroundImage: `url(${deliveryImage})` }}
                    ></div>
                </div>
                <div className="content-row">
                    <div
                        className="image"
                        style={{ backgroundImage: `url(${supportImage})` }}
                    ></div>
                    <div className="text">
                    <h2>{thirdTitle}</h2>
                    <p>{thirdDescription}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetInvolved;
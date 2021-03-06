import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./MentorRequestCardStyles";
import MentorRequest from "../../../types/MentorRequest";
import GlobalStyles from "../../GlobalStyles";
import GoogleMapsReact from 'google-map-react';
type Props = {
    request: MentorRequest
};
type State = {};

export default class MentorRequestCard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Link className={cx( GlobalStyles.FLAT_LINK )} to={`/request/${this.props.request.id}`}>
                <div className={cx( Styles.mentorReqCardStyles )}>
                    <h2>{this.props.request.name}</h2>
                    <div style={{ height:"350px", width:"100%" }}>
                        <GoogleMapsReact
                            bootstrapURLKeys={{ key:"AIzaSyBZVlIJthRpJ0XyJdBJ-XuJGkJgE5INT-g" }}
                            defaultCenter={this.props.request.location}
                            defaultZoom={10}
                        >
                        </GoogleMapsReact>
                    </div>
                    <p>{this.props.request.description}</p>
                    <hr/>
                    <section>
                        <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                            <h6>A Request from <strong>Placeholder Name</strong></h6>
                        </div>
                    </section>
                </div>
            </Link>
        )
    }

}

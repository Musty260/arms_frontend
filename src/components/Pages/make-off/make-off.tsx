import React from "react";

import { cx } from "emotion";
import Styles from "./make-offStyles";
import Template from "../Template/Template";
import { Form, Button } from "react-bootstrap";
import AuthCard from "../../Widgets/AuthCard/AuthCard";

type Props = {};
type State = {};



export default class makeOff extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <div className={cx(Styles.wrap)}>
                    <div className={cx(Styles.divtest)}>
                        <p>Make an Offer</p>
                    </div>
                </div>
                <br></br>
                <AuthCard>
                    <div className="ml-auto mr-auto" style={{ display: "table", width: "100%", maxWidth: "600px", minHeight: "60vh" }}>
                        <Form className={cx(Styles.formStyles, "ml-auto mr-auto")}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    placeholder="Enter Name"
                                    id="password_field"
                                    name="password"
                                    type="password"
                                    size="lg"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    placeholder="Enter Email"
                                    id="password_field"
                                    name="password"
                                    type="password"
                                    size="lg"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    placeholder="Enter Subject"
                                    id="password_field"
                                    name="password"
                                    type="password"
                                    size="lg"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Offer</Form.Label>
                                <Form.Control
                                    placeholder="Enter Offer"
                                    id="password_field"
                                    name="password"
                                    type="password"
                                    size="lg"
                                />
                            </Form.Group>
                            <Button size="lg" variant="success">
                                Submit
                    </Button>
                        </Form>
                    </div>
                </AuthCard>
            </Template>
        )
    }

}
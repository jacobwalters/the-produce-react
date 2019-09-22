import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
        EMAIL: email.value,
        NAME: name.value
    });

    return (
    <div className="newsletter__form">
        <input
            ref={node => (name = node)}
            type="text"
            placeholder="Your name"
        />
        <br />
        <input
            ref={node => (email = node)}
            type="email"
            placeholder="Your email"
        />
        <br />
        <button onClick={submit}>
        Submit
        </button>

        {status === "sending" && <div>sending...</div>}
        {status === "error" && (
        <div dangerouslySetInnerHTML={{ __html: message }} />
        )}
        {status === "success" && (
        <div dangerouslySetInnerHTML={{ __html: message }} />
        )}
    </div>
    );
};

export default class Mailchimp extends React.Component {
    render() {
    // Use provided API URL or your own URL for the Mailchimp to work
    const url =
        "";
    return (
        <div className="newsletter">
            <h3>Stay up to date about the humble {this.props.name}</h3>

            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
                )}
            />
        </div>
    );
    }
}

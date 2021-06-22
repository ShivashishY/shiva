import React from 'react'

class ContactForm extends React.Component {

  render() {
    const formStyle = {
      textAlign: 'left'
    }
    const buttonsStyle = {
      margin: '1rem',
      textAlign: 'center',
    }
    return (
      <form style={formStyle} className="form" action={this.props.action} method="post">
        <div>
          <label>Full Name
          <input type="text" name="fullname"/>
          </label>
        </div>
        <div>
          <label>Email
          <input type="email" name="email"/>
          </label>
        </div>
        <div>
          <label>Message
          <textarea name="message" rows="5"></textarea>
          </label>
        </div>
        <ul className="actions" style={buttonsStyle}>
            <li>
              <button type="submit"  className="buttonss">Send Message</button>
            </li>
        </ul>
      </form>
    );
  }
}

export default ContactForm 

import { Form } from "react-bootstrap";

const ProfileForm = ({ email, name, nickname, updated_at }) => {
    
    const updateDate = updated_at.substring(0, 10)
    const updateTime = updated_at.substring(11, 16)

    return (
        <Form style={{margin: "20px 0 50px"}}>
            <Form.Group controlId="name">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" readOnly value={name}/>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Your email</Form.Label>
                <Form.Control type="email" readOnly value={email}/>
            </Form.Group>
            <Form.Group controlId="name">
                <Form.Label>Your nickname</Form.Label>
                <Form.Control type="text" readOnly value={nickname}/>
            </Form.Group>
            <Form.Group controlId="last_update">
                <Form.Label>Last update</Form.Label>
                <Form.Control type="text" readOnly value={`${updateDate} at ${updateTime}`}/>
            </Form.Group>
        </Form>
    )
}

export default ProfileForm;